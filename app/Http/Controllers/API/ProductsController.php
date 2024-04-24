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
        $product = product::with('brand', 'Categories')
        ->findOrFail($request->id);

        if ($product) {
            return response()->json($product);
        } else {
            return response()->json(['error' => 'Product not found !!']);
        }
    }

    public function imageProductIndex(Request $request){
     $product_images = DB::table('products')
    ->join('product_images', 'products.id', '=', 'product_images.product_id')
    ->select('products.*', 'product_images.image_uri')
    ->where('products.id',$request->id)
    ->pluck('image_uri')
    ->all();
      if($product_images){
        return response()->json($product_images);
      }else{
        return response()->json(['product not found !!']);
      }
    }

    public function show(){
        $products = Product::with('brand')
        ->get();

        return response()->json($products);
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

       $validator = $request->validate([
        'name' => 'required|max:255|min:5|unique:products',
        'price_unit' => 'required|numeric',
        'product_image' => 'required',
        'product_quantity' => 'required|integer|min:1',
        'product_description' => 'min:10'
       ]);

    //    $product = product::create([
    //     'name' => $request->name,
    //     'price_unit' => $request->price_unit,
    //     'image' => $request->product_image,
    //     'quantity' => $request->product_quantity,
    //     'product_description'=> $request->product_description
    //    ]);

    //    return response()->json([
    //     'status'=>'ok',
    //     'massage'=> 'product created successfuly',
    //     'product'=> $product
    //    ]);
    return response()->json($validator);

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
