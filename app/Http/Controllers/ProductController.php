<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
}
