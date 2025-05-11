<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MedicDashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return Inertia::render('Medic/Dashboard', [
            'patients' => $user->patients()->get(),
            'prescriptions' => $user->prescriptions()->with('medications')->latest()->get(),
        ]);
    }
}
