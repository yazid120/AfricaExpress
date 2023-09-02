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
                'name' => 'apple watch',
                'categorie_prod' => 'electronique',
                'price_unit' => '10.99',
                'image' => 'appleWatch_AM.png',
                'quantity' => 20,
            ],
            [
                'name' => 'Ps4 Pro',
                'categorie_prod' => 'gaming & console',
                'price_unit' => '300',
                'image' => 'Ps4_Pro.jpg',
                'quantity' => 50,
            ],
            [
                'name' => 'Adidas t-shirt',
                'categorie_prod' => 'clothing',
                'price_unit' => '50.30',
                'image' => 't-shirt_Adidas_noir_ce2228.jpg',
                'quantity' => 100,
            ]
            // Add more product data entries here...
        ];

        foreach ($products as $product) {
            DB::table('products')->insert($product);
        }
    }
}
