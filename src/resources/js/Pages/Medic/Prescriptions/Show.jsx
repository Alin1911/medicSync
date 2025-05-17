import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { QRCodeSVG } from 'qrcode.react';

export default function ShowPrescription({ prescription }) {
    return (
        <AuthenticatedLayout>
            <Head title="Detalii Rețetă" />

            <div className="mx-auto max-w-4xl p-8 sm:p-12">
                <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                    Rețetă pentru{' '}
                    <span className="text-indigo-600 dark:text-indigo-400">
                        {prescription.patient.name}
                    </span>
                </h1>

                <div className="space-y-8 rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p>
                                <strong className="font-semibold">
                                    Detalii:
                                </strong>{' '}
                                {prescription.details || '—'}
                            </p>
                            <p>
                                <strong className="font-semibold">
                                    Emisă la:
                                </strong>{' '}
                                <time dateTime={prescription.issued_at}>
                                    {new Date(
                                        prescription.issued_at,
                                    ).toLocaleDateString('ro-RO', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </p>
                            <p>
                                <strong className="font-semibold">
                                    Expiră la:
                                </strong>{' '}
                                <time dateTime={prescription.expires_at}>
                                    {new Date(
                                        prescription.expires_at,
                                    ).toLocaleDateString('ro-RO', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </p>
                        </div>

                        {prescription.qr_code && (
                            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-6 shadow-inner dark:border-gray-600 dark:bg-gray-700">
                                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Cod Rețetă
                                </p>
                                <QRCodeSVG
                                    value={prescription.qr_code.cod}
                                    size={140}
                                    level="Q"
                                    bgColor="transparent"
                                    fgColor="#4F46E5" // Indigo-600 color pop
                                    className="drop-shadow-lg"
                                />
                                <p className="mt-3 select-all font-mono text-xs tracking-widest text-gray-400">
                                    {prescription.qr_code.cod}
                                </p>
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="mb-4 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Medicamente
                        </h2>
                        <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                            {prescription.medications.map((m) => (
                                <li key={m.id} className="text-lg leading-snug">
                                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                        {m.nume}
                                    </span>{' '}
                                    — {m.pivot.frecventa}x /{' '}
                                    {m.pivot.interval_ore}h
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
