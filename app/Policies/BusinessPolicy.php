<?php

namespace App\Policies;

use App\Models\Business;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class BusinessPolicy
{

    public function edit(User $user, Business $business)
    {
        return $user->business_id == $business->id && $user->role == 'Owner';
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Business $business): bool
    {
        return $user->business_id == $business->id && $user->role == 'Owner';
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function destroy(User $user, Business $business): bool
    {
        if ($user->business_id == $business->id && $user->role == 'Owner') {
            $productsCount = $user->business->products()->count();
            if ($productsCount != 0) {
                throw ValidationException::withMessages(['hasProducts' => 'You have to delete all products. Found ' . $productsCount . ' products.']);
            }

            $usersCount = $user->business->users()->count();
            if ($usersCount > 1) {
                throw ValidationException::withMessages(['hasProducts' => 'You have to delete all accounts within your business. Found ' . $usersCount . ' accounts.']);
            }

            return true;
        }
        return false;
    }
}
