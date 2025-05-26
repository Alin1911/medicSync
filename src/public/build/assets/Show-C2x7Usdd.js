import { j as C, $ as ce, a as R } from './app-ZeqbFyab.js';
import { A as he } from './AuthenticatedLayout-DImEP5KL.js';
import './transition-BZm75T6a.js';
var ue = Object.defineProperty,
    F = Object.getOwnPropertySymbols,
    Y = Object.prototype.hasOwnProperty,
    V = Object.prototype.propertyIsEnumerable,
    G = (a, i, o) =>
        i in a
            ? ue(a, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
              })
            : (a[i] = o),
    B = (a, i) => {
        for (var o in i || (i = {})) Y.call(i, o) && G(a, o, i[o]);
        if (F) for (var o of F(i)) V.call(i, o) && G(a, o, i[o]);
        return a;
    },
    _ = (a, i) => {
        var o = {};
        for (var h in a) Y.call(a, h) && i.indexOf(h) < 0 && (o[h] = a[h]);
        if (a != null && F)
            for (var h of F(a))
                i.indexOf(h) < 0 && V.call(a, h) && (o[h] = a[h]);
        return o;
    };
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var x;
((a) => {
    const i = class g {
        constructor(e, r, t, n) {
            if (
                ((this.version = e),
                (this.errorCorrectionLevel = r),
                (this.modules = []),
                (this.isFunction = []),
                e < g.MIN_VERSION || e > g.MAX_VERSION)
            )
                throw new RangeError('Version value out of range');
            if (n < -1 || n > 7)
                throw new RangeError('Mask value out of range');
            this.size = e * 4 + 17;
            let s = [];
            for (let l = 0; l < this.size; l++) s.push(!1);
            for (let l = 0; l < this.size; l++)
                this.modules.push(s.slice()), this.isFunction.push(s.slice());
            this.drawFunctionPatterns();
            const c = this.addEccAndInterleave(t);
            if ((this.drawCodewords(c), n == -1)) {
                let l = 1e9;
                for (let m = 0; m < 8; m++) {
                    this.applyMask(m), this.drawFormatBits(m);
                    const u = this.getPenaltyScore();
                    u < l && ((n = m), (l = u)), this.applyMask(m);
                }
            }
            E(0 <= n && n <= 7),
                (this.mask = n),
                this.applyMask(n),
                this.drawFormatBits(n),
                (this.isFunction = []);
        }
        static encodeText(e, r) {
            const t = a.QrSegment.makeSegments(e);
            return g.encodeSegments(t, r);
        }
        static encodeBinary(e, r) {
            const t = a.QrSegment.makeBytes(e);
            return g.encodeSegments([t], r);
        }
        static encodeSegments(e, r, t = 1, n = 40, s = -1, c = !0) {
            if (
                !(g.MIN_VERSION <= t && t <= n && n <= g.MAX_VERSION) ||
                s < -1 ||
                s > 7
            )
                throw new RangeError('Invalid value');
            let l, m;
            for (l = t; ; l++) {
                const f = g.getNumDataCodewords(l, r) * 8,
                    p = N.getTotalBits(e, l);
                if (p <= f) {
                    m = p;
                    break;
                }
                if (l >= n) throw new RangeError('Data too long');
            }
            for (const f of [g.Ecc.MEDIUM, g.Ecc.QUARTILE, g.Ecc.HIGH])
                c && m <= g.getNumDataCodewords(l, f) * 8 && (r = f);
            let u = [];
            for (const f of e) {
                o(f.mode.modeBits, 4, u),
                    o(f.numChars, f.mode.numCharCountBits(l), u);
                for (const p of f.getData()) u.push(p);
            }
            E(u.length == m);
            const A = g.getNumDataCodewords(l, r) * 8;
            E(u.length <= A),
                o(0, Math.min(4, A - u.length), u),
                o(0, (8 - (u.length % 8)) % 8, u),
                E(u.length % 8 == 0);
            for (let f = 236; u.length < A; f ^= 253) o(f, 8, u);
            let y = [];
            for (; y.length * 8 < u.length; ) y.push(0);
            return (
                u.forEach((f, p) => (y[p >>> 3] |= f << (7 - (p & 7)))),
                new g(l, r, y, s)
            );
        }
        getModule(e, r) {
            return (
                0 <= e &&
                e < this.size &&
                0 <= r &&
                r < this.size &&
                this.modules[r][e]
            );
        }
        getModules() {
            return this.modules;
        }
        drawFunctionPatterns() {
            for (let t = 0; t < this.size; t++)
                this.setFunctionModule(6, t, t % 2 == 0),
                    this.setFunctionModule(t, 6, t % 2 == 0);
            this.drawFinderPattern(3, 3),
                this.drawFinderPattern(this.size - 4, 3),
                this.drawFinderPattern(3, this.size - 4);
            const e = this.getAlignmentPatternPositions(),
                r = e.length;
            for (let t = 0; t < r; t++)
                for (let n = 0; n < r; n++)
                    (t == 0 && n == 0) ||
                        (t == 0 && n == r - 1) ||
                        (t == r - 1 && n == 0) ||
                        this.drawAlignmentPattern(e[t], e[n]);
            this.drawFormatBits(0), this.drawVersion();
        }
        drawFormatBits(e) {
            const r = (this.errorCorrectionLevel.formatBits << 3) | e;
            let t = r;
            for (let s = 0; s < 10; s++) t = (t << 1) ^ ((t >>> 9) * 1335);
            const n = ((r << 10) | t) ^ 21522;
            E(n >>> 15 == 0);
            for (let s = 0; s <= 5; s++) this.setFunctionModule(8, s, h(n, s));
            this.setFunctionModule(8, 7, h(n, 6)),
                this.setFunctionModule(8, 8, h(n, 7)),
                this.setFunctionModule(7, 8, h(n, 8));
            for (let s = 9; s < 15; s++)
                this.setFunctionModule(14 - s, 8, h(n, s));
            for (let s = 0; s < 8; s++)
                this.setFunctionModule(this.size - 1 - s, 8, h(n, s));
            for (let s = 8; s < 15; s++)
                this.setFunctionModule(8, this.size - 15 + s, h(n, s));
            this.setFunctionModule(8, this.size - 8, !0);
        }
        drawVersion() {
            if (this.version < 7) return;
            let e = this.version;
            for (let t = 0; t < 12; t++) e = (e << 1) ^ ((e >>> 11) * 7973);
            const r = (this.version << 12) | e;
            E(r >>> 18 == 0);
            for (let t = 0; t < 18; t++) {
                const n = h(r, t),
                    s = this.size - 11 + (t % 3),
                    c = Math.floor(t / 3);
                this.setFunctionModule(s, c, n),
                    this.setFunctionModule(c, s, n);
            }
        }
        drawFinderPattern(e, r) {
            for (let t = -4; t <= 4; t++)
                for (let n = -4; n <= 4; n++) {
                    const s = Math.max(Math.abs(n), Math.abs(t)),
                        c = e + n,
                        l = r + t;
                    0 <= c &&
                        c < this.size &&
                        0 <= l &&
                        l < this.size &&
                        this.setFunctionModule(c, l, s != 2 && s != 4);
                }
        }
        drawAlignmentPattern(e, r) {
            for (let t = -2; t <= 2; t++)
                for (let n = -2; n <= 2; n++)
                    this.setFunctionModule(
                        e + n,
                        r + t,
                        Math.max(Math.abs(n), Math.abs(t)) != 1,
                    );
        }
        setFunctionModule(e, r, t) {
            (this.modules[r][e] = t), (this.isFunction[r][e] = !0);
        }
        addEccAndInterleave(e) {
            const r = this.version,
                t = this.errorCorrectionLevel;
            if (e.length != g.getNumDataCodewords(r, t))
                throw new RangeError('Invalid argument');
            const n = g.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][r],
                s = g.ECC_CODEWORDS_PER_BLOCK[t.ordinal][r],
                c = Math.floor(g.getNumRawDataModules(r) / 8),
                l = n - (c % n),
                m = Math.floor(c / n);
            let u = [];
            const A = g.reedSolomonComputeDivisor(s);
            for (let f = 0, p = 0; f < n; f++) {
                let v = e.slice(p, p + m - s + (f < l ? 0 : 1));
                p += v.length;
                const D = g.reedSolomonComputeRemainder(v, A);
                f < l && v.push(0), u.push(v.concat(D));
            }
            let y = [];
            for (let f = 0; f < u[0].length; f++)
                u.forEach((p, v) => {
                    (f != m - s || v >= l) && y.push(p[f]);
                });
            return E(y.length == c), y;
        }
        drawCodewords(e) {
            if (
                e.length != Math.floor(g.getNumRawDataModules(this.version) / 8)
            )
                throw new RangeError('Invalid argument');
            let r = 0;
            for (let t = this.size - 1; t >= 1; t -= 2) {
                t == 6 && (t = 5);
                for (let n = 0; n < this.size; n++)
                    for (let s = 0; s < 2; s++) {
                        const c = t - s,
                            m = ((t + 1) & 2) == 0 ? this.size - 1 - n : n;
                        !this.isFunction[m][c] &&
                            r < e.length * 8 &&
                            ((this.modules[m][c] = h(e[r >>> 3], 7 - (r & 7))),
                            r++);
                    }
            }
            E(r == e.length * 8);
        }
        applyMask(e) {
            if (e < 0 || e > 7) throw new RangeError('Mask value out of range');
            for (let r = 0; r < this.size; r++)
                for (let t = 0; t < this.size; t++) {
                    let n;
                    switch (e) {
                        case 0:
                            n = (t + r) % 2 == 0;
                            break;
                        case 1:
                            n = r % 2 == 0;
                            break;
                        case 2:
                            n = t % 3 == 0;
                            break;
                        case 3:
                            n = (t + r) % 3 == 0;
                            break;
                        case 4:
                            n =
                                (Math.floor(t / 3) + Math.floor(r / 2)) % 2 ==
                                0;
                            break;
                        case 5:
                            n = ((t * r) % 2) + ((t * r) % 3) == 0;
                            break;
                        case 6:
                            n = (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
                            break;
                        case 7:
                            n = (((t + r) % 2) + ((t * r) % 3)) % 2 == 0;
                            break;
                        default:
                            throw new Error('Unreachable');
                    }
                    !this.isFunction[r][t] &&
                        n &&
                        (this.modules[r][t] = !this.modules[r][t]);
                }
        }
        getPenaltyScore() {
            let e = 0;
            for (let s = 0; s < this.size; s++) {
                let c = !1,
                    l = 0,
                    m = [0, 0, 0, 0, 0, 0, 0];
                for (let u = 0; u < this.size; u++)
                    this.modules[s][u] == c
                        ? (l++, l == 5 ? (e += g.PENALTY_N1) : l > 5 && e++)
                        : (this.finderPenaltyAddHistory(l, m),
                          c ||
                              (e +=
                                  this.finderPenaltyCountPatterns(m) *
                                  g.PENALTY_N3),
                          (c = this.modules[s][u]),
                          (l = 1));
                e +=
                    this.finderPenaltyTerminateAndCount(c, l, m) * g.PENALTY_N3;
            }
            for (let s = 0; s < this.size; s++) {
                let c = !1,
                    l = 0,
                    m = [0, 0, 0, 0, 0, 0, 0];
                for (let u = 0; u < this.size; u++)
                    this.modules[u][s] == c
                        ? (l++, l == 5 ? (e += g.PENALTY_N1) : l > 5 && e++)
                        : (this.finderPenaltyAddHistory(l, m),
                          c ||
                              (e +=
                                  this.finderPenaltyCountPatterns(m) *
                                  g.PENALTY_N3),
                          (c = this.modules[u][s]),
                          (l = 1));
                e +=
                    this.finderPenaltyTerminateAndCount(c, l, m) * g.PENALTY_N3;
            }
            for (let s = 0; s < this.size - 1; s++)
                for (let c = 0; c < this.size - 1; c++) {
                    const l = this.modules[s][c];
                    l == this.modules[s][c + 1] &&
                        l == this.modules[s + 1][c] &&
                        l == this.modules[s + 1][c + 1] &&
                        (e += g.PENALTY_N2);
                }
            let r = 0;
            for (const s of this.modules)
                r = s.reduce((c, l) => c + (l ? 1 : 0), r);
            const t = this.size * this.size,
                n = Math.ceil(Math.abs(r * 20 - t * 10) / t) - 1;
            return (
                E(0 <= n && n <= 9),
                (e += n * g.PENALTY_N4),
                E(0 <= e && e <= 2568888),
                e
            );
        }
        getAlignmentPatternPositions() {
            if (this.version == 1) return [];
            {
                const e = Math.floor(this.version / 7) + 2,
                    r =
                        this.version == 32
                            ? 26
                            : Math.ceil((this.version * 4 + 4) / (e * 2 - 2)) *
                              2;
                let t = [6];
                for (let n = this.size - 7; t.length < e; n -= r)
                    t.splice(1, 0, n);
                return t;
            }
        }
        static getNumRawDataModules(e) {
            if (e < g.MIN_VERSION || e > g.MAX_VERSION)
                throw new RangeError('Version number out of range');
            let r = (16 * e + 128) * e + 64;
            if (e >= 2) {
                const t = Math.floor(e / 7) + 2;
                (r -= (25 * t - 10) * t - 55), e >= 7 && (r -= 36);
            }
            return E(208 <= r && r <= 29648), r;
        }
        static getNumDataCodewords(e, r) {
            return (
                Math.floor(g.getNumRawDataModules(e) / 8) -
                g.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e] *
                    g.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]
            );
        }
        static reedSolomonComputeDivisor(e) {
            if (e < 1 || e > 255) throw new RangeError('Degree out of range');
            let r = [];
            for (let n = 0; n < e - 1; n++) r.push(0);
            r.push(1);
            let t = 1;
            for (let n = 0; n < e; n++) {
                for (let s = 0; s < r.length; s++)
                    (r[s] = g.reedSolomonMultiply(r[s], t)),
                        s + 1 < r.length && (r[s] ^= r[s + 1]);
                t = g.reedSolomonMultiply(t, 2);
            }
            return r;
        }
        static reedSolomonComputeRemainder(e, r) {
            let t = r.map((n) => 0);
            for (const n of e) {
                const s = n ^ t.shift();
                t.push(0),
                    r.forEach((c, l) => (t[l] ^= g.reedSolomonMultiply(c, s)));
            }
            return t;
        }
        static reedSolomonMultiply(e, r) {
            if (e >>> 8 || r >>> 8) throw new RangeError('Byte out of range');
            let t = 0;
            for (let n = 7; n >= 0; n--)
                (t = (t << 1) ^ ((t >>> 7) * 285)), (t ^= ((r >>> n) & 1) * e);
            return E(t >>> 8 == 0), t;
        }
        finderPenaltyCountPatterns(e) {
            const r = e[1];
            E(r <= this.size * 3);
            const t =
                r > 0 && e[2] == r && e[3] == r * 3 && e[4] == r && e[5] == r;
            return (
                (t && e[0] >= r * 4 && e[6] >= r ? 1 : 0) +
                (t && e[6] >= r * 4 && e[0] >= r ? 1 : 0)
            );
        }
        finderPenaltyTerminateAndCount(e, r, t) {
            return (
                e && (this.finderPenaltyAddHistory(r, t), (r = 0)),
                (r += this.size),
                this.finderPenaltyAddHistory(r, t),
                this.finderPenaltyCountPatterns(t)
            );
        }
        finderPenaltyAddHistory(e, r) {
            r[0] == 0 && (e += this.size), r.pop(), r.unshift(e);
        }
    };
    (i.MIN_VERSION = 1),
        (i.MAX_VERSION = 40),
        (i.PENALTY_N1 = 3),
        (i.PENALTY_N2 = 3),
        (i.PENALTY_N3 = 40),
        (i.PENALTY_N4 = 10),
        (i.ECC_CODEWORDS_PER_BLOCK = [
            [
                -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22,
                24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
                -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24,
                28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
                28, 28, 28, 28, 28, 28, 28, 28, 28,
            ],
            [
                -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30,
                24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
            [
                -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24,
                30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30,
                30, 30, 30, 30, 30, 30, 30, 30, 30,
            ],
        ]),
        (i.NUM_ERROR_CORRECTION_BLOCKS = [
            [
                -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8,
                8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21,
                22, 24, 25,
            ],
            [
                -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13,
                14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37,
                38, 40, 43, 45, 47, 49,
            ],
            [
                -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18,
                21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51,
                53, 56, 59, 62, 65, 68,
            ],
            [
                -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19,
                21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57,
                60, 63, 66, 70, 74, 77, 81,
            ],
        ]),
        (a.QrCode = i);
    function o(w, e, r) {
        if (e < 0 || e > 31 || w >>> e)
            throw new RangeError('Value out of range');
        for (let t = e - 1; t >= 0; t--) r.push((w >>> t) & 1);
    }
    function h(w, e) {
        return ((w >>> e) & 1) != 0;
    }
    function E(w) {
        if (!w) throw new Error('Assertion error');
    }
    const d = class M {
        constructor(e, r, t) {
            if (
                ((this.mode = e),
                (this.numChars = r),
                (this.bitData = t),
                r < 0)
            )
                throw new RangeError('Invalid argument');
            this.bitData = t.slice();
        }
        static makeBytes(e) {
            let r = [];
            for (const t of e) o(t, 8, r);
            return new M(M.Mode.BYTE, e.length, r);
        }
        static makeNumeric(e) {
            if (!M.isNumeric(e))
                throw new RangeError('String contains non-numeric characters');
            let r = [];
            for (let t = 0; t < e.length; ) {
                const n = Math.min(e.length - t, 3);
                o(parseInt(e.substring(t, t + n), 10), n * 3 + 1, r), (t += n);
            }
            return new M(M.Mode.NUMERIC, e.length, r);
        }
        static makeAlphanumeric(e) {
            if (!M.isAlphanumeric(e))
                throw new RangeError(
                    'String contains unencodable characters in alphanumeric mode',
                );
            let r = [],
                t;
            for (t = 0; t + 2 <= e.length; t += 2) {
                let n = M.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)) * 45;
                (n += M.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t + 1))),
                    o(n, 11, r);
            }
            return (
                t < e.length &&
                    o(M.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)), 6, r),
                new M(M.Mode.ALPHANUMERIC, e.length, r)
            );
        }
        static makeSegments(e) {
            return e == ''
                ? []
                : M.isNumeric(e)
                  ? [M.makeNumeric(e)]
                  : M.isAlphanumeric(e)
                    ? [M.makeAlphanumeric(e)]
                    : [M.makeBytes(M.toUtf8ByteArray(e))];
        }
        static makeEci(e) {
            let r = [];
            if (e < 0)
                throw new RangeError('ECI assignment value out of range');
            if (e < 128) o(e, 8, r);
            else if (e < 16384) o(2, 2, r), o(e, 14, r);
            else if (e < 1e6) o(6, 3, r), o(e, 21, r);
            else throw new RangeError('ECI assignment value out of range');
            return new M(M.Mode.ECI, 0, r);
        }
        static isNumeric(e) {
            return M.NUMERIC_REGEX.test(e);
        }
        static isAlphanumeric(e) {
            return M.ALPHANUMERIC_REGEX.test(e);
        }
        getData() {
            return this.bitData.slice();
        }
        static getTotalBits(e, r) {
            let t = 0;
            for (const n of e) {
                const s = n.mode.numCharCountBits(r);
                if (n.numChars >= 1 << s) return 1 / 0;
                t += 4 + s + n.bitData.length;
            }
            return t;
        }
        static toUtf8ByteArray(e) {
            e = encodeURI(e);
            let r = [];
            for (let t = 0; t < e.length; t++)
                e.charAt(t) != '%'
                    ? r.push(e.charCodeAt(t))
                    : (r.push(parseInt(e.substring(t + 1, t + 3), 16)),
                      (t += 2));
            return r;
        }
    };
    (d.NUMERIC_REGEX = /^[0-9]*$/),
        (d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
        (d.ALPHANUMERIC_CHARSET =
            '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:');
    let N = d;
    a.QrSegment = d;
})(x || (x = {}));
((a) => {
    ((i) => {
        const o = class {
            constructor(E, d) {
                (this.ordinal = E), (this.formatBits = d);
            }
        };
        (o.LOW = new o(0, 1)),
            (o.MEDIUM = new o(1, 0)),
            (o.QUARTILE = new o(2, 3)),
            (o.HIGH = new o(3, 2)),
            (i.Ecc = o);
    })(a.QrCode || (a.QrCode = {}));
})(x || (x = {}));
((a) => {
    ((i) => {
        const o = class {
            constructor(E, d) {
                (this.modeBits = E), (this.numBitsCharCount = d);
            }
            numCharCountBits(E) {
                return this.numBitsCharCount[Math.floor((E + 7) / 17)];
            }
        };
        (o.NUMERIC = new o(1, [10, 12, 14])),
            (o.ALPHANUMERIC = new o(2, [9, 11, 13])),
            (o.BYTE = new o(4, [8, 16, 16])),
            (o.KANJI = new o(8, [8, 10, 12])),
            (o.ECI = new o(7, [0, 0, 0])),
            (i.Mode = o);
    })(a.QrSegment || (a.QrSegment = {}));
})(x || (x = {}));
var S = x;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var de = {
        L: S.QrCode.Ecc.LOW,
        M: S.QrCode.Ecc.MEDIUM,
        Q: S.QrCode.Ecc.QUARTILE,
        H: S.QrCode.Ecc.HIGH,
    },
    X = 128,
    K = 'L',
    W = '#FFFFFF',
    Z = '#000000',
    J = !1,
    q = 1,
    fe = 4,
    me = 0,
    ge = 0.1;
