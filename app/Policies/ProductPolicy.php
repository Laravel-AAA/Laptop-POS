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
    public function view(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id;
    }


    public function store(User $user, Product $product): bool
    {
        return $user->id == $product->createdBy_id
            && $user->business_id == $product->business_id
            && $user->role == 'Admin';
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
    public function delete(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Product $product): bool
    {
        return $user->business_id == $product->business_id
            && ($user->id == $product->createdBy_id || $user->role == 'Admin');
    }
}