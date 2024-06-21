<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Notification;

class NotificationController extends Controller
{
    public function index()
    {

    }

    public function EmailVerifyNotification()
    {
        $users = User::whereNull('email_verified_at')->get();
        return response()->json($users);

    }

    public function AccountVerificationNot(Request $request)
    {
        $user = User::find($request->id);
        if(!$user){
            return response()->json(['response' => 'No user found with the provided ID'], 404);
        }
        $user_account_verified = $user->verified ? response()->json(['verified'=>true, 'response' => 'account verified']) : response()->json(['verified'=>false, 'response' => 'account not verified']);
        return $user_account_verified;
    }
}
