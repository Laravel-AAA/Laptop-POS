<?php

namespace App\Http\Requests\Bill;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreBillRequest extends FormRequest
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
            'cashReceived' => 'nullable|decimal:0,8|min:0|max:999999999',
            'transactions' => 'required|array|min:1',
            'transactions.*.quantity' => 'required|integer|min:0|max:9999',
            'transactions.*.product_id'=> 'required|exists:products,id',
        ];
    }
}
