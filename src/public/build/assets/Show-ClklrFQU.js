import { r as i, j as t, $ as u } from './app-ZeqbFyab.js';
import { A as k } from './AuthenticatedLayout-DImEP5KL.js';
import './transition-BZm75T6a.js'; /**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v = (a) => a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    g = (a) =>
        a.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, s, r) =>
            r ? r.toUpperCase() : s.toLowerCase(),
        ),
    d = (a) => {
        const e = g(a);
        return e.charAt(0).toUpperCase() + e.slice(1);
    },
    h = (...a) =>
        a
            .filter((e, s, r) => !!e && e.trim() !== '' && r.indexOf(e) === s)
            .join(' ')
            .trim(),
    j = (a) => {
        for (const e in a)
            if (e.startsWith('aria-') || e === 'role' || e === 'title')
                return !0;
    };
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var f = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = i.forwardRef(
    (
        {
            color: a = 'currentColor',
            size: e = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: r,
            className: n = '',
            children: o,
            iconNode: x,
            ...l
        },
        m,
    ) =>
        i.createElement(
            'svg',
            {
                ref: m,
                ...f,
                width: e,
                height: e,
                stroke: a,
                strokeWidth: r ? (Number(s) * 24) / Number(e) : s,
                className: h('lucide', n),
                ...(!o && !j(l) && { 'aria-hidden': 'true' }),
                ...l,
            },
            [
                ...x.map(([p, y]) => i.createElement(p, y)),
                ...(Array.isArray(o) ? o : [o]),
            ],
        ),
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c = (a, e) => {
    const s = i.forwardRef(({ className: r, ...n }, o) =>
        i.createElement(w, {
            ref: o,
            iconNode: e,
            className: h(`lucide-${v(d(a))}`, `lucide-${a}`, r),
            ...n,
        }),
    );
    return (s.displayName = d(a)), s;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N = [
        ['path', { d: 'M12 6v12', key: '1vza4d' }],
        ['path', { d: 'M17.196 9 6.804 15', key: '1ah31z' }],
        ['path', { d: 'm6.804 9 10.392 6', key: '1b6pxd' }],
    ],
    b = c('asterisk', N);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C = [
        ['path', { d: 'M8 2v4', key: '1cmpym' }],
        ['path', { d: 'M16 2v4', key: '4m81vk' }],
        [
            'rect',
            {
                width: '18',
                height: '18',
                x: '3',
                y: '4',
                rx: '2',
                key: '1hopcy',
            },
        ],
        ['path', { d: 'M3 10h18', key: '8toen8' }],
    ],
    _ = c('calendar', C);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A = [
        ['path', { d: 'M16 10h2', key: '8sgtl7' }],
        ['path', { d: 'M16 14h2', key: 'epxaof' }],
        ['path', { d: 'M6.17 15a3 3 0 0 1 5.66 0', key: 'n6f512' }],
        ['circle', { cx: '9', cy: '11', r: '2', key: 'yxgjnd' }],
        [
            'rect',
            {
                x: '2',
                y: '5',
                width: '20',
                height: '14',
                rx: '2',
                key: 'qneu4z',
            },
        ],
    ],
    M = c('id-card', A);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $ = [
        [
            'path',
            { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' },
        ],
        [
            'rect',
            {
                x: '2',
                y: '4',
                width: '20',
                height: '16',
                rx: '2',
                key: 'izxlao',
            },
        ],
    ],
    L = c('mail', $);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E = [
        [
            'path',
            {
                d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
                key: '1r0f0z',
            },
        ],
        ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
    ],
    P = c('map-pin', E);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [
        [
            'path',
            {
                d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384',
                key: '9njp5v',
            },
        ],
    ],
    q = c('phone', I);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z = [
        [
            'path',
            { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' },
        ],
        ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
    ],
    D = c('user', z);
function W({ patient: a }) {
    const e = a.patient_detail,
        s = ({ icon: r, label: n, value: o }) =>
            t.jsxs('div', {
                className: 'flex items-start gap-3',
                children: [
                    t.jsx('div', {
                        className: 'mt-1 text-gray-500',
                        children: t.jsx(r, { className: 'h-5 w-5' }),
                    }),
                    t.jsxs('div', {
                        children: [
                            t.jsx('p', {
                                className:
                                    'text-sm font-semibold text-gray-600',
                                children: n,
                            }),
                            t.jsx('p', {
                                className: 'text-sm text-gray-900',
                                children: o || '—',
                            }),
                        ],
                    }),
                ],
            });
    return t.jsxs(k, {
        children: [
            t.jsx(u, { title: `Detalii pacient – ${a.name}` }),
            t.jsxs('div', {
                className: 'mx-auto max-w-4xl p-6',
                children: [
                    t.jsx('h1', {
                        className: 'mb-6 text-2xl font-bold text-gray-800',
                        children: 'Detalii pacient',
                    }),
                    t.jsx('div', {
                        className:
                            'space-y-6 rounded-xl bg-white p-6 shadow-lg',
                        children: t.jsxs('div', {
                            className: 'grid grid-cols-1 gap-6 sm:grid-cols-2',
                            children: [
                                t.jsx(s, {
                                    icon: D,
                                    label: 'Nume',
                                    value: a.name,
                                }),
                                t.jsx(s, {
                                    icon: L,
                                    label: 'Email',
                                    value: a.email,
                                }),
                                e &&
                                    t.jsxs(t.Fragment, {
                                        children: [
                                            t.jsx(s, {
                                                icon: M,
                                                label: 'CNP',
                                                value: e.cnp,
                                            }),
                                            t.jsx(s, {
                                                icon: _,
                                                label: 'Data nașterii',
                                                value: e.birthdate,
                                            }),
                                            t.jsx(s, {
                                                icon: b,
                                                label: 'Gen',
                                                value: e.gender,
                                            }),
                                            t.jsx(s, {
                                                icon: q,
                                                label: 'Telefon',
                                                value: e.phone,
                                            }),
                                            t.jsx(s, {
                                                icon: P,
                                                label: 'Adresă',
                                                value: e.address,
                                            }),
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
export { W as default };
