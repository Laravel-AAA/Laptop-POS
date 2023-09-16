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
        // dd(DB::table('products')->where('user_id','=',$request->user()->id)->get());
        return Inertia::render('Inventory/index', [
            'products' =>Product::all()->where('user_id',$request->user()->id),
            'productsCount'=>100,
        ]);
    }
}
