<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;
use Laravel\Paddle\Events\WebhookReceived;

class PaddleEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(WebhookReceived $event): void
    {
        Log::warning('PaddleEventListener', [$event]);
    }
}
