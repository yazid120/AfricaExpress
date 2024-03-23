<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;


class Notification extends Model
{
    use HasFactory;
    protected $table = 'notifications';

    public function User_Notification(): BelongsTo{
        return $this->belongsTo(User::class, 'foreign_key');
    }
}
