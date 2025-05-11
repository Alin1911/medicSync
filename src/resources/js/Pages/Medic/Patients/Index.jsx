import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PatientsIndex({ patients }) {
    return (
        <AuthenticatedLayout>
            <Head title="Pacienți" />
            <div className="mx-auto max-w-6xl p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Pacienți</h1>
                    <Link
                        href={route('medic.patients.create')}
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        + Adaugă pacient
                    </Link>
                </div>
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
            </div>
        </AuthenticatedLayout>
    );
}
