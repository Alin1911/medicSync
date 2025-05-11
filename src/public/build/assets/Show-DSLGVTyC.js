import { j as e, $ as i } from './app-C9_0fZuZ.js';
import { A as t } from './AuthenticatedLayout-iHc91eWH.js';
import './transition-jbR-Iu7L.js';
function r({ patient: s }) {
    return e.jsxs(t, {
        children: [
            e.jsx(i, { title: `Detalii pacient – ${s.name}` }),
            e.jsxs('div', {
                className: 'mx-auto max-w-4xl p-6',
                children: [
                    e.jsx('h1', {
                        className: 'mb-4 text-2xl font-bold',
                        children: 'Detalii pacient',
                    }),
                    e.jsxs('div', {
                        className: 'rounded bg-white p-4 shadow',
                        children: [
                            e.jsxs('p', {
                                children: [
                                    e.jsx('strong', { children: 'Nume:' }),
                                    ' ',
                                    s.name,
                                ],
                            }),
                            e.jsxs('p', {
                                children: [
                                    e.jsx('strong', { children: 'Email:' }),
                                    ' ',
                                    s.email,
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
