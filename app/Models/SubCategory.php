<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Category;


class SubCategory extends Model
{
    use HasFactory;

    public function SubCategory_Category_relation(): BelongsTo{
        return $this->belongsTo(Category::class, 'foreign_key');
    }
}
