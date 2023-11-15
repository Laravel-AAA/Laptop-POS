<?php

namespace Database\Factories;

use App\Models\Business;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

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
        $role = fake()->randomElement(User::$ROLES);
        if ($role === 'Owner')
            $verifiedAt = now();
        else
            $verifiedAt = fake()->optional()->time();

        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => $verifiedAt,
            'password' => Hash::make('asdfasdf'),
            'remember_token' => Str::random(10),
            'role' => $role,

            'business_id' => Business::factory(),

            'created_at' => fake()->dateTimeBetween('-1 year', 'now'),
            'updated_at' => function (array $attributes) {
                return $this->faker->dateTimeBetween($attributes['created_at'], 'now');
            },
            'deleted_at' =>function (array $attributes) {
                return $this->faker->optional(0.3)->dateTimeBetween($attributes['updated_at'], 'now');
            },
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