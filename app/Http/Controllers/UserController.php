<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProfileRequest;
use App\Mail\InviteAccountToBusiness;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Authenticated/Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    //Create an account by business's Owner. Registering is in RegisterController
    public function store(Request $request)
    {

        $newUser = new User($request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'password' => ['required', Password::defaults()],
            'role' => ['required', Rule::in(User::$ROLES)],
        ]));
        $newUser->business_id = $request->user()->business_id;
        $newUser->save();
        Mail::to($newUser)->send(new InviteAccountToBusiness($request->user(), $newUser));

        return redirect()->back()->with('success', 'Account ' . $newUser->name . ' have been created successfully. An invitation link sent to ' . $newUser->email . ' with the login information');
    }

    /**
     * @param $account if $account is null then user updating profile. If not then owner is updating a business's account.
     */
    public function update(UpdateProfileRequest $request, User $account): RedirectResponse
    {
        Gate::authorize('update', $account);
        if (isset($account)) { //update a business's account
            dd('it is update account', $account);
            $account->fill($request->validated());
            if ($account->isDirty('email')) {
                $account->email_verified_at = null;
                if ($request->input('resendVerificationLink', false)) {

                    Mail::to($account)->send(new InviteAccountToBusiness($request->user(), $account));
                }
            }
            $account->save();
        } else { //update profile
            $request->user()->fill($request->validated());
            if ($request->user()->isDirty('email')) {
                $request->user()->email_verified_at = null;
            }
            $request->user()->save();
        }

        return redirect()->back()
            ->with('success', 'Your information have been updated successfully');
    }

    // /**
    //  * Delete the user's account.
    //  */
    // public function destroy(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'password' => ['required', 'current_password'],
    //     ]);
    //     //!user should have no products to be able to delete his account to insure images are deleted and prevent accident deletion
    //     $user = $request->user();
    //     Gate::authorize('destroy', $user);

    //     Auth::logout();

    //     $user->delete();

    //     $request->session()->invalidate();
    //     $request->session()->regenerateToken();

    //     return Redirect::to('/');
    // }
}