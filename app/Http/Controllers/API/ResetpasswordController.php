<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;

class ResetpasswordController extends Controller
{
    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'newPassword' => 'required|min:8', // Adjust validation rules as needed
        ]);

        $passwordReset = DB::table('password_resets')
            ->where('token', hash('sha256', $request->token))
            ->first();

        if (!$passwordReset) {
            return response()->json(['success' => false, 'message' => 'Invalid or expired token.']);
        }

        $user = User::where('email', $passwordReset->email)->first();

        if (!$user) {
            return response()->json(['success' => false, 'message' => 'User not found.']);
        }

        // Update user's password
        $user->password = Hash::make($request->newPassword);
        $user->save();

        // Delete the password reset entry
        DB::table('password_resets')->where('email', $user->email)->delete();

        return response()->json(['success' => true, 'message' => 'Password reset successfully.']);
    }
}
