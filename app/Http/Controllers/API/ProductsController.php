<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\CategoryController;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Models\product;
use App\Models\Category;

class ProductsController extends Controller
{
    public function index(){

    }
    public function show(){
     $product = DB::table('products')->orderBy('id','desc')->get();
     return response()->json($product);
    }

    public function ProductCategorieFilter(){

    }

    #Create product admin
    public function create(Request $request){

       $validator = $request->validate([
        'name' => 'required|max:255|min:5|unique:products',
        'price_unite' => 'required',
        'image' => 'required',
        'quantity' => 'required|min:1'
       ]);

       $product = product::create([
        'name'=> $request->Product_name,
        'price_unit'=> $request->Product_price,
        'image' => $request->Product_image_uri,
        'quantity' => $request->Product_quantity
       ]);

       return response()->json([
        'status'=>'ok',
        'massage'=> 'product created successfuly',
        'product'=> $product
       ]);

        // $products = DB::table('products')->where('id',$product->id)->get();
        // $category = DB::table('categories')->get();
        // return response()->json([$products]);
    }
    #Update product admin
    public function update(){

    }
    #Delete product admin
    public function delete(){

    }
}
