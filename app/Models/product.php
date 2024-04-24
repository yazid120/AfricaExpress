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
        'quantity',
        'brand_id',
        'product_description', 'logical_delete'
    ];

    protected static $marks = [
        Wishlist::class,
    ];

    // Categorie product relation
    public function Categories(){
      return $this->belongsToMany(Category::class, 'product_categorie', 'product_id', 'categorie_id');
    }
    // Wishlist product relation
    public function WishlistProduct(){
       return $this->belongsToMany(WishlistItem::class);
    }
    public function carts(){
        return $this->belongsToMany(Cart::class)->withPivot('quantity');
    }
    // Product image relation
    public function ProductImage(){
        return $this->hasMany(ProductImage::class);
    }
    // brands relation
    public function brand(){
        return $this->belongsTo(Brands::class);
    }


}
