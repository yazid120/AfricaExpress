<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Seller extends Model
{
    use HasFactory;
    protected $table = "sellers";
    protected $fillable  = [
        'business_name',
        'business_address',
        'business_type',
        'postal_code',
        'user_id'
    ];

    public function User()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
