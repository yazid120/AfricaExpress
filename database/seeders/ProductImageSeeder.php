<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon; 

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $prductImages =[
            ['product_id'=>4, 'image_uri'=>'Nespresso_InissiaKrups_Machine_1.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>4, 'image_uri'=>'Nespresso_InissiaKrups_Machine_2.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>4, 'image_uri'=>'Nespresso_InissiaKrups_Machine_3.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>4, 'image_uri'=>'Nespresso_InissiaKrups_Machine_4.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>5, 'image_uri'=>'Logitech_G502_HERO_1.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>5, 'image_uri'=>'Logitech_G502_HERO_2.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>5, 'image_uri'=>'Logitech_G502_HERO_3.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>5, 'image_uri'=>'Logitech_G502_HERO_4.jpg','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            
        ];

        foreach($prductImages as $productImage){
            DB::table('product_images')->insert($productImage);
        }
    }
}
