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
        if ($user->id == $userEntity->id) {
            $productsCount = $user->products()->count();
            if ($productsCount != 0) {
                throw ValidationException::withMessages(['hasProducts' => 'You have to delete all products. Found ' . $productsCount . ' products.']);
            } else
                return true;
        } else
            return false;
    }

}
