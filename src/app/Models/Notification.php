<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = ['user_id', 'reteta_id', 'timestamp', 'status'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function prescription() {
        return $this->belongsTo(Prescription::class, 'reteta_id');
    }
}
