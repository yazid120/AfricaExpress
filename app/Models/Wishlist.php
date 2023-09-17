<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\WishlistItem;

class Wishlist extends Model
{
    use HasFactory;

    protected $fillable = ['wishListItem_id'];

    public function wishListItem(){
        return $this->hasMany(WishlistItem::class); 
    }
}
