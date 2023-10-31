<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Http\Requests\StoreBusinessRequest;
use App\Http\Requests\UpdateBusinessRequest;
use Illuminate\Http\Client\Request;
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
            'business' => $request->user()->business(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBusinessRequest $request)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessRequest $request, Business $business)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Business $business)
    {
        //
    }
}
