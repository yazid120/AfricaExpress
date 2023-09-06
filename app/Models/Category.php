<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\product;

class Category extends Model
{
    use HasFactory;

    public function Category(){
        return $this->belongsToMany(product::class);
    }
}
