<?php

namespace App\Http\Controllers;

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
        $prescriptions = auth()->user()->prescriptions()->with('patient', 'medications')->latest()->get();
        return Inertia::render('Medic/Prescriptions/Index', [
            'prescriptions' => $prescriptions,
        ]);
    }

    public function create()
    {
        $patients = auth()->user()->patients()->get();
        $medications = Medication::all();
        return Inertia::render('Medic/Prescriptions/Create', [
            'patients' => $patients,
            'medications' => $medications
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'patient_id' => 'required|exists:users,id',
            'details' => 'nullable|string',
            'issued_at' => 'required|date',
            'expires_at' => 'required|date',
            'medications' => 'required|array',
            'medications.*.id' => 'required|exists:medications,id',
            'medications.*.frecventa' => 'required|numeric',
            'medications.*.interval_ore' => 'required|numeric'
        ]);

        $prescription = Prescription::create([
            'medic_id' => auth()->id(),
            'patient_id' => $data['patient_id'],
            'details' => $data['details'],
            'issued_at' => $data['issued_at'],
            'expires_at' => $data['expires_at'],
        ]);

        foreach ($data['medications'] as $med) {
            $prescription->medications()->attach($med['id'], [
                'frecventa' => $med['frecventa'],
                'interval_ore' => $med['interval_ore']
            ]);
        }

        QRCode::create([
            'reteta_id' => $prescription->id,
            'cod' => strtoupper(Str::random(10)),
            'valid' => true
        ]);

        return redirect()->route('medic.prescriptions.index');
    }
}
