<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QRCode extends Model
{
    protected $table = 'qr_codes';
    protected $fillable = ['reteta_id', 'cod', 'valid'];

    public function prescription() {
        return $this->belongsTo(Prescription::class, 'reteta_id');
    }
}
