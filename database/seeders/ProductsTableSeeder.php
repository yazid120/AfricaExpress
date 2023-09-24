<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        $products = [
            ['name' => 'apple watch Series 4 (GPS, 40MM)', 'price_unit' => '110.00', 'image' => 'appleWatch_AM.png',
             'quantity' => 20,'brand_id'=>7,'product_description'=>"The Apple Watch Series 4 features a sleek and elegant design with a 40mm (1.57 inches) case size. It's available in various materials, including aluminum, stainless steel, and ceramic, allowing users to choose the one that suits their style.\nThe watch sports a beautiful OLED Retina display that is 40% larger than the Series 3, providing a more immersive and visually appealing experience.\nThe display is bright and sharp, making it easy to read notifications, messages, and fitness data, even in direct sunlight.",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Ps4 Pro', 'price_unit' => '300', 'image' => 'Ps4_Pro.jpg',
             'quantity' => 50,'brand_id'=>6,'product_description'=>"The PlayStation 4 Pro, often abbreviated as PS4 Pro, is a gaming console developed and released by Sony Interactive Entertainment. It's an enhanced version of the standard PlayStation 4, offering a range of improvements designed to provide gamers with a more immersive and visually stunning gaming experience.",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Adidas t-shirt', 'price_unit' => '50.30', 'image' => 't-shirt_Adidas_noir_ce2228.jpg',
             'quantity' => 100,'brand_id'=>3,'product_description'=>'','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'nespresso inissia krups coffee machine', 'price_unit' => '79.99', 'image' => 'Nespresso_InissiaKrups_Machine.jpg',
             'quantity' => 8,'brand_id'=>26,'product_description'=>"The Nespresso Inissia Krups Coffee Machine is a compact and efficient coffee maker designed to brew delicious espresso and lungo coffee with ease, It's perfect for kitchens with limited countertop space or for those who prefer a minimalist aesthetic",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'Logitech G502 HERO Wired Gaming Mouse','price_unit' => '49.99','image' => 'Logitech_G502_Hero.jpg',
            'quantity' => 8,'brand_id'=>2,'product_description'=>'The Logitech G502 HERO Wired Gaming Mouse is a high-performance gaming accessory designed for gamers who demand precision, speed, and customization','created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
            // Add more product data entries here...
        ];

        foreach ($products as $product) {
            DB::table('products')->insert($product);
        }
    }
}
