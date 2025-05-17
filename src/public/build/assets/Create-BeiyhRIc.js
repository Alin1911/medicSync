var $n = Object.defineProperty;
var Xn = (n, a, t) =>
    a in n
        ? $n(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[a] = t);
var x = (n, a, t) => Xn(n, typeof a != 'symbol' ? a + '' : a, t);
import {
    R as dn,
    v as Gn,
    j as L,
    a as m,
    r as y,
    $ as zn,
} from './app-qBAvZH64.js';
import { A as Zn } from './AuthenticatedLayout-Crtg7vLh.js';
import { R as ea, r as Jn } from './index-C6bt5bDP.js';
import './transition-CHdrGirl.js';
function fn(n) {
    var a,
        t,
        e = '';
    if (typeof n == 'string' || typeof n == 'number') e += n;
    else if (typeof n == 'object')
        if (Array.isArray(n)) {
            var r = n.length;
            for (a = 0; a < r; a++)
                n[a] && (t = fn(n[a])) && (e && (e += ' '), (e += t));
        } else for (t in n) n[t] && (e && (e += ' '), (e += t));
    return e;
}
function re() {
    for (var n, a, t = 0, e = '', r = arguments.length; t < r; t++)
        (n = arguments[t]) && (a = fn(n)) && (e && (e += ' '), (e += a));
    return e;
}
function Bt() {
    return typeof window < 'u';
}
function rt(n) {
    return pn(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function se(n) {
    var a;
    return (
        (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) ||
        window
    );
}
function be(n) {
    var a;
    return (a = (pn(n) ? n.ownerDocument : n.document) || window.document) ==
        null
        ? void 0
        : a.documentElement;
}
function pn(n) {
    return Bt() ? n instanceof Node || n instanceof se(n).Node : !1;
}
function ae(n) {
    return Bt() ? n instanceof Element || n instanceof se(n).Element : !1;
}
function De(n) {
    return Bt()
        ? n instanceof HTMLElement || n instanceof se(n).HTMLElement
        : !1;
}
function Cr(n) {
    return !Bt() || typeof ShadowRoot > 'u'
        ? !1
        : n instanceof ShadowRoot || n instanceof se(n).ShadowRoot;
}
function dt(n) {
    const { overflow: a, overflowX: t, overflowY: e, display: r } = de(n);
    return (
        /auto|scroll|overlay|hidden|clip/.test(a + e + t) &&
        !['inline', 'contents'].includes(r)
    );
}
function ta(n) {
    return ['table', 'td', 'th'].includes(rt(n));
}
function Qt(n) {
    return [':popover-open', ':modal'].some((a) => {
        try {
            return n.matches(a);
        } catch {
            return !1;
        }
    });
}
function fr(n) {
    const a = pr(),
        t = ae(n) ? de(n) : n;
    return (
        ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(
            (e) => (t[e] ? t[e] !== 'none' : !1),
        ) ||
        (t.containerType ? t.containerType !== 'normal' : !1) ||
        (!a && (t.backdropFilter ? t.backdropFilter !== 'none' : !1)) ||
        (!a && (t.filter ? t.filter !== 'none' : !1)) ||
        [
            'transform',
            'translate',
            'scale',
            'rotate',
            'perspective',
            'filter',
        ].some((e) => (t.willChange || '').includes(e)) ||
        ['paint', 'layout', 'strict', 'content'].some((e) =>
            (t.contain || '').includes(e),
        )
    );
}
function ra(n) {
    let a = Re(n);
    for (; De(a) && !Xe(a); ) {
        if (fr(a)) return a;
        if (Qt(a)) return null;
        a = Re(a);
    }
    return null;
}
function pr() {
    return typeof CSS > 'u' || !CSS.supports
        ? !1
        : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Xe(n) {
    return ['html', 'body', '#document'].includes(rt(n));
}
function de(n) {
    return se(n).getComputedStyle(n);
}
function jt(n) {
    return ae(n)
        ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
        : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Re(n) {
    if (rt(n) === 'html') return n;
    const a = n.assignedSlot || n.parentNode || (Cr(n) && n.host) || be(n);
    return Cr(a) ? a.host : a;
}
function hn(n) {
    const a = Re(n);
    return Xe(a)
        ? n.ownerDocument
            ? n.ownerDocument.body
            : n.body
        : De(a) && dt(a)
          ? a
          : hn(a);
}
function lt(n, a, t) {
    var e;
    a === void 0 && (a = []), t === void 0 && (t = !0);
    const r = hn(n),
        o = r === ((e = n.ownerDocument) == null ? void 0 : e.body),
        i = se(r);
    if (o) {
        const s = or(i);
        return a.concat(
            i,
            i.visualViewport || [],
            dt(r) ? r : [],
            s && t ? lt(s) : [],
        );
    }
    return a.concat(r, lt(r, [], t));
}
function or(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
const Ge = Math.min,
    Fe = Math.max,
    Pt = Math.round,
    mt = Math.floor,
    ye = (n) => ({ x: n, y: n }),
    na = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    aa = { start: 'end', end: 'start' };
function oa(n, a, t) {
    return Fe(n, Ge(a, t));
}
function Vt(n, a) {
    return typeof n == 'function' ? n(a) : n;
}
function ze(n) {
    return n.split('-')[0];
}
function ft(n) {
    return n.split('-')[1];
}
function ia(n) {
    return n === 'x' ? 'y' : 'x';
}
function hr(n) {
    return n === 'y' ? 'height' : 'width';
}
function Ke(n) {
    return ['top', 'bottom'].includes(ze(n)) ? 'y' : 'x';
}
function mr(n) {
    return ia(Ke(n));
}
function sa(n, a, t) {
    t === void 0 && (t = !1);
    const e = ft(n),
        r = mr(n),
        o = hr(r);
    let i =
        r === 'x'
            ? e === (t ? 'end' : 'start')
                ? 'right'
                : 'left'
            : e === 'start'
              ? 'bottom'
              : 'top';
    return a.reference[o] > a.floating[o] && (i = Et(i)), [i, Et(i)];
}
function ca(n) {
    const a = Et(n);
    return [ir(n), a, ir(a)];
}
function ir(n) {
    return n.replace(/start|end/g, (a) => aa[a]);
}
function la(n, a, t) {
    const e = ['left', 'right'],
        r = ['right', 'left'],
        o = ['top', 'bottom'],
        i = ['bottom', 'top'];
    switch (n) {
        case 'top':
        case 'bottom':
            return t ? (a ? r : e) : a ? e : r;
        case 'left':
        case 'right':
            return a ? o : i;
        default:
            return [];
    }
}
function ua(n, a, t, e) {
    const r = ft(n);
    let o = la(ze(n), t === 'start', e);
    return (
        r && ((o = o.map((i) => i + '-' + r)), a && (o = o.concat(o.map(ir)))),
        o
    );
}
function Et(n) {
    return n.replace(/left|right|bottom|top/g, (a) => na[a]);
}
function da(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function mn(n) {
    return typeof n != 'number'
        ? da(n)
        : { top: n, right: n, bottom: n, left: n };
}
function Ot(n) {
    const { x: a, y: t, width: e, height: r } = n;
    return {
        width: e,
        height: r,
        top: t,
        left: a,
        right: a + e,
        bottom: t + r,
        x: a,
        y: t,
    };
}
function Sr(n, a, t) {
    let { reference: e, floating: r } = n;
    const o = Ke(a),
        i = mr(a),
        s = hr(i),
        c = ze(a),
        l = o === 'y',
        u = e.x + e.width / 2 - r.width / 2,
        d = e.y + e.height / 2 - r.height / 2,
        f = e[s] / 2 - r[s] / 2;
    let p;
    switch (c) {
        case 'top':
            p = { x: u, y: e.y - r.height };
            break;
        case 'bottom':
            p = { x: u, y: e.y + e.height };
            break;
        case 'right':
            p = { x: e.x + e.width, y: d };
            break;
        case 'left':
            p = { x: e.x - r.width, y: d };
            break;
        default:
            p = { x: e.x, y: e.y };
    }
    switch (ft(a)) {
        case 'start':
            p[i] -= f * (t && l ? -1 : 1);
            break;
        case 'end':
            p[i] += f * (t && l ? -1 : 1);
            break;
    }
    return p;
}
const fa = async (n, a, t) => {
    const {
            placement: e = 'bottom',
            strategy: r = 'absolute',
            middleware: o = [],
            platform: i,
        } = t,
        s = o.filter(Boolean),
        c = await (i.isRTL == null ? void 0 : i.isRTL(a));
    let l = await i.getElementRects({ reference: n, floating: a, strategy: r }),
        { x: u, y: d } = Sr(l, e, c),
        f = e,
        p = {},
        h = 0;
    for (let v = 0; v < s.length; v++) {
        const { name: g, fn: w } = s[v],
            {
                x: k,
                y: D,
                data: S,
                reset: P,
            } = await w({
                x: u,
                y: d,
                initialPlacement: e,
                placement: f,
                strategy: r,
                middlewareData: p,
                rects: l,
                platform: i,
                elements: { reference: n, floating: a },
            });
        (u = k ?? u),
            (d = D ?? d),
            (p = { ...p, [g]: { ...p[g], ...S } }),
            P &&
                h <= 50 &&
                (h++,
                typeof P == 'object' &&
                    (P.placement && (f = P.placement),
                    P.rects &&
                        (l =
                            P.rects === !0
                                ? await i.getElementRects({
                                      reference: n,
                                      floating: a,
                                      strategy: r,
                                  })
                                : P.rects),
                    ({ x: u, y: d } = Sr(l, f, c))),
                (v = -1));
    }
    return { x: u, y: d, placement: f, strategy: r, middlewareData: p };
};
async function pa(n, a) {
    var t;
    a === void 0 && (a = {});
    const { x: e, y: r, platform: o, rects: i, elements: s, strategy: c } = n,
        {
            boundary: l = 'clippingAncestors',
            rootBoundary: u = 'viewport',
            elementContext: d = 'floating',
            altBoundary: f = !1,
            padding: p = 0,
        } = Vt(a, n),
        h = mn(p),
        g = s[f ? (d === 'floating' ? 'reference' : 'floating') : d],
        w = Ot(
            await o.getClippingRect({
                element:
                    (t = await (o.isElement == null
                        ? void 0
                        : o.isElement(g))) == null || t
                        ? g
                        : g.contextElement ||
                          (await (o.getDocumentElement == null
                              ? void 0
                              : o.getDocumentElement(s.floating))),
                boundary: l,
                rootBoundary: u,
                strategy: c,
            }),
        ),
        k =
            d === 'floating'
                ? {
                      x: e,
                      y: r,
                      width: i.floating.width,
                      height: i.floating.height,
                  }
                : i.reference,
        D = await (o.getOffsetParent == null
            ? void 0
            : o.getOffsetParent(s.floating)),
        S = (await (o.isElement == null ? void 0 : o.isElement(D)))
            ? (await (o.getScale == null ? void 0 : o.getScale(D))) || {
                  x: 1,
                  y: 1,
              }
            : { x: 1, y: 1 },
        P = Ot(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await o.convertOffsetParentRelativeRectToViewportRelativeRect(
                      { elements: s, rect: k, offsetParent: D, strategy: c },
                  )
                : k,
        );
    return {
        top: (w.top - P.top + h.top) / S.y,
        bottom: (P.bottom - w.bottom + h.bottom) / S.y,
        left: (w.left - P.left + h.left) / S.x,
        right: (P.right - w.right + h.right) / S.x,
    };
}
const ha = (n) => ({
        name: 'arrow',
        options: n,
        async fn(a) {
            const {
                    x: t,
                    y: e,
                    placement: r,
                    rects: o,
                    platform: i,
                    elements: s,
                    middlewareData: c,
                } = a,
                { element: l, padding: u = 0 } = Vt(n, a) || {};
            if (l == null) return {};
            const d = mn(u),
                f = { x: t, y: e },
                p = mr(r),
                h = hr(p),
                v = await i.getDimensions(l),
                g = p === 'y',
                w = g ? 'top' : 'left',
                k = g ? 'bottom' : 'right',
                D = g ? 'clientHeight' : 'clientWidth',
                S = o.reference[h] + o.reference[p] - f[p] - o.floating[h],
                P = f[p] - o.reference[p],
                N = await (i.getOffsetParent == null
                    ? void 0
                    : i.getOffsetParent(l));
            let E = N ? N[D] : 0;
            (!E || !(await (i.isElement == null ? void 0 : i.isElement(N)))) &&
                (E = s.floating[D] || o.floating[h]);
            const _ = S / 2 - P / 2,
                M = E / 2 - v[h] / 2 - 1,
                O = Ge(d[w], M),
                Q = Ge(d[k], M),
                F = O,
                K = E - v[h] - Q,
                U = E / 2 - v[h] / 2 + _,
                A = oa(F, U, K),
                T =
                    !c.arrow &&
                    ft(r) != null &&
                    U !== A &&
                    o.reference[h] / 2 - (U < F ? O : Q) - v[h] / 2 < 0,
                I = T ? (U < F ? U - F : U - K) : 0;
            return {
                [p]: f[p] + I,
                data: {
                    [p]: A,
                    centerOffset: U - A - I,
                    ...(T && { alignmentOffset: I }),
                },
                reset: T,
            };
        },
    }),
    ma = function (n) {
        return (
            n === void 0 && (n = {}),
            {
                name: 'flip',
                options: n,
                async fn(a) {
                    var t, e;
                    const {
                            placement: r,
                            middlewareData: o,
                            rects: i,
                            initialPlacement: s,
                            platform: c,
                            elements: l,
                        } = a,
                        {
                            mainAxis: u = !0,
                            crossAxis: d = !0,
                            fallbackPlacements: f,
                            fallbackStrategy: p = 'bestFit',
                            fallbackAxisSideDirection: h = 'none',
                            flipAlignment: v = !0,
                            ...g
                        } = Vt(n, a);
                    if ((t = o.arrow) != null && t.alignmentOffset) return {};
                    const w = ze(r),
                        k = Ke(s),
                        D = ze(s) === s,
                        S = await (c.isRTL == null
                            ? void 0
                            : c.isRTL(l.floating)),
                        P = f || (D || !v ? [Et(s)] : ca(s)),
                        N = h !== 'none';
                    !f && N && P.push(...ua(s, v, h, S));
                    const E = [s, ...P],
                        _ = await pa(a, g),
                        M = [];
                    let O = ((e = o.flip) == null ? void 0 : e.overflows) || [];
                    if ((u && M.push(_[w]), d)) {
                        const A = sa(r, i, S);
                        M.push(_[A[0]], _[A[1]]);
                    }
                    if (
                        ((O = [...O, { placement: r, overflows: M }]),
                        !M.every((A) => A <= 0))
                    ) {
                        var Q, F;
                        const A =
                                (((Q = o.flip) == null ? void 0 : Q.index) ||
                                    0) + 1,
                            T = E[A];
                        if (T) {
                            var K;
                            const Y = d === 'alignment' ? k !== Ke(T) : !1,
                                z =
                                    ((K = O[0]) == null
                                        ? void 0
                                        : K.overflows[0]) > 0;
                            if (!Y || z)
                                return {
                                    data: { index: A, overflows: O },
                                    reset: { placement: T },
                                };
                        }
                        let I =
                            (F = O.filter((Y) => Y.overflows[0] <= 0).sort(
                                (Y, z) => Y.overflows[1] - z.overflows[1],
                            )[0]) == null
                                ? void 0
                                : F.placement;
                        if (!I)
                            switch (p) {
                                case 'bestFit': {
                                    var U;
                                    const Y =
                                        (U = O.filter((z) => {
                                            if (N) {
                                                const ee = Ke(z.placement);
                                                return ee === k || ee === 'y';
                                            }
                                            return !0;
                                        })
                                            .map((z) => [
                                                z.placement,
                                                z.overflows
                                                    .filter((ee) => ee > 0)
                                                    .reduce(
                                                        (ee, ie) => ee + ie,
                                                        0,
                                                    ),
                                            ])
                                            .sort(
                                                (z, ee) => z[1] - ee[1],
                                            )[0]) == null
                                            ? void 0
                                            : U[0];
                                    Y && (I = Y);
                                    break;
                                }
                                case 'initialPlacement':
                                    I = s;
                                    break;
                            }
                        if (r !== I) return { reset: { placement: I } };
                    }
                    return {};
                },
            }
        );
    };
async function va(n, a) {
    const { placement: t, platform: e, elements: r } = n,
        o = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)),
        i = ze(t),
        s = ft(t),
        c = Ke(t) === 'y',
        l = ['left', 'top'].includes(i) ? -1 : 1,
        u = o && c ? -1 : 1,
        d = Vt(a, n);
    let {
        mainAxis: f,
        crossAxis: p,
        alignmentAxis: h,
    } = typeof d == 'number'
        ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
        : {
              mainAxis: d.mainAxis || 0,
              crossAxis: d.crossAxis || 0,
              alignmentAxis: d.alignmentAxis,
          };
    return (
        s && typeof h == 'number' && (p = s === 'end' ? h * -1 : h),
        c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
    );
}
const ga = function (n) {
    return (
        n === void 0 && (n = 0),
        {
            name: 'offset',
            options: n,
            async fn(a) {
                var t, e;
                const { x: r, y: o, placement: i, middlewareData: s } = a,
                    c = await va(a, n);
                return i === ((t = s.offset) == null ? void 0 : t.placement) &&
                    (e = s.arrow) != null &&
                    e.alignmentOffset
                    ? {}
                    : { x: r + c.x, y: o + c.y, data: { ...c, placement: i } };
            },
        }
    );
};
function vn(n) {
    const a = de(n);
    let t = parseFloat(a.width) || 0,
        e = parseFloat(a.height) || 0;
    const r = De(n),
        o = r ? n.offsetWidth : t,
        i = r ? n.offsetHeight : e,
        s = Pt(t) !== o || Pt(e) !== i;
    return s && ((t = o), (e = i)), { width: t, height: e, $: s };
}
function vr(n) {
    return ae(n) ? n : n.contextElement;
}
function Ue(n) {
    const a = vr(n);
    if (!De(a)) return ye(1);
    const t = a.getBoundingClientRect(),
        { width: e, height: r, $: o } = vn(a);
    let i = (o ? Pt(t.width) : t.width) / e,
        s = (o ? Pt(t.height) : t.height) / r;
    return (
        (!i || !Number.isFinite(i)) && (i = 1),
        (!s || !Number.isFinite(s)) && (s = 1),
        { x: i, y: s }
    );
}
const wa = ye(0);
function gn(n) {
    const a = se(n);
    return !pr() || !a.visualViewport
        ? wa
        : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop };
}
function ya(n, a, t) {
    return a === void 0 && (a = !1), !t || (a && t !== se(n)) ? !1 : a;
}
function He(n, a, t, e) {
    a === void 0 && (a = !1), t === void 0 && (t = !1);
    const r = n.getBoundingClientRect(),
        o = vr(n);
    let i = ye(1);
    a && (e ? ae(e) && (i = Ue(e)) : (i = Ue(n)));
    const s = ya(o, t, e) ? gn(o) : ye(0);
    let c = (r.left + s.x) / i.x,
        l = (r.top + s.y) / i.y,
        u = r.width / i.x,
        d = r.height / i.y;
    if (o) {
        const f = se(o),
            p = e && ae(e) ? se(e) : e;
        let h = f,
            v = or(h);
        for (; v && e && p !== h; ) {
            const g = Ue(v),
                w = v.getBoundingClientRect(),
                k = de(v),
                D = w.left + (v.clientLeft + parseFloat(k.paddingLeft)) * g.x,
                S = w.top + (v.clientTop + parseFloat(k.paddingTop)) * g.y;
            (c *= g.x),
                (l *= g.y),
                (u *= g.x),
                (d *= g.y),
                (c += D),
                (l += S),
                (h = se(v)),
                (v = or(h));
        }
    }
    return Ot({ width: u, height: d, x: c, y: l });
}
function gr(n, a) {
    const t = jt(n).scrollLeft;
    return a ? a.left + t : He(be(n)).left + t;
}
function wn(n, a, t) {
    t === void 0 && (t = !1);
    const e = n.getBoundingClientRect(),
        r = e.left + a.scrollLeft - (t ? 0 : gr(n, e)),
        o = e.top + a.scrollTop;
    return { x: r, y: o };
}
function Da(n) {
    let { elements: a, rect: t, offsetParent: e, strategy: r } = n;
    const o = r === 'fixed',
        i = be(e),
        s = a ? Qt(a.floating) : !1;
    if (e === i || (s && o)) return t;
    let c = { scrollLeft: 0, scrollTop: 0 },
        l = ye(1);
    const u = ye(0),
        d = De(e);
    if (
        (d || (!d && !o)) &&
        ((rt(e) !== 'body' || dt(i)) && (c = jt(e)), De(e))
    ) {
        const p = He(e);
        (l = Ue(e)), (u.x = p.x + e.clientLeft), (u.y = p.y + e.clientTop);
    }
    const f = i && !d && !o ? wn(i, c, !0) : ye(0);
    return {
        width: t.width * l.x,
        height: t.height * l.y,
        x: t.x * l.x - c.scrollLeft * l.x + u.x + f.x,
        y: t.y * l.y - c.scrollTop * l.y + u.y + f.y,
    };
}
function ba(n) {
    return Array.from(n.getClientRects());
}
function ka(n) {
    const a = be(n),
        t = jt(n),
        e = n.ownerDocument.body,
        r = Fe(a.scrollWidth, a.clientWidth, e.scrollWidth, e.clientWidth),
        o = Fe(a.scrollHeight, a.clientHeight, e.scrollHeight, e.clientHeight);
    let i = -t.scrollLeft + gr(n);
    const s = -t.scrollTop;
    return (
        de(e).direction === 'rtl' &&
            (i += Fe(a.clientWidth, e.clientWidth) - r),
        { width: r, height: o, x: i, y: s }
    );
}
function _a(n, a) {
    const t = se(n),
        e = be(n),
        r = t.visualViewport;
    let o = e.clientWidth,
        i = e.clientHeight,
        s = 0,
        c = 0;
    if (r) {
        (o = r.width), (i = r.height);
        const l = pr();
        (!l || (l && a === 'fixed')) && ((s = r.offsetLeft), (c = r.offsetTop));
    }
    return { width: o, height: i, x: s, y: c };
}
function xa(n, a) {
    const t = He(n, !0, a === 'fixed'),
        e = t.top + n.clientTop,
        r = t.left + n.clientLeft,
        o = De(n) ? Ue(n) : ye(1),
        i = n.clientWidth * o.x,
        s = n.clientHeight * o.y,
        c = r * o.x,
        l = e * o.y;
    return { width: i, height: s, x: c, y: l };
}
function Pr(n, a, t) {
    let e;
    if (a === 'viewport') e = _a(n, t);
    else if (a === 'document') e = ka(be(n));
    else if (ae(a)) e = xa(a, t);
    else {
        const r = gn(n);
        e = { x: a.x - r.x, y: a.y - r.y, width: a.width, height: a.height };
    }
    return Ot(e);
}
function yn(n, a) {
    const t = Re(n);
    return t === a || !ae(t) || Xe(t)
        ? !1
        : de(t).position === 'fixed' || yn(t, a);
}
function Ma(n, a) {
    const t = a.get(n);
    if (t) return t;
    let e = lt(n, [], !1).filter((s) => ae(s) && rt(s) !== 'body'),
        r = null;
    const o = de(n).position === 'fixed';
    let i = o ? Re(n) : n;
    for (; ae(i) && !Xe(i); ) {
        const s = de(i),
            c = fr(i);
        !c && s.position === 'fixed' && (r = null),
            (
                o
                    ? !c && !r
                    : (!c &&
                          s.position === 'static' &&
                          !!r &&
                          ['absolute', 'fixed'].includes(r.position)) ||
                      (dt(i) && !c && yn(n, i))
            )
                ? (e = e.filter((u) => u !== i))
                : (r = s),
            (i = Re(i));
    }
    return a.set(n, e), e;
}
function Ca(n) {
    let { element: a, boundary: t, rootBoundary: e, strategy: r } = n;
    const i = [
            ...(t === 'clippingAncestors'
                ? Qt(a)
                    ? []
                    : Ma(a, this._c)
                : [].concat(t)),
            e,
        ],
        s = i[0],
        c = i.reduce(
            (l, u) => {
                const d = Pr(a, u, r);
                return (
                    (l.top = Fe(d.top, l.top)),
                    (l.right = Ge(d.right, l.right)),
                    (l.bottom = Ge(d.bottom, l.bottom)),
                    (l.left = Fe(d.left, l.left)),
                    l
                );
            },
            Pr(a, s, r),
        );
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top,
    };
}
function Sa(n) {
    const { width: a, height: t } = vn(n);
    return { width: a, height: t };
}
function Pa(n, a, t) {
    const e = De(a),
        r = be(a),
        o = t === 'fixed',
        i = He(n, !0, o, a);
    let s = { scrollLeft: 0, scrollTop: 0 };
    const c = ye(0);
    function l() {
        c.x = gr(r);
    }
    if (e || (!e && !o))
        if (((rt(a) !== 'body' || dt(r)) && (s = jt(a)), e)) {
            const p = He(a, !0, o, a);
            (c.x = p.x + a.clientLeft), (c.y = p.y + a.clientTop);
        } else r && l();
    o && !e && r && l();
    const u = r && !e && !o ? wn(r, s) : ye(0),
        d = i.left + s.scrollLeft - c.x - u.x,
        f = i.top + s.scrollTop - c.y - u.y;
    return { x: d, y: f, width: i.width, height: i.height };
}
function Gt(n) {
    return de(n).position === 'static';
}
function Er(n, a) {
    if (!De(n) || de(n).position === 'fixed') return null;
    if (a) return a(n);
    let t = n.offsetParent;
    return be(n) === t && (t = t.ownerDocument.body), t;
}
function Dn(n, a) {
    const t = se(n);
    if (Qt(n)) return t;
    if (!De(n)) {
        let r = Re(n);
        for (; r && !Xe(r); ) {
            if (ae(r) && !Gt(r)) return r;
            r = Re(r);
        }
        return t;
    }
    let e = Er(n, a);
    for (; e && ta(e) && Gt(e); ) e = Er(e, a);
    return e && Xe(e) && Gt(e) && !fr(e) ? t : e || ra(n) || t;
}
const Ea = async function (n) {
    const a = this.getOffsetParent || Dn,
        t = this.getDimensions,
        e = await t(n.floating);
    return {
        reference: Pa(n.reference, await a(n.floating), n.strategy),
        floating: { x: 0, y: 0, width: e.width, height: e.height },
    };
};
function Oa(n) {
    return de(n).direction === 'rtl';
}
const Ta = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Da,
    getDocumentElement: be,
    getClippingRect: Ca,
    getOffsetParent: Dn,
    getElementRects: Ea,
    getClientRects: ba,
    getDimensions: Sa,
    getScale: Ue,
    isElement: ae,
    isRTL: Oa,
};
function bn(n, a) {
    return (
        n.x === a.x &&
        n.y === a.y &&
        n.width === a.width &&
        n.height === a.height
    );
}
function Na(n, a) {
    let t = null,
        e;
    const r = be(n);
    function o() {
        var s;
        clearTimeout(e), (s = t) == null || s.disconnect(), (t = null);
    }
    function i(s, c) {
        s === void 0 && (s = !1), c === void 0 && (c = 1), o();
        const l = n.getBoundingClientRect(),
            { left: u, top: d, width: f, height: p } = l;
        if ((s || a(), !f || !p)) return;
        const h = mt(d),
            v = mt(r.clientWidth - (u + f)),
            g = mt(r.clientHeight - (d + p)),
            w = mt(u),
            D = {
                rootMargin: -h + 'px ' + -v + 'px ' + -g + 'px ' + -w + 'px',
                threshold: Fe(0, Ge(1, c)) || 1,
            };
        let S = !0;
        function P(N) {
            const E = N[0].intersectionRatio;
            if (E !== c) {
                if (!S) return i();
                E
                    ? i(!1, E)
                    : (e = setTimeout(() => {
                          i(!1, 1e-7);
                      }, 1e3));
            }
            E === 1 && !bn(l, n.getBoundingClientRect()) && i(), (S = !1);
        }
        try {
            t = new IntersectionObserver(P, { ...D, root: r.ownerDocument });
        } catch {
            t = new IntersectionObserver(P, D);
        }
        t.observe(n);
    }
    return i(!0), o;
}
function Ra(n, a, t, e) {
    e === void 0 && (e = {});
    const {
            ancestorScroll: r = !0,
            ancestorResize: o = !0,
            elementResize: i = typeof ResizeObserver == 'function',
            layoutShift: s = typeof IntersectionObserver == 'function',
            animationFrame: c = !1,
        } = e,
        l = vr(n),
        u = r || o ? [...(l ? lt(l) : []), ...lt(a)] : [];
    u.forEach((w) => {
        r && w.addEventListener('scroll', t, { passive: !0 }),
            o && w.addEventListener('resize', t);
    });
    const d = l && s ? Na(l, t) : null;
    let f = -1,
        p = null;
    i &&
        ((p = new ResizeObserver((w) => {
            let [k] = w;
            k &&
                k.target === l &&
                p &&
                (p.unobserve(a),
                cancelAnimationFrame(f),
                (f = requestAnimationFrame(() => {
                    var D;
                    (D = p) == null || D.observe(a);
                }))),
                t();
        })),
        l && !c && p.observe(l),
        p.observe(a));
    let h,
        v = c ? He(n) : null;
    c && g();
    function g() {
        const w = He(n);
        v && !bn(v, w) && t(), (v = w), (h = requestAnimationFrame(g));
    }
    return (
        t(),
        () => {
            var w;
            u.forEach((k) => {
                r && k.removeEventListener('scroll', t),
                    o && k.removeEventListener('resize', t);
            }),
                d == null || d(),
                (w = p) == null || w.disconnect(),
                (p = null),
                c && cancelAnimationFrame(h);
        }
    );
}
const Ya = ga,
    Ia = ma,
    Or = ha,
    La = (n, a, t) => {
        const e = new Map(),
            r = { platform: Ta, ...t },
            o = { ...r.platform, _c: e };
        return fa(n, a, { ...r, platform: o });
    };
var kt = typeof document < 'u' ? y.useLayoutEffect : y.useEffect;
function Tt(n, a) {
    if (n === a) return !0;
    if (typeof n != typeof a) return !1;
    if (typeof n == 'function' && n.toString() === a.toString()) return !0;
    let t, e, r;
    if (n && a && typeof n == 'object') {
        if (Array.isArray(n)) {
            if (((t = n.length), t !== a.length)) return !1;
            for (e = t; e-- !== 0; ) if (!Tt(n[e], a[e])) return !1;
            return !0;
        }
        if (((r = Object.keys(n)), (t = r.length), t !== Object.keys(a).length))
            return !1;
        for (e = t; e-- !== 0; )
            if (!{}.hasOwnProperty.call(a, r[e])) return !1;
        for (e = t; e-- !== 0; ) {
            const o = r[e];
            if (!(o === '_owner' && n.$$typeof) && !Tt(n[o], a[o])) return !1;
        }
        return !0;
    }
    return n !== n && a !== a;
}
function kn(n) {
    return typeof window > 'u'
        ? 1
        : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tr(n, a) {
    const t = kn(n);
    return Math.round(a * t) / t;
}
function zt(n) {
    const a = y.useRef(n);
    return (
        kt(() => {
            a.current = n;
        }),
        a
    );
}
function Fa(n) {
    n === void 0 && (n = {});
    const {
            placement: a = 'bottom',
            strategy: t = 'absolute',
            middleware: e = [],
            platform: r,
            elements: { reference: o, floating: i } = {},
            transform: s = !0,
            whileElementsMounted: c,
            open: l,
        } = n,
        [u, d] = y.useState({
            x: 0,
            y: 0,
            strategy: t,
            placement: a,
            middlewareData: {},
            isPositioned: !1,
        }),
        [f, p] = y.useState(e);
    Tt(f, e) || p(e);
    const [h, v] = y.useState(null),
        [g, w] = y.useState(null),
        k = y.useCallback((Y) => {
            Y !== N.current && ((N.current = Y), v(Y));
        }, []),
        D = y.useCallback((Y) => {
            Y !== E.current && ((E.current = Y), w(Y));
        }, []),
        S = o || h,
        P = i || g,
        N = y.useRef(null),
        E = y.useRef(null),
        _ = y.useRef(u),
        M = c != null,
        O = zt(c),
        Q = zt(r),
        F = zt(l),
        K = y.useCallback(() => {
            if (!N.current || !E.current) return;
            const Y = { placement: a, strategy: t, middleware: f };
            Q.current && (Y.platform = Q.current),
                La(N.current, E.current, Y).then((z) => {
                    const ee = { ...z, isPositioned: F.current !== !1 };
                    U.current &&
                        !Tt(_.current, ee) &&
                        ((_.current = ee),
                        Jn.flushSync(() => {
                            d(ee);
                        }));
                });
        }, [f, a, t, Q, F]);
    kt(() => {
        l === !1 &&
            _.current.isPositioned &&
            ((_.current.isPositioned = !1),
            d((Y) => ({ ...Y, isPositioned: !1 })));
    }, [l]);
    const U = y.useRef(!1);
    kt(
        () => (
            (U.current = !0),
            () => {
                U.current = !1;
            }
        ),
        [],
    ),
        kt(() => {
            if ((S && (N.current = S), P && (E.current = P), S && P)) {
                if (O.current) return O.current(S, P, K);
                K();
            }
        }, [S, P, K, O, M]);
    const A = y.useMemo(
            () => ({
                reference: N,
                floating: E,
                setReference: k,
                setFloating: D,
            }),
            [k, D],
        ),
        T = y.useMemo(() => ({ reference: S, floating: P }), [S, P]),
        I = y.useMemo(() => {
            const Y = { position: t, left: 0, top: 0 };
            if (!T.floating) return Y;
            const z = Tr(T.floating, u.x),
                ee = Tr(T.floating, u.y);
            return s
                ? {
                      ...Y,
                      transform: 'translate(' + z + 'px, ' + ee + 'px)',
                      ...(kn(T.floating) >= 1.5 && { willChange: 'transform' }),
                  }
                : { position: t, left: z, top: ee };
        }, [t, s, T.floating, u.x, u.y]);
    return y.useMemo(
        () => ({ ...u, update: K, refs: A, elements: T, floatingStyles: I }),
        [u, K, A, T, I],
    );
}
const Aa = (n) => {
        function a(t) {
            return {}.hasOwnProperty.call(t, 'current');
        }
        return {
            name: 'arrow',
            options: n,
            fn(t) {
                const { element: e, padding: r } =
                    typeof n == 'function' ? n(t) : n;
                return e && a(e)
                    ? e.current != null
                        ? Or({ element: e.current, padding: r }).fn(t)
                        : {}
                    : e
                      ? Or({ element: e, padding: r }).fn(t)
                      : {};
            },
        };
    },
    Wa = (n, a) => ({ ...Ya(n), options: [n, a] }),
    Ha = (n, a) => ({ ...Ia(n), options: [n, a] }),
    Ba = (n, a) => ({ ...Aa(n), options: [n, a] }),
    _n = 6048e5,
    Qa = 864e5,
    qt = 6e4,
    Kt = 36e5,
    ja = 1e3,
    Nr = Symbol.for('constructDateFrom');
function q(n, a) {
    return typeof n == 'function'
        ? n(a)
        : n && typeof n == 'object' && Nr in n
          ? n[Nr](a)
          : n instanceof Date
            ? new n.constructor(a)
            : new Date(a);
}
function C(n, a) {
    return q(a || n, n);
}
function fe(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    return isNaN(a)
        ? q((t == null ? void 0 : t.in) || n, NaN)
        : (a && e.setDate(e.getDate() + a), e);
}
function pe(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    if (isNaN(a)) return q(n, NaN);
    if (!a) return e;
    const r = e.getDate(),
        o = q(n, e.getTime());
    o.setMonth(e.getMonth() + a + 1, 0);
    const i = o.getDate();
    return r >= i ? o : (e.setFullYear(o.getFullYear(), o.getMonth(), r), e);
}
function xn(n, a, t) {
    return q(n, +C(n) + a);
}
function Va(n, a, t) {
    return xn(n, a * Kt);
}
let qa = {};
function je() {
    return qa;
}
function Se(n, a) {
    var s, c, l, u;
    const t = je(),
        e =
            (a == null ? void 0 : a.weekStartsOn) ??
            ((c =
                (s = a == null ? void 0 : a.locale) == null
                    ? void 0
                    : s.options) == null
                ? void 0
                : c.weekStartsOn) ??
            t.weekStartsOn ??
            ((u = (l = t.locale) == null ? void 0 : l.options) == null
                ? void 0
                : u.weekStartsOn) ??
            0,
        r = C(n, a == null ? void 0 : a.in),
        o = r.getDay(),
        i = (o < e ? 7 : 0) + o - e;
    return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function Ze(n, a) {
    return Se(n, { ...a, weekStartsOn: 1 });
}
function Mn(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = t.getFullYear(),
        r = q(t, 0);
    r.setFullYear(e + 1, 0, 4), r.setHours(0, 0, 0, 0);
    const o = Ze(r),
        i = q(t, 0);
    i.setFullYear(e, 0, 4), i.setHours(0, 0, 0, 0);
    const s = Ze(i);
    return t.getTime() >= o.getTime()
        ? e + 1
        : t.getTime() >= s.getTime()
          ? e
          : e - 1;
}
function Nt(n) {
    const a = C(n),
        t = new Date(
            Date.UTC(
                a.getFullYear(),
                a.getMonth(),
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
                a.getMilliseconds(),
            ),
        );
    return t.setUTCFullYear(a.getFullYear()), +n - +t;
}
function Pe(n, ...a) {
    const t = q.bind(
        null,
        a.find((e) => typeof e == 'object'),
    );
    return a.map(t);
}
function Be(n, a) {
    const t = C(n, a == null ? void 0 : a.in);
    return t.setHours(0, 0, 0, 0), t;
}
function Je(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a),
        o = Be(e),
        i = Be(r),
        s = +o - Nt(o),
        c = +i - Nt(i);
    return Math.round((s - c) / Qa);
}
function Ka(n, a) {
    const t = Mn(n, a),
        e = q(n, 0);
    return e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), Ze(e);
}
function sr(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    return e.setTime(e.getTime() + a * qt), e;
}
function wr(n, a, t) {
    return pe(n, a * 3, t);
}
function Ua(n, a, t) {
    return xn(n, a * 1e3);
}
function Rt(n, a, t) {
    return fe(n, a * 7, t);
}
function ke(n, a, t) {
    return pe(n, a * 12, t);
}
function Rr(n, a) {
    let t,
        e = a == null ? void 0 : a.in;
    return (
        n.forEach((r) => {
            !e && typeof r == 'object' && (e = q.bind(null, r));
            const o = C(r, e);
            (!t || t < o || isNaN(+o)) && (t = o);
        }),
        q(e, t || NaN)
    );
}
function Yr(n, a) {
    let t,
        e = a == null ? void 0 : a.in;
    return (
        n.forEach((r) => {
            !e && typeof r == 'object' && (e = q.bind(null, r));
            const o = C(r, e);
            (!t || t > o || isNaN(+o)) && (t = o);
        }),
        q(e, t || NaN)
    );
}
function $a(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a);
    return +Be(e) == +Be(r);
}
function _e(n) {
    return (
        n instanceof Date ||
        (typeof n == 'object' &&
            Object.prototype.toString.call(n) === '[object Date]')
    );
}
function Yt(n) {
    return !((!_e(n) && typeof n != 'number') || isNaN(+C(n)));
}
function It(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a),
        o = e.getFullYear() - r.getFullYear(),
        i = e.getMonth() - r.getMonth();
    return o * 12 + i;
}
function Ae(n, a) {
    const t = C(n, a == null ? void 0 : a.in);
    return Math.trunc(t.getMonth() / 3) + 1;
}
function Lt(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a),
        o = e.getFullYear() - r.getFullYear(),
        i = Ae(e) - Ae(r);
    return o * 4 + i;
}
function Ft(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a);
    return e.getFullYear() - r.getFullYear();
}
function Xa(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a),
        o = Ir(e, r),
        i = Math.abs(Je(e, r));
    e.setDate(e.getDate() - o * i);
    const s = +(Ir(e, r) === -o),
        c = o * (i - s);
    return c === 0 ? 0 : c;
}
function Ir(n, a) {
    const t =
        n.getFullYear() - a.getFullYear() ||
        n.getMonth() - a.getMonth() ||
        n.getDate() - a.getDate() ||
        n.getHours() - a.getHours() ||
        n.getMinutes() - a.getMinutes() ||
        n.getSeconds() - a.getSeconds() ||
        n.getMilliseconds() - a.getMilliseconds();
    return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Cn(n, a) {
    const t = C(n, a == null ? void 0 : a.in);
    return t.setHours(23, 59, 59, 999), t;
}
function Sn(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = t.getMonth();
    return (
        t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t
    );
}
function cr(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = t.getMonth(),
        r = e - (e % 3);
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function Pn(n, a) {
    const t = C(n, a == null ? void 0 : a.in);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function En(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = t.getFullYear();
    return t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Ut(n, a) {
    const t = C(n, a == null ? void 0 : a.in);
    return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Ga(n, a) {
    var s, c;
    const t = je(),
        e =
            t.weekStartsOn ??
            ((c = (s = t.locale) == null ? void 0 : s.options) == null
                ? void 0
                : c.weekStartsOn) ??
            0,
        r = C(n, a == null ? void 0 : a.in),
        o = r.getDay(),
        i = (o < e ? -7 : 0) + 6 - (o - e);
    return r.setDate(r.getDate() + i), r.setHours(23, 59, 59, 999), r;
}
const za = {
        lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds',
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes',
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
    },
    Za = (n, a, t) => {
        let e;
        const r = za[n];
        return (
            typeof r == 'string'
                ? (e = r)
                : a === 1
                  ? (e = r.one)
                  : (e = r.other.replace('{{count}}', a.toString())),
            t != null && t.addSuffix
                ? t.comparison && t.comparison > 0
                    ? 'in ' + e
                    : e + ' ago'
                : e
        );
    };
function Zt(n) {
    return (a = {}) => {
        const t = a.width ? String(a.width) : n.defaultWidth;
        return n.formats[t] || n.formats[n.defaultWidth];
    };
}
const Ja = {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy',
    },
    eo = {
        full: 'h:mm:ss a zzzz',
        long: 'h:mm:ss a z',
        medium: 'h:mm:ss a',
        short: 'h:mm a',
    },
    to = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}',
    },
    ro = {
        date: Zt({ formats: Ja, defaultWidth: 'full' }),
        time: Zt({ formats: eo, defaultWidth: 'full' }),
        dateTime: Zt({ formats: to, defaultWidth: 'full' }),
    },
    no = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
    },
    ao = (n, a, t, e) => no[n];
function nt(n) {
    return (a, t) => {
        const e = t != null && t.context ? String(t.context) : 'standalone';
        let r;
        if (e === 'formatting' && n.formattingValues) {
            const i = n.defaultFormattingWidth || n.defaultWidth,
                s = t != null && t.width ? String(t.width) : i;
            r = n.formattingValues[s] || n.formattingValues[i];
        } else {
            const i = n.defaultWidth,
                s = t != null && t.width ? String(t.width) : n.defaultWidth;
            r = n.values[s] || n.values[i];
        }
        const o = n.argumentCallback ? n.argumentCallback(a) : a;
        return r[o];
    };
}
const oo = {
        narrow: ['B', 'A'],
        abbreviated: ['BC', 'AD'],
        wide: ['Before Christ', 'Anno Domini'],
    },
    io = {
        narrow: ['1', '2', '3', '4'],
        abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
        wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
    },
    so = {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        wide: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
    },
    co = {
        narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        wide: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ],
    },
    lo = {
        narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
        },
        abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
        },
        wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night',
        },
    },
    uo = {
        narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
        },
        abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
        },
        wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night',
        },
    },
    fo = (n, a) => {
        const t = Number(n),
            e = t % 100;
        if (e > 20 || e < 10)
            switch (e % 10) {
                case 1:
                    return t + 'st';
                case 2:
                    return t + 'nd';
                case 3:
                    return t + 'rd';
            }
        return t + 'th';
    },
    po = {
        ordinalNumber: fo,
        era: nt({ values: oo, defaultWidth: 'wide' }),
        quarter: nt({
            values: io,
            defaultWidth: 'wide',
            argumentCallback: (n) => n - 1,
        }),
        month: nt({ values: so, defaultWidth: 'wide' }),
        day: nt({ values: co, defaultWidth: 'wide' }),
        dayPeriod: nt({
            values: lo,
            defaultWidth: 'wide',
            formattingValues: uo,
            defaultFormattingWidth: 'wide',
        }),
    };
