<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
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

        return redirect()->back()->with('success', 'Successfully created. An invitation link sent to ' . $newUser->email);
    }

    /**
     * @param $account if $account is null then user updating profile. If not then owner is updating a business's account.
     */
    public function update(UpdateUserRequest $request, User $account): RedirectResponse
    {
        Gate::authorize('update', $account);
        if (isset($account->id)) { //update a business's account
            $account->fill($request->validated());
            if ($account->isDirty('email')) {
                $account->email_verified_at = null;
            }
            $account->save();
            return redirect()->back()
                ->with('success', 'Updated successfully');
        } else { //update profile
            $request->user()->fill($request->validated());
            if ($request->user()->isDirty('email')) {
                $request->user()->email_verified_at = null;
            }
            $request->user()->save();
            return redirect()->back()
                ->with('success', 'Successfully updated');
        }

    }

    /**
     * Delete the user's account.
     */
    public function destroy(User $account): RedirectResponse
    {
        Gate::authorize('destroy', $account);
        // Auth::logout();

        $account->delete();

        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        return redirect()->back()->with('success', 'Successfully soft-deleted');
    }

    /**Type hint won't work for trashed entity */
    public function restore(string $accountId): RedirectResponse
    {
        $account = User::onlyTrashed()->findOrFail($accountId);
        Gate::authorize('restore', $account);
        $account->restore();
        return redirect()->back()->with('success', 'Successfully restored');
    }

    public function forceDestroy(string $accountId): RedirectResponse
    {
        $account = User::onlyTrashed()->findOrFail($accountId);
        Gate::authorize('forceDestroy', $account);
        $account->forceDelete();
        return redirect()->back()->with('success', 'Successfully deleted');
    }
}