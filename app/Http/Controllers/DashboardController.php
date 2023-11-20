<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Collection;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (in_array(request()->user()->role, ['Owner', 'Maintainer'])) {

            [$salesThisWeek, $salesIncreasePercent] = $this->calcSales();
            [$billsCountThisWeek, $billsIncreasePercent] = $this->calcBillsCount();
            $cashPaymentsPercentThisWeek = $this->calcCashPayment($billsCountThisWeek);
            return Inertia::render('Authenticated/Dashboard/index', [
                'cardsValue' => [
                    'sales' => [
                        'value' => $salesThisWeek,
                        'increase' => $salesIncreasePercent,
                    ],
                    'bills' => [
                        'value' => $billsCountThisWeek,
                        'increase' => $billsIncreasePercent,
                    ],
                    'cashPaymentPercentage' => $cashPaymentsPercentThisWeek,
                    'productsCount' => request()->user()->business->products()->count(),
                ],
            ]);

        } else
            return redirect(route('bill.create'));
    }

    private function calcSales()
    {
        $salesToday = 0;
        $salesYesterday = 0;
        $tax = request()->user()->business->taxPercent + 1;
        request()->user()->business->bills()
            ->whereBetween('created_at', [Carbon::now()->subDays(2), Carbon::now()])
            ->with('transactions.product')
            ->chunk(100, function (Collection $bills) use ($tax, &$salesToday, &$salesYesterday) {
                foreach ($bills as $bill) {
                    $carbonBillDate = Carbon::parse($bill->created_at);
                    foreach ($bill->transactions as $tra) {
                        if (isset($tra->product->price)) {
                            if ($carbonBillDate->between(Carbon::now()->subDay(), Carbon::now())) {
                                $salesToday += $tra->quantity * $tra->product->price * $tax;
                            } else {
                                $salesYesterday += $tra->quantity * $tra->product->price * $tax;
                            }
                        }
                    }
                }
            });

        if ($salesYesterday == 0)
            $increasePercentage = null;
        else
            $increasePercentage = ($salesToday - $salesYesterday) / $salesYesterday * 100;
        return [$salesToday, $increasePercentage];
    }

    private function calcBillsCount()
    {
        $countThisWeek = request()->user()->business->bills()
            ->whereBetween('created_at', [Carbon::now()->subWeek(), Carbon::now()])
            ->count();
        $countLastWeek = request()->user()->business->bills()
            ->whereBetween('created_at', [Carbon::now()->subWeeks(2), Carbon::now()->subWeek()])
            ->count();
        if ($countLastWeek == 0)
            $increasePercentage = null;
        else
            $increasePercentage = ($countThisWeek - $countLastWeek) / $countLastWeek * 100;
        return [$countThisWeek, $increasePercentage];
    }

    private function calcCashPayment(int $billsCountThisWeek)
    {
        $cashPaymentCount = request()->user()->business->bills()
            ->whereNotNull('cashReceived')
            ->whereBetween('created_at', [Carbon::now()->subWeek(), Carbon::now()])
            ->count();

        if ($billsCountThisWeek > 0)
            return $cashPaymentCount / $billsCountThisWeek * 100;
        else
            return 0;
    }
}
