<?php

namespace App\Http\Requests\Business;

use App\Models\Business;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBusinessRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->business);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => [
                'string',
                'max:50',
                'min:3',
                Rule::unique(Business::class)->ignore($this->user()->business_id),
            ],
            'logoFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048',
            //max file 2 MB
            'logo' => 'nullable|string|max:250',
            'phone' => [
                'string',
                'max:15',
                'min:4',
                Rule::unique(Business::class)->ignore($this->user()->business_id),
            ],
            'countryCallingCode' => 'string|max:6',
            'taxPercent' => 'decimal:0,8|min:0|max:10',
            //0.5 is 50% tax rate
            'currency' => 'string|max:5',
            'country' => 'string|max:50',
            'city' => 'string|max:50',
            'address' => 'string|max:255',
            'taxIdentificationNumber' => 'nullable|string|max:255',
        ];
    }
}