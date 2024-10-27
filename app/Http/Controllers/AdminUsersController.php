<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class AdminUsersController extends Controller
{
    public function index()
    {
        $users = User::paginate(4);
        return view('pages.users.index', compact('users'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:70',
            'email' => 'required|string|email|max:255|unique:user',
            'user_type' => 'required|in:customer,seller',
            'phone_number' => 'nullable|string|max:15',
            'password' => 'required|string|min:8',
        ]);

        // Create the new user
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'user_type' => $request->user_type,
            'phone_number' => $request->phone_number,
            'password' => bcrypt($request->password), // Hash the password
            'user_token' => Str::random(80), // Generate a unique token
        ]);

        // Redirect back with a success message
        return redirect()->route('users.index')->with('success', 'Client added successfully.');
    }

    public function show()
    {

    }

    public function edit()
    {

    }
}
