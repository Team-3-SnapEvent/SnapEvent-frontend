function Qg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function mp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vp = { exports: {} },
  Bl = {},
  gp = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Yg = Symbol.for("react.portal"),
  Zg = Symbol.for("react.fragment"),
  Xg = Symbol.for("react.strict_mode"),
  Jg = Symbol.for("react.profiler"),
  qg = Symbol.for("react.provider"),
  ey = Symbol.for("react.context"),
  ty = Symbol.for("react.forward_ref"),
  ny = Symbol.for("react.suspense"),
  ry = Symbol.for("react.memo"),
  oy = Symbol.for("react.lazy"),
  rf = Symbol.iterator;
function iy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rf && e[rf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var yp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sp = Object.assign,
  wp = {};
function Wr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = wp), (this.updater = n || yp);
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _p() {}
_p.prototype = Wr.prototype;
function ju(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = wp), (this.updater = n || yp);
}
var Du = (ju.prototype = new _p());
Du.constructor = ju;
Sp(Du, Wr.prototype);
Du.isPureReactComponent = !0;
var of = Array.isArray,
  Rp = Object.prototype.hasOwnProperty,
  Ou = { current: null },
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function xp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Rp.call(t, r) && !Ep.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ni, type: e, key: i, ref: l, props: o, _owner: Ou.current };
}
function ly(e, t) {
  return { $$typeof: ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function zu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function sy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lf = /\/+/g;
function Os(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sy("" + e.key) : t.toString(36);
}
function Hi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Yg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Os(l, 0) : r),
      of(o)
        ? ((n = ""),
          e != null && (n = e.replace(lf, "$&/") + "/"),
          Hi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (zu(o) &&
            (o = ly(o, n + (!o.key || (l && l.key === o.key) ? "" : ("" + o.key).replace(lf, "$&/") + "/") + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), of(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Os(i, s);
      l += Hi(i, t, n, a, o);
    }
  else if (((a = iy(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (a = r + Os(i, s++)), (l += Hi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Hi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function ay(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  Ki = { transition: null },
  uy = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: Ki, ReactCurrentOwner: Ou };
function kp() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
  map: vi,
  forEach: function (e, t, n) {
    vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zu(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
re.Component = Wr;
re.Fragment = Zg;
re.Profiler = Jg;
re.PureComponent = ju;
re.StrictMode = Xg;
re.Suspense = ny;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uy;
re.act = kp;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Sp({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ou.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t) Rp.call(t, a) && !Ep.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ni, type: e.type, key: o, ref: i, props: r, _owner: l };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: ey,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qg, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = xp;
re.createFactory = function (e) {
  var t = xp.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: ty, render: e };
};
re.isValidElement = zu;
re.lazy = function (e) {
  return { $$typeof: oy, _payload: { _status: -1, _result: e }, _init: ay };
};
re.memo = function (e, t) {
  return { $$typeof: ry, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = Ki.transition;
  Ki.transition = {};
  try {
    e();
  } finally {
    Ki.transition = t;
  }
};
re.unstable_act = kp;
re.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
re.useContext = function (e) {
  return Ye.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
re.useId = function () {
  return Ye.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return Ye.current.useRef(e);
};
re.useState = function (e) {
  return Ye.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return Ye.current.useTransition();
};
re.version = "18.3.1";
gp.exports = re;
var M = gp.exports;
const le = mp(M),
  cy = Qg({ __proto__: null, default: le }, [M]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fy = M,
  dy = Symbol.for("react.element"),
  py = Symbol.for("react.fragment"),
  hy = Object.prototype.hasOwnProperty,
  my = fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) hy.call(t, r) && !vy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: dy, type: e, key: i, ref: l, props: o, _owner: my.current };
}
Bl.Fragment = py;
Bl.jsx = Cp;
Bl.jsxs = Cp;
vp.exports = Bl;
var v = vp.exports,
  xa = {},
  Tp = { exports: {} },
  pt = {},
  Np = { exports: {} },
  Lp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, b) {
    var $ = j.length;
    j.push(b);
    e: for (; 0 < $; ) {
      var W = ($ - 1) >>> 1,
        w = j[W];
      if (0 < o(w, b)) (j[W] = b), (j[$] = w), ($ = W);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var b = j[0],
      $ = j.pop();
    if ($ !== b) {
      j[0] = $;
      e: for (var W = 0, w = j.length, A = w >>> 1; W < A; ) {
        var P = 2 * (W + 1) - 1,
          K = j[P],
          D = P + 1,
          Z = j[D];
        if (0 > o(K, $)) D < w && 0 > o(Z, K) ? ((j[W] = Z), (j[D] = $), (W = D)) : ((j[W] = K), (j[P] = $), (W = P));
        else if (D < w && 0 > o(Z, $)) (j[W] = Z), (j[D] = $), (W = D);
        else break e;
      }
    }
    return b;
  }
  function o(j, b) {
    var $ = j.sortIndex - b.sortIndex;
    return $ !== 0 ? $ : j.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    f = 1,
    d = null,
    m = 3,
    S = !1,
    g = !1,
    _ = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= j) r(u), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(u);
    }
  }
  function E(j) {
    if (((_ = !1), p(j), !g))
      if (n(a) !== null) (g = !0), Me(k);
      else {
        var b = n(u);
        b !== null && Ve(E, b.startTime - j);
      }
  }
  function k(j, b) {
    (g = !1), _ && ((_ = !1), h(I), (I = -1)), (S = !0);
    var $ = m;
    try {
      for (p(b), d = n(a); d !== null && (!(d.expirationTime > b) || (j && !de())); ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var w = W(d.expirationTime <= b);
          (b = e.unstable_now()), typeof w == "function" ? (d.callback = w) : d === n(a) && r(a), p(b);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var A = !0;
      else {
        var P = n(u);
        P !== null && Ve(E, P.startTime - b), (A = !1);
      }
      return A;
    } finally {
      (d = null), (m = $), (S = !1);
    }
  }
  var C = !1,
    x = null,
    I = -1,
    oe = 5,
    B = -1;
  function de() {
    return !(e.unstable_now() - B < oe);
  }
  function Xe() {
    if (x !== null) {
      var j = e.unstable_now();
      B = j;
      var b = !0;
      try {
        b = x(!0, j);
      } finally {
        b ? se() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var se;
  if (typeof c == "function")
    se = function () {
      c(Xe);
    };
  else if (typeof MessageChannel < "u") {
    var $e = new MessageChannel(),
      kt = $e.port2;
    ($e.port1.onmessage = Xe),
      (se = function () {
        kt.postMessage(null);
      });
  } else
    se = function () {
      T(Xe, 0);
    };
  function Me(j) {
    (x = j), C || ((C = !0), se());
  }
  function Ve(j, b) {
    I = T(function () {
      j(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || S || ((g = !0), Me(k));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (oe = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = m;
      }
      var $ = m;
      m = b;
      try {
        return j();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, b) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = m;
      m = j;
      try {
        return b();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (j, b, $) {
      var W = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? W + $ : W))
          : ($ = W),
        j)
      ) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return (
        (w = $ + w),
        (j = { id: f++, callback: b, priorityLevel: j, startTime: $, expirationTime: w, sortIndex: -1 }),
        $ > W
          ? ((j.sortIndex = $), t(u, j), n(a) === null && j === n(u) && (_ ? (h(I), (I = -1)) : (_ = !0), Ve(E, $ - W)))
          : ((j.sortIndex = w), t(a, j), g || S || ((g = !0), Me(k))),
        j
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (j) {
      var b = m;
      return function () {
        var $ = m;
        m = b;
        try {
          return j.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(Lp);
Np.exports = Lp;
var gy = Np.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yy = M,
  dt = gy;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ap = new Set(),
  Do = {};
function Zn(e, t) {
  Tr(e, t), Tr(e + "Capture", t);
}
function Tr(e, t) {
  for (Do[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
}
var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  ka = Object.prototype.hasOwnProperty,
  Sy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sf = {},
  af = {};
function wy(e) {
  return ka.call(af, e) ? !0 : ka.call(sf, e) ? !1 : Sy.test(e) ? (af[e] = !0) : ((sf[e] = !0), !1);
}
function _y(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ry(e, t, n, r) {
  if (t === null || typeof t > "u" || _y(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ze(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Be[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vu = /[\-:]([a-z])/g;
function Uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vu, Uu);
    Be[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Vu, Uu);
  Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vu, Uu);
  Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fu(e, t, n, r) {
  var o = Be.hasOwnProperty(t) ? Be[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Ry(t, n, o, r) && (n = null),
    r || o === null
      ? wy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  Bu = Symbol.for("react.strict_mode"),
  Ca = Symbol.for("react.profiler"),
  Pp = Symbol.for("react.provider"),
  Ip = Symbol.for("react.context"),
  bu = Symbol.for("react.forward_ref"),
  Ta = Symbol.for("react.suspense"),
  Na = Symbol.for("react.suspense_list"),
  Wu = Symbol.for("react.memo"),
  ln = Symbol.for("react.lazy"),
  $p = Symbol.for("react.offscreen"),
  uf = Symbol.iterator;
function to(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uf && e[uf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ke = Object.assign,
  zs;
function vo(e) {
  if (zs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zs = (t && t[1]) || "";
    }
  return (
    `
` +
    zs +
    e
  );
}
var Vs = !1;
function Us(e, t) {
  if (!e || Vs) return "";
  Vs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Vs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vo(e) : "";
}
function Ey(e) {
  switch (e.tag) {
    case 5:
      return vo(e.type);
    case 16:
      return vo("Lazy");
    case 13:
      return vo("Suspense");
    case 19:
      return vo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Us(e.type, !1)), e;
    case 11:
      return (e = Us(e.type.render, !1)), e;
    case 1:
      return (e = Us(e.type, !0)), e;
    default:
      return "";
  }
}
function La(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case sr:
      return "Portal";
    case Ca:
      return "Profiler";
    case Bu:
      return "StrictMode";
    case Ta:
      return "Suspense";
    case Na:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ip:
        return (e.displayName || "Context") + ".Consumer";
      case Pp:
        return (e._context.displayName || "Context") + ".Provider";
      case bu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Wu:
        return (t = e.displayName || null), t !== null ? t : La(e.type) || "Memo";
      case ln:
        (t = e._payload), (e = e._init);
        try {
          return La(e(t));
        } catch {}
    }
  return null;
}
function xy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return La(t);
    case 8:
      return t === Bu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ky(e) {
  var t = Mp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yi(e) {
  e._valueTracker || (e._valueTracker = ky(e));
}
function jp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Mp(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function cl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Aa(e, t) {
  var n = t.checked;
  return ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function cf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Dp(e, t) {
  (t = t.checked), t != null && Fu(e, "checked", t, !1);
}
function Pa(e, t) {
  Dp(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ia(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ia(e, t.type, Rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ff(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ia(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var go = Array.isArray;
function wr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function $a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ke({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function df(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (go(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function Op(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ma(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Si,
  Vp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Si = Si || document.createElement("div"),
          Si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Oo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ro = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Cy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ro).forEach(function (e) {
  Cy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ro[t] = Ro[e]);
  });
});
function Up(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ro.hasOwnProperty(e) && Ro[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Up(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ty = ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
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
    wbr: !0,
  }
);
function ja(e, t) {
  if (t) {
    if (Ty[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Da(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Oa = null;
function Hu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var za = null,
  _r = null,
  Rr = null;
function hf(e) {
  if ((e = ii(e))) {
    if (typeof za != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Gl(t)), za(e.stateNode, e.type, t));
  }
}
function Bp(e) {
  _r ? (Rr ? Rr.push(e) : (Rr = [e])) : (_r = e);
}
function bp() {
  if (_r) {
    var e = _r,
      t = Rr;
    if (((Rr = _r = null), hf(e), t)) for (e = 0; e < t.length; e++) hf(t[e]);
  }
}
function Wp(e, t) {
  return e(t);
}
function Hp() {}
var Fs = !1;
function Kp(e, t, n) {
  if (Fs) return e(t, n);
  Fs = !0;
  try {
    return Wp(e, t, n);
  } finally {
    (Fs = !1), (_r !== null || Rr !== null) && (Hp(), bp());
  }
}
function zo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Va = !1;
if (Xt)
  try {
    var no = {};
    Object.defineProperty(no, "passive", {
      get: function () {
        Va = !0;
      },
    }),
      window.addEventListener("test", no, no),
      window.removeEventListener("test", no, no);
  } catch {
    Va = !1;
  }
function Ny(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Eo = !1,
  fl = null,
  dl = !1,
  Ua = null,
  Ly = {
    onError: function (e) {
      (Eo = !0), (fl = e);
    },
  };
function Ay(e, t, n, r, o, i, l, s, a) {
  (Eo = !1), (fl = null), Ny.apply(Ly, arguments);
}
function Py(e, t, n, r, o, i, l, s, a) {
  if ((Ay.apply(this, arguments), Eo)) {
    if (Eo) {
      var u = fl;
      (Eo = !1), (fl = null);
    } else throw Error(L(198));
    dl || ((dl = !0), (Ua = u));
  }
}
function Xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function mf(e) {
  if (Xn(e) !== e) throw Error(L(188));
}
function Iy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return mf(o), e;
        if (i === r) return mf(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Qp(e) {
  return (e = Iy(e)), e !== null ? Yp(e) : null;
}
function Yp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zp = dt.unstable_scheduleCallback,
  vf = dt.unstable_cancelCallback,
  $y = dt.unstable_shouldYield,
  My = dt.unstable_requestPaint,
  Te = dt.unstable_now,
  jy = dt.unstable_getCurrentPriorityLevel,
  Ku = dt.unstable_ImmediatePriority,
  Xp = dt.unstable_UserBlockingPriority,
  pl = dt.unstable_NormalPriority,
  Dy = dt.unstable_LowPriority,
  Jp = dt.unstable_IdlePriority,
  bl = null,
  Ft = null;
function Oy(e) {
  if (Ft && typeof Ft.onCommitFiberRoot == "function")
    try {
      Ft.onCommitFiberRoot(bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : Uy,
  zy = Math.log,
  Vy = Math.LN2;
function Uy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zy(e) / Vy) | 0)) | 0;
}
var wi = 64,
  _i = 4194304;
function yo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = yo(s)) : ((i &= l), i !== 0 && (r = yo(i)));
  } else (l = n & ~o), l !== 0 ? (r = yo(l)) : i !== 0 && (r = yo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - $t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Fy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function By(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - $t(i),
      s = 1 << l,
      a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = Fy(s, t)) : a <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function Fa(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qp() {
  var e = wi;
  return (wi <<= 1), !(wi & 4194240) && (wi = 64), e;
}
function Bs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function by(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function eh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var th,
  Qu,
  nh,
  rh,
  oh,
  Ba = !1,
  Ri = [],
  hn = null,
  mn = null,
  vn = null,
  Vo = new Map(),
  Uo = new Map(),
  un = [],
  Wy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function gf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      hn = null;
      break;
    case "dragenter":
    case "dragleave":
      mn = null;
      break;
    case "mouseover":
    case "mouseout":
      vn = null;
      break;
    case "pointerover":
    case "pointerout":
      Vo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Uo.delete(t.pointerId);
  }
}
function ro(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = ii(t)), t !== null && Qu(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Hy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (hn = ro(hn, e, t, n, r, o)), !0;
    case "dragenter":
      return (mn = ro(mn, e, t, n, r, o)), !0;
    case "mouseover":
      return (vn = ro(vn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Vo.set(i, ro(Vo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), Uo.set(i, ro(Uo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function ih(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var n = Xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gp(n)), t !== null)) {
          (e.blockedOn = t),
            oh(e.priority, function () {
              nh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oa = r), n.target.dispatchEvent(r), (Oa = null);
    } else return (t = ii(n)), t !== null && Qu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function yf(e, t, n) {
  Gi(e) && n.delete(t);
}
function Ky() {
  (Ba = !1),
    hn !== null && Gi(hn) && (hn = null),
    mn !== null && Gi(mn) && (mn = null),
    vn !== null && Gi(vn) && (vn = null),
    Vo.forEach(yf),
    Uo.forEach(yf);
}
function oo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Ba || ((Ba = !0), dt.unstable_scheduleCallback(dt.unstable_NormalPriority, Ky)));
}
function Fo(e) {
  function t(o) {
    return oo(o, e);
  }
  if (0 < Ri.length) {
    oo(Ri[0], e);
    for (var n = 1; n < Ri.length; n++) {
      var r = Ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    hn !== null && oo(hn, e), mn !== null && oo(mn, e), vn !== null && oo(vn, e), Vo.forEach(t), Uo.forEach(t), n = 0;
    n < un.length;
    n++
  )
    (r = un[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); ) ih(n), n.blockedOn === null && un.shift();
}
var Er = tn.ReactCurrentBatchConfig,
  ml = !0;
function Gy(e, t, n, r) {
  var o = ue,
    i = Er.transition;
  Er.transition = null;
  try {
    (ue = 1), Yu(e, t, n, r);
  } finally {
    (ue = o), (Er.transition = i);
  }
}
function Qy(e, t, n, r) {
  var o = ue,
    i = Er.transition;
  Er.transition = null;
  try {
    (ue = 4), Yu(e, t, n, r);
  } finally {
    (ue = o), (Er.transition = i);
  }
}
function Yu(e, t, n, r) {
  if (ml) {
    var o = ba(e, t, n, r);
    if (o === null) Js(e, t, r, vl, n), gf(e, r);
    else if (Hy(o, e, t, n, r)) r.stopPropagation();
    else if ((gf(e, r), t & 4 && -1 < Wy.indexOf(e))) {
      for (; o !== null; ) {
        var i = ii(o);
        if ((i !== null && th(i), (i = ba(e, t, n, r)), i === null && Js(e, t, r, vl, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Js(e, t, r, null, n);
  }
}
var vl = null;
function ba(e, t, n, r) {
  if (((vl = null), (e = Hu(r)), (e = Mn(e)), e !== null))
    if (((t = Xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vl = e), null;
}
function lh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (jy()) {
        case Ku:
          return 1;
        case Xp:
          return 4;
        case pl:
        case Dy:
          return 16;
        case Jp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fn = null,
  Zu = null,
  Qi = null;
function sh() {
  if (Qi) return Qi;
  var e,
    t = Zu,
    n = t.length,
    r,
    o = "value" in fn ? fn.value : fn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Qi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ei() {
  return !0;
}
function Sf() {
  return !1;
}
function ht(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ei : Sf),
      (this.isPropagationStopped = Sf),
      this
    );
  }
  return (
    ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ei));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ei));
      },
      persist: function () {},
      isPersistent: Ei,
    }),
    t
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xu = ht(Hr),
  oi = ke({}, Hr, { view: 0, detail: 0 }),
  Yy = ht(oi),
  bs,
  Ws,
  io,
  Wl = ke({}, oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== io &&
            (io && e.type === "mousemove"
              ? ((bs = e.screenX - io.screenX), (Ws = e.screenY - io.screenY))
              : (Ws = bs = 0),
            (io = e)),
          bs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ws;
    },
  }),
  wf = ht(Wl),
  Zy = ke({}, Wl, { dataTransfer: 0 }),
  Xy = ht(Zy),
  Jy = ke({}, oi, { relatedTarget: 0 }),
  Hs = ht(Jy),
  qy = ke({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  e0 = ht(qy),
  t0 = ke({}, Hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  n0 = ht(t0),
  r0 = ke({}, Hr, { data: 0 }),
  _f = ht(r0),
  o0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  i0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  l0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function s0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = l0[e]) ? !!t[e] : !1;
}
function Ju() {
  return s0;
}
var a0 = ke({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = o0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? i0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function (e) {
      return e.type === "keypress" ? Yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  u0 = ht(a0),
  c0 = ke({}, Wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rf = ht(c0),
  f0 = ke({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju,
  }),
  d0 = ht(f0),
  p0 = ke({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  h0 = ht(p0),
  m0 = ke({}, Wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  v0 = ht(m0),
  g0 = [9, 13, 27, 32],
  qu = Xt && "CompositionEvent" in window,
  xo = null;
Xt && "documentMode" in document && (xo = document.documentMode);
var y0 = Xt && "TextEvent" in window && !xo,
  ah = Xt && (!qu || (xo && 8 < xo && 11 >= xo)),
  Ef = " ",
  xf = !1;
function uh(e, t) {
  switch (e) {
    case "keyup":
      return g0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ch(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ur = !1;
function S0(e, t) {
  switch (e) {
    case "compositionend":
      return ch(t);
    case "keypress":
      return t.which !== 32 ? null : ((xf = !0), Ef);
    case "textInput":
      return (e = t.data), e === Ef && xf ? null : e;
    default:
      return null;
  }
}
function w0(e, t) {
  if (ur) return e === "compositionend" || (!qu && uh(e, t)) ? ((e = sh()), (Qi = Zu = fn = null), (ur = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ah && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_0[e.type] : t === "textarea";
}
function fh(e, t, n, r) {
  Bp(r),
    (t = gl(t, "onChange")),
    0 < t.length && ((n = new Xu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var ko = null,
  Bo = null;
function R0(e) {
  Rh(e, 0);
}
function Hl(e) {
  var t = dr(e);
  if (jp(t)) return e;
}
function E0(e, t) {
  if (e === "change") return t;
}
var dh = !1;
if (Xt) {
  var Ks;
  if (Xt) {
    var Gs = "oninput" in document;
    if (!Gs) {
      var Cf = document.createElement("div");
      Cf.setAttribute("oninput", "return;"), (Gs = typeof Cf.oninput == "function");
    }
    Ks = Gs;
  } else Ks = !1;
  dh = Ks && (!document.documentMode || 9 < document.documentMode);
}
function Tf() {
  ko && (ko.detachEvent("onpropertychange", ph), (Bo = ko = null));
}
function ph(e) {
  if (e.propertyName === "value" && Hl(Bo)) {
    var t = [];
    fh(t, Bo, e, Hu(e)), Kp(R0, t);
  }
}
function x0(e, t, n) {
  e === "focusin" ? (Tf(), (ko = t), (Bo = n), ko.attachEvent("onpropertychange", ph)) : e === "focusout" && Tf();
}
function k0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hl(Bo);
}
function C0(e, t) {
  if (e === "click") return Hl(t);
}
function T0(e, t) {
  if (e === "input" || e === "change") return Hl(t);
}
function N0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == "function" ? Object.is : N0;
function bo(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ka.call(t, o) || !Dt(e[o], t[o])) return !1;
  }
  return !0;
}
function Nf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lf(e, t) {
  var n = Nf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Nf(n);
  }
}
function hh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? hh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function mh() {
  for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cl(e.document);
  }
  return t;
}
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function L0(e) {
  var t = mh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && hh(n.ownerDocument.documentElement, n)) {
    if (r !== null && ec(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Lf(n, i));
        var l = Lf(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var A0 = Xt && "documentMode" in document && 11 >= document.documentMode,
  cr = null,
  Wa = null,
  Co = null,
  Ha = !1;
function Af(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ha ||
    cr == null ||
    cr !== cl(r) ||
    ((r = cr),
    "selectionStart" in r && ec(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Co && bo(Co, r)) ||
      ((Co = r),
      (r = gl(Wa, "onSelect")),
      0 < r.length &&
        ((t = new Xu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = cr))));
}
function xi(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var fr = {
    animationend: xi("Animation", "AnimationEnd"),
    animationiteration: xi("Animation", "AnimationIteration"),
    animationstart: xi("Animation", "AnimationStart"),
    transitionend: xi("Transition", "TransitionEnd"),
  },
  Qs = {},
  vh = {};
Xt &&
  ((vh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation),
  "TransitionEvent" in window || delete fr.transitionend.transition);
function Kl(e) {
  if (Qs[e]) return Qs[e];
  if (!fr[e]) return e;
  var t = fr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vh) return (Qs[e] = t[n]);
  return e;
}
var gh = Kl("animationend"),
  yh = Kl("animationiteration"),
  Sh = Kl("animationstart"),
  wh = Kl("transitionend"),
  _h = new Map(),
  Pf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xn(e, t) {
  _h.set(e, t), Zn(t, [e]);
}
for (var Ys = 0; Ys < Pf.length; Ys++) {
  var Zs = Pf[Ys],
    P0 = Zs.toLowerCase(),
    I0 = Zs[0].toUpperCase() + Zs.slice(1);
  xn(P0, "on" + I0);
}
xn(gh, "onAnimationEnd");
xn(yh, "onAnimationIteration");
xn(Sh, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(wh, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
Zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var So =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(So));
function If(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Py(r, t, void 0, e), (e.currentTarget = null);
}
function Rh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          If(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]), (a = s.instance), (u = s.currentTarget), (s = s.listener), a !== i && o.isPropagationStopped())
          )
            break e;
          If(o, s, u), (i = a);
        }
    }
  }
  if (dl) throw ((e = Ua), (dl = !1), (Ua = null), e);
}
function he(e, t) {
  var n = t[Za];
  n === void 0 && (n = t[Za] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Eh(t, e, 2, !1), n.add(r));
}
function Xs(e, t, n) {
  var r = 0;
  t && (r |= 4), Eh(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function Wo(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      Ap.forEach(function (n) {
        n !== "selectionchange" && ($0.has(n) || Xs(n, !1, e), Xs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || ((t[ki] = !0), Xs("selectionchange", !1, t));
  }
}
function Eh(e, t, n, r) {
  switch (lh(t)) {
    case 1:
      var o = Gy;
      break;
    case 4:
      o = Qy;
      break;
    default:
      o = Yu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Va || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Js(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Mn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Kp(function () {
    var u = i,
      f = Hu(n),
      d = [];
    e: {
      var m = _h.get(e);
      if (m !== void 0) {
        var S = Xu,
          g = e;
        switch (e) {
          case "keypress":
            if (Yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = u0;
            break;
          case "focusin":
            (g = "focus"), (S = Hs);
            break;
          case "focusout":
            (g = "blur"), (S = Hs);
            break;
          case "beforeblur":
          case "afterblur":
            S = Hs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Xy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = d0;
            break;
          case gh:
          case yh:
          case Sh:
            S = e0;
            break;
          case wh:
            S = h0;
            break;
          case "scroll":
            S = Yy;
            break;
          case "wheel":
            S = v0;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = n0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Rf;
        }
        var _ = (t & 4) !== 0,
          T = !_ && e === "scroll",
          h = _ ? (m !== null ? m + "Capture" : null) : m;
        _ = [];
        for (var c = u, p; c !== null; ) {
          p = c;
          var E = p.stateNode;
          if (
            (p.tag === 5 && E !== null && ((p = E), h !== null && ((E = zo(c, h)), E != null && _.push(Ho(c, E, p)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < _.length && ((m = new S(m, g, null, n, f)), d.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m && n !== Oa && (g = n.relatedTarget || n.fromElement) && (Mn(g) || g[Jt]))
        )
          break e;
        if (
          (S || m) &&
          ((m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window),
          S
            ? ((g = n.relatedTarget || n.toElement),
              (S = u),
              (g = g ? Mn(g) : null),
              g !== null && ((T = Xn(g)), g !== T || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((S = null), (g = u)),
          S !== g)
        ) {
          if (
            ((_ = wf),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Rf), (E = "onPointerLeave"), (h = "onPointerEnter"), (c = "pointer")),
            (T = S == null ? m : dr(S)),
            (p = g == null ? m : dr(g)),
            (m = new _(E, c + "leave", S, n, f)),
            (m.target = T),
            (m.relatedTarget = p),
            (E = null),
            Mn(f) === u && ((_ = new _(h, c + "enter", g, n, f)), (_.target = p), (_.relatedTarget = T), (E = _)),
            (T = E),
            S && g)
          )
            t: {
              for (_ = S, h = g, c = 0, p = _; p; p = tr(p)) c++;
              for (p = 0, E = h; E; E = tr(E)) p++;
              for (; 0 < c - p; ) (_ = tr(_)), c--;
              for (; 0 < p - c; ) (h = tr(h)), p--;
              for (; c--; ) {
                if (_ === h || (h !== null && _ === h.alternate)) break t;
                (_ = tr(_)), (h = tr(h));
              }
              _ = null;
            }
          else _ = null;
          S !== null && $f(d, m, S, _, !1), g !== null && T !== null && $f(d, T, g, _, !0);
        }
      }
      e: {
        if (
          ((m = u ? dr(u) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var k = E0;
        else if (kf(m))
          if (dh) k = T0;
          else {
            k = k0;
            var C = x0;
          }
        else
          (S = m.nodeName) && S.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = C0);
        if (k && (k = k(e, u))) {
          fh(d, k, n, f);
          break e;
        }
        C && C(e, m, u),
          e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && Ia(m, "number", m.value);
      }
      switch (((C = u ? dr(u) : window), e)) {
        case "focusin":
          (kf(C) || C.contentEditable === "true") && ((cr = C), (Wa = u), (Co = null));
          break;
        case "focusout":
          Co = Wa = cr = null;
          break;
        case "mousedown":
          Ha = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ha = !1), Af(d, n, f);
          break;
        case "selectionchange":
          if (A0) break;
        case "keydown":
        case "keyup":
          Af(d, n, f);
      }
      var x;
      if (qu)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        ur ? uh(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (ah &&
          n.locale !== "ko" &&
          (ur || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && ur && (x = sh())
            : ((fn = f), (Zu = "value" in fn ? fn.value : fn.textContent), (ur = !0))),
        (C = gl(u, I)),
        0 < C.length &&
          ((I = new _f(I, e, null, n, f)),
          d.push({ event: I, listeners: C }),
          x ? (I.data = x) : ((x = ch(n)), x !== null && (I.data = x)))),
        (x = y0 ? S0(e, n) : w0(e, n)) &&
          ((u = gl(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new _f("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = x)));
    }
    Rh(d, t);
  });
}
function Ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = zo(e, n)), i != null && r.unshift(Ho(e, i, o)), (i = zo(e, t)), i != null && r.push(Ho(e, i, o))),
      (e = e.return);
  }
  return r;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $f(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = zo(n, i)), a != null && l.unshift(Ho(n, a, s)))
        : o || ((a = zo(n, i)), a != null && l.push(Ho(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var M0 = /\r\n?/g,
  j0 = /\u0000|\uFFFD/g;
function Mf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      M0,
      `
`
    )
    .replace(j0, "");
}
function Ci(e, t, n) {
  if (((t = Mf(t)), Mf(e) !== t && n)) throw Error(L(425));
}
function yl() {}
var Ka = null,
  Ga = null;
function Qa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ya = typeof setTimeout == "function" ? setTimeout : void 0,
  D0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  jf = typeof Promise == "function" ? Promise : void 0,
  O0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof jf < "u"
        ? function (e) {
            return jf.resolve(null).then(e).catch(z0);
          }
        : Ya;
function z0(e) {
  setTimeout(function () {
    throw e;
  });
}
function qs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Fo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Fo(t);
}
function gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Df(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kr = Math.random().toString(36).slice(2),
  Ut = "__reactFiber$" + Kr,
  Ko = "__reactProps$" + Kr,
  Jt = "__reactContainer$" + Kr,
  Za = "__reactEvents$" + Kr,
  V0 = "__reactListeners$" + Kr,
  U0 = "__reactHandles$" + Kr;
function Mn(e) {
  var t = e[Ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Ut])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Df(e); e !== null; ) {
          if ((n = e[Ut])) return n;
          e = Df(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ii(e) {
  return (e = e[Ut] || e[Jt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Gl(e) {
  return e[Ko] || null;
}
var Xa = [],
  pr = -1;
function kn(e) {
  return { current: e };
}
function ge(e) {
  0 > pr || ((e.current = Xa[pr]), (Xa[pr] = null), pr--);
}
function pe(e, t) {
  pr++, (Xa[pr] = e.current), (e.current = t);
}
var En = {},
  Ke = kn(En),
  nt = kn(!1),
  bn = En;
function Nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function rt(e) {
  return (e = e.childContextTypes), e != null;
}
function Sl() {
  ge(nt), ge(Ke);
}
function Of(e, t, n) {
  if (Ke.current !== En) throw Error(L(168));
  pe(Ke, t), pe(nt, n);
}
function xh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, xy(e) || "Unknown", o));
  return ke({}, n, r);
}
function wl(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || En),
    (bn = Ke.current),
    pe(Ke, e),
    pe(nt, nt.current),
    !0
  );
}
function zf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? ((e = xh(e, t, bn)), (r.__reactInternalMemoizedMergedChildContext = e), ge(nt), ge(Ke), pe(Ke, e)) : ge(nt),
    pe(nt, n);
}
var Gt = null,
  Ql = !1,
  ea = !1;
function kh(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function F0(e) {
  (Ql = !0), kh(e);
}
function Cn() {
  if (!ea && Gt !== null) {
    ea = !0;
    var e = 0,
      t = ue;
    try {
      var n = Gt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gt = null), (Ql = !1);
    } catch (o) {
      throw (Gt !== null && (Gt = Gt.slice(e + 1)), Zp(Ku, Cn), o);
    } finally {
      (ue = t), (ea = !1);
    }
  }
  return null;
}
var hr = [],
  mr = 0,
  _l = null,
  Rl = 0,
  gt = [],
  yt = 0,
  Wn = null,
  Qt = 1,
  Yt = "";
function An(e, t) {
  (hr[mr++] = Rl), (hr[mr++] = _l), (_l = e), (Rl = t);
}
function Ch(e, t, n) {
  (gt[yt++] = Qt), (gt[yt++] = Yt), (gt[yt++] = Wn), (Wn = e);
  var r = Qt;
  e = Yt;
  var o = 32 - $t(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Qt = (1 << (32 - $t(t) + o)) | (n << o) | r),
      (Yt = i + e);
  } else (Qt = (1 << i) | (n << o) | r), (Yt = e);
}
function tc(e) {
  e.return !== null && (An(e, 1), Ch(e, 1, 0));
}
function nc(e) {
  for (; e === _l; ) (_l = hr[--mr]), (hr[mr] = null), (Rl = hr[--mr]), (hr[mr] = null);
  for (; e === Wn; )
    (Wn = gt[--yt]), (gt[yt] = null), (Yt = gt[--yt]), (gt[yt] = null), (Qt = gt[--yt]), (gt[yt] = null);
}
var ft = null,
  ct = null,
  we = !1,
  It = null;
function Th(e, t) {
  var n = St(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = gn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wn !== null ? { id: Qt, overflow: Yt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ja(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qa(e) {
  if (we) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Vf(e, t)) {
        if (Ja(e)) throw Error(L(418));
        t = gn(n.nextSibling);
        var r = ft;
        t && Vf(e, t) ? Th(r, n) : ((e.flags = (e.flags & -4097) | 2), (we = !1), (ft = e));
      }
    } else {
      if (Ja(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (we = !1), (ft = e);
    }
  }
}
function Uf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ft = e;
}
function Ti(e) {
  if (e !== ft) return !1;
  if (!we) return Uf(e), (we = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Qa(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Ja(e)) throw (Nh(), Error(L(418)));
    for (; t; ) Th(e, t), (t = gn(t.nextSibling));
  }
  if ((Uf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ft ? gn(e.stateNode.nextSibling) : null;
  return !0;
}
function Nh() {
  for (var e = ct; e; ) e = gn(e.nextSibling);
}
function Lr() {
  (ct = ft = null), (we = !1);
}
function rc(e) {
  It === null ? (It = [e]) : It.push(e);
}
var B0 = tn.ReactCurrentBatchConfig;
function lo(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Ff(e) {
  var t = e._init;
  return t(e._payload);
}
function Lh(e) {
  function t(h, c) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [c]), (h.flags |= 16)) : p.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; ) c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function o(h, c) {
    return (h = _n(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, c, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate), p !== null ? ((p = p.index), p < c ? ((h.flags |= 2), c) : p) : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, c, p, E) {
    return c === null || c.tag !== 6 ? ((c = sa(p, h.mode, E)), (c.return = h), c) : ((c = o(c, p)), (c.return = h), c);
  }
  function a(h, c, p, E) {
    var k = p.type;
    return k === ar
      ? f(h, c, p.props.children, E, p.key)
      : c !== null &&
          (c.elementType === k || (typeof k == "object" && k !== null && k.$$typeof === ln && Ff(k) === c.type))
        ? ((E = o(c, p.props)), (E.ref = lo(h, c, p)), (E.return = h), E)
        : ((E = nl(p.type, p.key, p.props, null, h.mode, E)), (E.ref = lo(h, c, p)), (E.return = h), E);
  }
  function u(h, c, p, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = aa(p, h.mode, E)), (c.return = h), c)
      : ((c = o(c, p.children || [])), (c.return = h), c);
  }
  function f(h, c, p, E, k) {
    return c === null || c.tag !== 7
      ? ((c = Vn(p, h.mode, E, k)), (c.return = h), c)
      : ((c = o(c, p)), (c.return = h), c);
  }
  function d(h, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = sa("" + c, h.mode, p)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case gi:
          return (p = nl(c.type, c.key, c.props, null, h.mode, p)), (p.ref = lo(h, null, c)), (p.return = h), p;
        case sr:
          return (c = aa(c, h.mode, p)), (c.return = h), c;
        case ln:
          var E = c._init;
          return d(h, E(c._payload), p);
      }
      if (go(c) || to(c)) return (c = Vn(c, h.mode, p, null)), (c.return = h), c;
      Ni(h, c);
    }
    return null;
  }
  function m(h, c, p, E) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number") return k !== null ? null : s(h, c, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gi:
          return p.key === k ? a(h, c, p, E) : null;
        case sr:
          return p.key === k ? u(h, c, p, E) : null;
        case ln:
          return (k = p._init), m(h, c, k(p._payload), E);
      }
      if (go(p) || to(p)) return k !== null ? null : f(h, c, p, E, null);
      Ni(h, p);
    }
    return null;
  }
  function S(h, c, p, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number") return (h = h.get(p) || null), s(c, h, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case gi:
          return (h = h.get(E.key === null ? p : E.key) || null), a(c, h, E, k);
        case sr:
          return (h = h.get(E.key === null ? p : E.key) || null), u(c, h, E, k);
        case ln:
          var C = E._init;
          return S(h, c, p, C(E._payload), k);
      }
      if (go(E) || to(E)) return (h = h.get(p) || null), f(c, h, E, k, null);
      Ni(c, E);
    }
    return null;
  }
  function g(h, c, p, E) {
    for (var k = null, C = null, x = c, I = (c = 0), oe = null; x !== null && I < p.length; I++) {
      x.index > I ? ((oe = x), (x = null)) : (oe = x.sibling);
      var B = m(h, x, p[I], E);
      if (B === null) {
        x === null && (x = oe);
        break;
      }
      e && x && B.alternate === null && t(h, x),
        (c = i(B, c, I)),
        C === null ? (k = B) : (C.sibling = B),
        (C = B),
        (x = oe);
    }
    if (I === p.length) return n(h, x), we && An(h, I), k;
    if (x === null) {
      for (; I < p.length; I++)
        (x = d(h, p[I], E)), x !== null && ((c = i(x, c, I)), C === null ? (k = x) : (C.sibling = x), (C = x));
      return we && An(h, I), k;
    }
    for (x = r(h, x); I < p.length; I++)
      (oe = S(x, h, I, p[I], E)),
        oe !== null &&
          (e && oe.alternate !== null && x.delete(oe.key === null ? I : oe.key),
          (c = i(oe, c, I)),
          C === null ? (k = oe) : (C.sibling = oe),
          (C = oe));
    return (
      e &&
        x.forEach(function (de) {
          return t(h, de);
        }),
      we && An(h, I),
      k
    );
  }
  function _(h, c, p, E) {
    var k = to(p);
    if (typeof k != "function") throw Error(L(150));
    if (((p = k.call(p)), p == null)) throw Error(L(151));
    for (var C = (k = null), x = c, I = (c = 0), oe = null, B = p.next(); x !== null && !B.done; I++, B = p.next()) {
      x.index > I ? ((oe = x), (x = null)) : (oe = x.sibling);
      var de = m(h, x, B.value, E);
      if (de === null) {
        x === null && (x = oe);
        break;
      }
      e && x && de.alternate === null && t(h, x),
        (c = i(de, c, I)),
        C === null ? (k = de) : (C.sibling = de),
        (C = de),
        (x = oe);
    }
    if (B.done) return n(h, x), we && An(h, I), k;
    if (x === null) {
      for (; !B.done; I++, B = p.next())
        (B = d(h, B.value, E)), B !== null && ((c = i(B, c, I)), C === null ? (k = B) : (C.sibling = B), (C = B));
      return we && An(h, I), k;
    }
    for (x = r(h, x); !B.done; I++, B = p.next())
      (B = S(x, h, I, B.value, E)),
        B !== null &&
          (e && B.alternate !== null && x.delete(B.key === null ? I : B.key),
          (c = i(B, c, I)),
          C === null ? (k = B) : (C.sibling = B),
          (C = B));
    return (
      e &&
        x.forEach(function (Xe) {
          return t(h, Xe);
        }),
      we && An(h, I),
      k
    );
  }
  function T(h, c, p, E) {
    if (
      (typeof p == "object" && p !== null && p.type === ar && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case gi:
          e: {
            for (var k = p.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (((k = p.type), k === ar)) {
                  if (C.tag === 7) {
                    n(h, C.sibling), (c = o(C, p.props.children)), (c.return = h), (h = c);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" && k !== null && k.$$typeof === ln && Ff(k) === C.type)
                ) {
                  n(h, C.sibling), (c = o(C, p.props)), (c.ref = lo(h, C, p)), (c.return = h), (h = c);
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            p.type === ar
              ? ((c = Vn(p.props.children, h.mode, E, p.key)), (c.return = h), (h = c))
              : ((E = nl(p.type, p.key, p.props, null, h.mode, E)), (E.ref = lo(h, c, p)), (E.return = h), (h = E));
          }
          return l(h);
        case sr:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(h, c.sibling), (c = o(c, p.children || [])), (c.return = h), (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = aa(p, h.mode, E)), (c.return = h), (h = c);
          }
          return l(h);
        case ln:
          return (C = p._init), T(h, c, C(p._payload), E);
      }
      if (go(p)) return g(h, c, p, E);
      if (to(p)) return _(h, c, p, E);
      Ni(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = o(c, p)), (c.return = h), (h = c))
          : (n(h, c), (c = sa(p, h.mode, E)), (c.return = h), (h = c)),
        l(h))
      : n(h, c);
  }
  return T;
}
var Ar = Lh(!0),
  Ah = Lh(!1),
  El = kn(null),
  xl = null,
  vr = null,
  oc = null;
function ic() {
  oc = vr = xl = null;
}
function lc(e) {
  var t = El.current;
  ge(El), (e._currentValue = t);
}
function eu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xr(e, t) {
  (xl = e),
    (oc = vr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (oc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vr === null)) {
      if (xl === null) throw Error(L(308));
      (vr = e), (xl.dependencies = { lanes: 0, firstContext: e });
    } else vr = vr.next = e;
  return t;
}
var jn = null;
function sc(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function Ph(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), sc(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), qt(e, r);
}
function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var sn = !1;
function ac(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ih(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), qt(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), sc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    qt(e, n)
  );
}
function Zi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n);
  }
}
function Bf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var o = e.updateQueue;
  sn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== l && (s === null ? (f.firstBaseUpdate = u) : (s.next = u), (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (f = u = a = null), (s = i);
    do {
      var m = s.lane,
        S = s.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next = { eventTime: S, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var g = e,
            _ = s;
          switch (((m = t), (S = n), _.tag)) {
            case 1:
              if (((g = _.payload), typeof g == "function")) {
                d = g.call(S, d, m);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = _.payload), (m = typeof g == "function" ? g.call(S, d, m) : g), m == null)) break e;
              d = ke({}, d, m);
              break e;
            case 2:
              sn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [s]) : m.push(s));
      } else
        (S = { eventTime: S, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
          f === null ? ((u = f = S), (a = d)) : (f = f.next = S),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s), (s = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function bf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function")) throw Error(L(191, o));
        o.call(r);
      }
    }
}
var li = {},
  Bt = kn(li),
  Go = kn(li),
  Qo = kn(li);
function Dn(e) {
  if (e === li) throw Error(L(174));
  return e;
}
function uc(e, t) {
  switch ((pe(Qo, t), pe(Go, e), pe(Bt, li), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ma(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ma(t, e));
  }
  ge(Bt), pe(Bt, t);
}
function Pr() {
  ge(Bt), ge(Go), ge(Qo);
}
function $h(e) {
  Dn(Qo.current);
  var t = Dn(Bt.current),
    n = Ma(t, e.type);
  t !== n && (pe(Go, e), pe(Bt, n));
}
function cc(e) {
  Go.current === e && (ge(Bt), ge(Go));
}
var Ee = kn(0);
function Cl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ta = [];
function fc() {
  for (var e = 0; e < ta.length; e++) ta[e]._workInProgressVersionPrimary = null;
  ta.length = 0;
}
var Xi = tn.ReactCurrentDispatcher,
  na = tn.ReactCurrentBatchConfig,
  Hn = 0,
  xe = null,
  Ae = null,
  De = null,
  Tl = !1,
  To = !1,
  Yo = 0,
  b0 = 0;
function be() {
  throw Error(L(321));
}
function dc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function pc(e, t, n, r, o, i) {
  if (
    ((Hn = i),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xi.current = e === null || e.memoizedState === null ? G0 : Q0),
    (e = n(r, o)),
    To)
  ) {
    i = 0;
    do {
      if (((To = !1), (Yo = 0), 25 <= i)) throw Error(L(301));
      (i += 1), (De = Ae = null), (t.updateQueue = null), (Xi.current = Y0), (e = n(r, o));
    } while (To);
  }
  if (((Xi.current = Nl), (t = Ae !== null && Ae.next !== null), (Hn = 0), (De = Ae = xe = null), (Tl = !1), t))
    throw Error(L(300));
  return e;
}
function hc() {
  var e = Yo !== 0;
  return (Yo = 0), e;
}
function zt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? (xe.memoizedState = De = e) : (De = De.next = e), De;
}
function Et() {
  if (Ae === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = De === null ? xe.memoizedState : De.next;
  if (t !== null) (De = t), (Ae = e);
  else {
    if (e === null) throw Error(L(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      De === null ? (xe.memoizedState = De = e) : (De = De.next = e);
  }
  return De;
}
function Zo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ra(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var f = u.lane;
      if ((Hn & f) === f)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((s = a = d), (l = r)) : (a = a.next = d), (xe.lanes |= f), (Kn |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      Dt(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (xe.lanes |= i), (Kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oa(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Dt(i, t.memoizedState) || (et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Mh() {}
function jh(e, t) {
  var n = xe,
    r = Et(),
    o = t(),
    i = !Dt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (et = !0)),
    (r = r.queue),
    mc(zh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Xo(9, Oh.bind(null, n, r, o, t), void 0, null), ze === null)) throw Error(L(349));
    Hn & 30 || Dh(n, t, o);
  }
  return o;
}
function Dh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Oh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Vh(t) && Uh(e);
}
function zh(e, t, n) {
  return n(function () {
    Vh(t) && Uh(e);
  });
}
function Vh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function Uh(e) {
  var t = qt(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function Wf(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zo, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = K0.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function Xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fh() {
  return Et().memoizedState;
}
function Ji(e, t, n, r) {
  var o = zt();
  (xe.flags |= e), (o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yl(e, t, n, r) {
  var o = Et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ae !== null) {
    var l = Ae.memoizedState;
    if (((i = l.destroy), r !== null && dc(r, l.deps))) {
      o.memoizedState = Xo(t, n, i, r);
      return;
    }
  }
  (xe.flags |= e), (o.memoizedState = Xo(1 | t, n, i, r));
}
function Hf(e, t) {
  return Ji(8390656, 8, e, t);
}
function mc(e, t) {
  return Yl(2048, 8, e, t);
}
function Bh(e, t) {
  return Yl(4, 2, e, t);
}
function bh(e, t) {
  return Yl(4, 4, e, t);
}
function Wh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Yl(4, 4, Wh.bind(null, t, e), n);
}
function vc() {}
function Kh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && dc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Gh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && dc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qh(e, t, n) {
  return Hn & 21
    ? (Dt(n, t) || ((n = qp()), (xe.lanes |= n), (Kn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function W0(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = na.transition;
  na.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (na.transition = r);
  }
}
function Yh() {
  return Et().memoizedState;
}
function H0(e, t, n) {
  var r = wn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Zh(e))) Xh(t, n);
  else if (((n = Ph(e, t, n, r)), n !== null)) {
    var o = Qe();
    Mt(n, e, r, o), Jh(n, t, r);
  }
}
function K0(e, t, n) {
  var r = wn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zh(e)) Xh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Dt(s, l))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), sc(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ph(e, t, o, r)), n !== null && ((o = Qe()), Mt(n, e, r, o), Jh(n, t, r));
  }
}
function Zh(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function Xh(e, t) {
  To = Tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Jh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gu(e, n);
  }
}
var Nl = {
    readContext: Rt,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  G0 = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: Hf,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ji(4194308, 4, Wh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = H0.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wf,
    useDebugValue: vc,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Wf(!1),
        t = e[0];
      return (e = W0.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        o = zt();
      if (we) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ze === null)) throw Error(L(349));
        Hn & 30 || Dh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Hf(zh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xo(9, Oh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = ze.identifierPrefix;
      if (we) {
        var n = Yt,
          r = Qt;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = b0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Q0 = {
    readContext: Rt,
    useCallback: Kh,
    useContext: Rt,
    useEffect: mc,
    useImperativeHandle: Hh,
    useInsertionEffect: Bh,
    useLayoutEffect: bh,
    useMemo: Gh,
    useReducer: ra,
    useRef: Fh,
    useState: function () {
      return ra(Zo);
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = Et();
      return Qh(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ra(Zo)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Mh,
    useSyncExternalStore: jh,
    useId: Yh,
    unstable_isNewReconciler: !1,
  },
  Y0 = {
    readContext: Rt,
    useCallback: Kh,
    useContext: Rt,
    useEffect: mc,
    useImperativeHandle: Hh,
    useInsertionEffect: Bh,
    useLayoutEffect: bh,
    useMemo: Gh,
    useReducer: oa,
    useRef: Fh,
    useState: function () {
      return oa(Zo);
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = Et();
      return Ae === null ? (t.memoizedState = e) : Qh(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(Zo)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Mh,
    useSyncExternalStore: jh,
    useId: Yh,
    unstable_isNewReconciler: !1,
  };
function At(e, t) {
  if (e && e.defaultProps) {
    (t = ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = wn(e),
      i = Zt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = yn(e, i, o)), t !== null && (Mt(t, e, o, r), Zi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = wn(e),
      i = Zt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = yn(e, i, o)),
      t !== null && (Mt(t, e, o, r), Zi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = wn(e),
      o = Zt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = yn(e, o, r)), t !== null && (Mt(t, e, r, n), Zi(t, e, r));
  },
};
function Kf(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bo(n, r) || !bo(o, i)
        : !0
  );
}
function qh(e, t, n) {
  var r = !1,
    o = En,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Rt(i))
      : ((o = rt(t) ? bn : Ke.current), (r = t.contextTypes), (i = (r = r != null) ? Nr(e, o) : En)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Gf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function nu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ac(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (o.context = Rt(i)) : ((i = rt(t) ? bn : Ke.current), (o.context = Nr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (tu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
      t !== o.state && Zl.enqueueReplaceState(o, o.state, null),
      kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ey(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ia(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ru(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Z0 = typeof WeakMap == "function" ? WeakMap : Map;
function em(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Al || ((Al = !0), (pu = r)), ru(e, t);
    }),
    n
  );
}
function tm(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ru(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ru(e, t), typeof r != "function" && (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
      }),
    n
  );
}
function Qf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = c1.bind(null, e, t, n)), t.then(e, e));
}
function Yf(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Zt(-1, 1)), (t.tag = 2), yn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var X0 = tn.ReactCurrentOwner,
  et = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? Ah(t, null, n, r) : Ar(t, e.child, n, r);
}
function Xf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    xr(t, o),
    (r = pc(e, t, n, r, i, o)),
    (n = hc()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), en(e, t, o))
      : (we && n && tc(t), (t.flags |= 1), Ge(e, t, r, o), t.child)
  );
}
function Jf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !xc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), nm(e, t, i, r, o))
      : ((e = nl(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : bo), n(l, r) && e.ref === t.ref)) return en(e, t, o);
  }
  return (t.flags |= 1), (e = _n(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function nm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bo(i, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), en(e, t, o);
  }
  return ou(e, t, n, r, o);
}
function rm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), pe(yr, ut), (ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          pe(yr, ut),
          (ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        pe(yr, ut),
        (ut |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), pe(yr, ut), (ut |= r);
  return Ge(e, t, o, n), t.child;
}
function om(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ou(e, t, n, r, o) {
  var i = rt(n) ? bn : Ke.current;
  return (
    (i = Nr(t, i)),
    xr(t, o),
    (n = pc(e, t, n, r, i, o)),
    (r = hc()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), en(e, t, o))
      : (we && r && tc(t), (t.flags |= 1), Ge(e, t, n, o), t.child)
  );
}
function qf(e, t, n, r, o) {
  if (rt(n)) {
    var i = !0;
    wl(t);
  } else i = !1;
  if ((xr(t, o), t.stateNode === null)) qi(e, t), qh(t, n, r), nu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = Rt(u)) : ((u = rt(n) ? bn : Ke.current), (u = Nr(t, u)));
    var f = n.getDerivedStateFromProps,
      d = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Gf(t, l, r, u)),
      (sn = !1);
    var m = t.memoizedState;
    (l.state = m),
      kl(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || nt.current || sn
        ? (typeof f == "function" && (tu(t, n, f, r), (a = t.memoizedState)),
          (s = sn || Kf(t, n, s, r, m, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Ih(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : At(t.type, s)),
      (l.props = u),
      (d = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null ? (a = Rt(a)) : ((a = rt(n) ? bn : Ke.current), (a = Nr(t, a)));
    var S = n.getDerivedStateFromProps;
    (f = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((s !== d || m !== a) && Gf(t, l, r, a)),
      (sn = !1),
      (m = t.memoizedState),
      (l.state = m),
      kl(t, r, l, o);
    var g = t.memoizedState;
    s !== d || m !== g || nt.current || sn
      ? (typeof S == "function" && (tu(t, n, S, r), (g = t.memoizedState)),
        (u = sn || Kf(t, n, u, r, m, g, a) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, a),
              typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return iu(e, t, n, r, i, o);
}
function iu(e, t, n, r, o, i) {
  om(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && zf(t, n, !1), en(e, t, i);
  (r = t.stateNode), (X0.current = t);
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = Ar(t, e.child, null, i)), (t.child = Ar(t, null, s, i))) : Ge(e, t, s, i),
    (t.memoizedState = r.state),
    o && zf(t, n, !0),
    t.child
  );
}
function im(e) {
  var t = e.stateNode;
  t.pendingContext ? Of(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Of(e, t.context, !1),
    uc(e, t.containerInfo);
}
function ed(e, t, n, r, o) {
  return Lr(), rc(o), (t.flags |= 256), Ge(e, t, n, r), t.child;
}
var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lm(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(Ee, o & 1),
    e === null)
  )
    return (
      qa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = ql(l, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = su(n)),
              (t.memoizedState = lu),
              e)
            : gc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))) return J0(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = _n(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = _n(s, i)) : ((i = Vn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? su(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = lu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = _n(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function gc(e, t) {
  return (t = ql({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Li(e, t, n, r) {
  return (
    r !== null && rc(r),
    Ar(t, e.child, null, n),
    (e = gc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function J0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ia(Error(L(422)))), Li(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ql({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Vn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ar(t, e.child, null, l),
          (t.child.memoizedState = su(l)),
          (t.memoizedState = lu),
          i);
  if (!(t.mode & 1)) return Li(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(L(419))), (r = ia(i, r, void 0)), Li(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), et || s)) {
    if (((r = ze), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), qt(e, o), Mt(r, e, o, -1));
    }
    return Ec(), (r = ia(Error(L(421)))), Li(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = f1.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (ct = gn(o.nextSibling)),
      (ft = t),
      (we = !0),
      (It = null),
      e !== null && ((gt[yt++] = Qt), (gt[yt++] = Yt), (gt[yt++] = Wn), (Qt = e.id), (Yt = e.overflow), (Wn = t)),
      (t = gc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function td(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), eu(e.return, t, n);
}
function la(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function sm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ge(e, t, r.children, n), (r = Ee.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && td(e, n, t);
        else if (e.tag === 19) td(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Cl(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          la(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Cl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        la(t, !0, n, null, i);
        break;
      case "together":
        la(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function en(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Kn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = _n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = _n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function q0(e, t, n) {
  switch (t.tag) {
    case 3:
      im(t), Lr();
      break;
    case 5:
      $h(t);
      break;
    case 1:
      rt(t.type) && wl(t);
      break;
    case 4:
      uc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      pe(El, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? lm(e, t, n)
            : (pe(Ee, Ee.current & 1), (e = en(e, t, n)), e !== null ? e.sibling : null);
      pe(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        pe(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rm(e, t, n);
  }
  return en(e, t, n);
}
var am, au, um, cm;
am = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
au = function () {};
um = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Dn(Bt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Aa(e, o)), (r = Aa(e, r)), (i = []);
        break;
      case "select":
        (o = ke({}, o, { value: void 0 })), (r = ke({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = $a(e, o)), (r = $a(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
    }
    ja(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Do.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((s = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== s && (a != null || s != null)))
        if (u === "style")
          if (s) {
            for (l in s) !s.hasOwnProperty(l) || (a && a.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
            for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") || (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Do.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && he("scroll", e), i || s === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
cm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function so(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function e1(e, t, n) {
  var r = t.pendingProps;
  switch ((nc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return We(t), null;
    case 1:
      return rt(t.type) && Sl(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pr(),
        ge(nt),
        ge(Ke),
        fc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (vu(It), (It = null)))),
        au(e, t),
        We(t),
        null
      );
    case 5:
      cc(t);
      var o = Dn(Qo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        um(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return We(t), null;
        }
        if (((e = Dn(Bt.current)), Ti(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ut] = t), (r[Ko] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < So.length; o++) he(So[o], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              cf(r, i), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), he("invalid", r);
              break;
            case "textarea":
              df(r, i), he("invalid", r);
          }
          ja(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Ci(r.textContent, s, e), (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 && Ci(r.textContent, s, e), (o = ["children", "" + s]))
                : Do.hasOwnProperty(l) && s != null && l === "onScroll" && he("scroll", r);
            }
          switch (n) {
            case "input":
              yi(r), ff(r, i, !0);
              break;
            case "textarea":
              yi(r), pf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = yl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ut] = t),
            (e[Ko] = r),
            am(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Da(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < So.length; o++) he(So[o], e);
                o = r;
                break;
              case "source":
                he("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (o = r);
                break;
              case "details":
                he("toggle", e), (o = r);
                break;
              case "input":
                cf(e, r), (o = Aa(e, r)), he("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ke({}, r, { value: void 0 })), he("invalid", e);
                break;
              case "textarea":
                df(e, r), (o = $a(e, r)), he("invalid", e);
                break;
              default:
                o = r;
            }
            ja(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Fp(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Vp(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Oo(e, a)
                        : typeof a == "number" && Oo(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Do.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && he("scroll", e)
                          : a != null && Fu(e, i, a, l));
              }
            switch (n) {
              case "input":
                yi(e), ff(e, r, !1);
                break;
              case "textarea":
                yi(e), pf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? wr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && wr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) cm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Dn(Qo.current)), Dn(Bt.current), Ti(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Ut] = t), (i = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ut] = t), (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (ge(Ee), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && ct !== null && t.mode & 1 && !(t.flags & 128)) Nh(), Lr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(L(317));
            i[Ut] = t;
          } else Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (i = !1);
        } else It !== null && (vu(It), (It = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Ee.current & 1 ? Pe === 0 && (Pe = 3) : Ec())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return Pr(), au(e, t), e === null && Wo(t.stateNode.containerInfo), We(t), null;
    case 10:
      return lc(t.type._context), We(t), null;
    case 17:
      return rt(t.type) && Sl(), We(t), null;
    case 19:
      if ((ge(Ee), (i = t.memoizedState), i === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) so(i, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Cl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    so(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return pe(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Te() > $r && ((t.flags |= 128), (r = !0), so(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              so(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !we)
            )
              return We(t), null;
          } else
            2 * Te() - i.renderingStartTime > $r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), so(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Te()),
          (t.sibling = null),
          (n = Ee.current),
          pe(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        Rc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ut & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function t1(e, t) {
  switch ((nc(t), t.tag)) {
    case 1:
      return rt(t.type) && Sl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Pr(), ge(nt), ge(Ke), fc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return cc(t), null;
    case 13:
      if ((ge(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        Lr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ge(Ee), null;
    case 4:
      return Pr(), null;
    case 10:
      return lc(t.type._context), null;
    case 22:
    case 23:
      return Rc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  He = !1,
  n1 = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function uu(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var nd = !1;
function r1(e, t) {
  if (((Ka = ml), (e = mh()), ec(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = l + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (m = d), (d = S);
            for (;;) {
              if (d === e) break t;
              if ((m === n && ++u === o && (s = l), m === i && ++f === r && (a = l), (S = d.nextSibling) !== null))
                break;
              (d = m), (m = d.parentNode);
            }
            d = S;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ga = { focusedElem: e, selectionRange: n }, ml = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var _ = g.memoizedProps,
                    T = g.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(t.elementType === t.type ? _ : At(t.type, _), T);
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          Ce(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (g = nd), (nd = !1), g;
}
function No(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && uu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Ut], delete t[Ko], delete t[Za], delete t[V0], delete t[U0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dm(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = yl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), (e = e.sibling);
}
function du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (du(e, t, n), e = e.sibling; e !== null; ) du(e, t, n), (e = e.sibling);
}
var Ue = null,
  Pt = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) pm(e, t, n), (n = n.sibling);
}
function pm(e, t, n) {
  if (Ft && typeof Ft.onCommitFiberUnmount == "function")
    try {
      Ft.onCommitFiberUnmount(bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || gr(n, t);
    case 6:
      var r = Ue,
        o = Pt;
      (Ue = null),
        rn(e, t, n),
        (Ue = r),
        (Pt = o),
        Ue !== null &&
          (Pt
            ? ((e = Ue), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (Pt
          ? ((e = Ue), (n = n.stateNode), e.nodeType === 8 ? qs(e.parentNode, n) : e.nodeType === 1 && qs(e, n), Fo(e))
          : qs(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue), (o = Pt), (Ue = n.stateNode.containerInfo), (Pt = !0), rn(e, t, n), (Ue = r), (Pt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!He && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && uu(n, t, l), (o = o.next);
        } while (o !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (!He && (gr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          Ce(n, t, s);
        }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((He = (r = He) || n.memoizedState !== null), rn(e, t, n), (He = r)) : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function od(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new n1()),
      t.forEach(function (r) {
        var o = d1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ue = s.stateNode), (Pt = !1);
              break e;
            case 3:
              (Ue = s.stateNode.containerInfo), (Pt = !0);
              break e;
            case 4:
              (Ue = s.stateNode.containerInfo), (Pt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ue === null) throw Error(L(160));
        pm(i, l, o), (Ue = null), (Pt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ce(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) hm(t, e), (t = t.sibling);
}
function hm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nt(t, e), Ot(e), r & 4)) {
        try {
          No(3, e, e.return), Xl(3, e);
        } catch (_) {
          Ce(e, e.return, _);
        }
        try {
          No(5, e, e.return);
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 1:
      Nt(t, e), Ot(e), r & 512 && n !== null && gr(n, n.return);
      break;
    case 5:
      if ((Nt(t, e), Ot(e), r & 512 && n !== null && gr(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Oo(o, "");
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Dp(o, i), Da(s, l);
            var u = Da(s, i);
            for (l = 0; l < a.length; l += 2) {
              var f = a[l],
                d = a[l + 1];
              f === "style"
                ? Fp(o, d)
                : f === "dangerouslySetInnerHTML"
                  ? Vp(o, d)
                  : f === "children"
                    ? Oo(o, d)
                    : Fu(o, f, d, u);
            }
            switch (s) {
              case "input":
                Pa(o, i);
                break;
              case "textarea":
                Op(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? wr(o, !!i.multiple, S, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? wr(o, !!i.multiple, i.defaultValue, !0)
                      : wr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ko] = i;
          } catch (_) {
            Ce(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Nt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (_) {
          Ce(e, e.return, _);
        }
      }
      break;
    case 3:
      if ((Nt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Fo(t.containerInfo);
        } catch (_) {
          Ce(e, e.return, _);
        }
      break;
    case 4:
      Nt(t, e), Ot(e);
      break;
    case 13:
      Nt(t, e),
        Ot(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (wc = Te())),
        r & 4 && od(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (u = He) || f), Nt(t, e), (He = u)) : Nt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for (V = e, f = e.child; f !== null; ) {
            for (d = V = f; V !== null; ) {
              switch (((m = V), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  No(4, m, m.return);
                  break;
                case 1:
                  gr(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (_) {
                      Ce(r, n, _);
                    }
                  }
                  break;
                case 5:
                  gr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ld(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (V = S)) : ld(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l = a != null && a.hasOwnProperty("display") ? a.display : null),
                      (s.style.display = Up("display", l)));
              } catch (_) {
                Ce(e, e.return, _);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (_) {
                Ce(e, e.return, _);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Nt(t, e), Ot(e), r & 4 && od(e);
      break;
    case 21:
      break;
    default:
      Nt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Oo(o, ""), (r.flags &= -33));
          var i = rd(e);
          du(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = rd(e);
          fu(e, s, l);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      Ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function o1(e, t, n) {
  (V = e), mm(e);
}
function mm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ai;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || He;
        s = Ai;
        var u = He;
        if (((Ai = l), (He = a) && !u))
          for (V = o; V !== null; )
            (l = V),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null ? sd(o) : a !== null ? ((a.return = l), (V = a)) : sd(o);
        for (; i !== null; ) (V = i), mm(i), (i = i.sibling);
        (V = o), (Ai = s), (He = u);
      }
      id(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (V = i)) : id(e);
  }
}
function id(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && bf(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bf(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Fo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        He || (t.flags & 512 && cu(t));
      } catch (m) {
        Ce(t, t.return, m);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function ld(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function sd(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xl(4, t);
          } catch (a) {
            Ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ce(t, o, a);
            }
          }
          var i = t.return;
          try {
            cu(t);
          } catch (a) {
            Ce(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            cu(t);
          } catch (a) {
            Ce(t, l, a);
          }
      }
    } catch (a) {
      Ce(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (V = s);
      break;
    }
    V = t.return;
  }
}
var i1 = Math.ceil,
  Ll = tn.ReactCurrentDispatcher,
  yc = tn.ReactCurrentOwner,
  wt = tn.ReactCurrentBatchConfig,
  ie = 0,
  ze = null,
  Le = null,
  Fe = 0,
  ut = 0,
  yr = kn(0),
  Pe = 0,
  Jo = null,
  Kn = 0,
  Jl = 0,
  Sc = 0,
  Lo = null,
  qe = null,
  wc = 0,
  $r = 1 / 0,
  Ht = null,
  Al = !1,
  pu = null,
  Sn = null,
  Pi = !1,
  dn = null,
  Pl = 0,
  Ao = 0,
  hu = null,
  el = -1,
  tl = 0;
function Qe() {
  return ie & 6 ? Te() : el !== -1 ? el : (el = Te());
}
function wn(e) {
  return e.mode & 1
    ? ie & 2 && Fe !== 0
      ? Fe & -Fe
      : B0.transition !== null
        ? (tl === 0 && (tl = qp()), tl)
        : ((e = ue), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lh(e.type))), e)
    : 1;
}
function Mt(e, t, n, r) {
  if (50 < Ao) throw ((Ao = 0), (hu = null), Error(L(185)));
  ri(e, n, r),
    (!(ie & 2) || e !== ze) &&
      (e === ze && (!(ie & 2) && (Jl |= n), Pe === 4 && cn(e, Fe)),
      ot(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && (($r = Te() + 500), Ql && Cn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  By(e, t);
  var r = hl(e, e === ze ? Fe : 0);
  if (r === 0) n !== null && vf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vf(n), t === 1))
      e.tag === 0 ? F0(ad.bind(null, e)) : kh(ad.bind(null, e)),
        O0(function () {
          !(ie & 6) && Cn();
        }),
        (n = null);
    else {
      switch (eh(r)) {
        case 1:
          n = Ku;
          break;
        case 4:
          n = Xp;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = Jp;
          break;
        default:
          n = pl;
      }
      n = Em(n, vm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vm(e, t) {
  if (((el = -1), (tl = 0), ie & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (kr() && e.callbackNode !== n) return null;
  var r = hl(e, e === ze ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var i = ym();
    (ze !== e || Fe !== t) && ((Ht = null), ($r = Te() + 500), zn(e, t));
    do
      try {
        a1();
        break;
      } catch (s) {
        gm(e, s);
      }
    while (!0);
    ic(), (Ll.current = i), (ie = o), Le !== null ? (t = 0) : ((ze = null), (Fe = 0), (t = Pe));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Fa(e)), o !== 0 && ((r = o), (t = mu(e, o)))), t === 1))
      throw ((n = Jo), zn(e, 0), cn(e, r), ot(e, Te()), n);
    if (t === 6) cn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !l1(o) &&
          ((t = Il(e, r)), t === 2 && ((i = Fa(e)), i !== 0 && ((r = i), (t = mu(e, i)))), t === 1))
      )
        throw ((n = Jo), zn(e, 0), cn(e, r), ot(e, Te()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Pn(e, qe, Ht);
          break;
        case 3:
          if ((cn(e, r), (r & 130023424) === r && ((t = wc + 500 - Te()), 10 < t))) {
            if (hl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ya(Pn.bind(null, e, qe, Ht), t);
            break;
          }
          Pn(e, qe, Ht);
          break;
        case 4:
          if ((cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - $t(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * i1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ya(Pn.bind(null, e, qe, Ht), r);
            break;
          }
          Pn(e, qe, Ht);
          break;
        case 5:
          Pn(e, qe, Ht);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return ot(e, Te()), e.callbackNode === n ? vm.bind(null, e) : null;
}
function mu(e, t) {
  var n = Lo;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = Il(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && vu(t)),
    e
  );
}
function vu(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function l1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Dt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function cn(e, t) {
  for (t &= ~Sc, t &= ~Jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ad(e) {
  if (ie & 6) throw Error(L(327));
  kr();
  var t = hl(e, 0);
  if (!(t & 1)) return ot(e, Te()), null;
  var n = Il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fa(e);
    r !== 0 && ((t = r), (n = mu(e, r)));
  }
  if (n === 1) throw ((n = Jo), zn(e, 0), cn(e, t), ot(e, Te()), n);
  if (n === 6) throw Error(L(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Pn(e, qe, Ht), ot(e, Te()), null;
}
function _c(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && (($r = Te() + 500), Ql && Cn());
  }
}
function Gn(e) {
  dn !== null && dn.tag === 0 && !(ie & 6) && kr();
  var t = ie;
  ie |= 1;
  var n = wt.transition,
    r = ue;
  try {
    if (((wt.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (wt.transition = n), (ie = t), !(ie & 6) && Cn();
  }
}
function Rc() {
  (ut = yr.current), ge(yr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), D0(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((nc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Sl();
          break;
        case 3:
          Pr(), ge(nt), ge(Ke), fc();
          break;
        case 5:
          cc(r);
          break;
        case 4:
          Pr();
          break;
        case 13:
          ge(Ee);
          break;
        case 19:
          ge(Ee);
          break;
        case 10:
          lc(r.type._context);
          break;
        case 22:
        case 23:
          Rc();
      }
      n = n.return;
    }
  if (
    ((ze = e),
    (Le = e = _n(e.current, null)),
    (Fe = ut = t),
    (Pe = 0),
    (Jo = null),
    (Sc = Jl = Kn = 0),
    (qe = Lo = null),
    jn !== null)
  ) {
    for (t = 0; t < jn.length; t++)
      if (((n = jn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    jn = null;
  }
  return e;
}
function gm(e, t) {
  do {
    var n = Le;
    try {
      if ((ic(), (Xi.current = Nl), Tl)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Tl = !1;
      }
      if (
        ((Hn = 0), (De = Ae = xe = null), (To = !1), (Yo = 0), (yc.current = null), n === null || n.return === null)
      ) {
        (Pe = 1), (Jo = t), (Le = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (((t = Fe), (s.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue), (f.memoizedState = m.memoizedState), (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = Yf(l);
          if (S !== null) {
            (S.flags &= -257), Zf(S, l, s, i, t), S.mode & 1 && Qf(i, u, t), (t = S), (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Qf(i, u, t), Ec();
              break e;
            }
            a = Error(L(426));
          }
        } else if (we && s.mode & 1) {
          var T = Yf(l);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Zf(T, l, s, i, t), rc(Ir(a, s));
            break e;
          }
        }
        (i = a = Ir(a, s)), Pe !== 4 && (Pe = 2), Lo === null ? (Lo = [i]) : Lo.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = em(i, a, t);
              Bf(i, h);
              break e;
            case 1:
              s = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null && typeof p.componentDidCatch == "function" && (Sn === null || !Sn.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = tm(i, s, t);
                Bf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wm(n);
    } catch (k) {
      (t = k), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ym() {
  var e = Ll.current;
  return (Ll.current = Nl), e === null ? Nl : e;
}
function Ec() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), ze === null || (!(Kn & 268435455) && !(Jl & 268435455)) || cn(ze, Fe);
}
function Il(e, t) {
  var n = ie;
  ie |= 2;
  var r = ym();
  (ze !== e || Fe !== t) && ((Ht = null), zn(e, t));
  do
    try {
      s1();
      break;
    } catch (o) {
      gm(e, o);
    }
  while (!0);
  if ((ic(), (ie = n), (Ll.current = r), Le !== null)) throw Error(L(261));
  return (ze = null), (Fe = 0), Pe;
}
function s1() {
  for (; Le !== null; ) Sm(Le);
}
function a1() {
  for (; Le !== null && !$y(); ) Sm(Le);
}
function Sm(e) {
  var t = Rm(e.alternate, e, ut);
  (e.memoizedProps = e.pendingProps), t === null ? wm(e) : (Le = t), (yc.current = null);
}
function wm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = t1(n, t)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Le = null);
        return;
      }
    } else if (((n = e1(n, t, ut)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function Pn(e, t, n) {
  var r = ue,
    o = wt.transition;
  try {
    (wt.transition = null), (ue = 1), u1(e, t, n, r);
  } finally {
    (wt.transition = o), (ue = r);
  }
  return null;
}
function u1(e, t, n, r) {
  do kr();
  while (dn !== null);
  if (ie & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (by(e, i),
    e === ze && ((Le = ze = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      Em(pl, function () {
        return kr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = wt.transition), (wt.transition = null);
    var l = ue;
    ue = 1;
    var s = ie;
    (ie |= 4),
      (yc.current = null),
      r1(e, n),
      hm(n, e),
      L0(Ga),
      (ml = !!Ka),
      (Ga = Ka = null),
      (e.current = n),
      o1(n),
      My(),
      (ie = s),
      (ue = l),
      (wt.transition = i);
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (dn = e), (Pl = o)),
    (i = e.pendingLanes),
    i === 0 && (Sn = null),
    Oy(n.stateNode),
    ot(e, Te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Al) throw ((Al = !1), (e = pu), (pu = null), e);
  return (
    Pl & 1 && e.tag !== 0 && kr(),
    (i = e.pendingLanes),
    i & 1 ? (e === hu ? Ao++ : ((Ao = 0), (hu = e))) : (Ao = 0),
    Cn(),
    null
  );
}
function kr() {
  if (dn !== null) {
    var e = eh(Pl),
      t = wt.transition,
      n = ue;
    try {
      if (((wt.transition = null), (ue = 16 > e ? 16 : e), dn === null)) var r = !1;
      else {
        if (((e = dn), (dn = null), (Pl = 0), ie & 6)) throw Error(L(331));
        var o = ie;
        for (ie |= 4, V = e.current; V !== null; ) {
          var i = V,
            l = i.child;
          if (V.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (V = u; V !== null; ) {
                  var f = V;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      No(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (V = d);
                  else
                    for (; V !== null; ) {
                      f = V;
                      var m = f.sibling,
                        S = f.return;
                      if ((fm(f), f === u)) {
                        V = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (V = m);
                        break;
                      }
                      V = S;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var _ = g.child;
                if (_ !== null) {
                  g.child = null;
                  do {
                    var T = _.sibling;
                    (_.sibling = null), (_ = T);
                  } while (_ !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (V = l);
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    No(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (V = h);
                break e;
              }
              V = i.return;
            }
        }
        var c = e.current;
        for (V = c; V !== null; ) {
          l = V;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (V = p);
          else
            e: for (l = c; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl(9, s);
                  }
                } catch (k) {
                  Ce(s, s.return, k);
                }
              if (s === l) {
                V = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (V = E);
                break e;
              }
              V = s.return;
            }
        }
        if (((ie = o), Cn(), Ft && typeof Ft.onPostCommitFiberRoot == "function"))
          try {
            Ft.onPostCommitFiberRoot(bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (wt.transition = t);
    }
  }
  return !1;
}
function ud(e, t, n) {
  (t = Ir(n, t)), (t = em(e, t, 1)), (e = yn(e, t, 1)), (t = Qe()), e !== null && (ri(e, 1, t), ot(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) ud(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ud(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Sn === null || !Sn.has(r)))
        ) {
          (e = Ir(n, e)), (e = tm(t, e, 1)), (t = yn(t, e, 1)), (e = Qe()), t !== null && (ri(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function c1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ze === e &&
      (Fe & n) === n &&
      (Pe === 4 || (Pe === 3 && (Fe & 130023424) === Fe && 500 > Te() - wc) ? zn(e, 0) : (Sc |= n)),
    ot(e, t);
}
function _m(e, t) {
  t === 0 && (e.mode & 1 ? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304)) : (t = 1));
  var n = Qe();
  (e = qt(e, t)), e !== null && (ri(e, t, n), ot(e, n));
}
function f1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _m(e, n);
}
function d1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), _m(e, n);
}
var Rm;
Rm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), q0(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), we && t.flags & 1048576 && Ch(t, Rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qi(e, t), (e = t.pendingProps);
      var o = Nr(t, Ke.current);
      xr(t, n), (o = pc(null, t, r, e, o, n));
      var i = hc();
      return (
        (t.flags |= 1),
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            rt(r) ? ((i = !0), wl(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            ac(t),
            (o.updater = Zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            nu(t, r, e, n),
            (t = iu(null, t, r, !0, i, n)))
          : ((t.tag = 0), we && i && tc(t), Ge(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = h1(r)),
          (e = At(r, e)),
          o)
        ) {
          case 0:
            t = ou(null, t, r, e, n);
            break e;
          case 1:
            t = qf(null, t, r, e, n);
            break e;
          case 11:
            t = Xf(null, t, r, e, n);
            break e;
          case 14:
            t = Jf(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : At(r, o)), ou(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : At(r, o)), qf(e, t, r, o, n);
    case 3:
      e: {
        if ((im(t), e === null)) throw Error(L(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Ih(e, t), kl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ir(Error(L(423)), t)), (t = ed(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ir(Error(L(424)), t)), (t = ed(e, t, r, n, o));
            break e;
          } else
            for (
              ct = gn(t.stateNode.containerInfo.firstChild),
                ft = t,
                we = !0,
                It = null,
                n = Ah(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Lr(), r === o)) {
            t = en(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $h(t),
        e === null && qa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Qa(r, o) ? (l = null) : i !== null && Qa(r, i) && (t.flags |= 32),
        om(e, t),
        Ge(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && qa(t), null;
    case 13:
      return lm(e, t, n);
    case 4:
      return (
        uc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ar(t, null, r, n)) : Ge(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : At(r, o)), Xf(e, t, r, o, n);
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          pe(El, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Dt(i.value, l)) {
            if (i.children === o.children && !nt.current) {
              t = en(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Zt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)), (u.pending = a);
                      }
                    }
                    (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), eu(i.return, n, t), (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(L(341));
                (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), eu(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ge(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (o = Rt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ge(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = At(r, t.pendingProps)), (o = At(r.type, o)), Jf(e, t, r, o, n);
    case 15:
      return nm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        qi(e, t),
        (t.tag = 1),
        rt(r) ? ((e = !0), wl(t)) : (e = !1),
        xr(t, n),
        qh(t, r, o),
        nu(t, r, o, n),
        iu(null, t, r, !0, e, n)
      );
    case 19:
      return sm(e, t, n);
    case 22:
      return rm(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Em(e, t) {
  return Zp(e, t);
}
function p1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function St(e, t, n, r) {
  return new p1(e, t, n, r);
}
function xc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function h1(e) {
  if (typeof e == "function") return xc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bu)) return 11;
    if (e === Wu) return 14;
  }
  return 2;
}
function _n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nl(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) xc(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ar:
        return Vn(n.children, o, i, t);
      case Bu:
        (l = 8), (o |= 8);
        break;
      case Ca:
        return (e = St(12, n, t, o | 2)), (e.elementType = Ca), (e.lanes = i), e;
      case Ta:
        return (e = St(13, n, t, o)), (e.elementType = Ta), (e.lanes = i), e;
      case Na:
        return (e = St(19, n, t, o)), (e.elementType = Na), (e.lanes = i), e;
      case $p:
        return ql(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pp:
              l = 10;
              break e;
            case Ip:
              l = 9;
              break e;
            case bu:
              l = 11;
              break e;
            case Wu:
              l = 14;
              break e;
            case ln:
              (l = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (t = St(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Vn(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e;
}
function ql(e, t, n, r) {
  return (e = St(22, e, r, t)), (e.elementType = $p), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function sa(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e;
}
function aa(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function m1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bs(0)),
    (this.expirationTimes = Bs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function kc(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new m1(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = St(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ac(i),
    e
  );
}
function v1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: sr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function xm(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (Xn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return xh(e, n, t);
  }
  return t;
}
function km(e, t, n, r, o, i, l, s, a) {
  return (
    (e = kc(n, r, !0, e, o, i, l, s, a)),
    (e.context = xm(null)),
    (n = e.current),
    (r = Qe()),
    (o = wn(n)),
    (i = Zt(r, o)),
    (i.callback = t ?? null),
    yn(n, i, o),
    (e.current.lanes = o),
    ri(e, o, r),
    ot(e, r),
    e
  );
}
function es(e, t, n, r) {
  var o = t.current,
    i = Qe(),
    l = wn(o);
  return (
    (n = xm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Zt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yn(o, t, l)),
    e !== null && (Mt(e, o, l, i), Zi(e, o, l)),
    l
  );
}
function $l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cc(e, t) {
  cd(e, t), (e = e.alternate) && cd(e, t);
}
function g1() {
  return null;
}
var Cm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tc(e) {
  this._internalRoot = e;
}
ts.prototype.render = Tc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  es(e, t, null, null);
};
ts.prototype.unmount = Tc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gn(function () {
      es(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function ts(e) {
  this._internalRoot = e;
}
ts.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
    un.splice(n, 0, e), n === 0 && ih(e);
  }
};
function Nc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ns(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fd() {}
function y1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = $l(l);
        i.call(u);
      };
    }
    var l = km(t, r, e, 0, null, !1, !1, "", fd);
    return (e._reactRootContainer = l), (e[Jt] = l.current), Wo(e.nodeType === 8 ? e.parentNode : e), Gn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = $l(a);
      s.call(u);
    };
  }
  var a = kc(e, 0, !1, null, null, !1, !1, "", fd);
  return (
    (e._reactRootContainer = a),
    (e[Jt] = a.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    Gn(function () {
      es(t, a, n, r);
    }),
    a
  );
}
function rs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = $l(l);
        s.call(a);
      };
    }
    es(t, l, e, o);
  } else l = y1(n, t, e, o, r);
  return $l(l);
}
th = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yo(t.pendingLanes);
        n !== 0 && (Gu(t, n | 1), ot(t, Te()), !(ie & 6) && (($r = Te() + 500), Cn()));
      }
      break;
    case 13:
      Gn(function () {
        var r = qt(e, 1);
        if (r !== null) {
          var o = Qe();
          Mt(r, e, 1, o);
        }
      }),
        Cc(e, 1);
  }
};
Qu = function (e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Mt(t, e, 134217728, n);
    }
    Cc(e, 134217728);
  }
};
nh = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = qt(e, t);
    if (n !== null) {
      var r = Qe();
      Mt(n, e, t, r);
    }
    Cc(e, t);
  }
};
rh = function () {
  return ue;
};
oh = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Gl(r);
            if (!o) throw Error(L(90));
            jp(r), Pa(r, o);
          }
        }
      }
      break;
    case "textarea":
      Op(e, n);
      break;
    case "select":
      (t = n.value), t != null && wr(e, !!n.multiple, t, !1);
  }
};
Wp = _c;
Hp = Gn;
var S1 = { usingClientEntryPoint: !1, Events: [ii, dr, Gl, Bp, bp, _c] },
  ao = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  w1 = {
    bundleType: ao.bundleType,
    version: ao.version,
    rendererPackageName: ao.rendererPackageName,
    rendererConfig: ao.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ao.findFiberByHostInstance || g1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ii.isDisabled && Ii.supportsFiber)
    try {
      (bl = Ii.inject(w1)), (Ft = Ii);
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S1;
pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nc(t)) throw Error(L(200));
  return v1(e, t, null, n);
};
pt.createRoot = function (e, t) {
  if (!Nc(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Cm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = kc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jt] = t.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    new Tc(t)
  );
};
pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Qp(t)), (e = e === null ? null : e.stateNode), e;
};
pt.flushSync = function (e) {
  return Gn(e);
};
pt.hydrate = function (e, t, n) {
  if (!ns(t)) throw Error(L(200));
  return rs(null, e, t, !0, n);
};
pt.hydrateRoot = function (e, t, n) {
  if (!Nc(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Cm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = km(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Jt] = t.current),
    Wo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ts(t);
};
pt.render = function (e, t, n) {
  if (!ns(t)) throw Error(L(200));
  return rs(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function (e) {
  if (!ns(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Gn(function () {
        rs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
pt.unstable_batchedUpdates = _c;
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ns(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return rs(e, t, n, !1, r);
};
pt.version = "18.3.1-next-f1338f8080-20240426";
function Tm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tm);
    } catch (e) {
      console.error(e);
    }
}
Tm(), (Tp.exports = pt);
var Nm = Tp.exports;
const _1 = mp(Nm);
var dd = Nm;
(xa.createRoot = dd.createRoot), (xa.hydrateRoot = dd.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qo() {
  return (
    (qo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qo.apply(this, arguments)
  );
}
var pn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pn || (pn = {}));
const pd = "popstate";
function R1(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return gu(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Am(o);
  }
  return x1(t, n, null, e);
}
function Ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Lm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function E1() {
  return Math.random().toString(36).substr(2, 8);
}
function hd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    qo({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Gr(t) : t, {
      state: n,
      key: (t && t.key) || r || E1(),
    })
  );
}
function Am(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function x1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = pn.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), l.replaceState(qo({}, l.state, { idx: u }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    s = pn.Pop;
    let T = f(),
      h = T == null ? null : T - u;
    (u = T), a && a({ action: s, location: _.location, delta: h });
  }
  function m(T, h) {
    s = pn.Push;
    let c = gu(_.location, T, h);
    u = f() + 1;
    let p = hd(c, u),
      E = _.createHref(c);
    try {
      l.pushState(p, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(E);
    }
    i && a && a({ action: s, location: _.location, delta: 1 });
  }
  function S(T, h) {
    s = pn.Replace;
    let c = gu(_.location, T, h);
    u = f();
    let p = hd(c, u),
      E = _.createHref(c);
    l.replaceState(p, "", E), i && a && a({ action: s, location: _.location, delta: 0 });
  }
  function g(T) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof T == "string" ? T : Am(T);
    return (
      (c = c.replace(/ $/, "%20")),
      Ie(h, "No window.location.(origin|href) available to create URL for href: " + c),
      new URL(c, h)
    );
  }
  let _ = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(pd, d),
        (a = T),
        () => {
          o.removeEventListener(pd, d), (a = null);
        }
      );
    },
    createHref(T) {
      return t(o, T);
    },
    createURL: g,
    encodeLocation(T) {
      let h = g(T);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: S,
    go(T) {
      return l.go(T);
    },
  };
  return _;
}
var md;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(md || (md = {}));
function k1(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gr(t) : t,
    o = $m(r.pathname || "/", n);
  if (o == null) return null;
  let i = Pm(e);
  C1(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) {
    let a = z1(o);
    l = j1(i[s], a);
  }
  return l;
}
function Pm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Ie(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Un([r, a.relativePath]),
      f = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Ie(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
      ),
      Pm(i.children, t, f, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: $1(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of Im(i.path)) o(i, l, a);
    }),
    t
  );
}
function Im(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Im(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function C1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : M1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const T1 = /^:[\w-]+$/,
  N1 = 3,
  L1 = 2,
  A1 = 1,
  P1 = 10,
  I1 = -2,
  vd = (e) => e === "*";
function $1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(vd) && (r += I1),
    t && (r += L1),
    n.filter((o) => !vd(o)).reduce((o, i) => o + (T1.test(i) ? N1 : i === "" ? A1 : P1), r)
  );
}
function M1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function j1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = D1({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, u);
    if (!f) return null;
    Object.assign(r, f.params);
    let d = s.route;
    i.push({ params: r, pathname: Un([o, f.pathname]), pathnameBase: W1(Un([o, f.pathnameBase])), route: d }),
      f.pathnameBase !== "/" && (o = Un([o, f.pathnameBase]));
  }
  return i;
}
function D1(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = O1(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: m, isOptional: S } = f;
      if (m === "*") {
        let _ = s[d] || "";
        l = i.slice(0, i.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[d];
      return S && !g ? (u[m] = void 0) : (u[m] = (g || "").replace(/%2F/g, "/")), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function O1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Lm(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (r.push({ paramName: s, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)")
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function z1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Lm(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function $m(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function V1(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Gr(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : U1(n, t)) : t, search: H1(r), hash: K1(o) };
}
function U1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ua(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function F1(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function B1(e, t) {
  let n = F1(e);
  return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function b1(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Gr(e))
    : ((o = qo({}, e)),
      Ie(!o.pathname || !o.pathname.includes("?"), ua("?", "pathname", "search", o)),
      Ie(!o.pathname || !o.pathname.includes("#"), ua("#", "pathname", "hash", o)),
      Ie(!o.search || !o.search.includes("#"), ua("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (l == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (d -= 1);
      o.pathname = m.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = V1(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    f = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Un = (e) => e.join("/").replace(/\/\/+/g, "/"),
  W1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  H1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  K1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function G1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Mm = ["post", "put", "patch", "delete"];
new Set(Mm);
const Q1 = ["get", ...Mm];
new Set(Q1);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ei.apply(this, arguments)
  );
}
const Lc = M.createContext(null),
  Y1 = M.createContext(null),
  os = M.createContext(null),
  is = M.createContext(null),
  Qr = M.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  jm = M.createContext(null);
function ls() {
  return M.useContext(is) != null;
}
function Dm() {
  return ls() || Ie(!1), M.useContext(is).location;
}
function Om(e) {
  M.useContext(os).static || M.useLayoutEffect(e);
}
function Yr() {
  let { isDataRoute: e } = M.useContext(Qr);
  return e ? aS() : Z1();
}
function Z1() {
  ls() || Ie(!1);
  let e = M.useContext(Lc),
    { basename: t, future: n, navigator: r } = M.useContext(os),
    { matches: o } = M.useContext(Qr),
    { pathname: i } = Dm(),
    l = JSON.stringify(B1(o, n.v7_relativeSplatPath)),
    s = M.useRef(!1);
  return (
    Om(() => {
      s.current = !0;
    }),
    M.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = b1(u, JSON.parse(l), i, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Un([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, l, i, e]
    )
  );
}
function X1(e, t) {
  return J1(e, t);
}
function J1(e, t, n, r) {
  ls() || Ie(!1);
  let { navigator: o } = M.useContext(os),
    { matches: i } = M.useContext(Qr),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Dm(),
    f;
  if (t) {
    var d;
    let T = typeof t == "string" ? Gr(t) : t;
    a === "/" || ((d = T.pathname) != null && d.startsWith(a)) || Ie(!1), (f = T);
  } else f = u;
  let m = f.pathname || "/",
    S = m;
  if (a !== "/") {
    let T = a.replace(/^\//, "").split("/");
    S = "/" + m.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let g = k1(e, { pathname: S }),
    _ = rS(
      g &&
        g.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, s, T.params),
            pathname: Un([a, o.encodeLocation ? o.encodeLocation(T.pathname).pathname : T.pathname]),
            pathnameBase:
              T.pathnameBase === "/"
                ? a
                : Un([a, o.encodeLocation ? o.encodeLocation(T.pathnameBase).pathname : T.pathnameBase]),
          })
        ),
      i,
      n,
      r
    );
  return t && _
    ? M.createElement(
        is.Provider,
        {
          value: {
            location: ei({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f),
            navigationType: pn.Pop,
          },
        },
        _
      )
    : _;
}
function q1() {
  let e = sS(),
    t = G1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return M.createElement(
    M.Fragment,
    null,
    M.createElement("h2", null, "Unexpected Application Error!"),
    M.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? M.createElement("pre", { style: o }, n) : null,
    null
  );
}
const eS = M.createElement(q1, null);
class tS extends M.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? M.createElement(
          Qr.Provider,
          { value: this.props.routeContext },
          M.createElement(jm.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function nS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = M.useContext(Lc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    M.createElement(Qr.Provider, { value: t }, r)
  );
}
function rS(e, t, n, r) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let f = l.findIndex((d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0);
    f >= 0 || Ie(!1), (l = l.slice(0, Math.min(l.length, f + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < l.length; f++) {
      let d = l[f];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f), d.route.id)) {
        let { loaderData: m, errors: S } = n,
          g = d.route.loader && m[d.route.id] === void 0 && (!S || S[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((f, d, m) => {
    let S,
      g = !1,
      _ = null,
      T = null;
    n &&
      ((S = s && d.route.id ? s[d.route.id] : void 0),
      (_ = d.route.errorElement || eS),
      a &&
        (u < 0 && m === 0
          ? ((g = !0), (T = null))
          : u === m && ((g = !0), (T = d.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, m + 1)),
      c = () => {
        let p;
        return (
          S
            ? (p = _)
            : g
              ? (p = T)
              : d.route.Component
                ? (p = M.createElement(d.route.Component, null))
                : d.route.element
                  ? (p = d.route.element)
                  : (p = f),
          M.createElement(nS, {
            match: d,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? M.createElement(tS, {
          location: n.location,
          revalidation: n.revalidation,
          component: _,
          error: S,
          children: c(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var zm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e
    );
  })(zm || {}),
  Ml = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ml || {});
function oS(e) {
  let t = M.useContext(Lc);
  return t || Ie(!1), t;
}
function iS(e) {
  let t = M.useContext(Y1);
  return t || Ie(!1), t;
}
function lS(e) {
  let t = M.useContext(Qr);
  return t || Ie(!1), t;
}
function Vm(e) {
  let t = lS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ie(!1), n.route.id;
}
function sS() {
  var e;
  let t = M.useContext(jm),
    n = iS(Ml.UseRouteError),
    r = Vm(Ml.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function aS() {
  let { router: e } = oS(zm.UseNavigateStable),
    t = Vm(Ml.UseNavigateStable),
    n = M.useRef(!1);
  return (
    Om(() => {
      n.current = !0;
    }),
    M.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, ei({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function In(e) {
  Ie(!1);
}
function uS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = pn.Pop,
    navigator: i,
    static: l = !1,
    future: s,
  } = e;
  ls() && Ie(!1);
  let a = t.replace(/^\/*/, "/"),
    u = M.useMemo(
      () => ({ basename: a, navigator: i, static: l, future: ei({ v7_relativeSplatPath: !1 }, s) }),
      [a, s, i, l]
    );
  typeof r == "string" && (r = Gr(r));
  let { pathname: f = "/", search: d = "", hash: m = "", state: S = null, key: g = "default" } = r,
    _ = M.useMemo(() => {
      let T = $m(f, a);
      return T == null ? null : { location: { pathname: T, search: d, hash: m, state: S, key: g }, navigationType: o };
    }, [a, f, d, m, S, g, o]);
  return _ == null
    ? null
    : M.createElement(os.Provider, { value: u }, M.createElement(is.Provider, { children: n, value: _ }));
}
function cS(e) {
  let { children: t, location: n } = e;
  return X1(yu(t), n);
}
new Promise(() => {});
function yu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    M.Children.forEach(e, (r, o) => {
      if (!M.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === M.Fragment) {
        n.push.apply(n, yu(r.props.children, i));
        return;
      }
      r.type !== In && Ie(!1), !r.props.index || !r.props.children || Ie(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = yu(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const fS = "6";
try {
  window.__reactRouterVersion = fS;
} catch {}
const dS = "startTransition",
  gd = cy[dS];
function pS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = M.useRef();
  i.current == null && (i.current = R1({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = M.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    f = M.useCallback(
      (d) => {
        u && gd ? gd(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    M.useLayoutEffect(() => l.listen(f), [l, f]),
    M.createElement(uS, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
var yd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(yd || (yd = {}));
var Sd;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(Sd || (Sd = {}));
var Um = {};
function hS(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var mS = hS,
  ee = mS;
function vS(e) {
  return !!e && typeof e.then == "function";
}
var ve = vS;
function gS(e, t) {
  if (e != null) return e;
  throw ee(t ?? "Got unexpected null or undefined");
}
var _e = gS;
function J(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
class ss {
  getValue() {
    throw ee("BaseLoadable");
  }
  toPromise() {
    throw ee("BaseLoadable");
  }
  valueMaybe() {
    throw ee("BaseLoadable");
  }
  valueOrThrow() {
    throw ee(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw ee("BaseLoadable");
  }
  promiseOrThrow() {
    throw ee(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw ee("BaseLoadable");
  }
  errorOrThrow() {
    throw ee(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw ee("BaseLoadable");
  }
}
class yS extends ss {
  constructor(t) {
    super(), J(this, "state", "hasValue"), J(this, "contents", void 0), (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return ve(n) ? Qn(n) : Mr(n) ? n : si(n);
    } catch (n) {
      return ve(n) ? Qn(n.next(() => this.map(t))) : as(n);
    }
  }
}
class SS extends ss {
  constructor(t) {
    super(), J(this, "state", "hasError"), J(this, "contents", void 0), (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class Fm extends ss {
  constructor(t) {
    super(), J(this, "state", "loading"), J(this, "contents", void 0), (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return Qn(
      this.contents
        .then((n) => {
          const r = t(n);
          if (Mr(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (ve(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function si(e) {
  return Object.freeze(new yS(e));
}
function as(e) {
  return Object.freeze(new SS(e));
}
function Qn(e) {
  return Object.freeze(new Fm(e));
}
function Bm() {
  return Object.freeze(new Fm(new Promise(() => {})));
}
function wS(e) {
  return e.every((t) => t.state === "hasValue")
    ? si(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
      ? as(
          _e(
            e.find((t) => t.state === "hasError"),
            "Invalid loadable passed to loadableAll"
          ).contents
        )
      : Qn(Promise.all(e.map((t) => t.contents)));
}
function bm(e) {
  const n = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])).map((o) =>
      Mr(o) ? o : ve(o) ? Qn(o) : si(o)
    ),
    r = wS(n);
  return Array.isArray(e)
    ? r
    : r.map((o) => Object.getOwnPropertyNames(e).reduce((i, l, s) => ({ ...i, [l]: o[s] }), {}));
}
function Mr(e) {
  return e instanceof ss;
}
const _S = {
  of: (e) => (ve(e) ? Qn(e) : Mr(e) ? e : si(e)),
  error: (e) => as(e),
  loading: () => Bm(),
  all: bm,
  isLoadable: Mr,
};
var Jn = {
    loadableWithValue: si,
    loadableWithError: as,
    loadableWithPromise: Qn,
    loadableLoading: Bm,
    loadableAll: bm,
    isLoadable: Mr,
    RecoilLoadable: _S,
  },
  RS = Jn.loadableWithValue,
  ES = Jn.loadableWithError,
  xS = Jn.loadableWithPromise,
  kS = Jn.loadableLoading,
  CS = Jn.loadableAll,
  TS = Jn.isLoadable,
  NS = Jn.RecoilLoadable,
  ai = Object.freeze({
    __proto__: null,
    loadableWithValue: RS,
    loadableWithError: ES,
    loadableWithPromise: xS,
    loadableLoading: kS,
    loadableAll: CS,
    isLoadable: TS,
    RecoilLoadable: NS,
  });
const Su = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function LS(e, t) {
  var n, r;
  const o = (n = Um[e]) === null || n === void 0 || (r = n.toLowerCase()) === null || r === void 0 ? void 0 : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o)) throw ee(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function AS(e, t) {
  var n;
  const r = (n = Um[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function PS() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (LS("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        Su.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      AS("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          Su.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
PS();
var Zr = Su;
function us(e) {
  return Zr.RECOIL_GKS_ENABLED.has(e);
}
us.setPass = (e) => {
  Zr.RECOIL_GKS_ENABLED.add(e);
};
us.setFail = (e) => {
  Zr.RECOIL_GKS_ENABLED.delete(e);
};
us.clear = () => {
  Zr.RECOIL_GKS_ENABLED.clear();
};
var fe = us;
function IS(e, t, { error: n } = {}) {
  return null;
}
var $S = IS,
  Ac = $S,
  ca,
  fa,
  da;
const MS = (ca = le.createMutableSource) !== null && ca !== void 0 ? ca : le.unstable_createMutableSource,
  Wm = (fa = le.useMutableSource) !== null && fa !== void 0 ? fa : le.unstable_useMutableSource,
  Hm = (da = le.useSyncExternalStore) !== null && da !== void 0 ? da : le.unstable_useSyncExternalStore;
function jS() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : n.currentDispatcher).useSyncExternalStore !=
    null
  );
}
function DS() {
  return fe("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : fe("recoil_sync_external_store") && Hm != null
      ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
      : fe("recoil_mutable_source") &&
          Wm != null &&
          typeof window < "u" &&
          !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
        ? fe("recoil_suppress_rerender_in_callback")
          ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
          : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
        : fe("recoil_suppress_rerender_in_callback")
          ? { mode: "LEGACY", early: !0, concurrent: !1 }
          : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function OS() {
  return !1;
}
var ui = {
  createMutableSource: MS,
  useMutableSource: Wm,
  useSyncExternalStore: Hm,
  currentRendererSupportsUseSyncExternalStore: jS,
  reactMode: DS,
  isFastRefreshEnabled: OS,
};
class Pc {
  constructor(t) {
    J(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class Km extends Pc {}
class Gm extends Pc {}
function zS(e) {
  return e instanceof Km || e instanceof Gm;
}
var cs = { AbstractRecoilValue: Pc, RecoilState: Km, RecoilValueReadOnly: Gm, isRecoilValue: zS },
  VS = cs.AbstractRecoilValue,
  US = cs.RecoilState,
  FS = cs.RecoilValueReadOnly,
  BS = cs.isRecoilValue,
  jr = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: VS,
    RecoilState: US,
    RecoilValueReadOnly: FS,
    isRecoilValue: BS,
  });
function bS(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var fs = bS;
class Qm {}
const WS = new Qm(),
  Yn = new Map(),
  Ic = new Map();
function HS(e) {
  return fs(e, (t) => _e(Ic.get(t)));
}
function KS(e) {
  if (Yn.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function GS(e) {
  Zr.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && KS(e.key), Yn.set(e.key, e);
  const t = e.set == null ? new jr.RecoilValueReadOnly(e.key) : new jr.RecoilState(e.key);
  return Ic.set(e.key, t), t;
}
class Ym extends Error {}
function QS(e) {
  const t = Yn.get(e);
  if (t == null) throw new Ym(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function YS(e) {
  return Yn.get(e);
}
const jl = new Map();
function ZS(e) {
  var t;
  if (!fe("recoil_memory_managament_2020")) return;
  const n = Yn.get(e);
  if (n != null && (t = n.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(n)) {
    var r;
    Yn.delete(e), (r = Zm(e)) === null || r === void 0 || r(), jl.delete(e);
  }
}
function XS(e, t) {
  fe("recoil_memory_managament_2020") && (t === void 0 ? jl.delete(e) : jl.set(e, t));
}
function Zm(e) {
  return jl.get(e);
}
var lt = {
  nodes: Yn,
  recoilValues: Ic,
  registerNode: GS,
  getNode: QS,
  getNodeMaybe: YS,
  deleteNodeConfigIfPossible: ZS,
  setConfigDeletionHandler: XS,
  getConfigDeletionHandler: Zm,
  recoilValuesForKeys: HS,
  NodeMissingError: Ym,
  DefaultValue: Qm,
  DEFAULT_VALUE: WS,
};
function JS(e, t) {
  t();
}
var qS = { enqueueExecution: JS };
function ew(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var tw = ew(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (R) {
            return typeof R;
          }
        : function (R) {
            return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype
              ? "symbol"
              : typeof R;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    l = o / 2,
    s = o / 4,
    a = {},
    u = function (y) {
      return function () {
        return y;
      };
    },
    f = (n.hash = function (R) {
      var y = typeof R > "u" ? "undefined" : t(R);
      if (y === "number") return R;
      y !== "string" && (R += "");
      for (var N = 0, O = 0, z = R.length; O < z; ++O) {
        var U = R.charCodeAt(O);
        N = ((N << 5) - N + U) | 0;
      }
      return N;
    }),
    d = function (y) {
      return (
        (y -= (y >> 1) & 1431655765),
        (y = (y & 858993459) + ((y >> 2) & 858993459)),
        (y = (y + (y >> 4)) & 252645135),
        (y += y >> 8),
        (y += y >> 16),
        y & 127
      );
    },
    m = function (y, N) {
      return (N >>> y) & i;
    },
    S = function (y) {
      return 1 << y;
    },
    g = function (y, N) {
      return d(y & (N - 1));
    },
    _ = function (y, N, O, z) {
      var U = z;
      if (!y) {
        var Y = z.length;
        U = new Array(Y);
        for (var G = 0; G < Y; ++G) U[G] = z[G];
      }
      return (U[N] = O), U;
    },
    T = function (y, N, O) {
      var z = O.length - 1,
        U = 0,
        Y = 0,
        G = O;
      if (y) U = Y = N;
      else for (G = new Array(z); U < N; ) G[Y++] = O[U++];
      for (++U; U <= z; ) G[Y++] = O[U++];
      return y && (G.length = z), G;
    },
    h = function (y, N, O, z) {
      var U = z.length;
      if (y) {
        for (var Y = U; Y >= N; ) z[Y--] = z[Y];
        return (z[N] = O), z;
      }
      for (var G = 0, Q = 0, te = new Array(U + 1); G < N; ) te[Q++] = z[G++];
      for (te[N] = O; G < U; ) te[++Q] = z[G++];
      return te;
    },
    c = 1,
    p = 2,
    E = 3,
    k = 4,
    C = { __hamt_isEmpty: !0 },
    x = function (y) {
      return y === C || (y && y.__hamt_isEmpty);
    },
    I = function (y, N, O, z) {
      return { type: c, edit: y, hash: N, key: O, value: z, _modify: j };
    },
    oe = function (y, N, O) {
      return { type: p, edit: y, hash: N, children: O, _modify: b };
    },
    B = function (y, N, O) {
      return { type: E, edit: y, mask: N, children: O, _modify: $ };
    },
    de = function (y, N, O) {
      return { type: k, edit: y, size: N, children: O, _modify: W };
    },
    Xe = function (y) {
      return y === C || y.type === c || y.type === p;
    },
    se = function (y, N, O, z, U) {
      for (var Y = [], G = z, Q = 0, te = 0; G; ++te) G & 1 && (Y[te] = U[Q++]), (G >>>= 1);
      return (Y[N] = O), de(y, Q + 1, Y);
    },
    $e = function (y, N, O, z) {
      for (var U = new Array(N - 1), Y = 0, G = 0, Q = 0, te = z.length; Q < te; ++Q)
        if (Q !== O) {
          var Se = z[Q];
          Se && !x(Se) && ((U[Y++] = Se), (G |= 1 << Q));
        }
      return B(y, G, U);
    },
    kt = function R(y, N, O, z, U, Y) {
      if (O === U) return oe(y, O, [Y, z]);
      var G = m(N, O),
        Q = m(N, U);
      return B(y, S(G) | S(Q), G === Q ? [R(y, N + r, O, z, U, Y)] : G < Q ? [z, Y] : [Y, z]);
    },
    Me = function (y, N, O, z, U, Y, G, Q) {
      for (var te = U.length, Se = 0; Se < te; ++Se) {
        var Je = U[Se];
        if (O(G, Je.key)) {
          var je = Je.value,
            vt = Y(je);
          return vt === je ? U : vt === a ? (--Q.value, T(y, Se, U)) : _(y, Se, I(N, z, G, vt), U);
        }
      }
      var Tt = Y();
      return Tt === a ? U : (++Q.value, _(y, te, I(N, z, G, Tt), U));
    },
    Ve = function (y, N) {
      return y === N.edit;
    },
    j = function (y, N, O, z, U, Y, G) {
      if (N(Y, this.key)) {
        var Q = z(this.value);
        return Q === this.value
          ? this
          : Q === a
            ? (--G.value, C)
            : Ve(y, this)
              ? ((this.value = Q), this)
              : I(y, U, Y, Q);
      }
      var te = z();
      return te === a ? this : (++G.value, kt(y, O, this.hash, this, U, I(y, U, Y, te)));
    },
    b = function (y, N, O, z, U, Y, G) {
      if (U === this.hash) {
        var Q = Ve(y, this),
          te = Me(Q, y, N, this.hash, this.children, z, Y, G);
        return te === this.children ? this : te.length > 1 ? oe(y, this.hash, te) : te[0];
      }
      var Se = z();
      return Se === a ? this : (++G.value, kt(y, O, this.hash, this, U, I(y, U, Y, Se)));
    },
    $ = function (y, N, O, z, U, Y, G) {
      var Q = this.mask,
        te = this.children,
        Se = m(O, U),
        Je = S(Se),
        je = g(Q, Je),
        vt = Q & Je,
        Tt = vt ? te[je] : C,
        er = Tt._modify(y, N, O + r, z, U, Y, G);
      if (Tt === er) return this;
      var mi = Ve(y, this),
        qr = Q,
        eo = void 0;
      if (vt && x(er)) {
        if (((qr &= ~Je), !qr)) return C;
        if (te.length <= 2 && Xe(te[je ^ 1])) return te[je ^ 1];
        eo = T(mi, je, te);
      } else if (!vt && !x(er)) {
        if (te.length >= l) return se(y, Se, er, Q, te);
        (qr |= Je), (eo = h(mi, je, er, te));
      } else eo = _(mi, je, er, te);
      return mi ? ((this.mask = qr), (this.children = eo), this) : B(y, qr, eo);
    },
    W = function (y, N, O, z, U, Y, G) {
      var Q = this.size,
        te = this.children,
        Se = m(O, U),
        Je = te[Se],
        je = (Je || C)._modify(y, N, O + r, z, U, Y, G);
      if (Je === je) return this;
      var vt = Ve(y, this),
        Tt = void 0;
      if (x(Je) && !x(je)) ++Q, (Tt = _(vt, Se, je, te));
      else if (!x(Je) && x(je)) {
        if ((--Q, Q <= s)) return $e(y, Q, Se, te);
        Tt = _(vt, Se, C, te);
      } else Tt = _(vt, Se, je, te);
      return vt ? ((this.size = Q), (this.children = Tt), this) : de(y, Q, Tt);
    };
  C._modify = function (R, y, N, O, z, U, Y) {
    var G = O();
    return G === a ? C : (++Y.value, I(R, z, U, G));
  };
  function w(R, y, N, O, z) {
    (this._editable = R), (this._edit = y), (this._config = N), (this._root = O), (this._size = z);
  }
  w.prototype.setTree = function (R, y) {
    return this._editable
      ? ((this._root = R), (this._size = y), this)
      : R === this._root
        ? this
        : new w(this._editable, this._edit, this._config, R, y);
  };
  var A = (n.tryGetHash = function (R, y, N, O) {
    for (var z = O._root, U = 0, Y = O._config.keyEq; ; )
      switch (z.type) {
        case c:
          return Y(N, z.key) ? z.value : R;
        case p: {
          if (y === z.hash)
            for (var G = z.children, Q = 0, te = G.length; Q < te; ++Q) {
              var Se = G[Q];
              if (Y(N, Se.key)) return Se.value;
            }
          return R;
        }
        case E: {
          var Je = m(U, y),
            je = S(Je);
          if (z.mask & je) {
            (z = z.children[g(z.mask, je)]), (U += r);
            break;
          }
          return R;
        }
        case k: {
          if (((z = z.children[m(U, y)]), z)) {
            U += r;
            break;
          }
          return R;
        }
        default:
          return R;
      }
  });
  w.prototype.tryGetHash = function (R, y, N) {
    return A(R, y, N, this);
  };
  var P = (n.tryGet = function (R, y, N) {
    return A(R, N._config.hash(y), y, N);
  });
  w.prototype.tryGet = function (R, y) {
    return P(R, y, this);
  };
  var K = (n.getHash = function (R, y, N) {
    return A(void 0, R, y, N);
  });
  (w.prototype.getHash = function (R, y) {
    return K(R, y, this);
  }),
    (n.get = function (R, y) {
      return A(void 0, y._config.hash(R), R, y);
    }),
    (w.prototype.get = function (R, y) {
      return P(y, R, this);
    });
  var D = (n.has = function (R, y, N) {
    return A(a, R, y, N) !== a;
  });
  w.prototype.hasHash = function (R, y) {
    return D(R, y, this);
  };
  var Z = (n.has = function (R, y) {
    return D(y._config.hash(R), R, y);
  });
  w.prototype.has = function (R) {
    return Z(R, this);
  };
  var X = function (y, N) {
    return y === N;
  };
  (n.make = function (R) {
    return new w(0, 0, { keyEq: (R && R.keyEq) || X, hash: (R && R.hash) || f }, C, 0);
  }),
    (n.empty = n.make());
  var F = (n.isEmpty = function (R) {
    return R && !!x(R._root);
  });
  w.prototype.isEmpty = function () {
    return F(this);
  };
  var ce = (n.modifyHash = function (R, y, N, O) {
    var z = { value: O._size },
      U = O._root._modify(O._editable ? O._edit : NaN, O._config.keyEq, 0, R, y, N, z);
    return O.setTree(U, z.value);
  });
  w.prototype.modifyHash = function (R, y, N) {
    return ce(N, R, y, this);
  };
  var ye = (n.modify = function (R, y, N) {
    return ce(R, N._config.hash(y), y, N);
  });
  w.prototype.modify = function (R, y) {
    return ye(y, R, this);
  };
  var ne = (n.setHash = function (R, y, N, O) {
    return ce(u(N), R, y, O);
  });
  w.prototype.setHash = function (R, y, N) {
    return ne(R, y, N, this);
  };
  var Re = (n.set = function (R, y, N) {
    return ne(N._config.hash(R), R, y, N);
  });
  w.prototype.set = function (R, y) {
    return Re(R, y, this);
  };
  var Ct = u(a),
    Ln = (n.removeHash = function (R, y, N) {
      return ce(Ct, R, y, N);
    });
  w.prototype.removeHash = w.prototype.deleteHash = function (R, y) {
    return Ln(R, y, this);
  };
  var mt = (n.remove = function (R, y) {
    return Ln(y._config.hash(R), R, y);
  });
  w.prototype.remove = w.prototype.delete = function (R) {
    return mt(R, this);
  };
  var st = (n.beginMutation = function (R) {
    return new w(R._editable + 1, R._edit + 1, R._config, R._root, R._size);
  });
  w.prototype.beginMutation = function () {
    return st(this);
  };
  var qc = (n.endMutation = function (R) {
    return (R._editable = R._editable && R._editable - 1), R;
  });
  w.prototype.endMutation = function () {
    return qc(this);
  };
  var zg = (n.mutate = function (R, y) {
    var N = st(y);
    return R(N), qc(N);
  });
  w.prototype.mutate = function (R) {
    return zg(R, this);
  };
  var Ms = function (y) {
      return y && ef(y[0], y[1], y[2], y[3], y[4]);
    },
    ef = function (y, N, O, z, U) {
      for (; O < y; ) {
        var Y = N[O++];
        if (Y && !x(Y)) return tf(Y, z, [y, N, O, z, U]);
      }
      return Ms(U);
    },
    tf = function (y, N, O) {
      switch (y.type) {
        case c:
          return { value: N(y), rest: O };
        case p:
        case k:
        case E:
          var z = y.children;
          return ef(z.length, z, 0, N, O);
        default:
          return Ms(O);
      }
    },
    Vg = { done: !0 };
  function js(R) {
    this.v = R;
  }
  (js.prototype.next = function () {
    if (!this.v) return Vg;
    var R = this.v;
    return (this.v = Ms(R.rest)), R;
  }),
    (js.prototype[Symbol.iterator] = function () {
      return this;
    });
  var Ds = function (y, N) {
      return new js(tf(y._root, N));
    },
    Ug = function (y) {
      return [y.key, y.value];
    },
    Fg = (n.entries = function (R) {
      return Ds(R, Ug);
    });
  w.prototype.entries = w.prototype[Symbol.iterator] = function () {
    return Fg(this);
  };
  var Bg = function (y) {
      return y.key;
    },
    bg = (n.keys = function (R) {
      return Ds(R, Bg);
    });
  w.prototype.keys = function () {
    return bg(this);
  };
  var Wg = function (y) {
      return y.value;
    },
    Hg =
      (n.values =
      w.prototype.values =
        function (R) {
          return Ds(R, Wg);
        });
  w.prototype.values = function () {
    return Hg(this);
  };
  var nf = (n.fold = function (R, y, N) {
    var O = N._root;
    if (O.type === c) return R(y, O.value, O.key);
    for (var z = [O.children], U = void 0; (U = z.pop()); )
      for (var Y = 0, G = U.length; Y < G; ) {
        var Q = U[Y++];
        Q && Q.type && (Q.type === c ? (y = R(y, Q.value, Q.key)) : z.push(Q.children));
      }
    return y;
  });
  w.prototype.fold = function (R, y) {
    return nf(R, y, this);
  };
  var Kg = (n.forEach = function (R, y) {
    return nf(
      function (N, O, z) {
        return R(O, z, y);
      },
      null,
      y
    );
  });
  w.prototype.forEach = function (R) {
    return Kg(R, this);
  };
  var Gg = (n.count = function (R) {
    return R._size;
  });
  (w.prototype.count = function () {
    return Gg(this);
  }),
    Object.defineProperty(w.prototype, "size", { get: w.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class nw {
  constructor(t) {
    J(this, "_map", void 0), (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return Mc(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class $c {
  constructor(t) {
    if ((J(this, "_hamt", tw.empty.beginMutation()), t instanceof $c)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return Mc(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function Mc(e) {
  return fe("recoil_hamt_2020") ? new $c(e) : new nw(e);
}
var rw = { persistentMap: Mc },
  ow = rw.persistentMap,
  iw = Object.freeze({ __proto__: null, persistentMap: ow });
function lw(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var Po = lw;
function sw(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var Dl = sw;
function aw() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function uw(e) {
  return {
    nodeDeps: Dl(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: Dl(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function pa(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    l = o.get(e);
  if (l && r && l !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const s = l == null ? t : Po(t, l);
  for (const a of s) i.has(a) || i.set(a, new Set()), _e(i.get(a)).add(e);
  if (l) {
    const a = Po(l, t);
    for (const u of a) {
      if (!i.has(u)) return;
      const f = _e(i.get(u));
      f.delete(e), f.size === 0 && i.delete(u);
    }
  }
}
function cw(e, t, n, r) {
  var o, i, l, s;
  const a = n.getState();
  r === a.currentTree.version ||
    r === ((o = a.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = a.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if ((pa(e, t, u), r === ((l = a.previousTree) === null || l === void 0 ? void 0 : l.version))) {
    const d = n.getGraph(a.currentTree.version);
    pa(e, t, d, u);
  }
  if (r === ((s = a.previousTree) === null || s === void 0 ? void 0 : s.version) || r === a.currentTree.version) {
    var f;
    const d = (f = a.nextTree) === null || f === void 0 ? void 0 : f.version;
    if (d !== void 0) {
      const m = n.getGraph(d);
      pa(e, t, m, u);
    }
  }
}
var ci = { cloneGraph: uw, graph: aw, saveDepsToStore: cw };
let fw = 0;
const dw = () => fw++;
let pw = 0;
const hw = () => pw++;
let mw = 0;
const vw = () => mw++;
var ds = { getNextTreeStateVersion: dw, getNextStoreID: hw, getNextComponentID: vw };
const { persistentMap: wd } = iw,
  { graph: gw } = ci,
  { getNextTreeStateVersion: Xm } = ds;
function Jm() {
  const e = Xm();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: wd(),
    nonvalidatedAtoms: wd(),
  };
}
function yw() {
  const e = Jm();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, gw()),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(),
  };
}
var qm = { makeEmptyTreeState: Jm, makeEmptyStoreState: yw, getNextTreeStateVersion: Xm };
class ev {}
function Sw() {
  return new ev();
}
var ps = { RetentionZone: ev, retentionZone: Sw };
function ww(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function _w(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function Rw(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function Ew(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function xw(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function kw(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var tv = {
  setByAddingToSet: ww,
  setByDeletingFromSet: _w,
  mapBySettingInMap: Rw,
  mapByUpdatingInMap: Ew,
  mapByDeletingFromMap: xw,
  mapByDeletingMultipleFromMap: kw,
};
function* Cw(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var jc = Cw;
function Tw(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var nv = Tw;
const { getNode: fi, getNodeMaybe: Nw, recoilValuesForKeys: _d } = lt,
  { RetentionZone: Rd } = ps,
  { setByAddingToSet: Lw } = tv,
  Aw = Object.freeze(new Set());
class Pw extends Error {}
function Iw(e, t, n) {
  if (!fe("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let l = r.get(i);
    l || r.set(i, (l = new Set())), l.add(t);
  }
  if (n instanceof Rd) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!fe("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function l(s) {
      const a = i.nodesRetainedByZone.get(s);
      a == null || a.delete(t), a && a.size === 0 && i.nodesRetainedByZone.delete(s);
    }
    if (n instanceof Rd) l(n);
    else if (Array.isArray(n)) for (const s of n) l(s);
  };
}
function Dc(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = fi(n),
    l = Iw(e, n, i.retainedBy),
    s = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    s(), l();
  });
}
function $w(e, t, n) {
  Dc(e, e.getState().currentTree, t, n);
}
function Mw(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(), r.nodeCleanupFunctions.delete(t);
}
function jw(e, t, n) {
  return Dc(e, t, n, "get"), fi(n).get(e, t);
}
function rv(e, t, n) {
  return fi(n).peek(e, t);
}
function Dw(e, t, n) {
  var r;
  const o = Nw(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: Lw(e.dirtyAtoms, t),
    }
  );
}
function Ow(e, t, n, r) {
  const o = fi(n);
  if (o.set == null) throw new Pw(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return Dc(e, t, n, "set"), i(e, t, r);
}
function zw(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = fi(n).nodeType;
  return nv(
    { type: i },
    {
      loadable: () => rv(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var l;
        return _d((l = o.nodeDeps.get(n)) !== null && l !== void 0 ? l : []);
      },
      subscribers: () => {
        var l, s;
        return {
          nodes: _d(jc(ov(e, t, new Set([n])), (a) => a !== n)),
          components: fs(
            (l = (s = r.nodeToComponentSubscriptions.get(n)) === null || s === void 0 ? void 0 : s.values()) !== null &&
              l !== void 0
              ? l
              : [],
            ([a]) => ({ name: a })
          ),
        };
      },
    }
  );
}
function ov(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let s = o.pop(); s; s = o.pop()) {
    var l;
    r.add(s);
    const a = (l = i.nodeToNodeSubscriptions.get(s)) !== null && l !== void 0 ? l : Aw;
    for (const u of a) r.has(u) || o.push(u);
  }
  return r;
}
var Tn = {
  getNodeLoadable: jw,
  peekNodeLoadable: rv,
  setNodeValue: Ow,
  initializeNode: $w,
  cleanUpNode: Mw,
  setUnvalidatedAtomValue_DEPRECATED: Dw,
  peekNodeInfo: zw,
  getDownstreamNodes: ov,
};
let iv = null;
function Vw(e) {
  iv = e;
}
function Uw() {
  var e;
  (e = iv) === null || e === void 0 || e();
}
var lv = { setInvalidateMemoizedSnapshot: Vw, invalidateMemoizedSnapshot: Uw };
const { getDownstreamNodes: Fw, getNodeLoadable: sv, setNodeValue: Bw } = Tn,
  { getNextComponentID: bw } = ds,
  { getNode: Ww, getNodeMaybe: av } = lt,
  { DefaultValue: Oc } = lt,
  { reactMode: Hw } = ui,
  { AbstractRecoilValue: Kw, RecoilState: Gw, RecoilValueReadOnly: Qw, isRecoilValue: Yw } = jr,
  { invalidateMemoizedSnapshot: Zw } = lv;
function Xw(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version === ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const l = sv(e, n, t);
  return l.state === "loading" && l.contents.catch(() => {}), l;
}
function Jw(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof Oc ? n.delete(o) : n.set(o, r);
    }),
    n
  );
}
function qw(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = sv(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw ee(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function e_(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      l = qw(e, t, o, i),
      s = Bw(e, t, o.key, l);
    for (const [a, u] of s.entries()) wu(t, a, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    wu(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      l = av(o);
    l == null || (r = l.invalidate) === null || r === void 0 || r.call(l, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Ac(`Unknown action ${n.type}`);
}
function wu(e, t, n) {
  n.state === "hasValue" && n.contents instanceof Oc ? e.atomValues.delete(t) : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function uv(e, t) {
  e.replaceState((n) => {
    const r = cv(n);
    for (const o of t) e_(e, r, o);
    return fv(e, r), Zw(), r;
  });
}
function hs(e, t) {
  if (Io.length) {
    const n = Io[Io.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else uv(e, [t]);
}
const Io = [];
function t_() {
  const e = new Map();
  return (
    Io.push(e),
    () => {
      for (const [t, n] of e) uv(t, n);
      Io.pop();
    }
  );
}
function cv(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function fv(e, t) {
  const n = Fw(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = av(i)) === null || r === void 0 || (o = r.invalidate) === null || o === void 0 || o.call(r, t);
  }
}
function dv(e, t, n) {
  hs(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function n_(e, t, n) {
  if (n instanceof Oc) return dv(e, t, n);
  hs(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function r_(e, t) {
  hs(e, { type: "markModified", recoilValue: t });
}
function o_(e, t, n) {
  hs(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function i_(e, { key: t }, n, r = null) {
  const o = bw(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map()),
    _e(i.nodeToComponentSubscriptions.get(t)).set(o, [r ?? "<not captured>", n]);
  const l = Hw();
  if (l.early && (l.mode === "LEGACY" || l.mode === "MUTABLE_SOURCE")) {
    const s = e.getState().nextTree;
    s && s.dirtyAtoms.has(t) && n(s);
  }
  return {
    release: () => {
      const s = e.getState(),
        a = s.nodeToComponentSubscriptions.get(t);
      a === void 0 || !a.has(o) || (a.delete(o), a.size === 0 && s.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function l_(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = Ww(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var bt = {
  RecoilValueReadOnly: Qw,
  AbstractRecoilValue: Kw,
  RecoilState: Gw,
  getRecoilValueAsLoadable: Xw,
  setRecoilValue: dv,
  setRecoilValueLoadable: n_,
  markRecoilValueModified: r_,
  setUnvalidatedRecoilValue: o_,
  subscribeToRecoilValue: i_,
  isRecoilValue: Yw,
  applyAtomValueWrites: Jw,
  batchStart: t_,
  writeLoadableToTreeState: wu,
  invalidateDownstreams: fv,
  copyTreeState: cv,
  refreshRecoilValue: l_,
};
function s_(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var a_ = s_;
const { cleanUpNode: u_ } = Tn,
  { deleteNodeConfigIfPossible: c_, getNode: pv } = lt,
  { RetentionZone: hv } = ps,
  f_ = 12e4,
  mv = new Set();
function vv(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const l of t)
    if (l instanceof hv) for (const s of m_(n, l)) o.add(s);
    else o.add(l);
  const i = d_(e, o);
  for (const l of i) h_(e, r, l);
}
function d_(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    l = new Set();
  return s(t), i;
  function s(a) {
    const u = new Set(),
      f = p_(e, r, a, i, l);
    for (const g of f) {
      var d;
      if (pv(g).retainedBy === "recoilRoot") {
        l.add(g);
        continue;
      }
      if (((d = n.retention.referenceCounts.get(g)) !== null && d !== void 0 ? d : 0) > 0) {
        l.add(g);
        continue;
      }
      if (gv(g).some((T) => n.retention.referenceCounts.get(T))) {
        l.add(g);
        continue;
      }
      const _ = o.nodeToNodeSubscriptions.get(g);
      if (_ && a_(_, (T) => l.has(T))) {
        l.add(g);
        continue;
      }
      i.add(g), u.add(g);
    }
    const m = new Set();
    for (const g of u)
      for (const _ of (S = o.nodeDeps.get(g)) !== null && S !== void 0 ? S : mv) {
        var S;
        i.has(_) || m.add(_);
      }
    m.size && s(m);
  }
}
function p_(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    l = [],
    s = new Set();
  for (; n.size > 0; ) a(_e(n.values().next().value));
  return l;
  function a(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (s.has(u)) return;
    const f = i.nodeToNodeSubscriptions.get(u);
    if (f) for (const d of f) a(d);
    s.add(u), n.delete(u), l.push(u);
  }
}
function h_(e, t, n) {
  if (!fe("recoil_memory_managament_2020")) return;
  u_(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = gv(n);
  for (const a of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(a)) === null || i === void 0 || i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const l = r.graphsByVersion.get(t.version);
  if (l) {
    const a = l.nodeDeps.get(n);
    if (a !== void 0) {
      l.nodeDeps.delete(n);
      for (const u of a) {
        var s;
        (s = l.nodeToNodeSubscriptions.get(u)) === null || s === void 0 || s.delete(n);
      }
    }
    l.nodeToNodeSubscriptions.delete(n);
  }
  c_(n);
}
function m_(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0 ? n : mv;
}
function gv(e) {
  const t = pv(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot" ? [] : t instanceof hv ? [t] : t;
}
function v_(e, t) {
  const n = e.getState();
  n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : vv(e, new Set([t]));
}
function g_(e, t, n) {
  var r;
  if (!fe("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? yv(e, t) : o.set(t, i);
}
function yv(e, t) {
  if (!fe("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), v_(e, t);
}
function y_(e) {
  if (!fe("recoil_memory_managament_2020")) return;
  const t = e.getState();
  vv(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear();
}
function S_(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var qn = {
  SUSPENSE_TIMEOUT_MS: f_,
  updateRetainCount: g_,
  updateRetainCountToZero: yv,
  releaseScheduledRetainablesNow: y_,
  retainedByOptionWithDefault: S_,
};
const { unstable_batchedUpdates: w_ } = _1;
var __ = { unstable_batchedUpdates: w_ };
const { unstable_batchedUpdates: R_ } = __;
var E_ = { unstable_batchedUpdates: R_ };
const { batchStart: x_ } = bt,
  { unstable_batchedUpdates: k_ } = E_;
let zc = k_ || ((e) => e());
const C_ = (e) => {
    zc = e;
  },
  T_ = () => zc,
  N_ = (e) => {
    zc(() => {
      let t = () => {};
      try {
        (t = x_()), e();
      } finally {
        t();
      }
    });
  };
var ms = { getBatcher: T_, setBatcher: C_, batchUpdates: N_ };
function* L_(e) {
  for (const t of e) for (const n of t) yield n;
}
var Sv = L_;
const wv = typeof Window > "u" || typeof window > "u",
  A_ = (e) => !wv && (e === window || e instanceof Window),
  P_ = typeof navigator < "u" && navigator.product === "ReactNative";
var vs = { isSSR: wv, isReactNative: P_, isWindow: A_ };
function I_(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function $_(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function M_(e, t) {
  let n, r;
  return [
    (...l) => {
      const s = t(...l);
      return n === s || ((n = s), (r = e(...l))), r;
    },
    () => {
      n = null;
    },
  ];
}
var j_ = { memoizeWithArgsHash: I_, memoizeOneWithArgsHash: $_, memoizeOneWithArgsHashAndInvalidation: M_ };
const { batchUpdates: _u } = ms,
  { initializeNode: D_, peekNodeInfo: O_ } = Tn,
  { graph: z_ } = ci,
  { getNextStoreID: V_ } = ds,
  { DEFAULT_VALUE: U_, recoilValues: Ed, recoilValuesForKeys: xd } = lt,
  { AbstractRecoilValue: F_, getRecoilValueAsLoadable: B_, setRecoilValue: kd, setUnvalidatedRecoilValue: b_ } = bt,
  { updateRetainCount: rl } = qn,
  { setInvalidateMemoizedSnapshot: W_ } = lv,
  { getNextTreeStateVersion: H_, makeEmptyStoreState: K_ } = qm,
  { isSSR: G_ } = vs,
  { memoizeOneWithArgsHashAndInvalidation: Q_ } = j_;
class gs {
  constructor(t, n) {
    J(this, "_store", void 0),
      J(this, "_refCount", 1),
      J(this, "getLoadable", (r) => (this.checkRefCount_INTERNAL(), B_(this._store, r))),
      J(this, "getPromise", (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())),
      J(this, "getNodes_UNSTABLE", (r) => {
        if ((this.checkRefCount_INTERNAL(), (r == null ? void 0 : r.isModified) === !0)) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const l = this._store.getState().currentTree;
          return xd(l.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? Ed.values()
          : r.isInitialized === !0
            ? xd(Sv([o, i]))
            : jc(Ed.values(), ({ key: l }) => !o.has(l) && !i.has(l));
      }),
      J(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (this.checkRefCount_INTERNAL(), O_(this._store, this._store.getState().currentTree, r))
      ),
      J(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new Ru(this, _u);
        return r(o), o;
      }),
      J(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new Ru(this, _u);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: V_(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return _e(o.get(r));
          const i = z_();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw ee("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms) D_(this._store, r, "get"), rl(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    G_ || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !fe("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    fe("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function _v(e, t, n = !1) {
  const r = e.getState(),
    o = n ? H_() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(fs(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])),
  };
}
function Y_(e) {
  const t = new gs(K_());
  return e != null ? t.map(e) : t;
}
const [Cd, Rv] = Q_(
  (e, t) => {
    var n;
    const r = e.getState(),
      o = t === "latest" ? ((n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree) : _e(r.previousTree);
    return new gs(_v(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String((n = e.getState().nextTree) === null || n === void 0 ? void 0 : n.version) +
      String(e.getState().currentTree.version) +
      String((r = e.getState().previousTree) === null || r === void 0 ? void 0 : r.version)
    );
  }
);
W_(Rv);
function Z_(e, t = "latest") {
  const n = Cd(e, t);
  return n.isRetained() ? n : (Rv(), Cd(e, t));
}
class Ru extends gs {
  constructor(t, n) {
    super(_v(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()),
      J(this, "_batch", void 0),
      J(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          rl(i, r.key, 1), kd(this.getStore_INTERNAL(), r, o);
        });
      }),
      J(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          rl(o, r.key, 1), kd(this.getStore_INTERNAL(), r, U_);
        });
      }),
      J(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        _u(() => {
          for (const [i, l] of r.entries()) rl(o, i, 1), b_(o, new F_(i), l);
        });
      }),
      (this._batch = n);
  }
}
var ys = { Snapshot: gs, MutableSnapshot: Ru, freshSnapshot: Y_, cloneSnapshot: Z_ },
  X_ = ys.Snapshot,
  J_ = ys.MutableSnapshot,
  q_ = ys.freshSnapshot,
  eR = ys.cloneSnapshot,
  Ss = Object.freeze({ __proto__: null, Snapshot: X_, MutableSnapshot: J_, freshSnapshot: q_, cloneSnapshot: eR });
function tR(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var nR = tR;
const { useRef: rR } = le;
function oR(e) {
  const t = rR(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var Td = oR;
const { getNextTreeStateVersion: iR, makeEmptyStoreState: Ev } = qm,
  {
    cleanUpNode: lR,
    getDownstreamNodes: sR,
    initializeNode: aR,
    setNodeValue: uR,
    setUnvalidatedAtomValue_DEPRECATED: cR,
  } = Tn,
  { graph: fR } = ci,
  { cloneGraph: dR } = ci,
  { getNextStoreID: xv } = ds,
  { createMutableSource: ha, reactMode: kv } = ui,
  { applyAtomValueWrites: pR } = bt,
  { releaseScheduledRetainablesNow: Cv } = qn,
  { freshSnapshot: hR } = Ss,
  { useCallback: mR, useContext: Tv, useEffect: Eu, useMemo: vR, useRef: gR, useState: yR } = le;
function uo() {
  throw ee("This component must be used inside a <RecoilRoot> component.");
}
const Nv = Object.freeze({
  storeID: xv(),
  getState: uo,
  replaceState: uo,
  getGraph: uo,
  subscribeToTransactions: uo,
  addTransactionMetadata: uo,
});
let xu = !1;
function Nd(e) {
  if (xu)
    throw ee(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    fe("recoil_memory_managament_2020") &&
      fe("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      Cv(e);
    const n = t.currentTree.version,
      r = iR();
    (t.nextTree = { ...t.currentTree, version: r, stateID: r, dirtyAtoms: new Set(), transactionMetadata: {} }),
      t.graphsByVersion.set(r, dR(_e(t.graphsByVersion.get(n))));
  }
}
const Lv = le.createContext({ current: Nv }),
  ws = () => Tv(Lv),
  Av = le.createContext(null);
function SR() {
  return Tv(Av);
}
function Vc(e, t, n) {
  const r = sR(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [l, [s, a]] of i) a(n);
  }
}
function Pv(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions) if (r.has(o)) for (const [l, s] of i) s(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!kv().early || t.suspendedComponentResolvers.size > 0) &&
      (Vc(e, t, n), t.suspendedComponentResolvers.forEach((o) => o()), t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length);
}
function wR(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      Pv(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Ac("Ended batch with no previous state, which is unexpected", "recoil"),
      (t.previousTree = null),
      fe("recoil_memory_managament_2020") && n == null && Cv(e);
  } finally {
    t.commitDepth--;
  }
}
function _R({ setNotifyBatcherOfChange: e }) {
  const t = ws(),
    [, n] = yR([]);
  return (
    e(() => n({})),
    Eu(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    Eu(() => {
      qS.enqueueExecution("Batcher", () => {
        wR(t.current);
      });
    }),
    null
  );
}
function RR(e, t) {
  const n = Ev();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          l = uR(e, i, r.key, o),
          s = new Set(l.keys()),
          a = i.nonvalidatedAtoms.clone();
        for (const u of s) a.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: nR(i.dirtyAtoms, s),
          atomValues: pR(i.atomValues, l),
          nonvalidatedAtoms: a,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = cR(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function ER(e) {
  const t = hR(e),
    n = t.getStore_INTERNAL().getState();
  return t.retain(), n.nodeCleanupFunctions.forEach((r) => r()), n.nodeCleanupFunctions.clear(), n;
}
let Ld = 0;
function xR({ initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: n, children: r }) {
  let o;
  const i = (S) => {
      const g = o.current.graphsByVersion;
      if (g.has(S)) return _e(g.get(S));
      const _ = fR();
      return g.set(S, _), _;
    },
    l = (S, g) => {
      if (g == null) {
        const { transactionSubscriptions: _ } = d.current.getState(),
          T = Ld++;
        return (
          _.set(T, S),
          {
            release: () => {
              _.delete(T);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: _ } = d.current.getState();
        _.has(g) || _.set(g, new Map());
        const T = Ld++;
        return (
          _e(_.get(g)).set(T, S),
          {
            release: () => {
              const h = _.get(g);
              h && (h.delete(T), h.size === 0 && _.delete(g));
            },
          }
        );
      }
    },
    s = (S) => {
      Nd(d.current);
      for (const g of Object.keys(S)) _e(d.current.getState().nextTree).transactionMetadata[g] = S[g];
    },
    a = (S) => {
      Nd(d.current);
      const g = _e(o.current.nextTree);
      let _;
      try {
        (xu = !0), (_ = S(g));
      } finally {
        xu = !1;
      }
      _ !== g && ((o.current.nextTree = _), kv().early && Vc(d.current, o.current, _), _e(u.current)());
    },
    u = gR(null),
    f = mR(
      (S) => {
        u.current = S;
      },
      [u]
    ),
    d = Td(
      () =>
        n ?? {
          storeID: xv(),
          getState: () => o.current,
          replaceState: a,
          getGraph: i,
          subscribeToTransactions: l,
          addTransactionMetadata: s,
        }
    );
  n != null && (d.current = n), (o = Td(() => (e != null ? RR(d.current, e) : t != null ? ER(t) : Ev())));
  const m = vR(() => (ha == null ? void 0 : ha(o, () => o.current.currentTree.version)), [o]);
  return (
    Eu(() => {
      const S = d.current;
      for (const g of new Set(S.getState().knownAtoms)) aR(S, g, "get");
      return () => {
        for (const g of S.getState().knownAtoms) lR(S, g);
      };
    }, [d]),
    le.createElement(
      Lv.Provider,
      { value: d },
      le.createElement(Av.Provider, { value: m }, le.createElement(_R, { setNotifyBatcherOfChange: f }), r)
    )
  );
}
function kR(e) {
  const { override: t, ...n } = e,
    r = ws();
  return t === !1 && r.current !== Nv ? e.children : le.createElement(xR, n);
}
function CR() {
  return ws().current.storeID;
}
var nn = {
  RecoilRoot: kR,
  useStoreRef: ws,
  useRecoilMutableSource: SR,
  useRecoilStoreID: CR,
  notifyComponents_FOR_TESTING: Vc,
  sendEndOfBatchNotifications_FOR_TESTING: Pv,
};
function TR(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var NR = TR;
const { useEffect: LR, useRef: AR } = le;
function PR(e) {
  const t = AR();
  return (
    LR(() => {
      t.current = e;
    }),
    t.current
  );
}
var Iv = PR;
const { useStoreRef: IR } = nn,
  { SUSPENSE_TIMEOUT_MS: $R } = qn,
  { updateRetainCount: co } = qn,
  { RetentionZone: MR } = ps,
  { useEffect: jR, useRef: DR } = le,
  { isSSR: Ad } = vs;
function OR(e) {
  if (fe("recoil_memory_managament_2020")) return zR(e);
}
function zR(e) {
  const n = (Array.isArray(e) ? e : [e]).map((l) => (l instanceof MR ? l : l.key)),
    r = IR();
  jR(() => {
    if (!fe("recoil_memory_managament_2020")) return;
    const l = r.current;
    if (o.current && !Ad) window.clearTimeout(o.current), (o.current = null);
    else for (const s of n) co(l, s, 1);
    return () => {
      for (const s of n) co(l, s, -1);
    };
  }, [r, ...n]);
  const o = DR(),
    i = Iv(n);
  if (!Ad && (i === void 0 || !NR(i, n))) {
    const l = r.current;
    for (const s of n) co(l, s, 1);
    if (i) for (const s of i) co(l, s, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const s of n) co(l, s, -1);
      }, $R));
  }
}
var Uc = OR;
function VR() {
  return "<component name not available>";
}
var di = VR;
const { batchUpdates: UR } = ms,
  { DEFAULT_VALUE: $v } = lt,
  {
    currentRendererSupportsUseSyncExternalStore: FR,
    reactMode: Xr,
    useMutableSource: BR,
    useSyncExternalStore: bR,
  } = ui,
  { useRecoilMutableSource: WR, useStoreRef: Wt } = nn,
  {
    AbstractRecoilValue: ku,
    getRecoilValueAsLoadable: pi,
    setRecoilValue: Ol,
    setUnvalidatedRecoilValue: HR,
    subscribeToRecoilValue: Dr,
  } = bt,
  { useCallback: it, useEffect: Or, useMemo: Mv, useRef: $o, useState: Fc } = le,
  { setByAddingToSet: KR } = tv,
  { isSSR: GR } = vs;
function Bc(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          GR &&
            ve(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
      ? e.contents
      : ee(`Invalid value of loadable atom "${t.key}"`);
}
function QR() {
  const e = di(),
    t = Wt(),
    [, n] = Fc([]),
    r = $o(new Set());
  r.current = new Set();
  const o = $o(new Set()),
    i = $o(new Map()),
    l = it(
      (a) => {
        const u = i.current.get(a);
        u && (u.release(), i.current.delete(a));
      },
      [i]
    ),
    s = it((a, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    Or(() => {
      const a = t.current;
      Po(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const f = Dr(a, new ku(u), (m) => s(m, u), e);
        i.current.set(u, f),
          a.getState().nextTree
            ? a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                s(a.getState(), u);
              })
            : s(a.getState(), u);
      }),
        Po(o.current, r.current).forEach((u) => {
          l(u);
        }),
        (o.current = r.current);
    }),
    Or(() => {
      const a = i.current;
      return (
        Po(r.current, new Set(a.keys())).forEach((u) => {
          const f = Dr(t.current, new ku(u), (d) => s(d, u), e);
          a.set(u, f);
        }),
        () => a.forEach((u, f) => l(f))
      );
    }, [e, t, l, s]),
    Mv(() => {
      function a(g) {
        return (_) => {
          Ol(t.current, g, _);
        };
      }
      function u(g) {
        return () => Ol(t.current, g, $v);
      }
      function f(g) {
        var _;
        r.current.has(g.key) || (r.current = KR(r.current, g.key));
        const T = t.current.getState();
        return pi(t.current, g, Xr().early && (_ = T.nextTree) !== null && _ !== void 0 ? _ : T.currentTree);
      }
      function d(g) {
        const _ = f(g);
        return Bc(_, g, t);
      }
      function m(g) {
        return [d(g), a(g)];
      }
      function S(g) {
        return [f(g), a(g)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: f,
        getRecoilState: m,
        getRecoilStateLoadable: S,
        getSetRecoilState: a,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const YR = { current: 0 };
function ZR(e) {
  const t = Wt(),
    n = di(),
    r = it(() => {
      var s;
      const a = t.current,
        u = a.getState(),
        f = Xr().early && (s = u.nextTree) !== null && s !== void 0 ? s : u.currentTree;
      return { loadable: pi(a, e, f), key: e.key };
    }, [t, e]),
    o = it((s) => {
      let a;
      return () => {
        var u, f;
        const d = s();
        return (u = a) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((f = a) === null || f === void 0 ? void 0 : f.key) === d.key
          ? a
          : ((a = d), d);
      };
    }, []),
    i = Mv(() => o(r), [r, o]),
    l = it(
      (s) => {
        const a = t.current;
        return Dr(a, e, s, n).release;
      },
      [t, e, n]
    );
  return bR(l, i, i).loadable;
}
function XR(e) {
  const t = Wt(),
    n = it(() => {
      var u;
      const f = t.current,
        d = f.getState(),
        m = Xr().early && (u = d.nextTree) !== null && u !== void 0 ? u : d.currentTree;
      return pi(f, e, m);
    }, [t, e]),
    r = it(() => n(), [n]),
    o = di(),
    i = it(
      (u, f) => {
        const d = t.current;
        return Dr(
          d,
          e,
          () => {
            if (!fe("recoil_suppress_rerender_in_callback")) return f();
            const S = n();
            a.current.is(S) || f(), (a.current = S);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    l = WR();
  if (l == null) throw ee("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const s = BR(l, r, i),
    a = $o(s);
  return (
    Or(() => {
      a.current = s;
    }),
    s
  );
}
function Cu(e) {
  const t = Wt(),
    n = di(),
    r = it(() => {
      var a;
      const u = t.current,
        f = u.getState(),
        d = Xr().early && (a = f.nextTree) !== null && a !== void 0 ? a : f.currentTree;
      return pi(u, e, d);
    }, [t, e]),
    o = it(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = it(
      (a) => {
        const u = o();
        return a.loadable.is(u.loadable) && a.key === u.key ? a : u;
      },
      [o]
    );
  Or(() => {
    const a = Dr(
      t.current,
      e,
      (u) => {
        s(i);
      },
      n
    );
    return s(i), a.release;
  }, [n, e, t, i]);
  const [l, s] = Fc(o);
  return l.key !== e.key ? o().loadable : l.loadable;
}
function JR(e) {
  const t = Wt(),
    [, n] = Fc([]),
    r = di(),
    o = it(() => {
      var s;
      const a = t.current,
        u = a.getState(),
        f = Xr().early && (s = u.nextTree) !== null && s !== void 0 ? s : u.currentTree;
      return pi(a, e, f);
    }, [t, e]),
    i = o(),
    l = $o(i);
  return (
    Or(() => {
      l.current = i;
    }),
    Or(() => {
      const s = t.current,
        a = s.getState(),
        u = Dr(
          s,
          e,
          (d) => {
            var m;
            if (!fe("recoil_suppress_rerender_in_callback")) return n([]);
            const S = o();
            ((m = l.current) !== null && m !== void 0 && m.is(S)) || n(S), (l.current = S);
          },
          r
        );
      if (a.nextTree)
        s.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (l.current = null), n([]);
        });
      else {
        var f;
        if (!fe("recoil_suppress_rerender_in_callback")) return n([]);
        const d = o();
        ((f = l.current) !== null && f !== void 0 && f.is(d)) || n(d), (l.current = d);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function bc(e) {
  return (
    fe("recoil_memory_managament_2020") && Uc(e),
    { TRANSITION_SUPPORT: Cu, SYNC_EXTERNAL_STORE: FR() ? ZR : Cu, MUTABLE_SOURCE: XR, LEGACY: JR }[Xr().mode](e)
  );
}
function jv(e) {
  const t = Wt(),
    n = bc(e);
  return Bc(n, e, t);
}
function _s(e) {
  const t = Wt();
  return it(
    (n) => {
      Ol(t.current, e, n);
    },
    [t, e]
  );
}
function qR(e) {
  const t = Wt();
  return it(() => {
    Ol(t.current, e, $v);
  }, [t, e]);
}
function eE(e) {
  return [jv(e), _s(e)];
}
function tE(e) {
  return [bc(e), _s(e)];
}
function nE() {
  const e = Wt();
  return (t, n = {}) => {
    UR(() => {
      e.current.addTransactionMetadata(n), t.forEach((r, o) => HR(e.current, new ku(o), r));
    });
  };
}
function Dv(e) {
  return fe("recoil_memory_managament_2020") && Uc(e), Cu(e);
}
function Ov(e) {
  const t = Wt(),
    n = Dv(e);
  return Bc(n, e, t);
}
function rE(e) {
  return [Ov(e), _s(e)];
}
var oE = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: YR,
  useRecoilInterface: QR,
  useRecoilState: eE,
  useRecoilStateLoadable: tE,
  useRecoilValue: jv,
  useRecoilValueLoadable: bc,
  useResetRecoilState: qR,
  useSetRecoilState: _s,
  useSetUnvalidatedAtomValues: nE,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Dv,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Ov,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: rE,
};
function iE(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var lE = iE;
function sE(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var aE = sE;
function uE(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var cE = uE;
const { batchUpdates: fE } = ms,
  { DEFAULT_VALUE: dE, getNode: zv, nodes: pE } = lt,
  { useStoreRef: Wc } = nn,
  { AbstractRecoilValue: hE, setRecoilValueLoadable: mE } = bt,
  { SUSPENSE_TIMEOUT_MS: vE } = qn,
  { cloneSnapshot: zl } = Ss,
  { useCallback: Rs, useEffect: Vv, useRef: Pd, useState: gE } = le,
  { isSSR: Id } = vs;
function Es(e) {
  const t = Wc();
  Vv(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function $d(e) {
  const t = e.atomValues.toMap(),
    n = Dl(
      lE(t, (r, o) => {
        const l = zv(o).persistence_UNSTABLE;
        return l != null && l.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return cE(e.nonvalidatedAtoms.toMap(), n);
}
function yE(e) {
  Es(
    Rs(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = $d(r),
          i = $d(n),
          l = Dl(pE, (a) => {
            var u, f, d, m;
            return {
              persistence_UNSTABLE: {
                type:
                  (u = (f = a.persistence_UNSTABLE) === null || f === void 0 ? void 0 : f.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d = (m = a.persistence_UNSTABLE) === null || m === void 0 ? void 0 : m.backButton) !== null &&
                  d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          s = aE(r.dirtyAtoms, (a) => o.has(a) || i.has(a));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: l,
          modifiedAtoms: s,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function SE(e) {
  Es(
    Rs(
      (t) => {
        const n = zl(t, "latest"),
          r = zl(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function wE() {
  const e = Wc(),
    [t, n] = gE(() => zl(e.current)),
    r = Iv(t),
    o = Pd(),
    i = Pd();
  if (
    (Es(Rs((s) => n(zl(s)), [])),
    Vv(() => {
      const s = t.retain();
      if (o.current && !Id) {
        var a;
        window.clearTimeout(o.current),
          (o.current = null),
          (a = i.current) === null || a === void 0 || a.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(s, 10);
      };
    }, [t]),
    r !== t && !Id)
  ) {
    if (o.current) {
      var l;
      window.clearTimeout(o.current),
        (o.current = null),
        (l = i.current) === null || l === void 0 || l.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var s;
        (o.current = null), (s = i.current) === null || s === void 0 || s.call(i), (i.current = null);
      }, vE));
  }
  return t;
}
function Uv(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  fE(() => {
    const l = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const f of u) {
        var s, a;
        ((s = o.atomValues.get(f)) === null || s === void 0 ? void 0 : s.contents) !==
          ((a = i.atomValues.get(f)) === null || a === void 0 ? void 0 : a.contents) &&
          zv(f).shouldRestoreFromSnapshots &&
          l.add(f);
      }
    l.forEach((u) => {
      mE(e, new hE(u), i.atomValues.has(u) ? _e(i.atomValues.get(u)) : dE);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function _E() {
  const e = Wc();
  return Rs((t) => Uv(e.current, t), [e]);
}
var Fv = {
  useRecoilSnapshot: wE,
  gotoSnapshot: Uv,
  useGotoRecoilSnapshot: _E,
  useRecoilTransactionObserver: SE,
  useTransactionObservation_DEPRECATED: yE,
  useTransactionSubscription_DEPRECATED: Es,
};
const { peekNodeInfo: RE } = Tn,
  { useStoreRef: EE } = nn;
function xE() {
  const e = EE();
  return ({ key: t }) => RE(e.current, e.current.getState().currentTree, t);
}
var kE = xE;
const { reactMode: CE } = ui,
  { RecoilRoot: TE, useStoreRef: NE } = nn,
  { useMemo: LE } = le;
function AE() {
  CE().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = NE().current;
  return LE(() => {
    function t({ children: n }) {
      return le.createElement(TE, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var PE = AE;
const { loadableWithValue: IE } = ai,
  { initializeNode: $E } = Tn,
  { DEFAULT_VALUE: ME, getNode: jE } = lt,
  { copyTreeState: DE, getRecoilValueAsLoadable: OE, invalidateDownstreams: zE, writeLoadableToTreeState: VE } = bt;
function Md(e) {
  return jE(e.key).nodeType === "atom";
}
class UE {
  constructor(t, n) {
    J(this, "_store", void 0),
      J(this, "_treeState", void 0),
      J(this, "_changes", void 0),
      J(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Md(r)) throw ee("Reading selectors within atomicUpdate is not supported");
        const o = OE(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : ee(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`);
      }),
      J(this, "set", (r, o) => {
        if (!Md(r)) throw ee("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else $E(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      J(this, "reset", (r) => {
        this.set(r, ME);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = DE(this._treeState);
    for (const [n, r] of this._changes) VE(t, n, IE(r));
    return zE(this._store, t), t;
  }
}
function FE(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new UE(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var BE = { atomicUpdater: FE },
  bE = BE.atomicUpdater,
  Bv = Object.freeze({ __proto__: null, atomicUpdater: bE });
function WE(e, t) {
  if (!e) throw new Error(t);
}
var HE = WE,
  wo = HE;
const { atomicUpdater: KE } = Bv,
  { batchUpdates: GE } = ms,
  { DEFAULT_VALUE: QE } = lt,
  { useStoreRef: YE } = nn,
  { refreshRecoilValue: ZE, setRecoilValue: jd } = bt,
  { cloneSnapshot: XE } = Ss,
  { gotoSnapshot: JE } = Fv,
  { useCallback: qE } = le;
class bv {}
const ex = new bv();
function Wv(e, t, n, r) {
  let o = ex,
    i;
  if (
    (GE(() => {
      const s =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw ee(s);
      const a = nv(
          {
            ...(r ?? {}),
            set: (f, d) => jd(e, f, d),
            reset: (f) => jd(e, f, QE),
            refresh: (f) => ZE(e, f),
            gotoSnapshot: (f) => JE(e, f),
            transact_UNSTABLE: (f) => KE(e)(f),
          },
          {
            snapshot: () => {
              const f = XE(e);
              return (i = f.retain()), f;
            },
          }
        ),
        u = t(a);
      if (typeof u != "function") throw ee(s);
      o = u(...n);
    }),
    o instanceof bv && wo(!1),
    ve(o))
  )
    o = o.finally(() => {
      var s;
      (s = i) === null || s === void 0 || s();
    });
  else {
    var l;
    (l = i) === null || l === void 0 || l();
  }
  return o;
}
function tx(e, t) {
  const n = YE();
  return qE((...r) => Wv(n.current, e, r), t != null ? [...t, n] : void 0);
}
var Hv = { recoilCallback: Wv, useRecoilCallback: tx };
const { useStoreRef: nx } = nn,
  { refreshRecoilValue: rx } = bt,
  { useCallback: ox } = le;
function ix(e) {
  const t = nx();
  return ox(() => {
    const n = t.current;
    rx(n, e);
  }, [e, t]);
}
var lx = ix;
const { atomicUpdater: sx } = Bv,
  { useStoreRef: ax } = nn,
  { useMemo: ux } = le;
function cx(e, t) {
  const n = ax();
  return ux(
    () =>
      (...r) => {
        sx(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var fx = cx;
class dx {
  constructor(t) {
    J(this, "value", void 0), (this.value = t);
  }
}
var px = { WrappedValue: dx },
  hx = px.WrappedValue,
  Kv = Object.freeze({ __proto__: null, WrappedValue: hx });
const { isFastRefreshEnabled: mx } = ui;
class Dd extends Error {}
class vx {
  constructor(t) {
    var n, r, o;
    J(this, "_name", void 0),
      J(this, "_numLeafs", void 0),
      J(this, "_root", void 0),
      J(this, "_onHit", void 0),
      J(this, "_onSet", void 0),
      J(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit = (n = t == null ? void 0 : t.onHit) !== null && n !== void 0 ? n : () => {}),
      (this._onSet = (r = t == null ? void 0 : t.onSet) !== null && r !== void 0 ? r : () => {}),
      (this._mapNodeValue = (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0 ? o : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0 ? void 0 : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf")) return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, l, s, a;
      let u, f;
      for (const [T, h] of t) {
        var d, m, S;
        const c = this._root;
        if ((c == null ? void 0 : c.type) === "leaf") throw this.invalidCacheError();
        const p = u;
        if (
          ((u = p ? p.branches.get(f) : c),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : { type: "branch", nodeKey: T, parent: p, branches: new Map(), branchKey: f }),
          u.type !== "branch" || u.nodeKey !== T)
        )
          throw this.invalidCacheError();
        p == null || p.branches.set(f, u),
          r == null || (m = r.onNodeVisit) === null || m === void 0 || m.call(r, u),
          (f = this._mapNodeValue(h)),
          (this._root = (S = this._root) !== null && S !== void 0 ? S : u);
      }
      const g = u ? ((i = u) === null || i === void 0 ? void 0 : i.branches.get(f)) : this._root;
      if (g != null && (g.type !== "leaf" || g.branchKey !== f)) throw this.invalidCacheError();
      const _ = { type: "leaf", value: n, parent: u, branchKey: f };
      (l = u) === null || l === void 0 || l.branches.set(f, _),
        (this._root = (s = this._root) !== null && s !== void 0 ? s : _),
        this._numLeafs++,
        this._onSet(_),
        r == null || (a = r.onNodeVisit) === null || a === void 0 || a.call(r, _);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof Dd) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return r.branches.size === 0 ? ((this._root = null), (this._numLeafs = 0)) : this._numLeafs--, !0;
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey), (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = mx()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Ac(t + (this._name != null ? ` - ${this._name}` : "")), new Dd());
  }
}
var gx = { TreeCache: vx },
  yx = gx.TreeCache,
  Gv = Object.freeze({ __proto__: null, TreeCache: yx });
class Sx {
  constructor(t) {
    var n;
    J(this, "_maxSize", void 0),
      J(this, "_size", void 0),
      J(this, "_head", void 0),
      J(this, "_tail", void 0),
      J(this, "_map", void 0),
      J(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper = (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      l = { key: t, right: i, left: null, value: n };
    i ? (i.left = l) : (this._tail = l), this._map.set(r, l), (this._head = l), this._size++, this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = _e(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0), (this._head = null), (this._tail = null), (this._map = new Map());
  }
}
var wx = { LRUCache: Sx },
  _x = wx.LRUCache,
  Qv = Object.freeze({ __proto__: null, LRUCache: _x });
const { LRUCache: Rx } = Qv,
  { TreeCache: Ex } = Gv;
function xx({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new Rx({ maxSize: t }),
    o = new Ex({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const l = r.tail();
        r.set(i, !0), l && o.size() > t && o.delete(l.key);
      },
    });
  return o;
}
var Od = xx;
function Lt(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\")) return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw ee("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (ve(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => Lt(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return Lt(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, l] of e) o[typeof i == "string" ? i : Lt(i, t)] = l;
    return Lt(o, t, n);
  }
  return e instanceof Set
    ? Lt(
        Array.from(e).sort((o, i) => Lt(o, t).localeCompare(Lt(i, t))),
        t,
        n
      )
    : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == "function"
      ? Lt(Array.from(e), t, n)
      : `{${Object.keys(e)
          .filter((o) => e[o] !== void 0)
          .sort()
          .map((o) => `${Lt(o, t)}:${Lt(e[o], t, o)}`)
          .join(",")}}`;
}
function kx(e, t = { allowFunctions: !1 }) {
  return Lt(e, t);
}
var xs = kx;
const { TreeCache: Cx } = Gv,
  $i = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function Tx({ equality: e = $i.equality, eviction: t = $i.eviction, maxSize: n = $i.maxSize } = $i, r) {
  const o = Nx(e);
  return Lx(t, n, o, r);
}
function Nx(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => xs(t);
  }
  throw ee(`Unrecognized equality policy ${e}`);
}
function Lx(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new Cx({ name: r, mapNodeValue: n });
    case "lru":
      return Od({ name: r, maxSize: _e(t), mapNodeValue: n });
    case "most-recent":
      return Od({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw ee(`Unrecognized eviction policy ${e}`);
}
var Ax = Tx;
function Px(e) {
  return () => null;
}
var Ix = { startPerfBlock: Px };
const { isLoadable: $x, loadableWithError: Mi, loadableWithPromise: Mx, loadableWithValue: ma } = ai,
  { WrappedValue: Yv } = Kv,
  { getNodeLoadable: ji, peekNodeLoadable: jx, setNodeValue: Dx } = Tn,
  { saveDepsToStore: Ox } = ci,
  { DEFAULT_VALUE: zx, getConfigDeletionHandler: Vx, getNode: Ux, registerNode: zd } = lt,
  { isRecoilValue: Fx } = jr,
  { markRecoilValueModified: Vd } = bt,
  { retainedByOptionWithDefault: Bx } = qn,
  { recoilCallback: bx } = Hv,
  { startPerfBlock: Wx } = Ix;
class Zv {}
const fo = new Zv(),
  po = [],
  Di = new Map(),
  Hx = (() => {
    let e = 0;
    return () => e++;
  })();
function Xv(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    l = new Set(),
    s = Ax(o ?? { equality: "reference", eviction: "keep-all" }, n),
    a = Bx(e.retainedBy_UNSTABLE),
    u = new Map();
  let f = 0;
  function d() {
    return !fe("recoil_memory_managament_2020") || f > 0;
  }
  function m(w) {
    return (
      w.getState().knownSelectors.add(n),
      f++,
      () => {
        f--;
      }
    );
  }
  function S() {
    return Vx(n) !== void 0 && !d();
  }
  function g(w, A, P, K, D) {
    Me(A, K, D), _(w, P);
  }
  function _(w, A) {
    $e(w, A) && se(w), h(A, !0);
  }
  function T(w, A) {
    $e(w, A) && (_e(B(w)).stateVersions.clear(), h(A, !1));
  }
  function h(w, A) {
    const P = Di.get(w);
    if (P != null) {
      for (const K of P) Vd(K, _e(t));
      A && Di.delete(w);
    }
  }
  function c(w, A) {
    let P = Di.get(A);
    P == null && Di.set(A, (P = new Set())), P.add(w);
  }
  function p(w, A, P, K, D, Z) {
    return A.then((X) => {
      if (!d()) throw (se(w), fo);
      const F = ma(X);
      return g(w, P, D, F, K), X;
    }).catch((X) => {
      if (!d()) throw (se(w), fo);
      if (ve(X)) return E(w, X, P, K, D, Z);
      const F = Mi(X);
      throw (g(w, P, D, F, K), X);
    });
  }
  function E(w, A, P, K, D, Z) {
    return A.then((X) => {
      if (!d()) throw (se(w), fo);
      Z.loadingDepKey != null && Z.loadingDepPromise === A
        ? P.atomValues.set(Z.loadingDepKey, ma(X))
        : w.getState().knownSelectors.forEach((ne) => {
            P.atomValues.delete(ne);
          });
      const F = x(w, P);
      if (F && F.state !== "loading") {
        if ((($e(w, D) || B(w) == null) && _(w, D), F.state === "hasValue")) return F.contents;
        throw F.contents;
      }
      if (!$e(w, D)) {
        const ne = oe(w, P);
        if (ne != null) return ne.loadingLoadable.contents;
      }
      const [ce, ye] = C(w, P, D);
      if ((ce.state !== "loading" && g(w, P, D, ce, ye), ce.state === "hasError")) throw ce.contents;
      return ce.contents;
    }).catch((X) => {
      if (X instanceof Zv) throw fo;
      if (!d()) throw (se(w), fo);
      const F = Mi(X);
      throw (g(w, P, D, F, K), X);
    });
  }
  function k(w, A, P, K) {
    var D, Z, X, F;
    if (
      $e(w, K) ||
      A.version ===
        ((D = w.getState()) === null || D === void 0 || (Z = D.currentTree) === null || Z === void 0
          ? void 0
          : Z.version) ||
      A.version ===
        ((X = w.getState()) === null || X === void 0 || (F = X.nextTree) === null || F === void 0 ? void 0 : F.version)
    ) {
      var ce, ye, ne;
      Ox(
        n,
        P,
        w,
        (ce =
          (ye = w.getState()) === null || ye === void 0 || (ne = ye.nextTree) === null || ne === void 0
            ? void 0
            : ne.version) !== null && ce !== void 0
          ? ce
          : w.getState().currentTree.version
      );
    }
    for (const Re of P) l.add(Re);
  }
  function C(w, A, P) {
    const K = Wx(n);
    let D = !0,
      Z = !0;
    const X = () => {
      K(), (Z = !1);
    };
    let F,
      ce = !1,
      ye;
    const ne = { loadingDepKey: null, loadingDepPromise: null },
      Re = new Map();
    function Ct({ key: mt }) {
      const st = ji(w, A, mt);
      switch ((Re.set(mt, st), D || (k(w, A, new Set(Re.keys()), P), T(w, P)), st.state)) {
        case "hasValue":
          return st.contents;
        case "hasError":
          throw st.contents;
        case "loading":
          throw ((ne.loadingDepKey = mt), (ne.loadingDepPromise = st.contents), st.contents);
      }
      throw ee("Invalid Loadable state");
    }
    const Ln =
      (mt) =>
      (...st) => {
        if (Z)
          throw ee(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && wo(!1), bx(w, mt, st, { node: t });
      };
    try {
      (F = r({ get: Ct, getCallback: Ln })),
        (F = Fx(F) ? Ct(F) : F),
        $x(F) && (F.state === "hasError" && (ce = !0), (F = F.contents)),
        ve(F) ? (F = p(w, F, A, Re, P, ne).finally(X)) : X(),
        (F = F instanceof Yv ? F.value : F);
    } catch (mt) {
      (F = mt), ve(F) ? (F = E(w, F, A, Re, P, ne).finally(X)) : ((ce = !0), X());
    }
    return (
      ce ? (ye = Mi(F)) : ve(F) ? (ye = Mx(F)) : (ye = ma(F)),
      (D = !1),
      Xe(w, P, Re),
      k(w, A, new Set(Re.keys()), P),
      [ye, Re]
    );
  }
  function x(w, A) {
    let P = A.atomValues.get(n);
    if (P != null) return P;
    const K = new Set();
    try {
      P = s.get((Z) => (typeof Z != "string" && wo(!1), ji(w, A, Z).contents), {
        onNodeVisit: (Z) => {
          Z.type === "branch" && Z.nodeKey !== n && K.add(Z.nodeKey);
        },
      });
    } catch (Z) {
      throw ee(`Problem with cache lookup for selector "${n}": ${Z.message}`);
    }
    if (P) {
      var D;
      A.atomValues.set(n, P), k(w, A, K, (D = B(w)) === null || D === void 0 ? void 0 : D.executionID);
    }
    return P;
  }
  function I(w, A) {
    const P = x(w, A);
    if (P != null) return se(w), P;
    const K = oe(w, A);
    if (K != null) {
      var D;
      return (
        ((D = K.loadingLoadable) === null || D === void 0 ? void 0 : D.state) === "loading" && c(w, K.executionID),
        K.loadingLoadable
      );
    }
    const Z = Hx(),
      [X, F] = C(w, A, Z);
    return X.state === "loading" ? (de(w, Z, X, F, A), c(w, Z)) : (se(w), Me(A, X, F)), X;
  }
  function oe(w, A) {
    const P = Sv([
      u.has(w) ? [_e(u.get(w))] : [],
      fs(
        jc(u, ([D]) => D !== w),
        ([, D]) => D
      ),
    ]);
    function K(D) {
      for (const [Z, X] of D) if (!ji(w, A, Z).is(X)) return !0;
      return !1;
    }
    for (const D of P) {
      if (D.stateVersions.get(A.version) || !K(D.depValuesDiscoveredSoFarDuringAsyncWork))
        return D.stateVersions.set(A.version, !0), D;
      D.stateVersions.set(A.version, !1);
    }
  }
  function B(w) {
    return u.get(w);
  }
  function de(w, A, P, K, D) {
    u.set(w, {
      depValuesDiscoveredSoFarDuringAsyncWork: K,
      executionID: A,
      loadingLoadable: P,
      stateVersions: new Map([[D.version, !0]]),
    });
  }
  function Xe(w, A, P) {
    if ($e(w, A)) {
      const K = B(w);
      K != null && (K.depValuesDiscoveredSoFarDuringAsyncWork = P);
    }
  }
  function se(w) {
    u.delete(w);
  }
  function $e(w, A) {
    var P;
    return A === ((P = B(w)) === null || P === void 0 ? void 0 : P.executionID);
  }
  function kt(w) {
    return Array.from(w.entries()).map(([A, P]) => [A, P.contents]);
  }
  function Me(w, A, P) {
    w.atomValues.set(n, A);
    try {
      s.set(kt(P), A);
    } catch (K) {
      throw ee(`Problem with setting cache for selector "${n}": ${K.message}`);
    }
  }
  function Ve(w) {
    if (po.includes(n)) {
      const A = `Recoil selector has circular dependencies: ${po.slice(po.indexOf(n)).join(" → ")}`;
      return Mi(ee(A));
    }
    po.push(n);
    try {
      return w();
    } finally {
      po.pop();
    }
  }
  function j(w, A) {
    const P = A.atomValues.get(n);
    return (
      P ??
      s.get((K) => {
        var D;
        return typeof K != "string" && wo(!1), (D = jx(w, A, K)) === null || D === void 0 ? void 0 : D.contents;
      })
    );
  }
  function b(w, A) {
    return Ve(() => I(w, A));
  }
  function $(w) {
    w.atomValues.delete(n);
  }
  function W(w, A) {
    t == null && wo(!1);
    for (const K of l) {
      var P;
      const D = Ux(K);
      (P = D.clearCache) === null || P === void 0 || P.call(D, w, A);
    }
    l.clear(), $(A), s.clear(), Vd(w, t);
  }
  return i != null
    ? (t = zd({
        key: n,
        nodeType: "selector",
        peek: j,
        get: b,
        set: (A, P, K) => {
          let D = !1;
          const Z = new Map();
          function X({ key: ne }) {
            if (D) throw ee("Recoil: Async selector sets are not currently supported.");
            const Re = ji(A, P, ne);
            if (Re.state === "hasValue") return Re.contents;
            if (Re.state === "loading") {
              const Ct = `Getting value of asynchronous atom or selector "${ne}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw ee(Ct);
            } else throw Re.contents;
          }
          function F(ne, Re) {
            if (D) throw ee("Recoil: Async selector sets are not currently supported.");
            const Ct = typeof Re == "function" ? Re(X(ne)) : Re;
            Dx(A, P, ne.key, Ct).forEach((mt, st) => Z.set(st, mt));
          }
          function ce(ne) {
            F(ne, zx);
          }
          const ye = i({ set: F, get: X, reset: ce }, K);
          if (ye !== void 0)
            throw ve(ye)
              ? ee("Recoil: Async selector sets are not currently supported.")
              : ee("Recoil: selector set should be a void function.");
          return (D = !0), Z;
        },
        init: m,
        invalidate: $,
        clearCache: W,
        shouldDeleteConfigOnRelease: S,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }))
    : (t = zd({
        key: n,
        nodeType: "selector",
        peek: j,
        get: b,
        init: m,
        invalidate: $,
        clearCache: W,
        shouldDeleteConfigOnRelease: S,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }));
}
Xv.value = (e) => new Yv(e);
var zr = Xv;
const { isLoadable: Kx, loadableWithError: va, loadableWithPromise: ga, loadableWithValue: nr } = ai,
  { WrappedValue: Jv } = Kv,
  { peekNodeInfo: Gx } = Tn,
  {
    DEFAULT_VALUE: $n,
    DefaultValue: an,
    getConfigDeletionHandler: qv,
    registerNode: Qx,
    setConfigDeletionHandler: Yx,
  } = lt,
  { isRecoilValue: Zx } = jr,
  { getRecoilValueAsLoadable: Xx, markRecoilValueModified: Jx, setRecoilValue: Ud, setRecoilValueLoadable: qx } = bt,
  { retainedByOptionWithDefault: ek } = qn,
  ho = (e) => (e instanceof Jv ? e.value : e);
function tk(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = ek(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(c) {
    return ga(
      c
        .then((p) => ((l = nr(p)), p))
        .catch((p) => {
          throw ((l = va(p)), p);
        })
    );
  }
  let l = ve(e.default)
    ? i(e.default)
    : Kx(e.default)
      ? e.default.state === "loading"
        ? i(e.default.contents)
        : e.default
      : nr(ho(e.default));
  l.contents;
  let s;
  const a = new Map();
  function u(c) {
    return c;
  }
  function f(c, p) {
    const E = p
      .then((k) => {
        var C, x;
        return (
          ((x = ((C = c.getState().nextTree) !== null && C !== void 0 ? C : c.getState().currentTree).atomValues.get(
            t
          )) === null || x === void 0
            ? void 0
            : x.contents) === E && Ud(c, h, k),
          k
        );
      })
      .catch((k) => {
        var C, x;
        throw (
          (((x = ((C = c.getState().nextTree) !== null && C !== void 0 ? C : c.getState().currentTree).atomValues.get(
            t
          )) === null || x === void 0
            ? void 0
            : x.contents) === E && qx(c, h, va(k)),
          k)
        );
      });
    return E;
  }
  function d(c, p, E) {
    var k;
    o++;
    const C = () => {
      var B;
      o--, (B = a.get(c)) === null || B === void 0 || B.forEach((de) => de()), a.delete(c);
    };
    if ((c.getState().knownAtoms.add(t), l.state === "loading")) {
      const B = () => {
        var de;
        ((de = c.getState().nextTree) !== null && de !== void 0 ? de : c.getState().currentTree).atomValues.has(t) ||
          Jx(c, h);
      };
      l.contents.finally(B);
    }
    const x = (k = e.effects) !== null && k !== void 0 ? k : e.effects_UNSTABLE;
    if (x != null) {
      let B = function ($) {
          if ($e && $.key === t) {
            const W = se;
            return W instanceof an ? m(c, p) : ve(W) ? ga(W.then((w) => (w instanceof an ? l.toPromise() : w))) : nr(W);
          }
          return Xx(c, $);
        },
        de = function ($) {
          return B($).toPromise();
        },
        Xe = function ($) {
          var W;
          const w = Gx(c, (W = c.getState().nextTree) !== null && W !== void 0 ? W : c.getState().currentTree, $.key);
          return $e && $.key === t && !(se instanceof an) ? { ...w, isSet: !0, loadable: B($) } : w;
        },
        se = $n,
        $e = !0,
        kt = !1,
        Me = null;
      const Ve = ($) => (W) => {
          if ($e) {
            const w = B(h),
              A = w.state === "hasValue" ? w.contents : $n;
            (se = typeof W == "function" ? W(A) : W),
              ve(se) && (se = se.then((P) => ((Me = { effect: $, value: P }), P)));
          } else {
            if (ve(W)) throw ee("Setting atoms to async values is not implemented.");
            typeof W != "function" && (Me = { effect: $, value: ho(W) }),
              Ud(
                c,
                h,
                typeof W == "function"
                  ? (w) => {
                      const A = ho(W(w));
                      return (Me = { effect: $, value: A }), A;
                    }
                  : ho(W)
              );
          }
        },
        j = ($) => () => Ve($)($n),
        b = ($) => (W) => {
          var w;
          const { release: A } = c.subscribeToTransactions((P) => {
            var K;
            let { currentTree: D, previousTree: Z } = P.getState();
            Z || (Z = D);
            const X = (K = D.atomValues.get(t)) !== null && K !== void 0 ? K : l;
            if (X.state === "hasValue") {
              var F, ce, ye, ne;
              const Re = X.contents,
                Ct = (F = Z.atomValues.get(t)) !== null && F !== void 0 ? F : l,
                Ln = Ct.state === "hasValue" ? Ct.contents : $n;
              ((ce = Me) === null || ce === void 0 ? void 0 : ce.effect) !== $ ||
              ((ye = Me) === null || ye === void 0 ? void 0 : ye.value) !== Re
                ? W(Re, Ln, !D.atomValues.has(t))
                : ((ne = Me) === null || ne === void 0 ? void 0 : ne.effect) === $ && (Me = null);
            }
          }, t);
          a.set(c, [...((w = a.get(c)) !== null && w !== void 0 ? w : []), A]);
        };
      for (const $ of x)
        try {
          const W = $({
            node: h,
            storeID: c.storeID,
            parentStoreID_UNSTABLE: c.parentStoreID,
            trigger: E,
            setSelf: Ve($),
            resetSelf: j($),
            onSet: b($),
            getPromise: de,
            getLoadable: B,
            getInfo_UNSTABLE: Xe,
          });
          if (W != null) {
            var I;
            a.set(c, [...((I = a.get(c)) !== null && I !== void 0 ? I : []), W]);
          }
        } catch (W) {
          (se = W), (kt = !0);
        }
      if ((($e = !1), !(se instanceof an))) {
        var oe;
        const $ = kt ? va(se) : ve(se) ? ga(f(c, se)) : nr(ho(se));
        $.contents,
          p.atomValues.set(t, $),
          (oe = c.getState().nextTree) === null || oe === void 0 || oe.atomValues.set(t, $);
      }
    }
    return C;
  }
  function m(c, p) {
    var E, k;
    return (E = (k = p.atomValues.get(t)) !== null && k !== void 0 ? k : s) !== null && E !== void 0 ? E : l;
  }
  function S(c, p) {
    if (p.atomValues.has(t)) return _e(p.atomValues.get(t));
    if (p.nonvalidatedAtoms.has(t)) {
      if (s != null) return s;
      if (n == null) return l;
      const E = p.nonvalidatedAtoms.get(t),
        k = n.validator(E, $n);
      return (s = k instanceof an ? l : nr(k)), s;
    } else return l;
  }
  function g() {
    s = void 0;
  }
  function _(c, p, E) {
    if (p.atomValues.has(t)) {
      const k = _e(p.atomValues.get(t));
      if (k.state === "hasValue" && E === k.contents) return new Map();
    } else if (!p.nonvalidatedAtoms.has(t) && E instanceof an) return new Map();
    return (s = void 0), new Map().set(t, nr(E));
  }
  function T() {
    return qv(t) !== void 0 && o <= 0;
  }
  const h = Qx({
    key: t,
    nodeType: "atom",
    peek: m,
    get: S,
    set: _,
    init: d,
    invalidate: g,
    shouldDeleteConfigOnRelease: T,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? { type: e.persistence_UNSTABLE.type, backButton: e.persistence_UNSTABLE.backButton }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return h;
}
function Hc(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return Zx(n) ? nk({ ...t, default: n }) : tk({ ...t, default: n });
}
function nk(e) {
  const t = Hc({
      ...e,
      default: $n,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) => (r instanceof an ? r : _e(e.persistence_UNSTABLE).validator(r, $n)),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = zr({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof an ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return Yx(n.key, qv(e.key)), n;
}
Hc.value = (e) => new Jv(e);
var eg = Hc;
class rk {
  constructor(t) {
    var n;
    J(this, "_map", void 0),
      J(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper = (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var ok = { MapCache: rk },
  ik = ok.MapCache,
  lk = Object.freeze({ __proto__: null, MapCache: ik });
const { LRUCache: Fd } = Qv,
  { MapCache: sk } = lk,
  Oi = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function ak({ equality: e = Oi.equality, eviction: t = Oi.eviction, maxSize: n = Oi.maxSize } = Oi) {
  const r = uk(e);
  return ck(t, n, r);
}
function uk(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => xs(t);
  }
  throw ee(`Unrecognized equality policy ${e}`);
}
function ck(e, t, n) {
  switch (e) {
    case "keep-all":
      return new sk({ mapKey: n });
    case "lru":
      return new Fd({ mapKey: n, maxSize: _e(t) });
    case "most-recent":
      return new Fd({ mapKey: n, maxSize: 1 });
  }
  throw ee(`Unrecognized eviction policy ${e}`);
}
var tg = ak;
const { setConfigDeletionHandler: fk } = lt;
function dk(e) {
  var t, n;
  const r = tg({
    equality:
      (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null &&
      t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, l;
    const s = r.get(o);
    if (s != null) return s;
    const { cachePolicyForParams_UNSTABLE: a, ...u } = e,
      f = "default" in e ? e.default : new Promise(() => {}),
      d = eg({
        ...u,
        key: `${e.key}__${(i = xs(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof f == "function" ? f(o) : f,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
              ? e.effects_UNSTABLE(o)
              : (l = e.effects) !== null && l !== void 0
                ? l
                : e.effects_UNSTABLE,
      });
    return (
      r.set(o, d),
      fk(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var pk = dk;
const { setConfigDeletionHandler: hk } = lt;
let mk = 0;
function vk(e) {
  var t, n;
  const r = tg({
    equality:
      (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null &&
      t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let l;
    try {
      l = r.get(o);
    } catch (m) {
      throw ee(`Problem with cache lookup for selector ${e.key}: ${m.message}`);
    }
    if (l != null) return l;
    const s = `${e.key}__selectorFamily/${(i = xs(o, { allowFunctions: !0 })) !== null && i !== void 0 ? i : "void"}/${mk++}`,
      a = (m) => e.get(o)(m),
      u = e.cachePolicy_UNSTABLE,
      f = typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const m = e.set;
      d = zr({
        key: s,
        get: a,
        set: (g, _) => m(o)(g, _),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: f,
      });
    } else
      d = zr({
        key: s,
        get: a,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: f,
      });
    return (
      r.set(o, d),
      hk(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var Nn = vk;
const gk = Nn({ key: "__constant", get: (e) => () => e, cachePolicyForParams_UNSTABLE: { equality: "reference" } });
function yk(e) {
  return gk(e);
}
var Sk = yk;
const wk = Nn({
  key: "__error",
  get: (e) => () => {
    throw ee(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function _k(e) {
  return wk(e);
}
var Rk = _k;
function Ek(e) {
  return e;
}
var xk = Ek;
const { loadableWithError: ng, loadableWithPromise: rg, loadableWithValue: og } = ai;
function ks(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (l) {
      r[o] = l;
    }
  return [n, r];
}
function kk(e) {
  return e != null && !ve(e);
}
function Cs(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function Tu(e, t) {
  return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((n, r, o) => ({ ...n, [r]: t[o] }), {});
}
function Cr(e, t, n) {
  const r = n.map((o, i) => (o == null ? og(t[i]) : ve(o) ? rg(o) : ng(o)));
  return Tu(e, r);
}
function Ck(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const Tk = Nn({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        return Cr(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  Nk = Nn({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        return o.some((i) => !ve(i))
          ? Cr(e, r, o)
          : new Promise((i) => {
              for (const [l, s] of o.entries())
                ve(s) &&
                  s
                    .then((a) => {
                      (r[l] = a), (o[l] = void 0), i(Cr(e, r, o));
                    })
                    .catch((a) => {
                      (o[l] = a), i(Cr(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  Lk = Nn({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        if (o.every((l) => l == null)) return Tu(e, r);
        const i = o.find(kk);
        if (i != null) throw i;
        return Promise.all(o).then((l) => Tu(e, Ck(r, l)));
      },
    dangerouslyAllowMutability: !0,
  }),
  Ak = Nn({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        return o.every((i) => !ve(i))
          ? Cr(e, r, o)
          : Promise.all(
              o.map((i, l) =>
                ve(i)
                  ? i
                      .then((s) => {
                        (r[l] = s), (o[l] = void 0);
                      })
                      .catch((s) => {
                        (r[l] = void 0), (o[l] = s);
                      })
                  : null
              )
            ).then(() => Cr(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  Pk = Nn({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return zr.value(og(t(e)));
        } catch (n) {
          return zr.value(ve(n) ? rg(n) : ng(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var Ik = { waitForNone: Tk, waitForAny: Nk, waitForAll: Lk, waitForAllSettled: Ak, noWait: Pk };
const { RecoilLoadable: $k } = ai,
  { DefaultValue: Mk } = lt,
  { RecoilRoot: jk, useRecoilStoreID: Dk } = nn,
  { isRecoilValue: Ok } = jr,
  { retentionZone: zk } = ps,
  { freshSnapshot: Vk } = Ss,
  {
    useRecoilState: Uk,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Fk,
    useRecoilStateLoadable: Bk,
    useRecoilValue: bk,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Wk,
    useRecoilValueLoadable: Hk,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Kk,
    useResetRecoilState: Gk,
    useSetRecoilState: Qk,
  } = oE,
  { useGotoRecoilSnapshot: Yk, useRecoilSnapshot: Zk, useRecoilTransactionObserver: Xk } = Fv,
  { useRecoilCallback: Jk } = Hv,
  { noWait: qk, waitForAll: eC, waitForAllSettled: tC, waitForAny: nC, waitForNone: rC } = Ik;
var Kc = {
    DefaultValue: Mk,
    isRecoilValue: Ok,
    RecoilLoadable: $k,
    RecoilEnv: Zr,
    RecoilRoot: jk,
    useRecoilStoreID: Dk,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: PE,
    atom: eg,
    selector: zr,
    atomFamily: pk,
    selectorFamily: Nn,
    constSelector: Sk,
    errorSelector: Rk,
    readOnlySelector: xk,
    noWait: qk,
    waitForNone: rC,
    waitForAny: nC,
    waitForAll: eC,
    waitForAllSettled: tC,
    useRecoilValue: bk,
    useRecoilValueLoadable: Hk,
    useRecoilState: Uk,
    useRecoilStateLoadable: Bk,
    useSetRecoilState: Qk,
    useResetRecoilState: Gk,
    useGetRecoilValueInfo_UNSTABLE: kE,
    useRecoilRefresher_UNSTABLE: lx,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Kk,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Wk,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Fk,
    useRecoilCallback: Jk,
    useRecoilTransaction_UNSTABLE: fx,
    useGotoRecoilSnapshot: Yk,
    useRecoilSnapshot: Zk,
    useRecoilTransactionObserver_UNSTABLE: Xk,
    snapshot_UNSTABLE: Vk,
    useRetain: Uc,
    retentionZone: zk,
  },
  ig = Kc.RecoilRoot,
  oC = Kc.atom,
  lg = Kc.useRecoilValue,
  tt = function () {
    return (
      (tt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      tt.apply(this, arguments)
    );
  };
function Vl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var me = "-ms-",
  Mo = "-moz-",
  ae = "-webkit-",
  sg = "comm",
  Ts = "rule",
  Gc = "decl",
  iC = "@import",
  ag = "@keyframes",
  lC = "@layer",
  ug = Math.abs,
  Qc = String.fromCharCode,
  Nu = Object.assign;
function sC(e, t) {
  return Oe(e, 0) ^ 45 ? (((((((t << 2) ^ Oe(e, 0)) << 2) ^ Oe(e, 1)) << 2) ^ Oe(e, 2)) << 2) ^ Oe(e, 3) : 0;
}
function cg(e) {
  return e.trim();
}
function Kt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function q(e, t, n) {
  return e.replace(t, n);
}
function ol(e, t, n) {
  return e.indexOf(t, n);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vr(e, t, n) {
  return e.slice(t, n);
}
function Vt(e) {
  return e.length;
}
function fg(e) {
  return e.length;
}
function _o(e, t) {
  return t.push(e), e;
}
function aC(e, t) {
  return e.map(t).join("");
}
function Bd(e, t) {
  return e.filter(function (n) {
    return !Kt(n, t);
  });
}
var Ns = 1,
  Ur = 1,
  dg = 0,
  xt = 0,
  Ne = 0,
  Jr = "";
function Ls(e, t, n, r, o, i, l, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Ns,
    column: Ur,
    length: l,
    return: "",
    siblings: s,
  };
}
function on(e, t) {
  return Nu(Ls("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function rr(e) {
  for (; e.root; ) e = on(e.root, { children: [e] });
  _o(e, e.siblings);
}
function uC() {
  return Ne;
}
function cC() {
  return (Ne = xt > 0 ? Oe(Jr, --xt) : 0), Ur--, Ne === 10 && ((Ur = 1), Ns--), Ne;
}
function jt() {
  return (Ne = xt < dg ? Oe(Jr, xt++) : 0), Ur++, Ne === 10 && ((Ur = 1), Ns++), Ne;
}
function Fn() {
  return Oe(Jr, xt);
}
function il() {
  return xt;
}
function As(e, t) {
  return Vr(Jr, e, t);
}
function Lu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function fC(e) {
  return (Ns = Ur = 1), (dg = Vt((Jr = e))), (xt = 0), [];
}
function dC(e) {
  return (Jr = ""), e;
}
function ya(e) {
  return cg(As(xt - 1, Au(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pC(e) {
  for (; (Ne = Fn()) && Ne < 33; ) jt();
  return Lu(e) > 2 || Lu(Ne) > 3 ? "" : " ";
}
function hC(e, t) {
  for (; --t && jt() && !(Ne < 48 || Ne > 102 || (Ne > 57 && Ne < 65) || (Ne > 70 && Ne < 97)); );
  return As(e, il() + (t < 6 && Fn() == 32 && jt() == 32));
}
function Au(e) {
  for (; jt(); )
    switch (Ne) {
      case e:
        return xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Au(Ne);
        break;
      case 40:
        e === 41 && Au(e);
        break;
      case 92:
        jt();
        break;
    }
  return xt;
}
function mC(e, t) {
  for (; jt() && e + Ne !== 57; ) if (e + Ne === 84 && Fn() === 47) break;
  return "/*" + As(t, xt - 1) + "*" + Qc(e === 47 ? e : jt());
}
function vC(e) {
  for (; !Lu(Fn()); ) jt();
  return As(e, xt);
}
function gC(e) {
  return dC(ll("", null, null, null, [""], (e = fC(e)), 0, [0], e));
}
function ll(e, t, n, r, o, i, l, s, a) {
  for (
    var u = 0, f = 0, d = l, m = 0, S = 0, g = 0, _ = 1, T = 1, h = 1, c = 0, p = "", E = o, k = i, C = r, x = p;
    T;

  )
    switch (((g = c), (c = jt()))) {
      case 40:
        if (g != 108 && Oe(x, d - 1) == 58) {
          ol((x += q(ya(c), "&", "&\f")), "&\f", ug(u ? s[u - 1] : 0)) != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ya(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += pC(g);
        break;
      case 92:
        x += hC(il() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            _o(yC(mC(jt(), il()), t, n, a), a);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * _:
        s[u++] = Vt(x) * h;
      case 125 * _:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            T = 0;
          case 59 + f:
            h == -1 && (x = q(x, /\f/g, "")),
              S > 0 &&
                Vt(x) - d &&
                _o(S > 32 ? Wd(x + ";", r, n, d - 1, a) : Wd(q(x, " ", "") + ";", r, n, d - 2, a), a);
            break;
          case 59:
            x += ";";
          default:
            if ((_o((C = bd(x, t, n, u, f, o, s, p, (E = []), (k = []), d, i)), i), c === 123))
              if (f === 0) ll(x, t, C, C, E, i, d, s, k);
              else
                switch (m === 99 && Oe(x, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ll(e, C, C, r && _o(bd(e, C, C, 0, 0, o, s, p, o, (E = []), d, k), k), o, k, d, s, r ? E : k);
                    break;
                  default:
                    ll(x, C, C, C, [""], k, 0, s, k);
                }
        }
        (u = f = S = 0), (_ = h = 1), (p = x = ""), (d = l);
        break;
      case 58:
        (d = 1 + Vt(x)), (S = g);
      default:
        if (_ < 1) {
          if (c == 123) --_;
          else if (c == 125 && _++ == 0 && cC() == 125) continue;
        }
        switch (((x += Qc(c)), c * _)) {
          case 38:
            h = f > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Vt(x) - 1) * h), (h = 1);
            break;
          case 64:
            Fn() === 45 && (x += ya(jt())), (m = Fn()), (f = d = Vt((p = x += vC(il())))), c++;
            break;
          case 45:
            g === 45 && Vt(x) == 2 && (_ = 0);
        }
    }
  return i;
}
function bd(e, t, n, r, o, i, l, s, a, u, f, d) {
  for (var m = o - 1, S = o === 0 ? i : [""], g = fg(S), _ = 0, T = 0, h = 0; _ < r; ++_)
    for (var c = 0, p = Vr(e, m + 1, (m = ug((T = l[_])))), E = e; c < g; ++c)
      (E = cg(T > 0 ? S[c] + " " + p : q(p, /&\f/g, S[c]))) && (a[h++] = E);
  return Ls(e, t, n, o === 0 ? Ts : s, a, u, f, d);
}
function yC(e, t, n, r) {
  return Ls(e, t, n, sg, Qc(uC()), Vr(e, 2, -2), 0, r);
}
function Wd(e, t, n, r, o) {
  return Ls(e, t, n, Gc, Vr(e, 0, r), Vr(e, r + 1, -1), r, o);
}
function pg(e, t, n) {
  switch (sC(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e;
    case 4789:
      return Mo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + Mo + e + me + e + e;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return ae + e + me + q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + me + q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + me + q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ae + e + me + e + e;
    case 6165:
      return ae + e + me + "flex-" + e + e;
    case 5187:
      return ae + e + q(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return (
        ae +
        e +
        me +
        "flex-item-" +
        q(e, /flex-|-self/g, "") +
        (Kt(e, /flex-|baseline/) ? "" : me + "grid-row-" + q(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return ae + e + me + "flex-line-pack" + q(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ae + e + me + q(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + me + q(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + q(e, "-grow", "") + ae + e + me + q(e, "grow", "positive") + e;
    case 4554:
      return ae + q(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return q(q(q(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return q(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return (
        q(q(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e
      );
    case 4200:
      if (!Kt(e, /flex-|baseline/)) return me + "grid-column-align" + Vr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return me + q(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Kt(r.props, /grid-\w+-end/);
        })
        ? ~ol(e + (n = n[t].value), "span", 0)
          ? e
          : me +
            q(e, "-start", "") +
            e +
            me +
            "grid-row-span:" +
            (~ol(n, "span", 0) ? Kt(n, /\d+/) : +Kt(n, /\d+/) - +Kt(e, /\d+/)) +
            ";"
        : me + q(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Kt(r.props, /grid-\w+-start/);
        })
        ? e
        : me + q(q(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vt(e) - 1 - t > 6)
        switch (Oe(e, t + 1)) {
          case 109:
            if (Oe(e, t + 4) !== 45) break;
          case 102:
            return q(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + Mo + (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ol(e, "stretch", 0) ? pg(q(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return q(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, o, i, l, s, a, u) {
        return me + o + ":" + i + u + (l ? me + o + "-span:" + (s ? a : +a - +i) + u : "") + e;
      });
    case 4949:
      if (Oe(e, t + 6) === 121) return q(e, ":", ":" + ae) + e;
      break;
    case 6444:
      switch (Oe(e, Oe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            q(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" + ae + (Oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + me + "$2box$3"
            ) + e
          );
        case 100:
          return q(e, ":", ":" + me) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return q(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ul(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function SC(e, t, n, r) {
  switch (e.type) {
    case lC:
      if (e.children.length) break;
    case iC:
    case Gc:
      return (e.return = e.return || e.value);
    case sg:
      return "";
    case ag:
      return (e.return = e.value + "{" + Ul(e.children, r) + "}");
    case Ts:
      if (!Vt((e.value = e.props.join(",")))) return "";
  }
  return Vt((n = Ul(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function wC(e) {
  var t = fg(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function _C(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function RC(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Gc:
        e.return = pg(e.value, e.length, n);
        return;
      case ag:
        return Ul([on(e, { value: q(e.value, "@", "@" + ae) })], r);
      case Ts:
        if (e.length)
          return aC((n = e.props), function (o) {
            switch (Kt(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                rr(on(e, { props: [q(o, /:(read-\w+)/, ":" + Mo + "$1")] })),
                  rr(on(e, { props: [o] })),
                  Nu(e, { props: Bd(n, r) });
                break;
              case "::placeholder":
                rr(on(e, { props: [q(o, /:(plac\w+)/, ":" + ae + "input-$1")] })),
                  rr(on(e, { props: [q(o, /:(plac\w+)/, ":" + Mo + "$1")] })),
                  rr(on(e, { props: [q(o, /:(plac\w+)/, me + "input-$1")] })),
                  rr(on(e, { props: [o] })),
                  Nu(e, { props: Bd(n, r) });
                break;
            }
            return "";
          });
    }
}
var EC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  at = {},
  Fr = (typeof process < "u" && at !== void 0 && (at.REACT_APP_SC_ATTR || at.SC_ATTR)) || "data-styled",
  hg = "active",
  mg = "data-styled-version",
  Ps = "6.1.10",
  Yc = `/*!sc*/
`,
  Zc = typeof window < "u" && "HTMLElement" in window,
  xC = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        at !== void 0 &&
        at.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        at.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? at.REACT_APP_SC_DISABLE_SPEEDY !== "false" && at.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        at !== void 0 &&
        at.SC_DISABLE_SPEEDY !== void 0 &&
        at.SC_DISABLE_SPEEDY !== "" &&
        at.SC_DISABLE_SPEEDY !== "false" &&
        at.SC_DISABLE_SPEEDY),
  Is = Object.freeze([]),
  Br = Object.freeze({});
function kC(e, t, n) {
  return n === void 0 && (n = Br), (e.theme !== n.theme && e.theme) || t || n.theme;
}
var vg = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  CC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  TC = /(^-|-$)/g;
function Hd(e) {
  return e.replace(CC, "-").replace(TC, "");
}
var NC = /(a)(d)/gi,
  zi = 52,
  Kd = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Pu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > zi; t = (t / zi) | 0) n = Kd(t % zi) + n;
  return (Kd(t % zi) + n).replace(NC, "$1-$2");
}
var Sa,
  gg = 5381,
  Sr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  yg = function (e) {
    return Sr(gg, e);
  };
function LC(e) {
  return Pu(yg(e) >>> 0);
}
function AC(e) {
  return e.displayName || e.name || "Component";
}
function wa(e) {
  return typeof e == "string" && !0;
}
var Sg = typeof Symbol == "function" && Symbol.for,
  wg = Sg ? Symbol.for("react.memo") : 60115,
  PC = Sg ? Symbol.for("react.forward_ref") : 60112,
  IC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  $C = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  _g = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  MC =
    (((Sa = {})[PC] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
    (Sa[wg] = _g),
    Sa);
function Gd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === wg ? _g : "$$typeof" in e ? MC[e.$$typeof] : IC;
  var t;
}
var jC = Object.defineProperty,
  DC = Object.getOwnPropertyNames,
  Qd = Object.getOwnPropertySymbols,
  OC = Object.getOwnPropertyDescriptor,
  zC = Object.getPrototypeOf,
  Yd = Object.prototype;
function Rg(e, t, n) {
  if (typeof t != "string") {
    if (Yd) {
      var r = zC(t);
      r && r !== Yd && Rg(e, r, n);
    }
    var o = DC(t);
    Qd && (o = o.concat(Qd(t)));
    for (var i = Gd(e), l = Gd(t), s = 0; s < o.length; ++s) {
      var a = o[s];
      if (!(a in $C || (n && n[a]) || (l && a in l) || (i && a in i))) {
        var u = OC(t, a);
        try {
          jC(e, a, u);
        } catch {}
      }
    }
  }
  return e;
}
function br(e) {
  return typeof e == "function";
}
function Xc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function On(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Zd(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function ti(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Iu(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !ti(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Iu(e[r], t[r]);
  else if (ti(t)) for (var r in t) e[r] = Iu(e[r], t[r]);
  return e;
}
function Jc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function hi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var VC = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw hi(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)), this.groupSizes.set(r), (this.length = i);
          for (var l = o; l < i; l++) this.groupSizes[l] = 0;
        }
        for (var s = this.indexOfGroup(t + 1), a = ((l = 0), n.length); l < a; l++)
          this.tag.insertRule(s, n[l]) && (this.groupSizes[t]++, s++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, l = o; l < i; l++)
          n += "".concat(this.tag.getRule(l)).concat(Yc);
        return n;
      }),
      e
    );
  })(),
  sl = new Map(),
  Fl = new Map(),
  al = 1,
  Vi = function (e) {
    if (sl.has(e)) return sl.get(e);
    for (; Fl.has(al); ) al++;
    var t = al++;
    return sl.set(e, t), Fl.set(t, e), t;
  },
  UC = function (e, t) {
    (al = t + 1), sl.set(e, t), Fl.set(t, e);
  },
  FC = "style[".concat(Fr, "][").concat(mg, '="').concat(Ps, '"]'),
  BC = new RegExp("^".concat(Fr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  bC = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
  },
  WC = function (e, t) {
    for (
      var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Yc), o = [], i = 0, l = r.length;
      i < l;
      i++
    ) {
      var s = r[i].trim();
      if (s) {
        var a = s.match(BC);
        if (a) {
          var u = 0 | parseInt(a[1], 10),
            f = a[2];
          u !== 0 && (UC(f, u), bC(e, f, a[3]), e.getTag().insertRules(u, o)), (o.length = 0);
        } else o.push(s);
      }
    }
  };
function HC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Eg = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (s) {
        var a = Array.from(s.querySelectorAll("style[".concat(Fr, "]")));
        return a[a.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Fr, hg), r.setAttribute(mg, Ps);
    var l = HC();
    return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
  },
  KC = (function () {
    function e(t) {
      (this.element = Eg(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var l = r[o];
            if (l.ownerNode === n) return l;
          }
          throw hi(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  GC = (function () {
    function e(t) {
      (this.element = Eg(t)), (this.nodes = this.element.childNodes), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  QC = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Xd = Zc,
  YC = { isServer: !Zc, useCSSOMInjection: !xC },
  xg = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Br), n === void 0 && (n = {});
      var o = this;
      (this.options = tt(tt({}, YC), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Zc &&
          Xd &&
          ((Xd = !1),
          (function (i) {
            for (var l = document.querySelectorAll(FC), s = 0, a = l.length; s < a; s++) {
              var u = l[s];
              u && u.getAttribute(Fr) !== hg && (WC(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Jc(this, function () {
          return (function (i) {
            for (
              var l = i.getTag(),
                s = l.length,
                a = "",
                u = function (d) {
                  var m = (function (h) {
                    return Fl.get(h);
                  })(d);
                  if (m === void 0) return "continue";
                  var S = i.names.get(m),
                    g = l.getGroup(d);
                  if (S === void 0 || g.length === 0) return "continue";
                  var _ = "".concat(Fr, ".g").concat(d, '[id="').concat(m, '"]'),
                    T = "";
                  S !== void 0 &&
                    S.forEach(function (h) {
                      h.length > 0 && (T += "".concat(h, ","));
                    }),
                    (a += "".concat(g).concat(_, '{content:"').concat(T, '"}').concat(Yc));
                },
                f = 0;
              f < s;
              f++
            )
              u(f);
            return a;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return Vi(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return n === void 0 && (n = !0), new e(tt(tt({}, this.options), t), this.gs, (n && this.names) || void 0);
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new QC(o) : r ? new KC(o) : new GC(o);
            })(this.options)),
            new VC(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Vi(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Vi(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Vi(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  ZC = /&/g,
  XC = /^\s*\/\/.*$/gm;
function kg(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = kg(n.children, t)),
      n
    );
  });
}
function JC(e) {
  var t,
    n,
    r,
    o = Br,
    i = o.options,
    l = i === void 0 ? Br : i,
    s = o.plugins,
    a = s === void 0 ? Is : s,
    u = function (m, S, g) {
      return g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0 ? ".".concat(t) : m;
    },
    f = a.slice();
  f.push(function (m) {
    m.type === Ts && m.value.includes("&") && (m.props[0] = m.props[0].replace(ZC, n).replace(r, u));
  }),
    l.prefix && f.push(RC),
    f.push(SC);
  var d = function (m, S, g, _) {
    S === void 0 && (S = ""),
      g === void 0 && (g = ""),
      _ === void 0 && (_ = "&"),
      (t = _),
      (n = S),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var T = m.replace(XC, ""),
      h = gC(g || S ? "".concat(g, " ").concat(S, " { ").concat(T, " }") : T);
    l.namespace && (h = kg(h, l.namespace));
    var c = [];
    return (
      Ul(
        h,
        wC(
          f.concat(
            _C(function (p) {
              return c.push(p);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (d.hash = a.length
      ? a
          .reduce(function (m, S) {
            return S.name || hi(15), Sr(m, S.name);
          }, gg)
          .toString()
      : ""),
    d
  );
}
var qC = new xg(),
  $u = JC(),
  Cg = le.createContext({ shouldForwardProp: void 0, styleSheet: qC, stylis: $u });
Cg.Consumer;
le.createContext(void 0);
function Jd() {
  return M.useContext(Cg);
}
var eT = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = $u);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Jc(this, function () {
          throw hi(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = $u), this.name + t.hash;
      }),
      e
    );
  })(),
  tT = function (e) {
    return e >= "A" && e <= "Z";
  };
function qd(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    tT(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Tg = function (e) {
    return e == null || e === !1 || e === "";
  },
  Ng = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !Tg(i) &&
        ((Array.isArray(i) && i.isCss) || br(i)
          ? r.push("".concat(qd(o), ":"), i, ";")
          : ti(i)
            ? r.push.apply(r, Vl(Vl(["".concat(o, " {")], Ng(i), !1), ["}"], !1))
            : r.push(
                ""
                  .concat(qd(o), ": ")
                  .concat(
                    ((t = o),
                    (n = i) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" || n === 0 || t in EC || t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";"
                  )
              ));
    }
    return r;
  };
function Bn(e, t, n, r) {
  if (Tg(e)) return [];
  if (Xc(e)) return [".".concat(e.styledComponentId)];
  if (br(e)) {
    if (!br((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t) return [e];
    var o = e(t);
    return Bn(o, t, n, r);
  }
  var i;
  return e instanceof eT
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : ti(e)
      ? Ng(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            Is,
            e.map(function (l) {
              return Bn(l, t, n, r);
            })
          )
        : [e.toString()];
}
function nT(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (br(n) && !Xc(n)) return !1;
  }
  return !0;
}
var rT = yg(Ps),
  oT = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && nT(t)),
        (this.componentId = n),
        (this.baseHash = Sr(rT, n)),
        (this.baseStyle = r),
        xg.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
        if (this.isStatic && !r.hash)
          if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = On(o, this.staticRulesId);
          else {
            var i = Zd(Bn(this.rules, t, n, r)),
              l = Pu(Sr(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, l)) {
              var s = r(i, ".".concat(l), void 0, this.componentId);
              n.insertRules(this.componentId, l, s);
            }
            (o = On(o, l)), (this.staticRulesId = l);
          }
        else {
          for (var a = Sr(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
            var d = this.rules[f];
            if (typeof d == "string") u += d;
            else if (d) {
              var m = Zd(Bn(d, t, n, r));
              (a = Sr(a, m + f)), (u += m);
            }
          }
          if (u) {
            var S = Pu(a >>> 0);
            n.hasNameForId(this.componentId, S) ||
              n.insertRules(this.componentId, S, r(u, ".".concat(S), void 0, this.componentId)),
              (o = On(o, S));
          }
        }
        return o;
      }),
      e
    );
  })(),
  Lg = le.createContext(void 0);
Lg.Consumer;
var _a = {};
function iT(e, t, n) {
  var r = Xc(e),
    o = e,
    i = !wa(e),
    l = t.attrs,
    s = l === void 0 ? Is : l,
    a = t.componentId,
    u =
      a === void 0
        ? (function (E, k) {
            var C = typeof E != "string" ? "sc" : Hd(E);
            _a[C] = (_a[C] || 0) + 1;
            var x = "".concat(C, "-").concat(LC(Ps + C + _a[C]));
            return k ? "".concat(k, "-").concat(x) : x;
          })(t.displayName, t.parentComponentId)
        : a,
    f = t.displayName,
    d =
      f === void 0
        ? (function (E) {
            return wa(E) ? "styled.".concat(E) : "Styled(".concat(AC(E), ")");
          })(e)
        : f,
    m = t.displayName && t.componentId ? "".concat(Hd(t.displayName), "-").concat(t.componentId) : t.componentId || u,
    S = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
    g = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var _ = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var T = t.shouldForwardProp;
      g = function (E, k) {
        return _(E, k) && T(E, k);
      };
    } else g = _;
  }
  var h = new oT(n, m, r ? o.componentStyle : void 0);
  function c(E, k) {
    return (function (C, x, I) {
      var oe = C.attrs,
        B = C.componentStyle,
        de = C.defaultProps,
        Xe = C.foldedComponentIds,
        se = C.styledComponentId,
        $e = C.target,
        kt = le.useContext(Lg),
        Me = Jd(),
        Ve = C.shouldForwardProp || Me.shouldForwardProp,
        j = kC(x, kt, de) || Br,
        b = (function (K, D, Z) {
          for (var X, F = tt(tt({}, D), { className: void 0, theme: Z }), ce = 0; ce < K.length; ce += 1) {
            var ye = br((X = K[ce])) ? X(F) : X;
            for (var ne in ye)
              F[ne] = ne === "className" ? On(F[ne], ye[ne]) : ne === "style" ? tt(tt({}, F[ne]), ye[ne]) : ye[ne];
          }
          return D.className && (F.className = On(F.className, D.className)), F;
        })(oe, x, j),
        $ = b.as || $e,
        W = {};
      for (var w in b)
        b[w] === void 0 ||
          w[0] === "$" ||
          w === "as" ||
          (w === "theme" && b.theme === j) ||
          (w === "forwardedAs" ? (W.as = b.forwardedAs) : (Ve && !Ve(w, $)) || (W[w] = b[w]));
      var A = (function (K, D) {
          var Z = Jd(),
            X = K.generateAndInjectStyles(D, Z.styleSheet, Z.stylis);
          return X;
        })(B, b),
        P = On(Xe, se);
      return (
        A && (P += " " + A),
        b.className && (P += " " + b.className),
        (W[wa($) && !vg.has($) ? "class" : "className"] = P),
        (W.ref = I),
        M.createElement($, W)
      );
    })(p, E, k);
  }
  c.displayName = d;
  var p = le.forwardRef(c);
  return (
    (p.attrs = S),
    (p.componentStyle = h),
    (p.displayName = d),
    (p.shouldForwardProp = g),
    (p.foldedComponentIds = r ? On(o.foldedComponentIds, o.styledComponentId) : ""),
    (p.styledComponentId = m),
    (p.target = r ? o.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (E) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var C = [], x = 1; x < arguments.length; x++) C[x - 1] = arguments[x];
              for (var I = 0, oe = C; I < oe.length; I++) Iu(k, oe[I], !0);
              return k;
            })({}, o.defaultProps, E)
          : E;
      },
    }),
    Jc(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    i &&
      Rg(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function ep(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var tp = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function lT(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (br(e) || ti(e)) return tp(Bn(ep(Is, Vl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Bn(r) : tp(Bn(ep(r, t)));
}
function Mu(e, t, n) {
  if ((n === void 0 && (n = Br), !t)) throw hi(1, t);
  var r = function (o) {
    for (var i = [], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
    return e(t, n, lT.apply(void 0, Vl([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return Mu(e, t, tt(tt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
    }),
    (r.withConfig = function (o) {
      return Mu(e, t, tt(tt({}, n), o));
    }),
    r
  );
}
var Ag = function (e) {
    return Mu(iT, e);
  },
  H = Ag;
vg.forEach(function (e) {
  H[e] = Ag(e);
});
const Pg = oC({ key: "isLoggedIn", default: !1 }),
  _t = ({ primary: e = !1, size: t = "medium", backgroundColor: n, label: r, ...o }) => {
    const i = e ? "storybook-button--primary" : "storybook-button--secondary";
    return v.jsx("button", {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, i].join(" "),
      style: { backgroundColor: n },
      ...o,
      children: r,
    });
  },
  $s = ({ onLogin: e, onLogout: t }) => {
    const n = lg(Pg);
    return v.jsx("header", {
      children: v.jsxs("div", {
        className: "storybook-header",
        children: [
          v.jsx("div", { children: v.jsx("h1", { children: "SnapEvent" }) }),
          v.jsx("div", {
            children: n
              ? v.jsxs(v.Fragment, {
                  children: [
                    v.jsx("span", { className: "welcome", children: "마이페이지" }),
                    v.jsx(_t, { size: "medium", onClick: t, label: "Log out" }),
                  ],
                })
              : v.jsx(v.Fragment, {
                  children: v.jsx(_t, { primary: !0, size: "medium", onClick: e, label: "Log In" }),
                }),
          }),
        ],
      }),
    });
  },
  sT = () => {
    const e = Yr(),
      t = () => {
        e("/login");
      },
      n = () => {
        e("/");
      };
    return v.jsxs(aT, {
      children: [
        v.jsx($s, { onLogin: t, onLogout: n }),
        v.jsxs(np, {
          children: [
            v.jsx(rp, { src: "/sale.jpeg" }),
            v.jsx(uT, { children: v.jsx(cT, { children: "세일 기간을 놓쳐서 아쉬웠던 적 있으셨나요?" }) }),
            v.jsxs(op, {
              children: [
                "SnapEvent는 관심 있는 브랜드를 구독하면",
                v.jsx("br", {}),
                "세일 기간에 알림을 보내드립니다.",
                v.jsx("br", {}),
                "마감 전 날까지도 알림을 받아보세요!",
              ],
            }),
            v.jsx(ip, {
              children: v.jsx(_t, {
                primary: !1,
                label: "서비스 중인 상품 구경하기",
                onClick: () => {
                  e("/onboarding");
                },
              }),
            }),
          ],
        }),
        v.jsxs(np, {
          children: [
            v.jsx(rp, { src: "/hands.jpeg" }),
            v.jsxs(op, {
              children: [
                "SnapEvent를 친구에게 공유하고 함께",
                v.jsx("br", {}),
                "구독 상품을 공유해보세요!",
                v.jsx("br", {}),
                "새로운 상품을 발견하세요.",
              ],
            }),
            v.jsx(ip, { children: v.jsx(_t, { primary: !1, label: "공유하기" }) }),
          ],
        }),
      ],
    });
  },
  aT = H.div`
  width: 100%;
  padding: 2rem;
`,
  np = H.div`
  margin-top: 5rem;
  text-align: center;
`,
  rp = H.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`,
  uT = H.div`
  margin-top: 1.5rem;
`,
  cT = H.h1`
  color: #333;
  font-size: 2rem;
  line-height: 1.5;
`,
  op = H.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1.5rem 0;
`,
  ip = H.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,
  jo = ({ title: e, description: t, dateRange: n, image: r, href: o }) =>
    v.jsxs(Ig, {
      children: [
        v.jsx($g, { src: r }),
        v.jsxs(Mg, {
          children: [
            v.jsx(jg, { href: o, children: e }),
            t && v.jsx(ul, { children: t }),
            v.jsxs(ul, { children: ["📅 시작 날짜 📅 : ", n.startDate] }),
            v.jsxs(ul, { children: ["📅 종료 날짜 📅 : ", n.endDate] }),
            v.jsx(Dg, { children: v.jsx(_t, { primary: !0, size: "medium", label: "알림 설정" }) }),
          ],
        }),
      ],
    }),
  fT = ({ title: e, ticketOpenDate: t, image: n, href: r }) =>
    v.jsxs(Ig, {
      children: [
        v.jsx($g, { src: n }),
        v.jsxs(Mg, {
          children: [
            v.jsx(jg, { href: r, children: e }),
            v.jsxs(ul, { children: ["📅 시작 날짜 📅 : ", t] }),
            v.jsx(Dg, { children: v.jsx(_t, { primary: !0, size: "medium", label: "알림 설정" }) }),
          ],
        }),
      ],
    }),
  Ig = H.div`
  width: 40%;
  min-width: 250px;
  height: 70%;
  margin: 0.8rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  overflow: hidden;
`,
  $g = H.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`,
  Mg = H.div`
  padding: 1rem;
  justify-content: space-evenly;
`,
  jg = H.a`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`,
  ul = H.p`
  color: #555;
  font-size: 1rem;
`,
  Dg = H.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,
  dT = "https://snapevent.site/api/crawl/olive-young",
  pT = "https://snapevent.site/api/crawl/interpark",
  hT = "https://snapevent.site/api/crawl/ssf-shop",
  mT = "https://snapevent.site/api/crawl/ediya-coffee",
  vT = () => {
    const e = Yr(),
      [t, n] = M.useState(!0),
      [r, o] = M.useState([]),
      [i, l] = M.useState(!0),
      [s, a] = M.useState([]),
      [u, f] = M.useState(!0),
      [d, m] = M.useState([]),
      [S, g] = M.useState(!0),
      [_, T] = M.useState([]);
    return (
      M.useEffect(() => {
        (async () => {
          const h = await fetch(dT),
            c = await fetch(pT),
            p = await fetch(hT),
            E = await fetch(mT);
          if (!h.ok) throw new Error("API 호출 실패" + h.statusText);
          if (!c.ok) throw new Error("API 호출 실패" + c.statusText);
          if (!p.ok) throw new Error("API 호출 실패" + p.statusText);
          if (!E.ok) throw new Error("API 호출 실패" + E.statusText);
          const k = await h.json();
          o(k), n(!1);
          const C = await c.json();
          a(C), l(!1);
          const x = await p.json();
          m(x), f(!1);
          const I = await E.json();
          T(I), g(!1);
        })();
      }, []),
      v.jsxs(gT, {
        children: [
          v.jsx($s, {
            onLogin: () => {
              e("/login");
            },
          }),
          v.jsxs(yT, {
            children: [
              v.jsx(ST, { children: "구독할 이벤트를 골라 주세요!" }),
              v.jsxs(wT, {
                children: [
                  v.jsx(Ui, {
                    onClick: () => {
                      console.log("ehdwr");
                    },
                    children: " 💄 화장품 💄 ",
                  }),
                  v.jsxs(Bi, {
                    children: [
                      v.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      v.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "Oliveyoung 구독하기" }),
                    ],
                  }),
                  v.jsx(Fi, {
                    children: t
                      ? v.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " })
                      : r.map((h) => v.jsx(jo, { ...h }, h.title)),
                  }),
                  v.jsx(Ui, { children: " 🎬 공연/티켓 🎤 " }),
                  v.jsxs(Bi, {
                    children: [
                      v.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      v.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "Interpark 구독하기" }),
                    ],
                  }),
                  v.jsx(Fi, {
                    children: i
                      ? v.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " })
                      : s.map((h) => v.jsx(fT, { ...h }, h.title)),
                  }),
                  v.jsx(Ui, { children: " 🧵 의류 🧶 " }),
                  v.jsxs(Bi, {
                    children: [
                      v.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      v.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "SSF 구독하기" }),
                    ],
                  }),
                  v.jsx(Fi, {
                    children: u ? v.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " }) : d.map((h) => v.jsx(jo, { ...h })),
                  }),
                  v.jsx(Ui, { children: " ☕ 카페 🍰 " }),
                  v.jsxs(Bi, {
                    children: [
                      v.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      v.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "Ediya 구독하기" }),
                    ],
                  }),
                  v.jsx(Fi, {
                    children: S
                      ? v.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " })
                      : _.map((h) => v.jsx(jo, { ...h }, h.title)),
                  }),
                ],
              }),
              v.jsx(_T, { children: v.jsx(_t, { primary: !0, size: "large", label: "구독하기" }) }),
            ],
          }),
        ],
      })
    );
  },
  gT = H.div`
  width: 100%;
  padding: 3rem;
`,
  yT = H.div`
  margin-top: 3rem;
`,
  ST = H.h1`
  color: #333;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`,
  wT = H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 2rem;
`,
  Ui = H.h2`
  color: #333;
  font-size: 2rem;
  font-weight: bolder;
  text-align: start;
`,
  Fi = H.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
`,
  _T = H.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 1rem;
`,
  Bi = H.div`
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
`,
  bi = H.input`
  margin-right: 0.5rem;
  zoom: 2;
`,
  Wi = H.label`
  font-size: 1.3rem;
`,
  RT = () => {
    const [e, t] = M.useState(!1);
    return {
      isOpenModal: e,
      clickModal: () => {
        t(!0);
      },
      closeModal: () => {
        t(!1);
      },
    };
  },
  ET = "https://snapevent.site/api/members/join",
  xT = async (e) => {
    const t = await fetch(ET, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (!t.ok) throw new Error("API 통신 오류" + t.statusText);
    const n = t.json();
    console.log(n);
  },
  kT = "https://snapevent.site/api/members/login",
  CT = async (e) => {
    try {
      const t = await fetch(kT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      });
      if (t.ok) {
        const n = await t.json();
        console.log(n);
      } else throw (console.error("api 연결 실패.. :", t.status), new Error("API 호출 실패"));
    } catch (t) {
      throw (console.error("api 호출 중 에러 생김:", t), t);
    }
  },
  TT = ({ title: e, onLogIn: t, closeModal: n, checkDuplication: r }) => {
    const o = Yr(),
      [i, l] = M.useState(""),
      [s, a] = M.useState(""),
      [u, f] = M.useState(""),
      [d, m] = M.useState(""),
      [S, g] = M.useState(""),
      [_, T] = M.useState("");
    console.log(i), console.log(s), console.log(u), console.log(_);
    const h = { username: `${i}`, userPassword: `${s}` },
      c = { username: `${u}`, password: `${d}`, checkPassword: `${S}`, nickname: `${_}` };
    return v.jsx(NT, {
      children: v.jsx(LT, {
        children: v.jsxs(AT, {
          children: [
            v.jsxs(PT, { children: [v.jsx(lp, { children: e }), v.jsx(lp, { onClick: n, children: " ❌ " })] }),
            t
              ? v.jsx(v.Fragment, {
                  children: v.jsxs(sp, {
                    children: [
                      v.jsxs(or, {
                        children: [
                          v.jsx(ir, { htmlFor: "ID", children: "ID" }),
                          v.jsx(lr, {
                            name: "ID",
                            type: "text",
                            id: "ID",
                            onChange: (p) => {
                              l(p.target.value);
                            },
                          }),
                        ],
                      }),
                      v.jsxs(or, {
                        children: [
                          v.jsx(ir, { htmlFor: "PASSWORD", children: "PASSWORD" }),
                          v.jsx(lr, {
                            id: "PASSWORD",
                            name: "password",
                            type: "text",
                            onChange: (p) => {
                              a(p.target.value);
                            },
                          }),
                        ],
                      }),
                      v.jsx(_t, {
                        primary: !0,
                        size: "medium",
                        label: "로그인",
                        onClick: () => {
                          CT(h), l(""), a("");
                        },
                      }),
                    ],
                  }),
                })
              : v.jsx(v.Fragment, {
                  children: v.jsxs(sp, {
                    children: [
                      v.jsxs(or, {
                        children: [
                          v.jsx(ir, { htmlFor: "JOINID", children: "ID" }),
                          v.jsx(lr, {
                            id: "JOINID",
                            name: "joinId",
                            type: "text",
                            onChange: (p) => {
                              f(p.target.value);
                            },
                          }),
                        ],
                      }),
                      v.jsxs(or, {
                        children: [
                          v.jsx(ir, { htmlFor: "JOINPASSWORD", children: "PASSWORD" }),
                          v.jsx(lr, {
                            id: "JOINPASSWORD",
                            name: "joinPassword",
                            type: "text",
                            onChange: (p) => {
                              m(p.target.value);
                            },
                          }),
                        ],
                      }),
                      v.jsxs(or, {
                        children: [
                          v.jsx(ir, { htmlFor: "CHECKPASSWORD", children: " CHECK PASSWORD" }),
                          v.jsx(lr, {
                            id: "CHECKPASSWORD",
                            name: "checkPassword",
                            type: "text",
                            onChange: (p) => {
                              g(p.target.value);
                            },
                          }),
                          S !== d && v.jsx("div", { children: "입력한 비밀번호가 다릅니다." }),
                        ],
                      }),
                      v.jsxs(or, {
                        children: [
                          v.jsx(ir, { htmlFor: "NICKNAME", children: "NICKNAME" }),
                          v.jsx(lr, {
                            id: "NICKNAME",
                            name: "joinNickname",
                            type: "text",
                            onChange: (p) => {
                              T(p.target.value);
                            },
                          }),
                          v.jsx(_t, { primary: !1, size: "small", label: "중복 확인", onClick: r }),
                        ],
                      }),
                      v.jsx(_t, {
                        primary: !0,
                        label: "회원가입",
                        size: "medium",
                        onClick: () => {
                          console.log(c), xT(c), f(""), m(""), g(""), T(""), o("main");
                        },
                      }),
                    ],
                  }),
                }),
          ],
        }),
      }),
    });
  },
  NT = H.div`
  width:100vw;
  height: 100vh;
`,
  LT = H.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  AT = H.div`
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 3rem;
  border: 1px solid var(--color-white);
  position: fixed;
  width: 25%;
  min-width: 270px;
  height: 65%;
  min-height: 600;
`,
  PT = H.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,
  lp = H.h1`
  font-size: 2.5rem;
  color: #333;
  cursor: pointer;
`,
  sp = H.form`
  display: flex;
  flex-direction : column;
  height: calc(100% - 2rem);
`,
  or = H.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`,
  ir = H.label`
  color: #333;\
  white-space: nowrap;
  margin-right: 1rem;
`,
  lr = H.input`
  width: calc(60% - 1rem);
  height: 2rem;
  border-radius: 5px;
  border-color: #7a7a7a;
`,
  IT = "https://snapevent.site/oauth2/authorization/google",
  $T = "https://snapevent.site/oauth2/authorization/naver",
  MT = "https://snapevent.site/oauth2/authorization/kakao",
  jT = () => {
    fetch(IT).then((e) => console.log(e));
  },
  DT = async () => {
    fetch(MT).then((e) => console.log(e));
  },
  OT = async () => {
    fetch($T).then((e) => console.log(e));
  },
  zT = () => {
    const { isOpenModal: e, clickModal: t, closeModal: n } = RT(),
      [r, o] = M.useState(!1);
    return v.jsxs(VT, {
      children: [
        v.jsx(UT, { children: "🔥 SnapEvent 🔥" }),
        v.jsx(FT, { children: "회원가입 또는 로그인하세요!" }),
        v.jsx(BT, { children: "스냅 이벤트의 다양한 서비스를 이용해보세요." }),
        v.jsxs(bT, {
          children: [
            v.jsx(_t, {
              primary: !1,
              size: "large",
              label: "회원가입",
              onClick: () => {
                o(!0), t();
              },
            }),
            v.jsx(_t, {
              primary: !0,
              size: "large",
              label: "로그인",
              onClick: () => {
                o(!1), t();
              },
            }),
          ],
        }),
        v.jsx(WT, {}),
        v.jsxs(HT, {
          onClick: DT,
          children: [v.jsx(Ea, { src: "/kakao.png" }), v.jsx(Ra, { children: "카카오로 로그인" })],
        }),
        v.jsxs(KT, {
          onClick: OT,
          children: [v.jsx(Ea, { src: "/naver.svg" }), v.jsx(Ra, { children: "네이버로 로그인" })],
        }),
        v.jsxs(GT, {
          onClick: jT,
          children: [v.jsx(Ea, { src: "/google.png" }), v.jsx(Ra, { children: "구글로 로그인" })],
        }),
        e && v.jsx(TT, { title: r ? "Join In" : "Log In", closeModal: n, onLogIn: !r }),
      ],
    });
  },
  VT = H.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`,
  UT = H.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,
  FT = H.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,
  BT = H.p`
  font-size: 1.3rem;
  color: #777;
  margin-bottom: 2rem;
`,
  bT = H.div`
  display: flex;
  gap: 1rem;
`,
  WT = H.hr`
  margin-top: 2rem;
  border: solid 0.7px #777;
  width: 370px;
`,
  HT = H.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    background-color: #FEE500;
    border: 2px solid #FEE500; 
    border-radius: 5px; 
    margin-top: 0.5rem; 
`,
  Ra = H.p`
  font-size: 0.95rem;
  color: #300;
`,
  KT = H.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    background-color: #00C73C;
    border: 2px solid #00C73C; 
    border-radius: 5px; 
    margin-top: 0.5rem; 
`,
  GT = H.div`
    display: flex;
    flex-direction: row;
    width: 20vw;
    border: 2px solid #999999; 
    border-radius: 5px; 
    margin-top: 0.5rem; 
`,
  Ea = H.img`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  margin: 0.5rem 3rem 0.5rem 1rem;
`,
  QT = () => {
    const e = Yr();
    return v.jsx(YT, {
      children: v.jsxs(ZT, {
        children: [
          v.jsx(mo, { onClick: () => e("/cosmetic"), children: "화장품" }),
          v.jsx(mo, { onClick: () => e("/cafe"), children: "카페" }),
          v.jsx(mo, { onClick: () => e("/concert"), children: "공연/티켓" }),
          v.jsx(mo, { onClick: () => e("/clothes"), children: "의류" }),
          v.jsx(mo, { onClick: () => e("/board"), children: "게시판" }),
        ],
      }),
    });
  },
  YT = H.div`
  margin: 0;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  ZT = H.div`
  margin: 1rem;
  width: 95%;
  height: 10%;
  display: flex;
  background-color: #ffbe98;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`,
  mo = H.span`
  color: black;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`,
  XT = () => {
    const e = Yr(),
      t = lg(Pg),
      [n, r] = M.useState([
        {
          id: 1,
          title: "첫 번째 게시글",
          likeCount: 1,
          commentCount: 13,
          createdTime: new Date(),
          writerName: "sebin",
          myPost: !1,
        },
      ]);
    return (
      M.useEffect(() => {
        (async () => {
          const o = await fetch("https://snapevent.site/api/posts/list/1/7/recent");
          if (!o.ok) throw new Error("api 호출 실패 " + o.statusText);
          const i = await o.json();
          r(i.content);
        })();
      }, []),
      v.jsxs("div", {
        children: [
          v.jsx(JT, { children: v.jsx("h2", { children: "게시판" }) }),
          n &&
            v.jsx(qT, {
              children: n.map((o) =>
                v.jsx(
                  eN,
                  {
                    onClick: () => {
                      t ? e("/board") : alert("로그인 후에 이용 부탁드립니다!");
                    },
                    children: o.title,
                  },
                  o.id
                )
              ),
            }),
        ],
      })
    );
  },
  JT = H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid #ffbe98;
  padding: 1rem;
  margin-left: 4rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.8rem;
    color: #333;
    margin: 3rem;
  }
`,
  qT = H.div`
  margin: 2rem auto;
  max-width: 1000px;
`,
  eN = H.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`,
  tN = () => {
    const e = Yr(),
      t = [
        {
          title: "oliveyoung",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand1.jpg",
          href: "1234",
        },
        {
          title: "ediya",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand2.jpg",
          href: "1234",
        },
        {
          title: "ssf",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand3.jpg",
          href: "1234",
        },
        {
          title: "Etc",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand4.jpg",
          href: "1234",
        },
      ],
      n = [
        {
          title: "brandA",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower1.jpg",
          href: "1234",
        },
        {
          title: "brandB",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower2.jpg",
          href: "1234",
        },
        {
          title: "brandC",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower3.jpg",
          href: "1234",
        },
        {
          title: "brandD",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower4.jpg",
          href: "1234",
        },
        {
          title: "brandE",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower5.jpg",
          href: "1234",
        },
      ];
    return v.jsxs(nN, {
      children: [
        v.jsx($s, {
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        v.jsx(QT, {}),
        v.jsxs(ap, {
          children: [
            v.jsx(up, { children: "000님이 구독 중인 브랜드" }),
            v.jsx(cp, {
              children:
                t.length > 0
                  ? v.jsx(fp, {
                      children: t.map((r) =>
                        v.jsxs(
                          dp,
                          {
                            children: [
                              v.jsx(pp, { src: r.image, alt: r.title }),
                              v.jsx(jo, {
                                image: r.image,
                                title: r.title,
                                dateRange: r.dateRange,
                                href: r.href,
                                description: r.description,
                              }),
                            ],
                          },
                          r.title
                        )
                      ),
                    })
                  : v.jsx(hp, { children: "구독 중인 브랜드가 없습니다!" }),
            }),
          ],
        }),
        v.jsxs(ap, {
          children: [
            v.jsx(up, { children: "000님이 팔로우 중인 000님이 구독 중인 브랜드" }),
            v.jsx(cp, {
              children:
                n.length > 0
                  ? v.jsx(fp, {
                      children: n.map((r) =>
                        v.jsxs(
                          dp,
                          {
                            children: [
                              v.jsx(pp, { src: r.image, alt: r.title }),
                              v.jsx(jo, {
                                image: r.image,
                                title: r.title,
                                dateRange: r.dateRange,
                                href: r.href,
                                description: r.description,
                              }),
                            ],
                          },
                          r.title
                        )
                      ),
                    })
                  : v.jsx(hp, { children: "팔로우 중인 브랜드가 없습니다!" }),
            }),
          ],
        }),
        v.jsx(XT, {}),
      ],
    });
  },
  nN = H.div`
  padding: 2rem;
`,
  ap = H.section`
  margin-top: 2rem;
`,
  up = H.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  margin-left: 3.7rem;
`,
  cp = H.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-left: 3.7rem;
  max-width: 1300px;
`,
  fp = H.div`
  display: flex;
`,
  dp = H.div`
  width: 400px;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 0 0 auto;
`,
  pp = H.img`
  width: 200px; /* 이미지 크기 조절 */
  height: 200px;
  object-fit: cover;
  border-radius: 10px; /* 이미지에 원하는 모양의 테두리 설정 */
`,
  hp = H.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-left: 3.7rem;
`,
  rN = () => v.jsx("div", { children: v.jsx($s, {}) }),
  Og = () => v.jsx(Og, {}),
  oN = () =>
    v.jsx(ig, {
      children: v.jsx(pS, {
        children: v.jsxs(cS, {
          children: [
            v.jsx(In, { path: "/", element: v.jsx(sT, {}) }),
            v.jsx(In, { path: "/onboarding", element: v.jsx(vT, {}) }),
            v.jsx(In, { path: "/login", element: v.jsx(zT, {}) }),
            v.jsx(In, { path: "/main", element: v.jsx(tN, {}) }),
            v.jsx(In, { path: "/board", element: v.jsx(rN, {}) }),
            v.jsx(In, { path: "/mypage", element: v.jsx(Og, {}) }),
          ],
        }),
      }),
    });
xa.createRoot(document.getElementById("root")).render(
  v.jsx(ig, { children: v.jsx(le.StrictMode, { children: v.jsx(oN, {}) }) })
);
