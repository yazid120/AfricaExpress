<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brands;

class AdminBrandsController extends Controller
{
    public function index(){
        $brands = Brands::all();
        return view('pages/brands/index', compact('brands'));
        // return response()->json(['brands'=>$brands]);
    }
}
