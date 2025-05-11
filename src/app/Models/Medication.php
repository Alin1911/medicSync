<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Medication extends Model
{
    protected $fillable = ['nume', 'doza', 'descriere'];

    public function prescriptions() {
        return $this->belongsToMany(Prescription::class)
            ->withPivot('frecventa', 'interval_ore')
            ->withTimestamps();
    }
}
