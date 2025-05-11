<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasRoles, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ["name", "email", "password"];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = ["password", "remember_token"];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            "email_verified_at" => "datetime",
            "password" => "hashed",
        ];
    }

        /**
     * Pacienții asociați acestui medic (prin rețete).
     */
    public function patients(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'prescriptions', 'medic_id', 'patient_id')
                    ->withTimestamps()
                    ->distinct();
    }

    /**
     * Rețetele în care acest utilizator este pacient.
     */
    public function receivedPrescriptions(): HasMany
    {
        return $this->hasMany(Prescription::class, 'patient_id');
    }

    /**
     * Rețetele emise de acest utilizator (medic).
     */
    public function prescriptions(): HasMany
    {
        return $this->hasMany(Prescription::class, 'medic_id');
    }

    /**
     * Notificările acestui utilizator.
     */
    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }
}
