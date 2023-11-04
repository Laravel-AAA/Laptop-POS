<?php

namespace App\Http\Requests\Business;

use App\Models\Business;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreBusinessRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50|min:3|unique:' . Business::class,
            'logoFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048',//max file 2 MB
            'phone' => 'required|string|max:15|min:4|unique:' . Business::class,
            'taxPercent' => 'nullable|decimal:0,8|min:0|max:10',//0.5 is 50% tax rate
            'currency' => 'nullable|string|max:10',
            'country' => 'required|string|max:50',
            'city' => 'required|string|max:50',
            'address' => 'required|string|max:255',
            'taxIdentificationNumber' => 'nullable|string|max:255',
        ];
    }
}
