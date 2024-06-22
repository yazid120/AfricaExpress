<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use App\Mail\ResetPasswordMail;

class ForgotPasswordController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'Email not found.']);
        }

        $token = Str::random(64);

        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => hash('sha256', $token),
            'created_at' => now(),
        ]);

        $expires = now()->addMinutes(60)->getTimestamp(); // Expiration time in UNIX timestamp
        $signature = hash_hmac('sha256', $request->email . $expires . $token, env('APP_KEY'));

        $resetUrl = URL::temporarySignedRoute(
            'password.reset', // Route name for the password reset page
            now()->addMinutes(60), // Expiration time for the URL (adjust as needed)
            ['email' => $request->email, 'exp' => $expires, 'token' => $token, 'sig' => $signature] // Rename 'signature' to 'sig'
        );

        // Append the parameters to the base URL
        $fullResetUrl = 'http://localhost:5000/reset-password?' . http_build_query([
            'email' => urlencode($request->email),
            'exp' => $expires,
            'token' => urlencode($token),
            'sig' => urlencode($signature), // Rename 'signature' to 'sig'
        ]);

        // Send email using the Mailable class
        Mail::to($request->email)->send(new ResetPasswordMail($fullResetUrl));

        return response()->json(['success' => true, 'message' => 'Password reset link sent to your email.']);
    }


}
