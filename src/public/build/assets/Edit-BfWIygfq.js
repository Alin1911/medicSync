import { $ as m, j as s } from './app-m0j9LaUS.js';
import { A as r } from './AuthenticatedLayout-u8i98N5I.js';
import t from './DeleteUserForm-DB02QrZe.js';
import './InputLabel-CBN4ffe9.js';
import './PrimaryButton-B0OyXFj4.js';
import './TextInput-DRuKwFRc.js';
import './transition-u05Ep7ua.js';
import i from './UpdatePasswordForm-DqypcFz-.js';
import o from './UpdateProfileInformationForm-LsnFvtsl.js';
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
