<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Payment_details;

class Order_details extends Model
{
    use HasFactory;
    protected $table = "order_details";
    protected $fillable = ['user_id', 'total'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function payementDetails()
    {
        return $this->hasOne(Payment_details::class, 'order_id');
    }

    public function items()
    {
        return $this->hasMany(Order_items::class, 'order_id');
    }
}
