<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Http\Requests\StoreBillRequest;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateBillRequest;
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
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBillRequest $request)
    {
        //
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
    }
}