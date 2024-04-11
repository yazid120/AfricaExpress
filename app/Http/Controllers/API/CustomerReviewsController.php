<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CustomerReviews;
use App\Models\CustomerReviewsImages;

class CustomerReviewsController extends Controller
{
    public function index()
    {
        $customerReviewsModel = CustomerReviews::all();
        return $customerReviewsModel;
    }

    public function ReviewsAll()
    {
        $customerReviews = CustomerReviews::with('images', 'user')->get();
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