function ee(a, i = 0) {
    const o = [];
    return (
        a.forEach(function (h, E) {
            let d = null;
            h.forEach(function (N, w) {
                if (!N && d !== null) {
                    o.push(`M${d + i} ${E + i}h${w - d}v1H${d + i}z`),
                        (d = null);
                    return;
                }
                if (w === h.length - 1) {
                    if (!N) return;
                    d === null
                        ? o.push(`M${w + i},${E + i} h1v1H${w + i}z`)
                        : o.push(
                              `M${d + i},${E + i} h${w + 1 - d}v1H${d + i}z`,
                          );
                    return;
                }
                N && d === null && (d = w);
            });
        }),
        o.join('')
    );
}
function te(a, i) {
    return a
        .slice()
        .map((o, h) =>
            h < i.y || h >= i.y + i.h
                ? o
                : o.map((E, d) => (d < i.x || d >= i.x + i.w ? E : !1)),
        );
}
function Ee(a, i, o, h) {
    if (h == null) return null;
    const E = a.length + o * 2,
        d = Math.floor(i * ge),
        N = E / i,
        w = (h.width || d) * N,
        e = (h.height || d) * N,
        r = h.x == null ? a.length / 2 - w / 2 : h.x * N,
        t = h.y == null ? a.length / 2 - e / 2 : h.y * N,
        n = h.opacity == null ? 1 : h.opacity;
    let s = null;
    if (h.excavate) {
        let l = Math.floor(r),
            m = Math.floor(t),
            u = Math.ceil(w + r - l),
            A = Math.ceil(e + t - m);
        s = { x: l, y: m, w: u, h: A };
    }
    const c = h.crossOrigin;
    return { x: r, y: t, h: e, w, excavation: s, opacity: n, crossOrigin: c };
}
function Ce(a, i) {
    return i != null ? Math.max(Math.floor(i), 0) : a ? fe : me;
}
function re({
    value: a,
    level: i,
    minVersion: o,
    includeMargin: h,
    marginSize: E,
    imageSettings: d,
    size: N,
    boostLevel: w,
}) {
    let e = R.useMemo(() => {
        const l = (Array.isArray(a) ? a : [a]).reduce(
            (m, u) => (m.push(...S.QrSegment.makeSegments(u)), m),
            [],
        );
        return S.QrCode.encodeSegments(l, de[i], o, void 0, void 0, w);
    }, [a, i, o, w]);
    const {
        cells: r,
        margin: t,
        numCells: n,
        calculatedImageSettings: s,
    } = R.useMemo(() => {
        let c = e.getModules();
        const l = Ce(h, E),
            m = c.length + l * 2,
            u = Ee(c, N, l, d);
        return { cells: c, margin: l, numCells: m, calculatedImageSettings: u };
    }, [e, N, d, h, E]);
    return {
        qrcode: e,
        margin: t,
        cells: r,
        numCells: n,
        calculatedImageSettings: s,
    };
}
var we = (function () {
        try {
            new Path2D().addPath(new Path2D());
        } catch {
            return !1;
        }
        return !0;
    })(),
    Me = R.forwardRef(function (i, o) {
        const h = i,
            {
                value: E,
                size: d = X,
                level: N = K,
                bgColor: w = W,
                fgColor: e = Z,
                includeMargin: r = J,
                minVersion: t = q,
                boostLevel: n,
                marginSize: s,
                imageSettings: c,
            } = h,
            m = _(h, [
                'value',
                'size',
                'level',
                'bgColor',
                'fgColor',
                'includeMargin',
                'minVersion',
                'boostLevel',
                'marginSize',
                'imageSettings',
            ]),
            { style: u } = m,
            A = _(m, ['style']),
            y = c == null ? void 0 : c.src,
            f = R.useRef(null),
            p = R.useRef(null),
            v = R.useCallback(
                (I) => {
                    (f.current = I),
                        typeof o == 'function' ? o(I) : o && (o.current = I);
                },
                [o],
            ),
            [D, k] = R.useState(!1),
            {
                margin: L,
                cells: T,
                numCells: z,
                calculatedImageSettings: P,
            } = re({
                value: E,
                level: N,
                minVersion: t,
                boostLevel: n,
                includeMargin: r,
                marginSize: s,
                imageSettings: c,
                size: d,
            });
        R.useEffect(() => {
            if (f.current != null) {
                const I = f.current,
                    b = I.getContext('2d');
                if (!b) return;
                let j = T;
                const O = p.current,
                    Q =
                        P != null &&
                        O !== null &&
                        O.complete &&
                        O.naturalHeight !== 0 &&
                        O.naturalWidth !== 0;
                Q && P.excavation != null && (j = te(T, P.excavation));
                const H = window.devicePixelRatio || 1;
                I.height = I.width = d * H;
                const $ = (d / z) * H;
                b.scale($, $),
                    (b.fillStyle = w),
                    b.fillRect(0, 0, z, z),
                    (b.fillStyle = e),
                    we
                        ? b.fill(new Path2D(ee(j, L)))
                        : T.forEach(function (oe, ie) {
                              oe.forEach(function (le, ae) {
                                  le && b.fillRect(ae + L, ie + L, 1, 1);
                              });
                          }),
                    P && (b.globalAlpha = P.opacity),
                    Q && b.drawImage(O, P.x + L, P.y + L, P.w, P.h);
            }
        }),
            R.useEffect(() => {
                k(!1);
            }, [y]);
        const se = B({ height: d, width: d }, u);
        let U = null;
        return (
            y != null &&
                (U = R.createElement('img', {
                    src: y,
                    key: y,
                    style: { display: 'none' },
                    onLoad: () => {
                        k(!0);
                    },
                    ref: p,
                    crossOrigin: P == null ? void 0 : P.crossOrigin,
                })),
            R.createElement(
                R.Fragment,
                null,
                R.createElement(
                    'canvas',
                    B(
                        { style: se, height: d, width: d, ref: v, role: 'img' },
                        A,
                    ),
                ),
                U,
            )
        );
    });
