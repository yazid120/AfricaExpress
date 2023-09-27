<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product;
use App\Models\User;
use App\Models\WishlistItem;
use Illuminate\Support\Facades\DB;

class WishlistItemController extends Controller
{
    public function index(){
      $wishlistItems = DB::table('wishlist_item')
      ->join('products','wishlist_item.product_id','=','products.id')
      ->join('wishlists','wishlist_item.whishlist_id','=','wishlists.id')
      ->select('products.name','products.price_unit','products.image','wishlists.user_id')
      ->get();
      return response()->json($wishlistItems);
    }

    public function add(Request $request){
      $validation_WishlistItems = $request->validate([
       'product_id'=>'required|integer',
       'whishlist_id'=>'required|integer'
      ]);

      if(!$validation_WishlistItems){
        return response()->json([
            'error'=>'error set data validation'
        ]);
      }

      $wishlistItem = WishlistItem::create([
        'product_id'=> $request->product_id,
        'whishlist_id'=> $request->whishlist_id
      ]);

      return response()->json([
        'status'=>'ok',
        'message'=>'product added to wishlist successfuly'
      ]);
    }

    public function delete(){

    }
}
