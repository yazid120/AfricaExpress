<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $fillable=[
        'name',
        'categorie_prod',
        'image',
        'quantity'
    ];

    // Categorie product relation
    public function Categorie(){
      return $this->belongsToMany(Category::class);
    }

}
