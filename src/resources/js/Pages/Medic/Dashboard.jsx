import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ patients, prescriptions }) {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard Medic" />

            <div className="mx-auto max-w-6xl p-6">
                <h1 className="mb-6 text-3xl font-bold text-gray-800">
                    Dashboard Medic
                </h1>

                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-semibold">Pacienți</h2>
                    <div className="overflow-x-auto rounded shadow">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border-b px-4 py-2 text-left">
                                        Nume
                                    </th>
                                    <th className="border-b px-4 py-2 text-left">
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {patients.map((p) => (
                                    <tr
                                        key={p.id}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-2">{p.name}</td>
                                        <td className="px-4 py-2">{p.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Rețete</h2>
                    <div className="overflow-x-auto rounded shadow">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border-b px-4 py-2 text-left">
                                        Detalii
                                    </th>
                                    <th className="border-b px-4 py-2 text-left">
                                        Număr medicamente
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {prescriptions.map((p) => (
                                    <tr
                                        key={p.id}
                                        className="border-b hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-2">
                                            {p.details || '—'}
                                        </td>
                                        <td className="px-4 py-2">
                                            {Array.isArray(p.medications)
                                                ? p.medications.length
                                                : 0}
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
