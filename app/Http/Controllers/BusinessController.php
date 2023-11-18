<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Http\Requests\Business\UpdateBusinessRequest;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BusinessController extends Controller
{
    /**
     * Display the user's business form.
     */
    public function edit(Request $request): Response
    {
        $business = Business::with([
            'users' => function ($query) {
                $query->withTrashed();
            }
        ])->find($request->user()->business_id);
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
        Gate::authorize('update', $business);

        $updatedBusiness = $request->validated();
        //1- if logo is null OR there is new logo THEN delete the old logo.
        if ($business->logo && ($request->hasFile('logoFile') || $updatedBusiness['logo'] == null)) {
            $this->deleteFile($business->logo);
        }
        //2- if there is new logo store it.
        if ($request->hasFile('logoFile')) {
            $updatedBusiness['logo'] = $this->storeFile($request);
        }

        $business->update($updatedBusiness);
        $business->save();

        return redirect()->back()->with('success', 'Successfully updated');
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

        if ($business->logo) {
            $this->deleteFile($business->logo);
            $business->update(['logo'=>null]);
        }

        $user = $request->user();
        Auth::logout();
        $user->delete();
        $business->delete();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/')->with('success', 'Successfully deleted');
    }


    private function deleteFile(string $filePath)
    {
        if (env('FILESYSTEM_DISK') == 's3')
            return Storage::disk('businesses-logo')->delete(basename($filePath));
        return Storage::disk('businesses-logo')->delete($filePath);
    }

    /**Store a file in the correspond filesystem and return the path/name. If file stored in the cloud and name if locally  */
    private function storeFile(Request $request): string
    {
        if (env('FILESYSTEM_DISK') == 's3')
            return $this->businessesStorage()->url($request->logoFile->store('', 'businesses-logo'));
        return $request->logoFile->store('', 'businesses-logo');
    }

    //to ignore an error of intelephense extension.
    private function businessesStorage(): FilesystemAdapter
    {
        return Storage::disk('businesses-logo');
    }
}
