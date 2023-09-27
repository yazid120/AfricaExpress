<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WishlistItem;
use App\Models\User;
use App\Models\Wishlist;

class WishlistController extends Controller
{
    public function index(){
        return Wishlist::all();
    }
}
