<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\WishlistItem;
use App\Models\User;

class Wishlist extends Model
{
    use HasFactory;
    protected $table = "wishlists";
    protected $fillable = [
        'user_id'
    ];

    public function userWishlist(){
        return $this->belongsTo(User::class, 'foreign_key');
    }
    public function wishListItem(){
        return $this->hasMany(WishlistItem::class);
    }
}
