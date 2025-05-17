import { Y as a, j as e, $ as r } from './app-qBAvZH64.js';
import { A as n } from './AuthenticatedLayout-Crtg7vLh.js';
import { a as c, b as l } from './index-BXrv3s2U.js';
import './transition-CHdrGirl.js';
function h({ prescriptions: i }) {
    return e.jsxs(n, {
        children: [
            e.jsx(r, { title: 'Rețete' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-6xl p-6',
                children: [
                    e.jsxs('div', {
                        className: 'mb-6 flex items-center justify-between',
                        children: [
                            e.jsx('h1', {
                                className:
                                    'text-3xl font-extrabold tracking-tight text-gray-900',
                                children: 'Rețete',
                            }),
                            e.jsxs(a, {
                                href: route('prescriptions.create'),
                                className:
                                    'inline-flex items-center gap-2 rounded bg-green-600 px-5 py-2 text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
                                children: [e.jsx(l, {}), ' Creează rețetă'],
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
                                            'Pacient',
                                            'Detalii',
                                            'Medicamente',
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
                                                    colSpan: 4,
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
                                                                'whitespace-nowrap px-6 py-4 font-medium text-gray-900',
                                                            children:
                                                                t.patient.name,
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'max-w-xs truncate px-6 py-4 text-gray-700',
                                                            title:
                                                                t.details || '',
                                                            children:
                                                                t.details ||
                                                                '—',
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'px-6 py-4',
                                                            children: e.jsx(
                                                                'div',
                                                                {
                                                                    className:
                                                                        'flex flex-wrap gap-1',
                                                                    children:
                                                                        (
                                                                            t.medications ??
                                                                            []
                                                                        )
                                                                            .length >
                                                                        0
                                                                            ? t.medications.map(
                                                                                  (
                                                                                      s,
                                                                                  ) =>
                                                                                      e.jsx(
                                                                                          'span',
                                                                                          {
                                                                                              className:
                                                                                                  'inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800',
                                                                                              title: `Frecvență: ${s.frecventa || '-'}, Interval: ${s.interval_ore || '-'}`,
                                                                                              children:
                                                                                                  s.nume,
                                                                                          },
                                                                                          s.id,
                                                                                      ),
                                                                              )
                                                                            : e.jsx(
                                                                                  'span',
                                                                                  {
                                                                                      className:
                                                                                          'italic text-gray-400',
                                                                                      children:
                                                                                          '—',
                                                                                  },
                                                                              ),
                                                                },
                                                            ),
                                                        }),
                                                        e.jsx('td', {
                                                            className:
                                                                'whitespace-nowrap px-6 py-4 text-sm',
                                                            children: e.jsxs(
                                                                a,
                                                                {
                                                                    href: route(
                                                                        'prescriptions.show',
                                                                        t.id,
                                                                    ),
                                                                    className:
                                                                        'inline-flex items-center gap-1 rounded px-3 py-1 text-blue-600 transition hover:underline',
                                                                    title: 'Vezi detalii rețetă',
                                                                    children: [
                                                                        e.jsx(
                                                                            c,
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
    });
}
export { h as default };
