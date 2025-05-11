import { j as e, $ as i } from './app-m0j9LaUS.js';
import { A as l } from './AuthenticatedLayout-u8i98N5I.js';
import './transition-u05Ep7ua.js';
function r({ prescription: s }) {
    return e.jsxs(l, {
        children: [
            e.jsx(i, { title: 'Detalii Rețetă' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-4xl p-6',
                children: [
                    e.jsxs('h1', {
                        className: 'mb-4 text-2xl font-bold',
                        children: ['Rețetă pentru ', s.patient.name],
                    }),
                    e.jsxs('div', {
                        className: 'space-y-2 rounded bg-white p-4 shadow',
                        children: [
                            e.jsxs('p', {
                                children: [
                                    e.jsx('strong', { children: 'Detalii:' }),
                                    ' ',
                                    s.details || '—',
                                ],
                            }),
                            e.jsxs('p', {
                                children: [
                                    e.jsx('strong', { children: 'Emisă la:' }),
                                    ' ',
                                    s.issued_at,
                                ],
                            }),
                            e.jsxs('p', {
                                children: [
                                    e.jsx('strong', { children: 'Expiră la:' }),
                                    ' ',
                                    s.expires_at,
                                ],
                            }),
                            e.jsxs('div', {
                                children: [
                                    e.jsx('h2', {
                                        className:
                                            'mb-2 mt-4 text-lg font-semibold',
                                        children: 'Medicamente',
                                    }),
                                    e.jsx('ul', {
                                        className: 'ml-6 list-disc',
                                        children: s.medications.map((t) =>
                                            e.jsxs(
                                                'li',
                                                {
                                                    children: [
                                                        t.nume,
                                                        ' — ',
                                                        t.pivot.frecventa,
                                                        'x /',
                                                        ' ',
                                                        t.pivot.interval_ore,
                                                        'h',
                                                    ],
                                                },
                                                t.id,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
export { r as default };
