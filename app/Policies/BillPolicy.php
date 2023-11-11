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
    public function show(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || in_array($user->role, ['Owner', 'Maintainer']));
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || in_array($user->role, ['Owner', 'Maintainer']));
    }

}
