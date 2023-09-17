<?php

namespace Database\Seeders;

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
        try {//catch duplicate email error if ran twice
            User::factory()->hasProducts(99)->create(['name' => 'asdf', 'email' => 'asdf@asdf.asdf']);
        } catch (Exception) {
        }
        User::factory()->count(10)->hasProducts(99)->create();
    }
}
