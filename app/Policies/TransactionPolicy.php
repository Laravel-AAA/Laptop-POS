<?php

namespace App\Policies;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TransactionPolicy
{

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Transaction $transaction): bool
    {
        return $user->id == $transaction->bill->user_id;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Transaction $transaction): bool
    {
        return $user->id == $transaction->bill->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Transaction $transaction): bool
    {
        return $user->id == $transaction->bill->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Transaction $transaction): bool
    {
        return $user->id == $transaction->bill->user_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Transaction $transaction): bool
    {
        return $user->id == $transaction->bill->user_id;
    }
}
