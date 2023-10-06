<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ProductStoreRequest extends FormRequest
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
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('products')->where(function ($query) {
                    return $query->where('user_id', Auth::id()); //unique only to the same user
                })
            ],
            'price' => 'nullable|decimal:0,8|min:0|max:9999',
            'imageFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048',
            //size of 2 MB at most
            'barcode' => 'nullable|string|max:16',
            'stock' => 'nullable|integer|min:0|max:9999',
            'description' => 'nullable|string|max:500',

        ];
    }
}