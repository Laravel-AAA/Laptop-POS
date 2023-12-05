<?php

namespace App\Policies;

use App\Models\BillDetail;
use App\Models\User;

class BillDetailPolicy
{

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, BillDetail $bill_detail): bool
    {
        return $user->id == $bill_detail->bill->user_id;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, BillDetail $bill_detail): bool
    {
        return $user->id == $bill_detail->bill->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, BillDetail $bill_detail): bool
    {
        return $user->id == $bill_detail->bill->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, BillDetail $bill_detail): bool
    {
        return $user->id == $bill_detail->bill->user_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, BillDetail $bill_detail): bool
    {
        return $user->id == $bill_detail->bill->user_id;
    }
}
