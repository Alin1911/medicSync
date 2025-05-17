import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaEye, FaPlus } from 'react-icons/fa';

export default function PrescriptionsIndex({ prescriptions }) {
    return (
        <AuthenticatedLayout>
            <Head title="Rețete" />
            <div className="mx-auto max-w-6xl p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Rețete
                    </h1>
                    <Link
                        href={route('prescriptions.create')}
                        className="inline-flex items-center gap-2 rounded bg-green-600 px-5 py-2 text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
                    >
                        <FaPlus /> Creează rețetă
                    </Link>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {[
                                    'Pacient',
                                    'Detalii',
                                    'Medicamente',
                                    'Acțiuni',
                                ].map((header) => (
                                    <th
                                        key={header}
                                        scope="col"
                                        className="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-gray-700"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {prescriptions.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="px-6 py-4 text-center italic text-gray-500"
                                    >
                                        Nicio rețetă găsită.
                                    </td>
                                </tr>
                            )}
                            {prescriptions.map((p) => (
                                <tr
                                    key={p.id}
                                    className="transition-colors duration-150 hover:bg-gray-50"
                                >
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                        {p.patient.name}
                                    </td>
                                    <td
                                        className="max-w-xs truncate px-6 py-4 text-gray-700"
                                        title={p.details || ''}
                                    >
                                        {p.details || '—'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {(p.medications ?? []).length >
                                            0 ? (
                                                p.medications.map((m) => (
                                                    <span
                                                        key={m.id}
                                                        className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800"
                                                        title={`Frecvență: ${m.frecventa || '-'}, Interval: ${m.interval_ore || '-'}`}
                                                    >
                                                        {m.nume}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="italic text-gray-400">
                                                    —
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                                        <Link
                                            href={route(
                                                'prescriptions.show',
                                                p.id,
                                            )}
                                            className="inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:underline"
                                            title="Vezi detalii rețetă"
                                        >
                                            <FaEye />
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
