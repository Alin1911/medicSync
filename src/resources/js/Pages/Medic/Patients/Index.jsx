import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PatientsIndex({ patients }) {
    return (
        <AuthenticatedLayout>
            <Head title="Pacienți" />
            <div className="max-w-6xl p-6 mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Pacienți</h1>
                    <Link
                        href={route('medic.patients.create')}
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        + Adaugă pacient
                    </Link>
                </div>
                <div className="overflow-x-auto rounded shadow">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left border-b">Nume</th>
                                <th className="px-4 py-2 text-left border-b">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((p) => (
                                <tr key={p.id} className="border-b hover:bg-gray-50">
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
