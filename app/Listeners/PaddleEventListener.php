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
        Log::emergency('PaddleEventListener', [$event]);
        // dd($payload = $event->payload['alert_name'], $payload, $event);
    }
}
