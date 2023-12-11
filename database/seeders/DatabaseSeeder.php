<?php

namespace Database\Seeders;

use App\Models\Bill;
use App\Models\User;
use App\Models\Product;
use App\Models\Business;
use App\Models\BillDetail;
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
        $USERS = 2;
        // each user will make $PRODUCTS products and $BILLS bills where products won't exceeds number of bills.
        $PRODUCTS = 20; //total products = $USERS * $PRODUCTS
        $BILLS = 900; //  total bills    = $USERS * $BILLS
        //bill_details should be proportioned to number of bills to prevent unrealistic result we will use $BILL_DETAILS_PROPORTION
        $BILL_DETAILS_PROPORTION = 3; //float number
        //-----
        //loop $BUSINESSES times for each business
        //each $BUSINESSES iteration loop $USERS times for each users
        //each $USERS creates $PRODUCTS products & $BILLS bills for each user
        //each bill creates nearly $BILL_DETAILS_PROPORTION times of bill_details.

        $businesses = [];
        for ($b = 0; $b < $BUSINESSES; $b++) {
            $businesses[] = Business::factory()->createOneQuietly();
            $users = [];
            for ($u = 0; $u < $USERS; $u++) {
                $users[] = User::factory()->recycle($businesses[$b])
                    ->createQuietly($u === 0 ? ['name' => 'asdf', 'email' => ($b == 0 ? '' : $b) . 'asdf@asdf.asdf', 'role' => 'Owner', 'email_verified_at' => now(), 'created_at' => now(), 'deleted_at' => null] : []);
                $users[] = User::factory()->recycle($businesses[$b])
                    ->createQuietly(['role' => 'Owner', 'email_verified_at' => now(), 'created_at' => now()->subDecade(), 'deleted_at' => null]);
                $products = [];
                $bills = [];
                for ($i = 0; $i < $BILLS; $i++) {
                    if ($i < $PRODUCTS)
                        $products[] = Product::factory()->recycle($businesses[$b])->recycle($users[$u])->createQuietly();
                    $bills[] = Bill::factory()->recycle($businesses[$b])->recycle($users[$u])->createQuietly();
                }
                BillDetail::factory()->count(ceil($BILLS * $BILL_DETAILS_PROPORTION))->recycle($products)->recycle($bills)->createQuietly();
                // if ($b < 3) {
                //     Customer::create([
                //         'billable_type' => 'App\Models\Business',
                //         'paddle_id' => $b === 0 ? 'ctm_01hh7vdjh3m8k0rfq32b9h4gdp' : ($b === 1 ? 'ctm_01hh7yn4g40dhsygtt4c8qjccf' : 'ctm_01hh3mpm23vdjab54nmmd5ekap'),
                //         'name' => $businesses[$b]->name,
                //         'email' => $businesses[$b]->email,
                //         'trial_ends_at' => now()->addDays($b),
                //         'billable_id' => $businesses[$b]->id,
                //     ]);
                // }
            }
        }
    }
}
