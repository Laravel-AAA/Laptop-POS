<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Business;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Filesystem\FilesystemAdapter;
use App\Http\Requests\Business\UpdateBusinessRequest;

class BusinessController extends Controller
{
    /**
     * Display the user's business form.
     */
    public function edit(Request $request): Response
    {
        $business = Business::with([
            'users' => function ($query) {
                $query->withTrashed();
            }
        ])->find($request->user()->business_id);
        Gate::authorize('edit', $business);

        // dd(
        //     'Subscribed:',
        //     $business->subscribed(),
        //     'Subscription:',
        //     $business->subscription(),
        //     'Transactions:',
        //     $business->transactions,
        //     'On Trail:',
        //     $business->onTrial(),
        //     'Subscribed OR on Trial:',
        //     $business->subscribedOrOnTrial(),
        //     'Recurring (Active sub and not trail nor grace period):',
        //     $business->subscription()?->recurring(),
        //     'Canceled (Was active sub but has canceled now):',
        //     $business->subscription()?->canceled(),
        //     'Grace period (Canceled but still active until expires):',
        //     $business->subscription()?->onGracePeriod(),
        //     'Past Due (payment failed, customer should update payment method):',
        //     $business->subscription()?->pastDue(),
        //     'Subscribed to Advance:',
        //     $business->subscription()?->hasProduct('pro_01hgty8g40zg8sd39s1ncgq3ha'),
        //     'Subscribed to Enhanced:',
        //     $business->subscription()?->hasProduct('pro_01hgtwypkq83jz2vca3p4gkby8'),
        //     'Subscribed to Basic:',
        //     $business->subscription()?->hasProduct('pro_01hgdf1tk5c8s9msfa15gwbrx2'),
        // );
        // dd('Next billing cycle:', $business->subscription()->nextPayment());
        // dd('paused:', $business->subscription()->paused());
        // dd('pause grace period:',$business->subscription()->onPausedGracePeriod());


        $state = null;
        $subscribedTo = null;
        $lastPayment = null;
        $gracePeriodExpiresAt = null;
        $nextPayment = null;
        if ($sub = $business->subscription()) {
            $lastPayment = $sub->lastPayment();
            $nextPayment = $sub->nextPayment();

            if ($sub->onGracePeriod() || $sub->onPausedGracePeriod()) {
                $gracePeriodExpiresAt = $sub->ends_at;
                $state = 'Grace Period';
            } else if ($sub->canceled())
                $state = 'Canceled';
            else if ($sub->recurring()) {
                $state = 'Recurring';
            } else if ($sub->pastDue())
                $state = 'Past Due';
            else if ($sub->paused())
                $state = 'Paused';

            if ($sub->hasProduct('pro_01hgty8g40zg8sd39s1ncgq3ha'))
                $subscribedTo = 'Advanced';
            else if ($sub->hasProduct('pro_01hgtwypkq83jz2vca3p4gkby8'))
                $subscribedTo = 'Enhanced';
            else if ($sub->hasProduct('pro_01hgdf1tk5c8s9msfa15gwbrx2'))
                $subscribedTo = 'Basic';
        } else if ($business->onTrial()) {
            $subscribedTo = 'Trial';
        }

        //                                                monthly,                          annually
        $basicPrices    = $subscribedTo === 'Basic'    ? [null, null] : ['pri_01hgdfq62x4cc9q0f3v0syncbn', 'pri_01hgdfvcng7ya1yhe57d7gpvh3'];
        $enhancedPrices = $subscribedTo === 'Enhanced' ? [null, null] : ['pri_01hgty1we0xpxgw6qefkqeeyb3', 'pri_01hgty2w4t8f04s7pajmvty7sf'];
        $advancedPrices = $subscribedTo === 'Advanced' ? [null, null] : ['pri_01hgty9577w7t2g96f7zbe2qaf', 'pri_01hgtya73sz695ztffwgmpr2s2'];

        $prices = [
            ...$basicPrices,
            ...$enhancedPrices,
            ...$advancedPrices,
        ];
        $plans = [];
        foreach ($prices as $price) {
            if (isset($price))
                $plans[] = $business
                    ->subscribe($price)
                    ->returnTo(route('business.edit'));
            else $plans[] = null;
        }
        $planOptions = [];
        foreach ($plans as $plan)
            $planOptions[] = $plan?->options();

        foreach ($planOptions as &$option) {
            if (isset($option)) {
                $option['settings']['displayMode'] = 'overlay';
                $option['settings']['theme'] = 'light';
            }
        }

        return Inertia::render('Authenticated/Business/Edit', [
            'business' => $business,
            'plansMaxRes' => config('constants.plans'),
            'subscriptionLinks' => [
                'basic' => $subscribedTo === 'Basic' ? null : [
                    'monthly' => $planOptions[0],
                    'annually' => $planOptions[1],
                ],
                'enhanced' => $subscribedTo === 'Enhanced' ? null : [
                    'monthly' => $planOptions[2],
                    'annually' => $planOptions[3],
                ],
                'advanced' => $subscribedTo === 'Advanced' ? null : [
                    'monthly' => $planOptions[4],
                    'annually' => $planOptions[5],
                ],
                'subscribedTo' => $subscribedTo,
                'state' => $state,
                'onTrial' => $subscribedTo === 'Trial' ? $business->customer->trial_ends_at : null,
                'progress' => $business->progress(strtolower($subscribedTo)),
                'lastPayment' => $lastPayment,
                'nextPayment' => $nextPayment,
                'gracePeriodExpiresAt' => $gracePeriodExpiresAt,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessRequest $request, Business $business)
    {
        Gate::authorize('update', $business);

        $updatedBusiness = $request->validated();
        //1- if logo is null OR there is new logo THEN delete the old logo.
        if (isset($business->logo) && ($request->hasFile('logoFile') || !isset($updatedBusiness['logo']))) {
            $this->deleteFile($business->logo);
        }
        //2- if there is new logo store it.
        if ($request->hasFile('logoFile')) {
            $updatedBusiness['logo'] = $this->storeFile($request);
        }

        $business->update($updatedBusiness);
        $business->save();

        return redirect()->back()->with('success', 'Successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Business $business)
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        Gate::authorize('destroy', $business);

        if (isset($business->logo)) {
            $this->deleteFile($business->logo);
            $business->update(['logo' => null]);
        }

        $user = $request->user();
        Auth::logout();
        $user->delete();
        $business->delete();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/')->with('success', 'Successfully deleted');
    }


    private function deleteFile(string $filePath)
    {
        if (env('FILESYSTEM_DISK') == 's3')
            return Storage::disk('businesses-logo')->delete(basename($filePath));
        return Storage::disk('businesses-logo')->delete($filePath);
    }

    /**Store a file in the correspond filesystem and return the path/name. If file stored in the cloud and name if locally  */
    private function storeFile(Request $request): string
    {
        if (env('FILESYSTEM_DISK') == 's3')
            return $this->businessesStorage()->url($request->logoFile->store('', 'businesses-logo'));
        return $request->logoFile->store('', 'businesses-logo');
    }

    //to ignore an error of intelephense extension.
    private function businessesStorage(): FilesystemAdapter
    {
        return Storage::disk('businesses-logo');
    }
}
