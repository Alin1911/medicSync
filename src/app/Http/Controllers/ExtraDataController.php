<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExtraDataController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->has('cnp')) {
            return Inertia::render('Medic/ExtraData/Index', [
                'extraData' => null,
            ]);
        }

        $patients = [
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'maria.popescu@example.com',
                'medicalHistory' => [
                    'allergies' => ['Polen', 'Lactoza'],
                    'currentMedications' => [
                        ['dose' => '1 comprimat', 'frequency' => 'dimineața', 'name' => 'Nurofen'],
                    ],
                    'familyHistory' => ['Hipertensiune'],
                    'surgeries' => [],
                ],
                'personalInfo' => [
                    'address' => 'Strada Florilor 12, București',
                    'birthDate' => '1990-04-15',
                    'fullName' => 'Maria Popescu',
                    'phone' => '0723123456',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'andrei.ionescu@example.com',
                'medicalHistory' => [
                    'allergies' => [],
                    'currentMedications' => [
                        ['dose' => '2 comprimate', 'frequency' => 'seara', 'name' => 'Aspirin Cardio'],
                    ],
                    'familyHistory' => ['Cancer', 'Diabet'],
                    'surgeries' => ['Operație genunchi'],
                ],
                'personalInfo' => [
                    'address' => 'Bd. Unirii 10, Cluj-Napoca',
                    'birthDate' => '1985-09-10',
                    'fullName' => 'Andrei Ionescu',
                    'phone' => '0744112233',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'ana.dumitrescu@example.com',
                'medicalHistory' => [
                    'allergies' => ['Penicilină'],
                    'currentMedications' => [],
                    'familyHistory' => [],
                    'surgeries' => ['Operație tiroidă'],
                ],
                'personalInfo' => [
                    'address' => 'Calea Victoriei 22, Timișoara',
                    'birthDate' => '1992-07-01',
                    'fullName' => 'Ana Dumitrescu',
                    'phone' => '0766543210',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'david.stanescu@example.com',
                'medicalHistory' => [
                    'allergies' => ['Praf'],
                    'currentMedications' => [
                        ['dose' => '3 picături', 'frequency' => 'dimineața', 'name' => 'Olynth'],
                    ],
                    'familyHistory' => ['Astm'],
                    'surgeries' => [],
                ],
                'personalInfo' => [
                    'address' => 'Str. Libertății 3, Craiova',
                    'birthDate' => '1998-03-12',
                    'fullName' => 'David Stănescu',
                    'phone' => '0733556677',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'elena.georgescu@example.com',
                'medicalHistory' => [
                    'allergies' => [],
                    'currentMedications' => [],
                    'familyHistory' => ['Probleme cardiace'],
                    'surgeries' => ['Bypass cardiac'],
                ],
                'personalInfo' => [
                    'address' => 'Str. Câmpului 18, Pitești',
                    'birthDate' => '1970-06-22',
                    'fullName' => 'Elena Georgescu',
                    'phone' => '0722436567',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'lucas.moldovan@example.com',
                'medicalHistory' => [
                    'allergies' => ['Nuci'],
                    'currentMedications' => [],
                    'familyHistory' => [],
                    'surgeries' => [],
                ],
                'personalInfo' => [
                    'address' => 'Str. Viitorului 5, Arad',
                    'birthDate' => '2001-11-11',
                    'fullName' => 'Lucas Moldovan',
                    'phone' => '0745569874',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'bianca.ene@example.com',
                'medicalHistory' => [
                    'allergies' => ['Polen'],
                    'currentMedications' => [
                        ['dose' => '1 pe zi', 'frequency' => 'dimineața', 'name' => 'Claritin'],
                    ],
                    'familyHistory' => [],
                    'surgeries' => ['Operație nas'],
                ],
                'personalInfo' => [
                    'address' => 'Str. Teiului 30, Galați',
                    'birthDate' => '1996-08-29',
                    'fullName' => 'Bianca Ene',
                    'phone' => '0733112233',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'mihai.dobre@example.com',
                'medicalHistory' => [
                    'allergies' => [],
                    'currentMedications' => [],
                    'familyHistory' => ['Diabet'],
                    'surgeries' => [],
                ],
                'personalInfo' => [
                    'address' => 'Str. Răsăritului 9, Sibiu',
                    'birthDate' => '1980-05-17',
                    'fullName' => 'Mihai Dobre',
                    'phone' => '0711223344',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'ioana.neagu@example.com',
                'medicalHistory' => [
                    'allergies' => ['Fructe de mare'],
                    'currentMedications' => [
                        ['dose' => '10ml', 'frequency' => 'la nevoie', 'name' => 'EpiPen'],
                    ],
                    'familyHistory' => ['Astm'],
                    'surgeries' => [],
                ],
                'personalInfo' => [
                    'address' => 'Bd. Revoluției 16, Iași',
                    'birthDate' => '1994-10-05',
                    'fullName' => 'Ioana Neagu',
                    'phone' => '0766554433',
                ],
            ],
            [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => 'robert.ilie@example.com',
                'medicalHistory' => [
                    'allergies' => [],
                    'currentMedications' => [],
                    'familyHistory' => ['Hipertensiune'],
                    'surgeries' => ['Operație rinichi'],
                ],
                'personalInfo' => [
                    'address' => 'Str. Vulturilor 8, Constanța',
                    'birthDate' => '1989-12-31',
                    'fullName' => 'Robert Ilie',
                    'phone' => '0725443322',
                ],
            ],
        ];

        for ($i = 10; $i < 20; $i++) {
            $patients[] = [
                'createdAt' => ['_time_' => now()->toISOString()],
                'email' => "pacient{$i}@demo.ro",
                'medicalHistory' => [
                    'allergies' => (rand(0, 1) ? ['Polen'] : []),
                    'currentMedications' => (rand(0, 1) ? [['dose' => '1/zi', 'frequency' => 'dimineața', 'name' => 'Paracetamol']] : []),
                    'familyHistory' => (rand(0, 1) ? ['Cancer'] : []),
                    'surgeries' => (rand(0, 1) ? ['Operație colecist'] : []),
                ],
                'personalInfo' => [
                    'address' => "Strada Random #{$i}, România",
                    'birthDate' => date('Y-m-d', strtotime("-" . rand(20, 60) . " years")),
                    'fullName' => "Pacient Random {$i}",
                    'phone' => "07" . rand(10000000, 99999999),
                ],
            ];
        }

        $randomPatient = $patients[array_rand($patients)];

        return Inertia::render('Medic/ExtraData/Index', [
            'extraData' => $randomPatient,
        ]);
    }
}
