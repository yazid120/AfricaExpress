<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Cart;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Validator;

use function Laravel\Prompts\password;

class UsersController extends Controller
{

public function index(Request $request){
  $user = DB::table('user')->where('id', $request->id)->first();
  if($user){
    return response()->json($user);
  }else{
    return response()->json(['user not found !!']);
  }

}
public function show(){
    $user = User::all();
    return response()->json($user);
}

public function create(Request $request){
  $validation = $request->validate([
   'name'=>'required|string|min:3|max:70',
   'email'=>'required|string|email|max:200|unique:user',
   'password'=>'required|string|min:6',
   'confirm_password'=>'required_with:password|same:password|min:6',
  ]);

  if(!$validation){
    return response()->json([
        'status'=>'error',
        'message'=>'error validation'
    ],404);
  }

  $user = User::create([
    'name'=>$request->name,
    'email'=>$request->email,
    'password'=>md5($request->password),
  ]);

  // add a cart id to user (personal)
  $cart= Cart::create([
    'user_id'=>$user->id
  ]);
  // add a wishlist to user (personal)
  $wishlist= Wishlist::create([
     'user_id'=>$user->id
  ]);

  return response()->json([
    'status'=>'ok',
    'message'=>'user create successfuly !! admin+',
    'message-option'=>'with creating a new user acount a cart and wishlist log will be created automaticly',
    'user'=>$user
  ], 201);
}

public function update(Request $request, $id){
   $validation = $request->validate([
    'name'=>'string|min:3|max:55',
    'email'=>'string|email|max:200'
   ]);

   if(!$validation){
    return response()->json([
        'status'=>'error',
        'message'=>'error validation'
    ],404);
  }

    $user_valid = User::findOrFail($id);
    if(is_null($user_valid)){
     return response()->json([
      'status'=>'error',
      'message'=>'unvalid user']);
    }else{
      $user = User::where('id',$id)
      ->update([
        'name'=> $request->name,
        'email'=>$request->email
      ]);
      return response()->json([
        'status'=>'ok',
        'message'=>'user updated successfuly',
        'user'=>$user]);
    }

}
public function delete($id){
    $user_valid = User::findOrFail($id);

    if(is_null($user_valid)){
        return response()->json([
            'status'=>'error',
            'message'=>'user not found !!',
        ]);
    }else{
        // delete bout Cart & Wishlist user
        $cart = Cart::where('user_id', $id)->delete();
        $wishlist = Wishlist::where('user_id', $id)->delete();
        $user = User::where('id', $id)
        ->delete();
        return response()->json([
            'status'=>'ok',
            'message'=>'user account deleted successfuly'
        ]);
    }
}


}
