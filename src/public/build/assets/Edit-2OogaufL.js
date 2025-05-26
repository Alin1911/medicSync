import { j as e, v as f, $ as y } from './app-ZeqbFyab.js';
import { A as j } from './AuthenticatedLayout-DImEP5KL.js';
import './transition-BZm75T6a.js';
function E({ patient: t }) {
    var o, i, c, m, x;
    const {
            data: s,
            setData: d,
            put: u,
            processing: n,
            errors: l,
        } = f({
            name: t.name,
            email: t.email,
            cnp: ((o = t.patient_detail) == null ? void 0 : o.cnp) || '',
            birthdate:
                ((i = t.patient_detail) == null ? void 0 : i.birthdate) || '',
            gender: ((c = t.patient_detail) == null ? void 0 : c.gender) || '',
            phone: ((m = t.patient_detail) == null ? void 0 : m.phone) || '',
            address:
                ((x = t.patient_detail) == null ? void 0 : x.address) || '',
        }),
        p = (r) => {
            r.preventDefault(), u(route('patients.update', t.id));
        };
    return e.jsxs(j, {
        children: [
            e.jsx(y, { title: `Editează – ${t.name}` }),
            e.jsxs('form', {
                onSubmit: p,
                className: 'mx-auto max-w-md rounded-lg bg-white p-8 shadow-md',
                children: [
                    e.jsx('h1', {
                        className: 'mb-6 text-2xl font-extrabold text-gray-900',
                        children: 'Editează pacient',
                    }),
                    e.jsxs('div', {
                        className: 'space-y-5',
                        children: [
                            [
                                {
                                    label: 'Nume',
                                    type: 'text',
                                    name: 'name',
                                    placeholder: 'Nume',
                                },
                                {
                                    label: 'Email',
                                    type: 'email',
                                    name: 'email',
                                    placeholder: 'Email',
                                },
                                {
                                    label: 'CNP',
                                    type: 'text',
                                    name: 'cnp',
                                    placeholder: 'CNP',
                                },
                                {
                                    label: 'Data nașterii',
                                    type: 'date',
                                    name: 'birthdate',
                                },
                                {
                                    label: 'Telefon',
                                    type: 'text',
                                    name: 'phone',
                                    placeholder: 'Telefon',
                                },
                                {
                                    label: 'Adresă',
                                    type: 'text',
                                    name: 'address',
                                    placeholder: 'Adresă',
                                },
                            ].map(
                                ({
                                    label: r,
                                    type: h,
                                    name: a,
                                    placeholder: b,
                                }) =>
                                    e.jsxs(
                                        'div',
                                        {
                                            className: 'flex flex-col',
                                            children: [
                                                e.jsx('label', {
                                                    className:
                                                        'mb-1 text-sm font-medium text-gray-700',
                                                    htmlFor: a,
                                                    children: r,
                                                }),
                                                e.jsx('input', {
                                                    id: a,
                                                    type: h,
                                                    value: s[a],
                                                    onChange: (g) =>
                                                        d(a, g.target.value),
                                                    placeholder: b || '',
                                                    className: `rounded border px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${l[a] ? 'border-red-500' : 'border-gray-300'}`,
                                                }),
                                                l[a] &&
                                                    e.jsx('span', {
                                                        className:
                                                            'mt-1 text-xs text-red-600',
                                                        children: l[a],
                                                    }),
                                            ],
                                        },
                                        a,
                                    ),
                            ),
                            e.jsxs('div', {
                                className: 'flex flex-col',
                                children: [
                                    e.jsx('label', {
                                        className:
                                            'mb-1 text-sm font-medium text-gray-700',
                                        htmlFor: 'gender',
                                        children: 'Gen',
                                    }),
                                    e.jsxs('select', {
                                        id: 'gender',
                                        value: s.gender,
                                        onChange: (r) =>
                                            d('gender', r.target.value),
                                        className: `rounded border px-3 py-2 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${l.gender ? 'border-red-500' : 'border-gray-300'}`,
                                        children: [
                                            e.jsx('option', {
                                                value: '',
                                                children: 'Selectează genul',
                                            }),
                                            e.jsx('option', {
                                                value: 'M',
                                                children: 'Masculin',
                                            }),
                                            e.jsx('option', {
                                                value: 'F',
                                                children: 'Feminin',
                                            }),
                                            e.jsx('option', {
                                                value: 'Alt',
                                                children: 'Alt',
                                            }),
                                        ],
                                    }),
                                    l.gender &&
                                        e.jsx('span', {
                                            className:
                                                'mt-1 text-xs text-red-600',
                                            children: l.gender,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx('button', {
                        type: 'submit',
                        disabled: n,
                        className:
                            'mt-8 w-full rounded bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50',
                        children: n ? 'Se salvează...' : 'Salvează',
                    }),
                ],
            }),
        ],
    });
}
export { E as default };
