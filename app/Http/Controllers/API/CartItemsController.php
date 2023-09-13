<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\product;
use App\Models\Cart_items;

class CartItemsController extends Controller
{
    public function index(){
      return Cart_items::all();
    }

    public function addItemToCart($product_id, $user_id){
      $cart_status = ''; 
      
    }
}
