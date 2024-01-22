<?php

namespace App\Console;

use App\Mail\DatabaseTablesCounts;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        //delete old bills
        $schedule->call(function () {
            $deletedCount = DB::table('bills')
                ->where('updated_at', '<', now()->subYear())
                ->orWhere('created_at', '<', now()->subYears(2))
                ->delete();
            Log::warning('Annual Schedule: Delete Old Bills: have deleted ' . $deletedCount . ' bills.');
        })->yearly()->name('Delete Old Bills');

        //email me database table counts
        $schedule->call(function () {
            $businesses = DB::table('business')->count();
            $users = DB::table('users')->count();
            $products = DB::table('products')->count();
            $bills = DB::table('bills')->count();
            Log::warning('Daily Schedule: Email Me Database Tables Counts: businesses(' . $businesses . '), users(' . $users . '), products(' . $products . '), bills(' . $bills . ').');
            Mail::to('ahmad.alkaf.ahk@gmail.com')->send(new DatabaseTablesCounts($businesses,$users,$products,$bills));
        })->daily()->name('Email Me Database Tables Counts');
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
