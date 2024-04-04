<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\AdminType; 

class Admin extends Model implements Authenticatable
{
    use HasFactory;

    protected $table="admin";
    protected $fillable=[
        'name',
        'email',
        'password'
    ];

    # Define the relationship
    public function adminType()
    {
        return $this->belongsTo(AdminType::class, 'type_id');
    }

    public function getAuthIdentifierName()
    {
        return 'id';
    }

    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function getRememberToken()
    {
        return null; // not used
    }

    public function setRememberToken($value)
    {
        // not used
    }

    public function getRememberTokenName()
    {
        return null; // not used
    }


}
