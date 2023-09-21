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
    public function index(Request $request){
    $product = DB::table('products')
    ->join('product_images', 'products.id', '=', 'product_images.product_id')
    ->select('products.*', 'product_images.*')
    ->where('products.id',$request->id)
    ->get();
    return response()->json($product);
    }

    public function show(){
     $product = DB::table('products')->orderBy('id','desc')->get();
     return response()->json($product);
    }

    public function ProductCategorieFilter(){

    }

    public function ProductArticleImages(){
      $ProductArticleimg = DB::table('products')
       ->join('product_images','products.id','=','product_images.product_id')
       ->get(); 
      return response()->json($ProductArticleimg); 
    }

    #Create product admin
    public function create(Request $request){

    //    $validator = $request->validate([
    //     'name' => 'required|max:255|min:5|unique:products',
    //     'price_unit' => 'required|numeric',
    //     'product_image' => 'required',
    //     'product_quantity' => 'required|integer|min:1'
    //    ]);

       $product = product::create([
        'name' => 'Logitech G502 HERO Wired Gaming Mouse',
        'price_unit' => '49.99', 
        'image' => 'Logitech_G502_Hero.jpg',
        'quantity' => 8,
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
