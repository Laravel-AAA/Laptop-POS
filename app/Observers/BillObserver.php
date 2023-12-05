<?php

namespace App\Observers;

use App\Models\BillDetail;
use App\Models\Bill;

class BillObserver
{
    /**
     * Handle the Bill "deleting" event.
     */
    public function deleting(Bill $bill): void
    {
        $bill_details = $bill->bill_details()->with('product')->get();
        foreach ($bill_details as $bill_detail) {
            $product = $bill_detail->product;
            if (isset($product->stock)) {
                $product->stock += $bill_detail->quantity;
                $product->save();
            }
        }
    }

}