function at(n) {
    return (a, t = {}) => {
        const e = t.width,
            r =
                (e && n.matchPatterns[e]) ||
                n.matchPatterns[n.defaultMatchWidth],
            o = a.match(r);
        if (!o) return null;
        const i = o[0],
            s =
                (e && n.parsePatterns[e]) ||
                n.parsePatterns[n.defaultParseWidth],
            c = Array.isArray(s)
                ? mo(s, (d) => d.test(i))
                : ho(s, (d) => d.test(i));
        let l;
        (l = n.valueCallback ? n.valueCallback(c) : c),
            (l = t.valueCallback ? t.valueCallback(l) : l);
        const u = a.slice(i.length);
        return { value: l, rest: u };
    };
}
function ho(n, a) {
    for (const t in n)
        if (Object.prototype.hasOwnProperty.call(n, t) && a(n[t])) return t;
}
function mo(n, a) {
    for (let t = 0; t < n.length; t++) if (a(n[t])) return t;
}
function vo(n) {
    return (a, t = {}) => {
        const e = a.match(n.matchPattern);
        if (!e) return null;
        const r = e[0],
            o = a.match(n.parsePattern);
        if (!o) return null;
        let i = n.valueCallback ? n.valueCallback(o[0]) : o[0];
        i = t.valueCallback ? t.valueCallback(i) : i;
        const s = a.slice(r.length);
        return { value: i, rest: s };
    };
}
const go = /^(\d+)(th|st|nd|rd)?/i,
    wo = /\d+/i,
    yo = {
        narrow: /^(b|a)/i,
        abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    Do = { any: [/^b/i, /^(a|c)/i] },
    bo = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    ko = { any: [/1/i, /2/i, /3/i, /4/i] },
    _o = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    xo = {
        narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
        ],
        any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
        ],
    },
    Mo = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    Co = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    So = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    Po = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
        },
    },
    Eo = {
        ordinalNumber: vo({
            matchPattern: go,
            parsePattern: wo,
            valueCallback: (n) => parseInt(n, 10),
        }),
        era: at({
            matchPatterns: yo,
            defaultMatchWidth: 'wide',
            parsePatterns: Do,
            defaultParseWidth: 'any',
        }),
        quarter: at({
            matchPatterns: bo,
            defaultMatchWidth: 'wide',
            parsePatterns: ko,
            defaultParseWidth: 'any',
            valueCallback: (n) => n + 1,
        }),
        month: at({
            matchPatterns: _o,
            defaultMatchWidth: 'wide',
            parsePatterns: xo,
            defaultParseWidth: 'any',
        }),
        day: at({
            matchPatterns: Mo,
            defaultMatchWidth: 'wide',
            parsePatterns: Co,
            defaultParseWidth: 'any',
        }),
        dayPeriod: at({
            matchPatterns: So,
            defaultMatchWidth: 'any',
            parsePatterns: Po,
            defaultParseWidth: 'any',
        }),
    },
    On = {
        code: 'en-US',
        formatDistance: Za,
        formatLong: ro,
        formatRelative: ao,
        localize: po,
        match: Eo,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
function Oo(n, a) {
    const t = C(n, a == null ? void 0 : a.in);
    return Je(t, Ut(t)) + 1;
}
function yr(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = +Ze(t) - +Ka(t);
    return Math.round(e / _n) + 1;
}
function Dr(n, a) {
    var u, d, f, p;
    const t = C(n, a == null ? void 0 : a.in),
        e = t.getFullYear(),
        r = je(),
        o =
            (a == null ? void 0 : a.firstWeekContainsDate) ??
            ((d =
                (u = a == null ? void 0 : a.locale) == null
                    ? void 0
                    : u.options) == null
                ? void 0
                : d.firstWeekContainsDate) ??
            r.firstWeekContainsDate ??
            ((p = (f = r.locale) == null ? void 0 : f.options) == null
                ? void 0
                : p.firstWeekContainsDate) ??
            1,
        i = q((a == null ? void 0 : a.in) || n, 0);
    i.setFullYear(e + 1, 0, o), i.setHours(0, 0, 0, 0);
    const s = Se(i, a),
        c = q((a == null ? void 0 : a.in) || n, 0);
    c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
    const l = Se(c, a);
    return +t >= +s ? e + 1 : +t >= +l ? e : e - 1;
}
function To(n, a) {
    var s, c, l, u;
    const t = je(),
        e =
            (a == null ? void 0 : a.firstWeekContainsDate) ??
            ((c =
                (s = a == null ? void 0 : a.locale) == null
                    ? void 0
                    : s.options) == null
                ? void 0
                : c.firstWeekContainsDate) ??
            t.firstWeekContainsDate ??
            ((u = (l = t.locale) == null ? void 0 : l.options) == null
                ? void 0
                : u.firstWeekContainsDate) ??
            1,
        r = Dr(n, a),
        o = q((a == null ? void 0 : a.in) || n, 0);
    return o.setFullYear(r, 0, e), o.setHours(0, 0, 0, 0), Se(o, a);
}
function Tn(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = +Se(t, a) - +To(t, a);
    return Math.round(e / _n) + 1;
}
function V(n, a) {
    const t = n < 0 ? '-' : '',
        e = Math.abs(n).toString().padStart(a, '0');
    return t + e;
}
const Ee = {
        y(n, a) {
            const t = n.getFullYear(),
                e = t > 0 ? t : 1 - t;
            return V(a === 'yy' ? e % 100 : e, a.length);
        },
        M(n, a) {
            const t = n.getMonth();
            return a === 'M' ? String(t + 1) : V(t + 1, 2);
        },
        d(n, a) {
            return V(n.getDate(), a.length);
        },
        a(n, a) {
            const t = n.getHours() / 12 >= 1 ? 'pm' : 'am';
            switch (a) {
                case 'a':
                case 'aa':
                    return t.toUpperCase();
                case 'aaa':
                    return t;
                case 'aaaaa':
                    return t[0];
                case 'aaaa':
                default:
                    return t === 'am' ? 'a.m.' : 'p.m.';
            }
        },
        h(n, a) {
            return V(n.getHours() % 12 || 12, a.length);
        },
        H(n, a) {
            return V(n.getHours(), a.length);
        },
        m(n, a) {
            return V(n.getMinutes(), a.length);
        },
        s(n, a) {
            return V(n.getSeconds(), a.length);
        },
        S(n, a) {
            const t = a.length,
                e = n.getMilliseconds(),
                r = Math.trunc(e * Math.pow(10, t - 3));
            return V(r, a.length);
        },
    },
    Ve = {
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night',
    },
    Lr = {
        G: function (n, a, t) {
            const e = n.getFullYear() > 0 ? 1 : 0;
            switch (a) {
                case 'G':
                case 'GG':
                case 'GGG':
                    return t.era(e, { width: 'abbreviated' });
                case 'GGGGG':
                    return t.era(e, { width: 'narrow' });
                case 'GGGG':
                default:
                    return t.era(e, { width: 'wide' });
            }
        },
        y: function (n, a, t) {
            if (a === 'yo') {
                const e = n.getFullYear(),
                    r = e > 0 ? e : 1 - e;
                return t.ordinalNumber(r, { unit: 'year' });
            }
            return Ee.y(n, a);
        },
        Y: function (n, a, t, e) {
            const r = Dr(n, e),
                o = r > 0 ? r : 1 - r;
            if (a === 'YY') {
                const i = o % 100;
                return V(i, 2);
            }
            return a === 'Yo'
                ? t.ordinalNumber(o, { unit: 'year' })
                : V(o, a.length);
        },
        R: function (n, a) {
            const t = Mn(n);
            return V(t, a.length);
        },
        u: function (n, a) {
            const t = n.getFullYear();
            return V(t, a.length);
        },
        Q: function (n, a, t) {
            const e = Math.ceil((n.getMonth() + 1) / 3);
            switch (a) {
                case 'Q':
                    return String(e);
                case 'QQ':
                    return V(e, 2);
                case 'Qo':
                    return t.ordinalNumber(e, { unit: 'quarter' });
                case 'QQQ':
                    return t.quarter(e, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'QQQQQ':
                    return t.quarter(e, {
                        width: 'narrow',
                        context: 'formatting',
                    });
                case 'QQQQ':
                default:
                    return t.quarter(e, {
                        width: 'wide',
                        context: 'formatting',
                    });
            }
        },
        q: function (n, a, t) {
            const e = Math.ceil((n.getMonth() + 1) / 3);
            switch (a) {
                case 'q':
                    return String(e);
                case 'qq':
                    return V(e, 2);
                case 'qo':
                    return t.ordinalNumber(e, { unit: 'quarter' });
                case 'qqq':
                    return t.quarter(e, {
                        width: 'abbreviated',
                        context: 'standalone',
                    });
                case 'qqqqq':
                    return t.quarter(e, {
                        width: 'narrow',
                        context: 'standalone',
                    });
                case 'qqqq':
                default:
                    return t.quarter(e, {
                        width: 'wide',
                        context: 'standalone',
                    });
            }
        },
        M: function (n, a, t) {
            const e = n.getMonth();
            switch (a) {
                case 'M':
                case 'MM':
                    return Ee.M(n, a);
                case 'Mo':
                    return t.ordinalNumber(e + 1, { unit: 'month' });
                case 'MMM':
                    return t.month(e, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'MMMMM':
                    return t.month(e, {
                        width: 'narrow',
                        context: 'formatting',
                    });
                case 'MMMM':
                default:
                    return t.month(e, { width: 'wide', context: 'formatting' });
            }
        },
        L: function (n, a, t) {
            const e = n.getMonth();
            switch (a) {
                case 'L':
                    return String(e + 1);
                case 'LL':
                    return V(e + 1, 2);
                case 'Lo':
                    return t.ordinalNumber(e + 1, { unit: 'month' });
                case 'LLL':
                    return t.month(e, {
                        width: 'abbreviated',
                        context: 'standalone',
                    });
                case 'LLLLL':
                    return t.month(e, {
                        width: 'narrow',
                        context: 'standalone',
                    });
                case 'LLLL':
                default:
                    return t.month(e, { width: 'wide', context: 'standalone' });
            }
        },
        w: function (n, a, t, e) {
            const r = Tn(n, e);
            return a === 'wo'
                ? t.ordinalNumber(r, { unit: 'week' })
                : V(r, a.length);
        },
        I: function (n, a, t) {
            const e = yr(n);
            return a === 'Io'
                ? t.ordinalNumber(e, { unit: 'week' })
                : V(e, a.length);
        },
        d: function (n, a, t) {
            return a === 'do'
                ? t.ordinalNumber(n.getDate(), { unit: 'date' })
                : Ee.d(n, a);
        },
        D: function (n, a, t) {
            const e = Oo(n);
            return a === 'Do'
                ? t.ordinalNumber(e, { unit: 'dayOfYear' })
                : V(e, a.length);
        },
        E: function (n, a, t) {
            const e = n.getDay();
            switch (a) {
                case 'E':
                case 'EE':
                case 'EEE':
                    return t.day(e, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'EEEEE':
                    return t.day(e, { width: 'narrow', context: 'formatting' });
                case 'EEEEEE':
                    return t.day(e, { width: 'short', context: 'formatting' });
                case 'EEEE':
                default:
                    return t.day(e, { width: 'wide', context: 'formatting' });
            }
        },
        e: function (n, a, t, e) {
            const r = n.getDay(),
                o = (r - e.weekStartsOn + 8) % 7 || 7;
            switch (a) {
                case 'e':
                    return String(o);
                case 'ee':
                    return V(o, 2);
                case 'eo':
                    return t.ordinalNumber(o, { unit: 'day' });
                case 'eee':
                    return t.day(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'eeeee':
                    return t.day(r, { width: 'narrow', context: 'formatting' });
                case 'eeeeee':
                    return t.day(r, { width: 'short', context: 'formatting' });
                case 'eeee':
                default:
                    return t.day(r, { width: 'wide', context: 'formatting' });
            }
        },
        c: function (n, a, t, e) {
            const r = n.getDay(),
                o = (r - e.weekStartsOn + 8) % 7 || 7;
            switch (a) {
                case 'c':
                    return String(o);
                case 'cc':
                    return V(o, a.length);
                case 'co':
                    return t.ordinalNumber(o, { unit: 'day' });
                case 'ccc':
                    return t.day(r, {
                        width: 'abbreviated',
                        context: 'standalone',
                    });
                case 'ccccc':
                    return t.day(r, { width: 'narrow', context: 'standalone' });
                case 'cccccc':
                    return t.day(r, { width: 'short', context: 'standalone' });
                case 'cccc':
                default:
                    return t.day(r, { width: 'wide', context: 'standalone' });
            }
        },
        i: function (n, a, t) {
            const e = n.getDay(),
                r = e === 0 ? 7 : e;
            switch (a) {
                case 'i':
                    return String(r);
                case 'ii':
                    return V(r, a.length);
                case 'io':
                    return t.ordinalNumber(r, { unit: 'day' });
                case 'iii':
                    return t.day(e, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'iiiii':
                    return t.day(e, { width: 'narrow', context: 'formatting' });
                case 'iiiiii':
                    return t.day(e, { width: 'short', context: 'formatting' });
                case 'iiii':
                default:
                    return t.day(e, { width: 'wide', context: 'formatting' });
            }
        },
        a: function (n, a, t) {
            const r = n.getHours() / 12 >= 1 ? 'pm' : 'am';
            switch (a) {
                case 'a':
                case 'aa':
                    return t.dayPeriod(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'aaa':
                    return t
                        .dayPeriod(r, {
                            width: 'abbreviated',
                            context: 'formatting',
                        })
                        .toLowerCase();
                case 'aaaaa':
                    return t.dayPeriod(r, {
                        width: 'narrow',
                        context: 'formatting',
                    });
                case 'aaaa':
                default:
                    return t.dayPeriod(r, {
                        width: 'wide',
                        context: 'formatting',
                    });
            }
        },
        b: function (n, a, t) {
            const e = n.getHours();
            let r;
            switch (
                (e === 12
                    ? (r = Ve.noon)
                    : e === 0
                      ? (r = Ve.midnight)
                      : (r = e / 12 >= 1 ? 'pm' : 'am'),
                a)
            ) {
                case 'b':
                case 'bb':
                    return t.dayPeriod(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'bbb':
                    return t
                        .dayPeriod(r, {
                            width: 'abbreviated',
                            context: 'formatting',
                        })
                        .toLowerCase();
                case 'bbbbb':
                    return t.dayPeriod(r, {
                        width: 'narrow',
                        context: 'formatting',
                    });
                case 'bbbb':
                default:
                    return t.dayPeriod(r, {
                        width: 'wide',
                        context: 'formatting',
                    });
            }
        },
        B: function (n, a, t) {
            const e = n.getHours();
            let r;
            switch (
                (e >= 17
                    ? (r = Ve.evening)
                    : e >= 12
                      ? (r = Ve.afternoon)
                      : e >= 4
                        ? (r = Ve.morning)
                        : (r = Ve.night),
                a)
            ) {
                case 'B':
                case 'BB':
                case 'BBB':
                    return t.dayPeriod(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'BBBBB':
                    return t.dayPeriod(r, {
                        width: 'narrow',
                        context: 'formatting',
                    });
                case 'BBBB':
                default:
                    return t.dayPeriod(r, {
                        width: 'wide',
                        context: 'formatting',
                    });
            }
        },
        h: function (n, a, t) {
            if (a === 'ho') {
                let e = n.getHours() % 12;
                return (
                    e === 0 && (e = 12), t.ordinalNumber(e, { unit: 'hour' })
                );
            }
            return Ee.h(n, a);
        },
        H: function (n, a, t) {
            return a === 'Ho'
                ? t.ordinalNumber(n.getHours(), { unit: 'hour' })
                : Ee.H(n, a);
        },
        K: function (n, a, t) {
            const e = n.getHours() % 12;
            return a === 'Ko'
                ? t.ordinalNumber(e, { unit: 'hour' })
                : V(e, a.length);
        },
        k: function (n, a, t) {
            let e = n.getHours();
            return (
                e === 0 && (e = 24),
                a === 'ko'
                    ? t.ordinalNumber(e, { unit: 'hour' })
                    : V(e, a.length)
            );
        },
        m: function (n, a, t) {
            return a === 'mo'
                ? t.ordinalNumber(n.getMinutes(), { unit: 'minute' })
                : Ee.m(n, a);
        },
        s: function (n, a, t) {
            return a === 'so'
                ? t.ordinalNumber(n.getSeconds(), { unit: 'second' })
                : Ee.s(n, a);
        },
        S: function (n, a) {
            return Ee.S(n, a);
        },
        X: function (n, a, t) {
            const e = n.getTimezoneOffset();
            if (e === 0) return 'Z';
            switch (a) {
                case 'X':
                    return Ar(e);
                case 'XXXX':
                case 'XX':
                    return Ie(e);
                case 'XXXXX':
                case 'XXX':
                default:
                    return Ie(e, ':');
            }
        },
        x: function (n, a, t) {
            const e = n.getTimezoneOffset();
            switch (a) {
                case 'x':
                    return Ar(e);
                case 'xxxx':
                case 'xx':
                    return Ie(e);
                case 'xxxxx':
                case 'xxx':
                default:
                    return Ie(e, ':');
            }
        },
        O: function (n, a, t) {
            const e = n.getTimezoneOffset();
            switch (a) {
                case 'O':
                case 'OO':
                case 'OOO':
                    return 'GMT' + Fr(e, ':');
                case 'OOOO':
                default:
                    return 'GMT' + Ie(e, ':');
            }
        },
        z: function (n, a, t) {
            const e = n.getTimezoneOffset();
            switch (a) {
                case 'z':
                case 'zz':
                case 'zzz':
                    return 'GMT' + Fr(e, ':');
                case 'zzzz':
                default:
                    return 'GMT' + Ie(e, ':');
            }
        },
        t: function (n, a, t) {
            const e = Math.trunc(+n / 1e3);
            return V(e, a.length);
        },
        T: function (n, a, t) {
            return V(+n, a.length);
        },
    };
function Fr(n, a = '') {
    const t = n > 0 ? '-' : '+',
        e = Math.abs(n),
        r = Math.trunc(e / 60),
        o = e % 60;
    return o === 0 ? t + String(r) : t + String(r) + a + V(o, 2);
}
function Ar(n, a) {
    return n % 60 === 0
        ? (n > 0 ? '-' : '+') + V(Math.abs(n) / 60, 2)
        : Ie(n, a);
}
function Ie(n, a = '') {
    const t = n > 0 ? '-' : '+',
        e = Math.abs(n),
        r = V(Math.trunc(e / 60), 2),
        o = V(e % 60, 2);
    return t + r + a + o;
}
const Wr = (n, a) => {
        switch (n) {
            case 'P':
                return a.date({ width: 'short' });
            case 'PP':
                return a.date({ width: 'medium' });
            case 'PPP':
                return a.date({ width: 'long' });
            case 'PPPP':
            default:
                return a.date({ width: 'full' });
        }
    },
    Nn = (n, a) => {
        switch (n) {
            case 'p':
                return a.time({ width: 'short' });
            case 'pp':
                return a.time({ width: 'medium' });
            case 'ppp':
                return a.time({ width: 'long' });
            case 'pppp':
            default:
                return a.time({ width: 'full' });
        }
    },
    No = (n, a) => {
        const t = n.match(/(P+)(p+)?/) || [],
            e = t[1],
            r = t[2];
        if (!r) return Wr(n, a);
        let o;
        switch (e) {
            case 'P':
                o = a.dateTime({ width: 'short' });
                break;
            case 'PP':
                o = a.dateTime({ width: 'medium' });
                break;
            case 'PPP':
                o = a.dateTime({ width: 'long' });
                break;
            case 'PPPP':
            default:
                o = a.dateTime({ width: 'full' });
                break;
        }
        return o.replace('{{date}}', Wr(e, a)).replace('{{time}}', Nn(r, a));
    },
    lr = { p: Nn, P: No },
    Ro = /^D+$/,
    Yo = /^Y+$/,
    Io = ['D', 'DD', 'YY', 'YYYY'];
function Lo(n) {
    return Ro.test(n);
}
function Fo(n) {
    return Yo.test(n);
}
function Ao(n, a, t) {
    const e = Wo(n, a, t);
    if ((console.warn(e), Io.includes(n))) throw new RangeError(e);
}
function Wo(n, a, t) {
    const e = n[0] === 'Y' ? 'years' : 'days of the month';
    return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ho = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Bo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Qo = /^'([^]*?)'?$/,
    jo = /''/g,
    Vo = /[a-zA-Z]/;
function Hr(n, a, t) {
    var u, d, f, p, h, v, g, w;
    const e = je(),
        r = (t == null ? void 0 : t.locale) ?? e.locale ?? On,
        o =
            (t == null ? void 0 : t.firstWeekContainsDate) ??
            ((d =
                (u = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : u.options) == null
                ? void 0
                : d.firstWeekContainsDate) ??
            e.firstWeekContainsDate ??
            ((p = (f = e.locale) == null ? void 0 : f.options) == null
                ? void 0
                : p.firstWeekContainsDate) ??
            1,
        i =
            (t == null ? void 0 : t.weekStartsOn) ??
            ((v =
                (h = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : h.options) == null
                ? void 0
                : v.weekStartsOn) ??
            e.weekStartsOn ??
            ((w = (g = e.locale) == null ? void 0 : g.options) == null
                ? void 0
                : w.weekStartsOn) ??
            0,
        s = C(n, t == null ? void 0 : t.in);
    if (!Yt(s)) throw new RangeError('Invalid time value');
    let c = a
        .match(Bo)
        .map((k) => {
            const D = k[0];
            if (D === 'p' || D === 'P') {
                const S = lr[D];
                return S(k, r.formatLong);
            }
            return k;
        })
        .join('')
        .match(Ho)
        .map((k) => {
            if (k === "''") return { isToken: !1, value: "'" };
            const D = k[0];
            if (D === "'") return { isToken: !1, value: qo(k) };
            if (Lr[D]) return { isToken: !0, value: k };
            if (D.match(Vo))
                throw new RangeError(
                    'Format string contains an unescaped latin alphabet character `' +
                        D +
                        '`',
                );
            return { isToken: !1, value: k };
        });
    r.localize.preprocessor && (c = r.localize.preprocessor(s, c));
    const l = { firstWeekContainsDate: o, weekStartsOn: i, locale: r };
    return c
        .map((k) => {
            if (!k.isToken) return k.value;
            const D = k.value;
            ((!(t != null && t.useAdditionalWeekYearTokens) && Fo(D)) ||
                (!(t != null && t.useAdditionalDayOfYearTokens) && Lo(D))) &&
                Ao(D, a, String(n));
            const S = Lr[D[0]];
            return S(s, D, r.localize, l);
        })
        .join('');
}
function qo(n) {
    const a = n.match(Qo);
    return a ? a[1].replace(jo, "'") : n;
}
function Br(n, a) {
    return C(n, a == null ? void 0 : a.in).getDate();
}
function Ko(n, a) {
    return C(n, a == null ? void 0 : a.in).getDay();
}
function Uo(n, a) {
    const t = C(n, a == null ? void 0 : a.in),
        e = t.getFullYear(),
        r = t.getMonth(),
        o = q(t, 0);
    return o.setFullYear(e, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function $o() {
    return Object.assign({}, je());
}
function xe(n, a) {
    return C(n, a == null ? void 0 : a.in).getHours();
}
function Xo(n, a) {
    const t = C(n, a == null ? void 0 : a.in).getDay();
    return t === 0 ? 7 : t;
}
function Me(n, a) {
    return C(n, a == null ? void 0 : a.in).getMinutes();
}
function oe(n, a) {
    return C(n, a == null ? void 0 : a.in).getMonth();
}
function Te(n) {
    return C(n).getSeconds();
}
function ur(n) {
    return +C(n);
}
function R(n, a) {
    return C(n, a == null ? void 0 : a.in).getFullYear();
}
function Ye(n, a) {
    return +C(n) > +C(a);
}
function Qe(n, a) {
    return +C(n) < +C(a);
}
function Go(n, a) {
    return +C(n) == +C(a);
}
function zo(n, a) {
    const t = Zo(a) ? new a(0) : q(a, 0);
    return (
        t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
        t.setHours(
            n.getHours(),
            n.getMinutes(),
            n.getSeconds(),
            n.getMilliseconds(),
        ),
        t
    );
}
function Zo(n) {
    var a;
    return (
        typeof n == 'function' &&
        ((a = n.prototype) == null ? void 0 : a.constructor) === n
    );
}
const Jo = 10;
class Rn {
    constructor() {
        x(this, 'subPriority', 0);
    }
    validate(a, t) {
        return !0;
    }
}
class ei extends Rn {
    constructor(a, t, e, r, o) {
        super(),
            (this.value = a),
            (this.validateValue = t),
            (this.setValue = e),
            (this.priority = r),
            o && (this.subPriority = o);
    }
    validate(a, t) {
        return this.validateValue(a, this.value, t);
    }
    set(a, t, e) {
        return this.setValue(a, t, this.value, e);
    }
}
class ti extends Rn {
    constructor(t, e) {
        super();
        x(this, 'priority', Jo);
        x(this, 'subPriority', -1);
        this.context = t || ((r) => q(e, r));
    }
    set(t, e) {
        return e.timestampIsSet ? t : q(t, zo(t, this.context));
    }
}
class B {
    run(a, t, e, r) {
        const o = this.parse(a, t, e, r);
        return o
            ? {
                  setter: new ei(
                      o.value,
                      this.validate,
                      this.set,
                      this.priority,
                      this.subPriority,
                  ),
                  rest: o.rest,
              }
            : null;
    }
    validate(a, t, e) {
        return !0;
    }
}
class ri extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 140);
        x(this, 'incompatibleTokens', ['R', 'u', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'G':
            case 'GG':
            case 'GGG':
                return (
                    r.era(t, { width: 'abbreviated' }) ||
                    r.era(t, { width: 'narrow' })
                );
            case 'GGGGG':
                return r.era(t, { width: 'narrow' });
            case 'GGGG':
            default:
                return (
                    r.era(t, { width: 'wide' }) ||
                    r.era(t, { width: 'abbreviated' }) ||
                    r.era(t, { width: 'narrow' })
                );
        }
    }
    set(t, e, r) {
        return (e.era = r), t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
}
const Z = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/,
    },
    ve = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
    };
function J(n, a) {
    return n && { value: a(n.value), rest: n.rest };
}
function X(n, a) {
    const t = a.match(n);
    return t ? { value: parseInt(t[0], 10), rest: a.slice(t[0].length) } : null;
}
function ge(n, a) {
    const t = a.match(n);
    if (!t) return null;
    if (t[0] === 'Z') return { value: 0, rest: a.slice(1) };
    const e = t[1] === '+' ? 1 : -1,
        r = t[2] ? parseInt(t[2], 10) : 0,
        o = t[3] ? parseInt(t[3], 10) : 0,
        i = t[5] ? parseInt(t[5], 10) : 0;
    return {
        value: e * (r * Kt + o * qt + i * ja),
        rest: a.slice(t[0].length),
    };
}
function Yn(n) {
    return X(Z.anyDigitsSigned, n);
}
function G(n, a) {
    switch (n) {
        case 1:
            return X(Z.singleDigit, a);
        case 2:
            return X(Z.twoDigits, a);
        case 3:
            return X(Z.threeDigits, a);
        case 4:
            return X(Z.fourDigits, a);
        default:
            return X(new RegExp('^\\d{1,' + n + '}'), a);
    }
}
function At(n, a) {
    switch (n) {
        case 1:
            return X(Z.singleDigitSigned, a);
        case 2:
            return X(Z.twoDigitsSigned, a);
        case 3:
            return X(Z.threeDigitsSigned, a);
        case 4:
            return X(Z.fourDigitsSigned, a);
        default:
            return X(new RegExp('^-?\\d{1,' + n + '}'), a);
    }
}
function br(n) {
    switch (n) {
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        case 'am':
        case 'midnight':
        case 'night':
        default:
            return 0;
    }
}
function In(n, a) {
    const t = a > 0,
        e = t ? a : 1 - a;
    let r;
    if (e <= 50) r = n || 100;
    else {
        const o = e + 50,
            i = Math.trunc(o / 100) * 100,
            s = n >= o % 100;
        r = n + i - (s ? 100 : 0);
    }
    return t ? r : 1 - r;
}
function Ln(n) {
    return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
class ni extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 130);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'u',
            'w',
            'I',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        const o = (i) => ({ year: i, isTwoDigitYear: e === 'yy' });
        switch (e) {
            case 'y':
                return J(G(4, t), o);
            case 'yo':
                return J(r.ordinalNumber(t, { unit: 'year' }), o);
            default:
                return J(G(e.length, t), o);
        }
    }
    validate(t, e) {
        return e.isTwoDigitYear || e.year > 0;
    }
    set(t, e, r) {
        const o = t.getFullYear();
        if (r.isTwoDigitYear) {
            const s = In(r.year, o);
            return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
        const i = !('era' in e) || e.era === 1 ? r.year : 1 - r.year;
        return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
}
class ai extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 130);
        x(this, 'incompatibleTokens', [
            'y',
            'R',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        const o = (i) => ({ year: i, isTwoDigitYear: e === 'YY' });
        switch (e) {
            case 'Y':
                return J(G(4, t), o);
            case 'Yo':
                return J(r.ordinalNumber(t, { unit: 'year' }), o);
            default:
                return J(G(e.length, t), o);
        }
    }
    validate(t, e) {
        return e.isTwoDigitYear || e.year > 0;
    }
    set(t, e, r, o) {
        const i = Dr(t, o);
        if (r.isTwoDigitYear) {
            const c = In(r.year, i);
            return (
                t.setFullYear(c, 0, o.firstWeekContainsDate),
                t.setHours(0, 0, 0, 0),
                Se(t, o)
            );
        }
        const s = !('era' in e) || e.era === 1 ? r.year : 1 - r.year;
        return (
            t.setFullYear(s, 0, o.firstWeekContainsDate),
            t.setHours(0, 0, 0, 0),
            Se(t, o)
        );
    }
}
class oi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 130);
        x(this, 'incompatibleTokens', [
            'G',
            'y',
            'Y',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e) {
        return At(e === 'R' ? 4 : e.length, t);
    }
    set(t, e, r) {
        const o = q(t, 0);
        return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), Ze(o);
    }
}
class ii extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 130);
        x(this, 'incompatibleTokens', [
            'G',
            'y',
            'Y',
            'R',
            'w',
            'I',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e) {
        return At(e === 'u' ? 4 : e.length, t);
    }
    set(t, e, r) {
        return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
}
class si extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 120);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        switch (e) {
            case 'Q':
            case 'QQ':
                return G(e.length, t);
            case 'Qo':
                return r.ordinalNumber(t, { unit: 'quarter' });
            case 'QQQ':
                return (
                    r.quarter(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.quarter(t, { width: 'narrow', context: 'formatting' })
                );
            case 'QQQQQ':
                return r.quarter(t, { width: 'narrow', context: 'formatting' });
            case 'QQQQ':
            default:
                return (
                    r.quarter(t, { width: 'wide', context: 'formatting' }) ||
                    r.quarter(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.quarter(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 4;
    }
    set(t, e, r) {
        return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
    }
}
class ci extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 120);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        switch (e) {
            case 'q':
            case 'qq':
                return G(e.length, t);
            case 'qo':
                return r.ordinalNumber(t, { unit: 'quarter' });
            case 'qqq':
                return (
                    r.quarter(t, {
                        width: 'abbreviated',
                        context: 'standalone',
                    }) ||
                    r.quarter(t, { width: 'narrow', context: 'standalone' })
                );
            case 'qqqqq':
                return r.quarter(t, { width: 'narrow', context: 'standalone' });
            case 'qqqq':
            default:
                return (
                    r.quarter(t, { width: 'wide', context: 'standalone' }) ||
                    r.quarter(t, {
                        width: 'abbreviated',
                        context: 'standalone',
                    }) ||
                    r.quarter(t, { width: 'narrow', context: 'standalone' })
                );
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 4;
    }
    set(t, e, r) {
        return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
    }
}
class li extends B {
    constructor() {
        super(...arguments);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'q',
            'Q',
            'L',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
        x(this, 'priority', 110);
    }
    parse(t, e, r) {
        const o = (i) => i - 1;
        switch (e) {
            case 'M':
                return J(X(Z.month, t), o);
            case 'MM':
                return J(G(2, t), o);
            case 'Mo':
                return J(r.ordinalNumber(t, { unit: 'month' }), o);
            case 'MMM':
                return (
                    r.month(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) || r.month(t, { width: 'narrow', context: 'formatting' })
                );
            case 'MMMMM':
                return r.month(t, { width: 'narrow', context: 'formatting' });
            case 'MMMM':
            default:
                return (
                    r.month(t, { width: 'wide', context: 'formatting' }) ||
                    r.month(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.month(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 11;
    }
    set(t, e, r) {
        return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
    }
}
class ui extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 110);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        const o = (i) => i - 1;
        switch (e) {
            case 'L':
                return J(X(Z.month, t), o);
            case 'LL':
                return J(G(2, t), o);
            case 'Lo':
                return J(r.ordinalNumber(t, { unit: 'month' }), o);
            case 'LLL':
                return (
                    r.month(t, {
                        width: 'abbreviated',
                        context: 'standalone',
                    }) || r.month(t, { width: 'narrow', context: 'standalone' })
                );
            case 'LLLLL':
                return r.month(t, { width: 'narrow', context: 'standalone' });
            case 'LLLL':
            default:
                return (
                    r.month(t, { width: 'wide', context: 'standalone' }) ||
                    r.month(t, {
                        width: 'abbreviated',
                        context: 'standalone',
                    }) ||
                    r.month(t, { width: 'narrow', context: 'standalone' })
                );
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 11;
    }
    set(t, e, r) {
        return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
    }
}
function di(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in),
        r = Tn(e, t) - a;
    return e.setDate(e.getDate() - r * 7), C(e, t == null ? void 0 : t.in);
}
class fi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 100);
        x(this, 'incompatibleTokens', [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        switch (e) {
            case 'w':
                return X(Z.week, t);
            case 'wo':
                return r.ordinalNumber(t, { unit: 'week' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 53;
    }
    set(t, e, r, o) {
        return Se(di(t, r, o), o);
    }
}
function pi(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in),
        r = yr(e, t) - a;
    return e.setDate(e.getDate() - r * 7), e;
}
class hi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 100);
        x(this, 'incompatibleTokens', [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        switch (e) {
            case 'I':
                return X(Z.week, t);
            case 'Io':
                return r.ordinalNumber(t, { unit: 'week' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 53;
    }
    set(t, e, r) {
        return Ze(pi(t, r));
    }
}
const mi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    vi = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class gi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 90);
        x(this, 'subPriority', 1);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'q',
            'Q',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        switch (e) {
            case 'd':
                return X(Z.date, t);
            case 'do':
                return r.ordinalNumber(t, { unit: 'date' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        const r = t.getFullYear(),
            o = Ln(r),
            i = t.getMonth();
        return o ? e >= 1 && e <= vi[i] : e >= 1 && e <= mi[i];
    }
    set(t, e, r) {
        return t.setDate(r), t.setHours(0, 0, 0, 0), t;
    }
}
class wi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 90);
        x(this, 'subpriority', 1);
        x(this, 'incompatibleTokens', [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'E',
            'i',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        switch (e) {
            case 'D':
            case 'DD':
                return X(Z.dayOfYear, t);
            case 'Do':
                return r.ordinalNumber(t, { unit: 'date' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        const r = t.getFullYear();
        return Ln(r) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
    }
    set(t, e, r) {
        return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
    }
}
function kr(n, a, t) {
    var d, f, p, h;
    const e = je(),
        r =
            (t == null ? void 0 : t.weekStartsOn) ??
            ((f =
                (d = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : d.options) == null
                ? void 0
                : f.weekStartsOn) ??
            e.weekStartsOn ??
            ((h = (p = e.locale) == null ? void 0 : p.options) == null
                ? void 0
                : h.weekStartsOn) ??
            0,
        o = C(n, t == null ? void 0 : t.in),
        i = o.getDay(),
        c = ((a % 7) + 7) % 7,
        l = 7 - r,
        u = a < 0 || a > 6 ? a - ((i + l) % 7) : ((c + l) % 7) - ((i + l) % 7);
    return fe(o, u, t);
}
class yi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 90);
        x(this, 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'E':
            case 'EE':
            case 'EEE':
                return (
                    r.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                    r.day(t, { width: 'narrow', context: 'formatting' })
                );
            case 'EEEEE':
                return r.day(t, { width: 'narrow', context: 'formatting' });
            case 'EEEEEE':
                return (
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                    r.day(t, { width: 'narrow', context: 'formatting' })
                );
            case 'EEEE':
            default:
                return (
                    r.day(t, { width: 'wide', context: 'formatting' }) ||
                    r.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                    r.day(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 6;
    }
    set(t, e, r, o) {
        return (t = kr(t, r, o)), t.setHours(0, 0, 0, 0), t;
    }
}
class Di extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 90);
        x(this, 'incompatibleTokens', [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'E',
            'i',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r, o) {
        const i = (s) => {
            const c = Math.floor((s - 1) / 7) * 7;
            return ((s + o.weekStartsOn + 6) % 7) + c;
        };
        switch (e) {
            case 'e':
            case 'ee':
                return J(G(e.length, t), i);
            case 'eo':
                return J(r.ordinalNumber(t, { unit: 'day' }), i);
            case 'eee':
                return (
                    r.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                    r.day(t, { width: 'narrow', context: 'formatting' })
                );
            case 'eeeee':
                return r.day(t, { width: 'narrow', context: 'formatting' });
            case 'eeeeee':
                return (
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                    r.day(t, { width: 'narrow', context: 'formatting' })
                );
            case 'eeee':
            default:
                return (
                    r.day(t, { width: 'wide', context: 'formatting' }) ||
                    r.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                    r.day(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 6;
    }
    set(t, e, r, o) {
        return (t = kr(t, r, o)), t.setHours(0, 0, 0, 0), t;
    }
}
class bi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 90);
        x(this, 'incompatibleTokens', [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'E',
            'i',
            'e',
            't',
            'T',
        ]);
    }
    parse(t, e, r, o) {
        const i = (s) => {
            const c = Math.floor((s - 1) / 7) * 7;
            return ((s + o.weekStartsOn + 6) % 7) + c;
        };
        switch (e) {
            case 'c':
            case 'cc':
                return J(G(e.length, t), i);
            case 'co':
                return J(r.ordinalNumber(t, { unit: 'day' }), i);
            case 'ccc':
                return (
                    r.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                    r.day(t, { width: 'short', context: 'standalone' }) ||
                    r.day(t, { width: 'narrow', context: 'standalone' })
                );
            case 'ccccc':
                return r.day(t, { width: 'narrow', context: 'standalone' });
            case 'cccccc':
                return (
                    r.day(t, { width: 'short', context: 'standalone' }) ||
                    r.day(t, { width: 'narrow', context: 'standalone' })
                );
            case 'cccc':
            default:
                return (
                    r.day(t, { width: 'wide', context: 'standalone' }) ||
                    r.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                    r.day(t, { width: 'short', context: 'standalone' }) ||
                    r.day(t, { width: 'narrow', context: 'standalone' })
                );
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 6;
    }
    set(t, e, r, o) {
        return (t = kr(t, r, o)), t.setHours(0, 0, 0, 0), t;
    }
}
function ki(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in),
        r = Xo(e, t),
        o = a - r;
    return fe(e, o, t);
}
class _i extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 90);
        x(this, 'incompatibleTokens', [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'E',
            'e',
            'c',
            't',
            'T',
        ]);
    }
    parse(t, e, r) {
        const o = (i) => (i === 0 ? 7 : i);
        switch (e) {
            case 'i':
            case 'ii':
                return G(e.length, t);
            case 'io':
                return r.ordinalNumber(t, { unit: 'day' });
            case 'iii':
                return J(
                    r.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                        r.day(t, { width: 'short', context: 'formatting' }) ||
                        r.day(t, { width: 'narrow', context: 'formatting' }),
                    o,
                );
            case 'iiiii':
                return J(
                    r.day(t, { width: 'narrow', context: 'formatting' }),
                    o,
                );
            case 'iiiiii':
                return J(
                    r.day(t, { width: 'short', context: 'formatting' }) ||
                        r.day(t, { width: 'narrow', context: 'formatting' }),
                    o,
                );
            case 'iiii':
            default:
                return J(
                    r.day(t, { width: 'wide', context: 'formatting' }) ||
                        r.day(t, {
                            width: 'abbreviated',
                            context: 'formatting',
                        }) ||
                        r.day(t, { width: 'short', context: 'formatting' }) ||
                        r.day(t, { width: 'narrow', context: 'formatting' }),
                    o,
                );
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 7;
    }
    set(t, e, r) {
        return (t = ki(t, r)), t.setHours(0, 0, 0, 0), t;
    }
}
class xi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 80);
        x(this, 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'a':
            case 'aa':
            case 'aaa':
                return (
                    r.dayPeriod(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                );
            case 'aaaaa':
                return r.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                });
            case 'aaaa':
            default:
                return (
                    r.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    r.dayPeriod(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    set(t, e, r) {
        return t.setHours(br(r), 0, 0, 0), t;
    }
}
class Mi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 80);
        x(this, 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'b':
            case 'bb':
            case 'bbb':
                return (
                    r.dayPeriod(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                );
            case 'bbbbb':
                return r.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                });
            case 'bbbb':
            default:
                return (
                    r.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    r.dayPeriod(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    set(t, e, r) {
        return t.setHours(br(r), 0, 0, 0), t;
    }
}
class Ci extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 80);
        x(this, 'incompatibleTokens', ['a', 'b', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'B':
            case 'BB':
            case 'BBB':
                return (
                    r.dayPeriod(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                );
            case 'BBBBB':
                return r.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                });
            case 'BBBB':
            default:
                return (
                    r.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    r.dayPeriod(t, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    r.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                );
        }
    }
    set(t, e, r) {
        return t.setHours(br(r), 0, 0, 0), t;
    }
}
class Si extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 70);
        x(this, 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'h':
                return X(Z.hour12h, t);
            case 'ho':
                return r.ordinalNumber(t, { unit: 'hour' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 12;
    }
    set(t, e, r) {
        const o = t.getHours() >= 12;
        return (
            o && r < 12
                ? t.setHours(r + 12, 0, 0, 0)
                : !o && r === 12
                  ? t.setHours(0, 0, 0, 0)
                  : t.setHours(r, 0, 0, 0),
            t
        );
    }
}
class Pi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 70);
        x(this, 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'H':
                return X(Z.hour23h, t);
            case 'Ho':
                return r.ordinalNumber(t, { unit: 'hour' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 23;
    }
    set(t, e, r) {
        return t.setHours(r, 0, 0, 0), t;
    }
}
class Ei extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 70);
        x(this, 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'K':
                return X(Z.hour11h, t);
            case 'Ko':
                return r.ordinalNumber(t, { unit: 'hour' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 11;
    }
    set(t, e, r) {
        return (
            t.getHours() >= 12 && r < 12
                ? t.setHours(r + 12, 0, 0, 0)
                : t.setHours(r, 0, 0, 0),
            t
        );
    }
}
class Oi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 70);
        x(this, 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'k':
                return X(Z.hour24h, t);
            case 'ko':
                return r.ordinalNumber(t, { unit: 'hour' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 1 && e <= 24;
    }
    set(t, e, r) {
        const o = r <= 24 ? r % 24 : r;
        return t.setHours(o, 0, 0, 0), t;
    }
}
class Ti extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 60);
        x(this, 'incompatibleTokens', ['t', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 'm':
                return X(Z.minute, t);
            case 'mo':
                return r.ordinalNumber(t, { unit: 'minute' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 59;
    }
    set(t, e, r) {
        return t.setMinutes(r, 0, 0), t;
    }
}
class Ni extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 50);
        x(this, 'incompatibleTokens', ['t', 'T']);
    }
    parse(t, e, r) {
        switch (e) {
            case 's':
                return X(Z.second, t);
            case 'so':
                return r.ordinalNumber(t, { unit: 'second' });
            default:
                return G(e.length, t);
        }
    }
    validate(t, e) {
        return e >= 0 && e <= 59;
    }
    set(t, e, r) {
        return t.setSeconds(r, 0), t;
    }
}
class Ri extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 30);
        x(this, 'incompatibleTokens', ['t', 'T']);
    }
    parse(t, e) {
        const r = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
        return J(G(e.length, t), r);
    }
    set(t, e, r) {
        return t.setMilliseconds(r), t;
    }
}
class Yi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 10);
        x(this, 'incompatibleTokens', ['t', 'T', 'x']);
    }
    parse(t, e) {
        switch (e) {
            case 'X':
                return ge(ve.basicOptionalMinutes, t);
            case 'XX':
                return ge(ve.basic, t);
            case 'XXXX':
                return ge(ve.basicOptionalSeconds, t);
            case 'XXXXX':
                return ge(ve.extendedOptionalSeconds, t);
            case 'XXX':
            default:
                return ge(ve.extended, t);
        }
    }
    set(t, e, r) {
        return e.timestampIsSet ? t : q(t, t.getTime() - Nt(t) - r);
    }
}
class Ii extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 10);
        x(this, 'incompatibleTokens', ['t', 'T', 'X']);
    }
    parse(t, e) {
        switch (e) {
            case 'x':
                return ge(ve.basicOptionalMinutes, t);
            case 'xx':
                return ge(ve.basic, t);
            case 'xxxx':
                return ge(ve.basicOptionalSeconds, t);
            case 'xxxxx':
                return ge(ve.extendedOptionalSeconds, t);
            case 'xxx':
            default:
                return ge(ve.extended, t);
        }
    }
    set(t, e, r) {
        return e.timestampIsSet ? t : q(t, t.getTime() - Nt(t) - r);
    }
}
class Li extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 40);
        x(this, 'incompatibleTokens', '*');
    }
    parse(t) {
        return Yn(t);
    }
    set(t, e, r) {
        return [q(t, r * 1e3), { timestampIsSet: !0 }];
    }
}
class Fi extends B {
    constructor() {
        super(...arguments);
        x(this, 'priority', 20);
        x(this, 'incompatibleTokens', '*');
    }
    parse(t) {
        return Yn(t);
    }
    set(t, e, r) {
        return [q(t, r), { timestampIsSet: !0 }];
    }
}
const Ai = {
        G: new ri(),
        y: new ni(),
        Y: new ai(),
        R: new oi(),
        u: new ii(),
        Q: new si(),
        q: new ci(),
        M: new li(),
        L: new ui(),
        w: new fi(),
        I: new hi(),
        d: new gi(),
        D: new wi(),
        E: new yi(),
        e: new Di(),
        c: new bi(),
        i: new _i(),
        a: new xi(),
        b: new Mi(),
        B: new Ci(),
        h: new Si(),
        H: new Pi(),
        K: new Ei(),
        k: new Oi(),
        m: new Ti(),
        s: new Ni(),
        S: new Ri(),
        X: new Yi(),
        x: new Ii(),
        t: new Li(),
        T: new Fi(),
    },
    Wi = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Hi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Bi = /^'([^]*?)'?$/,
    Qi = /''/g,
    ji = /\S/,
    Vi = /[a-zA-Z]/;
