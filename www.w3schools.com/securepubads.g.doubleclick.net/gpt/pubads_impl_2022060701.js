(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var q, da, ea, fa, ja, la, na, qa, ka, pa, ra, sa, ta, ua, va, xa, Aa, Ca, Da, Ea, Ga, Fa, Ha, Ia, Ja, La, v, Qa, Sa, Ua, Va, Xa, Ya, Za, ab, cb, ib, lb, nb, rb, tb, vb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Hb, Ib, Jb, Nb, Ob, Rb, Sb, Qb, Tb, Vb, Pb, Yb, ac, dc, fc, gc, ic, nc, pc, kc, qc, wc, sc, Bc, Ec, yc, zc, Ic, Jc, Kc, Mc, Gc, Hc, Nc, Pc, Qc, Vc, Xc, Zc, $c, bd, cd, dd, fd, hd, id, md, zd, sd, Cd, Dd, Fd, Hd, Id, Od, Ud, Sd, Wd, ce, ie, me, ne, De, Je, Ke, Me, Ne, Pe, Qe, Re, Se, Ue, Te, Ye, $e, af, bf, hf, kf, lf, mf, qf, wf, yf, Df, Ff, ff, Gf, If, Pf, H, dg, pg, tg, vg, xg, zg, Ag, Bg, Dg, Gg, Jg, Mg, Og, Ng, Rg, Wg, Xg, Yg, Zg, Pg, $g, ah, Qg, bh, dh, eh, gh, fh, lh, jh, mh, vh, yh, qh, rh, zh, Bh, Ch, Dh, Eh, Ih, Mh, Jh, Gh, Th, Vh, Yh, $h, M, bi, ci, ei, gi, ii, oi, ki, ji, li, mi, ni, Fi, Gi, Ii, Ji, Mi, Pi, Ui, $i, bj, dj, ej, gj, ij, jj, lj, hj, nj, pj, rj, uj, Bj, Ej, Fj, Nj, Pj, Rj, Sj, Tj, Wj, Yj, ma, Zj, bk, fk, nk, ok, qk, gk, zk, Bk, Ck, Dk, Fk, Gk, Ik, Kk, Wk, Xk, Yk, cl, $k, gl, ml, nl, rl, ul, Bl, Fl, Hl, Il, Kl, Ml, Ol, Tl, $l, Pl, am, bm, Rl, Vl, Ul, Wl, Ql, cm, fm, lm, gm, mm, om, rm, pm, um, vm, wm, Cm, Dm, Em, Fm, Gm, Hm, Im, Jm, Km, Lm, Mm, Xm, an, dn, hn, en, kn, nn, ln, mn, rn, tn, un, xn, yn, Gn, Nn, On, Qn, Wn, Zn, $n, ao, ho, io, lo, mo, no, so, to, vo, wo, xo, jp, lp, mp, np, up, wp, Bp, Ep, B, Fp, Gp, Hp, Ip, Jp, w, Kp, Lp, Mp, S, Np, Op, Pp, Wp, Xp, Yp, eb, gb, hb, $p, cq, aq, bq, dq, eq, Ma, iq, oa, ia, jq, kq, lq, mq, He, pq;
    da = function(a, b) {
        b = _.ba(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ea = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    fa = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ja = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ha(e) ? "o" + ia(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    la = function(a, b) {
        a.sort(b || ka)
    };
    na = function(a) {
        for (var b = ma, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ka;
        la(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    qa = function(a, b) {
        if (!oa(a) || !oa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = pa, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ka = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    pa = function(a, b) {
        return a === b
    };
    ra = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    sa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = sa.apply(null, fa(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    ta = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ua = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    va = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    xa = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < wa.length; f++) c = wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Aa = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ca = function(a) {
        return Ba(Aa(), a)
    };
    Da = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Ea = function() {
        return Ca("Firefox") || Ca("FxiOS")
    };
    Ga = function() {
        return Ca("Safari") && !(Fa() || Ca("Coast") || Ca("Opera") || Ca("Edge") || Ca("Edg/") || Ca("OPR") || Ea() || Ca("Silk") || Ca("Android"))
    };
    Fa = function() {
        return (Ca("Chrome") || Ca("CriOS")) && !Ca("Edge") || Ca("Silk")
    };
    Ha = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.u(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    Ia = function() {
        var a = Aa();
        if (Ca("Trident") || Ca("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = Da(a);
        b = Ha(a);
        return Ca("Opera") ? b(["Version", "Opera"]) : Ca("Edge") ? b(["Edge"]) : Ca("Edg/") ? b(["Edg"]) : Ca("Silk") ? b(["Silk"]) : Fa() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    Ja = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    La = function(a) {
        return new _.Ka(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    v = function(a) {
        var b = Ma.apply(1, arguments);
        if (0 === b.length) return Oa(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Oa(c.join(""))
    };
    Qa = function(a, b) {
        var c = Pa(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Oa(c)
    };
    Sa = function(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = Ra(b)
    };
    Ua = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = Ta[19 == d ? c & 3 | 8 : c]);
        return Oa("uuid-in-package:" + a.join("").toLowerCase())
    };
    Va = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Xa = function(a, b) {
        a.textContent = b instanceof Wa && b.constructor === Wa ? b.j : "type_error:SafeScript";
        Va(a)
    };
    Ya = function(a, b) {
        a.src = Pa(b);
        Va(a)
    };
    Za = function(a, b) {
        a.write(Ra(b))
    };
    ab = function(a) {
        return a ? a.passive && $a() ? a : a.capture || !1 : !1
    };
    cb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new w.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Ya(g, a);
            c && "complete" !== b.document.readyState ? _.bb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    ib = function(a) {
        var b, c, d, e, f, g;
        return _.db(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.tb, c = void 0, h.A = 2, eb(h, fb(b), 4);
                case 4:
                    c = h.m;
                    gb(h, 3);
                    break;
                case 2:
                    hb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Jb || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.H,
                        me: c.bg_hash_basename,
                        le: c.bg_binary,
                        Te: a.j + "_" + a.m,
                        Jb: d,
                        tb: a.tb,
                        jc: e,
                        Ac: f,
                        ic: g
                    }) : h.return(void 0)
            }
        })
    };
    lb = function(a) {
        var b;
        return _.db(function(c) {
            if (1 == c.j) return eb(c, ib(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.me, g._bgp_ = b.le, g._li_ = b.Te, g._jk_ = b.Jb, g._st_ = b.tb, g._rc_ = b.jc, g._dl_ = b.Ac, g._g2_ = b.ic, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = jb(kb, {
                    basename: d
                });
                cb(d)
            }
            return c.return(b)
        })
    };
    nb = function(a) {
        if (a !== mb) throw Error("requires a valid immutable API token");
    };
    rb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (pb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (qb || (qb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    tb = function(a) {
        return sb && null != a && a instanceof Uint8Array
    };
    vb = function(a) {
        if (a !== ub) throw Error("illegal external caller");
    };
    xb = function(a, b) {
        Object.isFrozen(a) || (wb ? a[wb] |= b : void 0 !== a.hb ? a.hb |= b : Object.defineProperties(a, {
            hb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    };
    yb = function(a) {
        var b;
        wb ? b = a[wb] : b = a.hb;
        return null == b ? 0 : b
    };
    zb = function(a) {
        xb(a, 1);
        return a
    };
    Ab = function(a) {
        return Array.isArray(a) ? !!(yb(a) & 2) : !1
    };
    Bb = function(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        xb(a, 2)
    };
    Cb = function(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? xb(a, 8) : Object.isFrozen(a) || (wb ? a[wb] &= -9 : void 0 !== a.hb && (a.hb &= -9))
    };
    Db = function(a) {
        return Ab(a.ta)
    };
    Eb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Hb = function(a) {
        return null == a ? Fb() : a.constructor === Gb ? a : "string" === typeof a ? a ? new Gb(a, ub) : Fb() : tb(a) ? a.length ? new Gb(new Uint8Array(a), ub) : Fb() : Fb()
    };
    Ib = function(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };
    Jb = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };
    Nb = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (tb(a)) return Kb(a);
                    if (a instanceof Gb) return Lb(a);
                    if (a instanceof Mb) return a.ra()
                }
        }
        return a
    };
    Ob = function(a, b) {
        b.A && (a.A = b.A.slice())
    };
    Rb = function(a, b) {
        b = void 0 === b ? Pb : b;
        return Qb(a, b)
    };
    Sb = function(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Qb(a, b);
            else if (Eb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Sb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    };
    Qb = function(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Sb(c[d], b);
        Array.isArray(a) && yb(a) & 1 && zb(c);
        return c
    };
    Tb = function(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Nb(a);
        return Array.isArray(a) ? Rb(a, Tb) : a
    };
    Vb = function(a) {
        return Ub(a)
    };
    Pb = function(a) {
        return tb(a) ? new Uint8Array(a) : a instanceof Mb ? Wb(a, Vb) : a
    };
    Yb = function(a) {
        var b = Xb(a, 45, !1);
        if (b.length && !(yb(b) & 4)) {
            Object.isFrozen(b) && (b = zb(b.slice()), x(a, 45, b, void 0, !0));
            for (var c = 0; c < b.length; c++) b[c] = Hb(b[c]);
            xb(b, 5)
        }
        Db(a) && Object.freeze(b);
        return b
    };
    ac = function(a, b, c, d) {
        Zb(a);
        c !== d ? x(a, b, c) : $b(a, b);
        return a
    };
    dc = function(a, b, c) {
        Zb(a);
        Xb(a, b).push(c)
    };
    fc = function(a, b, c) {
        return ec(a, b) === c ? c : -1
    };
    gc = function(a, b) {
        return Nb(b)
    };
    ic = function(a, b) {
        Ob(a, b);
        var c = b.Y;
        if (c) {
            b = b.j;
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = hc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) ic(f[g], e[g])
                        } else(f = jc(a, e.constructor, g, void 0, f)) && ic(f, e)
                    }
                }
        }
    };
    nc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.y(kc(c, a)), b = c.next().value, a = c.next().value, c = b);
        lc = c >>> 0;
        mc = a >>> 0
    };
    pc = function(a) {
        if (16 > a.length) nc(Number(a));
        else if (oc) a = BigInt(a), lc = Number(a & BigInt(4294967295)) >>> 0, mc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            mc = lc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), mc *= 1E6, lc = 1E6 * lc + d, 4294967296 <= lc && (mc += lc / 4294967296 | 0, lc %= 4294967296);
            b && (b = _.y(kc(lc, mc)), a = b.next().value, b = b.next().value, lc = a, mc = b)
        }
    };
    kc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    qc = function(a) {
        sb && a instanceof Uint8Array ? a = Kb(a) : Array.isArray(a) ? a = Ab(a) ? a : Rb(a, qc) : a instanceof rc ? a = sc(a) : a instanceof Mb && (a = Wb(a, sc), Bb(a.j));
        return a
    };
    wc = function(a, b, c, d, e) {
        (a = a.Y && a.Y[c]) ? Array.isArray(a) ? (Ab(a) && Object.isFrozen(a) ? d = a : (d = tc(a, sc), Bb(d), Object.freeze(d)), uc(b, c, d, e)) : vc(b, c, sc(a), e): x(b, c, qc(d), e)
    };
    sc = function(a) {
        if (Db(a)) return a;
        var b = new a.constructor;
        Ob(b, a);
        for (var c = a.ta, d = 0; d < c.length; d++) {
            var e = c[d];
            if (d === c.length - 1 && Eb(e))
                for (var f in e) {
                    var g = +f;
                    _.u(Number, "isNaN").call(Number, g) ? xc(b)[g] = e[g] : wc(a, b, g, e[f], !0)
                } else wc(a, b, d - a.Wa, e, !1)
        }
        Bb(b.ta);
        return b
    };
    Bc = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Object.prototype.hasOwnProperty.call(c, e)) {
                    var f = c[e],
                        g = f.Df;
                    g || (d.wb = f.Vg || f.Zg.Cc, f.ke ? (d.Fc = yc(f.ke), g = function(h) {
                        return function(k, l, n) {
                            return h.wb(k, l, n, h.Fc)
                        }
                    }(d)) : f.Ue ? (d.Ec = zc(f.xe.od, f.Ue), g = function(h) {
                        return function(k, l, n) {
                            return h.wb(k, l, n, h.Ec)
                        }
                    }(d)) : g = d.wb, f.Df = g);
                    g(b, a, f.xe)
                }
                d = {
                    wb: d.wb,
                    Fc: d.Fc,
                    Ec: d.Ec
                }
            }
        }
        Ac(b, a)
    };
    Ec = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (Cc in c || Dc in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    yc = function(a) {
        var b = a[Fc];
        if (!b) {
            var c = Gc(a);
            b = function(d, e) {
                return Hc(d, e, c)
            };
            a[Fc] = b
        }
        return b
    };
    zc = function(a, b) {
        var c = a[Fc];
        c || (c = function(d, e) {
            return Bc(d, e, b)
        }, a[Fc] = c);
        return c
    };
    Ic = function(a, b) {
        a.push(b)
    };
    Jc = function(a, b, c) {
        a.push(b, c.Cc)
    };
    Kc = function(a, b, c, d) {
        var e = yc(d),
            f = Gc(d).od,
            g = c.Cc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    Mc = function(a, b, c, d, e, f) {
        var g = zc(d, f),
            h = c.Cc;
        a.push(b, function(k, l, n) {
            return h(k, l, n, d, g)
        })
    };
    Gc = function(a) {
        var b = a[Dc];
        if (b) return b;
        b = a[Dc] = [];
        var c = Ic,
            d = Jc,
            e = Kc,
            f = Mc;
        b.od = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = Ec(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = Ec(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        Cc in a && Dc in a && (a.length = 0);
        return b
    };
    Hc = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        Bc(a, b, e ? c[0] : void 0)
    };
    Nc = function(a, b) {
        return {
            Yg: a,
            Cc: b
        }
    };
    Pc = function(a, b, c, d, e, f) {
        (a = a.Y && a.Y[c]) ? Array.isArray(a) ? (e = f.Ic ? zb(a.slice()) : a, uc(b, c, e)) : vc(b, c, a): (sb && d instanceof Uint8Array ? e = d.length ? new Gb(new Uint8Array(d), ub) : Fb() : d instanceof Mb ? e = Wb(d, Oc) : (Array.isArray(d) && (e ? Bb(d) : Array.isArray(d) && yb(d) & 1 && f.Ic && (d = d.slice())), e = d), x(b, c, e))
    };
    Qc = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Vc = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.y(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.y(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || Rc(h, b))) {
                        f = _.y(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Sc(function(f) {
            if (!f.parent || !Tc(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (Uc(g[h]) == f) {
                    Vc(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    Xc = function(a) {
        return a instanceof Wc ? Ra(a) : Ra(a)
    };
    Zc = function(a) {
        return a instanceof Yc ? Pa(a) : Pa(a)
    };
    $c = function(a) {
        return function() {
            var b = Ma.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    };
    bd = function(a) {
        a.Vd.apply(a, _.ad(Ma.apply(1, arguments).map(function(b) {
            return {
                Wd: 2,
                message: b
            }
        })))
    };
    cd = function(a) {
        a.Vd.apply(a, _.ad(Ma.apply(1, arguments).map(function(b) {
            return {
                Wd: 5,
                message: b
            }
        })))
    };
    dd = function(a) {
        a && "function" == typeof a.za && a.za()
    };
    fd = function() {
        var a = ed;
        return function(b) {
            return b instanceof a
        }
    };
    hd = function() {
        var a = gd;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    id = function(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && Tc(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    md = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.jd("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && da(a.google_image_requests, e);
                _.ld(e, "load", f);
                _.ld(e, "error", f)
            };
            _.bb(e, "load", f);
            _.bb(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    zd = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = nd(od, d);
            if (d) {
                var f = nd(od, d);
                pd(f, qd(rd(1), -1));
                f.X()
            }
        } catch (g) {
            sd(d), e = new od
        }
        if (c = (B = hc(e, td, 1), _.u(B, "find")).call(B, function(g) {
                return ud(g, 1, 0) === b
            }))
            if (f = vd(c, 2), null === f || isNaN(f)) sd(d);
            else return f;
        d = wd() ? null : Math.floor(1E3 * xd());
        if (null === d) return null;
        c ? qd(c, d) : pd(e, qd(rd(b), d));
        return yd(a, e.X()) ? d : null
    };
    sd = function(a) {
        .01 > Math.random() && Ad({
            data: a
        }, "ls_tamp")
    };
    Cd = function(a, b) {
        b = void 0 === b ? window : b;
        if (Bd(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    Dd = function(a) {
        return "null" !== a.origin
    };
    Fd = function(a, b, c) {
        b = Bd(b) && Dd(c) ? c.document.cookie : null;
        return null === b ? null : (new Ed({
            cookie: b
        })).get(a) || ""
    };
    Hd = function(a, b, c) {
        var d;
        return _.db(function(e) {
            if (1 == e.j) return eb(e, w.Promise.all(a), 2);
            if (3 != e.j) {
                if (!b.length) return e.return(0);
                d = _.Gd();
                return eb(e, w.Promise.race([w.Promise.all(b), new w.Promise(function(f) {
                    return void setTimeout(f, c)
                })]), 3)
            }
            return e.return(_.Gd() - d)
        })
    };
    Id = function(a, b) {
        var c, d, e;
        return _.db(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.fd
            }) : a, eb(f, w.Promise.all(c.map(function(g) {
                return g.pd.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.fd
                });
                e = _.Gd();
                return eb(f, w.Promise.race([w.Promise.all(d.map(function(g) {
                    return g.pd.promise
                })), new w.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.Gd() - e)
        })
    };
    Od = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = Jd.j();
        0 === e.j && (e.j = Math.random() < _.Kd(Ld) ? 2 : 1);
        2 === e.j && (e = {}, Ad(_.u(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Md(window)), e.em = c, e.lid = b, e.eids = _.C(Nd).j().join(), e), d), "esp"))
    };
    Ud = function(a, b, c, d) {
        Od(18, a);
        try {
            var e = _.Gd();
            _.Kd(Pd) && (x(b, 8, Number((Qd(b, 8) - 1).toFixed(3))), x(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Od(29, a, null, {
                    delta: String(_.Gd() - e)
                });
                x(b, 3, Date.now());
                "string" !== typeof f ? Od(21, a) : f || Od(20, a);
                vc(x(b, 2, f), 10);
                Rd().set(b, d) && Od(27, a);
                return b
            }).catch(function(f) {
                Sd(b, 106, d);
                Od(28, a, Td(f));
                return b
            })
        } catch (f) {
            return Sd(b, 107, d), Od(1, a, Td(f)), w.Promise.resolve(b)
        }
    };
    Sd = function(a, b, c) {
        var d, e = null != (d = jc(a, Vd, 10)) ? d : new Vd;
        b = x(e, 1, b);
        vc(a, 10, b);
        Rd().set(a, c)
    };
    Wd = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new w.Promise(function(c) {
            var d = function() {
                c(b());
                _.ld(a, "load", d)
            };
            _.bb(a, "load", d)
        })
    };
    ce = function(a, b, c, d) {
        var e, f, g, h, k;
        return _.db(function(l) {
            if (1 == l.j) {
                e = new Xd(a, b, c, d);
                f = new Yd(e.o, e.D, c, d);
                g = new Zd(f.o, f.D, c, d);
                h = new $d;
                for (var n = _.y([e, f, g]), m = n.next(); !m.done; m = n.next()) D(h, m.value);
                ae(h);
                return eb(l, f.l.promise, 2)
            }
            k = l.m;
            return l.return(k ? k : {
                id: a,
                collectorGeneratedData: null
            })
        })
    };
    ie = function(a, b, c) {
        if (b)
            if (de() === ee(window) || _.E(fe))
                if (a.encryptedSignalProviders instanceof ge) a.encryptedSignalProviders.addErrorHandler(c);
                else {
                    Od(38, "");
                    var d, e = new he(null != (d = a.encryptedSignalProviders) ? d : [], b);
                    a.encryptedSignalProviders = new ge(e);
                    e.addErrorHandler(c)
                }
        else Od(16, "");
        else Od(15, "")
    };
    me = function(a, b, c) {
        var d = b.toString();
        if (c && !document.querySelector('[src="' + d + '"]')) {
            var e = Rd().get(a, c),
                f = e.lb,
                g;
            if (!(!e.success || f && (0 === je(f) || 1 > (null != (g = Qd(f, 8)) ? g : 0)))) {
                Od(30, a, null, {
                    url: d
                });
                var h = document.createElement("script");
                h.setAttribute("esp-signal", "true");
                Ya(h, b);
                var k = function() {
                    Od(31, a, null, {
                        url: d
                    });
                    Sd(null != f ? f : ke(new le, a), 109, c);
                    _.ld(h, "error", k)
                };
                document.head.appendChild(h);
                _.bb(h, "error", k)
            }
        }
    };
    ne = function(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    De = function(a) {
        var b = _.u(Object, "assign").call(Object, {}, a);
        a = a.id;
        b = (delete b.id, b);
        if (_.u(Object, "keys").call(Object, b).length) throw Error("Invalid attribute(s): " + _.u(Object, "keys").call(Object, b));
        b = {
            id: a
        };
        if (!oe.test("div")) throw Error("");
        if ("DIV" in pe) throw Error("");
        var c = void 0;
        a = null;
        var d = "";
        if (b)
            for (g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!oe.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof qe) e = re(e);
                        else {
                            if ("style" == f.toLowerCase()) throw Error("");
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in se)
                                if (e instanceof Yc) e = Pa(e).toString();
                                else if (e instanceof _.te) e = _.ue(e);
                            else if ("string" === typeof e) e instanceof _.te || (e = "object" == typeof e && e.Oa ? e.Ga() : String(e), ve.test(e) ? e = new _.te(e, _.we) : (e = String(e), e = e.replace(/(%0A|%0D)/g, ""), e = e.match(xe) ? new _.te(e, _.we) : null)), e = (e || _.ye).Ga();
                            else throw Error("");
                        }
                        e.Oa && (e = e.Ga());
                        f = f + '="' + ze(String(e)) + '"';
                        d += " " + f
                    }
                }
        var g = "<div" + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Ae.div ? g += ">" : (a = Be(c), g += ">" + Ra(a).toString() + "</div>", a = a.qb());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? a = 0 : a = null);
        g = Ce(g, a);
        return Ce(Xc(g).toString(), null)
    };
    Je = function(a) {
        Ee();
        var b = Fe.googleToken[5] || 0;
        a && (0 != b || Ge[3] >= He() ? Ie.kd(a) : (Ie.vd().push(a), Ie.Pd()));
        Ge[3] >= He() && Ge[2] >= He() || Ie.Pd()
    };
    Ke = function(a) {
        a = tc(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    Me = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.Le(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ja(a);
        la(a, function(b, c) {
            return b - c
        });
        return a
    };
    Ne = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    Pe = function(a, b, c, d) {
        var e = new _.Oe,
            f = "",
            g = function(z) {
                try {
                    var A = "object" === typeof z.data ? z.data : JSON.parse(z.data);
                    f === A.paw_id && (_.ld(a, "message", g), A.error ? e.reject(Error(A.error)) : e.resolve(d(A)))
                } catch (I) {}
            },
            h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return _.bb(a, "message", g), f = c(a.gmaSdk), e.promise;
        var k, l, n, m, p, r;
        return "function" === typeof(null == (k = a.webkit) ? void 0 : null == (l = k.messageHandlers) ? void 0 : null == (n = l.getGmaQueryInfo) ? void 0 : n.postMessage) || "function" === typeof(null == (m = a.webkit) ? void 0 : null == (p = m.messageHandlers) ? void 0 : null == (r = p.getGmaSig) ? void 0 : r.postMessage) ? (f = String(Math.floor(2147483647 * xd())), _.bb(a, "message", g), b(a.webkit.messageHandlers, f), e.promise) : null
    };
    Qe = function(a) {
        return Pe(a, function(b, c) {
            var d;
            return void(null != (d = b.getGmaQueryInfo) ? d : b.getGmaSig).postMessage(c)
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Re = function(a) {
        var b, c;
        return null != (c = (B = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.u(B, "find")).call(B, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Se = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    Ue = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.y(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Te(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g != h.body; g = g.offsetParent)
                        if (k = Te(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Te = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Ve(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= _.We(_.Xe, a).width && 1 >= _.We(_.Xe, a).height ? !0 : !1;
        d && d.j("ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    };
    Ye = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Le(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    $e = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Ze(d, function(e) {
                    return !_.u(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Ye(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    af = function(a, b) {
        .001 > xd() && Ad({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    bf = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.ef = function(a) {
        _.C(cf).j = !0;
        return df[a]
    };
    hf = function() {
        var a = ff(),
            b = !_.C(cf).j,
            c = gf;
        gf = void 0;
        if (!b) {
            if (c) throw Error(c());
            throw Error(String(b));
        }
        _.u(Object, "assign").call(Object, df, a._vars_);
        a._vars_ = df
    };
    kf = function(a) {
        var b = _.Kd(jf);
        if (a.length <= b) return {
            url: a,
            ld: 0
        };
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        b = c;
        return {
            url: b,
            ld: a.length - b.length + 8
        }
    };
    lf = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    mf = function(a, b) {
        b = void 0 === b ? window : b;
        return !!lf(a, b)
    };
    qf = function(a) {
        var b = new nf;
        b = ac(b, 1, Date.now(), 0);
        b = ac(b, 2, a.pvsid, 0);
        b = ac(b, 3, a.ya, "");
        var c = _.C(Nd).j();
        b = of (b, 4, c);
        a = ac(b, 5, a.Se, 0);
        var d;
        if (b = null == (d = w.globalThis.performance) ? void 0 : d.memory) {
            d = new pf;
            try {
                ac(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                ac(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                ac(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && vc(a, 10, d);
        return a
    };
    wf = function(a, b) {
        var c = rf();
        if (a.Kb) {
            var d = a.kb;
            a = qf(a);
            var e = new sf;
            b = tf(e, 1, b);
            c = ac(b, 2, c, 0);
            c = uf(a, 6, vf, c);
            cd(d, c)
        }
    };
    yf = function(a, b) {
        if (!document.getElementById("gatc:host:script")) {
            var c = document.createElement("script");
            c.id = "gatc:host:script";
            Ya(c, a.ae.Ee);
            a.zd.appendChild(c)
        }
        a = window.gatc_host;
        xf(a) ? b(a) : Array.isArray(a) && "function" === typeof a.push ? a.push(b) : window.gatc_host = [b]
    };
    Df = function(a, b) {
        b = void 0 === b ? zf : b;
        var c = function(e) {
                "string" === typeof e && (e = Af.j(e), a(e))
            },
            d = new Bf;
        yf(b, function(e) {
            if (xf(e)) {
                var f = new Cf;
                ac(f, 1, Af.m, 0);
                e.openConsoleTab(f.X(), c, function(g) {
                    if (!(d.j instanceof MessagePort)) {
                        var h = d.j;
                        d.j = g;
                        g = _.y(h);
                        for (h = g.next(); !h.done; h = g.next())(h = h.value) && d.send(h)
                    }
                })
            }
        });
        return d
    };
    Ff = function(a, b) {
        Ef.has(a);
        Ef.set(a, b)
    };
    ff = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    Gf = function(a, b) {
        var c = ff();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    If = function(a) {
        if (a = Hf[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = ff())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    Pf = function(a) {
        var b = new Jf;
        if (Kf(a)) return Lf(b, 1, Mf, a), b;
        if ("number" === typeof a) return Lf(b, 2, Mf, a), b;
        if ("boolean" === typeof a) return Lf(b, 3, Mf, a), b;
        if (void 0 === a) return Lf(b, 4, Mf, 2), b;
        if (null === a) return Lf(b, 4, Mf, 1), b;
        if ("function" === typeof a) return Lf(b, 7, Mf, a.toString()), b;
        if (Array.isArray(a)) {
            var c = new Nf;
            Of(c, a.map(function(h) {
                return Pf(h)
            }));
            uf(b, 5, Mf, c);
            return b
        }
        c = new Qf;
        var d = Rf(c),
            e = !1;
        if (a === ff()) x(c, 2, 1), e = !0;
        else if (void 0 !== a.constructor && Ef.has(a.constructor)) {
            var f = Ef.get(a.constructor);
            x(c, 2, f);
            e = !0;
            8 === f ? (f = a.getSlotId().getDomId(), Sf(c, Tf(new Uf, Vf().m[f]))) : 7 === f && (f = Vf().j, Sf(c, Wf(f)))
        }
        a = _.y(_.u(Object, "entries").call(Object, a));
        for (f = a.next(); !f.done; f = a.next()) {
            var g = _.y(f.value);
            f = g.next().value;
            g = g.next().value;
            e && "function" === typeof g || d.set(f, Pf(g))
        }
        uf(b, 6, Mf, c);
        return b
    };
    H = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        _.ef(148) && (Xf || (Xf = new Yf, Xf.initialize()), c = Zf(b, c));
        return function() {
            var e = Ma.apply(0, arguments),
                f = _.$f(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Kb && a.mf) {
                    var h = a.kb,
                        k = qf(a);
                    var l = ac(k, 5, a.Re, 0);
                    var n = new ag;
                    var m = ac(n, 1, b, 0);
                    var p = ac(m, 2, g, 0);
                    var r = uf(l, 9, vf, p);
                    cd(h, r)
                }
            } catch (z) {}
            return f
        }
    };
    _.$f = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = Ma.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.C(bg);
            try {
                var l = _.E(cg);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (n) {
                try {
                    if (g) dg.call(this, a, 110, n);
                    else if (dg.call(this, a, b, n), !d) throw n;
                } catch (m) {
                    if ((e = h) && eg && fg() && (eg.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), eg.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw n;
                }
            }
            return f
        }
    };
    _.gg = function(a, b, c, d) {
        return _.$f(a, b, c, void 0 === d ? !1 : d)()
    };
    dg = function(a, b, c) {
        if (a.Ud) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new hg,
                e = new ig;
            try {
                var f = Md(window);
                ac(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = _.C(Nd).j(); of (e, 2, g)
            } catch (p) {}
            try {
                ac(e, 3, window.document.URL, "")
            } catch (p) {}
            f = vc(d, 2, e);
            g = new jg;
            b = ac(g, 1, b, 0);
            try {
                var h = Kf(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                ac(b, 2, h, "")
            } catch (p) {}
            try {
                var k = Kf(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                ac(b, 3, k, "")
            } catch (p) {}
            try {
                var l = Kf(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && of (b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = vc(f, 1, b);
            k = new kg;
            try {
                ac(k, 1, a.ab || a.ya, "")
            } catch (p) {}
            try {
                var n = lg();
                ac(k, 2, n, 0)
            } catch (p) {}
            try {
                var m = [].concat(_.ad(_.u(mg, "keys").call(mg))); of (k, 3, m)
            } catch (p) {}
            uf(h, 4, ng, k);
            ac(h, 5, a.qd, 0);
            bd(a.kb, h)
        }
    };
    pg = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.u(a, "find").call(a, function(e) {
            e = jc(e, og, 1);
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : hc(c, og, 2)) ? d : null
    };
    tg = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && hc(a, qg, 6).length ? pg(hc(a, qg, 6), rg(sg(new og, b), c)) : hc(a, og, 5)
    };
    vg = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = ug(!1, b), c = tg(a, b.width, b.height));
        null != c || (c = tg(a));
        return null == c ? [] : c.map(function(d) {
            return J(d, 3) ? "fluid" : [d.getWidth(), d.getHeight()]
        })
    };
    xg = function(a) {
        if (!vg(a).length && wg(a, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.y(vg(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    zg = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(xg(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? yg(c.join(":")).toString() : "0"
    };
    Ag = function(a) {
        return 0 !== a && 1 !== a
    };
    Bg = function(a, b) {
        var c;
        return !(null != (c = J(b, 22)) ? !c : !J(a, 15))
    };
    Dg = function(a) {
        var b = a.document;
        return Cg(a) ? b.URL : b.referrer
    };
    Gg = function(a) {
        try {
            return Eg(a, window.top)
        } catch (b) {
            return new _.Fg(-12245933, -12245933)
        }
    };
    Jg = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.We(Hg, a), a = new _.Ig(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Mg = function(a, b) {
        for (var c = {}, d = _.y(_.u(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = Ub(b[e]),
                g = _.C(Kg),
                h = g.j.get(e);
            null == h ? h = ++_.C(bg).A : g.j.delete(e);
            x(f, 20, h);
            c[e] = f
        }
        a = Ub(a);
        b = new Date(Date.now());
        b = b.getUTCFullYear() + Lg(b.getUTCMonth() + 1) + Lg(b.getUTCDate());
        return {
            W: a,
            R: c,
            lf: b
        }
    };
    Og = function() {
        for (var a = "", b = _.y(Ng()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Ng = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Rg = function(a, b) {
        return Pg(a, b) || Qg(a, b)
    };
    Wg = function(a, b, c, d) {
        var e = Rg(b, a);
        if (!e) return null;
        var f = Gg(e),
            g = e === Qg(b, a),
            h = Sg(function() {
                var p = g ? Qg(b, a) : e;
                return p && Tg(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = vg(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var n;
            f.y += Math.round(Math.min(null != (n = Ug(k("padding-top"))) ? n : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var m;
                f.x += Math.round(Math.min(null != (m = Ug(k("padding-left"))) ? m : 0, d))
            }
        }
        return f && Vg(e) ? f : new _.Fg(-12245933, -12245933)
    };
    Xg = function(a, b, c, d) {
        var e = Qg(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Wg(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Yg = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Zg = function(a) {
        return Yg(a) + "__container__"
    };
    Pg = function(a, b) {
        var c;
        return (null == (c = Qg(a, b)) ? void 0 : c.querySelector('[id="' + Zg(a) + '"]')) || null
    };
    $g = function(a, b) {
        var c, d;
        return null != (d = null == (c = Pg(a, b)) ? void 0 : c.querySelector('iframe[id="' + Yg(a) + '"]')) ? d : null
    };
    ah = function(a) {
        var b = window;
        try {
            var c, d;
            null == (c = b.performance) || null == (d = c.mark) || d.call(c, a)
        } catch (e) {}
    };
    Qg = function(a, b) {
        b = void 0 === b ? document : b;
        return Vf().A.get(a) || b.getElementById(a.getDomId())
    };
    bh = function(a) {
        return Math.round(Number(Ug(a)))
    };
    dh = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.ch(a, c), a = a.parentElement
    };
    eh = function(a, b, c, d, e) {
        _.ch(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.ch(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.ch(a, f)), !0) : !1
    };
    gh = function(a, b, c, d, e, f, g, h, k) {
        var l = xg(d);
        _.t.setTimeout(_.$f(a, 459, function() {
            return void fh(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    fh = function(a, b, c, d, e, f, g, h, k) {
        if (_.t.IntersectionObserver) {
            var l = null,
                n, m = null != (n = $g(c, b)) ? n : Qg(c, b);
            n = _.$f(a, 459, function(p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect,
                        z = window.innerWidth,
                        A = Math.round(r.left),
                        I = Math.round(r.right),
                        F = 0 > A + 2,
                        L = 0 < I - (z + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || F || L) hh(h, function(G) {
                        if (F || L) {
                            var O = new ih;
                            O.set(8);
                            jh(m) && O.set(10);
                            O = kh(O)
                        } else O = lh(b, c);
                        var P = mh(c, m, f),
                            U = P.Ne;
                        P = P.Oe;
                        nh(G, a);
                        K(G, "qid", k);
                        K(G, "iu", c.getAdUnitPath());
                        K(G, "e", String(O));
                        F && K(G, "ofl", String(A));
                        L && K(G, "ofr", String(I - z));
                        K(G, "ret", e + "x" + f);
                        K(G, "req", g);
                        K(G, "bm", String(d));
                        K(G, "efh", Number(U));
                        K(G, "stk", Number(P));
                        K(G, "ifi", oh(window))
                    }, _.Kd(ph)), l && l.unobserve(m)
                }
            });
            m && (l = new _.t.IntersectionObserver(n, {
                threshold: [1]
            }), l.observe(m))
        }
    };
    lh = function(a, b) {
        var c = $g(b, a) || Qg(b, a),
            d = new ih;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Qg(b, a),
                n = Tg(l, window);
            if ("hidden" === n.visibility || "none" === n.display) return kh(d);
            var m = bh(n.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + m + 2, g + m);
            var r = a.elementsFromPoint(b - m - 2, g + m);
            var z = a.elementsFromPoint(b - m - 2, k - m);
            var A = a.elementsFromPoint(f + m + 2, k - m);
            var I = a.elementsFromPoint(b / 2, k - m)
        } catch (L) {
            return d.set(1), kh(d)
        }
        if (!(p && p.length && r && r.length && z && z.length && A && A.length && I && I.length)) return d.set(7), kh(d);
        a = function(L, G) {
            for (var O = !1, P = 0; P < L.length; P++) {
                var U = L[P];
                if (O) {
                    var aa = Tg(U, window);
                    if ("hidden" !== aa.visibility && !qh(U) && !F(c, U)) {
                        d.set(G);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else c === U && (O = !0)
            }
        };
        rh(c) && d.set(9);
        var F = function(L, G) {
            return sh(L, G) || sh(G, L)
        };
        f = p[0];
        c === f || F(c, f) || qh(f) || d.set(2);
        f = r[0];
        c === f || F(c, f) || qh(f) || d.set(3);
        f = z[0];
        c === f || F(c, f) || qh(f) || d.set(4);
        f = A[0];
        c === f || F(c, f) || qh(f) || d.set(5);
        if (qh(c)) return kh(d);
        a(p, 12);
        a(r, 13);
        a(z, 14);
        a(A, 15);
        a(I, 6);
        return kh(d)
    };
    jh = function(a) {
        var b = !1,
            c = !1;
        return th(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    mh = function(a, b, c) {
        var d = (a = Qg(a)) && Tg(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        uh(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = vh(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var n = (l && _.u(l, "endsWith").call(l, "px") ? bh(l) : 0) >= c;
                    !l || n || "string" === typeof l && _.u(wh, "includes").call(wh, l) || (e = !1)
                }
            f || (k = Tg(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Ne: e,
            Oe: f
        }
    };
    vh = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.u(wh, "includes").call(wh, e.height) || (null == e ? 0 : e.maxHeight) && !_.u(xh, "includes").call(xh, e.maxHeight) || yh(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.u(wh, "includes").call(wh, g) || !!f && !_.u(xh, "includes").call(xh, f)
        }, c, d) ? !1 : !0
    };
    yh = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (G) {
                    if (15 == G.code) throw G.styleSheet = k, G;
                }
                h = l
            } catch (G) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var n = h[l],
                        m, p = c;
                    if (!(m = f.call(a, n.selectorText) && p(n))) a: {
                        var r = void 0;p = a;
                        var z = c,
                            A = e,
                            I = null != (r = n.cssRules) ? r : [];
                        for (r = 0; r < Math.min(I.length, A); r++) {
                            var F = I[r],
                                L = z;
                            if (f.call(p, F.selectorText) && L(F)) {
                                m = !0;
                                break a
                            }
                        }
                        m = !1
                    }
                    if (m) return !0
                } catch (G) {}
        }
        return !1
    };
    qh = function(a) {
        return th(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    rh = function(a) {
        return th(a, function(b) {
            var c;
            return (B = ["left", "right"], _.u(B, "includes")).call(B, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    zh = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Bh = function(a, b, c) {
        c = void 0 === c ? Ah : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.bb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Ch = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Dh = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Eh = function(a) {
        if (a === a.top || Tc(a.top)) return w.Promise.resolve({
            status: 4
        });
        var b = Ch(a);
        if (!b) return w.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Dh(a.document.referrer)) return w.Promise.resolve({
            status: 3
        });
        var c = new _.Oe;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Yb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Ih = function(a) {
        a = void 0 === a ? window : a;
        var b = void 0 === b ? Fh : b;
        var c = Gh(a);
        return c.messageChannel ? w.Promise.resolve(c.messageChannel) : new w.Promise(function(d) {
            var e = _.jd("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Pa(b).toString();
            var f = (new URL(b.toString())).origin,
                g = Hh({
                    destination: a,
                    hc: e,
                    origin: f,
                    Fa: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(function(h) {
                "goog:topics:frame:handshake:ack" === h.data && d(g)
            });
            c.messageChannel = g;
            a.document.documentElement.appendChild(e)
        })
    };
    Mh = function(a, b, c, d, e, f) {
        var g = Jh(f),
            h = g.Wb,
            k = g.Vb;
        b = Gh(b);
        b.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = Md(window)), a = a.j(c).then(function(l) {
            l = l.data;
            var n = k;
            if (l instanceof Uint8Array) n || (n = !(h instanceof Uint8Array && qa(l, h)));
            else if (hd()(l)) n || (n = l !== h);
            else {
                var m = Error(JSON.stringify(l));
                dg(e.context, 989, m);
                return 7
            }
            if (n && f) try {
                var p = new Kh;
                m = x(p, 2, _.Gd());
                l instanceof Uint8Array ? Lf(m, 1, Lh, l) : Lf(m, 3, Lh, l);
                f.setItem("goog:cached:topics", m.X())
            } catch (r) {}
            return l
        }), b.getTopicsPromise = a);
        return h && !k ? w.Promise.resolve(h) : b.getTopicsPromise
    };
    Jh = function(a) {
        if (!a) return {
            Wb: null,
            Vb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Wb: null,
                Vb: !0
            };
            var c = nd(Kh, b),
                d = ec(c, Lh);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = fc(c, Lh, 1);
                    a = void 0;
                    a = void 0 === a ? "" : a;
                    var g = Nh(c, f);
                    var h = null == g ? a ? new Gb(a, ub) : Fb() : g;
                    var k = Oh(h);
                    e = k ? new Uint8Array(k) : Sh || (Sh = new Uint8Array(0));
                    break;
                case 3:
                    e = ud(c, fc(c, Lh, 3), 0);
                    break;
                default:
                    Ja(d)
            }
            return {
                Wb: e,
                Vb: vd(c, 2) + 6048E5 < _.Gd()
            }
        } catch (l) {
            return {
                Wb: null,
                Vb: !0
            }
        }
    };
    Gh = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    Th = function(a) {
        var b = "";
        Sc(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    Vh = function(a) {
        a = (Tc(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Uh(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Yh = function(a, b) {
        var c = Wh.get(a);
        c || (b = c = b(), Xh.set(b, a), Wh.set(a, b));
        return c
    };
    $h = function(a, b) {
        return Yh(b, function() {
            return new Zh(a, b)
        })
    };
    M = function(a) {
        return function() {
            return new ai(a, [].concat(_.ad(Ma.apply(0, arguments))))
        }
    };
    bi = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? bi(b) : String(b)
        }).join(", ") + "]"
    };
    ci = function(a, b) {
        b = bi(b);
        b = b.substring(1, b.length - 1);
        return new ai(96, [a, b])
    };
    ei = function(a) {
        var b;
        return null != (b = (B = _.u(Object, "values").call(Object, di), _.u(B, "find")).call(B, function(c) {
            return c === a
        })) ? b : null
    };
    gi = function(a, b, c) {
        return Yh(c, function() {
            return new fi(a, b, c)
        })
    };
    ii = function(a, b, c) {
        return Yh(c, function() {
            return new hi(a, b, c)
        })
    };
    oi = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? _.gg(a, 94, function() {
            ff()._pubconsole_disable_ || null !== ji(b) && ki(a, b)
        }) : _.bb(_.t, "load", _.$f(a, 94, function() {
            ff()._pubconsole_disable_ || null !== ji(b) && ki(a, b)
        }));
        Gf("disablePublisherConsole", H(a, 93, li));
        Gf("onPubConsoleJsLoad", H(a, 731, mi));
        Gf("openConsole", H(a, 732, function(c) {
            ni(a, void 0 === c ? "" : c)
        }))
    };
    ki = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!pi) {
            var c = new qi("gpt_pubconsole_loaded");
            nh(c, a);
            K(c, "param", String(ji(b)));
            K(c, "api", String(ri));
            si(c, 1);
            ti(b.document, Oa(Zc(ui).toString()));
            pi = !0
        }
    };
    ji = function(a) {
        var b = Dg(a),
            c;
        return null != (c = (B = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.u(B, "find")).call(B, function(d) {
            return null !== vi(b, d)
        })) ? c : null
    };
    li = function() {
        ff()._pubconsole_disable_ = !0
    };
    mi = function() {
        wi && (ff().console.openConsole(xi), xi = void 0, wi = !1)
    };
    ni = function(a, b) {
        b = void 0 === b ? "" : b;
        ri = !0;
        var c;
        (null == (c = ff()) ? 0 : c.console) ? ff().console.openConsole(b): (b && (xi = b), wi = !0, ki(a))
    };
    Fi = function(a, b, c, d, e) {
        if ("string" !== typeof c || yi(c)) N(e, ci("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : oa(d) ? f = _.u(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (B = hc(b, zi, 9), _.u(B, "find")).call(B, function(g) {
                return Ai(g) === c
            })) ? Bi(d, f): (d = Bi(Ci(new zi, c), f), Di(b, 9, zi, d));
            e.info(Ei(c, f.join(), b.getAdUnitPath()), a)
        }
    };
    Gi = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.y(_.u(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, Fi(a, b, f, c[f], d);
        else d.error(ci("Slot.updateTargetingFromMap", [c]), a)
    };
    Ii = function(a, b, c) {
        return Yh(c, function() {
            return new Hi(a, b, c, c.j)
        })
    };
    Ji = function(a) {
        return _.u(Object, "assign").call(Object, {}, a, _.u(Object, "fromEntries").call(Object, _.u(Object, "entries").call(Object, a).map(function(b) {
            b = _.y(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Mi = function() {
        var a = {},
            b = Ji(Ki);
        a.OutOfPageFormat = b;
        b = Ji(Li);
        a.TrafficSource = b;
        return a
    };
    Pi = function() {
        for (var a = Ni(Oi) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "38"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-38"
    };
    Ui = function() {
        if (Qi) return Qi;
        for (var a = Ri(Si), b = [], c = 0; c < a.length; c += 2) Ti(a[c], a[c + 1], b);
        return Qi = b.join("&")
    };
    $i = function(a, b) {
        if (!b || !_.ha(b)) return null;
        var c = !1,
            d = new Vi;
        _.Wi(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? x(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? x(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? x(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    Xi();
                    return;
                default:
                    g = !0
            }
            g && a.error(Yi("setSafeFrameConfig", Zi(b), f, Zi(e)))
        });
        return c ? null : d
    };
    bj = function(a) {
        var b = new Vi;
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) aj(c, 1) && x(b, 1, J(c, 1)), aj(c, 2) && x(b, 2, J(c, 2)), aj(c, 3) && x(b, 3, J(c, 3)), aj(c, 4) && x(b, 4, J(c, 4));
        return b
    };
    dj = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(cj) : "fluid" === a
    };
    ej = function(a) {
        return Array.isArray(a) && 2 === a.length && cj(a[0]) && cj(a[1])
    };
    gj = function(a) {
        return Array.isArray(a) ? rg(sg(new og, a[0]), a[1]) : fj()
    };
    ij = function(a) {
        var b = [];
        if (hj(a)) b.push(gj(a));
        else if (Array.isArray(a)) {
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, hj(c) ? b.push(gj(c)) : qa(c, ["fluid"]) && b.push(fj())
        }
        return b
    };
    jj = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return rg(sg(new og, b), a)
    };
    lj = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            Mc: [],
            La: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = ij(a.fixed),
                d;
            if (d = jj(a.max)) {
                var e = a.min ? jj(a.min) : new og;
                null != (null == e ? void 0 : e.getWidth()) || null != e && sg(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && rg(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                if (0 === d.getWidth() || 0 === d.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    b = e.getWidth();
                    f = d.getWidth();
                    if (null != b && null != f && b > f) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    b = e.getHeight();
                    f = d.getHeight();
                    if (null != b && null != f && b > f) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else {
                var g, h;
                null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a))
            }
            d && e ? (a = new kj, a = vc(a, 1, d), a = vc(a, 2, e)) : a = null;
            return {
                Mc: c,
                La: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            Mc: ij(a),
            La: null
        }
    };
    hj = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    nj = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new mj("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!ej(b)) throw new mj("Size must be an array of two non-negative integers");
        b = rg(sg(new og, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = ij(a[1]), 0 === a.length) throw new mj("At least one slot size must be present");
        var c = new qg;
        b = vc(c, 1, b);
        return uc(b, 2, a)
    };
    pj = function(a, b, c) {
        return Yh(c, function() {
            return new oj(a, b, c)
        })
    };
    rj = function(a, b, c, d) {
        for (var e = _.y(_.u(Object, "entries").call(Object, qj)), f = e.next(); !f.done; f = e.next()) {
            var g = _.y(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && N(a, g(c, d))
        }
    };
    uj = function(a) {
        return a ? _.E(sj) ? 604800 : _.Kd(tj) || 3600 : -1
    };
    Bj = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = uj(void 0 === b ? !1 : b);
        if (!(0 < b) || c && Bd(c)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? Cd(c) : null;
            var e = 0;
            try {
                e |= vj(a, 2500);
                if (_.E(wj)) {
                    var f = _.xj(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= yj(a);
                0 < b && !_.zj(_.Aj(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    Ej = function(a, b, c, d, e, f) {
        d = Cj(d);
        if (5 !== d) return !1;
        var g = Bj(e, "22639388115" !== bf(c.getAdUnitPath()), f);
        _.E(sj) && (g &= -134217729);
        g && (hh("gpt_int_ns", function(h) {
            K(h, "nsr", g);
            nh(h, a)
        }, _.Kd(Dj)), rj(b, g, d, c.getAdUnitPath()));
        return !!g
    };
    Fj = function(a) {
        if (4 === a) return 11;
        switch (a) {
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            default:
                return null
        }
    };
    Nj = function(a) {
        a = Fj(a);
        if (!a) return null;
        var b = 0;
        if (11 !== a) {
            b |= _.t != _.t.top ? 512 : 0;
            var c = _.Gj(_.t);
            c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
            c && (b |= 64);
            if (b) return b
        }
        if (2 === a || 1 === a) {
            var d = {
                ka: _.t,
                Ed: Hj
            };
            0 === (0, _.Ij)() && (d.Ed = 3E3, d.Fd = 650);
            c = 0;
            try {
                var e = d.ka;
                c |= e != e.top ? 512 : 0;
                var f = d.ka;
                var g = Math.min(f.screen.width || 0, f.screen.height || 0);
                c |= g ? 320 > g ? 8192 : 0 : 2048;
                var h = d.ka,
                    k;
                if (k = h.navigator) {
                    var l = h.navigator.userAgent;
                    k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
                }
                c |= k ? 1048576 : 0;
                c = d.Fd ? c | (d.ka.innerHeight >= d.Fd ? 0 : 1024) : c | (_.Jj(d.ka) ? 0 : 8);
                c |= vj(d.ka, d.Ed);
                c |= yj(d.ka)
            } catch (n) {
                c |= 32
            }
            switch (d.Lg) {
                case 2:
                    e = d.ka;
                    g = d.Ca;
                    g = void 0 === g ? null : g;
                    f = Kj(e.innerWidth, 3, 0, Math.min(Math.round(e.innerWidth / 320 * 50), Lj) + 15, 3);
                    null != Ue(e, f, void 0 === g ? null : g) && (c |= 16777216);
                    break;
                case 1:
                    e = d.ka, g = d.Ca, g = void 0 === g ? null : g, f = e.innerWidth, h = e.innerHeight, k = Math.min(Math.round(e.innerWidth / 320 * 50), Lj) + 15, l = Kj(f, 3, h - k, h, 3), 25 < k && l.push({
                        x: f - 25,
                        y: h - 25
                    }), null != Ue(e, l, void 0 === g ? null : g) && (c |= 16777216)
            }
            if (e = d.Mg) e = d.ka, d = d.Ca, d = void 0 === d ? null : d, d = void 0 === d ? null : d, g = e.innerWidth, f = e.innerHeight, h = _.Kd(Mj), g = Kj(g, 10, f - h, f, 10), e = null != Ue(e, g, d);
            e && (c |= 16777216);
            b |= c
        } else 8 === a ? b |= Bj(_.t) : 11 !== a && (b |= 32);
        b || (c = _.Gj(_.t), c.adCount = c.adCount || {}, c.adCount[a] = c.adCount[a] + 1 || 1);
        return b
    };
    Pj = function(a) {
        var b = new RegExp("(^|,|/)" + a + "($|,|/)");
        return [].concat(_.ad(_.C(Oj).fa)).some(function(c) {
            return b.test(bf(c.getAdUnitPath()))
        })
    };
    Rj = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Qj.exec(null != (b = null == (a = _.ef(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    Sj = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Tj = function(a, b) {
        var c = b.A;
        return a.map(function(d) {
            return _.u(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(fd())
    };
    Wj = function(a, b, c, d, e) {
        var f = Uj(a, b, d, e, void 0, !0),
            g = f.slotId;
        f = f.Ra;
        if (!g || !f) return N(b, ci("PubAdsService.definePassback", [d, e])), null;
        x(f, 17, !0);
        c.Sa(g, f);
        return {
            Ld: Ii(a, b, new Vj(a, g, c)),
            Ra: f
        }
    };
    Yj = function(a, b, c) {
        return Yh(c, function() {
            return new Xj(a, b, c)
        })
    };
    ma = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = ka, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ka(b.length, a.length)
        }
        return b
    };
    Zj = function(a, b) {
        return null == a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    };
    bk = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(yg(a))) ? d : 1E6 * _.Kd(ak)
    };
    fk = function(a, b, c, d, e) {
        if ((null == c ? 0 : c.size) || _.Kd(ak)) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == b ? void 0 : b.adUnits) ? g : [];
            b = {};
            f = _.y(e);
            for (g = f.next(); !g.done; b = {
                    Tb: b.Tb
                }, g = f.next()) {
                e = g.value;
                g = e.code;
                var h = e.bids;
                e = void 0;
                if (g && null != (e = h) && e.length && (g = bk(g, c), b.Tb = g / 1E6, !(0 >= g))) {
                    var k = void 0;
                    e = {};
                    h = _.y(null != (k = h) ? k : []);
                    for (k = h.next(); !k.done; e = {
                            Ma: e.Ma,
                            Dc: e.Dc
                        }, k = h.next()) {
                        k = k.value;
                        e.Dc = "function" === typeof k.getFloor ? k.getFloor : void 0;
                        e.Ma = ck(dk(new ek, 4), g);
                        k.getFloor = function(n, m) {
                            return function(p) {
                                4 === ud(n.Ma, 1, 0) && dk(n.Ma, 1);
                                var r = {
                                        currency: "USD",
                                        floor: m.Tb
                                    },
                                    z, A = null == (z = n.Dc) ? void 0 : z.apply(a, [p]);
                                return null != A && A.floor ? (null == A ? 0 : A.currency) && "USD" !== A.currency ? (1 === ud(n.Ma, 1, 0) && (p = ck(dk(n.Ma, 6), 1E6 * A.floor), x(p, 3, A.currency)), A) : (A.floor || 0) > m.Tb ? (1 === ud(n.Ma, 1, 0) && ck(dk(n.Ma, 5), 1E6 * A.floor), A) : r : r
                            }
                        }(e, b);
                        var l = void 0;
                        null == (l = d) || l.set(k.getFloor, e.Ma)
                    }
                }
            }
        }
    };
    nk = function(a, b, c, d, e, f) {
        d = void 0 === d ? [] : d;
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var n;
            k = (null == (n = (0, f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : n.bids) || []
        }
        b = k.filter(function(m) {
            return m.auctionId !== c && d.some(function(p) {
                return (B = Xb(p, 2), _.u(B, "includes")).call(B, m.adId)
            })
        });
        b = _.y(b);
        for (f = b.next(); !f.done; f = b.next()) f = f.value, g = gk(f, e, d), g = hk(a, ik(x(jk(kk(new lk, f.bidder), 1), 6, !0), g)), "number" === typeof f.timeToRespond && mk(g, f.timeToRespond)
    };
    ok = function(a, b, c) {
        aj(a, 3) || (c === b.getAdUnitPath() ? x(a, 3, 1) : c === b.getDomId() && x(a, 3, 2))
    };
    qk = function(a, b, c, d, e, f) {
        (e = null == e ? void 0 : e.get(null != f ? f : function() {
            return null
        })) && 1 !== ud(e, 1, 0) && vc(b, 5, e);
        wg(a, 5) || (e ? 1 === ud(e, 1, 0) ? pk(a, e) : pk(a, ck(dk(new ek, 1), bk(c, d))) : pk(a, dk(new ek, bk(c, d) ? 2 : 3)))
    };
    gk = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new rk;
        if ("number" === typeof a.cpm && (x(d, 2, Math.round(1E6 * a.cpm)), !a.originalCurrency || a.originalCurrency === a.currency)) {
            var e = Math.round(1E6 * Number(a.originalCpm));
            isNaN(e) || e === vd(d, 2) || x(d, 8, e)
        }
        "string" === typeof a.currency && x(d, 3, a.currency);
        "string" === typeof a.dealId && (e = sk(new tk, a.dealId), vc(d, 6, e));
        if (a.adserverTargeting && "object" === typeof a.adserverTargeting) {
            c = _.u(Object, "fromEntries").call(Object, c.map(function(p) {
                return [Ai(p), Xb(p, 2)]
            }));
            e = _.y(["", "_" + a.bidder]);
            for (var f = e.next(); !f.done; f = e.next())
                if (f = f.value, _.E(uk)) {
                    var g = [],
                        h = !1,
                        k = _.u(Object, "keys").call(Object, a.adserverTargeting);
                    k = _.y(k);
                    for (var l = k.next(); !l.done; l = k.next()) {
                        l = ("" + l.value + f).slice(0, 20);
                        var n = void 0,
                            m = null == (n = c[l]) ? void 0 : n[0];
                        void 0 !== m && (g.push(l), h || (h = m === a.adId))
                    }
                    h && vk(d, Xb(d, 4).concat(g))
                } else {
                    g = [];
                    h = _.y(_.u(Object, "entries").call(Object, a.adserverTargeting));
                    for (k = h.next(); !k.done; k = h.next())
                        if (k = _.y(k.value), l = k.next().value, k = k.next().value, l = (l + f).slice(0, 20), n = void 0, null != (n = c[l]) && n.length)
                            if (c[l][0] === String(k)) g.push(l);
                            else {
                                g = [];
                                break
                            }
                    vk(d, Xb(d, 4).concat(g))
                }
        }
        switch (a.mediaType || "banner") {
            case "banner":
                x(d, 5, 1);
                break;
            case "native":
                x(d, 5, 2);
                break;
            case "video":
                x(d, 5, 3)
        }
        c = "number" === typeof a.height ? a.height : void 0;
        e = "number" === typeof a.height ? a.width : void 0;
        void 0 !== c && void 0 !== e && wk(d, xk(yk(e), c));
        "string" === typeof a.adId && (x(d, 1, a.adId), b.set(a.adId, {
            height: c,
            width: e,
            adUrl: "string" === typeof a.adUrl ? a.adUrl : void 0,
            he: "string" === typeof a.ad ? a.ad : void 0,
            format: ud(d, 5, 0),
            cpm: aj(d, 2) ? vd(d, 2) : void 0
        }));
        return d
    };
    zk = function(a, b) {
        var c = new w.Map,
            d = function(m) {
                var p = c.get(m);
                p || (p = {}, c.set(m, p));
                return p
            },
            e = [];
        a = _.y(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            var k = g,
                l = k.auctionId,
                n = k.bidId;
            k = k.bids;
            "bidTimeout" === h && e.push.apply(e, _.ad(g));
            if (l === b) switch (h) {
                case "bidRequested":
                    if (!Array.isArray(k)) continue;
                    g = _.y(k);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    n && (d(n).ef = f)
            }
        }
        d = new w.Map;
        a = _.y(_.u(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.y(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.ef, g && h && d.set(f, {
            latency: h - g,
            Cd: !1
        });
        e = _.y(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Cd = !0;
        return d
    };
    Bk = function(a, b) {
        return Yh(b, function() {
            return new Ak(a, b)
        })
    };
    Ck = function(a, b) {
        for (var c = new ih, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return kh(c)
    };
    Dk = function(a, b, c) {
        var d = void 0 === c.Cb ? "" : c.Cb;
        c = void 0 === c.la ? "," : c.la;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    Fk = function(a, b, c) {
        var d = a.map(function(e) {
            return b[e.getDomId()]
        });
        return new w.Map([
            ["ists", {
                value: Ck(d, function(e) {
                    return 0 !== Cj(e)
                }) || null
            }],
            ["fas", {
                value: Dk(d, function(e) {
                    return Fj(Cj(e))
                }, {
                    Cb: 0
                })
            }],
            ["itsi", {
                value: _.E(sj) && a.some(function(e) {
                    var f;
                    return 5 === (null == (f = b[e.getDomId()]) ? void 0 : Cj(f))
                }) ? function() {
                    if (!c) return 1;
                    var e, f = Math.max.apply(Math, _.ad(null != (e = _.Aj(c, uj(!0))) ? e : []));
                    return isFinite(f) ? Math.ceil(Math.max(Date.now() - f, 1) / 6E4) : null
                }() : null
            }],
            ["fsapi", {
                value: _.E(_.Ek)
            }]
        ])
    };
    Gk = function(a) {
        return new w.Map([
            ["rbvs", {
                value: Ck(a, function(b) {
                    return 4 === Cj(b)
                }) || null
            }]
        ])
    };
    Ik = function(a, b) {
        return new w.Map([
            ["ucis", {
                value: a.map(function(c) {
                    c = b.j.get(c);
                    null != c.Nb || (c.Nb = window === window.top ? (++b.I).toString(36) : Hk());
                    return c.Nb
                }),
                options: {
                    la: "|"
                }
            }],
            ["oid", {
                value: 2
            }]
        ])
    };
    Kk = function(a, b) {
        var c = b.R,
            d = new w.Map,
            e = new w.Map;
        b = _.y(b.W.na());
        for (var f = b.next(); !f.done; f = b.next()) {
            var g = f.value;
            e.set(Ai(g), [Xb(g, 2)[0]])
        }
        for (b = 0; b < a.length; b++)
            if (g = c[a[b].getDomId()])
                for (g = _.y(g.na()), f = g.next(); !f.done; f = g.next()) {
                    var h = f.value;
                    f = Ai(h);
                    var k = e.get(f) || [];
                    h = Xb(h, 2)[0];
                    1 === a.length ? k[0] = h : h !== k[0] && (k[b + 1] = h);
                    e.set(f, k)
                }
        a = [];
        c = _.y(_.u(e, "keys").call(e));
        for (b = c.next(); !b.done; b = c.next()) g = b.value, b = Jk()[g], g = e.get(g), b && g && (1 < g.length ? (g = g.map(function(l) {
            return encodeURIComponent(l || "")
        }).join(), a.push(b + "," + g)) : 1 === g.length && "url" !== b && d.set(b, {
            value: g[0]
        }));
        a.length && d.set("sps", {
            value: a.join("|")
        });
        return d
    };
    Wk = function(a, b) {
        var c;
        var d = b.document.domain;
        var e = null != (c = Bd(a) && Dd(b) ? b.document.cookie : null) ? c : "",
            f = b.history.length,
            g = b.screen,
            h = b.document.referrer;
        if (Lk()) d = window.gaGlobal || {};
        else {
            var k = Math.round((new Date).getTime() / 1E3),
                l = b.google_analytics_domain_name;
            d = "undefined" == typeof l ? Ok("auto", d) : Ok(l, d);
            var n = -1 < e.indexOf("__utma=" + d + "."),
                m = -1 < e.indexOf("__utmb=" + d);
            (c = (Pk() || window).gaGlobal) || (c = {}, (Pk() || window).gaGlobal = c);
            var p = !1;
            if (n) h = e.split("__utma=" + d + ".")[1].split(";")[0].split("."), m ? c.sid = h[3] : c.sid || (c.sid = k + ""), c.vid = h[0] + "." + h[1], c.from_cookie = !0;
            else {
                c.sid || (c.sid = k + "");
                if (!c.vid) {
                    p = !0;
                    m = Math.round(2147483647 * Math.random());
                    n = Qk.appName;
                    var r = Qk.version,
                        z = Qk.language ? Qk.language : Qk.browserLanguage,
                        A = Qk.platform,
                        I = Qk.userAgent;
                    try {
                        var F = Qk.javaEnabled()
                    } catch (G) {
                        F = !1
                    }
                    F = [n, r, z, A, I, F ? 1 : 0].join("");
                    g ? F += g.width + "x" + g.height + g.colorDepth : _.t.java && _.t.java.awt && (g = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), F += g.screen.width + "x" + g.screen.height);
                    F = F + e + (h || "");
                    for (h = F.length; 0 < f;) F += f-- ^ h++;
                    c.vid = (m ^ Rk(F) & 2147483647) + "." + k
                }
                _.E(Sk) && c.from_cookie || (c.from_cookie = !1)
            }
            if (!c.cid) {
                b: for (k = 999, l && (l = 0 == l.indexOf(".") ? l.substr(1) : l, k = l.split(".").length), l = 999, e = e.split(";"), h = 0; h < e.length; h++)
                    if (g = Tk.exec(e[h]) || Uk.exec(e[h]) || Vk.exec(e[h])) {
                        F = g[1] || 0;
                        if (F == k) {
                            var L = g[2];
                            break b
                        }
                        F < l && (l = F, L = g[2])
                    }p && L && -1 != L.search(/^\d+\.\d+$/) ? (c.vid = L, c.from_cookie = !0) : L != c.vid && (c.cid = L)
            }
            c.dh = d;
            c.hid || (c.hid = Math.round(2147483647 * Math.random()));
            d = c
        }
        return (L = d.from_cookie) && !Bd(a) ? new w.Map : new w.Map([
            ["ga_vid", {
                value: d.vid
            }],
            ["ga_sid", {
                value: d.sid
            }],
            ["ga_hid", {
                value: d.hid
            }],
            ["ga_fc", {
                value: L
            }],
            ["ga_cid", {
                value: d.cid
            }],
            ["ga_wpids", {
                value: b.google_analytics_uacct
            }]
        ])
    };
    Xk = function(a, b, c, d) {
        var e = _.jd("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Yk = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    cl = function(a, b) {
        for (var c = [], d = [], e = _.y(a), f = e.next(); !f.done; f = e.next()) {
            var g = void 0,
                h = void 0,
                k = void 0;
            var l = b;
            f = Qg(f.value);
            var n = Zk((null == f ? void 0 : f.parentElement) && Tg(f.parentElement, l) || null);
            !n || 1 === n[0] && 1 === n[3] ? (n = null != (k = null == f ? void 0 : f.parentElement) ? k : null, k = null != (h = Jg(n)) ? h : new _.Ig(0, 0), $k(k, n, l, 100), h = null != (g = Jg(f)) ? g : new _.Ig(0, 0), $k(h, f, l, 1), -1 === k.height && (h.height = -1), l = k, h = g = h, g = l.width + "x" + l.height, l = h.width + "x" + h.height) : l = g = "-1x-1";
            c.push(g);
            d.push(l)
        }
        null == al && (e = bl(b, 500, 300), l = b.navigator, g = l.userAgent, h = l.platform, l = l.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(h) && /^Opera/.test(g) ? g = !1 : /Win/.test(h) && /Trident/.test(g) && 11 <= b.document.documentMode ? g = !0 : (h = (/WebKit\/(\d+)/.exec(g) || [0, 0])[1], f = (/rv:(\d+\.\d+)/.exec(g) || [0, 0])[1], g = !h && "Gecko" === l && 27 <= f && !/ rv: 1\.8([^.] |\.0) /.test(g) || 536 <= h ? !0 : !1), al = g && !e);
        f = 0 !== (0, _.Ij)();
        e = ug(!0, b, f).width;
        g = [];
        l = [];
        h = [];
        null !== b && b != b.top && (k = ug(!1, b).width, (-12245933 === e || -12245933 === k || k < e) && h.push(8)); - 12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : f && 1.5 * b.outerWidth < e && h.push(10));
        a = _.y(a);
        for (k = a.next(); !k.done; k = a.next()) {
            f = new ih;
            n = Qg(k.value);
            k = 0;
            var m = !1,
                p = !1;
            if (n) {
                for (var r = 0, z = n; z && 100 > r; r++, z = z.parentElement) {
                    var A = Tg(z, b);
                    if (A) {
                        var I = A,
                            F = I.display,
                            L = I.overflowX;
                        if ("visible" !== I.overflowY && (f.set(2), (I = Jg(z)) && (k = k ? Math.min(k, I.width) : I.width), f.get(9))) break;
                        Yk(A) && f.set(9);
                        "none" === F && f.set(7);
                        "IFRAME" === z.nodeName && (A = parseInt(A.width, 10), A < e && (f.set(8), k = k ? Math.min(A, k) : A));
                        p || (p = "scroll" === L || "auto" === L);
                        m || (m = "flex" === F)
                    } else f.set(3)
                }
                p && m && (n = n.getBoundingClientRect().left, (n > e || 0 > n) && f.set(11))
            } else f.set(1);
            n = _.y(h);
            for (m = n.next(); !m.done; m = n.next()) f.set(m.value);
            g.push(kh(f));
            l.push(k)
        }
        return new w.Map([
            ["psz", {
                value: c,
                options: {
                    la: "|"
                }
            }],
            ["msz", {
                value: d,
                options: {
                    la: "|"
                }
            }],
            ["fws", {
                value: g
            }],
            ["ohw", {
                value: l
            }],
            ["ea", {
                value: al ? null : "0",
                options: {
                    wa: !0
                }
            }]
        ])
    };
    $k = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !dl(b, c, d))) {
                    a: {
                        do {
                            var g = Tg(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    gl = function(a) {
        return new w.Map([
            ["cbidsp", {
                value: Dk(null != a ? a : [], function(b) {
                    return Kb(el(b, fl), 3)
                }, {
                    la: "~"
                })
            }]
        ])
    };
    ml = function(a, b) {
        var c = _.ef(251),
            d, e, f, g, h, k, l;
        var n = b;
        n = void 0 === n ? hl : n;
        try {
            var m = n.history.length
        } catch (kd) {
            m = 0
        }
        n = w.Map;
        m = ["u_his", {
            value: m
        }];
        var p = ["u_h", {
            value: null == (d = b.screen) ? void 0 : d.height
        }];
        d = ["u_w", {
            value: null == (e = b.screen) ? void 0 : e.width
        }];
        e = ["u_ah", {
            value: null == (f = b.screen) ? void 0 : f.availHeight
        }];
        f = ["u_aw", {
            value: null == (g = b.screen) ? void 0 : g.availWidth
        }];
        g = ["u_cd", {
            value: null == (h = b.screen) ? void 0 : h.colorDepth
        }];
        h = b;
        h = void 0 === h ? _.t : h;
        h = h.devicePixelRatio;
        h = ["u_sd", {
            value: "number" === typeof h ? +h.toFixed(3) : null
        }];
        var r = ["u_tz", {
            value: -(new Date).getTimezoneOffset()
        }];
        try {
            var z, A, I, F, L = null != (F = null == (z = b.external) ? void 0 : null == (A = z.getHostEnvironmentValue) ? void 0 : null == (I = A.bind(b.external)) ? void 0 : I("os-mode")) ? F : "",
                G, O = Number(null == (G = JSON.parse(L)) ? void 0 : G["os-mode"]);
            var P = 0 <= O ? O + 1 : null
        } catch (kd) {
            P = null
        }
        P = ["wsm", {
            value: P
        }];
        z = ["dmc", {
            value: null != (l = null == (k = b.navigator) ? void 0 : k.deviceMemory) ? l : null
        }];
        (a = Q(a, 8)) ? (50 < a.length && (a = a.substring(0, 50)), a = "a " + il('role:1 producer:12 loc:"' + a + '"')) : a = "";
        a = ["uule", {
            value: a
        }];
        k = b;
        k = void 0 === k ? _.t : k;
        l = new ih;
        k.SVGElement && k.document.createElementNS && l.set(0);
        A = jl();
        A["allow-top-navigation-by-user-activation"] && l.set(1);
        A["allow-popups-to-escape-sandbox"] && l.set(2);
        k.crypto && k.crypto.subtle && l.set(3);
        k.TextDecoder && k.TextEncoder && l.set(4);
        k = ["bc", {
            value: kh(l)
        }];
        c = ["uach", {
            value: c ? il(c, 3) : null
        }];
        if (_.ef(221)) var U = null;
        else if (l = null == (U = b.navigator) ? void 0 : U.userActivation) {
            U = 0;
            if (null == l ? 0 : l.hasBeenActive) U |= 1;
            if (null == l ? 0 : l.isActive) U |= 2
        } else U = void 0;
        U = ["uas", {
            value: U
        }];
        a: {
            try {
                var aa, ca, Na = null == (aa = b.performance) ? void 0 : null == (ca = aa.getEntriesByType("navigation")) ? void 0 : ca[0];
                if (null == Na ? 0 : Na.type) {
                    var ya;
                    var za = null != (ya = kl.get(Na.type)) ? ya : null;
                    break a
                }
            } catch (kd) {}
            var ob, be, Lc;za = null != (Lc = ll.get(null == (ob = b.performance) ? void 0 : null == (be = ob.navigation) ? void 0 : be.type)) ? Lc : null
        }
        return new n([m, p, d, e, f, g, h, r, P, z, a, k, c, U, ["nvt", {
            value: za
        }]])
    };
    nl = function(a, b) {
        return new w.Map([
            ["click", {
                value: !b && a.getClickUrl() ? a.getClickUrl() : null
            }]
        ])
    };
    rl = function(a, b, c, d, e) {
        if (0 !== ud(c, 24, 0)) return new w.Map;
        c = ol(a, "__gads", b);
        var f = _.E(pl) && "1" === ol(a, "__gpi_opt_out", b) ? "1" : null,
            g = w.Map,
            h = ["cookie_enabled", {
                value: !c && ql(a, b) ? "1" : null
            }],
            k = e.document,
            l = k.domain;
        d = ["cdm", {
            value: (d || Dg(e)) === k.URL ? "" : l
        }];
        a = _.E(pl) ? (a = ol(a, "__gpi", b)) && !_.u(a, "includes").call(a, "&") ? a : null : null;
        return new g([
            ["cookie", {
                value: c,
                options: {
                    wa: !0
                }
            }], h, d, ["gpic", {
                value: a
            }],
            ["gpico", {
                value: f
            }],
            ["pdopt", {
                value: f
            }]
        ])
    };
    ul = function(a) {
        a = void 0 === a ? _.t : a;
        var b = w.Map,
            c = a,
            d = a;
        var e = sl(d);
        c = bl(d, c.google_ad_width, c.google_ad_height);
        var f = e;
        e = f.location.href;
        if (f == f.top) e = !0;
        else {
            var g = !1,
                h = f.document;
            h && h.referrer && (e = h.referrer, f.parent == f.top && (g = !0));
            (f = f.location.ancestorOrigins) && (f = f[f.length - 1]) && -1 == e.indexOf(f) && (g = !1, e = f);
            e = g
        }
        g = d.top == d ? 0 : Tc(d.top) ? 1 : 2;
        f = 4;
        c || 1 != g ? c || 2 != g ? c && 1 == g ? f = 7 : c && 2 == g && (f = 8) : f = 6 : f = 5;
        e && (f |= 16);
        c = "" + f;
        id(d);
        return new b([
            ["frm", {
                value: c || null
            }],
            ["vis", {
                value: tl(a.document)
            }]
        ])
    };
    Bl = function(a, b) {
        if (_.E(vl)) var c = new w.Map;
        else {
            c = w.Map;
            a = _.E(wl) ? bf(a[0].getAdUnitPath()) : null;
            a = void 0 === a ? null : a;
            if (b) {
                var d = new xl,
                    e = _.Kd(yl),
                    f = _.Kd(zl),
                    g = [],
                    h = RegExp("^_GESPSK-(.+)$");
                try {
                    for (var k = 0; k < b.length; k++) {
                        var l = (h.exec(b.key(k)) || [])[1];
                        l && g.push(l)
                    }
                } catch (m) {}
                l = _.y(g);
                for (g = l.next(); !g.done; g = l.next())
                    if (g = g.value, h = Rd().get(g, b).lb)
                        if (k = je(h), 0 === k || 1 === k) {
                            var n = !1;
                            if (a && (k = /^pub(\d+)$/.exec(g)) && !(n = _.u(a.split(","), "includes").call(a.split(","), k[1]))) continue;
                            x(h, 9, n);
                            k = Q(h, 2);
                            n = n ? f : e;
                            0 <= n && k && k.length > n && (n = {}, Od(12, g, null, (n.sl = String(k.length), n)), Sd(h, 108, b), $b(h, 2));
                            Di(d, 2, le, h);
                            Od(19, g)
                        }
                b = hc(d, le, 2).length ? Kb(el(d, Al), 3) : null
            } else b = null;
            c = new c([
                ["a3p", {
                    value: b
                }]
            ])
        }
        return c
    };
    Fl = function(a, b) {
        return _.E(Cl) ? new w.Map([
            ["pied", {
                value: Dk(a, function(c) {
                    var d;
                    return (c = null == (d = b[c.getDomId()]) ? void 0 : jc(d, Dl, 25)) ? Kb(el(c, El), 3) : ""
                }, {
                    la: "~"
                })
            }]
        ]) : new w.Map
    };
    Hl = function(a, b, c, d, e) {
        var f = [],
            g = [];
        b = _.y(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            var k = d[h.getDomId()];
            h = Xg(h, k, c, Bg(a, k));
            k = void 0;
            var l = e ? null != (k = h) ? k : Gl : h;
            l && (f.push(Math.round(l.x)), g.push(Math.round(l.y)))
        }
        return new w.Map([
            ["adxs", {
                value: f
            }],
            ["adys", {
                value: g
            }]
        ])
    };
    Il = function(a, b, c) {
        b && (a.vb = b);
        a = Cg(c) ? null : ug(!1, c);
        return new w.Map([
            ["biw", {
                value: b ? b.width : null
            }],
            ["bih", {
                value: b ? b.height : null
            }],
            ["isw", {
                value: b ? null == a ? void 0 : a.width : null
            }],
            ["ish", {
                value: b ? null == a ? void 0 : a.height : null
            }]
        ])
    };
    Kl = function(a) {
        try {
            var b = a.top;
            var c = Jl(b.document, b)
        } catch (d) {
            c = new _.Fg(-12245933, -12245933)
        }
        return new w.Map([
            ["scr_x", {
                value: Math.round(c.x),
                options: {
                    wa: !0
                }
            }],
            ["scr_y", {
                value: Math.round(c.y),
                options: {
                    wa: !0
                }
            }]
        ])
    };
    Ml = function(a, b, c) {
        var d = null;
        try {
            var e = Jl(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.W,
                    h = c.R[f.getDomId()],
                    k;
                f = null == (k = Xg(f, h, b.document, Bg(g, h))) ? void 0 : k.y;
                k = ug(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++Ll
            })
        } catch (f) {}
        return new w.Map([
            ["btvi", {
                value: d,
                options: {
                    wa: !0,
                    la: "|"
                }
            }]
        ])
    };
    Ol = function(a) {
        var b = a.bb.N.W,
            c = a.Gd;
        a = c.ed;
        var d = c.Od;
        c = c.Dd;
        if (_.E(Nl)) return new w.Map;
        b = 0 === ud(b, 24, 0);
        return new w.Map([
            ["adsid", {
                value: b ? a : null
            }],
            ["pucrd", {
                value: b ? d : null
            }],
            ["jar", {
                value: c
            }]
        ])
    };
    Tl = function(a, b, c, d, e) {
        e = void 0 === e ? _.t : e;
        var f = w.Map,
            g = ["prev_scp", {
                value: Pl(b, c)
            }],
            h = c.W,
            k = c.R[b[0].getDomId()],
            l = new ih;
        l.set(0, 1 !== d);
        l.set(1, !!J(k, 17));
        l.set(2, Ql(b, c));
        l.set(3, J(h, 27) || !1);
        l.set(4, 3 === d);
        b = kh(l);
        return new f([g, ["eri", {
                value: b
            }],
            ["cust_params", {
                value: Rl(a),
                options: {
                    la: "&"
                }
            }],
            ["stss", {
                value: 0 === Sl(_.ef(172)) ? null : Sl(_.ef(172))
            }],
            ["ppid", {
                value: 1 !== ud(a, 24, 0) && aj(a, 16) ? Q(a, 16) : null,
                options: {
                    wa: !0
                }
            }],
            ["gct", {
                value: lf("google_preview", e)
            }],
            ["sc", {
                value: Number(_.ef(6)),
                options: {
                    wa: !0
                }
            }]
        ])
    };
    $l = function(a, b, c, d, e, f, g) {
        var h = mf("google_preview", a),
            k = a.document,
            l = h ? Ul(k.URL) : k.URL;
        k = h ? Ul(k.referrer) : k.referrer;
        h = !1;
        if (f) c = Vl(e.na());
        else {
            var n;
            c = null != (n = Vl(g[c[0].getDomId()].na())) ? n : Vl(e.na())
        }
        if (null != c) {
            var m = l;
            Cg(a) || (k = "", h = !0)
        } else c = l;
        e = Wl(a);
        m = new w.Map([
            ["nhd", {
                value: e || null
            }],
            ["url", {
                value: c
            }],
            ["loc", {
                value: null !== m && m !== c ? m : null
            }],
            ["ref", {
                value: k
            }]
        ]);
        l = c;
        n = _.ef(252) || {};
        n.url = l;
        _.C(cf).j = !0;
        df[252] = n;
        if (e) {
            e = m.set;
            a: {
                var p, r;l = Tc(a.top) && (null == (p = a.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
                var z;p = null == (z = a.location) ? void 0 : z.ancestorOrigins;a = Th(a) || "";z = (null == p ? void 0 : p[p.length - 1]) || "";
                if (_.E(Xl)) try {
                    var A = z && Yl(z.match(_.Zl)[3] || null) && Yl(z.match(_.Zl)[3] || null) !== Yl(a.match(_.Zl)[3] || null) ? z : a || z;
                    var I = l || A || "";
                    break a
                } catch (L) {
                    I = L instanceof Error ? L : Error(String(L));
                    var F;
                    A = null != (F = null == p ? void 0 : p.length) ? F : 0;
                    .001 > xd() && Ad({
                        rtw: a,
                        aotw: z,
                        aol: String(A),
                        di: I.message
                    }, "tpurl")
                }
                I = l || a || z
            }
            F = (F = I) ? h ? Yl(F.match(_.Zl)[3] || null) : F : null;
            e.call(m, "top", {
                value: F
            });
            m.set("etu", {
                value: b.Yb
            })
        }
        m.set("scar", {
            value: d
        });
        return m
    };
    Pl = function(a, b) {
        var c = b.R;
        return Dk(a, function(d) {
            return am(c[d.getDomId()]).join("&")
        }, {
            la: "|"
        })
    };
    am = function(a) {
        a = bm(a);
        var b = [];
        _.Wi(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    bm = function(a) {
        for (var b = {}, c = _.y(hc(a, zi, 9)), d = c.next(); !d.done; d = c.next()) d = d.value, b[Ai(d)] = Xb(d, 2);
        a = Xb(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Rl = function(a) {
        var b = !1,
            c = hc(a, zi, 2).map(function(d) {
                var e = Ai(d);
                b = "excl_cat" === e;
                d = Xb(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = Xb(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Vl = function(a) {
        var b;
        return (null == (b = _.u(a, "find").call(a, function(c) {
            return "page_url" === Ai(c)
        })) ? void 0 : Xb(b, 2)[0]) || null
    };
    Ul = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Wl = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Sc(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Ql = function(a, b) {
        var c = b.R;
        return !!Vl(b.W.na()) || a.some(function(d) {
            return null !== Vl(c[d.getDomId()].na())
        })
    };
    cm = function(a) {
        return new w.Map([
            ["pvsid", {
                value: a.rb.K.Id
            }],
            ["correlator", {
                value: a.bb.N.W.getCorrelator()
            }]
        ])
    };
    fm = function(a, b) {
        a = dm(a) || new em;
        var c = ud(a, 6, 2),
            d, e, f, g;
        return new w.Map([
            ["rdp", {
                value: J(a, 1) ? "1" : null
            }],
            ["ltd", {
                value: J(a, 9) ? "1" : null
            }],
            ["gdpr_consent", {
                value: null != (d = Q(b, 2)) ? d : null
            }],
            ["gdpr", {
                value: aj(b, 3) ? J(b, 3) ? "1" : "0" : null,
                options: {
                    wa: !0
                }
            }],
            ["addtl_consent", {
                value: null != (e = Q(b, 4)) ? e : null
            }],
            ["tcfe", {
                value: null != (f = Q(b, 7)) ? f : null
            }],
            ["us_privacy", {
                value: null != (g = Q(b, 1)) ? g : null
            }],
            ["npa", {
                value: J(b, 6) || J(a, 8) ? 1 : null
            }],
            ["tfua", {
                value: 2 !== c ? c : null,
                options: {
                    wa: !0
                }
            }],
            ["tfcd", {
                value: aj(a, 5) ? Q(a, 5) : null,
                options: {
                    wa: !0
                }
            }],
            ["trt", {
                value: aj(a, 10) ? Q(a, 10) : null,
                options: {
                    wa: !0
                }
            }],
            ["tad", {
                value: aj(b, 8) ? J(b, 8) ? "1" : "0" : null,
                options: {
                    wa: !0
                }
            }]
        ])
    };
    lm = function(a, b, c, d) {
        return new w.Map([
            ["ris", {
                value: gm(b, function(e) {
                    var f, g;
                    return null != (g = null == (f = a.j.get(e)) ? void 0 : f.Rc) ? g : 0
                }, d)
            }],
            ["rcs", {
                value: Dk(b, function(e) {
                    if (!c) {
                        var f = void 0 === f ? _.t : f;
                        var g = a.j.get(e);
                        g && (_.E(hm) || (g.Rc = _.im(f) || 0), g.Rd++)
                    }
                    return jm(a, e)
                }, {
                    Cb: 0
                })
            }],
            ["tfr", {
                value: _.E(km) ? gm(b, function(e) {
                    var f, g;
                    return null != (g = null == (f = a.j.get(e)) ? void 0 : f.ud) ? g : null
                }, d) : null
            }]
        ])
    };
    gm = function(a, b, c) {
        return Dk(a, function(d) {
            d = b(d);
            var e = _.im(c);
            return d && e ? Math.round(Math.min((e - d) / 1E3, 1800)) : null
        }, {
            la: "~"
        })
    };
    mm = function(a) {
        var b = a.rb.context;
        return new w.Map([
            ["output", {
                value: a.dd.Ka
            }],
            ["gdfp_req", {
                value: 1
            }],
            ["vrg", {
                value: b.Pa ? String(b.Pa) : b.ya
            }],
            ["ptt", {
                value: 17
            }],
            ["impl", {
                value: J(a.bb.N.W, 6) ? "fifs" : "fif"
            }]
        ])
    };
    om = function(a, b, c) {
        var d = b.W,
            e = b.R;
        b = b.lf;
        return new w.Map([
            ["sfv", {
                value: (null != c ? c : window).postMessage ? nm ? nm : nm = Pi() : null
            }],
            ["fsfs", {
                value: Dk(a, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : J(f, 12)) ? g : J(d, 13))
                }, {
                    Cb: 0
                })
            }],
            ["fsbs", {
                value: Dk(a, function(f) {
                    f = e[f.getDomId()].Ba();
                    var g = d.Ba(),
                        h;
                    return (null != (h = null == f ? void 0 : J(f, 3)) ? h : null == g ? 0 : J(g, 3)) ? 1 : 0
                }, {
                    Cb: 0
                })
            }],
            ["ecs", {
                value: b
            }]
        ])
    };
    rm = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? _.t : g;
        var h = [],
            k = a.map(function(l) {
                return l.getAdUnitPath().replace(/,/g, ":").split("/").map(function(n) {
                    if (!n) return "";
                    var m = _.u(h, "findIndex").call(h, function(p) {
                        return p === n
                    });
                    return 0 <= m ? m : h.push(n) - 1
                }).join("/")
            });
        return new w.Map([
            ["iu_parts", {
                value: h
            }],
            ["enc_prev_ius", {
                value: k
            }],
            ["prev_iu_szs", {
                value: b.map(function(l) {
                    return xg(l)
                })
            }],
            ["fluid", {
                value: function() {
                    var l = !1,
                        n = b.map(function(m) {
                            m = (B = vg(m), _.u(B, "includes")).call(B, "fluid");
                            l || (l = m);
                            return m ? "height" : "0"
                        });
                    return l ? n : null
                }()
            }],
            ["ifi", {
                value: function() {
                    var l = oh(g);
                    if (!c) {
                        l += 1;
                        var n = g,
                            m = a.length;
                        m = void 0 === m ? 1 : m;
                        n = Pk(Lk(n)) || n;
                        n.google_unique_id = (n.google_unique_id || 0) + m
                    }
                    return l
                }()
            }],
            ["adks", {
                value: pm(a, d, e, f)
            }],
            ["didk", {
                value: _.E(qm) ? Dk(a, function(l) {
                    return yg(l.getDomId())
                }, {
                    la: "~"
                }) : null
            }]
        ])
    };
    pm = function(a, b, c, d) {
        return a.map(function(e) {
            if (c) {
                var f = d.R[e.getDomId()];
                f = zg(f);
                if (e = b.j.get(e)) e.nb = f;
                return f
            }
            f = d.W;
            var g = d.R[e.getDomId()],
                h;
            if (!(h = sm(b, e))) {
                f = zg(g, J(f, 6) || J(g, 17) ? null : Qg(e));
                if (e = b.j.get(e)) e.nb = f;
                h = f
            }
            return h
        }).join()
    };
    um = function() {
        var a = void 0 === a ? window : a;
        tm = _.Gd(a)
    };
    vm = function(a, b) {
        var c = new w.Map([
            ["dt", {
                value: (new Date).getTime()
            }]
        ]);
        if (!a) {
            try {
                var d = Math.round(Date.parse(b.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            c.set("lmt", {
                value: d
            })
        }
        a = tm;
        b = rf(b);
        0 < b && a >= b && (c.set("dlt", {
            value: b
        }), c.set("idt", {
            value: a - b
        }));
        return c
    };
    wm = function(a) {
        a = a.Xd.Yd;
        return new w.Map([
            ["topics", {
                value: a instanceof Uint8Array ? Kb(a, 3) : a
            }]
        ])
    };
    Cm = function(a) {
        var b = new w.Map,
            c = _.E(xm(a) ? ym : zm),
            d = _.E(Am);
        a = Bm(a, c, d);
        (null == a ? 0 : a.length) && b.set("tt_state", {
            value: il(JSON.stringify(a), 3)
        });
        return b
    };
    Dm = function() {
        var a = void 0 === a ? navigator : a;
        var b = new w.Map;
        "runAdAuction" in a && "joinAdInterestGroup" in a && b.set("td", {
            value: 1
        });
        return b
    };
    Em = function(a) {
        var b = a.bb.N.W,
            c = a.de;
        a = c.Ua;
        c = c.Ta;
        var d = J(b, 21),
            e;
        return new w.Map([
            ["hxva", {
                value: d ? 1 : null
            }],
            ["cmsid", {
                value: d ? Q(b, 23) : null
            }],
            ["vid", {
                value: d ? Q(b, 22) : null
            }],
            ["pod", {
                value: isNaN(c) ? null : c
            }],
            ["ppos", {
                value: isNaN(a) ? null : a
            }],
            ["scor", {
                value: null != (e = Q(b, 29)) ? e : null
            }]
        ])
    };
    Fm = function(a) {
        a = a.dd;
        var b = a.Va,
            c = a.Na;
        return "wbn" === a.Ka ? new w.Map([
            ["wbsu", {
                value: b.toString().replace(/^uuid-in-package:/, "")
            }],
            ["callback", {
                value: c
            }]
        ]) : new w.Map
    };
    Gm = function(a, b) {
        return a && (a = jc(a, og, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    Hm = function(a, b) {
        return a && (a = jc(a, og, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    Im = function(a) {
        return a && (a = jc(a, og, 2)) ? a.getWidth() || 0 : 0
    };
    Jm = function(a) {
        return a && (a = jc(a, og, 2)) ? a.getHeight() || 0 : 0
    };
    Km = function(a, b, c) {
        a = a.map(function(e) {
            return b[e.getDomId()]
        });
        var d = a.some(function(e) {
            return wg(e, 16)
        });
        return new w.Map([
            ["rtgs", {
                value: d ? a.map(function(e) {
                    return wg(e, 16) ? vg(e).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["max_w", {
                value: d ? a.map(function(e) {
                    return Gm(jc(e, kj, 16), c)
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["max_h", {
                value: d ? a.map(function(e) {
                    return Hm(jc(e, kj, 16), c)
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["min_w", {
                value: d ? a.map(function(e) {
                    return Im(jc(e, kj, 16))
                }) : null,
                options: {
                    la: "!"
                }
            }],
            ["min_h", {
                value: d ? a.map(function(e) {
                    return Jm(jc(e, kj, 16))
                }) : null,
                options: {
                    la: "!"
                }
            }]
        ])
    };
    Lm = function(a, b) {
        var c;
        return !(null != (c = J(a, 11)) ? !c : !J(b, 10))
    };
    Mm = function(a, b, c, d) {
        if (a = Qg(a, b)) {
            var e;
            if (c = null != (e = J(c, 24)) ? e : J(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Xm = function(a, b, c, d, e) {
        var f = new $d,
            g = new Nm(a, c);
        D(f, g);
        var h = new Om(d, _.E(Pm));
        _.Qm(f, h);
        e = new Rm(a, h, e);
        D(f, e);
        var k = new Sm(a, d, e.l);
        D(f, k);
        e = new Tm(a, h, e.l);
        D(f, e);
        h = new Um(a, b, d, e.l, g.Za);
        D(f, h);
        b = new Vm(a, b, d, c, e.l, g.Za);
        D(f, b);
        a = new Wm(a, g.Za, b.l, h.l);
        D(f, a);
        ae(f);
        return {
            Za: a.B,
            Ha: f
        }
    };
    an = function(a, b, c, d, e) {
        var f = null == c ? void 0 : c.getAdUnitPath();
        if (c && f && Ym.has(ud(c, 2, 0))) {
            var g = b.defineOutOfPageSlot(f, Ym.get(ud(c, 2, 0)));
            if (g) {
                var h;
                null != (h = Zm(Vf(), g.getSlotElementId())) && vc(h, 25, d);
                g.addService(b.pubads());
                $m(a, function() {
                    b.display(g);
                    J(null != e ? e : Vf().j, 4) && b.pubads().refresh([g])
                })
            }
        }
    };
    dn = function(a, b, c, d, e) {
        var f = [];
        c = _.y(hc(c, bn, 3));
        for (var g = c.next(); !g.done; g = c.next())
            if (g = g.value, aj(g, 1) && aj(g, 2) && aj(g, 3) && aj(g, 4)) {
                var h = g.getAdUnitPath(),
                    k = a.querySelector(cn(g, 1));
                if (k && k.parentElement && (h = "gpt_opp_" + h, !a.getElementById(h))) {
                    var l = a.createElement("div");
                    l.id = h;
                    k.insertAdjacentElement("beforebegin", l);
                    if (g = b.defineSlot(g.getAdUnitPath(), [g.getWidth(), g.getHeight()], h)) g.addService(b.pubads()), k = void 0, null != (k = Zm(Vf(), g.getSlotElementId())) && vc(k, 25, d), f.push(g)
                }
            }
        0 < f.length && $m(a, function() {
            for (var n = _.y(f), m = n.next(); !m.done; m = n.next()) b.display(m.value);
            J(e, 4) && b.pubads().refresh(f)
        })
    };
    hn = function(a, b) {
        var c = en(b),
            d = c.slotId,
            e = c.se;
        c = c.te;
        if (d) {
            if (c = Vf(), (b = Zm(c, d.getDomId())) && !J(b, 19))
                if (e && c.A.set(d, e), Qg(d) || Ag(Cj(b)))
                    for (x(b, 19, !0), a = Mg(c.j, c.m), e = _.y(Xb(b, 4)), b = e.next(); !b.done; b = e.next()) b = If(b.value), b = Xh.get(b), b.C && b.P(a, d);
                else N(a, fn(String(b.getAdUnitPath()), String(b.getDomId())), d)
        } else c ? a.error(gn(c)) : a.error(ci("googletag.display", [String(b)]))
    };
    en = function(a) {
        var b = null,
            c = null,
            d = "";
        b = _.C(Oj);
        if ("string" === typeof a) d = a, b = jn(b, d);
        else if (_.ha(a) && 1 == a.nodeType) c = a, d = c.id, b = jn(b, d);
        else {
            var e;
            b = null != (e = (B = [].concat(_.ad(b.fa)), _.u(B, "find")).call(B, function(f) {
                return f.j === a
            })) ? e : null
        }
        return {
            slotId: b,
            se: c,
            te: d
        }
    };
    kn = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    nn = function(a, b, c, d) {
        return "string" === typeof c && c.length && (null == d || "string" === typeof d || "number" === typeof d && ln(d)) ? mn(a, b, c, "number" === typeof d ? d : 1, "string" === typeof d ? d : void 0) : (b.error(ci("googletag.defineOutOfPageSlot", [c, d])), null)
    };
    ln = function(a) {
        return !!Uh(Ki, function(b) {
            return b === a
        })
    };
    mn = function(a, b, c, d, e) {
        b = _.C(Oj).add(a, b, c, [1, 1], {
            eb: e,
            format: d
        });
        a = b.slotId;
        b = b.Ra;
        if (a && b) {
            if (5 === d && _.E(on)) return null;
            x(b, 15, d);
            _.pn(a, function() {
                var f = window,
                    g = Fj(d);
                if (null != g) {
                    f = _.Gj(f);
                    var h = f.adCount && f.adCount[g];
                    h && (f.adCount[g] = h - 1)
                }
            })
        }
        return null != a ? a : null
    };
    rn = function(a) {
        qn = a
    };
    tn = function() {
        for (var a = _.y(_.u(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (Ba(d, "/tag/js/gpt.js") || Ba(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), b = sn(b.textContent), Xa(c, b), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    un = function(a, b) {
        b = _.y(_.u(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    xn = function(a, b) {
        var c = [];
        c = _.C(Oj);
        c = [].concat(_.ad(c.fa)).slice();
        if (b) {
            if (!Array.isArray(b)) return N(a, ci("googletag.destroySlots", [b])), !1;
            ja(b);
            c = c.filter(function(d) {
                return _.u(b, "includes").call(b, d.j)
            })
        }
        if (!c.length) return !1;
        vn(c);
        wn(c);
        return !0
    };
    yn = function(a, b) {
        Gf("display", H(a, 95, function(c) {
            void hn(b, c)
        }))
    };
    Gn = function(a, b, c) {
        var d;
        if (mf("google_content_service_disabled", c)) hh("gpt_scdvqp", function(f) {
            nh(f, a)
        }, 1);
        else if (!_.E(zn)) {
            var e = _.An(function() {
                _.E(Bn) || N(b, Cn(), null)
            });
            return H(a, 817, function() {
                _.E(Dn) && b.error(En(), null, !0);
                e();
                null != d || (d = new Fn(a, b));
                return ii(a, b, d)
            })
        }
    };
    Nn = function(a, b, c, d) {
        var e = ff(),
            f;
        d = Gn(a, b, d);
        var g = H(a, 74, function(k, l, n) {
                return Hn(a, b, k, l, n)
            }),
            h = {};
        g = (h._loaded_ = !0, h.cmd = [], h._vars_ = e._vars_, h.evalScripts = e.evalScripts, h.display = H(a, 95, function(k) {
            void hn(b, k)
        }), h.defineOutOfPageSlot = H(a, 73, function(k, l) {
            k = nn(a, b, k, l);
            if (!k) return null;
            var n;
            return null != (n = k.j) ? n : null
        }), h.getVersion = H(a, 946, function() {
            return a.Pa ? String(a.Pa) : a.ya
        }), h.pubads = H(a, 947, function() {
            return Yj(a, b, c)
        }), h.companionAds = H(a, 816, function() {
            null != f || (f = new In(a, b, c));
            return gi(a, b, f)
        }), h.setAdIframeTitle = H(a, 729, rn), h.getEventLog = H(a, 945, function() {
            return new Jn(a, b)
        }), h.sizeMapping = H(a, 90, function() {
            return new Kn(a, b)
        }), h.enableServices = H(a, 91, function() {
            Ln(b)
        }), h.destroySlots = H(a, 75, function(k) {
            return xn(b, k)
        }), h.enums = Mi(), h.defineSlot = g, h.defineUnit = g, h.getWindowsThatCanCommunicateWithHostpageLibrary = H(a, 955, function(k) {
            return Mn(k)
        }), h.disablePublisherConsole = H(a, 93, li), h.onPubConsoleJsLoad = H(a, 731, mi), h.openConsole = H(a, 732, function(k) {
            ni(a, void 0 === k ? "" : k)
        }), h.apiReady = !0, h);
        d && (g.content = d);
        un(e, g)
    };
    On = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.u(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Qn = function(a, b) {
        var c = _.Kd(Pn);
        Math.random() <= c && Ad(b, a)
    };
    Wn = function(a, b, c) {
        var d = {};
        if (!c) return b.error(Rn("missing data-rendering attribute")), d;
        try {
            var e = nd(Sn, Tn(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : wg(f, 1)) ? (b = new Un, b = ac(b, 4, 1, 0), b = ac(b, 2, 7, 0), a = ac(b, 3, a.ab || a.ya, ""), b = jc(e, Vn, 1), a = vc(a, 5, b), a = tf(a, 6, !0), d.pf = a) : b.error(Rn("invalid data-rendering attribute"));
        var g;
        d.df = null == (g = e) ? void 0 : cn(g, 2);
        var h;
        d.Gc = null == (h = e) ? void 0 : cn(h, 3);
        return d
    };
    Zn = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L;
        return _.db(function(G) {
            c = vi(b, "ai");
            if (!c || 0 === c.length) return G.return(w.Promise.resolve(b));
            d = Xn();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (m = (null == (f = d) ? 0 : null == (g = f.gmaSdk) ? 0 : g.getClickSignalsWithTimeout) ? null == (h = d) ? void 0 : null == (k = h.gmaSdk) ? void 0 : k.getClickSignalsWithTimeout(c, 200) : null == (l = d) ? void 0 : null == (n = l.gmaSdk) ? void 0 : n.getClickSignals(c)) return G.return(w.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(m) + "&")))
            } else if (null != (null == (p = d) ? void 0 : null == (r = p.webkit) ? void 0 : r.messageHandlers.getGmaClickSignals)) return z = new _.Oe, A = z.resolve, I = z.promise, Yn(null == (F = d) ? void 0 : null == (L = F.webkit) ? void 0 : L.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(O) {
                A(b.replace("?", "?" + O + "&"))
            }, function() {
                A(b)
            }, function(O, P) {
                return _.$f(a, O, P)
            }), G.return(I);
            return G.return(w.Promise.resolve(b))
        })
    };
    $n = function(a, b, c, d) {
        var e, f, g;
        return _.db(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var n = [];
            for (m in l) Ti(m, l[m], n);
            l = n.join("&");
            if (l) {
                n = -1;
                0 > n && (n = 0);
                var m = -1;
                if (0 > m || m > n) {
                    m = n;
                    var p = ""
                } else p = "".substring(m + 1, n);
                n = ["".slice(0, m), p, "".slice(n)];
                m = n[1];
                n[1] = l ? m ? m + "&" + l : l : m;
                l = n[0] + (n[1] ? "?" + n[1] : "") + n[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(Zn(a, g))
        })
    };
    ao = function(a, b, c) {
        var d, e, f, g, h, k, l, n, m, p, r, z, A;
        return _.db(function(I) {
            if (null != (null == (d = c) ? void 0 : null == (e = d.gmaSdk) ? void 0 : e.getViewSignals)) {
                if (h = null == (f = c) ? void 0 : null == (g = f.gmaSdk) ? void 0 : g.getViewSignals()) return k = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + h + "$2"), I.return(w.Promise.resolve(k))
            } else if (null != (null == (l = c) ? void 0 : null == (n = l.webkit) ? void 0 : n.messageHandlers.getGmaViewSignals)) return m = new _.Oe, p = m.resolve, r = m.promise, Yn(null == (z = c) ? void 0 : null == (A = z.webkit) ? void 0 : A.messageHandlers.getGmaViewSignals, {}, function(F) {
                p(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + F + "$2"))
            }, function() {
                p(b)
            }, function(F, L) {
                return _.$f(a, F, L)
            }), I.return(r);
            return I.return(w.Promise.resolve(b))
        })
    };
    ho = function(a, b) {
        var c = window;
        var d = void 0 === d ? lb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = Xn(),
                g;
            null == (g = f ? new bo(function(k, l) {
                return _.$f(a, k, l)
            }, function() {}) : void 0) || co(g);
            var h = On(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.R(e, h);
            e.prototype.connectedCallback = function() {
                var k = Wn(a, b, this.dataset.rendering),
                    l = k.pf,
                    n = k.df;
                k = k.Gc;
                l && d(eo(window, l));
                n && ao(a, n, f).then(function(m) {
                    return void fo(m)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Gc = k, this.addEventListener("click", this.j)) : N(b, go(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && $n(a, this, k, this.Gc).then(function(n) {
                    return void fo(n)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    io = function(a) {
        var b = {};
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[Q(c, 1)] = Q(c, 2);
        return b
    };
    lo = function(a, b) {
        var c;
        return jo(a, ko, function(d) {
            d = d.detail.data;
            try {
                return c = JSON.parse(d), "rewarded" === c.type && c.message === b
            } catch (e) {
                return !1
            }
        }).then(function() {
            return c
        })
    };
    mo = function(a) {
        .001 > xd() && Ad({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    no = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Oa(b), a.src = Pa(b).toString())
    };
    so = function(a, b, c, d) {
        d = d.uf;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? oo : po)(a, b, c);
            case 1:
                return new qo(a, b, c);
            case 2:
                return new ro(a, b, c);
            default:
                Ja(e)
        }
    };
    to = function(a) {
        if (!Tc(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    vo = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new uo(a, b)
    };
    wo = function(a) {
        return aj(a, 1) ? aj(a, 3) && 0 !== (0, _.Ij)() ? Q(a, 1) * Qd(a, 3) : Q(a, 1) : null
    };
    xo = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new uo(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    jp = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
        var r = new $d,
            z = ug(!0, window),
            A = f.W,
            I = f.R[c.getDomId()],
            F = new yo(a, window);
        D(r, F);
        var L = g.Fb,
            G = g.Pb,
            O = g.Be,
            P = g.rd,
            U = g.je,
            aa = g.Ke,
            ca = g.vf,
            Na = g.Ce,
            ya = g.ye,
            za = g.Ub,
            ob = g.wf,
            be = g.Je,
            Lc = g.rf,
            kd = g.zf,
            Ph = g.Af,
            Mk = g.Ge,
            Qh = g.xf,
            Rh = g.Zb,
            bc = g.pa,
            Nk = g.Zd,
            cc = g.Cf;
        g = g.Ze;
        var Qr = void 0;
        Math.random() < _.Kd(zo) && (p = new Ao(a, cc, p.P, ca, P), D(r, p), Qr = p.B);
        G = new Bo(a, e, c, L, G, bc, cc, Qr);
        D(r, G);
        L = new Co;
        L.j(l);
        l = new Do(a, window.top, L);
        D(r, l);
        h = new Eo(a, bf(c.getAdUnitPath()), h, l.B);
        D(r, h);
        bc = new Fo(a, Cj(I), z.height, ya, G.Fb);
        D(r, bc);
        h = new Go(a, c, Qg(c, k), c.getDomId(), Zg(c), k, Cj(I), e);
        D(r, h);
        cc = new Ho(a, G.pa, U, aa, ca);
        D(r, cc);
        ca = new Io(a, A, I, window, U, ca);
        D(r, ca);
        kd = new Jo(a, jc(A, Ko, 5), kd);
        D(r, kd);
        bc = new Lo(a, c.getAdUnitPath(), I, z.width, window, za, G.Pb, bc.B, cc.B, h.B);
        D(r, bc);
        za = new Mo(a, Nk);
        D(r, za);
        za = new No(a, e, Nk, za.B, bc.pa, bc.o);
        D(r, za);
        if (d) return r;
        d = new Oo(a, c, A, I, Cj(I), k, e, h.B, ca.B, bc.o, O);
        D(r, d);
        cc = new Po(a, d.B);
        D(r, cc);
        p = new Qo(a, c, z, e, cc.B, kd.l);
        D(r, p);
        cc = new Ro(a, window, h.B);
        D(r, cc);
        Ph = new So(a, p.B, d.B, Ph, kd.l);
        D(r, Ph);
        z = new To(a, k, c, I, z, O, h.B, d.B, bc.o, bc.Ub, cc.B, P);
        D(r, z);
        ob = new Uo(a, A, I, za.pa, ca.B, U, ob);
        D(r, ob);
        Rh = new Vo(a, window, Rh, F.B);
        D(r, Rh);
        b = new Wo(a, b, c, f, aa, Qh);
        D(r, b);
        Qh = new Xo(a, Cj(I), k);
        D(r, Qh);
        m = new Yo(a, m, Cj(I), ya, Na);
        D(r, m);
        P = new Zo(a, c, e, f, n, window, za.pa, ca.B, b.B, Ph.B, h.B, d.B, za.G, P, O, ob.B, aa, be, Lc, z.B, Rh.B, Qh.B, m.B, G.l, Nk);
        D(r, P);
        _.E(pl) && (aa = new $o(a, window, c, P.D, L), D(r, aa));
        ya = new ap(a, e, Cj(I), c, window, ya, P.l, h.B, m.B);
        D(r, ya);
        f = new bp(a, c, Cj(I), f.vb, Na, P.l, h.B, l.B, m.B);
        D(r, f);
        f = new cp(a, c, window, U, P.l, P.o);
        D(r, f);
        I = new dp(a, c, Cj(I), n, window, P.l, h.B);
        D(r, I);
        k = new ep(a, c, P.l, k, n);
        D(r, k);
        e = new fp(a, sm(e, c), window.top, P.l, F.B);
        D(r, e);
        c = new gp(a, c, O, U, Lc, P.l, d.B, P.o);
        D(r, c);
        Mk = new hp(a, window, Mk, P.l, d.B, h.B);
        D(r, Mk);
        D(r, new ip(a, g, ff(), A));
        return r
    };
    lp = function() {
        if (Ga()) var a = 0 <= kp(Ia(), 11);
        else a = Da(Aa()), Ha(a), a = Ea() ? (a = a[2]) && a[1] || "" : "", "" === a ? a = NaN : (a = a.split("."), a = 0 === a.length ? NaN : Number(a[0])), a = 65 <= a;
        return a
    };
    mp = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new uo(a, {
            rootMargin: b
        })
    };
    np = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = Ma.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.ad(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.db(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.Oe, g = b(f.resolve), h = ++e, eb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.pn(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    up = function() {
        var a = new op;
        var b = (new pp).setCorrelator(Md(_.t));
        var c = _.C(Nd).j().join();
        b = ac(b, 5, c, "");
        b = ac(b, 2, 1, 0);
        a = vc(a, 1, b);
        b = qp();
        c = _.E(rp);
        b = tf(b, 8, c);
        c = _.E(sp);
        b = tf(b, 9, c);
        b = tf(b, 10, !0);
        c = _.E(tp);
        b = tf(b, 13, c);
        b = tf(b, 16, !0);
        a = vc(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    wp = function() {
        var a = vp,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (Ad({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    Bp = function() {
        var a = xp() || wd() ? 1 : xd(),
            b = .001 > a;
        b ? (_.C(yp).o = !0, zp(31067358)) : .002 > a && zp(31067357);
        Ap(23);
        return {
            Kb: b,
            Se: 1E3,
            mf: 1E-4 > a,
            Re: 1E4,
            Ud: b,
            qd: 1E3
        }
    };
    Ep = function(a) {
        var b = wp();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = Md(window),
            e = _.Kd(Cp);
        return _.u(Object, "assign").call(Object, {}, a, {
            ya: b,
            ab: "",
            Pa: c,
            pvsid: d,
            kb: new Dp(e)
        })
    };
    Fp = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    Gp = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Hp = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    Ip = Hp(this);
    Jp = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    w = {};
    Kp = {};
    _.u = function(a, b) {
        var c = Kp[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    Lp = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in w ? f = w : f = Ip;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = Jp && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? Gp(w, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Kp[d] && (a = 1E9 * Math.random() >>> 0, Kp[d] = Jp ? Ip.Symbol(d) : "$jscp$" + a + "$" + d), Gp(f, Kp[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Lp("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            Gp(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    Lp("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, w.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = Ip[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Gp(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Mp(Fp(this))
                }
            })
        }
        return a
    }, "es6");
    Mp = function(a) {
        a = {
            next: a
        };
        a[_.u(w.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    S = function(a) {
        return a.raw = a
    };
    _.y = function(a) {
        var b = "undefined" != typeof w.Symbol && _.u(w.Symbol, "iterator") && a[_.u(w.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: Fp(a)
        }
    };
    Np = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.ad = function(a) {
        return a instanceof Array ? a : Np(_.y(a))
    };
    Op = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Pp = Jp && "function" == typeof _.u(Object, "assign") ? _.u(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Op(d, e) && (a[e] = d[e])
        }
        return a
    };
    Lp("Object.assign", function(a) {
        return a || Pp
    }, "es6");
    var Qp = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        Rp = function() {
            function a() {
                function c() {}
                new c;
                _.u(w.Reflect, "construct").call(w.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (Jp && "undefined" != typeof w.Reflect && _.u(w.Reflect, "construct")) {
                if (a()) return _.u(w.Reflect, "construct");
                var b = _.u(w.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.u(w.Reflect, "setPrototypeOf").call(w.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = Qp(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Sp;
    if (Jp && "function" == typeof _.u(Object, "setPrototypeOf")) Sp = _.u(Object, "setPrototypeOf");
    else {
        var Tp;
        a: {
            var Up = {
                    a: !0
                },
                Vp = {};
            try {
                Vp.__proto__ = Up;
                Tp = Vp.a;
                break a
            } catch (a) {}
            Tp = !1
        }
        Sp = Tp ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Wp = Sp;
    _.R = function(a, b) {
        a.prototype = Qp(b.prototype);
        a.prototype.constructor = a;
        if (Wp) Wp(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.gh = b.prototype
    };
    Xp = function() {
        this.l = !1;
        this.H = null;
        this.m = void 0;
        this.j = 1;
        this.I = this.A = 0;
        this.C = null
    };
    Yp = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    Xp.prototype.o = function(a) {
        this.m = a
    };
    var Zp = function(a, b) {
        a.C = {
            sd: b,
            Me: !0
        };
        a.j = a.A || a.I
    };
    Xp.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.I
    };
    eb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    gb = function(a, b) {
        a.j = b;
        a.A = 0
    };
    hb = function(a) {
        a.A = 0;
        var b = a.C.sd;
        a.C = null;
        return b
    };
    $p = function(a) {
        this.j = new Xp;
        this.m = a
    };
    cq = function(a, b) {
        Yp(a.j);
        var c = a.j.H;
        if (c) return aq(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return bq(a)
    };
    aq = function(a, b, c, d) {
        try {
            var e = b.call(a.j.H, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.H = null, Zp(a.j, g), bq(a)
        }
        a.j.H = null;
        d.call(a.j, f);
        return bq(a)
    };
    bq = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, Zp(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.Me) throw b.sd;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    dq = function(a) {
        this.next = function(b) {
            Yp(a.j);
            a.j.H ? b = aq(a, a.j.H.next, b, a.j.o) : (a.j.o(b), b = bq(a));
            return b
        };
        this.throw = function(b) {
            Yp(a.j);
            a.j.H ? b = aq(a, a.j.H["throw"], b, a.j.o) : (Zp(a.j, b), b = bq(a));
            return b
        };
        this.return = function(b) {
            return cq(a, b)
        };
        this[_.u(w.Symbol, "iterator")] = function() {
            return this
        }
    };
    eq = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new w.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : w.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.db = function(a) {
        return eq(new dq(new $p(a)))
    };
    Ma = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Lp("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Lp("Reflect.construct", function() {
        return Rp
    }, "es6");
    Lp("Reflect.setPrototypeOf", function(a) {
        return a ? a : Wp ? function(b, c) {
            try {
                return Wp(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Lp("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.A(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = Ip.setTimeout;
        b.prototype.A = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.H(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.H = function(g) {
            this.A(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.A = void 0;
            this.j = [];
            this.o = !1;
            var h = this.H();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.H = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.P),
                reject: g(this.C)
            }
        };
        e.prototype.P = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.J(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.oa(g) : this.l(g)
            }
        };
        e.prototype.oa = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.V(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.I(2, g)
        };
        e.prototype.l = function(g) {
            this.I(1, g)
        };
        e.prototype.I = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.A = h;
            2 === this.m && this.G();
            this.L()
        };
        e.prototype.G = function() {
            var g = this;
            d(function() {
                if (g.D()) {
                    var h = Ip.console;
                    "undefined" !== typeof h && h.error(g.A)
                }
            }, 1)
        };
        e.prototype.D = function() {
            if (this.o) return !1;
            var g = Ip.CustomEvent,
                h = Ip.Event,
                k = Ip.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = Ip.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.A;
            return k(g)
        };
        e.prototype.L = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.J = function(g) {
            var h = this.H();
            g.Xb(h.resolve, h.reject)
        };
        e.prototype.V = function(g, h) {
            var k = this.H();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(z) {
                    try {
                        l(p(z))
                    } catch (A) {
                        n(A)
                    }
                } : r
            }
            var l, n, m = new e(function(p, r) {
                l = p;
                n = r
            });
            this.Xb(k(g, l), k(h, n));
            return m
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Xb = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.A);
                        break;
                    case 2:
                        h(l.A);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.o = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.y(g), n = l.next(); !n.done; n = l.next()) c(n.value).Xb(h, k)
            })
        };
        e.all = function(g) {
            var h = _.y(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function m(z) {
                    return function(A) {
                        p[z] = A;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).Xb(m(p.length - 1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Lp("Object.setPrototypeOf", function(a) {
        return a || Wp
    }, "es6");
    Lp("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.y(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Op(g, d)) {
                var k = new b;
                Gp(g, d, {
                    value: k
                })
            }
            if (!Op(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && Op(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && Op(g, d) && Op(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && Op(g, d) && Op(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    Lp("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.y([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.u(k, "entries").call(k),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (m) {
                    return !1
                }
            }()) return a;
        var b = new w.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.y(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.ma ? l.ma.value = k : (l.ma = {
                next: this.j,
                Qa: this.j.Qa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.ma), this.j.Qa.next = l.ma, this.j.Qa = l.ma, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ma && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.ma.Qa.next = h.ma.next, h.ma.next.Qa = h.ma.Qa, h.ma.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Qa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).ma
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).ma) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.u(this, "entries").call(this), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[_.u(w.Symbol, "iterator")] = _.u(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.m[l];
                if (n && Op(h.m, l))
                    for (h = 0; h < n.length; h++) {
                        var m = n[h];
                        if (k !== k && m.key !== m.key || k === m.key) return {
                            id: l,
                            list: n,
                            index: h,
                            ma: m
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    ma: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return Mp(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Qa;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Qa = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var fq = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Lp("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = fq(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var gq = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                ce: f
            }
        }
        return {
            i: -1,
            ce: void 0
        }
    };
    Lp("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return gq(this, b, c).ce
        }
    }, "es6");
    Lp("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.y([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.u(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new w.Map;
            if (c) {
                c = _.y(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.u(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.u(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.u(b.prototype, "values");
        b.prototype[_.u(w.Symbol, "iterator")] = _.u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var hq = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.u(w.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Lp("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return hq(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Lp("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Lp("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Lp("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    Lp("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = fq(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Lp("globalThis", function(a) {
        return a || Ip
    }, "es_2020");
    Lp("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return gq(this, b, c).i
        }
    }, "es6");
    Lp("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Op(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Lp("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return hq(this, function(b) {
                return b
            })
        }
    }, "es6");
    Lp("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof w.Symbol && _.u(w.Symbol, "iterator") && b[_.u(w.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Lp("Array.prototype.values", function(a) {
        return a ? a : function() {
            return hq(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Lp("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Lp("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.u(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Lp("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== fq(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Lp("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Op(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Lp("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.u(w.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.u(w.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    _.t = this || self;
    iq = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    oa = function(a) {
        var b = iq(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ha = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    ia = function(a) {
        return Object.prototype.hasOwnProperty.call(a, jq) && a[jq] || (a[jq] = ++kq)
    };
    jq = "closure_uid_" + (1E9 * Math.random() >>> 0);
    kq = 0;
    lq = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    mq = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.nq = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.nq = lq : _.nq = mq;
        return _.nq.apply(null, arguments)
    };
    _.oq = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    He = function() {
        return Date.now()
    };
    pq = function() {
        var a = ff(),
            b = Mi();
        a.enums = b
    };
    var qq;
    var qe = function(a, b) {
        this.j = a === rq && b || "";
        this.m = sq
    };
    qe.prototype.Oa = !0;
    qe.prototype.Ga = function() {
        return this.j
    };
    var re = function(a) {
            return a instanceof qe && a.constructor === qe && a.m === sq ? a.j : "type_error:Const"
        },
        tq = function(a) {
            return new qe(rq, a)
        },
        sq = {},
        rq = {};
    var kb = tq("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var uq = {};
    var tc, wq;
    _.ba = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.vq = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.Le = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    tc = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    wq = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Ze = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Ae = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var xq = {},
        Wa = function(a, b) {
            this.j = b === xq ? a : "";
            this.Oa = !0
        };
    Wa.prototype.toString = function() {
        return this.j.toString()
    };
    Wa.prototype.Ga = function() {
        return this.j.toString()
    };
    var sn = function(a) {
        return new Wa(a, xq)
    };
    var Yc = function(a, b) {
        this.j = b === yq ? a : ""
    };
    q = Yc.prototype;
    q.toString = function() {
        return this.j + ""
    };
    q.Oa = !0;
    q.Ga = function() {
        return this.j.toString()
    };
    q.Oc = !0;
    q.qb = function() {
        return 1
    };
    var Pa = function(a) {
            return a instanceof Yc && a.constructor === Yc ? a.j : "type_error:TrustedResourceUrl"
        },
        jb = function(a, b) {
            var c = re(a);
            if (!zq.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Aq, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof qe ? re(d) : encodeURIComponent(String(d))
            });
            return Oa(a)
        },
        Aq = /%{(\w+)}/g,
        zq = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Bq = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        yq = {},
        Oa = function(a) {
            return new Yc(a, yq)
        },
        Cq = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var Dq = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        yi = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Eq = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        ze = function(a) {
            if (!Fq.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Gq, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Hq, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Iq, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Jq, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Kq, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Lq, "&#0;"));
            return a
        },
        Gq = /&/g,
        Hq = /</g,
        Iq = />/g,
        Jq = /"/g,
        Kq = /'/g,
        Lq = /\x00/g,
        Fq = /[\x00&<>"']/,
        Ba = function(a, b) {
            return -1 != a.indexOf(b)
        },
        kp = function(a, b) {
            var c = 0;
            a = Eq(String(a)).split(".");
            b = Eq(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Mq(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Mq(0 == f[2].length, 0 == g[2].length) || Mq(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Mq = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var xe, ve;
    _.te = function(a, b) {
        this.j = b === _.we ? a : ""
    };
    q = _.te.prototype;
    q.toString = function() {
        return this.j.toString()
    };
    q.Oa = !0;
    q.Ga = function() {
        return this.j.toString()
    };
    q.Oc = !0;
    q.qb = function() {
        return 1
    };
    _.ue = function(a) {
        return a instanceof _.te && a.constructor === _.te ? a.j : "type_error:SafeUrl"
    };
    xe = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    ve = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.we = {};
    _.ye = new _.te("about:invalid#zClosurez", _.we);
    var Nq = {},
        Wc = function(a, b, c) {
            this.j = c === Nq ? a : "";
            this.m = b;
            this.Oa = this.Oc = !0
        };
    Wc.prototype.qb = function() {
        return this.m
    };
    Wc.prototype.Ga = function() {
        return this.j.toString()
    };
    Wc.prototype.toString = function() {
        return this.j.toString()
    };
    var Ra = function(a) {
            return a instanceof Wc && a.constructor === Wc ? a.j : "type_error:SafeHtml"
        },
        Oq = function(a) {
            if (a instanceof Wc) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Oc && (c = a.qb());
            return Ce(ze(b && a.Oa ? a.Ga() : String(a)), c)
        },
        Qq = function(a) {
            var b = Oq(Pq),
                c = b.qb(),
                d = [],
                e = function(f) {
                    Array.isArray(f) ? f.forEach(e) : (f = Oq(f), d.push(Ra(f).toString()), f = f.qb(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            a.forEach(e);
            return Ce(d.join(Ra(b).toString()), c)
        },
        Be = function(a) {
            return Qq(Array.prototype.slice.call(arguments))
        },
        Ce = function(a, b) {
            return new Wc(a, b, Nq)
        },
        oe = /^[a-zA-Z0-9-]+$/,
        se = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        pe = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Pq = new Wc(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", 0, Nq);
    var Rq = function(a, b, c, d) {
        this.j = a;
        this.A = b;
        this.m = c;
        this.H = d
    };
    var Sq = new Rq(new w.Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new w.Map([
        ["A", new w.Map([
            ["href", {
                ua: 2
            }]
        ])],
        ["AREA", new w.Map([
            ["href", {
                ua: 2
            }]
        ])],
        ["LINK", new w.Map([
            ["href", {
                ua: 2,
                conditions: new w.Map([
                    ["rel", new w.Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                ])
            }]
        ])],
        ["SOURCE", new w.Map([
            ["src", {
                ua: 2
            }]
        ])],
        ["IMG", new w.Map([
            ["src", {
                ua: 2
            }]
        ])],
        ["VIDEO", new w.Map([
            ["src", {
                ua: 2
            }]
        ])],
        ["AUDIO", new w.Map([
            ["src", {
                ua: 2
            }]
        ])]
    ]), new w.Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")), new w.Map([
        ["dir", {
            ua: 3,
            conditions: new w.Map([
                ["dir", new w.Set(["auto", "ltr", "rtl"])]
            ])
        }],
        ["async", {
            ua: 3,
            conditions: new w.Map([
                ["async", new w.Set(["async"])]
            ])
        }],
        ["cite", {
            ua: 2
        }],
        ["loading", {
            ua: 3,
            conditions: new w.Map([
                ["loading", new w.Set(["eager", "lazy"])]
            ])
        }],
        ["poster", {
            ua: 2
        }],
        ["target", {
            ua: 3,
            conditions: new w.Map([
                ["target", new w.Set(["_self", "_blank"])]
            ])
        }]
    ]));
    _.Ka = function(a) {
        this.Pe = a
    };
    _.Tq = [La("data"), La("http"), La("https"), La("mailto"), La("ftp"), new _.Ka(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var Uq = function() {
        if (uq !== uq) throw Error("Bad secret");
    };
    new Uq;
    var Vq = function() {
        this.m = !1;
        this.j = Sq
    };
    Vq.prototype.build = function() {
        if (this.m) throw Error("this sanitizer has already called build");
        this.m = !0;
        return new Uq
    };
    var Wq, Xq, Sg, Yq;
    Wq = function() {
        return !0
    };
    Xq = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Sg = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.An = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    Yq = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.t.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var Zq, $a;
    Zq = {
        passive: !0
    };
    $a = Sg(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.bb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ab(d)), !0) : !1
    };
    _.ld = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ab(d)), !0) : !1
    };
    var fb = function(a) {
        return new w.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var mb = {};
    var qb, pb = "undefined" !== typeof TextEncoder;
    var $q = function(a) {
        $q[" "](a);
        return a
    };
    $q[" "] = function() {};
    var ar = function(a, b) {
            try {
                return $q(a[b]), !0
            } catch (c) {}
            return !1
        },
        br = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
    var cr, er, fr, gr, hr, ir;
    cr = Ca("Opera");
    _.dr = Ca("Trident") || Ca("MSIE");
    er = Ca("Edge");
    fr = Ca("Gecko") && !(Ba(Aa().toLowerCase(), "webkit") && !Ca("Edge")) && !(Ca("Trident") || Ca("MSIE")) && !Ca("Edge");
    gr = Ba(Aa().toLowerCase(), "webkit") && !Ca("Edge");
    hr = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var jr = "",
            kr = function() {
                var a = Aa();
                if (fr) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (er) return /Edge\/([\d\.]+)/.exec(a);
                if (_.dr) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (gr) return /WebKit\/(\S+)/.exec(a);
                if (cr) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();kr && (jr = kr ? kr[1] : "");
        if (_.dr) {
            var lr = hr();
            if (null != lr && lr > parseFloat(jr)) {
                ir = String(lr);
                break a
            }
        }
        ir = jr
    }
    var mr = ir,
        nr = {},
        or = function(a) {
            return br(nr, a, function() {
                return 0 <= kp(mr, a)
            })
        },
        pr;
    if (_.t.document && _.dr) {
        var qr = hr();
        pr = qr ? qr : parseInt(mr, 10) || void 0
    } else pr = void 0;
    var rr = pr;
    !Ca("Android") || Fa();
    Fa();
    Ga();
    var sr = {},
        tr = null,
        ur = fr || gr || "function" == typeof _.t.btoa,
        Kb = function(a, b) {
            void 0 === b && (b = 0);
            vr();
            b = sr[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        il = function(a, b) {
            if (ur && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Kb(c, b)
            }
            return a
        },
        Tn = function(a) {
            var b = "";
            wr(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        xr = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : Ba("=.", a[b - 1]) && (c = Ba("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            wr(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        wr = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = tr[l];
                    if (null != n) return n;
                    if (!yi(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            vr();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        vr = function() {
            if (!tr) {
                tr = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    sr[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === tr[f] && (tr[f] = e)
                    }
                }
            }
        };
    var sb = "undefined" !== typeof Uint8Array,
        Sh, ub = {};
    var yr, Gb = function(a, b) {
            vb(b);
            this.Ob = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Fb = function() {
            return yr || (yr = new Gb(null, ub))
        },
        Lb = function(a) {
            var b = a.Ob;
            b = null == b || "string" === typeof b ? b : sb && b instanceof Uint8Array ? Kb(b) : null;
            return null == b ? "" : a.Ob = b
        };
    Gb.prototype.isEmpty = function() {
        return null == this.Ob
    };
    var Oh = function(a) {
        vb(ub);
        var b = a.Ob;
        b = null == b || tb(b) ? b : "string" === typeof b ? xr(b) : null;
        return null == b ? b : a.Ob = b
    };
    var wb = "function" === typeof w.Symbol && "symbol" === typeof(0, w.Symbol)() ? (0, w.Symbol)(void 0) : void 0;
    var zr, Ar = Object.freeze(zb([])),
        Zb = function(a) {
            if (Db(a)) throw Error("Cannot mutate an immutable Message");
        },
        Br = "undefined" != typeof w.Symbol && "undefined" != typeof w.Symbol.hasInstance;
    var Mb = function(a, b) {
            this.j = a;
            this.A = b;
            this.map = {};
            this.m = !1;
            for (a = this.size = 0; a < this.j.length; a++) {
                b = this.j[a];
                var c = b[0].toString(),
                    d = this.map[c];
                this.map[c] = b;
                void 0 === d && this.size++
            }
        },
        Cr = function(a) {
            if (Ab(a.j)) throw Error("Cannot mutate an immutable Map");
        };
    Mb.prototype.ra = function() {
        if (!this.m) {
            var a = Dr(this);
            a.sort();
            for (var b = 0; b < a.length; b++) this.j[b] = this.map[a[b]];
            a.length < this.j.length && (this.j.length = a.length);
            this.m = !0;
            this.size = this.j.length
        }
        return this.j
    };
    var Wb = function(a, b) {
        var c = a.A,
            d = new Mb(zb([]), c),
            e;
        for (e in a.map) {
            var f = a.map[e];
            c ? d.set(f[0], b(Er(a, f))) : d.set(f[0], f[1])
        }
        return d
    };
    q = Mb.prototype;
    q.clear = function() {
        Cr(this);
        this.map = {};
        this.size = this.j.length = 0;
        this.m = !0
    };
    q.delete = function(a) {
        Cr(this);
        a = a.toString();
        return this.map.hasOwnProperty(a) ? (delete this.map[a], this.size--, this.m = !1, !0) : !1
    };
    q.entries = function() {
        var a = [],
            b = Dr(this);
        b.sort();
        for (var c = 0; c < b.length; c++) {
            var d = this.map[b[c]];
            a.push([d[0], Er(this, d)])
        }
        return new Fr(a)
    };
    q.keys = function() {
        var a = [],
            b = Dr(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(this.map[b[c]][0]);
        return new Fr(a)
    };
    q.values = function() {
        var a = [],
            b = Dr(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(Er(this, this.map[b[c]]));
        return new Fr(a)
    };
    q.forEach = function(a, b) {
        var c = Dr(this);
        c.sort();
        for (var d = 0; d < c.length; d++) {
            var e = this.map[c[d]];
            a.call(b, Er(this, e), e[0], this)
        }
    };
    q.set = function(a, b) {
        Cr(this);
        var c = a.toString(),
            d = this.map[c];
        d ? d[1] = b : (a = [a, b], this.map[c] = a, this.j.push(a), this.m = !1, this.size++);
        return this
    };
    var Er = function(a, b) {
        var c = b[1],
            d = a.A;
        if (d) {
            var e = !1;
            var f = null != c && "object" === typeof c && !(e = Array.isArray(c)) && Array.isArray(c.ta) && c.constructor !== Object ? c : e ? new d(c) : new d;
            f !== c && (b[1] = f, Ab(a.j) && Bb(f.ta));
            return f
        }
        return c
    };
    Mb.prototype.get = function(a) {
        if (a = this.map[a.toString()]) return Er(this, a)
    };
    Mb.prototype.has = function(a) {
        return a.toString() in this.map
    };
    var Dr = function(a) {
        a = a.map;
        var b = [],
            c;
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    };
    Mb.prototype[_.u(w.Symbol, "iterator")] = function() {
        return _.u(this, "entries").call(this)
    };
    var Fr = function(a) {
        this.m = 0;
        this.j = a
    };
    Fr.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    };
    Fr.prototype[_.u(w.Symbol, "iterator")] = function() {
        return this
    };
    var xc = function(a) {
            return a.j || (a.j = a.ta[a.m + a.Wa] = {})
        },
        Q = function(a, b, c) {
            return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.ta[b + a.Wa]
        },
        x = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || Zb(a);
            b < a.m && !d ? a.ta[b + a.Wa] = c : xc(a)[b] = c;
            return a
        },
        aj = function(a, b) {
            return null != Q(a, b)
        },
        wg = function(a, b) {
            return Array.isArray(Q(a, b))
        },
        Xb = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = Q(a, b, d);
            Array.isArray(e) || (e = Ar);
            if (Db(a)) c && (Bb(e), Object.freeze(e));
            else if (e === Ar || Ab(e)) e = zb(e.slice()), x(a, b, e, d);
            return e
        },
        Qd = function(a, b) {
            a = Q(a, b);
            return null == a ? a : +a
        },
        J = function(a, b) {
            a = Q(a, b);
            return null == a ? a : !!a
        },
        Nh = function(a, b) {
            var c = Q(a, b);
            if (null == c) return null;
            if (c instanceof Gb) return c;
            c = Hb(c);
            x(a, b, c, void 0, !0);
            return c
        },
        ud = function(a, b, c) {
            a = Q(a, b);
            return null == a ? c : a
        },
        Gr = function(a, b, c) {
            a = J(a, b);
            return null == a ? void 0 === c ? !1 : c : a
        },
        of = function(a, b, c) {
            null == c ? c = Ar : zb(c);
            return x(a, b, c)
        },
        $b = function(a, b, c) {
            return x(a, b, void 0, !1, c)
        },
        Lf = function(a, b, c, d) {
            Zb(a);
            (c = ec(a, c)) && c !== b && null != d && (a.Y && c in a.Y && (a.Y[c] = void 0), x(a, c));
            return x(a, b, d)
        },
        ec = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != Q(a, e) && (0 !== c && $b(a, c, !0), c = e)
            }
            return c
        },
        Hr = (0, w.Symbol)(void 0),
        Ir = function(a, b, c, d, e) {
            if (-1 === c) return null;
            a.Y || (a.Y = {});
            var f = a.Y[c];
            if (f) return f;
            var g = Q(a, c, e);
            b = Jb(g, b, d);
            if (void 0 == b) return f;
            d && b.ra() !== g && x(a, c, b.ra(), e, !0);
            a.Y[c] = b;
            Db(a) && Bb(b.ta);
            return b
        },
        Kr = function(a) {
            var b = Jr;
            (a = Ir(a, b, 5, void 0, !1)) ? b = a: b = (a = b[Hr]) ? a : b[Hr] = (new b).H(mb);
            return b
        },
        jc = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            b = Ir(a, b, c, d, e);
            if (null == b) return b;
            Db(b) && !Db(a) && (b = b.Mb(mb), x(a, c, b.ra(), e), a.Y[c] = b);
            return b
        },
        Lr = function(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            a.Y || (a.Y = {});
            var f = Db(a),
                g = a.Y[c];
            d = Xb(a, c, !0, d);
            var h = f || Ab(d);
            if (!g) {
                g = [];
                f = f || h;
                for (var k = 0; k < d.length; k++) {
                    var l = d[k];
                    f = f || Ab(l);
                    l = Jb(l, b);
                    void 0 !== l && (g.push(l), h && Bb(l.ta))
                }
                a.Y[c] = g;
                Cb(d, !f)
            }
            b = h || e;
            e = Ab(g);
            b && !e && (Object.isFrozen(g) && (a.Y[c] = g = g.slice()), Bb(g), Object.freeze(g));
            !b && e && (a.Y[c] = g = g.slice());
            return g
        },
        hc = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            var e = Db(a);
            b = Lr(a, b, c, d, e);
            a = Xb(a, c, d);
            if (!(c = e) && (c = a)) {
                if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
                c = !(yb(a) & 8)
            }
            if (c) {
                for (c = 0; c < b.length; c++)(d = b[c]) && Db(d) && !e && (b[c] = b[c].Mb(mb), a[c] = b[c].ra());
                Cb(a, !0)
            }
            return b
        },
        vc = function(a, b, c, d) {
            Zb(a);
            a.Y || (a.Y = {});
            var e = null != c ? c.ra() : c;
            a.Y[b] = c;
            return x(a, b, e, d)
        },
        uf = function(a, b, c, d) {
            Zb(a);
            a.Y || (a.Y = {});
            var e = null != d ? d.ra() : d;
            a.Y[b] = d;
            return Lf(a, b, c, e)
        },
        uc = function(a, b, c, d) {
            Zb(a);
            if (null != c) {
                var e = zb([]);
                for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].ra(), f = f || Ab(e[g]);
                a.Y || (a.Y = {});
                a.Y[b] = c;
                Cb(e, !f)
            } else a.Y && (a.Y[b] = void 0), e = Ar;
            return x(a, b, e, d)
        },
        Mr = function(a, b, c, d) {
            Zb(a);
            var e = Lr(a, c, b, void 0, !1);
            c = null != d ? d : new c;
            a = Xb(a, b);
            e.push(c);
            a.push(c.ra());
            nb(mb);
            Db(c) && Cb(a, !1);
            return c
        },
        Di = function(a, b, c, d) {
            Mr(a, b, c, d);
            return a
        },
        vd = function(a, b) {
            return ud(a, b, 0)
        },
        cn = function(a, b) {
            return ud(a, b, "")
        },
        Or = function(a) {
            return vd(a, fc(a, Nr, 3))
        },
        Pr = function(a) {
            return cn(a, fc(a, Nr, 2))
        },
        tf = function(a, b, c) {
            return ac(a, b, c, !1)
        };
    var rc = function(a, b, c) {
        a || (a = Rr);
        Rr = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.Wa = (d ? 0 : -1) - (this.constructor.j || 0);
        this.Y = void 0;
        this.ta = a;
        a: {
            d = this.ta.length;a = d - 1;
            if (d && (d = this.ta[a], Eb(d))) {
                this.m = a - this.Wa;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.Wa), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.m) a += this.Wa, (d = this.ta[a]) ? Array.isArray(d) && zb(d) : this.ta[a] = Ar;
                else {
                    d = xc(this);
                    var e = d[a];
                    e ? Array.isArray(e) && zb(e) : d[a] = Ar
                }
    };
    rc.prototype.toJSON = function() {
        var a = this.ra();
        return zr ? a : Rb(a, Tb)
    };
    rc.prototype.ra = function() {
        return this.ta
    };
    rc.prototype.X = function() {
        zr = !0;
        try {
            return JSON.stringify(this.toJSON(), gc)
        } finally {
            zr = !1
        }
    };
    var nd = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + iq(b) + ": " + b);
            Rr = b;
            a = new a(b);
            Rr = null;
            return a
        },
        Ub = function(a) {
            var b = Rb(a.ra());
            Rr = b;
            b = new a.constructor(b);
            Rr = null;
            ic(b, a);
            return b
        },
        Rr;
    var lc = 0,
        mc = 0,
        oc = "function" === typeof BigInt;
    var Sr = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        Ur = function(a) {
            if (!a) return Tr || (Tr = new Sr(0, 0));
            if (!/^\d+$/.test(a)) return null;
            pc(a);
            return new Sr(lc, mc)
        },
        Tr, Vr = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        Xr = function(a) {
            if (!a) return Wr || (Wr = new Vr(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            pc(a);
            return new Vr(lc, mc)
        },
        Wr;
    var Yr = function() {
        this.j = []
    };
    Yr.prototype.length = function() {
        return this.j.length
    };
    Yr.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var Zr = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        $r = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        as = function(a, b) {
            if (0 <= b) $r(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var bs = function() {
            this.A = [];
            this.m = 0;
            this.j = new Yr
        },
        cs = function(a, b) {
            0 !== b.length && (a.A.push(b), a.m += b.length)
        },
        ds = function(a, b) {
            $r(a.j, 8 * b + 2);
            b = a.j.end();
            cs(a, b);
            b.push(a.m);
            return b
        },
        es = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        Ac = function(a, b) {
            if (b = b.A) {
                cs(a, a.j.end());
                for (var c = 0; c < b.length; c++) cs(a, Oh(b[c]) || Sh || (Sh = new Uint8Array(0)))
            }
        },
        fs = function(a, b, c) {
            $r(a.j, 8 * b + 2);
            $r(a.j, c.length);
            cs(a, a.j.end());
            cs(a, c)
        };
    var gs = function() {
        rc.apply(this, arguments)
    };
    _.R(gs, rc);
    gs.prototype.H = function() {
        throw Error("unimplemented");
    };
    gs.prototype.Mb = function() {
        return this
    };
    if (Br) {
        var hs = {};
        Object.defineProperties(gs, (hs[w.Symbol.hasInstance] = Ib(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), hs))
    };
    var Fc = (0, w.Symbol)(),
        Dc = (0, w.Symbol)(),
        Cc = (0, w.Symbol)(),
        el = function(a, b) {
            var c = new bs;
            Hc(a, c, Gc(b));
            cs(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.A;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.A = [a];
            return a
        },
        is = Nc(function(a, b, c) {
            if (5 !== a.j()) return !1;
            x(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            if (null != b) {
                $r(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? lc = mc = 0 : (mc = 0, lc = 2147483648) : isNaN(d) ? (mc = 0, lc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (mc = 0, lc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), mc = 0, lc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, mc = 0, lc = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = lc;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        js = Nc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && ("string" === typeof b && Xr(b), null != b && ($r(a.j, 8 * c), "number" === typeof b ? (a = a.j, nc(b), Zr(a, lc, mc)) : (c = Xr(b), Zr(a.j, c.m, c.j))))
        }),
        ks = Nc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.L());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && ("string" === typeof b && Ur(b), null != b && ($r(a.j, 8 * c), "number" === typeof b ? (a = a.j, nc(b), Zr(a, lc, mc)) : (c = Ur(b), Zr(a.j, c.m, c.j))))
        }),
        ls = Nc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.o());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && null != b && ($r(a.j, 8 * c), as(a.j, b))
        }),
        ms = Nc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && ($r(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        ns = Nc(function(a, b, c) {
            if (2 !== a.j()) return !1;
            x(b, c, a.A());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && fs(a, c, rb(b))
        }),
        os = Nc(function(a, b, c) {
            if (2 !== a.j()) return !1;
            a = a.A();
            dc(b, c, a);
            return !0
        }, function(a, b, c) {
            b = Xb(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && fs(a, c, rb(e))
                }
        }),
        ps = Nc(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            var f = a.m;
            Zb(b);
            b.Y || (b.Y = {});
            var g = b.Y[c];
            g ? (d = g.Mb(mb), d !== g && (x(b, c, d.ra()), b.Y[c] = d), b = d) : (g = Q(b, c), d = Jb(g, d, !0).Mb(mb), g !== d.ra() && x(b, c, d.ra()), b = b.Y[c] = d);
            f.call(a, b, e);
            return !0
        }, function(a, b, c, d, e) {
            b = jc(b, d, c);
            null != b && (c = ds(a, c), e(b, a), es(a, c))
        }),
        qs = Nc(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Mr(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = hc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = ds(a, c);
                    e(b[d], a);
                    es(a, f)
                }
        }),
        rs = Nc(function(a, b, c) {
            if (0 !== a.j()) return !1;
            x(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = Q(b, c);
            null != b && (b = parseInt(b, 10), $r(a.j, 8 * c), as(a.j, b))
        });
    var Oc = function(a) {
        return a
    };
    var T = function() {
        gs.apply(this, arguments)
    };
    _.R(T, gs);
    T.prototype.H = function(a) {
        nb(a);
        return Db(this) ? this : sc(this)
    };
    T.prototype.Mb = function(a) {
        nb(a);
        if (Db(this)) {
            a = {
                Ic: !0
            };
            var b = Db(this);
            if (b && !a.Ic) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            Ob(c, this);
            for (var d = this.ra(), e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && Eb(f))
                    for (h in f) {
                        if (Object.prototype.hasOwnProperty.call(f, h)) {
                            var g = +h;
                            _.u(Number, "isNaN").call(Number, g) ? xc(c)[h] = f[h] : Pc(this, c, g, f[h], b, a)
                        }
                    } else Pc(this, c, e - this.Wa, f, b, a)
            }
            var h = c
        } else h = this;
        return h
    };
    if (Br) {
        var ss = {};
        Object.defineProperties(T, (ss[w.Symbol.hasInstance] = Ib(Object[w.Symbol.hasInstance]), ss))
    };
    var Un = function(a) {
        T.call(this, a)
    };
    _.R(Un, T);
    var Vn = function(a) {
        T.call(this, a)
    };
    _.R(Vn, T);
    var ts = function(a) {
            this.j = a.m;
            this.m = a.A;
            this.H = a.H;
            this.Jb = a.Jb;
            this.F = a.F;
            this.tb = a.tb;
            this.jc = a.jc;
            this.Ac = a.Ac;
            this.ic = a.ic;
            this.A = a.j
        },
        us = function(a, b, c) {
            this.m = a;
            this.A = b;
            this.H = c;
            this.F = window;
            this.tb = "env";
            this.jc = "n";
            this.Ac = "0";
            this.ic = "1";
            this.j = !0
        };
    us.prototype.build = function() {
        return new ts(this)
    };
    var eo = function(a, b) {
        var c = void 0 === Gr(b, 6) ? !0 : Gr(b, 6),
            d, e;
        a: switch (ud(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new us(Qc(ud(b, 2, 0)), cn(b, 3), f);
        b = null != (e = null == (d = jc(b, Vn, 5)) ? void 0 : cn(d, 1)) ? e : "";
        f.Jb = b;
        f.j = c;
        f.F = a;
        return f.build()
    };
    var ek = function(a) {
        T.call(this, a)
    };
    _.R(ek, T);
    var dk = function(a, b) {
            return x(a, 1, b)
        },
        ck = function(a, b) {
            return x(a, 2, b)
        },
        vs = [ek, 1, rs, 2, ls, 3, ns];
    var lk = function(a) {
        T.call(this, a, -1, ws)
    };
    _.R(lk, T);
    var kk = function(a, b) {
            return x(a, 1, b)
        },
        mk = function(a, b) {
            x(a, 2, b)
        },
        ik = function(a, b) {
            return Di(a, 3, rk, b)
        },
        jk = function(a, b) {
            return x(a, 4, b)
        },
        rk = function(a) {
            T.call(this, a, -1, xs)
        };
    _.R(rk, T);
    var vk = function(a, b) { of (a, 4, b)
        },
        wk = function(a, b) {
            vc(a, 7, b)
        },
        tk = function(a) {
            T.call(this, a)
        };
    _.R(tk, T);
    tk.prototype.getId = function() {
        return cn(this, 1)
    };
    var sk = function(a, b) {
            return x(a, 1, b)
        },
        ys = function(a) {
            T.call(this, a)
        };
    _.R(ys, T);
    ys.prototype.getWidth = function() {
        return vd(this, 1)
    };
    var yk = function(a) {
        var b = new ys;
        return x(b, 1, a)
    };
    ys.prototype.getHeight = function() {
        return vd(this, 2)
    };
    var xk = function(a, b) {
            return x(a, 2, b)
        },
        ws = [3],
        xs = [4],
        zs = [lk, 1, ns, 2, js, 3, qs, [rk, 1, ns, 2, js, 8, js, 3, ns, 4, os, 5, rs, 6, ps, [tk, 1, ns], 7, ps, [ys, 1, ls, 2, ls]], 4, rs, 5, ps, vs, 6, ms];
    var Bs = function(a) {
        T.call(this, a, -1, As)
    };
    _.R(Bs, T);
    var hk = function(a, b) {
            return Mr(a, 2, lk, b)
        },
        pk = function(a, b) {
            vc(a, 5, b)
        },
        As = [2],
        Cs = [Bs, 1, rs, 6, ns, 2, qs, zs, 3, rs, 4, ns, 5, ps, vs, 7, ms, 8, ls];
    var Es = function(a) {
        T.call(this, a, -1, Ds)
    };
    _.R(Es, T);
    var Fs = function(a) {
            var b = new Bs;
            b = x(b, 1, 1);
            return Mr(a, 1, Bs, b)
        },
        Ds = [1],
        fl = [Es, 1, qs, Cs];
    var Hs = function(a) {
        T.call(this, a, -1, Gs)
    };
    _.R(Hs, T);
    var Js = function(a) {
        T.call(this, a, -1, Is)
    };
    _.R(Js, T);
    var Ks = function(a) {
        T.call(this, a)
    };
    _.R(Ks, T);
    var Gs = [1],
        Is = [1],
        Nr = [2, 3];
    var Ms = function(a) {
        T.call(this, a, -1, Ls)
    };
    _.R(Ms, T);
    var Ls = [4];
    var Ns = function(a) {
        T.call(this, a)
    };
    _.R(Ns, T);
    var Ps = function(a) {
        T.call(this, a, -1, Os)
    };
    _.R(Ps, T);
    var Os = [1];
    var Rs = function(a) {
        T.call(this, a, -1, Qs)
    };
    _.R(Rs, T);
    var Ss = function(a) {
        T.call(this, a)
    };
    _.R(Ss, T);
    var Qs = [1];
    var Ts = function(a) {
        T.call(this, a)
    };
    _.R(Ts, T);
    Ts.prototype.getAdUnitPath = function() {
        return cn(this, 1)
    };
    var Us = function(a) {
        T.call(this, a)
    };
    _.R(Us, T);
    var Vs = [Us, 1, js];
    var Dl = function(a) {
        T.call(this, a)
    };
    _.R(Dl, T);
    Dl.prototype.getEscapedQemQueryId = function() {
        return cn(this, 1)
    };
    var El = [Dl, 1, ns, 2, ps, Vs];
    var Xs = function(a) {
        T.call(this, a, -1, Ws)
    };
    _.R(Xs, T);
    var Ws = [1];
    var bn = function(a) {
        T.call(this, a)
    };
    _.R(bn, T);
    bn.prototype.getAdUnitPath = function() {
        return cn(this, 2)
    };
    bn.prototype.getWidth = function() {
        return vd(this, 3)
    };
    bn.prototype.getHeight = function() {
        return vd(this, 4)
    };
    var Zs = function(a) {
        T.call(this, a, -1, Ys)
    };
    _.R(Zs, T);
    var Ys = [3];
    var $s = function(a) {
        T.call(this, a)
    };
    _.R($s, T);
    var at = [5, 6];
    var ct = function(a) {
        T.call(this, a, -1, bt)
    };
    _.R(ct, T);
    var bt = [4, 5];
    var dt = function(a) {
        T.call(this, a)
    };
    _.R(dt, T);
    var ft = function(a) {
        T.call(this, a, -1, et)
    };
    _.R(ft, T);
    var et = [13];
    var ht = function(a) {
        T.call(this, a, -1, gt)
    };
    _.R(ht, T);
    var gt = [13];
    var xl = function(a) {
        T.call(this, a, -1, it)
    };
    _.R(xl, T);
    var jt = function(a) {
        T.call(this, a)
    };
    _.R(jt, T);
    var kt = function(a) {
        T.call(this, a)
    };
    _.R(kt, T);
    var lt = function(a) {
        T.call(this, a)
    };
    _.R(lt, T);
    var le = function(a) {
        T.call(this, a)
    };
    _.R(le, T);
    var ke = function(a, b) {
            return x(a, 1, b)
        },
        Vd = function(a) {
            T.call(this, a)
        };
    _.R(Vd, T);
    var it = [1, 2],
        mt = [kt, 1, ks, 2, ks, 3, ks],
        Al = [xl, 1, qs, [jt, 1, ks, 2, ps, mt, 3, ps, mt, 4, ns, 5, ns, 6, ms, 7, ps, [lt, 4, rs, 5, ns]], 2, qs, [le, 1, ns, 2, ns, 3, js, 7, js, 8, is, 4, ls, 5, ls, 6, ls, 9, ms, 10, ps, [Vd, 1, rs]]];
    var nt = function(a) {
        T.call(this, a)
    };
    _.R(nt, T);
    var pt = function(a) {
        T.call(this, a, -1, ot)
    };
    _.R(pt, T);
    var ot = [1];
    var qt = function(a) {
        T.call(this, a)
    };
    _.R(qt, T);
    var rt = function(a) {
        T.call(this, a)
    };
    _.R(rt, T);
    rt.prototype.getVersion = function() {
        return Q(this, 5)
    };
    var st = function(a) {
        T.call(this, a)
    };
    _.R(st, T);
    var tt = function(a) {
        T.call(this, a)
    };
    _.R(tt, T);
    var vt = function(a) {
        T.call(this, a, -1, ut)
    };
    _.R(vt, T);
    vt.prototype.getEscapedQemQueryId = function() {
        return cn(this, 4)
    };
    var ut = [2];
    var wt = function(a) {
        T.call(this, a)
    };
    _.R(wt, T);
    var xt = function(a) {
        T.call(this, a)
    };
    _.R(xt, T);
    var Jr = function(a) {
        T.call(this, a)
    };
    _.R(Jr, T);
    Jr.prototype.getEscapedQemQueryId = function() {
        return cn(this, 2)
    };
    var zt = function(a) {
        T.call(this, a, -1, yt)
    };
    _.R(zt, T);
    var At = function(a) {
        return jc(a, Jr, 5)
    };
    zt.prototype.getWidth = function() {
        return vd(this, 9)
    };
    zt.prototype.getHeight = function() {
        return vd(this, 10)
    };
    var yt = [3, 7, 11];
    var Ct = function(a) {
        T.call(this, a, -1, Bt)
    };
    _.R(Ct, T);
    Ct.prototype.getHeight = function() {
        return Q(this, 6)
    };
    Ct.prototype.getWidth = function() {
        return Q(this, 7)
    };
    Ct.prototype.getEscapedQemQueryId = function() {
        return Q(this, 34)
    };
    var Dt = function(a) {
        T.call(this, a)
    };
    _.R(Dt, T);
    Dt.prototype.getHtml = function() {
        return Nh(this, 1)
    };
    var Bt = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53, 62, 63],
        Et = [4, 41],
        Ft = [39, 48];
    var Sn = function(a) {
        T.call(this, a)
    };
    _.R(Sn, T);
    var hl = window;
    var Ht = function(a) {
        T.call(this, a, -1, Gt)
    };
    _.R(Ht, T);
    var qp = function() {
            var a = new Ht,
                b = _.E(It);
            return tf(a, 7, b)
        },
        Gt = [15];
    var pp = function(a) {
        T.call(this, a)
    };
    _.R(pp, T);
    pp.prototype.getCorrelator = function() {
        return vd(this, 1)
    };
    pp.prototype.setCorrelator = function(a) {
        return ac(this, 1, a, 0)
    };
    var op = function(a) {
        T.call(this, a)
    };
    _.R(op, T);
    var Jt = _.dr || gr;
    var Kt = /^[\w+/_-]+[=]{0,2}$/,
        Lt = function(a, b) {
            b = (b || _.t).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Kt.test(a) ? a : "" : ""
        };
    _.Fg = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Fg.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Fg.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Fg.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Ig = function(a, b) {
        this.width = a;
        this.height = b
    };
    q = _.Ig.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Mt, Nt, Lg, Hk, Ot, Qt;
    Mt = function(a) {
        return a = ze(a)
    };
    Nt = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    Lg = function(a) {
        if (!_.u(Number, "isFinite").call(Number, a)) return String(a);
        a = String(a);
        var b = a.indexOf("."); - 1 === b && (b = a.length);
        var c = "-" === a[0] ? "-" : "";
        c && (a = a.substring(1));
        return c + Nt("0", Math.max(0, 2 - b)) + a
    };
    Hk = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ He()).toString(36)
    };
    Ot = 2147483648 * Math.random() | 0;
    _.Pt = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Qt = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Tt, Vt, Ut, Yt, $t, Rc, Uc, Rt;
    Tt = function(a) {
        return a ? new Rt(_.St(a)) : qq || (qq = new Rt)
    };
    Vt = function(a, b) {
        ta(b, function(c, d) {
            c && "object" == typeof c && c.Oa && (c = c.Ga());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ut.hasOwnProperty(d) ? a.setAttribute(Ut[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Ut = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Xt = function(a) {
        a = a.document;
        a = _.Wt(a) ? a.documentElement : a.body;
        return new _.Ig(a.clientWidth, a.clientHeight)
    };
    Yt = function(a) {
        return a.scrollingElement ? a.scrollingElement : !gr && _.Wt(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Zt = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    $t = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!oa(f) || _.ha(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ha(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.vq(g ? ea(f) : f, d)
            }
        }
    };
    _.Wt = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.au = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.bu = function(a) {
        var b;
        if (Jt && !(_.dr && or("9") && !or("10") && _.t.SVGElement && a instanceof _.t.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ha(b) && 1 == b.nodeType ? b : null
    };
    _.cu = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    Rc = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.St = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    Uc = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Zt(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    Rt = function(a) {
        this.j = a || _.t.document || document
    };
    q = Rt.prototype;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        $t(_.St(a), a, arguments)
    };
    q.fe = _.au;
    q.contains = _.cu;
    var du = function() {
        return Ca("iPad") || Ca("Android") && !Ca("Mobile") || Ca("Silk")
    };
    var Yl, Ti, eu, vi;
    _.Zl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    Yl = function(a) {
        return a ? decodeURI(a) : a
    };
    Ti = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Ti(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    eu = /#|$/;
    vi = function(a, b) {
        var c = a.search(eu);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var Tc, Sc, de, fu, ee, ti, Tg, xd, gu, Uh, yg, wd, yd, xp, iu, ju, ku, Ug, lu, mu, nu, ou, pu, jl, qu, ru, su, sh, uh, th, Zk, tu, vu, wu, xu, yu, zu, Md, Au, $m, cj, Bu, Cu, Zi, sl;
    Tc = function(a) {
        try {
            return !!a && null != a.location.href && ar(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Sc = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? fu(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Tc(c) || !a(c));) c = fu(c)
    };
    de = function() {
        var a = window;
        Sc(function(b) {
            a = b;
            return !1
        });
        return a
    };
    fu = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    ee = function(a) {
        return Tc(a.top) ? a.top : null
    };
    ti = function(a, b) {
        var c = _.jd("SCRIPT", a);
        Ya(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Tg = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    xd = function() {
        if (!w.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            w.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Wi = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    gu = function(a) {
        var b = [];
        _.Wi(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.hu = function(a) {
        var b = [];
        _.Wi(a, function(c) {
            b.push(c)
        });
        return b
    };
    Uh = function(a, b) {
        return va(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    yg = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    wd = Sg(function() {
        return _.Ze(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], iu) || 1E-4 > Math.random()
    });
    yd = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    xp = Sg(function() {
        return iu("MSIE")
    });
    iu = function(a) {
        return Ba(Aa(), a)
    };
    ju = /^([0-9.]+)px$/;
    ku = function() {
        return /^true$/.test("false")
    };
    Ug = function(a) {
        return (a = ju.exec(a)) ? +a[1] : null
    };
    lu = function(a, b) {
        b = void 0 === b ? !0 : b;
        try {
            for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
            }
        } catch (d) {}
        return !0
    };
    mu = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    nu = {
        If: "allow-forms",
        Jf: "allow-modals",
        Kf: "allow-orientation-lock",
        Lf: "allow-pointer-lock",
        Mf: "allow-popups",
        Nf: "allow-popups-to-escape-sandbox",
        Of: "allow-presentation",
        Pf: "allow-same-origin",
        Qf: "allow-scripts",
        Rf: "allow-top-navigation",
        Sf: "allow-top-navigation-by-user-activation"
    };
    ou = Sg(function() {
        return _.hu(nu)
    });
    pu = function(a) {
        var b = ou();
        return a.length ? _.Le(b, function(c) {
            return !(0 <= _.ba(a, c))
        }) : b
    };
    jl = function() {
        var a = _.jd("IFRAME"),
            b = {};
        _.vq(ou(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    qu = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && Ba(a, "[native code]")
    };
    ru = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = fu(a))) break
        }
        return null
    };
    su = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.jd("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Ij = Sg(function() {
        return !du() && (Ca("iPod") || Ca("iPhone") || Ca("Android") || Ca("IEMobile")) ? 2 : du() ? 1 : 0
    });
    sh = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.ch = function(a, b) {
        _.Wi(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    uh = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    th = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Tg(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Zk = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : tc(a, parseFloat)
    };
    tu = {};
    _.uu = (tu["http://googleads.g.doubleclick.net"] = !0, tu["http://pagead2.googlesyndication.com"] = !0, tu["https://googleads.g.doubleclick.net"] = !0, tu["https://pagead2.googlesyndication.com"] = !0, tu);
    vu = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    wu = [];
    xu = function() {
        var a = wu;
        wu = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    yu = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    zu = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    Md = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: zu(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    Au = function(a, b) {
        Vc(_.Zt(_.St(a)), a, b)
    };
    $m = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (wu.push(b), 1 == wu.length && (w.Promise ? w.Promise.resolve().then(xu) : window.setImmediate ? setImmediate(xu) : setTimeout(xu, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    cj = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Bu = function(a, b) {
        var c = _.jd("DIV");
        c.id = a;
        c.textContent = b;
        _.ch(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Cu = function(a) {
        return new w.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    Zi = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.jd = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    sl = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Tc(a) && (b = a);
        return b
    };
    _.Du = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.Du.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.Du.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.Eu = function(a) {
        return new _.Du(a.top, a.right, a.bottom, a.left)
    };
    _.Du.prototype.contains = function(a) {
        return this && a ? a instanceof _.Du ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.Du.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Du.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Du.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Fu = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Gu = function(a) {
            return new _.Du(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Hu = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Fu(c, e, d - c, a - e)
            }
            return null
        };
    Fu.prototype.contains = function(a) {
        return a instanceof _.Fg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Fu.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Fu.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Fu.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Lk = function(a) {
            a = void 0 === a ? _.t : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        Pk = function(a) {
            return (a = a || Lk()) ? Tc(a.master) ? a.master : null : null
        },
        Ju = function(a, b) {
            if (a.ampInaboxInitialized) return !0;
            var c, d = "amp-ini-load" === b.data;
            a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), Iu(a, c[1]));
            return !1
        },
        Ku = function(a, b, c) {
            var d = !0;
            d = void 0 === d ? !1 : d;
            var e = a.ampInaboxIframes = a.ampInaboxIframes || [],
                f = function() {},
                g = function() {};
            b && (e.push(b), g = function() {
                a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                da(e, b);
                f()
            });
            if (a.ampInaboxInitialized) return g;
            a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
            c && /^\d{15,20}$/.test(c) && Iu(a, c);
            var h = function(k) {
                Ju(a, k) && f()
            };
            d || e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.bb(a, "message", h), f = function() {
                _.ld(a, "message", h)
            });
            return g
        },
        Iu = function(a, b) {
            a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ti(a.document, b ? jb(tq("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                ampVersion: b
            }) : Oa(re(tq("https://cdn.ampproject.org/amp4ads-host-v0.js"))))
        };
    var Nu, Ve, Hg, Pu, Qu, Eg;
    _.Mu = function(a, b, c) {
        if ("string" === typeof b)(b = _.Lu(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Lu(c, d);
                f && (c.style[f] = e)
            }
    };
    Nu = {};
    _.Lu = function(a, b) {
        var c = Nu[b];
        if (!c) {
            var d = _.Pt(b);
            c = d;
            void 0 === a.style[d] && (d = (gr ? "Webkit" : fr ? "Moz" : _.dr ? "ms" : null) + Qt(d), void 0 !== a.style[d] && (c = d));
            Nu[b] = c
        }
        return c
    };
    _.Ou = function(a, b) {
        var c = _.St(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Ve = function(a, b) {
        return _.Ou(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Hg = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    Pu = function(a) {
        if (_.dr && !(8 <= Number(rr))) return a.offsetParent;
        var b = _.St(a),
            c = Ve(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Ve(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Qu = function(a) {
        var b = _.St(a),
            c = new _.Fg(0, 0);
        var d = b ? _.St(b) : document;
        d = !_.dr || 9 <= Number(rr) || _.Wt(Tt(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Hg(a);
        d = Tt(b).j;
        b = Yt(d);
        d = d.parentWindow || d.defaultView;
        b = _.dr && or("10") && d.pageYOffset != b.scrollTop ? new _.Fg(b.scrollLeft, b.scrollTop) : new _.Fg(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Eg = function(a, b) {
        var c = new _.Fg(0, 0),
            d = _.Zt(_.St(a));
        if (!ar(d, "parent")) return c;
        do {
            var e = d == b ? Qu(a) : _.Ru(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Ru = function(a) {
        a = Hg(a);
        return new _.Fg(a.left, a.top)
    };
    _.Su = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.We = function(a, b) {
        if ("none" != Ve(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Xe = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = gr && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Hg(a), new _.Ig(a.right - a.left, a.bottom - a.top)) : new _.Ig(b, c)
    };
    var oh = function(a) {
        a = Pk(Lk(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var Tu = $c(function(a) {
        var b = [],
            c = {};
        a = _.y(a);
        for (var d = a.next(); !d.done; c = {
                Rb: c.Rb
            }, d = a.next()) c.Rb = d.value, $c(function(e) {
            return function() {
                var f = {};
                b.push([(f[e.Rb.Wd] = e.Rb.message.toJSON(), f)])
            }
        }(c))();
        return JSON.stringify([b])
    });
    var Uu = function(a, b) {
        if (w.globalThis.fetch) w.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Dp = function(a) {
        var b = void 0 === b ? Uu : b;
        this.H = void 0 === a ? 1E3 : a;
        this.A = b;
        this.m = [];
        this.j = null
    };
    Dp.prototype.Vd = function() {
        var a = Ma.apply(0, arguments),
            b = this;
        $c(function() {
            b.m.push.apply(b.m, _.ad(a));
            var c = $c(function() {
                var d = Tu(b.m);
                b.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.m = [];
                b.j = null
            });
            100 <= b.m.length ? (null !== b.j && clearTimeout(b.j), b.j = setTimeout(c, 0)) : null === b.j && (b.j = setTimeout(c, b.H))
        })()
    };
    var V = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        Vu = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        Wu = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        Xu = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var Mj, Yu, Zu, $u, ph, av, ak, bv, zo, cv, dv, ev, fv, gv, uk, hv, iv, jv, kv, lv, mv, nv, ov, pv, Pn, qv, rv, sv, tv, uv, vv, wv, pl, xv, yv, zv, Nl, Av, on, tj, Dj, sj, Bv, Cv, cg, Dv, Ev, Fv, Gv, Hv, Iv, Jv, Kv, Cl, Lv, km, hm, Mv, Si, Oi, Nv, zn, Dn, Bn, Ov, Pv, Qv, Rv, qm, Sv, Tv, Uv, Vv, Cp, Wv, Xv, Yv, Zv, $v, aw, jf, bw, cw, fe, dw, vl, wl, Pd, ew, fw, zl, yl, Ld, gw, rp, sp, Xl, wj, Pm, Sk, tp, It, iw, jw, kw, lw, zm, ym, nw, Am, ow, pw, qw, rw, sw;
    Mj = new Vu(1158);
    Yu = new V(1122, !0);
    Zu = new Wu(3);
    $u = new Xu(481);
    ph = new Vu(7, .1);
    av = new V(212);
    ak = new Vu(387165532);
    bv = new V(411850510);
    zo = new Vu(444965520, .01);
    cv = new V(359351145);
    dv = new V(427553875);
    ev = new Vu(448338836, .01);
    fv = new Vu(427198696);
    gv = new Vu(438663674);
    uk = new V(447038262);
    hv = new V(23);
    iv = new V(369430);
    jv = new V(432254233);
    kv = new Vu(408380992, .01);
    lv = new Vu(377289019, 1E4);
    mv = new Vu(488);
    nv = new Vu(529, 20);
    ov = new Wu(10);
    pv = new Vu(428094087);
    Pn = new Vu(447000223, .01);
    qv = new Vu(430268223);
    rv = new V(427841102);
    sv = new Vu(434620574);
    tv = new V(360245597, !0);
    uv = new V(45360254);
    vv = new Vu(494, 5E3);
    wv = new Vu(517, .01);
    pl = new V(384700361, !0);
    xv = new V(439896109);
    yv = new V(371390390);
    zv = new V(220);
    Nl = new V(200);
    Av = new V(111);
    on = new V(323);
    tj = new Vu(388529191);
    Dj = new Vu(492, .01);
    sj = new V(423059401);
    _.Ek = new V(430565960);
    Bv = new Vu(363650251);
    Cv = new V(83);
    cg = new V(85);
    Dv = new V(437061931);
    Ev = new Vu(398776877, 6E4);
    Fv = new V(437292966);
    Gv = new V(444964204);
    Hv = new Vu(374201269, 6E4);
    Iv = new Vu(371364213, 6E4);
    Jv = new Vu(376149757, .0025);
    Kv = new V(444932010);
    Cl = new V(422917270);
    Lv = new V(377936516, !0);
    km = new V(421896358);
    hm = new V(423820325);
    Mv = new Vu(24);
    Si = new Xu(1);
    Oi = new Wu(2, "1-0-38");
    Nv = new V(116);
    zn = new V(427203966);
    Dn = new V(442109935);
    Bn = new V(441772725);
    Ov = new V(441529989);
    Pv = new V(428624799);
    Qv = new V(437308144);
    Rv = new Xu(489);
    qm = new V(392065905);
    Sv = new Vu(360245595, 500);
    Tv = new Vu(432023148);
    Uv = new V(451209599);
    Vv = new V(424117738);
    Cp = new Vu(397316938, 1E3);
    Wv = new V(444587044);
    Xv = new V(440148284);
    Yv = new V(440148283);
    Zv = new V(444587045);
    $v = new V(440148282);
    aw = new V(399705355);
    jf = new Vu(425668704, 15360);
    bw = new V(501);
    cw = new Wu(363931022);
    fe = new V(1930);
    dw = new V(453);
    vl = new V(454);
    wl = new V(426169223);
    Pd = new Vu(360261971);
    ew = new Vu(1921, 72);
    fw = new Vu(1920, 24);
    zl = new Vu(426169222, 1E3);
    yl = new Vu(1917, 300);
    Ld = new Vu(1916, .001);
    gw = new V(451008459);
    rp = new V(77);
    sp = new V(78);
    Xl = new V(1961);
    wj = new V(309);
    Pm = new V(1970);
    Sk = new V(1953, !0);
    tp = new V(80);
    It = new V(76);
    _.hw = new V(1947, !0);
    iw = new V(84);
    jw = new V(1958);
    kw = new V(188);
    lw = new V(1971);
    _.mw = new Vu(1972);
    zm = new V(1928);
    ym = new V(1941);
    nw = new V(370946349);
    Am = new V(392736476);
    ow = new Vu(406149835);
    pw = new V(397841828);
    qw = new V(432946749);
    rw = new V(432938498);
    sw = new Vu(432059203);
    var tw = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.jd("SCRIPT", g);
                h.async = !0;
                Ya(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? tw(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        uw = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            tw(Tt(a), b, 0, !1, c, d)
        };
    ua({
        jg: 0,
        ig: 1,
        fg: 2,
        Zf: 3,
        gg: 4,
        bg: 5,
        hg: 6,
        dg: 7,
        eg: 8,
        Yf: 9,
        cg: 10
    }).map(function(a) {
        return Number(a)
    });
    ua({
        lg: 0,
        mg: 1,
        kg: 2
    }).map(function(a) {
        return Number(a)
    });
    var vw = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.jd("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    _.ww = function() {
        this.m = this.m;
        this.oa = this.oa
    };
    _.ww.prototype.m = !1;
    _.ww.prototype.za = function() {
        this.m || (this.m = !0, this.H())
    };
    _.Qm = function(a, b) {
        _.pn(a, _.oq(dd, b))
    };
    _.pn = function(a, b) {
        a.m ? b() : (a.oa || (a.oa = []), a.oa.push(b))
    };
    _.ww.prototype.H = function() {
        if (this.oa)
            for (; this.oa.length;) this.oa.shift()()
    };
    var xw = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        yw = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.ww.call(this);
            this.j = a;
            this.A = null;
            this.o = {};
            this.L = 0;
            this.I = b;
            this.l = c;
            this.C = null
        };
    _.R(yw, _.ww);
    yw.prototype.H = function() {
        this.o = {};
        this.C && (_.ld(this.j, "message", this.C), delete this.C);
        delete this.o;
        delete this.j;
        delete this.A;
        _.ww.prototype.H.call(this)
    };
    var Aw = function(a) {
        return "function" === typeof a.j.__tcfapi || null != zw(a)
    };
    yw.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.l
            },
            d = _.An(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.I && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.I));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = xw(c), c.internalBlockOnErrors = b.l, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Bw(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    yw.prototype.removeEventListener = function(a) {
        a && a.listenerId && Bw(this, "removeEventListener", null, a.listenerId)
    };
    var Dw = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.l
                },
                d = _.An(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.I && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.I));
            Bw(a, "addEventListener", function(f, g) {
                var h = e;
                h && clearTimeout(h);
                g && (c = f);
                c.internalErrorState = xw(c);
                c.internalBlockOnErrors = a.l;
                0 != c.internalErrorState && (c.tcString = "tcunavailable");
                if (a.l) Cw(c) && (Bw(a, "removeEventListener", null, c.listenerId), d());
                else if (0 != c.internalErrorState || Cw(c)) Bw(a, "removeEventListener", null, c.listenerId), d()
            })
        },
        Ew = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        Bw = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (zw(a)) {
                Fw(a);
                var e = ++a.L;
                a.o[e] = c;
                a.A && (c = {}, a.A.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        zw = function(a) {
            if (a.A) return a.A;
            a.A = ru(a.j, "__tcfapiLocator");
            return a.A
        },
        Fw = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.o[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.bb(a.j, "message", a.C))
        },
        Cw = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = xw(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        Gw = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return Ew(a, c)
            })
        };
    var Hw = function(a, b, c) {
            this.j = a;
            this.A = b;
            this.m = void 0 === c ? function() {} : c
        },
        Iw = function(a, b, c) {
            return new Hw(a, b, c)
        };
    Hw.prototype.start = function() {
        if (this.j === this.j.top) try {
            vw(this.j), Jw(this)
        } catch (a) {}
    };
    var Jw = function(a) {
        var b = jb(tq("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.A,
            ers: 3
        });
        uw(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var Kw = w.Promise;
    var Lw = function(a) {
        this.m = a
    };
    Lw.prototype.send = function(a, b, c) {
        this.m.then(function(d) {
            d.send(a, b, c)
        })
    };
    Lw.prototype.j = function(a, b) {
        return this.m.then(function(c) {
            return c.j(a, b)
        })
    };
    var Mw = function(a) {
        this.data = a
    };
    var Nw = function(a) {
        this.m = a
    };
    Nw.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        Ow(d.port1, b);
        this.m.postMessage(a, [d.port2].concat(c))
    };
    Nw.prototype.j = function(a, b) {
        var c = this;
        return new Kw(function(d) {
            c.send(a, d, b)
        })
    };
    var Pw = function(a, b) {
            Ow(a, b);
            return new Nw(a)
        },
        Ow = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new Mw(c.data, Pw(c.ports[0])))
            })
        };
    var Hh = function(a) {
            var b = a.hc,
                c = void 0 === a.Fa ? "ZNWN1d" : a.Fa,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.uc ? void 0 : a.uc;
            return Qw({
                destination: a.destination,
                De: function() {
                    return b.contentWindow
                },
                Xe: Rw(a.origin),
                Fa: c,
                onMessage: d,
                uc: e
            })
        },
        Qw = function(a) {
            var b = a.destination,
                c = a.De,
                d = a.Xe,
                e = void 0 === a.cd ? void 0 : a.cd,
                f = a.Fa,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.uc ? void 0 : a.uc,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new Lw(new Kw(function(l, n) {
                var m = function(p) {
                    if (p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", m, !1);
                            var r = d.join(", ");
                            n(Error("Origin mismatch while establishing channel. Expected " + (1 === d.length ? r : "one of [" + r + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", m, !1), e && p.data.t !== e ? n(Error("Token mismatch while establishing channel. Expected " + e + ", but received " + p.data.t + ".")) : (l(Pw(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", m, !1)
            }))
        },
        Rw = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var gf = void 0;
    var Kf = function(a) {
        return "string" === typeof a
    };
    var Sw = new Vq,
        Tw = new w.Map(Sw.j.H);
    Tw.set("style", {
        ua: 4
    });
    Sw.j = new Rq(Sw.j.j, Sw.j.A, Sw.j.m, Tw);
    var Uw = new w.Map(Sw.j.H);
    Uw.set("class", {
        ua: 1
    });
    Sw.j = new Rq(Sw.j.j, Sw.j.A, Sw.j.m, Uw);
    var Vw = new w.Map(Sw.j.H);
    Vw.set("id", {
        ua: 1
    });
    Sw.j = new Rq(Sw.j.j, Sw.j.A, Sw.j.m, Vw);
    Sw.build();
    var Ww = function(a) {
        T.call(this, a)
    };
    _.R(Ww, T);
    var Xw = function(a) {
        T.call(this, a)
    };
    _.R(Xw, T);
    var ag = function(a) {
        T.call(this, a)
    };
    _.R(ag, T);
    var sf = function(a) {
        T.call(this, a)
    };
    _.R(sf, T);
    var pf = function(a) {
        T.call(this, a)
    };
    _.R(pf, T);
    var Yw = function(a) {
        T.call(this, a)
    };
    _.R(Yw, T);
    var nf = function(a) {
        T.call(this, a, -1, Zw)
    };
    _.R(nf, T);
    nf.prototype.getTagSessionCorrelator = function() {
        return vd(this, 2)
    };
    var Zw = [4],
        vf = [6, 7, 8, 9, 11];
    var kg = function(a) {
        T.call(this, a, -1, $w)
    };
    _.R(kg, T);
    var $w = [3];
    var jg = function(a) {
        T.call(this, a, -1, ax)
    };
    _.R(jg, T);
    var ax = [4];
    var ig = function(a) {
        T.call(this, a, -1, bx)
    };
    _.R(ig, T);
    ig.prototype.getTagSessionCorrelator = function() {
        return vd(this, 1)
    };
    var bx = [2];
    var hg = function(a) {
        T.call(this, a)
    };
    _.R(hg, T);
    var ng = [4];
    _.C = function(a) {
        var b = "gb";
        if (a.gb && a.hasOwnProperty(b)) return a.gb;
        b = new a;
        return a.gb = b
    };
    var cx, Ni, Ri;
    cx = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.H = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.E = function(a) {
        return _.C(cx).m(a.j, a.defaultValue)
    };
    _.Kd = function(a) {
        return _.C(cx).A(a.j, a.defaultValue)
    };
    Ni = function(a) {
        return _.C(cx).H(a.j, a.defaultValue)
    };
    Ri = function(a) {
        return _.C(cx).C(a.j, a.defaultValue)
    };
    var Qk = navigator,
        Rk = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Ok = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Rk(a.toLowerCase())
        },
        Tk = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Uk = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Vk = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Cg = function(a) {
            return !!a && a.top == a
        },
        bl = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Cg(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var dx = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        },
        ex = function(a, b) {
            b = void 0 === b ? window : b;
            var c = dx(b);
            if (!c) return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    var ih = function() {
        this.j = [];
        this.m = -1
    };
    ih.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.u(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    ih.prototype.get = function(a) {
        return !!this.j[a]
    };
    var kh = function(a) {
        -1 === a.m && (a.m = wq(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var od = function(a) {
        T.call(this, a, -1, fx)
    };
    _.R(od, T);
    var pd = function(a, b) {
            Di(a, 1, td, b)
        },
        td = function(a) {
            T.call(this, a)
        };
    _.R(td, T);
    var rd = function(a) {
            var b = new td;
            return ac(b, 1, a, 0)
        },
        qd = function(a, b) {
            return ac(a, 2, b, 0)
        },
        fx = [1];
    var Ad, fo;
    _.gx = function(a, b, c, d) {
        md(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    Ad = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.Wi(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        fo(d, c)
    };
    fo = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.gx(c, a, void 0, b)
    };
    var Ed = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        jx = function() {
            var a = hx;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                Sc: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            ix(a, "TESTCOOKIESENABLED");
            return !0
        };
    Ed.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.ah;
            d = c.kf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Sc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    Ed.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Eq(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var ix = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Sc: 0,
            path: c,
            domain: d
        })
    };
    Ed.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    Ed.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Eq(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) ix(this, b[a])
    };
    var hx = new Ed("undefined" == typeof document ? null : document);
    var kx = null,
        lx = function() {
            if (null === kx) {
                kx = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        kx = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return kx
        };
    var mx, rf;
    _.Gd = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : He()
    };
    _.im = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    mx = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    rf = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(mx("domLoading", a) || Infinity, mx("domInteractive", a) || Infinity);
        return Infinity == b ? Math.max(mx("responseEnd", a), mx("navigationStart", a)) : b
    };
    var nx = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var eg = _.t.performance,
        ox = !!(eg && eg.mark && eg.measure && eg.clearMarks),
        fg = Sg(function() {
            var a;
            if (a = ox) a = lx(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        px = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = fg() || (null != c ? c : Math.random() < a)
        },
        qx = function(a, b, c, d, e, f) {
            a.j && (b = new nx(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    px.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new nx(a, b, _.im() || _.Gd());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        eg && fg() && eg.mark(b);
        return a
    };
    px.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.im() || _.Gd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            eg && fg() && eg.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var rx = function(a, b, c) {
        var d = _.im();
        d && qx(a, b, 9, d, 0, c)
    };
    var mj = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, mj.prototype)
    };
    _.R(mj, Error);
    mj.prototype.name = "PublisherInputError";
    var sx = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, sx.prototype)
    };
    _.R(sx, Error);
    sx.prototype.name = "ServerError";
    var tx = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, tx.prototype)
    };
    _.R(tx, Error);
    tx.prototype.name = "NetworkError";
    var ux = function(a) {
        a = void 0 === a ? !1 : a;
        _.ww.call(this);
        this.I = a;
        this.j = [];
        this.A = [];
        this.l = [];
        this.C = [];
        this.o = []
    };
    _.R(ux, _.ww);
    var vx = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        a.I ? c ? a.C.push(b.promise) : a.l.push(b.promise) : a.A.push({
            fd: c,
            pd: b
        })
    };
    ux.prototype.H = function() {
        this.j.length = 0;
        this.o.length = 0;
        this.A.length = 0;
        this.l.length = 0;
        this.C.length = 0;
        _.ww.prototype.H.call(this)
    };
    _.Oe = function() {
        var a = this;
        this.promise = new w.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var wx = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, wx.prototype);
        this.name = "InputError"
    };
    _.R(wx, Error);
    var xx = function() {
            var a = this;
            this.L = this.A = null;
            this.l = -1;
            this.H = new _.Oe;
            this.m = !1;
            this.H.promise.then(function() {
                -1 !== a.l && (a.L = _.Gd() - a.l)
            }, function() {})
        },
        yx = function() {
            xx.apply(this, arguments)
        };
    _.R(yx, xx);
    Ip.Object.defineProperties(yx.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H.promise
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.L
            }
        }
    });
    var Co = function() {
        yx.apply(this, arguments)
    };
    _.R(Co, yx);
    Co.prototype.j = function(a) {
        this.m || (this.m = !0, this.A = a, this.H.resolve(a))
    };
    var Ax = function(a, b) {
            null == b ? zx(a) : a.j(b)
        },
        zx = function(a) {
            a.m || (a.m = !0, a.A = null, a.H.resolve(null))
        },
        Bx = function(a, b) {
            a.m || (a.m = !0, a.A = null, a.I = b, a.H.reject(b))
        },
        Cx = function(a) {
            xx.call(this);
            this.j = a
        };
    _.R(Cx, xx);
    Ip.Object.defineProperties(Cx.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.I
            }
        }
    });
    var Dx = function(a) {
        Cx.call(this, a);
        this.j = a
    };
    _.R(Dx, Cx);
    Ip.Object.defineProperties(Dx.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.A
            }
        }
    });
    var Ex = function() {
        Cx.apply(this, arguments)
    };
    _.R(Ex, Cx);
    Ip.Object.defineProperties(Ex.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.A
            }
        }
    });
    var Fx = function() {
        Cx.apply(this, arguments)
    };
    _.R(Fx, Cx);
    Ip.Object.defineProperties(Fx.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.A
            }
        }
    });
    var Gx = function() {
        yx.apply(this, arguments)
    };
    _.R(Gx, yx);
    Gx.prototype.notify = function() {
        this.m || (this.m = !0, this.A = null, this.H.resolve(null))
    };
    var Hx = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? !1 : c;
        _.ww.call(this);
        this.id = a;
        this.aa = b;
        this.V = c;
        this.ea = !1;
        this.I = -1;
        this.C = new ux(c);
        _.Qm(this, this.C)
    };
    _.R(Hx, _.ww);
    Hx.prototype.start = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l;
        return _.db(function(n) {
            switch (n.j) {
                case 1:
                    if (a.ea) return n.return();
                    a.ea = !0;
                    n.A = 2;
                    if (a.V) return c = a, eb(n, Hd(a.C.l, a.C.C, a.aa), 7);
                    b = a;
                    return eb(n, Id(a.C.A, a.aa), 6);
                case 6:
                    b.I = n.m;
                    n.j = 5;
                    break;
                case 7:
                    c.I = n.m;
                case 5:
                    if (a.m) {
                        n.j = 8;
                        break
                    }
                    for (var m = 0, p = _.y(a.C.o), r = p.next(); !r.done; r = p.next()) {
                        if (null === r.value.j.A) throw Error("missing input: " + a.id + "/" + m);
                        ++m
                    }
                    if (a.V)
                        for (d = _.Gd(), e = _.y(a.C.j), f = e.next(); !f.done; f = e.next()) g = f.value, g.l = d;
                    else
                        for (h = _.y(a.C.j), f = h.next(); !f.done; f = h.next()) k = f.value, k.l = _.Gd();
                    return eb(n, a.j(), 8);
                case 8:
                    gb(n, 0);
                    break;
                case 2:
                    l = hb(n);
                    if (a.m) return n.return();
                    l instanceof wx ? a.L(l) : l instanceof Error && (a.P(l), a.A(l));
                    n.j = 0
            }
        })
    };
    var W = function(a) {
            var b = new Co;
            a.C.j.push(b);
            return b
        },
        Ix = function(a) {
            var b = new Gx;
            a.C.j.push(b);
            return b
        },
        X = function(a, b) {
            vx(a.C, b);
            b = new Ex(b);
            a.C.o.push(b);
            return b
        },
        Y = function(a, b) {
            vx(a.C, b);
            return new Dx(b)
        },
        Jx = function(a, b) {
            vx(a.C, b, !0);
            return new Dx(b)
        },
        Kx = function(a, b) {
            vx(a.C, b)
        };
    Hx.prototype.L = function() {};
    Hx.prototype.A = function(a) {
        if (this.C.j.length) {
            a = new wx(a.message);
            for (var b = _.y(this.C.j), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.C) {
                    var d = a;
                    c.m = !0;
                    c.I = d;
                    c.H.reject(d)
                }
        }
    };
    var Lx = function(a, b) {
        Hx.call(this, a);
        this.id = a;
        this.M = b
    };
    _.R(Lx, Hx);
    Lx.prototype.P = function(a) {
        this.M(this.id, a)
    };
    var Mx;
    Mx = {
        qg: 0,
        ee: 3,
        ge: 4,
        Ag: 5
    };
    var Nx = Mx.ee,
        Ox = Mx.ge;
    var Px = ku();
    var Qx = function(a) {
            this.methodName = a
        },
        Rx = new Qx(1),
        Sx = new Qx(16),
        Tx = new Qx(15),
        Ux = new Qx(2),
        Vx = new Qx(3),
        Wx = new Qx(5),
        Xx = new Qx(6),
        Yx = new Qx(7),
        Zx = new Qx(8),
        $x = new Qx(14),
        ay = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Nd = function() {
            this.m = function() {};
            this.H = function() {};
            this.A = function() {
                return []
            };
            this.j = function() {
                return []
            }
        },
        by = function(a, b, c) {
            a.m = ay(Rx, b, function() {});
            a.A = function(d) {
                return ay(Ux, b, function() {
                    return []
                })(d, c)
            };
            a.j = function() {
                return ay(Vx, b, function() {
                    return []
                })(c)
            };
            a.H = function(d) {
                ay(Sx, b, function() {})(d, c)
            }
        },
        cy = function(a) {
            _.C(Nd).m(a)
        },
        zp = function(a) {
            _.C(Nd).H(a)
        },
        Ap = function(a) {
            return _.C(Nd).A(a)
        };
    var dy = function() {};
    dy.j = function() {
        throw Error("Must be overridden");
    };
    var Jd = function() {
        this.j = 0
    };
    _.R(Jd, dy);
    Jd.gb = void 0;
    Jd.j = function() {
        return Jd.gb ? Jd.gb : Jd.gb = new Jd
    };
    var ey = function() {
            this.cache = {}
        },
        Rd = function() {
            fy || (gy = _.Kd(fw), hy = _.Kd(ew), fy = new ey);
            return fy
        },
        je = function(a) {
            var b = Q(a, 3);
            if (!b) return 3;
            if (void 0 === Q(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * hy ? 2 : a > b + 36E5 * gy ? 1 : 0
        };
    ey.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            lb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Od(6, a, null == (d = g) ? void 0 : d.message);
            return {
                lb: null,
                success: !1
            }
        }
        if (!c) return {
            lb: null,
            success: !0
        };
        try {
            var e = nd(le, c);
            this.cache[a] = e;
            return {
                lb: e,
                success: !0
            }
        } catch (g) {
            var f;
            Od(5, a, null == (f = g) ? void 0 : f.message);
            return {
                lb: null,
                success: !1
            }
        }
    };
    ey.prototype.set = function(a, b) {
        var c = Q(a, 1);
        try {
            b.setItem("_GESPSK-" + c, a.X())
        } catch (e) {
            var d;
            Od(7, c, null == (d = e) ? void 0 : d.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var fy = null,
        gy = 24,
        hy = 72;
    var Td = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var Xd = function(a, b, c, d) {
        Lx.call(this, 655, d);
        this.Ya = a;
        this.G = b;
        this.J = c;
        this.o = W(this);
        this.D = W(this);
        this.l = _.Kd(Pd)
    };
    _.R(Xd, Lx);
    Xd.prototype.j = function() {
        var a = Rd().get(this.Ya, this.J).lb,
            b = Date.now();
        if (a)
            if (this.l && (aj(a, 8) || (Od(33, this.Ya), x(a, 8, this.l)), aj(a, 7) || (Od(34, this.Ya), x(a, 7, Math.round(Date.now() / 1E3 / 60)))), aj(a, 3) || Od(35, this.Ya), this.l) {
                var c = Qd(a, 8),
                    d, e = null != (d = Q(a, 7)) ? d : b;
                c < this.l && x(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l));
                1 > Qd(a, 8) ? (b = {}, Od(22, this.Ya, null, (b.t = String(e), b.cr = String(c), b.cs = String(je(a)), b)), Sd(a, 104, this.J), zx(this.o), zx(this.D)) : (this.o.j(this.G), this.D.j(a))
            } else this.o.j(this.G), this.D.j(a);
        else this.o.j(this.G), a = this.D, c = a.j, e = ke(new le, this.Ya), d = new Vd, d = x(d, 1, 100), e = vc(e, 10, d), e = x(e, 8, this.l), b = x(e, 3, b), c.call(a, b)
    };
    var Yd = function(a, b, c, d) {
        Lx.call(this, 658, d);
        this.J = c;
        this.l = W(this);
        this.o = W(this);
        this.D = W(this);
        this.G = Y(this, a);
        this.O = Y(this, b)
    };
    _.R(Yd, Lx);
    Yd.prototype.j = function() {
        var a = this;
        if (this.G.value) {
            var b = function(g) {
                    a.l.j({
                        id: Q(g, 1),
                        collectorGeneratedData: Q(g, 2)
                    })
                },
                c = this.G.value,
                d = this.O.value,
                e = Q(d, 1),
                f = je(d);
            switch (f) {
                case 0:
                    Od(24, e);
                    break;
                case 1:
                    Od(25, e);
                    break;
                case 2:
                    Od(26, e);
                    break;
                case 3:
                    Od(9, e);
                    break;
                case 4:
                    Od(23, e)
            }
            switch (f) {
                case 0:
                    b(d);
                    iy(this);
                    break;
                case 1:
                    b(d);
                    this.o.j(c);
                    this.D.j(d);
                    break;
                case 3:
                case 2:
                case 4:
                    x(d, 2, null), Ud(e, d, c, this.J).then(b), iy(this)
            }
        } else zx(this.l), iy(this)
    };
    var iy = function(a) {
        zx(a.o);
        zx(a.D)
    };
    var Zd = function(a, b, c, d) {
        Lx.call(this, 662, d);
        this.D = c;
        this.l = Y(this, a);
        this.o = Y(this, b)
    };
    _.R(Zd, Lx);
    Zd.prototype.j = function() {
        var a = this;
        this.o.value && this.l.value && Wd().then(function() {
            var b = a.o.value;
            Ud(Q(b, 1), b, a.l.value, a.D)
        })
    };
    var $d = function() {
        _.ww.apply(this, arguments);
        this.j = []
    };
    _.R($d, _.ww);
    var D = function(a, b) {
            _.Qm(a, b);
            a.j.push(b)
        },
        ae = function(a) {
            if (a.j.length) {
                a = _.y(a.j);
                for (var b = a.next(); !b.done; b = a.next()) b.value.start()
            }
        };
    $d.prototype.H = function() {
        _.ww.prototype.H.call(this);
        this.j.length = 0
    };
    var he = function(a, b) {
        this.j = b;
        this.H = [];
        this.A = [];
        this.m = [];
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    he.prototype.push = function(a) {
        if (!a && _.E(gw)) Od(39, ""), Sd(new le, 110, this.j);
        else {
            var b = a.id;
            a = a.collectorFunction;
            if ("string" !== typeof b) Od(37, "invalid-id"), Sd(ke(new le, b), 102, this.j);
            else if ("function" !== typeof a) Od(14, b), Sd(ke(new le, b), 105, this.j);
            else {
                b = ce(b, a, this.j, this.C);
                this.H.push(b);
                a = _.y(this.A);
                for (var c = a.next(); !c.done; c = a.next()) b.then(c.value)
            }
        }
    };
    he.prototype.addOnSignalResolveCallback = function(a) {
        this.A.push(a);
        for (var b = _.y(this.H), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    he.prototype.addErrorHandler = function(a) {
        this.m.push(a)
    };
    he.prototype.C = function(a, b) {
        for (var c = _.y(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var ge = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
    };
    var ky, ly;
    _.jy = function(a) {
        var b = ne(a);
        return b ? _.Le(tc(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    };
    ky = function(a, b) {
        return ea(a.document.querySelectorAll(b))
    };
    ly = function(a) {
        var b = [];
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var my = 0,
        ny = Oa(re(tq("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var oy = function() {
            this.j = function() {}
        },
        py = function() {
            var a = _.C(yp).I;
            _.C(oy).j(a)
        };
    var ry = function() {
            var a = void 0,
                b = 2;
            if (void 0 === a) {
                var c = void 0 === c ? _.t : c;
                a = c.ggeac || (c.ggeac = {})
            }
            b = void 0 === b ? 0 : b;
            c = a;
            var d = b;
            d = void 0 === d ? 0 : d;
            by(_.C(Nd), c, d);
            qy(a, b);
            b = a;
            _.C(oy).j = ay($x, b);
            _.C(cx).j()
        },
        qy = function(a, b) {
            var c = _.C(cx);
            c.m = function(d, e) {
                return ay(Wx, a, function() {
                    return !1
                })(d, e, b)
            };
            c.A = function(d, e) {
                return ay(Xx, a, function() {
                    return 0
                })(d, e, b)
            };
            c.H = function(d, e) {
                return ay(Yx, a, function() {
                    return ""
                })(d, e, b)
            };
            c.C = function(d, e) {
                return ay(Zx, a, function() {
                    return []
                })(d, e, b)
            };
            c.j = function() {
                ay(Tx, a)(b)
            }
        };
    var ug = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Ig(b.innerWidth, b.innerHeight)).round() : _.Xt(b || window).round()
            } catch (d) {
                return new _.Ig(-12245933, -12245933)
            }
        },
        sy = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Jl = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || sy(a);
            return new _.Fg(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Vg = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var ty = function(a) {
        T.call(this, a)
    };
    _.R(ty, T);
    var Bd = function(a) {
        return J(a, 5)
    };
    var uy = function(a) {
            this.j = a;
            this.m = 0
        },
        ql = function(a, b) {
            if (0 === a.m) {
                if (ol(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    Bd(b) && Dd(c) && (new Ed(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === Fd("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        Bd(b) && Dd(d) && ix(new Ed(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        ol = function(a, b, c) {
            return c ? Fd(b, c, a.j) : null
        },
        vy = function(a, b, c, d) {
            if (d) {
                var e = {
                    Sc: Q(c, 2) - Date.now() / 1E3,
                    path: Q(c, 3),
                    domain: Q(c, 4),
                    kf: !1
                };
                a = a.j;
                Bd(d) && Dd(a) && (new Ed(a.document)).set(b, Q(c, 1), e)
            }
        },
        wy = function(a, b, c) {
            if (c && Fd(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.y(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, Bd(c) && Dd(f) && ix(new Ed(f.document), b, "/", e.value)
            }
        };
    var xy = {},
        yy = (xy[3] = Oa(re(tq("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), xy),
        zy = {},
        Ay = (zy[3] = Oa(re(tq("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"))), zy);
    var By = function(a) {
            this.j = a;
            this.m = Hk()
        },
        Cy = function(a) {
            var b = {};
            _.vq(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var Dy = S(["https://adservice.google.com/adsid/integrator.", ""]),
        Ey = S(["https://adservice.google.ad/adsid/integrator.", ""]),
        Fy = S(["https://adservice.google.ae/adsid/integrator.", ""]),
        Gy = S(["https://adservice.google.com.af/adsid/integrator.", ""]),
        Hy = S(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        Iy = S(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        Jy = S(["https://adservice.google.al/adsid/integrator.", ""]),
        Ky = S(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        Ly = S(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        My = S(["https://adservice.google.as/adsid/integrator.", ""]),
        Ny = S(["https://adservice.google.at/adsid/integrator.", ""]),
        Oy = S(["https://adservice.google.com.au/adsid/integrator.", ""]),
        Py = S(["https://adservice.google.az/adsid/integrator.", ""]),
        Qy = S(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        Ry = S(["https://adservice.google.be/adsid/integrator.", ""]),
        Sy = S(["https://adservice.google.bf/adsid/integrator.", ""]),
        Ty = S(["https://adservice.google.bg/adsid/integrator.", ""]),
        Uy = S(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        Vy = S(["https://adservice.google.bi/adsid/integrator.", ""]),
        Wy = S(["https://adservice.google.bj/adsid/integrator.", ""]),
        Xy = S(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        Yy = S(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        Zy = S(["https://adservice.google.com.br/adsid/integrator.", ""]),
        $y = S(["https://adservice.google.bs/adsid/integrator.", ""]),
        az = S(["https://adservice.google.bt/adsid/integrator.", ""]),
        bz = S(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        cz = S(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        dz = S(["https://adservice.google.ca/adsid/integrator.", ""]),
        ez = S(["https://adservice.google.cd/adsid/integrator.", ""]),
        fz = S(["https://adservice.google.cf/adsid/integrator.", ""]),
        gz = S(["https://adservice.google.cg/adsid/integrator.", ""]),
        hz = S(["https://adservice.google.ch/adsid/integrator.", ""]),
        iz = S(["https://adservice.google.ci/adsid/integrator.", ""]),
        jz = S(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        kz = S(["https://adservice.google.cl/adsid/integrator.", ""]),
        lz = S(["https://adservice.google.cm/adsid/integrator.", ""]),
        mz = S(["https://adservice.google.com.co/adsid/integrator.", ""]),
        nz = S(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        oz = S(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        pz = S(["https://adservice.google.cv/adsid/integrator.", ""]),
        qz = S(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        rz = S(["https://adservice.google.cz/adsid/integrator.", ""]),
        sz = S(["https://adservice.google.de/adsid/integrator.", ""]),
        tz = S(["https://adservice.google.dj/adsid/integrator.", ""]),
        uz = S(["https://adservice.google.dk/adsid/integrator.", ""]),
        vz = S(["https://adservice.google.dm/adsid/integrator.", ""]),
        wz = S(["https://adservice.google.dz/adsid/integrator.", ""]),
        xz = S(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        yz = S(["https://adservice.google.ee/adsid/integrator.", ""]),
        zz = S(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        Az = S(["https://adservice.google.es/adsid/integrator.", ""]),
        Bz = S(["https://adservice.google.com.et/adsid/integrator.", ""]),
        Cz = S(["https://adservice.google.fi/adsid/integrator.", ""]),
        Dz = S(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        Ez = S(["https://adservice.google.fm/adsid/integrator.", ""]),
        Fz = S(["https://adservice.google.fr/adsid/integrator.", ""]),
        Gz = S(["https://adservice.google.ga/adsid/integrator.", ""]),
        Hz = S(["https://adservice.google.ge/adsid/integrator.", ""]),
        Iz = S(["https://adservice.google.gg/adsid/integrator.", ""]),
        Jz = S(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        Kz = S(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        Lz = S(["https://adservice.google.gl/adsid/integrator.", ""]),
        Mz = S(["https://adservice.google.gm/adsid/integrator.", ""]),
        Nz = S(["https://adservice.google.gr/adsid/integrator.", ""]),
        Oz = S(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        Pz = S(["https://adservice.google.gy/adsid/integrator.", ""]),
        Qz = S(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        Rz = S(["https://adservice.google.hn/adsid/integrator.", ""]),
        Sz = S(["https://adservice.google.hr/adsid/integrator.", ""]),
        Tz = S(["https://adservice.google.ht/adsid/integrator.", ""]),
        Uz = S(["https://adservice.google.hu/adsid/integrator.", ""]),
        Vz = S(["https://adservice.google.co.id/adsid/integrator.", ""]),
        Wz = S(["https://adservice.google.ie/adsid/integrator.", ""]),
        Xz = S(["https://adservice.google.co.il/adsid/integrator.", ""]),
        Yz = S(["https://adservice.google.im/adsid/integrator.", ""]),
        Zz = S(["https://adservice.google.co.in/adsid/integrator.", ""]),
        $z = S(["https://adservice.google.iq/adsid/integrator.", ""]),
        aA = S(["https://adservice.google.is/adsid/integrator.", ""]),
        bA = S(["https://adservice.google.it/adsid/integrator.", ""]),
        cA = S(["https://adservice.google.je/adsid/integrator.", ""]),
        dA = S(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        eA = S(["https://adservice.google.jo/adsid/integrator.", ""]),
        fA = S(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        gA = S(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        hA = S(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        iA = S(["https://adservice.google.ki/adsid/integrator.", ""]),
        jA = S(["https://adservice.google.kg/adsid/integrator.", ""]),
        kA = S(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        lA = S(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        mA = S(["https://adservice.google.kz/adsid/integrator.", ""]),
        nA = S(["https://adservice.google.la/adsid/integrator.", ""]),
        oA = S(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        pA = S(["https://adservice.google.li/adsid/integrator.", ""]),
        qA = S(["https://adservice.google.lk/adsid/integrator.", ""]),
        rA = S(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        sA = S(["https://adservice.google.lt/adsid/integrator.", ""]),
        tA = S(["https://adservice.google.lu/adsid/integrator.", ""]),
        uA = S(["https://adservice.google.lv/adsid/integrator.", ""]),
        vA = S(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        wA = S(["https://adservice.google.md/adsid/integrator.", ""]),
        xA = S(["https://adservice.google.me/adsid/integrator.", ""]),
        yA = S(["https://adservice.google.mg/adsid/integrator.", ""]),
        zA = S(["https://adservice.google.mk/adsid/integrator.", ""]),
        AA = S(["https://adservice.google.ml/adsid/integrator.", ""]),
        BA = S(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        CA = S(["https://adservice.google.mn/adsid/integrator.", ""]),
        DA = S(["https://adservice.google.ms/adsid/integrator.", ""]),
        EA = S(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        FA = S(["https://adservice.google.mu/adsid/integrator.", ""]),
        GA = S(["https://adservice.google.mv/adsid/integrator.", ""]),
        HA = S(["https://adservice.google.mw/adsid/integrator.", ""]),
        IA = S(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        JA = S(["https://adservice.google.com.my/adsid/integrator.", ""]),
        KA = S(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        LA = S(["https://adservice.google.com.na/adsid/integrator.", ""]),
        MA = S(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        NA = S(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        OA = S(["https://adservice.google.ne/adsid/integrator.", ""]),
        PA = S(["https://adservice.google.nl/adsid/integrator.", ""]),
        QA = S(["https://adservice.google.no/adsid/integrator.", ""]),
        RA = S(["https://adservice.google.com.np/adsid/integrator.", ""]),
        SA = S(["https://adservice.google.nr/adsid/integrator.", ""]),
        TA = S(["https://adservice.google.nu/adsid/integrator.", ""]),
        UA = S(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        VA = S(["https://adservice.google.com.om/adsid/integrator.", ""]),
        WA = S(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        XA = S(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        YA = S(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        ZA = S(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        $A = S(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        aB = S(["https://adservice.google.pl/adsid/integrator.", ""]),
        bB = S(["https://adservice.google.pn/adsid/integrator.", ""]),
        cB = S(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        dB = S(["https://adservice.google.ps/adsid/integrator.", ""]),
        eB = S(["https://adservice.google.pt/adsid/integrator.", ""]),
        fB = S(["https://adservice.google.com.py/adsid/integrator.", ""]),
        gB = S(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        hB = S(["https://adservice.google.ro/adsid/integrator.", ""]),
        iB = S(["https://adservice.google.ru/adsid/integrator.", ""]),
        jB = S(["https://adservice.google.rw/adsid/integrator.", ""]),
        kB = S(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        lB = S(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        mB = S(["https://adservice.google.sc/adsid/integrator.", ""]),
        nB = S(["https://adservice.google.se/adsid/integrator.", ""]),
        oB = S(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        pB = S(["https://adservice.google.sh/adsid/integrator.", ""]),
        qB = S(["https://adservice.google.si/adsid/integrator.", ""]),
        rB = S(["https://adservice.google.sk/adsid/integrator.", ""]),
        sB = S(["https://adservice.google.sn/adsid/integrator.", ""]),
        tB = S(["https://adservice.google.so/adsid/integrator.", ""]),
        uB = S(["https://adservice.google.sm/adsid/integrator.", ""]),
        vB = S(["https://adservice.google.sr/adsid/integrator.", ""]),
        wB = S(["https://adservice.google.st/adsid/integrator.", ""]),
        xB = S(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        yB = S(["https://adservice.google.td/adsid/integrator.", ""]),
        zB = S(["https://adservice.google.tg/adsid/integrator.", ""]),
        AB = S(["https://adservice.google.co.th/adsid/integrator.", ""]),
        BB = S(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        CB = S(["https://adservice.google.tl/adsid/integrator.", ""]),
        DB = S(["https://adservice.google.tm/adsid/integrator.", ""]),
        EB = S(["https://adservice.google.tn/adsid/integrator.", ""]),
        FB = S(["https://adservice.google.to/adsid/integrator.", ""]),
        GB = S(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        HB = S(["https://adservice.google.tt/adsid/integrator.", ""]),
        IB = S(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        JB = S(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        KB = S(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        LB = S(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        MB = S(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        NB = S(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        OB = S(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        PB = S(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        QB = S(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        RB = S(["https://adservice.google.vg/adsid/integrator.", ""]),
        SB = S(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        TB = S(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        UB = S(["https://adservice.google.vu/adsid/integrator.", ""]),
        VB = S(["https://adservice.google.ws/adsid/integrator.", ""]),
        WB = S(["https://adservice.google.rs/adsid/integrator.", ""]),
        XB = S(["https://adservice.google.co.za/adsid/integrator.", ""]),
        YB = S(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        ZB = S(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        $B = S(["https://adservice.google.cat/adsid/integrator.", ""]),
        aC = new w.Map([
            [".google.com", function(a) {
                return v(Dy, a)
            }],
            [".google.ad", function(a) {
                return v(Ey, a)
            }],
            [".google.ae", function(a) {
                return v(Fy, a)
            }],
            [".google.com.af", function(a) {
                return v(Gy, a)
            }],
            [".google.com.ag", function(a) {
                return v(Hy, a)
            }],
            [".google.com.ai", function(a) {
                return v(Iy, a)
            }],
            [".google.al", function(a) {
                return v(Jy, a)
            }],
            [".google.co.ao", function(a) {
                return v(Ky, a)
            }],
            [".google.com.ar", function(a) {
                return v(Ly, a)
            }],
            [".google.as", function(a) {
                return v(My, a)
            }],
            [".google.at", function(a) {
                return v(Ny, a)
            }],
            [".google.com.au", function(a) {
                return v(Oy, a)
            }],
            [".google.az", function(a) {
                return v(Py, a)
            }],
            [".google.com.bd", function(a) {
                return v(Qy, a)
            }],
            [".google.be", function(a) {
                return v(Ry, a)
            }],
            [".google.bf", function(a) {
                return v(Sy, a)
            }],
            [".google.bg", function(a) {
                return v(Ty, a)
            }],
            [".google.com.bh", function(a) {
                return v(Uy, a)
            }],
            [".google.bi", function(a) {
                return v(Vy, a)
            }],
            [".google.bj", function(a) {
                return v(Wy, a)
            }],
            [".google.com.bn", function(a) {
                return v(Xy, a)
            }],
            [".google.com.bo", function(a) {
                return v(Yy, a)
            }],
            [".google.com.br", function(a) {
                return v(Zy, a)
            }],
            [".google.bs", function(a) {
                return v($y, a)
            }],
            [".google.bt", function(a) {
                return v(az, a)
            }],
            [".google.co.bw", function(a) {
                return v(bz, a)
            }],
            [".google.com.bz", function(a) {
                return v(cz, a)
            }],
            [".google.ca", function(a) {
                return v(dz, a)
            }],
            [".google.cd", function(a) {
                return v(ez, a)
            }],
            [".google.cf", function(a) {
                return v(fz, a)
            }],
            [".google.cg", function(a) {
                return v(gz, a)
            }],
            [".google.ch", function(a) {
                return v(hz, a)
            }],
            [".google.ci", function(a) {
                return v(iz, a)
            }],
            [".google.co.ck", function(a) {
                return v(jz, a)
            }],
            [".google.cl", function(a) {
                return v(kz, a)
            }],
            [".google.cm", function(a) {
                return v(lz, a)
            }],
            [".google.com.co", function(a) {
                return v(mz, a)
            }],
            [".google.co.cr", function(a) {
                return v(nz, a)
            }],
            [".google.com.cu", function(a) {
                return v(oz, a)
            }],
            [".google.cv", function(a) {
                return v(pz, a)
            }],
            [".google.com.cy", function(a) {
                return v(qz, a)
            }],
            [".google.cz", function(a) {
                return v(rz, a)
            }],
            [".google.de", function(a) {
                return v(sz, a)
            }],
            [".google.dj", function(a) {
                return v(tz, a)
            }],
            [".google.dk", function(a) {
                return v(uz, a)
            }],
            [".google.dm", function(a) {
                return v(vz, a)
            }],
            [".google.dz", function(a) {
                return v(wz, a)
            }],
            [".google.com.ec", function(a) {
                return v(xz, a)
            }],
            [".google.ee", function(a) {
                return v(yz, a)
            }],
            [".google.com.eg", function(a) {
                return v(zz, a)
            }],
            [".google.es", function(a) {
                return v(Az, a)
            }],
            [".google.com.et", function(a) {
                return v(Bz, a)
            }],
            [".google.fi", function(a) {
                return v(Cz, a)
            }],
            [".google.com.fj", function(a) {
                return v(Dz, a)
            }],
            [".google.fm", function(a) {
                return v(Ez, a)
            }],
            [".google.fr", function(a) {
                return v(Fz, a)
            }],
            [".google.ga", function(a) {
                return v(Gz, a)
            }],
            [".google.ge", function(a) {
                return v(Hz, a)
            }],
            [".google.gg", function(a) {
                return v(Iz, a)
            }],
            [".google.com.gh", function(a) {
                return v(Jz, a)
            }],
            [".google.com.gi", function(a) {
                return v(Kz, a)
            }],
            [".google.gl", function(a) {
                return v(Lz, a)
            }],
            [".google.gm", function(a) {
                return v(Mz, a)
            }],
            [".google.gr", function(a) {
                return v(Nz, a)
            }],
            [".google.com.gt", function(a) {
                return v(Oz, a)
            }],
            [".google.gy", function(a) {
                return v(Pz, a)
            }],
            [".google.com.hk", function(a) {
                return v(Qz, a)
            }],
            [".google.hn", function(a) {
                return v(Rz, a)
            }],
            [".google.hr", function(a) {
                return v(Sz, a)
            }],
            [".google.ht", function(a) {
                return v(Tz, a)
            }],
            [".google.hu", function(a) {
                return v(Uz, a)
            }],
            [".google.co.id", function(a) {
                return v(Vz, a)
            }],
            [".google.ie", function(a) {
                return v(Wz, a)
            }],
            [".google.co.il", function(a) {
                return v(Xz, a)
            }],
            [".google.im", function(a) {
                return v(Yz, a)
            }],
            [".google.co.in", function(a) {
                return v(Zz, a)
            }],
            [".google.iq", function(a) {
                return v($z, a)
            }],
            [".google.is", function(a) {
                return v(aA, a)
            }],
            [".google.it", function(a) {
                return v(bA, a)
            }],
            [".google.je", function(a) {
                return v(cA, a)
            }],
            [".google.com.jm", function(a) {
                return v(dA, a)
            }],
            [".google.jo", function(a) {
                return v(eA, a)
            }],
            [".google.co.jp", function(a) {
                return v(fA, a)
            }],
            [".google.co.ke", function(a) {
                return v(gA, a)
            }],
            [".google.com.kh", function(a) {
                return v(hA, a)
            }],
            [".google.ki", function(a) {
                return v(iA, a)
            }],
            [".google.kg", function(a) {
                return v(jA, a)
            }],
            [".google.co.kr", function(a) {
                return v(kA, a)
            }],
            [".google.com.kw", function(a) {
                return v(lA, a)
            }],
            [".google.kz", function(a) {
                return v(mA, a)
            }],
            [".google.la", function(a) {
                return v(nA, a)
            }],
            [".google.com.lb", function(a) {
                return v(oA, a)
            }],
            [".google.li", function(a) {
                return v(pA, a)
            }],
            [".google.lk", function(a) {
                return v(qA, a)
            }],
            [".google.co.ls", function(a) {
                return v(rA, a)
            }],
            [".google.lt", function(a) {
                return v(sA, a)
            }],
            [".google.lu", function(a) {
                return v(tA, a)
            }],
            [".google.lv", function(a) {
                return v(uA, a)
            }],
            [".google.com.ly", function(a) {
                return v(vA, a)
            }],
            [".google.md", function(a) {
                return v(wA, a)
            }],
            [".google.me", function(a) {
                return v(xA, a)
            }],
            [".google.mg", function(a) {
                return v(yA, a)
            }],
            [".google.mk", function(a) {
                return v(zA, a)
            }],
            [".google.ml", function(a) {
                return v(AA, a)
            }],
            [".google.com.mm", function(a) {
                return v(BA, a)
            }],
            [".google.mn", function(a) {
                return v(CA, a)
            }],
            [".google.ms", function(a) {
                return v(DA, a)
            }],
            [".google.com.mt", function(a) {
                return v(EA, a)
            }],
            [".google.mu", function(a) {
                return v(FA, a)
            }],
            [".google.mv", function(a) {
                return v(GA, a)
            }],
            [".google.mw", function(a) {
                return v(HA, a)
            }],
            [".google.com.mx", function(a) {
                return v(IA, a)
            }],
            [".google.com.my", function(a) {
                return v(JA, a)
            }],
            [".google.co.mz", function(a) {
                return v(KA, a)
            }],
            [".google.com.na", function(a) {
                return v(LA, a)
            }],
            [".google.com.ng", function(a) {
                return v(MA, a)
            }],
            [".google.com.ni", function(a) {
                return v(NA, a)
            }],
            [".google.ne", function(a) {
                return v(OA, a)
            }],
            [".google.nl", function(a) {
                return v(PA, a)
            }],
            [".google.no", function(a) {
                return v(QA, a)
            }],
            [".google.com.np", function(a) {
                return v(RA, a)
            }],
            [".google.nr", function(a) {
                return v(SA, a)
            }],
            [".google.nu", function(a) {
                return v(TA, a)
            }],
            [".google.co.nz", function(a) {
                return v(UA, a)
            }],
            [".google.com.om", function(a) {
                return v(VA, a)
            }],
            [".google.com.pa", function(a) {
                return v(WA, a)
            }],
            [".google.com.pe", function(a) {
                return v(XA, a)
            }],
            [".google.com.pg", function(a) {
                return v(YA, a)
            }],
            [".google.com.ph", function(a) {
                return v(ZA, a)
            }],
            [".google.com.pk", function(a) {
                return v($A, a)
            }],
            [".google.pl", function(a) {
                return v(aB, a)
            }],
            [".google.pn", function(a) {
                return v(bB, a)
            }],
            [".google.com.pr", function(a) {
                return v(cB, a)
            }],
            [".google.ps", function(a) {
                return v(dB, a)
            }],
            [".google.pt", function(a) {
                return v(eB, a)
            }],
            [".google.com.py", function(a) {
                return v(fB, a)
            }],
            [".google.com.qa", function(a) {
                return v(gB, a)
            }],
            [".google.ro", function(a) {
                return v(hB, a)
            }],
            [".google.ru", function(a) {
                return v(iB, a)
            }],
            [".google.rw", function(a) {
                return v(jB, a)
            }],
            [".google.com.sa", function(a) {
                return v(kB, a)
            }],
            [".google.com.sb", function(a) {
                return v(lB, a)
            }],
            [".google.sc", function(a) {
                return v(mB, a)
            }],
            [".google.se", function(a) {
                return v(nB, a)
            }],
            [".google.com.sg", function(a) {
                return v(oB, a)
            }],
            [".google.sh", function(a) {
                return v(pB, a)
            }],
            [".google.si", function(a) {
                return v(qB, a)
            }],
            [".google.sk", function(a) {
                return v(rB, a)
            }],
            [".google.sn", function(a) {
                return v(sB, a)
            }],
            [".google.so", function(a) {
                return v(tB, a)
            }],
            [".google.sm", function(a) {
                return v(uB, a)
            }],
            [".google.sr", function(a) {
                return v(vB, a)
            }],
            [".google.st", function(a) {
                return v(wB, a)
            }],
            [".google.com.sv", function(a) {
                return v(xB, a)
            }],
            [".google.td", function(a) {
                return v(yB, a)
            }],
            [".google.tg", function(a) {
                return v(zB, a)
            }],
            [".google.co.th", function(a) {
                return v(AB, a)
            }],
            [".google.com.tj", function(a) {
                return v(BB, a)
            }],
            [".google.tl", function(a) {
                return v(CB, a)
            }],
            [".google.tm", function(a) {
                return v(DB, a)
            }],
            [".google.tn", function(a) {
                return v(EB, a)
            }],
            [".google.to", function(a) {
                return v(FB, a)
            }],
            [".google.com.tr", function(a) {
                return v(GB, a)
            }],
            [".google.tt", function(a) {
                return v(HB, a)
            }],
            [".google.com.tw", function(a) {
                return v(IB, a)
            }],
            [".google.co.tz", function(a) {
                return v(JB, a)
            }],
            [".google.com.ua", function(a) {
                return v(KB, a)
            }],
            [".google.co.ug", function(a) {
                return v(LB, a)
            }],
            [".google.co.uk", function(a) {
                return v(MB, a)
            }],
            [".google.com.uy", function(a) {
                return v(NB, a)
            }],
            [".google.co.uz", function(a) {
                return v(OB, a)
            }],
            [".google.com.vc", function(a) {
                return v(PB, a)
            }],
            [".google.co.ve", function(a) {
                return v(QB, a)
            }],
            [".google.vg", function(a) {
                return v(RB, a)
            }],
            [".google.co.vi", function(a) {
                return v(SB, a)
            }],
            [".google.com.vn", function(a) {
                return v(TB, a)
            }],
            [".google.vu", function(a) {
                return v(UB, a)
            }],
            [".google.ws", function(a) {
                return v(VB, a)
            }],
            [".google.rs", function(a) {
                return v(WB, a)
            }],
            [".google.co.za", function(a) {
                return v(XB, a)
            }],
            [".google.co.zm", function(a) {
                return v(YB, a)
            }],
            [".google.co.zw", function(a) {
                return v(ZB, a)
            }],
            [".google.cat", function(a) {
                return v($B, a)
            }]
        ].map(function(a) {
            var b = _.y(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var bC = function(a, b, c) {
        var d = _.jd("LINK", a);
        try {
            if (d.rel = "preload", Ba("preload", "stylesheet")) {
                d.href = Pa(b).toString();
                var e = Lt('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else {
                if (b instanceof Yc) var f = Pa(b).toString();
                else {
                    if (b instanceof _.te) var g = _.ue(b);
                    else {
                        if (b instanceof _.te) var h = b;
                        else b = "object" == typeof b && b.Oa ? b.Ga() : String(b), ve.test(b) || (b = "about:invalid#zClosurez"), h = new _.te(b, _.we);
                        g = _.ue(h)
                    }
                    f = g
                }
                d.href = f
            }
        } catch (k) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (k) {}
    };
    var Fe = _.t,
        cC = function(a) {
            var b = new w.Map([
                ["domain", _.t.location.hostname]
            ]);
            Ge[3] >= He() && b.set("adsid", Ge[1]);
            return Qa(aC.get(a).js, b)
        },
        Ge, dC, Ee = function() {
            Fe = _.t;
            Ge = Fe.googleToken = Fe.googleToken || {};
            var a = He();
            Ge[1] && Ge[3] > a && 0 < Ge[2] || (Ge[1] = "", Ge[2] = -1, Ge[3] = -1, Ge[4] = "", Ge[6] = "");
            dC = Fe.googleIMState = Fe.googleIMState || {};
            aC.has(dC[1]) || (dC[1] = ".google.com");
            Array.isArray(dC[5]) || (dC[5] = []);
            "boolean" !== typeof dC[6] && (dC[6] = !1);
            Array.isArray(dC[7]) || (dC[7] = []);
            "number" !== typeof dC[8] && (dC[8] = 0)
        },
        eC = function(a) {
            Ee();
            aC.has(a) && (dC[1] = a)
        },
        Ie = {
            Nc: function() {
                return 0 < dC[8]
            },
            af: function() {
                dC[8]++
            },
            bf: function() {
                0 < dC[8] && dC[8]--
            },
            cf: function() {
                dC[8] = 0
            },
            fh: function() {
                return !1
            },
            vd: function() {
                return dC[5]
            },
            kd: function(a) {
                try {
                    a()
                } catch (b) {
                    _.t.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Pd: function() {
                if (!Ie.Nc()) {
                    var a = _.t.document,
                        b = function(e) {
                            e = cC(e);
                            a: {
                                try {
                                    var f = Lt("script[nonce]");
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            bC(a, e.toString(), f);
                            f = _.jd("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.t.processGoogleToken({}, 2)
                            };
                            Ya(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Ie.af()
                            } catch (g) {}
                        },
                        c = dC[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.t.setTimeout(function() {
                        return _.t.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        fC = function(a) {
            _.t.processGoogleToken = _.t.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                Ee();
                1 == c ? Ie.cf() : Ie.bf();
                var k = Fe.googleToken = Fe.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Ie.Nc() && (!(Ge[3] >= He()) || "NT" == Ge[1]);
                var n = !(Ge[3] >= He()) && 0 != c;
                if (l || e || n) e = He(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.gx(_.t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Ee();
                if (l || !Ie.Nc()) {
                    c = Ie.vd();
                    for (b = 0; b < c.length; b++) Ie.kd(c[b]);
                    c.length = 0
                }
            };
            Je(a)
        };
    var uo = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.o = b.rootMargin ? Ke(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = tc(this.o, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.L = Me(b.threshold);
            this.I = a;
            this.j = [];
            this.H = [];
            this.C = !1;
            this.m = null;
            this.A = Yq(this.l, 100, this)
        },
        gC = function(a) {
            if (a.root) var b = Ne(a.root);
            else {
                var c = _.Xt(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = tc(a.o, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        hC = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Ze(a.L, function(f) {
                return f < d != f < e
            })
        };
    uo.prototype.l = function() {
        var a = this,
            b = gC(this);
        _.vq(this.j, function(c) {
            var d = c.target,
                e = Ne(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                n = h - l,
                m = k - g;
            g = 0 <= n && 0 <= m ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: n,
                height: m
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            hC(a, c.ma, d) && a.H.push(d);
            c.ma = d
        });
        this.H.length && this.I(iC(this), this)
    };
    uo.prototype.observe = function(a) {
        _.Ze(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            ma: null
        }), this.l(), this.C || (this.C = !0, _.bb(_.t, "scroll", this.A), _.bb(_.t, "resize", this.A), _.t.MutationObserver && !this.m && (this.m = new MutationObserver(this.A), this.m.observe(_.t.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    uo.prototype.unobserve = function(a) {
        this.j = _.Le(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    uo.prototype.disconnect = function() {
        this.C = !1;
        this.j.length = 0;
        _.ld(_.t, "scroll", this.A);
        _.ld(_.t, "resize", this.A);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var iC = function(a) {
        var b = [].concat(_.ad(a.H));
        a.H.length = 0;
        return b
    };
    var jC = function(a, b, c, d, e, f) {
        _.ww.call(this);
        this.Fa = a;
        this.status = 1;
        this.C = b;
        this.A = c;
        this.G = d;
        this.Ib = !!e;
        this.l = Math.random();
        this.o = {};
        this.j = null;
        this.L = (0, _.nq)(this.P, this);
        this.I = f
    };
    _.R(jC, _.ww);
    jC.prototype.P = function(a) {
        if (!("*" !== this.A && a.origin !== this.A || !this.Ib && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ha(b) && (a = b.i, b.c === this.Fa && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, kC(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ha(b)) && this.o.hasOwnProperty(a)) this.o[a](b)
            }
        }
    };
    var kC = function(a) {
        var b = {};
        b.c = a.Fa;
        b.i = a.l;
        a.I && (b.e = a.I);
        a.C.postMessage(JSON.stringify(b), a.A)
    };
    jC.prototype.D = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && kC(this)
            } catch (a) {}
            window.setTimeout((0, _.nq)(this.D, this), 50)
        }
    };
    jC.prototype.connect = function(a) {
        a && (this.j = a);
        _.bb(window, "message", this.L);
        this.G && this.D()
    };
    var lC = function(a, b, c) {
        a.o[b] = c
    };
    jC.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Fa;
        c.i = this.l;
        c.s = a;
        c.p = b;
        try {
            this.C.postMessage(JSON.stringify(c), this.A)
        } catch (d) {}
    };
    jC.prototype.H = function() {
        this.status = 3;
        _.ld(window, "message", this.L);
        _.ww.prototype.H.call(this)
    };
    var kl = new w.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        ll = new w.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var mC = function(a) {
        T.call(this, a)
    };
    _.R(mC, T);
    var nC = function(a) {
        T.call(this, a)
    };
    _.R(nC, T);
    var oC = function(a) {
        T.call(this, a)
    };
    _.R(oC, T);
    Oa(re(tq("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var pC = function() {
            return 0 != tl(document)
        },
        tl = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        qC = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        rC = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        sC = function(a, b) {
            if (3 == tl(b)) return !1;
            a();
            return !0
        },
        tC = function(a, b) {
            if (!sC(a, b)) {
                var c = !1,
                    d = qC(b),
                    e = function() {
                        !c && sC(a, b) && (c = !0, _.ld(b, d, e))
                    };
                d && _.bb(b, d, e)
            }
        };
    var bo = function(a, b) {
            this.j = a;
            this.A = b;
            this.m = {}
        },
        co = function(a) {
            Xn() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, Zq), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = Xn(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) {
                            var k;
                            null == (k = g.gmaSdk) || k.reportTouchEvent(JSON.stringify(_.u(Object, "assign").call(Object, {}, h, {
                                type: 1,
                                force: f
                            })))
                        } else {
                            var l;
                            null == g || null == (l = g.webkit) || l.messageHandlers.reportGmaTouchEvent.postMessage(h)
                        }
                    } catch (n) {
                        a.A("paw_sigs", {
                            msg: "reportTouchError",
                            err: n instanceof Error ? n.message : "nonError"
                        })
                    }
                })()
            }, Zq))
        },
        Yn = function(a, b, c, d, e) {
            var f = 200,
                g = Qn;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * xd())),
                k = 0,
                l = function(n) {
                    try {
                        var m = "object" === typeof n.data ? n.data : JSON.parse(n.data);
                        h === m.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), m.signal ? c(m.signal) : m.error && d(m.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == n.data ? "null" : 500 < n.data.length ? n.data.substring(0, 500) : n.data
                        })
                    }
                };
            window.addEventListener("message", function(n) {
                e(903, function() {
                    l(n)
                })()
            });
            a.postMessage(_.u(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        Xn = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var vC, uC;
    vC = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new uC;
        this.sideRailProcessedFixedElements = new w.Set;
        this.sideRailAvailableSpace = new w.Map
    };
    _.Gj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new w.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new w.Map)) : a.google_reactive_ads_global_state = new vC;
        return a.google_reactive_ads_global_state
    };
    uC = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var yC;
    _.wC = function(a) {
        this.j = _.Gj(a).floatingAdsStacking
    };
    _.xC = function(a) {
        a = _.hu(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    yC = function(a) {
        var b = _.xC(a);
        _.vq(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.zC = function(a) {
        this.m = a;
        this.j = null
    };
    _.AC = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            yC(b);
            a.j = c
        }
    };
    _.BC = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            yC(b);
            a.j = null
        }
    };
    var Hj, vj, yj;
    Hj = 728 * 1.38;
    _.Jj = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.CC = function(a) {
        var b = _.xj(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    vj = function(a, b) {
        return (a = _.xj(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    yj = function(a) {
        return (a = _.CC(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.xj = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.DC = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var Kj = function(a, b, c, d, e) {
            for (var f = [], g = 0; g < e; g++)
                for (var h = 0; h < b; h++) {
                    var k = f,
                        l = b - 1,
                        n = e - 1;
                    k.push.call(k, {
                        x: (0 == l ? 0 : h / l) * a,
                        y: c + (0 == n ? 0 : g / n) * (d - c)
                    })
                }
            return f
        },
        Lj = 90 * 1.38;
    var EC;
    _.FC = function(a, b) {
        if (!a.body) return null;
        var c = new EC;
        c.apply(a, b);
        return function() {
            _.Mu(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.A,
                position: c.H,
                top: c.C
            });
            b.scrollTo(0, c.m)
        }
    };
    EC = function() {
        this.j = this.C = this.H = this.A = null;
        this.m = 0
    };
    EC.prototype.apply = function(a, b) {
        this.A = a.body.style.overflow;
        this.H = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.DC(b);
        _.Mu(a.body, "top", -this.m + "px")
    };
    _.Aj = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : $e(a, b)
    };
    _.zj = function(a) {
        return !!a && 1 > a.length
    };
    var GC = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.ww.call(this);
        this.A = a;
        this.o = b;
        this.j = null;
        this.l = {};
        this.I = 0;
        this.C = null
    };
    _.R(GC, _.ww);
    GC.prototype.H = function() {
        this.l = {};
        this.C && (_.ld(this.A, "message", this.C), delete this.C);
        delete this.l;
        delete this.A;
        delete this.j;
        _.ww.prototype.H.call(this)
    };
    var IC = function(a) {
            var b;
            return "function" === typeof(null == (b = a.A) ? void 0 : b.__uspapi) || null != HC(a)
        },
        KC = function(a, b) {
            var c = {};
            if (IC(a)) {
                var d = _.An(function() {
                    return b(c)
                });
                JC(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.o)
            } else b(c)
        },
        JC = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.A) ? void 0 : c.__uspapi) ? (a = a.A.__uspapi, a("getUSPData", 1, b)) : HC(a) && (LC(a), c = ++a.I, a.l[c] = b, a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        HC = function(a) {
            if (a.j) return a.j;
            a.j = ru(a.A, "__uspapiLocator");
            return a.j
        },
        LC = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.l) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.bb(a.A, "message", a.C))
        };
    var MC = function(a) {
        T.call(this, a)
    };
    _.R(MC, T);
    var Om = function(a, b) {
        b = void 0 === b ? !1 : b;
        _.ww.call(this);
        this.A = a;
        this.C = this.j = null;
        this.l = {};
        this.I = 0;
        this.o = !1;
        this.L = b
    };
    _.R(Om, _.ww);
    var NC = function(a) {
            a.o || (a.j || (a.j = !a.L && a.A.googlefc ? a.A : ru(a.A, "googlefcPresent")), a.o = !0);
            return !!a.j
        },
        PC = function(a, b) {
            if (NC(a))
                if (a.j === a.A) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push("loaded", function(e) {
                    b(nd(MC, e))
                });
                else {
                    OC(a);
                    var c = a.I++;
                    a.l[c] = b;
                    var d = {};
                    a.j.postMessage((d.__fciCall = {
                        command: "loaded",
                        callId: c
                    }, d), "*")
                }
        },
        QC = function(a) {
            return new w.Promise(function(b) {
                PC(a, b)
            })
        },
        OC = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = nd(MC, b.data.__fciReturn);
                    (0, a.l[Q(c, 1)])(c)
                } catch (d) {}
            }, _.bb(a.A, "message", a.C))
        };
    var RC = {},
        df = (RC[23] = .001, RC[211] = !1, RC[253] = !1, RC[246] = [], RC[226] = [], RC[150] = "", RC[148] = Px, RC[221] = ku(), RC[36] = ku(), RC[172] = null, RC[259] = null, RC[6] = lu(window), RC[260] = void 0, RC[251] = null, RC[252] = null, RC[258] = null, RC),
        cf = function() {
            this.j = !1
        };
    var SC = Sg(function() {
        return !!mu(_.t.location.href)
    });
    var qi = function(a) {
            var b = void 0 === b ? Md(_.t) : b;
            this.id = a;
            this.m = Math.random() < _.ef(23);
            this.j = {
                pvsid: String(b)
            }
        },
        TC = function(a) {
            a = bf(a);
            var b;
            mg.set(a, (null != (b = mg.get(a)) ? b : 0) + 1)
        },
        lg = function() {
            return [].concat(_.ad(_.u(mg, "values").call(mg))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        K = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        si = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (SC()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.gx(window, UC(a) || "", void 0, _.E(Dv))
        },
        UC = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Wi(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        VC = function(a, b) {
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? K(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), K(a, "nw_id", b.join()))
        },
        nh = function(a, b, c) {
            K(a, "vrg", String(b.Pa || b.ya));
            c ? (VC(a, c), K(a, "nslots", c.length.toString())) : (VC(a, [].concat(_.ad(_.u(mg, "keys").call(mg)))), K(a, "nslots", lg().toString()));
            b = _.C(Nd).j();
            b.length && K(a, "eid", b.join());
            K(a, "pub_url", document.URL)
        },
        hh = function(a, b, c) {
            c = void 0 === c ? _.ef(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.ef(23);
            Math.random() < c && (a = new qi(a), b(a), si(a, 1))
        },
        mg = new w.Map;
    var zi = function(a) {
        T.call(this, a, -1, WC)
    };
    _.R(zi, T);
    var Ai = function(a) {
            return Q(a, 1)
        },
        Ci = function(a, b) {
            return x(a, 1, b)
        },
        Bi = function(a, b) {
            return of(a, 2, b)
        },
        WC = [2];
    var Ko = function(a) {
        T.call(this, a)
    };
    _.R(Ko, T);
    var em = function(a) {
        T.call(this, a)
    };
    _.R(em, T);
    em.prototype.setTagForChildDirectedTreatment = function(a) {
        return x(this, 5, a)
    };
    em.prototype.clearTagForChildDirectedTreatment = function() {
        return $b(this, 5)
    };
    em.prototype.setTagForUnderAgeOfConsent = function(a) {
        return x(this, 6, a)
    };
    var Vi = function(a) {
        T.call(this, a)
    };
    _.R(Vi, T);
    var YC = function(a) {
        T.call(this, a, -1, XC)
    };
    _.R(YC, T);
    YC.prototype.na = function() {
        return hc(this, zi, 14)
    };
    YC.prototype.Ba = function() {
        return jc(this, Vi, 18)
    };
    var dm = function(a) {
        return jc(a, em, 25)
    };
    YC.prototype.getCorrelator = function() {
        return Q(this, 26)
    };
    YC.prototype.setCorrelator = function(a) {
        return x(this, 26, a)
    };
    var XC = [2, 3, 14, 32];
    var og = function(a) {
        T.call(this, a)
    };
    _.R(og, T);
    og.prototype.getWidth = function() {
        return Q(this, 1)
    };
    var sg = function(a, b) {
        return x(a, 1, b)
    };
    og.prototype.getHeight = function() {
        return Q(this, 2)
    };
    var rg = function(a, b) {
            return x(a, 2, b)
        },
        fj = function() {
            var a = new og;
            return x(a, 3, !0)
        };
    var kj = function(a) {
        T.call(this, a)
    };
    _.R(kj, T);
    var qg = function(a) {
        T.call(this, a, -1, ZC)
    };
    _.R(qg, T);
    var ZC = [2];
    var aD = function(a) {
        T.call(this, a, -1, $C)
    };
    _.R(aD, T);
    aD.prototype.getAdUnitPath = function() {
        return Q(this, 1)
    };
    aD.prototype.getDomId = function() {
        return Q(this, 2)
    };
    var bD = function(a, b) {
        x(a, 2, b)
    };
    aD.prototype.na = function() {
        return hc(this, zi, 3)
    };
    aD.prototype.getClickUrl = function() {
        return Q(this, 7)
    };
    aD.prototype.setClickUrl = function(a) {
        return x(this, 7, a)
    };
    aD.prototype.Ba = function() {
        return jc(this, Vi, 13)
    };
    var Cj = function(a) {
            return ud(a, 15, 0)
        },
        $C = [3, 4, 5, 6, 8, 9];
    var Uf = function(a) {
        T.call(this, a)
    };
    _.R(Uf, T);
    var Tf = function(a, b) {
            return uf(a, 1, cD, b)
        },
        Wf = function(a) {
            var b = new Uf;
            return uf(b, 2, cD, a)
        },
        cD = [1, 2];
    var Jf = function(a) {
        T.call(this, a)
    };
    _.R(Jf, T);
    var Nf = function(a) {
        T.call(this, a, -1, dD)
    };
    _.R(Nf, T);
    var Of = function(a, b) {
            uc(a, 1, b)
        },
        Qf = function(a) {
            T.call(this, a)
        };
    _.R(Qf, T);
    var Rf = function(a) {
            a: {
                var b = Q(a, 1);
                if (null == b) b = [];
                else if (b.constructor === Mb) {
                    a = b;
                    break a
                }
                var c = Db(a),
                    d = Ab(b);
                if (!c && d) {
                    for (var e = b.slice(), f = 0; f < b.length; f++)
                        if (Array.isArray(e[f])) {
                            var g = e[f].slice();
                            e[f] = g;
                            Jf && 1 < g.length && Array.isArray(g[1]) && Bb(g[1])
                        }
                    b = e
                }
                b = new Mb(b, Jf);c && !d && Bb(b.j);x(a, 1, b, !1, !0);a = b
            }
            return a
        },
        Sf = function(a, b) {
            vc(a, 3, b)
        },
        Mf = [1, 2, 3, 4, 7, 5, 6],
        dD = [1];
    var fD = function(a) {
        T.call(this, a, -1, eD)
    };
    _.R(fD, T);
    var gD = function(a, b) {
            return ac(a, 1, b, 0)
        },
        hD = function(a, b) {
            return vc(a, 2, b)
        },
        iD = function(a, b) {
            return uc(a, 3, b)
        },
        eD = [3];
    var jD = function(a) {
        T.call(this, a)
    };
    _.R(jD, T);
    jD.prototype.getTimestamp = function() {
        return vd(this, 1)
    };
    var lD = function(a) {
            var b = new jD;
            b = ac(b, 1, Date.now(), 0);
            return uf(b, 2, kD, a)
        },
        kD = [2, 3];
    var mD = function(a) {
        T.call(this, a)
    };
    _.R(mD, T);
    var nD = function(a) {
        var b = new mD;
        return vc(b, 1, a)
    };
    var oD = function(a) {
        T.call(this, a)
    };
    _.R(oD, T);
    var Af = new function(a, b, c) {
        this.j = b;
        this.m = c
    }(function(a) {
        return nd(mD, a)
    }, function(a) {
        return nd(oD, a)
    }, 4);
    var xf = function(a) {
        return !!a && "function" === typeof a.openConsoleTab && "function" === typeof a.attachOverlay
    };
    var Cf = function(a) {
        T.call(this, a)
    };
    _.R(Cf, T);
    var Bf = function() {
        this.j = _.u(Array, "from").call(Array, {
            length: 1E3
        });
        this.m = 0
    };
    Bf.prototype.send = function(a) {
        this.j instanceof MessagePort ? this.j.postMessage(a.X()) : (this.j[this.m] = a, this.m = (this.m + 1) % 1E3)
    };
    var pD = S(["https://www.googletagservices.com/console/host/host.js"]),
        qD = S(["https://www.googletagservices.com/console/panel/index.html"]),
        rD = S(["https://www.googletagservices.com/console/overlay/index.html"]),
        sD = {
            Ee: v(pD),
            Xg: v(qD),
            Wg: v(rD)
        };
    var zf = {
        zd: document.body,
        ae: sD
    };
    var Ef = new w.Map;
    var tD = {},
        Hf = (tD.companion_ads = "companionAds", tD.content = "content", tD.publisher_ads = "pubads", tD),
        di = {
            tg: "rewardedSlotReady",
            sg: "rewardedSlotGranted",
            rg: "rewardedSlotClosed",
            ug: "slotAdded",
            xg: "slotRequested",
            yg: "slotResponseReceived",
            wg: "slotRenderEnded",
            vg: "slotOnload",
            zg: "slotVisibilityChanged",
            ng: "impressionViewable"
        };
    var bg = function() {
        px.call(this, _.E(cg) || _.E(iw) ? 1 : 0, _.t);
        this.A = 0;
        var a = _.E(cg) || _.E(iw);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.R(bg, px);
    var Kg = function() {
        this.j = new w.Map
    };
    var uD = function() {
            this.m = {};
            this.j = new YC;
            this.A = new w.Map;
            this.j.setCorrelator(zu());
            _.ef(36) && x(this.j, 15, !0)
        },
        vD = function(a) {
            var b = Vf(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.C(Kg),
                    e = ++_.C(bg).A;
                d.j.set(c, e);
                x(a, 20, e);
                b.m[c] = a
            }
        },
        Zm = function(a, b) {
            var c;
            return null != (c = a.m[b]) ? c : null
        },
        Vf = function() {
            return _.C(uD)
        };
    var wD = {
            zd: document.body,
            ae: sD
        },
        Yf = function() {
            var a = void 0 === a ? wD : a;
            var b = void 0 === b ? document.URL : b;
            this.A = a;
            this.url = b;
            this.m = !1
        },
        Xf;
    Yf.prototype.initialize = function() {
        if (null !== vi(this.url, "googtime") && !this.j) try {
            this.j = Df(function() {}, this.A)
        } catch (c) {
            var a, b;
            null == (a = console) || null == (b = a.error) || b.call(a, c)
        }
    };
    Yf.prototype.sendMessage = function(a, b, c, d) {
        a = iD(hD(gD(new fD, a), Pf(b)), c.map(function(e) {
            return Pf(e)
        }));
        d && x(a, 4, d);
        d = lD(a);
        d = nD(d);
        this.j.send(d)
    };
    var Zf = function(a, b) {
        var c = Xf;
        return function() {
            var d = Ma.apply(0, arguments);
            if (c.j && !c.m) {
                c.m = !0;
                try {
                    c.sendMessage(a, this, d, Error().stack)
                } catch (g) {
                    var e, f;
                    null == (e = console) || null == (f = e.error) || f.call(e, g)
                } finally {
                    c.m = !1
                }
            }
            return b.apply(this, d)
        }
    };
    var yD;
    _.xD = function(a) {
        this.context = a
    };
    yD = function(a, b) {
        b.catch(function(c) {
            c = c ? c : "unknown rejection";
            dg(a.context, 963, c instanceof Error ? c : Error(String(c)))
        })
    };
    var zD = Sg(Og);
    var wh = ["auto", "inherit", "100%"],
        xh = wh.concat(["none"]);
    var dl = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        uh(a, function(e) {
            return d = vh(e, b, 10, 10)
        }, c);
        return d
    };
    var AD = function(a, b, c, d, e, f) {
        this.A = _.Eu(a);
        this.m = _.Eu(b);
        this.H = c;
        this.j = _.Eu(d);
        this.C = e;
        this.l = f
    };
    AD.prototype.X = function() {
        return JSON.stringify({
            windowCoords_t: this.A.top,
            windowCoords_r: this.A.right,
            windowCoords_b: this.A.bottom,
            windowCoords_l: this.A.left,
            frameCoords_t: this.m.top,
            frameCoords_r: this.m.right,
            frameCoords_b: this.m.bottom,
            frameCoords_l: this.m.left,
            styleZIndex: this.H,
            allowedExpansion_t: this.j.top,
            allowedExpansion_r: this.j.right,
            allowedExpansion_b: this.j.bottom,
            allowedExpansion_l: this.j.left,
            xInView: this.C,
            yInView: this.l
        })
    };
    var BD = function(a) {
        var b = window,
            c = b.screenX || b.screenLeft || 0,
            d = b.screenY || b.screenTop || 0;
        b = new _.Du(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
        c = Qu(a);
        d = _.We(_.Xe, a);
        var e = new Fu(c.x, c.y, d.width, d.height);
        c = Gu(e);
        d = String(Ve(a, "zIndex"));
        var f = new _.Du(0, Infinity, Infinity, 0);
        for (var g = Tt(a), h = g.j.body, k = g.j.documentElement, l = Yt(g.j); a = Pu(a);)
            if (!(_.dr && 0 == a.clientWidth || gr && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Ve(a, "overflow")) {
                var n = Qu(a),
                    m = new _.Fg(a.clientLeft, a.clientTop);
                n.x += m.x;
                n.y += m.y;
                f.top = Math.max(f.top, n.y);
                f.right = Math.min(f.right, n.x + a.clientWidth);
                f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                f.left = Math.max(f.left, n.x)
            }
        a = l.scrollLeft;
        l = l.scrollTop;
        f.left = Math.max(f.left, a);
        f.top = Math.max(f.top, l);
        g = g.j;
        g = _.Xt(g.parentWindow || g.defaultView || window);
        f.right = Math.min(f.right, a + g.width);
        f.bottom = Math.min(f.bottom, l + g.height);
        l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Fu(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Hu(e, f) : null;
        g = a = 0;
        l && !(new _.Ig(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
        l = new _.Du(0, 0, 0, 0);
        if (h = f)(e = Hu(e, f)) ? (k = Gu(f), n = Gu(e), h = n.right != k.left && k.right != n.left, k = n.bottom != k.top && k.bottom != n.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
        h && (l = new _.Du(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
        return new AD(b, c, d, l, a, g)
    };
    var CD = function(a) {
        this.H = a;
        this.C = null;
        this.D = this.status = 0;
        this.m = null;
        this.Fa = "sfchannel" + a
    };
    var DD = function(a) {
        this.j = a
    };
    DD.prototype.X = function() {
        return JSON.stringify(this.j)
    };
    var ED = function(a, b) {
        this.ac = a;
        this.bc = b;
        this.m = this.j = !1
    };
    ED.prototype.X = function() {
        return JSON.stringify({
            expandByOverlay: this.ac,
            expandByPush: this.bc,
            readCookie: this.j,
            writeCookie: this.m
        })
    };
    var FD = function(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.A = b;
        this.H = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Ib = g;
        this.hostpageLibraryTokens = h;
        this.j = "";
        this.sb = void 0 === k ? "" : k
    };
    FD.prototype.X = function() {
        var a = {};
        a = (a.uid = this.m, a.hostPeerName = this.A, a.initialGeometry = this.H.X(), a.permissions = this.permissions.X(), a.metadata = this.metadata.X(), a.reportCreativeGeometry = this.C, a.isDifferentSourceWindow = this.Ib, a.goog_safeframe_hlt = Cy(this.hostpageLibraryTokens), a);
        this.j && (a.sentinel = this.j);
        this.sb && (a.pbjsAdConfig = this.sb);
        return JSON.stringify(a)
    };
    var GD = function(a, b) {
        this.j = a;
        this.A = b
    };
    GD.prototype.X = function(a) {
        this.A && a && (a.sentinel = this.A);
        return JSON.stringify(a)
    };
    var HD = function(a, b, c) {
        GD.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.R(HD, GD);
    HD.prototype.X = function() {
        return GD.prototype.X.call(this, {
            uid: this.j,
            version: this.version
        })
    };
    var ID = function(a, b, c, d) {
        GD.call(this, a, void 0 === d ? "" : d);
        this.H = b;
        this.m = c
    };
    _.R(ID, GD);
    ID.prototype.X = function() {
        return GD.prototype.X.call(this, {
            uid: this.j,
            initialWidth: this.H,
            initialHeight: this.m
        })
    };
    var JD = function(a, b, c) {
        GD.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.R(JD, GD);
    JD.prototype.X = function() {
        return GD.prototype.X.call(this, {
            uid: this.j,
            description: this.description
        })
    };
    var KD = function(a, b, c, d) {
        GD.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.R(KD, GD);
    KD.prototype.X = function() {
        return GD.prototype.X.call(this, {
            uid: this.j,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var LD = function(a, b) {
        GD.call(this, a, void 0 === b ? "" : b)
    };
    _.R(LD, GD);
    LD.prototype.X = function() {
        return GD.prototype.X.call(this, {
            uid: this.j
        })
    };
    var MD = function(a, b, c) {
        GD.call(this, a, void 0 === c ? "" : c);
        this.H = b
    };
    _.R(MD, GD);
    MD.prototype.X = function() {
        var a = {
            uid: this.j,
            newGeometry: this.H.X()
        };
        return GD.prototype.X.call(this, a)
    };
    var ND = function(a, b, c, d, e, f) {
        MD.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.m = d;
        this.push = e
    };
    _.R(ND, MD);
    ND.prototype.X = function() {
        var a = {
            uid: this.j,
            success: this.success,
            newGeometry: this.H.X(),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.A && (a.sentinel = this.A);
        return JSON.stringify(a)
    };
    var OD = function(a, b, c, d) {
        GD.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.R(OD, GD);
    OD.prototype.X = function() {
        return GD.prototype.X.call(this, {
            uid: this.j,
            width: this.width,
            height: this.height
        })
    };
    var PD = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Sc(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var QD = function() {
            this.j = []
        },
        SD = function(a, b, c, d, e) {
            a.j.push(new RD(b, c, d, e))
        },
        TD = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.A.style.removeProperty(c.j), c.A.style.setProperty(c.j, String(c.H), c.C)) : c.A.style[c.j] = c.H
            }
            a.j.length = 0
        },
        RD = function(a, b, c, d) {
            this.A = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.H = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var UD = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        VD = function() {
            var a = window,
                b = _.im(a);
            b && UD({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        WD = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.im(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && UD(_.u(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.im() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var aE = function(a) {
        CD.call(this, a.uniqueId);
        var b = this;
        this.o = a.Ug;
        this.L = 1 === a.size;
        this.aa = new ED(a.permissions.ac && !this.L, a.permissions.bc && !this.L);
        this.l = a.Xc;
        var c;
        this.ga = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.da = "file:" == c ? "*" : c + "//" + d;
        this.ha = !!a.Ib;
        c = !1 === a.be ? "https:" : window.location.protocol;
        d = "//" + a.zc + (_.E(Qv) ? "-safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.J = a.zc ? d : "//tpc.googlesyndication.com";
        this.ca = a.hc ? "*" : c + this.J;
        this.M = !!a.ue;
        this.ea = XD(a);
        this.A = new QD;
        YD(this, a.Xc, a.size);
        this.C = this.U = BD(a.Xc);
        this.G = a.jf || "1-0-38";
        var e;
        this.Z = null != (e = a.pe) ? e : "";
        this.ia = a.sb;
        ZD(this, a);
        this.oa = WD(412, function() {
            return $D(b)
        }, a.Aa);
        this.P = -1;
        this.I = 0;
        var f = WD(415, function() {
            b.j && (b.j.name = "", a.Hd && a.Hd(), _.ld(b.j, "load", f))
        }, a.Aa);
        _.bb(this.j, "load", f);
        this.Pc = WD(413, this.Pc, a.Aa);
        this.Yc = WD(417, this.Yc, a.Aa);
        this.Zc = WD(419, this.Zc, a.Aa);
        this.Kc = WD(411, this.Kc, a.Aa);
        this.Hc = WD(409, this.Hc, a.Aa);
        this.V = WD(410, this.V, a.Aa);
        this.Tc = WD(416, this.Tc, a.Aa);
        this.m = new jC(this.Fa, this.j.contentWindow, this.ca, !1);
        lC(this.m, "init_done", (0, _.nq)(this.Pc, this));
        lC(this.m, "register_done", (0, _.nq)(this.Yc, this));
        lC(this.m, "report_error", (0, _.nq)(this.Zc, this));
        lC(this.m, "expand_request", (0, _.nq)(this.Kc, this));
        lC(this.m, "collapse_request", (0, _.nq)(this.Hc, this));
        lC(this.m, "creative_geometry_update", (0, _.nq)(this.V, this));
        this.m.connect((0, _.nq)(this.Tc, this))
    };
    _.R(aE, CD);
    var YD = function(a, b, c) {
            a.L ? (b.style.width = _.Su("100%", !0), b.style.height = _.Su("auto", !0)) : (b.style.width = _.Su(c.width, !0), b.style.height = _.Su(c.height, !0))
        },
        ZD = function(a, b) {
            var c = b.hc,
                d = b.content,
                e = b.be,
                f = b.Gb,
                g = b.size,
                h = void 0 === b.Hb ? "3rd party ad content" : b.Hb;
            b = b.cc;
            var k = {
                shared: {
                    sf_ver: a.G,
                    ck_on: jx() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.G + ";" + d.length + ";" + d + (new FD(a.H, a.da, a.U, a.aa, new DD(k), a.L, a.ha, a.ga, a.ia)).X();
            e = !1 === e;
            if (a.M && g instanceof _.Ig) {
                k = _.Zt(_.St(a.l));
                var l = _.Zt(_.St(a.l)).location.protocol + a.J;
                my || ti(k.document, ny);
                my++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: f,
                    b: l,
                    c: g.width,
                    d: g.height,
                    e: "sf-gdn-exp-" + my,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            k = g.width;
            g = g.height;
            a.L && (g = k = 0);
            l = {};
            f = (l.id = f, l.title = h, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(g), l["data-is-safeframe"] = "true", l);
            void 0 === c && (h = _.Zt(_.St(a.l)), g = a.Z, d = a.J, (k = g) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.G + "/html/container.html" + k), (k = PD(h)) && (d += (g ? "&" : "?") + "n=" + k), e = (e || lu(h, !1) ? "https:" : "http:") + d, g = [], a.M && (d = mu(h.location.href), h = g.push, d = [0 < d.length ? "google_debug" + (d ? "=" + d : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.t.document.location.protocol), "//", encodeURIComponent(_.t.document.location.host)].join(""), h.call(g, d)), g.length && (e += "#" + g.join("&")), f.src = e);
            null !== a.ea && (f.sandbox = a.ea);
            b && (f.allow = b);
            f.role = "region";
            f["aria-label"] = "Advertisement";
            f.tabIndex = "0";
            c ? (a.j = c, Vt(a.j, f)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), f && xa(c, f), b = _.jd("IFRAME"), Vt(b, c), a.j = b);
            a.L && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    q = aE.prototype;
    q.Tc = function() {
        _.bb(window, "resize", this.oa);
        _.bb(window, "scroll", this.oa)
    };
    q.Pc = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ha(b) || !zh(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new HD(b.uid, b.version, b.sentinel);
            if (this.H !== c.j || this.G !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.o) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    q.Yc = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ha(b) || !zh(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.H !== (new ID(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).j) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.o) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    q.Zc = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ha(b) || !zh(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new JD(b.uid, b.description, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            var d;
            null == (d = this.o) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.o) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    q.Kc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.D) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ha(b) || !zh(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new KD(b.uid, new _.Du(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.aa.bc || !c.push && this.aa.ac) {
                var e = c.m,
                    f = c.push,
                    g = this.C = BD(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) SD(this.A, h, "overflowX", "visible", "important"), SD(this.A, h, "overflowY", "visible", "important");
                    var k = Gu(new Fu(0, 0, this.C.m.getWidth(), this.C.m.getHeight()));
                    _.ha(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    SD(this.A, this.l, "position", "relative");
                    SD(this.A, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        SD(this.A, this.l, "width", l + "px");
                        var n = k.getHeight();
                        SD(this.A, this.l, "height", n + "px")
                    } else SD(this.A, this.j, "zIndex", "10000");
                    var m = k.getWidth();
                    SD(this.A, this.j, "width", m + "px");
                    var p = k.getHeight();
                    SD(this.A, this.j, "height", p + "px");
                    SD(this.A, this.j, "left", k.left + "px");
                    SD(this.A, this.j, "top", k.top + "px");
                    this.D = 2;
                    this.C = BD(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            this.m.send("expand_response", (new ND(this.H, a, this.C, c.m, c.push)).X());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (z) {
            var r;
            null == (r = this.o) || r.error("Invalid EXPAND_REQUEST message. Reason: " + z.message)
        }
    };
    q.Hc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.D) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ha(b) || !zh(b.uid)) throw Error("Cannot parse JSON message");
            if (this.H !== (new LD(b.uid, b.sentinel)).j) throw Error("Wrong source container");
            TD(this.A);
            this.D = 0;
            this.j && (this.C = BD(this.j));
            this.m.send("collapse_response", (new MD(this.H, this.C)).X())
        } catch (d) {
            var c;
            null == (c = this.o) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var $D = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.I) {
            case 0:
                bE(a);
                a.P = window.setTimeout((0, _.nq)(a.O, a), 1E3);
                a.I = 1;
                break;
            case 1:
                a.I = 2;
                break;
            case 2:
                a.I = 2
        }
    };
    aE.prototype.V = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ha(b) || !zh(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new OD(b.uid, b.width, b.height, b.sentinel);
            if (this.H !== c.j) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.L) d !== this.j.height && (this.j.height = d, $D(this));
            else {
                var e;
                null == (e = this.o) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.o) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    aE.prototype.O = function() {
        if (1 == this.status || 2 == this.status) switch (this.I) {
            case 1:
                this.I = 0;
                break;
            case 2:
                bE(this), this.P = window.setTimeout((0, _.nq)(this.O, this), 1E3), this.I = 1
        }
    };
    var bE = function(a) {
            a.C = BD(a.j);
            a.m.send("geometry_update", (new MD(a.H, a.C)).X())
        },
        XD = function(a) {
            var b = null;
            a.Td && (b = a.Td);
            return null == b ? null : b.join(" ")
        },
        cE = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        dE = ["allow-top-navigation"],
        eE = ["allow-same-origin"],
        fE = pu([].concat(_.ad(cE), _.ad(dE)));
    pu([].concat(_.ad(cE), _.ad(eE)));
    pu([].concat(_.ad(cE), _.ad(dE), _.ad(eE)));
    var gE = S(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        hE = S(["https://secureframe.doubleclick.net/container.html"]),
        iE = {
            Qe: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Lb) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Lb)) throw new RangeError("Invalid subdomain: " + a.Lb);
                return a.tf ? Oa("https://" + a.Lb + "-safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Oa("https://" + a.Lb + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            eh: function(a) {
                return v(gE, a)
            },
            bh: v(hE)
        };
    var Ah = function(a, b) {
        try {
            lb(eo(a, b))
        } catch (c) {}
    };
    var jE = function(a) {
        T.call(this, a)
    };
    _.R(jE, T);
    var kE = [jE, 4, js, 2, js, 1, js, 3, js, 5, ms];
    var lE = [.05, .1, .2, .5],
        mE = [0, .5, 1],
        nE = function(a) {
            a = ee(a);
            if (!a) return -1;
            try {
                var b = sy(a.document);
                var c = new _.Ig(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Ig(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        oE = function(a, b) {
            return 0 > a ? [] : tc(lE, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        qE = function(a) {
            this.C = a.F;
            this.A = a.eb;
            this.o = a.mb;
            this.m = null;
            this.H = a.Aa;
            this.j = pE(this);
            this.l = a.nf || !1
        };
    qE.prototype.getSlotId = function() {
        return this.m
    };
    var sE = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        rE(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.H && a.H(c)
                    }
                    a.j && a.j.unobserve(a.A)
                }
                a.m = b;
                a.j.observe(a.A)
            }
        },
        pE = function(a) {
            var b = a.A.offsetWidth * a.A.offsetHeight,
                c = nE(a.C);
            b = [].concat(_.ad(mE), _.ad(oE(c, b)));
            ja(b);
            return _.t.IntersectionObserver ? new _.t.IntersectionObserver(function(d) {
                return tE(a, d)
            }, {
                threshold: b
            }) : new uo(function(d) {
                return tE(a, d)
            }, {
                threshold: b
            })
        },
        tE = function(a, b) {
            try {
                var c = nE(a.C);
                _.vq(b, function(d) {
                    a.l && rE(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.H && a.H(d)
            }
        },
        rE = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new jE;
            c = x(g, 1, c);
            d = x(c, 2, d);
            e = x(d, 3, e);
            b = x(e, 4, b);
            f = x(b, 5, f);
            f = Kb(el(f, kE), 4);
            qx(a.o, "1", 10, f, void 0, a.m)
        };
    var uE = function(a, b) {
            this.j = a;
            this.m = b
        },
        vE = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = su(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var Kh = function(a) {
        T.call(this, a)
    };
    _.R(Kh, T);
    var Lh = [1, 3];
    var gd = {
        Ig: 0,
        Dg: 1,
        Bg: 2,
        Cg: 3,
        Hg: 4,
        Fg: 5,
        Gg: 6,
        Eg: 7
    };
    var wE = S(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Fh = v(wE);
    var xE = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        yE = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var AE = function(a, b, c) {
        _.ww.call(this);
        var d = this;
        this.A = a;
        this.j = [];
        b && zE() && this.j.push(xE);
        c && this.j.push(yE);
        if (document.hasTrustToken && !_.E(nw)) {
            var e = new w.Map;
            this.j.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.A ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof w.Map ? new w.Map([].concat(_.ad(e), _.ad(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof w.Map || (window.goog_tt_promise_map = new w.Map)
        }
    };
    _.R(AE, _.ww);
    var zE = function() {
            var a = void 0 === a ? window : a;
            a = a.navigator.userAgent;
            var b = /Chrome/.test(a);
            return /Android/.test(a) && b
        },
        xm = function(a) {
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        Bm = function(a, b, c) {
            a = a.goog_tt_state_map;
            var d, e = [];
            b && (d = null == a ? void 0 : a.get(xE.issuerOrigin)) && e.push(d);
            c && (d = null == a ? void 0 : a.get(yE.issuerOrigin)) && e.push(d);
            return e
        },
        BE = function(a) {
            return _.E(qw) ? !0 : a.some(function(b) {
                return b.hasRedemptionRecord
            })
        },
        CE = function() {
            var a = window,
                b = _.ef(221),
                c = _.ef(150);
            return b || ".google.ch" === c || "function" === typeof a.__tcfapi
        },
        DE = function(a) {
            var b = _.ef(252);
            a = _.E(qw) ? a.filter(function(c) {
                return 12 !== c.state
            }).map(function(c) {
                return c.issuerOrigin
            }) : a.filter(function(c) {
                return c.hasRedemptionRecord
            }).map(function(c) {
                return c.issuerOrigin
            });
            if (0 == a.length) return null;
            a = {
                type: "send-redemption-record",
                issuers: a,
                refreshPolicy: "none",
                signRequestData: _.E(qw) ? "omit" : "include",
                includeTimestampHeader: !0,
                additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
            };
            !_.E(qw) && b && 0 < _.u(Object, "keys").call(Object, b).length && (a.additionalSigningData = il(JSON.stringify(b), 3));
            return a
        },
        EE = function(a, b, c) {
            var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
            e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
        },
        FE = function() {
            var a = xE.issuerOrigin + xE.redemptionPath,
                b = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        issuer: xE.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            EE(xE.issuerOrigin, 2);
            return window.fetch(a, b).then(function(c) {
                if (!c.ok) throw Error(c.status + ": Network response was not ok!");
                EE(xE.issuerOrigin, 6, !0)
            }).catch(function(c) {
                c && "NoModificationAllowedError" === c.name ? EE(xE.issuerOrigin, 6, !0) : EE(xE.issuerOrigin, 5)
            })
        },
        GE = function() {
            var a = xE.issuerOrigin + xE.issuancePath;
            EE(xE.issuerOrigin, 8);
            return window.fetch(a, {
                keepalive: !0,
                trustToken: {
                    type: "token-request"
                }
            }).then(function(b) {
                if (!b.ok) throw Error(b.status + ": Network response was not ok!");
                EE(xE.issuerOrigin, 10);
                return FE()
            }).catch(function(b) {
                if (b && "NoModificationAllowedError" === b.name) return EE(xE.issuerOrigin, 10), FE();
                EE(xE.issuerOrigin, 9)
            })
        },
        HE = function() {
            EE(xE.issuerOrigin, 13);
            return document.hasTrustToken(xE.issuerOrigin).then(function(a) {
                return a ? FE() : GE()
            })
        },
        IE = function() {
            EE(yE.issuerOrigin, 13);
            if (w.Promise) {
                var a = document.hasTrustToken(yE.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return w.Promise.reject({
                            state: 19,
                            error: e
                        })
                    }),
                    b = yE.issuerOrigin + yE.redemptionPath,
                    c = {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "none"
                        }
                    };
                EE(yE.issuerOrigin, 16);
                a = a.then(function(e) {
                    return window.fetch(b, c).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        EE(yE.issuerOrigin, 18, !0)
                    }).catch(function(f) {
                        if (f && "NoModificationAllowedError" === f.name) EE(yE.issuerOrigin, 18, !0);
                        else {
                            if (e) return w.Promise.reject({
                                state: 17,
                                error: f
                            });
                            EE(yE.issuerOrigin, 17)
                        }
                    })
                }).then(function() {
                    return document.hasTrustToken(yE.issuerOrigin).then(function(e) {
                        return e
                    }).catch(function(e) {
                        return w.Promise.reject({
                            state: 19,
                            error: e
                        })
                    })
                }).then(function(e) {
                    var f = yE.issuerOrigin + yE.getStatePath;
                    EE(yE.issuerOrigin, 20);
                    return window.fetch(f + "?ht=" + e, {
                        trustToken: {
                            type: "send-redemption-record",
                            issuers: [yE.issuerOrigin]
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        EE(yE.issuerOrigin, 22);
                        return g.text().then(function(h) {
                            return JSON.parse(h)
                        })
                    }).catch(function(g) {
                        return w.Promise.reject({
                            state: 21,
                            error: g
                        })
                    })
                });
                var d = Md(window);
                return a.then(function(e) {
                    var f = yE.issuerOrigin + yE.issuancePath;
                    return e && e.srqt && e.cs ? (EE(yE.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-request"
                        }
                    }).then(function(g) {
                        if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                        EE(yE.issuerOrigin, 25);
                        return e
                    }).catch(function(g) {
                        return w.Promise.reject({
                            state: 24,
                            error: g
                        })
                    })) : e
                }).then(function(e) {
                    if (e && e.srdt && e.cs) return EE(yE.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                        keepalive: !0,
                        trustToken: {
                            type: "token-redemption",
                            refreshPolicy: "refresh"
                        }
                    }).then(function(f) {
                        if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                        EE(yE.issuerOrigin, 28, !0)
                    }).catch(function(f) {
                        return w.Promise.reject({
                            state: 27,
                            error: f
                        })
                    })
                }).then(function() {
                    EE(yE.issuerOrigin, 29)
                }).catch(function(e) {
                    if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                        if ("number" === typeof e.state && e.error instanceof Error) {
                            EE(yE.issuerOrigin, e.state);
                            var f = _.Kd(ow);
                            Math.random() <= f && Ad({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                        } else throw Error(e);
                    else throw e;
                })
            }
        },
        JE = function(a) {
            if (document.hasTrustToken && !_.E(nw) && a.A) {
                var b = window.goog_tt_promise_map;
                if (b && b instanceof w.Map) {
                    var c = [];
                    if (a.j.some(function(e) {
                            return e.issuerOrigin === xE.issuerOrigin
                        })) {
                        var d = b.get(xE.issuerOrigin);
                        d || (d = HE(), b.set(xE.issuerOrigin, d));
                        c.push(d)
                    }
                    a.j.some(function(e) {
                        return e.issuerOrigin === yE.issuerOrigin
                    }) && (a = b.get(yE.issuerOrigin), a || (a = IE(), b.set(yE.issuerOrigin, a)), c.push(a));
                    if (0 < c.length && w.Promise && w.Promise.all) return w.Promise.all(c)
                }
            }
        };
    var KE = function() {
            this.id = "goog_" + Ot++
        },
        LE = function(a) {
            _.ww.call(this);
            this.context = a;
            this.o = new w.Map
        };
    _.R(LE, _.ww);
    LE.prototype.H = function() {
        _.ww.prototype.H.call(this);
        this.o.clear()
    };
    var NE = function(a, b, c) {
            if (a.m) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.o.get(d)) ? void 0 : e.add(c)) ? f : new w.Set([c]);
            a.o.set(d, g);
            return function() {
                return void ME(a, b, c)
            }
        },
        jo = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new w.Promise(function(d) {
                var e = NE(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        ME = function(a, b, c) {
            var d;
            return !(null == (d = a.o.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    LE.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, n;
        return _.db(function(m) {
            if (1 == m.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.o.get(e);
                if (null == (g = f) || !g.size) return m.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.y(f);
                n = l.next()
            }
            if (5 != m.j) {
                if (n.done) {
                    m.j = 0;
                    return
                }
                k.Qb = n.value;
                return eb(m, 0, 5)
            }
            _.gg(d.context, b, function(p) {
                return function() {
                    d.o.has(e) && f.has(p.Qb) && p.Qb(h)
                }
            }(k), !0);
            k = {
                Qb: k.Qb
            };
            n = l.next();
            m.j = 2
        })
    };
    var OE = new KE,
        PE = new KE,
        QE = new KE,
        RE = new KE,
        SE = new KE,
        TE = new KE,
        UE = new KE,
        ko = new KE,
        VE = new KE,
        WE = new KE;
    var XE, aF, eF, sm, jm, $E, ZE, YE, fF;
    XE = function() {
        this.j = new w.Map;
        this.o = 0;
        this.m = new w.Map;
        this.Id = Md(_.t);
        this.Yb = null;
        this.H = 0;
        this.l = _.An(function() {
            return void ah("gpt-first-ad-request")
        });
        this.C = this.A = this.I = 0
    };
    aF = function(a, b) {
        var c = void 0 === c ? _.t : c;
        a.j.get(b) || (a.j.set(b, {
            ib: !0,
            Wc: "",
            nb: "",
            Rd: 0,
            Rc: 0,
            Uc: [],
            Vc: [],
            fb: !1,
            ud: null
        }), _.pn(b, function() {
            a.j.delete(b);
            YE(a, b)
        }), NE(b, PE, function(d) {
            var e = d.timeStamp;
            d = d.detail;
            var f = a.j.get(b);
            f.Wc = Q(d, 33) || "";
            f.fb = !0;
            ZE(a, b, function() {
                f.Wc = ""
            });
            $E(a, b, function() {
                f.fb = !1
            });
            if (_.E(hm) && !J(d, 8)) {
                var g;
                f.Rc = null != (g = null != e ? e : _.im(c)) ? g : 0
            }
        }), _.E(km) && jo(b, SE).then(function(d) {
            d = d.timeStamp;
            a.j.get(b).ud = null != d ? d : _.im()
        }))
    };
    _.bF = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ib) ? d : !1
    };
    _.cF = function(a, b) {
        if (a = a.j.get(b)) a.ib = !1
    };
    _.dF = function(a, b) {
        if (a = a.j.get(b)) a.ib = !0
    };
    eF = function(a, b) {
        if (!b.length) return [];
        var c = bf(b[0].getAdUnitPath());
        b.every(function(g) {
            return bf(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.y(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            (f = f.next().value.Wc) && bf(e.getAdUnitPath()) === c && !_.u(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    sm = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.nb) ? d : ""
    };
    jm = function(a, b) {
        return (a = a.j.get(b)) ? a.Rd - 1 : 0
    };
    $E = function(a, b, c) {
        (a = a.j.get(b)) && a.Uc.push(c)
    };
    ZE = function(a, b, c) {
        (a = a.j.get(b)) && a.Vc.push(c)
    };
    YE = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Vc.slice(), a.Vc.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    fF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Uc.slice(), a.Uc.length = 0, a = _.y(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    XE.prototype.fb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.fb) ? c : !1
    };
    var hF = function(a, b, c) {
            a.j.get(b).gd = c;
            $E(a, b, function() {
                return void gF(a, b)
            })
        },
        gF = function(a, b) {
            var c;
            null == (c = a.j.get(b)) || delete c.gd
        };
    var Jk = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function(a, b, c) {
        Hx.call(this, b, void 0 === c ? 0 : c, _.E(Kv));
        this.context = a
    };
    _.R(Z, Hx);
    Z.prototype.P = function(a) {
        dg(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var iF = function(a, b, c, d, e) {
        var f = null,
            g = _.$f(a.context, b, e);
        _.bb(c, d, g) && (f = function() {
            return _.ld(c, d, g)
        }, _.pn(a, f));
        return f
    };
    var jF = /(<head(\s+[^>]*)?>)/i,
        Ho = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.B = W(this);
            this.l = X(this, b);
            this.o = Y(this, c);
            this.D = X(this, d);
            this.G = Y(this, e)
        };
    _.R(Ho, Z);
    Ho.prototype.j = function() {
        var a;
        if (0 === this.l.value.kind && null != (a = this.o.value) && Q(a, 1)) {
            a = this.l.value.sa;
            var b = !!this.G.value;
            b || Ea() || (a = a.replace(jF, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            this.D.value && !b && (a = a.replace(jF, '$1<meta name="referrer" content="origin">'));
            this.B.j({
                kind: 0,
                sa: a
            })
        } else this.B.j(this.l.value)
    };
    var gp = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.D = Y(this, c);
        this.l = Y(this, d);
        Kx(this, e);
        this.G = X(this, f);
        this.o = X(this, g);
        this.J = X(this, h);
        this.M = jo(b, VE)
    };
    _.R(gp, Z);
    gp.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.db(function(e) {
            if (1 == e.j) {
                var f = !a.J.value;
                if (null == a.l.value || "height" !== a.D.value || f) return e.return();
                b = a.G.value;
                c = a.o.value;
                kF(c, !1);
                _.Mu(c, "min-width", "100%");
                _.Mu(b, "min-width", "100%");
                return eb(e, a.M, 2)
            }
            if (a.m) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            kF(c, !0);
            e.j = 0
        })
    };
    var kF = function(a, b) {
        _.Mu(a, "visibility", b ? "visible" : "hidden")
    };
    var cp = function(a, b, c, d, e, f) {
        Z.call(this, a, 685);
        var g = this;
        this.slotId = b;
        this.F = c;
        this.l = Y(this, d);
        this.o = X(this, e);
        this.D = X(this, f);
        jo(this.slotId, ko, function(h) {
            return Ju(g.F, h.detail)
        })
    };
    _.R(cp, Z);
    cp.prototype.j = function() {
        var a = this;
        if (!_.E(Av) && !this.D.value) {
            var b, c, d = null != (c = null == (b = this.l.value) ? void 0 : Q(b, 1)) ? c : "",
                e = Ku(this.F, this.o.value, d);
            _.pn(this, function() {
                try {
                    e()
                } catch (f) {
                    dg(a.context, 493, f)
                }
            })
        }
    };
    var Xh = new w.Map,
        Wh = new w.Map;
    var Zh = function(a, b) {
        this.push = H(a, 76, b.push.bind(b))
    };
    Ff(Zh, 2);
    var ai = function(a, b) {
        b = void 0 === b ? [] : b;
        this.messageId = a;
        this.args = b
    };
    ai.prototype.getMessageId = function() {
        return this.messageId
    };
    ai.prototype.getMessageArgs = function() {
        return this.args
    };
    var lF = M(2),
        mF = M(3),
        nF = M(4),
        oF = M(5),
        pF = M(6),
        qF = M(12),
        rF = M(14),
        sF = M(16),
        tF = M(19),
        uF = M(20),
        fn = M(23),
        gn = M(26),
        vF = M(28),
        wF = M(30),
        xF = M(31),
        yF = M(34),
        zF = M(35),
        AF = M(36),
        BF = M(38),
        CF = M(40),
        DF = M(48),
        EF = M(50),
        FF = M(60),
        GF = M(63),
        HF = M(64),
        IF = M(66),
        JF = M(68),
        KF = M(69),
        LF = M(70),
        MF = M(71),
        NF = M(78),
        OF = M(80),
        PF = M(82),
        QF = M(84),
        RF = M(85),
        SF = M(87),
        Ei = M(88),
        TF = M(92),
        UF = M(93),
        VF = M(99),
        WF = M(103),
        XF = M(104),
        YF = M(105),
        ZF = M(106),
        $F = M(107),
        aG = M(108),
        bG = M(113),
        cG = M(114),
        dG = M(115),
        eG = M(116),
        fG = M(117),
        gG = M(118),
        hG = M(119),
        Yi = M(121),
        iG = M(122),
        jG = M(123),
        Rn = M(125),
        kG = M(126),
        lG = M(127),
        Cn = M(128),
        En = M(144),
        mG = M(134),
        nG = M(135),
        oG = M(136),
        pG = M(137),
        qG = M(138),
        rG = M(139),
        sG = M(140),
        go = M(142),
        tG = M(143),
        uG = M(145);
    var vG = function(a, b, c) {
        var d = this;
        this.addEventListener = H(a, 86, function(e, f) {
            if ("function" !== typeof f) return N(b, ci("Service.addEventListener", [e, f])), d;
            var g = ei(e);
            if (!g) return N(b, UF(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = H(a, 904, function(e, f) {
            var g = ei(e);
            if ("function" === typeof f && g) return e = c.removeEventListener(g, f), _.E(jv) ? void 0 : e;
            N(b, ci("Service.removeEventListener", [e, f]));
            return _.E(jv) ? void 0 : !1
        });
        this.getSlots = H(a, 573, function() {
            return c.A.map(function(e) {
                return e.j
            })
        });
        this.getSlotIdMap = H(a, 574, function() {
            for (var e = {}, f = _.y(c.A), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = H(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = H(a, 575, function() {
            return c.getName()
        })
    };
    var fi = function(a, b, c) {
        vG.call(this, a, b, c);
        var d = this;
        this.set = H(a, 576, function(e, f) {
            c.set(e, f);
            return d
        });
        this.get = H(a, 577, function(e) {
            return c.get(e)
        });
        this.getAttributeKeys = H(a, 578, function() {
            return gu(c.l)
        });
        this.display = H(a, 558, function(e, f, g, h) {
            return c.display(e, f, null != g ? g : "", null != h ? h : "")
        });
        this.notifyUnfilledSlots = H(a, 69, function(e) {
            c.ib && wG(c, xG(c, e))
        });
        this.refreshAllSlots = H(a, 60, function() {
            c.ib && wG(c)
        });
        this.setVideoSession = H(a, 61, function(e, f, g) {
            c.J = f;
            c.V = g;
            "number" === typeof e && x(Vf().j, 29, e)
        });
        this.getDisplayAdsCorrelator = H(a, 62, function(e) {
            return yG(c, void 0 === e ? "" : e)
        });
        this.getVideoStreamCorrelator = H(a, 63, function() {
            var e;
            return null != (e = Q(Vf().j, 29)) ? e : 0
        });
        this.isSlotAPersistentRoadblock = H(a, 64, function(e) {
            var f = _.u(c.A, "find").call(c.A, function(g) {
                return g.j === e
            });
            return !!f && zG(c, f)
        });
        this.onImplementationLoaded = H(a, 65, function() {
            c.j.info(DF("GPT CompanionAds"))
        });
        this.slotRenderEnded = H(a, 67, function(e, f, g) {
            var h = _.u(c.A, "find").call(c.A, function(k) {
                return k.j === e
            });
            return h && AG(c, h, f, g)
        });
        this.setRefreshUnfilledSlots = H(a, 59, function(e) {
            return c.setRefreshUnfilledSlots(e)
        })
    };
    _.R(fi, vG);
    Ff(fi, 3);
    var hi = function(a, b, c) {
        vG.call(this, a, b, c);
        this.setContent = H(a, 72, function(d, e) {
            var f = _.u(c.A, "find").call(c.A, function(g) {
                return g.j === d
            });
            if (_.E(Bn)) N(b, En(), f);
            else return !!f && c.setContent(f, e)
        })
    };
    _.R(hi, vG);
    Ff(hi, 4);
    var BG = S(["https://console.googletagservices.com/pubconsole/loader.js"]),
        CG = S(["/pubconsole/loader.js"]),
        ui = v(BG);
    v(CG);
    var xi, wi = !1,
        pi = !1,
        ri = !1;
    var Jn = function(a, b) {
        this.getAllEvents = H(a, 563, function() {
            return pi ? DG(b).slice() : []
        });
        this.getEventsBySlot = H(a, 565, function(c) {
            return pi ? EG(b, c).slice() : []
        });
        this.getEventsByLevel = H(a, 566, function(c) {
            return pi ? FG(b, c).slice() : []
        })
    };
    Ff(Jn, 5);
    var Hi = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = Vf().j,
            h = Zm(Vf(), f.getDomId());
        this.set = H(a, 83, function(k, l) {
            "page_url" === k && l && (k = [Bi(Ci(new zi, k), [String(l)])], uc(h, 3, k));
            return e
        });
        this.get = H(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, n;
            return null != (n = null == (l = (B = h.na(), _.u(B, "find")).call(B, function(m) {
                return Ai(m) === k
            })) ? void 0 : Xb(l, 2)[0]) ? n : null
        });
        this.setClickUrl = H(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : N(b, ci("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = H(a, 81, function(k, l) {
            Fi(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = H(a, 85, function(k) {
            Gi(f, h, k, b);
            return e
        });
        this.display = H(a, 78, function() {
            GG(d, f, Mg(g, Vf().m))
        });
        this.setTagForChildDirectedTreatment = H(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = dm(g) || new em;
                l.setTagForChildDirectedTreatment(k);
                vc(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = H(a, 567, function(k) {
            "boolean" === typeof k ? x(h, 12, k) : N(b, ci("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = H(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = dm(g) || new em;
                l.setTagForUnderAgeOfConsent(k);
                vc(g, 25, l)
            }
            return e
        })
    };
    Ff(Hi, 6);
    var Ak = function(a, b) {
        this.push = H(a, 932, function(c) {
            b.push(c)
        })
    };
    var Ki = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        Li = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var yp = function(a, b) {
            var c = this;
            a = void 0 === a ? Vf().j : a;
            b = void 0 === b ? _.t : b;
            this.C = "";
            this.j = this.m = null;
            this.l = this.o = this.A = !1;
            this.H = function() {
                return !1
            };
            var d = {},
                e = {},
                f = {};
            this.I = (f[Nx] = (d[19] = function() {
                return !!J(a, 10)
            }, d[13] = function() {
                return Ma.apply(0, arguments).some(function(g) {
                    return 0 == c.C.lastIndexOf(g, 0)
                })
            }, d[12] = function() {
                return !!J(a, 6)
            }, d[11] = pC, d[15] = function(g) {
                return c.H(g)
            }, d[7] = function() {
                var g;
                return !(null == (g = b.crypto) || !g.subtle)
            }, d[48] = function() {
                return !!c.m
            }, d[51] = function() {
                return c.A
            }, d[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (g) {
                    return !1
                }
            }, d[67] = function() {
                return c.o
            }, d[68] = function() {
                return c.l
            }, d), f[Ox] = (e[8] = function(g) {
                var h;
                return null != (h = zd(c.m, Number(g))) ? h : void 0
            }, e[10] = function(g) {
                return c.j ? yg(g + c.j) % 1E3 : void 0
            }, e), f)
        },
        HG = function(a, b) {
            b && !a.j && (a.j = _.u(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var Vj = function(a, b, c) {
        LE.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.R(Vj, LE);
    Vj.prototype.getSlotId = function() {
        return this.slotId
    };
    var nm = "",
        Qi = null,
        Xi = _.An(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var ed = function(a, b, c, d) {
        LE.call(this, a);
        this.adUnitPath = b;
        this.eb = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.R(ed, LE);
    q = ed.prototype;
    q.getId = function() {
        return this.id
    };
    q.getAdUnitPath = function() {
        return this.adUnitPath
    };
    q.getName = function() {
        return this.adUnitPath
    };
    q.toString = function() {
        return this.getId()
    };
    q.getDomId = function() {
        return this.eb
    };
    var IG = function(a, b) {
        a.j = b
    };
    var JG = function(a, b) {
        this.getId = H(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = H(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = H(a, 595, function() {
            return b.getName()
        });
        this.toString = H(a, 596, function() {
            return b.toString()
        });
        this.getDomId = H(a, 597, function() {
            return b.getDomId()
        })
    };
    var KG = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        LG = function(a, b) {
            a.advertiserId = b
        },
        MG = function(a, b) {
            a.campaignId = b
        },
        NG = function(a, b) {
            a.yieldGroupIds = b
        },
        OG = function(a, b) {
            a.companyIds = b
        };
    var PG = function(a, b) {
        this.width = a;
        this.height = b
    };
    PG.prototype.getWidth = function() {
        return this.width
    };
    PG.prototype.getHeight = function() {
        return this.height
    };
    var oj = function(a, b, c) {
        var d = this,
            e = Zm(Vf(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.pn(c, function() {
            e = new aD;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        NE(c, QE, function(m) {
            var p = m.detail;
            m = p.nd;
            p = p.isBackfill;
            m && (f = m, l = p)
        });
        this.set = H(a, 40, function(m, p) {
            if ("string" !== typeof m || "string" !== typeof p || void 0 === Jk()[m]) return N(b, ci("Slot.set", [m, p]), c), d;
            var r = (B = e.na(), _.u(B, "find")).call(B, function(z) {
                return Ai(z) === m
            });
            r ? Bi(r, [p]) : (r = Ci(new zi, m), dc(r, 2, p), Di(e, 3, zi, r));
            return d
        });
        this.get = H(a, 41, function(m) {
            if ("string" !== typeof m) return N(b, ci("Slot.get", [m]), c), null;
            var p = (B = e.na(), _.u(B, "find")).call(B, function(r) {
                return Ai(r) === m
            });
            return (p = p && Xb(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = H(a, 42, function() {
            return e.na().map(function(m) {
                return Ai(m)
            })
        });
        this.addService = H(a, 43, function(m) {
            m = Xh.get(m);
            if (!m) return N(b, ci("Slot.addService", [m]), c), d;
            var p = m.getName();
            if ((B = Xb(e, 4), _.u(B, "includes")).call(B, p)) return b.info(qF(p, c.toString()), c), d;
            m.Sa(c, e);
            return d
        });
        this.defineSizeMapping = H(a, 44, function(m) {
            try {
                var p = e;
                if (!Array.isArray(m)) throw new mj("Size mapping must be an array");
                var r = m.map(nj);
                uc(p, 6, r)
            } catch (z) {
                m = z, dg(a, 44, m), vu("Incorrect usage of googletag.Slot defineSizeMapping: " + m.message)
            }
            return d
        });
        this.setClickUrl = H(a, 45, function(m) {
            if ("string" !== typeof m) return N(b, ci("Slot.setClickUrl", [m]), c), d;
            e.setClickUrl(m);
            return d
        });
        this.setCategoryExclusion = H(a, 46, function(m) {
            "string" !== typeof m || yi(m) ? N(b, ci("Slot.setCategoryExclusion", [m]), c) : ((B = Xb(e, 8), _.u(B, "includes")).call(B, m) || dc(e, 8, m), b.info(rF(m), c));
            return d
        });
        this.clearCategoryExclusions = H(a, 47, function() {
            x(e, 8, Ar);
            b.info(sF(), c);
            return d
        });
        this.getCategoryExclusions = H(a, 48, function() {
            return Xb(e, 8).slice()
        });
        this.setTargeting = H(a, 49, function(m, p) {
            Fi(c, e, m, p, b);
            return d
        });
        this.updateTargetingFromMap = H(a, 649, function(m) {
            Gi(c, e, m, b);
            return d
        });
        this.clearTargeting = H(a, 50, function(m) {
            if (void 0 === m) return uc(e, 9), b.info(tF(c.getAdUnitPath()), c), d;
            var p = hc(e, zi, 9),
                r = _.u(p, "findIndex").call(p, function(z) {
                    return Ai(z) === m
                });
            if (0 > r) return N(b, QF(m, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            uc(e, 9, p);
            b.info(WF(m, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = H(a, 51, function(m) {
            if ("string" !== typeof m) return N(b, ci("Slot.getTargeting", [m]), c), [];
            var p = (B = hc(e, zi, 9), _.u(B, "find")).call(B, function(r) {
                return Ai(r) === m
            });
            return p ? Xb(p, 2).slice() : []
        });
        this.getTargetingKeys = H(a, 52, function() {
            return hc(e, zi, 9).map(function(m) {
                return Ai(m)
            })
        });
        this.setCollapseEmptyDiv = H(a, 53, function(m, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof m || "boolean" !== typeof p) return N(b, ci("Slot.setCollapseEmptyDiv", [m, p]), c), d;
            x(e, 10, m);
            x(e, 11, m && p);
            hh("gpt_ced", function(r) {
                K(r, "sc", J(e, 11) ? "t" : "f");
                K(r, "level", "slot");
                nh(r, a)
            });
            p && !m && N(b, uF(c.toString()), c);
            return d
        });
        this.getAdUnitPath = H(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = H(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = H(a, 55, function(m) {
            if ("boolean" !== typeof m) return N(b, ci("Slot.setForceSafeFrame", [String(m)]), c), d;
            x(e, 12, m);
            return d
        });
        this.setSafeFrameConfig = H(a, 56, function(m) {
            var p = $i(b, m);
            if (!p) return b.error(ci("Slot.setSafeFrameConfig", [m]), c), d;
            vc(e, 13, p);
            return d
        });
        NE(c, PE, function(m) {
            m = m.detail;
            if (J(m, 8)) g = null;
            else {
                g = new KG;
                var p = !!J(m, 9);
                g.isBackfill = p;
                var r = Xb(m, 15),
                    z = Xb(m, 16);
                r.length && z.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = z[0], p || (g.creativeId = r[0], g.lineItemId = z[0], (p = Xb(m, 22)) && p.length && (g.creativeTemplateId = p[0])));
                Xb(m, 17).length && LG(g, Xb(m, 17)[0]);
                Xb(m, 18).length && MG(g, Xb(m, 18)[0]);
                Xb(m, 19).length && NG(g, Xb(m, 19));
                Xb(m, 20).length && OG(g, Xb(m, 20));
                m = Yb(m).map(function(A) {
                    return Lb(A)
                });
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = H(a, 355, function() {
            return g
        });
        this.getName = H(a, 170, function() {
            b.error(tG());
            var m = new qi("slot_get_name");
            nh(m, a);
            si(m);
            return c.getAdUnitPath()
        });
        var n = new JG(a, c);
        this.getSlotId = H(a, 579, function() {
            return n
        });
        this.getServices = H(a, 580, function() {
            return Xb(e, 4).map(function(m) {
                return If(m)
            })
        });
        this.getSizes = H(a, 581, function(m, p) {
            var r, z;
            return null != (z = null == (r = tg(e, m, p)) ? void 0 : r.map(function(A) {
                return J(A, 3) ? "fluid" : new PG(A.getWidth(), A.getHeight())
            })) ? z : null
        });
        this.getClickUrl = H(a, 582, function() {
            var m;
            return null != (m = e.getClickUrl()) ? m : ""
        });
        this.getTargetingMap = H(a, 583, function() {
            for (var m = {}, p = _.y(hc(e, zi, 9)), r = p.next(); !r.done; r = p.next()) r = r.value, Ai(r) && (m[Ai(r)] = Xb(r, 2));
            return m
        });
        this.getOutOfPage = H(a, 584, function(m) {
            return "number" === typeof m ? Cj(e) === m : 0 !== Cj(e)
        });
        this.getCollapseEmptyDiv = H(a, 585, function() {
            return aj(e, 10) ? J(e, 10) : null
        });
        this.getDivStartsCollapsed = H(a, 586, function() {
            return aj(e, 11) ? J(e, 11) : null
        });
        NE(c, RE, function(m) {
            h = m.detail.qe
        });
        this.getContentUrl = H(a, 587, function() {
            return h()
        });
        this.getFirstLook = H(a, 588, function() {
            vu("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        NE(c, PE, function(m) {
            var p;
            k = null != (p = m.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = H(a, 591, function() {
            return k
        });
        this.getHtml = H(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        })
    };
    Ff(oj, 8);
    var QG = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        RG = function(a, b) {
            if (!_.u(a.m, "includes").call(a.m, b) && (B = [1, 2, 3], _.u(B, "includes")).call(B, b)) {
                var c;
                if (c = _.E(Nv) ? Ay[b] : yy[b]) {
                    var d = b + "_hostpage_library";
                    if (c = ti(document, c)) c.id = d
                }
                a.m.push(b);
                b = new By(b);
                a.hostpageLibraryTokens.push(b);
                a = ff();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        SG = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new w.Set;
            a.j[b].add(c)
        },
        TG = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.u(c, "values").call(c)) ? d : [];
            return [].concat(_.ad(a))
        };
    var UG = {},
        qj = (UG[64] = mG, UG[134217728] = nG, UG[32768] = oG, UG[536870912] = pG, UG[8] = qG, UG[512] = rG, UG[1048576] = sG, UG[4194304] = uG, UG);
    var VG = _.An(function() {
            vu("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        Oj = function() {
            this.j = new w.Map;
            this.fa = new w.Set;
            _.C(yp).H = Pj
        };
    Oj.prototype.add = function(a, b, c, d, e) {
        var f = this;
        e = void 0 === e ? {} : e;
        var g = void 0 === e.eb ? void 0 : e.eb,
            h = void 0 === e.format ? 0 : e.format;
        e = void 0 === e.Kd ? !1 : e.Kd;
        var k = Nj(h);
        if (k) return hh("gpt_pla_ns", function(m) {
            K(m, "iu", c);
            K(m, "f", null != h ? h : "");
            K(m, "nsr", k);
            nh(m, a)
        }), rj(b, k, h, c), {};
        e && VG();
        e = this.j.get(c) || Number(e);
        var l;
        b = null != (l = WG(a, b, c, e, d, g || "gpt_unit_" + c + "_" + e)) ? l : {};
        l = b.Ra;
        var n = b.slotId;
        b = b.Jc;
        if (!n) return {
            Jc: b
        };
        this.j.set(c, e + 1);
        this.fa.add(n);
        _.pn(n, function() {
            return void f.fa.delete(n)
        });
        TC(c);
        return {
            slotId: n,
            Ra: l
        }
    };
    var Mn = function(a) {
            return TG(_.C(QG), a).map(function(b) {
                var c;
                return null == (c = $g(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        },
        wn = function(a) {
            a = _.y(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.za()
        },
        jn = function(a, b) {
            a = _.y(a.fa);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c;
            return null
        },
        Uj = function(a, b, c, d, e, f) {
            f = void 0 === f ? !1 : f;
            return "string" === typeof c && 0 < c.length && d && (void 0 === e || "string" === typeof e) ? _.C(Oj).add(a, b, c, d, {
                eb: e,
                Kd: f
            }) : {}
        },
        Hn = function(a, b, c, d, e) {
            a = Uj(a, b, c, d, e);
            var f = a.slotId;
            if (f) return f.j;
            a.Jc || b.error(ci("googletag.defineSlot", [c, d, e]));
            return null
        },
        XG = function(a, b) {
            var c = H(a, 74, function(d, e, f) {
                return Hn(a, b, d, e, f)
            });
            Gf("defineSlot", c);
            Gf("defineUnit", c);
            Gf("getWindowsThatCanCommunicateWithHostpageLibrary", H(a, 955, function(d) {
                return Mn(d)
            }))
        },
        WG = function(a, b, c, d, e, f) {
            var g = jn(_.C(Oj), f);
            if (g) return b.error(vF(f, c, g.getAdUnitPath())), {
                Jc: !0
            };
            var h = new aD;
            bD(x(h, 1, c), f);
            e = lj(e);
            g = e.La;
            uc(h, 5, e.Mc);
            null !== g && vc(h, 16, g);
            vD(h);
            var k = new ed(a, c, d, f);
            IG(k, pj(a, b, k));
            _.pn(k, function() {
                var l = Vf(),
                    n = k.getDomId();
                delete l.m[n];
                l.A.delete(k);
                l = k.getAdUnitPath();
                l = bf(l);
                var m;
                n = (null != (m = mg.get(l)) ? m : 0) - 1;
                0 >= n ? mg.delete(l) : mg.set(l, n);
                b.info(VF(k.toString()), k);
                (m = Wh.get(k)) && Xh.delete(m);
                Wh.delete(k)
            });
            b.info(lF(k.toString()), k);
            NE(k, RE, function(l) {
                l = l.detail.gf;
                b.info(mF(k.getAdUnitPath()), k);
                qx(_.C(bg), "7", 9, jm(_.C(XE), k), 0, l)
            });
            NE(k, PE, function(l) {
                var n = l.detail;
                b.info(nF(k.getAdUnitPath()), k);
                var m;
                l = _.C(bg);
                var p = Q(h, 20);
                n = null != (m = n.getEscapedQemQueryId()) ? m : "";
                l.j && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + p] = n)
            });
            NE(k, QE, function() {
                return void b.info(oF(k.getAdUnitPath()), k)
            });
            NE(k, SE, function() {
                return void b.info(pF(k.getAdUnitPath()), k)
            });
            return {
                Ra: h,
                slotId: k
            }
        };
    var YG = new w.WeakMap,
        ZG = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var Qj = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        Sl = function(a, b) {
            b = void 0 === b ? ZG : b;
            var c = ia(a),
                d = function(f) {
                    f = _.y(f);
                    f.next();
                    f = Np(f);
                    return b(c, f)
                },
                e = function(f) {
                    var g = _.y(f);
                    f = g.next().value;
                    g = Np(g);
                    return a.apply(f, g)
                };
            return function() {
                var f = Ma.apply(0, arguments),
                    g = this || _.t,
                    h = YG.get(g);
                h || (h = {}, YG.set(g, h));
                return br(h, [this].concat(_.ad(f)), e, d)
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? Qj.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });
    var $G = function(a) {
            var b = _.C(yp),
                c = [];
            a = _.y(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.C = d;
                var e = Ap(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        aH = _.An(function() {
            return void vu("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        bH = _.An(function() {
            return void vu("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        cH = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    aH();
                    return !0
                },
                set: function() {
                    aH()
                },
                configurable: !0
            })
        },
        Xj = function(a, b, c) {
            vG.call(this, a, b, c);
            var d = this,
                e = Vf().j,
                f = Vf().m,
                g = !1;
            this.setTargeting = H(a, 1, function(h, k) {
                var l = null;
                "string" === typeof k ? l = [k] : Array.isArray(k) ? l = k : oa(k) && (l = _.u(Array, "from").call(Array, k));
                var n = "string" === typeof h && !yi(h);
                l = l && sa(l);
                var m, p = null != (m = null == l ? void 0 : l.every(function(r) {
                    return "string" === typeof r
                })) ? m : !1;
                if (!n || !p) return N(b, ci("PubAdsService.setTargeting", [h, k])), d;
                k = l;
                n = (B = hc(e, zi, 2), _.u(B, "find")).call(B, function(r) {
                    return Ai(r) === h
                });
                if ("gpt-beta" === h) {
                    if (c.C) return N(b, ZF(k.join())), d;
                    if (n) return N(b, $F(k.join())), d;
                    k = $G(k)
                }
                n ? Bi(n, k) : (n = Bi(Ci(new zi, h), k), Di(e, 2, zi, n));
                b.info(Ei(h, k.join(), c.getName()));
                return d
            });
            this.clearTargeting = H(a, 2, function(h) {
                if (void 0 === h) return uc(e, 2), b.info(XF(c.getName())), d;
                if ("gpt-beta" === h) return N(b, aG(h)), d;
                var k = hc(e, zi, 2),
                    l = _.u(k, "findIndex").call(k, function(n) {
                        return Ai(n) === h
                    });
                if (0 > l) return N(b, QF(h, c.getName())), d;
                k.splice(l, 1);
                uc(e, 2, k);
                b.info(PF(h, c.getName()));
                return d
            });
            this.getTargeting = H(a, 38, function(h) {
                if ("string" !== typeof h) return N(b, ci("PubAdsService.getTargeting", [h])), [];
                var k = (B = hc(e, zi, 2), _.u(B, "find")).call(B, function(l) {
                    return Ai(l) === h
                });
                return k ? Xb(k, 2).slice() : []
            });
            this.getTargetingKeys = H(a, 39, function() {
                return hc(e, zi, 2).map(function(h) {
                    return Ai(h)
                })
            });
            this.setCategoryExclusion = H(a, 3, function(h) {
                if ("string" !== typeof h || yi(h)) return N(b, ci("PubAdsService.setCategoryExclusion", [h])), d;
                (B = Xb(e, 3), _.u(B, "includes")).call(B, h) || dc(e, 3, h);
                b.info(RF(h));
                return d
            });
            this.clearCategoryExclusions = H(a, 4, function() {
                x(e, 3, Ar);
                b.info(SF());
                return d
            });
            this.disableInitialLoad = H(a, 5, function() {
                x(e, 4, !0);
                g || (g = !0, cH())
            });
            this.enableSingleRequest = H(a, 6, function() {
                if (c.C && !J(e, 6)) return N(b, FF("PubAdsService.enableSingleRequest")), !1;
                b.info(GF("single request"));
                x(e, 6, !0);
                return !0
            });
            this.enableAsyncRendering = H(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = H(a, 8, function() {
                vu("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = H(a, 485, function(h) {
                var k = new Ko;
                x(k, 1, 800);
                x(k, 2, 400);
                x(k, 3, 3);
                if (_.ha(h)) {
                    var l = h.fetchMarginPercent;
                    "number" === typeof l && (0 <= l ? x(k, 1, l) : -1 === l && $b(k, 1));
                    l = h.renderMarginPercent;
                    "number" === typeof l && (0 <= l ? x(k, 2, l) : -1 === l && $b(k, 2));
                    h = h.mobileScaling;
                    "number" === typeof h && (0 < h ? x(k, 3, h) : -1 === h && x(k, 3, 1))
                }
                vc(e, 5, k)
            });
            this.setCentering = H(a, 9, function(h) {
                h = !!h;
                b.info(HF("centering", String(h)));
                x(e, 15, h)
            });
            this.definePassback = H(a, 10, function(h, k) {
                return (h = Wj(a, b, c, h, k)) && h.Ld
            });
            this.refresh = H(a, 11, function() {
                var h = Ma.apply(0, arguments),
                    k = _.y(h),
                    l = k.next().value;
                k = k.next().value;
                k = void 0 === k ? {} : k;
                l && !Array.isArray(l) || !_.ha(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator ? N(b, ci("PubAdsService.refresh", h)) : (k && !1 === k.changeCorrelator || e.setCorrelator(zu()), l = l ? Tj(l, c) : c.A, c.refresh(Mg(e, f), l) || N(b, ci("PubAdsService.refresh", h)))
            });
            this.enableVideoAds = H(a, 12, function() {
                x(e, 21, !0);
                dH(c, e)
            });
            this.setVideoContent = H(a, 13, function(h, k) {
                eH(c, h, k, e)
            });
            this.collapseEmptyDivs = H(a, 14, function(h) {
                h = void 0 === h ? !1 : h;
                x(e, 11, !0);
                var k = !!h;
                x(e, 10, k);
                hh("gpt_ced", function(l) {
                    K(l, "sc", k ? "t" : "f");
                    K(l, "level", "page");
                    nh(l, a)
                });
                b.info(NF(String(k)));
                return !!J(e, 11)
            });
            this.clear = H(a, 15, function(h) {
                if (Array.isArray(h)) return fH(c, e, f, Tj(h, c));
                if (void 0 === h) return fH(c, e, f, c.A);
                N(b, ci("PubAdsService.clear", [h]));
                return !1
            });
            this.setLocation = H(a, 16, function(h) {
                if ("string" !== typeof h) return N(b, ci("PubAdsService.setLocation", [h])), d;
                x(e, 8, h);
                return d
            });
            this.setCookieOptions = H(a, 17, function() {
                bH();
                return d
            });
            this.setTagForChildDirectedTreatment = H(a, 18, function(h) {
                if (1 !== h && 0 !== h) return N(b, iG("PubadsService.setTagForChildDirectedTreatment", Zi(h), "0,1")), d;
                var k = dm(e) || new em;
                k.setTagForChildDirectedTreatment(h);
                vc(e, 25, k);
                return d
            });
            this.clearTagForChildDirectedTreatment = H(a, 19, function() {
                var h = dm(e);
                if (!h) return d;
                h.clearTagForChildDirectedTreatment();
                vc(e, 25, h);
                return d
            });
            this.setPublisherProvidedId = H(a, 20, function(h) {
                h = String(h);
                b.info(HF("PPID", h));
                x(e, 16, h);
                return d
            });
            this.set = H(a, 21, function(h, k) {
                if ("string" !== typeof h || !h.length || void 0 === Jk()[h] || "string" !== typeof k) return N(b, ci("PubAdsService.set", [h, k])), d;
                var l = (B = e.na(), _.u(B, "find")).call(B, function(n) {
                    return Ai(n) === h
                });
                l ? Bi(l, [k]) : (l = Ci(new zi, h), dc(l, 2, k), Di(e, 14, zi, l));
                b.info(AF(h, String(k), c.getName()));
                return d
            });
            this.get = H(a, 22, function(h) {
                if ("string" !== typeof h) return N(b, ci("PubAdsService.get", [h])), null;
                var k = (B = e.na(), _.u(B, "find")).call(B, function(l) {
                    return Ai(l) === h
                });
                return (k = k && Xb(k, 2)) ? k[0] : null
            });
            this.getAttributeKeys = H(a, 23, function() {
                return e.na().map(function(h) {
                    return Ai(h)
                })
            });
            this.display = H(a, 24, function(h, k, l, n) {
                return void c.display(h, k, void 0 === l ? "" : l, void 0 === n ? "" : n)
            });
            this.updateCorrelator = H(a, 25, function() {
                vu(Sj("update"));
                N(b, dG());
                e.setCorrelator(zu());
                return d
            });
            this.defineOutOfPagePassback = H(a, 35, function(h) {
                h = Wj(a, b, c, h, [1, 1]);
                if (!h) return null;
                x(h.Ra, 15, 1);
                return h.Ld
            });
            this.setForceSafeFrame = H(a, 36, function(h) {
                if ("boolean" !== typeof h) return N(b, ci("PubAdsService.setForceSafeFrame", [Zi(h)])), d;
                x(e, 13, h);
                return d
            });
            this.setSafeFrameConfig = H(a, 37, function(h) {
                var k = $i(b, h);
                if (!k) return N(b, ci("PubAdsService.setSafeFrameConfig", [h])), d;
                vc(e, 18, k);
                return d
            });
            this.setRequestNonPersonalizedAds = H(a, 445, function(h) {
                if (0 !== h && 1 !== h) return N(b, iG("PubAdsService.setRequestNonPersonalizedAds", Zi(h), "0,1")), d;
                var k = dm(e) || new em;
                x(k, 8, !!h);
                vc(e, 25, k);
                return d
            });
            this.setTagForUnderAgeOfConsent = H(a, 447, function(h) {
                h = void 0 === h ? 2 : h;
                if (2 !== h && 0 !== h && 1 !== h) return N(b, iG("PubadsService.setTagForUnderAgeOfConsent", Zi(h), "2,0,1")), d;
                var k = dm(e) || new em;
                k.setTagForUnderAgeOfConsent(h);
                vc(e, 25, k);
                return d
            });
            this.getCorrelator = H(a, 27, function() {
                return String(e.getCorrelator())
            });
            this.getTagSessionCorrelator = H(a, 631, function() {
                return Md(_.t)
            });
            this.getVideoContent = H(a, 30, function() {
                return gH(c, e)
            });
            this.getVersion = H(a, 568, function() {
                return a.Pa ? String(a.Pa) : a.ya
            });
            this.forceExperiment = H(a, 569, function(h) {
                return void c.forceExperiment(h)
            });
            this.setCorrelator = H(a, 28, function(h) {
                vu(Sj("set"));
                N(b, cG());
                if (Cg(window)) return d;
                if (!("number" === typeof h && isFinite(h) && 0 == h % 1 && 0 < h)) return N(b, ci("PubadsService.setCorrelator", [Zi(h)])), d;
                e.setCorrelator(h);
                x(e, 27, !0);
                return d
            });
            this.markAsAmp = H(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = H(a, 571, function() {
                return !!J(e, 6)
            });
            this.setImaContent = H(a, 328, function(h, k) {
                aj(e, 22) ? eH(c, h, k, e) : (x(e, 21, !0), dH(c, e), "string" === typeof h && x(e, 19, h), "string" === typeof k && x(e, 20, k))
            });
            this.getImaContent = H(a, 329, function() {
                return aj(e, 22) ? gH(c, e) : c.C ? {
                    vid: Q(e, 19) || "",
                    cmsid: Q(e, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = H(a, 572, function() {
                return !!J(e, 4)
            });
            this.setPrivacySettings = H(a, 648, function(h) {
                if (!_.ha(h)) return N(b, ci("PubAdsService.setPrivacySettings", [h])), d;
                var k = h.restrictDataProcessing,
                    l = h.childDirectedTreatment,
                    n = h.underAgeOfConsent,
                    m = h.limitedAds,
                    p = h.nonPersonalizedAds,
                    r = h.trafficSource,
                    z, A = null != (z = dm(e)) ? z : new em;
                "boolean" === typeof p ? x(A, 8, p) : void 0 !== p && N(b, Yi("PubAdsService.setPrivacySettings", Zi(h), "nonPersonalizedAds", Zi(p)));
                "boolean" === typeof k ? x(A, 1, k) : void 0 !== k && N(b, Yi("PubAdsService.setPrivacySettings", Zi(h), "restrictDataProcessing", Zi(k)));
                if ("boolean" === typeof m) {
                    if (m && !J(A, 9) && (z = Rj(), a.Kb)) {
                        k = a.kb;
                        p = qf(a);
                        var I = new Yw;
                        I = tf(I, 1, !0);
                        z = tf(I, 2, z);
                        p = uf(p, 11, vf, z);
                        cd(k, p)
                    }
                    x(A, 9, m)
                } else void 0 !== m && N(b, Yi("PubAdsService.setPrivacySettings", Zi(h), "limitedAds", Zi(m)));
                void 0 !== n && (null === n ? A.setTagForUnderAgeOfConsent(2) : !1 === n ? A.setTagForUnderAgeOfConsent(0) : !0 === n ? A.setTagForUnderAgeOfConsent(1) : N(b, Yi("PubAdsService.setPrivacySettings", Zi(h), "underAgeOfConsent", Zi(n))));
                void 0 !== l && (null === l ? A.clearTagForChildDirectedTreatment() : !1 === l ? A.setTagForChildDirectedTreatment(0) : !0 === l ? A.setTagForChildDirectedTreatment(1) : N(b, Yi("PubAdsService.setPrivacySettings", Zi(h), "childDirectedTreatment", Zi(l))));
                void 0 !== r && (null === r ? $b(A, 10) : (B = _.u(Object, "values").call(Object, Li), _.u(B, "includes")).call(B, r) ? x(A, 10, r) : N(b, Yi("PubAdsService.setPrivacySettings", Zi(h), "trafficSource", Zi(r))));
                vc(e, 25, A);
                return d
            })
        };
    _.R(Xj, vG);
    Ff(Xj, 7);
    var Kn = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.$f(a, 88, function(f, g) {
            var h;
            if (h = ej(f)) h = dj(g) || Array.isArray(g) && g.every(dj);
            h ? d.push([f, g]) : (e.push([f, g]), N(b, ci("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.$f(a, 89, function() {
            if (e.length) return N(b, yF(Zi(e))), null;
            na(d);
            return d
        })
    };
    var Bo = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 856);
        this.K = b;
        this.slotId = c;
        this.Fb = W(this);
        this.Pb = W(this);
        this.pa = W(this);
        this.J = W(this);
        this.l = W(this);
        this.D = Y(this, d);
        this.G = Y(this, e);
        this.o = Y(this, f);
        this.M = Y(this, g);
        h && Kx(this, h)
    };
    _.R(Bo, Z);
    var hH = function(a) {
        Ax(a.Fb, a.D.value);
        Ax(a.Pb, a.G.value);
        Ax(a.pa, a.o.value);
        zx(a.J);
        zx(a.l)
    };
    Bo.prototype.j = function() {
        var a = this.M.value;
        if (_.E(cv) && a) {
            var b = this.o.value;
            if (0 !== (null == b ? void 0 : b.kind) || b.sa.length) {
                var c;
                var d = null == (c = this.K.j.get(this.slotId)) ? void 0 : c.gd;
                var e = null == d ? void 0 : d.get(a);
                if (!e) throw new mj("Could not find bid with id: " + a);
                d = void 0 === e.height ? this.D.value : e.height;
                c = void 0 === e.width ? this.G.value : e.width;
                var f = e.adUrl,
                    g = e.he,
                    h = void 0 === e.cpm ? 0 : e.cpm;
                if (1 !== e.format) hH(this);
                else {
                    this.J.j(e);
                    if (!g && !f) throw new mj("Could not find ad to render for bid id: " + a);
                    e = {
                        ad: Zj(g, h),
                        adUrl: Zj(f, h),
                        adId: a,
                        width: c,
                        height: d
                    };
                    g = btoa(JSON.stringify(e));
                    0 === (null == b ? void 0 : b.kind) ? (e = this.pa, f = e.j, b = b.sa.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), g.replace(/\$/g, "$$$$")), f.call(e, {
                        kind: 0,
                        sa: b
                    }), zx(this.l)) : (Ax(this.pa, b), Ax(this.l, g));
                    Ax(this.Fb, d);
                    Ax(this.Pb, c);
                    window.postMessage(JSON.stringify({
                        message: "Prebid Request",
                        adId: a
                    }), "*")
                }
                gF(this.K, this.slotId)
            } else hH(this)
        } else hH(this)
    };
    var iH = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.l = b;
        this.o = c;
        this.pbjs = d;
        this.D = e;
        this.requestBidsConfig = f;
        this.B = new Gx
    };
    _.R(iH, Z);
    iH.prototype.j = function() {
        fk(this.D, this.pbjs, this.l, this.o, this.requestBidsConfig);
        this.B.notify()
    };
    var jH = function(a, b) {
        Z.call(this, a, 937, _.Kd(Ev));
        this.o = W(this);
        this.l = W(this);
        this.D = W(this);
        this.G = W(this);
        this.J = Jx(this, b)
    };
    _.R(jH, Z);
    jH.prototype.j = function() {
        var a = this.J.value;
        if (a) {
            var b = {},
                c = new w.Set,
                d;
            if (null == (d = jc(a, Ns, 2)) ? 0 : Gr(d, 2)) b["*"] = {
                qc: !0
            };
            d = _.y(hc(a, Ms, 1));
            for (var e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                for (var f = _.y([cn(e, 2), cn(e, 1)].filter(function(m) {
                        return !!m
                    })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                    qc: Gr(e, 3)
                };
                e = _.y(Xb(e, 4));
                for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
            }
            Ax(this.o, b);
            Ax(this.l, [].concat(_.ad(c)));
            var h, k;
            b = null == (h = jc(a, Ns, 2)) ? void 0 : null == (k = jc(h, Hs, 1)) ? void 0 : hc(k, Js, 1);
            Ax(this.D, (null == b ? 0 : b.length) ? b : null);
            var l, n;
            a = null == (l = jc(a, Ns, 2)) ? void 0 : null == (n = jc(l, Hs, 3)) ? void 0 : hc(n, Js, 1);
            Ax(this.G, (null == a ? 0 : a.length) ? a : null)
        } else zx(this.o), zx(this.l), zx(this.D), zx(this.G)
    };
    jH.prototype.L = function(a) {
        this.A(a)
    };
    jH.prototype.A = function() {
        zx(this.o);
        zx(this.l);
        zx(this.D)
    };
    var kH = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        lH = function(a, b, c, d, e, f, g, h, k, l, n) {
            Z.call(this, a, 920);
            this.l = b;
            this.R = e;
            this.Ja = l;
            this.K = n;
            this.B = W(this);
            this.M = X(this, c);
            this.J = new Fx(d);
            this.o = Y(this, f);
            this.G = Y(this, g);
            this.O = Y(this, h);
            this.D = Y(this, k)
        };
    _.R(lH, Z);
    lH.prototype.j = function() {
        var a = this.J.value;
        mH(this) ? a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.l.error(kG()), zx(this.B)) : (a = nH(this, a)) ? this.B.j(a) : this.B.j([]) : zx(this.B) : zx(this.B)
    };
    lH.prototype.L = function(a) {
        this.A(a)
    };
    lH.prototype.A = function(a) {
        this.l.error(lG(a.message));
        zx(this.B)
    };
    var nH = function(a, b) {
            var c = (0, b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.M.value.map(function(g) {
                    var h = new Es,
                        k = function(za) {
                            return za === g.getDomId() || za === g.getAdUnitPath()
                        },
                        l, n = null != (l = oH.get(g)) ? l : 0,
                        m;
                    l = null != (m = d.filter(function(za) {
                        var ob, be, Lc;
                        return Number(null == (ob = za.args) ? void 0 : ob.timestamp) > n && (null == (be = za.args) ? void 0 : null == (Lc = be.adUnitCodes) ? void 0 : _.u(Lc, "find").call(Lc, k))
                    })) ? m : [];
                    if (!l.length) return h;
                    var p;
                    m = null == (p = l.reduce(function(za, ob) {
                        return Number(ob.args.timestamp) > Number(za.args.timestamp) ? ob : za
                    })) ? void 0 : p.args;
                    if (!m) return h;
                    var r = void 0 === m.bidderRequests ? [] : m.bidderRequests;
                    p = void 0 === m.bidsReceived ? [] : m.bidsReceived;
                    var z = m.auctionId;
                    m = m.timestamp;
                    if (!z || null == m || !r.length) return h;
                    oH.has(g) || _.pn(g, function() {
                        return oH.delete(g)
                    });
                    oH.set(g, m);
                    m = Fs(h);
                    Math.random() < _.Kd(fv) && b.version && kH.test(b.version) && x(m, 6, b.version);
                    l = new w.Map;
                    var A = Sg(function() {
                            return zk(c, z)
                        }),
                        I = hc(a.R[g.getDomId()], zi, 9);
                    r = _.y(r);
                    for (var F = r.next(); !F.done; F = r.next()) {
                        var L = F.value;
                        F = L.bidderCode;
                        var G = L.timeout,
                            O = L.start,
                            P = {};
                        L = _.y(L.bids);
                        for (var U = L.next(); !U.done; P = {
                                xb: P.xb
                            }, U = L.next()) {
                            var aa = U.value;
                            P.xb = aa.bidId;
                            var ca = aa.transactionId;
                            U = aa.adUnitCode;
                            aa = aa.getFloor;
                            if (P.xb && k(U)) {
                                e = !0;
                                ok(m, g, U);
                                ca && !aj(m, 4) && x(m, 4, ca);
                                aj(m, 8) || x(m, 8, G);
                                var Na = _.u(p, "find").call(p, function(za) {
                                    return function(ob) {
                                        return ob.requestId === za.xb
                                    }
                                }(P));
                                ca = hk(m, kk(new lk, F));
                                qk(m, ca, U, a.G.value, a.O.value, aa);
                                O && a.D.value && _.E(dv) && x(m, 7, a.D.value < O);
                                Na ? (jk(ca, 1), "number" === typeof Na.timeToRespond && mk(ca, Na.timeToRespond), U = gk(Na, l, I), ik(ca, U)) : (U = A().get(P.xb)) && !U.Cd ? mk(jk(ca, 2), Math.round(U.latency)) : (jk(ca, 3), mk(ca, G))
                            }
                        }
                    }
                    var ya;
                    (null == (ya = b.getConfig) ? 0 : ya.call(b).useBidCache) && nk(m, g, z, I, l, b);
                    hF(a.K, g, l);
                    return h
                });
            return e ? f : null
        },
        mH = function(a) {
            var b, c;
            return !!(null == (b = a.o.value) ? 0 : null == (c = b["*"]) ? 0 : c.qc) || a.Ja.split(",").some(function(d) {
                var e, f;
                return !!(null == (e = a.o.value) ? 0 : null == (f = e[d]) ? 0 : f.qc)
            })
        },
        oH = new w.Map;
    var Ao = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.B = Ix(this);
        this.o = Y(this, b);
        this.l = new Fx(c);
        this.G = Y(this, d);
        this.D = Y(this, e)
    };
    _.R(Ao, Z);
    Ao.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.y(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    yb: b.yb,
                    Sb: b.Sb
                }, d = c.next()) b.yb = d.value, b.Sb = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new qi("hbm_brt");
                        nh(g, a.context);
                        K(g, "et", e.yb);
                        K(g, "sf", !!a.G.value);
                        var h;
                        K(g, "qqid", null != (h = a.D.value) ? h : "");
                        var k, l, n;
                        K(g, "bc", String(null != (n = null != (l = f.bidderCode) ? l : null == (k = f.bid) ? void 0 : k.bidder) ? n : ""));
                        si(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.yb, b.Sb), _.pn(this, function(e) {
                return function() {
                    return void _.gg(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.yb, e.Sb))
                    }, !0)
                }
            }(b))
        }
        this.B.notify()
    };
    Ao.prototype.A = function() {
        this.B.notify()
    };
    var pH = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        Kx(this, b);
        Kx(this, c)
    };
    _.R(pH, Z);
    pH.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var qH = function(a, b, c) {
        Z.call(this, a, 981);
        this.l = b;
        this.requestBidsConfig = c;
        this.B = new Gx
    };
    _.R(qH, Z);
    qH.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.l) ? void 0 : a.get("*")) ? b : _.Kd(gv);
        c && (this.requestBidsConfig.timeout = c);
        this.B.notify()
    };
    var rH = function(a, b, c, d, e) {
        _.ww.call(this);
        this.j = a;
        this.A = b;
        this.C = c;
        this.l = d;
        this.pbjs = e
    };
    _.R(rH, _.ww);
    rH.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            _.E(bv) && (a.timeout = 1);
            var d = new $d;
            _.Qm(this, d);
            var e = new qH(this.j, this.l, a),
                f = new iH(this.j, this.A, this.C, this.pbjs, b, a);
            D(d, e);
            D(d, f);
            D(d, new pH(this.j, f.B, e.B, c, b, a));
            ae(d)
        }
    };
    var sH = function(a, b, c, d, e, f) {
        Z.call(this, a, 951);
        this.F = window;
        this.D = X(this, b);
        this.o = Y(this, d);
        this.G = Y(this, e);
        this.l = Y(this, f);
        Kx(this, c)
    };
    _.R(sH, Z);
    sH.prototype.j = function() {
        var a = this,
            b, c = (null == (b = this.o.value) ? void 0 : b.size) || _.Kd(ak),
            d;
        b = (null == (d = this.l.value) ? void 0 : d.size) || _.Kd(gv);
        var e = this.D.value,
            f;
        d = null != (f = ff().pbjs_hooks) ? f : [];
        f = new rH(this.context, this.o.value, this.G.value, this.l.value, e);
        _.Qm(this, f);
        d = _.y(d);
        for (var g = d.next(); !g.done; g = d.next()) f.push(g.value);
        d = !!ff().pbjs_hooks;
        if (c || b || d) ff().pbjs_hooks = Bk(this.context, f);
        !c && !b || d || (c = null == e ? void 0 : e.que, b = function() {
            var h;
            null == e || null == (h = e.requestBids) || h.before.call(a.F, function(k, l) {
                return ff().pbjs_hooks.push({
                    context: a.F,
                    nextFunction: k,
                    requestBidsConfig: l
                })
            }, 0)
        }, (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(b) : null == c || c.unshift(b))
    };
    var al = null;
    var Ll = 0,
        Gl = new _.Fg(-9, -9);
    var tm = 0;
    var tH = function(a) {
            this.j = a;
            this.A = [];
            this.m = "";
            this.H = new w.Set(Ri(Rv));
            a = _.y(J(this.j.rb.ba, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.H.add(b.value)
        },
        vH = function(a) {
            if (0 === a.j.bb.fa.length) return "";
            uH(a);
            var b = a.j,
                c = b.rb.ba,
                d, e;
            b = null != (e = null == (d = dm(b.bb.N.W)) ? void 0 : J(d, 9)) ? e : !1;
            d = J(c, 8);
            a.m = b || d || !Bd(c) ? "https://pagead2.googlesyndication.com/gampad/ads?" : "https://securepubads.g.doubleclick.net/gampad/ads?";
            c = a.A;
            if (_.E(yv))
                for (d = Math.random, e = c.length - 1; 0 < e; e--) {
                    b = Math.floor(d() * (e + 1));
                    var f = c[e];
                    c[e] = c[b];
                    c[b] = f
                }
            c = _.y(c);
            for (e = c.next(); !e.done; e = c.next()) {
                d = a;
                e = e.value;
                b = e.value;
                var g = e.options;
                f = void 0 === g.la ? "," : g.la;
                g = void 0 === g.wa ? !1 : g.wa;
                if (b = "object" !== typeof b ? null == b || !g && 0 === b ? null : encodeURIComponent(b) : Array.isArray(b) && b.length ? encodeURIComponent(b.join(f)) : null) "?" !== d.m[d.m.length - 1] && (d.m += "&"), d.m += e.Jd + "=" + b
            }
            return a.m
        },
        uH = function(a) {
            var b = a.j,
                c = b.rb,
                d = c.F,
                e = c.K,
                f = c.td,
                g = c.ba,
                h = c.Ia;
            c = c.ja;
            var k = b.bb,
                l = k.N,
                n = k.Da,
                m = k.fa;
            k = k.Bd;
            var p = b.Md.xd;
            b = b.hd.jd;
            var r = l.W,
                z = l.R,
                A = e.Id;
            wH(a, cm(a.j));
            wH(a, Fm(a.j));
            wH(a, Ol(a.j));
            wH(a, Em(a.j));
            wH(a, new w.Map([
                ["eid", {
                    value: f
                }],
                ["debug_experiment_id", {
                    value: lx().split(",")
                }]
            ]));
            wH(a, mm(a.j));
            wH(a, new w.Map([
                ["co", {
                    value: 0 !== ud(r, 24, 0) ? ud(r, 24, 0) : null,
                    options: {
                        wa: !0
                    }
                }]
            ]));
            wH(a, fm(r, g));
            f = m.map(function(I) {
                return z[I.getDomId()]
            });
            wH(a, rm(m, f, k, e, h, l, d));
            wH(a, om(m, l, d));
            wH(a, lm(e, m, k, d));
            wH(a, nl(z[m[0].getDomId()], h));
            wH(a, Fk(m, z, Cd(g, d)));
            wH(a, Gk(f));
            wH(a, Tl(r, m, l, n, d));
            wH(a, rl(c, g, r, Vl(r.na()), d));
            wH(a, new w.Map([
                ["arp", {
                    value: Vh(d) ? 1 : null
                }],
                ["abxe", {
                    value: Tc(d.top) || qu(d.IntersectionObserver) ? 1 : null
                }]
            ]));
            wH(a, new w.Map([
                ["expflags", {
                    value: _.ef(253) ? Ni(ov) || null : null
                }]
            ]));
            wH(a, vm(Vl(r.na()), d));
            wH(a, Il(l, ug(!0, d), d));
            wH(a, Hl(r, m, d.document, z, h));
            wH(a, Ik(m, e));
            wH(a, Kk(m, l));
            wH(a, ml(r, d));
            wH(a, $l(d, e, m, p, r, h, z));
            wH(a, new w.Map([
                ["rumc", {
                    value: _.E(iw) || _.C(bg).j ? A : null
                }],
                ["rume", {
                    value: _.E(Cv) ? 1 : null
                }]
            ]));
            wH(a, ul(d));
            wH(a, Kl(d));
            wH(a, cl(m, d));
            wH(a, Km(m, z, d));
            wH(a, new w.Map([
                ["psts", {
                    value: eF(e, m)
                }]
            ]));
            wH(a, Wk(g, d));
            wH(a, new w.Map([
                ["js", {
                    value: _.E(hv) ? dx(d) : null
                }],
                ["ms", {
                    value: _.E(hv) ? ex(A.toString(), d) : null
                }]
            ]));
            wH(a, Ml(m, d, l));
            wH(a, Dm());
            wH(a, Fl(m, z));
            wH(a, Cm(d));
            wH(a, wm(a.j));
            wH(a, Bl(m, Cd(g, d)));
            wH(a, gl(b))
        },
        xH = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.A.some(function(e) {
                return b === e.Jd
            });
            a.H.has(b) || null == c || a.A.push({
                Jd: b,
                value: c,
                options: d
            })
        },
        wH = function(a, b) {
            b = _.y(_.u(b, "entries").call(b));
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = _.y(c.value);
                c = d.next().value;
                d = d.next().value;
                xH(a, c, d.value, d.options)
            }
        };
    var AH = function(a, b) {
            var c = this;
            this.context = a;
            this.j = new w.Map;
            this.m = new w.Map;
            this.mb = _.C(bg);
            window.performance && qu(window.performance.now) && (_.bb(window, "DOMContentLoaded", _.$f(a, 334, function() {
                for (var d = _.y(c.j), e = d.next(); !e.done; e = d.next()) {
                    var f = _.y(e.value);
                    e = f.next().value;
                    f = f.next().value;
                    yH(c, e, f) && c.j.delete(e)
                }
            })), NE(b, TE, function(d) {
                var e = d.detail;
                d = e.bd;
                e = e.R;
                return void zH(c, jn(_.C(Oj), d), Q(e, 20))
            }), NE(b, UE, function(d) {
                var e = d.detail;
                d = e.bd;
                e = e.R;
                d = jn(_.C(Oj), d);
                e = Q(e, 20);
                var f = c.m.get(d);
                null != f ? sE(f, e) : zH(c, d, e)
            }))
        },
        zH = function(a, b, c) {
            yH(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.pn(b, function() {
                return a.j.delete(b)
            }))
        },
        yH = function(a, b, c) {
            var d = Qg(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new qE({
                F: window,
                mb: a.mb,
                eb: d,
                Aa: function(e) {
                    return void dg(a.context, 336, e)
                },
                nf: _.E(iw)
            });
            if (!d.j) return !1;
            sE(d, c);
            a.m.set(b, d);
            $E(_.C(XE), b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var BH = function(a) {
        this.m = a;
        this.A = this.j = 0
    };
    BH.prototype.push = function() {
        for (var a = _.y(Ma.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(w.globalThis), this.j++)
            } catch (c) {
                this.A++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(wF(String(c)))
            }
        }
        this.m.info(xF(String(this.j), String(this.A)));
        return this.j
    };
    var CH = function(a, b) {
        Z.call(this, a, 931);
        this.D = W(this);
        this.l = W(this);
        this.G = W(this);
        this.o = Y(this, b)
    };
    _.R(CH, Z);
    CH.prototype.j = function() {
        var a = _.Kd(ak) || this.o.value,
            b = new w.Map;
        this.D.j(new w.Map);
        if (a) {
            var c;
            a = _.y(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = hc(d, Ks, 1);
                c = 1 === ud(c[0], 1, 0) ? Or(c[0]) : Pr(c[0]);
                d = vd(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.l.j(b);
        this.G.j(Date.now())
    };
    var DH = function(a, b) {
        Z.call(this, a, 981);
        this.l = W(this);
        this.o = Y(this, b)
    };
    _.R(DH, Z);
    DH.prototype.j = function() {
        var a = new w.Map,
            b, c = _.y(null != (b = this.o.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = hc(b, Ks, 1);
            d = 1 === ud(d[0], 1, 0) ? Or(d[0]) : Pr(d[0]);
            a.set(d, vd(b, 2))
        }
        this.l.j(a)
    };
    var EH = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.B = new Gx;
        this.D = Y(this, b);
        _.E(Gv) && (this.o = Y(this, c), this.l = Y(this, d))
    };
    _.R(EH, Z);
    EH.prototype.j = function() {
        var a;
        (B = _.u(Object, "entries").call(Object, null != (a = this.D.value) ? a : {}), _.u(B, "find")).call(B, function(f) {
            var g = _.y(f);
            f = g.next().value;
            g = g.next().value;
            return "*" !== f && (null == g ? void 0 : g.qc)
        }) && (_.C(yp).l = !0);
        Ap(25);
        if (_.E(Gv)) {
            var b, c, d, e;
            a = _.y([].concat(_.ad(null != (d = null == (b = this.o) ? void 0 : b.value) ? d : []), _.ad(null != (e = null == (c = this.l) ? void 0 : c.value) ? e : [])));
            for (b = a.next(); !b.done; b = a.next()) zp(b.value)
        }
        this.B.notify()
    };
    var FH = function(a, b) {
        Z.call(this, a, 892, _.Kd(Iv));
        this.o = W(this);
        this.D = W(this);
        this.l = W(this);
        this.G = Jx(this, b)
    };
    _.R(FH, Z);
    FH.prototype.j = function() {
        var a = this.G.value;
        if (!a) throw Error("config timeout");
        Ax(this.o, jc(a, Ps, 3));
        Ax(this.D, jc(a, Rs, 2));
        Ax(this.l, Xb(a, 4))
    };
    FH.prototype.L = function(a) {
        this.A(a)
    };
    FH.prototype.A = function(a) {
        Bx(this.o, a);
        Bx(this.D, a);
        zx(this.l)
    };
    var GH = [{
            name: "Interstitial",
            Lc: 1
        }, {
            name: "TopAnchor",
            Lc: 2
        }, {
            name: "BottomAnchor",
            Lc: 3
        }],
        HH = function(a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.B = W(this)
        };
    _.R(HH, Z);
    HH.prototype.j = function() {
        var a = this;
        this.B.j(GH.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.Lc;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new $s;
            e = new Ts;
            b = x(e, 2, b);
            c = x(b, 1, "/22639388115/example/" + c.toLowerCase());
            return uf(d, 5, at, c)
        }))
    };
    var IH = function(a, b) {
        Z.call(this, a, 969);
        this.F = b;
        this.o = W(this);
        this.l = W(this)
    };
    _.R(IH, Z);
    IH.prototype.j = function() {
        var a = this;
        if (_.E(tv)) {
            var b = "",
                c = void 0,
                d = function() {
                    return void a.F.clearInterval(c)
                },
                e = _.$f(this.context, this.id, function() {
                    var f, g, h;
                    return _.db(function(k) {
                        switch (k.j) {
                            case 1:
                                f = Qe(a.F);
                                a.l.j(!!f);
                                if (!f) {
                                    d();
                                    k.j = 2;
                                    break
                                }
                                k.A = 3;
                                return eb(k, f, 5);
                            case 5:
                                b = null != (g = k.m) ? g : "0";
                                b.length > _.Kd(vv) && (dg(a.context, a.id, new mj("ML:" + (_.E(uv) ? b : b.length))), b = "0", d());
                                gb(k, 2);
                                break;
                            case 3:
                                h = hb(k), dg(a.context, a.id, h), b = "0", d();
                            case 2:
                                a.o.j(function() {
                                    return b
                                }), k.j = 0
                        }
                    })
                });
            c = this.F.setInterval(e, 1E3 * _.Kd(sv));
            _.pn(this, d);
            e()
        } else this.l.j(!1), this.o.j(function() {
            return ""
        })
    };
    IH.prototype.A = function() {
        this.l.j(!1);
        this.o.j(function() {
            return ""
        })
    };
    var JH = function(a, b, c, d) {
        Z.call(this, a, 906, _.Kd(Hv));
        this.F = b;
        this.l = Ix(this);
        this.D = Jx(this, c);
        this.o = jo(d, TE).then(function(e) {
            return bf(e.detail.R.getAdUnitPath())
        });
        this.F !== this.F.top && this.l.notify()
    };
    _.R(JH, Z);
    JH.prototype.j = function() {
        var a = this,
            b;
        return _.db(function(c) {
            if (a.F !== a.F.top) return c.return();
            if (b = a.D.value) return eb(c, KH(a, b), 0);
            a.l.notify();
            c.j = 0
        })
    };
    var KH = function(a, b) {
            var c, d;
            return _.db(function(e) {
                c = hc(b, Ss, 1);
                if (!c.length) return a.l.notify(), e.return();
                d = c[0];
                return (B = [2, 3], _.u(B, "includes")).call(B, ud(d, 3, 0)) ? (LH(a, cn(d, 1)), e.return()) : eb(e, _.gg(a.context, 917, function() {
                    return MH(a, b)
                }), 0)
            })
        },
        MH = function(a, b) {
            var c, d;
            return _.db(function(e) {
                if (1 == e.j) return eb(e, a.o, 2);
                c = e.m;
                (d = hc(b, Ss, 1).some(function(f) {
                    return cn(f, 1) === c
                })) ? LH(a, c): (hh("pp_iris_failure", function(f) {
                    K(f, "fnc", c);
                    nh(f, a.context)
                }, _.Kd(Jv)), a.l.notify());
                e.j = 0
            })
        },
        LH = function(a, b) {
            var c = Iw(a.F, b, function(d) {
                if (!d) {
                    d = Tt(c.j);
                    for (var e = _.y(document.getElementsByName("googlefcPresent")), f = e.next(); !f.done; f = e.next()) d.fe(f.value)
                }
                a.l.notify()
            });
            c.start()
        };
    JH.prototype.L = function(a) {
        this.A(a)
    };
    JH.prototype.A = function() {
        this.l.notify()
    };
    var NH = function(a, b) {
        Z.call(this, a, 964);
        var c = this;
        this.F = b;
        this.l = new Gx;
        this.F === this.F.top && (Kx(this, this.l), (a = mx("loadEventStart", this.F)) ? (a = _.Gd(this.F) - a, 1E3 <= a ? this.l.notify() : setTimeout(_.$f(this.context, this.id, function() {
            return void c.l.notify()
        }), 1E3 - a)) : (a = function() {
            return void setTimeout(_.$f(c.context, c.id, function() {
                return void c.l.notify()
            }), 1E3)
        }, "complete" === this.F.document.readyState ? a() : iF(this, this.id, this.F, "load", a)))
    };
    _.R(NH, Z);
    NH.prototype.j = function() {
        var a = this;
        this.F === this.F.top && hh("gpt_dens", function(b) {
            nh(b, a.context);
            var c = ug(!1, a.F),
                d = c.height;
            K(b, "vw", c.width);
            K(b, "vh", d);
            d = "CSS1Compat" === a.F.document.compatMode ? a.F.document.documentElement : a.F.document.body;
            c = d.scrollHeight;
            d = d.scrollWidth;
            K(b, "ph", c);
            K(b, "pw", d);
            var e = 0,
                f = 0,
                g = 0,
                h = a.F,
                k = {
                    Fe: !1
                },
                l = ky(h, ".google-auto-placed"),
                n = ky(h, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
                m = ky(h, "ins.adsbygoogle[data-ad-format=autorelaxed]");
            var p = (_.jy(h) || ky(h, "div[id^=div-gpt-ad]")).concat(ky(h, "iframe[id^=google_ads_iframe]"));
            var r = ky(h, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                z = ky(h, "ins.adsbygoogle-ablated-ad-slot"),
                A = ky(h, "div.googlepublisherpluginad"),
                I = ky(h, "html > ins.adsbygoogle"),
                F = [].concat(ky(h, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ky(h, "body ins.adsbygoogle"));
            h = [];
            k = _.y([
                [k.Og, l],
                [k.Fe, n],
                [k.Rg, m],
                [k.Pg, p],
                [k.Sg, r],
                [k.Ng, z],
                [k.Qg, A],
                [k.Tg, I]
            ]);
            for (l = k.next(); !l.done; l = k.next()) n = _.y(l.value), l = n.next().value, n = n.next().value, !1 === l ? h = h.concat(n) : F = F.concat(n);
            F = ly(F);
            k = ly(h);
            h = F.slice(0);
            F = _.y(k);
            for (k = F.next(); !k.done; k = F.next())
                for (k = k.value, l = 0; l < h.length; l++)(k.contains(h[l]) || h[l].contains(k)) && h.splice(l, 1);
            h = _.y(h);
            for (F = h.next(); !F.done; F = h.next()) k = F.value.getBoundingClientRect(), F = k.width, k = k.height, e += k, f += k * F, g++;
            K(b, "act", g);
            K(b, "aht", e);
            K(b, "ahd", Math.round(e / c * 100));
            K(b, "aa", f);
            K(b, "aad", Math.round(f / (c * d) * 100))
        }, _.Kd(Tv))
    };
    var OH = function(a) {
        Z.call(this, a, 891);
        this.l = W(this);
        var b = new Co;
        this.o = X(this, b);
        (a = _.ef(260)) ? a(function(c, d) {
            if (d) Bx(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.C || Bx(b, Error("malformed response"))
            }
        }): Bx(b, Error("missing input"))
    };
    _.R(OH, Z);
    OH.prototype.j = function() {
        this.l.j(new ct(this.o.value))
    };
    var PH = function(a, b) {
        Z.call(this, a, 966);
        this.F = b;
        this.l = W(this)
    };
    _.R(PH, Z);
    PH.prototype.j = function() {
        var a = this,
            b = Re(this.F);
        if (b) this.l.j(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.F, "_pbjsGlobals")) && !b.configurable) hh("pdpg_error", function(d) {
            nh(d, a.context)
        }, _.Kd(ev));
        else {
            var c = null;
            Object.defineProperty(this.F, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Re(a.F)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    PH.prototype.A = function() {};
    var QH = function(a, b) {
        Z.call(this, a, 979);
        this.F = b;
        this.B = W(this)
    };
    _.R(QH, Z);
    QH.prototype.j = function() {
        var a = this;
        _.E(Xv) && "function" === typeof this.F.document.browsingTopics ? Ih(this.F).then(function(b) {
            a.B.j(b)
        }) : zx(this.B)
    };
    QH.prototype.A = function() {
        zx(this.B)
    };
    var Wm = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.Za = b;
        this.B = W(this);
        this.l = X(this, b);
        Kx(this, c);
        Kx(this, d)
    };
    _.R(Wm, Z);
    Wm.prototype.j = function() {
        this.B.j(this.l.value)
    };
    var Tm = function(a, b, c) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = W(this);
        this.D = null;
        _.ef(260) && (this.D = X(this, c))
    };
    _.R(Tm, Z);
    Tm.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.db(function(e) {
            if (1 == e.j) {
                if (null != (c = null == (b = a.D) ? void 0 : b.value) ? !c : !NC(a.o)) {
                    zx(a.l);
                    e.j = 0;
                    return
                }
                return eb(e, QC(a.o), 3)
            }
            d = e.m;
            a.l.j(d);
            e.j = 0
        })
    };
    var Vm = function(a, b, c, d, e, f) {
        Z.call(this, a, 874);
        this.o = b;
        this.F = c;
        this.G = d;
        this.l = Ix(this);
        Kx(this, e);
        this.D = X(this, f)
    };
    _.R(Vm, Z);
    Vm.prototype.j = function() {
        var a = this,
            b = new yw(this.F, -1, _.E(lw));
        _.Qm(this, b);
        Aw(b) ? (this.o.info(gG()), Dw(b, _.$f(this.context, 661, function(c) {
            var d = a.D.value,
                e, f, g;
            if (g = !(null == (e = a.G) ? 0 : J(e, 9))) {
                var h = void 0 === h ? !1 : h;
                g = Cw(c) ? !1 === c.gdprApplies || "tcunavailable" === c.tcString || void 0 === c.gdprApplies && !h || "string" !== typeof c.tcString || !c.tcString.length ? !0 : Ew(c, "1") : !1
            }
            e = x(d, 5, g);
            g = !Gw(c, ["3", "4"]);
            e = x(e, 9, g);
            e = x(e, 2, c.tcString);
            g = null != (f = c.addtlConsent) ? f : "";
            f = x(e, 4, g);
            x(f, 7, c.internalErrorState);
            f = !Gw(c, ["3", "4"]);
            x(d, 9, f);
            null != c.gdprApplies && x(d, 3, c.gdprApplies);
            _.E(Vv) && !Gw(c, ["2", "7", "9", "10"]) && x(d, 8, !0);
            "tcunavailable" === c.tcString ? a.o.info(hG("failed")) : a.o.info(hG("succeeded"));
            a.l.notify()
        }))) : this.l.notify()
    };
    var Um = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.D = b;
        this.F = c;
        this.l = Ix(this);
        Kx(this, d);
        this.o = X(this, e)
    };
    _.R(Um, Z);
    Um.prototype.j = function() {
        var a = this,
            b = new GC(this.F);
        _.Qm(this, b);
        if (IC(b)) {
            var c = _.$f(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && x(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.D.info(fG());
            KC(b, c)
        } else this.l.notify()
    };
    var Nm = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.Za = W(this)
    };
    _.R(Nm, Z);
    Nm.prototype.j = function() {
        var a = new ty,
            b, c = null == (b = this.l) ? void 0 : J(b, 9);
        x(a, 5, !c);
        this.Za.j(a)
    };
    var Rm = function(a, b, c) {
        Z.call(this, a, 896);
        this.o = b;
        this.D = c;
        this.l = W(this)
    };
    _.R(Rm, Z);
    Rm.prototype.j = function() {
        var a = this;
        _.ef(260) ? this.D.then(_.$f(this.context, this.id, function() {
            return void a.l.j(NC(a.o))
        })) : this.l.j(NC(this.o))
    };
    var Sm = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.F = b;
        this.l = d;
        this.o = X(this, c)
    };
    _.R(Sm, Z);
    Sm.prototype.j = function() {
        var a = this;
        this.l && _.gg(this.context, 894, function() {
            return void hh("cmpMet", function(b) {
                nh(b, a.context);
                var c = new yw(a.F);
                _.Qm(a, c);
                var d = new GC(a.F);
                _.Qm(a, d);
                K(b, "fc", Number(a.o.value));
                K(b, "tcfv1", Number(!!a.F.Kg));
                K(b, "tcfv2", Number(Aw(c)));
                K(b, "usp", Number(IC(d)));
                K(b, "ptt", 17)
            }, a.l)
        })
    };
    var Do = function(a, b, c) {
        Z.call(this, a, 706);
        this.F = b;
        this.B = W(this);
        this.l = X(this, c)
    };
    _.R(Do, Z);
    Do.prototype.j = function() {
        Ax(this.B, Cd(this.l.value, this.F))
    };
    var Ym = new w.Map([
        [1, 5],
        [2, 2],
        [3, 3]
    ]);
    var ip = function(a, b, c, d, e) {
        e = void 0 === e ? document : e;
        Z.call(this, a, 912);
        this.googletag = c;
        this.W = d;
        this.T = e;
        this.l = X(this, b)
    };
    _.R(ip, Z);
    ip.prototype.j = function() {
        if (_.E(Lv))
            for (var a = _.y(this.l.value), b = a.next(); !b.done; b = a.next()) switch (b = b.value, ec(b, at)) {
                case 5:
                    var c = void 0;
                    an(this.T, this.googletag, jc(b, Ts, fc(b, at, 5)), jc(b, Dl, 4), null != (c = this.W) ? c : Vf().j);
                    break;
                case 6:
                    var d = jc(b, Zs, fc(b, at, 6)),
                        e;
                    if (e = wg(d, 2)) {
                        var f = e = c = void 0;
                        d = jc(d, Xs, 2);
                        null != (f = window.top) && f.location.href ? (f = yg(null == (e = window.top) ? void 0 : e.location.href), e = null == (c = Xb(d, 1)) ? void 0 : _.u(c, "includes").call(c, f)) : e = !1
                    }
                    e && (c = void 0, dn(this.T, this.googletag, jc(b, Zs, fc(b, at, 6)), jc(b, Dl, 4), null != (c = this.W) ? c : Vf().j))
            }
    };
    var RH = function(a, b, c, d) {
        Z.call(this, a, 890);
        this.o = b;
        this.D = c;
        this.l = Y(this, d)
    };
    _.R(RH, Z);
    RH.prototype.j = function() {
        var a = this;
        ie(this.o, this.l.value, function(b, c) {
            dg(a.context, b, c);
            var d, e;
            null == (d = a.D) || null == (e = d.error) || e.call(d, c)
        })
    };
    var SH = function(a, b) {
        _.ww.call(this);
        this.context = a;
        this.ga = b;
        this.aa = new OH(this.context);
        this.C = new FH(this.context, this.aa.l);
        this.I = this.C.l;
        this.j = new jH(this.context, this.C.o);
        this.A = new CH(this.context, this.j.D);
        this.G = new DH(this.context, this.j.G);
        this.M = new PH(this.context, window);
        this.O = new QH(this.context, window);
        this.V = new EH(this.context, this.j.o, this.I, this.j.l);
        this.o = this.A.l;
        this.ca = this.A.G;
        this.L = null;
        this.ea = this.j.o;
        this.U = this.j.l;
        this.D = this.A.D;
        this.P = this.M.l;
        this.Z = this.G.l;
        this.da = this.O.B;
        this.J = this.V.B;
        _.Qm(this, this.M);
        _.Qm(this, this.aa);
        _.Qm(this, this.C);
        _.Qm(this, this.A);
        _.Qm(this, this.G);
        _.Qm(this, this.j);
        _.Qm(this, this.O);
        _.Qm(this, this.V);
        _.ef(260) || (zx(this.I), zx(this.ea), zx(this.U), zx(this.o), zx(this.ca), zx(this.D), zx(this.Z), this.J.notify());
        _.E(Xv) || zx(this.da);
        0 < _.Kd(sv) && (this.l = new IH(this.context, window), _.Qm(this, this.l), this.ha = this.l.o, this.ia = this.l.l)
    };
    _.R(SH, _.ww);
    var TH = function(a, b) {
        var c = new $d;
        _.Qm(a, c);
        D(c, a.M);
        D(c, a.aa);
        D(c, a.C);
        D(c, a.j);
        D(c, a.A);
        D(c, a.V);
        D(c, a.G);
        b = new JH(a.context, window, a.C.D, b);
        a.L = b.l.promise;
        D(c, b);
        var d;
        b = new HH(a.context, null != (d = window.location.hash) ? d : "");
        D(c, b);
        D(c, new ip(a.context, b.B, ff(), null));
        _.Kd(Tv) && D(c, new NH(a.context, window));
        a.l && D(c, a.l);
        _.E(Xv) && D(c, a.O);
        D(c, new sH(a.context, a.P, a.J, a.o, a.D, a.Z));
        _.E(dw) || !_.E(Fv) || Rj() || (d = Xm(a.context, a.ga, null, window, a.L).Za, d = new Do(a.context, window, d), D(c, d), a = new RH(a.context, ff(), console, d.B), D(c, a));
        ae(c)
    };
    var UH = ["Debug", "Info", "Warning", "Error", "Fatal"],
        VH = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    q = VH.prototype;
    q.getSlot = function() {
        return this.j
    };
    q.getLevel = function() {
        return this.level
    };
    q.getTimestamp = function() {
        return this.timestamp
    };
    q.getMessage = function() {
        return this.message
    };
    q.toString = function() {
        return this.timestamp.toTimeString() + ": " + UH[this.level] + ": " + this.message
    };
    var WH = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            128: function() {
                return "ContentService is deprecated. The content() method will be removed from googletag soon. For more information, see https://developers.google.com/publisher-tag/reference#googletag.ContentService."
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return kn(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            }
        },
        XH = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var YH = function(a) {
            this.context = a;
            this.j = _.u(Array, "from").call(Array, {
                length: 1E3
            });
            this.A = this.H = this.m = 0;
            this.C = window
        },
        DG = function(a) {
            return a.j.filter(function(b) {
                return !!b
            })
        },
        EG = function(a, b) {
            return a.j.filter(function(c) {
                return c && c.getSlot() === b
            })
        },
        FG = function(a, b) {
            return a.j.filter(function(c) {
                return c && c.getLevel() >= b
            })
        };
    YH.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new VH(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.j[this.m] = c;
        this.m = (this.m + 1) % 1E3;
        g = _.Kd(mv) && 100 > this.H;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = WH[k] || XH[k];
        g && f && (b = _.Kd(mv), hh("gpt_eventlog_messages", function(n) {
            ++e.H;
            nh(n, e.context);
            K(n, "level", a);
            K(n, "messageId", k);
            K(n, "args", h.join("|"));
            l || K(n, "noMsg", !0);
            var m = Error(),
                p;
            var r = null != (p = m.stack) ? p : "";
            m = m.message;
            try {
                -1 == r.indexOf(m) && (r = m + "\n" + r);
                for (var z; r != z;) z = r, r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var A = r.replace(RegExp("\n *", "g"), "\n")
            } catch (I) {
                A = m
            }
            K(n, "stack", A)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new mj(b);
            d = this.A < _.Kd(nv) && f && _.t.console;
            if (this.C === top && d || _.u(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse"))(function(n) {
                var m, p, r, z;
                return void(2 === a ? null == (p = (m = _.t.console).warn) ? void 0 : p.call(m, n) : null == (z = (r = _.t.console).error) ? void 0 : z.call(r, n))
            })(b), this.A++
        }
        return c
    };
    YH.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var N = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    YH.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var qn = "3rd party ad content";
    var ZH = function(a, b) {
            this.serviceName = b;
            this.slot = a.j
        },
        $H = function(a, b) {
            ZH.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.R($H, ZH);
    var aI = function() {
        ZH.apply(this, arguments)
    };
    _.R(aI, ZH);
    var bI = function(a, b, c) {
        ZH.call(this, a, b);
        this.inViewPercentage = c
    };
    _.R(bI, ZH);
    var cI = function() {
        ZH.apply(this, arguments)
    };
    _.R(cI, ZH);
    var dI = function() {
        ZH.apply(this, arguments)
    };
    _.R(dI, ZH);
    var eI = function(a, b, c, d) {
        ZH.call(this, a, b);
        this.payload = d;
        this.makeRewardedVisible = c
    };
    _.R(eI, ZH);
    var fI = function(a, b, c) {
        ZH.call(this, a, b);
        this.payload = this.payload = c
    };
    _.R(fI, ZH);
    var gI = function() {
        ZH.apply(this, arguments)
    };
    _.R(gI, ZH);
    var hI = function() {
        ZH.apply(this, arguments)
    };
    _.R(hI, ZH);
    var iI = function() {
        ZH.apply(this, arguments)
    };
    _.R(iI, ZH);
    var jI = new w.Set,
        kI = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new mj("Reached Limit for addEventListener");
        }, 3E5),
        lI = function(a, b) {
            LE.call(this, a);
            this.j = b;
            this.A = [];
            this.C = !1;
            this.D = 0;
            this.I = new w.Map;
            jI.add(this);
            this.j.info(zF(this.getName()))
        };
    _.R(lI, LE);
    q = lI.prototype;
    q.enable = function() {
        this.C || (this.C = !0, Ap(6), this.Qc())
    };
    q.Sa = function(a, b) {
        this.A.push(a);
        var c = new dI(a, this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.j.info(CF(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        dc(b, 4, a)
    };
    q.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return da(b.A, c)
        })
    };
    q.addEventListener = function(a, b) {
        var c = this;
        if (this.D >= _.Kd(lv) && 0 < _.Kd(lv)) kI();
        else {
            var d;
            null != (d = this.I.get(a)) && d.has(b) || (this.I.has(a) || this.I.set(a, new w.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.j.error(TF(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, this.I.get(a).set(b, d), NE(this, a, d), this.D++)
        }
    };
    q.removeEventListener = function(a, b) {
        var c, d = null == (c = this.I.get(a)) ? void 0 : c.get(b);
        if (!d || !ME(this, a, d)) return !1;
        this.D--;
        return this.I.get(a).delete(b)
    };
    var Ln = function(a) {
            for (var b = _.y(jI), c = b.next(); !c.done; c = b.next()) c = c.value, c.C && a.info(BF()), c.enable()
        },
        vn = function(a) {
            for (var b = _.y(jI), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
        };
    var In = function(a, b, c) {
        lI.call(this, a, b);
        this.L = c;
        this.ads = new w.Map;
        this.l = {};
        this.G = this.ib = !1;
        _.C(yp).A = !0
    };
    _.R(In, lI);
    q = In.prototype;
    q.set = function(a, b) {
        "string" === typeof a && a.length ? (this.l[a] = b, this.j.info(AF(a, String(b), this.getName()))) : N(this.j, ci("CompanionAdsService.set", [a, b]));
        return this
    };
    q.get = function(a) {
        var b;
        return null != (b = this.l[a]) ? b : null
    };
    q.display = function(a, b, c, d) {
        this.enable();
        b = Uj(this.context, this.j, a, b, c);
        a = b.slotId;
        b = b.Ra;
        this.Sa(a, b);
        null == b || b.setClickUrl(d);
        hn(this.j, null == a ? void 0 : a.getDomId())
    };
    q.Sa = function(a, b) {
        var c = this;
        NE(a, PE, function(d) {
            J(d.detail, 11) && (mI(c, a).Ye = !0)
        });
        lI.prototype.Sa.call(this, a, b)
    };
    q.Qc = function() {};
    q.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.ib = a)
    };
    var yG = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.G && hh("ima_sdk_v", function(c) {
                a.G = !0;
                K(c, "v", b)
            });
            return String(Vf().j.getCorrelator())
        },
        wG = function(a, b) {
            var c = Vf().j,
                d = Vf().m;
            if (a.L.C) {
                var e = {
                    Da: 3
                };
                a.J && (e.Ta = a.J);
                a.V && (e.Ua = a.V);
                b = null != b ? b : a.A;
                c = Mg(c, d);
                d = e.Ta;
                var f = e.Ua;
                d && "number" !== typeof d || f && "number" !== typeof f || a.L.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.j.error(IF(b[0].getDomId()))
        },
        zG = function(a, b) {
            var c;
            return a.L.C && !(null == (c = a.ads.get(b)) || !c.Ye)
        },
        xG = function(a, b) {
            return a.A.filter(function(c) {
                return _.u(b, "includes").call(b, c.toString())
            })
        };
    In.prototype.getName = function() {
        return "companion_ads"
    };
    In.prototype.P = function() {};
    var AG = function(a, b, c, d) {
            b = new $H(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        },
        mI = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.pn(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var Fn = function(a, b) {
        lI.call(this, a, b);
        this.l = new w.Map
    };
    _.R(Fn, lI);
    Fn.prototype.getName = function() {
        return "content"
    };
    Fn.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        this.enable();
        b = Uj(this.context, this.j, a, b, c);
        a = b.slotId;
        b = b.Ra;
        this.Sa(a, b);
        b.setClickUrl(d);
        hn(this.j, a.getDomId())
    };
    Fn.prototype.destroySlots = function(a) {
        a = lI.prototype.destroySlots.call(this, a);
        for (var b = _.y(a), c = b.next(); !c.done; c = b.next()) this.l.delete(c.value);
        return a
    };
    var nI = function(a, b) {
        var c = a.l.get(b),
            d = Qg(b);
        !(c && void 0 !== c.content && d && a.C) || c && c.Qd || (c.Qd = !0, Sa(d, Ce(c.content, null)), hh("gpt_cont_svc", function(e) {
            var f;
            K(e, "cl", String(null == c ? void 0 : null == (f = c.content) ? void 0 : f.length));
            nh(e, a.context, [b.getAdUnitPath()])
        }), a.dispatchEvent("slotRenderEnded", 819, new $H(b, a.getName())))
    };
    Fn.prototype.Qc = function() {};
    Fn.prototype.P = function(a, b) {
        nI(this, b)
    };
    Fn.prototype.setContent = function(a, b) {
        var c = this;
        if (_.u(this.A, "includes").call(this.A, a) && "string" === typeof b && b.length) {
            var d = this.l.get(a);
            d ? d.content = b : this.l.set(a, {
                content: b,
                Qd: void 0
            });
            _.pn(a, function() {
                return void c.l.delete(a)
            });
            nI(this, a)
        }
    };
    var oI, pI, rI;
    oI = new w.Map([
        [2, {
            We: "page_level_ads"
        }]
    ]);
    pI = function(a, b) {
        var c = void 0 === c ? oI : c;
        this.context = a;
        this.A = b;
        this.j = c;
        this.m = new w.Map;
        this.loaded = new w.Set
    };
    _.qI = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.Oe);
        return a.m.get(b)
    };
    rI = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.$f(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.re ? [] : f.re).map(function(g) {
                    return _.qI(a, g).promise
                });
                w.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(ff(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    pI.prototype.load = function(a) {
        var b = _.qI(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).We;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.ef(172)) && "pagead2.googlesyndication.com" === Yl((c.src || "").match(_.Zl)[3] || null);
            c = Oa(Zc(c ? this.A.ne(d) : this.A.oe(d)).toString());
            d = {};
            var e = _.Kd(Mv),
                f = _.Kd(pv);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.u(Object, "keys").call(Object, d).length ? (c = Bq.exec(Pa(c).toString()), e = c[3] || "", d = Oa(c[1] + Cq("?", c[2] || "", d) + Cq("#", e))) : d = c;
            rI(this, a);
            ti(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    var sI = function() {
        this.resources = {}
    };
    var ap = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.K = b;
        this.format = c;
        this.slotId = d;
        this.F = e;
        this.B = Ix(this);
        this.l = Y(this, f);
        this.o = X(this, g);
        this.G = X(this, h);
        this.D = Y(this, k)
    };
    _.R(ap, Z);
    ap.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && null !== this.l.j.A && Gr(this.l.value, 12, !1)) {
            var b = this.D.value.ze,
                c = _.bF(this.K, this.slotId),
                d = this.G.value,
                e = this.o.value;
            _.ch(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (tI) tI.Bf(e);
            else {
                tI = new b(this.context, this.format, e, this.F, d, this.K, this.slotId);
                b = {};
                d = _.y(hc(this.l.value, dt, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[Q(f, 1)] = Q(f, 2);
                tI.Ef(b);
                tI.Bb();
                ZE(this.K, this.slotId, function() {
                    tI && (tI.za(), tI = null);
                    c && _.dF(a.K, a.slotId)
                })
            }
            _.pn(this, function() {
                return _.au(e)
            })
        }
        this.B.notify()
    };
    var tI = null;
    var bp = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.O = d;
        this.l = Y(this, e);
        this.o = X(this, f);
        this.J = X(this, g);
        this.D = Y(this, h);
        this.G = Y(this, k);
        this.M = jo(b, ko, function(l) {
            l = l.detail;
            try {
                var n = JSON.parse(l.data);
                return "sth" === n.googMsgType && "i-adframe-load" === n.msg_type
            } catch (m) {
                return !1
            }
        })
    };
    _.R(bp, Z);
    bp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m;
        return _.db(function(p) {
            if (1 == p.j) {
                b = a.l.value;
                if (!b || 5 !== a.format) return p.return();
                c = a.J.value;
                d = a.o.value;
                e = a.G.value;
                f = e.He;
                g = new _.xD(a.context);
                l = _.E(sj) && (null == (h = a.l.value) ? 0 : aj(h, 14)) ? 60 * (null == (k = a.l.value) ? NaN : Q(k, 14)) : uj(!0);
                n = new f(window, d, c, g, a.O, io(hc(b, dt, 13)), "22639388115" === bf(a.slotId.getAdUnitPath()), function() {
                    return void a.za()
                }, l, a.D.value);
                _.Qm(a, n);
                m = _.Kd(Bv);
                switch (m) {
                    case 0:
                        n.M();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return eb(p, a.M, 4);
                if (a.m) return p.return();
                n.M(!0)
            }
            p.j = 0
        })
    };
    var uI = function() {
        this.module = 2
    };
    uI.prototype.toString = function() {
        return String(this.module)
    };
    _.vI = new uI;
    var Yo = function(a, b, c, d, e) {
        Z.call(this, a, 846);
        this.D = b;
        this.format = c;
        this.B = W(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.R(Yo, Z);
    Yo.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.db(function(g) {
            if (1 == g.j) {
                c = (2 === a.format || 3 === a.format) && !(null == (b = a.l.value) || !Gr(b, 12, !1));
                d = 5 === a.format && a.o.value;
                if (!c && !d) {
                    zx(a.B);
                    g.j = 0;
                    return
                }
                e = a.B;
                f = e.j;
                return eb(g, a.D.load(_.vI), 3)
            }
            f.call(e, g.m);
            g.j = 0
        })
    };
    var wI = function(a, b, c, d) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.qa = c;
        Kx(this, d);
        this.l = new w.Promise(function(e) {
            for (var f = _.y(["closed", "ha_before_make_visible"]), g = f.next(); !g.done; g = f.next()) lo(b, g.value).then(e)
        })
    };
    _.R(wI, Z);
    wI.prototype.j = function() {
        var a = this;
        return _.db(function(b) {
            if (1 == b.j) return eb(b, a.l, 2);
            if (3 != b.j) return a.m ? b.return() : eb(b, a.qa.dispatchEvent("rewardedSlotClosed", 703, new gI(a.slotId, "publisher_ads")), 3);
            a.za();
            b.j = 0
        })
    };
    var xI = function(a, b, c, d) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.qa = c;
        Kx(this, d);
        var e = new Co;
        this.l = Y(this, e);
        lo(b, "granted").then(function(f) {
            var g;
            return void Ax(e, null != (g = f.payload) ? g : null)
        })
    };
    _.R(xI, Z);
    xI.prototype.j = function() {
        this.qa.dispatchEvent("rewardedSlotGranted", 702, new fI(this.slotId, "publisher_ads", this.l.value))
    };
    var yI = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        zI = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.F = b;
            this.G = f;
            this.B = Ix(this);
            this.l = X(this, c);
            this.o = X(this, d);
            Kx(this, e);
            this.D = new _.wC(this.F)
        };
    _.R(zI, Z);
    zI.prototype.j = function() {
        var a = this;
        if (!this.G.C) {
            var b = 0 === (0, _.Ij)() ? "rgba(1,1,1,0.5)" : "white";
            _.ch(this.o.value, _.u(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, yI));
            _.pn(this, _.FC(this.F.document, this.F));
            Uc(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.F === this.F.top) {
                this.F.location.hash = "goog_rewarded";
                var c = new _.zC(this.D);
                _.AC(c);
                _.pn(this, function() {
                    _.BC(c);
                    "goog_rewarded" === a.F.location.hash && (a.F.location.hash = "")
                })
            }
            this.B.notify()
        }
    };
    var AI = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.F = b;
        this.l = X(this, c);
        Kx(this, d)
    };
    _.R(AI, Z);
    AI.prototype.j = function() {
        if (this.F === this.F.top) var a = Uc(this.l.value),
            b = iF(this, 503, this.F, "hashchange", function(c) {
                Dq(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var BI = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.qa = c;
        this.B = Ix(this);
        this.l = X(this, d)
    };
    _.R(BI, Z);
    BI.prototype.j = function() {
        var a = this,
            b, c, d, e, f;
        return _.db(function(g) {
            if (1 == g.j) return b = a.l.value, c = new _.Oe, d = c.promise, e = c.resolve, a.qa.dispatchEvent("rewardedSlotReady", 701, new eI(a.slotId, "publisher_ads", e, null != (f = b.payload) ? f : null)), eb(g, d, 2);
            if (a.m) return g.return();
            a.B.notify();
            a.za();
            g.j = 0
        })
    };
    var CI = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        DI = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        EI = function(a, b, c) {
            Z.call(this, a, 691);
            var d = this;
            this.o = W(this);
            this.l = Ix(this);
            this.D = X(this, c);
            this.G = lo(b, "prefetched");
            lo(b, "ha_before_make_visible").then(function() {
                return void d.l.notify()
            })
        };
    _.R(EI, Z);
    EI.prototype.j = function() {
        var a = this,
            b;
        return _.db(function(c) {
            if (1 == c.j) {
                if (a.l.C) return c.return();
                _.ch(a.D.value, _.u(Object, "assign").call(Object, {
                    position: "absolute"
                }, 0 === (0, _.Ij)() ? DI : CI));
                return eb(c, a.G, 2)
            }
            b = c.m;
            if (a.m) return c.return();
            a.o.j(b);
            c.j = 0
        })
    };
    var dp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        4 === c && (this.Ha = new $d, _.Qm(this, this.Ha), c = new EI(this.context, b, f), D(this.Ha, c), a = new BI(this.context, b, d, c.o), D(this.Ha, a), g = new zI(this.context, e, f, g, a.B, c.l), D(this.Ha, g), D(this.Ha, new AI(this.context, e, f, g.B)), D(this.Ha, new xI(this.context, b, d, a.B)), D(this.Ha, new wI(this.context, b, d, a.B)))
    };
    _.R(dp, Z);
    dp.prototype.j = function() {
        var a;
        null == (a = this.Ha) || ae(a)
    };
    var FI = function(a, b, c) {
        _.ww.call(this);
        this.context = a;
        this.C = b;
        this.A = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.Ae ? "fluid" : [b.width, b.height];
        this.Gb = Yg(a);
        this.Hb = qn
    };
    _.R(FI, _.ww);
    FI.prototype.render = function() {
        var a = this.C,
            b = this.A,
            c = b.slotId,
            d = b.N.R,
            e = b.T,
            f = b.size,
            g = b.ub,
            h = b.ve,
            k = b.isBackfill;
        b = b.Nb;
        g && Se(g, _.Zt(e), null != h ? h : "", !1);
        rx(_.C(bg), "5", Q(d[c.getDomId()], 20));
        c.dispatchEvent(QE, 801, {
            nd: 0 === a.kind ? a.sa : "",
            isBackfill: k
        });
        a = this.o();
        b && a && a.setAttribute("data-google-container-id", b);
        c.dispatchEvent(SE, 825, {
            size: f,
            isEmpty: !1
        });
        return a
    };
    FI.prototype.loaded = function(a) {
        var b = this.A,
            c = b.slotId,
            d = b.qa;
        b = b.N.R;
        c.dispatchEvent(VE, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new cI(c, "publisher_ads"));
        rx(_.C(bg), "6", Q(b[c.getDomId()], 20))
    };
    var GI = function(a, b) {
        if (b) return null;
        a = a.C;
        a = 0 === a.kind ? a.sa : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && af(d, 2) : (c && af(d, 3), a = _.E(jw) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && af(d, 1);
        return a
    };
    FI.prototype.H = function() {
        _.ww.prototype.H.call(this);
        var a;
        null == (a = this.A.ub) || a.removeAttribute("data-google-query-id")
    };
    FI.prototype.I = function(a, b) {
        var c = this,
            d = HI(this, function() {
                return void c.loaded(d.j)
            }, a, b);
        _.pn(this, function() {
            100 != d.status && (2 == d.D && (TD(d.A), d.D = 0), window.clearTimeout(d.P), d.P = -1, d.I = 3, d.m && (d.m.za(), d.m = null), _.ld(window, "resize", d.oa), _.ld(window, "scroll", d.oa), d.l && d.j && d.l == _.bu(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var HI = function(a, b, c, d) {
        var e = a.A,
            f = e.Sd,
            g = e.isBackfill,
            h = e.Ie,
            k = e.Nb,
            l = e.zc,
            n = e.cc,
            m = e.sb,
            p = Array.isArray(a.j) ? new _.Ig(Number(a.j[0]), Number(a.j[1])) : 1;
        return new aE({
            Xc: e.md,
            Gb: a.Gb,
            Hb: a.Hb,
            content: GI(a, d),
            size: p,
            ue: !!h,
            Hd: b,
            Td: null != f ? f : void 0,
            permissions: {
                ac: aj(c, 1) ? !!J(c, 1) : !g,
                bc: aj(c, 2) ? !!J(c, 2) : !1
            },
            Ib: !!ff().fifWin,
            jf: nm ? nm : nm = Pi(),
            pe: Ui(),
            be: !1,
            hostpageLibraryTokens: _.C(QG).hostpageLibraryTokens,
            Aa: function(r, z) {
                return void dg(a.context, r, z)
            },
            uniqueId: k,
            zc: null != l ? l : void 0,
            cc: null != n ? n : void 0,
            hc: null != d ? d : void 0,
            sb: null != m ? m : void 0
        })
    };
    var oo = function() {
        FI.apply(this, arguments)
    };
    _.R(oo, FI);
    oo.prototype.o = function() {
        var a = this.A,
            b = a.N,
            c = b.W;
        a = b.R[a.slotId.getDomId()];
        b = new Vi;
        c = bj([b, c.Ba(), null == a ? void 0 : a.Ba()]);
        return FI.prototype.I.call(this, c).j
    };
    oo.prototype.l = function() {
        return !1
    };
    var II = function() {
        FI.apply(this, arguments)
    };
    _.R(II, FI);
    var JI = function(a, b) {
            var c = _.jd(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Gb;
            c.name = a.Gb;
            c.title = a.Hb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        KI = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.$f(a.context, 774, function() {
                a.loaded(b);
                _.ld(b, "load", c)
            });
            _.bb(b, "load", c);
            _.pn(a, function() {
                return _.ld(b, "load", c)
            });
            a.A.md.appendChild(b)
        };
    var po = function() {
        II.apply(this, arguments)
    };
    _.R(po, II);
    po.prototype.o = function() {
        var a = this,
            b = this.A,
            c = b.Sd;
        b = b.cc;
        var d = JI(this);
        if (null == c ? 0 : c.length)
            if (_.dr) {
                c = _.y(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.ad(c));
        b && (d.allow = b);
        Ba(Aa(), "iPhone") || (d.srcdoc = Ra(Pq));
        KI(this, d);
        _.gg(this.context, 653, function() {
            var f;
            if (f = Ce(Xc(Ce(a.C.sa, null)).toString(), null)) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? mo(2) : (mo(3), f = _.E(jw) ? f : Ce("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>", null))
            } else mo(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ea() && g.open("text/html", "replace");
            Za(g, f);
            var l, n, m;
            if (Dq(null != (m = null == (l = d.contentWindow) ? void 0 : null == (n = l.location) ? void 0 : n.href) ? m : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    po.prototype.l = function() {
        return !0
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Ta = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var ro = function() {
        II.apply(this, arguments)
    };
    _.R(ro, II);
    ro.prototype.o = function() {
        var a = JI(this, !this.A.sf);
        no(a, this.C.cd);
        KI(this, a);
        return a
    };
    ro.prototype.l = function() {
        return !1
    };
    var qo = function() {
        II.apply(this, arguments)
    };
    _.R(qo, II);
    qo.prototype.o = function() {
        var a = this.C.url,
            b = this.A,
            c = b.N,
            d = c.W;
        b = c.R[b.slotId.getDomId()];
        d = bj([d.Ba(), null == b ? void 0 : b.Ba()]);
        var e = JI(this);
        no(e, a);
        II.prototype.I.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            LI(a)
        };
        e.addEventListener("load", f);
        Au(e, function() {
            return void LI(a)
        });
        return e
    };
    var LI = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.jd("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    qo.prototype.l = function() {
        return !1
    };
    var Zo = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L, G, O, P, U, aa, ca) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.K = c;
        this.N = d;
        this.qa = e;
        this.F = f;
        this.l = W(this);
        this.o = W(this);
        this.D = Ix(this);
        this.J = X(this, g);
        this.ia = X(this, h);
        Kx(this, l);
        this.ca = X(this, n);
        this.G = X(this, m);
        this.Z = X(this, p);
        Kx(this, G);
        this.M = Y(this, r);
        this.O = Y(this, z);
        this.xa = Y(this, A);
        this.U = X(this, I);
        this.ha = Y(this, F);
        this.Xa = Y(this, L);
        this.va = Y(this, k);
        Kx(this, O);
        this.ga = X(this, P);
        Kx(this, U);
        this.Ea = Y(this, aa);
        this.da = Y(this, ca)
    };
    _.R(Zo, Z);
    Zo.prototype.j = function() {
        var a = this,
            b = this.J.value;
        if (0 === b.kind && null == b.sa) throw new sx("invalid html");
        var c;
        b = so(this.context, b, {
            T: document,
            slotId: this.slotId,
            K: this.K,
            N: this.N,
            qa: this.qa,
            size: this.Z.value,
            ub: this.ca.value,
            md: this.G.value,
            ve: this.M.value,
            Ae: this.O.value,
            Sd: this.xa.value,
            isBackfill: this.U.value,
            Ie: this.ha.value,
            Nb: this.Xa.value,
            zc: this.va.value,
            cc: this.ga.value,
            sb: this.Ea.value,
            sf: null == (c = this.da.value) ? void 0 : Gr(c, 14)
        }, {
            uf: this.ia.value
        });
        _.Qm(this, b);
        var d = b.render();
        iF(this, this.id, this.F, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(ko, 824, e)
        });
        this.D.notify();
        this.l.j(d);
        this.o.j(b.l())
    };
    var fp = function(a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.nb = Number(b);
        this.o = X(this, d);
        this.D = X(this, e);
        this.G = MI(this)
    };
    _.R(fp, Z);
    var MI = function(a) {
        return _.db(function(b) {
            return b.return(new w.Promise(function(c) {
                try {
                    iF(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && vd(nd(mC, d.data.payload), 1) === a.nb && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    fp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.db(function(h) {
            if (1 == h.j) return b = to(a.l), c = a.o.value, d = a.D.value, eb(h, a.G, 2);
            e = h.m;
            var k = a.l,
                l = to(k);
            var n = c.getBoundingClientRect();
            var m = Tc(k) ? Eg(c, k) : {
                x: 0,
                y: 0
            };
            k = m.x;
            m = m.y;
            n = new _.Du(m, k + n.right, m + n.bottom, k);
            k = new oC;
            k = x(k, 1, n.top);
            k = x(k, 3, n.bottom);
            k = x(k, 2, n.left);
            n = x(k, 4, n.right);
            k = new nC;
            k = x(k, 1, a.nb);
            k = x(k, 2, !d);
            n = vc(k, 3, n);
            n = x(n, 4, b);
            f = x(n, 5, l);
            g = {
                type: "asmres",
                payload: f.X()
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var To = function(a, b, c, d, e, f, g, h, k, l, n, m) {
        Z.call(this, a, 699);
        this.T = b;
        this.slotId = c;
        this.l = d;
        this.vb = e;
        this.B = Ix(this);
        this.J = Y(this, f);
        this.O = X(this, g);
        this.D = X(this, h);
        this.M = X(this, k);
        this.o = Y(this, l);
        this.U = X(this, n);
        this.G = X(this, m)
    };
    _.R(To, Z);
    To.prototype.j = function() {
        var a = this.O.value,
            b = this.D.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.J.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.U.value,
                f = this.G.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.T,
                        k = this.slotId,
                        l = this.l,
                        n = this.vb;
                    var m = c.width,
                        p = c.height,
                        r = 0;
                    var z = 0;
                    var A = vg(l);
                    A = _.y(A);
                    for (var I = A.next(); !I.done; I = A.next()) {
                        var F = I.value;
                        Array.isArray(F) && (I = F[0], F = F[1], r < I && (r = I), z < F && (z = F))
                    }
                    z = [r, z];
                    r = z[0] < m;
                    p = z[1] < p;
                    if (r || p) {
                        z = m + "px";
                        A = {
                            "max-height": "none",
                            "max-width": z,
                            padding: "0px",
                            width: z
                        };
                        p && (A.height = "auto");
                        dh(b, a, A);
                        b = {};
                        r && (r = bh(e.width), m > r && (b.width = z, b["max-width"] = z));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (L in b)
                                if (Object.prototype.hasOwnProperty.call(b, L)) {
                                    var L = !1;
                                    break c
                                }
                            L = !0
                        }
                        L ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.ch(a, b), b = !0)
                    } else b = !1;
                    b: switch (z = c.width, L = h.defaultView || h.parentWindow || _.t, d) {
                        case 2:
                            a = eh(a, L, z, e, n);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (n = Jg(e)) {
                                    I = n.width;
                                    n = Qg(k, L.document);
                                    m = Tg(n, L);
                                    p = m.position;
                                    F = bh(m.width) || 0;
                                    r = Tg(e, L);
                                    A = "rtl" === r.direction ? "Right" : "Left";
                                    n = A.toLowerCase();
                                    L = "absolute" === p ? 0 : bh(r["padding" + A]);
                                    r = bh(r["border" + A + "Width"]);
                                    z = Math.max(Math.round((I - Math.max(F, z)) / 2), 0);
                                    I = {};
                                    F = 0;
                                    var G = Zk(m);
                                    G && (F = G[4] * ("Right" === A ? -1 : 1), A = G[3] || 1, 1 !== (G[0] || 1) || 1 !== A) && (G[0] = 1, G[3] = 1, I.transform = "matrix(" + G.join(",") + ")");
                                    A = 0;
                                    switch (p) {
                                        case "fixed":
                                            var O, P = null != (O = Number(Ug(m.getPropertyValue(n)))) ? O : 0,
                                                U;
                                            O = null != (U = e.getBoundingClientRect().left) ? U : 0;
                                            A = P - O;
                                            break;
                                        case "relative":
                                            A = null != (P = Number(Ug(m.getPropertyValue(n)))) ? P : 0;
                                            break;
                                        case "absolute":
                                            I[n] = "0"
                                    }
                                    I["margin-" + n] = z - L - r - A - F + "px";
                                    _.ch(a, I);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (gh(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.T, h = this.slotId, k = this.l, O = this.vb, l = c.width, U = c.height, P = bh(e.height) || 0, U >= P || "none" === e.display || "hidden" === e.visibility || !O || -12245933 === O.width || a.getBoundingClientRect().bottom <= O.height ? g = !1 : (O = {
                        height: U + "px"
                    }, dh(b, a, O), _.ch(a, O), gh(d, g, h, k, 3, l, U, "gpt_slotred", f), g = !0)
            }!g && _.E(av) && gh(this.context, this.T, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.B.notify()
    };
    var Fo = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.D = c;
        this.B = W(this);
        this.l = Y(this, d);
        this.o = Y(this, e)
    };
    _.R(Fo, Z);
    Fo.prototype.j = function() {
        var a = this.o.value;
        if (null == a) zx(this.B);
        else {
            var b = Math.round(.3 * this.D);
            2 !== this.format && 3 !== this.format || null === this.l.j.A || !Gr(this.l.value, 12, !1) || 0 >= b || a <= b ? this.B.j(a) : this.B.j(b)
        }
    };
    var Oo = function(a, b, c, d, e, f, g, h, k, l, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.W = c;
        this.o = d;
        this.T = f;
        this.K = g;
        this.B = W(this);
        this.G = 2 === e || 3 === e;
        this.l = X(this, h);
        this.M = X(this, k);
        this.J = Y(this, l);
        this.D = Y(this, n)
    };
    _.R(Oo, Z);
    Oo.prototype.j = function() {
        var a = Bg(this.W, this.o),
            b = Pg(this.slotId, this.T) || Xk(this.l.value, Zg(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.G ? ZE(this.K, this.slotId, function() {
            return void _.au(b)
        }) : _.pn(this, function() {
            return void _.au(b)
        });
        a = NI(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.B.j(b)
    };
    var NI = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.J.value) ? void 0 : c.height;
        if (b && !a.D.value && d) {
            var e;
            c = (null != (e = J(a.o, 23)) ? e : J(a.W, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var yo = function(a, b) {
        Z.call(this, a, 859);
        this.F = b;
        this.B = W(this)
    };
    _.R(yo, Z);
    yo.prototype.j = function() {
        this.B.j(!Tc(this.F.top))
    };
    var Ro = function(a, b, c) {
        Z.call(this, a, 698);
        this.F = b;
        this.B = W(this);
        this.l = X(this, c)
    };
    _.R(Ro, Z);
    Ro.prototype.j = function() {
        Ax(this.B, Tg(this.l.value, this.F))
    };
    var Eo = function(a, b, c, d) {
        Z.call(this, a, 813);
        this.Ja = b;
        this.l = W(this);
        this.D = Y(this, c);
        this.o = Y(this, d)
    };
    _.R(Eo, Z);
    Eo.prototype.j = function() {
        var a = this.D.value;
        if (!a || _.E(dw)) this.l.j(!1);
        else if (OI.has(this.Ja)) this.l.j(!1);
        else {
            OI.add(this.Ja);
            a = _.y(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c.Ya;
                (c = c.url) && me(b, c, this.o.value)
            }
            this.l.j(!0)
        }
    };
    var OI = new w.Set;
    var Xo = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.T = c;
        this.B = W(this)
    };
    _.R(Xo, Z);
    Xo.prototype.j = function() {
        var a = [],
            b = this.T;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (B = c.features(), _.u(B, "includes")).call(B, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.E(Yu) || a.push("autoplay");
        a.length ? this.B.j(a.join(";")) : this.B.j("")
    };
    var $o = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.F = b;
        this.slotId = c;
        Kx(this, d);
        this.l = X(this, e)
    };
    _.R($o, Z);
    $o.prototype.j = function() {
        var a = this;
        NE(this.slotId, ko, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new rt;
                    var h = x(g, 1, d ? "1" : "0");
                    var k = x(x(h, 2, 2147483647), 3, "/");
                    var l = x(k, 4, a.F.location.hostname);
                    var n = new uy(a.F);
                    vy(n, "__gpi_opt_out", l, f);
                    if (d || e) wy(n, "__gads", f), wy(n, "__gpi", f)
                }
            } catch (m) {}
        })
    };
    var hp = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.F = b;
        this.G = Y(this, c);
        this.o = X(this, d);
        this.l = X(this, e);
        this.D = X(this, f)
    };
    _.R(hp, Z);
    hp.prototype.j = function() {
        var a = this,
            b = this.G.value,
            c, d = null == b ? void 0 : null == (c = Q(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = Q(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.D.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                n = Bu(e.id + "_top", d),
                m = Bu(e.id + "_bottom", b);
            _.ch(m, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(n);
            f.appendChild(m);
            _.ch(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.ch(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.ch(f, {
                position: "relative",
                display: (null == (p = this.F.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            iF(this, 722, this.F, "orientationchange", function() {
                var r;
                (null == (r = a.F.screen.orientation) ? 0 : r.angle) ? _.ch(f, {
                    display: "none"
                }): _.ch(f, {
                    display: "block"
                })
            });
            _.pn(this, function() {
                _.au(n);
                _.au(m);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var ep = function(a, b, c, d, e, f) {
        f = void 0 === f ? vo : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.T = d;
        this.qa = e;
        this.J = f;
        this.G = !1;
        this.l = null;
        this.D = this.o = -1;
        this.O = _.An(function() {
            g.qa.dispatchEvent("impressionViewable", 715, new aI(g.slotId, "publisher_ads"))
        });
        this.U = Yq(function() {
            g.qa.dispatchEvent("slotVisibilityChanged", 716, new bI(g.slotId, "publisher_ads", g.D))
        }, 200);
        this.M = X(this, c);
        var h = new Gx;
        jo(this.slotId, VE).then(function() {
            return void h.notify()
        });
        Kx(this, h)
    };
    _.R(ep, Z);
    ep.prototype.j = function() {
        var a = this,
            b = this.J(_.$f(this.context, this.id, function(c) {
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.u(Number, "isFinite").call(Number, a.o) && PI(a)
            }));
        b.observe(this.M.value);
        iF(this, this.id, this.T, "visibilitychange", function() {
            PI(a)
        });
        _.pn(this, function() {
            b.disconnect()
        })
    };
    var PI = function(a) {
            var b = !rC(a.T);
            QI(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.D ? 0 : -1 !== a.D || 0 !== b) a.D = b, a.U()
        },
        QI = function(a, b) {
            a.G || (b ? null === a.l && (a.l = setTimeout(function() {
                rC(a.T) || (a.O(), a.G = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var Jo = function(a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = W(this);
        this.D = Y(this, c)
    };
    _.R(Jo, Z);
    Jo.prototype.j = function() {
        var a = new Ko;
        if (null !== this.D.j.A) {
            var b = x(a, 2, this.D.value);
            x(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new Ko;
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, aj(c, 1) && x(b, 1, Q(c, 1)), aj(c, 2) && x(b, 2, Q(c, 2)), aj(c, 3) && x(b, 3, Qd(c, 3));
            a = b
        }
        b = this.l;
        a = aj(a, 2) ? aj(a, 3) && 0 !== (0, _.Ij)() ? Q(a, 2) * Qd(a, 3) : Q(a, 2) : null;
        Ax(b, a)
    };
    var So = function(a, b, c, d, e, f) {
        f = void 0 === f ? xo : f;
        Z.call(this, a, 666);
        this.o = f;
        this.B = Ix(this);
        Kx(this, b);
        this.l = X(this, c);
        this.G = Y(this, d);
        this.D = Y(this, e)
    };
    _.R(So, Z);
    So.prototype.j = function() {
        var a = this.D.value,
            b = this.G.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !Vg(c) ? this.B.notify() : RI(this, a, b, c)
    };
    var RI = function(a, b, c, d) {
        var e = a.o(b, _.$f(a.context, 291, function(f, g) {
            f = _.y(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.B.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.B.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.pn(a, function() {
            e.disconnect()
        })
    };
    var Qo = function(a, b, c, d, e, f) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.vb = c;
        this.K = d;
        this.B = Ix(this);
        this.o = X(this, e);
        this.l = Y(this, f)
    };
    _.R(Qo, Z);
    Qo.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.Ij)() || 0 < c) {
            var d = document;
            b = qC(d);
            if (rC(d) && b && (0 < jm(this.K, this.slotId) || !SI(this)) && b) {
                var e = iF(this, 324, d, b, function() {
                    rC(d) || (e && e(), a.B.notify())
                });
                if (e) return
            }
        }
        this.B.notify()
    };
    var SI = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = Jl(null == d ? void 0 : d.document, d).y,
                f = e + a.vb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var Io = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.W = b;
        this.R = c;
        this.F = d;
        this.B = W(this);
        this.l = Y(this, e);
        this.o = Y(this, f)
    };
    _.R(Io, Z);
    Io.prototype.j = function() {
        var a;
        if (Ni(Zu) || (null == (a = this.R) ? 0 : wg(a, 16)) && mf("google_range_debug", this.F)) this.B.j(!0);
        else {
            var b;
            a = !(null == (b = this.l.value) || !Q(b, 1)) && (J(this.R, 12) || J(this.W, 13)) || !!this.o.value;
            this.B.j(!!a)
        }
    };
    var Wo = function(a, b, c, d, e, f) {
        Z.call(this, a, 828);
        this.o = b;
        this.slotId = c;
        this.N = d;
        this.B = W(this);
        this.l = X(this, e);
        this.D = Y(this, f)
    };
    _.R(Wo, Z);
    Wo.prototype.j = function() {
        var a = this,
            b = this.N,
            c = b.W,
            d = b.R[this.slotId.getDomId()],
            e = this.D.value;
        b = null;
        var f;
        d = null != (f = null == d ? void 0 : d.Ba()) ? f : null;
        c = c.Ba();
        (null == d ? 0 : aj(d, 4)) ? b = J(d, 4): (null == c ? 0 : aj(c, 4)) ? b = J(c, 4) : null != e && (b = e);
        var g = String(b);
        null == e || e === b || this.l.value || N(this.o, eG(g, String(e)));
        this.l.value || hh("gpt_sf_r", function(h) {
            nh(h, a.context);
            K(h, "GAM", String(e));
            K(h, "Final", g)
        });
        this.B.j(_.E(Pv) ? Og() : zD())
    };
    var Uo = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 719);
        this.W = b;
        this.D = c;
        this.B = W(this);
        this.l = X(this, d);
        this.G = X(this, e);
        this.o = Y(this, f);
        this.J = Y(this, g)
    };
    _.R(Uo, Z);
    Uo.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.sa)
                    if (this.G.value) TI(this);
                    else {
                        if (a = this.o.value) a = jl(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? this.B.j(fE) : zx(this.B)
                    }
                else zx(this.B);
                break;
            case 1:
                TI(this);
                break;
            case 2:
                zx(this.B);
                break;
            default:
                Ja(a)
        }
    };
    var TI = function(a) {
        var b = a.J.value,
            c = new Vi;
        b = x(c, 3, b);
        J(bj([b, a.W.Ba(), a.D.Ba()]), 3) ? a.B.j(fE) : zx(a.B)
    };
    var Lo = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.ca = c;
        this.M = d;
        this.window = e;
        this.pa = W(this);
        this.o = W(this);
        this.Ub = W(this);
        this.l = Ni(Zu).split(",");
        this.G = Ri($u);
        this.La = wg(c, 16) ? jc(c, kj, 16) : null;
        this.J = lf("google_range_debug", this.window);
        this.O = Y(this, f);
        this.da = Y(this, g);
        this.U = Y(this, h);
        this.D = X(this, k);
        this.Z = X(this, l)
    };
    _.R(Lo, Z);
    Lo.prototype.j = function() {
        if (0 !== this.D.value.kind || this.D.value.sa.length) {
            var a;
            if (a = !!(this.l.length || this.La && this.J)) {
                b: if (this.l.length) {
                    if (this.G.length && (a = this.adUnitPath.split("/"), !_.u(this.G, "includes").call(this.G, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? UI(this) : null;
                if (b && a) {
                    b = this.Z.value;
                    var c, d, e = null != (d = null == (c = Jg(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.M : d && 0 < d ? d : c ? Math.min(e, this.M) : null) {
                        d = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        VI(this, c, d, {
                            kind: 0,
                            sa: WI(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (this.La && this.J) {
                    a = Gm(this.La, this.window);
                    b = Hm(this.La, this.window);
                    e = Im(this.La);
                    c = Jm(this.La);
                    switch (this.J) {
                        case "max":
                            d = a;
                            f = b;
                            break;
                        case "min":
                            d = e;
                            f = c;
                            break;
                        case "banner":
                            d = a;
                            f = 90 > b ? b : 90 < c ? c : 90;
                            break;
                        case "skyscraper":
                            d = 90 > a ? a : 90 < e ? e : 90;
                            f = b;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    VI(this, d, f, {
                        kind: 0,
                        sa: WI(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else a = !1
            }
            a || XI(this)
        } else XI(this)
    };
    var UI = function(a) {
            a = vg(a.ca)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Ig(a[0], a[1]) : null
        },
        WI = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        VI = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.O.value : e;
            a.o.j(new _.Ig(b, c));
            a.pa.j(d);
            Ax(a.Ub, e);
            f && _.Mu(f, "opacity", .5)
        },
        XI = function(a) {
            var b = a.da.value;
            if (null == b) throw new mj("Missing 'width'.");
            var c = a.U.value;
            if (null == c) throw new mj("Missing 'height'.");
            VI(a, b, c, a.D.value)
        };
    var Go = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.ub = c;
        this.D = d;
        this.o = e;
        this.T = f;
        this.l = g;
        this.K = h;
        this.B = W(this)
    };
    _.R(Go, Z);
    Go.prototype.j = function() {
        var a = this,
            b, c;
        return _.db(function(d) {
            if (1 == d.j) {
                if (a.ub) {
                    YI(a, a.ub);
                    a.B.j(a.ub);
                    d.j = 0;
                    return
                }
                if (Ag(a.l)) {
                    a.B.j(ZI(a));
                    d.j = 0;
                    return
                }
                return eb(d, jo(a.slotId, OE), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.m) return d.return();
            YI(a, c);
            a.B.j(c);
            d.j = 0
        })
    };
    var ZI = function(a) {
            var b = _.jd("INS");
            b.id = a.D;
            _.ch(b, {
                display: "none"
            });
            a.T.documentElement.appendChild(b);
            var c = function() {
                return void _.au(b)
            };
            2 === a.l || 3 === a.l ? ZE(a.K, a.slotId, c) : _.pn(a, c);
            return b
        },
        YI = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.y(_.u(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.o && _.au(d);
                b.style.display = ""
            }
        };
    var Po = function(a, b) {
        Z.call(this, a, 676);
        this.B = W(this);
        this.l = X(this, b)
    };
    _.R(Po, Z);
    Po.prototype.j = function() {
        var a = Gg(this.l.value);
        this.B.j(a)
    };
    var Vo = function(a, b, c, d) {
        Z.call(this, a, 807);
        this.F = b;
        this.B = Ix(this);
        this.l = Y(this, c);
        this.o = Y(this, d)
    };
    _.R(Vo, Z);
    Vo.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = sl(this.F);
            vE(new uE(b, a)) || this.P(new mj("Cannot create top window frame"))
        }
        this.B.notify()
    };
    var Mo = function(a, b) {
        Z.call(this, a, 881);
        this.B = W(this);
        this.l = Y(this, b)
    };
    _.R(Mo, Z);
    Mo.prototype.j = function() {
        if (_.E(aw) || !this.l.value) zx(this.B);
        else {
            for (var a = this.l.value, b = {}, c = _.y(hc(a, wt, 7)), d = c.next(); !d.done; d = c.next()) d = d.value, b[cn(d, 1)] = JSON.parse(cn(d, 2));
            (c = jc(a, vt, 6)) && (b["https://googleads.g.doubleclick.net"] = c.toJSON());
            c = {};
            d = _.y(hc(a, xt, 11));
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, c[cn(e, 1)] = vd(e, 2);
            var f;
            this.B.j({
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: cn(a, 1),
                trustedScoringSignalsUrl: cn(a, 2),
                interestGroupBuyers: Xb(a, 3),
                auctionSignals: JSON.parse(cn(a, 4) || "{}"),
                sellerSignals: (null == (f = At(a)) ? void 0 : f.toJSON()) || [],
                sellerTimeout: vd(a, 15) || 50,
                perBuyerSignals: b,
                perBuyerTimeouts: c
            })
        }
    };
    Mo.prototype.A = function() {
        zx(this.B)
    };
    var $I = navigator,
        No = function(a, b, c, d, e, f) {
            Z.call(this, a, 882);
            this.K = b;
            this.pa = W(this);
            this.G = W(this);
            this.l = Y(this, c);
            this.J = Y(this, d);
            this.M = Y(this, e);
            this.O = Y(this, f)
        };
    _.R(No, Z);
    var aJ = function(a, b, c) {
            var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
                e, f, g = null == (e = a.l.value) ? void 0 : null == (f = At(e)) ? void 0 : Gr(f, 18),
                h, k;
            if ((e = null == (h = a.l.value) ? void 0 : null == (k = At(h)) ? void 0 : Gr(k, 7)) || g) d += "&isContextualWinner=1";
            e && (d += "&hasXfpAds=1");
            a.o && (d += "&winner_qid=" + encodeURIComponent(a.o));
            a.D && (d += "&xfpQid=" + encodeURIComponent(a.D));
            var l, n;
            if (null == (l = a.l.value) ? 0 : null == (n = At(l)) ? 0 : Gr(n, 4)) d += "&is_plog=1";
            var m, p, r, z, A, I;
            !(null == (m = a.l.value) ? 0 : null == (p = At(m)) ? 0 : Gr(p, 17)) && ((null == (r = a.l.value) ? 0 : null == (z = At(r)) ? 0 : Gr(z, 9)) || (null == (A = a.l.value) ? 0 : null == (I = At(A)) ? 0 : Gr(I, 10))) && (d += "&turtlexTest=1");
            d += "&applied_timeout_ms=" + c + "&duration_ms=" + Math.round(b);
            fo(d)
        },
        bJ = function(a) {
            Ax(a.pa, a.M.value);
            Ax(a.G, a.O.value)
        };
    No.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L, G, O, P, U;
        return _.db(function(aa) {
            if (1 == aa.j) {
                if (_.E(aw) || !a.J.value) return bJ(a), aa.return();
                c = null == (b = a.l.value) ? void 0 : b.getWidth();
                e = null == (d = a.l.value) ? void 0 : d.getHeight();
                if (!c || !e) return bJ(a), aa.return();
                h = null != (g = null == (f = a.l.value) ? void 0 : At(f)) ? g : void 0;
                a.o = null == (k = h) ? void 0 : k.getEscapedQemQueryId();
                a.D = null == (l = h) ? void 0 : cn(l, 6);
                m = null == (n = h) ? void 0 : Gr(n, 9);
                if (r = null == (p = h) ? void 0 : Gr(p, 10))
                    if (bJ(a), null == (z = a.l.value) ? 0 : Gr(Kr(z), 17)) return aJ(a, 0, 0), aa.return();
                hh("pre_run_ad_auction_ping", function(ca) {
                    nh(ca, a.context);
                    var Na;
                    K(ca, "winner_qid", null != (Na = a.o) ? Na : "");
                    var ya;
                    K(ca, "xfpQid", null != (ya = a.D) ? ya : "")
                }, 1);
                A = performance.now();
                F = (null == (I = a.l.value) ? void 0 : vd(I, 8)) || 1E3;
                return eb(aa, cJ(a, a.J.value, h, F), 2)
            }
            L = aa.m;
            G = Math.round(performance.now() - A);
            O = 2 === L;
            P = 1 === L;
            U = L && !O && !P;
            hh("run_ad_auction_stats", function(ca) {
                nh(ca, a.context);
                K(ca, "duration_ms", G);
                K(ca, "applied_timeout_ms", F);
                K(ca, "timed_out", O);
                K(ca, "auction_skipped", P);
                K(ca, "auction_winner", U ? 1 : 0);
                var Na;
                K(ca, "thread_release_only", (null == (Na = h) ? 0 : Gr(Na, 15)) ? 1 : 0);
                var ya;
                K(ca, "winner_qid", null != (ya = a.o) ? ya : "");
                var za;
                K(ca, "xfpQid", null != (za = a.D) ? za : "")
            }, 1);
            if (!L || P || O) return aJ(a, G, O ? F : 0), r || bJ(a), aa.return();
            if (r) return aa.return();
            if (m) return bJ(a), aa.return();
            a.pa.j({
                kind: 2,
                cd: L
            });
            a.G.j(new _.Ig(c, e));
            aa.j = 0
        })
    };
    No.prototype.A = function() {
        bJ(this)
    };
    var cJ = function(a, b, c, d) {
        var e, f, g, h, k, l, n, m, p;
        return _.db(function(r) {
            if (1 == r.j) {
                f = (null == (e = c) ? void 0 : vd(e, 14)) || -1;
                if (0 < f && a.K.A >= f) return r.return(1);
                h = (null == (g = c) ? void 0 : vd(g, 13)) || -1;
                if (0 < h && a.K.C >= h) return r.return(1);
                ++a.K.A;
                ++a.K.C;
                m = (null == (k = c) ? 0 : Gr(k, 15)) ? new w.Promise(function(z) {
                    setTimeout(function() {
                        z(null)
                    }, 0)
                }) : null == (n = (l = $I).runAdAuction) ? void 0 : n.call(l, b);
                return eb(r, w.Promise.race([m, Cu(d)]), 2)
            }
            p = r.m;
            --a.K.A;
            return r.return(p)
        })
    };
    var dJ = function(a, b) {
            this.context = a;
            this.m = b;
            this.j = new w.Map
        },
        eJ = function(a, b) {
            if (b) {
                var c;
                null == (c = a.j.get(b)) || c.za();
                a.j.delete(b)
            }
        },
        gJ = function(a, b, c, d, e, f, g, h, k, l, n) {
            var m = document,
                p = window;
            c || eJ(a, b);
            NE(b, SE, fJ);
            c = jp(a.context, a.m, b, c, d, e, f, g, m, h, k, l, n);
            a.j.set(b, c);
            _.pn(b, function() {
                return void eJ(a, b)
            });
            p.top !== p && p.addEventListener("pagehide", function(r) {
                r.persisted || eJ(a, b)
            });
            ae(c)
        },
        fJ = _.An(function() {
            return void ah("gpt-first-ad-render")
        });
    var hJ = function(a, b) {
        Z.call(this, a, 802);
        this.F = b;
        this.l = W(this);
        this.o = W(this)
    };
    _.R(hJ, Z);
    hJ.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.db(function(f) {
            if (1 == f.j) {
                if (!_.E(tv)) return a.o.j(!1), a.l.j(""), f.return();
                b = Qe(a.F);
                if (!b) {
                    a.o.j(!1);
                    a.l.j("");
                    f.j = 0;
                    return
                }
                a.o.j(!0);
                f.A = 3;
                return eb(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.Kd(vv) && (dg(a.context, a.id, new mj("ML:" + (_.E(uv) ? d : d.length))), d = "0"), a.l.j(d), gb(f, 0);
            e = hb(f);
            dg(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    hJ.prototype.A = function() {
        this.o.j(!1);
        this.l.j("")
    };
    var iJ = function(a, b, c) {
        Z.call(this, a, 944);
        this.F = b;
        this.l = new uy(this.F);
        this.o = Y(this, c)
    };
    _.R(iJ, Z);
    iJ.prototype.j = function() {
        var a = this.o.value;
        if (a && ql(this.l, a)) {
            var b = ol(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new rt;
                b = x(c, 1, b);
                b = x(x(b, 2, 2147483647), 3, "/");
                b = x(b, 4, this.F.location.hostname);
                vy(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var jJ = function(a, b, c, d) {
        d = void 0 === d ? lp : d;
        Z.call(this, a, 883);
        this.D = b;
        this.G = d;
        this.l = Ix(this);
        this.o = X(this, c)
    };
    _.R(jJ, Z);
    jJ.prototype.j = function() {
        var a = this;
        return _.db(function(b) {
            if (1 == b.j) {
                if (!Bd(a.o.value) || _.E(Nl)) return a.l.notify(), b.return();
                _.E(zv) || eC(a.D);
                if (!a.G()) {
                    fC(null);
                    b.j = 2;
                    return
                }
                return eb(b, new w.Promise(function(c) {
                    return void fC(c)
                }), 2)
            }
            a.l.notify();
            b.j = 0
        })
    };
    var kJ = function(a, b, c, d) {
        Z.call(this, a, 884);
        this.ja = b;
        this.l = W(this);
        this.D = Y(this, c);
        this.o = X(this, d)
    };
    _.R(kJ, Z);
    kJ.prototype.j = function() {
        _.C(yp).m = this.D.value;
        HG(_.C(yp), ol(this.ja, "__gads", this.o.value));
        Ap(20);
        Ap(2);
        this.l.j(_.C(Nd).j())
    };
    var lJ = function(a, b, c) {
        Z.call(this, a, 873);
        this.F = b;
        this.l = X(this, c)
    };
    _.R(lJ, Z);
    lJ.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.F;
        !ff()._pubconsole_disable_ && (b = Fd("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || ki(a, c))
    };
    var mJ = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L, G, O, P) {
        Z.call(this, a, 798);
        var U = this;
        this.K = b;
        this.N = c;
        this.ja = d;
        this.Ka = e;
        this.Ia = f;
        this.Da = g;
        this.Ua = h;
        this.Ta = k;
        this.Va = n;
        this.Na = m;
        this.F = p;
        this.B = W(this);
        this.ca = X(this, r);
        this.J = X(this, z);
        this.D = X(this, l);
        this.G = Jx(this, A);
        this.O = X(this, I);
        this.U = X(this, F);
        this.Z = X(this, L);
        this.o = Y(this, G);
        this.l = Jx(this, P);
        Kx(this, O);
        _.E($v) && (_.E(Yv) ? P.promise.then(function(aa) {
            return U.M = aa
        }) : this.l = Jx(this, P))
    };
    _.R(mJ, Z);
    mJ.prototype.j = function() {
        for (var a = this, b = new w.Map, c = _.y(this.J.value), d = c.next(); !d.done; d = c.next()) d = d.value, b.set(d, this.Ia ? nJ(this, d) : function() {
            return a.ca.value
        });
        this.B.j(b)
    };
    var nJ = function(a, b) {
        return Sg(function() {
            var c = new ty,
                d, e, f, g = null != (f = null != (e = a.M) ? e : null == (d = a.l) ? void 0 : d.value) ? f : 1,
                h;
            c = new tH({
                rb: {
                    F: a.F,
                    context: a.context,
                    K: a.K,
                    ja: a.ja,
                    ba: c,
                    Ia: !1,
                    td: a.D.value
                },
                bb: {
                    fa: [b],
                    N: a.N,
                    Da: a.Da,
                    Bd: !0
                },
                de: {
                    Ua: a.Ua,
                    Ta: a.Ta
                },
                Gd: {
                    ed: a.O.value,
                    Dd: a.U.value,
                    Od: a.Z.value
                },
                Md: {
                    xd: null != (h = a.G.value) ? h : "0"
                },
                dd: {
                    Ka: a.Ka,
                    Va: a.Va,
                    Na: a.Na
                },
                hd: {
                    jd: a.o.value
                },
                Xd: {
                    Yd: g
                }
            });
            return kf(vH(c)).url
        })
    };
    var oJ = function(a, b, c, d, e, f) {
        f = void 0 === f ? mp : f;
        Z.call(this, a, 886);
        this.fa = b;
        this.K = c;
        this.l = d;
        this.T = e;
        this.o = f;
        this.B = Ix(this)
    };
    _.R(oJ, Z);
    oJ.prototype.j = function() {
        var a = this,
            b, c;
        return _.db(function(d) {
            if (1 == d.j) return 3 !== tl(a.T) ? (d.j = 2, d = void 0) : d = eb(d, new w.Promise(function(e) {
                return void tC(e, a.T)
            }), 2), d;
            if (4 != d.j) return b = a.l ? wo(a.l) : null, null == b || (c = a.fa.some(function(e) {
                return !Vg(Qg(e))
            })) ? (a.B.notify(), d.return()) : eb(d, pJ(a, b), 4);
            a.B.notify();
            d.j = 0
        })
    };
    var pJ = function(a, b) {
        return new w.Promise(function(c) {
            var d = a.o(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.pn(a, function() {
                return void d.disconnect()
            });
            for (var e = {}, f = _.y(a.fa), g = f.next(); !g.done; e = {
                    zb: e.zb
                }, g = f.next()) {
                g = g.value;
                e.zb = Qg(g);
                if (!e.zb) break;
                d.observe(e.zb);
                $E(a.K, g, function(h) {
                    return function() {
                        return void d.unobserve(h.zb)
                    }
                }(e))
            }
        })
    };
    var qJ = function(a, b, c, d) {
        Z.call(this, a, 936);
        this.o = b;
        this.B = W(this);
        _.E(Gv) || (this.l = Y(this, c), this.D = Y(this, d))
    };
    _.R(qJ, Z);
    qJ.prototype.j = function() {
        var a, b, c, d;
        this.B.j([].concat(_.ad(this.o), _.ad(null != (c = null == (a = this.l) ? void 0 : a.value) ? c : []), _.ad(null != (d = null == (b = this.D) ? void 0 : b.value) ? d : [])))
    };
    var rJ = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
        Z.call(this, a, 866);
        this.D = b;
        this.G = c;
        this.o = d;
        this.Ka = e;
        this.Na = f;
        this.Va = g;
        this.ba = h;
        this.T = k;
        this.B = Ix(this);
        this.l = X(this, l);
        this.M = X(this, n);
        Kx(this, m);
        this.J = X(this, p)
    };
    _.R(rJ, Z);
    rJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m;
        return _.db(function(p) {
            if (1 == p.j) {
                b = a.M.value;
                if (!b) return a.B.notify(), p.return();
                c = _.jd("SCRIPT");
                d = {
                    source: b,
                    credentials: a.J.value ? "include" : "omit",
                    resources: [a.Va.toString()]
                };
                c.setAttribute("type", "webbundle");
                Xa(c, sn(JSON.stringify(d).replace(/</g, "\\x3c")));
                e = _.jd("SCRIPT");
                Ya(e, a.Va);
                a.T.head.appendChild(c);
                a.T.head.appendChild(e);
                a.B.notify();
                return eb(p, sJ(a), 2)
            }
            f = p.m;
            g = f.ie;
            h = f.Ve;
            delete ff()[a.Na.replace("googletag.", "")];
            if (g.length !== h.length) return a.G(new sx("Received " + g.length + " ad URLs but " + h.length + " metadatas")), p.return();
            d.resources = g.filter(function(r) {
                return r
            });
            d.resources.length ? (k = _.jd("SCRIPT"), k.setAttribute("type", "webbundle"), Xa(k, sn(JSON.stringify(d).replace(/</g, "\\x3c"))), a.T.head.removeChild(c), a.T.head.appendChild(k)) : a.T.head.removeChild(c);
            for (l = 0; l < g.length; l++) n = g[l], m = h[l], a.D(l, m, {
                kind: 1,
                url: n
            }, a.l.value, a.ba);
            a.o(g.length - 1, a.l.value, a.ba);
            p.j = 0
        })
    };
    var sJ = function(a) {
        var b = ff(),
            c = a.Na.replace("googletag.", "");
        return new w.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        ie: f,
                        Ve: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    var tJ = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.D = b;
        this.Ia = c;
        this.N = d;
        this.o = e;
        this.F = f;
        this.ba = g;
        this.l = W(this)
    };
    _.R(tJ, Z);
    tJ.prototype.j = function() {
        var a = this,
            b = this.D;
        !this.Ia && 1 < this.D.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.m) return !1;
            var d = a.N.R[c.getDomId()];
            if (yj(a.F) && 4 === Cj(d)) {
                N(a.o, bG("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath())));
                var e = !0
            } else e = !1;
            return !e && !Ej(a.context, a.o, c, d, a.F, a.ba)
        });
        30 < b.length && (N(this.o, YF("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.j(b)
    };
    var uJ = function(a, b, c, d, e) {
        Z.call(this, a, 957);
        this.ba = b;
        this.l = c;
        this.o = e;
        this.B = W(this);
        d && (this.D = X(this, d))
    };
    _.R(uJ, Z);
    uJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k;
        return _.db(function(l) {
            if (1 == l.j) {
                b = _.Kd(qv);
                if (2 === b && !Bd(a.ba)) {
                    a.B.j((null == (c = a.D) ? 0 : c.value) ? "0" : "");
                    l.j = 0;
                    return
                }
                h = a.B;
                k = h.j;
                return eb(l, null != (f = null == (d = a.l) ? void 0 : d.promise) ? f : null == (e = a.o) ? void 0 : e.promise.then(function(n) {
                    return n ? n() : ""
                }), 3)
            }
            k.call(h, null != (g = l.m) ? g : "");
            l.j = 0
        })
    };
    uJ.prototype.A = function() {
        this.B.j("")
    };
    var vJ = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.ba = c;
        this.B = W(this)
    };
    _.R(vJ, Z);
    vJ.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : J(a, 9)) && !!Bd(this.ba);
        this.B.j(b)
    };
    var wJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.K = b;
        this.N = c;
        this.T = d;
        this.B = Ix(this);
        this.l = X(this, e);
        Kx(this, f)
    };
    _.R(wJ, Z);
    wJ.prototype.j = function() {
        var a = this.N,
            b = a.W;
        a = a.R;
        for (var c = _.y(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.T;
            f = void 0 === f ? document : f;
            Lm(e, b) && !this.K.fb(d) && Mm(d, f, e, b)
        }
        this.B.notify()
    };
    var xJ = function(a, b, c, d, e, f) {
        f = void 0 === f ? Bh : f;
        Z.call(this, a, 939);
        this.o = b;
        this.F = c;
        this.ba = d;
        this.l = f;
        Kx(this, e)
    };
    _.R(xJ, Z);
    xJ.prototype.j = function() {
        if (_.E(Uv) || Bd(this.ba)) {
            var a = this.l,
                b = this.F,
                c = new Un;
            var d = new Vn;
            d = ac(d, 1, String(this.o), "");
            c = vc(c, 5, d);
            c = ac(c, 4, 1, 0);
            c = ac(c, 2, 2, 0);
            c = ac(c, 3, this.context.ab || this.context.ya, "");
            c = tf(c, 6, Bd(this.ba));
            a.call(this, b, c)
        }
    };
    var yJ = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.B = Ix(this);
        this.o = X(this, d);
        Kx(this, e)
    };
    _.R(yJ, Z);
    yJ.prototype.j = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.R[b.value.getDomId()]) ? void 0 : Cj(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.vI);
                    return
            }
        }
        this.B.notify()
    };
    var zJ = function(a, b, c, d, e) {
        Z.call(this, a, 833);
        this.Ka = b;
        this.l = c;
        this.F = d;
        this.B = Ix(this);
        Kx(this, e)
    };
    _.R(zJ, Z);
    zJ.prototype.j = function() {
        if ("wbn" !== this.Ka) {
            var a = this.l,
                b = this.F,
                c = _.E(Pv) ? Og() : zD();
            c = {
                version: nm ? nm : nm = Pi(),
                Lb: c,
                tf: _.E(Qv)
            };
            c = iE.Qe(c);
            var d = PD(b);
            c = d ? Qa(c, new w.Map([
                ["n", String(d)]
            ])) : c;
            d = Ri(Si);
            for (var e = new w.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = Qa(c, e);
            d = a.resources[c.toString()];
            var g;
            _.E(Pv) || _.E(Ov) || d || (null == (g = ff()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.jd("IFRAME"), a.src = Pa(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.B.notify()
    };
    var AJ = function(a, b, c, d, e) {
        Z.call(this, a, 928);
        this.K = b;
        this.requestId = c;
        this.B = Ix(this);
        this.l = X(this, d);
        Kx(this, e)
    };
    _.R(AJ, Z);
    AJ.prototype.j = function() {
        this.K.l();
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Kb) {
            var d = a.kb;
            a = qf(a);
            var e = new Ww;
            b = ac(e, 2, b, 0);
            c = ac(b, 1, c, 0);
            c = uf(a, 7, vf, c);
            cd(d, c)
        }
        this.B.notify()
    };
    var BJ = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.qa = b;
        this.N = c;
        this.B = Ix(this);
        this.l = X(this, d)
    };
    _.R(BJ, Z);
    BJ.prototype.j = function() {
        for (var a = _.y(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Q(this.N.R[b.getDomId()], 20);
            b.dispatchEvent(RE, 808, {
                qe: c,
                gf: d
            });
            this.qa.dispatchEvent("slotRequested", 705, new hI(b, "publisher_ads"))
        }
        this.B.notify()
    };
    var CJ = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L, G, O, P, U) {
        Z.call(this, a, 785, _.Kd(Sv));
        var aa = this;
        this.Ia = b;
        this.K = c;
        this.ja = d;
        this.N = e;
        this.Ka = f;
        this.Da = g;
        this.Ua = h;
        this.Ta = k;
        this.Va = n;
        this.Na = m;
        this.mb = p;
        this.ba = r;
        this.F = z;
        this.G = A;
        this.Zb = I;
        this.Z = L;
        this.l = W(this);
        this.M = W(this);
        this.O = W(this);
        this.U = W(this);
        Kx(this, P);
        _.E(rv) ? A.promise.then(function(ca) {
            return aa.ia = ca
        }) : this.ga = Jx(this, A);
        this.o = Jx(this, I);
        this.da = X(this, l);
        this.J = X(this, F);
        this.ca = Y(this, G);
        vx(this.C, L, !0);
        Kx(this, U);
        _.E(Yv) ? O.promise.then(function(ca) {
            return aa.ha = ca
        }) : this.D = Jx(this, O)
    };
    _.R(CJ, Z);
    CJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L, G;
        return _.db(function(O) {
            switch (O.j) {
                case 1:
                    if (!a.J.value.length) return a.l.j(""), O.return();
                    b = !_.E(Nl);
                    if (b) {
                        Ee();
                        var P = Ge[1]
                    } else P = "";
                    c = P;
                    b ? (Ee(), P = Ge[4]) : P = "";
                    d = P;
                    b ? (Ee(), P = Ge[6]) : P = "";
                    e = P;
                    k = null != (h = null != (g = a.ia) ? g : null == (f = a.ga) ? void 0 : f.value) ? h : "0";
                    _.E(Yv) ? l = null != (n = a.ha) ? n : 1 : l = null != (r = null == (m = a.D) ? void 0 : m.value) ? r : null !== (null == (p = a.D) ? void 0 : p.value) || a.D.j.m ? null : 1;
                    a.o.value && (a.K.Yb = a.o.value);
                    z = new tH({
                        rb: {
                            F: a.F,
                            context: a.context,
                            K: a.K,
                            ja: a.ja,
                            ba: a.ba,
                            Ia: a.Ia,
                            td: a.da.value
                        },
                        bb: {
                            fa: a.J.value,
                            N: a.N,
                            Da: a.Da,
                            Bd: !1
                        },
                        de: {
                            Ua: a.Ua,
                            Ta: a.Ta
                        },
                        Gd: {
                            ed: c,
                            Dd: d,
                            Od: e
                        },
                        Md: {
                            xd: k
                        },
                        dd: {
                            Ka: a.Ka,
                            Va: a.Va,
                            Na: a.Na
                        },
                        hd: {
                            jd: a.ca.value
                        },
                        Xd: {
                            Yd: l
                        }
                    });
                    A = kf(vH(z));
                    I = A.url;
                    F = A.ld;
                    qx(a.mb, (9).toString(), 9, F);
                    a.l.j(I);
                    a.M.j(c);
                    a.O.j(d);
                    a.U.j(e);
                    return eb(O, a.G.promise, 2);
                case 2:
                    if (a.m) return O.return();
                    hh("gpt_paw", function(U) {
                        nh(U, a.context);
                        var aa;
                        K(U, "sig", null != (aa = a.G.o) ? aa : -1);
                        K(U, "req", a.I);
                        K(U, "req_cnt", a.K.H);
                        var ca;
                        K(U, "dm", null != (ca = window.navigator.deviceMemory) ? ca : -1)
                    }, _.Kd(wv));
                    if (!a.o.value) {
                        O.j = 3;
                        break
                    }
                    return eb(O, a.Zb.promise, 4);
                case 4:
                    hh("gpt_etu", function(U) {
                        nh(U, a.context);
                        var aa;
                        K(U, "sig", null != (aa = a.Zb.o) ? aa : -1);
                        K(U, "req", a.I)
                    });
                case 3:
                    L = CE();
                    G = !!_.ef(258);
                    if (!L && !G) {
                        O.j = 0;
                        break
                    }
                    return eb(O, a.Z.promise, 6);
                case 6:
                    hh("gpt_tt_blk", function(U) {
                        nh(U, a.context);
                        K(U, "res", L ? "c" : "t");
                        var aa;
                        K(U, "sig", null != (aa = a.Z.o) ? aa : -1);
                        K(U, "req", a.I)
                    }, _.Kd(sw)), O.j = 0
            }
        })
    };
    var DJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.T = c;
        this.N = d;
        this.F = e;
        this.B = Ix(this);
        Kx(this, f)
    };
    _.R(DJ, Z);
    DJ.prototype.j = function() {
        for (var a = _.y(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Qg(b, this.T);
            if (!Pg(b, this.T) && c) {
                a: {
                    var d = c;
                    var e = this.N.R[b.getDomId()],
                        f = 0,
                        g = 0;e = _.y(vg(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.y(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Yk(Tg(d, this.F)) || !d.parentElement || Yk(Tg(d.parentElement, this.F))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.W;g = g.R[b.getDomId()];Xk(c, Zg(b), Bg(f, g), d)
            }
        }
        this.B.notify()
    };
    var EJ = function(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.H = c;
            this.fa = d;
            this.ba = e;
            this.A = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        FJ = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        };
    var GJ = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 788);
        this.J = b;
        this.M = c;
        this.G = d;
        this.ba = e;
        this.B = Ix(this);
        this.D = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.U = X(this, f);
        this.Z = X(this, g);
        Kx(this, h);
        this.O = X(this, k)
    };
    _.R(GJ, Z);
    GJ.prototype.j = function() {
        var a = this,
            b = this.Z.value;
        if (b) {
            var c = new EJ(this.J, this.M, this.G, this.U.value, this.ba);
            this.l.open("GET", b);
            this.l.withCredentials = this.O.value;
            b = _.E(xm(window) ? ym : zm);
            var d = _.E(Am);
            if ((b = Bm(window, b, d)) && BE(b)) try {
                var e = DE(b);
                if (e) {
                    var f = this.l;
                    (null == f ? 0 : f.setTrustToken) && f.setTrustToken(e)
                }
            } catch (g) {}
            this.l.onreadystatechange = function() {
                HJ(a, c, !1)
            };
            this.l.onload = function() {
                HJ(a, c, !0)
            };
            this.l.onerror = function() {
                FJ(c, new tx("XHR error"))
            };
            this.l.send()
        }
        this.B.notify()
    };
    var HJ = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (FJ(b, new tx("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.D);
                    if (d && d)
                        if (1 !== b.state && 2 !== b.state) FJ(b, new sx("state err: (" + ([b.state, b.j.length].join() + ")")));
                        else {
                            b.j && (d = b.j + d);
                            var e = 0,
                                f = !1;
                            do {
                                var g = d.indexOf("\n", e);
                                f = -1 !== g;
                                if (!f) break;
                                var h = b,
                                    k = d.substr(e, g - e);
                                if (1 === h.state) h.A = k, ++h.m, h.state = 2;
                                else {
                                    try {
                                        h.C(h.m, h.A, {
                                            kind: 0,
                                            sa: yu(k)
                                        }, h.fa, h.ba), h.A = ""
                                    } catch (l) {}
                                    h.state = 1
                                }
                                e = g + 1
                            } while (f && e < d.length);
                            b.j = d.substr(e)
                        }
                    a.D = a.l.responseText.length;
                    c && 4 === a.l.readyState && (1 !== b.state || b.j ? FJ(b, new sx("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3, b.H(b.m, b.fa, b.ba)))
                }
        } catch (l) {
            FJ(b, l)
        }
    };
    var IJ = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.N = b;
        this.mb = c;
        this.B = Ix(this);
        this.l = X(this, e);
        Kx(this, d)
    };
    _.R(IJ, Z);
    IJ.prototype.j = function() {
        var a = this.l.value;
        a.length && rx(this.mb, "3", Q(this.N.R[a[0].getDomId()], 20));
        this.B.notify()
    };
    var JJ = function(a, b) {
        Z.call(this, a, 820);
        this.F = b;
        this.B = W(this)
    };
    _.R(JJ, Z);
    JJ.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.db(function(f) {
            if (1 == f.j) return eb(f, Eh(a.F), 2);
            b = f.m;
            c = b.Yb;
            d = b.status;
            c || hh("gpt_etu", function(g) {
                nh(g, a.context);
                K(g, "rsn", d)
            });
            a.B.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var KJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.ba = c;
        this.F = e;
        this.localStorage = f;
        this.B = W(this);
        this.o = Y(this, d)
    };
    _.R(KJ, Z);
    KJ.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.db(function(e) {
            if (1 == e.j) {
                if (!_.E($v) || !a.o.value) return zx(a.B), e.return();
                var f, g, h, k, l;
                if ((null == (f = a.l) ? 0 : J(f, 8)) || (null == (g = a.l) ? 0 : J(g, 1)) || 1 === (null == (h = a.l) ? void 0 : ud(h, 6, 2)) || 1 === (null == (k = a.l) ? void 0 : Q(k, 5)) || (null == (l = a.l) ? 0 : J(l, 9)) || !Bd(a.ba) || J(a.ba, 9)) {
                    a.B.j(5);
                    e.j = 0;
                    return
                }
                c = a.B;
                d = c.j;
                return eb(e, Mh(a.o.value, a.F, _.E(Wv), _.E(Zv), new _.xD(a.context), null != (b = a.localStorage) ? b : void 0), 3)
            }
            d.call(c, e.m);
            e.j = 0
        })
    };
    KJ.prototype.A = function() {
        zx(this.B)
    };
    var LJ = function(a, b, c) {
        Z.call(this, a, 858);
        this.l = b;
        this.ba = c;
        this.B = Ix(this)
    };
    _.R(LJ, Z);
    LJ.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n;
        return _.db(function(m) {
            switch (m.j) {
                case 1:
                    m.A = 2;
                    if (CE()) {
                        c = _.E(xm(window) ? ym : zm);
                        d = _.E(Am);
                        e = new AE(!!Bd(a.ba), c, d);
                        f = JE(e);
                        if (!f) {
                            m.j = 7;
                            break
                        }
                        if (_.E(rw)) {
                            g = new _.xD(a.context);
                            yD(g, f);
                            m.j = 7;
                            break
                        }
                        h = Date.now();
                        return eb(m, f, 9)
                    }
                    b = _.ef(258);
                    return eb(m, b, 6);
                case 6:
                    a.B.notify();
                    m.j = 5;
                    break;
                case 9:
                    hh("gpt_tt", function(p) {
                        nh(p, a.context);
                        K(p, "act", Date.now() - h)
                    }, _.Kd(sw));
                case 7:
                    a.B.notify();
                case 5:
                    _.E(pw) && (l = null == (k = a.l) ? void 0 : J(k, 9)) && !CE() && Ad({
                        mc: "1"
                    }, "gptttmc");
                    gb(m, 0);
                    break;
                case 2:
                    n = hb(m), n instanceof Error && a.P(n), a.B.notify(), m.j = 0
            }
        })
    };
    var NJ = function(a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.G = [];
        this.D = {
            Fb: MJ(this, function(d) {
                return d.getHeight()
            }),
            Pb: MJ(this, function(d) {
                return d.getWidth()
            }),
            Le: MJ(this, function(d) {
                return !!J(d, 8)
            }),
            Be: MJ(this, function(d) {
                return Q(d, 10)
            }),
            rd: MJ(this, function(d) {
                return d.getEscapedQemQueryId()
            }),
            je: MJ(this, function(d) {
                return jc(d, qt, 43)
            }),
            Ke: MJ(this, function(d) {
                return !!J(d, 9)
            }),
            vf: MJ(this, function(d) {
                return J(d, 12)
            }),
            Ce: MJ(this, function(d) {
                return jc(d, ht, fc(d, Ft, 48))
            }),
            ye: MJ(this, function(d) {
                return jc(d, ft, fc(d, Ft, 39))
            }),
            Ub: MJ(this, function(d) {
                return Q(d, 36)
            }),
            wf: MJ(this, function(d) {
                return J(d, 13)
            }),
            Je: MJ(this, function(d) {
                return J(d, 3)
            }),
            rf: MJ(this, function(d) {
                return Q(d, 49)
            }),
            zf: MJ(this, function(d) {
                return Q(d, 29)
            }),
            Af: MJ(this, function(d) {
                return Q(d, 30)
            }),
            Ge: MJ(this, function(d) {
                return jc(d, tt, 51)
            }),
            xf: MJ(this, function(d) {
                return J(d, 52)
            }),
            Zb: MJ(this, function(d) {
                return Q(d, 61)
            }),
            pa: W(this),
            Zd: MJ(this, function(d) {
                return jc(d, zt, 58)
            }),
            Cf: MJ(this, function(d) {
                var e, f;
                return null != (f = null == (e = jc(d, st, 56)) ? void 0 : Q(e, 1)) ? f : null
            }),
            Ze: MJ(this, function(d) {
                var e;
                return null != (e = hc(d, $s, 62)) ? e : []
            })
        };
        this.o = X(this, b)
    };
    _.R(NJ, Z);
    var MJ = function(a, b) {
        var c = W(a);
        a.G.push({
            B: c,
            we: b
        });
        return c
    };
    NJ.prototype.j = function() {
        for (var a = _.y(this.G), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.we;
            Ax(b.B, c(this.o.value))
        }
        a = this.o.value;
        if (jc(a, Dt, fc(a, Et, 41))) throw new sx("SecureFrame");
        0 === this.l.kind || 1 === this.l.kind && this.l.url ? this.D.pa.j(this.l) : (a = this.D.pa, b = a.j, c = this.o.value, c = Q(c, fc(c, Et, 4)), b.call(a, {
            kind: 0,
            sa: c || ""
        }))
    };
    var OJ = function(a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = Ix(this);
        this.o = X(this, c)
    };
    _.R(OJ, Z);
    OJ.prototype.j = function() {
        for (var a = this, b = Xb(this.o.value, 23), c = _.C(QG), d = _.y(b), e = d.next(); !e.done; e = d.next()) e = e.value, RG(c, e), SG(c, e, this.slotId);
        this.l.notify();
        b.length && hh("gpt_hp", function(f) {
            nh(f, a.context);
            K(f, "ls", b.join())
        }, _.Kd(kv))
    };
    var PJ = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.B = W(this);
        this.o = W(this)
    };
    _.R(PJ, Z);
    PJ.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = Uh(a, Wq);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new Ct(a.slice());
        var c;
        b = _.y(null != (c = Xb(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) cy(c.value);
        Ap(4);
        this.slotId.dispatchEvent(PE, 800, a);
        this.B.j(a);
        c = jc(a, pt, 54);
        this.o.j(c ? hc(c, nt, 1).filter(function(d) {
            cn(d, 1) || Od(32, "");
            return !!cn(d, 1)
        }).map(function(d) {
            var e = cn(d, 2);
            return {
                Ya: cn(d, 1),
                url: e && (_.u(e, "startsWith").call(e, location.protocol) || _.u(e, "startsWith").call(e, "data:") && 40 >= e.length) ? Oa(e) : void 0
            }
        }) : [])
    };
    var QJ = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.K = c;
        this.l = Ix(this);
        this.o = X(this, d)
    };
    _.R(QJ, Z);
    QJ.prototype.j = function() {
        var a = this;
        J(this.o.value, 11) && (_.cF(this.K, this.slotId), ZE(this.K, this.slotId, function() {
            _.dF(a.K, a.slotId)
        }));
        this.l.notify()
    };
    var RJ = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.ba = b;
        this.ja = c;
        this.l = Ix(this);
        this.o = X(this, d)
    };
    _.R(RJ, Z);
    RJ.prototype.j = function() {
        if (Bd(this.ba))
            for (var a = new w.Set, b = _.y(hc(this.o.value, rt, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = c.getVersion()) ? d : 1;
                a.has(e) || (vy(this.ja, 2 === e ? "__gpi" : "__gads", c, this.ba), a.add(e))
            }
        this.l.notify()
    };
    var SJ = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, z, A, I, F, L, G, O, P) {
        Z.call(this, a, 973);
        this.G = b;
        this.o = c;
        this.M = d;
        this.N = e;
        this.K = f;
        this.ja = g;
        this.ca = h;
        this.J = k;
        this.l = l;
        this.jb = n;
        this.D = m;
        this.da = p;
        this.Ja = r;
        this.F = z;
        this.T = A;
        this.ia = I;
        this.ha = G;
        this.U = O;
        this.ga = P;
        this.Z = Y(this, I);
        this.O = X(this, F);
        this.va = X(this, L);
        Kx(this, m.J)
    };
    _.R(SJ, Z);
    SJ.prototype.j = function() {
        var a = this,
            b = new $d;
        _.Qm(this, b);
        var c = this.O.value,
            d = dm(this.N.W);
        if (!_.E(dw)) {
            var e = new RH(this.context, ff(), console, this.ia);
            D(b, e)
        }
        e = new oJ(this.context, this.o, this.K, jc(this.N.W, Ko, 5), this.T);
        D(b, e);
        var f = new DJ(this.context, this.o, this.T, this.N, this.F, e.B);
        D(b, f);
        var g = !!J(this.N.W, 6);
        e = new tJ(this.context, this.o, g, this.N, this.G, this.F, c);
        D(b, e);
        var h = new JJ(this.context, this.F);
        D(b, h);
        var k = new LJ(this.context, d, c);
        D(b, k);
        var l = this.D,
            n = l.P,
            m = l.I,
            p = l.ea,
            r = l.o,
            z = l.D,
            A = l.ca,
            I = l.U,
            F = l.ha,
            L = l.ia,
            G = l.da;
        l = this.U;
        if (0 !== _.Kd(qv) || !l) {
            l || _.Kd(sv);
            var O;
            l = new uJ(this.context, c, l, null != (O = this.ga) ? O : L, F);
            D(b, l);
            l = l.B
        }
        O = new lH(this.context, this.G, e.l, n, this.N.R, p, r, z, A, this.Ja, this.K);
        D(b, O);
        I = new qJ(this.context, this.va.value, I, m);
        D(b, I);
        n = this.jb.Da;
        p = this.jb.Ua || NaN;
        r = this.jb.Ta || NaN;
        A = z = null;
        var P = ++this.K.H;
        m = window.isSecureContext && _.E(bw) ? "wbn" : "ldjh";
        "wbn" === m && (z = Ua(), A = "googletag.wbn" + P);
        _.E($v) ? (G = new KJ(this.context, d, c, G, this.F, this.Z.value), D(b, G), G = G.B) : (G = new Co, zx(G));
        f = new CJ(this.context, g, this.K, this.ja, this.N, m, n, p, r, I.B, z, A, _.C(bg), c, this.F, l, h.B, e.l, k.B, O.B, G, f.B, this.ha);
        D(b, f);
        h = new IJ(this.context, this.N, _.C(bg), f.l, e.l);
        D(b, h);
        d = new vJ(this.context, d, c);
        D(b, d);
        k = _.$f(this.context, 646, function(aa, ca, Na, ya, za) {
            var ob = function() {
                return void TJ(a, za, aa, ca, Na, ya)
            };
            aa && _.E(iv) ? setTimeout(_.$f(a.context, 646, ob), 0) : ob()
        });
        F = _.$f(this.context, 647, function(aa, ca, Na) {
            var ya = function() {
                return void UJ(a, P, Na, ca, aa)
            };
            _.E(iv) ? setTimeout(_.$f(a.context, 646, ya), 0) : ya()
        });
        L = _.$f(this.context, 289, function(aa) {
            aa = aa instanceof Error ? aa : Error();
            aa.message = aa.message || "strm_err";
            dg(a.context, 289, aa)
        });
        var U;
        "ldjh" === m ? U = new GJ(this.context, k, L, F, c, e.l, f.l, h.B, d.B) : U = new rJ(this.context, k, L, F, m, A, z, c, this.T, e.l, f.l, h.B, d.B);
        D(b, U);
        d = new AJ(this.context, this.K, P, e.l, U.B);
        D(b, d);
        g = new mJ(this.context, this.K, this.N, this.ja, m, g, n, p, r, I.B, z, A, this.F, f.l, e.l, l, f.M, f.O, f.U, O.B, d.B, G);
        D(b, g);
        g = new BJ(this.context, this.l.Nd, this.N, g.B);
        D(b, g);
        g = new zJ(this.context, m, this.ca, this.F, g.B);
        D(b, g);
        g = new yJ(this.context, this.N, this.J, e.l, g.B);
        D(b, g);
        e = new wJ(this.context, this.K, this.N, this.T, e.l, g.B);
        D(b, e);
        c = new xJ(this.context, Md(this.F), this.F, c, U.B);
        D(b, c);
        ae(b)
    };
    var TJ = function(a, b, c, d, e, f) {
            var g, h;
            return _.db(function(k) {
                g = f[c];
                if (!g) return dg(a.context, 646, Error("missing slot")), k.return();
                0 === c && (h = Q(a.N.R[g.getDomId()], 20), rx(_.C(bg), "4", h));
                return eb(k, VJ(a, g, d, e, b), 0)
            })
        },
        UJ = function(a, b, c, d, e) {
            var f, g, h;
            return _.db(function(k) {
                switch (k.j) {
                    case 1:
                        var l = a.context,
                            n = e + 1,
                            m = d.length;
                        if (l.Kb) {
                            var p = l.kb;
                            l = qf(l);
                            var r = new Xw;
                            r = ac(r, 3, b, 0);
                            n = ac(r, 1, n, 0);
                            m = ac(n, 2, m, 0);
                            m = uf(l, 8, vf, m);
                            cd(p, m)
                        }
                        f = e + 1;
                    case 2:
                        if (!(f < d.length)) {
                            k.j = 4;
                            break
                        }
                        if (!d[f]) {
                            k.j = 3;
                            break
                        }
                        p = new Ct;
                        g = x(p, 8, !0).X();
                        h = '{"empty":' + g + "}";
                        return eb(k, TJ(a, c, f, h, {
                            kind: 0,
                            sa: ""
                        }, d), 3);
                    case 3:
                        ++f;
                        k.j = 2;
                        break;
                    case 4:
                        p = a.K, m = a.M, l = p.m.get(m) - 1, 0 === l ? p.m.delete(m) : p.m.set(m, l), 0 === l && a.l.yd.dispatchEvent(WE, 965, a.M), k.j = 0
                }
            })
        },
        VJ = function(a, b, c, d, e) {
            var f, g, h, k, l, n, m, p, r, z, A, I, F, L, G, O, P, U, aa, ca, Na;
            return _.db(function(ya) {
                switch (ya.j) {
                    case 1:
                        return f = new $d, g = new PJ(a.context, c, b), D(f, g), h = new RJ(a.context, e, a.ja, g.B), D(f, h), k = new OJ(a.context, b, g.B), D(f, k), l = new QJ(a.context, b, a.K, g.B), D(f, l), n = new NJ(a.context, g.B, d), D(f, n), m = [h.l.promise, k.l.promise, l.l.promise], ae(f), eb(ya, w.Promise.all(m), 2);
                    case 2:
                        if (b.m) return ya.return();
                        p = n;
                        r = p.D;
                        return eb(ya, r.rd.promise, 3);
                    case 3:
                        return A = null != (z = ya.m) ? z : "", eb(ya, r.Zd.promise, 4);
                    case 4:
                        return I = ya.m, L = null == (F = I) ? void 0 : At(F), eb(ya, r.Le.promise, 5);
                    case 5:
                        G = !ya.m, aa = (O = !!I) && !(null == (P = L) ? 0 : Gr(P, 9)) && !(null == (U = L) ? 0 : Gr(U, 10)), ca = O && (!aa || G), !G && aa && hh("gpt_td_nf", function(za) {
                            nh(za, a.context);
                            K(za, "queryid", A);
                            K(za, "slot", b.getAdUnitPath())
                        }), Na = mf("google_norender"), !Na && G || WJ(a, b, A), Na || !G && !ca || gJ(a.da, b, !G, a.K, a.N, r, g.o, e, a.l.Nd, a.J, a.D), f.za(), ya.j = 0
                }
            })
        },
        WJ = function(a, b, c) {
            var d = Qg(b, document);
            d && Se(d, window, c, !0);
            rx(_.C(bg), "5", Q(a.N.R[b.getDomId()], 20));
            b.dispatchEvent(QE, 801, {
                nd: null,
                isBackfill: !1
            });
            if (_.bF(a.K, b) && !$g(b, document)) {
                c = a.N;
                a = c.W;
                c = c.R[b.getDomId()];
                var e;
                (null != (e = J(c, 10)) ? e : J(a, 11)) && Mm(b, document, c, a)
            }
            b.dispatchEvent(SE, 825, {
                isEmpty: !0
            })
        };
    var XJ = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, z, A) {
        Z.call(this, a, 885);
        this.D = b;
        this.N = c;
        this.K = d;
        this.ja = e;
        this.jb = f;
        this.M = g;
        this.J = h;
        this.l = k;
        this.G = l;
        this.o = n;
        this.O = m;
        this.F = p;
        this.T = r;
        this.U = X(this, z);
        Kx(this, A)
    };
    _.R(XJ, Z);
    XJ.prototype.j = function() {
        var a = this.U.value;
        if (a.length) {
            var b = this.K,
                c = this.l,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) {
                var e = b.value;
                c = b = void 0;
                d = e.Ja;
                var f = e.fa;
                e = new $d;
                _.Qm(this, e);
                var g = void 0;
                0 >= _.Kd(sv) && (g = new hJ(this.context, this.F), D(e, g));
                var h = Xm(this.context, this.D, dm(this.N.W), this.F, this.o.L),
                    k = h.Za;
                _.Qm(e, h.Ha);
                h = new lJ(this.context, this.F, k);
                D(e, h);
                h = new iJ(this.context, this.F, k);
                D(e, h);
                h = new jJ(this.context, _.ef(150), k);
                D(e, h);
                var l = new Do(this.context, this.F, k);
                D(e, l);
                var n = new kJ(this.context, this.ja, l.B, k);
                D(e, n);
                d = new SJ(this.context, this.D, f, this.l, this.N, this.K, this.ja, this.M, this.J, this.G, this.jb, this.o, this.O, d, this.F, this.T, l.B, k, n.l, h.l, null == (c = g) ? void 0 : c.l, null == (b = g) ? void 0 : b.o);
                D(e, d);
                ae(e)
            }
        } else this.G.yd.dispatchEvent(WE, 965, this.l)
    };
    var YJ = new w.Map,
        ZJ = function(a, b, c, d) {
            d = void 0 === d ? YJ : d;
            Z.call(this, a, 834);
            this.D = b;
            this.fa = c;
            this.l = d;
            this.o = W(this);
            this.G = w.Promise.all(this.fa.map(this.J, this))
        };
    _.R(ZJ, Z);
    ZJ.prototype.j = function() {
        var a = this,
            b;
        return _.db(function(c) {
            if (1 == c.j) return eb(c, a.G, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.m
            }));
            c.j = 0
        })
    };
    ZJ.prototype.J = function(a) {
        var b = this,
            c, d;
        return _.db(function(e) {
            if (1 == e.j) {
                if (a.m) return e.return(null);
                b.l.has(a) || (b.l.set(a, np(a)), _.pn(a, function() {
                    return void b.l.delete(a)
                }));
                c = b.l.get(a);
                return eb(e, c(), 2)
            }
            d = e.m;
            if (b.m) return e.return(null);
            if (d) return e.return(a);
            N(b.D, jG(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var $J = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.K = b;
        this.Ia = c;
        this.o = d;
        this.l = W(this);
        this.D = X(this, e)
    };
    _.R($J, Z);
    $J.prototype.j = function() {
        var a = this.D.value;
        if (a.length) {
            for (var b = _.y(a), c = b.next(); !c.done; c = b.next()) fF(this.K, c.value);
            this.o ? this.l.j([]) : this.Ia ? (b = bf(a[0].getAdUnitPath()), a = aK(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    Ja: bf(d.getAdUnitPath()),
                    fa: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var aK = function(a, b) {
        var c = [];
        a = ra(a, function(f) {
            return bf(f.getAdUnitPath())
        });
        a = _.y(_.u(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Ja: d,
                fa: e
            }) : c.push({
                Ja: d,
                fa: e
            })
        }
        return c
    };
    var bK = function(a, b, c) {
        Z.call(this, a, 845);
        this.R = b;
        this.l = W(this);
        this.o = W(this);
        this.D = X(this, c)
    };
    _.R(bK, Z);
    bK.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.R[d.getDomId()];
                return !!vg(d).length || wg(d, 16)
            },
            c = this.D.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(Xq(b)))
    };
    var cK = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.K = b;
        this.N = c;
        this.T = d;
        this.l = Ix(this);
        this.o = X(this, e)
    };
    _.R(cK, Z);
    cK.prototype.j = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.bF(this.K, b)) {
                var c = this.N,
                    d = c.W;
                c = c.R[b.getDomId()];
                Lm(c, d) && Mm(b, this.T, c, d);
                fF(this.K, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = J(c, 10)) ? f : J(d, 11)) && e && Mm(b, this.T, c, d)
            }
        this.l.notify()
    };
    var dK = function(a, b, c, d, e, f, g, h, k, l, n) {
        _.ww.call(this);
        var m = this;
        this.context = a;
        this.C = b;
        this.K = c;
        this.ja = d;
        this.qa = e;
        this.I = f;
        this.o = g;
        this.L = h;
        this.l = k;
        this.T = l;
        this.F = n;
        this.j = new w.Map;
        this.A = new LE(a);
        _.Qm(this, this.A);
        NE(this.A, WE, function(p) {
            p = p.detail;
            var r = m.j.get(p);
            r && (m.j.delete(p), r.za())
        })
    };
    _.R(dK, _.ww);
    var eK = function(a, b, c, d) {
        var e = ++a.K.o;
        a.j.has(e);
        var f = new $d;
        a.j.set(e, f);
        b = new ZJ(a.context, a.C, b);
        D(f, b);
        var g = new bK(a.context, d.R, b.o);
        D(f, g);
        b = new $J(a.context, a.K, !!J(d.W, 6), mf("google_nofetch"), g.l);
        D(f, b);
        g = new cK(a.context, a.K, d, document, g.o);
        D(f, g);
        a = new XJ(a.context, a.C, d, a.K, a.ja, c, a.I, a.o, e, {
            yd: a.A,
            Nd: a.qa
        }, a.l, a.L, a.F, a.T, b.l, g.l);
        D(f, a);
        ae(f)
    };
    var fK = function(a, b, c, d) {
        lI.call(this, a, b);
        this.aa = c;
        this.V = d;
        this.l = new w.Set;
        this.L = {};
        this.K = _.C(XE);
        this.G = new dJ(this.context, this.j);
        this.ja = new uy(window);
        this.M = _.C(sI);
        this.J = new dK(this.context, this.j, this.K, this.ja, this, this.M, this.aa, this.G, this.V, document, window);
        _.Qm(this, this.J);
        _.E(iw) && new AH(a, this)
    };
    _.R(fK, lI);
    fK.prototype.getName = function() {
        return "publisher_ads"
    };
    fK.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.ha(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else e = c;
        this.enable();
        var g = Uj(this.context, this.j, a, b, e),
            h = g.slotId;
        g = g.Ra;
        if (h && g) {
            f && !e && (f.id = h.getDomId());
            this.Sa(h, g);
            g.setClickUrl(d);
            var k;
            hn(this.j, null != (k = f) ? k : h.getDomId())
        } else N(this.j, ci("PubAdsService.display", [a, b, c]))
    };
    var GG = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.R[b.getDomId()]) && x(e, 19, !0);
        e = {
            id: Mt(b.getDomId())
        };
        Za(d, De(e));
        Qg(b, d) ? (a.enable(), aF(a.K, b), gK(a, c, b)) : hh("gpt_pb_write", function(f) {
            nh(f, a.context)
        })
    };
    fK.prototype.Sa = function(a, b) {
        var c = this;
        J(b, 17) || this.C && aF(this.K, a);
        this.dispatchEvent(TE, 724, {
            bd: a.getDomId(),
            R: b
        });
        NE(a, SE, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new $H(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, f)
        });
        NE(a, PE, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new iI(a, c.getName()))
        });
        lI.prototype.Sa.call(this, a, b)
    };
    fK.prototype.P = function(a, b) {
        this.enable();
        this.C && aF(this.K, b);
        this.j.info(EF());
        var c = a.W,
            d = a.R,
            e = J(c, 6);
        if (e || !this.K.fb(b)) e && (e = Qg(b)) && b.dispatchEvent(OE, 778, e), J(c, 4) && (d = d[b.getDomId()], e = document, e = void 0 === e ? document : e, Lm(d, c) && !this.K.fb(b) && Mm(b, e, d, c)), gK(this, a, b)
    };
    var gK = function(a, b, c) {
            var d = hK(a, b, c);
            iK(a, d, b, {
                Da: 1
            });
            b = c.getAdUnitPath();
            if (c = a.L[b]) {
                c = _.y(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, iK(a, d.fa, d.N, d.jb);
                delete a.L[b]
            }
        },
        hK = function(a, b, c) {
            var d = b.W;
            b = b.R;
            if (J(d, 4)) return [];
            var e;
            return !J(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : J(e, 17)) ? (a.l.add(c), _.pn(c, function() {
                return void a.l.delete(c)
            }), [c]) : a.A.filter(function(f) {
                if (a.l.has(f)) return !1;
                a.l.add(f);
                _.pn(f, function() {
                    return void a.l.delete(f)
                });
                return !0
            })
        },
        iK = function(a, b, c, d) {
            a.j.info(LF());
            if (jK(a, b, d, c) && 1 !== d.Da)
                for (b = _.y(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.dispatchEvent(UE, 725, {
                    bd: d,
                    R: c.R[d]
                })
        },
        jK = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.bF(a.K, e)) return !1;
                var f = d.R[e.getDomId()];
                5 !== Cj(f) && 4 !== Cj(f) || _.cF(a.K, e);
                return !0
            });
            if (!b.length) return null;
            eK(a.J, b, c, d);
            return b
        };
    fK.prototype.refresh = function(a, b, c) {
        b = kK(this, b);
        if (!b.length) return !1;
        lK(this, a, b, null != c ? c : {
            Da: 2
        });
        return !0
    };
    var kK = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.m) return !0;
                N(a.j, OF(String(d)));
                return !1
            })
        },
        lK = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.C) {
                var h = {};
                e = _.y(c);
                for (f = e.next(); !f.done; h = {
                        Ab: h.Ab
                    }, f = e.next()) h.Ab = f.value, a.l.add(h.Ab), _.pn(h.Ab, function(k) {
                    return function() {
                        return void a.l.delete(k.Ab)
                    }
                }(h));
                iK(a, c, b, d)
            } else c.length && J(b.W, 6) ? (N(a.j, KF(g), e), e = e.getAdUnitPath(), f = null != (h = a.L[e]) ? h : [], f.push({
                fa: c,
                N: b,
                jb: d
            }), a.L[e] = f) : N(a.j, IF(g), e)
        };
    fK.prototype.Qc = function() {
        var a = this,
            b = Vf().j;
        if (J(b, 6))
            for (var c = _.y(this.A), d = c.next(); !d.done; d = c.next()) this.C && aF(this.K, d.value);
        dH(this, b);
        NE(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.u(a.A, "find").call(a.A, function(g) {
                return f === g.j
            });
            mK(a, [e], Vf().j, Vf().m, a.K)
        });
        Gf("pubadsReady", !0)
    };
    fK.prototype.destroySlots = function(a, b) {
        a = lI.prototype.destroySlots.call(this, a);
        if (a.length && this.C) {
            var c, d = null != (c = null == b ? void 0 : b.W) ? c : Vf().j,
                e;
            b = null != (e = null == b ? void 0 : b.R) ? e : Vf().m;
            nK(this, a, d, b)
        }
        return a
    };
    var fH = function(a, b, c, d) {
            if (!a.C) return N(a.j, JF(), d[0]), !1;
            var e = kK(a, d);
            if (!e.length) return N(a.j, ci("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.j.info(MF());
            nK(a, e, b, c);
            return !0
        },
        nK = function(a, b, c, d) {
            for (var e = _.y(b), f = e.next(); !f.done; f = e.next()) YE(a.K, f.value);
            mK(a, b, c, d, a.K)
        };
    fK.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && cy(a)
    };
    var mK = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.y(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                eJ(a.G, g);
                var h = d[g.getDomId()];
                Lm(h, c) && Mm(g, f.document, h, c);
                fF(e, g)
            }
        },
        eH = function(a, b, c, d) {
            x(d, 21, !0);
            x(d, 22, String(null != b ? b : ""));
            x(d, 23, String(null != c ? c : ""));
            dH(a, d)
        },
        gH = function(a, b) {
            if (!a.C) return null;
            var c, d;
            return {
                vid: null != (c = Q(b, 22)) ? c : "",
                cmsid: null != (d = Q(b, 23)) ? d : ""
            }
        },
        dH = function(a, b) {
            J(b, 21) && a.C && x(b, 29, zu())
        };
    var vp = "2022060701";
    var oK = S(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        pK = S(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        qK = S(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        rK = S(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        sK = S(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]),
        tK = S(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]);
    (function(a, b, c, d) {
        var e = null != c ? c : {
            ya: wp(),
            ab: "",
            kb: new Dp(0),
            Ud: !0,
            qd: 1
        };
        try {
            hf();
            var f = window.googletag;
            if (null == f ? 0 : f.evalScripts) f.evalScripts();
            else {
                VD();
                Gf("evalScripts", function() {
                    try {
                        tn()
                    } catch (P) {
                        dg(e, 297, P);
                        var G, O;
                        null == (G = window.console) || null == (O = G.error) || O.call(G, P)
                    }
                });
                try {
                    ry()
                } catch (G) {
                    dg(e, 408, G)
                }
                um();
                try {
                    py(), Ap(13), Ap(3)
                } catch (G) {
                    dg(e, 408, G)
                }
                ah("gpt-tag-load");
                var g = Bp(),
                    h = null != c ? c : Ep(g),
                    k = null != d ? d : new YH(h),
                    l = !!_.ef(259);
                wf(h, l);
                _.C(Oj);
                var n = a(h),
                    m = new pI(h, n),
                    p = new SH(h, k),
                    r = new fK(h, k, m, p);
                _.ef(260) && TH(p, r);
                var z = Ni(cw);
                z && _.gg(h, 862, function() {
                    var G = document;
                    if (z && G.head) {
                        var O = _.jd("META");
                        G.head.appendChild(O);
                        O.httpEquiv = "origin-trial";
                        O.content = z
                    }
                }, !0);
                if (_.E(xv)) Nn(h, k, r, b);
                else {
                    Gf("defineOutOfPageSlot", H(h, 73, function(G, O) {
                        G = nn(h, k, G, O);
                        if (!G) return null;
                        var P;
                        return null != (P = G.j) ? P : null
                    }));
                    XG(h, k);
                    yn(h, k);
                    ff().enums || pq();
                    Gf("getVersion", H(h, 946, function() {
                        return h.Pa ? String(h.Pa) : h.ya
                    }));
                    Gf("pubads", H(h, 947, function() {
                        return Yj(h, k, r)
                    }));
                    var A;
                    Gf("companionAds", H(h, 816, function() {
                        null != A || (A = new In(h, k, r));
                        return gi(h, k, A)
                    }));
                    var I;
                    if (mf("google_content_service_disabled", b)) hh("gpt_scdvqp", function(G) {
                        nh(G, h)
                    }, 1);
                    else if (!_.E(zn)) {
                        var F = _.An(function() {
                            _.E(Bn) || N(k, Cn(), null)
                        });
                        Gf("content", H(h, 817, function() {
                            _.E(Dn) && k.error(En(), null, !0);
                            F();
                            null != I || (I = new Fn(h, k));
                            return ii(h, k, I)
                        }))
                    }
                    Gf("setAdIframeTitle", H(h, 729, rn));
                    Gf("getEventLog", H(h, 945, function() {
                        return new Jn(h, k)
                    }));
                    Gf("sizeMapping", H(h, 90, function() {
                        return new Kn(h, k)
                    }));
                    Gf("enableServices", H(h, 91, function() {
                        Ln(k)
                    }));
                    Gf("destroySlots", H(h, 75, function(G) {
                        return xn(k, G)
                    }));
                    Gf("apiReady", !0)
                }
                var L = function() {
                    _.gg(h, 77, function() {
                        var G = ff().cmd;
                        if (!G || Array.isArray(G)) {
                            var O = new BH(k);
                            ff().cmd = $h(h, O);
                            null != G && G.length && O.push.apply(O, G)
                        }
                    })
                };
                ff().fifWin && "complete" !== document.readyState ? _.bb(window, "load", function() {
                    window.setTimeout(L, 0)
                }) : L();
                tn();
                if (_.E(iw) || _.C(bg).j) up(), ti(document, Oa(Zc(_.E(kw) ? n.ff : n.hf).toString()));
                ho(h, k);
                oi(h)
            }
        } catch (G) {
            dg(e, 106, G)
        }
    })(function(a) {
        return {
            oe: function(b) {
                return a.ab ? v(oK, a.ab, b) : v(pK, b, a.ya)
            },
            ne: function(b) {
                return a.ab ? v(qK, a.ab, b) : v(rK, b, a.ya)
            },
            hf: v(sK),
            ff: v(tK)
        }
    }, window);
}).call(this, {});