/**
 * @id5io/id5-api.js
 * @version v1.0.15
 * @link https://id5.io/
 * @license Apache-2.0
 */
! function(n) {
    var a = {};

    function i(e) {
        if (a[e]) return a[e].exports;
        var t = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = n, i.c = a, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 6)
}([function(e, t, n) {
    "use strict";

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, a = arguments[t];
                for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }).apply(this, arguments)
    }

    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a
    }
    t.b = function(e, t) {
        var n = !0;
        return D(e, function(e) {
            return n = n && t(e)
        }), n
    }, t.r = g, t.s = function(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        y(console.warn, e, "WARNING", n)
    }, t.q = m, t.u = function(e) {
        b = !!e
    }, t.l = O, t.m = function() {
        return p
    }, t.g = C, t.k = k, t.p = _, t.h = S, t.n = function(e) {
        return C(e, o)
    }, t.o = function(e) {
        return C(e, c)
    }, t.i = function(e) {
        return C(e, d)
    }, t.j = function(e) {
        return void 0 !== e
    }, t.f = function(e) {
        e = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
        return e ? decodeURIComponent(e[2]) : null
    }, t.t = function(e, t, n) {
        document.cookie = "".concat(e, "=").concat(encodeURIComponent(t)).concat("" !== n ? "; expires=".concat(n) : "", "; path=/")
    }, t.a = function(e, t, n) {
        var a, i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
        try {
            var r = i.method || (n ? "POST" : "GET");
            document.createElement("a").href = e;
            var o, c = "object" === l(t) && null !== t ? t : {
                success: function() {
                    g("ajax", "xhr success")
                },
                error: function(e) {
                    m("ajax", "xhr error", null, e)
                }
            };
            "function" == typeof t && (c.success = t), (a = new window.XMLHttpRequest).onreadystatechange = function() {
                var e;
                a.readyState === j && (200 <= (e = a.status) && e < 300 || 304 === e ? c.success(a.responseText, a) : c.error(a.statusText, a))
            }, a.ontimeout = function() {
                m("ajax", "xhr timeout after ", a.timeout, "ms")
            }, "GET" === r && n && (s((o = function(e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                t = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: t ? n.search : function(e) {
                        return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                            var n = t.split("="),
                                n = (t = 2, function(e) {
                                    if (Array.isArray(e)) return e
                                }(n = n) || function(e, t) {
                                    var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                                    if (null != n) {
                                        var a, i, r = [],
                                            o = !0,
                                            c = !1;
                                        try {
                                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                                        } catch (e) {
                                            c = !0, i = e
                                        } finally {
                                            try {
                                                o || null == n.return || n.return()
                                            } finally {
                                                if (c) throw i
                                            }
                                        }
                                        return r
                                    }
                                }(n, t) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return u(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                                    }
                                }(n, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                t = n[0],
                                n = n[1];
                            return /\[\]$/.test(t) ? (e[t = t.replace("[]", "")] = e[t] || [], e[t].push(n)) : e[t] = n || "", e
                        }, {}) : {}
                    }(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host
                }
            }(e, i)).search, n), e = function(e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(function(e) {
                    return Object.keys(e).map(function(t) {
                        return Array.isArray(e[t]) ? e[t].map(function(e) {
                            return "".concat(t, "[]=").concat(e)
                        }).join("&") : "".concat(t, "=").concat(e[t])
                    }).join("&")
                }(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
            }(o)), a.open(r, e, !0), i.withCredentials && (a.withCredentials = !0), D(i.customHeaders, function(e, t) {
                a.setRequestHeader(t, e)
            }), i.preflight && a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-Type", i.contentType || "text/plain"), "POST" === r && n ? a.send(n) : a.send()
        } catch (e) {
            m("ajax", "xhr construction", e)
        }
    }, t.d = function(e, t, n) {
        "loading" !== document.readyState ? w(e, t, n) : document.addEventListener("DOMContentLoaded", function() {
            w(e, t, n)
        })
    }, t.c = function(e) {
        for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, a = function(e, t) {
                if (k(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n
            }, i = 3735928559 ^ n, r = 1103547991 ^ n, o = 0; o < e.length; o++) t = e.charCodeAt(o), i = a(i ^ t, 2654435761), r = a(r ^ t, 1597334677);
        return i = a(i ^ i >>> 16, 2246822507) ^ a(r ^ r >>> 13, 3266489909), (4294967296 * (2097151 & (r = a(r ^ r >>> 16, 2246822507) ^ a(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
    }, t.e = function(e, t, n, a, i) {
        for (t = t.split ? t.split(".") : t, a = 0; a < t.length; a++) e = e ? e[t[a]] : i;
        return e === i ? n : e
    };
    var a = "Array",
        i = "String",
        r = "Function",
        o = "Number",
        c = "Object",
        d = "Boolean",
        f = Object.prototype.toString,
        h = "TRUE" === I("id5_debug").toUpperCase(),
        p = "TRACE" === I("id5_debug").toUpperCase(),
        v = Boolean(window.console),
        b = !1;

    function g(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        y(console.info, e, "INFO", n)
    }

    function m(e) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
        y(console.error, e, "ERROR", n)
    }

    function y(e, t, n, a) {
        O() && v && e && e.apply(console, ["%cID5 - #".concat(t), "color: #fff; background: #1c307e; padding: 1px 4px; border-radius: 3px;", n].concat(a))
    }

    function O() {
        return h || p || b
    }

    function I(e) {
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }

    function C(e, t) {
        return f.call(e) === "[object " + t + "]"
    }

    function k(e) {
        return C(e, r)
    }

    function _(e) {
        return C(e, i)
    }

    function S(e) {
        return C(e, a)
    }

    function D(e, t) {
        if (! function(e) {
                if (!e) return 1;
                if (S(e) || _(e)) return !(0 < e.length);
                for (var t in e)
                    if (hasOwnProperty.call(e, t)) return;
                return 1
            }(e)) {
            if (k(e.forEach)) return e.forEach(t, this);
            var n = 0,
                a = e.length;
            if (0 < a)
                for (; n < a; n++) t(e[n], n, e);
            else
                for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
        }
    }
    var j = 4;

    function w(e, t, n) {
        var a = new Image;
        a.src = e, k(t) && t(), k(n) && (a.complete ? n() : a.addEventListener("load", n))
    }
}, function(e, t) {
    e.exports = {
        STORAGE_CONFIG: {
            ID5: {
                name: "id5id",
                expiresDays: 90
            },
            LAST: {
                name: "id5id_last",
                expiresDays: 90
            },
            CONSENT_DATA: {
                name: "id5id_cached_consent_data",
                expiresDays: 30
            },
            PD: {
                name: "id5id_cached_pd",
                expiresDays: 30
            },
            PRIVACY: {
                name: "id5id_privacy",
                expiresDays: 30
            }
        },
        LEGACY_COOKIE_NAMES: ["id5.1st", "id5id.1st"],
        PRIVACY: {
            JURISDICTIONS: {
                gdpr: !0,
                ccpa: !1,
                lgpd: !0,
                other: !1
            }
        },
        ID5_EIDS_SOURCE: "id5-sync.com"
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var d = n(0),
        t = n(1),
        a = n.n(t),
        i = (n(4), ["vendorData", "ccpaString"]);

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, a = arguments[t];
                for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }).apply(this, arguments)
    }

    function o(e, t) {
        if (null == e) return {};
        var n, a = function(e, t) {
            if (null == e) return {};
            var n, a, i = {},
                r = Object.keys(e);
            for (a = 0; a < r.length; a++) n = r[a], 0 <= t.indexOf(n) || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols)
            for (var i = Object.getOwnPropertySymbols(e), r = 0; r < i.length; r++) n = i[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function l(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var h = {
            tcfv1: {
                objName: "__cmpCall",
                objKeys: ["command", "parameter"],
                returnObjName: "__cmpReturn"
            },
            tcfv2: {
                objName: "__tcfapiCall",
                objKeys: ["command", "version"],
                returnObjName: "__tcfapiReturn"
            },
            uspv1: {
                objName: "__uspapiCall",
                objKeys: ["command", "version"],
                returnObjName: "__uspapiReturn"
            }
        },
        p = Object.freeze({
            NONE: "none",
            TCF_V1: "TCFv1",
            TCF_V2: "TCFv2",
            USP_V1: "USPv1",
            ID5_ALLOWED_VENDORS: "ID5"
        }),
        v = Object.freeze({
            FORCE_ALLOWED_BY_CONFIG: "force_allowed_by_config",
            ID5_CONSENT: "id5_consent",
            PROVISIONAL: "provisional",
            JURISDICTION: "jurisdiction",
            CONSENT_API: "consent_api"
        }),
        b = function() {
            function a(e, t, n) {
                c(this, a), f(this, "allowed", !1), f(this, "grantType", v.NONE), f(this, "api", p.NONE), this.allowed = e, this.grantType = t, this.api = n
            }
            return l(a, [{
                key: "isDefinitivelyAllowed",
                value: function() {
                    return this.allowed && this.grantType !== v.PROVISIONAL
                }
            }]), a
        }(),
        g = function() {
            function e() {
                c(this, e), f(this, "api", p.NONE), f(this, "consentString", void 0), f(this, "gdprApplies", !1), f(this, "vendorData", {}), f(this, "allowedVendors", void 0), f(this, "hasCcpaString", !1), f(this, "ccpaString", "")
            }
            return l(e, [{
                key: "localStorageGrant",
                value: function() {
                    return new b(this.isGranted(), v.CONSENT_API, this.api)
                }
            }, {
                key: "isGranted",
                value: function() {
                    switch (this.api) {
                        case p.NONE:
                            return !0;
                        case p.TCF_V1:
                            return !this.gdprApplies || !0 === Object(d.e)(this, "vendorData.purposeConsents.1");
                        case p.TCF_V2:
                            return !this.gdprApplies || !0 === Object(d.e)(this, "vendorData.purpose.consents.1");
                        case p.ID5_ALLOWED_VENDORS:
                            return this.allowedVendors.includes("131");
                        case p.USP_V1:
                            return !0
                    }
                }
            }, {
                key: "hashCode",
                value: function() {
                    this.vendorData, this.ccpaString;
                    var e = o(this, i);
                    return Object(d.c)(JSON.stringify(e))
                }
            }]), e
        }(),
        u = function() {
            function u(e, t) {
                c(this, u), f(this, "invocationId", void 0), f(this, "consentData", void 0), f(this, "storedPrivacyData", void 0), f(this, "localStorage", void 0), f(this, "_consentRequested", !1), this.invocationId = e, this.localStorage = t, this.resetConsentData()
            }
            return l(u, [{
                key: "requestConsent",
                value: function(e, t, n, a) {
                    if (e) this.consentData = new g, Object(d.s)(this.invocationId, "cmpApi: ID5 is operating in forced consent mode and will not retrieve any consent signals from the CMP"), a(this.consentData);
                    else if (this._consentRequested) a(this.consentData);
                    else switch (this.consentData = new g, this._consentRequested = !0, t) {
                        case "static":
                            this.parseStaticConsentData(n, a);
                            break;
                        case "iab":
                            this.lookupIabConsent(a);
                            break;
                        default:
                            Object(d.q)(this.invocationId, "cmpApi: Unknown consent API: ".concat(t)), this.resetConsentData(), a(this.consentData)
                    }
                }
            }, {
                key: "getOrCreateConsentData",
                value: function() {
                    return this.consentData || (this.consentData = new g), this.consentData
                }
            }, {
                key: "parseStaticConsentData",
                value: function(e, t) {
                    e = e || {};
                    var n = {};
                    Object(d.o)(e.getConsentData) ? n = u.parseTcfData(e, 1) : Object(d.o)(e.getTCData) ? n = u.parseTcfData(e.getTCData, 2) : Object(d.h)(e.allowedVendors) ? n = {
                        api: p.ID5_ALLOWED_VENDORS,
                        allowedVendors: e.allowedVendors.map(function(e) {
                            return String(e)
                        }),
                        gdprApplies: !0
                    } : Object(d.o)(e.getUSPData) ? n = u.parseUspData(e.getUSPData) : Object(d.s)(this.invocationId, "cmpApi: No static consent data detected! Using defaults."), r(this.consentData, n), Object(d.r)(this.invocationId, "cmpApi: Detected API '".concat(this.consentData.api, "' from static consent data"), e), t(this.consentData)
                }
            }, {
                key: "lookupIabConsent",
                value: function(n) {
                    var a = this,
                        i = [],
                        e = function(t) {
                            return i[t] = !1,
                                function(e) {
                                    i[t] || (i[t] = !0, e && r(a.consentData, e), i.every(function(e) {
                                        return e
                                    }) && n(a.consentData))
                                }
                        },
                        t = e(0),
                        e = e(1);
                    this.lookupTcf(t), this.lookupUsp(e)
                }
            }, {
                key: "lookupUsp",
                value: function(n) {
                    var a = this,
                        e = u.findUsp(),
                        t = e.uspapiFrame,
                        e = e.uspapiFunction;
                    if (!t) return Object(d.s)(this.invocationId, "cmpApi: USP not found! Using defaults for CCPA."), void n();
                    (Object(d.k)(e) ? (Object(d.r)(this.invocationId, "cmpApi: Detected USP is directly accessible, calling it now."), e) : (Object(d.r)(this.invocationId, "cmpApi: Detected USP is outside the current iframe. Using message passing."), u.buildCmpSurrogate("uspv1", t)))("getUSPData", 1, function(e, t) {
                        t ? n(u.parseUspData(e)) : (Object(d.q)(a.invocationId, "cmpApi: USP callback not succesful. Using defaults for CCPA."), n())
                    })
                }
            }, {
                key: "lookupTcf",
                value: function(e) {
                    var t = u.findTCF(),
                        n = t.cmpVersion,
                        a = t.cmpFrame,
                        t = t.cmpFunction;
                    if (!a) return Object(d.s)(this.invocationId, "cmpApi: TCF not found! Using defaults for GDPR."), void e();
                    Object(d.k)(t) ? this.lookupDirectTcf(n, t, e) : (Object(d.r)(this.invocationId, "cmpApi: Detected TCF is outside the current iframe. Using message passing."), this.lookupMessageTcf(n, a, e))
                }
            }, {
                key: "lookupMessageTcf",
                value: function(e, t, n) {
                    t = u.buildCmpSurrogate(1 === e ? "tcfv1" : "tcfv2", t);
                    this.lookupDirectTcf(e, t, n)
                }
            }, {
                key: "lookupDirectTcf",
                value: function(e, t, a) {
                    function i(e, t, n) {
                        Object(d.r)(o.invocationId, "cmpApi: TCFv".concat(e, " - Received a call back: ").concat(t), n)
                    }

                    function r(e, t) {
                        Object(d.q)(o.invocationId, "cmpApi: TCFv".concat(e, " - Received insuccess: ").concat(t, ". Please check your CMP setup. Using defaults for GDPR."))
                    }
                    var n, o = this,
                        c = {},
                        s = {},
                        l = function(n) {
                            return s[n] = !1,
                                function(e, t) {
                                    s[n] = !0, t ? (i(1, n, e), c[n] = e) : r(1, n), Object.values(s).every(function(e) {
                                        return e
                                    }) && a(u.parseTcfData(c, 1))
                                }
                        };
                    1 === e ? (n = l("getConsentData"), l = l("getVendorConsents"), t("getConsentData", null, n), t("getVendorConsents", null, l)) : 2 === e && t("addEventListener", e, function(e, t) {
                        if (i(2, "event", e), !t) return r(2, "addEventListener"), void a();
                        !e || !1 !== e.gdprApplies && "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || a(u.parseTcfData(e, 2))
                    })
                }
            }, {
                key: "resetConsentData",
                value: function() {
                    this.consentData = void 0, this.storedPrivacyData = void 0, this._consentRequested = !1
                }
            }, {
                key: "localStorageGrant",
                value: function(e, t) {
                    if (!0 === e || !0 === t) return Object(d.s)(this.invocationId, "cmpApi: Local storage access granted by configuration override, consent will not be checked"), new b(!0, v.FORCE_ALLOWED_BY_CONFIG, p.NONE);
                    if (this.consentData && this.consentData.api !== p.NONE) return this.consentData.localStorageGrant();
                    if (Object(d.o)(this.storedPrivacyData) || (n = this.localStorage.getItemWithExpiration(a.a.STORAGE_CONFIG.PRIVACY), this.storedPrivacyData = n && JSON.parse(n), Object(d.r)(this.invocationId, "cmpApi: Loaded stored privacy data from local storage", this.storedPrivacyData)), this.storedPrivacyData && !0 === this.storedPrivacyData.id5_consent) return new b(!0, v.ID5_CONSENT, p.NONE);
                    if (!this.storedPrivacyData || !Object(d.j)(this.storedPrivacyData.jurisdiction)) return new b(!0, v.PROVISIONAL, p.NONE);
                    var n = this.storedPrivacyData.jurisdiction,
                        n = n in a.a.PRIVACY.JURISDICTIONS && a.a.PRIVACY.JURISDICTIONS[n];
                    return new b(!1 === n, v.JURISDICTION, p.NONE)
                }
            }, {
                key: "setStoredPrivacy",
                value: function(e) {
                    try {
                        Object(d.o)(e) ? (this.storedPrivacyData = e, this.localStorage.setItemWithExpiration(a.a.STORAGE_CONFIG.PRIVACY, JSON.stringify(e))) : Object(d.q)(this.invocationId, "cmpApi: Cannot store privacy data if it is not an object", e)
                    } catch (e) {
                        Object(d.q)(this.invocationId, "cmpApi: Error while storing privacy data", e)
                    }
                }
            }], [{
                key: "buildCmpSurrogate",
                value: function(c, s) {
                    return function(e, t, n) {
                        var a = Math.random() + "",
                            i = h[c],
                            r = {},
                            o = {};
                        o[i.objKeys[0]] = e, o[i.objKeys[1]] = t, o.callId = a, r[i.objName] = o;
                        o = function e(t) {
                            t = Object(d.e)(t, "data.".concat(i.returnObjName));
                            t && t.callId === a && (window.removeEventListener("message", e), n(t.returnValue, t.success))
                        };
                        window.addEventListener("message", o, !1), s.postMessage(r, "*")
                    }
                }
            }, {
                key: "parseUspData",
                value: function(e) {
                    if (Object(d.o)(e) && Object(d.p)(e.uspString)) return {
                        api: p.USP_V1,
                        hasCcpaString: !0,
                        ccpaString: e.uspString
                    };
                    Object(d.q)(this.invocationId, "cmpApi: No or malformed USP data. Using defaults for CCPA.")
                }
            }, {
                key: "parseTcfData",
                value: function(e, t) {
                    var n, a;
                    if (1 === t) n = u.isValidV1ConsentObject, a = u.normalizeV1Data;
                    else {
                        if (2 !== t) return void Object(d.q)(this.invocationId, "cmpApi: No or malformed CMP data. Using defaults for GDPR.");
                        n = u.isValidV2ConsentObject, a = u.normalizeV2Data
                    }
                    if (n(e)) return a(e);
                    Object(d.q)(this.invocationId, "cmpApi: Invalid CMP data. Using defaults for GDPR.", e)
                }
            }, {
                key: "isValidV1ConsentObject",
                value: function(e) {
                    var t = Object(d.e)(e, "getConsentData.gdprApplies");
                    return !!Object(d.i)(t) && (!1 === t || Object(d.p)(e.getConsentData.consentData) && Object(d.o)(e.getVendorConsents) && 1 < Object.keys(e.getVendorConsents).length)
                }
            }, {
                key: "isValidV2ConsentObject",
                value: function(e) {
                    var t = e && e.gdprApplies,
                        e = e && e.tcString;
                    return !!Object(d.i)(t) && (!1 === t || Object(d.p)(e))
                }
            }, {
                key: "normalizeV1Data",
                value: function(e) {
                    return {
                        consentString: e.getConsentData.consentData,
                        vendorData: e.getVendorConsents,
                        gdprApplies: e.getConsentData.gdprApplies,
                        api: p.TCF_V1
                    }
                }
            }, {
                key: "normalizeV2Data",
                value: function(e) {
                    return {
                        consentString: e.tcString,
                        vendorData: e,
                        gdprApplies: e.gdprApplies,
                        api: p.TCF_V2
                    }
                }
            }, {
                key: "findTCF",
                value: function() {
                    for (var e, t, n = 0, a = window; !e;) {
                        try {
                            if ("function" == typeof a.__tcfapi || "function" == typeof a.__cmp) {
                                t = "function" == typeof a.__tcfapi ? (n = 2, a.__tcfapi) : (n = 1, a.__cmp), e = a;
                                break
                            }
                        } catch (e) {}
                        try {
                            if (a.frames.__tcfapiLocator) {
                                n = 2, e = a;
                                break
                            }
                        } catch (e) {}
                        try {
                            if (a.frames.__cmpLocator) {
                                n = 1, e = a;
                                break
                            }
                        } catch (e) {}
                        if (a === window.top) break;
                        a = a.parent
                    }
                    return {
                        cmpVersion: n,
                        cmpFrame: e,
                        cmpFunction: t
                    }
                }
            }, {
                key: "findUsp",
                value: function() {
                    for (var e, t, n = window; !e;) {
                        try {
                            if ("function" == typeof n.__uspapi) {
                                t = n.__uspapi, e = n;
                                break
                            }
                        } catch (e) {}
                        try {
                            if (n.frames.__uspapiLocator) {
                                e = n;
                                break
                            }
                        } catch (e) {}
                        if (n === window.top) break;
                        n = n.parent
                    }
                    return {
                        uspapiFrame: e,
                        uspapiFunction: t
                    }
                }
            }]), u
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(0),
        t = n(1),
        r = n.n(t);
    n(2);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        function a(e, t, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, a), c(this, "invocationId", void 0), c(this, "localStorageGrantChecker", void 0), c(this, "localStorage", void 0), this.invocationId = e, this.localStorageGrantChecker = t, this.localStorage = n
        }
        var e, t, n;
        return e = a, n = [{
            key: "pdCacheConfig",
            value: function(e) {
                return {
                    name: "".concat(r.a.STORAGE_CONFIG.PD.name, "_").concat(e),
                    expiresDays: r.a.STORAGE_CONFIG.PD.expiresDays
                }
            }
        }, {
            key: "makeStoredHash",
            value: function(e) {
                return Object(i.c)("string" == typeof e ? e : "")
            }
        }, {
            key: "nbCacheConfig",
            value: function(e) {
                return {
                    name: "".concat(r.a.STORAGE_CONFIG.ID5.name, "_").concat(e, "_nb"),
                    expiresDays: r.a.STORAGE_CONFIG.ID5.expiresDays
                }
            }
        }, {
            key: "storedDataMatchesCurrentData",
            value: function(e, t) {
                return null == e || e === t
            }
        }], (t = [{
            key: "get",
            value: function(e) {
                try {
                    var t = this.localStorageGrant();
                    if (t.isDefinitivelyAllowed()) return this.localStorage.getItemWithExpiration(e);
                    Object(i.s)(this.invocationId, "clientStore.get() has been called without definitive grant", t)
                } catch (e) {
                    Object(i.q)(this.invocationId, e)
                }
            }
        }, {
            key: "clear",
            value: function(e) {
                try {
                    this.localStorage.removeItemWithExpiration(e)
                } catch (e) {
                    Object(i.q)(this.invocationId, e)
                }
            }
        }, {
            key: "put",
            value: function(e, t) {
                try {
                    var n = this.localStorageGrant();
                    n.isDefinitivelyAllowed() ? this.localStorage.setItemWithExpiration(e, t) : Object(i.s)(this.invocationId, "clientStore.put() has been called without definitive grant", n)
                } catch (e) {
                    Object(i.q)(this.invocationId, e)
                }
            }
        }, {
            key: "localStorageGrant",
            value: function() {
                return this.localStorageGrantChecker()
            }
        }, {
            key: "isLocalStorageAvailable",
            value: function() {
                return this.localStorage.isAvailable()
            }
        }, {
            key: "getResponseFromLegacyCookie",
            value: function() {
                var t;
                return r.a.LEGACY_COOKIE_NAMES.forEach(function(e) {
                    Object(i.f)(e) && (t = Object(i.f)(e))
                }), t ? JSON.parse(t) : null
            }
        }, {
            key: "getResponse",
            value: function() {
                var e = this.get(r.a.STORAGE_CONFIG.ID5);
                return e && JSON.parse(decodeURIComponent(e))
            }
        }, {
            key: "clearResponse",
            value: function() {
                this.clear(r.a.STORAGE_CONFIG.ID5)
            }
        }, {
            key: "putResponse",
            value: function(e) {
                this.put(r.a.STORAGE_CONFIG.ID5, encodeURIComponent(e))
            }
        }, {
            key: "getHashedConsentData",
            value: function() {
                return this.get(r.a.STORAGE_CONFIG.CONSENT_DATA)
            }
        }, {
            key: "clearHashedConsentData",
            value: function() {
                this.clear(r.a.STORAGE_CONFIG.CONSENT_DATA)
            }
        }, {
            key: "putHashedConsentData",
            value: function(e) {
                this.put(r.a.STORAGE_CONFIG.CONSENT_DATA, e.hashCode())
            }
        }, {
            key: "getHashedPd",
            value: function(e) {
                return this.get(a.pdCacheConfig(e))
            }
        }, {
            key: "storedPdMatchesPd",
            value: function(e, t) {
                return a.storedDataMatchesCurrentData(this.getHashedPd(e), a.makeStoredHash(t))
            }
        }, {
            key: "clearHashedPd",
            value: function(e) {
                this.clear(a.pdCacheConfig(e))
            }
        }, {
            key: "putHashedPd",
            value: function(e, t) {
                this.put(a.pdCacheConfig(e), a.makeStoredHash(t))
            }
        }, {
            key: "getDateTime",
            value: function() {
                return new Date(this.get(r.a.STORAGE_CONFIG.LAST)).getTime()
            }
        }, {
            key: "clearDateTime",
            value: function() {
                this.clear(r.a.STORAGE_CONFIG.LAST)
            }
        }, {
            key: "setDateTime",
            value: function(e) {
                this.put(r.a.STORAGE_CONFIG.LAST, e)
            }
        }, {
            key: "getNb",
            value: function(e) {
                e = this.get(a.nbCacheConfig(e));
                return e ? parseInt(e) : 0
            }
        }, {
            key: "clearNb",
            value: function(e) {
                this.clear(a.nbCacheConfig(e))
            }
        }, {
            key: "setNb",
            value: function(e, t) {
                this.put(a.nbCacheConfig(e), t)
            }
        }, {
            key: "incNb",
            value: function(e, t) {
                return this.setNb(e, ++t), t
            }
        }, {
            key: "clearAll",
            value: function(e) {
                this.clearResponse(), this.clearDateTime(), this.clearNb(e), this.clearHashedPd(e), this.clearHashedConsentData()
            }
        }, {
            key: "removeLegacyCookies",
            value: function(t) {
                var n = new Date(Date.now() - 1e3).toUTCString();
                r.a.LEGACY_COOKIE_NAMES.forEach(function(e) {
                    Object(i.t)("".concat(e), "", n), Object(i.t)("".concat(e, "_nb"), "", n), Object(i.t)("".concat(e, "_").concat(t, "_nb"), "", n), Object(i.t)("".concat(e, "_last"), "", n), Object(i.t)("".concat(e, ".cached_pd"), "", n), Object(i.t)("".concat(e, ".cached_consent_data"), "", n)
                })
            }
        }, {
            key: "storedConsentDataMatchesConsentData",
            value: function(e) {
                return a.storedDataMatchesCurrentData(this.getHashedConsentData(), e.hashCode())
            }
        }]) && o(e.prototype, t), n && o(e, n), a
    }()
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.d(t, "a", function() {
        return a
    });
    var o = "_exp",
        a = function() {
            function n(e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), r(this, "available", !1), r(this, "win", void 0), r(this, "writingEnabled", void 0), this.win = e, this.writingEnabled = t;
                t = "__id5test";
                try {
                    this.writingEnabled && this.win.localStorage.setItem(t, t), this.win.localStorage.removeItem(t), this.available = !0
                } catch (e) {}
            }
            var e, t, a;
            return e = n, (t = [{
                key: "isAvailable",
                value: function() {
                    return this.available
                }
            }, {
                key: "getItem",
                value: function(e) {
                    if (this.available) return this.win.localStorage.getItem(e)
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    this.available && this.writingEnabled && this.win.localStorage.setItem(e, t)
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    this.available && this.win.localStorage.removeItem(e)
                }
            }, {
                key: "getItemWithExpiration",
                value: function(e) {
                    var t = e.name,
                        e = this.getItem(t + o);
                    return !e || new Date(e).getTime() - Date.now() <= 0 ? (this.removeItemWithExpiration({
                        name: t
                    }), null) : this.getItem(t)
                }
            }, {
                key: "setItemWithExpiration",
                value: function(e, t) {
                    var n = e.name,
                        e = e.expiresDays,
                        e = Date.now() + 864e5 * e,
                        e = new Date(e).toUTCString();
                    this.setItem(n + o, e), this.setItem(n, t)
                }
            }, {
                key: "removeItemWithExpiration",
                value: function(e) {
                    e = e.name;
                    this.removeItem(e), this.removeItem(e + o)
                }
            }]) && i(e.prototype, t), a && i(e, a), n
        }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var s = n(0);

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var r = function() {
        function c(e, t) {
            if (! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, c), i(this, "invocationId", void 0), i(this, "options", void 0), i(this, "providedOptions", void 0), i(this, "invalidSegments", void 0), this.invocationId = e, this.options = {
                    debugBypassConsent: !1,
                    allowLocalStorageWithoutConsentApi: !1,
                    cmpApi: "iab",
                    consentData: {
                        getConsentData: {
                            consentData: void 0,
                            gdprApplies: void 0
                        },
                        getVendorConsents: {}
                    },
                    refreshInSeconds: 7200,
                    partnerId: void 0,
                    partnerUserId: void 0,
                    callbackOnAvailable: void 0,
                    callbackOnUpdates: void 0,
                    callbackTimeoutInMs: void 0,
                    pd: void 0,
                    abTesting: {
                        enabled: !1,
                        controlGroupPct: 0
                    },
                    provider: void 0,
                    maxCascades: 8,
                    applyCreativeRestrictions: !1,
                    segments: void 0
                }, this.providedOptions = {}, !t.partnerId || "number" != typeof t.partnerId) throw new Error("partnerId is required and must be a number");
            this.invalidSegments = 0, this.updOptions(t)
        }
        var e, t, n;
        return e = c, (t = [{
            key: "getOptions",
            value: function() {
                return this.options
            }
        }, {
            key: "getProvidedOptions",
            value: function() {
                return this.providedOptions
            }
        }, {
            key: "getInvalidSegments",
            value: function() {
                return this.invalidSegments
            }
        }, {
            key: "updOptions",
            value: function(i) {
                var n = this,
                    r = this;
                if (Object(s.o)(i)) {
                    if (Object(s.n)(this.options.partnerId) && Object(s.n)(i.partnerId) && i.partnerId !== this.options.partnerId) throw new Error("Cannot update config with a different partnerId");
                    var o = function(e, t) {
                        n.options[e] = t, n.providedOptions[e] = t
                    };
                    Object.keys(i).forEach(function(e) {
                        var n, t, a;
                        "segments" === e ? (a = i[e], n = [], Object(s.h)(a) ? (a.forEach(function(e, t) {
                            t = "segments[".concat(t, "]");
                            return Object(s.h)(e.ids) && Object(s.b)(e.ids, s.p) ? e.ids.length < 1 ? (Object(s.q)(r.invocationId, "Config option ".concat(t, ".ids should contain at least one segment ID")), void(r.invalidSegments += 1)) : Object(s.p)(e.destination) ? void n.push(e) : (l(r.invocationId, "".concat(t, ".destination"), "String", e.destination), void(r.invalidSegments += 1)) : (l(r.invocationId, "".concat(t, ".ids"), "Array of String", e.ids), void(r.invalidSegments += 1))
                        }), o(e, n)) : l(r.invocationId, e, "Array", a)) : (t = c.configTypes[e], a = i[e], Object(s.g)(a, t) ? o(e, a) : l(r.invocationId, e, t, a))
                    })
                } else Object(s.q)(this.invocationId, "Config options must be an object")
            }
        }]) && a(e.prototype, t), n && a(e, n), c
    }();

    function l(e, t, n, a) {
        Object(s.q)(e, "Config option ".concat(t, " must be of type ").concat(n, " but was ").concat(toString.call(a), ". Ignoring..."))
    }
    i(r, "configTypes", {
        debugBypassConsent: "Boolean",
        allowLocalStorageWithoutConsentApi: "Boolean",
        cmpApi: "String",
        consentData: "Object",
        refreshInSeconds: "Number",
        partnerId: "Number",
        partnerUserId: "String",
        callbackOnAvailable: "Function",
        callbackOnUpdates: "Function",
        callbackTimeoutInMs: "Number",
        pd: "String",
        abTesting: "Object",
        provider: "String",
        maxCascades: "Number",
        applyCreativeRestrictions: "Boolean"
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n = n(7);
    window.ID5 || (window.ID5 = n.a)
}, function(e, t, n) {
    "use strict";
    var h = n(0),
        i = n(8),
        s = n(3),
        l = n(2),
        u = n(9),
        r = n(10),
        d = n(4),
        f = n(5);

    function o(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
            if (null != n) {
                var a, i, r = [],
                    o = !0,
                    c = !1;
                try {
                    for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                } catch (e) {
                    c = !0, i = e
                } finally {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (c) throw i
                    }
                }
                return r
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
        return a
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var v = "https://id5-sync.com",
        n = new(function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), p(this, "loaded", !1), p(this, "_isUsingCdn", !1), p(this, "_referer", !1), p(this, "_version", r.a), p(this, "versions", {}), p(this, "invocationId", 0), this.loaded = !0, this._isUsingCdn = !!(document && document.currentScript && document.currentScript.src && 0 === document.currentScript.src.indexOf("https://cdn.id5-sync.com")), this._referer = Object(i.a)(), this.versions[r.a] = !0
            }
            var t, n, a;
            return t = e, (n = [{
                key: "debug",
                get: function() {
                    return Object(h.l)()
                },
                set: function(e) {
                    Object(h.u)(e)
                }
            }, {
                key: "init",
                value: function(e) {
                    var t = this.invocationId;
                    this.invocationId += 1;
                    try {
                        Object(h.r)(t, "ID5 API version ".concat(this._version, ". Invoking init()"), e);
                        var n = new f.a(t, e),
                            a = n.getOptions(),
                            i = new d.a(window.top, !a.applyCreativeRestrictions),
                            r = new l.a(t, i),
                            o = new s.a(t, function() {
                                return r.localStorageGrant(a.allowLocalStorageWithoutConsentApi, a.debugBypassConsent)
                            }, i),
                            c = new u.a(t, n, o, r);
                        return this.getId(c, !1), Object(h.r)(t, "ID5 initialized for partner ".concat(a.partnerId, " with referer ").concat(this._referer.referer, " and options"), e), c
                    } catch (e) {
                        Object(h.q)(t, "Exception caught during init()", e)
                    }
                }
            }, {
                key: "refreshId",
                value: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!Object(h.i)(e)) throw new Error("Invalid signature for refreshId(): second parameter must be a boolean");
                    try {
                        Object(h.r)(t.invocationId, "Invoking refreshId()", arguments), t.startRefresh(e), t.updateOptions(n), t.consentManagement.resetConsentData(), this.getId(t, e)
                    } catch (e) {
                        Object(h.q)(t.invocationId, "Exception caught from refreshId()", e)
                    }
                    return t
                }
            }, {
                key: "getId",
                value: function(i) {
                    var r, e, o = this,
                        c = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        s = i.getOptions(),
                        l = 0,
                        u = !1,
                        d = !1,
                        f = !1,
                        t = i.localStorageGrant();
                    t.isDefinitivelyAllowed() && (Object(h.r)(i.invocationId, "Using local storage for cached ID", t), r = i.clientStore.getResponse(), e = i.clientStore.getDateTime(), u = e <= 0 || Date.now() - e > 1e3 * s.refreshInSeconds, l = i.clientStore.getNb(s.partnerId), d = !i.clientStore.storedPdMatchesPd(s.partnerId, s.pd)), r || (Object(h.r)(i.invocationId, "No cached ID found"), r = i.clientStore.getResponseFromLegacyCookie(), u = !0), r && r.universal_uid && !d ? (Object(h.r)(i.invocationId, "ID5 User ID available from cache:", {
                        storedResponse: r,
                        storedDateTime: e,
                        refreshNeeded: u
                    }), i.setUserId(r, !0), l = i.clientStore.incNb(s.partnerId, l), f = !0) : r && r.universal_uid && d ? Object(h.r)(i.invocationId, "PD value has changed, so ignoring User ID from cache") : r && !r.universal_uid ? Object(h.q)(i.invocationId, "Invalid stored response: ", r) : Object(h.r)(i.invocationId, "No ID5 User ID available from cache"), i.consentManagement.requestConsent(s.debugBypassConsent, s.cmpApi, s.consentData, function(t) {
                        var e, n, a = i.localStorageGrant();
                        Object(h.r)(i.invocationId, "Local storage grant", a), a.allowed ? (r = i.clientStore.getResponse() || i.clientStore.getResponseFromLegacyCookie(), e = !i.clientStore.storedConsentDataMatchesConsentData(t), i.clientStore.putHashedConsentData(t), i.clientStore.putHashedPd(s.partnerId, s.pd), ((a = !r || !r.universal_uid || !r.signature) || u || e || d || c) && (Object(h.r)(i.invocationId, "Decided to fetch a fresh ID5 ID", {
                            missingStoredData: a,
                            refreshInSecondsHasElapsed: u,
                            consentHasChanged: e,
                            pdHasChanged: d,
                            forceFetch: c
                        }), n = o.gatherData(s, i, l, t, r), o.gatherLbData(function(e) {
                            n.extensions = {
                                lb: e,
                                lbCDN: "%%LB_CDN%%"
                            }, o.fetchFreshID5ID(n, s, t, i, c, f)
                        }, i))) : Object(h.r)(i.invocationId, "No legal basis to use ID5", t)
                    })
                }
            }, {
                key: "gatherData",
                value: function(n, e, t, a, i) {
                    var r = {
                            partner: n.partnerId,
                            v: this._version,
                            o: "api",
                            gdpr: a.gdprApplies ? 1 : 0,
                            rf: this._referer.referer,
                            u: this._referer.stack[0] || window.location.href,
                            top: this._referer.reachedTop ? 1 : 0,
                            localStorage: e.clientStore.isLocalStorageAvailable() ? 1 : 0,
                            nbPage: t,
                            id5cdn: this._isUsingCdn,
                            ua: window.navigator.userAgent
                        },
                        t = a.gdprApplies ? a.consentString : void 0;
                    Object(h.j)(t) && (r.gdpr_consent = t), Object(h.j)(a.allowedVendors) && (r.allowed_vendors = a.allowedVendors);
                    i = i && i.signature ? i.signature : void 0;
                    return Object(h.j)(i) && (r.s = i), a.hasCcpaString && (r.us_privacy = a.ccpaString), Object.entries({
                        pd: "pd",
                        partnerUserId: "puid",
                        provider: "provider",
                        segments: "segments"
                    }).forEach(function(e) {
                        var t = o(e, 2),
                            e = t[0],
                            t = t[1];
                        Object(h.j)(n[e]) && (r[t] = n[e])
                    }), !0 === n.abTesting.enabled && (r.ab_testing = {
                        enabled: !0,
                        control_group_pct: e.getOptions().abTesting.controlGroupPct
                    }), 0 < e.getInvalidSegments() && (r._invalid_segments = e.getInvalidSegments()), Object(h.m)() && (r._trace = !0), r
                }
            }, {
                key: "fetchFreshID5ID",
                value: function(e, t, n, a, i, r) {
                    var o = "".concat(v, "/g/v2/").concat(t.partnerId, ".json");
                    Object(h.r)(a.invocationId, "Fetching ID5 ID (forceFetch:".concat(i, ") from:"), o, e), Object(h.a)(o, {
                        success: this.handleSuccessfulFetchResponse(a, t, r, n),
                        error: function(e) {
                            Object(h.q)(a.invocationId, "Error during AJAX request to ID5 server", e)
                        }
                    }, JSON.stringify(e), {
                        method: "POST",
                        withCredentials: !0
                    })
                }
            }, {
                key: "handleSuccessfulFetchResponse",
                value: function(o, c, s, l) {
                    var u = this;
                    return function(e) {
                        var t = u.validateResponseIsCorrectJson(e, o, "fetch");
                        if (t)
                            if (Object(h.p)(t.universal_uid)) {
                                Object(h.r)(o.invocationId, "Valid json response from ID5 received", t);
                                try {
                                    o.setUserId(t, !1), o.consentManagement.setStoredPrivacy(t.privacy);
                                    var n, a, i, r = o.localStorageGrant();
                                    r.isDefinitivelyAllowed() ? (Object(h.r)(o.invocationId, "Storing ID in cache"), o.clientStore.putResponse(e), o.clientStore.setDateTime((new Date).toUTCString()), o.clientStore.setNb(c.partnerId, s ? 0 : 1)) : (Object(h.r)(o.invocationId, "Cannot use local storage to cache ID", r), o.clientStore.clearAll(c.partnerId)), o.clientStore.removeLegacyCookies(c.partnerId), !0 === t.cascade_needed && r.isDefinitivelyAllowed() && 0 <= c.maxCascades && !c.applyCreativeRestrictions && (n = c.partnerUserId && 0 < c.partnerUserId.length, a = l.gdprApplies ? l.consentString : void 0, i = "".concat(v, "/").concat(n ? "s" : "i", "/").concat(c.partnerId, "/").concat(c.maxCascades, ".gif?id5id=").concat(o._userId, "&o=api&").concat(n ? "puid=" + c.partnerUserId + "&" : "", "gdpr_consent=").concat(a, "&gdpr=").concat(l.gdprApplies), Object(h.r)(o.invocationId, "Opportunities to cascade available", i), Object(h.d)(i))
                                } catch (e) {
                                    Object(h.q)(o.invocationId, "Error during processing of valid ID5 server response", t, e)
                                }
                            } else Object(h.q)(o.invocationId, "Server response failed to validate", t)
                    }
                }
            }, {
                key: "validateResponseIsCorrectJson",
                value: function(t, n, a) {
                    if (!t || !Object(h.p)(t) || t.length < 1) Object(h.q)(n.invocationId, "Empty ".concat(a, ' response from ID5 servers: "').concat(t, '"'));
                    else try {
                        return JSON.parse(t)
                    } catch (e) {
                        Object(h.q)(n.invocationId, "Cannot parse the JSON server ".concat(a, " response"), t)
                    }
                    return null
                }
            }, {
                key: "gatherLbData",
                value: function(t, n) {
                    var a = this,
                        e = "".concat("https://lb.eu-1-id5-sync.com", "/lb/v1");
                    Object(h.a)(e, {
                        success: function(e) {
                            e = a.validateResponseIsCorrectJson(e, n, "lb");
                            t(e ? e.lb : null)
                        },
                        error: function(e) {
                            Object(h.s)(n.invocationId, "Got error from lb endpoint", e), t(null)
                        }
                    }, null)
                }
            }]) && c(t.prototype, n), a && c(t, a), e
        }());
    t.a = n
}, function(e, t, n) {
    "use strict";

    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, a = arguments[t];
                for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }).apply(this, arguments)
    }
    n.d(t, "a", function() {
        return a
    });
    var r, a = (r = window, function() {
        try {
            var e, t = o(),
                n = t.length - 1,
                a = null !== t[n].location || 0 < n && null !== t[n - 1].referrer,
                i = function(e) {
                    for (var t, n = [], a = null, i = null, r = null, o = null, c = null, s = e.length - 1; 0 <= s; s--) {
                        try {
                            i = e[s].location
                        } catch (e) {}
                        if (i) n.push(i), c = c || i;
                        else if (0 !== s) {
                            t = e[s - 1];
                            try {
                                r = t.referrer, o = t.ancestor
                            } catch (e) {}
                            r ? (n.push(r), c = c || r) : o ? (n.push(o), c = c || o) : n.push(a)
                        } else n.push(a)
                    }
                    return {
                        stack: n,
                        detectedRefererUrl: c
                    }
                }(t);
            return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                referer: i.detectedRefererUrl,
                reachedTop: a,
                numIframes: n,
                stack: i.stack,
                canonicalUrl: e
            }
        } catch (e) {}
    });

    function o() {
        var e = function() {
                var t, n = [];
                do {
                    try {
                        t = t ? t.parent : r;
                        try {
                            var e = t === r.top,
                                a = {
                                    referrer: t.document.referrer || null,
                                    location: t.location.href || null,
                                    isTop: e
                                };
                            e && (a = i(a, {
                                canonicalUrl: function(e) {
                                    try {
                                        var t = e.querySelector("link[rel='canonical']");
                                        if (null !== t) return t.href
                                    } catch (e) {}
                                    return null
                                }(t.document)
                            })), n.push(a)
                        } catch (e) {
                            n.push({
                                referrer: null,
                                location: null,
                                isTop: t === r.top
                            })
                        }
                    } catch (e) {
                        return n.push({
                            referrer: null,
                            location: null,
                            isTop: !1
                        }), n
                    }
                } while (t !== r.top);
                return n
            }(),
            t = function() {
                try {
                    return r.location.ancestorOrigins ? r.location.ancestorOrigins : void 0
                } catch (e) {}
            }();
        if (t)
            for (var n = 0, a = t.length; n < a; n++) e[n].ancestor = t[n];
        return e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var t = n(1),
        a = n.n(t),
        o = n(0);
    n(5), n(3), n(2);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var r = function() {
        function r(e, t, n, a) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), c(this, "_availableCallbackTimerId", void 0), c(this, "_availableCallbackFired", !1), c(this, "_availableCallback", void 0), c(this, "_updateCallback", void 0), c(this, "_refreshCallbackTimerId", void 0), c(this, "_refreshCallbackFired", !1), c(this, "_refreshCallback", void 0), c(this, "_isExposed", void 0), c(this, "_fromCache", void 0), c(this, "_isRefreshing", !1), c(this, "_isRefreshingWithFetch", !1), c(this, "_userId", void 0), c(this, "_linkType", void 0), c(this, "_userIdAvailable", !1), c(this, "invocationId", void 0), c(this, "config", void 0), c(this, "clientStore", void 0), c(this, "consentManagement", void 0), this.invocationId = e, this.config = t, this.clientStore = n, this.consentManagement = a
        }
        var e, t, n;
        return e = r, n = [{
            key: "doFireOnAvailableCallBack",
            value: function(e) {
                Object(o.r)(e.invocationId, "Id5Status.doFireOnAvailableCallBack"), e._availableCallbackFired = !0, e._availableCallbackTimerId = void 0, e._availableCallback(e)
            }
        }, {
            key: "doFireOnUpdateCallBack",
            value: function(e) {
                Object(o.r)(e.invocationId, "Id5Status.doFireOnUpdateCallBack"), e._updateCallback(e)
            }
        }, {
            key: "doFireOnRefreshCallBack",
            value: function(e) {
                Object(o.r)(e.invocationId, "Id5Status.doFireOnRefreshCallBack"), e._refreshCallbackFired = !0, e._refreshCallbackTimerId = void 0, e._isRefreshing = !1, e._isRefreshingWithFetch = !1, e._refreshCallback(e)
            }
        }], (t = [{
            key: "getOptions",
            value: function() {
                return this.config.getOptions()
            }
        }, {
            key: "getInvalidSegments",
            value: function() {
                return this.config.getInvalidSegments()
            }
        }, {
            key: "updateOptions",
            value: function(e) {
                return this.config.updOptions(e)
            }
        }, {
            key: "startRefresh",
            value: function(e) {
                this._isRefreshing = !0, this._isRefreshingWithFetch = e
            }
        }, {
            key: "setUserId",
            value: function(e, t) {
                var n = this,
                    a = e.universal_uid,
                    i = e.link_type || 0;
                if (this._isExposed = !0, Object(o.o)(e.ab_testing)) switch (e.ab_testing.result) {
                    case "normal":
                        break;
                    default:
                    case "error":
                        Object(o.q)(this.invocationId, "Id5Status: There was an error with A/B Testing. Make sure controlGroupRatio is a number >= 0 and <= 1");
                        break;
                    case "control":
                        this._isExposed = !1, this.info("User is in control group!")
                }
                e = this._userId !== a || this._linkType !== i;
                this._userIdAvailable = !0, this._userId = a, this._linkType = i, this._fromCache = t, this.info("User id updated, hasChanged: ".concat(e, ", fromCache: ").concat(t)), Object(o.k)(this._availableCallback) && !1 === this._availableCallbackFired && (this._availableCallbackTimerId && (this.info("Cancelling pending onAvailableCallback watchdog"), clearTimeout(this._availableCallbackTimerId), this._availableCallbackTimerId = void 0), this._availableCallbackTimerId = setTimeout(function() {
                    return r.doFireOnAvailableCallBack(n)
                }, 0)), this._isRefreshing && Object(o.k)(this._refreshCallback) && !1 === this._refreshCallbackFired && (!1 !== t && !1 !== this._isRefreshingWithFetch || (this._refreshCallbackTimerId && (this.info("Cancelling pending onRefreshCallback watchdog"), clearTimeout(this._refreshCallbackTimerId), this._refreshCallbackTimerId = void 0), this._refreshCallbackTimerId = setTimeout(function() {
                    return r.doFireOnRefreshCallBack(n)
                }, 0))), e && Object(o.k)(this._updateCallback) && setTimeout(function() {
                    return r.doFireOnUpdateCallBack(n)
                }, 0)
            }
        }, {
            key: "getUserId",
            value: function() {
                return !1 === this._isExposed ? "0" : this._userId
            }
        }, {
            key: "getLinkType",
            value: function() {
                return !1 === this._isExposed ? 0 : this._linkType
            }
        }, {
            key: "isFromCache",
            value: function() {
                return this._fromCache
            }
        }, {
            key: "exposeUserId",
            value: function() {
                return this._isExposed
            }
        }, {
            key: "getUserIdAsEid",
            value: function() {
                return {
                    source: a.a.ID5_EIDS_SOURCE,
                    uids: [{
                        atype: 1,
                        id: this.getUserId(),
                        ext: {
                            linkType: this.getLinkType(),
                            abTestingControlGroup: !this.exposeUserId()
                        }
                    }]
                }
            }
        }, {
            key: "onAvailable",
            value: function(e, t) {
                if (!Object(o.k)(e)) throw new Error("onAvailable expect a function");
                var n;
                return Object(o.k)(this._availableCallback) ? this.info("onAvailable was already called, ignoring") : (this._availableCallback = e, (n = this)._userIdAvailable ? (this.info("User id already available firing callback immediately"), this._availableCallbackTimerId = setTimeout(function() {
                    return r.doFireOnAvailableCallBack(n)
                }, 0)) : 0 < t && (this._availableCallbackTimerId = setTimeout(function() {
                    return r.doFireOnAvailableCallBack(n)
                }, t))), this
            }
        }, {
            key: "onUpdate",
            value: function(e) {
                if (!Object(o.k)(e)) throw new Error("onUpdate expect a function");
                this._updateCallback = e;
                var t = this;
                return this._userIdAvailable && setTimeout(function() {
                    return r.doFireOnUpdateCallBack(t)
                }, 0), this
            }
        }, {
            key: "onRefresh",
            value: function(e, t) {
                if (!Object(o.k)(e)) throw new Error("onRefresh expect a function");
                this._refreshCallbackTimerId && (clearTimeout(this._refreshCallbackTimerId), this._refreshCallbackTimerId = void 0), this._refreshCallback = e;
                var n = this;
                return !0 === this._isRefreshing && !1 === this._isRefreshingWithFetch && this._userIdAvailable ? this._refreshCallbackTimerId = setTimeout(function() {
                    return r.doFireOnRefreshCallBack(n)
                }, 0) : 0 < t && (this._refreshCallbackTimerId = setTimeout(function() {
                    return r.doFireOnRefreshCallBack(n)
                }, t)), this
            }
        }, {
            key: "localStorageGrant",
            value: function() {
                return this.clientStore.localStorageGrant()
            }
        }, {
            key: "info",
            value: function(e) {
                Object(o.r)(this.invocationId, "Id5Status: " + e)
            }
        }]) && i(e.prototype, t), n && i(e, n), r
    }()
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var a = "1.0.15"
}]);