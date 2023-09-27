<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\product;
use App\Models\User;

class WishlistItem extends Model
{
    use HasFactory;
    protected $table = 'wishlist_item';
    protected $fillable = ['product_id','whishlist_id'];

    public function product(){
        return $this->belongsTo(product::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

}
