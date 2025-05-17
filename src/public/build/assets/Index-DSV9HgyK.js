import { j as e, $ as r, Y as s } from './app-qBAvZH64.js';
import { A as n } from './AuthenticatedLayout-Crtg7vLh.js';
import { F as c, a as d, b as l } from './index-BXrv3s2U.js';
import './transition-CHdrGirl.js';
function h({ patients: i }) {
    return e.jsxs(n, {
        children: [
            e.jsx(r, { title: 'Pacienți' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-6xl p-6',
                children: [
                    e.jsxs('div', {
                        className: 'mb-6 flex items-center justify-between',
                        children: [
                            e.jsx('h1', {
                                className:
                                    'text-3xl font-extrabold tracking-tight text-gray-900',
                                children: 'Pacienți',
                            }),
                            e.jsxs(s, {
                                href: route('patients.create'),
                                className:
                                    'inline-flex items-center gap-2 rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
                                children: [e.jsx(l, {}), 'Adaugă pacient'],
                            }),
                        ],
                    }),
                    e.jsx('div', {
                        className:
                            'overflow-x-auto rounded-lg border border-gray-200 shadow-sm',
                        children: e.jsxs('table', {
                            className: 'min-w-full divide-y divide-gray-200',
                            children: [
                                e.jsx('thead', {
                                    className: 'bg-gray-50',
                                    children: e.jsx('tr', {
                                        children: [
                                            'Nume',
                                            'Email',
                                            'CNP',
                                            'Telefon',
                                            'Gen',
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
                                        'divide-y divide-gray-100 bg-white',
                                    children: [
                                        i.length === 0 &&
                                            e.jsx('tr', {
                                                children: e.jsx('td', {
                                                    colSpan: 6,
                                                    className:
                                                        'px-6 py-4 text-center italic text-gray-500',
                                                    children:
                                                        'Niciun pacient găsit.',
                                                }),
                                            }),
                                        i.map((t) => {
                                            const a = t.patient_detail || {};
                                            return e.jsxs(
                                                'tr',
                                                {
                                                    className:
                                                        'cursor-pointer transition-colors duration-150 hover:bg-gray-50',
                                                    children: [
                                                        e.jsx('td', {
                                                            className:
                                                                'whitespace-nowrap px-6 py-4 font-medium text-gray-900',
                                                            children: t.name,
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'max-w-xs truncate px-6 py-4 text-gray-700',
                                                            title: t.email,
                                                            children:
                                                                t.email || '—',
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'whitespace-nowrap px-6 py-4 text-gray-700',
                                                            children:
                                                                a.cnp || '—',
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'whitespace-nowrap px-6 py-4 text-gray-700',
                                                            children:
                                                                a.phone || '—',
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'whitespace-nowrap px-6 py-4 capitalize text-gray-700',
                                                            children:
                                                                a.gender || '—',
                                                        }),
                                                        e.jsxs('td', {
                                                            className:
                                                                'flex gap-3 whitespace-nowrap px-6 py-4 text-sm',
                                                            children: [
                                                                e.jsxs(s, {
                                                                    href: route(
                                                                        'patients.edit',
                                                                        t.id,
                                                                    ),
                                                                    className:
                                                                        'inline-flex items-center gap-1 rounded px-3 py-1 text-yellow-600 transition hover:bg-yellow-100',
                                                                    title: 'Editează pacient',
                                                                    children: [
                                                                        e.jsx(
                                                                            c,
                                                                            {},
                                                                        ),
                                                                        'Editează',
                                                                    ],
                                                                }),
                                                                e.jsxs(s, {
                                                                    href: route(
                                                                        'patients.show',
                                                                        t.id,
                                                                    ),
                                                                    className:
                                                                        'inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:bg-blue-100',
                                                                    title: 'Vezi detalii pacient',
                                                                    children: [
                                                                        e.jsx(
                                                                            d,
                                                                            {},
                                                                        ),
                                                                        'Vezi',
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                t.id,
                                            );
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
export { h as default };
