<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use App\Models\Brands;

class AdminProductsController extends Controller
{
    public function index()
    {
        $products = Product::with(['ProductImage','brand'])->get();
        return view('pages/products/index', compact('products'));
    }

    // public function show(){
    //     $products = Product::with('images')->get();
    //     return view('pages/products/index', compact('products'));
    // }

    public function update(){

    }
}
