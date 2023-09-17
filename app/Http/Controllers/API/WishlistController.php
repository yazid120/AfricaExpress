<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WishlistItem;

class WishlistController extends Controller
{
    public function index(){
        return WishlistItem::all(); 
    }
}
