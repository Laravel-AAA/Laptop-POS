<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Database\Eloquent\Collection;

class ProductPolicy
{

    /**
     * Determine whether the user can view the model.
     */
    public function show(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id;
    }


    public function store(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
        && ($user->id == $product->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function destroy(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id || $user->role == 'Admin');
    }

}