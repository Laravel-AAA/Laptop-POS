<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        if (in_array(request()->user()->role, ['Owner', 'Maintainer'])) {

            [$salesToday, $salesIncreasePercent] = $this->calcSales();
            $billsDailyCount = $this->calcBillsDailyCount();
            [$billsCountThisWeek, $billsIncreasePercent] = $this->calcBillsCount(array_sum($billsDailyCount));
            $cashPaymentsPercentThisWeek = $this->calcCashPayment($billsCountThisWeek);
            $monthlySales = $this->calcMonthlySales();
            $accountsBillsDailyCount = $this->accountsBillsDailyCount();
            $productsOutOfStock = $this->productsOutOfStock();
            return Inertia::render('Authenticated/Dashboard/index', [
                'dashboard' => [
                    'cards' => [
                        'sales' => [
                            'value' => $salesToday,
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
                        'monthlySales' => $monthlySales,
                        'accountsBillsDailyCount' => $accountsBillsDailyCount,
                    ],
                    'productsOutOfStock' => $productsOutOfStock,
                ],
            ]);
        } else
            return redirect(route('bill.create'));
    }

    private function productsOutOfStock()
    {
        return DB::table('products')
            ->where('business_id', '=', request()->user()->business_id)
            ->where('stock', '<=', 0)
            ->paginate(5);
    }

    private function accountsBillsDailyCount()
    {

        return User::selectRaw("users.name AS account, COUNT(bills.id) AS bills")
            ->leftJoin('bills', function ($join) {
                $join->on('bills.createdBy_id', '=', 'users.id')
                    ->whereBetween('bills.created_at', [Carbon::now()->subHours(24), Carbon::now()]);
            })
            ->where('users.business_id', '=', request()->user()->business_id)
            ->whereNull('users.deleted_at')
            ->whereNotNull('users.email_verified_at')
            ->groupBy('account')
            ->orderBy('account')
            ->get();
    }

    private function calcSales()
    {
        $tax = request()->user()->business->taxPercent + 1;

        $res = request()->user()->business->bills()
            ->selectRaw("DAY(bills.created_at) AS day, SUM(COALESCE(products.price, 0) * bill_details.quantity * $tax) AS daily_sales")
            ->join('bill_details', 'bills.id', '=', 'bill_details.bill_id')
            ->join('products', 'products.id', '=', 'bill_details.product_id')
            ->whereBetween('bills.created_at', [Carbon::now()->subDays(2), Carbon::now()])
            ->groupBy('day')
            ->orderByDesc('day')
            ->get();

        //if there is only sales for yesterday then $res[0] is yesterday which is not what expected below. So, we correct that.
        if (count($res) == 1 && isset($res[0]?->day) && $res[0]->day != date('d')) {
            $res[1] = $res[0];
            unset($res[0]);
        }

        if (isset($res) && isset($res[0]?->daily_sales))
            $salesToday = (float) $res[0]->daily_sales;
        else
            $salesToday = 0;

        if (isset($res) && isset($res[1]?->daily_sales))
            $salesYesterday = (float)$res[1]->daily_sales;
        else $salesYesterday = 0;

        if ($salesYesterday == 0 || $salesToday == 0)
            $increasePercentage = null;
        else
            $increasePercentage = ($salesToday - $salesYesterday) / $salesYesterday * 100;

        return ([$salesToday, $increasePercentage]);
    }

    /**Calculate number of bills for each day of the current week.
     * Ex: returns [1, 23, 34, 45, 55, 61, 7] where last number (7) is the current day, 61 is yesterday...
     * The result should end with current week day.
     * The sum of the array will be total number of bills created within last 7 days.
     */
    private function calcBillsDailyCount(): array
    { //we call now()->subWeek()->addDay() because if today is friday then subWeek will get us to friday of the previous week. And we don't want that we want a week range with only one friday :)
        $res = request()->user()->business->bills()
            ->whereBetween("created_at", [Carbon::now()->subWeek()->addDay(), Carbon::now()])
            ->selectRaw("COUNT(*) as count, DAYOFWEEK(created_at) as day")
            ->groupBy("day")
            ->get();

        $dailyCounts = [0, 0, 0, 0, 0, 0, 0];
        foreach ($res as $dayCount) {
            $dailyCounts[(($dayCount->day - 1) - date('w') + 6) % 7] = (int)$dayCount->count;
        }

        return $dailyCounts;
    }

    private function calcMonthlySales(): array
    {
        $tax = request()->user()->business->taxPercent + 1;

        $res = request()->user()->business->bills()
            ->selectRaw("MONTH(bills.created_at) AS month, SUM(COALESCE(products.price, 0) * bill_details.quantity * $tax) AS month_sales")
            ->join('bill_details', 'bills.id', '=', 'bill_details.bill_id')
            ->join('products', 'products.id', '=', 'bill_details.product_id')
            ->whereBetween('bills.created_at', [Carbon::now()->subYear()->addDay(), Carbon::now()])
            ->groupByRaw('month')
            ->get();

        $monthlySales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        foreach ($res as $monthSales) {
            $monthlySales[(($monthSales->month - 1) - date('m') + 12) % 12] = round((float)$monthSales->month_sales);
        }

        return $monthlySales;
    }

    private function calcBillsCount(int $countThisWeek)
    {
        $countLastWeek = request()->user()->business->bills()
            ->whereBetween('created_at', [Carbon::now()->subWeeks(2)->addDay(), Carbon::now()->subWeek()])
            ->count();
        if ($countLastWeek == 0 || $countThisWeek == 0)
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
