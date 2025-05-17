import { j as e, v as p, $ as u } from './app-qBAvZH64.js';
import { A as b } from './AuthenticatedLayout-Crtg7vLh.js';
import './transition-CHdrGirl.js';
function f() {
    const {
            data: l,
            setData: o,
            post: d,
            processing: s,
            errors: a,
        } = p({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            cnp: '',
            birthdate: '',
            gender: '',
            phone: '',
            address: '',
        }),
        n = (t) => {
            t.preventDefault(), d(route('patients.store'));
        };
    return e.jsxs(b, {
        children: [
            e.jsx(u, { title: 'Adaugă pacient' }),
            e.jsxs('form', {
                onSubmit: n,
                className:
                    'mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-lg',
                noValidate: !0,
                children: [
                    e.jsx('h1', {
                        className:
                            'mb-6 text-center text-2xl font-extrabold text-gray-900',
                        children: 'Adaugă pacient',
                    }),
                    [
                        {
                            label: 'Nume',
                            type: 'text',
                            key: 'name',
                            placeholder: 'Nume complet',
                        },
                        {
                            label: 'Email',
                            type: 'email',
                            key: 'email',
                            placeholder: 'Email',
                        },
                        {
                            label: 'Parolă',
                            type: 'password',
                            key: 'password',
                            placeholder: 'Parolă',
                        },
                        {
                            label: 'Confirmă parolă',
                            type: 'password',
                            key: 'password_confirmation',
                            placeholder: 'Confirmă parolă',
                        },
                        {
                            label: 'CNP',
                            type: 'text',
                            key: 'cnp',
                            placeholder: 'CNP',
                        },
                        {
                            label: 'Data nașterii',
                            type: 'date',
                            key: 'birthdate',
                        },
                        {
                            label: 'Telefon',
                            type: 'text',
                            key: 'phone',
                            placeholder: 'Telefon',
                        },
                        {
                            label: 'Adresă',
                            type: 'text',
                            key: 'address',
                            placeholder: 'Adresă',
                        },
                    ].map(({ label: t, type: i, key: r, placeholder: c }) =>
                        e.jsxs(
                            'div',
                            {
                                className: 'mb-5',
                                children: [
                                    e.jsx('label', {
                                        htmlFor: r,
                                        className:
                                            'mb-1 block text-sm font-semibold text-gray-700',
                                        children: t,
                                    }),
                                    e.jsx('input', {
                                        id: r,
                                        type: i,
                                        value: l[r],
                                        onChange: (m) => o(r, m.target.value),
                                        placeholder: c,
                                        className: `w-full rounded-md border px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${a[r] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`,
                                        'aria-invalid': a[r] ? 'true' : 'false',
                                        'aria-describedby': `${r}-error`,
                                    }),
                                    a[r] &&
                                        e.jsx('p', {
                                            id: `${r}-error`,
                                            className:
                                                'mt-1 text-xs font-medium text-red-600',
                                            children: a[r],
                                        }),
                                ],
                            },
                            r,
                        ),
                    ),
                    e.jsxs('div', {
                        className: 'mb-5',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'gender',
                                className:
                                    'mb-1 block text-sm font-semibold text-gray-700',
                                children: 'Gen',
                            }),
                            e.jsxs('select', {
                                id: 'gender',
                                value: l.gender,
                                onChange: (t) => o('gender', t.target.value),
                                className: `w-full rounded-md border px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${a.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`,
                                'aria-invalid': a.gender ? 'true' : 'false',
                                'aria-describedby': 'gender-error',
                                children: [
                                    e.jsx('option', {
                                        value: '',
                                        children: 'Selectează gen',
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
                            a.gender &&
                                e.jsx('p', {
                                    id: 'gender-error',
                                    className:
                                        'mt-1 text-xs font-medium text-red-600',
                                    children: a.gender,
                                }),
                        ],
                    }),
                    e.jsx('button', {
                        type: 'submit',
                        disabled: s,
                        className:
                            'w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50',
                        children: s ? 'Se salvează...' : 'Salvează',
                    }),
                ],
            }),
        ],
    });
}
export { f as default };
