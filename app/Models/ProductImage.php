<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\product;

class ProductImage extends Model
{
    use HasFactory;

    protected $table = 'product_images';
    protected $fillable = ['product_id', 'image_uri'];

    public function product(){
        return $this->belongsTo(product::class); 
    }
}
