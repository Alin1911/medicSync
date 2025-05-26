import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ExtraDataIndex({ auth, extraData }) {
    const { data, setData, get, processing } = useForm({
        cnp: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.cnp.trim().length === 0) return;
        get(route('extra-info'), { preserveScroll: true });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Verifică Date Extra" />

            <div className="mx-auto max-w-4xl p-6">
                {/* Titlu și descriere */}
                <div className="mb-8 text-center">
                    <p className="mt-2 text-lg text-gray-600">Introdu CNP-ul pentru a accesa informații personale și istoricul medical.</p>
                </div>

                {/* Formul de căutare */}
                <form
                    onSubmit={handleSubmit}
                    className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <input
                        type="text"
                        name="cnp"
                        value={data.cnp}
                        onChange={(e) => setData('cnp', e.target.value)}
                        className="w-full max-w-md rounded-lg border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 sm:flex-1"
                        placeholder="CNP pacient"
                    />
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full max-w-[150px] rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {processing ? 'Se caută...' : 'Caută'}
                    </button>
                </form>

                {/* Datele pacientului */}
                {extraData ? (
                    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md">
                        <h2 className="mb-4 text-2xl font-bold text-gray-800 border-b pb-2">📇 Informații personale</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <p><span className="font-semibold">Nume:</span> {extraData.personalInfo.fullName}</p>
                            <p><span className="font-semibold">Adresa:</span> {extraData.personalInfo.address}</p>
                            <p><span className="font-semibold">Telefon:</span> {extraData.personalInfo.phone}</p>
                            <p><span className="font-semibold">Data nașterii:</span> {extraData.personalInfo.birthDate}</p>
                            <p><span className="font-semibold">Email:</span> {extraData.email}</p>
                        </div>

                        <h2 className="mt-8 mb-4 text-2xl font-bold text-gray-800 border-b pb-2">🩺 Istoric medical</h2>
                        <div className="space-y-4 text-gray-700">
                            <p><span className="font-semibold">Alergii:</span> {extraData.medicalHistory.allergies.length ? extraData.medicalHistory.allergies.join(', ') : 'N/A'}</p>

                            <div>
                                <p className="font-semibold mb-1">Medicație curentă:</p>
                                {extraData.medicalHistory.currentMedications.length ? (
                                    <ul className="list-disc ml-6">
                                        {extraData.medicalHistory.currentMedications.map((m, i) => (
                                            <li key={i}>
                                                {m.name} - {m.dose}, {m.frequency}
                                            </li>
                                        ))}
                                    </ul>
                                ) : <p className="ml-2">N/A</p>}
                            </div>

                            <p><span className="font-semibold">Istoric familial:</span> {extraData.medicalHistory.familyHistory.length ? extraData.medicalHistory.familyHistory.join(', ') : 'N/A'}</p>
                            <p><span className="font-semibold">Intervenții chirurgicale:</span> {extraData.medicalHistory.surgeries.length ? extraData.medicalHistory.surgeries.join(', ') : 'N/A'}</p>
                        </div>

                        <p className="mt-6 text-sm text-gray-500 italic">
                            Înregistrat la: {new Date(extraData.createdAt._time_).toLocaleString()}
                        </p>
                    </div>
                ) : (
                    <div className="mt-6 text-center text-gray-400 italic">
                        Nicio informație afișată. Introdu un CNP și apasă „Caută”.
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
