<?php

namespace App\Models;

use App\Models\Bill;
use App\Models\Product;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/*       This is a Bill
_________________________________________
|                                       |
|              Point of Sale            | <-- Business name
|                                       |
|---------------------------------------|
|        Order Number: 123456           | <-- Bill number
|        Cashier: John Doe              | <-- User name
|                                       |
|---------------------------------------|
|                                       |
| Product         Qty    Price   Amount |
|---------------------------------------|
|                                       |
| Pizza           2      $10     $20    | <-- This is a single Bill_detail
| Burger          1      $8      $8     | <-- another Bill_detail
| Fries           1      $4      $4     | <-- another Bill_detail
|                                       |
|---------------------------------------|
|                                       |
| Total Amount:                 $32     |
| Cash Received:                $50     |
| Change:                       $18     |
|                                       |
|---------------------------------------|
|              Thank You!               |
|_______________________________________|*/
class BillDetail extends Model
{
    use HasFactory, HasUlids;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'bill_details';

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity' => 'integer',
    ];


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'quantity',
        'product_id',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function bill(): BelongsTo
    {
        return $this->belongsTo(Bill::class);
    }
}