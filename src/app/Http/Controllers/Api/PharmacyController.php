<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Prescription;
use App\Models\User;
use App\Models\Medication;
use App\Models\Pharmacy;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PharmacyController extends Controller
{

    public function index(Request $request)
    {
        $request->validate([
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
        ]);

        $lat = $request->input('lat');
        $lng = $request->input('lng');

        $pharmacies = Pharmacy::selectRaw('
                id, nume, lat, lng, program,
                (6371 * acos(
                    cos(radians(?)) * cos(radians(lat)) *
                    cos(radians(lng) - radians(?)) +
                    sin(radians(?)) * sin(radians(lat))
                )) AS distance',
            [$lat, $lng, $lat]
        )
        ->orderBy('distance')
        ->get();

        return response()->json([
            'pharmacies' => $pharmacies
        ]);
    }

    public function show($id)
    {
        $pharmacy = Pharmacy::findOrFail($id);

        return response()->json($pharmacy);
    }
}
