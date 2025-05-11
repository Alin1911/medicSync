import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CreatePatient() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('medic.patients.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Adaugă pacient" />
            <form onSubmit={submit} className="max-w-md p-6 mx-auto bg-white rounded shadow">
                <h1 className="mb-4 text-xl font-bold">Adaugă pacient</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Nume"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Parolă"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="Confirmă parolă"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    Salvează
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
