<?php

namespace App\Models;

use App\Models\User;
use Laravel\Paddle\Billable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Business extends Model
{
    use HasFactory, HasUlids, SoftDeletes, Billable;

    /**
     * Billable calls "$this->email" under the hood so we need to pass the owner's email, because Business model dose not have email property.
     */
    public function __get($key)
    {
        if($key === 'email'){
            $user = $this->users()->where('role','Owner')->oldest('created_at')->first();
            return $user->email;
        }
        return $this->getAttribute($key);
    }

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'business';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'logo',
        'country',
        'city',
        'address',
        'currency',
        'phone',
        'countryCallingCode',
        'taxPercent',
        'taxIdentificationNumber',
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'deleted_at',
    ];


    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'taxPercent' => 'float'
    ];


    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function bills(): HasMany
    {
        return $this->hasMany(Bill::class);
    }
}