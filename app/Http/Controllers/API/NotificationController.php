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
}
