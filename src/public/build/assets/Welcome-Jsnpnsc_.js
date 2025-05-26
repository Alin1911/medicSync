import { j as e, Y as i, $ as r } from './app-ZeqbFyab.js';
function n({ auth: t }) {
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx(r, { title: 'Bine ai venit la MedicSync' }),
            e.jsx('div', {
                className:
                    'flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6',
                children: e.jsxs('div', {
                    className: 'w-full max-w-4xl text-center',
                    children: [
                        e.jsxs('h1', {
                            className:
                                'mb-4 text-4xl font-bold text-blue-700 sm:text-5xl',
                            children: [
                                'Bine ai venit la',
                                ' ',
                                e.jsx('span', {
                                    className: 'text-blue-900',
                                    children: 'MedicSync',
                                }),
                            ],
                        }),
                        e.jsx('p', {
                            className: 'mb-8 text-lg text-gray-700 sm:text-xl',
                            children:
                                'Platforma digitală care conectează medici și pacienți pentru o gestionare eficientă a rețetelor și comunicării.',
                        }),
                        e.jsx('div', {
                            className: 'flex justify-center gap-4',
                            children: t.user
                                ? e.jsx(i, {
                                      href: route('dashboard'),
                                      className:
                                          'inline-block rounded bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800',
                                      children: 'Intră în aplicație',
                                  })
                                : e.jsxs(e.Fragment, {
                                      children: [
                                          e.jsx(i, {
                                              href: route('login'),
                                              className:
                                                  'inline-block rounded bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700',
                                              children: 'Autentificare',
                                          }),
                                          e.jsx(i, {
                                              href: route('register'),
                                              className:
                                                  'inline-block rounded border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50',
                                              children: 'Creează cont',
                                          }),
                                      ],
                                  }),
                        }),
                        e.jsx('div', {
                            className: 'mt-16',
                            children: e.jsx('img', {
                                src: '/medic-dashboard-preview.jpg',
                                alt: 'Preview MedicSync',
                                className:
                                    'mx-auto w-full max-w-2xl rounded shadow-lg',
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
export { n as default };
