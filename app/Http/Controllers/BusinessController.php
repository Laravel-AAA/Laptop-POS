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

        // dd($business->subscribed());
        // dd($business->transactions);
        $plans = [];
        $plans[] = $business
            ->subscribe('pri_01hgdfq62x4cc9q0f3v0syncbn')
            ->returnTo(route('business.edit'));
        $plans[] = $business
            ->subscribe('pri_01hgdfvcng7ya1yhe57d7gpvh3')
            ->returnTo(route('business.edit'));
        $plans[] = $business
            ->subscribe('pri_01hgty1we0xpxgw6qefkqeeyb3')
            ->returnTo(route('business.edit'));
        $plans[] = $business
            ->subscribe('pri_01hgty2w4t8f04s7pajmvty7sf')
            ->returnTo(route('business.edit'));
        $plans[] = $business
            ->subscribe('pri_01hgty9577w7t2g96f7zbe2qaf')
            ->returnTo(route('business.edit'));
        $plans[] = $business
            ->subscribe('pri_01hgtya73sz695ztffwgmpr2s2')
            ->returnTo(route('business.edit'));

        $planOptions = [];
        foreach($plans as $plan)
            $planOptions[] = $plan->options();

        foreach($planOptions as &$option){
            $option['settings']['displayMode'] = 'overlay';
            $option['settings']['theme'] = 'light';
        }

        return Inertia::render('Authenticated/Business/Edit', [
            'business' => $business,
            'subscriptionLinks' => [
                'basic' => [
                    'monthly' => $planOptions[0],
                    'annually' => $planOptions[1],
                ],
                'enhanced' => [
                    'monthly' => $planOptions[2],
                    'annually' => $planOptions[3],
                ],
                'advanced' => [
                    'monthly' => $planOptions[4],
                    'annually' => $planOptions[5],
                ],
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
