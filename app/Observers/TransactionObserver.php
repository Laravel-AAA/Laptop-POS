<?php

namespace App\Observers;

use App\Models\Transaction;

class TransactionObserver
{
    /**
     * Handle the Transaction "created" event.
     */
    public function created(Transaction $transaction): void
    {
        $product = $transaction->product;
        if (isset($product->stock)) {
            $product->stock -= $transaction->quantity;
            $product->save();
        }
    }
}
