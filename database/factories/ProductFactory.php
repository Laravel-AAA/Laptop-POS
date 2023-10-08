<?php

namespace Database\Factories;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
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
            'name' => fake()->sentence(3),
            'img' => fake()->imageUrl(640, 480, 'Product'),
            'barcode' => fake()->isbn13(),
            'price' => $this->fakePrice(),
            'stock' => fake()->biasedNumberBetween(0, 50, 'sqrt'),
            'description' => fake()->sentence(substr(fake()->numberBetween(0, 30), 0, 500)),
            // 'transactions' => function () {
            //     return Transaction::factory()->count(1)->create();
            // },
        ];
    }

    private function fakePrice(): float
    {
        $chance = fake()->numberBetween(1, 10);
        //biased number is random number between minimum and maximum numbers but it has different        $biased
        // probability (tends) towards one end base on a mathematical function
        // (e.g., if the math function is 'log' then the generated number is tends
        //  towards the minimum number)
        if ($chance == 10) //%10 high price
            $biased = fake()->biasedNumberBetween(1, 999, 'sqrt');
        else
            $biased = fake()->biasedNumberBetween(1, 99, 'sqrt');

        if ($chance >= 3) //30% the price will be floated number. 70% is integer
            return $biased;
        return $biased + fake()->randomFloat(1, 0, 1);
    }
}