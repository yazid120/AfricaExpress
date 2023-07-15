<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function SignUp(Request $request){
      $validated=$request->validate([
        'Name'=>'required|string|min:3|max:40',
        'email'=>'required|email|unique:user',
        'password'=>'required|'
      ]);
      if($validated){

      }
    }
}
