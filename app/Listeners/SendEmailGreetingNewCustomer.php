<?php

namespace App\Listeners;

use App\Mail\GreetingNewCustomer;
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailGreetingNewCustomer
{
    /**
     * Handle the event.
     */
    public function handle(Verified $event): void
    {
        Mail::to($event->user)->send(new GreetingNewCustomer());
    }
}
