<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CustomerReviews;
use App\Models\CustomerReviewsImages;

class CustomerReviewsImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $customerReviews = CustomerReviews::all();
        $customerReviewsImage = new CustomerReviewsImages();

        foreach ($customerReviews as $review) {
            $imageName = 'customer_review_' . $review->id . '.jpg';

            // Create a new instance of CustomerReviewsImages model
            $customerReviewsImage = new CustomerReviewsImages();

            // Assign the customer_review_id and image_url
            $customerReviewsImage->customer_review_id = $review->id;
            $customerReviewsImage->image_url = $imageName;

            // Save the record
            $customerReviewsImage->save();
        }
    }
}
