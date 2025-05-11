import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ShowPrescription({ prescription }) {
    return (
        <AuthenticatedLayout>
            <Head title="Detalii Rețetă" />
            <div className="mx-auto max-w-4xl p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    Rețetă pentru {prescription.patient.name}
                </h1>
                <div className="space-y-2 rounded bg-white p-4 shadow">
                    <p>
                        <strong>Detalii:</strong> {prescription.details || '—'}
                    </p>
                    <p>
                        <strong>Emisă la:</strong> {prescription.issued_at}
                    </p>
                    <p>
                        <strong>Expiră la:</strong> {prescription.expires_at}
                    </p>
                    <div>
                        <h2 className="mb-2 mt-4 text-lg font-semibold">
                            Medicamente
                        </h2>
                        <ul className="ml-6 list-disc">
                            {prescription.medications.map((m) => (
                                <li key={m.id}>
                                    {m.nume} — {m.pivot.frecventa}x /{' '}
                                    {m.pivot.interval_ore}h
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
