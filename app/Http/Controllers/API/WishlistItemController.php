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
      ->select('products.id','products.name','products.price_unit','products.image','wishlists.user_id')
      ->get();
      return response()->json($wishlistItems);
    }

    public function add(Request $request) {
        $validation_WishlistItems = $request->validate([
            'product_id' => 'required|integer',
            'whishlist_id' => 'required|integer'
        ]);

        if (!$validation_WishlistItems) {
            return response()->json(['error' => 'Error in data validation']);
        }

        // Check if the product_id is already in the wishlist
        $existingWishlistItem = WishlistItem::where('product_id', $request->product_id)
            ->where('whishlist_id', $request->whishlist_id)
            ->first();

        if ($existingWishlistItem) {
            return response()->json([
                'status' => 'error',
                'message' => 'Product already exists in the wishlist'
            ]);
        }

        // If not, create a new WishlistItem
        $wishlistItem = WishlistItem::create([
            'product_id' => $request->product_id,
            'whishlist_id' => $request->whishlist_id
        ]);

        return response()->json(['response'=>true, 'message' => 'Product added to wishlist successfully', 200]);
    }

    public function delete($productId){
        $productModel = new Product();

        $wishlistItem = WishlistItem::where('product_id', $productId)->first();

        if ($wishlistItem) {
            $wishlistItem->delete();

            $deletedItem = DB::table('wishlist_item')
                ->join('products', 'wishlist_item.product_id', '=', 'products.id')
                ->join('wishlists', 'wishlist_item.whishlist_id', '=', 'wishlists.id')
                ->select('wishlist_item.id', 'products.name', 'products.price_unit', 'products.image', 'wishlists.user_id', 'wishlist_item.whishlist_id')
                ->where('wishlist_item.product_id', $productId)
                ->first();

            return response()->json($deletedItem);
        }

        return response()->json(['error' => 'Item not found in wishlist'], 404);
    }
}
