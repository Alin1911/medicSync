import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function CreatePrescription({ patients, medications }) {
    const { data, setData, post, processing, errors } = useForm({
        patient_id: '',
        issued_at: '',
        expires_at: '',
        details: '',
        medications: []
    });

    const handleMedChange = (id, field, value) => {
        setData('medications', (prev) => {
            const updated = [...prev];
            const index = updated.findIndex(m => m.id === id);
            if (index === -1) {
                updated.push({ id, [field]: value });
            } else {
                updated[index][field] = value;
            }
            return updated;
        });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('medic.prescriptions.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Creează Rețetă" />
            <form onSubmit={submit} className="max-w-2xl p-6 mx-auto bg-white rounded shadow">
                <h1 className="mb-4 text-xl font-bold">Creează Rețetă</h1>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Pacient</label>
                    <select
                        value={data.patient_id}
                        onChange={(e) => setData('patient_id', e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Selectează pacient</option>
                        {patients.map((p) => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="w-full">
                        <label className="block mb-1 text-sm font-medium">Data emiterii</label>
                        <input
                            type="date"
                            value={data.issued_at}
                            onChange={(e) => setData('issued_at', e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-1 text-sm font-medium">Data expirării</label>
                        <input
                            type="date"
                            value={data.expires_at}
                            onChange={(e) => setData('expires_at', e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium">Detalii</label>
                    <textarea
                        value={data.details}
                        onChange={(e) => setData('details', e.target.value)}
                        placeholder="Detalii opționale"
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <h2 className="mb-2 text-lg font-semibold">Medicamente</h2>
                <div className="space-y-3">
                    {medications.map((med) => (
                        <div key={med.id} className="p-4 border rounded">
                            <label className="flex items-center gap-2 font-medium">
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            handleMedChange(med.id, 'id', med.id);
                                        } else {
                                            setData('medications', Array.isArray(data.medications) ? data.medications.filter(m => m.id !== med.id) : []);
                                        }
                                    }}
                                /> {med.nume}
                            </label>
                            <div className="flex gap-2 mt-2">
                                <input
                                    type="number"
                                    placeholder="Frecvență"
                                    onChange={(e) => handleMedChange(med.id, 'frecventa', e.target.value)}
                                    className="w-1/2 px-2 py-1 border rounded"
                                />
                                <input
                                    type="number"
                                    placeholder="Interval ore"
                                    onChange={(e) => handleMedChange(med.id, 'interval_ore', e.target.value)}
                                    className="w-1/2 px-2 py-1 border rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button type="submit" disabled={processing} className="px-4 py-2 mt-6 text-white bg-green-600 rounded hover:bg-green-700">
                    Salvează Rețeta
                </button>
            </form>
        </AuthenticatedLayout>
    );
}