Me.displayName = 'QRCodeCanvas';
var ne = R.forwardRef(function (i, o) {
    const h = i,
        {
            value: E,
            size: d = X,
            level: N = K,
            bgColor: w = W,
            fgColor: e = Z,
            includeMargin: r = J,
            minVersion: t = q,
            boostLevel: n,
            title: s,
            marginSize: c,
            imageSettings: l,
        } = h,
        m = _(h, [
            'value',
            'size',
            'level',
            'bgColor',
            'fgColor',
            'includeMargin',
            'minVersion',
            'boostLevel',
            'title',
            'marginSize',
            'imageSettings',
        ]),
        {
            margin: u,
            cells: A,
            numCells: y,
            calculatedImageSettings: f,
        } = re({
            value: E,
            level: N,
            minVersion: t,
            boostLevel: n,
            includeMargin: r,
            marginSize: c,
            imageSettings: l,
            size: d,
        });
    let p = A,
        v = null;
    l != null &&
        f != null &&
        (f.excavation != null && (p = te(A, f.excavation)),
        (v = R.createElement('image', {
            href: l.src,
            height: f.h,
            width: f.w,
            x: f.x + u,
            y: f.y + u,
            preserveAspectRatio: 'none',
            opacity: f.opacity,
            crossOrigin: f.crossOrigin,
        })));
    const D = ee(p, u);
    return R.createElement(
        'svg',
        B(
            {
                height: d,
                width: d,
                viewBox: `0 0 ${y} ${y}`,
                ref: o,
                role: 'img',
            },
            m,
        ),
        !!s && R.createElement('title', null, s),
        R.createElement('path', {
            fill: w,
            d: `M0,0 h${y}v${y}H0z`,
            shapeRendering: 'crispEdges',
        }),
        R.createElement('path', {
            fill: e,
            d: D,
            shapeRendering: 'crispEdges',
        }),
        v,
    );
});
ne.displayName = 'QRCodeSVG';
function ve({ prescription: a }) {
    return C.jsxs(he, {
        children: [
            C.jsx(ce, { title: 'Detalii Rețetă' }),
            C.jsxs('div', {
                className: 'mx-auto max-w-4xl p-8 sm:p-12',
                children: [
                    C.jsxs('h1', {
                        className:
                            'mb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100',
                        children: [
                            'Rețetă pentru',
                            ' ',
                            C.jsx('span', {
                                className:
                                    'text-indigo-600 dark:text-indigo-400',
                                children: a.patient.name,
                            }),
                        ],
                    }),
                    C.jsxs('div', {
                        className:
                            'space-y-8 rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800',
                        children: [
                            C.jsxs('div', {
                                className:
                                    'grid grid-cols-1 gap-10 md:grid-cols-2',
                                children: [
                                    C.jsxs('div', {
                                        className:
                                            'space-y-4 text-gray-700 dark:text-gray-300',
                                        children: [
                                            C.jsxs('p', {
                                                children: [
                                                    C.jsx('strong', {
                                                        className:
                                                            'font-semibold',
                                                        children: 'Detalii:',
                                                    }),
                                                    ' ',
                                                    a.details || '—',
                                                ],
                                            }),
                                            C.jsxs('p', {
                                                children: [
                                                    C.jsx('strong', {
                                                        className:
                                                            'font-semibold',
                                                        children: 'Emisă la:',
                                                    }),
                                                    ' ',
                                                    C.jsx('time', {
                                                        dateTime: a.issued_at,
                                                        children: new Date(
                                                            a.issued_at,
                                                        ).toLocaleDateString(
                                                            'ro-RO',
                                                            {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric',
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            C.jsxs('p', {
                                                children: [
                                                    C.jsx('strong', {
                                                        className:
                                                            'font-semibold',
                                                        children: 'Expiră la:',
                                                    }),
                                                    ' ',
                                                    C.jsx('time', {
                                                        dateTime: a.expires_at,
                                                        children: new Date(
                                                            a.expires_at,
                                                        ).toLocaleDateString(
                                                            'ro-RO',
                                                            {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric',
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    a.qr_code &&
                                        C.jsxs('div', {
                                            className:
                                                'flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-6 shadow-inner dark:border-gray-600 dark:bg-gray-700',
                                            children: [
                                                C.jsx('p', {
                                                    className:
                                                        'mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400',
                                                    children: 'Cod Rețetă',
                                                }),
                                                C.jsx(ne, {
                                                    value: a.qr_code.cod,
                                                    size: 140,
                                                    level: 'Q',
                                                    bgColor: 'transparent',
                                                    fgColor: '#4F46E5',
                                                    className: 'drop-shadow-lg',
                                                }),
                                                C.jsx('p', {
                                                    className:
                                                        'mt-3 select-all font-mono text-xs tracking-widest text-gray-400',
                                                    children: a.qr_code.cod,
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            C.jsxs('div', {
                                children: [
                                    C.jsx('h2', {
                                        className:
                                            'mb-4 border-b border-gray-300 pb-2 text-xl font-semibold text-gray-800 dark:text-gray-200',
                                        children: 'Medicamente',
                                    }),
                                    C.jsx('ul', {
                                        className:
                                            'ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300',
                                        children: a.medications.map((i) =>
                                            C.jsxs(
                                                'li',
                                                {
                                                    className:
                                                        'text-lg leading-snug',
                                                    children: [
                                                        C.jsx('span', {
                                                            className:
                                                                'font-semibold text-indigo-600 dark:text-indigo-400',
                                                            children: i.nume,
                                                        }),
                                                        ' ',
                                                        '— ',
                                                        i.pivot.frecventa,
                                                        'x /',
                                                        ' ',
                                                        i.pivot.interval_ore,
                                                        'h',
                                                    ],
                                                },
                                                i.id,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
export { ve as default };
