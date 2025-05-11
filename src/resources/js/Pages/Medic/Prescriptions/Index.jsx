import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PrescriptionsIndex({ prescriptions }) {
    return (
        <AuthenticatedLayout>
            <Head title="Rețete" />
            <div className="max-w-6xl p-6 mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Rețete</h1>
                    <Link
                        href={route('medic.prescriptions.create')}
                        className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                    >
                        + Creează rețetă
                    </Link>
                </div>
                <div className="overflow-x-auto rounded shadow">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left border-b">Pacient</th>
                                <th className="px-4 py-2 text-left border-b">Detalii</th>
                                <th className="px-4 py-2 text-left border-b">Medicamente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptions.map((p) => (
                                <tr key={p.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 font-medium">{p.patient.name}</td>
                                    <td className="px-4 py-2">{p.details || '—'}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">
                                        {(p.medications ?? []).map(m => m.nume).join(', ') || '—'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
