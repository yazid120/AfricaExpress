<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Admin;

class AdminType extends Model
{
    use HasFactory;

    protected $table="admin_type";

    protected $fillable = [
        'admin_type',
    ];

    public function admins()
    {
        return $this->hasMany(Admin::class, 'type_id');
    }
}
