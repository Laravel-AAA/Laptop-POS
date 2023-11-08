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
            'name' => 'Laptop POS',
            'logo' => null,
            'country' => 'Saudi Arabia',
            'city' => 'Makkah',
            'address' => 'Ray',
            'currency' => 'ريال',
            'phone' => '555555555',
            'countryCallingCode' => '+966',
            'taxPercent' => 0.15,
            'taxIdentificationNumber' => null,
        ];
    }
}
