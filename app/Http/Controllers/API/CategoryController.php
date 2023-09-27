<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return response()->json($categories);
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

    public function update(Request $request, $id){
      $request_validation = $request->validate([
        'name'=>'required|min:6',
      ]);
      $category = Category::findOrFail($id);

      # update category product
      $category->update($request_validation);

      return response()->json(['status'=>'ok', 'message'=>'Category updated successfuly !!']);
    }

    public function delete($id){
        $category = Category::findOrFail($id);
        if(!$category){
            return response()->json([
                'status'=>'error',
                'message'=>'Category not found'
            ]);
        }
        # delete category product
        $category->delete();
        return response()->json([
            'status'=>'ok',
            'message'=>'Category product deleted successfuly',
            'category_product'=>$category
        ]);
    }

}
