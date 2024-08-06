<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\User; 

class Address extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'Country/region',
        'address_street',
        'address_street_apt_floor_build',
        'city',
        'state',
        'zip_code'
    ];

    // users relation
    public function users(): BelongsToMany {
        return $this->belongsToMany(User::class, 'address_user', 'address_id', 'user_id');
    }
}