function qi(n, a, t, e) {
    var g, w, k, D, S, P, N, E;
    const r = () => q((e == null ? void 0 : e.in) || t, NaN),
        o = $o(),
        i = (e == null ? void 0 : e.locale) ?? o.locale ?? On,
        s =
            (e == null ? void 0 : e.firstWeekContainsDate) ??
            ((w =
                (g = e == null ? void 0 : e.locale) == null
                    ? void 0
                    : g.options) == null
                ? void 0
                : w.firstWeekContainsDate) ??
            o.firstWeekContainsDate ??
            ((D = (k = o.locale) == null ? void 0 : k.options) == null
                ? void 0
                : D.firstWeekContainsDate) ??
            1,
        c =
            (e == null ? void 0 : e.weekStartsOn) ??
            ((P =
                (S = e == null ? void 0 : e.locale) == null
                    ? void 0
                    : S.options) == null
                ? void 0
                : P.weekStartsOn) ??
            o.weekStartsOn ??
            ((E = (N = o.locale) == null ? void 0 : N.options) == null
                ? void 0
                : E.weekStartsOn) ??
            0;
    if (!a) return n ? r() : C(t, e == null ? void 0 : e.in);
    const l = { firstWeekContainsDate: s, weekStartsOn: c, locale: i },
        u = [new ti(e == null ? void 0 : e.in, t)],
        d = a
            .match(Hi)
            .map((_) => {
                const M = _[0];
                if (M in lr) {
                    const O = lr[M];
                    return O(_, i.formatLong);
                }
                return _;
            })
            .join('')
            .match(Wi),
        f = [];
    for (let _ of d) {
        const M = _[0],
            O = Ai[M];
        if (O) {
            const { incompatibleTokens: Q } = O;
            if (Array.isArray(Q)) {
                const K = f.find((U) => Q.includes(U.token) || U.token === M);
                if (K)
                    throw new RangeError(
                        `The format string mustn't contain \`${K.fullToken}\` and \`${_}\` at the same time`,
                    );
            } else if (O.incompatibleTokens === '*' && f.length > 0)
                throw new RangeError(
                    `The format string mustn't contain \`${_}\` and any other token at the same time`,
                );
            f.push({ token: M, fullToken: _ });
            const F = O.run(n, _, i.match, l);
            if (!F) return r();
            u.push(F.setter), (n = F.rest);
        } else {
            if (M.match(Vi))
                throw new RangeError(
                    'Format string contains an unescaped latin alphabet character `' +
                        M +
                        '`',
                );
            if (
                (_ === "''" ? (_ = "'") : M === "'" && (_ = Ki(_)),
                n.indexOf(_) === 0)
            )
                n = n.slice(_.length);
            else return r();
        }
    }
    if (n.length > 0 && ji.test(n)) return r();
    const p = u
        .map((_) => _.priority)
        .sort((_, M) => M - _)
        .filter((_, M, O) => O.indexOf(_) === M)
        .map((_) =>
            u
                .filter((M) => M.priority === _)
                .sort((M, O) => O.subPriority - M.subPriority),
        )
        .map((_) => _[0]);
    let h = C(t, e == null ? void 0 : e.in);
    if (isNaN(+h)) return r();
    const v = {};
    for (const _ of p) {
        if (!_.validate(h, l)) return r();
        const M = _.set(h, v, l);
        Array.isArray(M) ? ((h = M[0]), Object.assign(v, M[1])) : (h = M);
    }
    return h;
}
function Ki(n) {
    return n.match(Bi)[1].replace(Qi, "'");
}
function Ui(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a);
    return e.getFullYear() === r.getFullYear() && e.getMonth() === r.getMonth();
}
function $i(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a);
    return +cr(e) == +cr(r);
}
function Xi(n, a, t) {
    const [e, r] = Pe(t == null ? void 0 : t.in, n, a);
    return e.getFullYear() === r.getFullYear();
}
function ut(n, a, t) {
    const e = +C(n, t == null ? void 0 : t.in),
        [r, o] = [
            +C(a.start, t == null ? void 0 : t.in),
            +C(a.end, t == null ? void 0 : t.in),
        ].sort((i, s) => i - s);
    return e >= r && e <= o;
}
function Gi(n, a, t) {
    return fe(n, -1, t);
}
function zi(n, a) {
    const t = () => q(a == null ? void 0 : a.in, NaN),
        r = ts(n);
    let o;
    if (r.date) {
        const l = rs(r.date, 2);
        o = ns(l.restDateString, l.year);
    }
    if (!o || isNaN(+o)) return t();
    const i = +o;
    let s = 0,
        c;
    if (r.time && ((s = as(r.time)), isNaN(s))) return t();
    if (r.timezone) {
        if (((c = os(r.timezone)), isNaN(c))) return t();
    } else {
        const l = new Date(i + s),
            u = C(0, a == null ? void 0 : a.in);
        return (
            u.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()),
            u.setHours(
                l.getUTCHours(),
                l.getUTCMinutes(),
                l.getUTCSeconds(),
                l.getUTCMilliseconds(),
            ),
            u
        );
    }
    return C(i + s + c, a == null ? void 0 : a.in);
}
const vt = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/,
    },
    Zi = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    Ji =
        /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    es = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ts(n) {
    const a = {},
        t = n.split(vt.dateTimeDelimiter);
    let e;
    if (t.length > 2) return a;
    if (
        (/:/.test(t[0])
            ? (e = t[0])
            : ((a.date = t[0]),
              (e = t[1]),
              vt.timeZoneDelimiter.test(a.date) &&
                  ((a.date = n.split(vt.timeZoneDelimiter)[0]),
                  (e = n.substr(a.date.length, n.length)))),
        e)
    ) {
        const r = vt.timezone.exec(e);
        r
            ? ((a.time = e.replace(r[1], '')), (a.timezone = r[1]))
            : (a.time = e);
    }
    return a;
}
function rs(n, a) {
    const t = new RegExp(
            '^(?:(\\d{4}|[+-]\\d{' +
                (4 + a) +
                '})|(\\d{2}|[+-]\\d{' +
                (2 + a) +
                '})$)',
        ),
        e = n.match(t);
    if (!e) return { year: NaN, restDateString: '' };
    const r = e[1] ? parseInt(e[1]) : null,
        o = e[2] ? parseInt(e[2]) : null;
    return {
        year: o === null ? r : o * 100,
        restDateString: n.slice((e[1] || e[2]).length),
    };
}
function ns(n, a) {
    if (a === null) return new Date(NaN);
    const t = n.match(Zi);
    if (!t) return new Date(NaN);
    const e = !!t[4],
        r = ot(t[1]),
        o = ot(t[2]) - 1,
        i = ot(t[3]),
        s = ot(t[4]),
        c = ot(t[5]) - 1;
    if (e) return us(a, s, c) ? is(a, s, c) : new Date(NaN);
    {
        const l = new Date(0);
        return !cs(a, o, i) || !ls(a, r)
            ? new Date(NaN)
            : (l.setUTCFullYear(a, o, Math.max(r, i)), l);
    }
}
function ot(n) {
    return n ? parseInt(n) : 1;
}
function as(n) {
    const a = n.match(Ji);
    if (!a) return NaN;
    const t = Jt(a[1]),
        e = Jt(a[2]),
        r = Jt(a[3]);
    return ds(t, e, r) ? t * Kt + e * qt + r * 1e3 : NaN;
}
function Jt(n) {
    return (n && parseFloat(n.replace(',', '.'))) || 0;
}
function os(n) {
    if (n === 'Z') return 0;
    const a = n.match(es);
    if (!a) return 0;
    const t = a[1] === '+' ? -1 : 1,
        e = parseInt(a[2]),
        r = (a[3] && parseInt(a[3])) || 0;
    return fs(e, r) ? t * (e * Kt + r * qt) : NaN;
}
function is(n, a, t) {
    const e = new Date(0);
    e.setUTCFullYear(n, 0, 4);
    const r = e.getUTCDay() || 7,
        o = (a - 1) * 7 + t + 1 - r;
    return e.setUTCDate(e.getUTCDate() + o), e;
}
const ss = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Fn(n) {
    return n % 400 === 0 || (n % 4 === 0 && n % 100 !== 0);
}
function cs(n, a, t) {
    return a >= 0 && a <= 11 && t >= 1 && t <= (ss[a] || (Fn(n) ? 29 : 28));
}
function ls(n, a) {
    return a >= 1 && a <= (Fn(n) ? 366 : 365);
}
function us(n, a, t) {
    return a >= 1 && a <= 53 && t >= 0 && t <= 6;
}
function ds(n, a, t) {
    return n === 24
        ? a === 0 && t === 0
        : t >= 0 && t < 60 && a >= 0 && a < 60 && n >= 0 && n < 25;
}
function fs(n, a) {
    return a >= 0 && a <= 59;
}
function le(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in),
        r = e.getFullYear(),
        o = e.getDate(),
        i = q(n, 0);
    i.setFullYear(r, a, 15), i.setHours(0, 0, 0, 0);
    const s = Uo(i);
    return e.setMonth(a, Math.min(o, s)), e;
}
function _t(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    return e.setHours(a), e;
}
function xt(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    return e.setMinutes(a), e;
}
function qe(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in),
        r = Math.trunc(e.getMonth() / 3) + 1,
        o = a - r;
    return le(e, e.getMonth() + o * 3);
}
function Mt(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    return e.setSeconds(a), e;
}
function he(n, a, t) {
    const e = C(n, t == null ? void 0 : t.in);
    return isNaN(+e) ? q(n, NaN) : (e.setFullYear(a), e);
}
function We(n, a, t) {
    return pe(n, -a, t);
}
function An(n, a, t) {
    return wr(n, -1, t);
}
function Qr(n, a, t) {
    return Rt(n, -1, t);
}
function et(n, a, t) {
    return ke(n, -a, t);
}
var Wt = typeof document < 'u' ? y.useLayoutEffect : y.useEffect;
const ps = { ...dn },
    hs = ps.useInsertionEffect,
    ms = hs || ((n) => n());
function vs(n) {
    const a = y.useRef(() => {});
    return (
        ms(() => {
            a.current = n;
        }),
        y.useCallback(function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return a.current == null ? void 0 : a.current(...e);
        }, [])
    );
}
const gs = { ...dn };
let jr = !1,
    ws = 0;
const Vr = () => 'floating-ui-' + Math.random().toString(36).slice(2, 6) + ws++;
function ys() {
    const [n, a] = y.useState(() => (jr ? Vr() : void 0));
    return (
        Wt(() => {
            n == null && a(Vr());
        }, []),
        y.useEffect(() => {
            jr = !0;
        }, []),
        n
    );
}
const Ds = gs.useId,
    Wn = Ds || ys,
    bs = y.forwardRef(function (a, t) {
        const {
                context: {
                    placement: e,
                    elements: { floating: r },
                    middlewareData: { arrow: o, shift: i },
                },
                width: s = 14,
                height: c = 7,
                tipRadius: l = 0,
                strokeWidth: u = 0,
                staticOffset: d,
                stroke: f,
                d: p,
                style: { transform: h, ...v } = {},
                ...g
            } = a,
            w = Wn(),
            [k, D] = y.useState(!1);
        if (
            (Wt(() => {
                if (!r) return;
                de(r).direction === 'rtl' && D(!0);
            }, [r]),
            !r)
        )
            return null;
        const [S, P] = e.split('-'),
            N = S === 'top' || S === 'bottom';
        let E = d;
        ((N && i != null && i.x) || (!N && i != null && i.y)) && (E = null);
        const _ = u * 2,
            M = _ / 2,
            O = (s / 2) * (l / -8 + 1),
            Q = ((c / 2) * l) / 4,
            F = !!p,
            K = E && P === 'end' ? 'bottom' : 'top';
        let U = E && P === 'end' ? 'right' : 'left';
        E && k && (U = P === 'end' ? 'left' : 'right');
        const A = (o == null ? void 0 : o.x) != null ? E || o.x : '',
            T = (o == null ? void 0 : o.y) != null ? E || o.y : '',
            I =
                p ||
                'M0,0' +
                    (' H' + s) +
                    (' L' + (s - O) + ',' + (c - Q)) +
                    (' Q' + s / 2 + ',' + c + ' ' + O + ',' + (c - Q)) +
                    ' Z',
            Y = {
                top: F ? 'rotate(180deg)' : '',
                left: F ? 'rotate(90deg)' : 'rotate(-90deg)',
                bottom: F ? '' : 'rotate(180deg)',
                right: F ? 'rotate(-90deg)' : 'rotate(90deg)',
            }[S];
        return L.jsxs('svg', {
            ...g,
            'aria-hidden': !0,
            ref: t,
            width: F ? s : s + _,
            height: s,
            viewBox: '0 0 ' + s + ' ' + (c > s ? c : s),
            style: {
                position: 'absolute',
                pointerEvents: 'none',
                [U]: A,
                [K]: T,
                [S]: N || F ? '100%' : 'calc(100% - ' + _ / 2 + 'px)',
                transform: [Y, h].filter((z) => !!z).join(' '),
                ...v,
            },
            children: [
                _ > 0 &&
                    L.jsx('path', {
                        clipPath: 'url(#' + w + ')',
                        fill: 'none',
                        stroke: f,
                        strokeWidth: _ + (p ? 0 : 1),
                        d: I,
                    }),
                L.jsx('path', { stroke: _ && !p ? g.fill : 'none', d: I }),
                L.jsx('clipPath', {
                    id: w,
                    children: L.jsx('rect', {
                        x: -M,
                        y: M * (F ? -1 : 1),
                        width: s + _,
                        height: s,
                    }),
                }),
            ],
        });
    });
