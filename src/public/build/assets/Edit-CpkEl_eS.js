import { $ as m, j as s } from './app-C9_0fZuZ.js';
import { A as r } from './AuthenticatedLayout-iHc91eWH.js';
import t from './DeleteUserForm-CX3VeJay.js';
import './InputLabel-CU5mzmHP.js';
import './PrimaryButton-DfAnq1os.js';
import './TextInput-DBuYv2qd.js';
import './transition-jbR-Iu7L.js';
import i from './UpdatePasswordForm-DmyH7BED.js';
import o from './UpdateProfileInformationForm-B5oujNsA.js';
function w({ mustVerifyEmail: e, status: a }) {
    return s.jsxs(r, {
        header: s.jsx('h2', {
            className: 'text-xl font-semibold leading-tight text-gray-800',
            children: 'Profile',
        }),
        children: [
            s.jsx(m, { title: 'Profile' }),
            s.jsx('div', {
                className: 'py-12',
                children: s.jsxs('div', {
                    className: 'mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8',
                    children: [
                        s.jsx('div', {
                            className:
                                'bg-white p-4 shadow sm:rounded-lg sm:p-8',
                            children: s.jsx(o, {
                                mustVerifyEmail: e,
                                status: a,
                                className: 'max-w-xl',
                            }),
                        }),
                        s.jsx('div', {
                            className:
                                'bg-white p-4 shadow sm:rounded-lg sm:p-8',
                            children: s.jsx(i, { className: 'max-w-xl' }),
                        }),
                        s.jsx('div', {
                            className:
                                'bg-white p-4 shadow sm:rounded-lg sm:p-8',
                            children: s.jsx(t, { className: 'max-w-xl' }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
export { w as default };
