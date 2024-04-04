<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                // Seed a single admin user
                DB::table('admin')->insert([
                    'name' => 'Admin',
                    'email' => 'admin@example.com',
                    'password' => Hash::make('123456'), // Hash the password
                    'type_id' => 1,
                    'last_loggedIn' => now(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
    }
}
