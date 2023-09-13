<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function SignUp(Request $request){
      $validated= Validator::make($request->json()->all(),[
        'name'=>'required|string|min:3|max:55',
        'email'=>'required|string|email|max:200|unique:user',
        'password'=>'required|string|min:6',
        'confirm_password'=>'required_with:password|same:password|min:6'
      ]);

      if($validated->fails()){
       return response()->json([
        'message'=>$validated->errors(),
        'status'=>'validation-error'
       ],404);
    return 'error validation';
    }

    $user= User::create([
      'name'=>$request->name,
      'email'=>$request->email,
      'password'=> md5($request-> password)
    ]);

    // add a cart id to user
    $cart= Cart::create([
      'user_id'=>$user->id
    ]);


      return response()->json([
        'message'=>'User registrated Successfuly',
        'status'=>'ok',
        'user'=>$user,
        'cart'=>$cart
      ],201);
    }


    public function login(Request $request){
      $validated_login = Validator::make($request->all(),[
        "email"=>"required|string|email|max:200",
        "password"=>"required|string|min:6"
      ]);

      if($validated_login->fails()){
       return response()->json([
        "message"=>$validated_login->errors(),
        "status"=>"login validation error"
       ]);
      }

    $email_status = User::where("email", $request->email)->first();
    $password_status = User::where("email",$request->email)->where('password',md5($request->password))->first();

    if(!is_null($email_status)){
    #correct email address
        if(!is_null($password_status)){
        # if the user exist we will create his cart 
          $cart_status = Cart::where('user_id', $password_status->id)->first(); 
          
        #correct password
          if(md5($request->password) === $password_status->password){
            if(!is_null($cart_status)){
            #matched pwd and login successful
            return response()->json(['status'=>'success','message'=>'user logged in successfuly','user_id'=>$password_status->id,
            'cart_id'=>$cart_status->id]);
            }else{
            return response()->json(['status'=>'error', 'message'=>'cart not created properly']);
            }
         }else{
           return response()->json(['status'=>'error', 'message'=>'wrong password']);
          }
        }else{
          return response()->json(['status'=>'error','message'=>'invalid password'.$password_status]);
        }
    }else{
          return response()->json(['status'=>'error','message'=>'wrong email address']);
    }

}
}

?>
