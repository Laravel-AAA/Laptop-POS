<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
        $products = $request->user()->products()->latest()->paginate(15);
        return Inertia::render('Inventory/index', [
            'products' => $products,
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
        $product = $request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('products')->where(function ($query) {
                return $query->where('user_id', Auth::id()); //unique only to the same user
            })],
            'price' => 'nullable|decimal:0,8|min:0|max:9999',
            'imageFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048', //size of 2 MB at most
            'barcode' => 'nullable|string|max:16',
            'quantity' => 'nullable|integer|min:0|max:9999'
        ]);

        if ($request->hasFile('imageFile')) {
            $fileName = Str::ulid()->toBase58() . '.' . $request->imageFile->extension();
            $product['img'] = $fileName;
            $request->imageFile->storeAs('public/products-images', $fileName);
        }
        $request->user()->products()->create($product);

        return to_route('product.index');
    }

    function destroy(Request $request)
    { //TODO: delete the image of the product if exit
        $product = $request->user()->products()->findOrFail($request->id);
        if ($product->img)
            Storage::delete('public/products-images/' . $product->img);
        $product->delete();
        return to_route('product.index');
    }

    function update(Request $request)
    {

        $product = $request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('products')->where(function ($query) {
                return $query->where('user_id', Auth::id()); //unique only to the same user
            })->ignore($request->route('id'))],
            'price' => 'nullable|decimal:0,8|min:0|max:9999',
            'imageFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048', //size of 2 MB at most
            'barcode' => 'nullable|string|max:16',
            'quantity' => 'nullable|integer|min:0|max:9999',
            'img' => 'nullable|string|max:250',
        ]);
        $oldProduct = $request->user()->products()->findOrFail($request->id);
        //1- if img is null delete it.
        if ($oldProduct->img && ($request->hasFile('imageFile')||$product['img']==null)) {
            Storage::delete('public/products-images/' . $oldProduct->img);
        }
        //2- if imageFile exist store it.
        if ($request->hasFile('imageFile')) {
            $fileName = Str::ulid()->toBase58() . '.' . $request->imageFile->extension();
            $product['img'] = $fileName;
            $request->imageFile->storeAs('public/products-images', $fileName);
        }
        $oldProduct->update($product);
    }
}
