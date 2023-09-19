<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brands;
use Illuminate\Support\Facades\DB;

class BrandsController extends Controller
{
    public function index(){
        $brands = Brands::all(); 
        return response()->json($brands);
    }

    public function create(Request $request){

    }
    
    public function delete(){

    }
}
