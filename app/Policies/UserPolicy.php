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
    public function update(User $user, User $userEntity): bool
    {
        return $user->id == $userEntity->id || ($user->business_id == $userEntity->business_id && $user->role == 'Owner');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function destroy(User $user, User $userEntity): bool
    {
        if ($user->id == $userEntity->id && $user->role == 'Owner')
            throw ValidationException::withMessages(['isOwner' => 'You cannot delete your Owner account. To delete all accounts under your business, please go to Business > Delete Business.']);
        else if ($user->id != $userEntity->id && $user->role == 'Owner')
            return true;
        else
            return false;

    }

}
