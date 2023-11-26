<?php

namespace Database\Seeders;

use App\Models\Bill;
use App\Models\Business;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Run `php artisan migrate:fresh --seed`
        // create $BUSINESSES businesses
        $BUSINESSES = 3;
        // each business has $USERS users one of them asdf with email 'asdf@asdf.asdf', '1asdf@asdf.asdf', '2asdf@asdf.asdf', ...etc.
        $USERS = 8;
        // each business has $PRODUCTS products and $BILLS bills where products won't exceeds number of bills.
        $PRODUCTS = 50;
        $BILLS = 250;
        //transactions should be proportioned to number of bills to prevent unrealistic result we will use $TRANSACTIONS_PROPORTION
        $TRANSACTIONS_PROPORTION = 3.33;
        //-----
        //loop $BUSINESSES times for each business
        //each $BUSINESSES iteration loop $USERS times for each users
        //each $USERS creates $PRODUCTS products & $BILLS bills for each user
        //each bill creates nearly $TRANSACTIONS_PROPORTION times of transactions.

        $businesses = [];
        for ($b = 0; $b < $BUSINESSES; $b++) {
            $businesses[] = Business::factory()->createOneQuietly();
            $users = [];
            for ($u = 0; $u < $USERS; $u++) {
                $users[] = User::factory()->recycle($businesses[$b])
                    ->createQuietly($u === 0 ? ['name' => 'asdf', 'email' => ($b == 0 ? '' : $b) . 'asdf@asdf.asdf', 'role' => 'Owner', 'email_verified_at' => now(), 'deleted_at' => null] : []);
                $products = [];
                $bills = [];
                for ($i = 0; $i < $BILLS; $i++) {
                    if ($i < $PRODUCTS)
                        $products[] = Product::factory()->recycle($businesses[$b])->recycle($users[$u])->createQuietly();
                    $bills[] = Bill::factory()->recycle($businesses[$b])->recycle($users[$u])->createQuietly();
                }
                Transaction::factory()->count(ceil($BILLS * $TRANSACTIONS_PROPORTION))->recycle($products)->recycle($bills)->createQuietly();
            }
        }
    }
}
