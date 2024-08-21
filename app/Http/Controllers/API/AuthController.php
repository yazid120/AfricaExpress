<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use App\Models\Cart;
use App\Models\Wishlist;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function SignUp(Request $request)
    {
      $validated= Validator::make($request->json()->all(),[
        'name'=>'required|string|min:3|max:55',
        'email'=>'required|string|email|max:200|unique:user',
        'password'=>'required|string|min:6',
        'confirm_password'=>'required_with:password|same:password|min:6'
      ]);

      if($validated->fails()){
        return response()->json([
            'message'=>$validated->errors(),
            'status'=>'infos missing please fill your form'
        ]);
        }
        #create new user
        $user= User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=> Hash::make($request-> password),
            'user_token'=> Str::random(60),
            'logical_delete'=> false
        ]);

        # add a cart id to user (personal)
        $cart= Cart::create([
            'user_id'=>$user->id
        ]);
        # add a wishlist to user (personal)
        $wishlist= Wishlist::create([
            'user_id'=>$user->id
        ]);

        return response()->json([
            'message'=>'User registrated Successfuly',
            'status'=>'ok',
            'user'=>$user,
            'cart'=>$cart,
            'wishlist'=>$wishlist
        ],201);

    }


    public function login(Request $request)
    {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:200',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors(),
                'status' => 'login validation error.'
            ]);
        }

        // Check if the user exists with the provided email
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'status' => 'wrong email address or password.',
                'message' => 'error'
            ]);
        }

        // Verify the password
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'wrong email address or password.',
                'message' => 'error'
            ]);
        }
        Session::start();

        // User authenticated successfully, create or fetch user sessions
        Session::put('user_id', $user->id);

        $cart = Cart::firstOrCreate(['user_id' => $user->id]);
        $wishlist = Wishlist::firstOrCreate(['user_id' => $user->id]);

        Session::put('cart_id', $cart->id);
        Session::put('wishlist_id', $wishlist->id);

        // Fetch user token for additional processing or authentication
        $userToken = $user->user_token;

        return response()->json([
            'status' => 'success',
            'message' => 'user logged in successfully',
            'user_id' => $user->id,
            'cart_id' => $cart->id,
            'wishlist_id' => $wishlist->id,
            'userToken' => $userToken
        ]);

    }


}

?>
