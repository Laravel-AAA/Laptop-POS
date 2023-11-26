<?php

namespace Database\Factories;

use App\Models\Business;
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
            'name' => fake()->sentence(3),
            'price' => $this->fakePrice(),
            'stock' => fake()->optional(0.7)->biasedNumberBetween(0, 50, 'sqrt'),
            'barcode' => fake()->optional(0.7)->isbn13(),
            'img' => fake()->optional(0.7)->imageUrl(640, 480, 'Product'),
            'description' => fake()->optional(0.7)->sentence(substr(fake()->numberBetween(0, 30), 0, 500)),

            'createdBy_id' => User::factory(),
            'business_id' => Business::factory(),

            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
        ];
    }


    private function fakePrice(): float|null
    {
        $optional = fake()->optional(0.7)->numberBetween(0, 1);
        if (!isset($optional))
            return null;
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