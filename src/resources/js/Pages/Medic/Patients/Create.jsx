import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CreatePatient() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        cnp: '',
        birthdate: '',
        gender: '',
        phone: '',
        address: '',
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
                className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg"
                noValidate
            >
                <h1 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
                    Adaugă pacient
                </h1>

                {/* Helper to render inputs with error */}
                {[
                    {
                        label: 'Nume',
                        type: 'text',
                        key: 'name',
                        placeholder: 'Nume complet',
                    },
                    {
                        label: 'Email',
                        type: 'email',
                        key: 'email',
                        placeholder: 'Email',
                    },
                    {
                        label: 'Parolă',
                        type: 'password',
                        key: 'password',
                        placeholder: 'Parolă',
                    },
                    {
                        label: 'Confirmă parolă',
                        type: 'password',
                        key: 'password_confirmation',
                        placeholder: 'Confirmă parolă',
                    },
                    {
                        label: 'CNP',
                        type: 'text',
                        key: 'cnp',
                        placeholder: 'CNP',
                    },
                    { label: 'Data nașterii', type: 'date', key: 'birthdate' },
                    {
                        label: 'Telefon',
                        type: 'text',
                        key: 'phone',
                        placeholder: 'Telefon',
                    },
                    {
                        label: 'Adresă',
                        type: 'text',
                        key: 'address',
                        placeholder: 'Adresă',
                    },
                ].map(({ label, type, key, placeholder }) => (
                    <div key={key} className="mb-5">
                        <label
                            htmlFor={key}
                            className="mb-1 block text-sm font-semibold text-gray-700"
                        >
                            {label}
                        </label>
                        <input
                            id={key}
                            type={type}
                            value={data[key]}
                            onChange={(e) => setData(key, e.target.value)}
                            placeholder={placeholder}
                            className={`w-full rounded-md border px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors[key]
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-300'
                            }`}
                            aria-invalid={errors[key] ? 'true' : 'false'}
                            aria-describedby={`${key}-error`}
                        />
                        {errors[key] && (
                            <p
                                id={`${key}-error`}
                                className="mt-1 text-xs font-medium text-red-600"
                            >
                                {errors[key]}
                            </p>
                        )}
                    </div>
                ))}

                <div className="mb-5">
                    <label
                        htmlFor="gender"
                        className="mb-1 block text-sm font-semibold text-gray-700"
                    >
                        Gen
                    </label>
                    <select
                        id="gender"
                        value={data.gender}
                        onChange={(e) => setData('gender', e.target.value)}
                        className={`w-full rounded-md border px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.gender
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300'
                        }`}
                        aria-invalid={errors.gender ? 'true' : 'false'}
                        aria-describedby="gender-error"
                    >
                        <option value="">Selectează gen</option>
                        <option value="M">Masculin</option>
                        <option value="F">Feminin</option>
                        <option value="Alt">Alt</option>
                    </select>
                    {errors.gender && (
                        <p
                            id="gender-error"
                            className="mt-1 text-xs font-medium text-red-600"
                        >
                            {errors.gender}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50`}
                >
                    {processing ? 'Se salvează...' : 'Salvează'}
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
