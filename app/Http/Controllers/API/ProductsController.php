<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
            return response()->json(['error' => 'Products not found !!']);
        }
    }

    public function imageProductIndex($id){
     $product_images = Product::with('ProductImage:id,product_id,image_uri')
     ->select('id' , 'name', 'image')
     ->find($id);

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

    public function ProductCategorieFilter(Request $request, $selection)
    {
        // $selectedOption = $request->input('option');
        $products = Product::query();

        // Apply sorting based on the selected option
        switch ($selection) {
            case 'default':
                return response()->json(['action' => 'default', 'products' => $products]);
                break;
            case 'latest':
                // Sort products by the created_at timestamp in descending order (latest first)
                $products = $products->orderBy('created_at', 'desc')->get();
                break;
            case 'price-high-to-low':
                $products = $products->orderBy('price_unit', 'desc')->get();
                break;
            case 'price-low-to-high':
                $products = $products->orderBy('price_unit', 'asc')->get();
                break;
            default:
                Log::error('Unexpected selection value: ' . $selection);
                return response()->json(['error' => 'Invalid selection value']);
        }

        return response()->json(['action' => 'updateProducts', 'products' => $products]);
    }

    public function ProductArticleImages(){
      $ProductArticleimg = DB::table('products')
       ->join('product_images','products.id','=','product_images.product_id')
       ->get();
      return response()->json($ProductArticleimg);
    }

    public function SearchProducts($query)
    {
        // Assuming you have a Product model and want to search products by name
        if ($query === null || $query === '') {
            return []; // Return an empty array if the query is empty
        }
        $searchResults = Product::where('name', 'like', '%' . $query . '%')->get();
        return $searchResults;
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
