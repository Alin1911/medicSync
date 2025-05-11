import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ShowPatient({ patient }) {
    return (
        <AuthenticatedLayout>
            <Head title={`Detalii pacient – ${patient.name}`} />

            <div className="mx-auto max-w-4xl p-6">
                <h1 className="mb-4 text-2xl font-bold">Detalii pacient</h1>
                <div className="rounded bg-white p-4 shadow">
                    <p>
                        <strong>Nume:</strong> {patient.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {patient.email}
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
