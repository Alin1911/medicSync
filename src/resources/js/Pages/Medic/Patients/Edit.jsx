import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditPatient({ patient }) {
    const { data, setData, put, processing } = useForm({
        name: patient.name,
        email: patient.email,
        cnp: patient.patient_detail?.cnp || '',
        birthdate: patient.patient_detail?.birthdate || '',
        gender: patient.patient_detail?.gender || '',
        phone: patient.patient_detail?.phone || '',
        address: patient.patient_detail?.address || '',
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('patients.update', patient.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Editează – ${patient.name}`} />

            <form
                onSubmit={submit}
                className="mx-auto max-w-md rounded bg-white p-6 shadow"
            >
                <h1 className="mb-4 text-xl font-bold">Editează pacient</h1>

                <div className="space-y-4">
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Nume"
                        className="w-full rounded border px-3 py-2"
                    />

                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email"
                        className="w-full rounded border px-3 py-2"
                    />

                    <input
                        type="text"
                        value={data.cnp}
                        onChange={(e) => setData('cnp', e.target.value)}
                        placeholder="CNP"
                        className="w-full rounded border px-3 py-2"
                    />

                    <input
                        type="date"
                        value={data.birthdate}
                        onChange={(e) => setData('birthdate', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />

                    <select
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    >
                        <option value="">Gen</option>
                        <option value="M">Masculin</option>
                        <option value="F">Feminin</option>
                        <option value="Alt">Alt</option>
                    </select>

                    <input
                        type="text"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        placeholder="Telefon"
                        className="w-full rounded border px-3 py-2"
                    />

                    <input
                        type="text"
                        value={data.address}
                        onChange={(e) => setData('address', e.target.value)}
                        placeholder="Adresă"
                        className="w-full rounded border px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Salvează
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
