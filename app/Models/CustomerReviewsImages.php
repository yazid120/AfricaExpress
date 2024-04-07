<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CustomerReviews;

class CustomerReviewsImages extends Model
{
    use HasFactory;
    protected $table = "customer_review_images";

    protected $fillable = ['customer_review_id', 'image_url'];

    public function review()
    {
        return $this->belongsTo(CustomerReviews::class);
    }
}
