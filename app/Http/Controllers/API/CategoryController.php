<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View; 

class CategoryController extends Controller
{
    public function index(){
        return $this; 
    }

    public function create(Request $request)
    { 
       return response()->json(['create a new category product']); 
    }
}
