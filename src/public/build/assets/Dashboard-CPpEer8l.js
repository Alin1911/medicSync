import { Y as a, j as e, $ as l } from './app-m0j9LaUS.js';
import { A as i } from './AuthenticatedLayout-u8i98N5I.js';
import './transition-u05Ep7ua.js';
function n({ patients: t, prescriptions: r }) {
    return e.jsxs(i, {
        children: [
            e.jsx(l, { title: 'Dashboard Medic' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-6xl p-6',
                children: [
                    e.jsx('h1', {
                        className: 'mb-6 text-3xl font-bold text-gray-800',
                        children: 'Dashboard Medic',
                    }),
                    e.jsxs('section', {
                        className: 'mb-10',
                        children: [
                            e.jsx('h2', {
                                className: 'mb-4 text-2xl font-semibold',
                                children: 'Pacienți',
                            }),
                            e.jsx('div', {
                                className: 'overflow-x-auto rounded shadow',
                                children: e.jsxs('table', {
                                    className: 'min-w-full bg-white',
                                    children: [
                                        e.jsx('thead', {
                                            className: 'bg-gray-100',
                                            children: e.jsxs('tr', {
                                                children: [
                                                    e.jsx('th', {
                                                        className:
                                                            'border-b px-4 py-2 text-left',
                                                        children: 'Nume',
                                                    }),
                                                    e.jsx('th', {
                                                        className:
                                                            'border-b px-4 py-2 text-left',
                                                        children: 'Email',
                                                    }),
                                                    e.jsx('th', {
                                                        className:
                                                            'border-b px-4 py-2 text-left',
                                                        children: 'Acțiuni',
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx('tbody', {
                                            children: t.map((s) =>
                                                e.jsxs(
                                                    'tr',
                                                    {
                                                        className:
                                                            'border-b hover:bg-gray-50',
                                                        children: [
                                                            e.jsx('td', {
                                                                className:
                                                                    'px-4 py-2',
                                                                children:
                                                                    s.name,
                                                            }),
                                                            e.jsx('td', {
                                                                className:
                                                                    'px-4 py-2',
                                                                children:
                                                                    s.email,
                                                            }),
                                                            e.jsxs('td', {
                                                                className:
                                                                    'space-x-2 px-4 py-2',
                                                                children: [
                                                                    e.jsx(a, {
                                                                        href: route(
                                                                            'medic.patients.edit',
                                                                            s.id,
                                                                        ),
                                                                        className:
                                                                            'text-sm text-blue-600 hover:underline',
                                                                        children:
                                                                            'Editează',
                                                                    }),
                                                                    e.jsx(a, {
                                                                        href: route(
                                                                            'medic.patients.show',
                                                                            s.id,
                                                                        ),
                                                                        className:
                                                                            'text-sm text-gray-700 hover:underline',
                                                                        children:
                                                                            'Vezi',
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    },
                                                    s.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    e.jsxs('section', {
                        children: [
                            e.jsx('h2', {
                                className: 'mb-4 text-2xl font-semibold',
                                children: 'Rețete',
                            }),
                            e.jsx('div', {
                                className: 'overflow-x-auto rounded shadow',
                                children: e.jsxs('table', {
                                    className: 'min-w-full bg-white',
                                    children: [
                                        e.jsx('thead', {
                                            className: 'bg-gray-100',
                                            children: e.jsxs('tr', {
                                                children: [
                                                    e.jsx('th', {
                                                        className:
                                                            'border-b px-4 py-2 text-left',
                                                        children: 'Detalii',
                                                    }),
                                                    e.jsx('th', {
                                                        className:
                                                            'border-b px-4 py-2 text-left',
                                                        children:
                                                            'Număr medicamente',
                                                    }),
                                                    e.jsx('th', {
                                                        className:
                                                            'border-b px-4 py-2 text-left',
                                                        children: 'Acțiuni',
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx('tbody', {
                                            children: r.map((s) =>
                                                e.jsxs(
                                                    'tr',
                                                    {
                                                        className:
                                                            'border-b hover:bg-gray-50',
                                                        children: [
                                                            e.jsx('td', {
                                                                className:
                                                                    'px-4 py-2',
                                                                children:
                                                                    s.details ||
                                                                    '—',
                                                            }),
                                                            e.jsx('td', {
                                                                className:
                                                                    'px-4 py-2',
                                                                children:
                                                                    Array.isArray(
                                                                        s.medications,
                                                                    )
                                                                        ? s
                                                                              .medications
                                                                              .length
                                                                        : 0,
                                                            }),
                                                            e.jsx('td', {
                                                                className:
                                                                    'space-x-2 px-4 py-2',
                                                                children: e.jsx(
                                                                    a,
                                                                    {
                                                                        href: route(
                                                                            'medic.prescriptions.show',
                                                                            s.id,
                                                                        ),
                                                                        className:
                                                                            'text-sm text-gray-700 hover:underline',
                                                                        children:
                                                                            'Vezi',
                                                                    },
                                                                ),
                                                            }),
                                                        ],
                                                    },
                                                    s.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
export { n as default };
