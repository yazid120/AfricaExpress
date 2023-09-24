<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class CategoryProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $Categories = [
            ["cat_name"=>"Grocery & Gourmet Foods",
             "description"=>"The Grocery & Gourmet Foods category is a diverse and essential segment of the food
             industry that encompasses a wide range of products designed to meet consumers' culinary needs
             and preferences. This category includes everything from basic staples to specialty items, with
              an emphasis on high-quality and unique food products",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Beauty and Personal Care",
             "description"=>"The Beauty and Personal Care category is a comprehensive collection of products and
              items that cater to an individual's personal grooming, hygiene, and cosmetic needs. It offers a
              vast array of options for individuals of all ages, genders, and lifestyles to maintain and enhance
              their appearance, health, and well-being.",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Games & console",
             "description"=>"The Games & Consoles category is an exciting and diverse segment of the entertainment
              industry that revolves around video games and gaming hardware. It encompasses a wide range of gaming
             experiences, platforms, and accessories, providing enthusiasts with a world of immersive entertainment",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Books",
             "description"=>"The Books category encompasses an extensive selection of written works, including
              printed books, e-books, audiobooks, and more. These literary creations represent the collective
               knowledge, creativity, and imagination of authors from around the world. Books serve various purposes,
             including education, entertainment, inspiration, and information dissemination.",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Home and Kitchen",
             "description"=>"The Home and Kitchen category is a comprehensive collection of products, appliances,
              and furnishings intended to improve the functionality, aesthetics, and comfort of residential
              spaces. It caters to individuals and families looking to make their homes more efficient, stylish,
              and enjoyable. This category combines both practical and decorative elements to create a harmonious
              living space",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Clothing, Shoes, and Jewelry",
             "description"=>"The Clothing, Shoes, and Jewelry category is a comprehensive collection of products
             designed to help individuals express their personal style, enhance their appearance, and stay
              in step with the latest fashion trends. It encompasses a wide range of items, from clothing and
              accessories to footwear and jewelry, catering to people of all ages and fashion
              preferences.",'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Computer Accessories & Peripherals",
              "description"=>"The Computer Accessories & Peripherals category consists of essential and
               supplementary devices and hardware that complement and expand the capabilities of computers.
                These items are designed to improve the overall computing experience, whether you're using a
                desktop, laptop, or even a tablet. They encompass various subcategories, each catering to specific
                needs and preferences of users.", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Computer Components",
                "description"=>"Computer Components refer to the vital parts and hardware that make up a computer
                system. Whether you're building a custom PC, upgrading an existing one, or simply troubleshooting
                issues, understanding these components is crucial. Each element plays a unique role in the overall
            performance and functionality of your PC.", 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ["cat_name"=>"Wearable Technology",
                "description"=>"Wearable technology, often referred to as 'wearables,' represents a groundbreaking
                fusion of fashion and technology. These innovative devices are designed to be worn on the body,
                offering users a multitude of functionalities that can enhance their daily lives. Whether you're
                tracking your fitness goals, staying connected on the go, or even monitoring your health, wearable
                technology has become an integral part of modern living.", 'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()],

        ];

        foreach ($Categories as $Category) {
            DB::table('categories')->insert($Category);
        }

    }
}
