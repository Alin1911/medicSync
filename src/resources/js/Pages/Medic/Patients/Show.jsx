import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {
    AsteriskIcon,
    CalendarIcon,
    IdCardIcon,
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    UserIcon,
} from 'lucide-react';

export default function ShowPatient({ patient }) {
    const details = patient.patient_detail;

    const InfoItem = ({ icon: Icon, label, value }) => (
        <div className="flex items-start gap-3">
            <div className="mt-1 text-gray-500">
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-600">{label}</p>
                <p className="text-sm text-gray-900">{value || '—'}</p>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout>
            <Head title={`Detalii pacient – ${patient.name}`} />

            <div className="mx-auto max-w-4xl p-6">
                <h1 className="mb-6 text-2xl font-bold text-gray-800">
                    Detalii pacient
                </h1>

                <div className="space-y-6 rounded-xl bg-white p-6 shadow-lg">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <InfoItem
                            icon={UserIcon}
                            label="Nume"
                            value={patient.name}
                        />
                        <InfoItem
                            icon={MailIcon}
                            label="Email"
                            value={patient.email}
                        />
                        {details && (
                            <>
                                <InfoItem
                                    icon={IdCardIcon}
                                    label="CNP"
                                    value={details.cnp}
                                />
                                <InfoItem
                                    icon={CalendarIcon}
                                    label="Data nașterii"
                                    value={details.birthdate}
                                />
                                <InfoItem
                                    icon={AsteriskIcon}
                                    label="Gen"
                                    value={details.gender}
                                />
                                <InfoItem
                                    icon={PhoneIcon}
                                    label="Telefon"
                                    value={details.phone}
                                />
                                <InfoItem
                                    icon={MapPinIcon}
                                    label="Adresă"
                                    value={details.address}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
