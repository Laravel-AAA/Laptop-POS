<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Business;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\RegisterRequest;

class RegisterController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Authenticating/Register/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request): RedirectResponse
    {
        $registerInfo = $request->validated();
        $user = new User($registerInfo);

        DB::transaction(function () use ($registerInfo, $request, &$user) {
            $business = new Business($registerInfo['business']);
            $business->save();
            if (
                $request->hasValidSignatureWhileIgnoring(['plan', 'period'])
                && isset($request->email)
            ) {
                $user->email = $request->email;
                $user->email_verified_at = now();
            }
            $user->business_id = $business->id;
            $user->save();

            //Laravel should be exposed to internet for this function to work
            if (env('APP_ENV') !== 'testing')
                $business->createAsCustomer([
                    'trial_ends_at' => now()->addDays(3),
                ]);
        });

        event(new Registered($user));

        Auth::login($user);

        if ( //registered by clicking a specific subscription plan
            !empty($request->period) &&
            !empty($request->plan)
        )
            return redirect(route('subscription.subscribe', ['period' => $request->period, 'plan' => $request->plan]));

        return redirect(RouteServiceProvider::HOME)->with('message', 'Welcome ' . $user->name);
    }
}
