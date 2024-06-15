<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order_details; 

class Payment_details extends Model
{
    use HasFactory;
    protected $table = "payment_details";

    protected $fillable = [
        'order_id',
        'amount',
        'provider',
        'status'
    ];

    public function order()
    {
        return $this->belongsTo(Order_details::class, 'order_id');
    }
}
