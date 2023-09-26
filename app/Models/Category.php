<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\product;
use App\Models\SubCategory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;
    protected $table = "categories";
    protected $fillable = [
      'cat_name',
      'description'
    ];

    public function Category_product_relation(): BelongsToMany{
        return $this->belongsToMany(product::class);
    }
    public function Category_SubCategory_relation(): HasMany{
        return $this->hasMany(SubCategory::class);
    }

}
