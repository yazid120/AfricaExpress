<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class BrandsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Brands = [
            ['brand_name'=>'asus','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Logitech','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'adidas','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Nike','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Asus','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Sony','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'apple','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'samsung','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Zara','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'H&M','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Puma','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'New Balance','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>"L'oreal",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Garnier','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Nestlé','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Reebok','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Dove','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'NIVEA','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Gillette','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Rexona','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Milka','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Nutella','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Kinder','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Lindt','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Ferrero','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Toblerone','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['brand_name'=>'Nespresso','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach($Brands as $Brand){
            DB::table('brands')->insert($Brand);
        }

    }
}
