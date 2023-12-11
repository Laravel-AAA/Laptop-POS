<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class PaymentController extends Controller
{
    public function updatePaymentMethod(Request $request)
    {
        return $request->user()->business
            ->subscription()
            ->redirectToUpdatePaymentMethod()->with('success', 'Successfully updated');
    }

    public function swapToAdvanced(Request $request, string $period)
    {
        $advancedPrices = ['pri_01hgty9577w7t2g96f7zbe2qaf', 'pri_01hgtya73sz695ztffwgmpr2s2'];
        $request->user()->business
            ->subscription()
            ->swap($advancedPrices[$period === 'Monthly' ? 0 : 1]);
        return redirect()->back()->with('success', 'Successfully updated');
    }

    public function swapToEnhanced(Request $request, string $period)
    {

        $enhancedPrices = ['pri_01hgty1we0xpxgw6qefkqeeyb3', 'pri_01hgty2w4t8f04s7pajmvty7sf'];
        $request->user()->business
            ->subscription()
            ->swap($enhancedPrices[$period === 'Monthly' ? 0 : 1]);
        return redirect()->back()->with('success', 'Successfully updated');
    }

    public function swapToBasic(Request $request, string $period)
    {
        $basicPrices    = ['pri_01hgdfq62x4cc9q0f3v0syncbn', 'pri_01hgdfvcng7ya1yhe57d7gpvh3'];
        $request->user()->business
            ->subscription()
            ->swap($basicPrices[$period === 'Monthly' ? 0 : 1]);
        return redirect()->back()->with('success', 'Successfully updated');
    }
}
