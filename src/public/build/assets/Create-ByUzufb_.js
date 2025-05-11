import { $ as d, j as e, v as n } from './app-C9_0fZuZ.js';
import { A as i } from './AuthenticatedLayout-iHc91eWH.js';
import './transition-jbR-Iu7L.js';
function c() {
    const {
            data: s,
            setData: t,
            post: r,
            processing: l,
        } = n({ name: '', email: '', password: '', password_confirmation: '' }),
        o = (a) => {
            a.preventDefault(), r(route('patients.store'));
        };
    return e.jsxs(i, {
        children: [
            e.jsx(d, { title: 'Adaugă pacient' }),
            e.jsxs('form', {
                onSubmit: o,
                className: 'mx-auto max-w-md rounded bg-white p-6 shadow',
                children: [
                    e.jsx('h1', {
                        className: 'mb-4 text-xl font-bold',
                        children: 'Adaugă pacient',
                    }),
                    e.jsx('div', {
                        className: 'mb-4',
                        children: e.jsx('input', {
                            type: 'text',
                            value: s.name,
                            onChange: (a) => t('name', a.target.value),
                            placeholder: 'Nume',
                            className: 'w-full rounded border px-3 py-2',
                        }),
                    }),
                    e.jsx('div', {
                        className: 'mb-4',
                        children: e.jsx('input', {
                            type: 'email',
                            value: s.email,
                            onChange: (a) => t('email', a.target.value),
                            placeholder: 'Email',
                            className: 'w-full rounded border px-3 py-2',
                        }),
                    }),
                    e.jsx('div', {
                        className: 'mb-4',
                        children: e.jsx('input', {
                            type: 'password',
                            value: s.password,
                            onChange: (a) => t('password', a.target.value),
                            placeholder: 'Parolă',
                            className: 'w-full rounded border px-3 py-2',
                        }),
                    }),
                    e.jsx('div', {
                        className: 'mb-4',
                        children: e.jsx('input', {
                            type: 'password',
                            value: s.password_confirmation,
                            onChange: (a) =>
                                t('password_confirmation', a.target.value),
                            placeholder: 'Confirmă parolă',
                            className: 'w-full rounded border px-3 py-2',
                        }),
                    }),
                    e.jsx('button', {
                        type: 'submit',
                        disabled: l,
                        className:
                            'rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700',
                        children: 'Salvează',
                    }),
                ],
            }),
        ],
    });
}
export { c as default };
