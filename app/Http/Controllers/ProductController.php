<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\ProductStoreRequest;
use App\Http\Requests\Product\ProductUpdateRequest;
use App\Models\Product;
use Illuminate\Filesystem\FilesystemAdapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{
    protected function index(Request $request)
    {
        //filter is a scope function in the Product model
        $products = $request->user()->products()->latest()->filter($request->only('search'))
            ->paginate(15)->appends($request->all());

        return Inertia::render('Authenticated/Inventory/index', [
            'products' => $products,
            'filter' => $request->only('search'),
        ]);
    }

    protected function store(ProductStoreRequest $request)
    {
        $product = $request->validated();

        if ($request->hasFile('imageFile')) {
            $product['img'] = $this->storeImg($request);
        }
        $request->user()->products()->create($product);

        return to_route('product.index');
    }

    protected function destroy(Product $product)
    {
        Gate::authorize('delete', $product);

        if ($product->img)
            $this->deleteImg($product->img);
        $product->delete();
        return to_route('product.index');
    }

    protected function update(ProductUpdateRequest $request, Product $product)
    {
        $newProduct = $request->validated();
        //1- if img is null OR there is new image THEN delete the old image.
        if ($product->img && ($request->hasFile('imageFile') || $newProduct['img'] == null)) {
            $this->deleteImg($product->img);
        }
        //2- if there is new image store it.
        if ($request->hasFile('imageFile')) {
            $newProduct['img'] = $this->storeImg($request);
        }
        $product->update($newProduct);
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
            return $this->productsImagesStorage()->url($request->imageFile->store('', 'products-images'));
        return $request->imageFile->store('', 'products-images');
    }

    //to ignore an error of intelephense extension.
    private function productsImagesStorage(): FilesystemAdapter
    {
        return Storage::disk('products-images');
    }
}