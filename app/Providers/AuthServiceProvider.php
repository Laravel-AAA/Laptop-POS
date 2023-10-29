<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\Bill;
use App\Models\Product;
use App\Models\Transaction;
use App\Policies\BillPolicy;
use App\Policies\ProductPolicy;
use App\Policies\TransactionPolicy;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Product::class => ProductPolicy::class,
        Bill::class => BillPolicy::class,
        Transaction::class => TransactionPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->subject('Verify Email Address')
                ->line('Click the button below to verify your email address.')
                ->action('Verify Email Address', $url)
                ->line(Lang::get('If you did not create an account, no further action is required.'));
        });


    }
}
