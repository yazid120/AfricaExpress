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
            [
                'name' => 'Nespresso InissiaKrups machine',
                'price_unit' => '79.99',
                'image' => 'Nespresso_InissiaKrups_Machine.jpg',
                'quantity' => 8,
            ]
            // Add more product data entries here...
        ];

        foreach ($products as $product) {
            DB::table('products')->insert($product);
        }
    }
}
