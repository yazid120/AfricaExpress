<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order_details;
use App\Models\product;

class Order_items extends Model
{
    use HasFactory;
    protected $table = "order_items";

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price'
    ];

    public function order()
    {
        return $this->belongsTo(Order_details::class, 'order_id');
    }

    public function product()
    {
        return $this->belongsToMany(product::class, 'product_id');

    }
}
