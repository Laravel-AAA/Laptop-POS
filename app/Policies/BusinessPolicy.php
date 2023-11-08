<?php

namespace App\Policies;

use App\Models\Business;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class BusinessPolicy
{

    public function edit(User $user, Business $business)
    {
        return $user->business_id == $business->id && $user->role == 'Admin';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Business $business): bool
    {
        return $user->business_id == $business->id && $user->role == 'Admin';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function destroy(User $user, Business $business): bool
    {
        if ($user->business_id == $business->id && $user->role == 'Admin') {
            $productsCount = $user->business->products()->count();
            if ($productsCount != 0) {
                throw ValidationException::withMessages(['hasProducts' => 'You have to delete all products. Found ' . $productsCount . ' products.']);
            } else
                return true;

            $usersCount = $user->business->users()->count();
            if ($usersCount > 1) {
                throw ValidationException::withMessages(['hasProducts' => 'You have to delete all accounts within your business. Found ' . $usersCount . ' accounts.']);
            } else
                return true;
        }
        return false;
    }
}
