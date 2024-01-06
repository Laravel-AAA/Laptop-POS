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

    public function onTrial()
    {
        return isset($this->customer) && isset($this->customer->trial_ends_at) && $this->customer->trial_ends_at->gt(now());
    }

    public function subscribedOrOnTrial()
    {
        return $this->onTrial() || ($this->subscribed() && (
            ($sub = $this->subscription())->recurring() || $sub->onGracePeriod() || $sub->onPausedGracePeriod()));
    }

    /**
     * Billable calls "$this->email" under the hood so we need to pass the owner's email, because Business model dose not have email property.
     */
    public function __get($key)
    {
        if ($key === 'email') {
            $user = $this->users()->where('role', 'Owner')->oldest('created_at')->first();
            return $user->email;
        }
        return $this->getAttribute($key);
    }

    /**
     * @param $subscribedTo is 'basic'|'enhanced'|'advanced'
     */
    public function progress(string $subscribedTo = null): null|array
    {
        //return null if subscribedTo not valid plan OR ( business is not subscribed AND trial expired )
        if (
            !(isset($subscribedTo) &&
                ($subscribedTo === 'advanced' || $subscribedTo === 'basic' || $subscribedTo === 'enhanced'))
        ) {
            if ($sub = $this->subscription()) {
                if ($sub->hasProduct(env('PADDLE_PRODUCT_ID_ADVANCED')))
                    $subscribedTo = 'advanced';
                else if ($sub->hasProduct(env('PADDLE_PRODUCT_ID_ENHANCED')))
                    $subscribedTo = 'enhanced';
                else if ($sub->hasProduct(env('PADDLE_PRODUCT_ID_BASIC')))
                    $subscribedTo = 'basic';
            } else if ($this->onTrial()) { //trial considered a Basic Plan in terms of progress limit.
                $subscribedTo = 'basic';
            } else return null;
        }

        $accounts = $this->users()->count();
        $products = $this->products()->count();
        $bills    = $this->bills()->whereBetween('updated_at', [now()->subMonth(), now()])->count();

        return [
            'accounts' => [
                'reached' => $accounts,
                'max' => config('constants.planResources.' . $subscribedTo . '.accounts')
            ],
            'products' => [
                'reached' => $products,
                'max' => config('constants.planResources.' . $subscribedTo . '.products')
            ],
            'bills' => [
                'reached' => $bills,
                'max' => config('constants.planResources.' . $subscribedTo . '.bills')
            ],
        ];
    }

    /**
     * Get progress status, or abort with 403 and (you have to subscribe) message
     */
    public function progressOrFail(string $subscribedTo = null): array
    {
        if (($p = $this->progress($subscribedTo)) != null) {
            return $p;
        }
        abort(403, 'You need to have an active subscription to perform this action!');
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
