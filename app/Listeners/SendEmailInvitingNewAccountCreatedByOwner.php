<?php

namespace App\Listeners;

use App\Events\OwnerCreatedAccount;
use App\Mail\InviteNewAccountCreatedByOwner;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailGreetingNewCustomer implements ShouldQueue
{
    /**
     * Handle the event.
     */
    public function handle(OwnerCreatedAccount $event): void
    {
        Mail::to($event->account)->send(new InviteNewAccountCreatedByOwner($event->owner,$event->account));
    }
}
