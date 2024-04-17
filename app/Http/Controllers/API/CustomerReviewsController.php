<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CustomerReviews;
use App\Models\CustomerReviewsImages;

class CustomerReviewsController extends Controller
{
    public function ReviewsAll()
    {
    $customerReviews = CustomerReviews::with('images', 'user')->get();
    return $customerReviews;
    }

    public function ReviewsById($productId)
    {
        $customerReviews = CustomerReviews::with('images', 'user')
                                        ->where('product_id', $productId)
                                        ->get();
        if ($customerReviews->isEmpty()) {
            return response()->json(['message' => 'No reviews were found for this article.']);
        }
        return $customerReviews;
    }

    public function CustomeraddReview()
    {

    }

    public function CustomerUpdateReview()
    {

    }

    public function CustomerDeleteReview()
    {

    }
}
