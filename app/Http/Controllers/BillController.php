<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Http\Requests\Bill\StoreBillRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class BillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $bills = $request->user()->business->bills()->with([
            'createdBy' => function ($query) {
                $query->withTrashed();
            }
        ])->latest()
            ->with('transactions')->with('transactions.product')
            ->filter($request->only('search', 'product'))
            ->paginate(15)->appends($request->all());

        return Inertia::render('Authenticated/Bills/index', [
            'bills' => $bills,
            'filter' => $request->only('search'),
        ]);
    }

    /**Bill show will be displayed in Checkout Page */
    protected function show(Request $request, Bill $bill)
    {
        Gate::authorize('show', $bill);
        $bill = $bill->load('transactions.product');
        return $this->checkoutPage($request, $bill);
    }

    //Also known as Checkout
    protected function create(Request $request)
    {
        return $this->checkoutPage($request);
    }

    private function checkoutPage(Request $request, Bill $bill = null)
    {

        $products = $request->user()->business->products()->latest()
            ->filter($request->only('search', 'barcode'))
            ->paginate(20)->appends($request->all());

        return Inertia::render('Authenticated/Checkout/index', [
            'products' => $products,
            'filter' => $request->only('search', 'barcode'),
            //$request->user()->business(),
            'bill' => $bill,
        ]);
    }

    /**
     * Store or Update.
     */
    public function store(StoreBillRequest $request)
    {
        //Store is for creating new bill and Updating which is destroy then renew because there is one to many relationship with Transactions and each transaction could be updated with the Bill.
        $bill = $request->validated();
        $bill['business_id'] = $request->user()->business_id;
        $bill['createdBy_id'] = $request->user()->id;

        $transactions = $bill['transactions'];
        unset($bill['transactions']); //There is no column called transactions 😑

        if ($request->get('id')) {
            $oldBill = Bill::findOrFail($request->get('id'));
            Gate::authorize('update', $oldBill);
        }

        $createdBill = Bill::create($bill);
        $createdBill->transactions()->createMany($transactions);

        if ($request->get('id')) {
            Bill::destroy($request->get('id'));
        }

        return to_route('bill.create')->with('success', 'Successfully created');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bill $bill)
    {
        Gate::authorize('delete', $bill);

        $bill->delete();
        return redirect()->back()->with('success', 'The bill was deleted successfully');
    }
}