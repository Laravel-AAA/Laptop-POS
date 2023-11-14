<?php

namespace App\Observers;

use App\Models\Transaction;
use App\Models\Bill;

class BillObserver
{
    /**
     * Handle the Bill "deleting" event.
     */
    public function deleting(Bill $bill): void
    {
        $transactions = $bill->transactions()->with('product')->get();
        foreach ($transactions as $transaction) {
            $product = $transaction->product;
            if (isset($product->stock)) {
                $product->stock += $transaction->quantity;
                $product->save();
            }
        }
    }

}
