import { j as e, $ as l, Y as s } from './app-ZeqbFyab.js';
import { A as d } from './AuthenticatedLayout-DImEP5KL.js';
import { F as c, a as r } from './index-CV0FVoQQ.js';
import './transition-BZm75T6a.js';
function h({ patients: a, prescriptions: i }) {
    return e.jsxs(d, {
        children: [
            e.jsx(l, { title: 'Dashboard Medic' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-6xl p-6',
                children: [
                    e.jsx('h1', {
                        className:
                            'mb-8 text-3xl font-extrabold tracking-tight text-gray-900',
                        children: 'Dashboard Medic',
                    }),
                    e.jsxs('section', {
                        className: 'mb-12',
                        children: [
                            e.jsx('h2', {
                                className:
                                    'mb-6 text-2xl font-semibold text-gray-800',
                                children: 'Pacienți',
                            }),
                            e.jsx('div', {
                                className:
                                    'overflow-x-auto rounded-lg border border-gray-200 shadow-sm',
                                children: e.jsxs('table', {
                                    className:
                                        'min-w-full divide-y divide-gray-200 bg-white',
                                    children: [
                                        e.jsx('thead', {
                                            className: 'bg-gray-50',
                                            children: e.jsx('tr', {
                                                children: [
                                                    'Nume',
                                                    'Email',
                                                    'Acțiuni',
                                                ].map((t) =>
                                                    e.jsx(
                                                        'th',
                                                        {
                                                            scope: 'col',
                                                            className:
                                                                'whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-gray-700',
                                                            children: t,
                                                        },
                                                        t,
                                                    ),
                                                ),
                                            }),
                                        }),
                                        e.jsxs('tbody', {
                                            className:
                                                'divide-y divide-gray-100',
                                            children: [
                                                a.length === 0 &&
                                                    e.jsx('tr', {
                                                        children: e.jsx('td', {
                                                            colSpan: 3,
                                                            className:
                                                                'px-6 py-4 text-center italic text-gray-500',
                                                            children:
                                                                'Niciun pacient găsit.',
                                                        }),
                                                    }),
                                                a.map((t) =>
                                                    e.jsxs(
                                                        'tr',
                                                        {
                                                            className:
                                                                'transition-colors duration-150 hover:bg-gray-50',
                                                            children: [
                                                                e.jsx('td', {
                                                                    className:
                                                                        'whitespace-nowrap px-6 py-4 font-medium text-gray-900',
                                                                    children:
                                                                        t.name,
                                                                }),
                                                                e.jsx('td', {
                                                                    className:
                                                                        'max-w-xs truncate px-6 py-4 text-gray-700',
                                                                    title: t.email,
                                                                    children:
                                                                        t.email ||
                                                                        '—',
                                                                }),
                                                                e.jsxs('td', {
                                                                    className:
                                                                        'flex gap-4 whitespace-nowrap px-6 py-4 text-sm',
                                                                    children: [
                                                                        e.jsxs(
                                                                            s,
                                                                            {
                                                                                href: route(
                                                                                    'patients.edit',
                                                                                    t.id,
                                                                                ),
                                                                                className:
                                                                                    'inline-flex items-center gap-1 rounded px-3 py-1 text-yellow-600 transition hover:bg-yellow-100',
                                                                                title: 'Editează pacient',
                                                                                children:
                                                                                    [
                                                                                        e.jsx(
                                                                                            c,
                                                                                            {},
                                                                                        ),
                                                                                        'Editează',
                                                                                    ],
                                                                            },
                                                                        ),
                                                                        e.jsxs(
                                                                            s,
                                                                            {
                                                                                href: route(
                                                                                    'patients.show',
                                                                                    t.id,
                                                                                ),
                                                                                className:
                                                                                    'inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:bg-blue-100',
                                                                                title: 'Vezi detalii pacient',
                                                                                children:
                                                                                    [
                                                                                        e.jsx(
                                                                                            r,
                                                                                            {},
                                                                                        ),
                                                                                        'Vezi',
                                                                                    ],
                                                                            },
                                                                        ),
                                                                    ],
                                                                }),
                                                            ],
                                                        },
                                                        t.id,
                                                    ),
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    e.jsxs('section', {
                        children: [
                            e.jsx('h2', {
                                className:
                                    'mb-6 text-2xl font-semibold text-gray-800',
                                children: 'Rețete',
                            }),
                            e.jsx('div', {
                                className:
                                    'overflow-x-auto rounded-lg border border-gray-200 shadow-sm',
                                children: e.jsxs('table', {
                                    className:
                                        'min-w-full divide-y divide-gray-200 bg-white',
                                    children: [
                                        e.jsx('thead', {
                                            className: 'bg-gray-50',
                                            children: e.jsx('tr', {
                                                children: [
                                                    'Detalii',
                                                    'Număr medicamente',
                                                    'Acțiuni',
                                                ].map((t) =>
                                                    e.jsx(
                                                        'th',
                                                        {
                                                            scope: 'col',
                                                            className:
                                                                'whitespace-nowrap px-6 py-3 text-left text-sm font-semibold text-gray-700',
                                                            children: t,
                                                        },
                                                        t,
                                                    ),
                                                ),
                                            }),
                                        }),
                                        e.jsxs('tbody', {
                                            className:
                                                'divide-y divide-gray-100',
                                            children: [
                                                i.length === 0 &&
                                                    e.jsx('tr', {
                                                        children: e.jsx('td', {
                                                            colSpan: 3,
                                                            className:
                                                                'px-6 py-4 text-center italic text-gray-500',
                                                            children:
                                                                'Nicio rețetă găsită.',
                                                        }),
                                                    }),
                                                i.map((t) =>
                                                    e.jsxs(
                                                        'tr',
                                                        {
                                                            className:
                                                                'transition-colors duration-150 hover:bg-gray-50',
                                                            children: [
                                                                e.jsx('td', {
                                                                    className:
                                                                        'max-w-xs truncate px-6 py-4 text-gray-700',
                                                                    title:
                                                                        t.details ||
                                                                        '',
                                                                    children:
                                                                        t.details ||
                                                                        '—',
                                                                }),
                                                                e.jsx('td', {
                                                                    className:
                                                                        'whitespace-nowrap px-6 py-4 text-gray-700',
                                                                    children:
                                                                        Array.isArray(
                                                                            t.medications,
                                                                        )
                                                                            ? t
                                                                                  .medications
                                                                                  .length
                                                                            : 0,
                                                                }),
                                                                e.jsx('td', {
                                                                    className:
                                                                        'whitespace-nowrap px-6 py-4 text-sm',
                                                                    children:
                                                                        e.jsxs(
                                                                            s,
                                                                            {
                                                                                href: route(
                                                                                    'prescriptions.show',
                                                                                    t.id,
                                                                                ),
                                                                                className:
                                                                                    'inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:bg-blue-100',
                                                                                title: 'Vezi detalii rețetă',
                                                                                children:
                                                                                    [
                                                                                        e.jsx(
                                                                                            r,
                                                                                            {},
                                                                                        ),
                                                                                        'Vezi',
                                                                                    ],
                                                                            },
                                                                        ),
                                                                }),
                                                            ],
                                                        },
                                                        t.id,
                                                    ),
                                                ),
                                            ],
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
export { h as default };
