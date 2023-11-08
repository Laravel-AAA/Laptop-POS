<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Http\Requests\Business\UpdateBusinessRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class BusinessController extends Controller
{
    /**
     * Display the user's business form.
     */
    public function edit(Request $request): Response
    {
        $business = Business::with('users')->find($request->user()->business_id);
        Gate::authorize('edit', $business);
        return Inertia::render('Authenticated/Business/Edit', [
            'business' => $business,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessRequest $request, Business $business)
    {
        // dd($request->validated());
        Gate::authorize('update', $business);
        $business->update($request->validated());


        $request->user()->save();

        return Redirect::route('business.edit');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Business $business)
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        Gate::authorize('destroy', $business);
        $user = $request->user();
        Auth::logout();
        $user->delete();
        $business->delete();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
