<?php

namespace App\Observers;

use App\Models\BillDetail;

class BillDetailObserver
{
    /**
     * Handle the Bill_detail "created" event.
     */
    public function created(BillDetail $bill_detail): void
    {
        $product = $bill_detail->product;
        if (isset($product->stock)) {
            $product->stock -= $bill_detail->quantity;
            $product->save();
        }
    }
}
