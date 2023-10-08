<?php

namespace Database\Factories;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bill>
 */
class BillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'cashReceived' => fake()->biasedNumberBetween(5, 999, 'sqrt'),
            // Define a relationship with Transactions
            // 'transactions' => function () {
            //     return Transaction::factory()->count(1)->create();
            // },
        ];
    }
}