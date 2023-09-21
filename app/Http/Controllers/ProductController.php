<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProductController extends Controller
{
    function index(Request $request)
    {
        // dd($request->user()->id);
        // dd(Product::all()->where('user_id',$request->user()->id));
        // dd($request->user()->products()->latest()->get());
        // dd(DB::table('products')->where('user_id','=',$request->user()->id)->get());
        $products = $request->user()->products()->latest()->get();
        return Inertia::render('Inventory/index', [
            'products' => $products,
            'productsCount' => count($products),
        ]);
    }

    function store(Request $request)
    {
        // dd($request->validate([
        //     'name' => 'required|string|max:255',
        //     'price' => 'nullable|decimal:0,8|numeric|min:0|max:9999',
        //     'img' => 'nullable|string|max:255',
        //     'barcode' => 'nullable|string|max:16',
        //     'quantity' => 'nullable|integer|numeric|min:0|max:9999'
        // ]));
        // $product = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'price' => 'nullable|decimal:0,8|min:0|max:9999',
        //     'img' => 'nullable|string|max:255',
        //     'barcode' => 'nullable|string|max:16',
        //     'quantity' => 'nullable|integer|min:0|max:9999'
        // ]);
        // Product::create([...$product, 'user_id' => $request->user()->id]);
        $request->user()->products()->create($request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('products')->where(function ($query) {
                return $query->where('user_id', Auth::id());//unique only to the same user
            })],
            'price' => 'nullable|decimal:0,8|min:0|max:9999',
            'img' => 'nullable|string|max:255',
            'barcode' => 'nullable|string|max:16',
            'quantity' => 'nullable|integer|min:0|max:9999'
        ]));
        return to_route('product.index');
    }
}
