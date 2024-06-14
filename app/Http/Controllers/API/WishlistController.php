<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WishlistItem;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class WishlistController extends Controller
{
    public function index(){
        return Wishlist::all();
    }

    public function WishlistsSessionID(Request $request)
    {
         // Validate the input
        $validator = Validator::make($request->all(), [
            'user_token' => 'required|string|exists:user,user_token',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors(),
            ], 400);
        }

        // Fetch the user using the user_token
        $user = User::where('user_token', $request->user_token)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid user token',
            ], 404);
        }

        // Fetch the wishlist for the user
        $wishlist = Wishlist::where('user_id', $user->id)->first();

        if (!$wishlist) {
            return response()->json([
                'status' => 'error',
                'message' => 'Wishlist not found',
            ], 404);
        }

        // Return the wishlist ID
        return response()->json([
            'status' => 'success',
            'wishlist_id' => $wishlist->id,
        ]);
    

    }
}
