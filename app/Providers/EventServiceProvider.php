<?php

namespace App\Providers;

use App\Listeners\PaddleEventListener;
use App\Listeners\SendEmailGreetingNewCustomer;
use App\Models\Bill;
use App\Models\BillDetail;
use App\Observers\BillObserver;
use App\Observers\BillDetailObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Events\Verified;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Laravel\Paddle\Events\CustomerUpdated;
use Laravel\Paddle\Events\SubscriptionCanceled;
use Laravel\Paddle\Events\SubscriptionCreated;
use Laravel\Paddle\Events\SubscriptionPaused;
use Laravel\Paddle\Events\SubscriptionUpdated;
use Laravel\Paddle\Events\TransactionCompleted;
use Laravel\Paddle\Events\TransactionUpdated;
use Laravel\Paddle\Events\WebhookReceived;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        Verified::class => [
            SendEmailGreetingNewCustomer::class,
        ],
        // WebhookReceived::class => [
        //     PaddleEventListener::class,
        // ],
    ];

    /**
     * The model observers for your application.
     *
     * @var array
     */
    protected $observers = [
        Bill::class => [BillObserver::class],
        BillDetail::class => [BillDetailObserver::class],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
