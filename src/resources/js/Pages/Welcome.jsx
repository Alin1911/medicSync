import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Bine ai venit la MedicSync" />
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
                <div className="w-full max-w-4xl text-center">
                    <h1 className="mb-4 text-4xl font-bold text-blue-700 sm:text-5xl">
                        Bine ai venit la{' '}
                        <span className="text-blue-900">MedicSync</span>
                    </h1>
                    <p className="mb-8 text-lg text-gray-700 sm:text-xl">
                        Platforma digitală care conectează medici și pacienți
                        pentru o gestionare eficientă a rețetelor și
                        comunicării.
                    </p>

                    <div className="flex justify-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
                            >
                                Intră în aplicație
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                                >
                                    Autentificare
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                                >
                                    Creează cont
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="mt-16">
                        <img
                            src="/medic-dashboard-preview.jpg"
                            alt="Preview MedicSync"
                            className="mx-auto w-full max-w-2xl rounded shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
