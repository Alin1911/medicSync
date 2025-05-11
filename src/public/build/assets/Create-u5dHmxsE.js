import { v as b, j as e, $ as j } from './app-m0j9LaUS.js';
import { A as v } from './AuthenticatedLayout-u8i98N5I.js';
import './transition-u05Ep7ua.js';
function y({ patients: c, medications: o }) {
    const {
            data: t,
            setData: i,
            post: m,
            processing: x,
        } = b({
            patient_id: '',
            issued_at: '',
            expires_at: '',
            details: '',
            medications: [],
        }),
        r = (a, s, l) => {
            i('medications', (u) => {
                const n = [...u],
                    d = n.findIndex((h) => h.id === a);
                return d === -1 ? n.push({ id: a, [s]: l }) : (n[d][s] = l), n;
            });
        },
        p = (a) => {
            a.preventDefault(), m(route('medic.prescriptions.store'));
        };
    return e.jsxs(v, {
        children: [
            e.jsx(j, { title: 'Creează Rețetă' }),
            e.jsxs('form', {
                onSubmit: p,
                className: 'mx-auto max-w-2xl rounded bg-white p-6 shadow',
                children: [
                    e.jsx('h1', {
                        className: 'mb-4 text-xl font-bold',
                        children: 'Creează Rețetă',
                    }),
                    e.jsxs('div', {
                        className: 'mb-4',
                        children: [
                            e.jsx('label', {
                                className: 'mb-1 block text-sm font-medium',
                                children: 'Pacient',
                            }),
                            e.jsxs('select', {
                                value: t.patient_id,
                                onChange: (a) =>
                                    i('patient_id', a.target.value),
                                className: 'w-full rounded border px-3 py-2',
                                children: [
                                    e.jsx('option', {
                                        value: '',
                                        children: 'Selectează pacient',
                                    }),
                                    c.map((a) =>
                                        e.jsx(
                                            'option',
                                            { value: a.id, children: a.name },
                                            a.id,
                                        ),
                                    ),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-4 flex gap-4',
                        children: [
                            e.jsxs('div', {
                                className: 'w-full',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'mb-1 block text-sm font-medium',
                                        children: 'Data emiterii',
                                    }),
                                    e.jsx('input', {
                                        type: 'date',
                                        value: t.issued_at,
                                        onChange: (a) =>
                                            i('issued_at', a.target.value),
                                        className:
                                            'w-full rounded border px-3 py-2',
                                    }),
                                ],
                            }),
                            e.jsxs('div', {
                                className: 'w-full',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'mb-1 block text-sm font-medium',
                                        children: 'Data expirării',
                                    }),
                                    e.jsx('input', {
                                        type: 'date',
                                        value: t.expires_at,
                                        onChange: (a) =>
                                            i('expires_at', a.target.value),
                                        className:
                                            'w-full rounded border px-3 py-2',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-4',
                        children: [
                            e.jsx('label', {
                                className: 'mb-1 block text-sm font-medium',
                                children: 'Detalii',
                            }),
                            e.jsx('textarea', {
                                value: t.details,
                                onChange: (a) => i('details', a.target.value),
                                placeholder: 'Detalii opționale',
                                className: 'w-full rounded border px-3 py-2',
                            }),
                        ],
                    }),
                    e.jsx('h2', {
                        className: 'mb-2 text-lg font-semibold',
                        children: 'Medicamente',
                    }),
                    e.jsx('div', {
                        className: 'space-y-3',
                        children: o.map((a) =>
                            e.jsxs(
                                'div',
                                {
                                    className: 'rounded border p-4',
                                    children: [
                                        e.jsxs('label', {
                                            className:
                                                'flex items-center gap-2 font-medium',
                                            children: [
                                                e.jsx('input', {
                                                    type: 'checkbox',
                                                    onChange: (s) => {
                                                        s.target.checked
                                                            ? r(
                                                                  a.id,
                                                                  'id',
                                                                  a.id,
                                                              )
                                                            : i(
                                                                  'medications',
                                                                  Array.isArray(
                                                                      t.medications,
                                                                  )
                                                                      ? t.medications.filter(
                                                                            (
                                                                                l,
                                                                            ) =>
                                                                                l.id !==
                                                                                a.id,
                                                                        )
                                                                      : [],
                                                              );
                                                    },
                                                }),
                                                ' ',
                                                a.nume,
                                            ],
                                        }),
                                        e.jsxs('div', {
                                            className: 'mt-2 flex gap-2',
                                            children: [
                                                e.jsx('input', {
                                                    type: 'number',
                                                    placeholder: 'Frecvență',
                                                    onChange: (s) =>
                                                        r(
                                                            a.id,
                                                            'frecventa',
                                                            s.target.value,
                                                        ),
                                                    className:
                                                        'w-1/2 rounded border px-2 py-1',
                                                }),
                                                e.jsx('input', {
                                                    type: 'number',
                                                    placeholder: 'Interval ore',
                                                    onChange: (s) =>
                                                        r(
                                                            a.id,
                                                            'interval_ore',
                                                            s.target.value,
                                                        ),
                                                    className:
                                                        'w-1/2 rounded border px-2 py-1',
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                                a.id,
                            ),
                        ),
                    }),
                    e.jsx('button', {
                        type: 'submit',
                        disabled: x,
                        className:
                            'mt-6 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700',
                        children: 'Salvează Rețeta',
                    }),
                ],
            }),
        ],
    });
}
export { y as default };
