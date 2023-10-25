<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Http\Requests\Bill\StoreBillRequest;
use App\Http\Requests\Bill\UpdateBillRequest;
use App\Models\Transaction;
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
        $bills = $request->user()->bills()->latest()
            ->with('transactions')->with('transactions.product')
            ->filter($request->only('search', 'product'))
            ->paginate(15)->appends($request->all());

        return Inertia::render('Authenticated/Bills/index', [
            'bills' => $bills,
            'filter' => $request->only('search'),
            'business' => ['taxPercent' => 0.15] //$request->user()->business(),
        ]);
    }

    /**Bill show will be displayed in Checkout Page */
    protected function show(Request $request, Bill $bill)
    {
        Gate::authorize('view', $bill);
        $bill = $bill->load('transactions.product');
        // dd($bill);
        return $this->checkoutPage($request, $bill);
    }

    //Also known as Checkout
    protected function create(Request $request)
    {
        return $this->checkoutPage($request);
    }

    private function checkoutPage(Request $request, Bill $bill = null)
    {

        $products = $request->user()->products()->latest()
            ->filter($request->only('search', 'barcode'))
            ->paginate(20)->appends($request->all());

        return Inertia::render('Authenticated/Checkout/index', [
            'products' => $products,
            'filter' => $request->only('search', 'barcode'),
            //$request->user()->business(),
            'business' => ['taxPercent' => 0.15],
            'bill' => $bill,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBillRequest $request)
    {
        $billId = $request->get('id');
        $bill = $request->validated();
        $createdBill = new Bill($bill);
        $createdBill->user_id = $request->user()->id;
        unset($createdBill->transactions); //We remove this attribute because there is no column called transactions 😑
        $createdBill->save();

        $tras = [];
        foreach ($bill['transactions'] as $tra)
            $tras[] = new Transaction($tra);
        $createdBill->transactions()->saveMany($tras);
        if(isset($billId)){
            Bill::destroy($billId);
        }

        return to_route('bill.create')->with('success', 'The bill was created successfully');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBillRequest $request, Bill $bill)
    {
        //
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