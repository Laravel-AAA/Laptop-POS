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
        // create 5 businesses
        // each business has 5 users one of them asdf
        // each business has 23 products and bills
        //-----
        //loop 5 times for each business
        //each 5 iteration loop 5 times for each users
        //each 1 creates 6 products & bills for each user
        //each bill creates 3 count of transaction using same product.
        $businesses = [];
        for ($b = 0; $b < 3; $b++) {
            $businesses[] = Business::factory()->create();
            $users = [];
            for ($u = 0; $u < 8; $u++) {
                $users[] = User::factory()->recycle($businesses[$b])
                    ->create($u == 0 ? ['name' => 'asdf', 'email' => $b . 'asdf@asdf.asdf', 'role' => 'Owner', 'email_verified_at' => now(), 'deleted_at' => null] : []);
                $products = [];
                $bills = [];
                for ($i = 0; $i < 240; $i++) {
                    $products[] = Product::factory()->recycle($businesses[$b])->recycle($users[$u])->create();
                    $bills[] = Bill::factory()->recycle($businesses[$b])->recycle($users[$u])->create();
                }
                Transaction::factory()->count(800)->recycle($products)->recycle($bills)->create();
            }
        }
    }
}