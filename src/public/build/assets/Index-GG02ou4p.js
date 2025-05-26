import { v as d, j as e, $ as m } from './app-ZeqbFyab.js';
import { A as p } from './AuthenticatedLayout-DImEP5KL.js';
import './transition-BZm75T6a.js';
function f({ auth: n, extraData: s }) {
    const { data: l, setData: a, get: t, processing: r } = d({ cnp: '' }),
        c = (i) => {
            i.preventDefault(),
                l.cnp.trim().length !== 0 &&
                    t(route('extra-info'), { preserveScroll: !0 });
        };
    return e.jsxs(p, {
        user: n.user,
        children: [
            e.jsx(m, { title: 'Verifică Date Extra' }),
            e.jsxs('div', {
                className: 'mx-auto max-w-4xl p-6',
                children: [
                    e.jsx('div', {
                        className: 'mb-8 text-center',
                        children: e.jsx('p', {
                            className: 'mt-2 text-lg text-gray-600',
                            children:
                                'Introdu CNP-ul pentru a accesa informații personale și istoricul medical.',
                        }),
                    }),
                    e.jsxs('form', {
                        onSubmit: c,
                        className:
                            'mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center',
                        children: [
                            e.jsx('input', {
                                type: 'text',
                                name: 'cnp',
                                value: l.cnp,
                                onChange: (i) => a('cnp', i.target.value),
                                className:
                                    'w-full max-w-md rounded-lg border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-300 sm:flex-1',
                                placeholder: 'CNP pacient',
                            }),
                            e.jsx('button', {
                                type: 'submit',
                                disabled: r,
                                className:
                                    'w-full max-w-[150px] rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50',
                                children: r ? 'Se caută...' : 'Caută',
                            }),
                        ],
                    }),
                    s
                        ? e.jsxs('div', {
                              className:
                                  'rounded-xl border border-gray-200 bg-white p-8 shadow-md',
                              children: [
                                  e.jsx('h2', {
                                      className:
                                          'mb-4 text-2xl font-bold text-gray-800 border-b pb-2',
                                      children: '📇 Informații personale',
                                  }),
                                  e.jsxs('div', {
                                      className:
                                          'grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700',
                                      children: [
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children: 'Nume:',
                                                  }),
                                                  ' ',
                                                  s.personalInfo.fullName,
                                              ],
                                          }),
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children: 'Adresa:',
                                                  }),
                                                  ' ',
                                                  s.personalInfo.address,
                                              ],
                                          }),
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children: 'Telefon:',
                                                  }),
                                                  ' ',
                                                  s.personalInfo.phone,
                                              ],
                                          }),
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children:
                                                          'Data nașterii:',
                                                  }),
                                                  ' ',
                                                  s.personalInfo.birthDate,
                                              ],
                                          }),
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children: 'Email:',
                                                  }),
                                                  ' ',
                                                  s.email,
                                              ],
                                          }),
                                      ],
                                  }),
                                  e.jsx('h2', {
                                      className:
                                          'mt-8 mb-4 text-2xl font-bold text-gray-800 border-b pb-2',
                                      children: '🩺 Istoric medical',
                                  }),
                                  e.jsxs('div', {
                                      className: 'space-y-4 text-gray-700',
                                      children: [
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children: 'Alergii:',
                                                  }),
                                                  ' ',
                                                  s.medicalHistory.allergies
                                                      .length
                                                      ? s.medicalHistory.allergies.join(
                                                            ', ',
                                                        )
                                                      : 'N/A',
                                              ],
                                          }),
                                          e.jsxs('div', {
                                              children: [
                                                  e.jsx('p', {
                                                      className:
                                                          'font-semibold mb-1',
                                                      children:
                                                          'Medicație curentă:',
                                                  }),
                                                  s.medicalHistory
                                                      .currentMedications.length
                                                      ? e.jsx('ul', {
                                                            className:
                                                                'list-disc ml-6',
                                                            children:
                                                                s.medicalHistory.currentMedications.map(
                                                                    (i, o) =>
                                                                        e.jsxs(
                                                                            'li',
                                                                            {
                                                                                children:
                                                                                    [
                                                                                        i.name,
                                                                                        ' - ',
                                                                                        i.dose,
                                                                                        ', ',
                                                                                        i.frequency,
                                                                                    ],
                                                                            },
                                                                            o,
                                                                        ),
                                                                ),
                                                        })
                                                      : e.jsx('p', {
                                                            className: 'ml-2',
                                                            children: 'N/A',
                                                        }),
                                              ],
                                          }),
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children:
                                                          'Istoric familial:',
                                                  }),
                                                  ' ',
                                                  s.medicalHistory.familyHistory
                                                      .length
                                                      ? s.medicalHistory.familyHistory.join(
                                                            ', ',
                                                        )
                                                      : 'N/A',
                                              ],
                                          }),
                                          e.jsxs('p', {
                                              children: [
                                                  e.jsx('span', {
                                                      className:
                                                          'font-semibold',
                                                      children:
                                                          'Intervenții chirurgicale:',
                                                  }),
                                                  ' ',
                                                  s.medicalHistory.surgeries
                                                      .length
                                                      ? s.medicalHistory.surgeries.join(
                                                            ', ',
                                                        )
                                                      : 'N/A',
                                              ],
                                          }),
                                      ],
                                  }),
                                  e.jsxs('p', {
                                      className:
                                          'mt-6 text-sm text-gray-500 italic',
                                      children: [
                                          'Înregistrat la: ',
                                          new Date(
                                              s.createdAt._time_,
                                          ).toLocaleString(),
                                      ],
                                  }),
                              ],
                          })
                        : e.jsx('div', {
                              className:
                                  'mt-6 text-center text-gray-400 italic',
                              children:
                                  'Nicio informație afișată. Introdu un CNP și apasă „Caută”.',
                          }),
                ],
            }),
        ],
    });
}
export { f as default };
