<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;

class AdminController extends Controller
{
    #signup admin action
    public function SignupAdmin(Request $request){
     $validate = Validator::make($request->json()->all(),[
        'name'=>'required|string|min:3|max:55', 
        'email'=>'required|string|email|max:200|unique:user', 
        'password'=>'required|string|min:6'
     ]); 

     if($validate->fails()){
        return response()->json([
            'message'=>$validate->errors(),
            'status'=>'admin validation error'
        ],404); 
     }
     $admin = Admin::create([
        'name'=>$request->name,
        'email'=>$request->email, 
        'password'=> Hash::make(md5($request-> password))
     ]);
     return response()->json([
        'message'=>'Admin account created Successfuly',
        'admin account'=>$admin,
      ],201);
    } 

    # login admin action
    public function LoginAdmin(Request $request){
     $validate_login = Validator::make($request->all(),[
        'email'=>'required|string|email|max:200', 
        'password'=>'required|string|min:6'
     ]);
     
     if($validate_login->fails()){
        return response()->json([
            'meassge'=>$validate_login->errors(), 
            'status'=>'admin login validation error'
        ],404); 
     }

     $email_status = Admin::where('email', $request->email)->first();
     $password_status = Admin::where('email', $request->email)->where('password',md5($request->password))->first();
     
    }
}
