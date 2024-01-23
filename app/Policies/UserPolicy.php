<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Validation\ValidationException;

class UserPolicy
{

    /**
     * Determine whether the user can create the model.
     */
    public function store(User $user): bool
    {
        $progress = $user->business->progressOrFail();
        if ($progress['accounts']['reached'] < $progress['accounts']['max'])
            return true;
        else abort(403, 'You have reached the maximum number of accounts that you can create with your current plan. To create more accounts, you can upgrade your plan, delete some existing accounts, or contact our support team for assistance (support@laptop-pos.com).');
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
        if ($user->id != $account->id && $user->role == 'Owner' && $user->business_id == $account->business_id) {
            $progress = $user->business->progressOrFail('enhanced');
            if ($progress['accounts']['reached'] < $progress['accounts']['max'])
                return true;
            else abort(403, 'You have reached the maximum number of accounts that you can create with your current plan. To create more accounts, you can upgrade your plan, delete some existing accounts, or contact our support team for assistance (support@laptop-pos.com).');
        } else return false;
    }

    public function forceDestroy(User $user, User $account): bool
    {
        if ($user->id != $account->id && $user->role == 'Owner' && $user->business_id == $account->business_id) {
            $productsCount = $account->products()->count();
            $billsCount = $account->bills()->count();
            if ($productsCount != 0 || $billsCount != 0) {
                throw ValidationException::withMessages(['serverError' => 'This account has created ' . $productsCount . ' products and ' . $billsCount . ' bills. You cannot delete this account unless you delete all the products and bills that belong to it. We do not recommend permanent deletion.']);
            } else
                return true;
        } else
            return false;
    }
}
