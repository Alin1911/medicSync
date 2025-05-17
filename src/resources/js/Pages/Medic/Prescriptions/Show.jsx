import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { QRCodeSVG } from 'qrcode.react';

export default function ShowPrescription({ prescription }) {
    return (
        <AuthenticatedLayout>
            <Head title="Detalii Rețetă" />
            <div className="mx-auto max-w-4xl p-6">
                <h1 className="mb-4 text-2xl font-bold">
                    Rețetă pentru {prescription.patient.name}
                </h1>

                <div className="space-y-6 rounded bg-white p-6 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p>
                                <strong>Detalii:</strong> {prescription.details || '—'}
                            </p>
                            <p>
                                <strong>Emisă la:</strong> {prescription.issued_at}
                            </p>
                            <p>
                                <strong>Expiră la:</strong> {prescription.expires_at}
                            </p>
                        </div>

                        {prescription.qr_code && (
                            <div className="flex flex-col items-center justify-center border rounded p-4 bg-gray-50 shadow-inner">
                                <p className="mb-2 font-semibold text-sm text-gray-600">
                                    Cod Rețetă
                                </p>
                                <QRCodeSVG
                                    value={prescription.qr_code.cod}
                                    size={128}
                                    level="Q"
                                    bgColor="#ffffff"
                                    fgColor="#1f2937"
                                />
                                <p className="mt-2 text-xs text-gray-500 tracking-widest">
                                    {prescription.qr_code.cod}
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Medicamente</h2>
                        <ul className="ml-6 list-disc space-y-1">
                            {prescription.medications.map((m) => (
                                <li key={m.id}>
                                    <span className="font-medium">{m.nume}</span> — {m.pivot.frecventa}x / {m.pivot.interval_ore}h
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
