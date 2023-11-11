<?php

namespace Tests\Feature\Auth;

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered(): void
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_new_users_can_register(): void
    {
        $response = $this->post('/register', [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role' => 'Owner',
            'password' => 'asdfasdf',
            'password_confirmation' => 'asdfasdf',
            'business' => [
                'name' => 'Laptop POS',
                'logo' => null,
                'country' => 'Saudi Arabia',
                'city' => 'Makkah',
                'address' => 'Ray',
                'currency' => 'ريال',
                'phone' => '555555555',
                'countryCallingCode'=>'+966',
                'taxPercent' => 0.15,
                'taxIdentificationNumber'=>null,
            ]
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }
}
