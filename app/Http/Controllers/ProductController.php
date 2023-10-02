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
    protected function index(Request $request)
    {

        // dd($request->user()->id);
        // dd(Product::all()->where('user_id',$request->user()->id));
        // dd($request->user()->products()->latest()->get());
        // dd(DB::table('products')->where('user_id','=',$request->user()->id)->get());

        //filter is a scope function in the Product model
        $products = $request->user()->products()->latest()->filter($request->only('search'))
            ->paginate(15)->appends($request->all());

        return Inertia::render('Inventory/index', [
            'products' => $products,
            'filter' => $request->only('search'),
        ]);
    }

    protected function store(Request $request)
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
            'quantity' => 'nullable|integer|min:0|max:9999'
        ]);

        if ($request->hasFile('imageFile')) {
            $product['img'] = $this->storeImg($request);
        }
        $request->user()->products()->create($product);

        return to_route('product.index');
    }

    protected function destroy(Request $request)
    {
        $product = $request->user()->products()->findOrFail($request->id);
        if ($product->img)
            $this->deleteImg($product->img);
        $product->delete();
        return to_route('product.index');
    }

    protected function update(Request $request)
    {

        $product = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('products')->where(function ($query) {
                    return $query->where('user_id', Auth::id()); //unique only to the same user
                })->ignore($request->route('id'))
            ],
            'price' => 'nullable|decimal:0,8|min:0|max:9999',
            'imageFile' => 'nullable|image|mimes:jpeg,jpg,png,apng,bmp,avif,webp,gif,svg|max:2048',
            //size of 2 MB at most
            'barcode' => 'nullable|string|max:16',
            'quantity' => 'nullable|integer|min:0|max:9999',
            'img' => 'nullable|string|max:250',
        ]);
        $oldProduct = $request->user()->products()->findOrFail($request->id);
        //1- if img is null delete it.
        if ($oldProduct->img && ($request->hasFile('imageFile') || $product['img'] == null)) {
            $this->deleteImg($oldProduct->img);
        }
        //2- if imageFile exist store it.
        if ($request->hasFile('imageFile')) {
            $product['img'] = $this->storeImg($request);
        }
        $oldProduct->update($product);
    }


    private function deleteImg(string $filePath)
    {
        if (env('FILESYSTEM_DISK') == 's3')
            return Storage::disk('products-images')->delete(basename($filePath));
        return Storage::disk('products-images')->delete($filePath);
    }

    /**Store an img file in the correspond filesystem and return the img path/name. path if it stored in the cloud and name if locally  */
    private function storeImg(Request $request): string
    {
        if (env('FILESYSTEM_DISK') == 's3')
            return Storage::disk('products-images')->url($request->imageFile->store('', 'products-images'));
        return $request->imageFile->store('', 'products-images');
    }
}