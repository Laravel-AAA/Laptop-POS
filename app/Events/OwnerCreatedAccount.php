<?php

namespace App\Events;

use App\Models\Business;
use App\Models\User;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OwnerCreatedAccount
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(public User $owner, public User $account, Business $business)
    {
        $this->owner = $owner;
        $this->owner->business = $business;
        $this->account = $account;
    }

}
