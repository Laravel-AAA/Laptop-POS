<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Validation\ValidationException;

class UserPolicy
{

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $userEntity): bool
    {
        return $user->id == $userEntity->id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $userEntity): bool
    {
        if($user->id == $userEntity->id && $user->role == 'Admin')
            throw ValidationException::withMessages(['isAdmin' => 'You cannot delete your admin account. To delete all accounts under your business, please go to Business > Delete Business.']);
        else if($user->id != $userEntity->id && $user->role == 'Admin')
            return true;
        else return false;

    }

}
