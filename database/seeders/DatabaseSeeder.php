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
        // try { //catch duplicate email error if ran twice
            $user = User::factory()
                ->create(['name' => 'asdf', 'email' => 'asdf@asdf.asdf']);
            $products = Product::factory()->count(100)->recycle($user)->create();
            $bills    = Bill::factory()->count(100)->recycle($user)->create();
            Transaction::factory()->count(1000)->recycle($products)->recycle($bills)->create();

        // } catch (Exception) {
        // }
        // $users = User::factory()->count(10);
        // $users->has($products)->create();
        // $products->for($users)->create();
        // $bills->has($users)->create();
        // $transactions->has($bills)->create();
        // $transactions->has($products)->create();
// create users:
//
        // Transaction::factory()
        // ->recycle(Bill::factory()
        //     ->recycle(User::factory()->create())->create())
        // ->recycle(Product::factory()->create()
        //     ->recycle(User::factory()->create()))
        // ->count(100)->create();
    }
}