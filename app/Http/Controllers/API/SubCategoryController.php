<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubCategory;
use Illuminate\Support\Facades\DB;

class SubCategoryController extends Controller
{
    public function index(Request $request){
      $subCategory = DB::table('sub_categories')
      ->join('categories','sub_categories.cat_id','=','categories.id')
      ->select('categories.cat_name','sub_categories.*')
      ->get();
    }

    public function show(){
      $subCategory = DB::table('sub_categories')
      ->join('categories','sub_categories.cat_id','=','categories.id')
      ->select('categories.cat_name','sub_categories.*')
      ->get();
      if($subCategory){
        return response()->json($subCategory);
      }else{
        return response()->json(['message'=>'sub porduct not availble/found']);
      }
    }

    public function update(){

    }

    public function delete(){

    }
}
