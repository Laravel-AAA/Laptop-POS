<?php

namespace App\Policies;

use App\Models\Business;
use App\Models\User;

class BusinessPolicy
{

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
        return $user->business_id == $business->id && $user->role == 'Admin';
    }
}
