import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CreatePatient() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('patients.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Adaugă pacient" />
            <form
                onSubmit={submit}
                className="mx-auto max-w-md rounded bg-white p-6 shadow"
            >
                <h1 className="mb-4 text-xl font-bold">Adaugă pacient</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Nume"
                        className="w-full rounded border px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email"
                        className="w-full rounded border px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Parolă"
                        className="w-full rounded border px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        placeholder="Confirmă parolă"
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
