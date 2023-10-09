<?php

namespace Database\Seeders;

use App\Models\Bill;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\User;
use Exception;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //Run `php artisan migrate:fresh --seed`
        $user = User::factory()
            ->create(['name' => 'asdf', 'email' => 'asdf@asdf.asdf']);
        $products = Product::factory()->count(100)->recycle($user)->create();
        $bills = Bill::factory()->count(100)->recycle($user)->create();
        Transaction::factory()->count(500)->recycle($products)->recycle($bills)->create();
        for ($i = 0; $i < 10; $i++) {
            $user = User::factory()->create();
            $products = Product::factory()->count(100)->recycle($user)->create();
            $bills = Bill::factory()->count(100)->recycle($user)->create();
            Transaction::factory()->count(500)->recycle($products)->recycle($bills)->create();
        }
    }
}