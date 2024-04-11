<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CustomerReviews;

class CustomerReviewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userIds = [1, 2, 3];

        $productId = 5;

        // Generate four reviews for the Logitech G502 HERO Wired Gaming Mouse
        for ($i = 0; $i < 4; $i++) {
            $userId = $userIds[array_rand($userIds)];
            $reviewContent = $this->generateReviewContent();

            CustomerReviews::create([
                'user_id' => $userId,
                'product_id' => $productId,
                'review' => $reviewContent,
                'rating' => rand(4, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    /**
     * Generate random review content.
     *
     * @return string
     */
    private function generateReviewContent()
    {
        $reviewContent = [
            "This Logitech G502 HERO mouse is absolutely fantastic! The precision and speed it offers are unparalleled. It fits perfectly in my hand, and the customizable buttons are a game-changer.",
            "I've been using the Logitech G502 HERO mouse for a while now, and I'm extremely impressed. The build quality is top-notch, and the sensor is incredibly accurate. The adjustable DPI settings allow me to customize my gaming experience perfectly.",
            "The Logitech G502 HERO mouse is hands down the best gaming mouse I've ever used. The ergonomics are excellent, and the customizable RGB lighting adds a nice touch. It's highly responsive, and the extra programmable buttons are a huge plus for gaming.",
            "I'm blown away by the performance of the Logitech G502 HERO mouse. It's super comfortable to use for long gaming sessions, and the adjustable weight system allows me to fine-tune the feel. The software customization options are extensive, making it easy to personalize my setup.",
        ];
        // Randomly select a review from the array
        $randomIndex = array_rand($reviewContent);
        return $reviewContent[$randomIndex];
    }
}

