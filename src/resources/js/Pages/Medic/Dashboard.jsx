import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaEdit, FaEye } from 'react-icons/fa';

export default function Dashboard({ patients, prescriptions }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard Medic" />

            <div className="mx-auto max-w-6xl p-6">
                <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900">
                    Dashboard Medic
                </h1>

                {/* Pacienți */}
                <section className="mb-12">
                    <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                        Pacienți
                    </h2>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                                <tr>
                                    {['Nume', 'Email', 'Acțiuni'].map(
                                        (header) => (
                                            <th
                                                key={header}
                                                scope="col"
                                                className="whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-gray-700"
                                            >
                                                {header}
                                            </th>
                                        ),
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {patients.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={3}
                                            className="px-6 py-4 text-center italic text-gray-500"
                                        >
                                            Niciun pacient găsit.
                                        </td>
                                    </tr>
                                )}
                                {patients.map((p) => (
                                    <tr
                                        key={p.id}
                                        className="transition-colors duration-150 hover:bg-gray-50"
                                    >
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                            {p.name}
                                        </td>
                                        <td
                                            className="max-w-xs truncate px-6 py-4 text-gray-700"
                                            title={p.email}
                                        >
                                            {p.email || '—'}
                                        </td>
                                        <td className="flex gap-4 whitespace-nowrap px-6 py-4 text-sm">
                                            <Link
                                                href={route(
                                                    'patients.edit',
                                                    p.id,
                                                )}
                                                className="inline-flex items-center gap-1 rounded px-3 py-1 text-yellow-600 transition hover:bg-yellow-100"
                                                title="Editează pacient"
                                            >
                                                <FaEdit />
                                                Editează
                                            </Link>
                                            <Link
                                                href={route(
                                                    'patients.show',
                                                    p.id,
                                                )}
                                                className="inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:bg-blue-100"
                                                title="Vezi detalii pacient"
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
                </section>

                {/* Rețete */}
                <section>
                    <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                        Rețete
                    </h2>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                                <tr>
                                    {[
                                        'Detalii',
                                        'Număr medicamente',
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
                            <tbody className="divide-y divide-gray-100">
                                {prescriptions.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={3}
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
                                        <td
                                            className="max-w-xs truncate px-6 py-4 text-gray-700"
                                            title={p.details || ''}
                                        >
                                            {p.details || '—'}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700">
                                            {Array.isArray(p.medications)
                                                ? p.medications.length
                                                : 0}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm">
                                            <Link
                                                href={route(
                                                    'prescriptions.show',
                                                    p.id,
                                                )}
                                                className="inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:bg-blue-100"
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
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
