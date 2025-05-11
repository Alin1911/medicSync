<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Inertia\Inertia;

class PatientController extends Controller
{
public function index()
{
    $patients = auth()->user()->patients()->get();
    return Inertia::render('Medic/Patients/Index', [
        'patients' => $patients,
    ]);
}

public function create()
{
    return Inertia::render('Medic/Patients/Create');
}

public function store(Request $request)
{
    $data = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|string|min:6|confirmed'
    ]);

    $patient = User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password']),
    ]);

    $patient->assignRole('patient');

    return redirect()->route('medic.patients.index');
}
}
