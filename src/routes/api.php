
<?php

use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\PharmacyController;
use App\Http\Controllers\Api\PrescriptionController;
use Laravel\Passport\Http\Controllers\AccessTokenController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:api', 'role:patient'])->group(function () {
    Route::get('/me', [PatientController::class, 'me']);
    Route::put('/me', [PatientController::class, 'update']);

    Route::get('/prescriptions', [PrescriptionController::class, 'index']);
    Route::get('/prescriptions/{id}', [PrescriptionController::class, 'show']);

    Route::get('/pharmacies', [PharmacyController::class, 'index']);
    Route::get('/pharmacies/{id}', [PharmacyController::class, 'show']);
});
