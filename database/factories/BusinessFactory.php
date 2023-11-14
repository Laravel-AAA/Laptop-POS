<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Business>
 */
class BusinessFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'logo' => fake()->optional()->imageUrl(640, 480, 'Product'),
            'name' => ucwords(fake()->word()),
            'country' => fake()->country(),
            'city' => fake()->city(),
            'address' => fake()->address(),
            'currency' => fake()->currencyCode(),
            'taxPercent' => fake()->randomFloat(2, 0, 0.3),
            'countryCallingCode' => '+966',
            'phone' => fake()->unique()->numerify('5#########'),
            'taxIdentificationNumber' => fake()->optional()->numerify('###############'),

            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
            // 'deleted_at' =>function (array $attributes) {
            //     return $this->faker->optional(0.3)->dateTimeBetween($attributes['updated_at'], 'now');
            // },
        ];
    }
}
