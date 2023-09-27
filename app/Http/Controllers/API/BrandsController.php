<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brands;
use Illuminate\Support\Facades\DB;

class BrandsController extends Controller
{
    public function index(){
      $brands = DB::table('brands')
      ->offset(3)
      ->limit(7)
      ->get();
      return response()->json($brands);
    }

    public function brand_index(Request $request){
      $brand = DB::table('brands')
      ->where('brands.id', $request->id)
      ->first();
      return response()->json($brand);
    }

    public function show(){
       $brands = Brands::all();
       return response()->json($brands);
    }

    public function create(Request $request){
      $validator = $request->validate([
       'brand_name'=>'required|string|max:200|unique:brands'
      ]);

      $brand = Brands::create([
        'brand_name'=>$request->brand_name
      ]);
      return response()->json([
        'status'=>'ok',
        'message'=>'brand created successfuly +admin',
        'brand'=>$brand
      ]);
    }

    public function update(Request $request, $id){
       $request_brand_validation = $request->validate([
        'brand_name'=>'required|string|max:200'
       ]);
       $brand = Brands::findOrFail($id);
       # update brand
       $brand->update($request_brand_validation);

       return response()->json([
        'status'=>'ok',
        'message'=>'brand updated successfuly +admin',
        'brand'=>$brand
       ]);
    }

    public function delete($id){
      $brand_id = Brands::findOrFail($id);
      if(!$brand_id){
        return response()->json([
            'status'=>'error',
            'message'=>'brand not found !!',
        ]);
      }
    # delete brand
      $brand= Brands::where('id', $id)
      ->delete();
      return response()->json([
        'status'=>'ok',
        'message'=>'brand deleted successfuly +admin'
      ]);
    }

}
