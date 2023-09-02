<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Models\product;

class ProductsController extends Controller
{
    public function index(){

    }

    public function show(){
     $product = Product::all();
     return response()->json($product);
    }
}
