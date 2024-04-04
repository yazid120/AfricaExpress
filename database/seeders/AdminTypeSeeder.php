<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AdminType; // Import the AdminType model

class AdminTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define the administrator types
        $adminTypes = [
            ['admin_type' => 'Super Admin'],
            ['admin_type' => 'Admin'],
            ['admin_type' => 'Moderator'],
            ['admin_type' => 'Customer Support'],
            ['admin_type' => 'Warehouse Manager'],
        ];

        // Insert the administrator types into the database
        foreach ($adminTypes as $type) {
            AdminType::create($type);
        }
    }
}
