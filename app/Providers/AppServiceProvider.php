<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $appURL = env('APP_URL');
        $assetURL = env('ASSET_URL');
        if (isset($appURL) && (str_starts_with($appURL, 'https') || str_starts_with($assetURL, 'https')))
            URL::forceScheme('https');
    }
}