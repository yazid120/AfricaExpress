<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
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
        'password'=>'required|string|min:6'
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
        'password'=> Hash::make($request->json()->get('password')),
      ]);

    //   $user->save();

      return response()->json([
        'message'=>'User registrated Successfuly',
        'user'=>$user,
      ],201);
    }


    public function login(Request $request){
      return 'login';
    }
}

?>
