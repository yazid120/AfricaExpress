<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\product;

class Brands extends Model
{
    use HasFactory;

    protected $table = 'brands';
    protected $fillable=[
        'brand_name'
    ];

    public function ProductBrand(){
        return $this->belongsToMany(product::class);
    }
}
