<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;


class AdminAuthController extends Controller
{
    public function index()
    {
        return view('auth.login');
    }

    public function loginAuth(Request $request)
    {
        // Validate the request data
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('admin')->attempt($request->only('email', 'password'))) {
            // Authentication successful for admin user
            $token = Str::random(40);
            $expirationToken = now()->addMonths(3);
            $cookie = Cookie::make('AfricaExpress_admin_access_token', $token, $expirationToken->diffInMinutes());

            return redirect()->intended('/')->withCookie($cookie);
        } else {
            // Authentication failed for admin user
            return response()->json(['email' => 'Invalid credentials']);
        }
    }
}
