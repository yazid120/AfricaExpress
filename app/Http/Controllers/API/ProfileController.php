<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    public function index(Request $request){
      $user =  User::all()->where('user_token',$request->token)->first();
      return response()->json($user);
    }
}
