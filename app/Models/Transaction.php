<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/*       This is a Bill
_________________________________________
|                                       |
|              Point of Sale            |
|                                       |
|---------------------------------------|
|        Order Number: 123456           |
|        Cashier: John Doe              |
|                                       |
|---------------------------------------|
|                                       |
| Item            Qty    Price   Amount |
|---------------------------------------|
|                                       |
| Pizza           2      $10     $20    | <-- This is a single Transaction
| Burger          1      $8      $8     | <-- another Transaction
| Fries           1      $4      $4     | <-- another Transaction
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
class Transaction extends Model
{
    use HasFactory, HasUlids;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'transactions';

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
    ];
}