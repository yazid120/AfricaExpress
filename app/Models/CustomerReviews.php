<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CustomerReviewsImages;

class CustomerReviews extends Model
{
    use HasFactory;
    protected $table = "customer_reviews";

    protected $fillable = ['user_id', 'product_id', 'review', 'rating'];

    public function images()
    {
        return $this->hasMany(CustomerReviewsImages::class);
    }
}
