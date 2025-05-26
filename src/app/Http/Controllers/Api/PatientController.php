<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class PatientController extends Controller
{
    public function me(Request $request)
    {
        $user = $request->user()->load('patientDetail');

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'patient_detail' => $user->patientDetail,
        ]);
    }

        public function update(Request $request)
    {
        $user = $request->user();

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|max:255|unique:users,email,' . $user->id,
            'cnp' => 'sometimes|string|max:13',
            'birthdate' => 'sometimes|date',
            'phone' => 'sometimes|string|max:20',
            'address' => 'sometimes|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user->update($request->only('name', 'email'));

        $user->patientDetail()->updateOrCreate(
            ['user_id' => $user->id],
            $request->only('cnp', 'birthdate', 'gender', 'phone', 'address')
        );

        return response()->json(['message' => 'Profilul a fost actualizat cu succes.']);
    }
}
