<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View; 

class CategoryController extends Controller
{
    public function index(){
        return Category::all(); 
    }

    public function create(Request $request)
    { 
        $validation = $request->validate([
         'cat_name' => 'required|max:255|min:3|unique:categories', 
         'product_Category_description' => 'required'
        ]);
     
        $category = Category::create([
        'cat_name'=>$request->cat_name,
        'description'=>$request->product_Category_description
        ]); 
        return response()->json([
            'status'=>'ok',
            'message'=>'Category product created successfuly',
            'category'=>$category
        ],201);
    }

    public function update(){

    }
    public function delete($id){
        $category = Category::find($id); 
        if(!$category){
            return response()->json([
                'status'=>'error',
                'message'=>'Category not found'
            ]);
        }
        # delete category product
        $category->delete();
        return response()->json([
            'status'=>'success',
            'message'=>'Category product deleted successfuly',
            'category_product'=>$category
        ]);
    }

}
