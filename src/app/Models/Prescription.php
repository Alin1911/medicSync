<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    protected $fillable = ['patient_id', 'medic_id', 'details', 'issued_at', 'expires_at'];

    public function patient() {
        return $this->belongsTo(User::class, 'patient_id');
    }

    public function medic() {
        return $this->belongsTo(User::class, 'medic_id');
    }

    public function medications() {
        return $this->belongsToMany(Medication::class)
            ->withPivot('frecventa', 'interval_ore')
            ->withTimestamps();
    }

    public function qrCode() {
        return $this->hasOne(QRCode::class, 'reteta_id');
    }
}
