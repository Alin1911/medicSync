import { a } from './app-ZeqbFyab.js';
var p = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    m = a.createContext && a.createContext(p),
    b = ['attr', 'size', 'title'];
function g(t, e) {
    if (t == null) return {};
    var r = O(t, e),
        n,
        i;
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(t);
        for (i = 0; i < c.length; i++)
            (n = c[i]),
                !(e.indexOf(n) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (r[n] = t[n]);
    }
    return r;
}
function O(t, e) {
    if (t == null) return {};
    var r = {};
    for (var n in t)
        if (Object.prototype.hasOwnProperty.call(t, n)) {
            if (e.indexOf(n) >= 0) continue;
            r[n] = t[n];
        }
    return r;
}
function o() {
    return (
        (o = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var r = arguments[e];
                      for (var n in r)
                          Object.prototype.hasOwnProperty.call(r, n) &&
                              (t[n] = r[n]);
                  }
                  return t;
              }),
        o.apply(this, arguments)
    );
}
function v(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
            (n = n.filter(function (i) {
                return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function u(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2
            ? v(Object(r), !0).forEach(function (n) {
                  y(t, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (n) {
                    Object.defineProperty(
                        t,
                        n,
                        Object.getOwnPropertyDescriptor(r, n),
                    );
                });
    }
    return t;
}
function y(t, e, r) {
    return (
        (e = w(e)),
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = r),
        t
    );
}
function w(t) {
    var e = P(t, 'string');
    return typeof e == 'symbol' ? e : e + '';
}
function P(t, e) {
    if (typeof t != 'object' || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(t, e);
        if (typeof n != 'object') return n;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(t);
}
function d(t) {
    return (
        t &&
        t.map((e, r) =>
            a.createElement(e.tag, u({ key: r }, e.attr), d(e.child)),
        )
    );
}
function s(t) {
    return (e) => a.createElement(j, o({ attr: u({}, t.attr) }, e), d(t.child));
}
function j(t) {
    var e = (r) => {
        var { attr: n, size: i, title: c } = t,
            h = g(t, b),
            f = i || r.size || '1em',
            l;
        return (
            r.className && (l = r.className),
            t.className && (l = (l ? l + ' ' : '') + t.className),
            a.createElement(
                'svg',
                o(
                    {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                        strokeWidth: '0',
                    },
                    r.attr,
                    n,
                    h,
                    {
                        className: l,
                        style: u(
                            u({ color: t.color || r.color }, r.style),
                            t.style,
                        ),
                        height: f,
                        width: f,
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                ),
                c && a.createElement('title', null, c),
                t.children,
            )
        );
    };
    return m !== void 0 ? a.createElement(m.Consumer, null, (r) => e(r)) : e(p);
}
function z(t) {
    return s({
        attr: { viewBox: '0 0 576 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z',
                },
                child: [],
            },
        ],
    })(t);
}
function E(t) {
    return s({
        attr: { viewBox: '0 0 576 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z',
                },
                child: [],
            },
        ],
    })(t);
}
function C(t) {
    return s({
        attr: { viewBox: '0 0 448 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
                },
                child: [],
            },
        ],
    })(t);
}
export { E as a, C as b, z as F };
