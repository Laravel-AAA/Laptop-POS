<?php

namespace App\Http\Requests\Product;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('update', $this->product);
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
                })->ignore($this->id)
            ],
            'price' => 'nullable|decimal:0,8|min:0|max:9999',
            'imageFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048',
            //size of 2 MB at most
            'barcode' => 'nullable|string|max:16',
            'stock' => 'nullable|integer|min:0|max:9999',
            'img' => 'nullable|string|max:250',
            'description' => 'nullable|string|max:500',
        ];
    }
}