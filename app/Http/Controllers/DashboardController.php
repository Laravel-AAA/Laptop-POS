<?php

namespace App\Http\Controllers;

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
            $billsDailyCount = $this->calcBillsDailyCount();
            [$billsCountThisWeek, $billsIncreasePercent] = $this->calcBillsCount(array_sum($billsDailyCount));
            $cashPaymentsPercentThisWeek = $this->calcCashPayment($billsCountThisWeek);
            return Inertia::render('Authenticated/Dashboard/index', [
                'dashboard' => [
                    'cards' => [
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
                    'charts' => [
                        'billsDailyCount' => $billsDailyCount,
                    ],
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

    /**Calculate number of bills for each day of the current week.
     * Ex: returns [1, 23, 34, 45, 55, 61, 7] where last number (7) is the current day, 61 is yesterday...
     * The result should end with current week day.
     * The sum of the array will be total number of bills created within last 7 days.
     */
    private function calcBillsDailyCount(): array
    {//we call now()->subWeek()->addDay() because if today is friday then subWeek will get us to friday of the previous week. And we don't want that we want a week range with only one friday :)
        $res = request()->user()->business->bills()
            ->whereBetween("created_at", [Carbon::now()->subWeek()->addDay(), Carbon::now()])
            ->selectRaw("COUNT(*) as count, DAYOFWEEK(created_at) as day")
            ->groupBy("day")
            ->get();
        $dailyCounts = [0, 0, 0, 0, 0, 0, 0];
        foreach ($res as $dayCount) {
            $dailyCounts[(($dayCount->day - 1) - date('w') + 6) % 7] = $dayCount->count;
        }

        return $dailyCounts;
    }

    private function calcBillsCount(int $countThisWeek)
    {
        $countLastWeek = request()->user()->business->bills()
            ->whereBetween('created_at', [Carbon::now()->subWeeks(2)->addDay(), Carbon::now()->subWeek()])
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
            ->whereBetween('created_at', [Carbon::now()->subWeek()->addDay(), Carbon::now()])
            ->count();

        if ($billsCountThisWeek > 0)
            return $cashPaymentCount / $billsCountThisWeek * 100;
        else
            return 0;
    }
}
