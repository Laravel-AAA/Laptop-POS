<?php

namespace App\Models;

use App\Models\Business;
use App\Models\BillDetail;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory, HasUlids;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'products';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'img',
        /**barcode numbers */
        'barcode',
        'price',
        'stock',
        'description',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'stock' => 'integer',
        'price' => 'float',
    ];


    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'createdBy_id');
    }

    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }

    public function bill_details(): HasMany
    {
        return $this->hasMany(BillDetail::class);
    }


    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
                    ->orWhere('stock', 'like', '%' . $search . '%')
                    ->orWhere('price', 'like', '%' . $search . '%');
            });
        });

        $query->when($filters['barcode'] ?? null, function ($query, $barcode) {
            $query->where('barcode', 'like', $barcode . '%');
        });

        $query->when($filters['stock'] ?? null, function ($query, $stock) {
            if ($stock == 'out')
                $query->where('stock', '<=', 0);
            else $query->where('stock', '=', $stock);
        });

        $query->when($filters['orderBy'] ?? 'created_at', function ($query, $orderBy) {
            switch ($orderBy) {
                case 'name':
                    $query->orderBy('name');
                    break;
                case 'name-desc':
                    $query->orderByDesc('name');
                    break;
                case 'created_at-desc':
                    $query->orderBy('created_at');
                    break;
                case 'updated_at':
                    $query->orderByDesc('updated_at');
                    break;
                case 'updated_at-desc':
                    $query->orderBy('updated_at');
                    break;
                case 'stock-highest':
                    $query->orderByDesc('stock');
                    break;
                case 'stock-lowest':
                    $query->orderBy('stock');
                    break;
                case 'created_at':
                default:
                    $query->orderByDesc('created_at');
                    break;
            }
        });
    }
}
