<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        $products = [
            ['name' => 'apple watch', 'price_unit' => '10.99', 'image' => 'appleWatch_AM.png', 'quantity' => 20],
            ['name' => 'Ps4 Pro', 'price_unit' => '300', 'image' => 'Ps4_Pro.jpg', 'quantity' => 50],
            ['name' => 'Adidas t-shirt', 'price_unit' => '50.30', 'image' => 't-shirt_Adidas_noir_ce2228.jpg', 'quantity' => 100],
            ['name' => 'Nespresso InissiaKrups machine', 'price_unit' => '79.99', 'image' => 'Nespresso_InissiaKrups_Machine.jpg', 'quantity' => 8],
            // Add more product data entries here...
        ];

        foreach ($products as $product) {
            DB::table('products')->insert($product);
        }
    }
}
