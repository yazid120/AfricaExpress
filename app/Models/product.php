<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Wishlist;
use App\Models\WishlistItem;
use App\Models\ProductImage;
use App\Models\Brands; 

class product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $fillable=[
        'name',
        'categorie_prod',
        'image',
        'quantity'
    ];

    protected static $marks = [
        Wishlist::class,
    ];

    // Categorie product relation
    public function Categorie(){
      return $this->belongsToMany(Category::class);
    }
    // Wishlist product relation
    public function WishlistProduct(){
       return $this->belongsToMany(WishlistItem::class); 
    }
    // Product image relation
    public function ProductImage(){
        return $this->hasMany(ProductImage::class);
    }
    public function ProductBrand(){
        return $this->hasOne(Brands::class); 
    }

}
