<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $Categories = [
            ["cat_name "=>"Grocery & Gourmet Foods",
             "description"=>"The Grocery & Gourmet Foods category is a diverse and essential segment of the food
             industry that encompasses a wide range of products designed to meet consumers' culinary needs
             and preferences. This category includes everything from basic staples to specialty items, with
              an emphasis on high-quality and unique food products"],
        ];

        foreach ($Categories as $Category) {
            DB::table('categories')->insert($Category);
        }

    }
}
