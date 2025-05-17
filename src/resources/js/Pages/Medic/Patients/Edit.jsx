import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditPatient({ patient }) {
    const { data, setData, put, processing, errors } = useForm({
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
                className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md"
            >
                <h1 className="mb-6 text-2xl font-extrabold text-gray-900">
                    Editează pacient
                </h1>

                <div className="space-y-5">
                    {[
                        {
                            label: 'Nume',
                            type: 'text',
                            name: 'name',
                            placeholder: 'Nume',
                        },
                        {
                            label: 'Email',
                            type: 'email',
                            name: 'email',
                            placeholder: 'Email',
                        },
                        {
                            label: 'CNP',
                            type: 'text',
                            name: 'cnp',
                            placeholder: 'CNP',
                        },
                        {
                            label: 'Data nașterii',
                            type: 'date',
                            name: 'birthdate',
                        },
                        {
                            label: 'Telefon',
                            type: 'text',
                            name: 'phone',
                            placeholder: 'Telefon',
                        },
                        {
                            label: 'Adresă',
                            type: 'text',
                            name: 'address',
                            placeholder: 'Adresă',
                        },
                    ].map(({ label, type, name, placeholder }) => (
                        <div key={name} className="flex flex-col">
                            <label
                                className="mb-1 text-sm font-medium text-gray-700"
                                htmlFor={name}
                            >
                                {label}
                            </label>
                            <input
                                id={name}
                                type={type}
                                value={data[name]}
                                onChange={(e) => setData(name, e.target.value)}
                                placeholder={placeholder || ''}
                                className={`rounded border px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors[name]
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                }`}
                            />
                            {errors[name] && (
                                <span className="mt-1 text-xs text-red-600">
                                    {errors[name]}
                                </span>
                            )}
                        </div>
                    ))}

                    <div className="flex flex-col">
                        <label
                            className="mb-1 text-sm font-medium text-gray-700"
                            htmlFor="gender"
                        >
                            Gen
                        </label>
                        <select
                            id="gender"
                            value={data.gender}
                            onChange={(e) => setData('gender', e.target.value)}
                            className={`rounded border px-3 py-2 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.gender
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            }`}
                        >
                            <option value="">Selectează genul</option>
                            <option value="M">Masculin</option>
                            <option value="F">Feminin</option>
                            <option value="Alt">Alt</option>
                        </select>
                        {errors.gender && (
                            <span className="mt-1 text-xs text-red-600">
                                {errors.gender}
                            </span>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="mt-8 w-full rounded bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                >
                    {processing ? 'Se salvează...' : 'Salvează'}
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
