<?php

namespace App\Policies;

use App\Models\Bill;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BillPolicy
{

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || $user->role == 'Admin');
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || $user->role == 'Admin');
    }
}
