import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PrescriptionsIndex({ prescriptions }) {
    return (
        <AuthenticatedLayout>
            <Head title="Rețete" />
            <div className="mx-auto max-w-6xl p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Rețete</h1>
                    <Link
                        href={route('medic.prescriptions.create')}
                        className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                    >
                        + Creează rețetă
                    </Link>
                </div>
                <div className="overflow-x-auto rounded shadow">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border-b px-4 py-2 text-left">
                                    Pacient
                                </th>
                                <th className="border-b px-4 py-2 text-left">
                                    Detalii
                                </th>
                                <th className="border-b px-4 py-2 text-left">
                                    Medicamente
                                </th>
                                <th className="border-b px-4 py-2 text-left">
                                    Acțiuni
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptions.map((p) => (
                                <tr
                                    key={p.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="px-4 py-2 font-medium">
                                        {p.patient.name}
                                    </td>
                                    <td className="px-4 py-2">
                                        {p.details || '—'}
                                    </td>
                                    <td className="px-4 py-2 text-sm text-gray-600">
                                        {(p.medications ?? [])
                                            .map((m) => m.nume)
                                            .join(', ') || '—'}
                                    </td>
                                    <td className="space-x-2 px-4 py-2">
                                        <Link
                                            href={route(
                                                'medic.prescriptions.show',
                                                p.id,
                                            )}
                                            className="text-sm text-blue-600 hover:underline"
                                        >
                                            Vezi
                                        </Link>
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
