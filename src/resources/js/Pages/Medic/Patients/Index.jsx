import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { FaEdit, FaEye, FaPlus } from 'react-icons/fa';

export default function PatientsIndex({ patients }) {
    return (
        <AuthenticatedLayout>
            <Head title="Pacienți" />
            <div className="mx-auto max-w-6xl p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Pacienți
                    </h1>
                    <Link
                        href={route('patients.create')}
                        className="inline-flex items-center gap-2 rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    >
                        <FaPlus />
                        Adaugă pacient
                    </Link>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {[
                                    'Nume',
                                    'Email',
                                    'CNP',
                                    'Telefon',
                                    'Gen',
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
                            {patients.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-4 text-center italic text-gray-500"
                                    >
                                        Niciun pacient găsit.
                                    </td>
                                </tr>
                            )}
                            {patients.map((p) => {
                                const d = p.patient_detail || {};
                                return (
                                    <tr
                                        key={p.id}
                                        className="cursor-pointer transition-colors duration-150 hover:bg-gray-50"
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
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700">
                                            {d.cnp || '—'}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-700">
                                            {d.phone || '—'}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 capitalize text-gray-700">
                                            {d.gender || '—'}
                                        </td>
                                        <td className="flex gap-3 whitespace-nowrap px-6 py-4 text-sm">
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
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
