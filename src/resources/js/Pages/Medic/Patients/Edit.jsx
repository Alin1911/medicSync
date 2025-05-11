import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditPatient({ patient }) {
    const { data, setData, put, processing, errors } = useForm({
        name: patient.name,
        email: patient.email,
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

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">
                        Nume
                    </label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Salvează
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
