<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;
use App\Models\product;

class Cart_items extends Model
{
    use HasFactory;
    protected $table = "cart_items";
    
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
