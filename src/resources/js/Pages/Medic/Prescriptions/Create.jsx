import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreatePrescription({ patients, medications }) {
    const { data, setData, post, processing } = useForm({
        patient_id: '',
        issued_at: '',
        expires_at: '',
        details: '',
        medications: [],
    });

    // Since react-datepicker works with JS Date objects, let's sync it with inertia's string dates
    // Convert string date to Date object for react-datepicker, fallback null if empty
    const parseDate = (dateStr) => (dateStr ? new Date(dateStr) : null);

    // Handle date changes converting Date back to ISO string for Inertia form
    const handleDateChange = (field, date) => {
        setData(field, date ? date.toISOString().slice(0, 10) : '');
    };

    const handleMedChange = (id, field, value) => {
        const updated = [...data.medications];
        const index = updated.findIndex((m) => m.id === id);

        if (index === -1) {
            updated.push({ id, [field]: value });
        } else {
            updated[index] = {
                ...updated[index],
                [field]: value,
            };
        }

        setData('medications', updated);
    };

    const toggleMed = (id) => {
        const current = [...data.medications];
        const exists = current.find((m) => m.id === id);

        if (exists) {
            setData(
                'medications',
                current.filter((m) => m.id !== id),
            );
        } else {
            setData('medications', [
                ...current,
                { id, frecventa: '', interval_ore: '' },
            ]);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        const validMedications = data.medications.filter(
            (med) => med.id && med.frecventa && med.interval_ore,
        );

        if (validMedications.length === 0) {
            alert('Adaugă cel puțin un medicament complet.');
            return;
        }

        setData('medications', validMedications);
        post(route('prescriptions.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Creează Rețetă" />
            <form
                onSubmit={submit}
                className="mx-auto max-w-2xl rounded bg-white p-6 shadow"
            >
                <h1 className="mb-4 text-xl font-bold">Creează Rețetă</h1>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">
                        Pacient
                    </label>
                    <select
                        value={data.patient_id}
                        onChange={(e) => setData('patient_id', e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    >
                        <option value="">Selectează pacient</option>
                        {patients.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4 flex gap-4">
                    <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                            Data emiterii
                        </label>
                        <DatePicker
                            selected={parseDate(data.issued_at)}
                            onChange={(date) =>
                                handleDateChange('issued_at', date)
                            }
                            dateFormat="yyyy-MM-dd"
                            className="w-full rounded border px-3 py-2"
                            placeholderText="Selectează data"
                        />
                    </div>
                    <div className="w-full">
                        <label className="mb-1 block text-sm font-medium">
                            Data expirării
                        </label>
                        <DatePicker
                            selected={parseDate(data.expires_at)}
                            onChange={(date) =>
                                handleDateChange('expires_at', date)
                            }
                            dateFormat="yyyy-MM-dd"
                            className="w-full rounded border px-3 py-2"
                            placeholderText="Selectează data"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="mb-1 block text-sm font-medium">
                        Detalii
                    </label>
                    <textarea
                        value={data.details}
                        onChange={(e) => setData('details', e.target.value)}
                        placeholder="Detalii opționale"
                        className="w-full rounded border px-3 py-2"
                    />
                </div>

                <h2 className="mb-2 text-lg font-semibold">Medicamente</h2>
                <div className="space-y-3">
                    {medications.map((med) => {
                        const selected = data.medications.some(
                            (m) => m.id === med.id,
                        );
                        const current =
                            data.medications.find((m) => m.id === med.id) || {};
                        return (
                            <div key={med.id} className="rounded border p-4">
                                <label className="flex items-center gap-2 font-medium">
                                    <input
                                        type="checkbox"
                                        checked={selected}
                                        onChange={() => toggleMed(med.id)}
                                    />
                                    {med.nume}
                                </label>

                                {selected && (
                                    <div className="mt-2 flex gap-2">
                                        <input
                                            type="number"
                                            placeholder="Frecvență"
                                            value={current.frecventa || ''}
                                            onChange={(e) =>
                                                handleMedChange(
                                                    med.id,
                                                    'frecventa',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-1/2 rounded border px-2 py-1"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Interval ore"
                                            value={current.interval_ore || ''}
                                            onChange={(e) =>
                                                handleMedChange(
                                                    med.id,
                                                    'interval_ore',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-1/2 rounded border px-2 py-1"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="mt-6 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                    Salvează Rețeta
                </button>

                {/* Debug */}
                <pre className="mt-4 rounded bg-gray-100 p-2 text-xs">
                    {JSON.stringify(data.medications, null, 2)}
                </pre>
            </form>
        </AuthenticatedLayout>
    );
}
