import { j as e, $ as i, Y as t } from './app-C9_0fZuZ.js';
import { A as l } from './AuthenticatedLayout-iHc91eWH.js';
import './transition-jbR-Iu7L.js';
function n({ prescriptions: r }) {
    return e.jsxs(l, {
        children: [
            e.jsx(i, { title: 'Rețete' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-6xl p-6',
                children: [
                    e.jsxs('div', {
                        className: 'mb-6 flex items-center justify-between',
                        children: [
                            e.jsx('h1', {
                                className: 'text-2xl font-bold',
                                children: 'Rețete',
                            }),
                            e.jsx(t, {
                                href: route('prescriptions.create'),
                                className:
                                    'rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700',
                                children: '+ Creează rețetă',
                            }),
                        ],
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
                                                children: 'Pacient',
                                            }),
                                            e.jsx('th', {
                                                className:
                                                    'border-b px-4 py-2 text-left',
                                                children: 'Detalii',
                                            }),
                                            e.jsx('th', {
                                                className:
                                                    'border-b px-4 py-2 text-left',
                                                children: 'Medicamente',
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
                                                            'px-4 py-2 font-medium',
                                                        children:
                                                            s.patient.name,
                                                    }),
                                                    e.jsx('td', {
                                                        className: 'px-4 py-2',
                                                        children:
                                                            s.details || '—',
                                                    }),
                                                    e.jsx('td', {
                                                        className:
                                                            'px-4 py-2 text-sm text-gray-600',
                                                        children:
                                                            (
                                                                s.medications ??
                                                                []
                                                            )
                                                                .map(
                                                                    (a) =>
                                                                        a.nume,
                                                                )
                                                                .join(', ') ||
                                                            '—',
                                                    }),
                                                    e.jsx('td', {
                                                        className:
                                                            'space-x-2 px-4 py-2',
                                                        children: e.jsx(t, {
                                                            href: route(
                                                                'prescriptions.show',
                                                                s.id,
                                                            ),
                                                            className:
                                                                'text-sm text-blue-600 hover:underline',
                                                            children: 'Vezi',
                                                        }),
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
    });
}
export { n as default };
