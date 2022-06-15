(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        },
        p = ca(this),
        r = function(a, b) {
            if (b) a: {
                var c = p;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.ke = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.ke
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = p[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    r("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        u = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        w = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ha = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ia = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ha(d,
                        e) && (a[e] = d[e])
            }
            return a
        };
    r("Object.assign", function(a) {
        return a || ia
    });
    var ja = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
    else {
        var la;
        a: {
            var ma = {
                    a: !0
                },
                na = {};
            try {
                na.__proto__ = ma;
                la = na.a;
                break a
            } catch (a) {}
            la = !1
        }
        ka = la ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("c`" + a);
            return a
        } : null
    }
    var oa = ka,
        x = function(a, b) {
            a.prototype = ja(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ag = b.prototype
        },
        pa = function() {
            this.rb = !1;
            this.Ea = null;
            this.kd = void 0;
            this.Ba = 1;
            this.Bd = this.Ee = 0;
            this.eb = null
        },
        ra = function(a) {
            if (a.rb) throw new TypeError("e");
            a.rb = !0
        };
    pa.prototype.ub = function(a) {
        this.kd = a
    };
    pa.prototype.Bb = function(a) {
        this.eb = {
            Ne: a,
            lf: !0
        };
        this.Ba = this.Ee || this.Bd
    };
    pa.prototype.return = function(a) {
        this.eb = {
            return: a
        };
        this.Ba = this.Bd
    };
    var sa = function(a) {
        this.j = new pa;
        this.Kf = a
    };
    sa.prototype.ub = function(a) {
        ra(this.j);
        if (this.j.Ea) return ta(this, this.j.Ea.next, a, this.j.ub);
        this.j.ub(a);
        return ua(this)
    };
    var va = function(a, b) {
        ra(a.j);
        var c = a.j.Ea;
        if (c) return ta(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return ua(a)
    };
    sa.prototype.Bb = function(a) {
        ra(this.j);
        if (this.j.Ea) return ta(this, this.j.Ea["throw"], a, this.j.ub);
        this.j.Bb(a);
        return ua(this)
    };
    var ta = function(a, b, c, d) {
            try {
                var e = b.call(a.j.Ea, c);
                if (!(e instanceof Object)) throw new TypeError("d`" + e);
                if (!e.done) return a.j.rb = !1, e;
                var f = e.value
            } catch (g) {
                return a.j.Ea = null, a.j.Bb(g), ua(a)
            }
            a.j.Ea = null;
            d.call(a.j, f);
            return ua(a)
        },
        ua = function(a) {
            for (; a.j.Ba;) try {
                var b = a.Kf(a.j);
                if (b) return a.j.rb = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.j.kd = void 0, a.j.Bb(c)
            }
            a.j.rb = !1;
            if (a.j.eb) {
                b = a.j.eb;
                a.j.eb = null;
                if (b.lf) throw b.Ne;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        wa = function(a) {
            this.next =
                function(b) {
                    return a.ub(b)
                };
            this.throw = function(b) {
                return a.Bb(b)
            };
            this.return = function(b) {
                return va(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        xa = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        ya = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            void 0 !== a["throw"] && (this["throw"] = function(b) {
                return Promise.resolve(a["throw"](b))
            });
            void 0 !== a["return"] && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        z = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    r("Promise", function(a) {
        function b() {
            this.va = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.td = function(g) {
            if (null == this.va) {
                this.va = [];
                var h = this;
                this.ud(function() {
                    h.Oe()
                })
            }
            this.va.push(g)
        };
        var d = p.setTimeout;
        b.prototype.ud = function(g) {
            d(g, 0)
        };
        b.prototype.Oe = function() {
            for (; this.va && this.va.length;) {
                var g = this.va;
                this.va = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (k) {
                        this.ye(k)
                    }
                }
            }
            this.va = null
        };
        b.prototype.ye = function(g) {
            this.ud(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.ab = 0;
            this.zb = void 0;
            this.Ua = [];
            this.Rd = !1;
            var h = this.zc();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.zc = function() {
            function g(k) {
                return function(n) {
                    l || (l = !0, k.call(h, n))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.Pf),
                reject: g(this.Yc)
            }
        };
        e.prototype.Pf = function(g) {
            if (g === this) this.Yc(new TypeError("f"));
            else if (g instanceof e) this.Sf(g);
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
                h ? this.Of(g) : this.Dd(g)
            }
        };
        e.prototype.Of = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.Yc(l);
                return
            }
            "function" == typeof h ? this.Tf(h, g) : this.Dd(g)
        };
        e.prototype.Yc = function(g) {
            this.de(2, g)
        };
        e.prototype.Dd = function(g) {
            this.de(1, g)
        };
        e.prototype.de = function(g, h) {
            if (0 != this.ab) throw Error("g`" + g + "`" + h + "`" + this.ab);
            this.ab = g;
            this.zb = h;
            2 === this.ab && this.Qf();
            this.Pe()
        };
        e.prototype.Qf = function() {
            var g = this;
            d(function() {
                if (g.Bf()) {
                    var h = p.console;
                    "undefined" !== typeof h && h.error(g.zb)
                }
            }, 1)
        };
        e.prototype.Bf = function() {
            if (this.Rd) return !1;
            var g = p.CustomEvent,
                h = p.Event,
                l = p.dispatchEvent;
            if ("undefined" === typeof l) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = p.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.zb;
            return l(g)
        };
        e.prototype.Pe = function() {
            if (null != this.Ua) {
                for (var g = 0; g < this.Ua.length; ++g) f.td(this.Ua[g]);
                this.Ua = null
            }
        };
        var f = new b;
        e.prototype.Sf = function(g) {
            var h =
                this.zc();
            g.Jb(h.resolve, h.reject)
        };
        e.prototype.Tf = function(g, h) {
            var l = this.zc();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (k) {
                l.reject(k)
            }
        };
        e.prototype.then = function(g, h) {
            function l(q, y) {
                return "function" == typeof q ? function(A) {
                    try {
                        k(q(A))
                    } catch (v) {
                        n(v)
                    }
                } : y
            }
            var k, n, t = new e(function(q, y) {
                k = q;
                n = y
            });
            this.Jb(l(g, k), l(h, n));
            return t
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Jb = function(g, h) {
            function l() {
                switch (k.ab) {
                    case 1:
                        g(k.zb);
                        break;
                    case 2:
                        h(k.zb);
                        break;
                    default:
                        throw Error("h`" +
                            k.ab);
                }
            }
            var k = this;
            null == this.Ua ? f.td(l) : this.Ua.push(l);
            this.Rd = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var k = u(g), n = k.next(); !n.done; n = k.next()) c(n.value).Jb(h, l)
            })
        };
        e.all = function(g) {
            var h = u(g),
                l = h.next();
            return l.done ? c([]) : new e(function(k, n) {
                function t(A) {
                    return function(v) {
                        q[A] = v;
                        y--;
                        0 == y && k(q)
                    }
                }
                var q = [],
                    y = 0;
                do q.push(void 0), y++, c(l.value).Jb(t(q.length - 1), n), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    r("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var k = typeof l;
            return "object" === k && null !== l || "function" === k
        }

        function d(l) {
            if (!ha(l, f)) {
                var k = new b;
                ba(l, f, {
                    value: k
                })
            }
        }

        function e(l) {
            var k = Object[l];
            k && (Object[l] = function(n) {
                if (n instanceof b) return n;
                Object.isExtensible(n) && d(n);
                return k(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        k = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [k, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(k)) return !1;
                    n.delete(l);
                    n.set(k, 4);
                    return !n.has(l) && 4 == n.get(k)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(l) {
                this.nb = (g += Math.random() + 1).toString();
                if (l) {
                    l = u(l);
                    for (var k; !(k = l.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        h.prototype.set = function(l, k) {
            if (!c(l)) throw Error("i");
            d(l);
            if (!ha(l, f)) throw Error("j`" + l);
            l[f][this.nb] = k;
            return this
        };
        h.prototype.get = function(l) {
            return c(l) && ha(l, f) ? l[f][this.nb] : void 0
        };
        h.prototype.has = function(l) {
            return c(l) && ha(l, f) && ha(l[f], this.nb)
        };
        h.prototype.delete = function(l) {
            return c(l) &&
                ha(l, f) && ha(l[f], this.nb) ? delete l[f][this.nb] : !1
        };
        return h
    });
    r("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var k = l.entries(),
                        n = k.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = k.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !k.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.jb = {};
                this.ka =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var k = d(this, h);
            k.list || (k.list = this.jb[k.id] = []);
            k.H ? k.H.value = l : (k.H = {
                next: this.ka,
                pa: this.ka.pa,
                head: this.ka,
                key: h,
                value: l
            }, k.list.push(k.H), this.ka.pa.next = k.H, this.ka.pa = k.H, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.H && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.jb[h.id], h.H.pa.next = h.H.next, h.H.next.pa = h.H.pa,
                h.H.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.jb = {};
            this.ka = this.ka.pa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).H
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).H) && h.value
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
        c.prototype.forEach = function(h, l) {
            for (var k = this.entries(),
                    n; !(n = k.next()).done;) n = n.value, h.call(l, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, l) {
                var k = l && typeof l;
                "object" == k || "function" == k ? b.has(l) ? k = b.get(l) : (k = "" + ++g, b.set(l, k)) : k = "p_" + l;
                var n = h.jb[k];
                if (n && ha(h.jb, k))
                    for (h = 0; h < n.length; h++) {
                        var t = n[h];
                        if (l !== l && t.key !== t.key || l === t.key) return {
                            id: k,
                            list: n,
                            index: h,
                            H: t
                        }
                    }
                return {
                    id: k,
                    list: n,
                    index: -1,
                    H: void 0
                }
            },
            e = function(h, l) {
                var k = h.ka;
                return ea(function() {
                    if (k) {
                        for (; k.head != h.ka;) k = k.pa;
                        for (; k.next != k.head;) return k =
                            k.next, {
                                done: !1,
                                value: l(k)
                            };
                        k = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.pa = h.next = h.head = h
            },
            g = 0;
        return c
    });
    r("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    var za = function(a, b) {
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
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return za(this, function(b) {
                return b
            })
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return za(this, function(b, c) {
                return c
            })
        }
    });
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ha(b, d) && c.push(b[d]);
            return c
        }
    });
    r("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.fa = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.fa.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.fa.set(c, c);
            this.size = this.fa.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.fa.delete(c);
            this.size = this.fa.size;
            return c
        };
        b.prototype.clear = function() {
            this.fa.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.fa.has(c)
        };
        b.prototype.entries = function() {
            return this.fa.entries()
        };
        b.prototype.values = function() {
            return this.fa.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.fa.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return za(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    r("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Aa = function(a) {
        return a ? a : Array.prototype.fill
    };
    r("Int8Array.prototype.fill", Aa);
    r("Uint8Array.prototype.fill", Aa);
    r("Uint8ClampedArray.prototype.fill", Aa);
    r("Int16Array.prototype.fill", Aa);
    r("Uint16Array.prototype.fill", Aa);
    r("Int32Array.prototype.fill", Aa);
    r("Uint32Array.prototype.fill", Aa);
    r("Float32Array.prototype.fill", Aa);
    r("Float64Array.prototype.fill", Aa);
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ha(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("k`includes");
            if (b instanceof RegExp) throw new TypeError("l`includes");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    r("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    var Ba = this || self,
        Ca = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Da = function(a) {
            var b = Ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ea = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Fa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ag = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Ag = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d,
                    g)
            }
        };
    var Ga = function() {
        this.ie = 0
    };
    Ga.prototype.ra = function(a, b) {
        var c = this;
        return function() {
            var d = z.apply(0, arguments);
            c.ie = a;
            return b.apply(null, w(d))
        }
    };
    var Ha = function() {
            this.W = [];
            this.Y = [];
            this.qb = !1
        },
        Ia = function(a, b) {
            a.W.push(b);
            1 === a.W.length && a.flush()
        },
        Ja = function(a, b) {
            a.Y.push(b);
            0 === a.W.length && 1 === a.Y.length && a.flush()
        };
    Ha.prototype.flush = function() {
        if (!this.qb) {
            for (this.qb = !0; 0 < this.W.length || 0 < this.Y.length;) {
                try {
                    for (; 0 < this.W.length;) this.W[0](), this.W.shift()
                } catch (b) {
                    throw this.Y.splice(0, this.Y.length), this.W.splice(0, this.W.length), this.qb = !1, b;
                }
                try {
                    var a = this.Y.slice();
                    for (this.Y.splice(0, this.Y.length); 0 < a.length;) a[0](), a.shift()
                } catch (b) {
                    throw this.Y.splice(0, this.Y.length), this.W.splice(0, this.W.length), this.qb = !1, b;
                }
            }
            this.qb = !1
        }
    };
    p.Object.defineProperties(Ha.prototype, {
        ae: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return 0 < this.W.length || 0 < this.Y.length
            }
        }
    });

    function Ka(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ka);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Fa(Ka, Error);
    Ka.prototype.name = "CustomError";
    var La;

    function Ma(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ka.call(this, c + a[d])
    }
    Fa(Ma, Ka);
    Ma.prototype.name = "AssertionError";

    function Na(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Ma("" + e, f || []);
    }
    var C = function(a, b, c) {
            a || Na("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Oa = function(a, b, c) {
            null == a && Na("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Pa = function(a, b) {
            throw new Ma("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Qa = function(a, b, c) {
            "number" !== typeof a && Na("Expected number but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ra = function(a, b, c) {
            "string" !== typeof a && Na("Expected string but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ua = function(a, b, c) {
            "function" !== typeof a && Na("Expected function but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Va = function(a, b, c) {
            Ea(a) || Na("Expected object but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Wa = function(a, b, c) {
            Array.isArray(a) || Na("Expected array but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Xa = function(a, b, c) {
            "boolean" !== typeof a && Na("Expected boolean but got %s: %s.", [Ca(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Za = function(a, b, c, d) {
            a instanceof b || Na("Expected instanceof %s but got %s.", [Ya(b), Ya(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function Ya(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var $a = Array.prototype.forEach ? function(a, b) {
            C(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        ab = Array.prototype.map ? function(a, b) {
            C(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        };

    function bb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function cb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function db(a, b, c) {
        if (!Da(a) || !Da(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || eb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function eb(a, b) {
        return a === b
    }

    function fb(a, b) {
        return bb.apply([], ab(a, b))
    };
    var gb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        hb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function ib() {
        var a = Ba.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function D(a) {
        return -1 != ib().indexOf(a)
    };

    function jb() {
        return D("Safari") && !(kb() || D("Coast") || D("Opera") || D("Edge") || D("Edg/") || D("OPR") || D("Firefox") || D("FxiOS") || D("Silk") || D("Android"))
    }

    function kb() {
        return (D("Chrome") || D("CriOS")) && !D("Edge") || D("Silk")
    }

    function lb() {
        return D("Android") && !(kb() || D("Firefox") || D("FxiOS") || D("Opera") || D("Silk"))
    };
    var mb = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var ob = !1,
        pb = {
            set da(a) {
                a ? console.warn("m`" + Error().stack) : ob && console.log("n");
                ob = a
            },
            get da() {
                return ob
            }
        };
    var qb = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function rb(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var sb = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (pb.da) throw a;
            rb(a)
        },
        complete: function() {}
    };
    var tb = function() {
        function a(b) {
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var ub = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };

    function vb(a) {
        return "function" === typeof a
    };

    function wb(a) {
        return null !== a && "object" === typeof a
    };
    var F = function(a) {
        this.closed = !1;
        this.Qa = this.ta = null;
        a && (this.ne = !0, this.ja = a)
    };
    F.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.ta,
                b = this.ne,
                c = this.ja,
                d = this.Qa;
            this.closed = !0;
            this.Qa = this.ta = null;
            if (a instanceof F) a.remove(this);
            else if (null !== a)
                for (var e = 0; e < a.length; ++e) a[e].remove(this);
            if (vb(c)) {
                b && (this.ja = void 0);
                try {
                    c.call(this)
                } catch (l) {
                    var f = l instanceof tb ? xb(l.errors) : [l]
                }
            }
            if (ub(d)) {
                e = -1;
                for (var g = d.length; ++e < g;) {
                    var h = d[e];
                    if (wb(h)) try {
                        h.unsubscribe()
                    } catch (l) {
                        f = f || [], l instanceof tb ? f = f.concat(xb(l.errors)) : f.push(l)
                    }
                }
            }
            if (f) throw new tb(f);
        }
    };
    F.prototype.add = function(a) {
        var b = a;
        if (!a) return F.EMPTY;
        switch (typeof a) {
            case "function":
                b = new F(a);
            case "object":
                if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
                if (this.closed) return b.unsubscribe(), b;
                b instanceof F || (a = b, b = new F, b.Qa = [a]);
                break;
            default:
                throw Error("o`" + a);
        }
        var c = b.ta;
        if (null === c) b.ta = this;
        else if (c instanceof F) {
            if (c === this) return b;
            b.ta = [c, this]
        } else if (-1 === c.indexOf(this)) c.push(this);
        else return b;
        a = this.Qa;
        null === a ? this.Qa = [b] : a.push(b);
        return b
    };
    F.prototype.remove = function(a) {
        var b = this.Qa;
        b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
    };
    var yb = new F;
    yb.closed = !0;
    F.EMPTY = yb;

    function zb(a) {
        return a instanceof F || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
    }

    function xb(a) {
        return a.reduce(function(b, c) {
            return b.concat(c instanceof tb ? c.errors : c)
        }, [])
    };
    var G = function(a, b, c) {
        F.call(this);
        this.Zb = null;
        this.s = this.V = this.Yb = !1;
        switch (arguments.length) {
            case 0:
                this.destination = sb;
                break;
            case 1:
                if (!a) {
                    this.destination = sb;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof G ? (this.V = a.V, this.destination = a, a.add(this)) : (this.V = !0, this.destination = new Ab(this, a));
                    break
                }
            default:
                this.V = !0, this.destination = new Ab(this, a, b, c)
        }
    };
    x(G, F);
    G.EMPTY = F.EMPTY;
    G.create = function(a, b, c) {
        a = new G(a, b, c);
        a.V = !1;
        return a
    };
    m = G.prototype;
    m.next = function(a) {
        this.s || this.m(a)
    };
    m.error = function(a) {
        this.s || (this.s = !0, this.M(a))
    };
    m.complete = function() {
        this.s || (this.s = !0, this.B())
    };
    m.unsubscribe = function() {
        this.closed || (this.s = !0, F.prototype.unsubscribe.call(this))
    };
    m.m = function(a) {
        this.destination.next(a)
    };
    m.M = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    m.B = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    m.sd = function() {
        var a = this.ta;
        this.ta = null;
        this.unsubscribe();
        this.s = this.closed = !1;
        this.ta = a;
        return this
    };
    var Ab = function(a, b, c, d) {
        G.call(this);
        this.bb = a;
        var e = this;
        if (vb(b)) var f = b;
        else b && (f = b.next, c = b.error, d = b.complete, b !== sb && (e = Object.create(b), zb(b) && b.add(this.unsubscribe.bind(this)), e.unsubscribe = this.unsubscribe.bind(this)));
        this.ia = e;
        this.m = f;
        this.M = c;
        this.B = d
    };
    x(Ab, G);
    Ab.EMPTY = G.EMPTY;
    Ab.create = G.create;
    m = Ab.prototype;
    m.next = function(a) {
        if (!this.s && this.m) {
            var b = this.bb;
            pb.da && b.V ? this.fc(b, this.m, a) && this.unsubscribe() : this.hc(this.m, a)
        }
    };
    m.error = function(a) {
        if (!this.s) {
            var b = this.bb,
                c = pb.da;
            if (this.M) c && b.V ? this.fc(b, this.M, a) : this.hc(this.M, a), this.unsubscribe();
            else if (b.V) c ? (b.Zb = a, b.Yb = !0) : rb(a), this.unsubscribe();
            else {
                this.unsubscribe();
                if (c) throw a;
                rb(a)
            }
        }
    };
    m.complete = function() {
        var a = this;
        if (!this.s) {
            var b = this.bb;
            if (this.B) {
                var c = function() {
                    return a.B.call(a.ia)
                };
                pb.da && b.V ? this.fc(b, c) : this.hc(c)
            }
            this.unsubscribe()
        }
    };
    m.hc = function(a, b) {
        try {
            a.call(this.ia, b)
        } catch (c) {
            this.unsubscribe();
            if (pb.da) throw c;
            rb(c)
        }
    };
    m.fc = function(a, b, c) {
        if (!pb.da) throw Error("p");
        try {
            b.call(this.ia, c)
        } catch (d) {
            return pb.da ? (a.Zb = d, a.Yb = !0) : rb(d), !0
        }
        return !1
    };
    m.ja = function() {
        var a = this.bb;
        this.bb = this.ia = null;
        a.unsubscribe()
    };

    function Bb(a) {
        return a
    };

    function H() {
        return Cb(z.apply(0, arguments))
    }

    function Cb(a) {
        return 0 === a.length ? Bb : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };

    function Db(a) {
        return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
    }
    var Eb = function(a) {
        G.call(this);
        this.destination = a
    };
    x(Eb, G);
    Eb.EMPTY = G.EMPTY;
    Eb.create = G.create;
    var J = function(a) {
        a && (this.T = a)
    };
    m = J.prototype;
    m.sb = function(a) {
        var b = new J;
        b.source = this;
        b.operator = a;
        return b
    };
    m.subscribe = function(a, b, c) {
        var d = this.operator;
        a: {
            if (a) {
                if (a instanceof G || Db(a) && zb(a)) break a;
                if (Db(a)) {
                    a = new Eb(a);
                    break a
                }
            }
            a = a || b || c ? new G(a, b, c) : new G(sb)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || pb.da && !a.V ? this.T(a) : this.nc(a));
        if (pb.da && a.V && (a.V = !1, a.Yb)) throw a.Zb;
        return a
    };
    m.nc = function(a) {
        try {
            return this.T(a)
        } catch (e) {
            pb.da && (a.Yb = !0, a.Zb = e);
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.s;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof G ? c : null
                }
                b = !0
            }
            b ? a.error(e) : console.warn(e)
        }
    };
    m.forEach = function(a, b) {
        var c = this;
        b = Fb(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f && f.unsubscribe()
                }
            }, e, d)
        })
    };
    m.T = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    J.prototype[qb] = function() {
        return this
    };
    J.prototype.g = function() {
        var a = z.apply(0, arguments);
        return 0 === a.length ? this : Cb(a)(this)
    };
    J.create = function(a) {
        return new J(a)
    };

    function Fb(a) {
        a || (a = Promise);
        if (!a) throw Error("q");
        return a
    };
    var Gb = function(a, b) {
        F.call(this);
        this.fe = a;
        this.cd = b;
        this.closed = !1
    };
    x(Gb, F);
    Gb.EMPTY = F.EMPTY;
    Gb.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.fe,
                b = a.oa;
            this.fe = null;
            !b || 0 === b.length || a.s || a.closed || (a = b.indexOf(this.cd), -1 !== a && b.splice(a, 1))
        }
    };
    var Hb = function() {
        function a() {
            this.message = "object unsubscribed";
            this.name = "ObjectUnsubscribedError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var K = function() {
        this.oa = [];
        this.lb = this.s = this.closed = !1;
        this.ac = null
    };
    x(K, J);
    m = K.prototype;
    m.sb = function(a) {
        var b = new Ib(this, this);
        b.operator = a;
        return b
    };
    m.next = function(a) {
        if (this.closed) throw new Hb;
        if (!this.s) {
            var b = this.oa,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    m.error = function(a) {
        if (this.closed) throw new Hb;
        this.lb = !0;
        this.ac = a;
        this.s = !0;
        var b = this.oa,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.oa.length = 0
    };
    m.complete = function() {
        if (this.closed) throw new Hb;
        this.s = !0;
        var a = this.oa,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.oa.length = 0
    };
    m.unsubscribe = function() {
        this.closed = this.s = !0;
        this.oa = null
    };
    m.nc = function(a) {
        if (this.closed) throw new Hb;
        return J.prototype.nc.call(this, a)
    };
    m.T = function(a) {
        if (this.closed) throw new Hb;
        if (this.lb) return a.error(this.ac), F.EMPTY;
        if (this.s) return a.complete(), F.EMPTY;
        this.oa.push(a);
        return new Gb(this, a)
    };
    m.Ga = function() {
        var a = new J;
        a.source = this;
        return a
    };
    K.create = function(a, b) {
        return new Ib(a, b)
    };
    var Ib = function(a, b) {
        K.call(this);
        this.destination = a;
        this.source = b
    };
    x(Ib, K);
    Ib.create = K.create;
    Ib.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    Ib.prototype.error = function(a) {
        var b = this.destination;
        b && b.error && this.destination.error(a)
    };
    Ib.prototype.complete = function() {
        var a = this.destination;
        a && a.complete && this.destination.complete()
    };
    Ib.prototype.T = function(a) {
        return this.source ? this.source.subscribe(a) : F.EMPTY
    };
    var Jb = function(a) {
        K.call(this);
        this.oc = a
    };
    x(Jb, K);
    Jb.create = K.create;
    Jb.prototype.T = function(a) {
        var b = K.prototype.T.call(this, a);
        b && !b.closed && a.next(this.oc);
        return b
    };
    Jb.prototype.next = function(a) {
        K.prototype.next.call(this, this.oc = a)
    };
    p.Object.defineProperties(Jb.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.lb) throw this.ac;
                if (this.closed) throw new Hb;
                return this.oc
            }
        }
    });
    var Kb = new J(function(a) {
        return a.complete()
    });

    function Lb(a, b) {
        return new J(function(c) {
            var d = new F,
                e = 0;
            d.add(b.o(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.o()))
            }));
            return d
        })
    };
    var Nb = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function Ob(a, b) {
        return b ? Lb(a, b) : new J(Nb(a))
    };

    function Pb(a) {
        return a && "function" === typeof a.o
    };

    function M() {
        var a = z.apply(0, arguments),
            b = a[a.length - 1];
        return Pb(b) ? (a.pop(), Lb(a, b)) : Ob(a)
    };

    function Qb(a) {
        return new J(function(b) {
            return b.error(a)
        })
    };
    var Rb = {
        now: function() {
            return (Rb.Ia || Date).now()
        },
        Ia: void 0
    };
    var Sb = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? Rb : c;
        K.call(this);
        this.eg = c;
        this.Gb = [];
        this.qd = !1;
        this.ld = 1 > a ? 1 : a;
        this.se = 1 > b ? 1 : b;
        Infinity === b ? (this.qd = !0, this.next = this.yf) : this.next = this.Af
    };
    x(Sb, K);
    Sb.create = K.create;
    m = Sb.prototype;
    m.yf = function(a) {
        var b = this.Gb;
        b.push(a);
        b.length > this.ld && b.shift();
        K.prototype.next.call(this, a)
    };
    m.Af = function(a) {
        this.Gb.push({
            time: this.od(),
            value: a
        });
        this.rd();
        K.prototype.next.call(this, a)
    };
    m.T = function(a) {
        var b = this.qd,
            c = b ? this.Gb : this.rd(),
            d = c.length;
        if (this.closed) throw new Hb;
        if (this.s || this.lb) var e = F.EMPTY;
        else this.oa.push(a), e = new Gb(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.lb ? a.error(this.ac) : this.s && a.complete();
        return e
    };
    m.od = function() {
        var a = this.eg;
        return a ? a.now() : Rb.now()
    };
    m.rd = function() {
        for (var a = this.od(), b = this.ld, c = this.se, d = this.Gb, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };
    var Ub = function(a, b) {
        b = void 0 === b ? Tb : b;
        this.me = a;
        this.now = b
    };
    Ub.prototype.o = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.me(this, a)).o(c, b)
    };
    var Tb = Rb.now;
    var Vb = function() {
        function a() {
            this.message = "no elements in sequence";
            this.name = "EmptyError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();

    function N(a, b) {
        if (a && "function" === typeof a.sb) return a.sb(b);
        throw new TypeError("r");
    };

    function Wb() {
        return function(a) {
            return N(a, new Xb)
        }
    }
    var Xb = function() {};
    Xb.prototype.call = function(a, b) {
        b.cb++;
        a = new Yb(a, b);
        var c = b.subscribe(a);
        a.closed || (a.connection = b.connect());
        return c
    };
    var Yb = function(a, b) {
        G.call(this, a);
        this.Ra = b;
        this.connection = null
    };
    x(Yb, G);
    Yb.EMPTY = G.EMPTY;
    Yb.create = G.create;
    Yb.prototype.ja = function() {
        var a = this.Ra;
        if (a) {
            this.Ra = null;
            var b = a.cb;
            0 >= b ? this.connection = null : (a.cb = b - 1, 1 < b ? this.connection = null : (b = this.connection, a = a.Pa, this.connection = null, !a || b && a !== b || a.unsubscribe()))
        } else this.connection = null
    };
    var Zb = function(a, b) {
        this.source = a;
        this.ge = b;
        this.cb = 0;
        this.Hb = !1
    };
    x(Zb, J);
    Zb.create = J.create;
    Zb.prototype.T = function(a) {
        return this.Ob().subscribe(a)
    };
    Zb.prototype.Ob = function() {
        var a = this.Ib;
        if (!a || a.s) this.Ib = this.ge();
        return this.Ib
    };
    Zb.prototype.connect = function() {
        var a = this.Pa;
        a || (this.Hb = !1, a = this.Pa = new F, a.add(this.source.subscribe(new $b(this.Ob(), this))), a.closed && (this.Pa = null, a = F.EMPTY));
        return a
    };
    Zb.prototype.Yd = function() {
        return Wb()(this)
    };
    var ac, bc = Zb.prototype;
    ac = {
        operator: {
            value: null
        },
        cb: {
            value: 0,
            writable: !0
        },
        Ib: {
            value: null,
            writable: !0
        },
        Pa: {
            value: null,
            writable: !0
        },
        T: {
            value: bc.T
        },
        Hb: {
            value: bc.Hb,
            writable: !0
        },
        Ob: {
            value: bc.Ob
        },
        connect: {
            value: bc.connect
        },
        Yd: {
            value: bc.Yd
        }
    };
    var $b = function(a, b) {
        G.call(this);
        this.destination = a;
        this.Ra = b
    };
    x($b, G);
    $b.EMPTY = G.EMPTY;
    $b.create = G.create;
    $b.prototype.M = function(a) {
        this.ja();
        G.prototype.M.call(this, a)
    };
    $b.prototype.B = function() {
        this.Ra.Hb = !0;
        this.ja();
        G.prototype.B.call(this)
    };
    $b.prototype.ja = function() {
        var a = this.Ra;
        if (a) {
            this.Ra = null;
            var b = a.Pa;
            a.cb = 0;
            a.Ib = null;
            a.Pa = null;
            b && b.unsubscribe()
        }
    };

    function O(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("s");
            return N(b, new cc(a))
        }
    }
    var cc = function(a) {
        this.F = a;
        this.X = void 0
    };
    cc.prototype.call = function(a, b) {
        return b.subscribe(new dc(a, this.F, this.X))
    };
    var dc = function(a, b, c) {
        G.call(this, a);
        this.F = b;
        this.count = 0;
        this.X = c || this
    };
    x(dc, G);
    dc.EMPTY = G.EMPTY;
    dc.create = G.create;
    dc.prototype.m = function(a) {
        try {
            var b = this.F.call(this.X, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var ec = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var fc = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function gc(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };

    function hc(a) {
        return function(b) {
            ic(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function ic(a, b) {
        var c, d, e;
        return xa(new wa(new sa(function(f) {
            switch (f.Ba) {
                case 1:
                    var g = a[Symbol.asyncIterator];
                    c = void 0 !== g ? g.call(a) : new ya(u(a));
                case 2:
                    return g = c.next(), f.Ba = 5, {
                        value: g
                    };
                case 5:
                    d = f.kd;
                    if (d.done) {
                        f.Ba = 4;
                        break
                    }
                    e = d.value;
                    b.next(e);
                    f.Ba = 2;
                    break;
                case 4:
                    b.complete(), f.Ba = 0
            }
        })))
    };
    var jc = function(a) {
        return function(b) {
            var c = a[ec]();
            do {
                var d = void 0;
                try {
                    d = c.next()
                } catch (e) {
                    b.error(e);
                    return
                }
                if (d.done) {
                    b.complete();
                    break
                }
                b.next(d.value);
                if (b.closed) break
            } while (1);
            "function" === typeof c.return && b.add(function() {
                c.return && c.return()
            });
            return b
        }
    };
    var kc = function(a) {
        return function(b) {
            var c = a[qb]();
            if ("function" !== typeof c.subscribe) throw new TypeError("t");
            return c.subscribe(b)
        }
    };
    var lc = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, rb);
            return b
        }
    };
    var mc = function(a) {
        if (a && "function" === typeof a[qb]) return kc(a);
        if (fc(a)) return Nb(a);
        if (gc(a)) return lc(a);
        if (a && "function" === typeof a[ec]) return jc(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return hc(a);
        throw new TypeError("u`" + (wb(a) ? "an invalid object" : "'" + a + "'"));
    };
    var nc = function(a) {
        G.call(this);
        this.parent = a
    };
    x(nc, G);
    nc.EMPTY = G.EMPTY;
    nc.create = G.create;
    nc.prototype.m = function(a) {
        this.parent.ga(a)
    };
    nc.prototype.M = function(a) {
        this.parent.Ca(a);
        this.unsubscribe()
    };
    nc.prototype.B = function() {
        this.parent.L();
        this.unsubscribe()
    };
    var oc = function(a, b, c) {
        G.call(this);
        this.parent = a;
        this.Xd = b;
        this.Jf = c
    };
    x(oc, G);
    oc.EMPTY = G.EMPTY;
    oc.create = G.create;
    oc.prototype.m = function(a) {
        this.parent.ga(this.Xd, a, this.Jf, this)
    };
    oc.prototype.M = function(a) {
        this.parent.Ca(a);
        this.unsubscribe()
    };
    oc.prototype.B = function() {
        this.parent.L(this);
        this.unsubscribe()
    };
    var P = function() {
        G.apply(this, arguments)
    };
    x(P, G);
    P.EMPTY = G.EMPTY;
    P.create = G.create;
    P.prototype.ga = function(a) {
        this.destination.next(a)
    };
    P.prototype.Ca = function(a) {
        this.destination.error(a)
    };
    P.prototype.L = function() {
        this.destination.complete()
    };
    var Q = function() {
        G.apply(this, arguments)
    };
    x(Q, G);
    Q.EMPTY = G.EMPTY;
    Q.create = G.create;
    Q.prototype.ga = function(a, b) {
        this.destination.next(b)
    };
    Q.prototype.Ca = function(a) {
        this.destination.error(a)
    };
    Q.prototype.L = function() {
        this.destination.complete()
    };

    function pc(a, b) {
        if (!b.closed) return a instanceof J ? a.subscribe(b) : mc(a)(b)
    };
    var qc = {};

    function R() {
        var a = z.apply(0, arguments),
            b = void 0,
            c = void 0,
            d = void 0;
        Pb(a[a.length - 1]) && (c = a.pop());
        "function" === typeof a[a.length - 1] && (b = a.pop());
        if (1 === a.length) {
            var e = a[0];
            ub(e) && (a = e);
            wb(e) && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
                return e[f]
            }))
        }
        return N(Ob(a, c), new rc(b, d))
    }
    var rc = function(a, b) {
        this.Wb = a;
        this.keys = b
    };
    rc.prototype.call = function(a, b) {
        return b.subscribe(new sc(a, this.Wb, this.keys))
    };
    var sc = function(a, b, c) {
        Q.call(this, a);
        this.Wb = b;
        this.keys = c;
        this.active = 0;
        this.values = [];
        this.Da = []
    };
    x(sc, Q);
    sc.EMPTY = Q.EMPTY;
    sc.create = Q.create;
    m = sc.prototype;
    m.m = function(a) {
        this.values.push(qc);
        this.Da.push(a)
    };
    m.B = function() {
        var a = this.Da,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.Na = this.active = b;
            for (var c = 0; c < b; c++) this.add(pc(a[c], new oc(this, null, c)))
        }
    };
    m.L = function() {
        0 === --this.active && this.destination.complete()
    };
    m.ga = function(a, b, c) {
        var d = this.values,
            e = d[c];
        e = this.Na ? e === qc ? --this.Na : this.Na : 0;
        d[c] = b;
        0 === e && (this.Wb ? this.pe(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
            return f[g] = d[h], f
        }, {}) : d.slice()))
    };
    m.pe = function(a) {
        try {
            var b = this.Wb.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function tc(a, b) {
        if (!a) throw Error("v");
        return new J(function(c) {
            var d = new F;
            d.add(b.o(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.o(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.o())
                    })
                }))
            }));
            return d
        })
    };

    function uc(a, b) {
        if (!a) throw Error("v");
        return new J(function(c) {
            var d = new F,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.o(function() {
                e = a[ec]();
                d.add(b.o(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var g = f.value;
                            var h = f.done
                        } catch (l) {
                            c.error(l);
                            return
                        }
                        h ? c.complete() : (c.next(g), this.o())
                    }
                }))
            }));
            return d
        })
    };

    function vc(a, b) {
        return new J(function(c) {
            var d = new F;
            d.add(b.o(function() {
                var e = a[qb]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.o(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.o(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.o(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function wc(a, b) {
        return new J(function(c) {
            var d = new F;
            d.add(b.o(function() {
                return a.then(function(e) {
                    d.add(b.o(function() {
                        c.next(e);
                        d.add(b.o(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.o(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function xc(a) {
        var b = yc;
        if (null != a) {
            if (a && "function" === typeof a[qb]) return vc(a, b);
            if (gc(a)) return wc(a, b);
            if (fc(a)) return Lb(a, b);
            if (a && "function" === typeof a[ec] || "string" === typeof a) return uc(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return tc(a, b)
        }
        throw new TypeError("w`" + (null !== a && typeof a || a));
    };

    function zc(a) {
        return a instanceof J ? a : new J(mc(a))
    };

    function Bc(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.g(Bc(function(e, f) {
                return zc(a(e, f)).g(O(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return N(d, new Cc(a, c))
        }
    }
    var Cc = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.F = a;
        this.vc = b
    };
    Cc.prototype.call = function(a, b) {
        return b.subscribe(new Dc(a, this.F, this.vc))
    };
    var Dc = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        P.call(this, a);
        this.destination = a;
        this.F = b;
        this.vc = c;
        this.Kd = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    x(Dc, P);
    Dc.EMPTY = P.EMPTY;
    Dc.create = P.create;
    Dc.prototype.m = function(a) {
        if (this.active < this.vc) {
            var b = this.index++;
            try {
                var c = this.F(a, b)
            } catch (d) {
                this.destination.error(d);
                return
            }
            this.active++;
            a = new nc(this);
            this.destination.add(a);
            pc(c, a)
        } else this.buffer.push(a)
    };
    Dc.prototype.B = function() {
        this.Kd = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    Dc.prototype.ga = function(a) {
        this.destination.next(a)
    };
    Dc.prototype.L = function() {
        var a = this.buffer;
        this.active--;
        0 < a.length ? this.m(a.shift()) : 0 === this.active && this.Kd && this.destination.complete()
    };

    function Ec(a) {
        a = void 0 === a ? Infinity : a;
        return Bc(Bb, a)
    };

    function Fc() {
        return Ec(1)(M.apply(null, w(z.apply(0, arguments))))
    };

    function Gc(a, b, c) {
        if (vb(c)) {
            var d = c;
            c = void 0
        }
        return d ? Gc(a, b, c).g(O(function(e) {
            return ub(e) ? d.apply(null, w(e)) : d(e)
        })) : new J(function(e) {
            Hc(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function Hc(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.Ef && "function" === typeof a.Df) a.Ef(b, c), f = function() {
            return a.Df(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var g = 0, h = a.length; g < h; g++) Hc(a[g], b,
                c, d, e);
        else throw new TypeError("x");
        d.add(f)
    };
    var Ic = function() {
        F.call(this)
    };
    x(Ic, F);
    Ic.EMPTY = F.EMPTY;
    Ic.prototype.o = function() {
        return this
    };
    var Jc = function(a, b) {
        F.call(this);
        this.U = a;
        this.dc = b;
        this.pending = !1
    };
    x(Jc, Ic);
    Jc.EMPTY = Ic.EMPTY;
    m = Jc.prototype;
    m.o = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.U;
        null != a && (this.id = this.xb(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.yb(c, this.id, b);
        return this
    };
    m.yb = function(a, b, c) {
        return setInterval(a.flush.bind(a, this), void 0 === c ? 0 : c)
    };
    m.xb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && this.delay === c && !1 === this.pending) return b;
        clearInterval(b)
    };
    m.execute = function(a, b) {
        if (this.closed) return Error("y");
        this.pending = !1;
        if (a = this.md(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.xb(this.U, this.id, null))
    };
    m.md = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.dc(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    m.ja = function() {
        var a = this.id,
            b = this.U,
            c = b.actions,
            d = c.indexOf(this);
        this.state = this.dc = null;
        this.pending = !1;
        this.U = null; - 1 !== d && c.splice(d, 1);
        null != a && (this.id = this.xb(b, a, null));
        this.delay = null
    };
    var Kc = function(a, b) {
        b = void 0 === b ? Tb : b;
        Ub.call(this, a, function() {
            return Kc.Ia && Kc.Ia !== c ? Kc.Ia.now() : b()
        });
        var c = this;
        this.actions = [];
        this.active = !1;
        this.Xb = void 0
    };
    x(Kc, Ub);
    Kc.prototype.o = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return Kc.Ia && Kc.Ia !== this ? Kc.Ia.o(a, b, c) : Ub.prototype.o.call(this, a, b, c)
    };
    Kc.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Lc() {
        var a = z.apply(0, arguments),
            b = Infinity,
            c = void 0,
            d = a[a.length - 1];
        Pb(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
        return !c && 1 === a.length && a[0] instanceof J ? a[0] : Ec(b)(Ob(a, c))
    };

    function Mc() {};
    var Nc = new J(Mc);

    function S(a) {
        return function(b) {
            return N(b, new Oc(a))
        }
    }
    var Oc = function(a) {
        this.ba = a;
        this.X = void 0
    };
    Oc.prototype.call = function(a, b) {
        return b.subscribe(new Pc(a, this.ba, this.X))
    };
    var Pc = function(a, b, c) {
        G.call(this, a);
        this.ba = b;
        this.X = c;
        this.count = 0
    };
    x(Pc, G);
    Pc.EMPTY = G.EMPTY;
    Pc.create = G.create;
    Pc.prototype.m = function(a) {
        try {
            var b = this.ba.call(this.X, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };

    function Qc() {
        var a = z.apply(0, arguments);
        if (1 === a.length)
            if (ub(a[0])) a = a[0];
            else return zc(a[0]);
        return N(Ob(a), new Rc)
    }
    var Rc = function() {};
    Rc.prototype.call = function(a, b) {
        return b.subscribe(new Sc(a))
    };
    var Sc = function(a) {
        Q.call(this, a);
        this.mb = !1;
        this.Da = [];
        this.Ab = []
    };
    x(Sc, Q);
    Sc.EMPTY = Q.EMPTY;
    Sc.create = Q.create;
    m = Sc.prototype;
    m.m = function(a) {
        this.Da.push(a)
    };
    m.B = function() {
        var a = this.Da,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.mb; c++) {
                var d = pc(a[c], new oc(this, null, c));
                this.Ab && this.Ab.push(d);
                this.add(d)
            }
            this.Da = null
        }
    };
    m.ga = function(a, b, c) {
        if (!this.mb) {
            this.mb = !0;
            for (var d = 0; d < this.Ab.length; d++)
                if (d !== c) {
                    var e = this.Ab[d];
                    e.unsubscribe();
                    this.remove(e)
                }
            this.Ab = null
        }
        this.destination.next(b)
    };
    m.L = function(a) {
        this.mb = !0;
        Q.prototype.L.call(this, a)
    };
    m.Ca = function(a) {
        this.mb = !0;
        Q.prototype.Ca.call(this, a)
    };
    (function() {
        function a(b) {
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = void 0 === b ? null : b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var Tc = 1,
        Uc, Vc = {};

    function Wc(a) {
        return a in Vc ? (delete Vc[a], !0) : !1
    }
    var Xc = function(a) {
        var b = Tc++;
        Vc[b] = !0;
        Uc || (Uc = Promise.resolve());
        Uc.then(function() {
            return Wc(b) && a()
        });
        return b
    };
    var Yc = function(a, b) {
        Jc.call(this, a, b);
        this.U = a;
        this.dc = b
    };
    x(Yc, Jc);
    Yc.EMPTY = Jc.EMPTY;
    Yc.prototype.yb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return Jc.prototype.yb.call(this, a, b, c);
        a.actions.push(this);
        return a.Xb || (a.Xb = Xc(a.flush.bind(a, void 0)))
    };
    Yc.prototype.xb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c || null === c && 0 < this.delay) return Jc.prototype.xb.call(this, a, b, c);
        0 === a.actions.length && (Wc(b), a.Xb = void 0)
    };
    var Zc = function() {
        Kc.apply(this, arguments)
    };
    x(Zc, Kc);
    Zc.prototype.flush = function(a) {
        this.active = !0;
        this.Xb = void 0;
        var b = this.actions,
            c, d = -1;
        a = a || b.shift();
        var e = b.length;
        do
            if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
        this.active = !1;
        if (c) {
            for (; ++d < e && (a = b.shift());) a.unsubscribe();
            throw c;
        }
    };
    var $c = new Zc(Yc);
    var ad = function(a, b) {
        Jc.call(this, a, b);
        this.U = a;
        this.dc = b
    };
    x(ad, Jc);
    ad.EMPTY = Jc.EMPTY;
    ad.prototype.o = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return Jc.prototype.o.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.U.flush(this);
        return this
    };
    ad.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? Jc.prototype.execute.call(this, a, b) : this.md(a, b)
    };
    ad.prototype.yb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null !== c && 0 < c || null === c && 0 < this.delay ? Jc.prototype.yb.call(this, a, b, c) : a.flush(this)
    };
    var bd = function() {
        Kc.apply(this, arguments)
    };
    x(bd, Kc);
    var yc = new bd(ad);
    (function() {
        function a() {
            this.message = "argument out of range";
            this.name = "ArgumentOutOfRangeError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "NotFoundError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "SequenceError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var cd = function() {
        this.u = new Ga;
        this.h = new Ha;
        this.id = mb()
    };
    cd.prototype.Hc = function() {
        return Nc
    };
    p.Object.defineProperties(cd.prototype, {
        Sb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.id
            }
        }
    });
    var T = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = T.prototype;
        this.name = String(a)
    };
    x(T, Error);
    var U = function(a) {
        T.call(this, 1E3, 'sfr:"' + a + '"');
        this.xf = a;
        this.__proto__ = U.prototype
    };
    x(U, T);
    var dd = function() {
        T.call(this, 1003);
        this.__proto__ = dd.prototype
    };
    x(dd, T);
    var ed = function() {
        T.call(this, 1009);
        this.__proto__ = ed.prototype
    };
    x(ed, T);
    var fd = function() {
        T.call(this, 1007);
        this.__proto__ = dd.prototype
    };
    x(fd, T);
    var gd = function() {
        T.call(this, 1008);
        this.__proto__ = dd.prototype
    };
    x(gd, T);
    var hd = function() {
        T.call(this, 1001);
        this.__proto__ = hd.prototype
    };
    x(hd, T);
    var id = function(a) {
        T.call(this, 1004, String(a));
        this.ff = a;
        this.__proto__ = id.prototype
    };
    x(id, T);
    var kd = function(a) {
        T.call(this, 1010, a);
        this.__proto__ = jd.prototype
    };
    x(kd, T);
    var jd = function(a) {
        T.call(this, 1005, a);
        this.__proto__ = jd.prototype
    };
    x(jd, T);
    var ld = function(a) {
        var b = z.apply(1, arguments),
            c = this;
        this.Va = [];
        this.Va.push(a);
        b.forEach(function(d) {
            c.Va.push(d)
        })
    };
    ld.prototype.ma = function(a) {
        return this.Va.some(function(b) {
            return b.ma(a)
        })
    };
    ld.prototype.Z = function(a, b) {
        for (var c = 0; c < this.Va.length; c++)
            if (this.Va[c].ma(b)) return this.Va[c].Z(a, b);
        throw new ed;
    };
    var md = Symbol("time-origin"),
        qd = Symbol("date"),
        rd = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        sd = function(a, b) {
            if (b.timeline !== a.timeline) throw new fd;
            return a.value - b.value
        };
    rd.prototype.equals = function(a) {
        return 0 === sd(this, a)
    };
    rd.prototype.maximum = function(a) {
        if (a.timeline !== this.timeline) throw new fd;
        return this.value >= a.value ? this : a
    };
    rd.prototype.round = function() {
        return new rd(Math.round(this.value), this.timeline)
    };
    rd.prototype.toString = function() {
        return String(this.value)
    };

    function td(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function ud(a) {
        return td(a) ? a : String(a)
    };

    function vd(a) {
        return function(b) {
            var c = new wd(a);
            b = N(b, c);
            return c.uc = b
        }
    }
    var wd = function(a) {
        this.Zc = a
    };
    wd.prototype.call = function(a, b) {
        return b.subscribe(new xd(a, this.Zc, this.uc))
    };
    var xd = function(a, b, c) {
        P.call(this, a);
        this.Zc = b;
        this.uc = c
    };
    x(xd, P);
    xd.EMPTY = P.EMPTY;
    xd.create = P.create;
    xd.prototype.error = function(a) {
        if (!this.s) {
            try {
                var b = this.Zc(a, this.uc)
            } catch (c) {
                P.prototype.error.call(this, c);
                return
            }
            this.sd();
            a = new nc(this);
            this.add(a);
            pc(b, a)
        }
    };

    function yd() {
        var a = z.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        1 === a.length && ub(a[0]) && (a = a[0].slice());
        return function(c) {
            var d = zc([c].concat(w(a))),
                e = new rc(b);
            if (c && "function" === typeof c.sb) c = c.sb.call(d, e);
            else throw new TypeError("r");
            return c
        }
    }

    function zd() {
        return yd.apply(null, w(z.apply(0, arguments)))
    };

    function Ad(a) {
        a = void 0 === a ? null : a;
        return function(b) {
            return N(b, new Bd(a))
        }
    }
    var Bd = function(a) {
        this.defaultValue = a
    };
    Bd.prototype.call = function(a, b) {
        return b.subscribe(new Cd(a, this.defaultValue))
    };
    var Cd = function(a, b) {
        G.call(this, a);
        this.defaultValue = b;
        this.Tb = !0
    };
    x(Cd, G);
    Cd.EMPTY = G.EMPTY;
    Cd.create = G.create;
    Cd.prototype.m = function(a) {
        this.Tb = !1;
        this.destination.next(a)
    };
    Cd.prototype.B = function() {
        this.Tb && this.destination.next(this.defaultValue);
        this.destination.complete()
    };

    function Dd(a) {
        return function(b) {
            return N(b, new Ed(a))
        }
    }
    var Ed = function(a) {
        this.Bc = a
    };
    Ed.prototype.call = function(a, b) {
        return b.subscribe(new Fd(a, this.Bc))
    };
    var Fd = function(a, b) {
        Q.call(this, a);
        this.Bc = b;
        this.wd = !1;
        this.Nb = [];
        this.index = 0
    };
    x(Fd, Q);
    Fd.EMPTY = Q.EMPTY;
    Fd.create = Q.create;
    m = Fd.prototype;
    m.ga = function(a, b, c, d) {
        this.destination.next(a);
        Gd(this, d);
        Hd(this)
    };
    m.Ca = function(a) {
        this.M(a)
    };
    m.L = function(a) {
        (a = Gd(this, a)) && this.destination.next(a);
        Hd(this)
    };
    m.m = function(a) {
        var b = this.index++;
        try {
            var c = this.Bc(a, b);
            if (c) {
                var d = pc(c, new oc(this, a, 0));
                d && !d.closed && (this.destination.add(d), this.Nb.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    m.B = function() {
        this.wd = !0;
        Hd(this);
        this.unsubscribe()
    };
    var Gd = function(a, b) {
            b.unsubscribe();
            var c = a.Nb.indexOf(b); - 1 !== c && a.Nb.splice(c, 1);
            return b.Xd
        },
        Hd = function(a) {
            a.wd && 0 === a.Nb.length && a.destination.complete()
        };

    function Id(a) {
        return function(b) {
            return N(b, new Jd(a))
        }
    }
    var Jd = function(a) {
        this.Aa = a;
        this.Ve = void 0
    };
    Jd.prototype.call = function(a, b) {
        return b.subscribe(new Kd(a, this.Aa, this.Ve))
    };
    var Kd = function(a, b, c) {
        P.call(this, a);
        this.Aa = b;
        this.values = new Set;
        c && this.add(pc(c, new nc(this)))
    };
    x(Kd, P);
    Kd.EMPTY = P.EMPTY;
    Kd.create = P.create;
    m = Kd.prototype;
    m.ga = function() {
        this.values.clear()
    };
    m.Ca = function(a) {
        this.M(a)
    };
    m.m = function(a) {
        this.Aa ? this.qe(a) : this.nd(a, a)
    };
    m.qe = function(a) {
        var b = this.destination;
        try {
            var c = this.Aa(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.nd(c, a)
    };
    m.nd = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function V(a) {
        return function(b) {
            return N(b, new Ld(a))
        }
    }
    var Ld = function(a) {
        this.compare = a;
        this.Aa = void 0
    };
    Ld.prototype.call = function(a, b) {
        return b.subscribe(new Md(a, this.compare, this.Aa))
    };
    var Md = function(a, b, c) {
        G.call(this, a);
        this.Aa = c;
        this.Md = !1;
        "function" === typeof b && (this.compare = b)
    };
    x(Md, G);
    Md.EMPTY = G.EMPTY;
    Md.create = G.create;
    Md.prototype.compare = function(a, b) {
        return a === b
    };
    Md.prototype.m = function(a) {
        try {
            var b = this.Aa;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.Md) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.Md = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function Nd() {
        if (isNaN(1)) throw new TypeError("z");
        return function(a) {
            return N(a, new Od)
        }
    }
    var Od = function() {
        this.count = 1
    };
    Od.prototype.call = function(a, b) {
        return b.subscribe(new Pd(a, this.count))
    };
    var Pd = function(a, b) {
        G.call(this, a);
        this.count = b;
        this.re = 0
    };
    x(Pd, G);
    Pd.EMPTY = G.EMPTY;
    Pd.create = G.create;
    Pd.prototype.m = function(a) {
        var b = this.count,
            c = ++this.re;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };

    function Qd(a) {
        a = void 0 === a ? Rd : a;
        return function(b) {
            return N(b, new Sd(a))
        }
    }
    var Sd = function(a) {
        this.Dc = a
    };
    Sd.prototype.call = function(a, b) {
        return b.subscribe(new Td(a, this.Dc))
    };
    var Td = function(a, b) {
        G.call(this, a);
        this.Dc = b;
        this.Od = !1
    };
    x(Td, G);
    Td.EMPTY = G.EMPTY;
    Td.create = G.create;
    Td.prototype.m = function(a) {
        this.Od = !0;
        this.destination.next(a)
    };
    Td.prototype.B = function() {
        if (this.Od) return this.destination.complete();
        try {
            var a = this.Dc()
        } catch (b) {
            a = b
        }
        this.destination.error(a)
    };

    function Rd() {
        return new Vb
    };

    function Ud() {
        var a = z.apply(0, arguments);
        return function(b) {
            return Fc(b, M.apply(null, w(a)))
        }
    };

    function Vd(a) {
        return function(b) {
            return N(b, new Wd(a, b))
        }
    }
    var Wd = function(a, b) {
        this.ba = a;
        this.X = void 0;
        this.source = b
    };
    Wd.prototype.call = function(a, b) {
        return b.subscribe(new Xd(a, this.ba, this.X, this.source))
    };
    var Xd = function(a, b, c, d) {
        G.call(this, a);
        this.ba = b;
        this.X = c;
        this.source = d;
        this.index = 0;
        this.X = c || this
    };
    x(Xd, G);
    Xd.EMPTY = G.EMPTY;
    Xd.create = G.create;
    Xd.prototype.L = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    Xd.prototype.m = function(a) {
        var b = !1;
        try {
            b = this.ba.call(this.X, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.L(!1)
    };
    Xd.prototype.B = function() {
        this.L(!0)
    };

    function Yd() {
        return function(a) {
            return N(a, new Zd)
        }
    }
    var Zd = function() {};
    Zd.prototype.call = function(a, b) {
        return b.subscribe(new $d(a))
    };
    var $d = function() {
        G.apply(this, arguments)
    };
    x($d, G);
    $d.EMPTY = G.EMPTY;
    $d.create = G.create;
    $d.prototype.m = function() {};

    function ae() {
        if (isNaN(1)) throw new TypeError("z");
        return function(a) {
            return N(a, new be)
        }
    }
    var be = function() {
        this.total = 1
    };
    be.prototype.call = function(a, b) {
        return b.subscribe(new ce(a, this.total))
    };
    var ce = function(a, b) {
        G.call(this, a);
        this.total = b;
        this.Zd = [];
        this.count = 0
    };
    x(ce, G);
    ce.EMPTY = G.EMPTY;
    ce.create = G.create;
    ce.prototype.m = function(a) {
        var b = this.Zd,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    ce.prototype.B = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.Zd, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function de(a, b) {
        var c = 2 <= arguments.length;
        return function(d) {
            return d.g(a ? S(function(e, f) {
                return a(e, f, d)
            }) : Bb, ae(), c ? Ad(b) : Qd(function() {
                return new Vb
            }))
        }
    };

    function ee(a) {
        return function(b) {
            return N(b, new fe(a))
        }
    }
    var fe = function(a) {
        this.value = a
    };
    fe.prototype.call = function(a, b) {
        return b.subscribe(new ge(a, this.value))
    };
    var ge = function(a, b) {
        G.call(this, a);
        this.value = b
    };
    x(ge, G);
    ge.EMPTY = G.EMPTY;
    ge.create = G.create;
    ge.prototype.m = function() {
        this.destination.next(this.value)
    };

    function he(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return N(d, new ie(a, b, c))
        }
    }
    var ie = function(a, b, c) {
        this.pc = a;
        this.seed = b;
        this.cf = void 0 === c ? !1 : c
    };
    ie.prototype.call = function(a, b) {
        return b.subscribe(new je(a, this.pc, this.seed, this.cf))
    };
    var je = function(a, b, c, d) {
        G.call(this, a);
        this.pc = b;
        this.ic = c;
        this.pd = d;
        this.index = 0
    };
    x(je, G);
    je.EMPTY = G.EMPTY;
    je.create = G.create;
    je.prototype.m = function(a) {
        var b = this.destination;
        if (this.pd) {
            var c = this.index++;
            try {
                var d = this.pc(this.ic, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.ic = d;
            b.next(d)
        } else this.ic = a, this.pd = !0, b.next(a)
    };

    function ke(a) {
        return function(b) {
            var c = "function" === typeof a ? a : function() {
                return a
            };
            var d = Object.create(b, ac);
            d.source = b;
            d.ge = c;
            return d
        }
    };

    function le() {
        var a = z.apply(0, arguments);
        1 === a.length && ub(a[0]) && (a = a[0]);
        return function(b) {
            return N(b, new me(a))
        }
    }
    var me = function(a) {
        this.Sc = a
    };
    me.prototype.call = function(a, b) {
        return b.subscribe(new ne(a, this.Sc))
    };
    var ne = function(a, b) {
        P.call(this, a);
        this.destination = a;
        this.Sc = b
    };
    x(ne, P);
    ne.EMPTY = P.EMPTY;
    ne.create = P.create;
    ne.prototype.Ca = function() {
        oe(this)
    };
    ne.prototype.L = function() {
        oe(this)
    };
    ne.prototype.M = function() {
        oe(this);
        this.unsubscribe()
    };
    ne.prototype.B = function() {
        oe(this);
        this.unsubscribe()
    };
    var oe = function(a) {
        var b = a.Sc.shift();
        if (b) {
            var c = new nc(a);
            a.destination.add(c);
            pc(b, c)
        } else a.destination.complete()
    };

    function pe() {
        var a = new Sb(1, void 0, void 0);
        return function(b) {
            return ke(function() {
                return a
            })(b)
        }
    };

    function qe() {
        var a = void 0 === a ? -1 : a;
        return function(b) {
            return 0 === a ? Kb : 0 > a ? N(b, new re(-1, b)) : N(b, new re(a - 1, b))
        }
    }
    var re = function(a, b) {
        this.count = a;
        this.source = b
    };
    re.prototype.call = function(a, b) {
        return b.subscribe(new se(a, this.count, this.source))
    };
    var se = function(a, b, c) {
        G.call(this, a);
        this.count = b;
        this.source = c
    };
    x(se, G);
    se.EMPTY = G.EMPTY;
    se.create = G.create;
    se.prototype.complete = function() {
        if (!this.s) {
            var a = this.source,
                b = this.count;
            if (0 === b) return G.prototype.complete.call(this); - 1 < b && (this.count = b - 1);
            a.subscribe(this.sd())
        }
    };

    function te() {
        return new K
    }

    function ue() {
        return function(a) {
            return Wb()(ke(te)(a))
        }
    };

    function W() {
        var a = z.apply(0, arguments),
            b = a[a.length - 1];
        return Pb(b) ? (a.pop(), function(c) {
            return Fc(a, c, b)
        }) : function(c) {
            return Fc(a, c)
        }
    };
    var ve = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? $c : c;
        this.source = a;
        this.delayTime = b;
        this.U = c;
        0 > b && (this.delayTime = 0);
        Pb(c) || (this.U = $c)
    };
    x(ve, J);
    ve.create = J.create;
    ve.Ke = function(a) {
        return this.add(a.source.subscribe(a.cd))
    };
    ve.prototype.T = function(a) {
        return this.U.o(ve.Ke, this.delayTime, {
            source: this.source,
            cd: a
        })
    };

    function we() {
        var a = void 0 === a ? 0 : a;
        return function(b) {
            return N(b, new xe(a))
        }
    }
    var xe = function(a) {
        this.U = yc;
        this.delay = a
    };
    xe.prototype.call = function(a, b) {
        return (new ve(b, this.delay, this.U)).subscribe(a)
    };

    function X(a) {
        return function(b) {
            return N(b, new ye(a))
        }
    }
    var ye = function(a) {
        this.F = a
    };
    ye.prototype.call = function(a, b) {
        return b.subscribe(new ze(a, this.F))
    };
    var ze = function(a, b) {
        P.call(this, a);
        this.destination = a;
        this.F = b;
        this.index = 0
    };
    x(ze, P);
    ze.EMPTY = P.EMPTY;
    ze.create = P.create;
    m = ze.prototype;
    m.m = function(a) {
        var b = this.index++;
        try {
            var c = this.F(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }(a = this.Rb) && a.unsubscribe();
        a = new nc(this);
        this.destination.add(a);
        this.Rb = a;
        pc(c, a)
    };
    m.B = function() {
        var a = this.Rb;
        a && !a.closed || P.prototype.B.call(this);
        this.unsubscribe()
    };
    m.ja = function() {
        this.Rb = void 0
    };
    m.L = function() {
        this.Rb = void 0;
        this.s && P.prototype.B.call(this)
    };
    m.ga = function(a) {
        this.destination.next(a)
    };

    function Ae(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return N(c, new Be(a, b))
        }
    }
    var Be = function(a, b) {
        this.ba = a;
        this.Lc = b
    };
    Be.prototype.call = function(a, b) {
        return b.subscribe(new Ce(a, this.ba, this.Lc))
    };
    var Ce = function(a, b, c) {
        G.call(this, a);
        this.ba = b;
        this.Lc = c;
        this.index = 0
    };
    x(Ce, G);
    Ce.EMPTY = G.EMPTY;
    Ce.create = G.create;
    Ce.prototype.m = function(a) {
        var b = this.destination;
        try {
            var c = this.ba(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.Lc && b.next(a), b.complete())
    };

    function De(a, b, c) {
        return function(d) {
            return N(d, new Ee(a, b, c))
        }
    }
    var Ee = function(a, b, c) {
        this.zf = a;
        this.error = b;
        this.complete = c
    };
    Ee.prototype.call = function(a, b) {
        return b.subscribe(new Fe(a, this.zf, this.error, this.complete))
    };
    var Fe = function(a, b, c, d) {
        G.call(this, a);
        this.jc = this.kc = this.lc = Mc;
        this.kc = c || Mc;
        this.jc = d || Mc;
        vb(b) ? (this.ia = this, this.lc = b) : b && (this.ia = b, this.lc = b.next || Mc, this.kc = b.error || Mc, this.jc = b.complete || Mc)
    };
    x(Fe, G);
    Fe.EMPTY = G.EMPTY;
    Fe.create = G.create;
    Fe.prototype.m = function(a) {
        try {
            this.lc.call(this.ia, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    Fe.prototype.M = function(a) {
        try {
            this.kc.call(this.ia, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    Fe.prototype.B = function() {
        try {
            this.jc.call(this.ia)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };

    function Ge() {
        var a = z.apply(0, arguments);
        return function(b) {
            var c;
            "function" === typeof a[a.length - 1] && (c = a.pop());
            return N(b, new He(a, c))
        }
    }
    var He = function(a, b) {
        this.Da = a;
        this.F = b
    };
    He.prototype.call = function(a, b) {
        return b.subscribe(new Ie(a, this.Da, this.F))
    };
    var Ie = function(a, b, c) {
        Q.call(this, a);
        this.F = c;
        this.Na = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.Na.push(c);
        for (c = 0; c < a; c++) this.add(pc(b[c], new oc(this, void 0, c)))
    };
    x(Ie, Q);
    Ie.EMPTY = Q.EMPTY;
    Ie.create = Q.create;
    Ie.prototype.ga = function(a, b, c) {
        this.values[c] = b;
        b = this.Na;
        0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
    };
    Ie.prototype.L = function() {};
    Ie.prototype.m = function(a) {
        0 === this.Na.length && (a = [a].concat(w(this.values)), this.F ? this.oe(a) : this.destination.next(a))
    };
    Ie.prototype.oe = function(a) {
        try {
            var b = this.F.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var Je = function(a) {
        this.aa = a
    };
    Je.prototype.ping = function() {
        var a = this,
            b = M.apply(null, w(z.apply(0, arguments))).g(Bc(function(c) {
                return Ke(a, c)
            }), Vd(function(c) {
                return c
            }), pe());
        b.connect();
        return b
    };
    var Ke = function(a, b) {
        var c = new Sb(1);
        Le(a.aa, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    p.Object.defineProperties(Je.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.aa.ma()
            }
        }
    });

    function Me(a, b) {
        var c = !1;
        return new J(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var Ne = function(a) {
        this.aa = a;
        this.timeline = qd
    };
    m = Ne.prototype;
    m.setTimeout = function(a, b) {
        return Number(this.aa.setTimeout(function() {
            return a()
        }, b))
    };
    m.clearTimeout = function(a) {
        this.aa.clearTimeout(a)
    };
    m.now = function() {
        return new rd(Date.now(), this.timeline)
    };
    m.interval = function(a) {
        return Me(this, a).g(qe(), he(function(b) {
            return b + 1
        }, -1))
    };
    m.ea = function() {
        return !0
    };
    var Oe = function(a, b, c) {
        this.context = a;
        this.wb = b;
        this.Ud = c
    };
    Oe.prototype.ma = function(a) {
        return (void 0 === a || a === this.Ud) && this.wb.fb
    };
    Oe.prototype.Z = function(a, b) {
        if (!this.ma(b)) throw new ed;
        return new Pe(this.context, this.wb, this.Ud, a)
    };
    var Pe = function(a, b, c, d) {
        var e = this;
        this.wb = b;
        this.method = c;
        this.url = d;
        this.ob = !0;
        this.ze = a.Hc().subscribe(function() {
            e.sendNow()
        })
    };
    Pe.prototype.deactivate = function() {
        this.ob = !1
    };
    Pe.prototype.sendNow = function() {
        if (this.ob)
            if (this.ze.unsubscribe(), this.wb.fb) try {
                this.wb.ping(this.url), this.ob = !1
            } catch (a) {} else this.ob = !1
    };
    p.Object.defineProperties(Pe.prototype, {
        isPending: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob
            }
        }
    });

    function Qe(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new rd(a.timestamp, qd),
            value: b
        }
    };

    function Re(a) {
        return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
    };
    var Ue = function(a, b, c) {
        c = void 0 === c ? null : c;
        cd.call(this);
        this.aa = a;
        this.gg = b;
        this.Ha = c;
        this.ad = new Sb(3);
        this.ad.g(S(function(d) {
            return "sessionStart" === d.value.type
        }));
        this.Rf = this.ad.g(S(function(d) {
            return "sessionFinish" === d.value.type
        }));
        this.Pd = new Sb(1);
        this.hg = new Sb;
        this.Ed = new Sb(1);
        this.i = new Ne(a);
        this.J = new Oe(this, new Je(a), "GET");
        this.pf = this.aa.ma();
        Te(this)
    };
    x(Ue, cd);
    Ue.prototype.validate = function() {
        return this.pf
    };
    var Te = function(a) {
        a.aa.addEventListener("geometryChange", function(e) {
            if (void 0 === e) var f = !1;
            else {
                f = e.data;
                var g;
                (g = void 0 === f) || (g = f.viewport, g = void 0 !== g && "number" === typeof g.width && "number" === typeof g.height);
                g ? (f = f.adView, f = void 0 !== f && "number" === typeof f.percentageInView && Re(f.geometry) && Re(f.onScreenGeometry)) : f = !1
            }
            f && a.Ed.next(Qe(e))
        });
        a.aa.addEventListener("impression", function(e) {
            a.Pd.next(Qe(e))
        });
        for (var b = {}, c = u("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                d = c.next(); !d.done; b = {
                Eb: b.Eb
            }, d = c.next()) b.Eb = d.value, a.aa.addEventListener(b.Eb, function(e) {
            return function(f) {
                f.type === e.Eb && a.hg.next(Qe(f))
            }
        }(b));
        Ve(a.aa, function(e) {
            return void a.ad.next(Qe(e))
        }, a.gg)
    };
    p.Object.defineProperties(Ue.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return We
            }
        }
    });
    var We = {};
    var Xe = {};
    var Ye = function(a) {
        Ye[" "](a);
        return a
    };
    Ye[" "] = function() {};
    var Ze = function(a, b) {
            try {
                return Ye(a[b]), !0
            } catch (c) {}
            return !1
        },
        af = function(a) {
            var b = $e;
            return Object.prototype.hasOwnProperty.call(b, "10") ? b["10"] : b["10"] = a("10")
        };
    var bf = D("Opera"),
        cf = D("Trident") || D("MSIE"),
        df = D("Edge"),
        ef = D("Gecko") && !(-1 != ib().toLowerCase().indexOf("webkit") && !D("Edge")) && !(D("Trident") || D("MSIE")) && !D("Edge"),
        ff = -1 != ib().toLowerCase().indexOf("webkit") && !D("Edge"),
        gf = function() {
            var a = Ba.document;
            return a ? a.documentMode : void 0
        },
        hf;
    a: {
        var jf = "",
            kf = function() {
                var a = ib();
                if (ef) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (df) return /Edge\/([\d\.]+)/.exec(a);
                if (cf) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (ff) return /WebKit\/(\S+)/.exec(a);
                if (bf) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();kf && (jf = kf ? kf[1] : "");
        if (cf) {
            var lf = gf();
            if (null != lf && lf > parseFloat(jf)) {
                hf = String(lf);
                break a
            }
        }
        hf = jf
    }
    var mf = hf,
        $e = {},
        nf = function() {
            return af(function() {
                for (var a = 0, b = gb(String(mf)).split("."), c = gb("10").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                    var f = b[e] || "",
                        g = c[e] || "";
                    do {
                        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                        if (0 == f[0].length && 0 == g[0].length) break;
                        a = hb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || hb(0 == f[2].length, 0 == g[2].length) || hb(f[2], g[2]);
                        f = f[3];
                        g = g[3]
                    } while (0 == a)
                }
                return 0 <= a
            })
        },
        of ;
    if (Ba.document && cf) {
        var pf = gf(); of = pf ? pf : parseInt(mf, 10) || void 0
    } else of = void 0;
    var qf = of ;
    lb();
    kb();
    jb();
    var rf = {},
        sf = null,
        tf = ef || ff || "function" == typeof Ba.btoa,
        uf = function(a) {
            var b;
            C(Da(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            if (!sf) {
                sf = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    rf[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g],
                            l = sf[h];
                        void 0 === l ? sf[h] = g : C(l === g)
                    }
                }
            }
            b = rf[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
                l = a[f];
                var k =
                    a[f + 1];
                h = a[f + 2];
                g = b[l >> 2];
                l = b[(l & 3) << 4 | k >> 4];
                k = b[(k & 15) << 2 | h >> 6];
                h = b[h & 63];
                c[e++] = "" + g + l + k + h
            }
            g = 0;
            h = d;
            switch (a.length - f) {
                case 2:
                    g = a[f + 1], h = b[(g & 15) << 2] || d;
                case 1:
                    a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
            }
            return c.join("")
        };
    var vf = "undefined" !== typeof Uint8Array,
        wf = {};
    var xf, yf = function(a) {
        if (wf !== wf) throw Error("B");
        this.fd = a;
        if (null != a && 0 === a.length) throw Error("C");
    };
    yf.prototype.Tb = function() {
        return null == this.fd
    };
    var zf = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;

    function Af(a, b) {
        Object.isFrozen(a) || (zf ? a[zf] |= b : void 0 !== a.Ja ? a.Ja |= b : Object.defineProperties(a, {
            Ja: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }
    var Bf = Object.getOwnPropertyDescriptor(Array.prototype, "qf");
    Object.defineProperties(Array.prototype, {
        qf: {
            get: function() {
                var a = Cf(this),
                    b = [];
                1 & a && b.push("IS_REPEATED_FIELD");
                2 & a && b.push("IS_IMMUTABLE_ARRAY");
                4 & a && b.push("IS_API_FORMATTED");
                8 & a && b.push("ONLY_MUTABLE_VALUES");
                a = b.join(",");
                return Bf ? Bf.get.call(this) + "|" + a : a
            },
            configurable: !0,
            enumerable: !1
        }
    });

    function Cf(a) {
        Wa(a, "state is only maintained on arrays.");
        a = zf ? a[zf] : a.Ja;
        return null == a ? 0 : a
    }

    function Df(a) {
        Wa(a, "state is only maintained on arrays.");
        Af(a, 1);
        return a
    }

    function Ef(a) {
        return Array.isArray(a) ? !!(Cf(a) & 2) : !1
    }

    function Ff(a) {
        if (!Array.isArray(a)) throw Error("D");
        Af(a, 2)
    }

    function Gf(a, b) {
        if (!Array.isArray(a)) throw Error("F");
        b ? Af(a, 8) : Object.isFrozen(a) || (zf ? a[zf] &= -9 : void 0 !== a.Ja && (a.Ja &= -9))
    };

    function Hf(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var If, Jf = Symbol("exempted jspb subclass"),
        Kf = Symbol("generated by jspb"),
        Lf = Object.freeze(Df([])),
        Mf = function(a) {
            if (Ef(a.l)) throw Error("G");
        },
        Nf = "undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance;

    function Of(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function Pf(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function Qf(a, b) {
        if (!(a instanceof b)) throw Error("H`" + Pf(b) + "`" + (a && Pf(a.constructor)));
        return a
    }

    function Rf(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };
    var Sf = function() {
        throw Error("I");
    };
    if (Nf) {
        var Tf = function() {
                throw Error("J");
            },
            Uf = {};
        Object.defineProperties(Sf, (Uf[Symbol.hasInstance] = Of(Tf), Uf));
        C(Sf[Symbol.hasInstance] === Tf, "defineProperties did not work: was it monkey-patched?")
    };

    function Vf(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (vf && null != a && a instanceof Uint8Array) return uf(a);
                    if (a instanceof yf) {
                        var b = a.fd;
                        null != b && "string" !== typeof b && (vf && b instanceof Uint8Array ? b = uf(b) : (Pa("Cannot coerce to b64 string: " + Ca(b)), b = null));
                        return null == b ? "" : a.fd = b
                    }
                }
        }
        return a
    };

    function Wf(a, b) {
        b = void 0 === b ? Xf : b;
        Wa(a);
        return Yf(a, b)
    }

    function Zf(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Yf(a, b);
            else if (Hf(a)) {
                var c = {},
                    d;
                for (d in a) c[d] = Zf(a[d], b);
                a = c
            } else a = b(a);
            return a
        }
    }

    function Yf(a, b) {
        Wa(a);
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Zf(c[d], b);
        Array.isArray(a) && Cf(a) & 1 && Df(c);
        return c
    }

    function $f(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Vf(a);
        return Array.isArray(a) ? Wf(a, $f) : a
    }

    function Xf(a) {
        return vf && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };
    var ag = function(a) {
            return a.za || (a.za = a.l[a.Wa + a.Fa] = {})
        },
        bg = function(a, b, c) {
            return -1 === b ? null : b >= a.Wa ? a.za ? a.za[b] : void 0 : (void 0 === c ? 0 : c) && a.za && (c = a.za[b], null != c) ? c : a.l[b + a.Fa]
        },
        cg = function(a, b, c, d, e) {
            d = void 0 === d ? !1 : d;
            (void 0 === e ? 0 : e) || Mf(a);
            b < a.Wa && !d ? a.l[b + a.Fa] = c : ag(a)[b] = c;
            return a
        },
        dg = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = bg(a, b, d);
            Array.isArray(e) || (e = Lf);
            if (Ef(a.l)) c && (Ff(e), Object.freeze(e));
            else if (e === Lf || Ef(e)) e = Df(e.slice()), cg(a, b, e, d);
            return e
        },
        eg = function(a, b, c) {
            a = bg(a, b);
            return null == a ? c : a
        },
        fg = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = e;
            if (-1 === c) d = null;
            else {
                a.A || (a.A = {});
                var g = a.A[c];
                if (g) d = g;
                else {
                    var h = bg(a, c, f);
                    b = Rf(h, b, d);
                    void 0 == b ? d = g : (d && b.l !== h && cg(a, c, b.l, f, !0), a.A[c] = b, Ef(a.l) && Ff(b.l), d = b)
                }
            }
            if (null == d) return d;
            Ef(d.l) && !Ef(a.l) && (d = d.dd(Xe), cg(a, c, d.l, e), a.A[c] = d);
            return d
        },
        gg = function(a, b, c, d) {
            Mf(a);
            if (null != d) {
                Wa(d);
                var e = Df([]);
                for (var f = !1, g = 0; g < d.length; g++) e[g] = Qf(d[g], Oa(b)).l, f = f || Ef(e[g]);
                a.A || (a.A = {});
                a.A[c] = d;
                Gf(e, !f)
            } else a.A && (a.A[c] = void 0),
                e = Lf;
            return cg(a, c, e)
        };
    var hg = function(a, b, c) {
        Za(this, hg, "The message constructor should only be used by subclasses");
        C(this.constructor !== hg, "Message is an abstract class and cannot be directly constructed");
        if (!0 !== this[Jf]) {
            C(!0 === this[Kf], "Message can only be subclassed by proto gencode.");
            var d = Object.getPrototypeOf(C(Object.getPrototypeOf(this)));
            C(d.hasOwnProperty(Kf), "Generated jspb classes should not be extended")
        }
        a || (a = ig);
        ig = null;
        d = this.constructor.Pg;
        a || (a = d ? [d] : []);
        this.Fa = (d ? 0 : -1) - (this.constructor.Kg || 0);
        this.A = void 0;
        this.l = a;
        a: {
            d = this.l.length;a = d - 1;
            if (d && (d = this.l[a], Hf(d))) {
                this.Wa = a - this.Fa;
                this.za = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.Wa = Math.max(b, a + 1 - this.Fa), this.za = void 0) : this.Wa = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.Wa) a += this.Fa, (d = this.l[a]) ? Array.isArray(d) && Df(d) : this.l[a] = Lf;
                else {
                    d = ag(this);
                    var e = d[a];
                    e ? Array.isArray(e) && Df(e) : d[a] = Lf
                }
    };
    m = hg.prototype;
    m.toJSON = function() {
        var a = this.l;
        return If ? a : Wf(a, $f)
    };
    m.Za = function() {
        If = !0;
        try {
            return JSON.stringify(this.toJSON(), jg)
        } finally {
            If = !1
        }
    };
    m.getExtension = function(a) {
        Za(this, a.Re);
        return a.Gg(Za(this, hg))
    };
    m.hasExtension = function(a) {
        Za(this, a.Re);
        C(!a.Lg, "repeated extensions don't support hasExtension");
        var b = Za(this, hg);
        return null != bg(b, a.Fg)
    };
    m.clone = function() {
        var a = Za(this, hg),
            b = Wf(a.l);
        Za(a, hg);
        Wa(b);
        ig = b;
        b = new a.constructor(b);
        Za(b, hg);
        ig = null;
        kg(b, a);
        return b
    };
    m.toString = function() {
        return this.l.toString()
    };

    function jg(a, b) {
        return Vf(b)
    }

    function kg(a, b) {
        C(a, "expected `to` to be non-null");
        C(b, "expected `from` to be non-null");
        b.pb && (a.pb = b.pb.slice());
        var c = b.A;
        if (c) {
            b = b.za;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        g = +d;
                    if (Array.isArray(e)) {
                        if (e.length) {
                            var h = a,
                                l = e[0].constructor,
                                k = f;
                            k = void 0 === k ? !1 : k;
                            f = Ef(h.l);
                            var n = h;
                            var t = l,
                                q = k,
                                y = f;
                            y = void 0 === y ? !0 : y;
                            n.A || (n.A = {});
                            var A = Ef(n.l);
                            l = n.A[g];
                            q = dg(n, g, !0, q);
                            var v = A || Ef(q);
                            if (!l) {
                                l = [];
                                A = A || v;
                                for (var E = 0; E < q.length; E++) {
                                    var L = q[E];
                                    A = A || Ef(L);
                                    L = Rf(L, t);
                                    void 0 !== L && (l.push(L),
                                        v && Ff(L.l))
                                }
                                n.A[g] = l;
                                Gf(q, !A)
                            }
                            t = v || y;
                            y = Ef(l);
                            t && !y && (Object.isFrozen(l) && (n.A[g] = l = l.slice()), Ff(l), Object.freeze(l));
                            !t && y && (n.A[g] = l = l.slice());
                            n = l;
                            g = dg(h, g, k);
                            if (!(h = f) && (h = g)) {
                                if (!Array.isArray(g)) throw Error("E");
                                h = !(Cf(g) & 8)
                            }
                            if (h) {
                                for (h = 0; h < n.length; h++)(k = n[h]) && Ef(k.l) && !f && (n[h] = n[h].dd(Xe), g[h] = n[h].l);
                                Gf(g, !0)
                            }
                            f = n;
                            for (g = 0; g < Math.min(f.length, e.length); g++) kg(f[g], Za(e[g], hg))
                        }
                    } else Za(e, hg), (f = fg(a, e.constructor, g, void 0, f)) && kg(f, e)
                }
            }
        }
    }
    var ig;
    var lg = function() {
        hg.call(this, void 0);
        throw Error("M");
    };
    x(lg, hg);
    lg.prototype.clone = function() {
        return hg.prototype.clone.call(this)
    };
    if (Nf) {
        var mg = function() {
                throw Error("N");
            },
            ng = {};
        Object.defineProperties(lg, (ng[Symbol.hasInstance] = Of(mg), ng));
        C(lg[Symbol.hasInstance] === mg, "broken defineProperties implementation")
    };
    C(!0);
    var og = function() {
        hg.apply(this, arguments)
    };
    x(og, hg);
    og.prototype.dd = function() {
        return this
    };
    if (Nf) {
        var pg = function() {
                throw Error("N");
            },
            qg = {};
        Object.defineProperties(og, (qg[Symbol.hasInstance] = Of(pg), qg));
        C(og[Symbol.hasInstance] === pg, "defineProperties did not work: was it monkey-patched?")
    };

    function rg(a, b, c, d, e, f) {
        (a = a.A && a.A[c]) ? Array.isArray(a) ? (e = f.xc ? Df(a.slice()) : a, gg(b, 0 < e.length ? e[0].constructor : void 0, c, e)) : (e = a.constructor, f = Za(a, hg), Mf(b), b.A || (b.A = {}), e = null != f ? Qf(f, Oa(e)).l : f, b.A[c] = f, cg(b, c, e)): (vf && d instanceof Uint8Array ? (e = d, Za(e, Uint8Array), e = e.length ? new yf(new Uint8Array(e)) : xf || (xf = new yf(null))) : (Array.isArray(d) && (e ? Ff(d) : Array.isArray(d) && Cf(d) & 1 && f.xc && (d = d.slice())), e = d), cg(b, c, e))
    };
    var sg = function() {
        og.apply(this, arguments)
    };
    x(sg, og);
    sg.prototype.dd = function(a) {
        if (a !== Xe) throw Error("A");
        if (Ef(this.l)) {
            Za(this, hg);
            a = {
                xc: !0
            };
            var b = Ef(this.l);
            if (b && !a.xc) throw Error("O");
            var c = new this.constructor;
            this.pb && (c.pb = this.pb.slice());
            for (var d = this.l, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && Hf(f))
                    for (h in f) {
                        var g = +h;
                        Number.isNaN(g) ? ag(c)[h] = f[h] : rg(this, c, g, f[h], b, a)
                    } else rg(this, c, e - this.Fa, f, b, a)
            }
            var h = c
        } else h = this;
        return h
    };
    sg.prototype[Kf] = !0;
    if (Nf) {
        var tg = {};
        Object.defineProperties(sg, (tg[Symbol.hasInstance] = Of(Object[Symbol.hasInstance]), tg));
        C(sg[Symbol.hasInstance] === Object[Symbol.hasInstance], "broken defineProperties implementation")
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var ug = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    m = ug.prototype;
    m.clone = function() {
        return new ug(this.x, this.y)
    };
    m.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    m.equals = function(a) {
        return a instanceof ug && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof ug ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var vg = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = vg.prototype;
    m.clone = function() {
        return new vg(this.width, this.height)
    };
    m.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.Tb = function() {
        return !(this.width * this.height)
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var yg = function(a) {
            return a ? new wg(xg(a)) : La || (La = new wg)
        },
        zg = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : ff || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return cf && nf() && a.pageYOffset != b.scrollTop ? new ug(b.scrollLeft, b.scrollTop) : new ug(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Ag = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Da(f) ||
                    Ea(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ea(f)) {
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
                    $a(g ? cb(f) : f, d)
                }
            }
        },
        xg = function(a) {
            C(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Bg = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                C("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        wg = function(a) {
            this.Sa = a || Ba.document ||
                document
        };
    m = wg.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.Sa).getElementsByTagName(String(a))
    };
    m.createElement = function(a) {
        var b = this.Sa;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    m.createTextNode = function(a) {
        return this.Sa.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        C(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        Ag(xg(a), a, arguments)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Dg = function() {
            return !Cg() && (D("iPod") || D("iPhone") || D("Android") || D("IEMobile"))
        },
        Cg = function() {
            return D("iPad") || D("Android") && !D("Mobile") || D("Silk")
        };
    var Eg = function(a) {
        try {
            return !!a && null != a.location.href && Ze(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var Fg = function() {
        var a = void 0 === a ? Ba : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Gg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Hg = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                c && e && queueMicrotask(function() {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                var f = Fg(),
                    g = 3;
                try {
                    var h = b.apply(this, arguments)
                } catch (k) {
                    throw g = 13, k;
                } finally {
                    if (d.google_measure_js_timing && f) {
                        var l = Fg() || 0;
                        Gg(Object.assign({}, {
                            label: a.toString(),
                            value: f,
                            duration: l - f,
                            type: g
                        }, c && e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        }), d)
                    }
                }
                return h
            }
        };
    var Ig = function() {
        Ga.apply(this, arguments)
    };
    x(Ig, Ga);
    Ig.prototype.ra = function(a, b) {
        return Ga.prototype.ra.call(this, a, Hg(a, b))
    };

    function Jg(a, b) {
        return function(c) {
            return new J(function(d) {
                return c.subscribe(function(e) {
                    a.ra(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.ra(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.ra(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var Lg = function() {
        for (var a = u(z.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ea()) {
                this.i = b;
                return
            }
        this.i = new Kg
    };
    m = Lg.prototype;
    m.ea = function() {
        return this.i.ea()
    };
    m.now = function() {
        return this.i.now()
    };
    m.setTimeout = function(a, b) {
        return this.i.setTimeout(a, b)
    };
    m.clearTimeout = function(a) {
        this.i.clearTimeout(a)
    };
    m.interval = function(a) {
        return this.i.interval(a)
    };
    p.Object.defineProperties(Lg.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.i.timeline
            }
        }
    });
    var Kg = function() {
        this.timeline = Symbol()
    };
    m = Kg.prototype;
    m.ea = function() {
        return !1
    };
    m.now = function() {
        return new rd(0, this.timeline)
    };
    m.setTimeout = function() {
        return 0
    };
    m.clearTimeout = function() {};
    m.interval = function() {
        return Nc
    };
    var Mg = function(a, b) {
        this.C = a;
        this.u = b
    };
    Mg.prototype.setTimeout = function(a, b) {
        return this.C.setTimeout(this.u.ra(734, a), b)
    };
    Mg.prototype.clearTimeout = function(a) {
        this.C.clearTimeout(a)
    };
    Mg.prototype.interval = function(a) {
        var b = this;
        return new J(function(c) {
            var d = 0,
                e = b.C.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.C.clearInterval(e)
            }
        })
    };
    Mg.prototype.ea = function() {
        return !!this.C.clearTimeout && !!this.C.setTimeout && !!this.C.setInterval && !!this.C.clearInterval
    };
    var Ng = function(a, b) {
        Mg.call(this, a, b);
        this.timeline = qd
    };
    x(Ng, Mg);
    Ng.prototype.now = function() {
        return new rd(this.C.Date.now(), this.timeline)
    };
    Ng.prototype.ea = function() {
        return !!this.C.Date && !!this.C.Date.now && Mg.prototype.ea.call(this)
    };
    var Og = function(a, b) {
        Mg.call(this, a, b);
        this.timeline = md
    };
    x(Og, Mg);
    Og.prototype.now = function() {
        return new rd(this.C.performance.now(), this.timeline)
    };
    Og.prototype.ea = function() {
        return !!this.C.performance && !!this.C.performance.now && Mg.prototype.ea.call(this)
    };
    var Pg = function(a) {
        this.global = a = void 0 === a ? window : a
    };
    Pg.prototype.ping = function() {
        var a = this;
        return Lc.apply(null, w(z.apply(0, arguments).map(function(b) {
            return zc(a.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(O(function(c) {
                return 200 === c.status
            }))
        }))).g(Vd(function(b) {
            return b
        }), de())
    };
    p.Object.defineProperties(Pg.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !!this.global.fetch
            }
        }
    });
    var Qg = function(a) {
        this.global = a = void 0 === a ? window : a
    };
    Qg.prototype.ping = function() {
        var a = this;
        return M(z.apply(0, arguments).map(function(b) {
            try {
                var c = a.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = void 0 === d ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    p.Object.defineProperties(Qg.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !0
            }
        }
    });
    var Rg = function(a) {
            this.context = a
        },
        Sg = function(a) {
            a = a.context.global;
            if (a.le) return a.le
        };
    Rg.prototype.ma = function() {
        return Tg && void 0 !== Sg(this)
    };
    Rg.prototype.Z = function(a, b) {
        var c = Sg(this);
        if (void 0 === c) throw new ed;
        a = new c(a);
        a.method = void 0 !== b ? b : "GET";
        a.pageHideTimeout = 0;
        return new Ug(a)
    };
    var Tg = !1,
        Ug = function(a) {
            this.Oa = a
        };
    Ug.prototype.deactivate = function() {
        this.Oa.deactivate()
    };
    Ug.prototype.sendNow = function() {
        this.Oa.sendNow()
    };
    p.Object.defineProperties(Ug.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Oa.url
            },
            set: function(a) {
                this.Oa.url = ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1"
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                switch (this.Oa.method) {
                    case "GET":
                        return "GET";
                    case "POST":
                        return "POST";
                    default:
                        return "POST"
                }
            },
            set: function(a) {
                this.Oa.method = a
            }
        },
        isPending: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Oa.isPending
            }
        }
    });
    var Vg = function(a) {
        this.global = a = void 0 === a ? window : a
    };
    Vg.prototype.ping = function() {
        var a = this;
        return M(z.apply(0, arguments).map(function(b) {
            var c;
            return null == (c = a.global.navigator) ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    p.Object.defineProperties(Vg.prototype, {
        fb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return !(null == (a = this.global.navigator) || !a.sendBeacon)
            }
        }
    });

    function Wg(a) {
        return function(b) {
            return b.g(Xg(a, ke(new K)))
        }
    }

    function Y(a) {
        return function(b) {
            return b.g(Xg(a, pe()))
        }
    }

    function Xg(a, b) {
        function c(d) {
            return new J(function(e) {
                return d.subscribe(function(f) {
                    Ia(a, function() {
                        return void e.next(f)
                    })
                }, function(f) {
                    Ia(a, function() {
                        return void e.error(f)
                    })
                }, function() {
                    Ia(a, function() {
                        return void e.complete()
                    })
                })
            })
        }
        return H(c, we(), b, Wb(), c)
    };
    var Z = function(a) {
        this.value = a
    };
    Z.prototype.Ga = function(a) {
        return M(this.value).g(Y(a))
    };
    var Yg = new Z(!0);

    function Zg(a) {
        var b = $g(a);
        return null === b ? new Z(null) : b.g(O(function(c) {
            c = c.Za();
            if (tf) c = Ba.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    255 < g && (d[e++] = g & 255, g >>= 8);
                    d[e++] = g
                }
                c = uf(d)
            }
            return c
        }), Nd(), Y(a.h))
    };

    function ah(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var bh = ["FRAME", "IMG", "IFRAME"],
        ch = /^[01](px)?$/;

    function dh(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }

    function eh(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !0;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        if (a = dh(a)) {
            e || (e = function(fa, B, I) {
                fa.addEventListener(B, I)
            });
            for (var g = !1, h = function(fa) {
                    g || (g = !0, b(fa))
                }, l, k, n = 0; n < bh.length; ++n)
                if (bh[n] == a.tagName) {
                    k = 3;
                    l = [a];
                    break
                }
            l || (l = a.querySelectorAll(bh.join(",")), k = 2);
            var t = 0,
                q = 0,
                y = a = !1;
            n = {};
            for (var A = 0; A < l.length; n = {
                    Fb: n.Fb
                }, A++) {
                var v = l[A];
                if (!("IMG" != v.tagName || !v.complete || v.naturalWidth && v.naturalHeight ? ch.test(v.getAttribute("width")) && ch.test(v.getAttribute("height")) :
                        1)) {
                    if ("IMG" == v.tagName) var E = v.naturalWidth && v.naturalHeight ? !0 : !1;
                    else try {
                        E = "complete" === (v.readyState ? v.readyState : v.contentWindow && v.contentWindow.document && v.contentWindow.document.readyState) ? !0 : !1
                    } catch (fa) {
                        E = void 0 === d ? !1 : d
                    }
                    if (E) a = !0;
                    else {
                        t++;
                        n.Fb = "IMG" === v.tagName;
                        var L = function(fa) {
                            return function() {
                                t--;
                                t || h(k);
                                fa.Fb && (q--, !q && y && h(k))
                            }
                        }(n);
                        e(v, "load", L);
                        n.Fb && (q++, e(v, "error", L))
                    }
                }
            }
            l = null;
            if (0 === t && !a && "complete" === Ba.document.readyState) k = 5;
            else if (t || !a) {
                e(Ba, "load", function() {
                    f && q ?
                        y = !0 : h(4)
                });
                return
            }
            c && h(k)
        }
    };

    function fh(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function gh(a, b) {
        fh(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function hh(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function ih(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function jh(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = ih(a);
            if (c.source && e) {
                var f;
                gh(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && hh(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function kh(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }
    var lh = function(a, b) {
        var c = kh(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ba.addEventListener("message", function(f) {
                    jh(c, e, f)
                })
            }
    };
    var mh = function(a, b) {
            var c = this;
            this.global = a;
            this.Uc = b;
            this.If = this.document ? Lc(M(!0), Gc(this.document, "visibilitychange")).g(Jg(this.Uc.u, 748), O(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), V()) : M("visible");
            this.Ff = this.document ? Gc(this.document, "DOMContentLoaded").g(Jg(this.Uc.u, 739), Nd()) : M(ah("DOMContentLoaded"))
        },
        nh = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        oh = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    mh.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    mh.prototype.querySelectorAll = function(a) {
        return this.document ? cb(this.document.querySelectorAll(a)) : []
    };
    var ph = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    mh.prototype.elementFromPoint = function(a, b) {
        return this.document && ph(this) ? this.document.elementFromPoint(a, b) : null
    };
    var qh = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (!a.document) return M(b);
        var d = new Sb(1),
            e = function() {
                d.next(b)
            };
        c || lh(b, e);
        eh(b, e);
        return d.g(Jg(a.Uc.u, 749), Nd())
    };
    p.Object.defineProperties(mh.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Ze(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var rh = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function sh(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function th(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function uh(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var vh = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = vh.prototype;
    m.Ic = function() {
        return this.right - this.left
    };
    m.Gc = function() {
        return this.bottom - this.top
    };
    m.clone = function() {
        return new vh(this.top, this.right, this.bottom, this.left)
    };
    m.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    m.contains = function(a) {
        return this && a ? a instanceof vh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    m.expand = function(a, b, c, d) {
        Ea(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.translate = function(a, b) {
        a instanceof ug ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Qa(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var wh = new function(a, b) {
        this.Te = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(434462125, !0);
    var xh = [],
        Ah = function() {
            var a = zh;
            C(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
            var b = "Nc";
            if (a.Nc && a.hasOwnProperty(b)) return a.Nc;
            xh.push(a);
            var c = new a;
            a.Nc = c;
            C(a.hasOwnProperty(b), "Could not instantiate singleton.");
            return c
        };
    var zh = function() {
        var a = {};
        this.Xe = function() {
            var b = wh.Te,
                c = wh.defaultValue;
            return null != a[b] ? Xa(a[b]) : c
        }
    };
    var Ch = function(a) {
        sg.call(this, a, -1, Bh)
    };
    x(Ch, sg);
    var Dh = function(a, b) {
            return cg(a, 2, b)
        },
        Eh = function(a, b) {
            return cg(a, 3, b)
        },
        Fh = function(a, b) {
            return cg(a, 4, b)
        },
        Gh = function(a, b) {
            return cg(a, 5, b)
        },
        Hh = function(a, b) {
            return cg(a, 9, b)
        },
        Jh = function(a, b) {
            return gg(a, Ih, 10, b)
        },
        Kh = function(a, b) {
            return cg(a, 11, b)
        },
        Lh = function(a, b) {
            return cg(a, 1, b)
        },
        Ih = function(a) {
            sg.call(this, a)
        };
    x(Ih, sg);
    Ih.prototype.Hd = function() {
        return eg(this, 2, "")
    };
    var Bh = [10, 6];
    var Mh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Nh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Oh(a) {
        var b, c;
        if ("function" !== typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) return null;
        var d = Nh(a);
        if (d.uach_promise) return d.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Mh).then(function(e) {
            null != d.uach || (d.uach = e);
            return e
        });
        return d.uach_promise = a
    }

    function Ph(a) {
        var b;
        return Kh(Jh(Hh(Gh(Fh(Eh(Dh(Lh(new Ch, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Ih;
            d = cg(d, 1, c.brand);
            return cg(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Qh(a) {
        if (Ah().Xe()) {
            var b, c;
            return null != (c = null == (b = Oh(a)) ? void 0 : b.then(function(g) {
                return Ph(g)
            })) ? c : null
        }
        var d, e;
        if ("function" !== typeof(null == (d = a.navigator) ? void 0 : null == (e = d.userAgentData) ? void 0 : e.getHighEntropyValues)) return null;
        var f;
        return null != (f = a.navigator.userAgentData.getHighEntropyValues(Mh).then(function(g) {
            return Ph(g)
        })) ? f : null
    };
    var Rh = function(a, b) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        cd.call(this);
        this.global = a;
        this.Ha = b;
        this.Gf = Gc(this.global, "pagehide").g(Jg(this.u, 941));
        this.Wd = Gc(this.global, "load").g(Jg(this.u, 738), Nd());
        this.Hf = Gc(this.global, "resize").g(Jg(this.u, 741));
        this.onMessage = Gc(this.global, "message").g(Jg(this.u, 740));
        this.document = new mh(this.global, this);
        this.u = new Ig;
        this.i = new Lg(new Og(this.C, this.u), new Ng(this.C, this.u));
        this.J = new ld(new Rg(this), new Oe(this, new Pg(this.global), "GET"), new Oe(this,
            new Vg(this.global), "POST"), new Oe(this, new Qg(this.global), "GET"))
    };
    x(Rh, cd);
    Rh.prototype.Hc = function() {
        return this.Gf.g(Jg(this.u, 942), Y(this.h), O(function() {}))
    };
    var Sh = function(a) {
            var b = new Rh(a.global.top, a.Ha);
            b.J = a.J;
            return b
        },
        Th = function(a, b) {
            b.start();
            return Gc(b, "message").g(Jg(a.u, 740))
        };
    Rh.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    Rh.prototype.Ic = function() {
        return Eg(this.global) ? this.global.width : 0
    };
    Rh.prototype.Gc = function() {
        return Eg(this.global) ? this.global.height : 0
    };
    var Uh = function(a, b) {
        try {
            var c = a.global,
                d = Cg() || Dg();
            try {
                b && (c = c.top);
                a = c;
                d = void 0 === d ? !1 : d;
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new vg(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new vg(g.clientWidth, g.clientHeight)).round()
                    }
                    var h = e
                } catch (q) {
                    h = new vg(-12245933, -12245933)
                }
                b = h;
                var l = zg(yg(c.document).Sa);
                if (-12245933 == b.width) {
                    var k = b.width;
                    var n = new vh(k, k, k, k)
                } else n = new vh(l.y, l.x + b.width,
                    l.y + b.height, l.x);
                var t = n
            } catch (q) {
                t = new vh(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: t.left,
                top: t.top,
                width: t.Ic(),
                height: t.Gc()
            }
        } catch (q) {
            return rh
        }
    };
    Rh.prototype.validate = function() {
        return this.global && this.i.ea() && this.J.ma()
    };
    var $g = function(a) {
        return (a = Qh(a.global)) ? zc(a) : null
    };
    p.Object.defineProperties(Rh.prototype, {
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Ta: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !Eg(this.global.top)
            }
        },
        Kc: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ta || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.C.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.C.ResizeObserver
            }
        },
        mf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                C(!0, "Major version must be an integer");
                var a = ib();
                if (D("Trident") || D("MSIE")) {
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
                } else a = "";
                "" === a ? a = NaN : (a = a.split("."),
                    a = 0 === a.length ? NaN : Number(a[0]));
                return 8 <= a
            }
        },
        De: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var Vh = !cf && !jb(),
        Wh = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (Vh && a.dataset) {
                if (lb() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var Xh = {},
        Yh = (Xh["data-google-av-cxn"] = "_avicxn_", Xh["data-google-av-cpmav"] = "_cvu_", Xh["data-google-av-metadata"] = "_avm_", Xh["data-google-av-adk"] = "_adk_", Xh["data-google-av-btr"] = void 0, Xh["data-google-av-override"] = void 0, Xh["data-google-av-dm"] = void 0, Xh["data-google-av-immediate"] = void 0, Xh["data-google-av-aid"] = void 0, Xh["data-google-av-naid"] = void 0, Xh["data-google-av-inapp"] = void 0, Xh["data-google-av-slift"] = void 0, Xh["data-google-av-itpl"] = void 0, Xh["data-google-av-ext-cxn"] = void 0, Xh["data-google-av-rs"] =
            void 0, Xh["data-google-av-flags"] = void 0, Xh),
        Zh = {},
        $h = (Zh["data-google-av-adk"] = "googleAvAdk", Zh["data-google-av-btr"] = "googleAvBtr", Zh["data-google-av-cpmav"] = "googleAvCpmav", Zh["data-google-av-dm"] = "googleAvDm", Zh["data-google-av-ext-cxn"] = "googleAvExtCxn", Zh["data-google-av-immediate"] = "googleAvImmediate", Zh["data-google-av-inapp"] = "googleAvInapp", Zh["data-google-av-itpl"] = "googleAvItpl", Zh["data-google-av-metadata"] = "googleAvMetadata", Zh["data-google-av-naid"] = "googleAvNaid", Zh["data-google-av-override"] =
            "googleAvOverride", Zh["data-google-av-rs"] = "googleAvRs", Zh["data-google-av-slift"] = "googleAvSlift", Zh["data-google-av-cxn"] = "googleAvCxn", Zh["data-google-av-aid"] = void 0, Zh["data-google-av-flags"] = "googleAvFlags", Zh);

    function ai(a, b) {
        try {
            var c = a.getAttribute(b);
            if (null !== c) return c
        } catch (f) {}
        try {
            var d = Yh[b];
            if (d && (c = a[d], void 0 !== c)) return c
        } catch (f) {}
        try {
            var e = $h[b];
            if (e) return Wh(a, e)
        } catch (f) {}
        return null
    }

    function bi(a) {
        return O(function(b) {
            return ai(b, a)
        })
    };
    var ci = H(bi("data-google-av-cxn"), O(function(a) {
        if (!a) throw new hd;
        return a.split("|")
    }));
    var di = function() {
        return H(Bc(function(a) {
            return a.element.g(ci, vd(function() {
                return M([""])
            })).g(O(function(b) {
                return {
                    sa: b,
                    Mb: a
                }
            }))
        }), Id(function(a) {
            return a.sa.sort().join(";")
        }), O(function(a) {
            return a.Mb
        }))
    };
    var fi = function() {
            return Bc(function(a) {
                return zc(ei(a)).g(Wg(a.h))
            })
        },
        ei = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass")
        };

    function gi(a) {
        var b = a.Wd,
            c = a.document.Ff;
        return Lc(M({}), c, b).g(O(function() {
            return a
        }))
    };
    var ii = O(hi);

    function hi(a) {
        var b = Number(ai(a, "data-google-av-rs"));
        return isNaN(b) || 0 === b ? (a = a.id) ? 0 == a.lastIndexOf("DfaVisibilityIdentifier", 0) ? 6 : 0 == a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) ? 15 : 0 == a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) ? 17 : 0 == a.lastIndexOf("YtKabukiVisibilityIdentifier", 0) ? 18 : 0 : 0 : b
    };

    function ji(a, b) {
        b = void 0 === b ? Kb : b;
        return Lc(gi(a), b).g(fi(), Id(), Y(a.h))
    };

    function ki(a, b) {
        return new J(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = [];
            b.forEach(function(l, k) {
                h.push(l.subscribe(function(n) {
                    a.ae ? (e[k] = n, f.add(k), d || (d = !0, Ja(a, function() {
                        d = !1;
                        c.next(cb(e))
                    }))) : c.error(new id(k))
                }, function(n) {
                    g.add(k);
                    f.add(k);
                    Ja(a, function() {
                        c.error(n)
                    })
                }, function() {
                    g.add(k);
                    Ja(a, function() {
                        g.size === b.length && c.complete()
                    })
                }))
            })
        })
    };

    function li(a, b, c) {
        function d() {
            if (b.Ha) {
                var v = b.Ha,
                    E = v.next;
                var L = {
                    Bg: c,
                    Wg: e,
                    Yg: Object.assign({}, f),
                    Ig: g,
                    errorMessage: h,
                    Eg: l
                };
                L = {
                    Wf: 1,
                    Xf: 0,
                    Yf: 0,
                    timestamp: sd(b.i.now(), new rd(0, b.i.timeline)),
                    Sb: b.Sb,
                    messageType: 2,
                    Cg: L
                };
                E.call(v, L)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, l = null, k = {}, n = new Set, t = [], q = {}, y = u(e), A = y.next(); !A.done; q = {
                S: q.S
            }, A = y.next()) q.S = A.value, A = a[q.S], A instanceof Z ? (k[q.S] = A.value, n.add(q.S), f[String(q.S)] = ud(A.value)) : (A = A.g(V(), O(function(v) {
            return function(E) {
                f[String(v.S)] =
                    ud(E);
                d();
                var L = {};
                return L[v.S] = E, L
            }
        }(q)), vd(function(v) {
            return function(E) {
                if (E instanceof id) throw new kd(String(v.S));
                throw E;
            }
        }(q)), De(function(v) {
            return function() {
                n.add(v.S)
            }
        }(q), function(v) {
            return function(E) {
                l = String(v.S);
                h = String(E);
                d()
            }
        }(q), function(v) {
            return function() {
                n.has(v.S) || (g = !0, d())
            }
        }(q))), t.push(A));
        (a = 0 < Object.keys(f).length) && d();
        q = ki(b.h, t).g(vd(function(v) {
            if (v instanceof id) throw new jd(e[v.ff]);
            throw v;
        }), O(function(v) {
            return Object.freeze(Object.assign.apply(Object, [{},
                k
            ].concat(w(v))))
        }));
        return (t = 0 < t.length) && a ? Lc(M(Object.freeze(k)), q) : t ? q : M(Object.freeze(k))
    };

    function mi(a, b, c, d) {
        var e = ni(oi(ni(pi, qi), ri), si, ti);
        return a.u.ra.bind(a.u)(733, function() {
            function f() {
                if (a.Ha) {
                    var k = a.Ha,
                        n = k.next;
                    var t = {
                        Ng: [].concat(w(h.values())),
                        Hg: l
                    };
                    t = {
                        Wf: 1,
                        Xf: 0,
                        Yf: 0,
                        timestamp: sd(a.i.now(), new rd(0, a.i.timeline)),
                        Sb: a.Sb,
                        messageType: 1,
                        Jg: t
                    };
                    n.call(k, t)
                }
            }
            var g = {},
                h = new Set,
                l = !1;
            try {
                return b.g(vd(function(k) {
                    d(Object.assign({}, g, {
                        error: k
                    }));
                    return Kb
                }), De(function() {}, function() {}, function() {
                    l = !0;
                    f()
                }), Bc(function(k) {
                    h.add(k.kb);
                    f();
                    try {
                        var n = c(a, k)
                    } catch (q) {
                        return d(Object.assign({},
                            g, {
                                error: q instanceof Error ? q : String(q)
                            })), Kb
                    }
                    var t = {};
                    return li(n, a, k.kb).g(De(function(q) {
                        t = q
                    }), pe(), Wb()).g(e, vd(function(q) {
                        d(Object.assign({}, t, {
                            error: q
                        }));
                        return Kb
                    }), Ud(void 0), O(function() {
                        h.delete(k.kb) && f();
                        return !0
                    }))
                })).g(he(function(k) {
                    return k + 1
                }, 0), vd(function(k) {
                    d(Object.assign({}, g, {
                        error: k
                    }));
                    return Kb
                }))
            } catch (k) {
                return d(Object.assign({}, g, {
                    error: k
                })), Kb
            }
        })()
    };
    var si = H(O(function(a) {
        var b = a.J,
            c = a.rc,
            d = a.hd;
        return void 0 === b || void 0 === c || void 0 === d ? !1 : a.kf ? (d(c, a).forEach(function(e) {
            b.Z(e).sendNow()
        }), !0) : void 0 !== a.Cc ? !0 : !1
    }), Ae(function(a) {
        return !a
    }), Yd());

    function ui(a, b) {
        var c = vi,
            d = wi,
            e = xi;
        b = void 0 === b ? .01 : b;
        return function(f) {
            0 < b && Math.random() <= b && (f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                zd: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Me: f.error instanceof Error && f.error.name ? String(f.error.name) : null,
                Le: String(a.u.ie)
            }), d(Object.assign({}, f, {
                ha: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                sa: [c]
            })).forEach(function(g) {
                a.J.Z(g).sendNow()
            }))
        }
    };
    var ti = H(O(function(a) {
        var b = a.J,
            c = a.Se;
        if (void 0 === b || void 0 === c) return !1;
        if (void 0 !== a.Cc) return !0;
        if (null === c) return !1;
        for (a = 0; a < c; a++) b.Z("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
        return !0
    }), Ae(function(a) {
        return !a
    }), Yd());
    var xi = function(a) {
        return {
            id: a.Vc,
            mcvt: a.sf,
            p: a.Ac,
            asp: a.xg,
            mtos: a.Td,
            tos: a.he,
            v: a.Be,
            bin: a.Ae,
            avms: a.wf,
            bs: a.Ce,
            mc: a.tf,
            "if": a.He,
            vu: a.Je,
            app: a.ya,
            mse: a.Qc,
            mtop: a.Rc,
            itpl: a.Mc,
            adk: a.qc,
            exk: a.zg,
            rs: a.qa,
            la: a.nf,
            cr: a.Oc,
            uach: a.ed,
            vs: a.gd,
            r: a.Xc,
            pay: a.af,
            rst: a.ue,
            rpt: a.te,
            isd: a.ef,
            lsd: a.rf,
            context: a.Le,
            msg: a.errorMessage,
            stack: a.zd,
            name: a.Me,
            ec: a.bf,
            sfr: a.bd,
            met: a.ib,
            wmsd: a.jd,
            pv: a.Sg,
            epv: a.Dg
        }
    };

    function ni() {
        var a = z.apply(0, arguments);
        return function(b) {
            var c = b.g(pe(), Wb());
            b = a.map(function(d) {
                return c.g(d, Ud(!0))
            });
            return R(b).g(Nd(), Yd())
        }
    };

    function oi() {
        var a = z.apply(0, arguments);
        return function(b) {
            var c = b.g(pe(), Wb());
            b = a.map(function(d) {
                return c.g(d, Ud(!0))
            });
            return Lc.apply(null, w(b)).g(Nd(), Yd())
        }
    };
    var qi = function(a) {
        var b = [];
        return a.g(O(function(c) {
            var d = c.J,
                e = c.he,
                f = c.cg,
                g = c.ha,
                h = c.bg,
                l = c.bc,
                k = c.Cb,
                n = c.Ld,
                t = c.df;
            if (!c.Gd || !n || void 0 === c.Td || void 0 === e || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === d || !t && !l) return !1;
            c = k(Object.assign({}, c, {
                Vc: h,
                gd: c.je ? 4 : 3,
                Xc: null != l ? l : "u",
                ha: g,
                sa: f
            }));
            if (t) {
                for (; b.length > f.length;) t = void 0, null == (t = b.shift()) || t.deactivate();
                c.forEach(function(q, y) {
                    y >= b.length ? b.push(d.Z(q)) : b[y].url = q
                });
                return void 0 !== l
            }
            return void 0 !== l ? (c.forEach(function(q) {
                d.Z(q).sendNow()
            }), !0) : !1
        }), Ae(function(c) {
            return !c
        }), Yd())
    };

    function yi(a) {
        return function(b) {
            return b.g(O(function(c) {
                a.ae || Pa("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function zi(a) {
        return function(b) {
            return new J(function(c) {
                var d = !1,
                    e = b.g(yi(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Ia(a, function() {
                    d || c.next(null)
                });
                return e
            })
        }
    };

    function Ai(a, b) {
        return function(c) {
            return c.g(X(function(d) {
                return new J(function(e) {
                    var f = a.MutationObserver;
                    if (f) {
                        var g = new f(function(h) {
                            e.next(h)
                        });
                        g.observe(d, b);
                        return function() {
                            g.disconnect()
                        }
                    }
                })
            }))
        }
    };
    var Bi = {
        wg: 0,
        ng: 1,
        pg: 2,
        og: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function Ci(a, b) {
        var c = b.g(Ai(a, {
            attributes: !0
        }), Y(a.h));
        return R([b, c.g(Y(a.h), zi(a.h))]).g(O(function(d) {
            return u(d).next().value
        }), bi("data-google-av-dm"), O(Di))
    }

    function Di(a) {
        return a && a in Bi ? Number(a) : 2
    };

    function Ei(a) {
        if (3 === a.vf) return null;
        if (void 0 !== a.bc) {
            var b = !1 === a.Ge ? "n" : !1 === a.Gd && a.bc ? a.bc : null;
            if (null !== b) return b
        }
        return a.Fc instanceof U ? "msf" : a.wc instanceof dd ? "c" : !1 === a.Fe ? "pv" : a.Fc || a.wc ? "x" : null
    }
    var ri = H(O(function(a) {
        var b = Ei(a);
        if (null === b) return !1;
        var c = a.J;
        if (void 0 === a.Pb || void 0 === a.ha || void 0 === a.Cb || void 0 === a.Qb || void 0 === c) return !1;
        var d = void 0;
        if ("x" === b) {
            var e, f = null != (e = a.Fc) ? e : a.wc;
            if (f) {
                var g = f.stack;
                d = f.message
            }
        }
        a.Cb(Object.assign({}, a, {
            sa: a.Pb,
            ha: a.ha,
            Vc: a.Qb,
            gd: 2,
            Xc: b,
            errorMessage: d,
            zd: g
        })).forEach(function(h) {
            c.Z(h).sendNow()
        });
        return !0
    }), S(function(a) {
        return a
    }), Nd(), Yd());

    function Fi(a) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(Fi).join(",") : a instanceof rd ? a.toString() : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function Gi(a) {
        a = Object.entries(a).map(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            c = Fi(c);
            return null === c ? "" : b + "=" + c
        }).filter(function(b) {
            return "" !== b
        });
        return a.length ? a.join("&") : ""
    };

    function wi(a) {
        var b = a.ha(a),
            c = Gi(b);
        return c ? ab(a.sa, function(d) {
            d = 0 <= d.indexOf("?") ? d : d + "?";
            d = 0 <= "?&".indexOf(d.slice(-1)) ? d : d + "&";
            return d + c
        }) : a.sa
    };

    function Hi(a, b) {
        return ab(a, function(c) {
            if ("string" === typeof b.ed) {
                var d = "&" + Gi({
                    uach: b.ed
                });
                return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var pi = H(Ae(function(a) {
        return void 0 === a.Cc
    }), S(function(a) {
        var b = a.je;
        return !!a.Ld && !!b
    }), O(function(a) {
        var b = a.J;
        if (void 0 === a.ha || void 0 === a.Pb || void 0 === a.Cb || void 0 === a.Qb || void 0 === b) return !1;
        var c = a.Cb(Object.assign({}, a, {
                sa: a.Pb,
                ha: a.ha,
                Vc: a.Qb,
                gd: 4,
                Xc: "v"
            })),
            d = a.yc;
        d && 0 < d.length && a.hd && a.hd(d, a).forEach(function(e) {
            b.Z(e).sendNow()
        });
        c.forEach(function(e) {
            b.Z(e).sendNow()
        });
        return !0
    }), Ae(function(a) {
        return !a
    }), Yd());

    function Ii(a) {
        return H(O(function(b) {
            var c;
            return null != (c = null == b ? void 0 : Ji(b, a)) ? c : !1
        }), O(function(b) {
            return b ? !0 : null
        }))
    };

    function Ki() {
        var a = Li;
        return H(O(function(b) {
            var c;
            return null != (c = null == b ? void 0 : Ji(b, a)) ? c : !1
        }), O(function(b) {
            return "number" === typeof b ? b : null
        }))
    };

    function Mi(a) {
        return H(O(function() {
            return !0
        }), W(!1), Y(a))
    };

    function Ni(a) {
        return 0 >= a.length ? Kb : R(a.map(function(b) {
            var c = 0;
            return b.g(O(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(S(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), O(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function Oi(a, b) {
        a.xd && (a.Wc = a.xd);
        a.xd = b;
        a.Wc && a.Wc.value ? (b = Math.max(0, sd(b.timestamp, a.Wc.timestamp)), a.totalTime += b, a.hb += b) : a.hb = 0;
        return a
    }

    function Pi() {
        return H(he(Oi, {
            totalTime: 0,
            hb: 0
        }), O(function(a) {
            return a.totalTime
        }))
    }

    function Qi() {
        return H(he(Oi, {
            totalTime: 0,
            hb: 0
        }), O(function(a) {
            return a.hb
        }))
    };

    function Ri(a, b) {
        return H(bi("data-google-av-metadata"), O(function(c) {
            if (null === c) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            return 0 === c.length ? b(void 0) : b(c[0].slice(1).join("="))
        }))
    };
    var Si = {
        lg: "asmreq",
        mg: "asmres"
    };
    var Ti = function(a) {
        sg.call(this, a)
    };
    x(Ti, sg);
    Ti.prototype.ce = function(a) {
        cg(this, 1, a)
    };
    var Ui = function(a) {
        sg.call(this, a)
    };
    x(Ui, sg);
    Ui.prototype.ce = function(a) {
        cg(this, 1, a)
    };
    var Vi = function(a) {
        sg.call(this, a)
    };
    x(Vi, sg);

    function Wi(a, b) {
        var c = void 0 === c ? Sh(a) : c;
        var d = new MessageChannel;
        b = b.g(O(function(f) {
            return Number(f)
        }), S(function(f) {
            return !isNaN(f) && 0 !== f
        }), De(function(f) {
            var g = new Ti;
            g.ce(f);
            f = {
                type: "asmreq",
                payload: g.Za()
            };
            c.postMessage(f, "*", [d.port2])
        }), Nd());
        var e = Th(a, d.port1).g(S(function(f) {
            return "object" === typeof f.data
        }), O(function(f) {
            var g = f.data,
                h = Object.values(Si).includes(g.type);
            g = "string" === typeof g.payload;
            if (!h || !g || "asmres" !== f.data.type) return null;
            try {
                var l = f.data.payload;
                Ua(Ui);
                if (null ==
                    l || "" == l) var k = Za(new Ui, hg);
                else {
                    Ra(l);
                    var n = JSON.parse(l);
                    if (!Array.isArray(n)) throw Error("L`" + Ca(n) + "`" + n);
                    ig = n;
                    var t = new Ui(n);
                    ig = null;
                    Za(t, hg);
                    k = t
                }
                return k
            } catch (q) {
                return null
            }
        }), S(function(f) {
            return null !== f
        }), O(function(f) {
            return f
        }));
        return b.g(X(function(f) {
            return M(f).g(zd(e))
        }), S(function(f) {
            var g = u(f);
            f = g.next().value;
            g = g.next().value;
            return null != bg(g, 1) ? eg(g, 1, 0) === f : !1
        }), O(function(f) {
            f = u(f);
            f.next();
            return f.next().value
        }), Wg(a.h))
    };

    function Xi(a, b, c) {
        var d = b.tb.g(Nd(), X(function() {
            return Wi(a, c)
        }), S(function(f) {
            var g = bg(f, 2);
            g = null == g ? g : !!g;
            return (null == g ? !1 : g) && Array.isArray(bg(f, 3)) && null != bg(f, 4) && null != bg(f, 5)
        }), Nd(), Wg(a.h));
        b = d.g(O(function(f) {
            var g = fg(f, Vi, 3);
            g = eg(g, 2, 0);
            f = fg(f, Vi, 3);
            return {
                x: g,
                y: eg(f, 1, 0)
            }
        }), V(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), Y(a.h));
        var e = d.g(O(function(f) {
            return eg(f, 4, 0)
        }), Y(a.h));
        d = d.g(O(function(f) {
            return eg(f, 5, 0)
        }), Y(a.h));
        return {
            ef: e,
            we: b,
            rf: d
        }
    };

    function Yi(a, b) {
        return b.tb.g(Nd(), O(function() {
            return a.i.now().round()
        }))
    };

    function Zi(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var $i = O(function(a) {
        return [a.value.G.width, a.value.G.height]
    });

    function aj(a, b) {
        return function(c) {
            return Ni(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function bj() {
        var a;
        return H(De(function(b) {
            return void(a = b.timestamp)
        }), Qi(), O(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var cj = {
        P: "ns",
        N: rh,
        G: rh,
        O: new K,
        K: "ns",
        D: rh,
        I: rh,
        R: {
            x: 0,
            y: 0
        }
    };

    function dj(a, b) {
        return sh(a.G, b.G) && sh(a.D, b.D) && sh(a.N, b.N) && sh(a.I, b.I) && a.K === b.K && a.O === b.O && a.P === b.P && a.R.x === b.R.x && a.R.y === b.R.y
    };
    var ej = function(a) {
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

    function fj(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(ke(new K), Wb());
                d = c.element.g(V());
                e = e.g(O(function(f) {
                    return f.value
                }));
                return R([d, e, b]).g(O(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    var l = f.getBoundingClientRect();
                    var k = a.global,
                        n = new ug(0, 0);
                    var t = (t = xg(f)) ? t.parentWindow || t.defaultView : window;
                    if (Ze(t, "parent")) {
                        var q = f;
                        do {
                            if (t == k) {
                                var y = q,
                                    A = xg(y);
                                Va(y, "Parameter is required");
                                var v = new ug(0, 0);
                                var E = A ? xg(A) : document;
                                E = !cf || 9 <= Number(qf) || "CSS1Compat" ==
                                    yg(E).Sa.compatMode ? E.documentElement : E.body;
                                y != E && (y = ej(y), A = zg(yg(A).Sa), v.x = y.left + A.x, v.y = y.top + A.y)
                            } else v = C(q), v = ej(v), v = new ug(v.left, v.top);
                            n.x += v.x;
                            n.y += v.y
                        } while (t && t != k && t != t.parent && (q = t.frameElement) && (t = t.parent))
                    }
                    l = uh({
                        top: n.y,
                        left: n.x,
                        width: l.width,
                        height: l.height
                    }, h.R);
                    k = th(l, h.N);
                    n = a.i.now();
                    t = Object;
                    q = t.assign;
                    if (2 !== g || a.Ta || 0 >= k.width || 0 >= k.height) var L = !1;
                    else try {
                        var fa = a.document.elementFromPoint(k.left + k.width / 2, k.top + k.height / 2);
                        L = fa ? !gj(fa, f) : !1
                    } catch (B) {
                        L = !1
                    }
                    return {
                        timestamp: n,
                        value: q.call(t, {}, h, {
                            K: "geo",
                            I: L ? cj.I : k,
                            D: l
                        })
                    }
                }), Wg(a.h))
            }
        }
    }

    function gj(a, b, c) {
        c = void 0 === c ? 0 : c;
        return a === b || Bg(b, function(d) {
            return d === a
        }) ? !0 : b.ownerDocument && b.ownerDocument.defaultView && b.ownerDocument.defaultView === b.ownerDocument.defaultView.top ? !1 : 10 > c && b.ownerDocument && b.ownerDocument.defaultView && b.ownerDocument.defaultView.frameElement ? gj(a, b.ownerDocument.defaultView.frameElement, c + 1) : !0
    };

    function hj(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? ij(a) : jj(a), pe(), Wb())
        }
    }

    function ij(a) {
        return function(b) {
            return b.g(X(function(c) {
                var d = a.ResizeObserver;
                if (!d) return M(cj.D);
                var e = (new J(function(f) {
                    var g = new d(function(h) {
                        h.forEach(function(l) {
                            f.next(l)
                        })
                    });
                    g.observe(c);
                    return function() {
                        g.disconnect()
                    }
                })).g(Jg(a.u, 736), O(function(f) {
                    return f.contentRect
                }));
                return Lc(M(c.getBoundingClientRect()), e)
            }), V(sh))
        }
    }

    function jj(a) {
        return function(b) {
            var c = b.g(Ai(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.Hf;
            c = Lc(b.g(O(function() {
                return ah("resize")
            })), c, d);
            return R(b, c).g(Jg(a.u, 737), O(function(e) {
                return u(e).next().value.getBoundingClientRect()
            }), V(sh))
        }
    };

    function kj(a, b) {
        var c = lj(a, b).g(pe(), Wb());
        return function(d) {
            d = d.g(X(function(e) {
                return e.element
            }), V());
            return R([c, d]).g(X(function(e) {
                var f = u(e);
                e = f.next().value;
                f = f.next().value;
                return mj(a, e.hf, hj(a), e.Cf, e.Ue, f)
            }), Wg(a.h))
        }
    }

    function nj(a, b) {
        var c = kj(a, b);
        return function(d) {
            var e = c(M(d));
            return function(f) {
                return R([f, e]).g(O(function(g) {
                    var h = u(g);
                    g = h.next().value;
                    h = h.next().value;
                    var l = uh(h.value.D, g.value.R),
                        k = th(uh(h.value.I, g.value.R), g.value.N);
                    return {
                        timestamp: g.timestamp.maximum(h.timestamp),
                        value: Object.assign({}, g.value, {
                            K: "nio",
                            I: k,
                            D: l
                        })
                    }
                }))
            }
        }
    }

    function oj(a) {
        return O(function(b) {
            return "nio" !== b.value.P ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    N: Uh(a, !0),
                    G: Uh(a, !0)
                })
            })
        })
    }

    function pj(a, b) {
        return M(b).g(a, O(function() {
            return b
        }))
    }

    function lj(a, b) {
        return a.i.timeline !== md ? Qb(new U(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? Qb(new U(0)) : (new J(function(c) {
            var d = new K,
                e = new IntersectionObserver(d.next.bind(d), {
                    threshold: [].concat(w(b))
                });
            c.next({
                Cf: d.g(Jg(a.u, 735)),
                hf: e,
                Ue: function() {
                    var f = e.takeRecords();
                    0 < f.length && d.next(f)
                }
            })
        })).g(Nd(), pe(), Wb()) : Qb(new U(1))
    }

    function qj(a) {
        return xc(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function mj(a, b, c, d, e, f) {
        return new J(function(g) {
            b.observe(f);
            var h = new Jb({
                    timestamp: a.i.now(),
                    value: Object.assign({}, cj, {
                        P: "nio",
                        K: "nio"
                    })
                }),
                l = d.g(Bc(function(q) {
                    return qj(q)
                }), S(function(q) {
                    return q.target === f
                }), O(function(q) {
                    return {
                        timestamp: new rd(q.time, md),
                        value: {
                            P: "nio",
                            N: q.rootBounds || rh,
                            G: q.rootBounds || Uh(a, !0),
                            O: k,
                            K: "nio",
                            I: q.intersectionRect,
                            D: q.boundingClientRect,
                            R: {
                                x: 0,
                                y: 0
                            }
                        }
                    }
                }), ke(h), Wb()).subscribe(g),
                k = new K,
                n = k.subscribe(function() {
                    e();
                    g.next({
                        timestamp: a.i.now(),
                        value: h.value.value
                    });
                    b.unobserve(f);
                    b.observe(f)
                }),
                t = pj(c, f).subscribe(function() {
                    k.next()
                });
            return function() {
                b.unobserve(f);
                l.unsubscribe();
                t.unsubscribe();
                n.unsubscribe()
            }
        })
    };

    function rj(a, b) {
        var c = a.Hc().g(O(function() {
            return "b"
        }));
        return Qc(b, c).g(Nd(), Y(a.h))
    };

    function sj(a) {
        return function(b) {
            var c;
            return b.g(De(function(d) {
                return void(c = d.timestamp)
            }), O(function(d) {
                return d.value
            }), a, O(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var tj = sj(H(O(function(a) {
        var b;
        return null != (b = a.Ec) ? b : a.I.width * a.I.height / (a.D.width * a.D.height)
    }), O(function(a) {
        return isFinite(a) ? a : 0
    })));

    function uj(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function vj(a) {
        if (!a.children) return a;
        for (var b = cb(a.children); b.length;) {
            var c = b.filter(uj);
            if (1 === c.length) return c[0];
            if (1 < c.length) break;
            b = fb(b, function(d) {
                return cb(d.children)
            })
        }
        return a
    }

    function wj(a, b, c, d) {
        if (c) return {
            Mb: b,
            La: M(null)
        };
        c = b.element.g(O(function(e) {
            a: if (uj(e)) e = {
                    Vb: e,
                    La: "mue"
                };
                else {
                    var f = vj(e);
                    if (uj(f)) e = {
                        Vb: f,
                        La: "ie"
                    };
                    else {
                        if (d || a.Kc)
                            if (f = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                e = {
                                    Vb: f,
                                    La: "ce"
                                };
                                break a
                            }
                        e = {
                            Vb: e,
                            La: "mue"
                        }
                    }
                }return e
        }), ue());
        return {
            Mb: {
                kb: b.kb,
                element: c.g(O(function(e) {
                    return e.Vb
                }))
            },
            La: c.g(O(function(e) {
                return e.La
            }))
        }
    };

    function xj(a) {
        return function(b) {
            return b.g(Ge(a), O(function(c) {
                var d = u(c);
                c = d.next().value;
                d = d.next().value;
                var e = c.value;
                return {
                    timestamp: c.timestamp,
                    value: 1 <= e ? !0 : 0 >= e ? !1 : e >= d
                }
            }))
        }
    };
    var yj = O(function(a) {
        if ("omid" === a.value.P) {
            if ("nio" === a.value.K) return "omio";
            if ("geo" === a.value.K) return "omgeo"
        }
        return "geo" === a.value.K || "nio" === a.value.K ? a.value.P : a.value.K
    });

    function zj() {
        return H(S(function(a, b) {
            return 0 < b
        }), Aj, W(-1), V())
    }
    var Aj = H(S(function(a) {
        return !isNaN(a)
    }), he(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), V());
    var Bj = sj(H(O(function(a) {
        return a.I.width * a.I.height / (a.N.width * a.N.height)
    }), O(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function Cj(a, b, c) {
        return a ? R([b, c]).g(S(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp === e.timestamp
        }), O(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function Dj(a) {
        return function(b) {
            var c = b.g(tj),
                d = b.g(Bj);
            return a instanceof J ? a.g(X(function(e) {
                return Cj(e, c, d)
            })) : Cj(a.value, c, d)
        }
    };
    var Ej = H(O(function(a) {
        return a.value
    }), O(function(a) {
        a = a.Ec ? a.Ec * a.D.width * a.D.height / (a.G.width * a.G.height) : a.I.width * a.I.height / (a.G.width * a.G.height);
        return isFinite(a) ? a : 0
    }));

    function Fj(a, b, c, d) {
        var e = d.Fd,
            f = d.Ad,
            g = d.ig,
            h = d.xe,
            l = d.Sd,
            k = d.uf;
        d = d.Nd;
        b = Gj(a, c, b);
        c = Hj(a, c);
        var n = Ij(a, e, k, b),
            t = n.g(O(function(B) {
                return B.value
            }), V(), Y(a), he(function(B, I) {
                return Math.max(B, I)
            }, 0)),
            q = n.g(O(function(B) {
                return B.value
            }), zj(), Y(a));
        g = Jj(a, b, g, h);
        var y = g.g(W(!1), V(), O(function(B) {
            return B ? l : f
        }));
        h = n.g(xj(y), V(), Y(a));
        var A = R([h, b]).g(S(function(B) {
            var I = u(B);
            B = I.next().value;
            I = I.next().value;
            return B.timestamp === I.timestamp
        }), O(function(B) {
            var I = u(B);
            B = I.next().value;
            I = I.next().value;
            return {
                visible: B.value,
                geometry: I.value.D
            }
        }), he(function(B, I) {
            return !I.visible && B.visible ? B : I
        }, {
            visible: !1,
            geometry: rh
        }), O(function(B) {
            return B.geometry
        }), W(rh), Y(a), V(sh));
        k = k instanceof J ? k.g(V(), ee()) : Nc;
        y = R([k, y]).g(ee());
        var v = b.g(S(function(B) {
                return "ns" !== B.value.P && "ns" !== B.value.K
            }), he(function(B) {
                return B + 1
            }, 0), W(0), Y(a)),
            E = c.g(ee(!0), W(!1), Y(a));
        E = R([d, E]).g(O(function(B) {
            var I = u(B);
            B = I.next().value;
            I = I.next().value;
            return B && !I
        }), Y(a));
        var L = b.g(Ej, V()),
            fa = L.g(he(function(B, I) {
                return Math.max(B,
                    I)
            }, 0), V(), Y(a));
        a = L.g(zj(), Y(a));
        return {
            Uf: k,
            Vf: y,
            We: {
                Ug: b,
                wf: b.g(yj),
                Ac: A.g(V(sh)),
                visible: h.g(V(Zi)),
                fg: n.g(V(Zi)),
                tf: t,
                Rg: q,
                Ce: b.g($i, V(db)),
                Xg: L,
                Mg: fa,
                Qg: a,
                Fc: c,
                O: b.g(O(function(B) {
                    return B.value.O
                })),
                nf: g,
                Fd: e,
                Nd: d,
                Gd: E,
                ah: v
            }
        }
    }

    function Hj(a, b) {
        return b.g(S(function() {
            return !1
        }), O(function(c) {
            return c
        }), vd(function(c) {
            return (new Z(c)).Ga(a)
        }))
    }

    function Gj(a, b, c) {
        return b.g(le(Nc), Y(a)).g(V(function(d, e) {
            return Zi(d, e, dj)
        }), W({
            timestamp: c.now(),
            value: cj
        }), Y(a))
    }

    function Ij(a, b, c, d) {
        c = d.g(Dj(c), sj(O(function(e) {
            var f = Math.pow(10, 2);
            return Math.round(e * f) / f
        })), Y(a));
        return b instanceof Z ? c : R([c, b]).g(O(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), V(Zi), Y(a))
    }

    function Jj(a, b, c, d) {
        b = [b.g(O(function(e) {
            return 242500 <= e.value.D.width * e.value.D.height
        }))];
        c instanceof J && b.push(c.g(O(function(e) {
            return !!e
        })));
        c = R(b);
        return d ? c.g(O(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), V(), Y(a)) : (new Z(!1)).Ga(a)
    };
    var Kj = H(bi("data-google-av-itpl"), O(function(a) {
        return Number(a)
    }), O(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var Lj = {
            kg: "addEventListener",
            qg: "getMaxSize",
            rg: "getScreenSize",
            sg: "getState",
            tg: "getVersion",
            vg: "removeEventListener",
            ug: "isViewable"
        },
        Nj = function(a, b) {
            b = void 0 === b ? function(f) {
                return Mj(f)
            } : b;
            this.ca = null;
            this.gf = new K;
            var c = a.Kc,
                d = !a.Ta;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Kb = b(e);
                    this.ca = e;
                    this.Ma = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Kb = b(a), this.ca = a, this.Ma = c ? d ? 2 : 1 : 0) : (this.Ma = -1, this.Kb = 2)
        };
    Nj.prototype.addEventListener = function(a, b) {
        return this.Xa("addEventListener", a, b)
    };
    Nj.prototype.removeEventListener = function(a, b) {
        return this.Xa("removeEventListener", a, b)
    };
    Nj.prototype.Hd = function() {
        var a = this.Xa("getVersion");
        return "string" === typeof a ? a : ""
    };
    Nj.prototype.getState = function() {
        var a = this.Xa("getState");
        return "string" === typeof a ? a : ""
    };
    var Oj = function(a) {
            a = a.Xa("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        Pj = function(a) {
            if (a.ca) return a = a.ca.AFMA_LIDAR, "string" === typeof a ? a : void 0
        },
        Mj = function(a) {
            return a ? a.IS_GMA_SDK ? Object.values(Lj).every(function(b) {
                return "function" === typeof a[b]
            }) ? 0 : 1 : 2 : 1
        };
    Nj.prototype.Xa = function(a) {
        var b = z.apply(1, arguments);
        if (this.ca) try {
            return this.ca[a].apply(this.ca, w(b))
        } catch (c) {
            this.gf.next(a)
        }
    };
    p.Object.defineProperties(Nj.prototype, {
        yd: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.ca) {
                    var a = this.ca.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.ca && (this.ca.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function Qj(a, b) {
        return -1 !== (new Nj(a)).Ma ? (new Z(!0)).Ga(a.h) : b.g(bi("data-google-av-inapp"), O(function(c) {
            return null !== c
        }), Y(a.h))
    };
    var Sj = function(a, b) {
            var c = this;
            this.context = a;
            this.Pc = this.Ub = null;
            this.Nf = b.g(V()).subscribe(function(d) {
                Rj(c);
                c.Pc = d
            })
        },
        Tj = function(a, b) {
            Rj(a);
            a.Ub = a.context.i.setTimeout(function() {
                var c;
                return void(null == (c = a.Pc) ? void 0 : c.next())
            }, b)
        },
        Rj = function(a) {
            null !== a.Ub && a.context.i.clearTimeout(a.Ub);
            a.Ub = null
        };

    function Uj(a, b, c, d, e) {
        var f = Vj.dg;
        var g = void 0 === g ? new Sj(a, d) : g;
        return (new J(function(h) {
            var l = c.g(W(void 0), X(function() {
                return Wj(e)
            })).g(O(function(k) {
                var n = k.value;
                k = k.timestamp;
                var t = n.visible;
                n = n.Lb;
                var q = n >= f;
                q || !t ? Rj(g) : (k = Math.max(0, sd(b.now(), k)), Tj(g, Math.max(0, f - n - k)));
                return q
            }), he(function(k, n) {
                return n || k
            }, !1), V()).subscribe(h);
            return function() {
                Rj(g);
                g.Nf.unsubscribe();
                g.Pc = null;
                l.unsubscribe()
            }
        })).g(Ae(function(h) {
            return !h
        }, !0), Y(a.h))
    }

    function Wj(a) {
        return Ni([a, a.g(bj())]).g(O(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    Lb: c.value
                }
            }
        }), V(function(b, c) {
            return Zi(b, c, function(d, e) {
                return d.Lb === e.Lb && d.visible === e.visible
            })
        }))
    };

    function Xj(a, b) {
        return {
            qc: b.g(bi("data-google-av-adk")),
            rc: b.g(bi("data-google-av-btr"), V(), O(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            yc: b.g(bi("data-google-av-cpmav"), V(), O(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Ie: Ci(a, b),
            flags: b.g(bi("data-google-av-flags"), V()),
            ya: Qj(a, b),
            Oc: b.g(Ri("cr", function(c) {
                return "1" === c
            }), V()),
            Mc: b.g(Kj),
            metadata: b.g(bi("data-google-av-metadata")),
            qa: b.g(ii),
            sa: b.g(ci),
            jg: b.g(Ri("la",
                function(c) {
                    return "1" === c
                }), V())
        }
    };

    function Yj() {
        return H(Qi(), he(function(a, b) {
            return Math.max(a, b)
        }, 0), O(function(a) {
            return Math.round(a)
        }))
    };

    function Zj(a) {
        return H(xj(M(a)), Yj())
    };

    function ak(a, b, c, d, e) {
        c = c.g(O(function() {
            return !1
        }));
        d = R([e, d]).g(X(function(f) {
            f = u(f).next().value;
            return bk(b, f)
        }));
        return Lc(M(!1), c, d).g(V(), Y(a.h))
    }

    function bk(a, b) {
        return a.g(O(function(c) {
            return b || 0 === c || 2 === c
        }))
    };
    var ck = [33, 32],
        dk = H(Kj, O(function(a) {
            return 0 <= ck.indexOf(a)
        }), V());

    function ek(a, b, c, d, e) {
        var f = c.g(O(function(h) {
                return 9 === h
            })),
            g = b.element.g(dk);
        c = e.g(S(function(h) {
            return h
        }), X(function() {
            return R([f, g])
        }), O(function(h) {
            h = u(h);
            var l = h.next().value;
            return !h.next().value || l
        }), V());
        c = R([c, d.g(V())]).g(O(function(h) {
            var l = u(h);
            h = l.next().value;
            l = l.next().value;
            return wj(a, b, !h, l)
        }), pe(), Wb());
        d = c.g(O(function(h) {
            return h.Mb
        }));
        c = c.g(X(function(h) {
            return h.La
        }), W(null), V(), Y(a.h));
        return {
            na: d,
            ib: c
        }
    };

    function fk(a) {
        var b = void 0 === b ? !1 : b;
        return H(X(function(c) {
            return qh(a.document, c, b)
        }), Y(a.h))
    };
    var gk = function(a, b, c, d, e) {
        this.tb = b.element.g(fk(a), Y(a.h));
        this.ee = ak(a, c, b.element, this.tb, d);
        c = ek(a, b, e, d, this.ee);
        d = c.ib;
        this.na = c.na;
        this.ib = d;
        this.jd = Lc((new Z(1)).Ga(a.h), b.element.g(Nd(), O(function() {
            return 2
        })), this.tb.g(Nd(), O(function() {
            return 3
        })), this.ee.g(S(Boolean), Nd(), O(function() {
            return 0
        }))).g(Ae(function(f) {
            return 0 !== f
        }, !0), Y(a.h))
    };

    function hk(a, b) {
        return a && 0 === b ? 15 : a || 1 !== b ? null : 14
    }

    function ik(a, b, c) {
        return b instanceof J ? b.g(X(function(d) {
            return (d = hk(d, c)) ? Qb(new U(d)) : a
        })) : (b = hk(b.value, c)) ? Qb(new U(b)) : a
    };

    function jk(a) {
        var b = new U(13);
        if (1 > a.length) return {
            vd: Kb,
            tc: Kb
        };
        var c = new K;
        return {
            vd: a.slice(1).reduce(function(d, e) {
                return d.g(vd(function(f) {
                    c.next(f);
                    return e
                }))
            }, a[0]).g(vd(function(d) {
                c.next(d);
                return Qb(b)
            }), ke(new K), Wb()),
            tc: c
        }
    };
    var kk = function() {};
    var lk = function(a, b) {
        this.context = a;
        this.Zf = b
    };
    x(lk, kk);
    lk.prototype.wa = function(a, b) {
        var c = this.Zf.map(function(f) {
                return f.wa(a, b)
            }),
            d = jk(c.map(function(f) {
                return f.xa
            })),
            e = d.tc.g(mk());
        return {
            xa: d.vd.g(Y(this.context.h)),
            ua: Object.assign.apply(Object, [{
                bd: e,
                Zg: d.tc
            }].concat(w(c.map(function(f) {
                return f.ua
            }))))
        }
    };
    var mk = function() {
        return he(function(a, b) {
            b instanceof U ? a.push(b.xf) : a.push(-1);
            return a
        }, [])
    };

    function nk(a, b) {
        var c = a.g(ke(new K), Wb());
        return X(function(d) {
            return c.g(b(d))
        })
    };

    function ok(a, b) {
        var c = void 0 === c ? function() {
            var f = (Eg(a.global) ? a.global.innerWidth : 0) || a.Ic() || 0,
                g = (Eg(a.global) ? a.global.innerHeight : 0) || a.Gc() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Ta ? ph(a.document) ? a.mf ? null : Qb(new U(5)) : Qb(new U(4)) : Qb(new U(3));
        if (d) return d;
        var e = new K;
        return Lc(M({}), b, e).g(O(function() {
            var f = pk(a, c);
            return {
                timestamp: a.i.now(),
                value: {
                    P: "iem",
                    N: f,
                    G: f,
                    O: e,
                    R: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Y(a.h))
    }

    function pk(a, b) {
        b = b();
        var c = zg(document),
            d = function(q, y) {
                return !!a.document.elementFromPoint(q, y)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var l = d(g, f),
            k = d(e, h);
        if (b) h = qk(f, h, function(q) {
            return d(e, q)
        }), g = qk(e, g, function(q) {
            return d(q, f)
        });
        else if (l) h = qk(f, h, function(q) {
            return d(g, q)
        }), e = qk(g, e, function(q) {
            return d(q, f)
        });
        else if (k) f = qk(h, f, function(q) {
            return d(e,
                q)
        }), g = qk(e, g, function(q) {
            return d(q, h)
        });
        else if (c) f = qk(h, f, function(q) {
            return d(g, q)
        }), e = qk(g, e, function(q) {
            return d(q, h)
        });
        else {
            var n = Math.floor((e + g) / 2),
                t = Math.floor((f + h) / 2);
            if (!d(n, t)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = qk(t, f, function(q) {
                return d(n, q)
            });
            h = qk(t, h, function(q) {
                return d(n, q)
            });
            e = qk(n, e, function(q) {
                return d(q, t)
            });
            g = qk(n, g, function(q) {
                return d(q, t)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function qk(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var rk = function(a, b) {
        this.context = a;
        this.Ka = b
    };
    x(rk, kk);
    rk.prototype.wa = function(a, b) {
        var c = nk(ok(this.context, this.Ka), fj(this.context, b.qa));
        return {
            xa: ik(a.na.g(c), b.ya, 0),
            ua: {}
        }
    };

    function sk(a, b) {
        if (a.Ta) return Qb(new U(6));
        var c = new K;
        return Lc(M({}), b, c).g(O(function() {
            return {
                timestamp: a.i.now(),
                value: {
                    P: "geo",
                    N: tk(a),
                    G: Uh(a, !0),
                    O: c,
                    R: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Wg(a.h))
    }

    function tk(a) {
        var b = Uh(a, !1);
        if (!a.Kc || !Eg(a.global.parent) || a.global.parent === a.global) return b;
        var c = new Rh(a.global.parent, a.Ha);
        c.J = a.J;
        c = tk(c);
        a = a.global.frameElement.getBoundingClientRect();
        return th(uh(th(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var uk = function(a, b) {
        this.context = a;
        this.Ka = b
    };
    x(uk, kk);
    uk.prototype.wa = function(a, b) {
        var c = nk(sk(this.context, this.Ka), fj(this.context, b.qa));
        return {
            xa: ik(a.na.g(c), b.ya, 0),
            ua: {}
        }
    };
    var vk = function(a, b, c) {
        c = void 0 === c ? kj(a, b) : c;
        this.context = a;
        this.jf = c
    };
    x(vk, kk);
    vk.prototype.wa = function(a, b) {
        return {
            xa: ik(a.na.g(this.jf, oj(this.context)), b.ya, 0),
            ua: {}
        }
    };

    function wk(a, b, c, d, e) {
        var f = void 0 === f ? new Nj(a) : f;
        var g = void 0 === g ? Me(a.i, 500) : g;
        var h = void 0 === h ? Me(a.i, 100) : h;
        e = M(f).g(xk(c), De(function(l) {
            d.next(l.Ma)
        }), yk(a, h), zk(a), Ak(a, e), pe(), Wb());
        f = new K;
        b = Lc(M({}), b, f);
        return e.g(Bk(a, f, b, g, c), Y(a.h))
    }

    function Ak(a, b) {
        return H(function(c) {
            return R([c, b])
        }, Dd(function(c) {
            c = u(c);
            var d = c.next().value;
            return 9 !== c.next().value || Oj(d) ? M(!0) : Ck(a, d, "viewableChange").g(S(function(e) {
                return u(e).next().value
            }), Nd())
        }), O(function(c) {
            return u(c).next().value
        }))
    }

    function xk(a) {
        return X(function(b) {
            if (-1 === b.Ma) return a.next("if"), Qb(new U(7));
            if (0 !== b.Kb) switch (b.Kb) {
                case 1:
                    return a.next("mm"), Qb(new U(18));
                case 2:
                    return a.next("ng"), Qb(new U(17));
                default:
                    return a.next("i"), Qb(new U(8))
            }
            return M(b)
        })
    }

    function yk(a, b) {
        return Dd(function() {
            var c = a.Wd;
            return "complete" === nh(a.document) ? M(!0) : c.g(Dd(function() {
                return b
            }))
        })
    }
    var zk = function(a) {
        return X(function(b) {
            return "loading" !== b.getState() ? M(b) : Ck(a, b, "ready").g(O(function() {
                return b
            }))
        })
    };

    function Bk(a, b, c, d, e) {
        return X(function(f) {
            var g = Pj(f);
            if ("string" !== typeof g) return e.next("nc"), Qb(new U(9));
            void 0 !== f.yd && (f.yd = !0);
            g = Ck(a, f, g, Dk);
            var h = {
                version: f.Hd(),
                Ma: f.Ma
            };
            g = g.g(O(function(k) {
                return Ek.apply(null, [a, b, f, h].concat(w(k)))
            }));
            var l = d.g(De(function() {
                e.next("mt")
            }), X(function() {
                return Qb(new U(10))
            }));
            g = Qc(g, l);
            return R([g, c]).g(O(function(k) {
                k = u(k).next().value;
                return Object.assign({}, k, {
                    timestamp: a.i.now()
                })
            }))
        })
    }

    function Dk(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function Ek(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : rh;
        c = c.Xa("getMaxSize");
        var g = null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                N: e,
                G: c,
                P: "mraid",
                O: b,
                R: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.i.now()
        };
        return Object.assign({}, a, d, {
            yg: f
        })
    }

    function Ck(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new J(function(e) {
            var f = a.u.ra(745, function() {
                e.next(z.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(S(function(e) {
            return d.apply(null, w(e))
        }))
    };
    var Fk = function(a, b) {
        this.context = a;
        this.Ka = b
    };
    x(Fk, kk);
    Fk.prototype.wa = function(a, b) {
        var c = new Sb(1),
            d = new Sb(1),
            e = nk(wk(this.context, this.Ka, c, d, b.qa), fj(this.context, b.qa));
        return {
            xa: ik(a.na.g(e), b.ya, 1),
            ua: {
                Qc: c.g(Y(this.context.h)),
                Rc: d.g(Y(this.context.h))
            }
        }
    };

    function Gk(a) {
        return ["backgrounded", "notFound", "hidden"].includes(a)
    };

    function Hk(a, b) {
        a.Id = "function" === typeof b ? b : function() {
            return b
        };
        return a
    }
    var Ik = void 0;

    function Jk(a, b) {
        b = void 0 === b ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return Jk(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = Kk(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = u(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Jk(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = Kk(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + Kk(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n"
        }
        return JSON.stringify(a)
    }

    function Kk(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };

    function Lk() {
        var a = Error;
        return Hk(function(b) {
            return b instanceof a
        }, function() {
            return Kk(a)
        })
    };

    function Mk(a, b) {
        var c = void 0 === c ? null : c;
        var d = new K,
            e = void 0,
            f = a.Ed,
            g = d.g(O(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.i.now()
                }) : null
            }), S(function(l) {
                return null !== l
            }), O(function(l) {
                return l
            }));
        b = R([Lc(f, g), b]);
        var h = c;
        return b.g(S(function(l) {
            l = u(l).next().value;
            null === h && (h = l.value.ve);
            return l.value.ve === h
        }), De(function(l) {
            return void(e = u(l).next().value)
        }), O(function(l) {
            var k = u(l);
            l = k.next().value;
            k = k.next().value;
            try {
                var n = l.value.data,
                    t = l.timestamp,
                    q = n.viewport,
                    y = Object.assign({},
                        q, {
                            x: 0,
                            y: 0,
                            Tg: q.width * q.height
                        }),
                    A = Nk(y),
                    v = n.adView,
                    E = v.measuringElement && v.containerGeometry ? Nk(v.containerGeometry) : Nk(v.geometry),
                    L = Nk(v.geometry),
                    fa = v.reasons.some(Gk),
                    B = fa ? rh : Nk(v.onScreenGeometry),
                    I;
                k && (I = v.percentageInView / 100);
                k && fa && (I = 0);
                return {
                    timestamp: t,
                    value: {
                        P: "omid",
                        N: E,
                        G: A,
                        O: d,
                        K: "omid",
                        D: L,
                        R: {
                            x: E.left,
                            y: E.top
                        },
                        I: B,
                        Ec: I
                    }
                }
            } catch (Sa) {
                A = Sa;
                n = Lk();
                t = Ik;
                Ik = void 0;
                q = [];
                y = n(A, q);
                !y && q && (A = "Expected " + n.Id() + ", got " + Jk(A), q.push(A));
                if (!y) {
                    var da = "";
                    t && (da = t() + "\n");
                    throw Error("P`" + da + "`" +
                        n.Id() + "`" + q.reverse().join("\n"));
                }
                var Ta;
                n = null != (Ta = null == (da = Sa) ? void 0 : da.message) ? Ta : "An unknown error occurred";
                da = "Error while processing geometryChange event: " + JSON.stringify(l.value) + "; " + n;
                throw Error(da);
            }
        }), pe(), Wb())
    }

    function Nk(a) {
        return {
            left: Math.floor(a.x),
            top: Math.floor(a.y),
            width: Math.floor(a.width),
            height: Math.floor(a.height)
        }
    };

    function Ok(a, b, c, d) {
        c = void 0 === c ? Nc : c;
        var e = a.h;
        if (null === b) return Qb(new U(20));
        if (!b.validate()) return Qb(new U(21));
        var f;
        d = Pk(e, b, d).g(O(function(g) {
            var h = g.value;
            g = g.timestamp;
            var l = b.i,
                k = a.i;
            if (l.timeline !== g.timeline) throw new gd;
            g = new rd(g.value - l.now().value + k.now().value, k.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return Lc(d, c.g(O(function() {
            return f
        }))).g(S(function(g) {
            return void 0 !== g
        }), O(function(g) {
            return g
        }), Y(a.h))
    }

    function Pk(a, b, c) {
        return Mk(b, c).g(Y(a), O(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    R: {
                        x: d.value.D.left,
                        y: d.value.D.top
                    },
                    N: d.value.I,
                    G: d.value.G,
                    P: d.value.K,
                    O: d.value.O
                }
            }
        }))
    };
    var Qk = function(a, b, c) {
        this.Tc = a;
        this.Db = b;
        this.Ka = c
    };
    x(Qk, kk);
    Qk.prototype.wa = function(a, b) {
        var c = b.qa;
        b = Ok(this.Db, this.Tc, this.Ka, b.Vd);
        c = nk(b, fj(this.Db, c));
        return {
            xa: a.na.g(c),
            ua: {}
        }
    };
    var Rk = function(a, b, c) {
        this.Tc = a;
        this.Db = b;
        this.Qe = c
    };
    x(Rk, kk);
    Rk.prototype.wa = function(a, b) {
        b = Ok(this.Db, this.Tc, void 0, b.Vd);
        var c = nj(this.Db, this.Qe);
        b = nk(b, c);
        return {
            xa: a.na.g(b),
            ua: {}
        }
    };

    function Sk(a) {
        return a.document.If.g(O(function(b) {
            return "visible" === b
        }), V(), Y(a.h))
    };
    var Tk = function() {
            this.Cd = {}
        },
        Ji = function(a, b) {
            a = a.Cd[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var Uk = function(a) {
        var b = new Tk;
        return H(O(function(c) {
            if (null === c) return null;
            try {
                var d = JSON.parse(c)[0];
                c = "";
                for (var e = 0; e < d.length; e++) c += String.fromCharCode(d.charCodeAt(e) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(e % 10));
                b.Cd = JSON.parse(c)
            } catch (f) {}
            return b
        }), Y(a.h))
    };
    var Vk;
    Vk = ["av.key", "js", "20220608"].slice(-1)[0];

    function Wk(a, b, c) {
        var d;
        return b.g(V(), X(function(e) {
            return c.g(O(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), W(!1), Y(a.h))
    };

    function Xk(a) {
        return H(sj(O(function(b) {
            return 1 <= b ? !0 : 0 >= b ? !1 : b >= a
        })), Pi(), O(function(b) {
            return Math.round(b)
        }))
    };

    function Yk(a, b, c, d, e) {
        var f = Zk;
        if (1 < f.length)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(W(void 0), X(function() {
            return c.g(bj())
        }), V(), Y(a));
        e = e.g(W(void 0), X(function() {
            return c.g(Yj())
        }), V(), Y(a));
        return {
            Td: d.g(W(void 0), X(function() {
                return b.g(aj(Zj, f))
            }), V(db), Y(a)),
            he: d.g(W(void 0), X(function() {
                return b.g(aj(Xk, f), O(function(h) {
                    return h.map(function(l, k) {
                        return 0 < k ? l - h[k - 1] : l
                    })
                }))
            }), V(db), Y(a)),
            sf: e,
            Lb: g.g(V(Zi), Y(a))
        }
    };

    function $k(a, b, c) {
        var d = c.g(O(function(e) {
            return {
                value: e,
                timestamp: a.i.now()
            }
        }), V(Zi));
        return b instanceof J ? b.g(V(), X(function(e) {
            return e ? (new Z({
                value: !1,
                timestamp: a.i.now()
            })).Ga(a.h) : d
        })) : !1 === b.value ? d : new Z(!1)
    }

    function al(a, b, c, d, e, f) {
        var g = Vj;
        b = b instanceof J ? b.g(W(!1), V()) : b;
        var h = !(Cg() || Dg());
        c = $k(a, c, d);
        a = f.na.g(Mi(a.h));
        return Object.assign({}, g, {
            Fd: c,
            ig: e,
            xe: h,
            uf: b,
            Nd: a
        })
    };

    function bl(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function cl(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return Kb;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new K;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(Jg(a.u, 743))
    };
    var dl = function(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };
    var el = new dl("100006"),
        Li = new function(a, b) {
            this.key = a;
            this.defaultValue = void 0 === b ? 0 : b;
            this.valueType = "number"
        }("45362137"),
        fl = new dl("45372163");
    var Vj = Object.freeze({
            dg: 1E3,
            Ad: .5,
            Sd: .3
        }),
        Zk = Object.freeze([1, .75, Vj.Ad, Vj.Sd, 0]),
        vi = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + Vk;

    function gl(a, b, c, d, e) {
        var f = bl(a),
            g = cl(a);
        g = ji(a, g);
        f = f ? Kb : g.g(O(function(k) {
            return Object.freeze({
                kb: mb(),
                element: (new Z(k)).Ga(a.h)
            })
        }), di());
        var h = Sk(a).g(O(function(k) {
                return !k
            })),
            l = new lk(a, [new vk(a, Zk), new uk(a, d), new rk(a, d), new Rk(e, a, Zk), new Qk(e, a, d), new Fk(a, d)]);
        return mi(a, f, function(k, n) {
            var t = Xj(k, n.element),
                q = t.qc,
                y = t.rc,
                A = t.yc,
                v = t.Ie,
                E = t.ya,
                L = t.Mc,
                fa = t.Oc,
                B = t.qa,
                I = t.sa,
                da = t.jg;
            t = t.flags.g(V(), Uk(k));
            var Ta = new gk(k, n, v, E, B),
                Sa = t.g(Ii(el), O(function(qa) {
                    return !!qa
                }));
            Sa = l.wa(Ta, {
                ya: E,
                qa: B,
                Vd: Sa
            });
            var nb = Sa.xa,
                Ac = Sa.ua;
            Sa = Ac.Qc;
            var Bl = Ac.Rc;
            Ac = Ac.bd;
            da = al(k, fa, E, h, da, Ta);
            nb = Fj(k.h, k.i, nb, da);
            da = nb.We;
            var nd = nb.Vf;
            nb = Yk(k.h, da.fg, da.visible, nb.Uf, nd);
            nd = {
                je: Uj(k, k.i, nd, da.O, da.visible)
            };
            var Mb = rj(k, c.g(ee("t"))),
                od = null !== e && e.validate(),
                Se = (od ? e.Rf : Nc).g(Y(k.h), ee("u"));
            Mb = Qc(Mb, Se);
            od = od ? e.Pd.g(Nd(), ee(!0), W(!1), Y(k.h)) : Yg;
            Se = Wk(k, da.O, Mb.g(S(function(qa) {
                return null !== qa
            })));
            var yh = hl(k, Ta, q),
                El = il(k, Mb, n.element),
                Fl = yh.we.g(W({
                    x: 0,
                    y: 0
                })),
                Gl = t.g(Ii(fl), O(function(qa) {
                        return !!qa
                    }),
                    W(!1), V(), De(function(qa) {
                        Tg = qa
                    }), Y(k.h));
            return Object.assign({}, {
                J: new Z(k.J),
                Qb: new Z("lidar2"),
                bg: new Z("lidartos"),
                Be: new Z(Vk),
                Ae: new Z(7),
                wc: new Z(k.validate() ? null : new dd),
                Fe: new Z(oh(k.document)),
                ha: new Z(xi),
                Cc: Mb,
                bc: Mb,
                Vg: Se,
                Ld: od,
                He: new Z(k.Ta ? 1 : void 0),
                Je: new Z(k.De ? 1 : void 0),
                ya: E,
                Qc: Sa.g(Y(k.h)),
                Rc: Bl.g(Y(k.h)),
                Se: t.g(Ki()),
                df: Gl,
                Ge: n.element.g(O(function(qa) {
                    return null !== qa
                })),
                Pb: I,
                cg: I,
                yc: A.g(W([])),
                af: A.g(O(function(qa) {
                    return 0 < qa.length ? !0 : null
                }), W(null), V()),
                rc: y.g(W([]), Y(k.h)),
                Og: t,
                qc: q,
                ib: Ta.ib,
                Mc: L.g(W(0), Y(k.h)),
                vf: v,
                qa: B.g(W(0), Y(k.h)),
                Cb: new Z(wi),
                hd: new Z(Hi),
                Oc: fa,
                kf: Ta.tb.g(Mi(k.h)),
                jd: Ta.jd
            }, da, {
                Ac: R([da.Ac, Fl]).g(O(function(qa) {
                    var pd = u(qa);
                    qa = pd.next().value;
                    pd = pd.next().value;
                    return uh(qa, pd)
                }), V(sh))
            }, nb, yh, nd, {
                ed: Zg(k),
                bf: El,
                bd: Ac
            })
        }, ui(a, b))
    }

    function hl(a, b, c) {
        var d = void 0 === d ? Ba : d;
        var e, f;
        d = (null == (e = d.performance) ? void 0 : null == (f = e.timing) ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            ue: new Z(d),
            te: Yi(a, b)
        }, Xi(a, b, c))
    }

    function il(a, b, c) {
        return b.g(S(function(d) {
            return null !== d
        }), X(function() {
            return c
        }), O(function(d) {
            var e = ei(a);
            return 0 < e.length && 0 <= e.indexOf(d)
        }), O(function(d) {
            return !d
        }))
    };

    function jl(a, b) {
        if (!b) throw Error("Q`" + a);
        if ("string" !== typeof b && !(b instanceof String)) throw Error("R`" + a);
        if ("" === b.trim()) throw Error("S`" + a);
    }

    function kl(a) {
        if (!a) throw Error("V`functionToExecute");
    }

    function ll(a, b) {
        if (null == b) throw Error("T`" + a);
        if ("number" !== typeof b || isNaN(b)) throw Error("U`" + a);
        if (0 > b) throw Error("W`" + a);
    };

    function ml() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.31-google_20220309")
    }

    function nl() {
        for (var a = ["1", "3", "31"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var ol = function(a, b, c, d) {
            this.Jd = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        pl = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        ql = function(a) {
            return new ol(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    ol.prototype.Za = function() {
        var a = {};
        a = (a.omid_message_guid = this.Jd, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        void 0 !== this.args && (a.omid_message_args = this.args);
        return a
    };
    var rl = function(a) {
        this.cc = a
    };
    rl.prototype.Za = function() {
        return JSON.stringify(void 0)
    };

    function sl(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function tl() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function ul() {
        var a = z.apply(0, arguments);
        vl(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(w(a))));
        }, function() {
            return console.error.apply(console, w(a))
        })
    }

    function vl(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var wl = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" !== typeof global && global) return global;
        if ("undefined" !== typeof window && window) return window;
        if ("undefined" !== typeof globalThis && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("X");
    }();
    var xl = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var yl = function(a) {
        this.cc = a;
        this.handleExportedMessage = yl.prototype.Ye.bind(this)
    };
    x(yl, rl);
    yl.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.cc : b;
        if (!b) throw Error("Y");
        b.handleExportedMessage(a.Za(), this)
    };
    yl.prototype.Ye = function(a, b) {
        if (pl(a) && this.onMessage) this.onMessage(ql(a), b)
    };

    function zl(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function Al(a) {
        if (a === wl) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var Cl = function(a, b) {
        this.cc = b = void 0 === b ? wl : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                if (pl(e) && d.source && c.onMessage) c.onMessage(ql(e), d.source)
            }
        })
    };
    x(Cl, rl);
    Cl.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.cc : b;
        if (!b) throw Error("Y");
        b.postMessage(a.Za(), "*")
    };
    var Dl = ["omid", "v1_VerificationServiceCommunication"],
        Hl = ["omidVerificationProperties", "serviceWindow"];

    function Il(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var Jl = function(a) {
        if (!a) {
            var b;
            "undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
            b = zl(b) ? b : wl;
            var c = void 0 === c ? xl : c;
            a = [];
            var d = Il(b, Hl);
            d && a.push(d);
            a.push(zl(b) ? b.top : wl);
            a: {
                a = u(a);
                for (var e = a.next(); !e.done; e = a.next()) {
                    b: {
                        d = b;e = e.value;
                        var f = c;
                        if (!Al(e)) try {
                            var g = Il(e, Dl);
                            if (g) {
                                var h = new yl(g);
                                break b
                            }
                        } catch (l) {}
                        h = f(e) ? new Cl(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.gb = a) this.gb.onMessage = this.Ze.bind(this);
        else if (c = (c = wl.omid3p) && "function" === typeof c.registerSessionObserver &&
            "function" === typeof c.addEventListener ? c : null) this.vb = c;
        this.Lf = this.Mf = 0;
        this.sc = {};
        this.Jc = [];
        this.Qd = (c = wl.omidVerificationProperties) ? c.injectionId : void 0
    };
    Jl.prototype.ma = function() {
        return !(!this.gb && !this.vb)
    };
    var Ve = function(a, b, c) {
        kl(b);
        a.vb ? a.vb.registerSessionObserver(b, c, a.Qd) : a.Ya("addSessionListener", b, c, a.Qd)
    };
    Jl.prototype.addEventListener = function(a, b) {
        jl("eventType", a);
        kl(b);
        this.vb ? this.vb.addEventListener(a, b) : this.Ya("addEventListener", b, a)
    };
    var Le = function(a, b, c, d) {
            jl("url", b);
            wl.document && wl.document.createElement ? Kl(a, b, c, d) : a.Ya("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        Kl = function(a, b, c, d) {
            var e = wl.document.createElement("img");
            a.Jc.push(e);
            var f = function(g) {
                var h = a.Jc.indexOf(e);
                0 <= h && a.Jc.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    Jl.prototype.setTimeout = function(a, b) {
        kl(a);
        ll("timeInMillis", b);
        if (Ll()) return wl.setTimeout(a, b);
        var c = this.Mf++;
        this.Ya("setTimeout", a, c, b);
        return c
    };
    Jl.prototype.clearTimeout = function(a) {
        ll("timeoutId", a);
        Ll() ? wl.clearTimeout(a) : this.be("clearTimeout", a)
    };
    Jl.prototype.setInterval = function(a, b) {
        kl(a);
        ll("timeInMillis", b);
        if (Ml()) return wl.setInterval(a, b);
        var c = this.Lf++;
        this.Ya("setInterval", a, c, b);
        return c
    };
    Jl.prototype.clearInterval = function(a) {
        ll("intervalId", a);
        Ml() ? wl.clearInterval(a) : this.be("clearInterval", a)
    };
    var Ll = function() {
            return "function" === typeof wl.setTimeout && "function" === typeof wl.clearTimeout
        },
        Ml = function() {
            return "function" === typeof wl.setInterval && "function" === typeof wl.clearInterval
        };
    Jl.prototype.Ze = function(a) {
        var b = a.method,
            c = a.Jd;
        a = a.args;
        if ("response" === b && this.sc[c]) {
            var d = ml() && nl() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.sc[c].apply(this, d)
        }
        "error" === b && window.console && ul(a)
    };
    Jl.prototype.be = function(a) {
        this.Ya.apply(this, [a, null].concat(w(z.apply(1, arguments))))
    };
    Jl.prototype.Ya = function(a, b) {
        var c = z.apply(2, arguments);
        if (this.gb) {
            var d = tl();
            b && (this.sc[d] = b);
            c = ml() && nl() ? c : JSON.stringify(c);
            this.gb.sendMessage(new ol(d, "VerificationService." + a, "1.3.31-google_20220309", c))
        }
    };
    var Nl = void 0;
    if (Nl = void 0 === Nl ? "undefined" === typeof omidExports ? null : omidExports : Nl) {
        var Ol = ["OmidVerificationClient"];
        Ol.slice(0, Ol.length - 1).reduce(sl, Nl)[Ol[Ol.length - 1]] = Jl
    };
    var Pl = null;
    try {
        var Ql = new Jl;
        Pl = new Ue(Ql, "doubleclickbygoogle.com-omid")
    } catch (a) {
        Pl = null
    }(function(a, b, c, d, e) {
        b = void 0 === b ? .01 : b;
        c = void 0 === c ? Me(a.i, 36E5) : c;
        d = void 0 === d ? a.i.interval(100).g(Y(a.h)) : d;
        e = void 0 === e ? null : e;
        return a.u.ra(742, function() {
            return gl(a, b, c, d, e)
        })()
    })(new Rh, void 0, void 0, void 0, Pl).subscribe();
}).call(this);