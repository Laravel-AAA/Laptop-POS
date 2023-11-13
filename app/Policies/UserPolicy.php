<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Validation\ValidationException;

class UserPolicy
{

    /**
     * Determine whether the user can update the model.
     */
    public function store(User $user, User $userEntity): bool
    {
        return $user->id == $userEntity->id || ($user->business_id == $userEntity->business_id && $user->role == 'Owner');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $account): bool
    {
        if (isset($account->id)) {
            return $user->business_id == $account->business_id && $user->role == 'Owner';
        }
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function destroy(User $user, User $account): bool
    {
        return $user->id != $account->id && $user->role == 'Owner' && $user->business_id == $account->business_id;

    }

    public function restore(User $user, User $account): bool
    {
        return $user->id != $account->id && $user->role == 'Owner' && $user->business_id == $account->business_id;
    }

    public function forceDestroy(User $user, User $account): bool
    {
        if ($user->id != $account->id && $user->role == 'Owner' && $user->business_id == $account->business_id) {
            $productsCount = $account->products()->count();
            if ($productsCount != 0) {
                throw ValidationException::withMessages(['serverError' => 'This account has created ' . $productsCount . ' products. You cannot delete this account unless you delete all the products that belong to it. We do not recommend permanent deletion.']);
            } else
                return true;
        } else
            return false;
    }

}
