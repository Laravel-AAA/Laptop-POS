<?php

namespace Database\Factories;

use App\Models\Bill;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quantity' => fake()->biasedNumberBetween(0, 5, 'sqrt'),
            'product_id' => Product::factory(),
            'bill_id' => Bill::factory(),
        ];
    }
}