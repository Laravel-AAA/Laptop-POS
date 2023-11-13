<?php

namespace App\Models;

use App\Models\Business;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
class Bill extends Model
{
    use HasFactory, HasUlids;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'bills';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'cashReceived',
        'transactions',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'cashReceived' => 'float',
    ];


    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'createdBy_id');
    }

    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }


    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('cashReceived', 'like', '%' . $search . '%');
        });
        $query->when($filters['product'] ?? null, function ($query, $product_id) {
            $query->whereHas('transactions', function ($query) use ($product_id) {
                $query->where('product_id', $product_id);
            });
        });
    }
}