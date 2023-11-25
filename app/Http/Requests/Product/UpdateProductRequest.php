<?php

namespace App\Http\Requests\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateProductRequest extends FormRequest
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
                'string',
                'max:255',
                Rule::unique('products')->where(function ($query) {
                    return $query->where('business_id', Auth::user()->business_id); //unique only to the same business
                })->ignore($this->id)
            ],
            'price' => 'decimal:0,8|min:0|max:999999999',
            'imageFile' => 'image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048',
            //size of 2 MB at most
            'barcode' => 'string|max:16',
            'stock' => 'integer|min:0|max:9999',
            'img' => 'string|max:250',
            'description' => 'string|max:500',
        ];
    }
}
