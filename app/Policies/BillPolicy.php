<?php

namespace App\Policies;

use App\Models\Bill;
use App\Models\User;

class BillPolicy
{

    public function store(User $user){
        $progress = $user->business->progressOrFail();
        if ($progress['bills']['reached'] < $progress['bills']['max'])
            return true;
        else abort(403, 'You have reached the maximum number of bills that you can create with your current plan. To create more bills, you can upgrade your plan, delete some existing bills, or contact our support team for assistance (support@laptop-pos.com).');
    }

    public function show(?User $user, Bill $bill)
    {
        if (isset($user) && $user->business_id == $bill->business_id) {
            return true;
        } else {
            //bill is issued in less than 6 months.
            if (now()->diffInDays($bill->created_at) < 180) {
                return true;
            } else { //otherwise the response will be Not Found for ambiguity
                abort(404);
            }
        }
    }

    /**
     * Determine whether the user can update the model.
     */
    public function edit(User $user, Bill $bill): bool
    {
        return $user->business_id == $bill->business_id
            && ($user->id == $bill->createdBy_id || in_array($user->role, ['Owner', 'Maintainer']));
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
