<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Http\Requests\Business\UpdateBusinessRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class BusinessController extends Controller
{
    /**
     * Display the user's business form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Authenticated/Business/Edit', [
            'business' => Business::with('users')->find($request->user()->business->id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessRequest $request, Business $business)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Business $business)
    {
        Gate::authorize('destroy', $business);
        //
    }
}
