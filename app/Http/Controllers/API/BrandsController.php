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

    public function show(){
       $brands = Brands::all();
       return response()->json($brands);
    }

    public function create(Request $request){

    }

    public function delete(){

    }
}
