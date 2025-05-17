<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Prescription;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function index()
    {
        $patients = auth()->user()->patients()->get();
        $patients->load('patientDetail');

        return Inertia::render('Medic/Patients/Index', [
            'patients' => $patients,
        ]);
    }

    public function create()
    {
        return Inertia::render('Medic/Patients/Create');
    }

    public function edit(User $patient)
    {
        $patient->load('patientDetail');
        return Inertia::render('Medic/Patients/Edit', [
            'patient' => $patient,
        ]);
    }

    public function show(User $patient)
    {
        $patient->load('patientDetail');
        return Inertia::render('Medic/Patients/Show', [
            'patient' => $patient,
        ]);
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'cnp' => 'required|string|unique:patient_details',
            'birthdate' => 'nullable|date',
            'gender' => 'nullable|string|in:M,F,Alt',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
        ]);

        \DB::beginTransaction();
        try {
            $patient = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            $patient->assignRole('patient');

            $patient->patientDetail()->create([
                'cnp' => $data['cnp'],
                'birthdate' => $data['birthdate'] ?? null,
                'gender' => $data['gender'] ?? null,
                'phone' => $data['phone'] ?? null,
                'address' => $data['address'] ?? null,
            ]);

            Prescription::create([
                'medic_id' => auth()->id(),
                'patient_id' => $patient->id,
                'issued_at' => now()->format('Y-m-d'),
                'expires_at' => now()->format('Y-m-d'),
                'details' => 'Rețetă goală pentru asociere pacient',
            ]);

            \DB::commit();
        } catch (\Exception $e) {
            \DB::rollBack();
            return redirect()->back()->withErrors(['error' => 'A apărut o eroare la crearea pacientului.']);
        }

        return redirect()->route('patients.index');
    }

    public function update(Request $request, User $patient)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $patient->id,
            'cnp' => 'required|string|unique:patient_details,cnp,' . ($patient->patientDetail->id ?? 'null'),
            'birthdate' => 'nullable|date',
            'gender' => 'nullable|string|in:M,F,Alt',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
        ]);

        $patient->update([
            'name' => $data['name'],
            'email' => $data['email'],
        ]);

        $patient->patientDetail()->updateOrCreate(
            ['user_id' => $patient->id],
            [
                'cnp' => $data['cnp'],
                'birthdate' => $data['birthdate'] ?? null,
                'gender' => $data['gender'] ?? null,
                'phone' => $data['phone'] ?? null,
                'address' => $data['address'] ?? null,
            ]
        );

        return redirect()->route('patients.index')->with('success', 'Pacientul a fost actualizat cu succes.');
    }
}
