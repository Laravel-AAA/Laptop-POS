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
        $bills = $request->user()->business->bills()->latest()->with([
            'createdBy' => function ($query) {
                $query->withTrashed();
            }
            ,
            'bill_details.product'
        ])
            ->filter($request->only('search', 'product'))
            ->paginate(15)->appends($request->all());

        return Inertia::render('Authenticated/Bills/index', [
            'bills' => $bills,
            'filter' => $request->only('search'),
        ]);
    }

    /**Bill show can be accessed by anyone for QR link on the bill paper */
    protected function show(Bill $bill)
    {
        Gate::authorize('show', $bill);
        $bill = $bill->load([
            'bill_details.product',
            'business',
            'createdBy' => function ($query) {
                $query->withTrashed();
            }
        ]);

        return Inertia::render('Authenticated/Bill/index', [
            'bill' => $bill,
        ]);
    }

    /**Bill edit will be displayed in Checkout Page */
    protected function edit(Request $request, Bill $bill)
    {
        Gate::authorize('edit', $bill);
        $bill = $bill->load('bill_details.product');
        return $this->checkoutPage($request, $bill);
    }

    //AKA Checkout
    protected function create(Request $request)
    {
        return $this->checkoutPage($request);
    }

    private function checkoutPage(Request $request, Bill $bill = null)
    {

        $products = $request->user()->business->products()->latest()
            ->filter($request->only('search', 'barcode'))
            ->paginate(30)->appends($request->all());

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
        //Store is for creating new bill and Updating which is destroy then renew because there is one to many relationship with Bill_details and each bill_detail could be updated with the Bill.
        $bill = $request->validated();
        $bill['business_id'] = $request->user()->business_id;
        $bill['createdBy_id'] = $request->user()->id;

        $bill_details = $bill['bill_details'];
        unset($bill['bill_details']); //There is no column called bill_details 😑

        if ($request->get('id')) {
            $oldBill = Bill::findOrFail($request->get('id'));
            Gate::authorize('update', $oldBill);
        }

        $createdBill = Bill::create($bill);
        $createdBill->bill_details()->createMany($bill_details);

        if ($request->get('id')) {
            Bill::destroy($request->get('id'));

            return to_route('bill.create')->with('success', 'Successfully updated');
        } else
            return to_route('bill.create')->with('success', 'Successfully created');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bill $bill)
    {
        Gate::authorize('delete', $bill);

        $bill->delete();
        return redirect()->back()->with('success', 'Successfully deleted');
    }
}