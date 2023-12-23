<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function plans()
    {
        return Inertia::render('Authenticated/Plans/index', ['plansMaxRes' => config('constants.plans')]);
    }

    public function subscribe(Request $request)
    {
        $prices = [
            'Basic' => [
                'Monthly' => 'pri_01hgdfq62x4cc9q0f3v0syncbn',
                'Annually' =>  'pri_01hgdfvcng7ya1yhe57d7gpvh3'
            ], 'Enhanced' => [
                'Monthly' => 'pri_01hgty1we0xpxgw6qefkqeeyb3',
                'Annually' => 'pri_01hgty2w4t8f04s7pajmvty7sf'
            ],
            'Advanced' => [
                'Monthly' => 'pri_01hgty9577w7t2g96f7zbe2qaf',
                'Annually' => 'pri_01hgtya73sz695ztffwgmpr2s2'
            ],
        ];
        if (
            isset(($prices[$request->query('plan')][$request->query('period')]))
        ) {
            $plan = $prices[$request->query('plan')][$request->query('period')];
            $planOption = $request->user()->business
                ->subscribe($plan)
                ->returnTo(route('business.edit'))->options();
            $planOption['settings']['displayMode'] = 'inline';
            $planOption['settings']['theme'] = 'light';
            $planOption['settings']['frameTarget'] = 'checkout-container';
            $planOption['settings']['frameInitialHeight'] = '600';
            return Inertia::render('Authenticated/Subscribe/index', ['planOption' => $planOption, 'plansMaxRes' => config('constants.plans')]);
        }
        return abort(404);
    }


    public function pause(Request $request)
    {
        $request->user()->business->subscription()->pause();

        return redirect()->back()->with('success', 'Successfully paused');
    }

    public function pauseNow(Request $request)
    {
        $request->user()->business->subscription()->pauseNow();
        return redirect()->back()->with('success', 'Successfully paused');
    }

    public function resume(Request $request)
    {
        if (($sub = $request->user()->business->subscription())->onPausedGracePeriod() || $sub->paused())
            $sub->resume();
        else abort(400, 'Your subscription has not paused in the first place to be resumed');
        return redirect()->back()->with('success', 'Successfully resumed');
    }

    public function updatePaymentMethod(Request $request)
    {
        return $request->user()->business
            ->subscription()
            ->redirectToUpdatePaymentMethod()->with('success', 'Successfully updated');
    }

    public function swapToAdvanced(Request $request, string $period)
    {
        if (isset($period)) {
            $period = strtolower($period);
            if ($period !== 'monthly' && $period !== 'annually')
                abort(400);
        } else abort(400);
        $advancedPrices = ['pri_01hgty9577w7t2g96f7zbe2qaf', 'pri_01hgtya73sz695ztffwgmpr2s2'];
        $request->user()->business
            ->subscription()
            ->swapAndInvoice($advancedPrices[$period === 'monthly' ? 0 : 1]);
        return redirect()->back()->with('success', 'Successfully upgraded');
    }

    public function swapToEnhanced(Request $request, string $period)
    {

        if (isset($period)) {
            $period = strtolower($period);
            if ($period !== 'monthly' && $period !== 'annually')
                abort(400);
        } else abort(400);
        $enhancedPrices = ['pri_01hgty1we0xpxgw6qefkqeeyb3', 'pri_01hgty2w4t8f04s7pajmvty7sf'];
        $request->user()->business
            ->subscription()
            ->swapAndInvoice($enhancedPrices[$period === 'monthly' ? 0 : 1]);
        return redirect()->back()->with('success', 'Successfully updated');
    }

    public function swapToBasic(Request $request, string $period)
    {
        if (isset($period)) {
            $period = strtolower($period);
            if ($period !== 'monthly' && $period !== 'annually')
                abort(400);
        } else abort(400);
        $basicPrices    = ['pri_01hgdfq62x4cc9q0f3v0syncbn', 'pri_01hgdfvcng7ya1yhe57d7gpvh3'];
        $request->user()->business
            ->subscription()
            ->swapAndInvoice($basicPrices[$period === 'monthly' ? 0 : 1]);
        return redirect()->back()->with('success', 'Successfully downgraded');
    }
}
