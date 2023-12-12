<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class ProductPolicy
{

    /**
     * Determine whether the user can view the model.
     */
    public function show(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id;
    }


    public function store(User $user): bool
    {
        $progress = $user->business->progressOrFail();
        if ($progress['products']['reached'] < $progress['products']['max'])
            return true;
        else abort(403, 'You have reached the maximum number of products that you can create with your current plan. To create more products, you can upgrade your plan, delete some existing products, or contact our support team for assistance (support@laptop-pos.com).');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id
                || in_array($user->role, ['Owner', 'Maintainer']));
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function destroy(User $user, Product $product): bool
    {
        if (
            $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id || in_array($user->role, ['Owner', 'Maintainer']))
        ) {
            $count = $product->bill_details()->count();
            if ($count != 0) {
                throw ValidationException::withMessages(['serverError' => 'This product (' . $product->name . ') is used by ' . $count . ' bills. Please make sure no bill is using this product before deleting.']);
            }
            return true;
        } else
            return false;
    }
}
