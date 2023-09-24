<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class ProductLinkCategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ProductsLinkCategories = [
            ['product_id'=>'4','categorie_id'=>'5','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>'5', 'categorie_id'=>'7','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>'1', 'categorie_id'=>'9','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product_id'=>'2', 'categorie_id'=>'3','created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ];
        foreach($ProductsLinkCategories as $ProductLinkCategory){
            DB::table('product_categorie')->insert($ProductLinkCategory);
        }
    }
}