function ks() {
    const n = new Map();
    return {
        emit(a, t) {
            var e;
            (e = n.get(a)) == null || e.forEach((r) => r(t));
        },
        on(a, t) {
            n.has(a) || n.set(a, new Set()), n.get(a).add(t);
        },
        off(a, t) {
            var e;
            (e = n.get(a)) == null || e.delete(t);
        },
    };
}
const _s = y.createContext(null),
    xs = y.createContext(null),
    Ms = () => {
        var n;
        return ((n = y.useContext(_s)) == null ? void 0 : n.id) || null;
    },
    Cs = () => y.useContext(xs);
function Ss(n) {
    const { open: a = !1, onOpenChange: t, elements: e } = n,
        r = Wn(),
        o = y.useRef({}),
        [i] = y.useState(() => ks()),
        s = Ms() != null,
        [c, l] = y.useState(e.reference),
        u = vs((p, h, v) => {
            (o.current.openEvent = p ? h : void 0),
                i.emit('openchange', {
                    open: p,
                    event: h,
                    reason: v,
                    nested: s,
                }),
                t == null || t(p, h, v);
        }),
        d = y.useMemo(() => ({ setPositionReference: l }), []),
        f = y.useMemo(
            () => ({
                reference: c || e.reference || null,
                floating: e.floating || null,
                domReference: e.reference,
            }),
            [c, e.reference, e.floating],
        );
    return y.useMemo(
        () => ({
            dataRef: o,
            open: a,
            onOpenChange: u,
            elements: f,
            events: i,
            floatingId: r,
            refs: d,
        }),
        [a, u, f, i, r, d],
    );
}
function Ps(n) {
    n === void 0 && (n = {});
    const { nodeId: a } = n,
        t = Ss({
            ...n,
            elements: { reference: null, floating: null, ...n.elements },
        }),
        e = n.rootContext || t,
        r = e.elements,
        [o, i] = y.useState(null),
        [s, c] = y.useState(null),
        u = (r == null ? void 0 : r.domReference) || o,
        d = y.useRef(null),
        f = Cs();
    Wt(() => {
        u && (d.current = u);
    }, [u]);
    const p = Fa({ ...n, elements: { ...r, ...(s && { reference: s }) } }),
        h = y.useCallback(
            (D) => {
                const S = ae(D)
                    ? {
                          getBoundingClientRect: () =>
                              D.getBoundingClientRect(),
                          getClientRects: () => D.getClientRects(),
                          contextElement: D,
                      }
                    : D;
                c(S), p.refs.setReference(S);
            },
            [p.refs],
        ),
        v = y.useCallback(
            (D) => {
                (ae(D) || D === null) && ((d.current = D), i(D)),
                    (ae(p.refs.reference.current) ||
                        p.refs.reference.current === null ||
                        (D !== null && !ae(D))) &&
                        p.refs.setReference(D);
            },
            [p.refs],
        ),
        g = y.useMemo(
            () => ({
                ...p.refs,
                setReference: v,
                setPositionReference: h,
                domReference: d,
            }),
            [p.refs, v, h],
        ),
        w = y.useMemo(
            () => ({ ...p.elements, domReference: u }),
            [p.elements, u],
        ),
        k = y.useMemo(
            () => ({ ...p, ...e, refs: g, elements: w, nodeId: a }),
            [p, g, w, a, e],
        );
    return (
        Wt(() => {
            e.dataRef.current.floatingContext = k;
            const D =
                f == null ? void 0 : f.nodesRef.current.find((S) => S.id === a);
            D && (D.context = k);
        }),
        y.useMemo(
            () => ({ ...p, context: k, refs: g, elements: w }),
            [p, g, w, k],
        )
    );
}
/*!
  react-datepicker v8.3.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/ var dr = function (a, t) {
    return (
        (dr =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, r) {
                    e.__proto__ = r;
                }) ||
            function (e, r) {
                for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }),
        dr(a, t)
    );
};
function te(n, a) {
    if (typeof a != 'function' && a !== null)
        throw new TypeError(
            'Class extends value ' +
                String(a) +
                ' is not a constructor or null',
        );
    dr(n, a);
    function t() {
        this.constructor = n;
    }
    n.prototype =
        a === null ? Object.create(a) : ((t.prototype = a.prototype), new t());
}
var H = function () {
    return (
        (H =
            Object.assign ||
            function (t) {
                for (var e, r = 1, o = arguments.length; r < o; r++) {
                    e = arguments[r];
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) &&
                            (t[i] = e[i]);
                }
                return t;
            }),
        H.apply(this, arguments)
    );
};
function we(n, a, t) {
    if (t || arguments.length === 2)
        for (var e = 0, r = a.length, o; e < r; e++)
            (o || !(e in a)) &&
                (o || (o = Array.prototype.slice.call(a, 0, e)), (o[e] = a[e]));
    return n.concat(o || Array.prototype.slice.call(a));
}
var Es = function (n) {
        var a = n.showTimeSelectOnly,
            t = a === void 0 ? !1 : a,
            e = n.showTime,
            r = e === void 0 ? !1 : e,
            o = n.className,
            i = n.children,
            s = t ? 'Choose Time' : 'Choose Date'.concat(r ? ' and Time' : '');
        return m.createElement(
            'div',
            {
                className: o,
                role: 'dialog',
                'aria-label': s,
                'aria-modal': 'true',
            },
            i,
        );
    },
    Os = function (n, a) {
        var t = y.useRef(null),
            e = y.useRef(n);
        e.current = n;
        var r = y.useCallback(
            function (o) {
                var i,
                    s =
                        (o.composed &&
                            o.composedPath &&
                            o.composedPath().find(function (c) {
                                return c instanceof Node;
                            })) ||
                        o.target;
                t.current &&
                    !t.current.contains(s) &&
                    ((a &&
                        s instanceof HTMLElement &&
                        s.classList.contains(a)) ||
                        (i = e.current) === null ||
                        i === void 0 ||
                        i.call(e, o));
            },
            [a],
        );
        return (
            y.useEffect(
                function () {
                    return (
                        document.addEventListener('mousedown', r),
                        function () {
                            document.removeEventListener('mousedown', r);
                        }
                    );
                },
                [r],
            ),
            t
        );
    },
    $t = function (n) {
        var a = n.children,
            t = n.onClickOutside,
            e = n.className,
            r = n.containerRef,
            o = n.style,
            i = n.ignoreClass,
            s = Os(t, i);
        return m.createElement(
            'div',
            {
                className: e,
                style: o,
                ref: function (c) {
                    (s.current = c), r && (r.current = c);
                },
            },
            a,
        );
    },
    b;
(function (n) {
    (n.ArrowUp = 'ArrowUp'),
        (n.ArrowDown = 'ArrowDown'),
        (n.ArrowLeft = 'ArrowLeft'),
        (n.ArrowRight = 'ArrowRight'),
        (n.PageUp = 'PageUp'),
        (n.PageDown = 'PageDown'),
        (n.Home = 'Home'),
        (n.End = 'End'),
        (n.Enter = 'Enter'),
        (n.Space = ' '),
        (n.Tab = 'Tab'),
        (n.Escape = 'Escape'),
        (n.Backspace = 'Backspace'),
        (n.X = 'x');
})(b || (b = {}));
function Hn() {
    var n = typeof window < 'u' ? window : globalThis;
    return n;
}
var pt = 12;
function j(n) {
    if (n == null) return new Date();
    var a = typeof n == 'string' ? zi(n) : C(n);
    return Xt(a) ? a : new Date();
}
function er(n, a, t, e, r) {
    r === void 0 && (r = j());
    for (
        var o = tt(t) || tt(_r()), i = Array.isArray(a) ? a : [a], s = 0, c = i;
        s < c.length;
        s++
    ) {
        var l = c[s],
            u = qi(n, l, r, { locale: o });
        if (Xt(u) && (!e || n === $(u, l, t))) return u;
    }
    return null;
}
function Xt(n, a) {
    return Yt(n) && !Qe(n, new Date('1/1/1800'));
}
function $(n, a, t) {
    if (t === 'en')
        return Hr(n, a, {
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0,
        });
    var e = t ? tt(t) : void 0;
    return (
        t &&
            !e &&
            console.warn(
                'A locale object was not found for the provided string ["'.concat(
                    t,
                    '"].',
                ),
            ),
        (e = e || tt(_r())),
        Hr(n, a, {
            locale: e,
            useAdditionalWeekYearTokens: !0,
            useAdditionalDayOfYearTokens: !0,
        })
    );
}
function ce(n, a) {
    var t = a.dateFormat,
        e = a.locale,
        r = Array.isArray(t) && t.length > 0 ? t[0] : t;
    return (n && $(n, r, e)) || '';
}
function Ts(n, a, t) {
    if (!n) return '';
    var e = ce(n, t),
        r = a ? ce(a, t) : '';
    return ''.concat(e, ' - ').concat(r);
}
function Ns(n, a) {
    if (!(n != null && n.length)) return '';
    var t = n[0] ? ce(n[0], a) : '';
    if (n.length === 1) return t;
    if (n.length === 2 && n[1]) {
        var e = ce(n[1], a);
        return ''.concat(t, ', ').concat(e);
    }
    var r = n.length - 1;
    return ''.concat(t, ' (+').concat(r, ')');
}
function tr(n, a) {
    var t = a.hour,
        e = t === void 0 ? 0 : t,
        r = a.minute,
        o = r === void 0 ? 0 : r,
        i = a.second,
        s = i === void 0 ? 0 : i;
    return _t(xt(Mt(n, s), o), e);
}
function Rs(n) {
    return yr(n);
}
function Ys(n, a) {
    return $(n, 'ddd', a);
}
function Ct(n) {
    return Be(n);
}
function Ne(n, a, t) {
    var e = tt(a || _r());
    return Se(n, { locale: e, weekStartsOn: t });
}
function Ce(n) {
    return Pn(n);
}
function st(n) {
    return Ut(n);
}
function qr(n) {
    return cr(n);
}
function Kr() {
    return Be(j());
}
function Ur(n) {
    return Cn(n);
}
function Is(n) {
    return Ga(n);
}
function Ls(n) {
    return Sn(n);
}
function me(n, a) {
    return n && a ? Xi(n, a) : !n && !a;
}
function ne(n, a) {
    return n && a ? Ui(n, a) : !n && !a;
}
function Ht(n, a) {
    return n && a ? $i(n, a) : !n && !a;
}
function W(n, a) {
    return n && a ? $a(n, a) : !n && !a;
}
function Le(n, a) {
    return n && a ? Go(n, a) : !n && !a;
}
function ct(n, a, t) {
    var e,
        r = Be(a),
        o = Cn(t);
    try {
        e = ut(n, { start: r, end: o });
    } catch {
        e = !1;
    }
    return e;
}
function _r() {
    var n = Hn();
    return n.__localeId__;
}
function tt(n) {
    if (typeof n == 'string') {
        var a = Hn();
        return a.__localeData__ ? a.__localeData__[n] : void 0;
    } else return n;
}
function Fs(n, a, t) {
    return a($(n, 'EEEE', t));
}
function As(n, a) {
    return $(n, 'EEEEEE', a);
}
function Ws(n, a) {
    return $(n, 'EEE', a);
}
function xr(n, a) {
    return $(le(j(), n), 'LLLL', a);
}
function Bn(n, a) {
    return $(le(j(), n), 'LLL', a);
}
function Hs(n, a) {
    return $(qe(j(), n), 'QQQ', a);
}
function ue(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.maxDate,
        o = t.excludeDates,
        i = t.excludeDateIntervals,
        s = t.includeDates,
        c = t.includeDateIntervals,
        l = t.filterDate;
    return (
        ht(n, { minDate: e, maxDate: r }) ||
        (o &&
            o.some(function (u) {
                return u instanceof Date ? W(n, u) : W(n, u.date);
            })) ||
        (i &&
            i.some(function (u) {
                var d = u.start,
                    f = u.end;
                return ut(n, { start: d, end: f });
            })) ||
        (s &&
            !s.some(function (u) {
                return W(n, u);
            })) ||
        (c &&
            !c.some(function (u) {
                var d = u.start,
                    f = u.end;
                return ut(n, { start: d, end: f });
            })) ||
        (l && !l(j(n))) ||
        !1
    );
}
function Mr(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.excludeDates,
        r = t.excludeDateIntervals;
    return r && r.length > 0
        ? r.some(function (o) {
              var i = o.start,
                  s = o.end;
              return ut(n, { start: i, end: s });
          })
        : (e &&
              e.some(function (o) {
                  var i;
                  return o instanceof Date
                      ? W(n, o)
                      : W(
                            n,
                            (i = o.date) !== null && i !== void 0
                                ? i
                                : new Date(),
                        );
              })) ||
              !1;
}
function Qn(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.maxDate,
        o = t.excludeDates,
        i = t.includeDates,
        s = t.filterDate;
    return (
        ht(n, { minDate: e ? Pn(e) : void 0, maxDate: r ? Sn(r) : void 0 }) ||
        (o == null
            ? void 0
            : o.some(function (c) {
                  return ne(n, c instanceof Date ? c : c.date);
              })) ||
        (i &&
            !i.some(function (c) {
                return ne(n, c);
            })) ||
        (s && !s(j(n))) ||
        !1
    );
}
function gt(n, a, t, e) {
    var r = R(n),
        o = oe(n),
        i = R(a),
        s = oe(a),
        c = R(e);
    return r === i && r === c
        ? o <= t && t <= s
        : r < i
          ? (c === r && o <= t) || (c === i && s >= t) || (c < i && c > r)
          : !1;
}
function Bs(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.maxDate,
        o = t.excludeDates,
        i = t.includeDates;
    return (
        ht(n, { minDate: e, maxDate: r }) ||
        (o &&
            o.some(function (s) {
                return ne(s instanceof Date ? s : s.date, n);
            })) ||
        (i &&
            !i.some(function (s) {
                return ne(s, n);
            })) ||
        !1
    );
}
function wt(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.maxDate,
        o = t.excludeDates,
        i = t.includeDates,
        s = t.filterDate;
    return (
        ht(n, { minDate: e, maxDate: r }) ||
        (o == null
            ? void 0
            : o.some(function (c) {
                  return Ht(n, c instanceof Date ? c : c.date);
              })) ||
        (i &&
            !i.some(function (c) {
                return Ht(n, c);
            })) ||
        (s && !s(j(n))) ||
        !1
    );
}
function yt(n, a, t) {
    if (!a || !t || !Yt(a) || !Yt(t)) return !1;
    var e = R(a),
        r = R(t);
    return e <= n && r >= n;
}
function St(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.maxDate,
        o = t.excludeDates,
        i = t.includeDates,
        s = t.filterDate,
        c = new Date(n, 0, 1);
    return (
        ht(c, { minDate: e ? Ut(e) : void 0, maxDate: r ? En(r) : void 0 }) ||
        (o == null
            ? void 0
            : o.some(function (l) {
                  return me(c, l instanceof Date ? l : l.date);
              })) ||
        (i &&
            !i.some(function (l) {
                return me(c, l);
            })) ||
        (s && !s(j(c))) ||
        !1
    );
}
function Dt(n, a, t, e) {
    var r = R(n),
        o = Ae(n),
        i = R(a),
        s = Ae(a),
        c = R(e);
    return r === i && r === c
        ? o <= t && t <= s
        : r < i
          ? (c === r && o <= t) || (c === i && s >= t) || (c < i && c > r)
          : !1;
}
function ht(n, a) {
    var t,
        e = a === void 0 ? {} : a,
        r = e.minDate,
        o = e.maxDate;
    return (t = (r && Je(n, r) < 0) || (o && Je(n, o) > 0)) !== null &&
        t !== void 0
        ? t
        : !1;
}
function $r(n, a) {
    return a.some(function (t) {
        return xe(t) === xe(n) && Me(t) === Me(n) && Te(t) === Te(n);
    });
}
function Xr(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.excludeTimes,
        r = t.includeTimes,
        o = t.filterTime;
    return (e && $r(n, e)) || (r && !$r(n, r)) || (o && !o(n)) || !1;
}
function Gr(n, a) {
    var t = a.minTime,
        e = a.maxTime;
    if (!t || !e) throw new Error('Both minTime and maxTime props required');
    var r = j();
    (r = _t(r, xe(n))), (r = xt(r, Me(n))), (r = Mt(r, Te(n)));
    var o = j();
    (o = _t(o, xe(t))), (o = xt(o, Me(t))), (o = Mt(o, Te(t)));
    var i = j();
    (i = _t(i, xe(e))), (i = xt(i, Me(e))), (i = Mt(i, Te(e)));
    var s;
    try {
        s = !ut(r, { start: o, end: i });
    } catch {
        s = !1;
    }
    return s;
}
function zr(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.includeDates,
        o = We(n, 1);
    return (
        (e && It(e, o) > 0) ||
        (r &&
            r.every(function (i) {
                return It(i, o) > 0;
            })) ||
        !1
    );
}
function Zr(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.maxDate,
        r = t.includeDates,
        o = pe(n, 1);
    return (
        (e && It(o, e) > 0) ||
        (r &&
            r.every(function (i) {
                return It(o, i) > 0;
            })) ||
        !1
    );
}
function Qs(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.includeDates,
        o = Ut(n),
        i = An(o);
    return (
        (e && Lt(e, i) > 0) ||
        (r &&
            r.every(function (s) {
                return Lt(s, i) > 0;
            })) ||
        !1
    );
}
function js(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.maxDate,
        r = t.includeDates,
        o = En(n),
        i = wr(o, 1);
    return (
        (e && Lt(i, e) > 0) ||
        (r &&
            r.every(function (s) {
                return Lt(i, s) > 0;
            })) ||
        !1
    );
}
function Jr(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.includeDates,
        o = et(n, 1);
    return (
        (e && Ft(e, o) > 0) ||
        (r &&
            r.every(function (i) {
                return Ft(i, o) > 0;
            })) ||
        !1
    );
}
function Vs(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.minDate,
        r = t.yearItemNumber,
        o = r === void 0 ? pt : r,
        i = st(et(n, o)),
        s = Oe(i, o).endPeriod,
        c = e && R(e);
    return (c && c > s) || !1;
}
function en(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.maxDate,
        r = t.includeDates,
        o = ke(n, 1);
    return (
        (e && Ft(o, e) > 0) ||
        (r &&
            r.every(function (i) {
                return Ft(o, i) > 0;
            })) ||
        !1
    );
}
function qs(n, a) {
    var t = a === void 0 ? {} : a,
        e = t.maxDate,
        r = t.yearItemNumber,
        o = r === void 0 ? pt : r,
        i = ke(n, o),
        s = Oe(i, o).startPeriod,
        c = e && R(e);
    return (c && c < s) || !1;
}
function jn(n) {
    var a = n.minDate,
        t = n.includeDates;
    if (t && a) {
        var e = t.filter(function (r) {
            return Je(r, a) >= 0;
        });
        return Yr(e);
    } else return t ? Yr(t) : a;
}
function Vn(n) {
    var a = n.maxDate,
        t = n.includeDates;
    if (t && a) {
        var e = t.filter(function (r) {
            return Je(r, a) <= 0;
        });
        return Rr(e);
    } else return t ? Rr(t) : a;
}
function tn(n, a) {
    var t;
    n === void 0 && (n = []),
        a === void 0 && (a = 'react-datepicker__day--highlighted');
    for (var e = new Map(), r = 0, o = n.length; r < o; r++) {
        var i = n[r];
        if (_e(i)) {
            var s = $(i, 'MM.dd.yyyy'),
                c = e.get(s) || [];
            c.includes(a) || (c.push(a), e.set(s, c));
        } else if (typeof i == 'object') {
            var l = Object.keys(i),
                u = (t = l[0]) !== null && t !== void 0 ? t : '',
                d = i[u];
            if (typeof u == 'string' && Array.isArray(d))
                for (var f = 0, p = d.length; f < p; f++) {
                    var h = d[f];
                    if (h) {
                        var s = $(h, 'MM.dd.yyyy'),
                            c = e.get(s) || [];
                        c.includes(u) || (c.push(u), e.set(s, c));
                    }
                }
        }
    }
    return e;
}
function Ks(n, a) {
    return n.length !== a.length
        ? !1
        : n.every(function (t, e) {
              return t === a[e];
          });
}
function Us(n, a) {
    n === void 0 && (n = []),
        a === void 0 && (a = 'react-datepicker__day--holidays');
    var t = new Map();
    return (
        n.forEach(function (e) {
            var r = e.date,
                o = e.holidayName;
            if (_e(r)) {
                var i = $(r, 'MM.dd.yyyy'),
                    s = t.get(i) || { className: '', holidayNames: [] };
                if (
                    !(
                        'className' in s &&
                        s.className === a &&
                        Ks(s.holidayNames, [o])
                    )
                ) {
                    s.className = a;
                    var c = s.holidayNames;
                    (s.holidayNames = c ? we(we([], c, !0), [o], !1) : [o]),
                        t.set(i, s);
                }
            }
        }),
        t
    );
}
function $s(n, a, t, e, r) {
    for (var o = r.length, i = [], s = 0; s < o; s++) {
        var c = n,
            l = r[s];
        l && ((c = Va(c, xe(l))), (c = sr(c, Me(l))), (c = Ua(c, Te(l))));
        var u = sr(n, (t + 1) * e);
        Ye(c, a) && Qe(c, u) && l != null && i.push(l);
    }
    return i;
}
function rn(n) {
    return n < 10 ? '0'.concat(n) : ''.concat(n);
}
function Oe(n, a) {
    a === void 0 && (a = pt);
    var t = Math.ceil(R(n) / a) * a,
        e = t - (a - 1);
    return { startPeriod: e, endPeriod: t };
}
function Xs(n) {
    var a = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
        t = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 24);
    return Math.round((+t - +a) / 36e5);
}
function nn(n) {
    var a = n.getSeconds(),
        t = n.getMilliseconds();
    return C(n.getTime() - a * 1e3 - t);
}
function Gs(n, a) {
    return nn(n).getTime() === nn(a).getTime();
}
function an(n) {
    if (!_e(n)) throw new Error('Invalid date');
    var a = new Date(n);
    return a.setHours(0, 0, 0, 0), a;
}
function on(n, a) {
    if (!_e(n) || !_e(a)) throw new Error('Invalid date received');
    var t = an(n),
        e = an(a);
    return Qe(t, e);
}
function qn(n) {
    return n.key === b.Space;
}
var zs = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.inputRef = m.createRef()),
                (e.onTimeChange = function (r) {
                    var o, i;
                    e.setState({ time: r });
                    var s = e.props.date,
                        c = s instanceof Date && !isNaN(+s),
                        l = c ? s : new Date();
                    if (r != null && r.includes(':')) {
                        var u = r.split(':'),
                            d = u[0],
                            f = u[1];
                        l.setHours(Number(d)), l.setMinutes(Number(f));
                    }
                    (i = (o = e.props).onChange) === null ||
                        i === void 0 ||
                        i.call(o, l);
                }),
                (e.renderTimeInput = function () {
                    var r = e.state.time,
                        o = e.props,
                        i = o.date,
                        s = o.timeString,
                        c = o.customTimeInput;
                    return c
                        ? y.cloneElement(c, {
                              date: i,
                              value: r,
                              onChange: e.onTimeChange,
                          })
                        : m.createElement('input', {
                              type: 'time',
                              className: 'react-datepicker-time__input',
                              placeholder: 'Time',
                              name: 'time-input',
                              ref: e.inputRef,
                              onClick: function () {
                                  var l;
                                  (l = e.inputRef.current) === null ||
                                      l === void 0 ||
                                      l.focus();
                              },
                              required: !0,
                              value: r,
                              onChange: function (l) {
                                  e.onTimeChange(l.target.value || s);
                              },
                          });
                }),
                (e.state = { time: e.props.timeString }),
                e
            );
        }
        return (
            (a.getDerivedStateFromProps = function (t, e) {
                return t.timeString !== e.time ? { time: t.timeString } : null;
            }),
            (a.prototype.render = function () {
                return m.createElement(
                    'div',
                    { className: 'react-datepicker__input-time-container' },
                    m.createElement(
                        'div',
                        { className: 'react-datepicker-time__caption' },
                        this.props.timeInputLabel,
                    ),
                    m.createElement(
                        'div',
                        { className: 'react-datepicker-time__input-container' },
                        m.createElement(
                            'div',
                            { className: 'react-datepicker-time__input' },
                            this.renderTimeInput(),
                        ),
                    ),
                );
            }),
            a
        );
    })(y.Component),
    Zs = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.dayEl = y.createRef()),
                (t.handleClick = function (e) {
                    !t.isDisabled() && t.props.onClick && t.props.onClick(e);
                }),
                (t.handleMouseEnter = function (e) {
                    !t.isDisabled() &&
                        t.props.onMouseEnter &&
                        t.props.onMouseEnter(e);
                }),
                (t.handleOnKeyDown = function (e) {
                    var r,
                        o,
                        i = e.key;
                    i === b.Space && (e.preventDefault(), (e.key = b.Enter)),
                        (o = (r = t.props).handleOnKeyDown) === null ||
                            o === void 0 ||
                            o.call(r, e);
                }),
                (t.isSameDay = function (e) {
                    return W(t.props.day, e);
                }),
                (t.isKeyboardSelected = function () {
                    var e;
                    if (t.props.disabledKeyboardNavigation) return !1;
                    var r = t.props.selectsMultiple
                            ? (e = t.props.selectedDates) === null ||
                              e === void 0
                                ? void 0
                                : e.some(function (i) {
                                      return t.isSameDayOrWeek(i);
                                  })
                            : t.isSameDayOrWeek(t.props.selected),
                        o =
                            t.props.preSelection &&
                            t.isDisabled(t.props.preSelection);
                    return !r && t.isSameDayOrWeek(t.props.preSelection) && !o;
                }),
                (t.isDisabled = function (e) {
                    return (
                        e === void 0 && (e = t.props.day),
                        ue(e, {
                            minDate: t.props.minDate,
                            maxDate: t.props.maxDate,
                            excludeDates: t.props.excludeDates,
                            excludeDateIntervals: t.props.excludeDateIntervals,
                            includeDateIntervals: t.props.includeDateIntervals,
                            includeDates: t.props.includeDates,
                            filterDate: t.props.filterDate,
                        })
                    );
                }),
                (t.isExcluded = function () {
                    return Mr(t.props.day, {
                        excludeDates: t.props.excludeDates,
                        excludeDateIntervals: t.props.excludeDateIntervals,
                    });
                }),
                (t.isStartOfWeek = function () {
                    return W(
                        t.props.day,
                        Ne(
                            t.props.day,
                            t.props.locale,
                            t.props.calendarStartDay,
                        ),
                    );
                }),
                (t.isSameWeek = function (e) {
                    return (
                        t.props.showWeekPicker &&
                        W(
                            e,
                            Ne(
                                t.props.day,
                                t.props.locale,
                                t.props.calendarStartDay,
                            ),
                        )
                    );
                }),
                (t.isSameDayOrWeek = function (e) {
                    return t.isSameDay(e) || t.isSameWeek(e);
                }),
                (t.getHighLightedClass = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.highlightDates;
                    if (!o) return !1;
                    var i = $(r, 'MM.dd.yyyy');
                    return o.get(i);
                }),
                (t.getHolidaysClass = function () {
                    var e,
                        r = t.props,
                        o = r.day,
                        i = r.holidays;
                    if (!i) return [void 0];
                    var s = $(o, 'MM.dd.yyyy');
                    return i.has(s)
                        ? [
                              (e = i.get(s)) === null || e === void 0
                                  ? void 0
                                  : e.className,
                          ]
                        : [void 0];
                }),
                (t.isInRange = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.startDate,
                        i = e.endDate;
                    return !o || !i ? !1 : ct(r, o, i);
                }),
                (t.isInSelectingRange = function () {
                    var e,
                        r = t.props,
                        o = r.day,
                        i = r.selectsStart,
                        s = r.selectsEnd,
                        c = r.selectsRange,
                        l = r.selectsDisabledDaysInRange,
                        u = r.startDate,
                        d = r.endDate,
                        f =
                            (e = t.props.selectingDate) !== null && e !== void 0
                                ? e
                                : t.props.preSelection;
                    return !(i || s || c) || !f || (!l && t.isDisabled())
                        ? !1
                        : i && d && (Qe(f, d) || Le(f, d))
                          ? ct(o, f, d)
                          : (s && u && !d && (Ye(f, u) || Le(f, u))) ||
                              (c && u && !d && (Ye(f, u) || Le(f, u)))
                            ? ct(o, u, f)
                            : !1;
                }),
                (t.isSelectingRangeStart = function () {
                    var e;
                    if (!t.isInSelectingRange()) return !1;
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.selectsStart,
                        c =
                            (e = t.props.selectingDate) !== null && e !== void 0
                                ? e
                                : t.props.preSelection;
                    return s ? W(o, c) : W(o, i);
                }),
                (t.isSelectingRangeEnd = function () {
                    var e;
                    if (!t.isInSelectingRange()) return !1;
                    var r = t.props,
                        o = r.day,
                        i = r.endDate,
                        s = r.selectsEnd,
                        c = r.selectsRange,
                        l =
                            (e = t.props.selectingDate) !== null && e !== void 0
                                ? e
                                : t.props.preSelection;
                    return s || c ? W(o, l) : W(o, i);
                }),
                (t.isRangeStart = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.startDate,
                        i = e.endDate;
                    return !o || !i ? !1 : W(o, r);
                }),
                (t.isRangeEnd = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.startDate,
                        i = e.endDate;
                    return !o || !i ? !1 : W(i, r);
                }),
                (t.isWeekend = function () {
                    var e = Ko(t.props.day);
                    return e === 0 || e === 6;
                }),
                (t.isAfterMonth = function () {
                    return (
                        t.props.month !== void 0 &&
                        (t.props.month + 1) % 12 === oe(t.props.day)
                    );
                }),
                (t.isBeforeMonth = function () {
                    return (
                        t.props.month !== void 0 &&
                        (oe(t.props.day) + 1) % 12 === t.props.month
                    );
                }),
                (t.isCurrentDay = function () {
                    return t.isSameDay(j());
                }),
                (t.isSelected = function () {
                    var e;
                    return t.props.selectsMultiple
                        ? (e = t.props.selectedDates) === null || e === void 0
                            ? void 0
                            : e.some(function (r) {
                                  return t.isSameDayOrWeek(r);
                              })
                        : t.isSameDayOrWeek(t.props.selected);
                }),
                (t.getClassNames = function (e) {
                    var r = t.props.dayClassName
                        ? t.props.dayClassName(e)
                        : void 0;
                    return re(
                        'react-datepicker__day',
                        r,
                        'react-datepicker__day--' + Ys(t.props.day),
                        {
                            'react-datepicker__day--disabled': t.isDisabled(),
                            'react-datepicker__day--excluded': t.isExcluded(),
                            'react-datepicker__day--selected': t.isSelected(),
                            'react-datepicker__day--keyboard-selected':
                                t.isKeyboardSelected(),
                            'react-datepicker__day--range-start':
                                t.isRangeStart(),
                            'react-datepicker__day--range-end': t.isRangeEnd(),
                            'react-datepicker__day--in-range': t.isInRange(),
                            'react-datepicker__day--in-selecting-range':
                                t.isInSelectingRange(),
                            'react-datepicker__day--selecting-range-start':
                                t.isSelectingRangeStart(),
                            'react-datepicker__day--selecting-range-end':
                                t.isSelectingRangeEnd(),
                            'react-datepicker__day--today': t.isCurrentDay(),
                            'react-datepicker__day--weekend': t.isWeekend(),
                            'react-datepicker__day--outside-month':
                                t.isAfterMonth() || t.isBeforeMonth(),
                        },
                        t.getHighLightedClass(),
                        t.getHolidaysClass(),
                    );
                }),
                (t.getAriaLabel = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.ariaLabelPrefixWhenEnabled,
                        i = o === void 0 ? 'Choose' : o,
                        s = e.ariaLabelPrefixWhenDisabled,
                        c = s === void 0 ? 'Not available' : s,
                        l = t.isDisabled() || t.isExcluded() ? c : i;
                    return ''
                        .concat(l, ' ')
                        .concat($(r, 'PPPP', t.props.locale));
                }),
                (t.getTitle = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.holidays,
                        i = o === void 0 ? new Map() : o,
                        s = e.excludeDates,
                        c = $(r, 'MM.dd.yyyy'),
                        l = [];
                    return (
                        i.has(c) && l.push.apply(l, i.get(c).holidayNames),
                        t.isExcluded() &&
                            l.push(
                                s == null
                                    ? void 0
                                    : s
                                          .filter(function (u) {
                                              return u instanceof Date
                                                  ? W(u, r)
                                                  : W(
                                                        u == null
                                                            ? void 0
                                                            : u.date,
                                                        r,
                                                    );
                                          })
                                          .map(function (u) {
                                              if (!(u instanceof Date))
                                                  return u == null
                                                      ? void 0
                                                      : u.message;
                                          }),
                            ),
                        l.join(', ')
                    );
                }),
                (t.getTabIndex = function () {
                    var e = t.props.selected,
                        r = t.props.preSelection,
                        o =
                            !(
                                t.props.showWeekPicker &&
                                (t.props.showWeekNumber || !t.isStartOfWeek())
                            ) &&
                            (t.isKeyboardSelected() ||
                                (t.isSameDay(e) && W(r, e)))
                                ? 0
                                : -1;
                    return o;
                }),
                (t.handleFocusDay = function () {
                    var e;
                    t.shouldFocusDay() &&
                        ((e = t.dayEl.current) === null ||
                            e === void 0 ||
                            e.focus({ preventScroll: !0 }));
                }),
                (t.renderDayContents = function () {
                    return (t.props.monthShowsDuplicateDaysEnd &&
                        t.isAfterMonth()) ||
                        (t.props.monthShowsDuplicateDaysStart &&
                            t.isBeforeMonth())
                        ? null
                        : t.props.renderDayContents
                          ? t.props.renderDayContents(
                                Br(t.props.day),
                                t.props.day,
                            )
                          : Br(t.props.day);
                }),
                (t.render = function () {
                    return m.createElement(
                        'div',
                        {
                            ref: t.dayEl,
                            className: t.getClassNames(t.props.day),
                            onKeyDown: t.handleOnKeyDown,
                            onClick: t.handleClick,
                            onMouseEnter: t.props.usePointerEvent
                                ? void 0
                                : t.handleMouseEnter,
                            onPointerEnter: t.props.usePointerEvent
                                ? t.handleMouseEnter
                                : void 0,
                            tabIndex: t.getTabIndex(),
                            'aria-label': t.getAriaLabel(),
                            role: 'option',
                            title: t.getTitle(),
                            'aria-disabled': t.isDisabled(),
                            'aria-current': t.isCurrentDay() ? 'date' : void 0,
                            'aria-selected': t.isSelected() || t.isInRange(),
                        },
                        t.renderDayContents(),
                        t.getTitle() !== '' &&
                            m.createElement(
                                'span',
                                { className: 'overlay' },
                                t.getTitle(),
                            ),
                    );
                }),
                t
            );
        }
        return (
            (a.prototype.componentDidMount = function () {
                this.handleFocusDay();
            }),
            (a.prototype.componentDidUpdate = function () {
                this.handleFocusDay();
            }),
            (a.prototype.shouldFocusDay = function () {
                var t = !1;
                return (
                    this.getTabIndex() === 0 &&
                        this.isSameDay(this.props.preSelection) &&
                        ((!document.activeElement ||
                            document.activeElement === document.body) &&
                            (t = !0),
                        this.props.inline &&
                            !this.props.shouldFocusDayInline &&
                            (t = !1),
                        this.isDayActiveElement() && (t = !0),
                        this.isDuplicateDay() && (t = !1)),
                    t
                );
            }),
            (a.prototype.isDayActiveElement = function () {
                var t, e, r;
                return (
                    ((e =
                        (t = this.props.containerRef) === null || t === void 0
                            ? void 0
                            : t.current) === null || e === void 0
                        ? void 0
                        : e.contains(document.activeElement)) &&
                    ((r = document.activeElement) === null || r === void 0
                        ? void 0
                        : r.classList.contains('react-datepicker__day'))
                );
            }),
            (a.prototype.isDuplicateDay = function () {
                return (
                    (this.props.monthShowsDuplicateDaysEnd &&
                        this.isAfterMonth()) ||
                    (this.props.monthShowsDuplicateDaysStart &&
                        this.isBeforeMonth())
                );
            }),
            a
        );
    })(y.Component),
    Js = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.weekNumberEl = y.createRef()),
                (t.handleClick = function (e) {
                    t.props.onClick && t.props.onClick(e);
                }),
                (t.handleOnKeyDown = function (e) {
                    var r,
                        o,
                        i = e.key;
                    i === b.Space && (e.preventDefault(), (e.key = b.Enter)),
                        (o = (r = t.props).handleOnKeyDown) === null ||
                            o === void 0 ||
                            o.call(r, e);
                }),
                (t.isKeyboardSelected = function () {
                    return (
                        !t.props.disabledKeyboardNavigation &&
                        !W(t.props.date, t.props.selected) &&
                        W(t.props.date, t.props.preSelection)
                    );
                }),
                (t.getTabIndex = function () {
                    return t.props.showWeekPicker &&
                        t.props.showWeekNumber &&
                        (t.isKeyboardSelected() ||
                            (W(t.props.date, t.props.selected) &&
                                W(t.props.preSelection, t.props.selected)))
                        ? 0
                        : -1;
                }),
                (t.handleFocusWeekNumber = function (e) {
                    var r = !1;
                    t.getTabIndex() === 0 &&
                        !(e != null && e.isInputFocused) &&
                        W(t.props.date, t.props.preSelection) &&
                        ((!document.activeElement ||
                            document.activeElement === document.body) &&
                            (r = !0),
                        t.props.inline &&
                            !t.props.shouldFocusDayInline &&
                            (r = !1),
                        t.props.containerRef &&
                            t.props.containerRef.current &&
                            t.props.containerRef.current.contains(
                                document.activeElement,
                            ) &&
                            document.activeElement &&
                            document.activeElement.classList.contains(
                                'react-datepicker__week-number',
                            ) &&
                            (r = !0)),
                        r &&
                            t.weekNumberEl.current &&
                            t.weekNumberEl.current.focus({ preventScroll: !0 });
                }),
                t
            );
        }
        return (
            Object.defineProperty(a, 'defaultProps', {
                get: function () {
                    return { ariaLabelPrefix: 'week ' };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (a.prototype.componentDidMount = function () {
                this.handleFocusWeekNumber();
            }),
            (a.prototype.componentDidUpdate = function (t) {
                this.handleFocusWeekNumber(t);
            }),
            (a.prototype.render = function () {
                var t = this.props,
                    e = t.weekNumber,
                    r = t.isWeekDisabled,
                    o = t.ariaLabelPrefix,
                    i = o === void 0 ? a.defaultProps.ariaLabelPrefix : o,
                    s = t.onClick,
                    c = {
                        'react-datepicker__week-number': !0,
                        'react-datepicker__week-number--clickable': !!s && !r,
                        'react-datepicker__week-number--selected':
                            !!s && W(this.props.date, this.props.selected),
                    };
                return m.createElement(
                    'div',
                    {
                        ref: this.weekNumberEl,
                        className: re(c),
                        'aria-label': ''
                            .concat(i, ' ')
                            .concat(this.props.weekNumber),
                        onClick: this.handleClick,
                        onKeyDown: this.handleOnKeyDown,
                        tabIndex: this.getTabIndex(),
                    },
                    e,
                );
            }),
            a
        );
    })(y.Component),
    ec = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.isDisabled = function (e) {
                    return ue(e, {
                        minDate: t.props.minDate,
                        maxDate: t.props.maxDate,
                        excludeDates: t.props.excludeDates,
                        excludeDateIntervals: t.props.excludeDateIntervals,
                        includeDateIntervals: t.props.includeDateIntervals,
                        includeDates: t.props.includeDates,
                        filterDate: t.props.filterDate,
                    });
                }),
                (t.handleDayClick = function (e, r) {
                    t.props.onDayClick && t.props.onDayClick(e, r);
                }),
                (t.handleDayMouseEnter = function (e) {
                    t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
                }),
                (t.handleWeekClick = function (e, r, o) {
                    for (var i, s, c, l = new Date(e), u = 0; u < 7; u++) {
                        var d = new Date(e);
                        d.setDate(d.getDate() + u);
                        var f = !t.isDisabled(d);
                        if (f) {
                            l = d;
                            break;
                        }
                    }
                    typeof t.props.onWeekSelect == 'function' &&
                        t.props.onWeekSelect(l, r, o),
                        t.props.showWeekPicker && t.handleDayClick(l, o),
                        ((i = t.props.shouldCloseOnSelect) !== null &&
                        i !== void 0
                            ? i
                            : a.defaultProps.shouldCloseOnSelect) &&
                            ((c = (s = t.props).setOpen) === null ||
                                c === void 0 ||
                                c.call(s, !1));
                }),
                (t.formatWeekNumber = function (e) {
                    return t.props.formatWeekNumber
                        ? t.props.formatWeekNumber(e)
                        : Rs(e);
                }),
                (t.isWeekDisabled = function () {
                    for (
                        var e = t.startOfWeek(), r = fe(e, 6), o = new Date(e);
                        o <= r;

                    ) {
                        if (!t.isDisabled(o)) return !1;
                        o = fe(o, 1);
                    }
                    return !0;
                }),
                (t.renderDays = function () {
                    var e = t.startOfWeek(),
                        r = [],
                        o = t.formatWeekNumber(e);
                    if (t.props.showWeekNumber) {
                        var i =
                            t.props.onWeekSelect || t.props.showWeekPicker
                                ? t.handleWeekClick.bind(t, e, o)
                                : void 0;
                        r.push(
                            m.createElement(
                                Js,
                                H({ key: 'W' }, a.defaultProps, t.props, {
                                    weekNumber: o,
                                    isWeekDisabled: t.isWeekDisabled(),
                                    date: e,
                                    onClick: i,
                                }),
                            ),
                        );
                    }
                    return r.concat(
                        [0, 1, 2, 3, 4, 5, 6].map(function (s) {
                            var c = fe(e, s);
                            return m.createElement(
                                Zs,
                                H({}, a.defaultProps, t.props, {
                                    ariaLabelPrefixWhenEnabled:
                                        t.props.chooseDayAriaLabelPrefix,
                                    ariaLabelPrefixWhenDisabled:
                                        t.props.disabledDayAriaLabelPrefix,
                                    key: c.valueOf(),
                                    day: c,
                                    onClick: t.handleDayClick.bind(t, c),
                                    onMouseEnter: t.handleDayMouseEnter.bind(
                                        t,
                                        c,
                                    ),
                                }),
                            );
                        }),
                    );
                }),
                (t.startOfWeek = function () {
                    return Ne(
                        t.props.day,
                        t.props.locale,
                        t.props.calendarStartDay,
                    );
                }),
                (t.isKeyboardSelected = function () {
                    return (
                        !t.props.disabledKeyboardNavigation &&
                        !W(t.startOfWeek(), t.props.selected) &&
                        W(t.startOfWeek(), t.props.preSelection)
                    );
                }),
                t
            );
        }
        return (
            Object.defineProperty(a, 'defaultProps', {
                get: function () {
                    return { shouldCloseOnSelect: !0 };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (a.prototype.render = function () {
                var t = {
                    'react-datepicker__week': !0,
                    'react-datepicker__week--selected': W(
                        this.startOfWeek(),
                        this.props.selected,
                    ),
                    'react-datepicker__week--keyboard-selected':
                        this.isKeyboardSelected(),
                };
                return m.createElement(
                    'div',
                    { className: re(t) },
                    this.renderDays(),
                );
            }),
            a
        );
    })(y.Component),
    it,
    tc = 6,
    $e = {
        TWO_COLUMNS: 'two_columns',
        THREE_COLUMNS: 'three_columns',
        FOUR_COLUMNS: 'four_columns',
    },
    rr =
        ((it = {}),
        (it[$e.TWO_COLUMNS] = {
            grid: [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7],
                [8, 9],
                [10, 11],
            ],
            verticalNavigationOffset: 2,
        }),
        (it[$e.THREE_COLUMNS] = {
            grid: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 10, 11],
            ],
            verticalNavigationOffset: 3,
        }),
        (it[$e.FOUR_COLUMNS] = {
            grid: [
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
            ],
            verticalNavigationOffset: 4,
        }),
        it),
    bt = 1;
function sn(n, a) {
    return n ? $e.FOUR_COLUMNS : a ? $e.TWO_COLUMNS : $e.THREE_COLUMNS;
}
var rc = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.MONTH_REFS = we([], Array(12), !0).map(function () {
                    return y.createRef();
                })),
                (t.QUARTER_REFS = we([], Array(4), !0).map(function () {
                    return y.createRef();
                })),
                (t.isDisabled = function (e) {
                    return ue(e, {
                        minDate: t.props.minDate,
                        maxDate: t.props.maxDate,
                        excludeDates: t.props.excludeDates,
                        excludeDateIntervals: t.props.excludeDateIntervals,
                        includeDateIntervals: t.props.includeDateIntervals,
                        includeDates: t.props.includeDates,
                        filterDate: t.props.filterDate,
                    });
                }),
                (t.isExcluded = function (e) {
                    return Mr(e, {
                        excludeDates: t.props.excludeDates,
                        excludeDateIntervals: t.props.excludeDateIntervals,
                    });
                }),
                (t.handleDayClick = function (e, r) {
                    var o, i;
                    (i = (o = t.props).onDayClick) === null ||
                        i === void 0 ||
                        i.call(o, e, r, t.props.orderInDisplay);
                }),
                (t.handleDayMouseEnter = function (e) {
                    var r, o;
                    (o = (r = t.props).onDayMouseEnter) === null ||
                        o === void 0 ||
                        o.call(r, e);
                }),
                (t.handleMouseLeave = function () {
                    var e, r;
                    (r = (e = t.props).onMouseLeave) === null ||
                        r === void 0 ||
                        r.call(e);
                }),
                (t.isRangeStartMonth = function (e) {
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.endDate;
                    return !i || !s ? !1 : ne(le(o, e), i);
                }),
                (t.isRangeStartQuarter = function (e) {
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.endDate;
                    return !i || !s ? !1 : Ht(qe(o, e), i);
                }),
                (t.isRangeEndMonth = function (e) {
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.endDate;
                    return !i || !s ? !1 : ne(le(o, e), s);
                }),
                (t.isRangeEndQuarter = function (e) {
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.endDate;
                    return !i || !s ? !1 : Ht(qe(o, e), s);
                }),
                (t.isInSelectingRangeMonth = function (e) {
                    var r,
                        o = t.props,
                        i = o.day,
                        s = o.selectsStart,
                        c = o.selectsEnd,
                        l = o.selectsRange,
                        u = o.startDate,
                        d = o.endDate,
                        f =
                            (r = t.props.selectingDate) !== null && r !== void 0
                                ? r
                                : t.props.preSelection;
                    return !(s || c || l) || !f
                        ? !1
                        : s && d
                          ? gt(f, d, e, i)
                          : (c && u) || (l && u && !d)
                            ? gt(u, f, e, i)
                            : !1;
                }),
                (t.isSelectingMonthRangeStart = function (e) {
                    var r;
                    if (!t.isInSelectingRangeMonth(e)) return !1;
                    var o = t.props,
                        i = o.day,
                        s = o.startDate,
                        c = o.selectsStart,
                        l = le(i, e),
                        u =
                            (r = t.props.selectingDate) !== null && r !== void 0
                                ? r
                                : t.props.preSelection;
                    return c ? ne(l, u) : ne(l, s);
                }),
                (t.isSelectingMonthRangeEnd = function (e) {
                    var r;
                    if (!t.isInSelectingRangeMonth(e)) return !1;
                    var o = t.props,
                        i = o.day,
                        s = o.endDate,
                        c = o.selectsEnd,
                        l = o.selectsRange,
                        u = le(i, e),
                        d =
                            (r = t.props.selectingDate) !== null && r !== void 0
                                ? r
                                : t.props.preSelection;
                    return c || l ? ne(u, d) : ne(u, s);
                }),
                (t.isInSelectingRangeQuarter = function (e) {
                    var r,
                        o = t.props,
                        i = o.day,
                        s = o.selectsStart,
                        c = o.selectsEnd,
                        l = o.selectsRange,
                        u = o.startDate,
                        d = o.endDate,
                        f =
                            (r = t.props.selectingDate) !== null && r !== void 0
                                ? r
                                : t.props.preSelection;
                    return !(s || c || l) || !f
                        ? !1
                        : s && d
                          ? Dt(f, d, e, i)
                          : (c && u) || (l && u && !d)
                            ? Dt(u, f, e, i)
                            : !1;
                }),
                (t.isWeekInMonth = function (e) {
                    var r = t.props.day,
                        o = fe(e, 6);
                    return ne(e, r) || ne(o, r);
                }),
                (t.isCurrentMonth = function (e, r) {
                    return R(e) === R(j()) && r === oe(j());
                }),
                (t.isCurrentQuarter = function (e, r) {
                    return R(e) === R(j()) && r === Ae(j());
                }),
                (t.isSelectedMonth = function (e, r, o) {
                    return oe(o) === r && R(e) === R(o);
                }),
                (t.isSelectMonthInList = function (e, r, o) {
                    return o.some(function (i) {
                        return t.isSelectedMonth(e, r, i);
                    });
                }),
                (t.isSelectedQuarter = function (e, r, o) {
                    return Ae(e) === r && R(e) === R(o);
                }),
                (t.renderWeeks = function () {
                    for (
                        var e = [],
                            r = t.props.fixedHeight,
                            o = 0,
                            i = !1,
                            s = Ne(
                                Ce(t.props.day),
                                t.props.locale,
                                t.props.calendarStartDay,
                            ),
                            c = function (h) {
                                return t.props.showWeekPicker
                                    ? Ne(
                                          h,
                                          t.props.locale,
                                          t.props.calendarStartDay,
                                      )
                                    : t.props.preSelection;
                            },
                            l = function (h) {
                                return t.props.showWeekPicker
                                    ? Ne(
                                          h,
                                          t.props.locale,
                                          t.props.calendarStartDay,
                                      )
                                    : t.props.selected;
                            },
                            u = t.props.selected ? l(t.props.selected) : void 0,
                            d = t.props.preSelection
                                ? c(t.props.preSelection)
                                : void 0;
                        e.push(
                            m.createElement(
                                ec,
                                H({}, t.props, {
                                    ariaLabelPrefix:
                                        t.props.weekAriaLabelPrefix,
                                    key: o,
                                    day: s,
                                    month: oe(t.props.day),
                                    onDayClick: t.handleDayClick,
                                    onDayMouseEnter: t.handleDayMouseEnter,
                                    selected: u,
                                    preSelection: d,
                                    showWeekNumber: t.props.showWeekNumbers,
                                }),
                            ),
                        ),
                            !i;

                    ) {
                        o++, (s = Rt(s, 1));
                        var f = r && o >= tc,
                            p = !r && !t.isWeekInMonth(s);
                        if (f || p)
                            if (t.props.peekNextMonth) i = !0;
                            else break;
                    }
                    return e;
                }),
                (t.onMonthClick = function (e, r) {
                    var o = t.isMonthDisabledForLabelDate(r),
                        i = o.isDisabled,
                        s = o.labelDate;
                    i || t.handleDayClick(Ce(s), e);
                }),
                (t.onMonthMouseEnter = function (e) {
                    var r = t.isMonthDisabledForLabelDate(e),
                        o = r.isDisabled,
                        i = r.labelDate;
                    o || t.handleDayMouseEnter(Ce(i));
                }),
                (t.handleMonthNavigation = function (e, r) {
                    var o, i, s, c;
                    (i = (o = t.props).setPreSelection) === null ||
                        i === void 0 ||
                        i.call(o, r),
                        (c =
                            (s = t.MONTH_REFS[e]) === null || s === void 0
                                ? void 0
                                : s.current) === null ||
                            c === void 0 ||
                            c.focus();
                }),
                (t.handleKeyboardNavigation = function (e, r, o) {
                    var i,
                        s = t.props,
                        c = s.selected,
                        l = s.preSelection,
                        u = s.setPreSelection,
                        d = s.minDate,
                        f = s.maxDate,
                        p = s.showFourColumnMonthYearPicker,
                        h = s.showTwoColumnMonthYearPicker;
                    if (l) {
                        var v = sn(p, h),
                            g = t.getVerticalOffset(v),
                            w =
                                (i = rr[v]) === null || i === void 0
                                    ? void 0
                                    : i.grid,
                            k = function (E, _, M) {
                                var O,
                                    Q,
                                    F = _,
                                    K = M;
                                switch (E) {
                                    case b.ArrowRight:
                                        (F = pe(_, bt)),
                                            (K = M === 11 ? 0 : M + bt);
                                        break;
                                    case b.ArrowLeft:
                                        (F = We(_, bt)),
                                            (K = M === 0 ? 11 : M - bt);
                                        break;
                                    case b.ArrowUp:
                                        (F = We(_, g)),
                                            (K =
                                                !(
                                                    (O =
                                                        w == null
                                                            ? void 0
                                                            : w[0]) === null ||
                                                    O === void 0
                                                ) && O.includes(M)
                                                    ? M + 12 - g
                                                    : M - g);
                                        break;
                                    case b.ArrowDown:
                                        (F = pe(_, g)),
                                            (K =
                                                !(
                                                    (Q =
                                                        w == null
                                                            ? void 0
                                                            : w[
                                                                  w.length - 1
                                                              ]) === null ||
                                                    Q === void 0
                                                ) && Q.includes(M)
                                                    ? M - 12 + g
                                                    : M + g);
                                        break;
                                }
                                return {
                                    newCalculatedDate: F,
                                    newCalculatedMonth: K,
                                };
                            },
                            D = function (E, _, M) {
                                for (
                                    var O = 40,
                                        Q = E,
                                        F = !1,
                                        K = 0,
                                        U = k(Q, _, M),
                                        A = U.newCalculatedDate,
                                        T = U.newCalculatedMonth;
                                    !F;

                                ) {
                                    if (K >= O) {
                                        (A = _), (T = M);
                                        break;
                                    }
                                    if (d && A < d) {
                                        Q = b.ArrowRight;
                                        var I = k(Q, A, T);
                                        (A = I.newCalculatedDate),
                                            (T = I.newCalculatedMonth);
                                    }
                                    if (f && A > f) {
                                        Q = b.ArrowLeft;
                                        var I = k(Q, A, T);
                                        (A = I.newCalculatedDate),
                                            (T = I.newCalculatedMonth);
                                    }
                                    if (Bs(A, t.props)) {
                                        var I = k(Q, A, T);
                                        (A = I.newCalculatedDate),
                                            (T = I.newCalculatedMonth);
                                    } else F = !0;
                                    K++;
                                }
                                return {
                                    newCalculatedDate: A,
                                    newCalculatedMonth: T,
                                };
                            };
                        if (r === b.Enter) {
                            t.isMonthDisabled(o) ||
                                (t.onMonthClick(e, o), u == null || u(c));
                            return;
                        }
                        var S = D(r, l, o),
                            P = S.newCalculatedDate,
                            N = S.newCalculatedMonth;
                        switch (r) {
                            case b.ArrowRight:
                            case b.ArrowLeft:
                            case b.ArrowUp:
                            case b.ArrowDown:
                                t.handleMonthNavigation(N, P);
                                break;
                        }
                    }
                }),
                (t.getVerticalOffset = function (e) {
                    var r, o;
                    return (o =
                        (r = rr[e]) === null || r === void 0
                            ? void 0
                            : r.verticalNavigationOffset) !== null &&
                        o !== void 0
                        ? o
                        : 0;
                }),
                (t.onMonthKeyDown = function (e, r) {
                    var o = t.props,
                        i = o.disabledKeyboardNavigation,
                        s = o.handleOnMonthKeyDown,
                        c = e.key;
                    c !== b.Tab && e.preventDefault(),
                        i || t.handleKeyboardNavigation(e, c, r),
                        s && s(e);
                }),
                (t.onQuarterClick = function (e, r) {
                    var o = qe(t.props.day, r);
                    wt(o, t.props) || t.handleDayClick(qr(o), e);
                }),
                (t.onQuarterMouseEnter = function (e) {
                    var r = qe(t.props.day, e);
                    wt(r, t.props) || t.handleDayMouseEnter(qr(r));
                }),
                (t.handleQuarterNavigation = function (e, r) {
                    var o, i, s, c;
                    t.isDisabled(r) ||
                        t.isExcluded(r) ||
                        ((i = (o = t.props).setPreSelection) === null ||
                            i === void 0 ||
                            i.call(o, r),
                        (c =
                            (s = t.QUARTER_REFS[e - 1]) === null || s === void 0
                                ? void 0
                                : s.current) === null ||
                            c === void 0 ||
                            c.focus());
                }),
                (t.onQuarterKeyDown = function (e, r) {
                    var o,
                        i,
                        s = e.key;
                    if (!t.props.disabledKeyboardNavigation)
                        switch (s) {
                            case b.Enter:
                                t.onQuarterClick(e, r),
                                    (i = (o = t.props).setPreSelection) ===
                                        null ||
                                        i === void 0 ||
                                        i.call(o, t.props.selected);
                                break;
                            case b.ArrowRight:
                                if (!t.props.preSelection) break;
                                t.handleQuarterNavigation(
                                    r === 4 ? 1 : r + 1,
                                    wr(t.props.preSelection, 1),
                                );
                                break;
                            case b.ArrowLeft:
                                if (!t.props.preSelection) break;
                                t.handleQuarterNavigation(
                                    r === 1 ? 4 : r - 1,
                                    An(t.props.preSelection),
                                );
                                break;
                        }
                }),
                (t.isMonthDisabledForLabelDate = function (e) {
                    var r,
                        o = t.props,
                        i = o.day,
                        s = o.minDate,
                        c = o.maxDate,
                        l = o.excludeDates,
                        u = o.includeDates,
                        d = le(i, e);
                    return {
                        isDisabled:
                            (r = (s || c || l || u) && Qn(d, t.props)) !==
                                null && r !== void 0
                                ? r
                                : !1,
                        labelDate: d,
                    };
                }),
                (t.isMonthDisabled = function (e) {
                    var r = t.isMonthDisabledForLabelDate(e).isDisabled;
                    return r;
                }),
                (t.getMonthClassNames = function (e) {
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.endDate,
                        c = r.preSelection,
                        l = r.monthClassName,
                        u = l ? l(le(o, e)) : void 0,
                        d = t.getSelection();
                    return re(
                        'react-datepicker__month-text',
                        'react-datepicker__month-'.concat(e),
                        u,
                        {
                            'react-datepicker__month-text--disabled':
                                t.isMonthDisabled(e),
                            'react-datepicker__month-text--selected': d
                                ? t.isSelectMonthInList(o, e, d)
                                : void 0,
                            'react-datepicker__month-text--keyboard-selected':
                                !t.props.disabledKeyboardNavigation &&
                                c &&
                                t.isSelectedMonth(o, e, c) &&
                                !t.isMonthDisabled(e),
                            'react-datepicker__month-text--in-selecting-range':
                                t.isInSelectingRangeMonth(e),
                            'react-datepicker__month-text--in-range':
                                i && s ? gt(i, s, e, o) : void 0,
                            'react-datepicker__month-text--range-start':
                                t.isRangeStartMonth(e),
                            'react-datepicker__month-text--range-end':
                                t.isRangeEndMonth(e),
                            'react-datepicker__month-text--selecting-range-start':
                                t.isSelectingMonthRangeStart(e),
                            'react-datepicker__month-text--selecting-range-end':
                                t.isSelectingMonthRangeEnd(e),
                            'react-datepicker__month-text--today':
                                t.isCurrentMonth(o, e),
                        },
                    );
                }),
                (t.getTabIndex = function (e) {
                    if (t.props.preSelection == null) return '-1';
                    var r = oe(t.props.preSelection),
                        o = t.isMonthDisabledForLabelDate(r).isDisabled,
                        i =
                            e === r &&
                            !(o || t.props.disabledKeyboardNavigation)
                                ? '0'
                                : '-1';
                    return i;
                }),
                (t.getQuarterTabIndex = function (e) {
                    if (t.props.preSelection == null) return '-1';
                    var r = Ae(t.props.preSelection),
                        o = wt(t.props.day, t.props),
                        i =
                            e === r &&
                            !(o || t.props.disabledKeyboardNavigation)
                                ? '0'
                                : '-1';
                    return i;
                }),
                (t.getAriaLabel = function (e) {
                    var r = t.props,
                        o = r.chooseDayAriaLabelPrefix,
                        i = o === void 0 ? 'Choose' : o,
                        s = r.disabledDayAriaLabelPrefix,
                        c = s === void 0 ? 'Not available' : s,
                        l = r.day,
                        u = r.locale,
                        d = le(l, e),
                        f = t.isDisabled(d) || t.isExcluded(d) ? c : i;
                    return ''.concat(f, ' ').concat($(d, 'MMMM yyyy', u));
                }),
                (t.getQuarterClassNames = function (e) {
                    var r = t.props,
                        o = r.day,
                        i = r.startDate,
                        s = r.endDate,
                        c = r.selected,
                        l = r.minDate,
                        u = r.maxDate,
                        d = r.excludeDates,
                        f = r.includeDates,
                        p = r.filterDate,
                        h = r.preSelection,
                        v = r.disabledKeyboardNavigation,
                        g = (l || u || d || f || p) && wt(qe(o, e), t.props);
                    return re(
                        'react-datepicker__quarter-text',
                        'react-datepicker__quarter-'.concat(e),
                        {
                            'react-datepicker__quarter-text--disabled': g,
                            'react-datepicker__quarter-text--selected': c
                                ? t.isSelectedQuarter(o, e, c)
                                : void 0,
                            'react-datepicker__quarter-text--keyboard-selected':
                                !v && h && t.isSelectedQuarter(o, e, h) && !g,
                            'react-datepicker__quarter-text--in-selecting-range':
                                t.isInSelectingRangeQuarter(e),
                            'react-datepicker__quarter-text--in-range':
                                i && s ? Dt(i, s, e, o) : void 0,
                            'react-datepicker__quarter-text--range-start':
                                t.isRangeStartQuarter(e),
                            'react-datepicker__quarter-text--range-end':
                                t.isRangeEndQuarter(e),
                            'react-datepicker__quarter-text--today':
                                t.isCurrentQuarter(o, e),
                        },
                    );
                }),
                (t.getMonthContent = function (e) {
                    var r = t.props,
                        o = r.showFullMonthYearPicker,
                        i = r.renderMonthContent,
                        s = r.locale,
                        c = r.day,
                        l = Bn(e, s),
                        u = xr(e, s);
                    return i ? i(e, l, u, c) : o ? u : l;
                }),
                (t.getQuarterContent = function (e) {
                    var r,
                        o = t.props,
                        i = o.renderQuarterContent,
                        s = o.locale,
                        c = Hs(e, s);
                    return (r = i == null ? void 0 : i(e, c)) !== null &&
                        r !== void 0
                        ? r
                        : c;
                }),
                (t.renderMonths = function () {
                    var e,
                        r = t.props,
                        o = r.showTwoColumnMonthYearPicker,
                        i = r.showFourColumnMonthYearPicker,
                        s = r.day,
                        c = r.selected,
                        l =
                            (e = rr[sn(i, o)]) === null || e === void 0
                                ? void 0
                                : e.grid;
                    return l == null
                        ? void 0
                        : l.map(function (u, d) {
                              return m.createElement(
                                  'div',
                                  {
                                      className:
                                          'react-datepicker__month-wrapper',
                                      key: d,
                                  },
                                  u.map(function (f, p) {
                                      return m.createElement(
                                          'div',
                                          {
                                              ref: t.MONTH_REFS[f],
                                              key: p,
                                              onClick: function (h) {
                                                  t.onMonthClick(h, f);
                                              },
                                              onKeyDown: function (h) {
                                                  qn(h) &&
                                                      (h.preventDefault(),
                                                      (h.key = b.Enter)),
                                                      t.onMonthKeyDown(h, f);
                                              },
                                              onMouseEnter: t.props
                                                  .usePointerEvent
                                                  ? void 0
                                                  : function () {
                                                        return t.onMonthMouseEnter(
                                                            f,
                                                        );
                                                    },
                                              onPointerEnter: t.props
                                                  .usePointerEvent
                                                  ? function () {
                                                        return t.onMonthMouseEnter(
                                                            f,
                                                        );
                                                    }
                                                  : void 0,
                                              tabIndex: Number(
                                                  t.getTabIndex(f),
                                              ),
                                              className:
                                                  t.getMonthClassNames(f),
                                              'aria-disabled':
                                                  t.isMonthDisabled(f),
                                              role: 'option',
                                              'aria-label': t.getAriaLabel(f),
                                              'aria-current': t.isCurrentMonth(
                                                  s,
                                                  f,
                                              )
                                                  ? 'date'
                                                  : void 0,
                                              'aria-selected': c
                                                  ? t.isSelectedMonth(s, f, c)
                                                  : void 0,
                                          },
                                          t.getMonthContent(f),
                                      );
                                  }),
                              );
                          });
                }),
                (t.renderQuarters = function () {
                    var e = t.props,
                        r = e.day,
                        o = e.selected,
                        i = [1, 2, 3, 4];
                    return m.createElement(
                        'div',
                        { className: 'react-datepicker__quarter-wrapper' },
                        i.map(function (s, c) {
                            return m.createElement(
                                'div',
                                {
                                    key: c,
                                    ref: t.QUARTER_REFS[c],
                                    role: 'option',
                                    onClick: function (l) {
                                        t.onQuarterClick(l, s);
                                    },
                                    onKeyDown: function (l) {
                                        t.onQuarterKeyDown(l, s);
                                    },
                                    onMouseEnter: t.props.usePointerEvent
                                        ? void 0
                                        : function () {
                                              return t.onQuarterMouseEnter(s);
                                          },
                                    onPointerEnter: t.props.usePointerEvent
                                        ? function () {
                                              return t.onQuarterMouseEnter(s);
                                          }
                                        : void 0,
                                    className: t.getQuarterClassNames(s),
                                    'aria-selected': o
                                        ? t.isSelectedQuarter(r, s, o)
                                        : void 0,
                                    tabIndex: Number(t.getQuarterTabIndex(s)),
                                    'aria-current': t.isCurrentQuarter(r, s)
                                        ? 'date'
                                        : void 0,
                                },
                                t.getQuarterContent(s),
                            );
                        }),
                    );
                }),
                (t.getClassNames = function () {
                    var e = t.props,
                        r = e.selectingDate,
                        o = e.selectsStart,
                        i = e.selectsEnd,
                        s = e.showMonthYearPicker,
                        c = e.showQuarterYearPicker,
                        l = e.showWeekPicker;
                    return re(
                        'react-datepicker__month',
                        {
                            'react-datepicker__month--selecting-range':
                                r && (o || i),
                        },
                        { 'react-datepicker__monthPicker': s },
                        { 'react-datepicker__quarterPicker': c },
                        { 'react-datepicker__weekPicker': l },
                    );
                }),
                t
            );
        }
        return (
            (a.prototype.getSelection = function () {
                var t = this.props,
                    e = t.selected,
                    r = t.selectedDates,
                    o = t.selectsMultiple;
                if (o) return r;
                if (e) return [e];
            }),
            (a.prototype.render = function () {
                var t = this.props,
                    e = t.showMonthYearPicker,
                    r = t.showQuarterYearPicker,
                    o = t.day,
                    i = t.ariaLabelPrefix,
                    s = i === void 0 ? 'Month ' : i,
                    c = s ? s.trim() + ' ' : '';
                return m.createElement(
                    'div',
                    {
                        className: this.getClassNames(),
                        onMouseLeave: this.props.usePointerEvent
                            ? void 0
                            : this.handleMouseLeave,
                        onPointerLeave: this.props.usePointerEvent
                            ? this.handleMouseLeave
                            : void 0,
                        'aria-label': ''
                            .concat(c)
                            .concat($(o, 'MMMM, yyyy', this.props.locale)),
                        role: 'listbox',
                    },
                    e
                        ? this.renderMonths()
                        : r
                          ? this.renderQuarters()
                          : this.renderWeeks(),
                );
            }),
            a
        );
    })(y.Component),
    nc = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.isSelectedMonth = function (e) {
                    return t.props.month === e;
                }),
                (t.renderOptions = function () {
                    return t.props.monthNames.map(function (e, r) {
                        return m.createElement(
                            'div',
                            {
                                className: t.isSelectedMonth(r)
                                    ? 'react-datepicker__month-option react-datepicker__month-option--selected_month'
                                    : 'react-datepicker__month-option',
                                key: e,
                                onClick: t.onChange.bind(t, r),
                                'aria-selected': t.isSelectedMonth(r)
                                    ? 'true'
                                    : void 0,
                            },
                            t.isSelectedMonth(r)
                                ? m.createElement(
                                      'span',
                                      {
                                          className:
                                              'react-datepicker__month-option--selected',
                                      },
                                      '✓',
                                  )
                                : '',
                            e,
                        );
                    });
                }),
                (t.onChange = function (e) {
                    return t.props.onChange(e);
                }),
                (t.handleClickOutside = function () {
                    return t.props.onCancel();
                }),
                t
            );
        }
        return (
            (a.prototype.render = function () {
                return m.createElement(
                    $t,
                    {
                        className: 'react-datepicker__month-dropdown',
                        onClickOutside: this.handleClickOutside,
                    },
                    this.renderOptions(),
                );
            }),
            a
        );
    })(y.Component),
    ac = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.state = { dropdownVisible: !1 }),
                (t.renderSelectOptions = function (e) {
                    return e.map(function (r, o) {
                        return m.createElement(
                            'option',
                            { key: r, value: o },
                            r,
                        );
                    });
                }),
                (t.renderSelectMode = function (e) {
                    return m.createElement(
                        'select',
                        {
                            value: t.props.month,
                            className: 'react-datepicker__month-select',
                            onChange: function (r) {
                                return t.onChange(parseInt(r.target.value));
                            },
                        },
                        t.renderSelectOptions(e),
                    );
                }),
                (t.renderReadView = function (e, r) {
                    return m.createElement(
                        'div',
                        {
                            key: 'read',
                            style: { visibility: e ? 'visible' : 'hidden' },
                            className: 'react-datepicker__month-read-view',
                            onClick: t.toggleDropdown,
                        },
                        m.createElement('span', {
                            className:
                                'react-datepicker__month-read-view--down-arrow',
                        }),
                        m.createElement(
                            'span',
                            {
                                className:
                                    'react-datepicker__month-read-view--selected-month',
                            },
                            r[t.props.month],
                        ),
                    );
                }),
                (t.renderDropdown = function (e) {
                    return m.createElement(
                        nc,
                        H({ key: 'dropdown' }, t.props, {
                            monthNames: e,
                            onChange: t.onChange,
                            onCancel: t.toggleDropdown,
                        }),
                    );
                }),
                (t.renderScrollMode = function (e) {
                    var r = t.state.dropdownVisible,
                        o = [t.renderReadView(!r, e)];
                    return r && o.unshift(t.renderDropdown(e)), o;
                }),
                (t.onChange = function (e) {
                    t.toggleDropdown(),
                        e !== t.props.month && t.props.onChange(e);
                }),
                (t.toggleDropdown = function () {
                    return t.setState({
                        dropdownVisible: !t.state.dropdownVisible,
                    });
                }),
                t
            );
        }
        return (
            (a.prototype.render = function () {
                var t = this,
                    e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                        this.props.useShortMonthInDropdown
                            ? function (o) {
                                  return Bn(o, t.props.locale);
                              }
                            : function (o) {
                                  return xr(o, t.props.locale);
                              },
                    ),
                    r;
                switch (this.props.dropdownMode) {
                    case 'scroll':
                        r = this.renderScrollMode(e);
                        break;
                    case 'select':
                        r = this.renderSelectMode(e);
                        break;
                }
                return m.createElement(
                    'div',
                    {
                        className:
                            'react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--'.concat(
                                this.props.dropdownMode,
                            ),
                    },
                    r,
                );
            }),
            a
        );
    })(y.Component);
function oc(n, a) {
    for (var t = [], e = Ce(n), r = Ce(a); !Ye(e, r); )
        t.push(j(e)), (e = pe(e, 1));
    return t;
}
var ic = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.renderOptions = function () {
                    return e.state.monthYearsList.map(function (r) {
                        var o = ur(r),
                            i = me(e.props.date, r) && ne(e.props.date, r);
                        return m.createElement(
                            'div',
                            {
                                className: i
                                    ? 'react-datepicker__month-year-option--selected_month-year'
                                    : 'react-datepicker__month-year-option',
                                key: o,
                                onClick: e.onChange.bind(e, o),
                                'aria-selected': i ? 'true' : void 0,
                            },
                            i
                                ? m.createElement(
                                      'span',
                                      {
                                          className:
                                              'react-datepicker__month-year-option--selected',
                                      },
                                      '✓',
                                  )
                                : '',
                            $(r, e.props.dateFormat, e.props.locale),
                        );
                    });
                }),
                (e.onChange = function (r) {
                    return e.props.onChange(r);
                }),
                (e.handleClickOutside = function () {
                    e.props.onCancel();
                }),
                (e.state = {
                    monthYearsList: oc(e.props.minDate, e.props.maxDate),
                }),
                e
            );
        }
        return (
            (a.prototype.render = function () {
                var t = re({
                    'react-datepicker__month-year-dropdown': !0,
                    'react-datepicker__month-year-dropdown--scrollable':
                        this.props.scrollableMonthYearDropdown,
                });
                return m.createElement(
                    $t,
                    { className: t, onClickOutside: this.handleClickOutside },
                    this.renderOptions(),
                );
            }),
            a
        );
    })(y.Component),
    sc = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.state = { dropdownVisible: !1 }),
                (t.renderSelectOptions = function () {
                    for (
                        var e = Ce(t.props.minDate),
                            r = Ce(t.props.maxDate),
                            o = [];
                        !Ye(e, r);

                    ) {
                        var i = ur(e);
                        o.push(
                            m.createElement(
                                'option',
                                { key: i, value: i },
                                $(e, t.props.dateFormat, t.props.locale),
                            ),
                        ),
                            (e = pe(e, 1));
                    }
                    return o;
                }),
                (t.onSelectChange = function (e) {
                    t.onChange(parseInt(e.target.value));
                }),
                (t.renderSelectMode = function () {
                    return m.createElement(
                        'select',
                        {
                            value: ur(Ce(t.props.date)),
                            className: 'react-datepicker__month-year-select',
                            onChange: t.onSelectChange,
                        },
                        t.renderSelectOptions(),
                    );
                }),
                (t.renderReadView = function (e) {
                    var r = $(t.props.date, t.props.dateFormat, t.props.locale);
                    return m.createElement(
                        'div',
                        {
                            key: 'read',
                            style: { visibility: e ? 'visible' : 'hidden' },
                            className: 'react-datepicker__month-year-read-view',
                            onClick: t.toggleDropdown,
                        },
                        m.createElement('span', {
                            className:
                                'react-datepicker__month-year-read-view--down-arrow',
                        }),
                        m.createElement(
                            'span',
                            {
                                className:
                                    'react-datepicker__month-year-read-view--selected-month-year',
                            },
                            r,
                        ),
                    );
                }),
                (t.renderDropdown = function () {
                    return m.createElement(
                        ic,
                        H({ key: 'dropdown' }, t.props, {
                            onChange: t.onChange,
                            onCancel: t.toggleDropdown,
                        }),
                    );
                }),
                (t.renderScrollMode = function () {
                    var e = t.state.dropdownVisible,
                        r = [t.renderReadView(!e)];
                    return e && r.unshift(t.renderDropdown()), r;
                }),
                (t.onChange = function (e) {
                    t.toggleDropdown();
                    var r = j(e);
                    (me(t.props.date, r) && ne(t.props.date, r)) ||
                        t.props.onChange(r);
                }),
                (t.toggleDropdown = function () {
                    return t.setState({
                        dropdownVisible: !t.state.dropdownVisible,
                    });
                }),
                t
            );
        }
        return (
            (a.prototype.render = function () {
                var t;
                switch (this.props.dropdownMode) {
                    case 'scroll':
                        t = this.renderScrollMode();
                        break;
                    case 'select':
                        t = this.renderSelectMode();
                        break;
                }
                return m.createElement(
                    'div',
                    {
                        className:
                            'react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--'.concat(
                                this.props.dropdownMode,
                            ),
                    },
                    t,
                );
            }),
            a
        );
    })(y.Component),
    cc = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.state = { height: null }),
                (t.scrollToTheSelectedTime = function () {
                    requestAnimationFrame(function () {
                        var e, r, o;
                        t.list &&
                            (t.list.scrollTop =
                                (o =
                                    t.centerLi &&
                                    a.calcCenterPosition(
                                        t.props.monthRef
                                            ? t.props.monthRef.clientHeight -
                                                  ((r =
                                                      (e = t.header) === null ||
                                                      e === void 0
                                                          ? void 0
                                                          : e.clientHeight) !==
                                                      null && r !== void 0
                                                      ? r
                                                      : 0)
                                            : t.list.clientHeight,
                                        t.centerLi,
                                    )) !== null && o !== void 0
                                    ? o
                                    : 0);
                    });
                }),
                (t.handleClick = function (e) {
                    var r, o;
                    ((t.props.minTime || t.props.maxTime) && Gr(e, t.props)) ||
                        ((t.props.excludeTimes ||
                            t.props.includeTimes ||
                            t.props.filterTime) &&
                            Xr(e, t.props)) ||
                        (o = (r = t.props).onChange) === null ||
                        o === void 0 ||
                        o.call(r, e);
                }),
                (t.isSelectedTime = function (e) {
                    return t.props.selected && Gs(t.props.selected, e);
                }),
                (t.isDisabledTime = function (e) {
                    return (
                        ((t.props.minTime || t.props.maxTime) &&
                            Gr(e, t.props)) ||
                        ((t.props.excludeTimes ||
                            t.props.includeTimes ||
                            t.props.filterTime) &&
                            Xr(e, t.props))
                    );
                }),
                (t.liClasses = function (e) {
                    var r,
                        o = [
                            'react-datepicker__time-list-item',
                            t.props.timeClassName
                                ? t.props.timeClassName(e)
                                : void 0,
                        ];
                    return (
                        t.isSelectedTime(e) &&
                            o.push(
                                'react-datepicker__time-list-item--selected',
                            ),
                        t.isDisabledTime(e) &&
                            o.push(
                                'react-datepicker__time-list-item--disabled',
                            ),
                        t.props.injectTimes &&
                            (xe(e) * 3600 + Me(e) * 60 + Te(e)) %
                                (((r = t.props.intervals) !== null &&
                                r !== void 0
                                    ? r
                                    : a.defaultProps.intervals) *
                                    60) !==
                                0 &&
                            o.push(
                                'react-datepicker__time-list-item--injected',
                            ),
                        o.join(' ')
                    );
                }),
                (t.handleOnKeyDown = function (e, r) {
                    var o, i;
                    e.key === b.Space &&
                        (e.preventDefault(), (e.key = b.Enter)),
                        (e.key === b.ArrowUp || e.key === b.ArrowLeft) &&
                            e.target instanceof HTMLElement &&
                            e.target.previousSibling &&
                            (e.preventDefault(),
                            e.target.previousSibling instanceof HTMLElement &&
                                e.target.previousSibling.focus()),
                        (e.key === b.ArrowDown || e.key === b.ArrowRight) &&
                            e.target instanceof HTMLElement &&
                            e.target.nextSibling &&
                            (e.preventDefault(),
                            e.target.nextSibling instanceof HTMLElement &&
                                e.target.nextSibling.focus()),
                        e.key === b.Enter && t.handleClick(r),
                        (i = (o = t.props).handleOnKeyDown) === null ||
                            i === void 0 ||
                            i.call(o, e);
                }),
                (t.renderTimes = function () {
                    for (
                        var e,
                            r = [],
                            o =
                                typeof t.props.format == 'string'
                                    ? t.props.format
                                    : 'p',
                            i =
                                (e = t.props.intervals) !== null && e !== void 0
                                    ? e
                                    : a.defaultProps.intervals,
                            s = t.props.selected || t.props.openToDate || j(),
                            c = Ct(s),
                            l =
                                t.props.injectTimes &&
                                t.props.injectTimes.sort(function (g, w) {
                                    return g.getTime() - w.getTime();
                                }),
                            u = 60 * Xs(s),
                            d = u / i,
                            f = 0;
                        f < d;
                        f++
                    ) {
                        var p = sr(c, f * i);
                        if ((r.push(p), l)) {
                            var h = $s(c, p, f, i, l);
                            r = r.concat(h);
                        }
                    }
                    var v = r.reduce(function (g, w) {
                        return w.getTime() <= s.getTime() ? w : g;
                    }, r[0]);
                    return r.map(function (g) {
                        return m.createElement(
                            'li',
                            {
                                key: g.valueOf(),
                                onClick: t.handleClick.bind(t, g),
                                className: t.liClasses(g),
                                ref: function (w) {
                                    g === v && (t.centerLi = w);
                                },
                                onKeyDown: function (w) {
                                    t.handleOnKeyDown(w, g);
                                },
                                tabIndex: g === v ? 0 : -1,
                                role: 'option',
                                'aria-selected': t.isSelectedTime(g)
                                    ? 'true'
                                    : void 0,
                                'aria-disabled': t.isDisabledTime(g)
                                    ? 'true'
                                    : void 0,
                            },
                            $(g, o, t.props.locale),
                        );
                    });
                }),
                (t.renderTimeCaption = function () {
                    return t.props.showTimeCaption === !1
                        ? m.createElement(m.Fragment, null)
                        : m.createElement(
                              'div',
                              {
                                  className:
                                      'react-datepicker__header react-datepicker__header--time '.concat(
                                          t.props.showTimeSelectOnly
                                              ? 'react-datepicker__header--time--only'
                                              : '',
                                      ),
                                  ref: function (e) {
                                      t.header = e;
                                  },
                              },
                              m.createElement(
                                  'div',
                                  {
                                      className:
                                          'react-datepicker-time__header',
                                  },
                                  t.props.timeCaption,
                              ),
                          );
                }),
                t
            );
        }
        return (
            Object.defineProperty(a, 'defaultProps', {
                get: function () {
                    return {
                        intervals: 30,
                        todayButton: null,
                        timeCaption: 'Time',
                        showTimeCaption: !0,
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (a.prototype.componentDidMount = function () {
                this.scrollToTheSelectedTime(),
                    this.observeDatePickerHeightChanges();
            }),
            (a.prototype.componentWillUnmount = function () {
                var t;
                (t = this.resizeObserver) === null ||
                    t === void 0 ||
                    t.disconnect();
            }),
            (a.prototype.observeDatePickerHeightChanges = function () {
                var t = this,
                    e = this.props.monthRef;
                this.updateContainerHeight(),
                    e &&
                        ((this.resizeObserver = new ResizeObserver(function () {
                            t.updateContainerHeight();
                        })),
                        this.resizeObserver.observe(e));
            }),
            (a.prototype.updateContainerHeight = function () {
                this.props.monthRef &&
                    this.header &&
                    this.setState({
                        height:
                            this.props.monthRef.clientHeight -
                            this.header.clientHeight,
                    });
            }),
            (a.prototype.render = function () {
                var t = this,
                    e,
                    r = this.state.height;
                return m.createElement(
                    'div',
                    {
                        className: 'react-datepicker__time-container '.concat(
                            (
                                (e = this.props.todayButton) !== null &&
                                e !== void 0
                                    ? e
                                    : a.defaultProps.todayButton
                            )
                                ? 'react-datepicker__time-container--with-today-button'
                                : '',
                        ),
                    },
                    this.renderTimeCaption(),
                    m.createElement(
                        'div',
                        { className: 'react-datepicker__time' },
                        m.createElement(
                            'div',
                            { className: 'react-datepicker__time-box' },
                            m.createElement(
                                'ul',
                                {
                                    className: 'react-datepicker__time-list',
                                    ref: function (o) {
                                        t.list = o;
                                    },
                                    style: r ? { height: r } : {},
                                    role: 'listbox',
                                    'aria-label': this.props.timeCaption,
                                },
                                this.renderTimes(),
                            ),
                        ),
                    ),
                );
            }),
            (a.calcCenterPosition = function (t, e) {
                return e.offsetTop - (t / 2 - e.clientHeight / 2);
            }),
            a
        );
    })(y.Component),
    cn = 3,
    lc = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.YEAR_REFS = we([], Array(e.props.yearItemNumber), !0).map(
                    function () {
                        return y.createRef();
                    },
                )),
                (e.isDisabled = function (r) {
                    return ue(r, {
                        minDate: e.props.minDate,
                        maxDate: e.props.maxDate,
                        excludeDates: e.props.excludeDates,
                        includeDates: e.props.includeDates,
                        filterDate: e.props.filterDate,
                    });
                }),
                (e.isExcluded = function (r) {
                    return Mr(r, { excludeDates: e.props.excludeDates });
                }),
                (e.selectingDate = function () {
                    var r;
                    return (r = e.props.selectingDate) !== null && r !== void 0
                        ? r
                        : e.props.preSelection;
                }),
                (e.updateFocusOnPaginate = function (r) {
                    var o = function () {
                        var i, s;
                        (s =
                            (i = e.YEAR_REFS[r]) === null || i === void 0
                                ? void 0
                                : i.current) === null ||
                            s === void 0 ||
                            s.focus();
                    };
                    window.requestAnimationFrame(o);
                }),
                (e.handleYearClick = function (r, o) {
                    e.props.onDayClick && e.props.onDayClick(r, o);
                }),
                (e.handleYearNavigation = function (r, o) {
                    var i,
                        s,
                        c,
                        l,
                        u = e.props,
                        d = u.date,
                        f = u.yearItemNumber;
                    if (!(d === void 0 || f === void 0)) {
                        var p = Oe(d, f).startPeriod;
                        e.isDisabled(o) ||
                            e.isExcluded(o) ||
                            ((s = (i = e.props).setPreSelection) === null ||
                                s === void 0 ||
                                s.call(i, o),
                            r - p < 0
                                ? e.updateFocusOnPaginate(f - (p - r))
                                : r - p >= f
                                  ? e.updateFocusOnPaginate(
                                        Math.abs(f - (r - p)),
                                    )
                                  : (l =
                                        (c = e.YEAR_REFS[r - p]) === null ||
                                        c === void 0
                                            ? void 0
                                            : c.current) === null ||
                                    l === void 0 ||
                                    l.focus());
                    }
                }),
                (e.isSameDay = function (r, o) {
                    return W(r, o);
                }),
                (e.isCurrentYear = function (r) {
                    return r === R(j());
                }),
                (e.isRangeStart = function (r) {
                    return (
                        e.props.startDate &&
                        e.props.endDate &&
                        me(he(j(), r), e.props.startDate)
                    );
                }),
                (e.isRangeEnd = function (r) {
                    return (
                        e.props.startDate &&
                        e.props.endDate &&
                        me(he(j(), r), e.props.endDate)
                    );
                }),
                (e.isInRange = function (r) {
                    return yt(r, e.props.startDate, e.props.endDate);
                }),
                (e.isInSelectingRange = function (r) {
                    var o = e.props,
                        i = o.selectsStart,
                        s = o.selectsEnd,
                        c = o.selectsRange,
                        l = o.startDate,
                        u = o.endDate;
                    return !(i || s || c) || !e.selectingDate()
                        ? !1
                        : i && u
                          ? yt(r, e.selectingDate(), u)
                          : (s && l) || (c && l && !u)
                            ? yt(r, l, e.selectingDate())
                            : !1;
                }),
                (e.isSelectingRangeStart = function (r) {
                    var o;
                    if (!e.isInSelectingRange(r)) return !1;
                    var i = e.props,
                        s = i.startDate,
                        c = i.selectsStart,
                        l = he(j(), r);
                    return c
                        ? me(
                              l,
                              (o = e.selectingDate()) !== null && o !== void 0
                                  ? o
                                  : null,
                          )
                        : me(l, s ?? null);
                }),
                (e.isSelectingRangeEnd = function (r) {
                    var o;
                    if (!e.isInSelectingRange(r)) return !1;
                    var i = e.props,
                        s = i.endDate,
                        c = i.selectsEnd,
                        l = i.selectsRange,
                        u = he(j(), r);
                    return c || l
                        ? me(
                              u,
                              (o = e.selectingDate()) !== null && o !== void 0
                                  ? o
                                  : null,
                          )
                        : me(u, s ?? null);
                }),
                (e.isKeyboardSelected = function (r) {
                    if (
                        !(
                            e.props.date === void 0 ||
                            e.props.selected == null ||
                            e.props.preSelection == null
                        )
                    ) {
                        var o = e.props,
                            i = o.minDate,
                            s = o.maxDate,
                            c = o.excludeDates,
                            l = o.includeDates,
                            u = o.filterDate,
                            d = st(he(e.props.date, r)),
                            f = (i || s || c || l || u) && St(r, e.props);
                        return (
                            !e.props.disabledKeyboardNavigation &&
                            !e.props.inline &&
                            !W(d, st(e.props.selected)) &&
                            W(d, st(e.props.preSelection)) &&
                            !f
                        );
                    }
                }),
                (e.isSelectedYear = function (r) {
                    var o = e.props,
                        i = o.selectsMultiple,
                        s = o.selected,
                        c = o.selectedDates;
                    return i
                        ? c == null
                            ? void 0
                            : c.some(function (l) {
                                  return r === R(l);
                              })
                        : !s || r === R(s);
                }),
                (e.onYearClick = function (r, o) {
                    var i = e.props.date;
                    i !== void 0 && e.handleYearClick(st(he(i, o)), r);
                }),
                (e.onYearKeyDown = function (r, o) {
                    var i,
                        s,
                        c = r.key,
                        l = e.props,
                        u = l.date,
                        d = l.yearItemNumber,
                        f = l.handleOnKeyDown;
                    if (
                        (c !== b.Tab && r.preventDefault(),
                        !e.props.disabledKeyboardNavigation)
                    )
                        switch (c) {
                            case b.Enter:
                                if (e.props.selected == null) break;
                                e.onYearClick(r, o),
                                    (s = (i = e.props).setPreSelection) ===
                                        null ||
                                        s === void 0 ||
                                        s.call(i, e.props.selected);
                                break;
                            case b.ArrowRight:
                                if (e.props.preSelection == null) break;
                                e.handleYearNavigation(
                                    o + 1,
                                    ke(e.props.preSelection, 1),
                                );
                                break;
                            case b.ArrowLeft:
                                if (e.props.preSelection == null) break;
                                e.handleYearNavigation(
                                    o - 1,
                                    et(e.props.preSelection, 1),
                                );
                                break;
                            case b.ArrowUp: {
                                if (
                                    u === void 0 ||
                                    d === void 0 ||
                                    e.props.preSelection == null
                                )
                                    break;
                                var p = Oe(u, d).startPeriod,
                                    h = cn,
                                    v = o - h;
                                if (v < p) {
                                    var g = d % h;
                                    o >= p && o < p + g ? (h = g) : (h += g),
                                        (v = o - h);
                                }
                                e.handleYearNavigation(
                                    v,
                                    et(e.props.preSelection, h),
                                );
                                break;
                            }
                            case b.ArrowDown: {
                                if (
                                    u === void 0 ||
                                    d === void 0 ||
                                    e.props.preSelection == null
                                )
                                    break;
                                var w = Oe(u, d).endPeriod,
                                    h = cn,
                                    v = o + h;
                                if (v > w) {
                                    var g = d % h;
                                    o <= w && o > w - g ? (h = g) : (h += g),
                                        (v = o + h);
                                }
                                e.handleYearNavigation(
                                    v,
                                    ke(e.props.preSelection, h),
                                );
                                break;
                            }
                        }
                    f && f(r);
                }),
                (e.getYearClassNames = function (r) {
                    var o = e.props,
                        i = o.date,
                        s = o.minDate,
                        c = o.maxDate,
                        l = o.excludeDates,
                        u = o.includeDates,
                        d = o.filterDate,
                        f = o.yearClassName;
                    return re(
                        'react-datepicker__year-text',
                        'react-datepicker__year-'.concat(r),
                        i ? (f == null ? void 0 : f(he(i, r))) : void 0,
                        {
                            'react-datepicker__year-text--selected':
                                e.isSelectedYear(r),
                            'react-datepicker__year-text--disabled':
                                (s || c || l || u || d) && St(r, e.props),
                            'react-datepicker__year-text--keyboard-selected':
                                e.isKeyboardSelected(r),
                            'react-datepicker__year-text--range-start':
                                e.isRangeStart(r),
                            'react-datepicker__year-text--range-end':
                                e.isRangeEnd(r),
                            'react-datepicker__year-text--in-range':
                                e.isInRange(r),
                            'react-datepicker__year-text--in-selecting-range':
                                e.isInSelectingRange(r),
                            'react-datepicker__year-text--selecting-range-start':
                                e.isSelectingRangeStart(r),
                            'react-datepicker__year-text--selecting-range-end':
                                e.isSelectingRangeEnd(r),
                            'react-datepicker__year-text--today':
                                e.isCurrentYear(r),
                        },
                    );
                }),
                (e.getYearTabIndex = function (r) {
                    if (
                        e.props.disabledKeyboardNavigation ||
                        e.props.preSelection == null
                    )
                        return '-1';
                    var o = R(e.props.preSelection),
                        i = St(r, e.props);
                    return r === o && !i ? '0' : '-1';
                }),
                (e.getYearContent = function (r) {
                    return e.props.renderYearContent
                        ? e.props.renderYearContent(r)
                        : r;
                }),
                e
            );
        }
        return (
            (a.prototype.render = function () {
                var t = this,
                    e = [],
                    r = this.props,
                    o = r.date,
                    i = r.yearItemNumber,
                    s = r.onYearMouseEnter,
                    c = r.onYearMouseLeave;
                if (o === void 0) return null;
                for (
                    var l = Oe(o, i),
                        u = l.startPeriod,
                        d = l.endPeriod,
                        f = function (v) {
                            e.push(
                                m.createElement(
                                    'div',
                                    {
                                        ref: p.YEAR_REFS[v - u],
                                        onClick: function (g) {
                                            t.onYearClick(g, v);
                                        },
                                        onKeyDown: function (g) {
                                            qn(g) &&
                                                (g.preventDefault(),
                                                (g.key = b.Enter)),
                                                t.onYearKeyDown(g, v);
                                        },
                                        tabIndex: Number(p.getYearTabIndex(v)),
                                        className: p.getYearClassNames(v),
                                        onMouseEnter: p.props.usePointerEvent
                                            ? void 0
                                            : function (g) {
                                                  return s(g, v);
                                              },
                                        onPointerEnter: p.props.usePointerEvent
                                            ? function (g) {
                                                  return s(g, v);
                                              }
                                            : void 0,
                                        onMouseLeave: p.props.usePointerEvent
                                            ? void 0
                                            : function (g) {
                                                  return c(g, v);
                                              },
                                        onPointerLeave: p.props.usePointerEvent
                                            ? function (g) {
                                                  return c(g, v);
                                              }
                                            : void 0,
                                        key: v,
                                        'aria-current': p.isCurrentYear(v)
                                            ? 'date'
                                            : void 0,
                                    },
                                    p.getYearContent(v),
                                ),
                            );
                        },
                        p = this,
                        h = u;
                    h <= d;
                    h++
                )
                    f(h);
                return m.createElement(
                    'div',
                    { className: 'react-datepicker__year' },
                    m.createElement(
                        'div',
                        {
                            className: 'react-datepicker__year-wrapper',
                            onMouseLeave: this.props.usePointerEvent
                                ? void 0
                                : this.props.clearSelectingDate,
                            onPointerLeave: this.props.usePointerEvent
                                ? this.props.clearSelectingDate
                                : void 0,
                        },
                        e,
                    ),
                );
            }),
            a
        );
    })(y.Component);
function uc(n, a, t, e) {
    for (var r = [], o = 0; o < 2 * a + 1; o++) {
        var i = n + a - o,
            s = !0;
        t && (s = R(t) <= i), e && s && (s = R(e) >= i), s && r.push(i);
    }
    return r;
}
var dc = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            (e.renderOptions = function () {
                var s = e.props.year,
                    c = e.state.yearsList.map(function (d) {
                        return m.createElement(
                            'div',
                            {
                                className:
                                    s === d
                                        ? 'react-datepicker__year-option react-datepicker__year-option--selected_year'
                                        : 'react-datepicker__year-option',
                                key: d,
                                onClick: e.onChange.bind(e, d),
                                'aria-selected': s === d ? 'true' : void 0,
                            },
                            s === d
                                ? m.createElement(
                                      'span',
                                      {
                                          className:
                                              'react-datepicker__year-option--selected',
                                      },
                                      '✓',
                                  )
                                : '',
                            d,
                        );
                    }),
                    l = e.props.minDate ? R(e.props.minDate) : null,
                    u = e.props.maxDate ? R(e.props.maxDate) : null;
                return (
                    (!u ||
                        !e.state.yearsList.find(function (d) {
                            return d === u;
                        })) &&
                        c.unshift(
                            m.createElement(
                                'div',
                                {
                                    className: 'react-datepicker__year-option',
                                    key: 'upcoming',
                                    onClick: e.incrementYears,
                                },
                                m.createElement('a', {
                                    className:
                                        'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming',
                                }),
                            ),
                        ),
                    (!l ||
                        !e.state.yearsList.find(function (d) {
                            return d === l;
                        })) &&
                        c.push(
                            m.createElement(
                                'div',
                                {
                                    className: 'react-datepicker__year-option',
                                    key: 'previous',
                                    onClick: e.decrementYears,
                                },
                                m.createElement('a', {
                                    className:
                                        'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous',
                                }),
                            ),
                        ),
                    c
                );
            }),
                (e.onChange = function (s) {
                    e.props.onChange(s);
                }),
                (e.handleClickOutside = function () {
                    e.props.onCancel();
                }),
                (e.shiftYears = function (s) {
                    var c = e.state.yearsList.map(function (l) {
                        return l + s;
                    });
                    e.setState({ yearsList: c });
                }),
                (e.incrementYears = function () {
                    return e.shiftYears(1);
                }),
                (e.decrementYears = function () {
                    return e.shiftYears(-1);
                });
            var r = t.yearDropdownItemNumber,
                o = t.scrollableYearDropdown,
                i = r || (o ? 10 : 5);
            return (
                (e.state = {
                    yearsList: uc(
                        e.props.year,
                        i,
                        e.props.minDate,
                        e.props.maxDate,
                    ),
                }),
                (e.dropdownRef = y.createRef()),
                e
            );
        }
        return (
            (a.prototype.componentDidMount = function () {
                var t = this.dropdownRef.current;
                if (t) {
                    var e = t.children ? Array.from(t.children) : null,
                        r = e
                            ? e.find(function (o) {
                                  return o.ariaSelected;
                              })
                            : null;
                    t.scrollTop =
                        r && r instanceof HTMLElement
                            ? r.offsetTop +
                              (r.clientHeight - t.clientHeight) / 2
                            : (t.scrollHeight - t.clientHeight) / 2;
                }
            }),
            (a.prototype.render = function () {
                var t = re({
                    'react-datepicker__year-dropdown': !0,
                    'react-datepicker__year-dropdown--scrollable':
                        this.props.scrollableYearDropdown,
                });
                return m.createElement(
                    $t,
                    {
                        className: t,
                        containerRef: this.dropdownRef,
                        onClickOutside: this.handleClickOutside,
                    },
                    this.renderOptions(),
                );
            }),
            a
        );
    })(y.Component),
    fc = (function (n) {
        te(a, n);
        function a() {
            var t = (n !== null && n.apply(this, arguments)) || this;
            return (
                (t.state = { dropdownVisible: !1 }),
                (t.renderSelectOptions = function () {
                    for (
                        var e = t.props.minDate ? R(t.props.minDate) : 1900,
                            r = t.props.maxDate ? R(t.props.maxDate) : 2100,
                            o = [],
                            i = e;
                        i <= r;
                        i++
                    )
                        o.push(
                            m.createElement('option', { key: i, value: i }, i),
                        );
                    return o;
                }),
                (t.onSelectChange = function (e) {
                    t.onChange(parseInt(e.target.value));
                }),
                (t.renderSelectMode = function () {
                    return m.createElement(
                        'select',
                        {
                            value: t.props.year,
                            className: 'react-datepicker__year-select',
                            onChange: t.onSelectChange,
                        },
                        t.renderSelectOptions(),
                    );
                }),
                (t.renderReadView = function (e) {
                    return m.createElement(
                        'div',
                        {
                            key: 'read',
                            style: { visibility: e ? 'visible' : 'hidden' },
                            className: 'react-datepicker__year-read-view',
                            onClick: function (r) {
                                return t.toggleDropdown(r);
                            },
                        },
                        m.createElement('span', {
                            className:
                                'react-datepicker__year-read-view--down-arrow',
                        }),
                        m.createElement(
                            'span',
                            {
                                className:
                                    'react-datepicker__year-read-view--selected-year',
                            },
                            t.props.year,
                        ),
                    );
                }),
                (t.renderDropdown = function () {
                    return m.createElement(
                        dc,
                        H({ key: 'dropdown' }, t.props, {
                            onChange: t.onChange,
                            onCancel: t.toggleDropdown,
                        }),
                    );
                }),
                (t.renderScrollMode = function () {
                    var e = t.state.dropdownVisible,
                        r = [t.renderReadView(!e)];
                    return e && r.unshift(t.renderDropdown()), r;
                }),
                (t.onChange = function (e) {
                    t.toggleDropdown(),
                        e !== t.props.year && t.props.onChange(e);
                }),
                (t.toggleDropdown = function (e) {
                    t.setState(
                        { dropdownVisible: !t.state.dropdownVisible },
                        function () {
                            t.props.adjustDateOnChange &&
                                t.handleYearChange(t.props.date, e);
                        },
                    );
                }),
                (t.handleYearChange = function (e, r) {
                    var o;
                    (o = t.onSelect) === null ||
                        o === void 0 ||
                        o.call(t, e, r),
                        t.setOpen();
                }),
                (t.onSelect = function (e, r) {
                    var o, i;
                    (i = (o = t.props).onSelect) === null ||
                        i === void 0 ||
                        i.call(o, e, r);
                }),
                (t.setOpen = function () {
                    var e, r;
                    (r = (e = t.props).setOpen) === null ||
                        r === void 0 ||
                        r.call(e, !0);
                }),
                t
            );
        }
        return (
            (a.prototype.render = function () {
                var t;
                switch (this.props.dropdownMode) {
                    case 'scroll':
                        t = this.renderScrollMode();
                        break;
                    case 'select':
                        t = this.renderSelectMode();
                        break;
                }
                return m.createElement(
                    'div',
                    {
                        className:
                            'react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--'.concat(
                                this.props.dropdownMode,
                            ),
                    },
                    t,
                );
            }),
            a
        );
    })(y.Component),
    pc = [
        'react-datepicker__year-select',
        'react-datepicker__month-select',
        'react-datepicker__month-year-select',
    ],
    hc = function (n) {
        var a = (n.className || '').split(/\s+/);
        return pc.some(function (t) {
            return a.indexOf(t) >= 0;
        });
    },
    mc = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.monthContainer = void 0),
                (e.handleClickOutside = function (r) {
                    e.props.onClickOutside(r);
                }),
                (e.setClickOutsideRef = function () {
                    return e.containerRef.current;
                }),
                (e.handleDropdownFocus = function (r) {
                    var o, i;
                    hc(r.target) &&
                        ((i = (o = e.props).onDropdownFocus) === null ||
                            i === void 0 ||
                            i.call(o, r));
                }),
                (e.getDateInView = function () {
                    var r = e.props,
                        o = r.preSelection,
                        i = r.selected,
                        s = r.openToDate,
                        c = jn(e.props),
                        l = Vn(e.props),
                        u = j(),
                        d = s || i || o;
                    return d || (c && Qe(u, c) ? c : l && Ye(u, l) ? l : u);
                }),
                (e.increaseMonth = function () {
                    e.setState(
                        function (r) {
                            var o = r.date;
                            return { date: pe(o, 1) };
                        },
                        function () {
                            return e.handleMonthChange(e.state.date);
                        },
                    );
                }),
                (e.decreaseMonth = function () {
                    e.setState(
                        function (r) {
                            var o = r.date;
                            return { date: We(o, 1) };
                        },
                        function () {
                            return e.handleMonthChange(e.state.date);
                        },
                    );
                }),
                (e.handleDayClick = function (r, o, i) {
                    e.props.onSelect(r, o, i),
                        e.props.setPreSelection && e.props.setPreSelection(r);
                }),
                (e.handleDayMouseEnter = function (r) {
                    e.setState({ selectingDate: r }),
                        e.props.onDayMouseEnter && e.props.onDayMouseEnter(r);
                }),
                (e.handleMonthMouseLeave = function () {
                    e.setState({ selectingDate: void 0 }),
                        e.props.onMonthMouseLeave &&
                            e.props.onMonthMouseLeave();
                }),
                (e.handleYearMouseEnter = function (r, o) {
                    e.setState({ selectingDate: he(j(), o) }),
                        e.props.onYearMouseEnter &&
                            e.props.onYearMouseEnter(r, o);
                }),
                (e.handleYearMouseLeave = function (r, o) {
                    e.props.onYearMouseLeave && e.props.onYearMouseLeave(r, o);
                }),
                (e.handleYearChange = function (r) {
                    var o, i, s, c;
                    (i = (o = e.props).onYearChange) === null ||
                        i === void 0 ||
                        i.call(o, r),
                        e.setState({ isRenderAriaLiveMessage: !0 }),
                        e.props.adjustDateOnChange &&
                            (e.props.onSelect(r),
                            (c = (s = e.props).setOpen) === null ||
                                c === void 0 ||
                                c.call(s, !0)),
                        e.props.setPreSelection && e.props.setPreSelection(r);
                }),
                (e.getEnabledPreSelectionDateForMonth = function (r) {
                    if (!ue(r, e.props)) return r;
                    for (
                        var o = Ce(r), i = Ls(r), s = Xa(i, o), c = null, l = 0;
                        l <= s;
                        l++
                    ) {
                        var u = fe(o, l);
                        if (!ue(u, e.props)) {
                            c = u;
                            break;
                        }
                    }
                    return c;
                }),
                (e.handleMonthChange = function (r) {
                    var o,
                        i,
                        s,
                        c =
                            (o = e.getEnabledPreSelectionDateForMonth(r)) !==
                                null && o !== void 0
                                ? o
                                : r;
                    e.handleCustomMonthChange(c),
                        e.props.adjustDateOnChange &&
                            (e.props.onSelect(c),
                            (s = (i = e.props).setOpen) === null ||
                                s === void 0 ||
                                s.call(i, !0)),
                        e.props.setPreSelection && e.props.setPreSelection(c);
                }),
                (e.handleCustomMonthChange = function (r) {
                    var o, i;
                    (i = (o = e.props).onMonthChange) === null ||
                        i === void 0 ||
                        i.call(o, r),
                        e.setState({ isRenderAriaLiveMessage: !0 });
                }),
                (e.handleMonthYearChange = function (r) {
                    e.handleYearChange(r), e.handleMonthChange(r);
                }),
                (e.changeYear = function (r) {
                    e.setState(
                        function (o) {
                            var i = o.date;
                            return { date: he(i, Number(r)) };
                        },
                        function () {
                            return e.handleYearChange(e.state.date);
                        },
                    );
                }),
                (e.changeMonth = function (r) {
                    e.setState(
                        function (o) {
                            var i = o.date;
                            return { date: le(i, Number(r)) };
                        },
                        function () {
                            return e.handleMonthChange(e.state.date);
                        },
                    );
                }),
                (e.changeMonthYear = function (r) {
                    e.setState(
                        function (o) {
                            var i = o.date;
                            return { date: he(le(i, oe(r)), R(r)) };
                        },
                        function () {
                            return e.handleMonthYearChange(e.state.date);
                        },
                    );
                }),
                (e.header = function (r) {
                    r === void 0 && (r = e.state.date);
                    var o = Ne(r, e.props.locale, e.props.calendarStartDay),
                        i = [];
                    return (
                        e.props.showWeekNumbers &&
                            i.push(
                                m.createElement(
                                    'div',
                                    {
                                        key: 'W',
                                        className: 'react-datepicker__day-name',
                                    },
                                    e.props.weekLabel || '#',
                                ),
                            ),
                        i.concat(
                            [0, 1, 2, 3, 4, 5, 6].map(function (s) {
                                var c = fe(o, s),
                                    l = e.formatWeekday(c, e.props.locale),
                                    u = e.props.weekDayClassName
                                        ? e.props.weekDayClassName(c)
                                        : void 0;
                                return m.createElement(
                                    'div',
                                    {
                                        key: s,
                                        'aria-label': $(
                                            c,
                                            'EEEE',
                                            e.props.locale,
                                        ),
                                        className: re(
                                            'react-datepicker__day-name',
                                            u,
                                        ),
                                    },
                                    l,
                                );
                            }),
                        )
                    );
                }),
                (e.formatWeekday = function (r, o) {
                    return e.props.formatWeekDay
                        ? Fs(r, e.props.formatWeekDay, o)
                        : e.props.useWeekdaysShort
                          ? Ws(r, o)
                          : As(r, o);
                }),
                (e.decreaseYear = function () {
                    e.setState(
                        function (r) {
                            var o,
                                i = r.date;
                            return {
                                date: et(
                                    i,
                                    e.props.showYearPicker
                                        ? (o = e.props.yearItemNumber) !==
                                              null && o !== void 0
                                            ? o
                                            : a.defaultProps.yearItemNumber
                                        : 1,
                                ),
                            };
                        },
                        function () {
                            return e.handleYearChange(e.state.date);
                        },
                    );
                }),
                (e.clearSelectingDate = function () {
                    e.setState({ selectingDate: void 0 });
                }),
                (e.renderPreviousButton = function () {
                    var r, o, i;
                    if (!e.props.renderCustomHeader) {
                        var s =
                                (r = e.props.monthsShown) !== null &&
                                r !== void 0
                                    ? r
                                    : a.defaultProps.monthsShown,
                            c = e.props.showPreviousMonths ? s - 1 : 0,
                            l =
                                (o = e.props.monthSelectedIn) !== null &&
                                o !== void 0
                                    ? o
                                    : c,
                            u = We(e.state.date, l),
                            d;
                        switch (!0) {
                            case e.props.showMonthYearPicker:
                                d = Jr(e.state.date, e.props);
                                break;
                            case e.props.showYearPicker:
                                d = Vs(e.state.date, e.props);
                                break;
                            case e.props.showQuarterYearPicker:
                                d = Qs(e.state.date, e.props);
                                break;
                            default:
                                d = zr(u, e.props);
                                break;
                        }
                        if (
                            !(
                                (!((i = e.props.forceShowMonthNavigation) !==
                                    null && i !== void 0
                                    ? i
                                    : a.defaultProps
                                          .forceShowMonthNavigation) &&
                                    !e.props.showDisabledMonthNavigation &&
                                    d) ||
                                e.props.showTimeSelectOnly
                            )
                        ) {
                            var f = [
                                    'react-datepicker__navigation-icon',
                                    'react-datepicker__navigation-icon--previous',
                                ],
                                p = [
                                    'react-datepicker__navigation',
                                    'react-datepicker__navigation--previous',
                                ],
                                h = e.decreaseMonth;
                            (e.props.showMonthYearPicker ||
                                e.props.showQuarterYearPicker ||
                                e.props.showYearPicker) &&
                                (h = e.decreaseYear),
                                d &&
                                    e.props.showDisabledMonthNavigation &&
                                    (p.push(
                                        'react-datepicker__navigation--previous--disabled',
                                    ),
                                    (h = void 0));
                            var v =
                                    e.props.showMonthYearPicker ||
                                    e.props.showQuarterYearPicker ||
                                    e.props.showYearPicker,
                                g = e.props,
                                w = g.previousMonthButtonLabel,
                                k =
                                    w === void 0
                                        ? a.defaultProps
                                              .previousMonthButtonLabel
                                        : w,
                                D = g.previousYearButtonLabel,
                                S =
                                    D === void 0
                                        ? a.defaultProps.previousYearButtonLabel
                                        : D,
                                P = e.props,
                                N = P.previousMonthAriaLabel,
                                E =
                                    N === void 0
                                        ? typeof k == 'string'
                                            ? k
                                            : 'Previous Month'
                                        : N,
                                _ = P.previousYearAriaLabel,
                                M =
                                    _ === void 0
                                        ? typeof S == 'string'
                                            ? S
                                            : 'Previous Year'
                                        : _;
                            return m.createElement(
                                'button',
                                {
                                    type: 'button',
                                    className: p.join(' '),
                                    onClick: h,
                                    onKeyDown: e.props.handleOnKeyDown,
                                    'aria-label': v ? M : E,
                                },
                                m.createElement(
                                    'span',
                                    { className: f.join(' ') },
                                    v ? S : k,
                                ),
                            );
                        }
                    }
                }),
                (e.increaseYear = function () {
                    e.setState(
                        function (r) {
                            var o,
                                i = r.date;
                            return {
                                date: ke(
                                    i,
                                    e.props.showYearPicker
                                        ? (o = e.props.yearItemNumber) !==
                                              null && o !== void 0
                                            ? o
                                            : a.defaultProps.yearItemNumber
                                        : 1,
                                ),
                            };
                        },
                        function () {
                            return e.handleYearChange(e.state.date);
                        },
                    );
                }),
                (e.renderNextButton = function () {
                    var r;
                    if (!e.props.renderCustomHeader) {
                        var o;
                        switch (!0) {
                            case e.props.showMonthYearPicker:
                                o = en(e.state.date, e.props);
                                break;
                            case e.props.showYearPicker:
                                o = qs(e.state.date, e.props);
                                break;
                            case e.props.showQuarterYearPicker:
                                o = js(e.state.date, e.props);
                                break;
                            default:
                                o = Zr(e.state.date, e.props);
                                break;
                        }
                        if (
                            !(
                                (!((r = e.props.forceShowMonthNavigation) !==
                                    null && r !== void 0
                                    ? r
                                    : a.defaultProps
                                          .forceShowMonthNavigation) &&
                                    !e.props.showDisabledMonthNavigation &&
                                    o) ||
                                e.props.showTimeSelectOnly
                            )
                        ) {
                            var i = [
                                    'react-datepicker__navigation',
                                    'react-datepicker__navigation--next',
                                ],
                                s = [
                                    'react-datepicker__navigation-icon',
                                    'react-datepicker__navigation-icon--next',
                                ];
                            e.props.showTimeSelect &&
                                i.push(
                                    'react-datepicker__navigation--next--with-time',
                                ),
                                e.props.todayButton &&
                                    i.push(
                                        'react-datepicker__navigation--next--with-today-button',
                                    );
                            var c = e.increaseMonth;
                            (e.props.showMonthYearPicker ||
                                e.props.showQuarterYearPicker ||
                                e.props.showYearPicker) &&
                                (c = e.increaseYear),
                                o &&
                                    e.props.showDisabledMonthNavigation &&
                                    (i.push(
                                        'react-datepicker__navigation--next--disabled',
                                    ),
                                    (c = void 0));
                            var l =
                                    e.props.showMonthYearPicker ||
                                    e.props.showQuarterYearPicker ||
                                    e.props.showYearPicker,
                                u = e.props,
                                d = u.nextMonthButtonLabel,
                                f =
                                    d === void 0
                                        ? a.defaultProps.nextMonthButtonLabel
                                        : d,
                                p = u.nextYearButtonLabel,
                                h =
                                    p === void 0
                                        ? a.defaultProps.nextYearButtonLabel
                                        : p,
                                v = e.props,
                                g = v.nextMonthAriaLabel,
                                w =
                                    g === void 0
                                        ? typeof f == 'string'
                                            ? f
                                            : 'Next Month'
                                        : g,
                                k = v.nextYearAriaLabel,
                                D =
                                    k === void 0
                                        ? typeof h == 'string'
                                            ? h
                                            : 'Next Year'
                                        : k;
                            return m.createElement(
                                'button',
                                {
                                    type: 'button',
                                    className: i.join(' '),
                                    onClick: c,
                                    onKeyDown: e.props.handleOnKeyDown,
                                    'aria-label': l ? D : w,
                                },
                                m.createElement(
                                    'span',
                                    { className: s.join(' ') },
                                    l ? h : f,
                                ),
                            );
                        }
                    }
                }),
                (e.renderCurrentMonth = function (r) {
                    r === void 0 && (r = e.state.date);
                    var o = ['react-datepicker__current-month'];
                    return (
                        e.props.showYearDropdown &&
                            o.push(
                                'react-datepicker__current-month--hasYearDropdown',
                            ),
                        e.props.showMonthDropdown &&
                            o.push(
                                'react-datepicker__current-month--hasMonthDropdown',
                            ),
                        e.props.showMonthYearDropdown &&
                            o.push(
                                'react-datepicker__current-month--hasMonthYearDropdown',
                            ),
                        m.createElement(
                            'h2',
                            { className: o.join(' ') },
                            $(r, e.props.dateFormat, e.props.locale),
                        )
                    );
                }),
                (e.renderYearDropdown = function (r) {
                    if (
                        (r === void 0 && (r = !1),
                        !(!e.props.showYearDropdown || r))
                    )
                        return m.createElement(
                            fc,
                            H({}, a.defaultProps, e.props, {
                                date: e.state.date,
                                onChange: e.changeYear,
                                year: R(e.state.date),
                            }),
                        );
                }),
                (e.renderMonthDropdown = function (r) {
                    if (
                        (r === void 0 && (r = !1),
                        !(!e.props.showMonthDropdown || r))
                    )
                        return m.createElement(
                            ac,
                            H({}, a.defaultProps, e.props, {
                                month: oe(e.state.date),
                                onChange: e.changeMonth,
                            }),
                        );
                }),
                (e.renderMonthYearDropdown = function (r) {
                    if (
                        (r === void 0 && (r = !1),
                        !(!e.props.showMonthYearDropdown || r))
                    )
                        return m.createElement(
                            sc,
                            H({}, a.defaultProps, e.props, {
                                date: e.state.date,
                                onChange: e.changeMonthYear,
                            }),
                        );
                }),
                (e.handleTodayButtonClick = function (r) {
                    e.props.onSelect(Kr(), r),
                        e.props.setPreSelection &&
                            e.props.setPreSelection(Kr());
                }),
                (e.renderTodayButton = function () {
                    if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
                        return m.createElement(
                            'div',
                            {
                                className: 'react-datepicker__today-button',
                                onClick: e.handleTodayButtonClick,
                            },
                            e.props.todayButton,
                        );
                }),
                (e.renderDefaultHeader = function (r) {
                    var o = r.monthDate,
                        i = r.i;
                    return m.createElement(
                        'div',
                        {
                            className: 'react-datepicker__header '.concat(
                                e.props.showTimeSelect
                                    ? 'react-datepicker__header--has-time-select'
                                    : '',
                            ),
                        },
                        e.renderCurrentMonth(o),
                        m.createElement(
                            'div',
                            {
                                className:
                                    'react-datepicker__header__dropdown react-datepicker__header__dropdown--'.concat(
                                        e.props.dropdownMode,
                                    ),
                                onFocus: e.handleDropdownFocus,
                            },
                            e.renderMonthDropdown(i !== 0),
                            e.renderMonthYearDropdown(i !== 0),
                            e.renderYearDropdown(i !== 0),
                        ),
                        m.createElement(
                            'div',
                            { className: 'react-datepicker__day-names' },
                            e.header(o),
                        ),
                    );
                }),
                (e.renderCustomHeader = function (r) {
                    var o,
                        i,
                        s = r.monthDate,
                        c = r.i;
                    if (
                        (e.props.showTimeSelect && !e.state.monthContainer) ||
                        e.props.showTimeSelectOnly
                    )
                        return null;
                    var l = zr(e.state.date, e.props),
                        u = Zr(e.state.date, e.props),
                        d = Jr(e.state.date, e.props),
                        f = en(e.state.date, e.props),
                        p =
                            !e.props.showMonthYearPicker &&
                            !e.props.showQuarterYearPicker &&
                            !e.props.showYearPicker;
                    return m.createElement(
                        'div',
                        {
                            className:
                                'react-datepicker__header react-datepicker__header--custom',
                            onFocus: e.props.onDropdownFocus,
                        },
                        (i = (o = e.props).renderCustomHeader) === null ||
                            i === void 0
                            ? void 0
                            : i.call(
                                  o,
                                  H(H({}, e.state), {
                                      customHeaderCount: c,
                                      monthDate: s,
                                      changeMonth: e.changeMonth,
                                      changeYear: e.changeYear,
                                      decreaseMonth: e.decreaseMonth,
                                      increaseMonth: e.increaseMonth,
                                      decreaseYear: e.decreaseYear,
                                      increaseYear: e.increaseYear,
                                      prevMonthButtonDisabled: l,
                                      nextMonthButtonDisabled: u,
                                      prevYearButtonDisabled: d,
                                      nextYearButtonDisabled: f,
                                  }),
                              ),
                        p &&
                            m.createElement(
                                'div',
                                { className: 'react-datepicker__day-names' },
                                e.header(s),
                            ),
                    );
                }),
                (e.renderYearHeader = function (r) {
                    var o = r.monthDate,
                        i = e.props,
                        s = i.showYearPicker,
                        c = i.yearItemNumber,
                        l = c === void 0 ? a.defaultProps.yearItemNumber : c,
                        u = Oe(o, l),
                        d = u.startPeriod,
                        f = u.endPeriod;
                    return m.createElement(
                        'div',
                        {
                            className:
                                'react-datepicker__header react-datepicker-year-header',
                        },
                        s ? ''.concat(d, ' - ').concat(f) : R(o),
                    );
                }),
                (e.renderHeader = function (r) {
                    var o = r.monthDate,
                        i = r.i,
                        s = i === void 0 ? 0 : i,
                        c = { monthDate: o, i: s };
                    switch (!0) {
                        case e.props.renderCustomHeader !== void 0:
                            return e.renderCustomHeader(c);
                        case e.props.showMonthYearPicker ||
                            e.props.showQuarterYearPicker ||
                            e.props.showYearPicker:
                            return e.renderYearHeader(c);
                        default:
                            return e.renderDefaultHeader(c);
                    }
                }),
                (e.renderMonths = function () {
                    var r, o;
                    if (
                        !(e.props.showTimeSelectOnly || e.props.showYearPicker)
                    ) {
                        for (
                            var i = [],
                                s =
                                    (r = e.props.monthsShown) !== null &&
                                    r !== void 0
                                        ? r
                                        : a.defaultProps.monthsShown,
                                c = e.props.showPreviousMonths ? s - 1 : 0,
                                l =
                                    e.props.showMonthYearPicker ||
                                    e.props.showQuarterYearPicker
                                        ? ke(e.state.date, c)
                                        : We(e.state.date, c),
                                u =
                                    (o = e.props.monthSelectedIn) !== null &&
                                    o !== void 0
                                        ? o
                                        : c,
                                d = 0;
                            d < s;
                            ++d
                        ) {
                            var f = d - u + c,
                                p =
                                    e.props.showMonthYearPicker ||
                                    e.props.showQuarterYearPicker
                                        ? ke(l, f)
                                        : pe(l, f),
                                h = 'month-'.concat(d),
                                v = d < s - 1,
                                g = d > 0;
                            i.push(
                                m.createElement(
                                    'div',
                                    {
                                        key: h,
                                        ref: function (w) {
                                            e.monthContainer = w ?? void 0;
                                        },
                                        className:
                                            'react-datepicker__month-container',
                                    },
                                    e.renderHeader({ monthDate: p, i: d }),
                                    m.createElement(
                                        rc,
                                        H({}, a.defaultProps, e.props, {
                                            containerRef: e.containerRef,
                                            ariaLabelPrefix:
                                                e.props.monthAriaLabelPrefix,
                                            day: p,
                                            onDayClick: e.handleDayClick,
                                            handleOnKeyDown:
                                                e.props.handleOnDayKeyDown,
                                            handleOnMonthKeyDown:
                                                e.props.handleOnKeyDown,
                                            onDayMouseEnter:
                                                e.handleDayMouseEnter,
                                            onMouseLeave:
                                                e.handleMonthMouseLeave,
                                            orderInDisplay: d,
                                            selectingDate:
                                                e.state.selectingDate,
                                            monthShowsDuplicateDaysEnd: v,
                                            monthShowsDuplicateDaysStart: g,
                                        }),
                                    ),
                                ),
                            );
                        }
                        return i;
                    }
                }),
                (e.renderYears = function () {
                    if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
                        return m.createElement(
                            'div',
                            { className: 'react-datepicker__year--container' },
                            e.renderHeader({ monthDate: e.state.date }),
                            m.createElement(
                                lc,
                                H({}, a.defaultProps, e.props, {
                                    selectingDate: e.state.selectingDate,
                                    date: e.state.date,
                                    onDayClick: e.handleDayClick,
                                    clearSelectingDate: e.clearSelectingDate,
                                    onYearMouseEnter: e.handleYearMouseEnter,
                                    onYearMouseLeave: e.handleYearMouseLeave,
                                }),
                            ),
                        );
                }),
                (e.renderTimeSection = function () {
                    if (
                        e.props.showTimeSelect &&
                        (e.state.monthContainer || e.props.showTimeSelectOnly)
                    )
                        return m.createElement(
                            cc,
                            H({}, a.defaultProps, e.props, {
                                onChange: e.props.onTimeChange,
                                format: e.props.timeFormat,
                                intervals: e.props.timeIntervals,
                                monthRef: e.state.monthContainer,
                            }),
                        );
                }),
                (e.renderInputTimeSection = function () {
                    var r = e.props.selected
                            ? new Date(e.props.selected)
                            : void 0,
                        o = r && Xt(r) && !!e.props.selected,
                        i = o
                            ? ''
                                  .concat(rn(r.getHours()), ':')
                                  .concat(rn(r.getMinutes()))
                            : '';
                    if (e.props.showTimeInput)
                        return m.createElement(
                            zs,
                            H({}, a.defaultProps, e.props, {
                                date: r,
                                timeString: i,
                                onChange: e.props.onTimeChange,
                            }),
                        );
                }),
                (e.renderAriaLiveRegion = function () {
                    var r,
                        o = Oe(
                            e.state.date,
                            (r = e.props.yearItemNumber) !== null &&
                                r !== void 0
                                ? r
                                : a.defaultProps.yearItemNumber,
                        ),
                        i = o.startPeriod,
                        s = o.endPeriod,
                        c;
                    return (
                        e.props.showYearPicker
                            ? (c = ''.concat(i, ' - ').concat(s))
                            : e.props.showMonthYearPicker ||
                                e.props.showQuarterYearPicker
                              ? (c = R(e.state.date))
                              : (c = ''
                                    .concat(
                                        xr(oe(e.state.date), e.props.locale),
                                        ' ',
                                    )
                                    .concat(R(e.state.date))),
                        m.createElement(
                            'span',
                            {
                                role: 'alert',
                                'aria-live': 'polite',
                                className: 'react-datepicker__aria-live',
                            },
                            e.state.isRenderAriaLiveMessage && c,
                        )
                    );
                }),
                (e.renderChildren = function () {
                    if (e.props.children)
                        return m.createElement(
                            'div',
                            {
                                className:
                                    'react-datepicker__children-container',
                            },
                            e.props.children,
                        );
                }),
                (e.containerRef = y.createRef()),
                (e.state = {
                    date: e.getDateInView(),
                    selectingDate: void 0,
                    monthContainer: void 0,
                    isRenderAriaLiveMessage: !1,
                }),
                e
            );
        }
        return (
            Object.defineProperty(a, 'defaultProps', {
                get: function () {
                    return {
                        monthsShown: 1,
                        forceShowMonthNavigation: !1,
                        timeCaption: 'Time',
                        previousYearButtonLabel: 'Previous Year',
                        nextYearButtonLabel: 'Next Year',
                        previousMonthButtonLabel: 'Previous Month',
                        nextMonthButtonLabel: 'Next Month',
                        yearItemNumber: pt,
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (a.prototype.componentDidMount = function () {
                var t = this;
                this.props.showTimeSelect &&
                    (this.assignMonthContainer = (function () {
                        t.setState({ monthContainer: t.monthContainer });
                    })());
            }),
            (a.prototype.componentDidUpdate = function (t) {
                var e = this;
                if (
                    this.props.preSelection &&
                    (!W(this.props.preSelection, t.preSelection) ||
                        this.props.monthSelectedIn !== t.monthSelectedIn)
                ) {
                    var r = !ne(this.state.date, this.props.preSelection);
                    this.setState(
                        { date: this.props.preSelection },
                        function () {
                            return r && e.handleCustomMonthChange(e.state.date);
                        },
                    );
                } else
                    this.props.openToDate &&
                        !W(this.props.openToDate, t.openToDate) &&
                        this.setState({ date: this.props.openToDate });
            }),
            (a.prototype.render = function () {
                var t = this.props.container || Es;
                return m.createElement(
                    $t,
                    {
                        onClickOutside: this.handleClickOutside,
                        style: { display: 'contents' },
                        ignoreClass: this.props.outsideClickIgnoreClass,
                    },
                    m.createElement(
                        'div',
                        {
                            style: { display: 'contents' },
                            ref: this.containerRef,
                        },
                        m.createElement(
                            t,
                            {
                                className: re(
                                    'react-datepicker',
                                    this.props.className,
                                    {
                                        'react-datepicker--time-only':
                                            this.props.showTimeSelectOnly,
                                    },
                                ),
                                showTime:
                                    this.props.showTimeSelect ||
                                    this.props.showTimeInput,
                                showTimeSelectOnly:
                                    this.props.showTimeSelectOnly,
                            },
                            this.renderAriaLiveRegion(),
                            this.renderPreviousButton(),
                            this.renderNextButton(),
                            this.renderMonths(),
                            this.renderYears(),
                            this.renderTodayButton(),
                            this.renderTimeSection(),
                            this.renderInputTimeSection(),
                            this.renderChildren(),
                        ),
                    ),
                );
            }),
            a
        );
    })(y.Component),
    vc = function (n) {
        var a = n.icon,
            t = n.className,
            e = t === void 0 ? '' : t,
            r = n.onClick,
            o = 'react-datepicker__calendar-icon';
        if (typeof a == 'string')
            return m.createElement('i', {
                className: ''.concat(o, ' ').concat(a, ' ').concat(e),
                'aria-hidden': 'true',
                onClick: r,
            });
        if (m.isValidElement(a)) {
            var i = a;
            return m.cloneElement(i, {
                className: ''
                    .concat(i.props.className || '', ' ')
                    .concat(o, ' ')
                    .concat(e),
                onClick: function (s) {
                    typeof i.props.onClick == 'function' && i.props.onClick(s),
                        typeof r == 'function' && r(s);
                },
            });
        }
        return m.createElement(
            'svg',
            {
                className: ''.concat(o, ' ').concat(e),
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 448 512',
                onClick: r,
            },
            m.createElement('path', {
                d: 'M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z',
            }),
        );
    },
    Kn = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.portalRoot = null), (e.el = document.createElement('div')), e
            );
        }
        return (
            (a.prototype.componentDidMount = function () {
                (this.portalRoot = (
                    this.props.portalHost || document
                ).getElementById(this.props.portalId)),
                    this.portalRoot ||
                        ((this.portalRoot = document.createElement('div')),
                        this.portalRoot.setAttribute('id', this.props.portalId),
                        (this.props.portalHost || document.body).appendChild(
                            this.portalRoot,
                        )),
                    this.portalRoot.appendChild(this.el);
            }),
            (a.prototype.componentWillUnmount = function () {
                this.portalRoot && this.portalRoot.removeChild(this.el);
            }),
            (a.prototype.render = function () {
                return ea.createPortal(this.props.children, this.el);
            }),
            a
        );
    })(y.Component),
    gc = '[tabindex], a, button, input, select, textarea',
    wc = function (n) {
        return (
            (n instanceof HTMLAnchorElement || !n.disabled) && n.tabIndex !== -1
        );
    },
    Un = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.getTabChildren = function () {
                    var r;
                    return Array.prototype.slice
                        .call(
                            (r = e.tabLoopRef.current) === null || r === void 0
                                ? void 0
                                : r.querySelectorAll(gc),
                            1,
                            -1,
                        )
                        .filter(wc);
                }),
                (e.handleFocusStart = function () {
                    var r = e.getTabChildren();
                    r && r.length > 1 && r[r.length - 1].focus();
                }),
                (e.handleFocusEnd = function () {
                    var r = e.getTabChildren();
                    r && r.length > 1 && r[0].focus();
                }),
                (e.tabLoopRef = y.createRef()),
                e
            );
        }
        return (
            (a.prototype.render = function () {
                var t;
                return (
                    (t = this.props.enableTabLoop) !== null && t !== void 0
                        ? t
                        : a.defaultProps.enableTabLoop
                )
                    ? m.createElement(
                          'div',
                          {
                              className: 'react-datepicker__tab-loop',
                              ref: this.tabLoopRef,
                          },
                          m.createElement('div', {
                              className: 'react-datepicker__tab-loop__start',
                              tabIndex: 0,
                              onFocus: this.handleFocusStart,
                          }),
                          this.props.children,
                          m.createElement('div', {
                              className: 'react-datepicker__tab-loop__end',
                              tabIndex: 0,
                              onFocus: this.handleFocusEnd,
                          }),
                      )
                    : this.props.children;
            }),
            (a.defaultProps = { enableTabLoop: !0 }),
            a
        );
    })(y.Component);
function yc(n) {
    var a = function (t) {
        var e,
            r = typeof t.hidePopper == 'boolean' ? t.hidePopper : !0,
            o = y.useRef(null),
            i = Ps(
                H(
                    {
                        open: !r,
                        whileElementsMounted: Ra,
                        placement: t.popperPlacement,
                        middleware: we(
                            [Ha({ padding: 15 }), Wa(10), Ba({ element: o })],
                            (e = t.popperModifiers) !== null && e !== void 0
                                ? e
                                : [],
                            !0,
                        ),
                    },
                    t.popperProps,
                ),
            ),
            s = H(H({}, t), {
                hidePopper: r,
                popperProps: H(H({}, i), { arrowRef: o }),
            });
        return m.createElement(n, H({}, s));
    };
    return a;
}
var Dc = (function (n) {
        te(a, n);
        function a() {
            return (n !== null && n.apply(this, arguments)) || this;
        }
        return (
            Object.defineProperty(a, 'defaultProps', {
                get: function () {
                    return { hidePopper: !0 };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (a.prototype.render = function () {
                var t = this.props,
                    e = t.className,
                    r = t.wrapperClassName,
                    o = t.hidePopper,
                    i = o === void 0 ? a.defaultProps.hidePopper : o,
                    s = t.popperComponent,
                    c = t.targetComponent,
                    l = t.enableTabLoop,
                    u = t.popperOnKeyDown,
                    d = t.portalId,
                    f = t.portalHost,
                    p = t.popperProps,
                    h = t.showArrow,
                    v = void 0;
                if (!i) {
                    var g = re('react-datepicker-popper', e);
                    v = m.createElement(
                        Un,
                        { enableTabLoop: l },
                        m.createElement(
                            'div',
                            {
                                ref: p.refs.setFloating,
                                style: p.floatingStyles,
                                className: g,
                                'data-placement': p.placement,
                                onKeyDown: u,
                            },
                            s,
                            h &&
                                m.createElement(bs, {
                                    ref: p.arrowRef,
                                    context: p.context,
                                    fill: 'currentColor',
                                    strokeWidth: 1,
                                    height: 8,
                                    width: 16,
                                    style: { transform: 'translateY(-1px)' },
                                    className: 'react-datepicker__triangle',
                                }),
                        ),
                    );
                }
                this.props.popperContainer &&
                    (v = y.createElement(this.props.popperContainer, {}, v)),
                    d &&
                        !i &&
                        (v = m.createElement(
                            Kn,
                            { portalId: d, portalHost: f },
                            v,
                        ));
                var w = re('react-datepicker-wrapper', r);
                return m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                        'div',
                        { ref: p.refs.setReference, className: w },
                        c,
                    ),
                    v,
                );
            }),
            a
        );
    })(y.Component),
    bc = yc(Dc),
    ln = 'react-datepicker-ignore-onclickoutside';
function kc(n, a) {
    return n && a ? oe(n) !== oe(a) || R(n) !== R(a) : n !== a;
}
var nr = 'Date input not valid.',
    un = (function (n) {
        te(a, n);
        function a(t) {
            var e = n.call(this, t) || this;
            return (
                (e.calendar = null),
                (e.input = null),
                (e.getPreSelection = function () {
                    return e.props.openToDate
                        ? e.props.openToDate
                        : e.props.selectsEnd && e.props.startDate
                          ? e.props.startDate
                          : e.props.selectsStart && e.props.endDate
                            ? e.props.endDate
                            : j();
                }),
                (e.modifyHolidays = function () {
                    var r;
                    return (r = e.props.holidays) === null || r === void 0
                        ? void 0
                        : r.reduce(function (o, i) {
                              var s = new Date(i.date);
                              return Xt(s)
                                  ? we(
                                        we([], o, !0),
                                        [H(H({}, i), { date: s })],
                                        !1,
                                    )
                                  : o;
                          }, []);
                }),
                (e.calcInitialState = function () {
                    var r,
                        o = e.getPreSelection(),
                        i = jn(e.props),
                        s = Vn(e.props),
                        c = i && Qe(o, Ct(i)) ? i : s && Ye(o, Ur(s)) ? s : o;
                    return {
                        open: e.props.startOpen || !1,
                        preventFocus: !1,
                        inputValue: null,
                        preSelection:
                            (r = e.props.selectsRange
                                ? e.props.startDate
                                : e.props.selected) !== null && r !== void 0
                                ? r
                                : c,
                        highlightDates: tn(e.props.highlightDates),
                        focused: !1,
                        shouldFocusDayInline: !1,
                        isRenderAriaLiveMessage: !1,
                        wasHidden: !1,
                    };
                }),
                (e.resetHiddenStatus = function () {
                    e.setState(H(H({}, e.state), { wasHidden: !1 }));
                }),
                (e.setHiddenStatus = function () {
                    e.setState(H(H({}, e.state), { wasHidden: !0 }));
                }),
                (e.setHiddenStateOnVisibilityHidden = function () {
                    document.visibilityState === 'hidden' &&
                        e.setHiddenStatus();
                }),
                (e.clearPreventFocusTimeout = function () {
                    e.preventFocusTimeout &&
                        clearTimeout(e.preventFocusTimeout);
                }),
                (e.setFocus = function () {
                    var r, o;
                    (o =
                        (r = e.input) === null || r === void 0
                            ? void 0
                            : r.focus) === null ||
                        o === void 0 ||
                        o.call(r, { preventScroll: !0 });
                }),
                (e.setBlur = function () {
                    var r, o;
                    (o =
                        (r = e.input) === null || r === void 0
                            ? void 0
                            : r.blur) === null ||
                        o === void 0 ||
                        o.call(r),
                        e.cancelFocusInput();
                }),
                (e.deferBlur = function () {
                    requestAnimationFrame(function () {
                        e.setBlur();
                    });
                }),
                (e.setOpen = function (r, o) {
                    o === void 0 && (o = !1),
                        e.setState(
                            {
                                open: r,
                                preSelection:
                                    r && e.state.open
                                        ? e.state.preSelection
                                        : e.calcInitialState().preSelection,
                                lastPreSelectChange: ar,
                            },
                            function () {
                                r ||
                                    e.setState(
                                        function (i) {
                                            return {
                                                focused: o ? i.focused : !1,
                                            };
                                        },
                                        function () {
                                            !o && e.deferBlur(),
                                                e.setState({
                                                    inputValue: null,
                                                });
                                        },
                                    );
                            },
                        );
                }),
                (e.inputOk = function () {
                    return _e(e.state.preSelection);
                }),
                (e.isCalendarOpen = function () {
                    return e.props.open === void 0
                        ? e.state.open && !e.props.disabled && !e.props.readOnly
                        : e.props.open;
                }),
                (e.handleFocus = function (r) {
                    var o,
                        i,
                        s = e.state.wasHidden,
                        c = s ? e.state.open : !0;
                    s && e.resetHiddenStatus(),
                        e.state.preventFocus ||
                            ((i = (o = e.props).onFocus) === null ||
                                i === void 0 ||
                                i.call(o, r),
                            c &&
                                !e.props.preventOpenOnFocus &&
                                !e.props.readOnly &&
                                e.setOpen(!0)),
                        e.setState({ focused: !0 });
                }),
                (e.sendFocusBackToInput = function () {
                    e.preventFocusTimeout && e.clearPreventFocusTimeout(),
                        e.setState({ preventFocus: !0 }, function () {
                            e.preventFocusTimeout = setTimeout(function () {
                                e.setFocus(), e.setState({ preventFocus: !1 });
                            });
                        });
                }),
                (e.cancelFocusInput = function () {
                    clearTimeout(e.inputFocusTimeout),
                        (e.inputFocusTimeout = void 0);
                }),
                (e.deferFocusInput = function () {
                    e.cancelFocusInput(),
                        (e.inputFocusTimeout = setTimeout(function () {
                            return e.setFocus();
                        }, 1));
                }),
                (e.handleDropdownFocus = function () {
                    e.cancelFocusInput();
                }),
                (e.handleBlur = function (r) {
                    var o, i;
                    (!e.state.open ||
                        e.props.withPortal ||
                        e.props.showTimeInput) &&
                        ((i = (o = e.props).onBlur) === null ||
                            i === void 0 ||
                            i.call(o, r)),
                        e.state.open && e.props.open === !1 && e.setOpen(!1),
                        e.setState({ focused: !1 });
                }),
                (e.handleCalendarClickOutside = function (r) {
                    var o, i;
                    e.props.inline || e.setOpen(!1),
                        (i = (o = e.props).onClickOutside) === null ||
                            i === void 0 ||
                            i.call(o, r),
                        e.props.withPortal && r.preventDefault();
                }),
                (e.handleChange = function () {
                    for (
                        var r, o, i, s, c, l = [], u = 0;
                        u < arguments.length;
                        u++
                    )
                        l[u] = arguments[u];
                    var d = l[0];
                    if (
                        !(
                            e.props.onChangeRaw &&
                            (e.props.onChangeRaw.apply(e, l),
                            !d ||
                                typeof d.isDefaultPrevented != 'function' ||
                                d.isDefaultPrevented())
                        )
                    ) {
                        e.setState({
                            inputValue:
                                (d == null ? void 0 : d.target) instanceof
                                HTMLInputElement
                                    ? d.target.value
                                    : null,
                            lastPreSelectChange: _c,
                        });
                        var f = e.props,
                            p = f.selectsRange,
                            h = f.startDate,
                            v = f.endDate,
                            g =
                                (r = e.props.dateFormat) !== null &&
                                r !== void 0
                                    ? r
                                    : a.defaultProps.dateFormat,
                            w =
                                (o = e.props.strictParsing) !== null &&
                                o !== void 0
                                    ? o
                                    : a.defaultProps.strictParsing,
                            k =
                                (d == null ? void 0 : d.target) instanceof
                                HTMLInputElement
                                    ? d.target.value
                                    : '';
                        if (p) {
                            var D = k.split('-', 2).map(function (Q) {
                                    return Q.trim();
                                }),
                                S = D[0],
                                P = D[1],
                                N = er(S ?? '', g, e.props.locale, w),
                                E = er(P ?? '', g, e.props.locale, w),
                                _ =
                                    (h == null ? void 0 : h.getTime()) !==
                                    (N == null ? void 0 : N.getTime()),
                                M =
                                    (v == null ? void 0 : v.getTime()) !==
                                    (E == null ? void 0 : E.getTime());
                            if (
                                (!_ && !M) ||
                                (N && ue(N, e.props)) ||
                                (E && ue(E, e.props))
                            )
                                return;
                            (s = (i = e.props).onChange) === null ||
                                s === void 0 ||
                                s.call(i, [N, E], d);
                        } else {
                            var O = er(
                                k,
                                g,
                                e.props.locale,
                                w,
                                (c = e.props.selected) !== null && c !== void 0
                                    ? c
                                    : void 0,
                            );
                            (O || !k) && e.setSelected(O, d, !0);
                        }
                    }
                }),
                (e.handleSelect = function (r, o, i) {
                    if (
                        (e.props.shouldCloseOnSelect &&
                            !e.props.showTimeSelect &&
                            e.sendFocusBackToInput(),
                        e.props.onChangeRaw && e.props.onChangeRaw(o),
                        e.setSelected(r, o, !1, i),
                        e.props.showDateSelect &&
                            e.setState({ isRenderAriaLiveMessage: !0 }),
                        !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
                    )
                        e.setPreSelection(r);
                    else if (!e.props.inline) {
                        e.props.selectsRange || e.setOpen(!1);
                        var s = e.props,
                            c = s.startDate,
                            l = s.endDate;
                        c &&
                            !l &&
                            (e.props.swapRange || !on(r, c)) &&
                            e.setOpen(!1);
                    }
                }),
                (e.setSelected = function (r, o, i, s) {
                    var c,
                        l,
                        u = r;
                    if (e.props.showYearPicker) {
                        if (u !== null && St(R(u), e.props)) return;
                    } else if (e.props.showMonthYearPicker) {
                        if (u !== null && Qn(u, e.props)) return;
                    } else if (u !== null && ue(u, e.props)) return;
                    var d = e.props,
                        f = d.onChange,
                        p = d.selectsRange,
                        h = d.startDate,
                        v = d.endDate,
                        g = d.selectsMultiple,
                        w = d.selectedDates,
                        k = d.minTime,
                        D = d.swapRange;
                    if (
                        !Le(e.props.selected, u) ||
                        e.props.allowSameDay ||
                        p ||
                        g
                    )
                        if (
                            (u !== null &&
                                (e.props.selected &&
                                    (!i ||
                                        (!e.props.showTimeSelect &&
                                            !e.props.showTimeSelectOnly &&
                                            !e.props.showTimeInput)) &&
                                    (u = tr(u, {
                                        hour: xe(e.props.selected),
                                        minute: Me(e.props.selected),
                                        second: Te(e.props.selected),
                                    })),
                                !i &&
                                    (e.props.showTimeSelect ||
                                        e.props.showTimeSelectOnly) &&
                                    k &&
                                    (u = tr(u, {
                                        hour: k.getHours(),
                                        minute: k.getMinutes(),
                                        second: k.getSeconds(),
                                    })),
                                e.props.inline ||
                                    e.setState({ preSelection: u }),
                                e.props.focusSelectedMonth ||
                                    e.setState({ monthSelectedIn: s })),
                            p)
                        ) {
                            var S = !h && !v,
                                P = h && !v,
                                N = h && v;
                            S
                                ? f == null || f([u, null], o)
                                : P &&
                                  (u === null
                                      ? f == null || f([null, null], o)
                                      : on(u, h)
                                        ? D
                                            ? f == null || f([u, h], o)
                                            : f == null || f([u, null], o)
                                        : f == null || f([h, u], o)),
                                N && (f == null || f([u, null], o));
                        } else if (g) {
                            if (u !== null)
                                if (!(w != null && w.length))
                                    f == null || f([u], o);
                                else {
                                    var E = w.some(function (M) {
                                        return W(M, u);
                                    });
                                    if (E) {
                                        var _ = w.filter(function (M) {
                                            return !W(M, u);
                                        });
                                        f == null || f(_, o);
                                    } else
                                        f == null ||
                                            f(we(we([], w, !0), [u], !1), o);
                                }
                        } else f == null || f(u, o);
                    i ||
                        ((l = (c = e.props).onSelect) === null ||
                            l === void 0 ||
                            l.call(c, u, o),
                        e.setState({ inputValue: null }));
                }),
                (e.setPreSelection = function (r) {
                    var o = _e(e.props.minDate),
                        i = _e(e.props.maxDate),
                        s = !0;
                    if (r) {
                        var c = Ct(r);
                        if (o && i) s = ct(r, e.props.minDate, e.props.maxDate);
                        else if (o) {
                            var l = Ct(e.props.minDate);
                            s = Ye(r, l) || Le(c, l);
                        } else if (i) {
                            var u = Ur(e.props.maxDate);
                            s = Qe(r, u) || Le(c, u);
                        }
                    }
                    s && e.setState({ preSelection: r });
                }),
                (e.toggleCalendar = function () {
                    e.setOpen(!e.state.open);
                }),
                (e.handleTimeChange = function (r) {
                    var o, i;
                    if (!(e.props.selectsRange || e.props.selectsMultiple)) {
                        var s = e.props.selected
                                ? e.props.selected
                                : e.getPreSelection(),
                            c = e.props.selected
                                ? r
                                : tr(s, { hour: xe(r), minute: Me(r) });
                        e.setState({ preSelection: c }),
                            (i = (o = e.props).onChange) === null ||
                                i === void 0 ||
                                i.call(o, c),
                            e.props.shouldCloseOnSelect &&
                                !e.props.showTimeInput &&
                                (e.sendFocusBackToInput(), e.setOpen(!1)),
                            e.props.showTimeInput && e.setOpen(!0),
                            (e.props.showTimeSelectOnly ||
                                e.props.showTimeSelect) &&
                                e.setState({ isRenderAriaLiveMessage: !0 }),
                            e.setState({ inputValue: null });
                    }
                }),
                (e.onInputClick = function () {
                    var r, o;
                    !e.props.disabled && !e.props.readOnly && e.setOpen(!0),
                        (o = (r = e.props).onInputClick) === null ||
                            o === void 0 ||
                            o.call(r);
                }),
                (e.onInputKeyDown = function (r) {
                    var o, i, s, c, l, u;
                    (i = (o = e.props).onKeyDown) === null ||
                        i === void 0 ||
                        i.call(o, r);
                    var d = r.key;
                    if (
                        !e.state.open &&
                        !e.props.inline &&
                        !e.props.preventOpenOnFocus
                    ) {
                        (d === b.ArrowDown ||
                            d === b.ArrowUp ||
                            d === b.Enter) &&
                            ((s = e.onInputClick) === null ||
                                s === void 0 ||
                                s.call(e));
                        return;
                    }
                    if (e.state.open) {
                        if (d === b.ArrowDown || d === b.ArrowUp) {
                            r.preventDefault();
                            var f = e.props.showTimeSelectOnly
                                    ? ".react-datepicker__time-list-item[tabindex='0']"
                                    : e.props.showWeekPicker &&
                                        e.props.showWeekNumbers
                                      ? '.react-datepicker__week-number[tabindex="0"]'
                                      : e.props.showFullMonthYearPicker ||
                                          e.props.showMonthYearPicker
                                        ? '.react-datepicker__month-text[tabindex="0"]'
                                        : '.react-datepicker__day[tabindex="0"]',
                                p =
                                    ((c = e.calendar) === null || c === void 0
                                        ? void 0
                                        : c.containerRef.current) instanceof
                                        Element &&
                                    e.calendar.containerRef.current.querySelector(
                                        f,
                                    );
                            p instanceof HTMLElement &&
                                p.focus({ preventScroll: !0 });
                            return;
                        }
                        var h = j(e.state.preSelection);
                        d === b.Enter
                            ? (r.preventDefault(),
                              r.target.blur(),
                              e.inputOk() && e.state.lastPreSelectChange === ar
                                  ? (e.handleSelect(h, r),
                                    !e.props.shouldCloseOnSelect &&
                                        e.setPreSelection(h))
                                  : e.setOpen(!1))
                            : d === b.Escape
                              ? (r.preventDefault(),
                                r.target.blur(),
                                e.sendFocusBackToInput(),
                                e.setOpen(!1))
                              : d === b.Tab && e.setOpen(!1),
                            e.inputOk() ||
                                (u = (l = e.props).onInputError) === null ||
                                u === void 0 ||
                                u.call(l, { code: 1, msg: nr });
                    }
                }),
                (e.onPortalKeyDown = function (r) {
                    var o = r.key;
                    o === b.Escape &&
                        (r.preventDefault(),
                        e.setState({ preventFocus: !0 }, function () {
                            e.setOpen(!1),
                                setTimeout(function () {
                                    e.setFocus(),
                                        e.setState({ preventFocus: !1 });
                                });
                        }));
                }),
                (e.onDayKeyDown = function (r) {
                    var o,
                        i,
                        s,
                        c,
                        l,
                        u,
                        d = e.props,
                        f = d.minDate,
                        p = d.maxDate,
                        h = d.disabledKeyboardNavigation,
                        v = d.showWeekPicker,
                        g = d.shouldCloseOnSelect,
                        w = d.locale,
                        k = d.calendarStartDay,
                        D = d.adjustDateOnChange,
                        S = d.inline;
                    if (
                        ((i = (o = e.props).onKeyDown) === null ||
                            i === void 0 ||
                            i.call(o, r),
                        !h)
                    ) {
                        var P = r.key,
                            N = r.shiftKey,
                            E = j(e.state.preSelection),
                            _ = function (A, T) {
                                var I = T;
                                switch (A) {
                                    case b.ArrowRight:
                                        I = v ? Rt(T, 1) : fe(T, 1);
                                        break;
                                    case b.ArrowLeft:
                                        I = v ? Qr(T) : Gi(T);
                                        break;
                                    case b.ArrowUp:
                                        I = Qr(T);
                                        break;
                                    case b.ArrowDown:
                                        I = Rt(T, 1);
                                        break;
                                    case b.PageUp:
                                        I = N ? et(T, 1) : We(T, 1);
                                        break;
                                    case b.PageDown:
                                        I = N ? ke(T, 1) : pe(T, 1);
                                        break;
                                    case b.Home:
                                        I = Ne(T, w, k);
                                        break;
                                    case b.End:
                                        I = Is(T);
                                        break;
                                }
                                return I;
                            },
                            M = function (A, T) {
                                for (
                                    var I = 40,
                                        Y = A,
                                        z = !1,
                                        ee = 0,
                                        ie = _(A, T);
                                    !z;

                                ) {
                                    if (ee >= I) {
                                        ie = T;
                                        break;
                                    }
                                    f &&
                                        ie < f &&
                                        ((Y = b.ArrowRight),
                                        (ie = ue(f, e.props) ? _(Y, ie) : f)),
                                        p &&
                                            ie > p &&
                                            ((Y = b.ArrowLeft),
                                            (ie = ue(p, e.props)
                                                ? _(Y, ie)
                                                : p)),
                                        ue(ie, e.props)
                                            ? ((Y === b.PageUp ||
                                                  Y === b.Home) &&
                                                  (Y = b.ArrowRight),
                                              (Y === b.PageDown ||
                                                  Y === b.End) &&
                                                  (Y = b.ArrowLeft),
                                              (ie = _(Y, ie)))
                                            : (z = !0),
                                        ee++;
                                }
                                return ie;
                            };
                        if (P === b.Enter) {
                            r.preventDefault(),
                                e.handleSelect(E, r),
                                !g && e.setPreSelection(E);
                            return;
                        } else if (P === b.Escape) {
                            r.preventDefault(),
                                e.setOpen(!1),
                                e.inputOk() ||
                                    (c = (s = e.props).onInputError) === null ||
                                    c === void 0 ||
                                    c.call(s, { code: 1, msg: nr });
                            return;
                        }
                        var O = null;
                        switch (P) {
                            case b.ArrowLeft:
                            case b.ArrowRight:
                            case b.ArrowUp:
                            case b.ArrowDown:
                            case b.PageUp:
                            case b.PageDown:
                            case b.Home:
                            case b.End:
                                O = M(P, E);
                                break;
                        }
                        if (!O) {
                            (u = (l = e.props).onInputError) === null ||
                                u === void 0 ||
                                u.call(l, { code: 1, msg: nr });
                            return;
                        }
                        if (
                            (r.preventDefault(),
                            e.setState({ lastPreSelectChange: ar }),
                            D && e.setSelected(O),
                            e.setPreSelection(O),
                            S)
                        ) {
                            var Q = oe(E),
                                F = oe(O),
                                K = R(E),
                                U = R(O);
                            Q !== F || K !== U
                                ? e.setState({ shouldFocusDayInline: !0 })
                                : e.setState({ shouldFocusDayInline: !1 });
                        }
                    }
                }),
                (e.onPopperKeyDown = function (r) {
                    var o = r.key;
                    o === b.Escape &&
                        (r.preventDefault(), e.sendFocusBackToInput());
                }),
                (e.onClearClick = function (r) {
                    r && r.preventDefault && r.preventDefault(),
                        e.sendFocusBackToInput();
                    var o = e.props,
                        i = o.selectsRange,
                        s = o.onChange;
                    i
                        ? s == null || s([null, null], r)
                        : s == null || s(null, r),
                        e.setState({ inputValue: null });
                }),
                (e.clear = function () {
                    e.onClearClick();
                }),
                (e.onScroll = function (r) {
                    typeof e.props.closeOnScroll == 'boolean' &&
                    e.props.closeOnScroll
                        ? (r.target === document ||
                              r.target === document.documentElement ||
                              r.target === document.body) &&
                          e.setOpen(!1)
                        : typeof e.props.closeOnScroll == 'function' &&
                          e.props.closeOnScroll(r) &&
                          e.setOpen(!1);
                }),
                (e.renderCalendar = function () {
                    var r, o;
                    return !e.props.inline && !e.isCalendarOpen()
                        ? null
                        : m.createElement(
                              mc,
                              H(
                                  {
                                      showMonthYearDropdown: void 0,
                                      ref: function (i) {
                                          e.calendar = i;
                                      },
                                  },
                                  e.props,
                                  e.state,
                                  {
                                      setOpen: e.setOpen,
                                      dateFormat:
                                          (r = e.props.dateFormatCalendar) !==
                                              null && r !== void 0
                                              ? r
                                              : a.defaultProps
                                                    .dateFormatCalendar,
                                      onSelect: e.handleSelect,
                                      onClickOutside:
                                          e.handleCalendarClickOutside,
                                      holidays: Us(e.modifyHolidays()),
                                      outsideClickIgnoreClass: ln,
                                      onDropdownFocus: e.handleDropdownFocus,
                                      onTimeChange: e.handleTimeChange,
                                      className: e.props.calendarClassName,
                                      container: e.props.calendarContainer,
                                      handleOnKeyDown: e.props.onKeyDown,
                                      handleOnDayKeyDown: e.onDayKeyDown,
                                      setPreSelection: e.setPreSelection,
                                      dropdownMode:
                                          (o = e.props.dropdownMode) !== null &&
                                          o !== void 0
                                              ? o
                                              : a.defaultProps.dropdownMode,
                                  },
                              ),
                              e.props.children,
                          );
                }),
                (e.renderAriaLiveRegion = function () {
                    var r = e.props,
                        o = r.dateFormat,
                        i = o === void 0 ? a.defaultProps.dateFormat : o,
                        s = r.locale,
                        c = e.props.showTimeInput || e.props.showTimeSelect,
                        l = c ? 'PPPPp' : 'PPPP',
                        u;
                    return (
                        e.props.selectsRange
                            ? (u = 'Selected start date: '
                                  .concat(
                                      ce(e.props.startDate, {
                                          dateFormat: l,
                                          locale: s,
                                      }),
                                      '. ',
                                  )
                                  .concat(
                                      e.props.endDate
                                          ? 'End date: ' +
                                                ce(e.props.endDate, {
                                                    dateFormat: l,
                                                    locale: s,
                                                })
                                          : '',
                                  ))
                            : e.props.showTimeSelectOnly
                              ? (u = 'Selected time: '.concat(
                                    ce(e.props.selected, {
                                        dateFormat: i,
                                        locale: s,
                                    }),
                                ))
                              : e.props.showYearPicker
                                ? (u = 'Selected year: '.concat(
                                      ce(e.props.selected, {
                                          dateFormat: 'yyyy',
                                          locale: s,
                                      }),
                                  ))
                                : e.props.showMonthYearPicker
                                  ? (u = 'Selected month: '.concat(
                                        ce(e.props.selected, {
                                            dateFormat: 'MMMM yyyy',
                                            locale: s,
                                        }),
                                    ))
                                  : e.props.showQuarterYearPicker
                                    ? (u = 'Selected quarter: '.concat(
                                          ce(e.props.selected, {
                                              dateFormat: 'yyyy, QQQ',
                                              locale: s,
                                          }),
                                      ))
                                    : (u = 'Selected date: '.concat(
                                          ce(e.props.selected, {
                                              dateFormat: l,
                                              locale: s,
                                          }),
                                      )),
                        m.createElement(
                            'span',
                            {
                                role: 'alert',
                                'aria-live': 'polite',
                                className: 'react-datepicker__aria-live',
                            },
                            u,
                        )
                    );
                }),
                (e.renderDateInput = function () {
                    var r,
                        o,
                        i,
                        s = re(
                            e.props.className,
                            ((r = {}), (r[ln] = e.state.open), r),
                        ),
                        c =
                            e.props.customInput ||
                            m.createElement('input', { type: 'text' }),
                        l = e.props.customInputRef || 'ref',
                        u = e.props,
                        d = u.dateFormat,
                        f = d === void 0 ? a.defaultProps.dateFormat : d,
                        p = u.locale,
                        h =
                            typeof e.props.value == 'string'
                                ? e.props.value
                                : typeof e.state.inputValue == 'string'
                                  ? e.state.inputValue
                                  : e.props.selectsRange
                                    ? Ts(e.props.startDate, e.props.endDate, {
                                          dateFormat: f,
                                          locale: p,
                                      })
                                    : e.props.selectsMultiple
                                      ? Ns(
                                            (i = e.props.selectedDates) !==
                                                null && i !== void 0
                                                ? i
                                                : [],
                                            { dateFormat: f, locale: p },
                                        )
                                      : ce(e.props.selected, {
                                            dateFormat: f,
                                            locale: p,
                                        });
                    return y.cloneElement(
                        c,
                        ((o = {}),
                        (o[l] = function (v) {
                            e.input = v;
                        }),
                        (o.value = h),
                        (o.onBlur = e.handleBlur),
                        (o.onChange = e.handleChange),
                        (o.onClick = e.onInputClick),
                        (o.onFocus = e.handleFocus),
                        (o.onKeyDown = e.onInputKeyDown),
                        (o.id = e.props.id),
                        (o.name = e.props.name),
                        (o.form = e.props.form),
                        (o.autoFocus = e.props.autoFocus),
                        (o.placeholder = e.props.placeholderText),
                        (o.disabled = e.props.disabled),
                        (o.autoComplete = e.props.autoComplete),
                        (o.className = re(c.props.className, s)),
                        (o.title = e.props.title),
                        (o.readOnly = e.props.readOnly),
                        (o.required = e.props.required),
                        (o.tabIndex = e.props.tabIndex),
                        (o['aria-describedby'] = e.props.ariaDescribedBy),
                        (o['aria-invalid'] = e.props.ariaInvalid),
                        (o['aria-labelledby'] = e.props.ariaLabelledBy),
                        (o['aria-required'] = e.props.ariaRequired),
                        o),
                    );
                }),
                (e.renderClearButton = function () {
                    var r = e.props,
                        o = r.isClearable,
                        i = r.disabled,
                        s = r.selected,
                        c = r.startDate,
                        l = r.endDate,
                        u = r.clearButtonTitle,
                        d = r.clearButtonClassName,
                        f = d === void 0 ? '' : d,
                        p = r.ariaLabelClose,
                        h = p === void 0 ? 'Close' : p,
                        v = r.selectedDates;
                    return o &&
                        (s != null ||
                            c != null ||
                            l != null ||
                            (v != null && v.length))
                        ? m.createElement('button', {
                              type: 'button',
                              className: re('react-datepicker__close-icon', f, {
                                  'react-datepicker__close-icon--disabled': i,
                              }),
                              disabled: i,
                              'aria-label': h,
                              onClick: e.onClearClick,
                              title: u,
                              tabIndex: -1,
                          })
                        : null;
                }),
                (e.state = e.calcInitialState()),
                (e.preventFocusTimeout = void 0),
                e
            );
        }
        return (
            Object.defineProperty(a, 'defaultProps', {
                get: function () {
                    return {
                        allowSameDay: !1,
                        dateFormat: 'MM/dd/yyyy',
                        dateFormatCalendar: 'LLLL yyyy',
                        disabled: !1,
                        disabledKeyboardNavigation: !1,
                        dropdownMode: 'scroll',
                        preventOpenOnFocus: !1,
                        monthsShown: 1,
                        readOnly: !1,
                        withPortal: !1,
                        selectsDisabledDaysInRange: !1,
                        shouldCloseOnSelect: !0,
                        showTimeSelect: !1,
                        showTimeInput: !1,
                        showPreviousMonths: !1,
                        showMonthYearPicker: !1,
                        showFullMonthYearPicker: !1,
                        showTwoColumnMonthYearPicker: !1,
                        showFourColumnMonthYearPicker: !1,
                        showYearPicker: !1,
                        showQuarterYearPicker: !1,
                        showWeekPicker: !1,
                        strictParsing: !1,
                        swapRange: !1,
                        timeIntervals: 30,
                        timeCaption: 'Time',
                        previousMonthAriaLabel: 'Previous Month',
                        previousMonthButtonLabel: 'Previous Month',
                        nextMonthAriaLabel: 'Next Month',
                        nextMonthButtonLabel: 'Next Month',
                        previousYearAriaLabel: 'Previous Year',
                        previousYearButtonLabel: 'Previous Year',
                        nextYearAriaLabel: 'Next Year',
                        nextYearButtonLabel: 'Next Year',
                        timeInputLabel: 'Time',
                        enableTabLoop: !0,
                        yearItemNumber: pt,
                        focusSelectedMonth: !1,
                        showPopperArrow: !0,
                        excludeScrollbar: !0,
                        customTimeInput: null,
                        calendarStartDay: void 0,
                        toggleCalendarOnIconClick: !1,
                        usePointerEvent: !1,
                    };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (a.prototype.componentDidMount = function () {
                window.addEventListener('scroll', this.onScroll, !0),
                    document.addEventListener(
                        'visibilitychange',
                        this.setHiddenStateOnVisibilityHidden,
                    );
            }),
            (a.prototype.componentDidUpdate = function (t, e) {
                var r, o, i, s;
                t.inline &&
                    kc(t.selected, this.props.selected) &&
                    this.setPreSelection(this.props.selected),
                    this.state.monthSelectedIn !== void 0 &&
                        t.monthsShown !== this.props.monthsShown &&
                        this.setState({ monthSelectedIn: 0 }),
                    t.highlightDates !== this.props.highlightDates &&
                        this.setState({
                            highlightDates: tn(this.props.highlightDates),
                        }),
                    !e.focused &&
                        !Le(t.selected, this.props.selected) &&
                        this.setState({ inputValue: null }),
                    e.open !== this.state.open &&
                        (e.open === !1 &&
                            this.state.open === !0 &&
                            ((o = (r = this.props).onCalendarOpen) === null ||
                                o === void 0 ||
                                o.call(r)),
                        e.open === !0 &&
                            this.state.open === !1 &&
                            ((s = (i = this.props).onCalendarClose) === null ||
                                s === void 0 ||
                                s.call(i)));
            }),
            (a.prototype.componentWillUnmount = function () {
                this.clearPreventFocusTimeout(),
                    window.removeEventListener('scroll', this.onScroll, !0),
                    document.removeEventListener(
                        'visibilitychange',
                        this.setHiddenStateOnVisibilityHidden,
                    );
            }),
            (a.prototype.renderInputContainer = function () {
                var t = this.props,
                    e = t.showIcon,
                    r = t.icon,
                    o = t.calendarIconClassname,
                    i = t.calendarIconClassName,
                    s = t.toggleCalendarOnIconClick,
                    c = this.state.open;
                return (
                    o &&
                        console.warn(
                            'calendarIconClassname props is deprecated. should use calendarIconClassName props.',
                        ),
                    m.createElement(
                        'div',
                        {
                            className:
                                'react-datepicker__input-container'.concat(
                                    e
                                        ? ' react-datepicker__view-calendar-icon'
                                        : '',
                                ),
                        },
                        e &&
                            m.createElement(
                                vc,
                                H(
                                    {
                                        icon: r,
                                        className: re(
                                            i,
                                            !i && o,
                                            c &&
                                                'react-datepicker-ignore-onclickoutside',
                                        ),
                                    },
                                    s ? { onClick: this.toggleCalendar } : null,
                                ),
                            ),
                        this.state.isRenderAriaLiveMessage &&
                            this.renderAriaLiveRegion(),
                        this.renderDateInput(),
                        this.renderClearButton(),
                    )
                );
            }),
            (a.prototype.render = function () {
                var t = this.renderCalendar();
                if (this.props.inline) return t;
                if (this.props.withPortal) {
                    var e = this.state.open
                        ? m.createElement(
                              Un,
                              { enableTabLoop: this.props.enableTabLoop },
                              m.createElement(
                                  'div',
                                  {
                                      className: 'react-datepicker__portal',
                                      tabIndex: -1,
                                      onKeyDown: this.onPortalKeyDown,
                                  },
                                  t,
                              ),
                          )
                        : null;
                    return (
                        this.state.open &&
                            this.props.portalId &&
                            (e = m.createElement(
                                Kn,
                                H(
                                    { portalId: this.props.portalId },
                                    this.props,
                                ),
                                e,
                            )),
                        m.createElement(
                            'div',
                            null,
                            this.renderInputContainer(),
                            e,
                        )
                    );
                }
                return m.createElement(
                    bc,
                    H({}, this.props, {
                        className: this.props.popperClassName,
                        hidePopper: !this.isCalendarOpen(),
                        targetComponent: this.renderInputContainer(),
                        popperComponent: t,
                        popperOnKeyDown: this.onPopperKeyDown,
                        showArrow: this.props.showPopperArrow,
                    }),
                );
            }),
            a
        );
    })(y.Component),
    _c = 'input',
    ar = 'navigate';
function Ec({ patients: n, medications: a }) {
    const {
            data: t,
            setData: e,
            post: r,
            processing: o,
        } = Gn({
            patient_id: '',
            issued_at: '',
            expires_at: '',
            details: '',
            medications: [],
        }),
        i = (d) => (d ? new Date(d) : null),
        s = (d, f) => {
            e(d, f ? f.toISOString().slice(0, 10) : '');
        },
        c = (d, f, p) => {
            const h = [...t.medications],
                v = h.findIndex((g) => g.id === d);
            v === -1 ? h.push({ id: d, [f]: p }) : (h[v] = { ...h[v], [f]: p }),
                e('medications', h);
        },
        l = (d) => {
            const f = [...t.medications];
            f.find((h) => h.id === d)
                ? e(
                      'medications',
                      f.filter((h) => h.id !== d),
                  )
                : e('medications', [
                      ...f,
                      { id: d, frecventa: '', interval_ore: '' },
                  ]);
        },
        u = (d) => {
            d.preventDefault();
            const f = t.medications.filter(
                (p) => p.id && p.frecventa && p.interval_ore,
            );
            if (f.length === 0) {
                alert('Adaugă cel puțin un medicament complet.');
                return;
            }
            e('medications', f), r(route('prescriptions.store'));
        };
    return L.jsxs(Zn, {
        children: [
            L.jsx(zn, { title: 'Creează Rețetă' }),
            L.jsxs('form', {
                onSubmit: u,
                className: 'mx-auto max-w-2xl rounded bg-white p-6 shadow',
                children: [
                    L.jsx('h1', {
                        className: 'mb-4 text-xl font-bold',
                        children: 'Creează Rețetă',
                    }),
                    L.jsxs('div', {
                        className: 'mb-4',
                        children: [
                            L.jsx('label', {
                                className: 'mb-1 block text-sm font-medium',
                                children: 'Pacient',
                            }),
                            L.jsxs('select', {
                                value: t.patient_id,
                                onChange: (d) =>
                                    e('patient_id', d.target.value),
                                className: 'w-full rounded border px-3 py-2',
                                children: [
                                    L.jsx('option', {
                                        value: '',
                                        children: 'Selectează pacient',
                                    }),
                                    n.map((d) =>
                                        L.jsx(
                                            'option',
                                            { value: d.id, children: d.name },
                                            d.id,
                                        ),
                                    ),
                                ],
                            }),
                        ],
                    }),
                    L.jsxs('div', {
                        className: 'mb-4 flex gap-4',
                        children: [
                            L.jsxs('div', {
                                className: 'w-full',
                                children: [
                                    L.jsx('label', {
                                        className:
                                            'mb-1 block text-sm font-medium',
                                        children: 'Data emiterii',
                                    }),
                                    L.jsx(un, {
                                        selected: i(t.issued_at),
                                        onChange: (d) => s('issued_at', d),
                                        dateFormat: 'yyyy-MM-dd',
                                        className:
                                            'w-full rounded border px-3 py-2',
                                        placeholderText: 'Selectează data',
                                    }),
                                ],
                            }),
                            L.jsxs('div', {
                                className: 'w-full',
                                children: [
                                    L.jsx('label', {
                                        className:
                                            'mb-1 block text-sm font-medium',
                                        children: 'Data expirării',
                                    }),
                                    L.jsx(un, {
                                        selected: i(t.expires_at),
                                        onChange: (d) => s('expires_at', d),
                                        dateFormat: 'yyyy-MM-dd',
                                        className:
                                            'w-full rounded border px-3 py-2',
                                        placeholderText: 'Selectează data',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    L.jsxs('div', {
                        className: 'mb-4',
                        children: [
                            L.jsx('label', {
                                className: 'mb-1 block text-sm font-medium',
                                children: 'Detalii',
                            }),
                            L.jsx('textarea', {
                                value: t.details,
                                onChange: (d) => e('details', d.target.value),
                                placeholder: 'Detalii opționale',
                                className: 'w-full rounded border px-3 py-2',
                            }),
                        ],
                    }),
                    L.jsx('h2', {
                        className: 'mb-2 text-lg font-semibold',
                        children: 'Medicamente',
                    }),
                    L.jsx('div', {
                        className: 'space-y-3',
                        children: a.map((d) => {
                            const f = t.medications.some((h) => h.id === d.id),
                                p =
                                    t.medications.find((h) => h.id === d.id) ||
                                    {};
                            return L.jsxs(
                                'div',
                                {
                                    className: 'rounded border p-4',
                                    children: [
                                        L.jsxs('label', {
                                            className:
                                                'flex items-center gap-2 font-medium',
                                            children: [
                                                L.jsx('input', {
                                                    type: 'checkbox',
                                                    checked: f,
                                                    onChange: () => l(d.id),
                                                }),
                                                d.nume,
                                            ],
                                        }),
                                        f &&
                                            L.jsxs('div', {
                                                className: 'mt-2 flex gap-2',
                                                children: [
                                                    L.jsx('input', {
                                                        type: 'number',
                                                        placeholder:
                                                            'Frecvență',
                                                        value:
                                                            p.frecventa || '',
                                                        onChange: (h) =>
                                                            c(
                                                                d.id,
                                                                'frecventa',
                                                                h.target.value,
                                                            ),
                                                        className:
                                                            'w-1/2 rounded border px-2 py-1',
                                                    }),
                                                    L.jsx('input', {
                                                        type: 'number',
                                                        placeholder:
                                                            'Interval ore',
                                                        value:
                                                            p.interval_ore ||
                                                            '',
                                                        onChange: (h) =>
                                                            c(
                                                                d.id,
                                                                'interval_ore',
                                                                h.target.value,
                                                            ),
                                                        className:
                                                            'w-1/2 rounded border px-2 py-1',
                                                    }),
                                                ],
                                            }),
                                    ],
                                },
                                d.id,
                            );
                        }),
                    }),
                    L.jsx('button', {
                        type: 'submit',
                        disabled: o,
                        className:
                            'mt-6 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700',
                        children: 'Salvează Rețeta',
                    }),
                    L.jsx('pre', {
                        className: 'mt-4 rounded bg-gray-100 p-2 text-xs',
                        children: JSON.stringify(t.medications, null, 2),
                    }),
                ],
            }),
        ],
    });
}
export { Ec as default };
