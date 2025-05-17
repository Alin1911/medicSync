<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Prescription;
use App\Models\User;
use App\Models\Medication;
use App\Models\QRCode;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PrescriptionController extends Controller
{

    public function index()
    {
        $prescriptions = auth()->user()->receivedPrescriptions()->with('medications', 'qrCode')->latest()->get();

        return response()->json([
            'prescriptions' => $prescriptions,
        ]);
    }

    public function show($id)
    {
        $prescription = auth()->user()->receivedPrescriptions()->with('medications', 'qrCode')->findOrFail($id);

        return response()->json($prescription);
    }
}
