<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SubCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Sub_Categories = [
            ['cat_id'=>3,'sub_cat_name'=>'Home Consoles','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>3,'sub_cat_name'=>'Video Games','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>3,'sub_cat_name'=>'Virtual Reality (VR)','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>3,'sub_cat_name'=>'Gaming Software and Tools','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Central Processing Units (CPUs)','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Motherboards','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Memory (RAM)','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Storage Drives','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Power Supplies (PSUs)','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Computer Cases','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Cooling Solutions','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Storage Accessories','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['cat_id'=>8,'sub_cat_name'=>'Cables and Connectors','created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        foreach($Sub_Categories as $Sub_Categorie){
            DB::table('sub_categories')->insert($Sub_Categorie);
        }
    }
}
