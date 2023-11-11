<?php

namespace Database\Factories;

use App\Models\Bill;
use App\Models\Business;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            // password: asdfasdf
            'password' => '$2y$10$eq9cyRecAlRJ6Ot0VquiNOEJrpZqk9whpqapa2bC1vlqFY13.SRdy',
            'remember_token' => Str::random(10),
            'role' => 'Owner',
            'business_id' => Business::factory(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}