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
        $brands = Brands::all();
        // return view('pages/products/index', compact('products', 'brands'));
        return response()->json(compact('products', 'brands'));
    }

    public function article(Product $product)
    {
        $product = $product->load(['ProductImage', 'brand', 'categories']);
        // return view('pages.products.article', compact('product'));
        return response()->json(['product'=>$product]);
    }

    public function articleUpdate(){

    }

    public function add(Request $request){
        $request->validate([
            'productName' => 'required|string',
            'brandName' => 'required|string',
            'priceUnit' => 'required|string',
            'productImage' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Example image validation
            'quantityAvailable' => 'required|integer',
            'productDescription' => 'nullable|string',
        ]);

        $imagePath = $request->file('productImage')->store('product_images');

        $product = new Product();
        $product->name = $request->input('productName');
        $product->brand_name = $request->input('brandName');
        $product->price_unit = $request->input('priceUnit');
        $product->image = $imagePath;
        $product->quantity = $request->input('quantityAvailable');
        $product->product_description = $request->input('productDescription');

        return response()->json(['message' => 'Product added successfully', 'product' => $product]);
    }

    // public function show(){
    //     $products = Product::with('images')->get();
    //     return view('pages/products/index', compact('products'));
    // }

}
