<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\Business;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

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
        $business = new Business($registerInfo['business']);
        $business->save();
        if($request->hasValidSignature() && isset($request->email)){
            $user->email = $request->email;
            $user->email_verified_at = now();
        }
        $user->business_id = $business->id;
        $user->save();
        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME)->with('message', 'Welcome ' . $user->name);
    }
}