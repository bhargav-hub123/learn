// hash: mlxQV3nIb+TzTKd9CZYL9u6eURq7B8LCSKQD3AUwWFBsM3VPIBix01ANDHemUcdKbeT3XzsNh5A+OVUCGd6V9hNh5t8I+vszFWjIGTJpPoSIs4j2cVQADFuIFwM6RwnKMSpUWgwT1i4dwoUoFsjpwc4ej2B4FhqfWQxMsYjQGp0=
var _ADAGIO = function(e) {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach((function(t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var d = ["120x600", "160x600", "300x250", "300x600", "300x1050", "600x250", "600x600", "728x90", "728x94", "728x315", "800x600", "970x90", "970x250", "1000x200"],
        u = {
            NONE: 0,
            NOT_IAB_COMPLIANT: 1
        },
        c = Array.isArray,
        l = "object" == typeof global && global && global.Object === Object && global,
        f = "object" == typeof self && self && self.Object === Object && self,
        v = l || f || Function("return this")(),
        p = v.Symbol,
        h = Object.prototype,
        g = h.hasOwnProperty,
        m = h.toString,
        b = p ? p.toStringTag : void 0;
    var y = Object.prototype.toString;
    var A = p ? p.toStringTag : void 0;

    function w(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : A && A in Object(e) ? function(e) {
            var t = g.call(e, b),
                n = e[b];
            try {
                e[b] = void 0;
                var i = !0
            } catch (e) {}
            var r = m.call(e);
            return i && (t ? e[b] = n : delete e[b]), r
        }(e) : function(e) {
            return y.call(e)
        }(e)
    }

    function _(e) {
        return null != e && "object" == typeof e
    }

    function I(e) {
        return "symbol" == typeof e || _(e) && "[object Symbol]" == w(e)
    }
    var O = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        D = /^\w*$/;

    function E(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }

    function U(e) {
        if (!E(e)) return !1;
        var t = w(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
    var S, C = v["__core-js_shared__"],
        j = (S = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + S : "";
    var x = Function.prototype.toString;

    function G(e) {
        if (null != e) {
            try {
                return x.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
    var N = /^\[object .+?Constructor\]$/,
        k = Function.prototype,
        T = Object.prototype,
        B = k.toString,
        P = T.hasOwnProperty,
        R = RegExp("^" + B.call(P).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function z(e) {
        return !(!E(e) || (t = e, j && j in t)) && (U(e) ? R : N).test(G(e));
        var t
    }

    function V(e, t) {
        var n = function(e, t) {
            return null == e ? void 0 : e[t]
        }(e, t);
        return z(n) ? n : void 0
    }
    var M = V(Object, "create");
    var L = Object.prototype.hasOwnProperty;
    var q = Object.prototype.hasOwnProperty;

    function F(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }

    function H(e, t) {
        return e === t || e != e && t != t
    }

    function W(e, t) {
        for (var n = e.length; n--;)
            if (H(e[n][0], t)) return n;
        return -1
    }
    F.prototype.clear = function() {
        this.__data__ = M ? M(null) : {}, this.size = 0
    }, F.prototype.delete = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }, F.prototype.get = function(e) {
        var t = this.__data__;
        if (M) {
            var n = t[e];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return L.call(t, e) ? t[e] : void 0
    }, F.prototype.has = function(e) {
        var t = this.__data__;
        return M ? void 0 !== t[e] : q.call(t, e)
    }, F.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = M && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };
    var $ = Array.prototype.splice;

    function Q(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    Q.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, Q.prototype.delete = function(e) {
        var t = this.__data__,
            n = W(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : $.call(t, n, 1), --this.size, !0)
    }, Q.prototype.get = function(e) {
        var t = this.__data__,
            n = W(t, e);
        return n < 0 ? void 0 : t[n][1]
    }, Q.prototype.has = function(e) {
        return W(this.__data__, e) > -1
    }, Q.prototype.set = function(e, t) {
        var n = this.__data__,
            i = W(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
    };
    var J = V(v, "Map");

    function K(e, t) {
        var n, i, r = e.__data__;
        return ("string" == (i = typeof(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }

    function Z(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    Z.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new F,
            map: new(J || Q),
            string: new F
        }
    }, Z.prototype.delete = function(e) {
        var t = K(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }, Z.prototype.get = function(e) {
        return K(this, e).get(e)
    }, Z.prototype.has = function(e) {
        return K(this, e).has(e)
    }, Z.prototype.set = function(e, t) {
        var n = K(this, e),
            i = n.size;
        return n.set(e, t), this.size += n.size == i ? 0 : 1, this
    };

    function Y(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
        var n = function() {
            var i = arguments,
                r = t ? t.apply(this, i) : i[0],
                a = n.cache;
            if (a.has(r)) return a.get(r);
            var o = e.apply(this, i);
            return n.cache = a.set(r, o) || a, o
        };
        return n.cache = new(Y.Cache || Z), n
    }
    Y.Cache = Z;
    var X = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ee = /\\(\\)?/g,
        te = function(e) {
            var t = Y(e, (function(e) {
                    return 500 === n.size && n.clear(), e
                })),
                n = t.cache;
            return t
        }((function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(X, (function(e, n, i, r) {
                t.push(i ? r.replace(ee, "$1") : n || e)
            })), t
        }));
    var ne = p ? p.prototype : void 0,
        ie = ne ? ne.toString : void 0;

    function re(e) {
        if ("string" == typeof e) return e;
        if (c(e)) return function(e, t) {
            for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i;) r[n] = t(e[n], n, e);
            return r
        }(e, re) + "";
        if (I(e)) return ie ? ie.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }

    function ae(e, t) {
        return c(e) ? e : function(e, t) {
            if (c(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !I(e)) || (D.test(e) || !O.test(e) || null != t && e in Object(t))
        }(e, t) ? [e] : te(function(e) {
            return null == e ? "" : re(e)
        }(e))
    }

    function oe(e) {
        if ("string" == typeof e || I(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    }

    function se(e, t) {
        for (var n = 0, i = (t = ae(t, e)).length; null != e && n < i;) e = e[oe(t[n++])];
        return n && n == i ? e : void 0
    }
    var de = Object.prototype.hasOwnProperty;

    function ue(e, t) {
        return null != e && de.call(e, t)
    }

    function ce(e) {
        return _(e) && "[object Arguments]" == w(e)
    }
    var le = Object.prototype,
        fe = le.hasOwnProperty,
        ve = le.propertyIsEnumerable,
        pe = ce(function() {
            return arguments
        }()) ? ce : function(e) {
            return _(e) && fe.call(e, "callee") && !ve.call(e, "callee")
        },
        he = /^(?:0|[1-9]\d*)$/;

    function ge(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && he.test(e)) && e > -1 && e % 1 == 0 && e < t
    }

    function me(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
    }

    function be(e, t) {
        return null != e && function(e, t, n) {
            for (var i = -1, r = (t = ae(t, e)).length, a = !1; ++i < r;) {
                var o = oe(t[i]);
                if (!(a = null != e && n(e, o))) break;
                e = e[o]
            }
            return a || ++i != r ? a : !!(r = null == e ? 0 : e.length) && me(r) && ge(o, r) && (c(e) || pe(e))
        }(e, t, ue)
    }
    var ye = function() {
        try {
            var e = V(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }();
    var Ae = Object.prototype.hasOwnProperty;

    function we(e, t, n) {
        var i = e[t];
        Ae.call(e, t) && H(i, n) && (void 0 !== n || t in e) || function(e, t, n) {
            "__proto__" == t && ye ? ye(e, t, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : e[t] = n
        }(e, t, n)
    }

    function _e(e, t, n) {
        return null == e ? e : function(e, t, n, i) {
            if (!E(e)) return e;
            for (var r = -1, a = (t = ae(t, e)).length, o = a - 1, s = e; null != s && ++r < a;) {
                var d = oe(t[r]),
                    u = n;
                if (r != o) {
                    var c = s[d];
                    void 0 === (u = i ? i(c, d, s) : void 0) && (u = E(c) ? c : ge(t[r + 1]) ? [] : {})
                }
                we(s, d, u), s = s[d]
            }
            return e
        }(e, t, n)
    }

    function Ie(e, t) {
        return t.length < 2 ? e : se(e, function(e, t, n) {
            var i = -1,
                r = e.length;
            t < 0 && (t = -t > r ? 0 : r + t), (n = n > r ? r : n) < 0 && (n += r), r = t > n ? 0 : n - t >>> 0, t >>>= 0;
            for (var a = Array(r); ++i < r;) a[i] = e[i + t];
            return a
        }(t, 0, -1))
    }

    function Oe(e, t) {
        return null == e || function(e, t) {
            return null == (e = Ie(e, t = ae(t, e))) || delete e[oe((n = t, i = null == n ? 0 : n.length, i ? n[i - 1] : void 0))];
            var n, i
        }(e, t)
    }
    var De = new(function() {
        function e() {
            n(this, e), this.init()
        }
        return r(e, [{
            key: "init",
            value: function() {
                this.w = window, this.create()
            }
        }, {
            key: "create",
            value: function() {
                this.w.localStorage.getItem("adagio") || this.w.localStorage.setItem("adagio", JSON.stringify({}))
            }
        }, {
            key: "insureSchema",
            value: function() {
                var e = this.w.localStorage.getItem("adagio");
                try {
                    !(!e || !JSON.parse(e)) || (this.w.localStorage.removeItem("adagio"), this.create())
                } catch (e) {
                    this.w.localStorage.removeItem("adagio"), this.create()
                }
            }
        }, {
            key: "get",
            value: function(e) {
                this.insureSchema();
                var t = JSON.parse(this.w.localStorage.getItem("adagio"));
                return e ? be(t, e) ? function(e, t, n) {
                    var i = null == e ? void 0 : se(e, t);
                    return void 0 === i ? n : i
                }(t, e) : null : t
            }
        }, {
            key: "store",
            value: function(e, t) {
                this.insureSchema();
                var n = JSON.parse(this.w.localStorage.getItem("adagio"));
                _e(n, e, t), this.w.localStorage.setItem("adagio", JSON.stringify(n))
            }
        }, {
            key: "unset",
            value: function(e) {
                var t = JSON.parse(this.w.localStorage.getItem("adagio"));
                Oe(t, e), this.w.localStorage.setItem("adagio", JSON.stringify(t))
            }
        }]), e
    }());
    Object.freeze(De);
    var Ee = function() {
            try {
                if (window.top.location.href) return !0
            } catch (e) {
                return !1
            }
        },
        Ue = function() {
            return Ee() ? window.top : window.self
        },
        Se = !1,
        Ce = function(e) {
            !0 === e && (Se = !0)
        },
        je = {
            default: "\n      background: #222;\n      color: #bada55;\n      border-radius: 4px 0 0 4px;\n      padding: 3px 4px 2px;\n      font-weight: normal;\n  ",
            reset: "\n      background: transparent;\n      color: inherit;\n      border-radius: 0;\n      padding: 0;\n      font-weight: normal;\n  ",
            debug: "\n      background: palegreen;\n      color: darkgreen;\n      border-radius: 0 4px 4px 0;\n      padding: 3px 4px 2px;\n      margin-right: 10px;\n      font-weight: normal;\n  ",
            info: "\n      background: lightsteelblue;\n      color: midnightblue;\n      border-radius: 0 4px 4px 0;\n      padding: 3px 4px 2px;\n      margin-right: 10px;\n      font-weight: normal;\n  ",
            trace: "\n      background: plum;\n      color: indigo;\n      border-radius: 0 4px 4px 0;\n      padding: 3px 4px 2px;\n      margin-right: 10px;\n      font-weight: normal;\n  ",
            warn: "\n      background: lightcoral;\n      color: moccasin;\n      border-radius: 0 4px 4px 0;\n      padding: 3px 4px 2px;\n      margin-right: 10px;\n      font-weight: normal;\n  ",
            error: "\n      background: firebrick;\n      color: gainsboro;\n      border-radius: 0 4px 4px 0;\n      padding: 3px 4px 2px;\n      margin-right: 10px;\n      font-weight: normal;\n  ",
            table: "\n    background: lightsteelblue;\n    color: midnightblue;\n    border-radius: 0 4px 4px 0;\n    padding: 3px 4px 2px;\n    margin-right: 10px;\n    font-weight: normal;\n  "
        },
        xe = function(e) {
            e = e || "debug";
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            var r;
            "string" == typeof n[0] ? n[1] ? (console.log("%cADG%c".concat(e.toUpperCase(), " %c%s"), je.default, je[e], je.reset, n[0]), n.shift(), n.map((function(e) {
                console.log(e)
            }))) : console.log("%cADG%c".concat(e.toUpperCase(), " %c%s"), je.default, je[e], je.reset, n[0]) : (r = console).log.apply(r, ["%cADG%c".concat(e.toUpperCase()), je.default, je[e]].concat(n))
        },
        Ge = function() {
            var e = Ue();
            return new RegExp("[?&]ADAGIO_DEBUG").test(e.location.search) || Se
        },
        Ne = function() {
            var e = Ue();
            return e && e.localStorage && e.localStorage.getItem("ADAGIO_DEV_DEBUG")
        },
        ke = function() {
            if (Ge() || Ne()) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                xe.apply(void 0, ["info"].concat(t))
            }
        },
        Te = function() {
            if (Ge() || Ne()) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                xe.apply(void 0, ["warn"].concat(t))
            }
        },
        Be = function() {
            if (Ge() || Ne()) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                xe.apply(void 0, ["error"].concat(t))
            }
        },
        Pe = function() {
            if (Ge() || Ne()) {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                "string" == typeof n[0] ? (console.group("%cADG%cINFO %c%s", je.default, je.table, je.reset, n[0]), n.shift()) : console.group("%cADG%cINFO", je.default, je.table), (e = console).table.apply(e, n), console.groupEnd()
            }
        },
        Re = function() {
            if (Ne()) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                xe.apply(void 0, ["debug"].concat(t))
            }
        },
        ze = new(function() {
            function e() {
                n(this, e), this.storage = De, this.maxTimeSession = 18e5, this._ensureSchema()
            }
            return r(e, [{
                key: "_ensureSchema",
                value: function() {
                    var e = this.storage.get("navigation"),
                        t = this.storage.get("navigation.session");
                    if (t) {
                        if (t.sampling) try {
                            var n = t.sampling.avw,
                                i = t.sampling.rates.avw;
                            t.rnd = !0 === n ? i + .01 : i - .01, t.vwSmplg = i, t.vwSmplgNxt = e && e.nextSamplingRates && e.nextSamplingRates.avw ? e.nextSamplingRates.avw : i, t._firstPageviewId = t.sampling.firstPageviewId, t._bidsSmplg = .1, t._currentPagetype = t.currentPagetype, t._previousPagetype = t.previousPagetype, t._pages = t.pages, delete t.sampling, delete t.currentPagetype, delete t.previousPagetype, delete t.pages
                        } catch (e) {}
                        this.storage.store("session", t), this.storage.unset("navigation.session"), delete e.session, delete e.nextSamplingRates
                    }
                    e && (this.storage.store("_navigation", e), this.storage.unset("navigation"))
                }
            }, {
                key: "startOrUpdate",
                value: function(e) {
                    var t = Date.now(),
                        n = this.storage.get("_navigation"),
                        i = this.storage.get("session");
                    try {
                        !n || !i || "number" != typeof i.lastActivityTime || "number" != typeof i.vwSmplg || t - i.lastActivityTime > this.maxTimeSession ? this.start(e) : this.update(e)
                    } catch (e) {
                        Re(e)
                    }
                }
            }, {
                key: "start",
                value: function(e) {
                    var t = Date.now(),
                        n = this.storage.get("_navigation") || {},
                        i = parseInt(n.totalPages, 10) || 0,
                        r = parseInt(n.totalSessions, 10) || 0;
                    this.storage.store("_navigation.totalPages", i + 1), this.storage.store("_navigation.totalSessions", r + 1);
                    var a = this.storage.get("session.vwSmplgNxt") || .1,
                        o = e && e.rnd ? e.rnd : Math.random();
                    this.storage.store("session", {
                        _firstPageviewId: null,
                        _pages: 1,
                        _currentPagetype: null,
                        _previousPagetype: null,
                        _bidsSmplg: .1,
                        lastActivityTime: t,
                        rnd: o,
                        vwSmplg: a,
                        vwSmplgNxt: a
                    })
                }
            }, {
                key: "update",
                value: function() {
                    var e = Date.now(),
                        t = this.storage.get("_navigation"),
                        n = this.storage.get("session");
                    if (!t || !n) throw new Error("Key missing in localStorage");
                    var i = parseInt(n._pages, 10) || 0,
                        r = parseInt(t.totalPages, 10) || 0;
                    this.storage.store("session.lastActivityTime", e), this.storage.store("session._pages", i + 1), this.storage.store("_navigation.totalPages", r + 1)
                }
            }, {
                key: "setVwSamplingNext",
                value: function(e) {
                    this.storage.store("session.vwSmplgNxt", e)
                }
            }, {
                key: "setSampling",
                value: function(e, t) {
                    var n = this.storage.get("session._firstPageviewId");
                    if (!this.storage.get("session.rnd")) throw new Error("The key rnd has not been found");
                    n ? n === e && t && "number" == typeof t.vwSmplgNxt && t.vwSmplgNxt >= 0 && (this.storage.store("session.vwSmplg", t.vwSmplgNxt), this.storage.store("session.vwSmplgNxt", t.vwSmplgNxt)) : this.storage.store("session._firstPageviewId", e)
                }
            }]), e
        }());
    Object.freeze(ze);
    var Ve = function e(t) {
            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        },
        Me = function() {
            var e, t;
            switch (e = Ue().navigator.userAgent, /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(e) ? 4 : 2) {
                case 2:
                    t = "desktop";
                    break;
                case 4:
                    t = "mobile";
                    break;
                case 5:
                    t = "tablet"
            }
            return t
        },
        Le = function() {
            var e = Ue(),
                t = e.performance || e.msPerformance || e.webkitPerformance || e.mozPerformance;
            return t && t.timing && t.timing.navigationStart > 0 ? t.timing.navigationStart : null
        },
        qe = function() {
            var e = Ue(),
                t = null;
            return e.performance && e.performance.timing && e.performance.timing.domContentLoadedEventStart && (t = e.performance.timing.domContentLoadedEventStart), t
        };
    var Fe = new RegExp(/(^adagio$|[_-]adagio$|^adagio[_-])/i),
        He = new RegExp(/^[a-zA-Z0-9-_]{1,50}$/),
        We = new RegExp(/^[0-9]{4}$/),
        $e = function(e) {
            return Fe.test(e)
        },
        Qe = function() {
            var e = Ue(),
                t = e && e.ADAGIO && e.ADAGIO.versions && e.ADAGIO.versions.adagioBidderAdapter ? e.ADAGIO.versions.adagioBidderAdapter : null;
            if (!t) throw new Error("Missing ADAGIO.version.adagioBidderAdapter");
            return parseFloat(t.slice(0, 3))
        },
        Je = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2.8;
            try {
                return !!(Qe() < e)
            } catch (e) {
                return Re("Missing ADAGIO.version.adagioBidderAdapter, continue as isLegacyAdagioBidder=false"), !1
            }
        },
        Ke = function(e) {
            var t = e || {},
                n = t.organizationId,
                i = t.site;
            return !(!We.test(n) || !He.test(i))
        },
        Ze = function(e, t) {
            var n = !1;
            if (e && e.length) {
                var i = e.filter((function(e) {
                    return e.code === t
                }));
                i.length && (n = i[0])
            }
            return n
        },
        Ye = function() {
            var e = Ue();
            if (!e) return [];
            e.ADAGIO = e.ADAGIO || {};
            var t = void 0;
            if (e.ADAGIO.pbjsAdUnits || e.ADAGIO.rtbpbjsAdUnits || e.ADAGIO.pbjsWtgAdUnits) {
                t = e.ADAGIO.pbjsAdUnits || e.ADAGIO.rtbpbjsAdUnits || e.ADAGIO.pbjsWtgAdUnits;
                var n = Me();
                t.forEach((function(e) {
                    try {
                        e.bids[0].params.environment || (e.bids[0].params.environment = n)
                    } catch (e) {
                        Te(e)
                    }
                }))
            }
            return t
        },
        Xe = De,
        et = function() {
            return Xe.get("session._currentPagetype")
        },
        tt = function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (-1 === ["avw", "bids"].indexOf(e)) return !0;
            switch (e) {
                case "bids":
                    t = "number" == typeof n ? n : Xe.get("session._bidsSmplg"), 0 === Xe.get("session.vwSmplg") && (t = 0);
                    break;
                case "avw":
                    t = Xe.get("session.vwSmplg")
            }
            var i = Xe.get("session.rnd");
            return "number" != typeof t || "number" != typeof i || i < t
        },
        nt = function() {
            return Xe.get("session._pages") || 1
        },
        it = function() {
            var e = parseInt(Xe.get("_navigation.totalSessions"), 10) || 1;
            return (parseInt(Xe.get("_navigation.totalPages"), 10) || 1) / e
        },
        rt = function() {
            return Xe.get("session._previousPagetype")
        },
        at = function() {
            return Xe.get("_navigation.totalSessions") || 1
        },
        ot = function() {
            var e = "";
            if (Ee()) {
                var t = window.top.document.referrer;
                if (t) e = function(e) {
                    var t = document.createElement("a"),
                        n = "",
                        i = {};
                    t.href = e;
                    for (var r = 0, a = (n = t.search.slice(1).split("&")).length; r < a; r++) {
                        var o = n[r].split("=");
                        i[o[0]] = o[1]
                    }
                    return {
                        protocol: t.protocol,
                        hostname: t.hostname,
                        port: t.port,
                        pathname: t.pathname,
                        search: t.search,
                        searchParsed: i,
                        hash: t.hash,
                        host: t.host
                    }
                }(t).hostname
            }
            return e
        },
        st = function(e) {
            var t = et();
            null != t && Xe.store("session._previousPagetype", t), Xe.store("session._currentPagetype", e)
        },
        dt = {
            avw: "//c.4dex.io/avw.gif",
            vrate: "//c.4dex.io/vrate",
            bids: "//c.4dex.io/bids.gif"
        },
        ut = [],
        ct = !!navigator.sendBeacon,
        lt = Ue();
    lt.ADAGIO = lt.ADAGIO || {};
    var ft = function(e) {
            var t, n = function(e) {
                var t = e.collector,
                    n = e.data,
                    i = e.eventType,
                    r = [];
                if (!dt[t]) return !1;
                if (!(n = "function" == typeof n ? n() : {})) return !1;
                if (n.org_id && -1 !== ut.indexOf(n.org_id)) return Re("Beacon cannot be sent due to blacklist"), !1;
                if (n.adu_code) {
                    var a = n.adu_code;
                    delete n.adu_code, r.push(encodeURIComponent("adu_code") + "=" + encodeURIComponent(a))
                }
                var o = i || n.evt || "";
                for (var s in delete n.evt, r.push(encodeURIComponent("evt") + "=" + encodeURIComponent(o)), n) r.push(encodeURIComponent(s) + "=" + encodeURIComponent(n[s]));
                return lt.ADAGIO.versions && (lt.ADAGIO.versions.adagiojs && r.push("adgjsv=".concat(encodeURIComponent(lt.ADAGIO.versions.adagiojs))), lt.ADAGIO.versions.ssp && r.push("sspv=".concat(encodeURIComponent(lt.ADAGIO.versions.ssp)))), lt.location.protocol + dt[t] + "?" + r.join("&")
            }({
                collector: e.collector,
                data: e.data,
                eventType: e.eventType
            });
            if (!n) return !1;
            try {
                (t = new XMLHttpRequest).onerror = function() {
                    ct && navigator.sendBeacon(n)
                }, t.open("post", n), t.send()
            } catch (e) {}
        },
        vt = function(e) {
            var t = e.event,
                n = e.collector,
                i = e.data,
                r = t.element || lt;
            t._rule ? "unload" === t._rule ? lt.addEventListener("unload", (function() {
                return ft({
                    collector: n,
                    data: i,
                    eventType: "unload"
                })
            })) : "visibilitychange" === t._rule && lt.document.addEventListener("visibilitychange", (function() {
                "hidden" === lt.document.visibilityState && ft({
                    collector: n,
                    data: i,
                    eventType: "visibilitychange"
                })
            })) : r.addEventListener(t.name, (function() {
                if ("function" == typeof t.beforeSend) {
                    var e = t.beforeSend({
                        collector: n,
                        data: i
                    });
                    e && ft(Object.assign({}, e, {
                        eventType: t.name
                    }))
                } else ft({
                    collector: n,
                    data: i,
                    eventType: t.name
                })
            }), !1)
        },
        pt = function(e) {
            var t = e.collector,
                n = e.data,
                i = e.events;
            if (i.length) {
                var r = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var s, d = i[Symbol.iterator](); !(r = (s = d.next()).done); r = !0) {
                        var u = s.value;
                        vt({
                            event: u,
                            collector: t,
                            data: n
                        })
                    }
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        r || null == d.return || d.return()
                    } finally {
                        if (a) throw o
                    }
                }
            } else ft({
                collector: t,
                data: n
            })
        };

    function ht() {
        var e = Ue(),
            t = e.navigator.userAgent,
            n = t.toLowerCase();
        return /Edge\/\d./i.test(t) ? "edge" : n.indexOf("chrome") > 0 ? "chrome" : n.indexOf("firefox") > 0 ? "firefox" : n.indexOf("safari") > 0 ? "safari" : n.indexOf("opera") > 0 ? "opera" : n.indexOf("msie") > 0 || e.MSStream ? "ie" : "unknow"
    }
    var gt = new(function() {
        function e() {
            n(this, e), this._featuresByAdUnitElementId = {}, this.init()
        }
        return r(e, [{
            key: "init",
            value: function() {}
        }, {
            key: "storeLegacy",
            value: function(e, n, i) {
                if ("object" !== t(n) || this.get(e) && !i) return !1;
                this._featuresByAdUnitElementId[e] = n
            }
        }, {
            key: "store",
            value: function(e, n) {
                var i = e.adUnitCode,
                    r = e.features,
                    a = e.params;
                if (a.adUnitElementId) {
                    if ("object" !== t(r) || this.get(a.adUnitElementId) && !n) return Te("Features cannot be set. data.features is not an object. adUnitCode: ".concat(i)), !1;
                    var o = "";
                    Ee() && (o = Ue().location.href || "");
                    var d, u, c = s({}, r, {}, {
                        device: (u = Ue().navigator.userAgent, /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(u) ? 5 : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(u) ? 4 : 2).toString(),
                        os: (d = Ue().navigator.userAgent.toLowerCase(), d.indexOf("linux") > 0 ? "linux" : d.indexOf("mac") > 0 ? "mac" : d.indexOf("win") > 0 ? "windows" : ""),
                        browser: ht(),
                        url: o
                    });
                    this._featuresByAdUnitElementId[a.adUnitElementId] = {
                        version: "_",
                        features: c
                    }
                } else Te("Features cannot be set. Missing adUnitElementId. adUnitCode: ".concat(i))
            }
        }, {
            key: "get",
            value: function(e) {
                return e ? this._featuresByAdUnitElementId[e] : this._featuresByAdUnitElementId
            }
        }]), e
    }());
    Object.freeze(gt);
    var mt = function e(t, n) {
            if (!n || !n.length) return !1;
            var i = t.getBoundingClientRect(),
                r = Math.round(i.width) + "x" + Math.round(i.height);
            if (-1 !== n.indexOf(r)) return t;
            var a = t.querySelectorAll("*:not(script)");
            if (a.length) {
                for (var o = 0, s = a.length; o < s; o++)
                    if (t = e(a[o], n)) return t;
                return !1
            }
            return !1
        },
        bt = function(e) {
            var t = new Date(e.detail.ts).toString(),
                n = "";
            e.detail.data.event && e.detail.data.event.slot ? n = e.detail.data.event.slot.getSlotElementId() : e.detail.data.args && e.detail.data.args.slot && (n = e.detail.data.args.slot.getSlotElementId()), n === this._adUnitElementId && (Re("GPT impressionViewable: ".concat(n, " at ").concat(t)), this.viewability.adserver.visible = !0, this.viewability.adserver.viewableSince = e.detail.ts, this.viewability.adserver.exposureDelta = this.viewability.adagio.exposureDuration - 1e3, this.sendBeacon({
                becauseOf: "vsbl_actvw"
            }))
        },
        yt = function(e) {
            var t = e.detail.data.args,
                n = t.inViewPercentage,
                i = t.slot;
            return !!i && (i.getSlotElementId() === this._adUnitElementId && void(this.viewability.adserver.inViewport = n >= 50))
        },
        At = function() {
            "hidden" === this.w.document.visibilityState && (this.hasMaxExposureDuration() || this.sendBeacon({
                becauseOf: "visibilitychange"
            }))
        },
        wt = function() {
            var e = Date.now();
            "hidden" === this.w.document.visibilityState ? this.pageVisibility.ts = e : (this.pageVisibility.computedDuration += e - this.pageVisibility.ts, this.pageVisibility.ts = !1)
        },
        _t = function(e, t, n) {
            var i = e.adUnitCode,
                r = e.adUnitElementId,
                a = e.refreshConfig,
                o = e.currentPrintNumber,
                s = e.timeout,
                d = Ue();
            if (d.googletag) {
                var u = d.googletag.pubads().getSlots().filter((function(e) {
                        return e.getSlotElementId() === r
                    }))[0],
                    c = d[a.pbjs];
                u ? (u.setTargeting("adg_refresh", "true"), o && u.setTargeting("adg_pn", parseInt(o.toString(), 10) + 1), t({
                    adUnitCode: i,
                    adUnitElementId: r,
                    refreshConfig: a,
                    currentPrintNumber: o
                }).then((function(e) {
                    !1 !== e && n({
                        pbjs: c,
                        adUnitCode: i,
                        timeout: s,
                        bidsBackHandler: function() {
                            d.googletag.pubads().refresh([u])
                        }
                    })
                }))) : Re("No slot detected for adunitCode " + i + " with elementId : " + r)
            } else Te("Can not find the property: googletag in window")
        },
        It = function(e, t) {
            var n = e.adUnitCode,
                i = e.adUnitElementId,
                r = e.refreshConfig,
                a = Ue();
            if (a.sas) {
                var o = a.ADAGIO.adUnits;
                a[r.pbjs], !o || o[n] ? t({
                    adUnitCode: n,
                    adUnitElementId: i,
                    refreshConfig: r
                }).then((function(e) {
                    if (!1 !== e) try {
                        a.sas.refresh(n)
                    } catch (e) {
                        Be(e)
                    }
                })) : Re("No slot detected for adunitCode " + n + " with elementId : " + i)
            } else Te("Can not find the property: sas in window")
        },
        Ot = function(e) {
            if (!e.refreshConfig || !e.refreshConfig.beforeRefresh || "function" != typeof e.refreshConfig.beforeRefresh) return new Promise((function(e) {
                return e(!0)
            }));
            var t = e.refreshConfig.beforeRefresh(e);
            return Re("Refresh: handleBeforeRefresh", t), new Promise((function(e, n) {
                if (!(t instanceof Promise)) return e(t);
                t.then((function(t) {
                    return e(t)
                })).catch((function() {
                    return n(!1)
                }))
            }))
        },
        Dt = function(e) {
            var t = e.adUnitCode,
                n = e.bidsBackHandler,
                i = e.pbjs,
                r = e.timeout;
            i.que.push((function() {
                i.requestBids({
                    timeout: r,
                    adUnitCodes: [t],
                    bidsBackHandler: n
                })
            }))
        },
        Et = ["1012"],
        Ut = {
            page_dimensions: "pg_dims",
            viewport_dimensions: "vp_dims",
            dom_loading: "dom_l",
            layout: "lay",
            adunit_position: "adu_pos",
            user_timestamp: "u_ts",
            device: "dvc",
            browser: "brwsr",
            url: "url",
            print_number: "pn"
        },
        St = {
            organizationId: "org_id",
            site: "site",
            placement: "plcmt",
            adUnitCode: "adu_code",
            pagetype: "pgtyp",
            category: "cat",
            subcategory: "subcat",
            environment: "env"
        },
        Ct = {
            adsrv: "adsrv",
            adsrv_advrt_id: "adsrv_advrt_id",
            adsrv_cmpgn_id: "adsrv_cmpgn_id",
            adsrv_crea_id: "adsrv_crea_id",
            adsrv_empty: "adsrv_empty",
            adsrv_lnitem_id: "adsrv_lnitem_id",
            adsrv_size: "adsrv_size"
        },
        jt = function() {
            var e = Ue();
            if (e) return e.ONFOCUS = e.ONFOCUS || {}, e.ONFOCUS.donotrefresh || e.onfocus_donotrefresh || e.onfocus_donotrefresh_slots || e.ONFOCUS.donotrefresh_slots
        },
        xt = function() {
            function e(t) {
                var i = t.ts,
                    r = t.adUnitElementId,
                    a = t.auctionId,
                    o = t.params,
                    s = t.options;
                return n(this, e), Re("New measurer for adUnitElementId ".concat(r), {
                    params: o,
                    options: s
                }), this.w = Ue(), this.params = o || {}, this.options = s || {}, this.auctionId = a, this.initTime = null, this.startTime = null, this.ts = i, this.navigationStart = Le(), this.internalId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), this.resetCounter = 0, this.resetTime = null, this.beaconVersion = 0, this.intervalId = !1, this.avwBeaconTimeoutId = !1, this.refreshStarted = !1, this.refreshConfig = this.options.refresh || !1, this.doNotRefresh = !1, this.useIntersectionObserver = !0, this.gptImpressionViewable = bt.bind(this), this.gptSlotVisibilityChanged = yt.bind(this), this.pageVisibility = {
                    ts: !1,
                    computedDuration: 0
                }, this._adUnitElementId = this.adUnitElementId = r, this.element = {}, this.prebidAdUnitConfig = this.options.adUnitConfig || [], this.throttleBeacons = "boolean" != typeof this.options.throttleBeacons || this.options.throttleBeacons, this.beaconsQueue = [], this.beaconsPending = !1, this.limitFirstBeaconsTimer = !1, Ce(this.options.debug || !1), window.self.document.getElementById(this.adUnitElementId) ? this.init() ? (this.unbindBeaconEvents(), this.bindBeaconEvents(), void this.start()) : (Te("Unable to init measurer"), !1) : (Te("Element to measure is missing in window: ".concat(this.adUnitElementId)), !1)
            }
            return r(e, [{
                key: "init",
                value: function() {
                    this.initTime = Date.now(), this.measurable = !0;
                    var e, t, n = (e = this._adUnitElementId, (t = gt.get(e)) ? Pe("Freezed features(v".concat(t.version, ") for ").concat(e, " from adagioBidAdapter "), t.features) : Re("No features found for ".concat(e)), t);
                    if (this.features = n && n.features ? n.features : {}, this.featuresVersion = n && n.version ? n.version : "1", this.resetViewability(), !window.IntersectionObserver) return this.useIntersectionObserver = !1, this.measurable = !1, Te("no intersection observer"), void this.stop("noIObserver");
                    if ("function" != typeof window.CustomEvent) return this.stop("noCustomEvent"), !1;
                    this.bindAdserverEvents();
                    var i = this.detectBestDomElement();
                    this.setElement(i), this.startBackgroundDetection(), ke("Init measurer for adUnitElementId ".concat(this.adUnitElementId, " with this detected element:"), {
                        el: this.element.el,
                        refresh: this.refreshConfig
                    }), this.w.ADAGIO = this.w.ADAGIO || {}, this.w.ADAGIO.doNotRefresh = jt() || this.w.ADAGIO.doNotRefresh || [];
                    var r = this.params.adUnitCode || !1;
                    return this.refreshConfig || (Re("No refreshConfig for this Measurer: ".concat(r)), this.doNotRefresh = !0), this.refreshConfig && !this.refreshConfig.refreshable && (Re("This adUnitCode is not refreshable: ".concat(r)), this.doNotRefresh = !0), r || (Re("No adUnitCode for this Measurer: ".concat(r)), this.doNotRefresh = !0), Array.isArray(this.w.ADAGIO.doNotRefresh) && -1 !== this.w.ADAGIO.doNotRefresh.indexOf("*") && (Re("No Refresh because doNotRefresh is activate on the whole page"), this.doNotRefresh = !0), Array.isArray(this.w.ADAGIO.doNotRefresh) && r && -1 !== this.w.ADAGIO.doNotRefresh.indexOf(r) && (Re("This adUnitCode is in the ADAGIO.doNotRefresh: ".concat(r)), this.doNotRefresh = !0), !0
                }
            }, {
                key: "resetViewability",
                value: function(e) {
                    var t = {
                        adagio: {
                            visible: !1,
                            continuousCounter: 0,
                            viewableSince: null,
                            exposureDuration: 0,
                            lastUpdateTs: !1,
                            elementMouseOver: !1,
                            exposureDurationOnClick: null,
                            lastAttentionBeaconSent: 0,
                            inViewport: !1
                        },
                        adserver: {
                            visible: !1,
                            viewableSince: null,
                            continuousCounter: 0,
                            exposureDuration: 0,
                            lastUpdateTs: !1,
                            lastAttentionBeaconSent: 0,
                            exposureDelta: 0,
                            inViewport: !1
                        }
                    };
                    e && this.viewability && Object.prototype.hasOwnProperty.call(this.viewability, e) ? this.viewability[e] = Object.assign({}, t[e]) : this.viewability = Object.assign({}, t)
                }
            }, {
                key: "detectBestDomElement",
                value: function() {
                    var e = window.self.document.getElementById(this.adUnitElementId),
                        t = function(e) {
                            return mt(e, d)
                        }(e),
                        n = !!t,
                        i = function(e, t) {
                            return mt(e, t)
                        }(e, this.prebidAdUnitConfig.sizes && this.prebidAdUnitConfig.sizes.length ? this.prebidAdUnitConfig.sizes.map((function(e) {
                            return e[0] + "x" + e[1]
                        })) : []),
                        r = !!i,
                        a = i || t || e;
                    return {
                        el: a,
                        elId: a.id,
                        size: this.formatElementSize(a),
                        reasonNotMeasurable: t ? u.NONE : u.NOT_IAB_COMPLIANT,
                        hasIABDimensions: n,
                        hasPbjsDimensions: r
                    }
                }
            }, {
                key: "setElement",
                value: function(e) {
                    this.element = e
                }
            }, {
                key: "hasMinPageExposureDuration",
                value: function() {
                    return !!(qe() && Date.now() - qe() >= 3e4)
                }
            }, {
                key: "hasMaxExposureDuration",
                value: function() {
                    return "dfp" === this.options.adsrv ? this.viewability.adagio.exposureDuration > 9e4 || this.viewability.adserver.exposureDuration > 9e4 || this.viewability.adagio.exposureDuration > 6e4 && this.viewability.adserver.exposureDuration > 6e4 : this.viewability.adagio.exposureDuration > 6e4
                }
            }, {
                key: "formatElementSize",
                value: function(e) {
                    var t = e.getBoundingClientRect();
                    return [Math.round(t.width), Math.round(t.height)].join("x")
                }
            }, {
                key: "startBackgroundDetection",
                value: function() {
                    if (this.element.el && !this.element.hasIABDimensions && !this.element.hasPbjsDimensions && Date.now() <= this.initTime + 4e3) {
                        var e = this;
                        return setTimeout((function() {
                            var t = e.detectBestDomElement();
                            (t.hasIABDimensions || t.hasPbjsDimensions) && e.resetWithElement(t), e.startBackgroundDetection()
                        }), 50), !1
                    }
                }
            }, {
                key: "start",
                value: function() {
                    if (this.startTime = Date.now(), "function" != typeof window.CustomEvent) return this.stop("abort"), !1;
                    this.w.document.dispatchEvent(new CustomEvent("adagio.measure.afterStart", {
                        detail: {
                            measure: this
                        }
                    })), this.sendBeacon({
                        becauseOf: "start"
                    }), this.bindMeasureEvents()
                }
            }, {
                key: "stop",
                value: function(e) {
                    e = e || "stop", this.unbindAdserverEvents(), this.unbindMeasureEvents(), this.unbindBeaconEvents(), this.resetThrottledBeacon(), this.sendBeacon({
                        becauseOf: e
                    }), this.sendBeacon = function() {}
                }
            }, {
                key: "resetWithElement",
                value: function(e) {
                    Re("Reset measurer for ".concat(this.adUnitElementId, " with this element"), e), this.resetCounter++, this.resetTime = Date.now(), this.setElement(e), this.resetViewability(), this.sendBeacon({
                        becauseOf: "reset"
                    })
                }
            }, {
                key: "startObserver",
                value: function() {
                    var e = this,
                        t = this;
                    this.observer || (this.observer = new IntersectionObserver((function(n) {
                        n.forEach((function(n) {
                            n.isIntersecting ? t.viewability.adagio.inViewport = !0 : (t.viewability.adagio.inViewport = !1, document.dispatchEvent(new CustomEvent("adagio.measure.onUpdateExposureDuration", {
                                detail: {
                                    elementId: e._adUnitElementId,
                                    measurer: "adagio",
                                    viewability: t.viewability.adagio
                                }
                            })))
                        }))
                    }), {
                        threshold: [.49, .5, .51]
                    }), this.observer.observe(window.document.getElementById(this._adUnitElementId)))
                }
            }, {
                key: "updateExposureDurationOnClick",
                value: function(e) {
                    var t = this,
                        n = this.viewability.adagio;
                    e && (e.addEventListener("mouseover", (function() {
                        return n.elementMouseOver = !0
                    })), e.addEventListener("mouseout", (function() {
                        return n.elementMouseOver = !1
                    })), window.addEventListener("blur", (function() {
                        if (document.activeElement instanceof HTMLIFrameElement) {
                            var e = t.element.el.getBoundingClientRect(),
                                i = document.activeElement.getBoundingClientRect(),
                                r = !(e.right < i.left || e.left > i.right || e.bottom < i.top || e.top > i.bottom),
                                a = t.element.el;
                            a instanceof HTMLIFrameElement || (a = a.querySelector("iframe")), (document.activeElement === a || n.elementMouseOver || r) && null == n.exposureDurationOnClick && (n.exposureDurationOnClick = n.exposureDuration, ke("Click event detected on  ".concat(t.element.elId, " :"), t))
                        }
                    })))
                }
            }, {
                key: "bindAdserverEvents",
                value: function() {
                    this.unbindAdserverEvents(), this.w.document.addEventListener("adagio.gpt.impressionViewable", this.gptImpressionViewable, !1), this.w.document.addEventListener("adagio.gpt.slotVisibilityChanged", this.gptSlotVisibilityChanged, !1)
                }
            }, {
                key: "unbindAdserverEvents",
                value: function() {
                    this.w.document.removeEventListener("adagio.gpt.impressionViewable", this.gptImpressionViewable), this.w.document.removeEventListener("adagio.gpt.slotVisibilityChanged", this.gptSlotVisibilityChanged)
                }
            }, {
                key: "bindMeasureEvents",
                value: function() {
                    var e = this;
                    this.updateExposureDurationOnClick(this.element.el), this.startObserver(), this.intervalId = setInterval((function() {
                        document.hidden ? Object.keys(e.viewability).forEach((function(t) {
                            "adagio" !== t && "dfp" !== e.options.adsrv || e.resetPreViewability(t)
                        })) : ("dfp" === e.options.adsrv && e.updateActiveViewViewability(), e.updateViewabilityWithIntersectionObserver())
                    }), 50)
                }
            }, {
                key: "unbindMeasureEvents",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }, {
                key: "bindBeaconEvents",
                value: function() {
                    this.w.document.addEventListener("visibilitychange", At.bind(this), !1), this.w.document.addEventListener("visibilitychange", wt.bind(this), !1)
                }
            }, {
                key: "unbindBeaconEvents",
                value: function() {
                    this.w.document.removeEventListener("visibilitychange", At), this.w.document.removeEventListener("visibilitychange", wt)
                }
            }, {
                key: "setBeaconTimeout",
                value: function(e) {
                    var t = this;
                    e = e || "adagio";
                    var n = this.params.organizationId,
                        i = this.viewability[e];
                    this.avwBeaconTimeoutId || i.visible && i.exposureDuration - i.lastAttentionBeaconSent > 1e3 && !this.hasMaxExposureDuration() && (this.avwBeaconTimeoutId = setTimeout((function() {
                        -1 === Et.indexOf(n) && t.sendBeacon({
                            becauseOf: "exp_chg"
                        }), t.avwBeaconTimeoutId = !1, i.lastAttentionBeaconSent = i.exposureDuration
                    }), 5e3))
                }
            }, {
                key: "updateViewability",
                value: function() {
                    var e = Date.now(),
                        t = this.viewability.adagio;
                    t.visible || t.continuousCounter >= 1e3 && (t.visible = !0, t.viewableSince = e, Re("Adagio impressionViewable: ".concat(this._adUnitElementId)), this.sendBeacon({
                        becauseOf: "vsbl"
                    })), this.updateExposureDuration(e, "adagio"), t.lastUpdateTs = e, this.setBeaconTimeout("adagio"), this.w.document.dispatchEvent(new CustomEvent("adagio.measure.onUpdateViewability", {
                        detail: {
                            measure: this
                        }
                    })), !1 === this.refreshStarted && !1 === this.doNotRefresh && this.refresh()
                }
            }, {
                key: "updateViewabilityWithIntersectionObserver",
                value: function() {
                    var e = Date.now(),
                        t = this.viewability.adagio;
                    if (!t.visible && t.continuousCounter >= 1e3) {
                        t.visible = !0, t.viewableSince = e;
                        var n = new Date(t.viewableSince).toString();
                        Re("Adagio impressionViewable with IObsrv: ".concat(this.element.elId, " at ").concat(n)), this.sendBeacon({
                            becauseOf: "vsbl"
                        })
                    }
                    t.inViewport ? (this.updateExposureDuration(e, "adagio"), t.lastUpdateTs = e, this.setBeaconTimeout("adagio"), !1 === this.refreshStarted && !1 === this.doNotRefresh && this.refresh()) : this.resetPreViewability("adagio")
                }
            }, {
                key: "updateActiveViewViewability",
                value: function() {
                    var e = Date.now(),
                        t = this.viewability.adserver;
                    t.inViewport ? (this.updateExposureDuration(e, "adserver"), t.lastUpdateTs = e, !1 === this.refreshStarted && !1 === this.doNotRefresh && this.refresh("adserver"), this.setBeaconTimeout("adserver")) : this.resetPreViewability("adserver")
                }
            }, {
                key: "refresh",
                value: function(e) {
                    e = e || "adagio";
                    var t = this.params.adUnitCode || !1;
                    if (t) {
                        var n = !(!this.w.ADAGIO.adUnits || !this.w.ADAGIO.adUnits[t]) && this.w.ADAGIO.adUnits[t].printNumber,
                            i = this.viewability[e];
                        if (!n) return Re("No PrintNumber to start refresh for this adUnit: ".concat(t)), void(this.doNotRefresh = !0);
                        if (n && n >= this.refreshConfig.maxRefresh) return Re("Stoping refresh because currentPrintNumber is >= of ".concat(this.refreshConfig.maxRefresh, " maxRefresh for this adUnit: ").concat(t)), void(this.doNotRefresh = !0);
                        if ((1 !== n || this.hasMinPageExposureDuration()) && i.continuousCounter >= this.refreshConfig.minTimeToRefresh && i.continuousCounter >= this.refreshConfig.timeToRefresh && n <= this.refreshConfig.maxRefresh) {
                            var r = (jt() || []).concat(this.w.ADAGIO.doNotRefresh || []);
                            if (Array.isArray(r) && -1 !== r.indexOf("*")) return Re("No Refresh because doNotRefresh is activate on the whole page"), this.doNotRefresh = !0, !1;
                            if (Array.isArray(r) && t && -1 !== r.indexOf(t)) return Re("This adUnitCode is in the ADAGIO.doNotRefresh: ".concat(t)), this.doNotRefresh = !0, !1;
                            this.refreshStarted = !0, Re("Trying to refresh adUnitCode: " + t + " at " + i.continuousCounter + " with conf: ", this.refreshConfig),
                                function(e) {
                                    var t = e.adUnitCode,
                                        n = e.adUnitElementId,
                                        i = e.refreshConfig,
                                        r = e.currentPrintNumber,
                                        a = new CustomEvent("adagio.refresh.onBeforeRefresh", {
                                            detail: {
                                                adUnitCode: t,
                                                adUnitElementId: n,
                                                refreshConfig: i,
                                                currentPrintNumber: r
                                            },
                                            cancelable: !0
                                        }),
                                        o = !Ue().document.dispatchEvent(a);
                                    Re("beforeRefreshCanceled", o), o || ("gpt" === i.adServer ? _t(e, Ot, Dt) : "sas" === i.adServer ? It(e, Ot) : ke("No refresher has been defined"))
                                }({
                                    adUnitCode: t,
                                    adUnitElementId: this.adUnitElementId,
                                    refreshConfig: this.refreshConfig,
                                    currentPrintNumber: n
                                })
                        }
                    } else Re("No adUnitCode to start refresh for this adUnit: ".concat(t))
                }
            }, {
                key: "updateExposureDuration",
                value: function(e, t) {
                    t = t || "adagio";
                    var n = this.viewability[t];
                    if (!n.lastUpdateTs) return 0;
                    var i = e - n.lastUpdateTs;
                    n.exposureDuration += i, n.continuousCounter += i
                }
            }, {
                key: "resetPreViewability",
                value: function(e) {
                    e = e || "adagio";
                    var t = this.viewability[e];
                    t.lastUpdateTs = !1, t.visible || (t.continuousCounter = 0), this.w.document.dispatchEvent(new CustomEvent("adagio.measure.onResetPreViewability", {
                        detail: {
                            measure: this
                        }
                    }))
                }
            }, {
                key: "sendThrottledBeacon",
                value: function() {
                    var e = this.beaconsQueue.pop();
                    this.resetThrottledBeacon(), e && (e.throttled = !0, this.sendBeacon(e))
                }
            }, {
                key: "resetThrottledBeacon",
                value: function() {
                    this.beaconsQueue = [], this.beaconsPending = !1
                }
            }, {
                key: "sendBeacon",
                value: function(e) {
                    var t = this,
                        n = this,
                        i = (e = e || {}).events || [];
                    return tt("avw") ? this.throttleBeacons && -1 !== ["start", "reset", "vsbl", "vsbl_actvw"].indexOf(e.becauseOf) && !e.throttled ? this.beaconsPending ? void this.beaconsQueue.push(e) : (this.beaconsPending = !0, this.beaconsQueue.push(e), void setTimeout(this.sendThrottledBeacon.bind(this), 3e3)) : void pt({
                        collector: "avw",
                        data: function() {
                            e = e || {};
                            var i = Date.now(),
                                r = qe(),
                                a = 0;
                            try {
                                a = (new Date).getTimezoneOffset()
                            } catch (e) {}
                            var o = [];
                            n.prebidAdUnitConfig && Array.isArray(n.prebidAdUnitConfig.sizes) && n.prebidAdUnitConfig.sizes.map((function(e) {
                                return o.push(e.join("x"))
                            }));
                            var s = {
                                    pv_id: t.w.ADAGIO && t.w.ADAGIO.pageviewId ? t.w.ADAGIO.pageviewId : "",
                                    adu_el_id: n.adUnitElementId,
                                    v: n.beaconVersion++,
                                    tz_off: a,
                                    evt: e.becauseOf || "",
                                    js_late: t.w.ADAGIO && !0 === t.w.ADAGIO.late ? 1 : 0,
                                    js_ts: t.w._ADAGIO && t.w._ADAGIO.adagioStartTime ? t.w._ADAGIO.adagioStartTime : "",
                                    size: n.element.size,
                                    pbjs_sizes: o.join(","),
                                    is_pbjs_size: !0 === n.element.hasPbjsDimensions ? 1 : 0,
                                    is_iab_size: !0 === n.element.hasIABDimensions ? 1 : 0,
                                    msrbl: !0 === n.measurable ? 1 : 0,
                                    adu_exp: n.viewability.adagio.exposureDuration,
                                    pg_durat: r ? i - r : 0,
                                    pg_paused: n.pageVisibility.computedDuration,
                                    pg_exp: r ? i - r - n.pageVisibility.computedDuration : 0,
                                    vsbl: !0 === n.viewability.adagio.visible ? 1 : 0,
                                    adsrv_vsbl: !0 === n.viewability.adserver.visible ? 1 : 0,
                                    adsrv_att_delta: n.viewability.adserver.exposureDelta,
                                    clk_time: null != n.viewability.adagio.exposureDurationOnClick ? n.viewability.adagio.exposureDurationOnClick : "",
                                    reset: n.resetCounter,
                                    adsrv_adu_exp: n.viewability.adserver.exposureDuration,
                                    navs_ts: null != n.navigationStart ? n.navigationStart : "",
                                    trgr_ts: null != n.ts ? parseInt(n.ts, 10) : "",
                                    init_ts: n.initTime,
                                    start_ts: n.startTime,
                                    reset_ts: null != n.resetTime ? n.resetTime : "",
                                    vsbl_ts: null != n.viewability.adagio.viewableSince ? n.viewability.adagio.viewableSince : "",
                                    adsrv_vsbl_ts: null != n.viewability.adserver.viewableSince ? n.viewability.adserver.viewableSince : "",
                                    auct_id: n.auctionId ? n.auctionId : ""
                                },
                                d = {};
                            for (var c in n.params) {
                                if (Object.prototype.hasOwnProperty.call(St, c)) d[St[c]] = n.params[c] ? n.params[c] : ""
                            }
                            var l = {
                                featv: n.featuresVersion
                            };
                            for (var f in n.features) {
                                if (Object.prototype.hasOwnProperty.call(Ut, f)) l[Ut[f]] = n.features[f];
                                else l[f] = n.features[f]
                            }
                            l.pn || (l.pn = 1);
                            var v = {
                                    sess_lngth: nt(),
                                    avg_sess_lngth: it(),
                                    sess_cnt: at(),
                                    rfr_fqdn: ot(),
                                    prv_pgtyp: rt()
                                },
                                p = {};
                            for (var h in n.options) {
                                if (Object.prototype.hasOwnProperty.call(Ct, h)) p[Ct[h]] = n.options[h] ? n.options[h] : ""
                            }
                            return Object.assign(s, l, v, d, p), n.element.reasonNotMeasurable !== u.NONE && Te("Not measurable element with id ".concat(s.adu_el_id, " (adUnit code ").concat(s.adu_code, ")"), Object.keys(u)[n.element.reasonNotMeasurable]), s
                        },
                        events: i
                    }) : (Re("avw.gif ".concat(e.becauseOf, " sampled")), !1)
                }
            }]), e
        }(),
        Gt = {
            AUCTION_INIT: "auctionInit",
            AUCTION_END: "auctionEnd",
            BID_ADJUSTMENT: "bidAdjustment",
            BID_TIMEOUT: "bidTimeout",
            BID_REQUESTED: "bidRequested",
            BID_RESPONSE: "bidResponse",
            BID_WON: "bidWon",
            BIDDER_DONE: "bidderDone",
            SET_TARGETING: "setTargeting",
            NO_BID: "noBid",
            REQUEST_BIDS: "requestBids",
            ADD_AD_UNITS: "addAdUnits",
            AD_RENDER_FAILED: "adRenderFailed"
        },
        Nt = {
            code: "",
            bidder_ttr: "",
            no_bid: "",
            responses: [],
            timeout: ""
        },
        kt = {
            cpm: "",
            cpm_adjst_rate: "",
            net_rev: "",
            cur: "",
            cur_rate: "",
            ttr: "",
            sts: "",
            w: "",
            h: "",
            deal: "",
            crea_id: "",
            mt: "",
            won: ""
        },
        Tt = function() {
            function e(t) {
                var i = t.adUnit;
                n(this, e);
                var r = i.code,
                    a = i.auctionId;
                if (!r) throw new Error("`code` property must be provided");
                if (!a) throw new Error("`auctionId` property must be provided");
                this.code = r, this.auctionId = a, this.amts = "", this.asizes = "", this.referrer = "", this._dirty = !0, this._mediaTypes = {}, this.bidders = [], this.events = []
            }
            return r(e, [{
                key: "isDirty",
                value: function() {
                    return !!this._dirty
                }
            }, {
                key: "setDirty",
                value: function(e) {
                    this._dirty = !!e
                }
            }, {
                key: "get",
                value: function(e) {
                    return this[e]
                }
            }, {
                key: "set",
                value: function(e, t) {
                    this[e] = t, this.setDirty(!0)
                }
            }, {
                key: "getBidders",
                value: function() {
                    return this.bidders || []
                }
            }, {
                key: "getBidder",
                value: function(e) {
                    return this.getBidders().find((function(t) {
                        return t.code === e
                    }))
                }
            }, {
                key: "setBidder",
                value: function(e, t) {
                    var n = this.getBidder(e);
                    if (n || (n = s({}, Nt, {
                            code: e,
                            responses: []
                        }), this.bidders.push(n)), t || (t = {}), t.adId)
                        if (Array.isArray(n.responses) || (n.responses = []), n.responses.length) {
                            var i = !!t.adId && t.adId,
                                r = n.responses.find((function(e) {
                                    return e.adId === i
                                }));
                            r ? this.assignProperties(r, t) : n.responses.push(this.assignProperties(s({}, kt), t))
                        } else n.responses.push(this.assignProperties(s({}, kt), t));
                    else this.assignProperties(n, t);
                    this.setDirty(!0)
                }
            }, {
                key: "assignProperties",
                value: function(e, t) {
                    return Object.keys(t).filter((function(e) {
                        return "code" !== e
                    })).forEach((function(n) {
                        e[n] = t[n]
                    })), e
                }
            }]), e
        }(),
        Bt = Ue();
    Bt.ADAGIO = Bt.ADAGIO || {};
    var Pt = Le();

    function Rt(e, t, n) {
        return e.map((function(e) {
            var i = e[t];
            return "function" == typeof n && (i = n(i)), "string" == typeof i && (i = i.replace(/,/, "_comma_")), i
        })).join(",")
    }
    var zt, Vt = function() {
            function e(t) {
                var i, r, a, o, s, d = t.auctionId;
                n(this, e), this.auctionId = d, this.partid = (i = new Date, r = i.getUTCDate(), a = i.getUTCMonth() + 1, o = i.getUTCFullYear(), s = i.getUTCHours(), r < 10 && (r = "0" + r), a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), o + a + r + s), this.auctionStart = -1, this.auctionEnd = -1, this.adUnits = [], this.beaconVersion = 0, this.pageviewId = Bt.ADAGIO.pageviewId || ""
            }
            return r(e, [{
                key: "getOrAddAdunit",
                value: function(e, t) {
                    if (!e) return !1;
                    var n = this.adUnits.find((function(t) {
                        return t.code === e
                    }));
                    if (void 0 === n) {
                        try {
                            n = new Tt({
                                adUnit: {
                                    code: e,
                                    auctionId: this.auctionId
                                }
                            }), t && "function" == typeof t && t(n), this.adUnits.push(n)
                        } catch (e) {
                            Te(e)
                        }
                        Bt.ADAGIO.adUnits = Bt.ADAGIO.adUnits || {};
                        var i = {
                            auctionId: this.auctionId,
                            pageviewId: this.pageviewId
                        };
                        Bt.ADAGIO.adUnits[e] && (i.printNumber = Bt.ADAGIO.adUnits[e].printNumber), Bt.ADAGIO.adUnits[e] = i
                    }
                    return n
                }
            }, {
                key: "setAuctionStart",
                value: function(e) {
                    -1 === this.auctionStart && (this.auctionStart = e)
                }
            }, {
                key: "setAuctionEnd",
                value: function(e) {
                    -1 === this.auctionEnd && (this.auctionEnd = e)
                }
            }, {
                key: "sendAfterPrebidAuction",
                value: function(e) {
                    var t = this;
                    e && -1 !== t.auctionStart && setTimeout((function() {
                        t.send("pbtimeout3")
                    }), e + 3e3)
                }
            }, {
                key: "send",
                value: function(e, t) {
                    if (!this.adUnits || !this.adUnits.length) return !1;
                    var n = this.adUnits.map((function(e) {
                            return e.get("org_id")
                        })),
                        i = !1;
                    if (["3598-www-larousse-fr", "80541-coinweek-com", "15771-dafont-com"].includes(this.adUnits[0].site) && (i = 1), -1 === n.indexOf("1101") && !tt("bids", i)) return Re("bids.gif sampled"), !1;
                    var r = this,
                        a = Date.now();
                    this.beaconVersion++, this.adUnits.forEach((function(n) {
                        if ((!t || t === n.get("code")) && (n.getBidders().find((function(e) {
                                return $e(e.code)
                            })) && n.isDirty())) {
                            if (!Ke({
                                    organizationId: n.get("org_id"),
                                    site: n.get("site")
                                })) return Te('bids: invalid "site" or "organizationId" in Prebid.js params'), !1;
                            pt({
                                collector: "bids",
                                data: function() {
                                    var t = {
                                            ts: a,
                                            evt: e,
                                            pv_id: r.pageviewId,
                                            adu_code: n.get("code"),
                                            amts: n.get("amts"),
                                            asizes: n.get("asizes"),
                                            url: n.get("referrer"),
                                            auct_id: n.get("auctionId"),
                                            auct_start: r.auctionStart,
                                            auct_end: r.auctionEnd,
                                            v: r.beaconVersion,
                                            js_late: Bt.ADAGIO && !0 === Bt.ADAGIO.late ? 1 : 0,
                                            js_ts: Bt._ADAGIO && Bt._ADAGIO.adagioStartTime ? Bt._ADAGIO.adagioStartTime : "",
                                            navs_ts: null != Pt ? Pt : "",
                                            partid: r.partid
                                        },
                                        i = n.getBidders().map((function(e) {
                                            var t;
                                            return t = e.responses.length && e.responses.length > 1 ? e.responses.reduce((function(e, t) {
                                                return 1 === t.won ? t : 1 === e.won ? e : e.cpm === t.cpm ? e.ttr > t.ttr ? t : e : e.cpm < t.cpm ? t : e
                                            })) : e.responses[0], e = s({}, e, {}, t)
                                        }));
                                    return t.bidders = n.getBidders().map((function(e) {
                                        return e.code
                                    })).join(","), t.cpm = Rt(i, "cpm"), t.cpm_adjst_rate = Rt(i, "cpm_adjst_rate"), t.net_rev = Rt(i, "net_rev"), t.cur = Rt(i, "cur"), t.cur_rate = Rt(i, "cur_rate"), t.ttr = Rt(i, "ttr"), t.bttr = Rt(n.getBidders(), "bidder_ttr"), t.sts = Rt(i, "sts"), t.w = Rt(i, "w"), t.h = Rt(i, "h"), t.deal = Rt(i, "deal"), t.timeout = Rt(n.getBidders(), "timeout"), t.won = Rt(i, "won"), t.no_bid = Rt(n.getBidders(), "no_bid"), t.crea_id = Rt(i, "crea_id"), t.mt = Rt(i, "mt"), t.cat = n.get("cat") || "", t.dvc = n.get("dvc") || "", t.env = n.get("env") || "", t.org_id = n.get("org_id") || "", t.pgtyp = n.get("pgtyp") || "", t.plcmt = n.get("plcmt") || "", t.site = n.get("site") || "", t.subcat = n.get("subcat") || "", t.os = n.get("os") || "", t.brwsr = n.get("brwsr") || "", t.u_ts = n.get("u_ts") || "", t
                                },
                                events: []
                            }), n.setDirty(!1)
                        }
                    }))
                }
            }]), e
        }(),
        Mt = function() {
            "hidden" === Ue().visibilityState && this.send("auct_visibilitychange")
        },
        Lt = {
            organizationId: "org_id",
            site: "site",
            placement: "plcmt",
            adUnitCode: "adu_code",
            pagetype: "pgtyp",
            category: "cat",
            subcategory: "subcat",
            environment: "env"
        },
        qt = {
            banner: "ban",
            outstream: "vidout",
            instream: "vidin",
            adpod: "vidadpod",
            native: "nat"
        },
        Ft = Ue(),
        Ht = Ft.ADAGIO.auct ? Ft.ADAGIO.auct.get() : {},
        Wt = function() {
            function e() {
                if (n(this, e), zt) return this.getInstance();
                zt = this
            }
            return r(e, [{
                key: "getInstance",
                value: function() {
                    return this
                }
            }, {
                key: "add",
                value: function(e) {
                    return Ht[e] = new Vt({
                        auctionId: e
                    }), this.get(e)
                }
            }, {
                key: "get",
                value: function(e) {
                    return e ? Ht[e] : Ht
                }
            }]), e
        }(),
        $t = function(e) {
            var t = new Wt,
                n = t.get(e);
            return n || (t.add(e), n = t.get(e)), n
        },
        Qt = function(e, t, n) {
            return "video" === t ? e._mediaTypes && e._mediaTypes.video && e._mediaTypes.video.context ? n[e._mediaTypes.video.context] : "" : n[t]
        },
        Jt = function(e, t) {
            var n = e.bidderCode,
                i = e.bids,
                r = void 0 === i ? [] : i,
                a = e.refererInfo;
            r.forEach((function(e) {
                var i = e.adUnitCode,
                    r = e.mediaTypes,
                    o = e.params,
                    s = void 0 === o ? {} : o,
                    d = e.features,
                    u = void 0 === d ? {} : d,
                    c = t.getOrAddAdunit(i, (function(e) {
                        e.set("referrer", a.referer), e.set("_mediaTypes", r), e.set("amts", function(e, t) {
                            var n = [];
                            return Object.keys(e).forEach((function(i) {
                                "video" === i ? n.push(t[e[i].context] || "") : n.push(t[i])
                            })), n.sort().join("|")
                        }(r, qt)), e.set("asizes", function(e, t) {
                            var n = [];
                            return Object.keys(e).forEach((function(i) {
                                "video" === i ? n.push({
                                    mt: t[e[i].context] || "",
                                    sizes: Yt(e[i].playerSize || [])
                                }) : n.push({
                                    mt: t[i],
                                    sizes: Yt(e[i].sizes || [])
                                })
                            })), n.sort((function(e, t) {
                                var n = 0;
                                return e.mt > t.mt ? n = 1 : e.mt < t.mt && (n = -1), n
                            })).map((function(e) {
                                return e.sizes
                            })).join("|")
                        }(r, qt))
                    }));
                if (c.setBidder(n), $e(n)) {
                    var l = [];
                    for (var f in s) Object.prototype.hasOwnProperty.call(Lt, f) && l.push({
                        name: Lt[f],
                        value: s[f]
                    });
                    var v = gt.get(s.adUnitElementId) || {
                        features: {}
                    };
                    v.features || (v.features = {}), l.push({
                        name: "dvc",
                        value: u.device || v.features.device || ""
                    }), l.push({
                        name: "os",
                        value: u.os || v.features.os || ""
                    }), l.push({
                        name: "brwsr",
                        value: u.browser || v.features.browser || ""
                    }), l.push({
                        name: "u_ts",
                        value: u.user_timestamp || ""
                    }), l.forEach((function(e) {
                        c.set(e.name, e.value)
                    }))
                }
            }))
        };

    function Kt(e) {
        var t = e.auctionId;
        ! function(e, t) {
            var n = e.adId,
                i = e.adUnitCode,
                r = e.bidderCode,
                a = e.cpm,
                o = void 0 === a ? "" : a,
                s = e.originalCpm,
                d = void 0 === s ? "" : s,
                u = e.netRevenue,
                c = void 0 === u ? "" : u,
                l = e.currency,
                f = void 0 === l ? "" : l,
                v = e.timeToRespond,
                p = void 0 === v ? "" : v,
                h = e.statusMessage,
                g = void 0 === h ? "" : h,
                m = e.width,
                b = void 0 === m ? "" : m,
                y = e.height,
                A = void 0 === y ? "" : y,
                w = e.dealId,
                _ = void 0 === w ? "" : w,
                I = e.creativeId,
                O = void 0 === I ? "" : I,
                D = e.mediaType,
                E = void 0 === D ? "banner" : D,
                U = t.getOrAddAdunit(i);
            if (Array.isArray(Ft.ADAGIO.pbjsAdUnits)) {
                var S = Ft.ADAGIO.pbjsAdUnits.find((function(e) {
                    return e.auctionId === U.auctionId && e.code === U.code
                }));
                S && (U.localPbjsRef = S.localPbjsRef)
            }
            var C = "",
                j = "";
            if (U.localPbjsRef && U.localPbjsRef.convertCurrency) {
                C = U.localPbjsRef.convertCurrency(1, "USD", f);
                var x = parseFloat((d * C).toFixed(4));
                j = 0 !== x ? o / x : ""
            }
            U.setBidder(r, {
                adId: n,
                cpm: o,
                cpm_adjst_rate: j,
                net_rev: c ? 1 : 0,
                cur: f,
                cur_rate: "" !== C ? 1 / C : "",
                ttr: p,
                sts: g,
                w: b,
                h: A,
                deal: _,
                crea_id: O,
                mt: Qt(U, E, qt)
            })
        }(e, $t(t))
    }
    var Zt = function(e, t, n) {
        switch (t) {
            case Gt.AUCTION_INIT:
                ! function(e) {
                    var t = Ue(),
                        n = e.auctionId,
                        i = e.bidderRequests,
                        r = e.timestamp,
                        a = $t(n);
                    a.setAuctionStart(r), t.document.removeEventListener("visibilitychange", Mt), t.document.addEventListener("visibilitychange", Mt.bind(a), !1), i.forEach((function(e) {
                        Jt(e, a)
                    })), a.send("init")
                }(n);
                break;
            case Gt.BID_RESPONSE:
                Kt(n);
                break;
            case Gt.BIDDER_DONE:
                ! function(e) {
                    var t = e.auctionId,
                        n = e.bids,
                        i = e.start,
                        r = (new Date).getTime(),
                        a = $t(t);
                    n.forEach((function(e) {
                        var t = a.getOrAddAdunit(e.adUnitCode),
                            n = e.bidder;
                        t && n && t.setBidder(n, {
                            bidder_ttr: r - i
                        })
                    }))
                }(n);
                break;
            case Gt.NO_BID:
                ! function(e) {
                    var t = e.auctionId,
                        n = e.adUnitCode,
                        i = e.bidder,
                        r = $t(t).getOrAddAdunit(n),
                        a = i;
                    r && a && r.setBidder(a, {
                        no_bid: 1
                    })
                }(n);
                break;
            case Gt.BID_TIMEOUT:
                ! function(e) {
                    e.forEach((function(e) {
                        var t = $t(e.auctionId).getOrAddAdunit(e.adUnitCode),
                            n = e.bidder;
                        t && n && t.setBidder(n, {
                            timeout: 1
                        })
                    }))
                }(n);
                break;
            case Gt.AUCTION_END:
                ! function(e) {
                    var t = e.auctionId,
                        n = e.auctionEnd,
                        i = e.bidderRequests,
                        r = $t(t);
                    r.setAuctionEnd(n), i.forEach((function(e) {
                        Jt(e, r)
                    })), r.send("auct_end"), setTimeout((function() {
                        r.send("auct_end_2000")
                    }), 2e3)
                }(n);
                break;
            case Gt.BID_WON:
                ! function(e) {
                    var t = e.auctionId,
                        n = e.adUnitCode,
                        i = e.bidderCode,
                        r = e.adId,
                        a = $t(t),
                        o = a.getOrAddAdunit(n);
                    o && i && (o.setBidder(i, {
                        adId: r,
                        won: 1
                    }), a.send("win", n))
                }(n)
        }
    };

    function Yt(e) {
        if (!e.length) return "";
        var t = "";
        return Array.isArray(e[0]) ? t = e.map((function(e) {
            return "".concat(e[0], "x").concat(e[1])
        })).join("|") : 2 === e.length && (t = "".concat(e[0], "x").concat(e[1])), t
    }
    var Xt = new(function() {
        function e() {
            n(this, e), this.measurers = {}, this.init()
        }
        return r(e, [{
            key: "init",
            value: function() {}
        }, {
            key: "store",
            value: function(e) {
                var t = e.params && e.params.adUnitCode ? e.params.adUnitCode : void 0;
                if (this.get(t)) return !1;
                this.measurers[t] = e
            }
        }, {
            key: "get",
            value: function(e) {
                return e ? this.measurers[e] : this.measurers
            }
        }, {
            key: "has",
            value: function(e, t) {
                var n = this.get(e);
                return n && t ? n.auctionId === t : !!n
            }
        }, {
            key: "getByAdUnitElementId",
            value: function(e) {
                var t = this,
                    n = Object.keys(this.measurers);
                return !(!n || !n.length) && n.filter((function(n) {
                    return t.measurers[n] && t.measurers[n]._adUnitElementId === e
                }))
            }
        }, {
            key: "remove",
            value: function(e) {
                return delete this.measurers[e]
            }
        }]), e
    }());
    Object.freeze(Xt);

    function en(e) {
        var t = this.__data__ = new Q(e);
        this.size = t.size
    }
    en.prototype.clear = function() {
        this.__data__ = new Q, this.size = 0
    }, en.prototype.delete = function(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }, en.prototype.get = function(e) {
        return this.__data__.get(e)
    }, en.prototype.has = function(e) {
        return this.__data__.has(e)
    }, en.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof Q) {
            var i = n.__data__;
            if (!J || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new Z(i)
        }
        return n.set(e, t), this.size = n.size, this
    };

    function tn(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new Z; ++t < n;) this.add(e[t])
    }

    function nn(e, t) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
    tn.prototype.add = tn.prototype.push = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    }, tn.prototype.has = function(e) {
        return this.__data__.has(e)
    };

    function rn(e, t, n, i, r, a) {
        var o = 1 & n,
            s = e.length,
            d = t.length;
        if (s != d && !(o && d > s)) return !1;
        var u = a.get(e);
        if (u && a.get(t)) return u == t;
        var c = -1,
            l = !0,
            f = 2 & n ? new tn : void 0;
        for (a.set(e, t), a.set(t, e); ++c < s;) {
            var v = e[c],
                p = t[c];
            if (i) var h = o ? i(p, v, c, t, e, a) : i(v, p, c, e, t, a);
            if (void 0 !== h) {
                if (h) continue;
                l = !1;
                break
            }
            if (f) {
                if (!nn(t, (function(e, t) {
                        if (o = t, !f.has(o) && (v === e || r(v, e, n, i, a))) return f.push(t);
                        var o
                    }))) {
                    l = !1;
                    break
                }
            } else if (v !== p && !r(v, p, n, i, a)) {
                l = !1;
                break
            }
        }
        return a.delete(e), a.delete(t), l
    }
    var an = v.Uint8Array;

    function on(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach((function(e, i) {
            n[++t] = [i, e]
        })), n
    }

    function sn(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach((function(e) {
            n[++t] = e
        })), n
    }
    var dn = p ? p.prototype : void 0,
        un = dn ? dn.valueOf : void 0;
    var cn = Object.prototype.propertyIsEnumerable,
        ln = Object.getOwnPropertySymbols,
        fn = ln ? function(e) {
            return null == e ? [] : (e = Object(e), function(e, t) {
                for (var n = -1, i = null == e ? 0 : e.length, r = 0, a = []; ++n < i;) {
                    var o = e[n];
                    t(o, n, e) && (a[r++] = o)
                }
                return a
            }(ln(e), (function(t) {
                return cn.call(e, t)
            })))
        } : function() {
            return []
        };
    var vn = "object" == typeof e && e && !e.nodeType && e,
        pn = vn && "object" == typeof module && module && !module.nodeType && module,
        hn = pn && pn.exports === vn ? v.Buffer : void 0,
        gn = (hn ? hn.isBuffer : void 0) || function() {
            return !1
        },
        mn = {};
    mn["[object Float32Array]"] = mn["[object Float64Array]"] = mn["[object Int8Array]"] = mn["[object Int16Array]"] = mn["[object Int32Array]"] = mn["[object Uint8Array]"] = mn["[object Uint8ClampedArray]"] = mn["[object Uint16Array]"] = mn["[object Uint32Array]"] = !0, mn["[object Arguments]"] = mn["[object Array]"] = mn["[object ArrayBuffer]"] = mn["[object Boolean]"] = mn["[object DataView]"] = mn["[object Date]"] = mn["[object Error]"] = mn["[object Function]"] = mn["[object Map]"] = mn["[object Number]"] = mn["[object Object]"] = mn["[object RegExp]"] = mn["[object Set]"] = mn["[object String]"] = mn["[object WeakMap]"] = !1;
    var bn, yn = "object" == typeof e && e && !e.nodeType && e,
        An = yn && "object" == typeof module && module && !module.nodeType && module,
        wn = An && An.exports === yn && l.process,
        _n = function() {
            try {
                var e = An && An.require && An.require("util").types;
                return e || wn && wn.binding && wn.binding("util")
            } catch (e) {}
        }(),
        In = _n && _n.isTypedArray,
        On = In ? (bn = In, function(e) {
            return bn(e)
        }) : function(e) {
            return _(e) && me(e.length) && !!mn[w(e)]
        },
        Dn = Object.prototype.hasOwnProperty;

    function En(e, t) {
        var n = c(e),
            i = !n && pe(e),
            r = !n && !i && gn(e),
            a = !n && !i && !r && On(e),
            o = n || i || r || a,
            s = o ? function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }(e.length, String) : [],
            d = s.length;
        for (var u in e) !t && !Dn.call(e, u) || o && ("length" == u || r && ("offset" == u || "parent" == u) || a && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ge(u, d)) || s.push(u);
        return s
    }
    var Un = Object.prototype;
    var Sn = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }(Object.keys, Object),
        Cn = Object.prototype.hasOwnProperty;

    function jn(e) {
        if (n = (t = e) && t.constructor, t !== ("function" == typeof n && n.prototype || Un)) return Sn(e);
        var t, n, i = [];
        for (var r in Object(e)) Cn.call(e, r) && "constructor" != r && i.push(r);
        return i
    }

    function xn(e) {
        return null != (t = e) && me(t.length) && !U(t) ? En(e) : jn(e);
        var t
    }

    function Gn(e) {
        return function(e, t, n) {
            var i = t(e);
            return c(e) ? i : function(e, t) {
                for (var n = -1, i = t.length, r = e.length; ++n < i;) e[r + n] = t[n];
                return e
            }(i, n(e))
        }(e, xn, fn)
    }
    var Nn = Object.prototype.hasOwnProperty;
    var kn = V(v, "DataView"),
        Tn = V(v, "Promise"),
        Bn = V(v, "Set"),
        Pn = V(v, "WeakMap"),
        Rn = G(kn),
        zn = G(J),
        Vn = G(Tn),
        Mn = G(Bn),
        Ln = G(Pn),
        qn = w;
    (kn && "[object DataView]" != qn(new kn(new ArrayBuffer(1))) || J && "[object Map]" != qn(new J) || Tn && "[object Promise]" != qn(Tn.resolve()) || Bn && "[object Set]" != qn(new Bn) || Pn && "[object WeakMap]" != qn(new Pn)) && (qn = function(e) {
        var t = w(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            i = n ? G(n) : "";
        if (i) switch (i) {
            case Rn:
                return "[object DataView]";
            case zn:
                return "[object Map]";
            case Vn:
                return "[object Promise]";
            case Mn:
                return "[object Set]";
            case Ln:
                return "[object WeakMap]"
        }
        return t
    });
    var Fn = qn,
        Hn = Object.prototype.hasOwnProperty;

    function Wn(e, t, n, i, r, a) {
        var o = c(e),
            s = c(t),
            d = o ? "[object Array]" : Fn(e),
            u = s ? "[object Array]" : Fn(t),
            l = "[object Object]" == (d = "[object Arguments]" == d ? "[object Object]" : d),
            f = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u),
            v = d == u;
        if (v && gn(e)) {
            if (!gn(t)) return !1;
            o = !0, l = !1
        }
        if (v && !l) return a || (a = new en), o || On(e) ? rn(e, t, n, i, r, a) : function(e, t, n, i, r, a, o) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !a(new an(e), new an(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return H(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var s = on;
                case "[object Set]":
                    var d = 1 & i;
                    if (s || (s = sn), e.size != t.size && !d) return !1;
                    var u = o.get(e);
                    if (u) return u == t;
                    i |= 2, o.set(e, t);
                    var c = rn(s(e), s(t), i, r, a, o);
                    return o.delete(e), c;
                case "[object Symbol]":
                    if (un) return un.call(e) == un.call(t)
            }
            return !1
        }(e, t, d, n, i, r, a);
        if (!(1 & n)) {
            var p = l && Hn.call(e, "__wrapped__"),
                h = f && Hn.call(t, "__wrapped__");
            if (p || h) {
                var g = p ? e.value() : e,
                    m = h ? t.value() : t;
                return a || (a = new en), r(g, m, n, i, a)
            }
        }
        return !!v && (a || (a = new en), function(e, t, n, i, r, a) {
            var o = 1 & n,
                s = Gn(e),
                d = s.length;
            if (d != Gn(t).length && !o) return !1;
            for (var u = d; u--;) {
                var c = s[u];
                if (!(o ? c in t : Nn.call(t, c))) return !1
            }
            var l = a.get(e);
            if (l && a.get(t)) return l == t;
            var f = !0;
            a.set(e, t), a.set(t, e);
            for (var v = o; ++u < d;) {
                var p = e[c = s[u]],
                    h = t[c];
                if (i) var g = o ? i(h, p, c, t, e, a) : i(p, h, c, e, t, a);
                if (!(void 0 === g ? p === h || r(p, h, n, i, a) : g)) {
                    f = !1;
                    break
                }
                v || (v = "constructor" == c)
            }
            if (f && !v) {
                var m = e.constructor,
                    b = t.constructor;
                m != b && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (f = !1)
            }
            return a.delete(e), a.delete(t), f
        }(e, t, n, i, r, a))
    }

    function $n(e, t, n, i, r) {
        return e === t || (null == e || null == t || !_(e) && !_(t) ? e != e && t != t : Wn(e, t, n, i, $n, r))
    }

    function Qn() {
        return this instanceof Qn ? (this.datas = {}, this) : new Qn
    }
    Qn.prototype.get = function(e) {
        return this.datas[e]
    }, Qn.prototype.set = function(e) {
        e && (this.datas = Object.assign({}, this.datas, e))
    };
    var Jn = new Qn,
        Kn = function(e, t) {
            return !!Array.isArray(e) && (Array.isArray(t) || (t = t.split("x").map((function(e) {
                return parseInt(e, 10)
            }))), e.filter((function(e) {
                return $n(e.size, t)
            })))
        },
        Zn = function(e, t, n) {
            var i = Jn.get(e);
            if (!i) return !1;
            var r = function(e) {
                return {
                    vrate: e.vrate,
                    uplift: e.uplift
                }
            };
            if (!Array.isArray(i)) return i.vrate;
            if (t) {
                var a = Kn(i, t);
                if (a && a.length) return r(a[0].vrate)
            }
            return n ? i.map((function(e) {
                var t = e.size,
                    n = e.vrate;
                return {
                    size: t.join("x"),
                    vrate: n.vrate,
                    uplift: n.uplift
                }
            })) : r(i[0].vrate)
        },
        Yn = function(e, t, n) {
            var i = Jn.get(e);
            if (!i) return !1;
            if (!Array.isArray(i)) return i.timeInView;
            if (t) {
                var r = Kn(i, t);
                if (r && r.length) return r[0].timeInView
            }
            return n ? i.map((function(e) {
                var t = e.size,
                    n = e.timeInView;
                return {
                    size: t.join("x"),
                    timeInView: n.timeInView,
                    uplift: n.uplift
                }
            })) : i[0].timeInView
        },
        Xn = [];
    e.adagioStartTime = Date.now();
    var ei = !1,
        ti = Ue(),
        ni = ti._ADAGIO && ti._ADAGIO.queueHistory ? ti._ADAGIO.queueHistory : [],
        ii = function(e) {
            var t = new RegExp(/^(<iframe[a-z0-9\s-_'"=%;:]+src=["'](https?:\/\/[a-z0-9-.()#_?=&%/[\]]+)[a-z0-9\s-_'"=%;:]+><\/iframe>)(?![<])$/i),
                n = new RegExp(/^(<img[a-z0-9\s-_'"=%;:]+src=["'](https?:\/\/[a-z0-9-.()#_?=&%/[\]]+)[a-z0-9\s-_'"=%;:]+?\/>)(?![<])$/i),
                i = ti.document.getElementsByTagName("body")[0];
            ke("Start usersync");
            var r = 0;
            if (e && Array.isArray(e.user_syncs)) e.user_syncs.forEach((function(e) {
                if (!e.html || !t.test(e.html) && !n.test(e.html)) return Re("user_sync element is not valid to be added to the DOM."), !1;
                setTimeout((function() {
                    i.insertAdjacentHTML("beforeend", e.html)
                }), 1e3 * r), r++
            }));
            else if (e.user_sync && e.user_sync.html) {
                if (!t.test(e.user_sync.html) && !n.test(e.user_sync.html)) return Re("user_sync element is not valid to be added to the DOM."), !1;
                i.insertAdjacentHTML("beforeend", e.user_sync.html)
            }
        },
        ri = function(e) {
            try {
                e && "number" == typeof e.vwSmplgNxt && (ze.setSampling(ti.ADAGIO.pageviewId, {
                    vwSmplgNxt: e.vwSmplgNxt
                }), ze.setVwSamplingNext(e.vwSmplgNxt))
            } catch (e) {
                Re(e)
            }
        },
        ai = function(e, t) {
            var n = Ye(),
                i = e.options || {};
            if (e.adUnitCode && n) {
                var r = ti.ADAGIO.adUnits && ti.ADAGIO.adUnits[e.adUnitCode] && ti.ADAGIO.adUnits[e.adUnitCode].auctionId;
                if (!r) return Te("Cannot start measurer.", "".concat(e.adUnitCode, ": no auctionId config found in window.ADAGIO.adUnits")), !1;
                if (ti.ADAGIO.adUnits[e.adUnitCode].pageviewId !== ti.ADAGIO.pageviewId) return Te("Cannot start measurer.", "".concat(e.adUnitCode, ": non consistent pageviewId for window.ADAGIO.adUnits")), !1;
                if (Xt.has(e.adUnitCode, r)) return Te("Cannot start measurer.", "".concat(e.adUnitCode, ": a measurer is already registred for current auction ").concat(r)), Xt.get(e.adUnitCode).stop(), Xt.remove(e.adUnitCode), !1;
                var a = Xt.get(e.adUnitCode);
                if (a && a.auctionId !== r && (a.stop(), Xt.remove(e.adUnitCode)), !a && e.adUnitElementId) {
                    var o = Xt.getByAdUnitElementId(e.adUnitElementId);
                    o && o.map((function(e) {
                        var t = Xt.get(e);
                        t && (t.stop(), Xt.remove(e))
                    }))
                }
                var s = function(e, t) {
                    var n = Ze(e, t),
                        i = !1;
                    if (n) {
                        var r = n.bids.filter((function(e) {
                            return $e(e.bidder)
                        }));
                        r.length && (i = r[0])
                    }
                    return i
                }(n, e.adUnitCode);
                if (!s) return Te("Cannot start measurer.", "".concat(e.adUnitCode, ": adagio bidder has not been set (see prebid.js)")), !1;
                var d = function(e) {
                    if (!e || !e.params || !e.params.adUnitElementId) return !1;
                    var t = e.params;
                    return {
                        adUnitElementId: t.adUnitElementId,
                        category: t.category || "",
                        environment: t.environment || "",
                        organizationId: t.organizationId || "",
                        pagetype: t.pagetype || "",
                        placement: t.placement || "",
                        site: t.site || "",
                        size: t.size || "",
                        subcategory: t.subcategory || "",
                        postBid: t.postBid || !1
                    }
                }(s);
                if (!d) return Te("Cannot start measurer.", "".concat(e.adUnitCode, ": no params. Mainly due to lack of adUnitElementId in Adagio bidder params")), !1;
                if (d = Object.assign({}, d, {
                        adUnitCode: e.adUnitCode
                    }), !Ke(d)) return Te("Cannot start measurer.", "".concat(e.adUnitCode, ': invalid "site" or "organizationId" in Prebid.js params')), !1;
                var u = Ze(n, e.adUnitCode);
                d.organizationId && d.site && (i.refresh = Xn.find((function(t) {
                    return t.adUnitCode == e.adUnitCode
                }))), u && (i.adUnitConfig = u), t && (i._window = t);
                var c = d.adUnitElementId;
                new xt({
                    ts: e.ts,
                    adUnitElementId: c,
                    auctionId: r,
                    params: d,
                    options: i
                })
            } else Te("Cannot start measurer.", {
                msg: "no adUnitCode or adUnitsArray"
            })
        },
        oi = function(e, n) {
            var i = n.adsrv,
                r = n.action,
                a = n.eventName,
                o = n.afterOptions;
            if (e.action !== r || !e.data.eventName) return !1;
            if (e.data.eventName === a) {
                var s = e.data.args.elementId,
                    d = Ye();
                if (!d) return void Re("".concat(i, ": Could not find ADAGIO.pbjsAdUnits or pbjs.adUnits before starting a measurer for ").concat(s));
                var u = d.filter((function(e) {
                    return e.bids.filter((function(e) {
                        return $e(e.bidder) && e.params.adUnitElementId === s
                    }))[0]
                }));
                if (!u || !u.length) return void Re("".concat(i, ": Could not find adUnitCode from adUnitElementId ").concat(s));
                u = u.pop().code, Re("Start a measurer from ".concat(i, ".").concat(a, " event for adUnitCode ").concat(u, ". Delay from queued: ").concat(Date.now() - e.ts));
                var c = {
                    adsrv: i,
                    adsrv_crea_id: e.data.args.creativeId,
                    adsrv_empty: !0 === e.data.args.isEmpty ? "1" : "0",
                    adsrv_size: function(e) {
                        if (Array.isArray(e)) {
                            var n = ["string", "number"];
                            if (2 === e.length && (n.indexOf(t(e[0])) > 0 || n.indexOf(t(e[1])) > 0)) return e.join("x")
                        }
                        if ("string" == typeof e && new RegExp(/^\d{1,4}x\d{1,4}$/).test(e)) return e;
                        return ""
                    }(e.data.args.creativeSize)
                };
                "function" == typeof o && o(e, c), ai({
                    ts: e.ts,
                    adUnitCode: u,
                    adUnitElementId: s,
                    options: c
                })
            }
        },
        si = function(n) {
            if (ti._ADAGIO = ti._ADAGIO || {}, ti._ADAGIO.queueHistory = ti._ADAGIO.queueHistory || ni, ti._ADAGIO.queueHistory.push(n), ni.length > 500 && ni.shift(), "object" !== t(n) || !n.action) return !1;
            if ("ssp-data" === n.action || "set-predictions" === n.action) {
                ! function(e) {
                    e && (e.ssp_version || e.sspVersion) && (ti.ADAGIO.versions.ssp = e.ssp_version || e.sspVersion)
                }(n.data),
                function(e) {
                    if (!e.predictions) return !(!e.data || !e.data.predictions) && void Jn.set(e.data.predictions);
                    Jn.set(e.predictions)
                }(n), ri(n.data), ii(n.data),
                    function(e) {
                        if (!e || !e.refresh) return !1;
                        e.refresh.map((function(e) {
                            ti.ADAGIO.adUnits && ti.ADAGIO.adUnits[e.adUnitCode] && !ti.ADAGIO.adUnits[e.adUnitCode].printNumber && (ti.ADAGIO.adUnits[e.adUnitCode].printNumber = 1), Xn.push(e)
                        }))
                    }(n.data);
                var i = Ye()[0].bids.filter((function(e) {
                    return $e(e.bidder)
                }))[0];
                i && st(i.params.pagetype)
            } else if ("features" === n.action) n.data.adUnitCode ? gt.store(n.data, !0) : Object.keys(n.data).map((function(e) {
                gt.storeLegacy(e, n.data[e], !0)
            }));
            else if ("gpt-event" === n.action) ! function(e) {
                if ("gpt-event" !== e.action || !e.data.eventName) return !1;
                if (e.selfAdserverEvent || (ei = !0), !ei || !e.selfAdserverEvent) {
                    if ("slotRenderEnded" === e.data.eventName) {
                        var t = e.data.args,
                            n = t.advertiserId,
                            i = t.campaignId,
                            r = t.creativeId,
                            a = t.isEmpty,
                            o = t.lineItemId,
                            s = t.size,
                            d = t.slot,
                            u = d.getSlotElementId(),
                            c = Ye();
                        if (!c) return void Re("DFP: Could not find ADAGIO.pbjsAdUnits or pbjs.adUnits before starting a measurer for ".concat(u));
                        var l = c.filter((function(e) {
                            return e.bids.filter((function(e) {
                                return $e(e.bidder) && e.params.adUnitElementId === u
                            }))[0]
                        }));
                        if (l.length > 0) {
                            if (l[0].bids.length && l[0].bids[0].params && -1 !== [1013, "1013", 1026, "1026", 1090, "1090"].indexOf(l[0].bids[0].params.organizationId)) return void Re("DFP: by-pass due to organizationId exception");
                            l = l[0].code
                        } else {
                            if (!(ti.ADAGIO && ti.ADAGIO.pbjsAdUnits && ti.ADAGIO.pbjsAdUnits.length)) return void Re("DFP: Cannot start measurer", "Could not find adUnitCode from adUnitElementId: ".concat(u));
                            var f = d.getAdUnitPath(),
                                v = ti.ADAGIO.pbjsAdUnits.find((function(e) {
                                    return e.code === f || e.code === u
                                }));
                            if (!v) return void Re("DFP: Cannot start measurer", "Could not find adUnitCode from adUnitElementId: ".concat(u));
                            if (v.bids.length && v.bids[0].params && ("1013" === v.bids[0].params.organizationId || 1013 === v.bids[0].params.organizationId)) return void Re("DFP: by-pass due to adthk exception");
                            Re("DFP: auto-detect prebid adunit", "update ADAGIO.pbjsAdUnit array with adUnitElementId: ".concat(u)), v.bids[0].params.adUnitElementId = u, l = v.code
                        }
                        Re("Start a measurer from gpt.slotRenderEnded event for ".concat(u, ". Delay from queued: ").concat(Date.now() - e.ts)), ai({
                            ts: e.ts,
                            adUnitCode: l,
                            options: {
                                adsrv: "dfp",
                                adsrv_advrt_id: n,
                                adsrv_cmpgn_id: i,
                                adsrv_crea_id: r,
                                adsrv_empty: !0 === a ? "1" : "0",
                                adsrv_lnitem_id: o,
                                adsrv_size: s && "undefined" !== s.join ? s.join("x") : ""
                            }
                        }, e.data._window)
                    }
                    "function" == typeof window.CustomEvent && ti.document.dispatchEvent(new CustomEvent("adagio.gpt." + e.data.eventName, {
                        detail: e
                    }))
                }
            }(n);
            else if ("adthk-event" === n.action) oi(n, {
                adsrv: "adthk",
                action: "adthk-event",
                eventName: "renderEndedEvent",
                afterOptions: function(e, t) {
                    e.data && e.data.args.size && Array.isArray(e.data.args.size) && (t.adsrv_size = e.data.args.size.join("x"))
                }
            });
            else if ("adagio-hb-event" === n.action) oi(n, {
                adsrv: "hbagency",
                action: "adagio-hb-event",
                eventName: "renderEvent"
            });
            else if ("adagio-avs-render" === n.action) oi(n, {
                adsrv: "thm",
                action: "adagio-avs-render",
                eventName: "renderEvent"
            });
            else if ("adagio-my-adserver-events" === n.action) oi(n, {
                adsrv: "default",
                action: "adagio-my-adserver-events",
                eventName: "renderEvent"
            });
            else if ("splcznsci-event" === n.action) oi(n, {
                adsrv: "splcznsci",
                action: "splcznsci-event",
                eventName: "renderEvent"
            });
            else if ("adagio-hbPROJECT-event" === n.action) oi(n, {
                adsrv: "hbproject",
                action: "adagio-hbPROJECT-event",
                eventName: "renderEvent"
            });
            else if ("skyboard-event" === n.action) oi(n, {
                adsrv: "skyboard",
                action: "skyboard-event",
                eventName: "renderEvent"
            });
            else if ("sas-event" === n.action) ! function(e) {
                if ("sas-event" !== e.action || !e.data.eventName) return !1;
                if (e.selfAdserverEvent || (ei = !0), ei && e.selfAdserverEvent) return !1;
                if ("noad" === e.data.eventName) {
                    var t = e.data.args.formatId,
                        n = Ye();
                    if (!n) return void Re("SAS: Could not find ADAGIO.pbjsAdUnits or pbjs.adUnits before starting a measurer for ".concat(t));
                    n.filter((function(t) {
                        return t.code === e.data.args.tagId
                    })).length && (t = e.data.args.tagId), t = "number" == typeof t ? t.toString() : t, ti.ADAGIO.adUnits && ti.ADAGIO.adUnits[t] && (ti.ADAGIO.adUnits[t].sasNoad = !0)
                }
                if ("setHeaderBiddingWinner" === e.data.eventName) {
                    var i = e.data.args.formatId,
                        r = Ye();
                    if (!r) return void Re("SAS: Could not find ADAGIO.pbjsAdUnits or pbjs.adUnits before starting a measurer for ".concat(i));
                    if (r.filter((function(t) {
                            return t.code === e.data.args.tagId
                        })).length) i = e.data.args.tagId;
                    else {
                        var a = r.find((function(t) {
                            return !(!t.bids || !t.bids.find((function(t) {
                                return e.data.args.tagId === t.params.adUnitElementId
                            })))
                        }));
                        a && (i = a.code)
                    }
                    i = "number" == typeof i ? i.toString() : i;
                    var o = !1;
                    ti.ADAGIO.adUnits && ti.ADAGIO.adUnits[i] && ti.ADAGIO.adUnits[i].sasNoad && (o = !!ti.ADAGIO.adUnits[i].sasNoad, delete ti.ADAGIO.adUnits[i].sasNoad), Re("Start a measurer from SAS", "".concat(e.data.eventName, " event for ").concat(i, ". Delay from queued: ").concat(Date.now() - e.ts)), ai({
                        ts: e.ts,
                        adUnitCode: i,
                        options: {
                            adsrv: "sas",
                            adsrv_empty: o ? "1" : "0"
                        }
                    }, e.data._window)
                }
                "function" == typeof window.CustomEvent && ti.document.dispatchEvent(new CustomEvent("adagio.sas." + e.data.eventName, {
                    detail: e
                }))
            }(n);
            else if ("ast-event" === n.action) ! function(e) {
                if ("ast-event" !== e.action || !e.data.eventName) return !1;
                if (e.selfAdserverEvent || (ei = !0), !(ei && e.selfAdserverEvent || "adLoaded" !== e.data.eventName || "banner" !== e.data.args[0].adType)) {
                    var t = e.data.args[0],
                        n = t.targetId,
                        i = t.creativeId,
                        r = t.width,
                        a = t.height,
                        o = Ye();
                    if (!o) return void Re("AST: Could not find ADAGIO.pbjsAdUnits or pbjs.adUnits before starting a measurer for ".concat(n));
                    var s = o.filter((function(e) {
                        return e.bids.filter((function(e) {
                            return $e(e.bidder) && e.params.adUnitElementId === n
                        }))[0]
                    }));
                    if (!s.length) return void Re("AST: Cannot start measurer", "Could not find adUnitCode from adUnitElementId: ".concat(n));
                    s = s[0].code, Re("Start a measurer from ast.asLoaded event for ".concat(n, ". Delay from queued: ").concat(Date.now() - e.ts)), ai({
                        ts: e.ts,
                        adUnitCode: s,
                        adUnitElementId: n,
                        options: {
                            adsrv: "ast",
                            adsrv_crea_id: i,
                            adsrv_empty: 0,
                            adsrv_size: "".concat(r, "x").concat(a)
                        }
                    }, e.data._window)
                }
            }(n);
            else if ("pb-analytics-event" === n.action) Zt(0, n.data.eventName, n.data.args);
            else if ("reset" === n.action) ! function() {
                ke("Reset action called");
                var t = Xt.get();
                for (var n in t) {
                    var i = t[n];
                    i.stop(), Xt.remove(i.params.adUnitCode)
                }
                e.adagioStartTime = Date.now(), ti.ADAGIO.pageviewId = Ve()
            }();
            else if ("session" === n.action) {
                var r = n.data && n.data.session && n.data.session.rnd ? n.data.session.rnd : void 0;
                if (Je()) Re('the "session" queue action is available since adagioBidAdapter 2.8.0');
                else try {
                    ze.startOrUpdate({
                        rnd: r
                    }), ze.setSampling(ti.ADAGIO.pageviewId)
                } catch (e) {
                    Re(e)
                }
            } else Te('queue: Unknown action "'.concat(n.action, '" in payload ').concat(n))
        };
    return ti.document.addEventListener("adagio.measure.afterStart", (function(e) {
            Xt.store(e.detail.measure)
        })), ti.ADAGIO = ti.ADAGIO || {}, ti.ADAGIO.versions = ti.ADAGIO.versions || {}, ti.ADAGIO.versions.adagiojs = "1.15.0", ti.ADAGIO.pageviewId = ti.ADAGIO.pageviewId || Ve(), ti.ADAGIO.features = gt, ti.ADAGIO.auct = ti.ADAGIO.auct || new Wt, ti.ADAGIO.spl = ti.ADAGIO.spl || {}, ti.ADAGIO.spl.avw = ti.ADAGIO.spl.avw || !1, ti.ADAGIO.spl.bids = ti.ADAGIO.spl.bids || !1, ti.ADAGIO.getVratePrediction = ti.ADAGIO.getVratePrediction || Zn, ti.ADAGIO.getVratePredictionForTargeting = ti.ADAGIO.getVratePredictionForTargeting || function(e) {
            return (Zn(e, null, !0) || []).filter((function(e) {
                return e.vrate > 0
            })).map((function(e) {
                return "".concat(e.size, "_").concat(100 * e.vrate)
            }))
        }, ti.ADAGIO.getTimeInViewPrediction = ti.ADAGIO.getTimeInViewPrediction || Yn, ti.ADAGIO.queue = ti.ADAGIO.queue || [], ti.ADAGIO.processQueue = ti.ADAGIO.processQueue || function() {
            for (; ti.ADAGIO.queue.length;) si(ti.ADAGIO.queue.shift())
        }, ti.ADAGIO.windows = ti.ADAGIO.windows || [], ti.ADAGIO.queue.push = function(e) {
            try {
                si(e)
            } catch (t) {
                Be("process queue", e.action, t)
            }
        }, ei = !1,
        function() {
            var e = {
                GPT: {
                    IMPRESSION_VIEWABLE: "impressionViewable",
                    SLOT_ON_LOAD: "slotOnload",
                    SLOT_RENDER_ENDED: "slotRenderEnded",
                    SLOT_REQUESTED: "slotRequested",
                    SLOT_RESPONSE_RECEIVED: "slotResponseReceived",
                    SLOT_VISIBILITY_CHANGED: "slotVisibilityChanged"
                },
                SAS: {
                    CALL: "call",
                    CLEAN: "clean",
                    BEFORE_RENDER: "beforeRender",
                    CMP_ANSWERED: "CmpAnswered",
                    CMP_CALLED: "CmpCalled",
                    LOAD: "load",
                    NOAD: "noad",
                    RENDER: "render",
                    RESET: "reset",
                    AD: "ad",
                    SET_HEADER_BIDDING_WINNER: "setHeaderBiddingWinner"
                },
                AST: {
                    adRequested: "adRequested",
                    adAvailable: "adAvailable",
                    adBadRequest: "adBadRequest",
                    adLoaded: "adLoaded",
                    adNoBid: "adNoBid",
                    adRequestFailure: "adRequestFailure",
                    adError: "adError",
                    adCollapse: "adCollapse"
                }
            };
            if (!ei) {
                var t = window.self,
                    n = ti.ADAGIO.windows.find((function(e) {
                        return e.self === t
                    }));
                n || (n = {
                    self: t
                }, ti.ADAGIO.windows.push(n));
                try {
                    if (!0 === n.gpt) return;
                    t.googletag = t.googletag || {}, t.googletag.cmd = t.googletag.cmd || [], t.googletag.cmd.push((function() {
                        Object.keys(e.GPT).map((function(t) {
                            return e.GPT[t]
                        })).forEach((function(e) {
                            t.googletag.pubads().addEventListener(e, (function(n) {
                                ti.ADAGIO.queue.push({
                                    action: "gpt-event",
                                    data: {
                                        eventName: e,
                                        args: n,
                                        _window: t
                                    },
                                    ts: Date.now(),
                                    selfAdserverEvent: !0
                                })
                            }))
                        })), n.gpt = !0
                    }))
                } catch (e) {}
                try {
                    if (!0 === n.sas) return;
                    t.sas = t.sas || {}, t.sas.cmd = t.sas.cmd || [], t.sas.cmd.push((function() {
                        Object.keys(e.SAS).map((function(t) {
                            return e.SAS[t]
                        })).forEach((function(e) {
                            t.sas.events.on(e, (function(n) {
                                ti.ADAGIO.queue.push({
                                    action: "sas-event",
                                    data: {
                                        eventName: e,
                                        args: n,
                                        _window: t
                                    },
                                    ts: Date.now(),
                                    selfAdserverEvent: !0
                                })
                            }))
                        })), n.sas = !0
                    }))
                } catch (e) {}
                try {
                    if (!0 === n.ast) return;
                    t.apntag = t.apntag || {}, t.apntag.anq = t.apntag.anq || [], t.apntag.anq.push((function() {
                        Object.keys(e.AST).map((function(t) {
                            return e.AST[t]
                        })).forEach((function(e) {
                            t.apntag.onEvent(e, (function() {
                                ti.ADAGIO.queue.push({
                                    action: "ast-event",
                                    data: {
                                        eventName: e,
                                        args: arguments,
                                        _window: t
                                    },
                                    ts: Date.now(),
                                    selfAdserverEvent: !0
                                })
                            }))
                        })), n.ast = !0
                    }))
                } catch (e) {}
            }
        }(), !0 !== ti.ADAGIO.loaded && (Je() && (ze.startOrUpdate(), ze.setSampling(ti.ADAGIO.pageviewId)), Re("ADAGIO-JS LOADED: ".concat("1.15.0")), ti.ADAGIO.loaded = !0), e.getTimeInViewPrediction = Yn, e.getVratePrediction = Zn, e.measurersManager = Xt, e.queueHistory = ni, e.setAvwSamplingFromData = ri, e.setUserSync = ii, e
}({});
try {
    window.top.location.href ? (top.ADAGIO.processQueue(), top._ADAGIO = _ADAGIO) : (window.ADAGIO.processQueue(), window._ADAGIO = _ADAGIO)
} catch (e) {}