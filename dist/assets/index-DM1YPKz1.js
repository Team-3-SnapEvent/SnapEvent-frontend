function D0(e, t) {
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
        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
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
function Ih(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $h = { exports: {} },
  vl = {},
  Oh = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _i = Symbol.for("react.element"),
  M0 = Symbol.for("react.portal"),
  U0 = Symbol.for("react.fragment"),
  z0 = Symbol.for("react.strict_mode"),
  F0 = Symbol.for("react.profiler"),
  B0 = Symbol.for("react.provider"),
  V0 = Symbol.for("react.context"),
  W0 = Symbol.for("react.forward_ref"),
  H0 = Symbol.for("react.suspense"),
  K0 = Symbol.for("react.memo"),
  G0 = Symbol.for("react.lazy"),
  dd = Symbol.iterator;
function Q0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dd && e[dd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var jh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bh = Object.assign,
  Dh = {};
function io(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Dh), (this.updater = n || jh);
}
io.prototype.isReactComponent = {};
io.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
io.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mh() {}
Mh.prototype = io.prototype;
function Pc(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Dh), (this.updater = n || jh);
}
var Ic = (Pc.prototype = new Mh());
Ic.constructor = Pc;
bh(Ic, io.prototype);
Ic.isPureReactComponent = !0;
var pd = Array.isArray,
  Uh = Object.prototype.hasOwnProperty,
  $c = { current: null },
  zh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Uh.call(t, r) && !zh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: _i, type: e, key: i, ref: s, props: o, _owner: $c.current };
}
function Y0(e, t) {
  return { $$typeof: _i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Oc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _i;
}
function q0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var hd = /\/+/g;
function va(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? q0("" + e.key) : t.toString(36);
}
function hs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _i:
          case M0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + va(s, 0) : r),
      pd(o)
        ? ((n = ""),
          e != null && (n = e.replace(hd, "$&/") + "/"),
          hs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Oc(o) &&
            (o = Y0(o, n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(hd, "$&/") + "/") + e)),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), pd(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + va(i, l);
      s += hs(i, t, n, a, o);
    }
  else if (((a = Q0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + va(i, l++)), (s += hs(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ui(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    hs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function J0(e) {
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
var Ze = { current: null },
  ms = { transition: null },
  Z0 = { ReactCurrentDispatcher: Ze, ReactCurrentBatchConfig: ms, ReactCurrentOwner: $c };
function Bh() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = {
  map: Ui,
  forEach: function (e, t, n) {
    Ui(
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
      Ui(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ui(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Oc(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
se.Component = io;
se.Fragment = U0;
se.Profiler = F0;
se.PureComponent = Pc;
se.StrictMode = z0;
se.Suspense = H0;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0;
se.act = Bh;
se.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bh({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = $c.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t) Uh.call(t, a) && !zh.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: _i, type: e.type, key: o, ref: i, props: r, _owner: s };
};
se.createContext = function (e) {
  return (
    (e = {
      $$typeof: V0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: B0, _context: e }),
    (e.Consumer = e)
  );
};
se.createElement = Fh;
se.createFactory = function (e) {
  var t = Fh.bind(null, e);
  return (t.type = e), t;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (e) {
  return { $$typeof: W0, render: e };
};
se.isValidElement = Oc;
se.lazy = function (e) {
  return { $$typeof: G0, _payload: { _status: -1, _result: e }, _init: J0 };
};
se.memo = function (e, t) {
  return { $$typeof: K0, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function (e) {
  var t = ms.transition;
  ms.transition = {};
  try {
    e();
  } finally {
    ms.transition = t;
  }
};
se.unstable_act = Bh;
se.useCallback = function (e, t) {
  return Ze.current.useCallback(e, t);
};
se.useContext = function (e) {
  return Ze.current.useContext(e);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (e) {
  return Ze.current.useDeferredValue(e);
};
se.useEffect = function (e, t) {
  return Ze.current.useEffect(e, t);
};
se.useId = function () {
  return Ze.current.useId();
};
se.useImperativeHandle = function (e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function (e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function (e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
se.useMemo = function (e, t) {
  return Ze.current.useMemo(e, t);
};
se.useReducer = function (e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
se.useRef = function (e) {
  return Ze.current.useRef(e);
};
se.useState = function (e) {
  return Ze.current.useState(e);
};
se.useSyncExternalStore = function (e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function () {
  return Ze.current.useTransition();
};
se.version = "18.3.1";
Oh.exports = se;
var j = Oh.exports;
const ae = Ih(j),
  X0 = D0({ __proto__: null, default: ae }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e1 = j,
  t1 = Symbol.for("react.element"),
  n1 = Symbol.for("react.fragment"),
  r1 = Object.prototype.hasOwnProperty,
  o1 = e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  i1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) r1.call(t, r) && !i1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: t1, type: e, key: i, ref: s, props: o, _owner: o1.current };
}
vl.Fragment = n1;
vl.jsx = Vh;
vl.jsxs = Vh;
$h.exports = vl;
var g = $h.exports,
  pu = {},
  Wh = { exports: {} },
  yt = {},
  Hh = { exports: {} },
  Kh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, H) {
    var b = M.length;
    M.push(H);
    e: for (; 0 < b; ) {
      var K = (b - 1) >>> 1,
        _ = M[K];
      if (0 < o(_, H)) (M[K] = H), (M[b] = _), (b = K);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var H = M[0],
      b = M.pop();
    if (b !== H) {
      M[0] = b;
      e: for (var K = 0, _ = M.length, P = _ >>> 1; K < P; ) {
        var I = 2 * (K + 1) - 1,
          G = M[I],
          U = I + 1,
          J = M[U];
        if (0 > o(G, b)) U < _ && 0 > o(J, G) ? ((M[K] = J), (M[U] = b), (K = U)) : ((M[K] = G), (M[I] = b), (K = I));
        else if (U < _ && 0 > o(J, b)) (M[K] = J), (M[U] = b), (K = U);
        else break e;
      }
    }
    return H;
  }
  function o(M, H) {
    var b = M.sortIndex - H.sortIndex;
    return b !== 0 ? b : M.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    S = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var H = n(u); H !== null; ) {
      if (H.callback === null) r(u);
      else if (H.startTime <= M) r(u), (H.sortIndex = H.expirationTime), t(a, H);
      else break;
      H = n(u);
    }
  }
  function R(M) {
    if (((S = !1), p(M), !v))
      if (n(a) !== null) (v = !0), De(N);
      else {
        var H = n(u);
        H !== null && Be(R, H.startTime - M);
      }
  }
  function N(M, H) {
    (v = !1), S && ((S = !1), m($), ($ = -1)), (y = !0);
    var b = h;
    try {
      for (p(H), f = n(a); f !== null && (!(f.expirationTime > H) || (M && !de())); ) {
        var K = f.callback;
        if (typeof K == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var _ = K(f.expirationTime <= H);
          (H = e.unstable_now()), typeof _ == "function" ? (f.callback = _) : f === n(a) && r(a), p(H);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var P = !0;
      else {
        var I = n(u);
        I !== null && Be(R, I.startTime - H), (P = !1);
      }
      return P;
    } finally {
      (f = null), (h = b), (y = !1);
    }
  }
  var C = !1,
    k = null,
    $ = -1,
    re = 5,
    D = -1;
  function de() {
    return !(e.unstable_now() - D < re);
  }
  function et() {
    if (k !== null) {
      var M = e.unstable_now();
      D = M;
      var H = !0;
      try {
        H = k(!0, M);
      } finally {
        H ? ue() : ((C = !1), (k = null));
      }
    } else C = !1;
  }
  var ue;
  if (typeof d == "function")
    ue = function () {
      d(et);
    };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(),
      $t = be.port2;
    (be.port1.onmessage = et),
      (ue = function () {
        $t.postMessage(null);
      });
  } else
    ue = function () {
      T(et, 0);
    };
  function De(M) {
    (k = M), C || ((C = !0), ue());
  }
  function Be(M, H) {
    $ = T(function () {
      M(e.unstable_now());
    }, H);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), De(N));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (re = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = h;
      }
      var b = h;
      h = H;
      try {
        return M();
      } finally {
        h = b;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, H) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var b = h;
      h = M;
      try {
        return H();
      } finally {
        h = b;
      }
    }),
    (e.unstable_scheduleCallback = function (M, H, b) {
      var K = e.unstable_now();
      switch (
        (typeof b == "object" && b !== null
          ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? K + b : K))
          : (b = K),
        M)
      ) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return (
        (_ = b + _),
        (M = { id: c++, callback: H, priorityLevel: M, startTime: b, expirationTime: _, sortIndex: -1 }),
        b > K
          ? ((M.sortIndex = b), t(u, M), n(a) === null && M === n(u) && (S ? (m($), ($ = -1)) : (S = !0), Be(R, b - K)))
          : ((M.sortIndex = _), t(a, M), v || y || ((v = !0), De(N))),
        M
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (M) {
      var H = h;
      return function () {
        var b = h;
        h = H;
        try {
          return M.apply(this, arguments);
        } finally {
          h = b;
        }
      };
    });
})(Kh);
Hh.exports = Kh;
var s1 = Hh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l1 = j,
  gt = s1;
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
var Gh = new Set(),
  ei = {};
function fr(e, t) {
  Br(e, t), Br(e + "Capture", t);
}
function Br(e, t) {
  for (ei[e] = t, e = 0; e < t.length; e++) Gh.add(t[e]);
}
var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  hu = Object.prototype.hasOwnProperty,
  a1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  md = {},
  vd = {};
function u1(e) {
  return hu.call(vd, e) ? !0 : hu.call(md, e) ? !1 : a1.test(e) ? (vd[e] = !0) : ((md[e] = !0), !1);
}
function c1(e, t, n, r) {
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
function f1(e, t, n, r) {
  if (t === null || typeof t > "u" || c1(e, t, n, r)) return !0;
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
function Xe(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new Xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  He[e] = new Xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new Xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new Xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new Xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jc = /[\-:]([a-z])/g;
function bc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jc, bc);
    He[t] = new Xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(jc, bc);
  He[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(jc, bc);
  He[t] = new Xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new Xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Dc(e, t, n, r) {
  var o = He.hasOwnProperty(t) ? He[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (f1(t, n, o, r) && (n = null),
    r || o === null
      ? u1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var dn = l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zi = Symbol.for("react.element"),
  Er = Symbol.for("react.portal"),
  Rr = Symbol.for("react.fragment"),
  Mc = Symbol.for("react.strict_mode"),
  mu = Symbol.for("react.profiler"),
  Qh = Symbol.for("react.provider"),
  Yh = Symbol.for("react.context"),
  Uc = Symbol.for("react.forward_ref"),
  vu = Symbol.for("react.suspense"),
  gu = Symbol.for("react.suspense_list"),
  zc = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  qh = Symbol.for("react.offscreen"),
  gd = Symbol.iterator;
function wo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gd && e[gd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Ne = Object.assign,
  ga;
function jo(e) {
  if (ga === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ga = (t && t[1]) || "";
    }
  return (
    `
` +
    ga +
    e
  );
}
var ya = !1;
function Sa(e, t) {
  if (!e || ya) return "";
  ya = !0;
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
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ya = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jo(e) : "";
}
function d1(e) {
  switch (e.tag) {
    case 5:
      return jo(e.type);
    case 16:
      return jo("Lazy");
    case 13:
      return jo("Suspense");
    case 19:
      return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sa(e.type, !1)), e;
    case 11:
      return (e = Sa(e.type.render, !1)), e;
    case 1:
      return (e = Sa(e.type, !0)), e;
    default:
      return "";
  }
}
function yu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rr:
      return "Fragment";
    case Er:
      return "Portal";
    case mu:
      return "Profiler";
    case Mc:
      return "StrictMode";
    case vu:
      return "Suspense";
    case gu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yh:
        return (e.displayName || "Context") + ".Consumer";
      case Qh:
        return (e._context.displayName || "Context") + ".Provider";
      case Uc:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case zc:
        return (t = e.displayName || null), t !== null ? t : yu(e.type) || "Memo";
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return yu(e(t));
        } catch {}
    }
  return null;
}
function p1(e) {
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
      return yu(t);
    case 8:
      return t === Mc ? "StrictMode" : "Mode";
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
function On(e) {
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
function Jh(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function h1(e) {
  var t = Jh(e) ? "checked" : "value",
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
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fi(e) {
  e._valueTracker || (e._valueTracker = h1(e));
}
function Zh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Jh(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function bs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Su(e, t) {
  var n = t.checked;
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function yd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Xh(e, t) {
  (t = t.checked), t != null && Dc(e, "checked", t, !1);
}
function wu(e, t) {
  Xh(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _u(e, t.type, n) : t.hasOwnProperty("defaultValue") && _u(e, t.type, On(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Sd(e, t, n) {
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
function _u(e, t, n) {
  (t !== "number" || bs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bo = Array.isArray;
function jr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Eu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function wd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (bo(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function em(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _d(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ru(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Bi,
  nm = (function (e) {
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
        Bi = Bi || document.createElement("div"),
          Bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Bi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ti(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fo = {
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
  m1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fo).forEach(function (e) {
  m1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fo[t] = Fo[e]);
  });
});
function rm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fo.hasOwnProperty(e) && Fo[e])
      ? ("" + t).trim()
      : t + "px";
}
function om(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = rm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var v1 = Ne(
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
function xu(e, t) {
  if (t) {
    if (v1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function ku(e, t) {
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
var Tu = null;
function Fc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cu = null,
  br = null,
  Dr = null;
function Ed(e) {
  if ((e = xi(e))) {
    if (typeof Cu != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = _l(t)), Cu(e.stateNode, e.type, t));
  }
}
function im(e) {
  br ? (Dr ? Dr.push(e) : (Dr = [e])) : (br = e);
}
function sm() {
  if (br) {
    var e = br,
      t = Dr;
    if (((Dr = br = null), Ed(e), t)) for (e = 0; e < t.length; e++) Ed(t[e]);
  }
}
function lm(e, t) {
  return e(t);
}
function am() {}
var wa = !1;
function um(e, t, n) {
  if (wa) return e(t, n);
  wa = !0;
  try {
    return lm(e, t, n);
  } finally {
    (wa = !1), (br !== null || Dr !== null) && (am(), sm());
  }
}
function ni(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _l(n);
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
var Nu = !1;
if (an)
  try {
    var _o = {};
    Object.defineProperty(_o, "passive", {
      get: function () {
        Nu = !0;
      },
    }),
      window.addEventListener("test", _o, _o),
      window.removeEventListener("test", _o, _o);
  } catch {
    Nu = !1;
  }
function g1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Bo = !1,
  Ds = null,
  Ms = !1,
  Au = null,
  y1 = {
    onError: function (e) {
      (Bo = !0), (Ds = e);
    },
  };
function S1(e, t, n, r, o, i, s, l, a) {
  (Bo = !1), (Ds = null), g1.apply(y1, arguments);
}
function w1(e, t, n, r, o, i, s, l, a) {
  if ((S1.apply(this, arguments), Bo)) {
    if (Bo) {
      var u = Ds;
      (Bo = !1), (Ds = null);
    } else throw Error(L(198));
    Ms || ((Ms = !0), (Au = u));
  }
}
function dr(e) {
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
function cm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Rd(e) {
  if (dr(e) !== e) throw Error(L(188));
}
function _1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dr(e)), t === null)) throw Error(L(188));
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
        if (i === n) return Rd(o), e;
        if (i === r) return Rd(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function fm(e) {
  return (e = _1(e)), e !== null ? dm(e) : null;
}
function dm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pm = gt.unstable_scheduleCallback,
  xd = gt.unstable_cancelCallback,
  E1 = gt.unstable_shouldYield,
  R1 = gt.unstable_requestPaint,
  Le = gt.unstable_now,
  x1 = gt.unstable_getCurrentPriorityLevel,
  Bc = gt.unstable_ImmediatePriority,
  hm = gt.unstable_UserBlockingPriority,
  Us = gt.unstable_NormalPriority,
  k1 = gt.unstable_LowPriority,
  mm = gt.unstable_IdlePriority,
  gl = null,
  Jt = null;
function T1(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ft = Math.clz32 ? Math.clz32 : A1,
  C1 = Math.log,
  N1 = Math.LN2;
function A1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((C1(e) / N1) | 0)) | 0;
}
var Vi = 64,
  Wi = 4194304;
function Do(e) {
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
function zs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Do(l)) : ((i &= s), i !== 0 && (r = Do(i)));
  } else (s = n & ~o), s !== 0 ? (r = Do(s)) : i !== 0 && (r = Do(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function L1(e, t) {
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
function P1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Ft(i),
      l = 1 << s,
      a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = L1(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l);
  }
}
function Lu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vm() {
  var e = Vi;
  return (Vi <<= 1), !(Vi & 4194240) && (Vi = 64), e;
}
function _a(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ei(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ft(t)),
    (e[t] = n);
}
function I1(e, t) {
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
    var o = 31 - Ft(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Vc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ft(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var fe = 0;
function gm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ym,
  Wc,
  Sm,
  wm,
  _m,
  Pu = !1,
  Hi = [],
  Tn = null,
  Cn = null,
  Nn = null,
  ri = new Map(),
  oi = new Map(),
  wn = [],
  $1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      Nn = null;
      break;
    case "pointerover":
    case "pointerout":
      ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oi.delete(t.pointerId);
  }
}
function Eo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = xi(t)), t !== null && Wc(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function O1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Tn = Eo(Tn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Cn = Eo(Cn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Nn = Eo(Nn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ri.set(i, Eo(ri.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), oi.set(i, Eo(oi.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Em(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = dr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cm(n)), t !== null)) {
          (e.blockedOn = t),
            _m(e.priority, function () {
              Sm(n);
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
function vs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Tu = r), n.target.dispatchEvent(r), (Tu = null);
    } else return (t = xi(n)), t !== null && Wc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Td(e, t, n) {
  vs(e) && n.delete(t);
}
function j1() {
  (Pu = !1),
    Tn !== null && vs(Tn) && (Tn = null),
    Cn !== null && vs(Cn) && (Cn = null),
    Nn !== null && vs(Nn) && (Nn = null),
    ri.forEach(Td),
    oi.forEach(Td);
}
function Ro(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Pu || ((Pu = !0), gt.unstable_scheduleCallback(gt.unstable_NormalPriority, j1)));
}
function ii(e) {
  function t(o) {
    return Ro(o, e);
  }
  if (0 < Hi.length) {
    Ro(Hi[0], e);
    for (var n = 1; n < Hi.length; n++) {
      var r = Hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Tn !== null && Ro(Tn, e), Cn !== null && Ro(Cn, e), Nn !== null && Ro(Nn, e), ri.forEach(t), oi.forEach(t), n = 0;
    n < wn.length;
    n++
  )
    (r = wn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wn.length && ((n = wn[0]), n.blockedOn === null); ) Em(n), n.blockedOn === null && wn.shift();
}
var Mr = dn.ReactCurrentBatchConfig,
  Fs = !0;
function b1(e, t, n, r) {
  var o = fe,
    i = Mr.transition;
  Mr.transition = null;
  try {
    (fe = 1), Hc(e, t, n, r);
  } finally {
    (fe = o), (Mr.transition = i);
  }
}
function D1(e, t, n, r) {
  var o = fe,
    i = Mr.transition;
  Mr.transition = null;
  try {
    (fe = 4), Hc(e, t, n, r);
  } finally {
    (fe = o), (Mr.transition = i);
  }
}
function Hc(e, t, n, r) {
  if (Fs) {
    var o = Iu(e, t, n, r);
    if (o === null) Pa(e, t, r, Bs, n), kd(e, r);
    else if (O1(o, e, t, n, r)) r.stopPropagation();
    else if ((kd(e, r), t & 4 && -1 < $1.indexOf(e))) {
      for (; o !== null; ) {
        var i = xi(o);
        if ((i !== null && ym(i), (i = Iu(e, t, n, r)), i === null && Pa(e, t, r, Bs, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pa(e, t, r, null, n);
  }
}
var Bs = null;
function Iu(e, t, n, r) {
  if (((Bs = null), (e = Fc(r)), (e = Gn(e)), e !== null))
    if (((t = dr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bs = e), null;
}
function Rm(e) {
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
      switch (x1()) {
        case Bc:
          return 1;
        case hm:
          return 4;
        case Us:
        case k1:
          return 16;
        case mm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var En = null,
  Kc = null,
  gs = null;
function xm() {
  if (gs) return gs;
  var e,
    t = Kc,
    n = t.length,
    r,
    o = "value" in En ? En.value : En.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (gs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ki() {
  return !0;
}
function Cd() {
  return !1;
}
function St(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ki : Cd),
      (this.isPropagationStopped = Cd),
      this
    );
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ki));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ki));
      },
      persist: function () {},
      isPersistent: Ki,
    }),
    t
  );
}
var so = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Gc = St(so),
  Ri = Ne({}, so, { view: 0, detail: 0 }),
  M1 = St(Ri),
  Ea,
  Ra,
  xo,
  yl = Ne({}, Ri, {
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
    getModifierState: Qc,
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
        : (e !== xo &&
            (xo && e.type === "mousemove"
              ? ((Ea = e.screenX - xo.screenX), (Ra = e.screenY - xo.screenY))
              : (Ra = Ea = 0),
            (xo = e)),
          Ea);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ra;
    },
  }),
  Nd = St(yl),
  U1 = Ne({}, yl, { dataTransfer: 0 }),
  z1 = St(U1),
  F1 = Ne({}, Ri, { relatedTarget: 0 }),
  xa = St(F1),
  B1 = Ne({}, so, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  V1 = St(B1),
  W1 = Ne({}, so, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  H1 = St(W1),
  K1 = Ne({}, so, { data: 0 }),
  Ad = St(K1),
  G1 = {
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
  Q1 = {
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
  Y1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function q1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Y1[e]) ? !!t[e] : !1;
}
function Qc() {
  return q1;
}
var J1 = Ne({}, Ri, {
    key: function (e) {
      if (e.key) {
        var t = G1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Q1[e.keyCode] || "Unidentified"
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
    getModifierState: Qc,
    charCode: function (e) {
      return e.type === "keypress" ? ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? ys(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Z1 = St(J1),
  X1 = Ne({}, yl, {
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
  Ld = St(X1),
  eS = Ne({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qc,
  }),
  tS = St(eS),
  nS = Ne({}, so, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rS = St(nS),
  oS = Ne({}, yl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  iS = St(oS),
  sS = [9, 13, 27, 32],
  Yc = an && "CompositionEvent" in window,
  Vo = null;
an && "documentMode" in document && (Vo = document.documentMode);
var lS = an && "TextEvent" in window && !Vo,
  km = an && (!Yc || (Vo && 8 < Vo && 11 >= Vo)),
  Pd = " ",
  Id = !1;
function Tm(e, t) {
  switch (e) {
    case "keyup":
      return sS.indexOf(t.keyCode) !== -1;
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
function Cm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xr = !1;
function aS(e, t) {
  switch (e) {
    case "compositionend":
      return Cm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Id = !0), Pd);
    case "textInput":
      return (e = t.data), e === Pd && Id ? null : e;
    default:
      return null;
  }
}
function uS(e, t) {
  if (xr) return e === "compositionend" || (!Yc && Tm(e, t)) ? ((e = xm()), (gs = Kc = En = null), (xr = !1), e) : null;
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
      return km && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cS = {
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
function $d(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cS[e.type] : t === "textarea";
}
function Nm(e, t, n, r) {
  im(r),
    (t = Vs(t, "onChange")),
    0 < t.length && ((n = new Gc("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Wo = null,
  si = null;
function fS(e) {
  Um(e, 0);
}
function Sl(e) {
  var t = Cr(e);
  if (Zh(t)) return e;
}
function dS(e, t) {
  if (e === "change") return t;
}
var Am = !1;
if (an) {
  var ka;
  if (an) {
    var Ta = "oninput" in document;
    if (!Ta) {
      var Od = document.createElement("div");
      Od.setAttribute("oninput", "return;"), (Ta = typeof Od.oninput == "function");
    }
    ka = Ta;
  } else ka = !1;
  Am = ka && (!document.documentMode || 9 < document.documentMode);
}
function jd() {
  Wo && (Wo.detachEvent("onpropertychange", Lm), (si = Wo = null));
}
function Lm(e) {
  if (e.propertyName === "value" && Sl(si)) {
    var t = [];
    Nm(t, si, e, Fc(e)), um(fS, t);
  }
}
function pS(e, t, n) {
  e === "focusin" ? (jd(), (Wo = t), (si = n), Wo.attachEvent("onpropertychange", Lm)) : e === "focusout" && jd();
}
function hS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(si);
}
function mS(e, t) {
  if (e === "click") return Sl(t);
}
function vS(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function gS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ht = typeof Object.is == "function" ? Object.is : gS;
function li(e, t) {
  if (Ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!hu.call(t, o) || !Ht(e[o], t[o])) return !1;
  }
  return !0;
}
function bd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dd(e, t) {
  var n = bd(e);
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
    n = bd(n);
  }
}
function Pm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Pm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Im() {
  for (var e = window, t = bs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bs(e.document);
  }
  return t;
}
function qc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function yS(e) {
  var t = Im(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Pm(n.ownerDocument.documentElement, n)) {
    if (r !== null && qc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Dd(n, i));
        var s = Dd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var SS = an && "documentMode" in document && 11 >= document.documentMode,
  kr = null,
  $u = null,
  Ho = null,
  Ou = !1;
function Md(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ou ||
    kr == null ||
    kr !== bs(r) ||
    ((r = kr),
    "selectionStart" in r && qc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ho && li(Ho, r)) ||
      ((Ho = r),
      (r = Vs($u, "onSelect")),
      0 < r.length &&
        ((t = new Gc("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = kr))));
}
function Gi(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Tr = {
    animationend: Gi("Animation", "AnimationEnd"),
    animationiteration: Gi("Animation", "AnimationIteration"),
    animationstart: Gi("Animation", "AnimationStart"),
    transitionend: Gi("Transition", "TransitionEnd"),
  },
  Ca = {},
  $m = {};
an &&
  (($m = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tr.animationend.animation, delete Tr.animationiteration.animation, delete Tr.animationstart.animation),
  "TransitionEvent" in window || delete Tr.transitionend.transition);
function wl(e) {
  if (Ca[e]) return Ca[e];
  if (!Tr[e]) return e;
  var t = Tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $m) return (Ca[e] = t[n]);
  return e;
}
var Om = wl("animationend"),
  jm = wl("animationiteration"),
  bm = wl("animationstart"),
  Dm = wl("transitionend"),
  Mm = new Map(),
  Ud =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dn(e, t) {
  Mm.set(e, t), fr(t, [e]);
}
for (var Na = 0; Na < Ud.length; Na++) {
  var Aa = Ud[Na],
    wS = Aa.toLowerCase(),
    _S = Aa[0].toUpperCase() + Aa.slice(1);
  Dn(wS, "on" + _S);
}
Dn(Om, "onAnimationEnd");
Dn(jm, "onAnimationIteration");
Dn(bm, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(Dm, "onTransitionEnd");
Br("onMouseEnter", ["mouseout", "mouseover"]);
Br("onMouseLeave", ["mouseout", "mouseover"]);
Br("onPointerEnter", ["pointerout", "pointerover"]);
Br("onPointerLeave", ["pointerout", "pointerover"]);
fr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ES = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function zd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), w1(r, t, void 0, e), (e.currentTarget = null);
}
function Um(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          zd(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== i && o.isPropagationStopped())
          )
            break e;
          zd(o, l, u), (i = a);
        }
    }
  }
  if (Ms) throw ((e = Au), (Ms = !1), (Au = null), e);
}
function ge(e, t) {
  var n = t[Uu];
  n === void 0 && (n = t[Uu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zm(t, e, 2, !1), n.add(r));
}
function La(e, t, n) {
  var r = 0;
  t && (r |= 4), zm(n, e, r, t);
}
var Qi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Qi]) {
    (e[Qi] = !0),
      Gh.forEach(function (n) {
        n !== "selectionchange" && (ES.has(n) || La(n, !1, e), La(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qi] || ((t[Qi] = !0), La("selectionchange", !1, t));
  }
}
function zm(e, t, n, r) {
  switch (Rm(t)) {
    case 1:
      var o = b1;
      break;
    case 4:
      o = D1;
      break;
    default:
      o = Hc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Nu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Pa(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Gn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  um(function () {
    var u = i,
      c = Fc(n),
      f = [];
    e: {
      var h = Mm.get(e);
      if (h !== void 0) {
        var y = Gc,
          v = e;
        switch (e) {
          case "keypress":
            if (ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Z1;
            break;
          case "focusin":
            (v = "focus"), (y = xa);
            break;
          case "focusout":
            (v = "blur"), (y = xa);
            break;
          case "beforeblur":
          case "afterblur":
            y = xa;
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
            y = Nd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = z1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = tS;
            break;
          case Om:
          case jm:
          case bm:
            y = V1;
            break;
          case Dm:
            y = rS;
            break;
          case "scroll":
            y = M1;
            break;
          case "wheel":
            y = iS;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = H1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ld;
        }
        var S = (t & 4) !== 0,
          T = !S && e === "scroll",
          m = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var d = u, p; d !== null; ) {
          p = d;
          var R = p.stateNode;
          if (
            (p.tag === 5 && R !== null && ((p = R), m !== null && ((R = ni(d, m)), R != null && S.push(ui(d, R, p)))),
            T)
          )
            break;
          d = d.return;
        }
        0 < S.length && ((h = new y(h, v, null, n, c)), f.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h && n !== Tu && (v = n.relatedTarget || n.fromElement) && (Gn(v) || v[un]))
        )
          break e;
        if (
          (y || h) &&
          ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? Gn(v) : null),
              v !== null && ((T = dr(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((S = Nd),
            (R = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Ld), (R = "onPointerLeave"), (m = "onPointerEnter"), (d = "pointer")),
            (T = y == null ? h : Cr(y)),
            (p = v == null ? h : Cr(v)),
            (h = new S(R, d + "leave", y, n, c)),
            (h.target = T),
            (h.relatedTarget = p),
            (R = null),
            Gn(c) === u && ((S = new S(m, d + "enter", v, n, c)), (S.target = p), (S.relatedTarget = T), (R = S)),
            (T = R),
            y && v)
          )
            t: {
              for (S = y, m = v, d = 0, p = S; p; p = vr(p)) d++;
              for (p = 0, R = m; R; R = vr(R)) p++;
              for (; 0 < d - p; ) (S = vr(S)), d--;
              for (; 0 < p - d; ) (m = vr(m)), p--;
              for (; d--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = vr(S)), (m = vr(m));
              }
              S = null;
            }
          else S = null;
          y !== null && Fd(f, h, y, S, !1), v !== null && T !== null && Fd(f, T, v, S, !0);
        }
      }
      e: {
        if (
          ((h = u ? Cr(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var N = dS;
        else if ($d(h))
          if (Am) N = vS;
          else {
            N = hS;
            var C = pS;
          }
        else
          (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = mS);
        if (N && (N = N(e, u))) {
          Nm(f, N, n, c);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && _u(h, "number", h.value);
      }
      switch (((C = u ? Cr(u) : window), e)) {
        case "focusin":
          ($d(C) || C.contentEditable === "true") && ((kr = C), ($u = u), (Ho = null));
          break;
        case "focusout":
          Ho = $u = kr = null;
          break;
        case "mousedown":
          Ou = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ou = !1), Md(f, n, c);
          break;
        case "selectionchange":
          if (SS) break;
        case "keydown":
        case "keyup":
          Md(f, n, c);
      }
      var k;
      if (Yc)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        xr ? Tm(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (km &&
          n.locale !== "ko" &&
          (xr || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && xr && (k = xm())
            : ((En = c), (Kc = "value" in En ? En.value : En.textContent), (xr = !0))),
        (C = Vs(u, $)),
        0 < C.length &&
          (($ = new Ad($, e, null, n, c)),
          f.push({ event: $, listeners: C }),
          k ? ($.data = k) : ((k = Cm(n)), k !== null && ($.data = k)))),
        (k = lS ? aS(e, n) : uS(e, n)) &&
          ((u = Vs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ad("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Um(f, t);
  });
}
function ui(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = ni(e, n)), i != null && r.unshift(ui(e, i, o)), (i = ni(e, t)), i != null && r.push(ui(e, i, o))),
      (e = e.return);
  }
  return r;
}
function vr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = ni(n, i)), a != null && s.unshift(ui(n, a, l)))
        : o || ((a = ni(n, i)), a != null && s.push(ui(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var RS = /\r\n?/g,
  xS = /\u0000|\uFFFD/g;
function Bd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      RS,
      `
`
    )
    .replace(xS, "");
}
function Yi(e, t, n) {
  if (((t = Bd(t)), Bd(e) !== t && n)) throw Error(L(425));
}
function Ws() {}
var ju = null,
  bu = null;
function Du(e, t) {
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
var Mu = typeof setTimeout == "function" ? setTimeout : void 0,
  kS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vd = typeof Promise == "function" ? Promise : void 0,
  TS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vd < "u"
        ? function (e) {
            return Vd.resolve(null).then(e).catch(CS);
          }
        : Mu;
function CS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ia(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ii(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ii(t);
}
function An(e) {
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
function Wd(e) {
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
var lo = Math.random().toString(36).slice(2),
  qt = "__reactFiber$" + lo,
  ci = "__reactProps$" + lo,
  un = "__reactContainer$" + lo,
  Uu = "__reactEvents$" + lo,
  NS = "__reactListeners$" + lo,
  AS = "__reactHandles$" + lo;
function Gn(e) {
  var t = e[qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[qt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Wd(e); e !== null; ) {
          if ((n = e[qt])) return n;
          e = Wd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xi(e) {
  return (e = e[qt] || e[un]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Cr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function _l(e) {
  return e[ci] || null;
}
var zu = [],
  Nr = -1;
function Mn(e) {
  return { current: e };
}
function we(e) {
  0 > Nr || ((e.current = zu[Nr]), (zu[Nr] = null), Nr--);
}
function ve(e, t) {
  Nr++, (zu[Nr] = e.current), (e.current = t);
}
var jn = {},
  Ye = Mn(jn),
  st = Mn(!1),
  rr = jn;
function Vr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jn;
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
function lt(e) {
  return (e = e.childContextTypes), e != null;
}
function Hs() {
  we(st), we(Ye);
}
function Hd(e, t, n) {
  if (Ye.current !== jn) throw Error(L(168));
  ve(Ye, t), ve(st, n);
}
function Fm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, p1(e) || "Unknown", o));
  return Ne({}, n, r);
}
function Ks(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (rr = Ye.current),
    ve(Ye, e),
    ve(st, st.current),
    !0
  );
}
function Kd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? ((e = Fm(e, t, rr)), (r.__reactInternalMemoizedMergedChildContext = e), we(st), we(Ye), ve(Ye, e)) : we(st),
    ve(st, n);
}
var rn = null,
  El = !1,
  $a = !1;
function Bm(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function LS(e) {
  (El = !0), Bm(e);
}
function Un() {
  if (!$a && rn !== null) {
    $a = !0;
    var e = 0,
      t = fe;
    try {
      var n = rn;
      for (fe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rn = null), (El = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), pm(Bc, Un), o);
    } finally {
      (fe = t), ($a = !1);
    }
  }
  return null;
}
var Ar = [],
  Lr = 0,
  Gs = null,
  Qs = 0,
  Rt = [],
  xt = 0,
  or = null,
  on = 1,
  sn = "";
function Wn(e, t) {
  (Ar[Lr++] = Qs), (Ar[Lr++] = Gs), (Gs = e), (Qs = t);
}
function Vm(e, t, n) {
  (Rt[xt++] = on), (Rt[xt++] = sn), (Rt[xt++] = or), (or = e);
  var r = on;
  e = sn;
  var o = 32 - Ft(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ft(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (on = (1 << (32 - Ft(t) + o)) | (n << o) | r),
      (sn = i + e);
  } else (on = (1 << i) | (n << o) | r), (sn = e);
}
function Jc(e) {
  e.return !== null && (Wn(e, 1), Vm(e, 1, 0));
}
function Zc(e) {
  for (; e === Gs; ) (Gs = Ar[--Lr]), (Ar[Lr] = null), (Qs = Ar[--Lr]), (Ar[Lr] = null);
  for (; e === or; )
    (or = Rt[--xt]), (Rt[xt] = null), (sn = Rt[--xt]), (Rt[xt] = null), (on = Rt[--xt]), (Rt[xt] = null);
}
var vt = null,
  mt = null,
  Re = !1,
  zt = null;
function Wm(e, t) {
  var n = kt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (mt = An(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = or !== null ? { id: on, overflow: sn } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vt = e),
            (mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bu(e) {
  if (Re) {
    var t = mt;
    if (t) {
      var n = t;
      if (!Gd(e, t)) {
        if (Fu(e)) throw Error(L(418));
        t = An(n.nextSibling);
        var r = vt;
        t && Gd(e, t) ? Wm(r, n) : ((e.flags = (e.flags & -4097) | 2), (Re = !1), (vt = e));
      }
    } else {
      if (Fu(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (Re = !1), (vt = e);
    }
  }
}
function Qd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  vt = e;
}
function qi(e) {
  if (e !== vt) return !1;
  if (!Re) return Qd(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Du(e.type, e.memoizedProps))),
    t && (t = mt))
  ) {
    if (Fu(e)) throw (Hm(), Error(L(418)));
    for (; t; ) Wm(e, t), (t = An(t.nextSibling));
  }
  if ((Qd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mt = An(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mt = null;
    }
  } else mt = vt ? An(e.stateNode.nextSibling) : null;
  return !0;
}
function Hm() {
  for (var e = mt; e; ) e = An(e.nextSibling);
}
function Wr() {
  (mt = vt = null), (Re = !1);
}
function Xc(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var PS = dn.ReactCurrentBatchConfig;
function ko(e, t, n) {
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
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Yd(e) {
  var t = e._init;
  return t(e._payload);
}
function Km(e) {
  function t(m, d) {
    if (e) {
      var p = m.deletions;
      p === null ? ((m.deletions = [d]), (m.flags |= 16)) : p.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function o(m, d) {
    return (m = $n(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, d, p) {
    return (
      (m.index = p),
      e
        ? ((p = m.alternate), p !== null ? ((p = p.index), p < d ? ((m.flags |= 2), d) : p) : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, d, p, R) {
    return d === null || d.tag !== 6 ? ((d = za(p, m.mode, R)), (d.return = m), d) : ((d = o(d, p)), (d.return = m), d);
  }
  function a(m, d, p, R) {
    var N = p.type;
    return N === Rr
      ? c(m, d, p.props.children, R, p.key)
      : d !== null &&
          (d.elementType === N || (typeof N == "object" && N !== null && N.$$typeof === gn && Yd(N) === d.type))
        ? ((R = o(d, p.props)), (R.ref = ko(m, d, p)), (R.return = m), R)
        : ((R = ks(p.type, p.key, p.props, null, m.mode, R)), (R.ref = ko(m, d, p)), (R.return = m), R);
  }
  function u(m, d, p, R) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== p.containerInfo ||
      d.stateNode.implementation !== p.implementation
      ? ((d = Fa(p, m.mode, R)), (d.return = m), d)
      : ((d = o(d, p.children || [])), (d.return = m), d);
  }
  function c(m, d, p, R, N) {
    return d === null || d.tag !== 7
      ? ((d = Zn(p, m.mode, R, N)), (d.return = m), d)
      : ((d = o(d, p)), (d.return = m), d);
  }
  function f(m, d, p) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = za("" + d, m.mode, p)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case zi:
          return (p = ks(d.type, d.key, d.props, null, m.mode, p)), (p.ref = ko(m, null, d)), (p.return = m), p;
        case Er:
          return (d = Fa(d, m.mode, p)), (d.return = m), d;
        case gn:
          var R = d._init;
          return f(m, R(d._payload), p);
      }
      if (bo(d) || wo(d)) return (d = Zn(d, m.mode, p, null)), (d.return = m), d;
      Ji(m, d);
    }
    return null;
  }
  function h(m, d, p, R) {
    var N = d !== null ? d.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number") return N !== null ? null : l(m, d, "" + p, R);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zi:
          return p.key === N ? a(m, d, p, R) : null;
        case Er:
          return p.key === N ? u(m, d, p, R) : null;
        case gn:
          return (N = p._init), h(m, d, N(p._payload), R);
      }
      if (bo(p) || wo(p)) return N !== null ? null : c(m, d, p, R, null);
      Ji(m, p);
    }
    return null;
  }
  function y(m, d, p, R, N) {
    if ((typeof R == "string" && R !== "") || typeof R == "number") return (m = m.get(p) || null), l(d, m, "" + R, N);
    if (typeof R == "object" && R !== null) {
      switch (R.$$typeof) {
        case zi:
          return (m = m.get(R.key === null ? p : R.key) || null), a(d, m, R, N);
        case Er:
          return (m = m.get(R.key === null ? p : R.key) || null), u(d, m, R, N);
        case gn:
          var C = R._init;
          return y(m, d, p, C(R._payload), N);
      }
      if (bo(R) || wo(R)) return (m = m.get(p) || null), c(d, m, R, N, null);
      Ji(d, R);
    }
    return null;
  }
  function v(m, d, p, R) {
    for (var N = null, C = null, k = d, $ = (d = 0), re = null; k !== null && $ < p.length; $++) {
      k.index > $ ? ((re = k), (k = null)) : (re = k.sibling);
      var D = h(m, k, p[$], R);
      if (D === null) {
        k === null && (k = re);
        break;
      }
      e && k && D.alternate === null && t(m, k),
        (d = i(D, d, $)),
        C === null ? (N = D) : (C.sibling = D),
        (C = D),
        (k = re);
    }
    if ($ === p.length) return n(m, k), Re && Wn(m, $), N;
    if (k === null) {
      for (; $ < p.length; $++)
        (k = f(m, p[$], R)), k !== null && ((d = i(k, d, $)), C === null ? (N = k) : (C.sibling = k), (C = k));
      return Re && Wn(m, $), N;
    }
    for (k = r(m, k); $ < p.length; $++)
      (re = y(k, m, $, p[$], R)),
        re !== null &&
          (e && re.alternate !== null && k.delete(re.key === null ? $ : re.key),
          (d = i(re, d, $)),
          C === null ? (N = re) : (C.sibling = re),
          (C = re));
    return (
      e &&
        k.forEach(function (de) {
          return t(m, de);
        }),
      Re && Wn(m, $),
      N
    );
  }
  function S(m, d, p, R) {
    var N = wo(p);
    if (typeof N != "function") throw Error(L(150));
    if (((p = N.call(p)), p == null)) throw Error(L(151));
    for (var C = (N = null), k = d, $ = (d = 0), re = null, D = p.next(); k !== null && !D.done; $++, D = p.next()) {
      k.index > $ ? ((re = k), (k = null)) : (re = k.sibling);
      var de = h(m, k, D.value, R);
      if (de === null) {
        k === null && (k = re);
        break;
      }
      e && k && de.alternate === null && t(m, k),
        (d = i(de, d, $)),
        C === null ? (N = de) : (C.sibling = de),
        (C = de),
        (k = re);
    }
    if (D.done) return n(m, k), Re && Wn(m, $), N;
    if (k === null) {
      for (; !D.done; $++, D = p.next())
        (D = f(m, D.value, R)), D !== null && ((d = i(D, d, $)), C === null ? (N = D) : (C.sibling = D), (C = D));
      return Re && Wn(m, $), N;
    }
    for (k = r(m, k); !D.done; $++, D = p.next())
      (D = y(k, m, $, D.value, R)),
        D !== null &&
          (e && D.alternate !== null && k.delete(D.key === null ? $ : D.key),
          (d = i(D, d, $)),
          C === null ? (N = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        k.forEach(function (et) {
          return t(m, et);
        }),
      Re && Wn(m, $),
      N
    );
  }
  function T(m, d, p, R) {
    if (
      (typeof p == "object" && p !== null && p.type === Rr && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case zi:
          e: {
            for (var N = p.key, C = d; C !== null; ) {
              if (C.key === N) {
                if (((N = p.type), N === Rr)) {
                  if (C.tag === 7) {
                    n(m, C.sibling), (d = o(C, p.props.children)), (d.return = m), (m = d);
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" && N !== null && N.$$typeof === gn && Yd(N) === C.type)
                ) {
                  n(m, C.sibling), (d = o(C, p.props)), (d.ref = ko(m, C, p)), (d.return = m), (m = d);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            p.type === Rr
              ? ((d = Zn(p.props.children, m.mode, R, p.key)), (d.return = m), (m = d))
              : ((R = ks(p.type, p.key, p.props, null, m.mode, R)), (R.ref = ko(m, d, p)), (R.return = m), (m = R));
          }
          return s(m);
        case Er:
          e: {
            for (C = p.key; d !== null; ) {
              if (d.key === C)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === p.containerInfo &&
                  d.stateNode.implementation === p.implementation
                ) {
                  n(m, d.sibling), (d = o(d, p.children || [])), (d.return = m), (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Fa(p, m.mode, R)), (d.return = m), (m = d);
          }
          return s(m);
        case gn:
          return (C = p._init), T(m, d, C(p._payload), R);
      }
      if (bo(p)) return v(m, d, p, R);
      if (wo(p)) return S(m, d, p, R);
      Ji(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = o(d, p)), (d.return = m), (m = d))
          : (n(m, d), (d = za(p, m.mode, R)), (d.return = m), (m = d)),
        s(m))
      : n(m, d);
  }
  return T;
}
var Hr = Km(!0),
  Gm = Km(!1),
  Ys = Mn(null),
  qs = null,
  Pr = null,
  ef = null;
function tf() {
  ef = Pr = qs = null;
}
function nf(e) {
  var t = Ys.current;
  we(Ys), (e._currentValue = t);
}
function Vu(e, t, n) {
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
function Ur(e, t) {
  (qs = e),
    (ef = Pr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (rt = !0), (e.firstContext = null));
}
function At(e) {
  var t = e._currentValue;
  if (ef !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Pr === null)) {
      if (qs === null) throw Error(L(308));
      (Pr = e), (qs.dependencies = { lanes: 0, firstContext: e });
    } else Pr = Pr.next = e;
  return t;
}
var Qn = null;
function rf(e) {
  Qn === null ? (Qn = [e]) : Qn.push(e);
}
function Qm(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), rf(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), cn(e, r);
}
function cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yn = !1;
function of(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ym(e, t) {
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
function ln(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), le & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), cn(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), rf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    cn(e, n)
  );
}
function Ss(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vc(e, n);
  }
}
function qd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Js(e, t, n, r) {
  var o = e.updateQueue;
  yn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        y = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next = { eventTime: y, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var v = e,
            S = l;
          switch (((h = t), (y = n), S.tag)) {
            case 1:
              if (((v = S.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = S.payload), (h = typeof v == "function" ? v.call(y, f, h) : v), h == null)) break e;
              f = Ne({}, f, h);
              break e;
            case 2:
              yn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (h = o.effects), h === null ? (o.effects = [l]) : h.push(l));
      } else
        (y = { eventTime: y, lane: h, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          c === null ? ((u = c = y), (a = f)) : (c = c.next = y),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l), (l = h.next), (h.next = null), (o.lastBaseUpdate = h), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (sr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Jd(e, t, n) {
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
var ki = {},
  Zt = Mn(ki),
  fi = Mn(ki),
  di = Mn(ki);
function Yn(e) {
  if (e === ki) throw Error(L(174));
  return e;
}
function sf(e, t) {
  switch ((ve(di, t), ve(fi, e), ve(Zt, ki), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ru(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ru(t, e));
  }
  we(Zt), ve(Zt, t);
}
function Kr() {
  we(Zt), we(fi), we(di);
}
function qm(e) {
  Yn(di.current);
  var t = Yn(Zt.current),
    n = Ru(t, e.type);
  t !== n && (ve(fi, e), ve(Zt, n));
}
function lf(e) {
  fi.current === e && (we(Zt), we(fi));
}
var Te = Mn(0);
function Zs(e) {
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
var Oa = [];
function af() {
  for (var e = 0; e < Oa.length; e++) Oa[e]._workInProgressVersionPrimary = null;
  Oa.length = 0;
}
var ws = dn.ReactCurrentDispatcher,
  ja = dn.ReactCurrentBatchConfig,
  ir = 0,
  Ce = null,
  $e = null,
  Ue = null,
  Xs = !1,
  Ko = !1,
  pi = 0,
  IS = 0;
function Ke() {
  throw Error(L(321));
}
function uf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
  return !0;
}
function cf(e, t, n, r, o, i) {
  if (
    ((ir = i),
    (Ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ws.current = e === null || e.memoizedState === null ? bS : DS),
    (e = n(r, o)),
    Ko)
  ) {
    i = 0;
    do {
      if (((Ko = !1), (pi = 0), 25 <= i)) throw Error(L(301));
      (i += 1), (Ue = $e = null), (t.updateQueue = null), (ws.current = MS), (e = n(r, o));
    } while (Ko);
  }
  if (((ws.current = el), (t = $e !== null && $e.next !== null), (ir = 0), (Ue = $e = Ce = null), (Xs = !1), t))
    throw Error(L(300));
  return e;
}
function ff() {
  var e = pi !== 0;
  return (pi = 0), e;
}
function Qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function Lt() {
  if ($e === null) {
    var e = Ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = Ue === null ? Ce.memoizedState : Ue.next;
  if (t !== null) (Ue = t), ($e = e);
  else {
    if (e === null) throw Error(L(310));
    ($e = e),
      (e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      Ue === null ? (Ce.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function hi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ba(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = $e,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((ir & c) === c)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f), (Ce.lanes |= c), (sr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      Ht(r, t.memoizedState) || (rt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ce.lanes |= i), (sr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Da(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Ht(i, t.memoizedState) || (rt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Jm() {}
function Zm(e, t) {
  var n = Ce,
    r = Lt(),
    o = t(),
    i = !Ht(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (rt = !0)),
    (r = r.queue),
    df(tv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), mi(9, ev.bind(null, n, r, o, t), void 0, null), Fe === null)) throw Error(L(349));
    ir & 30 || Xm(n, t, o);
  }
  return o;
}
function Xm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Ce.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ev(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), nv(t) && rv(e);
}
function tv(e, t, n) {
  return n(function () {
    nv(t) && rv(e);
  });
}
function nv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ht(e, n);
  } catch {
    return !0;
  }
}
function rv(e) {
  var t = cn(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function Zd(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hi, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = jS.bind(null, Ce, e)),
    [t.memoizedState, e]
  );
}
function mi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Ce.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ov() {
  return Lt().memoizedState;
}
function _s(e, t, n, r) {
  var o = Qt();
  (Ce.flags |= e), (o.memoizedState = mi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rl(e, t, n, r) {
  var o = Lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if ($e !== null) {
    var s = $e.memoizedState;
    if (((i = s.destroy), r !== null && uf(r, s.deps))) {
      o.memoizedState = mi(t, n, i, r);
      return;
    }
  }
  (Ce.flags |= e), (o.memoizedState = mi(1 | t, n, i, r));
}
function Xd(e, t) {
  return _s(8390656, 8, e, t);
}
function df(e, t) {
  return Rl(2048, 8, e, t);
}
function iv(e, t) {
  return Rl(4, 2, e, t);
}
function sv(e, t) {
  return Rl(4, 4, e, t);
}
function lv(e, t) {
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
function av(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Rl(4, 4, lv.bind(null, t, e), n);
}
function pf() {}
function uv(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uf(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function cv(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uf(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fv(e, t, n) {
  return ir & 21
    ? (Ht(n, t) || ((n = vm()), (Ce.lanes |= n), (sr |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (rt = !0)), (e.memoizedState = n));
}
function $S(e, t) {
  var n = fe;
  (fe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ja.transition;
  ja.transition = {};
  try {
    e(!1), t();
  } finally {
    (fe = n), (ja.transition = r);
  }
}
function dv() {
  return Lt().memoizedState;
}
function OS(e, t, n) {
  var r = In(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), pv(e))) hv(t, n);
  else if (((n = Qm(e, t, n, r)), n !== null)) {
    var o = Je();
    Bt(n, e, r, o), mv(n, t, r);
  }
}
function jS(e, t, n) {
  var r = In(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pv(e)) hv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ht(l, s))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), rf(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qm(e, t, o, r)), n !== null && ((o = Je()), Bt(n, e, r, o), mv(n, t, r));
  }
}
function pv(e) {
  var t = e.alternate;
  return e === Ce || (t !== null && t === Ce);
}
function hv(e, t) {
  Ko = Xs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function mv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vc(e, n);
  }
}
var el = {
    readContext: At,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  bS = {
    readContext: At,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: At,
    useEffect: Xd,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), _s(4194308, 4, lv.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return _s(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _s(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Qt();
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
        (e = e.dispatch = OS.bind(null, Ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Zd,
    useDebugValue: pf,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Zd(!1),
        t = e[0];
      return (e = $S.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ce,
        o = Qt();
      if (Re) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Fe === null)) throw Error(L(349));
        ir & 30 || Xm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Xd(tv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        mi(9, ev.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = Fe.identifierPrefix;
      if (Re) {
        var n = sn,
          r = on;
        (n = (r & ~(1 << (32 - Ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = IS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  DS = {
    readContext: At,
    useCallback: uv,
    useContext: At,
    useEffect: df,
    useImperativeHandle: av,
    useInsertionEffect: iv,
    useLayoutEffect: sv,
    useMemo: cv,
    useReducer: ba,
    useRef: ov,
    useState: function () {
      return ba(hi);
    },
    useDebugValue: pf,
    useDeferredValue: function (e) {
      var t = Lt();
      return fv(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = ba(hi)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jm,
    useSyncExternalStore: Zm,
    useId: dv,
    unstable_isNewReconciler: !1,
  },
  MS = {
    readContext: At,
    useCallback: uv,
    useContext: At,
    useEffect: df,
    useImperativeHandle: av,
    useInsertionEffect: iv,
    useLayoutEffect: sv,
    useMemo: cv,
    useReducer: Da,
    useRef: ov,
    useState: function () {
      return Da(hi);
    },
    useDebugValue: pf,
    useDeferredValue: function (e) {
      var t = Lt();
      return $e === null ? (t.memoizedState = e) : fv(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = Da(hi)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Jm,
    useSyncExternalStore: Zm,
    useId: dv,
    unstable_isNewReconciler: !1,
  };
function Mt(e, t) {
  if (e && e.defaultProps) {
    (t = Ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      o = In(e),
      i = ln(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = Ln(e, i, o)), t !== null && (Bt(t, e, o, r), Ss(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      o = In(e),
      i = ln(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ln(e, i, o)),
      t !== null && (Bt(t, e, o, r), Ss(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Je(),
      r = In(e),
      o = ln(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = Ln(e, o, r)), t !== null && (Bt(t, e, r, n), Ss(t, e, r));
  },
};
function ep(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !li(n, r) || !li(o, i)
        : !0
  );
}
function vv(e, t, n) {
  var r = !1,
    o = jn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = At(i))
      : ((o = lt(t) ? rr : Ye.current), (r = t.contextTypes), (i = (r = r != null) ? Vr(e, o) : jn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function tp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function Hu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), of(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (o.context = At(i)) : ((i = lt(t) ? rr : Ye.current), (o.context = Vr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Wu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
      t !== o.state && xl.enqueueReplaceState(o, o.state, null),
      Js(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += d1(r)), (r = r.return);
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
function Ma(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ku(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var US = typeof WeakMap == "function" ? WeakMap : Map;
function gv(e, t, n) {
  (n = ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (nc = r)), Ku(e, t);
    }),
    n
  );
}
function yv(e, t, n) {
  (n = ln(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ku(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ku(e, t), typeof r != "function" && (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function np(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new US();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = XS.bind(null, e, t, n)), t.then(e, e));
}
function rp(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function op(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = ln(-1, 1)), (t.tag = 2), Ln(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zS = dn.ReactCurrentOwner,
  rt = !1;
function qe(e, t, n, r) {
  t.child = e === null ? Gm(t, null, n, r) : Hr(t, e.child, n, r);
}
function ip(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ur(t, o),
    (r = cf(e, t, n, r, i, o)),
    (n = ff()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), fn(e, t, o))
      : (Re && n && Jc(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  );
}
function sp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !_f(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sv(e, t, i, r, o))
      : ((e = ks(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : li), n(s, r) && e.ref === t.ref)) return fn(e, t, o);
  }
  return (t.flags |= 1), (e = $n(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Sv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (li(i, r) && e.ref === t.ref)
      if (((rt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (rt = !0);
      else return (t.lanes = e.lanes), fn(e, t, o);
  }
  return Gu(e, t, n, r, o);
}
function wv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ve($r, ht), (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ve($r, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ve($r, ht),
        (ht |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ve($r, ht), (ht |= r);
  return qe(e, t, o, n), t.child;
}
function _v(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Gu(e, t, n, r, o) {
  var i = lt(n) ? rr : Ye.current;
  return (
    (i = Vr(t, i)),
    Ur(t, o),
    (n = cf(e, t, n, r, i, o)),
    (r = ff()),
    e !== null && !rt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), fn(e, t, o))
      : (Re && r && Jc(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  );
}
function lp(e, t, n, r, o) {
  if (lt(n)) {
    var i = !0;
    Ks(t);
  } else i = !1;
  if ((Ur(t, o), t.stateNode === null)) Es(e, t), vv(t, n, r), Hu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = At(u)) : ((u = lt(n) ? rr : Ye.current), (u = Vr(t, u)));
    var c = n.getDerivedStateFromProps,
      f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && tp(t, s, r, u)),
      (yn = !1);
    var h = t.memoizedState;
    (s.state = h),
      Js(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || st.current || yn
        ? (typeof c == "function" && (Wu(t, n, c, r), (a = t.memoizedState)),
          (l = yn || ep(t, n, l, r, h, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      Ym(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Mt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null ? (a = At(a)) : ((a = lt(n) ? rr : Ye.current), (a = Vr(t, a)));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && tp(t, s, r, a)),
      (yn = !1),
      (h = t.memoizedState),
      (s.state = h),
      Js(t, r, s, o);
    var v = t.memoizedState;
    l !== f || h !== v || st.current || yn
      ? (typeof y == "function" && (Wu(t, n, y, r), (v = t.memoizedState)),
        (u = yn || ep(t, n, u, r, h, v, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qu(e, t, n, r, i, o);
}
function Qu(e, t, n, r, o, i) {
  _v(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Kd(t, n, !1), fn(e, t, i);
  (r = t.stateNode), (zS.current = t);
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = Hr(t, e.child, null, i)), (t.child = Hr(t, null, l, i))) : qe(e, t, l, i),
    (t.memoizedState = r.state),
    o && Kd(t, n, !0),
    t.child
  );
}
function Ev(e) {
  var t = e.stateNode;
  t.pendingContext ? Hd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hd(e, t.context, !1),
    sf(e, t.containerInfo);
}
function ap(e, t, n, r, o) {
  return Wr(), Xc(o), (t.flags |= 256), qe(e, t, n, r), t.child;
}
var Yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function qu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rv(e, t, n) {
  var r = t.pendingProps,
    o = Te.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ve(Te, o & 1),
    e === null)
  )
    return (
      Bu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = Cl(s, r, 0, null)),
              (e = Zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = qu(n)),
              (t.memoizedState = Yu),
              e)
            : hf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null))) return FS(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = $n(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = $n(l, i)) : ((i = Zn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? qu(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = $n(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hf(e, t) {
  return (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Zi(e, t, n, r) {
  return (
    r !== null && Xc(r),
    Hr(t, e.child, null, n),
    (e = hf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function FS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ma(Error(L(422)))), Zi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Cl({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Zn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Hr(t, e.child, null, s),
          (t.child.memoizedState = qu(s)),
          (t.memoizedState = Yu),
          i);
  if (!(t.mode & 1)) return Zi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(L(419))), (r = Ma(i, r, void 0)), Zi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), rt || l)) {
    if (((r = Fe), r !== null)) {
      switch (s & -s) {
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
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), cn(e, o), Bt(r, e, o, -1));
    }
    return wf(), (r = Ma(Error(L(421)))), Zi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = ew.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (mt = An(o.nextSibling)),
      (vt = t),
      (Re = !0),
      (zt = null),
      e !== null && ((Rt[xt++] = on), (Rt[xt++] = sn), (Rt[xt++] = or), (on = e.id), (sn = e.overflow), (or = t)),
      (t = hf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function up(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vu(e.return, t, n);
}
function Ua(e, t, n, r, o) {
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
function xv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((qe(e, t, r.children, n), (r = Te.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && up(e, n, t);
        else if (e.tag === 19) up(e, n, t);
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
  if ((ve(Te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Zs(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          Ua(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Zs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ua(t, !0, n, null, i);
        break;
      case "together":
        Ua(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Es(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (sr |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = $n(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = $n(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function BS(e, t, n) {
  switch (t.tag) {
    case 3:
      Ev(t), Wr();
      break;
    case 5:
      qm(t);
      break;
    case 1:
      lt(t.type) && Ks(t);
      break;
    case 4:
      sf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ve(Ys, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(Te, Te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Rv(e, t, n)
            : (ve(Te, Te.current & 1), (e = fn(e, t, n)), e !== null ? e.sibling : null);
      ve(Te, Te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ve(Te, Te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wv(e, t, n);
  }
  return fn(e, t, n);
}
var kv, Ju, Tv, Cv;
kv = function (e, t) {
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
Ju = function () {};
Tv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Yn(Zt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Su(e, o)), (r = Su(e, r)), (i = []);
        break;
      case "select":
        (o = Ne({}, o, { value: void 0 })), (r = Ne({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = Eu(e, o)), (r = Eu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ws);
    }
    xu(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ei.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((l = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
        if (u === "style")
          if (l) {
            for (s in l) !l.hasOwnProperty(s) || (a && a.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") || (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ei.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ge("scroll", e), i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function To(e, t) {
  if (!Re)
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
function Ge(e) {
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
function VS(e, t, n) {
  var r = t.pendingProps;
  switch ((Zc(t), t.tag)) {
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
      return Ge(t), null;
    case 1:
      return lt(t.type) && Hs(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kr(),
        we(st),
        we(Ye),
        af(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (ic(zt), (zt = null)))),
        Ju(e, t),
        Ge(t),
        null
      );
    case 5:
      lf(t);
      var o = Yn(di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tv(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ge(t), null;
        }
        if (((e = Yn(Zt.current)), qi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[qt] = t), (r[ci] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mo.length; o++) ge(Mo[o], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              yd(r, i), ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), ge("invalid", r);
              break;
            case "textarea":
              wd(r, i), ge("invalid", r);
          }
          xu(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 && Yi(r.textContent, l, e), (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 && Yi(r.textContent, l, e), (o = ["children", "" + l]))
                : ei.hasOwnProperty(s) && l != null && s === "onScroll" && ge("scroll", r);
            }
          switch (n) {
            case "input":
              Fi(r), Sd(r, i, !0);
              break;
            case "textarea":
              Fi(r), _d(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ws);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[qt] = t),
            (e[ci] = r),
            kv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ku(n, r)), n)) {
              case "dialog":
                ge("cancel", e), ge("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mo.length; o++) ge(Mo[o], e);
                o = r;
                break;
              case "source":
                ge("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", e), ge("load", e), (o = r);
                break;
              case "details":
                ge("toggle", e), (o = r);
                break;
              case "input":
                yd(e, r), (o = Su(e, r)), ge("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = Ne({}, r, { value: void 0 })), ge("invalid", e);
                break;
              case "textarea":
                wd(e, r), (o = Eu(e, r)), ge("invalid", e);
                break;
              default:
                o = r;
            }
            xu(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? om(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && nm(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && ti(e, a)
                        : typeof a == "number" && ti(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ei.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && ge("scroll", e)
                          : a != null && Dc(e, i, a, s));
              }
            switch (n) {
              case "input":
                Fi(e), Sd(e, r, !1);
                break;
              case "textarea":
                Fi(e), _d(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? jr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && jr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ws);
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
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) Cv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Yn(di.current)), Yn(Zt.current), qi(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[qt] = t), (i = r.nodeValue !== n) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[qt] = t), (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (we(Te), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && mt !== null && t.mode & 1 && !(t.flags & 128)) Hm(), Wr(), (t.flags |= 98560), (i = !1);
        else if (((i = qi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(L(317));
            i[qt] = t;
          } else Wr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (i = !1);
        } else zt !== null && (ic(zt), (zt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Te.current & 1 ? Oe === 0 && (Oe = 3) : wf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return Kr(), Ju(e, t), e === null && ai(t.stateNode.containerInfo), Ge(t), null;
    case 10:
      return nf(t.type._context), Ge(t), null;
    case 17:
      return lt(t.type) && Hs(), Ge(t), null;
    case 19:
      if ((we(Te), (i = t.memoizedState), i === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) To(i, !1);
        else {
          if (Oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Zs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    To(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return ve(Te, (Te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Le() > Qr && ((t.flags |= 128), (r = !0), To(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              To(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Re)
            )
              return Ge(t), null;
          } else
            2 * Le() - i.renderingStartTime > Qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), To(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Le()),
          (t.sibling = null),
          (n = Te.current),
          ve(Te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        Sf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ht & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function WS(e, t) {
  switch ((Zc(t), t.tag)) {
    case 1:
      return lt(t.type) && Hs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Kr(), we(st), we(Ye), af(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return lf(t), null;
    case 13:
      if ((we(Te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        Wr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return we(Te), null;
    case 4:
      return Kr(), null;
    case 10:
      return nf(t.type._context), null;
    case 22:
    case 23:
      return Sf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xi = !1,
  Qe = !1,
  HS = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function Ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else n.current = null;
}
function Zu(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var cp = !1;
function KS(e, t) {
  if (((ju = Fs), (e = Im()), qc(e))) {
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
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (h = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if ((h === n && ++u === o && (l = s), h === i && ++c === r && (a = s), (y = f.nextSibling) !== null))
                break;
              (f = h), (h = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bu = { focusedElem: e, selectionRange: n }, Fs = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var S = v.memoizedProps,
                    T = v.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Mt(t.type, S), T);
                  m.__reactInternalSnapshotBeforeUpdate = d;
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
        } catch (R) {
          Ae(t, t.return, R);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (v = cp), (cp = !1), v;
}
function Go(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Zu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function kl(e, t) {
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
function Xu(e) {
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
function Nv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Nv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[qt], delete t[ci], delete t[Uu], delete t[NS], delete t[AS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Av(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Av(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ec(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ws));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ec(e, t, n), e = e.sibling; e !== null; ) ec(e, t, n), (e = e.sibling);
}
function tc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tc(e, t, n), e = e.sibling; e !== null; ) tc(e, t, n), (e = e.sibling);
}
var Ve = null,
  Ut = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) Lv(e, t, n), (n = n.sibling);
}
function Lv(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Qe || Ir(n, t);
    case 6:
      var r = Ve,
        o = Ut;
      (Ve = null),
        hn(e, t, n),
        (Ve = r),
        (Ut = o),
        Ve !== null &&
          (Ut
            ? ((e = Ve), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Ut
          ? ((e = Ve), (n = n.stateNode), e.nodeType === 8 ? Ia(e.parentNode, n) : e.nodeType === 1 && Ia(e, n), ii(e))
          : Ia(Ve, n.stateNode));
      break;
    case 4:
      (r = Ve), (o = Ut), (Ve = n.stateNode.containerInfo), (Ut = !0), hn(e, t, n), (Ve = r), (Ut = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Qe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && Zu(n, t, s), (o = o.next);
        } while (o !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (!Qe && (Ir(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          Ae(n, t, l);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Qe = (r = Qe) || n.memoizedState !== null), hn(e, t, n), (Qe = r)) : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function dp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new HS()),
      t.forEach(function (r) {
        var o = tw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function bt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ve = l.stateNode), (Ut = !1);
              break e;
            case 3:
              (Ve = l.stateNode.containerInfo), (Ut = !0);
              break e;
            case 4:
              (Ve = l.stateNode.containerInfo), (Ut = !0);
              break e;
          }
          l = l.return;
        }
        if (Ve === null) throw Error(L(160));
        Lv(i, s, o), (Ve = null), (Ut = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ae(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pv(t, e), (t = t.sibling);
}
function Pv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((bt(t, e), Gt(e), r & 4)) {
        try {
          Go(3, e, e.return), kl(3, e);
        } catch (S) {
          Ae(e, e.return, S);
        }
        try {
          Go(5, e, e.return);
        } catch (S) {
          Ae(e, e.return, S);
        }
      }
      break;
    case 1:
      bt(t, e), Gt(e), r & 512 && n !== null && Ir(n, n.return);
      break;
    case 5:
      if ((bt(t, e), Gt(e), r & 512 && n !== null && Ir(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          ti(o, "");
        } catch (S) {
          Ae(e, e.return, S);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Xh(o, i), ku(l, s);
            var u = ku(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? om(o, f)
                : c === "dangerouslySetInnerHTML"
                  ? nm(o, f)
                  : c === "children"
                    ? ti(o, f)
                    : Dc(o, c, f, u);
            }
            switch (l) {
              case "input":
                wu(o, i);
                break;
              case "textarea":
                em(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? jr(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? jr(o, !!i.multiple, i.defaultValue, !0)
                      : jr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ci] = i;
          } catch (S) {
            Ae(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((bt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (S) {
          Ae(e, e.return, S);
        }
      }
      break;
    case 3:
      if ((bt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          ii(t.containerInfo);
        } catch (S) {
          Ae(e, e.return, S);
        }
      break;
    case 4:
      bt(t, e), Gt(e);
      break;
    case 13:
      bt(t, e),
        Gt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (gf = Le())),
        r & 4 && dp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Qe = (u = Qe) || c), bt(t, e), (Qe = u)) : bt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
          for (B = e, c = e.child; c !== null; ) {
            for (f = B = c; B !== null; ) {
              switch (((h = B), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Go(4, h, h.return);
                  break;
                case 1:
                  Ir(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount();
                    } catch (S) {
                      Ae(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Ir(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    hp(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (B = y)) : hp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s = a != null && a.hasOwnProperty("display") ? a.display : null),
                      (l.style.display = rm("display", s)));
              } catch (S) {
                Ae(e, e.return, S);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (S) {
                Ae(e, e.return, S);
              }
          } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      bt(t, e), Gt(e), r & 4 && dp(e);
      break;
    case 21:
      break;
    default:
      bt(t, e), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Av(n)) {
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
          r.flags & 32 && (ti(o, ""), (r.flags &= -33));
          var i = fp(e);
          tc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = fp(e);
          ec(e, l, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      Ae(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function GS(e, t, n) {
  (B = e), Iv(e);
}
function Iv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Xi;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Qe;
        l = Xi;
        var u = Qe;
        if (((Xi = s), (Qe = a) && !u))
          for (B = o; B !== null; )
            (s = B),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null ? mp(o) : a !== null ? ((a.return = s), (B = a)) : mp(o);
        for (; i !== null; ) (B = i), Iv(i), (i = i.sibling);
        (B = o), (Xi = l), (Qe = u);
      }
      pp(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (B = i)) : pp(e);
  }
}
function pp(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Qe)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Jd(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Jd(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
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
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ii(f);
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
        Qe || (t.flags & 512 && Xu(t));
      } catch (h) {
        Ae(t, t.return, h);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function hp(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function mp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (a) {
            Ae(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ae(t, o, a);
            }
          }
          var i = t.return;
          try {
            Xu(t);
          } catch (a) {
            Ae(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xu(t);
          } catch (a) {
            Ae(t, s, a);
          }
      }
    } catch (a) {
      Ae(t, t.return, a);
    }
    if (t === e) {
      B = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (B = l);
      break;
    }
    B = t.return;
  }
}
var QS = Math.ceil,
  tl = dn.ReactCurrentDispatcher,
  mf = dn.ReactCurrentOwner,
  Tt = dn.ReactCurrentBatchConfig,
  le = 0,
  Fe = null,
  Ie = null,
  We = 0,
  ht = 0,
  $r = Mn(0),
  Oe = 0,
  vi = null,
  sr = 0,
  Tl = 0,
  vf = 0,
  Qo = null,
  nt = null,
  gf = 0,
  Qr = 1 / 0,
  tn = null,
  nl = !1,
  nc = null,
  Pn = null,
  es = !1,
  Rn = null,
  rl = 0,
  Yo = 0,
  rc = null,
  Rs = -1,
  xs = 0;
function Je() {
  return le & 6 ? Le() : Rs !== -1 ? Rs : (Rs = Le());
}
function In(e) {
  return e.mode & 1
    ? le & 2 && We !== 0
      ? We & -We
      : PS.transition !== null
        ? (xs === 0 && (xs = vm()), xs)
        : ((e = fe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rm(e.type))), e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < Yo) throw ((Yo = 0), (rc = null), Error(L(185)));
  Ei(e, n, r),
    (!(le & 2) || e !== Fe) &&
      (e === Fe && (!(le & 2) && (Tl |= n), Oe === 4 && _n(e, We)),
      at(e, r),
      n === 1 && le === 0 && !(t.mode & 1) && ((Qr = Le() + 500), El && Un()));
}
function at(e, t) {
  var n = e.callbackNode;
  P1(e, t);
  var r = zs(e, e === Fe ? We : 0);
  if (r === 0) n !== null && xd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xd(n), t === 1))
      e.tag === 0 ? LS(vp.bind(null, e)) : Bm(vp.bind(null, e)),
        TS(function () {
          !(le & 6) && Un();
        }),
        (n = null);
    else {
      switch (gm(r)) {
        case 1:
          n = Bc;
          break;
        case 4:
          n = hm;
          break;
        case 16:
          n = Us;
          break;
        case 536870912:
          n = mm;
          break;
        default:
          n = Us;
      }
      n = zv(n, $v.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $v(e, t) {
  if (((Rs = -1), (xs = 0), le & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (zr() && e.callbackNode !== n) return null;
  var r = zs(e, e === Fe ? We : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = jv();
    (Fe !== e || We !== t) && ((tn = null), (Qr = Le() + 500), Jn(e, t));
    do
      try {
        JS();
        break;
      } catch (l) {
        Ov(e, l);
      }
    while (!0);
    tf(), (tl.current = i), (le = o), Ie !== null ? (t = 0) : ((Fe = null), (We = 0), (t = Oe));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Lu(e)), o !== 0 && ((r = o), (t = oc(e, o)))), t === 1))
      throw ((n = vi), Jn(e, 0), _n(e, r), at(e, Le()), n);
    if (t === 6) _n(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !YS(o) &&
          ((t = ol(e, r)), t === 2 && ((i = Lu(e)), i !== 0 && ((r = i), (t = oc(e, i)))), t === 1))
      )
        throw ((n = vi), Jn(e, 0), _n(e, r), at(e, Le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Hn(e, nt, tn);
          break;
        case 3:
          if ((_n(e, r), (r & 130023424) === r && ((t = gf + 500 - Le()), 10 < t))) {
            if (zs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Mu(Hn.bind(null, e, nt, tn), t);
            break;
          }
          Hn(e, nt, tn);
          break;
        case 4:
          if ((_n(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ft(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Le() - r),
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
                          : 1960 * QS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Mu(Hn.bind(null, e, nt, tn), r);
            break;
          }
          Hn(e, nt, tn);
          break;
        case 5:
          Hn(e, nt, tn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return at(e, Le()), e.callbackNode === n ? $v.bind(null, e) : null;
}
function oc(e, t) {
  var n = Qo;
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = nt), (nt = n), t !== null && ic(t)),
    e
  );
}
function ic(e) {
  nt === null ? (nt = e) : nt.push.apply(nt, e);
}
function YS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ht(i(), o)) return !1;
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
function _n(e, t) {
  for (t &= ~vf, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vp(e) {
  if (le & 6) throw Error(L(327));
  zr();
  var t = zs(e, 0);
  if (!(t & 1)) return at(e, Le()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lu(e);
    r !== 0 && ((t = r), (n = oc(e, r)));
  }
  if (n === 1) throw ((n = vi), Jn(e, 0), _n(e, t), at(e, Le()), n);
  if (n === 6) throw Error(L(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Hn(e, nt, tn), at(e, Le()), null;
}
function yf(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((Qr = Le() + 500), El && Un());
  }
}
function lr(e) {
  Rn !== null && Rn.tag === 0 && !(le & 6) && zr();
  var t = le;
  le |= 1;
  var n = Tt.transition,
    r = fe;
  try {
    if (((Tt.transition = null), (fe = 1), e)) return e();
  } finally {
    (fe = r), (Tt.transition = n), (le = t), !(le & 6) && Un();
  }
}
function Sf() {
  (ht = $r.current), we($r);
}
function Jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), kS(n)), Ie !== null))
    for (n = Ie.return; n !== null; ) {
      var r = n;
      switch ((Zc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hs();
          break;
        case 3:
          Kr(), we(st), we(Ye), af();
          break;
        case 5:
          lf(r);
          break;
        case 4:
          Kr();
          break;
        case 13:
          we(Te);
          break;
        case 19:
          we(Te);
          break;
        case 10:
          nf(r.type._context);
          break;
        case 22:
        case 23:
          Sf();
      }
      n = n.return;
    }
  if (
    ((Fe = e),
    (Ie = e = $n(e.current, null)),
    (We = ht = t),
    (Oe = 0),
    (vi = null),
    (vf = Tl = sr = 0),
    (nt = Qo = null),
    Qn !== null)
  ) {
    for (t = 0; t < Qn.length; t++)
      if (((n = Qn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Qn = null;
  }
  return e;
}
function Ov(e, t) {
  do {
    var n = Ie;
    try {
      if ((tf(), (ws.current = el), Xs)) {
        for (var r = Ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Xs = !1;
      }
      if (
        ((ir = 0), (Ue = $e = Ce = null), (Ko = !1), (pi = 0), (mf.current = null), n === null || n.return === null)
      ) {
        (Oe = 1), (vi = t), (Ie = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (((t = We), (l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = rp(s);
          if (y !== null) {
            (y.flags &= -257), op(y, s, l, i, t), y.mode & 1 && np(i, u, t), (t = y), (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              np(i, u, t), wf();
              break e;
            }
            a = Error(L(426));
          }
        } else if (Re && l.mode & 1) {
          var T = rp(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), op(T, s, l, i, t), Xc(Gr(a, l));
            break e;
          }
        }
        (i = a = Gr(a, l)), Oe !== 4 && (Oe = 2), Qo === null ? (Qo = [i]) : Qo.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = gv(i, a, t);
              qd(i, m);
              break e;
            case 1:
              l = a;
              var d = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (p !== null && typeof p.componentDidCatch == "function" && (Pn === null || !Pn.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var R = yv(i, l, t);
                qd(i, R);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dv(n);
    } catch (N) {
      (t = N), Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jv() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function wf() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), Fe === null || (!(sr & 268435455) && !(Tl & 268435455)) || _n(Fe, We);
}
function ol(e, t) {
  var n = le;
  le |= 2;
  var r = jv();
  (Fe !== e || We !== t) && ((tn = null), Jn(e, t));
  do
    try {
      qS();
      break;
    } catch (o) {
      Ov(e, o);
    }
  while (!0);
  if ((tf(), (le = n), (tl.current = r), Ie !== null)) throw Error(L(261));
  return (Fe = null), (We = 0), Oe;
}
function qS() {
  for (; Ie !== null; ) bv(Ie);
}
function JS() {
  for (; Ie !== null && !E1(); ) bv(Ie);
}
function bv(e) {
  var t = Uv(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps), t === null ? Dv(e) : (Ie = t), (mf.current = null);
}
function Dv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = WS(n, t)), n !== null)) {
        (n.flags &= 32767), (Ie = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (Ie = null);
        return;
      }
    } else if (((n = VS(n, t, ht)), n !== null)) {
      Ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function Hn(e, t, n) {
  var r = fe,
    o = Tt.transition;
  try {
    (Tt.transition = null), (fe = 1), ZS(e, t, n, r);
  } finally {
    (Tt.transition = o), (fe = r);
  }
  return null;
}
function ZS(e, t, n, r) {
  do zr();
  while (Rn !== null);
  if (le & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (I1(e, i),
    e === Fe && ((Ie = Fe = null), (We = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      es ||
      ((es = !0),
      zv(Us, function () {
        return zr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Tt.transition), (Tt.transition = null);
    var s = fe;
    fe = 1;
    var l = le;
    (le |= 4),
      (mf.current = null),
      KS(e, n),
      Pv(n, e),
      yS(bu),
      (Fs = !!ju),
      (bu = ju = null),
      (e.current = n),
      GS(n),
      R1(),
      (le = l),
      (fe = s),
      (Tt.transition = i);
  } else e.current = n;
  if (
    (es && ((es = !1), (Rn = e), (rl = o)),
    (i = e.pendingLanes),
    i === 0 && (Pn = null),
    T1(n.stateNode),
    at(e, Le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (nl) throw ((nl = !1), (e = nc), (nc = null), e);
  return (
    rl & 1 && e.tag !== 0 && zr(),
    (i = e.pendingLanes),
    i & 1 ? (e === rc ? Yo++ : ((Yo = 0), (rc = e))) : (Yo = 0),
    Un(),
    null
  );
}
function zr() {
  if (Rn !== null) {
    var e = gm(rl),
      t = Tt.transition,
      n = fe;
    try {
      if (((Tt.transition = null), (fe = 16 > e ? 16 : e), Rn === null)) var r = !1;
      else {
        if (((e = Rn), (Rn = null), (rl = 0), le & 6)) throw Error(L(331));
        var o = le;
        for (le |= 4, B = e.current; B !== null; ) {
          var i = B,
            s = i.child;
          if (B.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (B = f);
                  else
                    for (; B !== null; ) {
                      c = B;
                      var h = c.sibling,
                        y = c.return;
                      if ((Nv(c), c === u)) {
                        B = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (B = h);
                        break;
                      }
                      B = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var T = S.sibling;
                    (S.sibling = null), (S = T);
                  } while (S !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (B = s);
          else
            e: for (; B !== null; ) {
              if (((i = B), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Go(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (B = m);
                break e;
              }
              B = i.return;
            }
        }
        var d = e.current;
        for (B = d; B !== null; ) {
          s = B;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (B = p);
          else
            e: for (s = d; B !== null; ) {
              if (((l = B), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, l);
                  }
                } catch (N) {
                  Ae(l, l.return, N);
                }
              if (l === s) {
                B = null;
                break e;
              }
              var R = l.sibling;
              if (R !== null) {
                (R.return = l.return), (B = R);
                break e;
              }
              B = l.return;
            }
        }
        if (((le = o), Un(), Jt && typeof Jt.onPostCommitFiberRoot == "function"))
          try {
            Jt.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (fe = n), (Tt.transition = t);
    }
  }
  return !1;
}
function gp(e, t, n) {
  (t = Gr(n, t)), (t = gv(e, t, 1)), (e = Ln(e, t, 1)), (t = Je()), e !== null && (Ei(e, 1, t), at(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) gp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Pn === null || !Pn.has(r)))
        ) {
          (e = Gr(n, e)), (e = yv(t, e, 1)), (t = Ln(t, e, 1)), (e = Je()), t !== null && (Ei(t, 1, e), at(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function XS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Fe === e &&
      (We & n) === n &&
      (Oe === 4 || (Oe === 3 && (We & 130023424) === We && 500 > Le() - gf) ? Jn(e, 0) : (vf |= n)),
    at(e, t);
}
function Mv(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Wi), (Wi <<= 1), !(Wi & 130023424) && (Wi = 4194304)) : (t = 1));
  var n = Je();
  (e = cn(e, t)), e !== null && (Ei(e, t, n), at(e, n));
}
function ew(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mv(e, n);
}
function tw(e, t) {
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
  r !== null && r.delete(t), Mv(e, n);
}
var Uv;
Uv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || st.current) rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (rt = !1), BS(e, t, n);
      rt = !!(e.flags & 131072);
    }
  else (rt = !1), Re && t.flags & 1048576 && Vm(t, Qs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Es(e, t), (e = t.pendingProps);
      var o = Vr(t, Ye.current);
      Ur(t, n), (o = cf(null, t, r, e, o, n));
      var i = ff();
      return (
        (t.flags |= 1),
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            lt(r) ? ((i = !0), Ks(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            of(t),
            (o.updater = xl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Hu(t, r, e, n),
            (t = Qu(null, t, r, !0, i, n)))
          : ((t.tag = 0), Re && i && Jc(t), qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Es(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = rw(r)),
          (e = Mt(r, e)),
          o)
        ) {
          case 0:
            t = Gu(null, t, r, e, n);
            break e;
          case 1:
            t = lp(null, t, r, e, n);
            break e;
          case 11:
            t = ip(null, t, r, e, n);
            break e;
          case 14:
            t = sp(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Mt(r, o)), Gu(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Mt(r, o)), lp(e, t, r, o, n);
    case 3:
      e: {
        if ((Ev(t), e === null)) throw Error(L(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Ym(e, t), Js(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Gr(Error(L(423)), t)), (t = ap(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Gr(Error(L(424)), t)), (t = ap(e, t, r, n, o));
            break e;
          } else
            for (
              mt = An(t.stateNode.containerInfo.firstChild),
                vt = t,
                Re = !0,
                zt = null,
                n = Gm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wr(), r === o)) {
            t = fn(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qm(t),
        e === null && Bu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Du(r, o) ? (s = null) : i !== null && Du(r, i) && (t.flags |= 32),
        _v(e, t),
        qe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Bu(t), null;
    case 13:
      return Rv(e, t, n);
    case 4:
      return (
        sf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hr(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Mt(r, o)), ip(e, t, r, o, n);
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ve(Ys, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Ht(i.value, s)) {
            if (i.children === o.children && !st.current) {
              t = fn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = ln(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)), (u.pending = a);
                      }
                    }
                    (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Vu(i.return, n, t), (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(L(341));
                (s.lanes |= n), (l = s.alternate), l !== null && (l.lanes |= n), Vu(s, n, t), (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        qe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ur(t, n),
        (o = At(o)),
        (r = r(o)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = Mt(r, t.pendingProps)), (o = Mt(r.type, o)), sp(e, t, r, o, n);
    case 15:
      return Sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Mt(r, o)),
        Es(e, t),
        (t.tag = 1),
        lt(r) ? ((e = !0), Ks(t)) : (e = !1),
        Ur(t, n),
        vv(t, r, o),
        Hu(t, r, o, n),
        Qu(null, t, r, !0, e, n)
      );
    case 19:
      return xv(e, t, n);
    case 22:
      return wv(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function zv(e, t) {
  return pm(e, t);
}
function nw(e, t, n, r) {
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
function kt(e, t, n, r) {
  return new nw(e, t, n, r);
}
function _f(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rw(e) {
  if (typeof e == "function") return _f(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Uc)) return 11;
    if (e === zc) return 14;
  }
  return 2;
}
function $n(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kt(e.tag, t, e.key, e.mode)),
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
function ks(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) _f(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Rr:
        return Zn(n.children, o, i, t);
      case Mc:
        (s = 8), (o |= 8);
        break;
      case mu:
        return (e = kt(12, n, t, o | 2)), (e.elementType = mu), (e.lanes = i), e;
      case vu:
        return (e = kt(13, n, t, o)), (e.elementType = vu), (e.lanes = i), e;
      case gu:
        return (e = kt(19, n, t, o)), (e.elementType = gu), (e.lanes = i), e;
      case qh:
        return Cl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qh:
              s = 10;
              break e;
            case Yh:
              s = 9;
              break e;
            case Uc:
              s = 11;
              break e;
            case zc:
              s = 14;
              break e;
            case gn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (t = kt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Zn(e, t, n, r) {
  return (e = kt(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
  return (e = kt(22, e, r, t)), (e.elementType = qh), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function za(e, t, n) {
  return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function Fa(e, t, n) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function ow(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _a(0)),
    (this.expirationTimes = _a(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _a(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ef(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new ow(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = kt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    of(i),
    e
  );
}
function iw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Er, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Fv(e) {
  if (!e) return jn;
  e = e._reactInternals;
  e: {
    if (dr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (lt(t.type)) {
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
    if (lt(n)) return Fm(e, n, t);
  }
  return t;
}
function Bv(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Ef(n, r, !0, e, o, i, s, l, a)),
    (e.context = Fv(null)),
    (n = e.current),
    (r = Je()),
    (o = In(n)),
    (i = ln(r, o)),
    (i.callback = t ?? null),
    Ln(n, i, o),
    (e.current.lanes = o),
    Ei(e, o, r),
    at(e, r),
    e
  );
}
function Nl(e, t, n, r) {
  var o = t.current,
    i = Je(),
    s = In(o);
  return (
    (n = Fv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ln(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ln(o, t, s)),
    e !== null && (Bt(e, o, s, i), Ss(e, o, s)),
    s
  );
}
function il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Rf(e, t) {
  yp(e, t), (e = e.alternate) && yp(e, t);
}
function sw() {
  return null;
}
var Vv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xf(e) {
  this._internalRoot = e;
}
Al.prototype.render = xf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Nl(e, t, null, null);
};
Al.prototype.unmount = xf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lr(function () {
      Nl(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function Al(e) {
  this._internalRoot = e;
}
Al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++);
    wn.splice(n, 0, e), n === 0 && Em(e);
  }
};
function kf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sp() {}
function lw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = il(s);
        i.call(u);
      };
    }
    var s = Bv(t, r, e, 0, null, !1, !1, "", Sp);
    return (e._reactRootContainer = s), (e[un] = s.current), ai(e.nodeType === 8 ? e.parentNode : e), lr(), s;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = il(a);
      l.call(u);
    };
  }
  var a = Ef(e, 0, !1, null, null, !1, !1, "", Sp);
  return (
    (e._reactRootContainer = a),
    (e[un] = a.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      Nl(t, a, n, r);
    }),
    a
  );
}
function Pl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = il(s);
        l.call(a);
      };
    }
    Nl(t, s, e, o);
  } else s = lw(n, t, e, o, r);
  return il(s);
}
ym = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Do(t.pendingLanes);
        n !== 0 && (Vc(t, n | 1), at(t, Le()), !(le & 6) && ((Qr = Le() + 500), Un()));
      }
      break;
    case 13:
      lr(function () {
        var r = cn(e, 1);
        if (r !== null) {
          var o = Je();
          Bt(r, e, 1, o);
        }
      }),
        Rf(e, 1);
  }
};
Wc = function (e) {
  if (e.tag === 13) {
    var t = cn(e, 134217728);
    if (t !== null) {
      var n = Je();
      Bt(t, e, 134217728, n);
    }
    Rf(e, 134217728);
  }
};
Sm = function (e) {
  if (e.tag === 13) {
    var t = In(e),
      n = cn(e, t);
    if (n !== null) {
      var r = Je();
      Bt(n, e, t, r);
    }
    Rf(e, t);
  }
};
wm = function () {
  return fe;
};
_m = function (e, t) {
  var n = fe;
  try {
    return (fe = e), t();
  } finally {
    fe = n;
  }
};
Cu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((wu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _l(r);
            if (!o) throw Error(L(90));
            Zh(r), wu(r, o);
          }
        }
      }
      break;
    case "textarea":
      em(e, n);
      break;
    case "select":
      (t = n.value), t != null && jr(e, !!n.multiple, t, !1);
  }
};
lm = yf;
am = lr;
var aw = { usingClientEntryPoint: !1, Events: [xi, Cr, _l, im, sm, yf] },
  Co = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  uw = {
    bundleType: Co.bundleType,
    version: Co.version,
    rendererPackageName: Co.rendererPackageName,
    rendererConfig: Co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Co.findFiberByHostInstance || sw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ts.isDisabled && ts.supportsFiber)
    try {
      (gl = ts.inject(uw)), (Jt = ts);
    } catch {}
}
yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aw;
yt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!kf(t)) throw Error(L(200));
  return iw(e, t, null, n);
};
yt.createRoot = function (e, t) {
  if (!kf(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Vv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ef(e, 1, !1, null, null, n, !1, r, o)),
    (e[un] = t.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    new xf(t)
  );
};
yt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = fm(t)), (e = e === null ? null : e.stateNode), e;
};
yt.flushSync = function (e) {
  return lr(e);
};
yt.hydrate = function (e, t, n) {
  if (!Ll(t)) throw Error(L(200));
  return Pl(null, e, t, !0, n);
};
yt.hydrateRoot = function (e, t, n) {
  if (!kf(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Vv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[un] = t.current),
    ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Al(t);
};
yt.render = function (e, t, n) {
  if (!Ll(t)) throw Error(L(200));
  return Pl(null, e, t, !1, n);
};
yt.unmountComponentAtNode = function (e) {
  if (!Ll(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (lr(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
yt.unstable_batchedUpdates = yf;
yt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ll(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Pl(e, t, n, !1, r);
};
yt.version = "18.3.1-next-f1338f8080-20240426";
function Wv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv);
    } catch (e) {
      console.error(e);
    }
}
Wv(), (Wh.exports = yt);
var Hv = Wh.exports;
const cw = Ih(Hv);
var wp = Hv;
(pu.createRoot = wp.createRoot), (pu.hydrateRoot = wp.hydrateRoot);
function Kv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: fw } = Object.prototype,
  { getPrototypeOf: Tf } = Object,
  Il = ((e) => (t) => {
    const n = fw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Kt = (e) => ((e = e.toLowerCase()), (t) => Il(t) === e),
  $l = (e) => (t) => typeof t === e,
  { isArray: ao } = Array,
  gi = $l("undefined");
function dw(e) {
  return (
    e !== null &&
    !gi(e) &&
    e.constructor !== null &&
    !gi(e.constructor) &&
    Ct(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Gv = Kt("ArrayBuffer");
function pw(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && Gv(e.buffer)),
    t
  );
}
const hw = $l("string"),
  Ct = $l("function"),
  Qv = $l("number"),
  Ol = (e) => e !== null && typeof e == "object",
  mw = (e) => e === !0 || e === !1,
  Ts = (e) => {
    if (Il(e) !== "object") return !1;
    const t = Tf(e);
    return (
      (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  vw = Kt("Date"),
  gw = Kt("File"),
  yw = Kt("Blob"),
  Sw = Kt("FileList"),
  ww = (e) => Ol(e) && Ct(e.pipe),
  _w = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ct(e.append) &&
          ((t = Il(e)) === "formdata" || (t === "object" && Ct(e.toString) && e.toString() === "[object FormData]"))))
    );
  },
  Ew = Kt("URLSearchParams"),
  [Rw, xw, kw, Tw] = ["ReadableStream", "Request", "Response", "Headers"].map(Kt),
  Cw = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
function Ti(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), ao(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function Yv(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const qv = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
  Jv = (e) => !gi(e) && e !== qv;
function sc() {
  const { caseless: e } = (Jv(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Yv(t, o)) || o;
      Ts(t[i]) && Ts(r) ? (t[i] = sc(t[i], r)) : Ts(r) ? (t[i] = sc({}, r)) : ao(r) ? (t[i] = r.slice()) : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && Ti(arguments[r], n);
  return t;
}
const Nw = (e, t, n, { allOwnKeys: r } = {}) => (
    Ti(
      t,
      (o, i) => {
        n && Ct(o) ? (e[i] = Kv(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Aw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Lw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Pw = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && Tf(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Iw = (e, t, n) => {
    (e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  $w = (e) => {
    if (!e) return null;
    if (ao(e)) return e;
    let t = e.length;
    if (!Qv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ow = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Tf(Uint8Array)),
  jw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  bw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Dw = Kt("HTMLFormElement"),
  Mw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  _p = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Uw = Kt("RegExp"),
  Zv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ti(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  zw = (e) => {
    Zv(e, (t, n) => {
      if (Ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
      const r = e[n];
      if (Ct(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Fw = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return ao(e) ? r(e) : r(String(e).split(t)), n;
  },
  Bw = () => {},
  Vw = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ba = "abcdefghijklmnopqrstuvwxyz",
  Ep = "0123456789",
  Xv = { DIGIT: Ep, ALPHA: Ba, ALPHA_DIGIT: Ba + Ba.toUpperCase() + Ep },
  Ww = (e = 16, t = Xv.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Hw(e) {
  return !!(e && Ct(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Kw = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Ol(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = ao(r) ? [] : {};
            return (
              Ti(r, (s, l) => {
                const a = n(s, o + 1);
                !gi(a) && (i[l] = a);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Gw = Kt("AsyncFunction"),
  Qw = (e) => e && (Ol(e) || Ct(e)) && Ct(e.then) && Ct(e.catch),
  x = {
    isArray: ao,
    isArrayBuffer: Gv,
    isBuffer: dw,
    isFormData: _w,
    isArrayBufferView: pw,
    isString: hw,
    isNumber: Qv,
    isBoolean: mw,
    isObject: Ol,
    isPlainObject: Ts,
    isReadableStream: Rw,
    isRequest: xw,
    isResponse: kw,
    isHeaders: Tw,
    isUndefined: gi,
    isDate: vw,
    isFile: gw,
    isBlob: yw,
    isRegExp: Uw,
    isFunction: Ct,
    isStream: ww,
    isURLSearchParams: Ew,
    isTypedArray: Ow,
    isFileList: Sw,
    forEach: Ti,
    merge: sc,
    extend: Nw,
    trim: Cw,
    stripBOM: Aw,
    inherits: Lw,
    toFlatObject: Pw,
    kindOf: Il,
    kindOfTest: Kt,
    endsWith: Iw,
    toArray: $w,
    forEachEntry: jw,
    matchAll: bw,
    isHTMLForm: Dw,
    hasOwnProperty: _p,
    hasOwnProp: _p,
    reduceDescriptors: Zv,
    freezeMethods: zw,
    toObjectSet: Fw,
    toCamelCase: Mw,
    noop: Bw,
    toFiniteNumber: Vw,
    findKey: Yv,
    global: qv,
    isContextDefined: Jv,
    ALPHABET: Xv,
    generateString: Ww,
    isSpecCompliantForm: Hw,
    toJSONObject: Kw,
    isAsyncFn: Gw,
    isThenable: Qw,
  };
function X(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
x.inherits(X, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    };
  },
});
const eg = X.prototype,
  tg = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  tg[e] = { value: e };
});
Object.defineProperties(X, tg);
Object.defineProperty(eg, "isAxiosError", { value: !0 });
X.from = (e, t, n, r, o, i) => {
  const s = Object.create(eg);
  return (
    x.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    X.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const Yw = null;
function lc(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function ng(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Rp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = ng(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function qw(e) {
  return x.isArray(e) && !e.some(lc);
}
const Jw = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function jl(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = x.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (S, T) {
      return !x.isUndefined(T[S]);
    }));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
  if (!x.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(v) {
    if (v === null) return "";
    if (x.isDate(v)) return v.toISOString();
    if (!a && x.isBlob(v)) throw new X("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(v) || x.isTypedArray(v)
      ? a && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, S, T) {
    let m = v;
    if (v && !T && typeof v == "object") {
      if (x.endsWith(S, "{}")) (S = r ? S : S.slice(0, -2)), (v = JSON.stringify(v));
      else if ((x.isArray(v) && qw(v)) || ((x.isFileList(v) || x.endsWith(S, "[]")) && (m = x.toArray(v))))
        return (
          (S = ng(S)),
          m.forEach(function (p, R) {
            !(x.isUndefined(p) || p === null) && t.append(s === !0 ? Rp([S], R, i) : s === null ? S : S + "[]", u(p));
          }),
          !1
        );
    }
    return lc(v) ? !0 : (t.append(Rp(T, S, i), u(v)), !1);
  }
  const f = [],
    h = Object.assign(Jw, { defaultVisitor: c, convertValue: u, isVisitable: lc });
  function y(v, S) {
    if (!x.isUndefined(v)) {
      if (f.indexOf(v) !== -1) throw Error("Circular reference detected in " + S.join("."));
      f.push(v),
        x.forEach(v, function (m, d) {
          (!(x.isUndefined(m) || m === null) && o.call(t, m, x.isString(d) ? d.trim() : d, S, h)) === !0 &&
            y(m, S ? S.concat(d) : [d]);
        }),
        f.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function xp(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Cf(e, t) {
  (this._pairs = []), e && jl(e, this, t);
}
const rg = Cf.prototype;
rg.append = function (t, n) {
  this._pairs.push([t, n]);
};
rg.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, xp);
      }
    : xp;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Zw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function og(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Zw,
    o = n && n.serialize;
  let i;
  if ((o ? (i = o(t, n)) : (i = x.isURLSearchParams(t) ? t.toString() : new Cf(t, n).toString(r)), i)) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class kp {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ig = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  Xw = typeof URLSearchParams < "u" ? URLSearchParams : Cf,
  e_ = typeof FormData < "u" ? FormData : null,
  t_ = typeof Blob < "u" ? Blob : null,
  n_ = {
    isBrowser: !0,
    classes: { URLSearchParams: Xw, FormData: e_, Blob: t_ },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Nf = typeof window < "u" && typeof document < "u",
  r_ = ((e) => Nf && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
  o_ = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
  i_ = (Nf && window.location.href) || "http://localhost",
  s_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, hasBrowserEnv: Nf, hasStandardBrowserEnv: r_, hasStandardBrowserWebWorkerEnv: o_, origin: i_ },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Vt = { ...s_, ...n_ };
function l_(e, t) {
  return jl(
    e,
    new Vt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Vt.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function a_(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function u_(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function sg(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      a = i >= n.length;
    return (
      (s = !s && x.isArray(o) ? o.length : s),
      a
        ? (x.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !x.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && x.isArray(o[s]) && (o[s] = u_(o[s])), !l)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (r, o) => {
        t(a_(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function c_(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ci = {
  transitional: ig,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = x.isObject(t);
      if ((i && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))) return o ? JSON.stringify(sg(t)) : t;
      if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1) return l_(t, this.formSerializer).toString();
        if ((l = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return jl(l ? { "files[]": t } : t, a && new a(), this.formSerializer);
        }
      }
      return i || o ? (n.setContentType("application/json", !1), c_(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ci.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (x.isResponse(t) || x.isReadableStream(t)) return t;
      if (t && x.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s) throw l.name === "SyntaxError" ? X.from(l, X.ERR_BAD_RESPONSE, this, null, this.response) : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Vt.classes.FormData, Blob: Vt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ci.headers[e] = {};
});
const f_ = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  d_ = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && f_[n])) &&
                (n === "set-cookie" ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Tp = Symbol("internals");
function No(e) {
  return e && String(e).trim().toLowerCase();
}
function Cs(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Cs) : String(e);
}
function p_(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const h_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Va(e, t, n, r, o) {
  if (x.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!x.isString(t))) {
    if (x.isString(r)) return t.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(t);
  }
}
function m_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function v_(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class ut {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, a, u) {
      const c = No(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = x.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) && (o[f || a] = Cs(l));
    }
    const s = (l, a) => x.forEach(l, (u, c) => i(u, c, a));
    if (x.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (x.isString(t) && (t = t.trim()) && !h_(t)) s(d_(t), n);
    else if (x.isHeaders(t)) for (const [l, a] of t.entries()) i(a, l, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = No(t)), t)) {
      const r = x.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return p_(o);
        if (x.isFunction(n)) return n.call(this, o, r);
        if (x.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = No(t)), t)) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Va(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = No(s)), s)) {
        const l = x.findKey(r, s);
        l && (!n || Va(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return x.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Va(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (o, i) => {
        const s = x.findKey(r, i);
        if (s) {
          (n[s] = Cs(o)), delete n[i];
          return;
        }
        const l = t ? m_(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Cs(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && x.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Tp] = this[Tp] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const l = No(s);
      r[l] || (v_(o, s), (r[l] = !0));
    }
    return x.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ut.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(ut.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
x.freezeMethods(ut);
function Wa(e, t) {
  const n = this || Ci,
    r = t || n,
    o = ut.from(r.headers);
  let i = r.data;
  return (
    x.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function lg(e) {
  return !!(e && e.__CANCEL__);
}
function uo(e, t, n) {
  X.call(this, e ?? "canceled", X.ERR_CANCELED, t, n), (this.name = "CanceledError");
}
x.inherits(uo, X, { __CANCEL__: !0 });
function ag(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new X(
          "Request failed with status code " + n.status,
          [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
          n.config,
          n.request,
          n
        )
      );
}
function g_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function y_(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = a), (r[o] = u);
      let f = i,
        h = 0;
      for (; f !== o; ) (h += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const y = c && u - c;
      return y ? Math.round((h * 1e3) / y) : void 0;
    }
  );
}
function S_(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function () {
    const s = this === !0,
      l = Date.now();
    if (s || l - n > r) return o && (clearTimeout(o), (o = null)), (n = l), e.apply(null, arguments);
    o || (o = setTimeout(() => ((o = null), (n = Date.now()), e.apply(null, arguments)), r - (l - n)));
  };
}
const sl = (e, t, n = 3) => {
    let r = 0;
    const o = y_(50, 250);
    return S_((i) => {
      const s = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        a = s - r,
        u = o(a),
        c = s <= l;
      r = s;
      const f = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && c ? (l - s) / u : void 0,
        event: i,
        lengthComputable: l != null,
      };
      (f[t ? "download" : "upload"] = !0), e(f);
    }, n);
  },
  w_ = Vt.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let s = i;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (s) {
            const l = x.isString(s) ? o(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  __ = Vt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)];
          x.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            x.isString(r) && s.push("path=" + r),
            x.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function E_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function R_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ug(e, t) {
  return e && !E_(t) ? R_(e, t) : t;
}
const Cp = (e) => (e instanceof ut ? { ...e } : e);
function ar(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return x.isPlainObject(u) && x.isPlainObject(c)
      ? x.merge.call({ caseless: f }, u, c)
      : x.isPlainObject(c)
        ? x.merge({}, c)
        : x.isArray(c)
          ? c.slice()
          : c;
  }
  function o(u, c, f) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function i(u, c) {
    if (!x.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (x.isUndefined(c)) {
      if (!x.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, c) => o(Cp(u), Cp(c), !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = a[c] || o,
        h = f(e[c], t[c], c);
      (x.isUndefined(h) && f !== l) || (n[c] = h);
    }),
    n
  );
}
const cg = (e) => {
    const t = ar({}, e);
    let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: l } = t;
    (t.headers = s = ut.from(s)),
      (t.url = og(ug(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          "Authorization",
          "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
        );
    let a;
    if (x.isFormData(n)) {
      if (Vt.hasStandardBrowserEnv || Vt.hasStandardBrowserWebWorkerEnv) s.setContentType(void 0);
      else if ((a = s.getContentType()) !== !1) {
        const [u, ...c] = a
          ? a
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (Vt.hasStandardBrowserEnv && (r && x.isFunction(r) && (r = r(t)), r || (r !== !1 && w_(t.url)))) {
      const u = o && i && __.read(i);
      u && s.set(o, u);
    }
    return t;
  },
  x_ = typeof XMLHttpRequest < "u",
  k_ =
    x_ &&
    function (e) {
      return new Promise(function (n, r) {
        const o = cg(e);
        let i = o.data;
        const s = ut.from(o.headers).normalize();
        let { responseType: l } = o,
          a;
        function u() {
          o.cancelToken && o.cancelToken.unsubscribe(a), o.signal && o.signal.removeEventListener("abort", a);
        }
        let c = new XMLHttpRequest();
        c.open(o.method.toUpperCase(), o.url, !0), (c.timeout = o.timeout);
        function f() {
          if (!c) return;
          const y = ut.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()),
            S = {
              data: !l || l === "text" || l === "json" ? c.responseText : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          ag(
            function (m) {
              n(m), u();
            },
            function (m) {
              r(m), u();
            },
            S
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = f)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
          (c.onabort = function () {
            c && (r(new X("Request aborted", X.ECONNABORTED, o, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new X("Network Error", X.ERR_NETWORK, o, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let v = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const S = o.transitional || ig;
            o.timeoutErrorMessage && (v = o.timeoutErrorMessage),
              r(new X(v, S.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED, o, c)),
              (c = null);
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            x.forEach(s.toJSON(), function (v, S) {
              c.setRequestHeader(S, v);
            }),
          x.isUndefined(o.withCredentials) || (c.withCredentials = !!o.withCredentials),
          l && l !== "json" && (c.responseType = o.responseType),
          typeof o.onDownloadProgress == "function" && c.addEventListener("progress", sl(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", sl(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((a = (y) => {
              c && (r(!y || y.type ? new uo(null, e, c) : y), c.abort(), (c = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(a),
            o.signal && (o.signal.aborted ? a() : o.signal.addEventListener("abort", a)));
        const h = g_(o.url);
        if (h && Vt.protocols.indexOf(h) === -1) {
          r(new X("Unsupported protocol " + h + ":", X.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  T_ = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (a) {
      if (!r) {
        (r = !0), s();
        const u = a instanceof Error ? a : this.reason;
        n.abort(u instanceof X ? u : new uo(u instanceof Error ? u.message : u));
      }
    };
    let i =
      t &&
      setTimeout(() => {
        o(new X(`timeout ${t} of ms exceeded`, X.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach((a) => {
          a && (a.removeEventListener ? a.removeEventListener("abort", o) : a.unsubscribe(o));
        }),
        (e = null));
    };
    e.forEach((a) => a && a.addEventListener && a.addEventListener("abort", o));
    const { signal: l } = n;
    return (
      (l.unsubscribe = s),
      [
        l,
        () => {
          i && clearTimeout(i), (i = null);
        },
      ]
    );
  },
  C_ = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  N_ = async function* (e, t, n) {
    for await (const r of e) yield* C_(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Np = (e, t, n, r, o) => {
    const i = N_(e, t, o);
    let s = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: a, value: u } = await i.next();
          if (a) {
            l.close(), r();
            return;
          }
          let c = u.byteLength;
          n && n((s += c)), l.enqueue(new Uint8Array(u));
        },
        cancel(l) {
          return r(l), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ap = (e, t) => {
    const n = e != null;
    return (r) => setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  bl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function",
  fg = bl && typeof ReadableStream == "function",
  ac =
    bl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  A_ =
    fg &&
    (() => {
      let e = !1;
      const t = new Request(Vt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  Lp = 64 * 1024,
  uc =
    fg &&
    !!(() => {
      try {
        return x.isReadableStream(new Response("").body);
      } catch {}
    })(),
  ll = { stream: uc && ((e) => e.body) };
bl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !ll[t] &&
        (ll[t] = x.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new X(`Response type '${t}' is not supported`, X.ERR_NOT_SUPPORT, r);
            });
    });
  })(new Response());
const L_ = async (e) => {
    if (e == null) return 0;
    if (x.isBlob(e)) return e.size;
    if (x.isSpecCompliantForm(e)) return (await new Request(e).arrayBuffer()).byteLength;
    if (x.isArrayBufferView(e)) return e.byteLength;
    if ((x.isURLSearchParams(e) && (e = e + ""), x.isString(e))) return (await ac(e)).byteLength;
  },
  P_ = async (e, t) => {
    const n = x.toFiniteNumber(e.getContentLength());
    return n ?? L_(t);
  },
  I_ =
    bl &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: u,
        headers: c,
        withCredentials: f = "same-origin",
        fetchOptions: h,
      } = cg(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [y, v] = o || i || s ? T_([o, i], s) : [],
        S,
        T;
      const m = () => {
        !S &&
          setTimeout(() => {
            y && y.unsubscribe();
          }),
          (S = !0);
      };
      let d;
      try {
        if (a && A_ && n !== "get" && n !== "head" && (d = await P_(c, r)) !== 0) {
          let C = new Request(t, { method: "POST", body: r, duplex: "half" }),
            k;
          x.isFormData(r) && (k = C.headers.get("content-type")) && c.setContentType(k),
            C.body && (r = Np(C.body, Lp, Ap(d, sl(a)), null, ac));
        }
        x.isString(f) || (f = f ? "cors" : "omit"),
          (T = new Request(t, {
            ...h,
            signal: y,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: f,
          }));
        let p = await fetch(T);
        const R = uc && (u === "stream" || u === "response");
        if (uc && (l || R)) {
          const C = {};
          ["status", "statusText", "headers"].forEach(($) => {
            C[$] = p[$];
          });
          const k = x.toFiniteNumber(p.headers.get("content-length"));
          p = new Response(Np(p.body, Lp, l && Ap(k, sl(l, !0)), R && m, ac), C);
        }
        u = u || "text";
        let N = await ll[x.findKey(ll, u) || "text"](p, e);
        return (
          !R && m(),
          v && v(),
          await new Promise((C, k) => {
            ag(C, k, {
              data: N,
              headers: ut.from(p.headers),
              status: p.status,
              statusText: p.statusText,
              config: e,
              request: T,
            });
          })
        );
      } catch (p) {
        throw (
          (m(),
          p && p.name === "TypeError" && /fetch/i.test(p.message)
            ? Object.assign(new X("Network Error", X.ERR_NETWORK, e, T), { cause: p.cause || p })
            : X.from(p, p && p.code, e, T))
        );
      }
    }),
  cc = { http: Yw, xhr: k_, fetch: I_ };
x.forEach(cc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Pp = (e) => `- ${e}`,
  $_ = (e) => x.isFunction(e) || e === null || e === !1,
  dg = {
    getAdapter: (e) => {
      e = x.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (((r = n), !$_(n) && ((r = cc[(s = String(n)).toLowerCase()]), r === void 0)))
          throw new X(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, a]) =>
            `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(Pp).join(`
`)
            : " " + Pp(i[0])
          : "as no adapter specified";
        throw new X("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
      }
      return r;
    },
    adapters: cc,
  };
function Ha(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new uo(null, e);
}
function Ip(e) {
  return (
    Ha(e),
    (e.headers = ut.from(e.headers)),
    (e.data = Wa.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    dg
      .getAdapter(e.adapter || Ci.adapter)(e)
      .then(
        function (r) {
          return Ha(e), (r.data = Wa.call(e, e.transformResponse, r)), (r.headers = ut.from(r.headers)), r;
        },
        function (r) {
          return (
            lg(r) ||
              (Ha(e),
              r &&
                r.response &&
                ((r.response.data = Wa.call(e, e.transformResponse, r.response)),
                (r.response.headers = ut.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const pg = "1.7.2",
  Af = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Af[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const $p = {};
Af.transitional = function (t, n, r) {
  function o(i, s) {
    return "[Axios v" + pg + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, l) => {
    if (t === !1) throw new X(o(s, " has been removed" + (n ? " in " + n : "")), X.ERR_DEPRECATED);
    return (
      n &&
        !$p[s] &&
        (($p[s] = !0),
        console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
      t ? t(i, s, l) : !0
    );
  };
};
function O_(e, t, n) {
  if (typeof e != "object") throw new X("options must be an object", X.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        a = l === void 0 || s(l, i, e);
      if (a !== !0) throw new X("option " + i + " must be " + a, X.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new X("Unknown option " + i, X.ERR_BAD_OPTION);
  }
}
const fc = { assertOptions: O_, validators: Af },
  mn = fc.validators;
class Xn {
  constructor(t) {
    (this.defaults = t), (this.interceptors = { request: new kp(), response: new kp() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace((o = {})) : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = ar(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      fc.assertOptions(
        r,
        {
          silentJSONParsing: mn.transitional(mn.boolean),
          forcedJSONParsing: mn.transitional(mn.boolean),
          clarifyTimeoutError: mn.transitional(mn.boolean),
        },
        !1
      ),
      o != null &&
        (x.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : fc.assertOptions(o, { encode: mn.function, serialize: mn.function }, !0)),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && x.merge(i.common, i[n.method]);
    i &&
      x.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (v) => {
        delete i[v];
      }),
      (n.headers = ut.concat(s, i));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(n) === !1) ||
        ((a = a && S.synchronous), l.unshift(S.fulfilled, S.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (S) {
      u.push(S.fulfilled, S.rejected);
    });
    let c,
      f = 0,
      h;
    if (!a) {
      const v = [Ip.bind(this), void 0];
      for (v.unshift.apply(v, l), v.push.apply(v, u), h = v.length, c = Promise.resolve(n); f < h; )
        c = c.then(v[f++], v[f++]);
      return c;
    }
    h = l.length;
    let y = n;
    for (f = 0; f < h; ) {
      const v = l[f++],
        S = l[f++];
      try {
        y = v(y);
      } catch (T) {
        S.call(this, T);
        break;
      }
    }
    try {
      c = Ip.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (f = 0, h = u.length; f < h; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = ar(this.defaults, t);
    const n = ug(t.baseURL, t.url);
    return og(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function (t) {
  Xn.prototype[t] = function (n, r) {
    return this.request(ar(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
x.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        ar(l || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: s })
      );
    };
  }
  (Xn.prototype[t] = n()), (Xn.prototype[t + "Form"] = n(!0));
});
class Lf {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new uo(i, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Lf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function j_(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function b_(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const dc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(dc).forEach(([e, t]) => {
  dc[t] = e;
});
function hg(e) {
  const t = new Xn(e),
    n = Kv(Xn.prototype.request, t);
  return (
    x.extend(n, Xn.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return hg(ar(e, o));
    }),
    n
  );
}
const he = hg(Ci);
he.Axios = Xn;
he.CanceledError = uo;
he.CancelToken = Lf;
he.isCancel = lg;
he.VERSION = pg;
he.toFormData = jl;
he.AxiosError = X;
he.Cancel = he.CanceledError;
he.all = function (t) {
  return Promise.all(t);
};
he.spread = j_;
he.isAxiosError = b_;
he.mergeConfig = ar;
he.AxiosHeaders = ut;
he.formToJSON = (e) => sg(x.isHTMLForm(e) ? new FormData(e) : e);
he.getAdapter = dg.getAdapter;
he.HttpStatusCode = dc;
he.default = he;
var mg = {};
function D_(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var M_ = D_,
  ne = M_;
function U_(e) {
  return !!e && typeof e.then == "function";
}
var Se = U_;
function z_(e, t) {
  if (e != null) return e;
  throw ne(t ?? "Got unexpected null or undefined");
}
var xe = z_;
function ee(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
class Dl {
  getValue() {
    throw ne("BaseLoadable");
  }
  toPromise() {
    throw ne("BaseLoadable");
  }
  valueMaybe() {
    throw ne("BaseLoadable");
  }
  valueOrThrow() {
    throw ne(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw ne("BaseLoadable");
  }
  promiseOrThrow() {
    throw ne(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw ne("BaseLoadable");
  }
  errorOrThrow() {
    throw ne(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw ne("BaseLoadable");
  }
}
class F_ extends Dl {
  constructor(t) {
    super(), ee(this, "state", "hasValue"), ee(this, "contents", void 0), (this.contents = t);
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
      return Se(n) ? ur(n) : Yr(n) ? n : Ni(n);
    } catch (n) {
      return Se(n) ? ur(n.next(() => this.map(t))) : Ml(n);
    }
  }
}
class B_ extends Dl {
  constructor(t) {
    super(), ee(this, "state", "hasError"), ee(this, "contents", void 0), (this.contents = t);
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
class vg extends Dl {
  constructor(t) {
    super(), ee(this, "state", "loading"), ee(this, "contents", void 0), (this.contents = t);
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
    return ur(
      this.contents
        .then((n) => {
          const r = t(n);
          if (Yr(r)) {
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
          if (Se(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function Ni(e) {
  return Object.freeze(new F_(e));
}
function Ml(e) {
  return Object.freeze(new B_(e));
}
function ur(e) {
  return Object.freeze(new vg(e));
}
function gg() {
  return Object.freeze(new vg(new Promise(() => {})));
}
function V_(e) {
  return e.every((t) => t.state === "hasValue")
    ? Ni(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
      ? Ml(
          xe(
            e.find((t) => t.state === "hasError"),
            "Invalid loadable passed to loadableAll"
          ).contents
        )
      : ur(Promise.all(e.map((t) => t.contents)));
}
function yg(e) {
  const n = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])).map((o) =>
      Yr(o) ? o : Se(o) ? ur(o) : Ni(o)
    ),
    r = V_(n);
  return Array.isArray(e)
    ? r
    : r.map((o) => Object.getOwnPropertyNames(e).reduce((i, s, l) => ({ ...i, [s]: o[l] }), {}));
}
function Yr(e) {
  return e instanceof Dl;
}
const W_ = {
  of: (e) => (Se(e) ? ur(e) : Yr(e) ? e : Ni(e)),
  error: (e) => Ml(e),
  loading: () => gg(),
  all: yg,
  isLoadable: Yr,
};
var pr = {
    loadableWithValue: Ni,
    loadableWithError: Ml,
    loadableWithPromise: ur,
    loadableLoading: gg,
    loadableAll: yg,
    isLoadable: Yr,
    RecoilLoadable: W_,
  },
  H_ = pr.loadableWithValue,
  K_ = pr.loadableWithError,
  G_ = pr.loadableWithPromise,
  Q_ = pr.loadableLoading,
  Y_ = pr.loadableAll,
  q_ = pr.isLoadable,
  J_ = pr.RecoilLoadable,
  Ai = Object.freeze({
    __proto__: null,
    loadableWithValue: H_,
    loadableWithError: K_,
    loadableWithPromise: G_,
    loadableLoading: Q_,
    loadableAll: Y_,
    isLoadable: q_,
    RecoilLoadable: J_,
  });
const pc = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function Z_(e, t) {
  var n, r;
  const o = (n = mg[e]) === null || n === void 0 || (r = n.toLowerCase()) === null || r === void 0 ? void 0 : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o)) throw ne(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function X_(e, t) {
  var n;
  const r = (n = mg[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function eE() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (Z_("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        pc.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      X_("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          pc.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
eE();
var co = pc;
function Ul(e) {
  return co.RECOIL_GKS_ENABLED.has(e);
}
Ul.setPass = (e) => {
  co.RECOIL_GKS_ENABLED.add(e);
};
Ul.setFail = (e) => {
  co.RECOIL_GKS_ENABLED.delete(e);
};
Ul.clear = () => {
  co.RECOIL_GKS_ENABLED.clear();
};
var me = Ul;
function tE(e, t, { error: n } = {}) {
  return null;
}
var nE = tE,
  Pf = nE,
  Ka,
  Ga,
  Qa;
const rE = (Ka = ae.createMutableSource) !== null && Ka !== void 0 ? Ka : ae.unstable_createMutableSource,
  Sg = (Ga = ae.useMutableSource) !== null && Ga !== void 0 ? Ga : ae.unstable_useMutableSource,
  wg = (Qa = ae.useSyncExternalStore) !== null && Qa !== void 0 ? Qa : ae.unstable_useSyncExternalStore;
function oE() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : n.currentDispatcher).useSyncExternalStore !=
    null
  );
}
function iE() {
  return me("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : me("recoil_sync_external_store") && wg != null
      ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
      : me("recoil_mutable_source") &&
          Sg != null &&
          typeof window < "u" &&
          !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
        ? me("recoil_suppress_rerender_in_callback")
          ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
          : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
        : me("recoil_suppress_rerender_in_callback")
          ? { mode: "LEGACY", early: !0, concurrent: !1 }
          : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function sE() {
  return !1;
}
var Li = {
  createMutableSource: rE,
  useMutableSource: Sg,
  useSyncExternalStore: wg,
  currentRendererSupportsUseSyncExternalStore: oE,
  reactMode: iE,
  isFastRefreshEnabled: sE,
};
class If {
  constructor(t) {
    ee(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class _g extends If {}
class Eg extends If {}
function lE(e) {
  return e instanceof _g || e instanceof Eg;
}
var zl = { AbstractRecoilValue: If, RecoilState: _g, RecoilValueReadOnly: Eg, isRecoilValue: lE },
  aE = zl.AbstractRecoilValue,
  uE = zl.RecoilState,
  cE = zl.RecoilValueReadOnly,
  fE = zl.isRecoilValue,
  qr = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: aE,
    RecoilState: uE,
    RecoilValueReadOnly: cE,
    isRecoilValue: fE,
  });
function dE(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var Fl = dE;
class Rg {}
const pE = new Rg(),
  cr = new Map(),
  $f = new Map();
function hE(e) {
  return Fl(e, (t) => xe($f.get(t)));
}
function mE(e) {
  if (cr.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function vE(e) {
  co.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && mE(e.key), cr.set(e.key, e);
  const t = e.set == null ? new qr.RecoilValueReadOnly(e.key) : new qr.RecoilState(e.key);
  return $f.set(e.key, t), t;
}
class xg extends Error {}
function gE(e) {
  const t = cr.get(e);
  if (t == null) throw new xg(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function yE(e) {
  return cr.get(e);
}
const al = new Map();
function SE(e) {
  var t;
  if (!me("recoil_memory_managament_2020")) return;
  const n = cr.get(e);
  if (n != null && (t = n.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(n)) {
    var r;
    cr.delete(e), (r = kg(e)) === null || r === void 0 || r(), al.delete(e);
  }
}
function wE(e, t) {
  me("recoil_memory_managament_2020") && (t === void 0 ? al.delete(e) : al.set(e, t));
}
function kg(e) {
  return al.get(e);
}
var ft = {
  nodes: cr,
  recoilValues: $f,
  registerNode: vE,
  getNode: gE,
  getNodeMaybe: yE,
  deleteNodeConfigIfPossible: SE,
  setConfigDeletionHandler: wE,
  getConfigDeletionHandler: kg,
  recoilValuesForKeys: hE,
  NodeMissingError: xg,
  DefaultValue: Rg,
  DEFAULT_VALUE: pE,
};
function _E(e, t) {
  t();
}
var EE = { enqueueExecution: _E };
function RE(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var xE = RE(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (E) {
            return typeof E;
          }
        : function (E) {
            return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype
              ? "symbol"
              : typeof E;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    s = o / 2,
    l = o / 4,
    a = {},
    u = function (w) {
      return function () {
        return w;
      };
    },
    c = (n.hash = function (E) {
      var w = typeof E > "u" ? "undefined" : t(E);
      if (w === "number") return E;
      w !== "string" && (E += "");
      for (var A = 0, z = 0, F = E.length; z < F; ++z) {
        var V = E.charCodeAt(z);
        A = ((A << 5) - A + V) | 0;
      }
      return A;
    }),
    f = function (w) {
      return (
        (w -= (w >> 1) & 1431655765),
        (w = (w & 858993459) + ((w >> 2) & 858993459)),
        (w = (w + (w >> 4)) & 252645135),
        (w += w >> 8),
        (w += w >> 16),
        w & 127
      );
    },
    h = function (w, A) {
      return (A >>> w) & i;
    },
    y = function (w) {
      return 1 << w;
    },
    v = function (w, A) {
      return f(w & (A - 1));
    },
    S = function (w, A, z, F) {
      var V = F;
      if (!w) {
        var q = F.length;
        V = new Array(q);
        for (var Q = 0; Q < q; ++Q) V[Q] = F[Q];
      }
      return (V[A] = z), V;
    },
    T = function (w, A, z) {
      var F = z.length - 1,
        V = 0,
        q = 0,
        Q = z;
      if (w) V = q = A;
      else for (Q = new Array(F); V < A; ) Q[q++] = z[V++];
      for (++V; V <= F; ) Q[q++] = z[V++];
      return w && (Q.length = F), Q;
    },
    m = function (w, A, z, F) {
      var V = F.length;
      if (w) {
        for (var q = V; q >= A; ) F[q--] = F[q];
        return (F[A] = z), F;
      }
      for (var Q = 0, Y = 0, oe = new Array(V + 1); Q < A; ) oe[Y++] = F[Q++];
      for (oe[A] = z; Q < V; ) oe[++Y] = F[Q++];
      return oe;
    },
    d = 1,
    p = 2,
    R = 3,
    N = 4,
    C = { __hamt_isEmpty: !0 },
    k = function (w) {
      return w === C || (w && w.__hamt_isEmpty);
    },
    $ = function (w, A, z, F) {
      return { type: d, edit: w, hash: A, key: z, value: F, _modify: M };
    },
    re = function (w, A, z) {
      return { type: p, edit: w, hash: A, children: z, _modify: H };
    },
    D = function (w, A, z) {
      return { type: R, edit: w, mask: A, children: z, _modify: b };
    },
    de = function (w, A, z) {
      return { type: N, edit: w, size: A, children: z, _modify: K };
    },
    et = function (w) {
      return w === C || w.type === d || w.type === p;
    },
    ue = function (w, A, z, F, V) {
      for (var q = [], Q = F, Y = 0, oe = 0; Q; ++oe) Q & 1 && (q[oe] = V[Y++]), (Q >>>= 1);
      return (q[A] = z), de(w, Y + 1, q);
    },
    be = function (w, A, z, F) {
      for (var V = new Array(A - 1), q = 0, Q = 0, Y = 0, oe = F.length; Y < oe; ++Y)
        if (Y !== z) {
          var Ee = F[Y];
          Ee && !k(Ee) && ((V[q++] = Ee), (Q |= 1 << Y));
        }
      return D(w, Q, V);
    },
    $t = function E(w, A, z, F, V, q) {
      if (z === V) return re(w, z, [q, F]);
      var Q = h(A, z),
        Y = h(A, V);
      return D(w, y(Q) | y(Y), Q === Y ? [E(w, A + r, z, F, V, q)] : Q < Y ? [F, q] : [q, F]);
    },
    De = function (w, A, z, F, V, q, Q, Y) {
      for (var oe = V.length, Ee = 0; Ee < oe; ++Ee) {
        var tt = V[Ee];
        if (z(Q, tt.key)) {
          var Me = tt.value,
            _t = q(Me);
          return _t === Me ? V : _t === a ? (--Y.value, T(w, Ee, V)) : S(w, Ee, $(A, F, Q, _t), V);
        }
      }
      var jt = q();
      return jt === a ? V : (++Y.value, S(w, oe, $(A, F, Q, jt), V));
    },
    Be = function (w, A) {
      return w === A.edit;
    },
    M = function (w, A, z, F, V, q, Q) {
      if (A(q, this.key)) {
        var Y = F(this.value);
        return Y === this.value
          ? this
          : Y === a
            ? (--Q.value, C)
            : Be(w, this)
              ? ((this.value = Y), this)
              : $(w, V, q, Y);
      }
      var oe = F();
      return oe === a ? this : (++Q.value, $t(w, z, this.hash, this, V, $(w, V, q, oe)));
    },
    H = function (w, A, z, F, V, q, Q) {
      if (V === this.hash) {
        var Y = Be(w, this),
          oe = De(Y, w, A, this.hash, this.children, F, q, Q);
        return oe === this.children ? this : oe.length > 1 ? re(w, this.hash, oe) : oe[0];
      }
      var Ee = F();
      return Ee === a ? this : (++Q.value, $t(w, z, this.hash, this, V, $(w, V, q, Ee)));
    },
    b = function (w, A, z, F, V, q, Q) {
      var Y = this.mask,
        oe = this.children,
        Ee = h(z, V),
        tt = y(Ee),
        Me = v(Y, tt),
        _t = Y & tt,
        jt = _t ? oe[Me] : C,
        mr = jt._modify(w, A, z + r, F, V, q, Q);
      if (jt === mr) return this;
      var Mi = Be(w, this),
        yo = Y,
        So = void 0;
      if (_t && k(mr)) {
        if (((yo &= ~tt), !yo)) return C;
        if (oe.length <= 2 && et(oe[Me ^ 1])) return oe[Me ^ 1];
        So = T(Mi, Me, oe);
      } else if (!_t && !k(mr)) {
        if (oe.length >= s) return ue(w, Ee, mr, Y, oe);
        (yo |= tt), (So = m(Mi, Me, mr, oe));
      } else So = S(Mi, Me, mr, oe);
      return Mi ? ((this.mask = yo), (this.children = So), this) : D(w, yo, So);
    },
    K = function (w, A, z, F, V, q, Q) {
      var Y = this.size,
        oe = this.children,
        Ee = h(z, V),
        tt = oe[Ee],
        Me = (tt || C)._modify(w, A, z + r, F, V, q, Q);
      if (tt === Me) return this;
      var _t = Be(w, this),
        jt = void 0;
      if (k(tt) && !k(Me)) ++Y, (jt = S(_t, Ee, Me, oe));
      else if (!k(tt) && k(Me)) {
        if ((--Y, Y <= l)) return be(w, Y, Ee, oe);
        jt = S(_t, Ee, C, oe);
      } else jt = S(_t, Ee, Me, oe);
      return _t ? ((this.size = Y), (this.children = jt), this) : de(w, Y, jt);
    };
  C._modify = function (E, w, A, z, F, V, q) {
    var Q = z();
    return Q === a ? C : (++q.value, $(E, F, V, Q));
  };
  function _(E, w, A, z, F) {
    (this._editable = E), (this._edit = w), (this._config = A), (this._root = z), (this._size = F);
  }
  _.prototype.setTree = function (E, w) {
    return this._editable
      ? ((this._root = E), (this._size = w), this)
      : E === this._root
        ? this
        : new _(this._editable, this._edit, this._config, E, w);
  };
  var P = (n.tryGetHash = function (E, w, A, z) {
    for (var F = z._root, V = 0, q = z._config.keyEq; ; )
      switch (F.type) {
        case d:
          return q(A, F.key) ? F.value : E;
        case p: {
          if (w === F.hash)
            for (var Q = F.children, Y = 0, oe = Q.length; Y < oe; ++Y) {
              var Ee = Q[Y];
              if (q(A, Ee.key)) return Ee.value;
            }
          return E;
        }
        case R: {
          var tt = h(V, w),
            Me = y(tt);
          if (F.mask & Me) {
            (F = F.children[v(F.mask, Me)]), (V += r);
            break;
          }
          return E;
        }
        case N: {
          if (((F = F.children[h(V, w)]), F)) {
            V += r;
            break;
          }
          return E;
        }
        default:
          return E;
      }
  });
  _.prototype.tryGetHash = function (E, w, A) {
    return P(E, w, A, this);
  };
  var I = (n.tryGet = function (E, w, A) {
    return P(E, A._config.hash(w), w, A);
  });
  _.prototype.tryGet = function (E, w) {
    return I(E, w, this);
  };
  var G = (n.getHash = function (E, w, A) {
    return P(void 0, E, w, A);
  });
  (_.prototype.getHash = function (E, w) {
    return G(E, w, this);
  }),
    (n.get = function (E, w) {
      return P(void 0, w._config.hash(E), E, w);
    }),
    (_.prototype.get = function (E, w) {
      return I(w, E, this);
    });
  var U = (n.has = function (E, w, A) {
    return P(a, E, w, A) !== a;
  });
  _.prototype.hasHash = function (E, w) {
    return U(E, w, this);
  };
  var J = (n.has = function (E, w) {
    return U(w._config.hash(E), E, w);
  });
  _.prototype.has = function (E) {
    return J(E, this);
  };
  var Z = function (w, A) {
    return w === A;
  };
  (n.make = function (E) {
    return new _(0, 0, { keyEq: (E && E.keyEq) || Z, hash: (E && E.hash) || c }, C, 0);
  }),
    (n.empty = n.make());
  var W = (n.isEmpty = function (E) {
    return E && !!k(E._root);
  });
  _.prototype.isEmpty = function () {
    return W(this);
  };
  var pe = (n.modifyHash = function (E, w, A, z) {
    var F = { value: z._size },
      V = z._root._modify(z._editable ? z._edit : NaN, z._config.keyEq, 0, E, w, A, F);
    return z.setTree(V, F.value);
  });
  _.prototype.modifyHash = function (E, w, A) {
    return pe(A, E, w, this);
  };
  var _e = (n.modify = function (E, w, A) {
    return pe(E, A._config.hash(w), w, A);
  });
  _.prototype.modify = function (E, w) {
    return _e(w, E, this);
  };
  var ie = (n.setHash = function (E, w, A, z) {
    return pe(u(A), E, w, z);
  });
  _.prototype.setHash = function (E, w, A) {
    return ie(E, w, A, this);
  };
  var ke = (n.set = function (E, w, A) {
    return ie(A._config.hash(E), E, w, A);
  });
  _.prototype.set = function (E, w) {
    return ke(E, w, this);
  };
  var Ot = u(a),
    Vn = (n.removeHash = function (E, w, A) {
      return pe(Ot, E, w, A);
    });
  _.prototype.removeHash = _.prototype.deleteHash = function (E, w) {
    return Vn(E, w, this);
  };
  var wt = (n.remove = function (E, w) {
    return Vn(w._config.hash(E), E, w);
  });
  _.prototype.remove = _.prototype.delete = function (E) {
    return wt(E, this);
  };
  var dt = (n.beginMutation = function (E) {
    return new _(E._editable + 1, E._edit + 1, E._config, E._root, E._size);
  });
  _.prototype.beginMutation = function () {
    return dt(this);
  };
  var ad = (n.endMutation = function (E) {
    return (E._editable = E._editable && E._editable - 1), E;
  });
  _.prototype.endMutation = function () {
    return ad(this);
  };
  var C0 = (n.mutate = function (E, w) {
    var A = dt(w);
    return E(A), ad(A);
  });
  _.prototype.mutate = function (E) {
    return C0(E, this);
  };
  var pa = function (w) {
      return w && ud(w[0], w[1], w[2], w[3], w[4]);
    },
    ud = function (w, A, z, F, V) {
      for (; z < w; ) {
        var q = A[z++];
        if (q && !k(q)) return cd(q, F, [w, A, z, F, V]);
      }
      return pa(V);
    },
    cd = function (w, A, z) {
      switch (w.type) {
        case d:
          return { value: A(w), rest: z };
        case p:
        case N:
        case R:
          var F = w.children;
          return ud(F.length, F, 0, A, z);
        default:
          return pa(z);
      }
    },
    N0 = { done: !0 };
  function ha(E) {
    this.v = E;
  }
  (ha.prototype.next = function () {
    if (!this.v) return N0;
    var E = this.v;
    return (this.v = pa(E.rest)), E;
  }),
    (ha.prototype[Symbol.iterator] = function () {
      return this;
    });
  var ma = function (w, A) {
      return new ha(cd(w._root, A));
    },
    A0 = function (w) {
      return [w.key, w.value];
    },
    L0 = (n.entries = function (E) {
      return ma(E, A0);
    });
  _.prototype.entries = _.prototype[Symbol.iterator] = function () {
    return L0(this);
  };
  var P0 = function (w) {
      return w.key;
    },
    I0 = (n.keys = function (E) {
      return ma(E, P0);
    });
  _.prototype.keys = function () {
    return I0(this);
  };
  var $0 = function (w) {
      return w.value;
    },
    O0 =
      (n.values =
      _.prototype.values =
        function (E) {
          return ma(E, $0);
        });
  _.prototype.values = function () {
    return O0(this);
  };
  var fd = (n.fold = function (E, w, A) {
    var z = A._root;
    if (z.type === d) return E(w, z.value, z.key);
    for (var F = [z.children], V = void 0; (V = F.pop()); )
      for (var q = 0, Q = V.length; q < Q; ) {
        var Y = V[q++];
        Y && Y.type && (Y.type === d ? (w = E(w, Y.value, Y.key)) : F.push(Y.children));
      }
    return w;
  });
  _.prototype.fold = function (E, w) {
    return fd(E, w, this);
  };
  var j0 = (n.forEach = function (E, w) {
    return fd(
      function (A, z, F) {
        return E(z, F, w);
      },
      null,
      w
    );
  });
  _.prototype.forEach = function (E) {
    return j0(E, this);
  };
  var b0 = (n.count = function (E) {
    return E._size;
  });
  (_.prototype.count = function () {
    return b0(this);
  }),
    Object.defineProperty(_.prototype, "size", { get: _.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class kE {
  constructor(t) {
    ee(this, "_map", void 0), (this._map = new Map(t == null ? void 0 : t.entries()));
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
    return jf(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Of {
  constructor(t) {
    if ((ee(this, "_hamt", xE.empty.beginMutation()), t instanceof Of)) {
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
    return jf(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function jf(e) {
  return me("recoil_hamt_2020") ? new Of(e) : new kE(e);
}
var TE = { persistentMap: jf },
  CE = TE.persistentMap,
  NE = Object.freeze({ __proto__: null, persistentMap: CE });
function AE(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var qo = AE;
function LE(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var ul = LE;
function PE() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function IE(e) {
  return {
    nodeDeps: ul(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: ul(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function Ya(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    s = o.get(e);
  if (s && r && s !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const l = s == null ? t : qo(t, s);
  for (const a of l) i.has(a) || i.set(a, new Set()), xe(i.get(a)).add(e);
  if (s) {
    const a = qo(s, t);
    for (const u of a) {
      if (!i.has(u)) return;
      const c = xe(i.get(u));
      c.delete(e), c.size === 0 && i.delete(u);
    }
  }
}
function $E(e, t, n, r) {
  var o, i, s, l;
  const a = n.getState();
  r === a.currentTree.version ||
    r === ((o = a.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = a.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if ((Ya(e, t, u), r === ((s = a.previousTree) === null || s === void 0 ? void 0 : s.version))) {
    const f = n.getGraph(a.currentTree.version);
    Ya(e, t, f, u);
  }
  if (r === ((l = a.previousTree) === null || l === void 0 ? void 0 : l.version) || r === a.currentTree.version) {
    var c;
    const f = (c = a.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (f !== void 0) {
      const h = n.getGraph(f);
      Ya(e, t, h, u);
    }
  }
}
var Pi = { cloneGraph: IE, graph: PE, saveDepsToStore: $E };
let OE = 0;
const jE = () => OE++;
let bE = 0;
const DE = () => bE++;
let ME = 0;
const UE = () => ME++;
var Bl = { getNextTreeStateVersion: jE, getNextStoreID: DE, getNextComponentID: UE };
const { persistentMap: Op } = NE,
  { graph: zE } = Pi,
  { getNextTreeStateVersion: Tg } = Bl;
function Cg() {
  const e = Tg();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: Op(),
    nonvalidatedAtoms: Op(),
  };
}
function FE() {
  const e = Cg();
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
    graphsByVersion: new Map().set(e.version, zE()),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(),
  };
}
var Ng = { makeEmptyTreeState: Cg, makeEmptyStoreState: FE, getNextTreeStateVersion: Tg };
class Ag {}
function BE() {
  return new Ag();
}
var Vl = { RetentionZone: Ag, retentionZone: BE };
function VE(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function WE(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function HE(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function KE(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function GE(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function QE(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var Lg = {
  setByAddingToSet: VE,
  setByDeletingFromSet: WE,
  mapBySettingInMap: HE,
  mapByUpdatingInMap: KE,
  mapByDeletingFromMap: GE,
  mapByDeletingMultipleFromMap: QE,
};
function* YE(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var bf = YE;
function qE(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var Pg = qE;
const { getNode: Ii, getNodeMaybe: JE, recoilValuesForKeys: jp } = ft,
  { RetentionZone: bp } = Vl,
  { setByAddingToSet: ZE } = Lg,
  XE = Object.freeze(new Set());
class eR extends Error {}
function tR(e, t, n) {
  if (!me("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let s = r.get(i);
    s || r.set(i, (s = new Set())), s.add(t);
  }
  if (n instanceof bp) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!me("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function s(l) {
      const a = i.nodesRetainedByZone.get(l);
      a == null || a.delete(t), a && a.size === 0 && i.nodesRetainedByZone.delete(l);
    }
    if (n instanceof bp) s(n);
    else if (Array.isArray(n)) for (const l of n) s(l);
  };
}
function Df(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = Ii(n),
    s = tR(e, n, i.retainedBy),
    l = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    l(), s();
  });
}
function nR(e, t, n) {
  Df(e, e.getState().currentTree, t, n);
}
function rR(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(), r.nodeCleanupFunctions.delete(t);
}
function oR(e, t, n) {
  return Df(e, t, n, "get"), Ii(n).get(e, t);
}
function Ig(e, t, n) {
  return Ii(n).peek(e, t);
}
function iR(e, t, n) {
  var r;
  const o = JE(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: ZE(e.dirtyAtoms, t),
    }
  );
}
function sR(e, t, n, r) {
  const o = Ii(n);
  if (o.set == null) throw new eR(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return Df(e, t, n, "set"), i(e, t, r);
}
function lR(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = Ii(n).nodeType;
  return Pg(
    { type: i },
    {
      loadable: () => Ig(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var s;
        return jp((s = o.nodeDeps.get(n)) !== null && s !== void 0 ? s : []);
      },
      subscribers: () => {
        var s, l;
        return {
          nodes: jp(bf($g(e, t, new Set([n])), (a) => a !== n)),
          components: Fl(
            (s = (l = r.nodeToComponentSubscriptions.get(n)) === null || l === void 0 ? void 0 : l.values()) !== null &&
              s !== void 0
              ? s
              : [],
            ([a]) => ({ name: a })
          ),
        };
      },
    }
  );
}
function $g(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let l = o.pop(); l; l = o.pop()) {
    var s;
    r.add(l);
    const a = (s = i.nodeToNodeSubscriptions.get(l)) !== null && s !== void 0 ? s : XE;
    for (const u of a) r.has(u) || o.push(u);
  }
  return r;
}
var zn = {
  getNodeLoadable: oR,
  peekNodeLoadable: Ig,
  setNodeValue: sR,
  initializeNode: nR,
  cleanUpNode: rR,
  setUnvalidatedAtomValue_DEPRECATED: iR,
  peekNodeInfo: lR,
  getDownstreamNodes: $g,
};
let Og = null;
function aR(e) {
  Og = e;
}
function uR() {
  var e;
  (e = Og) === null || e === void 0 || e();
}
var jg = { setInvalidateMemoizedSnapshot: aR, invalidateMemoizedSnapshot: uR };
const { getDownstreamNodes: cR, getNodeLoadable: bg, setNodeValue: fR } = zn,
  { getNextComponentID: dR } = Bl,
  { getNode: pR, getNodeMaybe: Dg } = ft,
  { DefaultValue: Mf } = ft,
  { reactMode: hR } = Li,
  { AbstractRecoilValue: mR, RecoilState: vR, RecoilValueReadOnly: gR, isRecoilValue: yR } = qr,
  { invalidateMemoizedSnapshot: SR } = jg;
function wR(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version === ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const s = bg(e, n, t);
  return s.state === "loading" && s.contents.catch(() => {}), s;
}
function _R(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof Mf ? n.delete(o) : n.set(o, r);
    }),
    n
  );
}
function ER(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = bg(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw ne(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function RR(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      s = ER(e, t, o, i),
      l = fR(e, t, o.key, s);
    for (const [a, u] of l.entries()) hc(t, a, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    hc(t, o, i);
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
      s = Dg(o);
    s == null || (r = s.invalidate) === null || r === void 0 || r.call(s, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Pf(`Unknown action ${n.type}`);
}
function hc(e, t, n) {
  n.state === "hasValue" && n.contents instanceof Mf ? e.atomValues.delete(t) : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function Mg(e, t) {
  e.replaceState((n) => {
    const r = Ug(n);
    for (const o of t) RR(e, r, o);
    return zg(e, r), SR(), r;
  });
}
function Wl(e, t) {
  if (Jo.length) {
    const n = Jo[Jo.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else Mg(e, [t]);
}
const Jo = [];
function xR() {
  const e = new Map();
  return (
    Jo.push(e),
    () => {
      for (const [t, n] of e) Mg(t, n);
      Jo.pop();
    }
  );
}
function Ug(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function zg(e, t) {
  const n = cR(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = Dg(i)) === null || r === void 0 || (o = r.invalidate) === null || o === void 0 || o.call(r, t);
  }
}
function Fg(e, t, n) {
  Wl(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function kR(e, t, n) {
  if (n instanceof Mf) return Fg(e, t, n);
  Wl(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function TR(e, t) {
  Wl(e, { type: "markModified", recoilValue: t });
}
function CR(e, t, n) {
  Wl(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function NR(e, { key: t }, n, r = null) {
  const o = dR(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map()),
    xe(i.nodeToComponentSubscriptions.get(t)).set(o, [r ?? "<not captured>", n]);
  const s = hR();
  if (s.early && (s.mode === "LEGACY" || s.mode === "MUTABLE_SOURCE")) {
    const l = e.getState().nextTree;
    l && l.dirtyAtoms.has(t) && n(l);
  }
  return {
    release: () => {
      const l = e.getState(),
        a = l.nodeToComponentSubscriptions.get(t);
      a === void 0 || !a.has(o) || (a.delete(o), a.size === 0 && l.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function AR(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = pR(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var Xt = {
  RecoilValueReadOnly: gR,
  AbstractRecoilValue: mR,
  RecoilState: vR,
  getRecoilValueAsLoadable: wR,
  setRecoilValue: Fg,
  setRecoilValueLoadable: kR,
  markRecoilValueModified: TR,
  setUnvalidatedRecoilValue: CR,
  subscribeToRecoilValue: NR,
  isRecoilValue: yR,
  applyAtomValueWrites: _R,
  batchStart: xR,
  writeLoadableToTreeState: hc,
  invalidateDownstreams: zg,
  copyTreeState: Ug,
  refreshRecoilValue: AR,
};
function LR(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var PR = LR;
const { cleanUpNode: IR } = zn,
  { deleteNodeConfigIfPossible: $R, getNode: Bg } = ft,
  { RetentionZone: Vg } = Vl,
  OR = 12e4,
  Wg = new Set();
function Hg(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const s of t)
    if (s instanceof Vg) for (const l of MR(n, s)) o.add(l);
    else o.add(s);
  const i = jR(e, o);
  for (const s of i) DR(e, r, s);
}
function jR(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    s = new Set();
  return l(t), i;
  function l(a) {
    const u = new Set(),
      c = bR(e, r, a, i, s);
    for (const v of c) {
      var f;
      if (Bg(v).retainedBy === "recoilRoot") {
        s.add(v);
        continue;
      }
      if (((f = n.retention.referenceCounts.get(v)) !== null && f !== void 0 ? f : 0) > 0) {
        s.add(v);
        continue;
      }
      if (Kg(v).some((T) => n.retention.referenceCounts.get(T))) {
        s.add(v);
        continue;
      }
      const S = o.nodeToNodeSubscriptions.get(v);
      if (S && PR(S, (T) => s.has(T))) {
        s.add(v);
        continue;
      }
      i.add(v), u.add(v);
    }
    const h = new Set();
    for (const v of u)
      for (const S of (y = o.nodeDeps.get(v)) !== null && y !== void 0 ? y : Wg) {
        var y;
        i.has(S) || h.add(S);
      }
    h.size && l(h);
  }
}
function bR(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    s = [],
    l = new Set();
  for (; n.size > 0; ) a(xe(n.values().next().value));
  return s;
  function a(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (l.has(u)) return;
    const c = i.nodeToNodeSubscriptions.get(u);
    if (c) for (const f of c) a(f);
    l.add(u), n.delete(u), s.push(u);
  }
}
function DR(e, t, n) {
  if (!me("recoil_memory_managament_2020")) return;
  IR(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = Kg(n);
  for (const a of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(a)) === null || i === void 0 || i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const s = r.graphsByVersion.get(t.version);
  if (s) {
    const a = s.nodeDeps.get(n);
    if (a !== void 0) {
      s.nodeDeps.delete(n);
      for (const u of a) {
        var l;
        (l = s.nodeToNodeSubscriptions.get(u)) === null || l === void 0 || l.delete(n);
      }
    }
    s.nodeToNodeSubscriptions.delete(n);
  }
  $R(n);
}
function MR(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0 ? n : Wg;
}
function Kg(e) {
  const t = Bg(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot" ? [] : t instanceof Vg ? [t] : t;
}
function UR(e, t) {
  const n = e.getState();
  n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : Hg(e, new Set([t]));
}
function zR(e, t, n) {
  var r;
  if (!me("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? Gg(e, t) : o.set(t, i);
}
function Gg(e, t) {
  if (!me("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), UR(e, t);
}
function FR(e) {
  if (!me("recoil_memory_managament_2020")) return;
  const t = e.getState();
  Hg(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear();
}
function BR(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var hr = {
  SUSPENSE_TIMEOUT_MS: OR,
  updateRetainCount: zR,
  updateRetainCountToZero: Gg,
  releaseScheduledRetainablesNow: FR,
  retainedByOptionWithDefault: BR,
};
const { unstable_batchedUpdates: VR } = cw;
var WR = { unstable_batchedUpdates: VR };
const { unstable_batchedUpdates: HR } = WR;
var KR = { unstable_batchedUpdates: HR };
const { batchStart: GR } = Xt,
  { unstable_batchedUpdates: QR } = KR;
let Uf = QR || ((e) => e());
const YR = (e) => {
    Uf = e;
  },
  qR = () => Uf,
  JR = (e) => {
    Uf(() => {
      let t = () => {};
      try {
        (t = GR()), e();
      } finally {
        t();
      }
    });
  };
var Hl = { getBatcher: qR, setBatcher: YR, batchUpdates: JR };
function* ZR(e) {
  for (const t of e) for (const n of t) yield n;
}
var Qg = ZR;
const Yg = typeof Window > "u" || typeof window > "u",
  XR = (e) => !Yg && (e === window || e instanceof Window),
  ex = typeof navigator < "u" && navigator.product === "ReactNative";
var Kl = { isSSR: Yg, isReactNative: ex, isWindow: XR };
function tx(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function nx(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function rx(e, t) {
  let n, r;
  return [
    (...s) => {
      const l = t(...s);
      return n === l || ((n = l), (r = e(...s))), r;
    },
    () => {
      n = null;
    },
  ];
}
var ox = { memoizeWithArgsHash: tx, memoizeOneWithArgsHash: nx, memoizeOneWithArgsHashAndInvalidation: rx };
const { batchUpdates: mc } = Hl,
  { initializeNode: ix, peekNodeInfo: sx } = zn,
  { graph: lx } = Pi,
  { getNextStoreID: ax } = Bl,
  { DEFAULT_VALUE: ux, recoilValues: Dp, recoilValuesForKeys: Mp } = ft,
  { AbstractRecoilValue: cx, getRecoilValueAsLoadable: fx, setRecoilValue: Up, setUnvalidatedRecoilValue: dx } = Xt,
  { updateRetainCount: Ns } = hr,
  { setInvalidateMemoizedSnapshot: px } = jg,
  { getNextTreeStateVersion: hx, makeEmptyStoreState: mx } = Ng,
  { isSSR: vx } = Kl,
  { memoizeOneWithArgsHashAndInvalidation: gx } = ox;
class Gl {
  constructor(t, n) {
    ee(this, "_store", void 0),
      ee(this, "_refCount", 1),
      ee(this, "getLoadable", (r) => (this.checkRefCount_INTERNAL(), fx(this._store, r))),
      ee(this, "getPromise", (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())),
      ee(this, "getNodes_UNSTABLE", (r) => {
        if ((this.checkRefCount_INTERNAL(), (r == null ? void 0 : r.isModified) === !0)) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const s = this._store.getState().currentTree;
          return Mp(s.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? Dp.values()
          : r.isInitialized === !0
            ? Mp(Qg([o, i]))
            : bf(Dp.values(), ({ key: s }) => !o.has(s) && !i.has(s));
      }),
      ee(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (this.checkRefCount_INTERNAL(), sx(this._store, this._store.getState().currentTree, r))
      ),
      ee(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new vc(this, mc);
        return r(o), o;
      }),
      ee(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new vc(this, mc);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: ax(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return xe(o.get(r));
          const i = lx();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw ne("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms) ix(this._store, r, "get"), Ns(this._store, r, 1);
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
    vx || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !me("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    me("recoil_memory_managament_2020") && this._refCount <= 0;
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
function qg(e, t, n = !1) {
  const r = e.getState(),
    o = n ? hx() : t.version;
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
    nodeCleanupFunctions: new Map(Fl(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])),
  };
}
function yx(e) {
  const t = new Gl(mx());
  return e != null ? t.map(e) : t;
}
const [zp, Jg] = gx(
  (e, t) => {
    var n;
    const r = e.getState(),
      o = t === "latest" ? ((n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree) : xe(r.previousTree);
    return new Gl(qg(e, o), e.storeID);
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
px(Jg);
function Sx(e, t = "latest") {
  const n = zp(e, t);
  return n.isRetained() ? n : (Jg(), zp(e, t));
}
class vc extends Gl {
  constructor(t, n) {
    super(qg(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()),
      ee(this, "_batch", void 0),
      ee(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          Ns(i, r.key, 1), Up(this.getStore_INTERNAL(), r, o);
        });
      }),
      ee(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          Ns(o, r.key, 1), Up(this.getStore_INTERNAL(), r, ux);
        });
      }),
      ee(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        mc(() => {
          for (const [i, s] of r.entries()) Ns(o, i, 1), dx(o, new cx(i), s);
        });
      }),
      (this._batch = n);
  }
}
var Ql = { Snapshot: Gl, MutableSnapshot: vc, freshSnapshot: yx, cloneSnapshot: Sx },
  wx = Ql.Snapshot,
  _x = Ql.MutableSnapshot,
  Ex = Ql.freshSnapshot,
  Rx = Ql.cloneSnapshot,
  Yl = Object.freeze({ __proto__: null, Snapshot: wx, MutableSnapshot: _x, freshSnapshot: Ex, cloneSnapshot: Rx });
function xx(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var kx = xx;
const { useRef: Tx } = ae;
function Cx(e) {
  const t = Tx(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var Fp = Cx;
const { getNextTreeStateVersion: Nx, makeEmptyStoreState: Zg } = Ng,
  {
    cleanUpNode: Ax,
    getDownstreamNodes: Lx,
    initializeNode: Px,
    setNodeValue: Ix,
    setUnvalidatedAtomValue_DEPRECATED: $x,
  } = zn,
  { graph: Ox } = Pi,
  { cloneGraph: jx } = Pi,
  { getNextStoreID: Xg } = Bl,
  { createMutableSource: qa, reactMode: ey } = Li,
  { applyAtomValueWrites: bx } = Xt,
  { releaseScheduledRetainablesNow: ty } = hr,
  { freshSnapshot: Dx } = Yl,
  { useCallback: Mx, useContext: ny, useEffect: gc, useMemo: Ux, useRef: zx, useState: Fx } = ae;
function Ao() {
  throw ne("This component must be used inside a <RecoilRoot> component.");
}
const ry = Object.freeze({
  storeID: Xg(),
  getState: Ao,
  replaceState: Ao,
  getGraph: Ao,
  subscribeToTransactions: Ao,
  addTransactionMetadata: Ao,
});
let yc = !1;
function Bp(e) {
  if (yc)
    throw ne(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    me("recoil_memory_managament_2020") &&
      me("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      ty(e);
    const n = t.currentTree.version,
      r = Nx();
    (t.nextTree = { ...t.currentTree, version: r, stateID: r, dirtyAtoms: new Set(), transactionMetadata: {} }),
      t.graphsByVersion.set(r, jx(xe(t.graphsByVersion.get(n))));
  }
}
const oy = ae.createContext({ current: ry }),
  ql = () => ny(oy),
  iy = ae.createContext(null);
function Bx() {
  return ny(iy);
}
function zf(e, t, n) {
  const r = Lx(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [s, [l, a]] of i) a(n);
  }
}
function sy(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions) if (r.has(o)) for (const [s, l] of i) l(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!ey().early || t.suspendedComponentResolvers.size > 0) &&
      (zf(e, t, n), t.suspendedComponentResolvers.forEach((o) => o()), t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length);
}
function Vx(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      sy(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Pf("Ended batch with no previous state, which is unexpected", "recoil"),
      (t.previousTree = null),
      me("recoil_memory_managament_2020") && n == null && ty(e);
  } finally {
    t.commitDepth--;
  }
}
function Wx({ setNotifyBatcherOfChange: e }) {
  const t = ql(),
    [, n] = Fx([]);
  return (
    e(() => n({})),
    gc(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    gc(() => {
      EE.enqueueExecution("Batcher", () => {
        Vx(t.current);
      });
    }),
    null
  );
}
function Hx(e, t) {
  const n = Zg();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          s = Ix(e, i, r.key, o),
          l = new Set(s.keys()),
          a = i.nonvalidatedAtoms.clone();
        for (const u of l) a.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: kx(i.dirtyAtoms, l),
          atomValues: bx(i.atomValues, s),
          nonvalidatedAtoms: a,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = $x(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function Kx(e) {
  const t = Dx(e),
    n = t.getStore_INTERNAL().getState();
  return t.retain(), n.nodeCleanupFunctions.forEach((r) => r()), n.nodeCleanupFunctions.clear(), n;
}
let Vp = 0;
function Gx({ initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: n, children: r }) {
  let o;
  const i = (y) => {
      const v = o.current.graphsByVersion;
      if (v.has(y)) return xe(v.get(y));
      const S = Ox();
      return v.set(y, S), S;
    },
    s = (y, v) => {
      if (v == null) {
        const { transactionSubscriptions: S } = f.current.getState(),
          T = Vp++;
        return (
          S.set(T, y),
          {
            release: () => {
              S.delete(T);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: S } = f.current.getState();
        S.has(v) || S.set(v, new Map());
        const T = Vp++;
        return (
          xe(S.get(v)).set(T, y),
          {
            release: () => {
              const m = S.get(v);
              m && (m.delete(T), m.size === 0 && S.delete(v));
            },
          }
        );
      }
    },
    l = (y) => {
      Bp(f.current);
      for (const v of Object.keys(y)) xe(f.current.getState().nextTree).transactionMetadata[v] = y[v];
    },
    a = (y) => {
      Bp(f.current);
      const v = xe(o.current.nextTree);
      let S;
      try {
        (yc = !0), (S = y(v));
      } finally {
        yc = !1;
      }
      S !== v && ((o.current.nextTree = S), ey().early && zf(f.current, o.current, S), xe(u.current)());
    },
    u = zx(null),
    c = Mx(
      (y) => {
        u.current = y;
      },
      [u]
    ),
    f = Fp(
      () =>
        n ?? {
          storeID: Xg(),
          getState: () => o.current,
          replaceState: a,
          getGraph: i,
          subscribeToTransactions: s,
          addTransactionMetadata: l,
        }
    );
  n != null && (f.current = n), (o = Fp(() => (e != null ? Hx(f.current, e) : t != null ? Kx(t) : Zg())));
  const h = Ux(() => (qa == null ? void 0 : qa(o, () => o.current.currentTree.version)), [o]);
  return (
    gc(() => {
      const y = f.current;
      for (const v of new Set(y.getState().knownAtoms)) Px(y, v, "get");
      return () => {
        for (const v of y.getState().knownAtoms) Ax(y, v);
      };
    }, [f]),
    ae.createElement(
      oy.Provider,
      { value: f },
      ae.createElement(iy.Provider, { value: h }, ae.createElement(Wx, { setNotifyBatcherOfChange: c }), r)
    )
  );
}
function Qx(e) {
  const { override: t, ...n } = e,
    r = ql();
  return t === !1 && r.current !== ry ? e.children : ae.createElement(Gx, n);
}
function Yx() {
  return ql().current.storeID;
}
var pn = {
  RecoilRoot: Qx,
  useStoreRef: ql,
  useRecoilMutableSource: Bx,
  useRecoilStoreID: Yx,
  notifyComponents_FOR_TESTING: zf,
  sendEndOfBatchNotifications_FOR_TESTING: sy,
};
function qx(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var Jx = qx;
const { useEffect: Zx, useRef: Xx } = ae;
function ek(e) {
  const t = Xx();
  return (
    Zx(() => {
      t.current = e;
    }),
    t.current
  );
}
var ly = ek;
const { useStoreRef: tk } = pn,
  { SUSPENSE_TIMEOUT_MS: nk } = hr,
  { updateRetainCount: Lo } = hr,
  { RetentionZone: rk } = Vl,
  { useEffect: ok, useRef: ik } = ae,
  { isSSR: Wp } = Kl;
function sk(e) {
  if (me("recoil_memory_managament_2020")) return lk(e);
}
function lk(e) {
  const n = (Array.isArray(e) ? e : [e]).map((s) => (s instanceof rk ? s : s.key)),
    r = tk();
  ok(() => {
    if (!me("recoil_memory_managament_2020")) return;
    const s = r.current;
    if (o.current && !Wp) window.clearTimeout(o.current), (o.current = null);
    else for (const l of n) Lo(s, l, 1);
    return () => {
      for (const l of n) Lo(s, l, -1);
    };
  }, [r, ...n]);
  const o = ik(),
    i = ly(n);
  if (!Wp && (i === void 0 || !Jx(i, n))) {
    const s = r.current;
    for (const l of n) Lo(s, l, 1);
    if (i) for (const l of i) Lo(s, l, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const l of n) Lo(s, l, -1);
      }, nk));
  }
}
var Ff = sk;
function ak() {
  return "<component name not available>";
}
var $i = ak;
const { batchUpdates: uk } = Hl,
  { DEFAULT_VALUE: ay } = ft,
  {
    currentRendererSupportsUseSyncExternalStore: ck,
    reactMode: fo,
    useMutableSource: fk,
    useSyncExternalStore: dk,
  } = Li,
  { useRecoilMutableSource: pk, useStoreRef: en } = pn,
  {
    AbstractRecoilValue: Sc,
    getRecoilValueAsLoadable: Oi,
    setRecoilValue: cl,
    setUnvalidatedRecoilValue: hk,
    subscribeToRecoilValue: Jr,
  } = Xt,
  { useCallback: ct, useEffect: Zr, useMemo: uy, useRef: Zo, useState: Bf } = ae,
  { setByAddingToSet: mk } = Lg,
  { isSSR: vk } = Kl;
function Vf(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          vk &&
            Se(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
      ? e.contents
      : ne(`Invalid value of loadable atom "${t.key}"`);
}
function gk() {
  const e = $i(),
    t = en(),
    [, n] = Bf([]),
    r = Zo(new Set());
  r.current = new Set();
  const o = Zo(new Set()),
    i = Zo(new Map()),
    s = ct(
      (a) => {
        const u = i.current.get(a);
        u && (u.release(), i.current.delete(a));
      },
      [i]
    ),
    l = ct((a, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    Zr(() => {
      const a = t.current;
      qo(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const c = Jr(a, new Sc(u), (h) => l(h, u), e);
        i.current.set(u, c),
          a.getState().nextTree
            ? a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                l(a.getState(), u);
              })
            : l(a.getState(), u);
      }),
        qo(o.current, r.current).forEach((u) => {
          s(u);
        }),
        (o.current = r.current);
    }),
    Zr(() => {
      const a = i.current;
      return (
        qo(r.current, new Set(a.keys())).forEach((u) => {
          const c = Jr(t.current, new Sc(u), (f) => l(f, u), e);
          a.set(u, c);
        }),
        () => a.forEach((u, c) => s(c))
      );
    }, [e, t, s, l]),
    uy(() => {
      function a(v) {
        return (S) => {
          cl(t.current, v, S);
        };
      }
      function u(v) {
        return () => cl(t.current, v, ay);
      }
      function c(v) {
        var S;
        r.current.has(v.key) || (r.current = mk(r.current, v.key));
        const T = t.current.getState();
        return Oi(t.current, v, fo().early && (S = T.nextTree) !== null && S !== void 0 ? S : T.currentTree);
      }
      function f(v) {
        const S = c(v);
        return Vf(S, v, t);
      }
      function h(v) {
        return [f(v), a(v)];
      }
      function y(v) {
        return [c(v), a(v)];
      }
      return {
        getRecoilValue: f,
        getRecoilValueLoadable: c,
        getRecoilState: h,
        getRecoilStateLoadable: y,
        getSetRecoilState: a,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const yk = { current: 0 };
function Sk(e) {
  const t = en(),
    n = $i(),
    r = ct(() => {
      var l;
      const a = t.current,
        u = a.getState(),
        c = fo().early && (l = u.nextTree) !== null && l !== void 0 ? l : u.currentTree;
      return { loadable: Oi(a, e, c), key: e.key };
    }, [t, e]),
    o = ct((l) => {
      let a;
      return () => {
        var u, c;
        const f = l();
        return (u = a) !== null &&
          u !== void 0 &&
          u.loadable.is(f.loadable) &&
          ((c = a) === null || c === void 0 ? void 0 : c.key) === f.key
          ? a
          : ((a = f), f);
      };
    }, []),
    i = uy(() => o(r), [r, o]),
    s = ct(
      (l) => {
        const a = t.current;
        return Jr(a, e, l, n).release;
      },
      [t, e, n]
    );
  return dk(s, i, i).loadable;
}
function wk(e) {
  const t = en(),
    n = ct(() => {
      var u;
      const c = t.current,
        f = c.getState(),
        h = fo().early && (u = f.nextTree) !== null && u !== void 0 ? u : f.currentTree;
      return Oi(c, e, h);
    }, [t, e]),
    r = ct(() => n(), [n]),
    o = $i(),
    i = ct(
      (u, c) => {
        const f = t.current;
        return Jr(
          f,
          e,
          () => {
            if (!me("recoil_suppress_rerender_in_callback")) return c();
            const y = n();
            a.current.is(y) || c(), (a.current = y);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    s = pk();
  if (s == null) throw ne("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const l = fk(s, r, i),
    a = Zo(l);
  return (
    Zr(() => {
      a.current = l;
    }),
    l
  );
}
function wc(e) {
  const t = en(),
    n = $i(),
    r = ct(() => {
      var a;
      const u = t.current,
        c = u.getState(),
        f = fo().early && (a = c.nextTree) !== null && a !== void 0 ? a : c.currentTree;
      return Oi(u, e, f);
    }, [t, e]),
    o = ct(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = ct(
      (a) => {
        const u = o();
        return a.loadable.is(u.loadable) && a.key === u.key ? a : u;
      },
      [o]
    );
  Zr(() => {
    const a = Jr(
      t.current,
      e,
      (u) => {
        l(i);
      },
      n
    );
    return l(i), a.release;
  }, [n, e, t, i]);
  const [s, l] = Bf(o);
  return s.key !== e.key ? o().loadable : s.loadable;
}
function _k(e) {
  const t = en(),
    [, n] = Bf([]),
    r = $i(),
    o = ct(() => {
      var l;
      const a = t.current,
        u = a.getState(),
        c = fo().early && (l = u.nextTree) !== null && l !== void 0 ? l : u.currentTree;
      return Oi(a, e, c);
    }, [t, e]),
    i = o(),
    s = Zo(i);
  return (
    Zr(() => {
      s.current = i;
    }),
    Zr(() => {
      const l = t.current,
        a = l.getState(),
        u = Jr(
          l,
          e,
          (f) => {
            var h;
            if (!me("recoil_suppress_rerender_in_callback")) return n([]);
            const y = o();
            ((h = s.current) !== null && h !== void 0 && h.is(y)) || n(y), (s.current = y);
          },
          r
        );
      if (a.nextTree)
        l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (s.current = null), n([]);
        });
      else {
        var c;
        if (!me("recoil_suppress_rerender_in_callback")) return n([]);
        const f = o();
        ((c = s.current) !== null && c !== void 0 && c.is(f)) || n(f), (s.current = f);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function Wf(e) {
  return (
    me("recoil_memory_managament_2020") && Ff(e),
    { TRANSITION_SUPPORT: wc, SYNC_EXTERNAL_STORE: ck() ? Sk : wc, MUTABLE_SOURCE: wk, LEGACY: _k }[fo().mode](e)
  );
}
function cy(e) {
  const t = en(),
    n = Wf(e);
  return Vf(n, e, t);
}
function Jl(e) {
  const t = en();
  return ct(
    (n) => {
      cl(t.current, e, n);
    },
    [t, e]
  );
}
function Ek(e) {
  const t = en();
  return ct(() => {
    cl(t.current, e, ay);
  }, [t, e]);
}
function Rk(e) {
  return [cy(e), Jl(e)];
}
function xk(e) {
  return [Wf(e), Jl(e)];
}
function kk() {
  const e = en();
  return (t, n = {}) => {
    uk(() => {
      e.current.addTransactionMetadata(n), t.forEach((r, o) => hk(e.current, new Sc(o), r));
    });
  };
}
function fy(e) {
  return me("recoil_memory_managament_2020") && Ff(e), wc(e);
}
function dy(e) {
  const t = en(),
    n = fy(e);
  return Vf(n, e, t);
}
function Tk(e) {
  return [dy(e), Jl(e)];
}
var Ck = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: yk,
  useRecoilInterface: gk,
  useRecoilState: Rk,
  useRecoilStateLoadable: xk,
  useRecoilValue: cy,
  useRecoilValueLoadable: Wf,
  useResetRecoilState: Ek,
  useSetRecoilState: Jl,
  useSetUnvalidatedAtomValues: kk,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: fy,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: dy,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Tk,
};
function Nk(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var Ak = Nk;
function Lk(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var Pk = Lk;
function Ik(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var $k = Ik;
const { batchUpdates: Ok } = Hl,
  { DEFAULT_VALUE: jk, getNode: py, nodes: bk } = ft,
  { useStoreRef: Hf } = pn,
  { AbstractRecoilValue: Dk, setRecoilValueLoadable: Mk } = Xt,
  { SUSPENSE_TIMEOUT_MS: Uk } = hr,
  { cloneSnapshot: fl } = Yl,
  { useCallback: Zl, useEffect: hy, useRef: Hp, useState: zk } = ae,
  { isSSR: Kp } = Kl;
function Xl(e) {
  const t = Hf();
  hy(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function Gp(e) {
  const t = e.atomValues.toMap(),
    n = ul(
      Ak(t, (r, o) => {
        const s = py(o).persistence_UNSTABLE;
        return s != null && s.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return $k(e.nonvalidatedAtoms.toMap(), n);
}
function Fk(e) {
  Xl(
    Zl(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = Gp(r),
          i = Gp(n),
          s = ul(bk, (a) => {
            var u, c, f, h;
            return {
              persistence_UNSTABLE: {
                type:
                  (u = (c = a.persistence_UNSTABLE) === null || c === void 0 ? void 0 : c.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (f = (h = a.persistence_UNSTABLE) === null || h === void 0 ? void 0 : h.backButton) !== null &&
                  f !== void 0
                    ? f
                    : !1,
              },
            };
          }),
          l = Pk(r.dirtyAtoms, (a) => o.has(a) || i.has(a));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: s,
          modifiedAtoms: l,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function Bk(e) {
  Xl(
    Zl(
      (t) => {
        const n = fl(t, "latest"),
          r = fl(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function Vk() {
  const e = Hf(),
    [t, n] = zk(() => fl(e.current)),
    r = ly(t),
    o = Hp(),
    i = Hp();
  if (
    (Xl(Zl((l) => n(fl(l)), [])),
    hy(() => {
      const l = t.retain();
      if (o.current && !Kp) {
        var a;
        window.clearTimeout(o.current),
          (o.current = null),
          (a = i.current) === null || a === void 0 || a.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(l, 10);
      };
    }, [t]),
    r !== t && !Kp)
  ) {
    if (o.current) {
      var s;
      window.clearTimeout(o.current),
        (o.current = null),
        (s = i.current) === null || s === void 0 || s.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var l;
        (o.current = null), (l = i.current) === null || l === void 0 || l.call(i), (i.current = null);
      }, Uk));
  }
  return t;
}
function my(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  Ok(() => {
    const s = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const c of u) {
        var l, a;
        ((l = o.atomValues.get(c)) === null || l === void 0 ? void 0 : l.contents) !==
          ((a = i.atomValues.get(c)) === null || a === void 0 ? void 0 : a.contents) &&
          py(c).shouldRestoreFromSnapshots &&
          s.add(c);
      }
    s.forEach((u) => {
      Mk(e, new Dk(u), i.atomValues.has(u) ? xe(i.atomValues.get(u)) : jk);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function Wk() {
  const e = Hf();
  return Zl((t) => my(e.current, t), [e]);
}
var vy = {
  useRecoilSnapshot: Vk,
  gotoSnapshot: my,
  useGotoRecoilSnapshot: Wk,
  useRecoilTransactionObserver: Bk,
  useTransactionObservation_DEPRECATED: Fk,
  useTransactionSubscription_DEPRECATED: Xl,
};
const { peekNodeInfo: Hk } = zn,
  { useStoreRef: Kk } = pn;
function Gk() {
  const e = Kk();
  return ({ key: t }) => Hk(e.current, e.current.getState().currentTree, t);
}
var Qk = Gk;
const { reactMode: Yk } = Li,
  { RecoilRoot: qk, useStoreRef: Jk } = pn,
  { useMemo: Zk } = ae;
function Xk() {
  Yk().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = Jk().current;
  return Zk(() => {
    function t({ children: n }) {
      return ae.createElement(qk, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var eT = Xk;
const { loadableWithValue: tT } = Ai,
  { initializeNode: nT } = zn,
  { DEFAULT_VALUE: rT, getNode: oT } = ft,
  { copyTreeState: iT, getRecoilValueAsLoadable: sT, invalidateDownstreams: lT, writeLoadableToTreeState: aT } = Xt;
function Qp(e) {
  return oT(e.key).nodeType === "atom";
}
class uT {
  constructor(t, n) {
    ee(this, "_store", void 0),
      ee(this, "_treeState", void 0),
      ee(this, "_changes", void 0),
      ee(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Qp(r)) throw ne("Reading selectors within atomicUpdate is not supported");
        const o = sT(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : ne(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`);
      }),
      ee(this, "set", (r, o) => {
        if (!Qp(r)) throw ne("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else nT(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      ee(this, "reset", (r) => {
        this.set(r, rT);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = iT(this._treeState);
    for (const [n, r] of this._changes) aT(t, n, tT(r));
    return lT(this._store, t), t;
  }
}
function cT(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new uT(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var fT = { atomicUpdater: cT },
  dT = fT.atomicUpdater,
  gy = Object.freeze({ __proto__: null, atomicUpdater: dT });
function pT(e, t) {
  if (!e) throw new Error(t);
}
var hT = pT,
  Uo = hT;
const { atomicUpdater: mT } = gy,
  { batchUpdates: vT } = Hl,
  { DEFAULT_VALUE: gT } = ft,
  { useStoreRef: yT } = pn,
  { refreshRecoilValue: ST, setRecoilValue: Yp } = Xt,
  { cloneSnapshot: wT } = Yl,
  { gotoSnapshot: _T } = vy,
  { useCallback: ET } = ae;
class yy {}
const RT = new yy();
function Sy(e, t, n, r) {
  let o = RT,
    i;
  if (
    (vT(() => {
      const l =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw ne(l);
      const a = Pg(
          {
            ...(r ?? {}),
            set: (c, f) => Yp(e, c, f),
            reset: (c) => Yp(e, c, gT),
            refresh: (c) => ST(e, c),
            gotoSnapshot: (c) => _T(e, c),
            transact_UNSTABLE: (c) => mT(e)(c),
          },
          {
            snapshot: () => {
              const c = wT(e);
              return (i = c.retain()), c;
            },
          }
        ),
        u = t(a);
      if (typeof u != "function") throw ne(l);
      o = u(...n);
    }),
    o instanceof yy && Uo(!1),
    Se(o))
  )
    o = o.finally(() => {
      var l;
      (l = i) === null || l === void 0 || l();
    });
  else {
    var s;
    (s = i) === null || s === void 0 || s();
  }
  return o;
}
function xT(e, t) {
  const n = yT();
  return ET((...r) => Sy(n.current, e, r), t != null ? [...t, n] : void 0);
}
var wy = { recoilCallback: Sy, useRecoilCallback: xT };
const { useStoreRef: kT } = pn,
  { refreshRecoilValue: TT } = Xt,
  { useCallback: CT } = ae;
function NT(e) {
  const t = kT();
  return CT(() => {
    const n = t.current;
    TT(n, e);
  }, [e, t]);
}
var AT = NT;
const { atomicUpdater: LT } = gy,
  { useStoreRef: PT } = pn,
  { useMemo: IT } = ae;
function $T(e, t) {
  const n = PT();
  return IT(
    () =>
      (...r) => {
        LT(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var OT = $T;
class jT {
  constructor(t) {
    ee(this, "value", void 0), (this.value = t);
  }
}
var bT = { WrappedValue: jT },
  DT = bT.WrappedValue,
  _y = Object.freeze({ __proto__: null, WrappedValue: DT });
const { isFastRefreshEnabled: MT } = Li;
class qp extends Error {}
class UT {
  constructor(t) {
    var n, r, o;
    ee(this, "_name", void 0),
      ee(this, "_numLeafs", void 0),
      ee(this, "_root", void 0),
      ee(this, "_onHit", void 0),
      ee(this, "_onSet", void 0),
      ee(this, "_mapNodeValue", void 0),
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
      var i, s, l, a;
      let u, c;
      for (const [T, m] of t) {
        var f, h, y;
        const d = this._root;
        if ((d == null ? void 0 : d.type) === "leaf") throw this.invalidCacheError();
        const p = u;
        if (
          ((u = p ? p.branches.get(c) : d),
          (u =
            (f = u) !== null && f !== void 0
              ? f
              : { type: "branch", nodeKey: T, parent: p, branches: new Map(), branchKey: c }),
          u.type !== "branch" || u.nodeKey !== T)
        )
          throw this.invalidCacheError();
        p == null || p.branches.set(c, u),
          r == null || (h = r.onNodeVisit) === null || h === void 0 || h.call(r, u),
          (c = this._mapNodeValue(m)),
          (this._root = (y = this._root) !== null && y !== void 0 ? y : u);
      }
      const v = u ? ((i = u) === null || i === void 0 ? void 0 : i.branches.get(c)) : this._root;
      if (v != null && (v.type !== "leaf" || v.branchKey !== c)) throw this.invalidCacheError();
      const S = { type: "leaf", value: n, parent: u, branchKey: c };
      (s = u) === null || s === void 0 || s.branches.set(c, S),
        (this._root = (l = this._root) !== null && l !== void 0 ? l : S),
        this._numLeafs++,
        this._onSet(S),
        r == null || (a = r.onNodeVisit) === null || a === void 0 || a.call(r, S);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof qp) this.clear(), o();
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
    const t = MT()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Pf(t + (this._name != null ? ` - ${this._name}` : "")), new qp());
  }
}
var zT = { TreeCache: UT },
  FT = zT.TreeCache,
  Ey = Object.freeze({ __proto__: null, TreeCache: FT });
class BT {
  constructor(t) {
    var n;
    ee(this, "_maxSize", void 0),
      ee(this, "_size", void 0),
      ee(this, "_head", void 0),
      ee(this, "_tail", void 0),
      ee(this, "_map", void 0),
      ee(this, "_keyMapper", void 0),
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
      s = { key: t, right: i, left: null, value: n };
    i ? (i.left = s) : (this._tail = s), this._map.set(r, s), (this._head = s), this._size++, this._maybeDeleteLRU();
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
    const r = xe(this._map.get(n)),
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
var VT = { LRUCache: BT },
  WT = VT.LRUCache,
  Ry = Object.freeze({ __proto__: null, LRUCache: WT });
const { LRUCache: HT } = Ry,
  { TreeCache: KT } = Ey;
function GT({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new HT({ maxSize: t }),
    o = new KT({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const s = r.tail();
        r.set(i, !0), s && o.size() > t && o.delete(s.key);
      },
    });
  return o;
}
var Jp = GT;
function Dt(e, t, n) {
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
        throw ne("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (Se(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => Dt(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return Dt(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, s] of e) o[typeof i == "string" ? i : Dt(i, t)] = s;
    return Dt(o, t, n);
  }
  return e instanceof Set
    ? Dt(
        Array.from(e).sort((o, i) => Dt(o, t).localeCompare(Dt(i, t))),
        t,
        n
      )
    : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == "function"
      ? Dt(Array.from(e), t, n)
      : `{${Object.keys(e)
          .filter((o) => e[o] !== void 0)
          .sort()
          .map((o) => `${Dt(o, t)}:${Dt(e[o], t, o)}`)
          .join(",")}}`;
}
function QT(e, t = { allowFunctions: !1 }) {
  return Dt(e, t);
}
var ea = QT;
const { TreeCache: YT } = Ey,
  ns = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function qT({ equality: e = ns.equality, eviction: t = ns.eviction, maxSize: n = ns.maxSize } = ns, r) {
  const o = JT(e);
  return ZT(t, n, o, r);
}
function JT(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => ea(t);
  }
  throw ne(`Unrecognized equality policy ${e}`);
}
function ZT(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new YT({ name: r, mapNodeValue: n });
    case "lru":
      return Jp({ name: r, maxSize: xe(t), mapNodeValue: n });
    case "most-recent":
      return Jp({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw ne(`Unrecognized eviction policy ${e}`);
}
var XT = qT;
function eC(e) {
  return () => null;
}
var tC = { startPerfBlock: eC };
const { isLoadable: nC, loadableWithError: rs, loadableWithPromise: rC, loadableWithValue: Ja } = Ai,
  { WrappedValue: xy } = _y,
  { getNodeLoadable: os, peekNodeLoadable: oC, setNodeValue: iC } = zn,
  { saveDepsToStore: sC } = Pi,
  { DEFAULT_VALUE: lC, getConfigDeletionHandler: aC, getNode: uC, registerNode: Zp } = ft,
  { isRecoilValue: cC } = qr,
  { markRecoilValueModified: Xp } = Xt,
  { retainedByOptionWithDefault: fC } = hr,
  { recoilCallback: dC } = wy,
  { startPerfBlock: pC } = tC;
class ky {}
const Po = new ky(),
  Io = [],
  is = new Map(),
  hC = (() => {
    let e = 0;
    return () => e++;
  })();
function Ty(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    s = new Set(),
    l = XT(o ?? { equality: "reference", eviction: "keep-all" }, n),
    a = fC(e.retainedBy_UNSTABLE),
    u = new Map();
  let c = 0;
  function f() {
    return !me("recoil_memory_managament_2020") || c > 0;
  }
  function h(_) {
    return (
      _.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function y() {
    return aC(n) !== void 0 && !f();
  }
  function v(_, P, I, G, U) {
    De(P, G, U), S(_, I);
  }
  function S(_, P) {
    be(_, P) && ue(_), m(P, !0);
  }
  function T(_, P) {
    be(_, P) && (xe(D(_)).stateVersions.clear(), m(P, !1));
  }
  function m(_, P) {
    const I = is.get(_);
    if (I != null) {
      for (const G of I) Xp(G, xe(t));
      P && is.delete(_);
    }
  }
  function d(_, P) {
    let I = is.get(P);
    I == null && is.set(P, (I = new Set())), I.add(_);
  }
  function p(_, P, I, G, U, J) {
    return P.then((Z) => {
      if (!f()) throw (ue(_), Po);
      const W = Ja(Z);
      return v(_, I, U, W, G), Z;
    }).catch((Z) => {
      if (!f()) throw (ue(_), Po);
      if (Se(Z)) return R(_, Z, I, G, U, J);
      const W = rs(Z);
      throw (v(_, I, U, W, G), Z);
    });
  }
  function R(_, P, I, G, U, J) {
    return P.then((Z) => {
      if (!f()) throw (ue(_), Po);
      J.loadingDepKey != null && J.loadingDepPromise === P
        ? I.atomValues.set(J.loadingDepKey, Ja(Z))
        : _.getState().knownSelectors.forEach((ie) => {
            I.atomValues.delete(ie);
          });
      const W = k(_, I);
      if (W && W.state !== "loading") {
        if (((be(_, U) || D(_) == null) && S(_, U), W.state === "hasValue")) return W.contents;
        throw W.contents;
      }
      if (!be(_, U)) {
        const ie = re(_, I);
        if (ie != null) return ie.loadingLoadable.contents;
      }
      const [pe, _e] = C(_, I, U);
      if ((pe.state !== "loading" && v(_, I, U, pe, _e), pe.state === "hasError")) throw pe.contents;
      return pe.contents;
    }).catch((Z) => {
      if (Z instanceof ky) throw Po;
      if (!f()) throw (ue(_), Po);
      const W = rs(Z);
      throw (v(_, I, U, W, G), Z);
    });
  }
  function N(_, P, I, G) {
    var U, J, Z, W;
    if (
      be(_, G) ||
      P.version ===
        ((U = _.getState()) === null || U === void 0 || (J = U.currentTree) === null || J === void 0
          ? void 0
          : J.version) ||
      P.version ===
        ((Z = _.getState()) === null || Z === void 0 || (W = Z.nextTree) === null || W === void 0 ? void 0 : W.version)
    ) {
      var pe, _e, ie;
      sC(
        n,
        I,
        _,
        (pe =
          (_e = _.getState()) === null || _e === void 0 || (ie = _e.nextTree) === null || ie === void 0
            ? void 0
            : ie.version) !== null && pe !== void 0
          ? pe
          : _.getState().currentTree.version
      );
    }
    for (const ke of I) s.add(ke);
  }
  function C(_, P, I) {
    const G = pC(n);
    let U = !0,
      J = !0;
    const Z = () => {
      G(), (J = !1);
    };
    let W,
      pe = !1,
      _e;
    const ie = { loadingDepKey: null, loadingDepPromise: null },
      ke = new Map();
    function Ot({ key: wt }) {
      const dt = os(_, P, wt);
      switch ((ke.set(wt, dt), U || (N(_, P, new Set(ke.keys()), I), T(_, I)), dt.state)) {
        case "hasValue":
          return dt.contents;
        case "hasError":
          throw dt.contents;
        case "loading":
          throw ((ie.loadingDepKey = wt), (ie.loadingDepPromise = dt.contents), dt.contents);
      }
      throw ne("Invalid Loadable state");
    }
    const Vn =
      (wt) =>
      (...dt) => {
        if (J)
          throw ne(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && Uo(!1), dC(_, wt, dt, { node: t });
      };
    try {
      (W = r({ get: Ot, getCallback: Vn })),
        (W = cC(W) ? Ot(W) : W),
        nC(W) && (W.state === "hasError" && (pe = !0), (W = W.contents)),
        Se(W) ? (W = p(_, W, P, ke, I, ie).finally(Z)) : Z(),
        (W = W instanceof xy ? W.value : W);
    } catch (wt) {
      (W = wt), Se(W) ? (W = R(_, W, P, ke, I, ie).finally(Z)) : ((pe = !0), Z());
    }
    return (
      pe ? (_e = rs(W)) : Se(W) ? (_e = rC(W)) : (_e = Ja(W)),
      (U = !1),
      et(_, I, ke),
      N(_, P, new Set(ke.keys()), I),
      [_e, ke]
    );
  }
  function k(_, P) {
    let I = P.atomValues.get(n);
    if (I != null) return I;
    const G = new Set();
    try {
      I = l.get((J) => (typeof J != "string" && Uo(!1), os(_, P, J).contents), {
        onNodeVisit: (J) => {
          J.type === "branch" && J.nodeKey !== n && G.add(J.nodeKey);
        },
      });
    } catch (J) {
      throw ne(`Problem with cache lookup for selector "${n}": ${J.message}`);
    }
    if (I) {
      var U;
      P.atomValues.set(n, I), N(_, P, G, (U = D(_)) === null || U === void 0 ? void 0 : U.executionID);
    }
    return I;
  }
  function $(_, P) {
    const I = k(_, P);
    if (I != null) return ue(_), I;
    const G = re(_, P);
    if (G != null) {
      var U;
      return (
        ((U = G.loadingLoadable) === null || U === void 0 ? void 0 : U.state) === "loading" && d(_, G.executionID),
        G.loadingLoadable
      );
    }
    const J = hC(),
      [Z, W] = C(_, P, J);
    return Z.state === "loading" ? (de(_, J, Z, W, P), d(_, J)) : (ue(_), De(P, Z, W)), Z;
  }
  function re(_, P) {
    const I = Qg([
      u.has(_) ? [xe(u.get(_))] : [],
      Fl(
        bf(u, ([U]) => U !== _),
        ([, U]) => U
      ),
    ]);
    function G(U) {
      for (const [J, Z] of U) if (!os(_, P, J).is(Z)) return !0;
      return !1;
    }
    for (const U of I) {
      if (U.stateVersions.get(P.version) || !G(U.depValuesDiscoveredSoFarDuringAsyncWork))
        return U.stateVersions.set(P.version, !0), U;
      U.stateVersions.set(P.version, !1);
    }
  }
  function D(_) {
    return u.get(_);
  }
  function de(_, P, I, G, U) {
    u.set(_, {
      depValuesDiscoveredSoFarDuringAsyncWork: G,
      executionID: P,
      loadingLoadable: I,
      stateVersions: new Map([[U.version, !0]]),
    });
  }
  function et(_, P, I) {
    if (be(_, P)) {
      const G = D(_);
      G != null && (G.depValuesDiscoveredSoFarDuringAsyncWork = I);
    }
  }
  function ue(_) {
    u.delete(_);
  }
  function be(_, P) {
    var I;
    return P === ((I = D(_)) === null || I === void 0 ? void 0 : I.executionID);
  }
  function $t(_) {
    return Array.from(_.entries()).map(([P, I]) => [P, I.contents]);
  }
  function De(_, P, I) {
    _.atomValues.set(n, P);
    try {
      l.set($t(I), P);
    } catch (G) {
      throw ne(`Problem with setting cache for selector "${n}": ${G.message}`);
    }
  }
  function Be(_) {
    if (Io.includes(n)) {
      const P = `Recoil selector has circular dependencies: ${Io.slice(Io.indexOf(n)).join(" → ")}`;
      return rs(ne(P));
    }
    Io.push(n);
    try {
      return _();
    } finally {
      Io.pop();
    }
  }
  function M(_, P) {
    const I = P.atomValues.get(n);
    return (
      I ??
      l.get((G) => {
        var U;
        return typeof G != "string" && Uo(!1), (U = oC(_, P, G)) === null || U === void 0 ? void 0 : U.contents;
      })
    );
  }
  function H(_, P) {
    return Be(() => $(_, P));
  }
  function b(_) {
    _.atomValues.delete(n);
  }
  function K(_, P) {
    t == null && Uo(!1);
    for (const G of s) {
      var I;
      const U = uC(G);
      (I = U.clearCache) === null || I === void 0 || I.call(U, _, P);
    }
    s.clear(), b(P), l.clear(), Xp(_, t);
  }
  return i != null
    ? (t = Zp({
        key: n,
        nodeType: "selector",
        peek: M,
        get: H,
        set: (P, I, G) => {
          let U = !1;
          const J = new Map();
          function Z({ key: ie }) {
            if (U) throw ne("Recoil: Async selector sets are not currently supported.");
            const ke = os(P, I, ie);
            if (ke.state === "hasValue") return ke.contents;
            if (ke.state === "loading") {
              const Ot = `Getting value of asynchronous atom or selector "${ie}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw ne(Ot);
            } else throw ke.contents;
          }
          function W(ie, ke) {
            if (U) throw ne("Recoil: Async selector sets are not currently supported.");
            const Ot = typeof ke == "function" ? ke(Z(ie)) : ke;
            iC(P, I, ie.key, Ot).forEach((wt, dt) => J.set(dt, wt));
          }
          function pe(ie) {
            W(ie, lC);
          }
          const _e = i({ set: W, get: Z, reset: pe }, G);
          if (_e !== void 0)
            throw Se(_e)
              ? ne("Recoil: Async selector sets are not currently supported.")
              : ne("Recoil: selector set should be a void function.");
          return (U = !0), J;
        },
        init: h,
        invalidate: b,
        clearCache: K,
        shouldDeleteConfigOnRelease: y,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }))
    : (t = Zp({
        key: n,
        nodeType: "selector",
        peek: M,
        get: H,
        init: h,
        invalidate: b,
        clearCache: K,
        shouldDeleteConfigOnRelease: y,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }));
}
Ty.value = (e) => new xy(e);
var Xr = Ty;
const { isLoadable: mC, loadableWithError: Za, loadableWithPromise: Xa, loadableWithValue: gr } = Ai,
  { WrappedValue: Cy } = _y,
  { peekNodeInfo: vC } = zn,
  {
    DEFAULT_VALUE: Kn,
    DefaultValue: Sn,
    getConfigDeletionHandler: Ny,
    registerNode: gC,
    setConfigDeletionHandler: yC,
  } = ft,
  { isRecoilValue: SC } = qr,
  { getRecoilValueAsLoadable: wC, markRecoilValueModified: _C, setRecoilValue: eh, setRecoilValueLoadable: EC } = Xt,
  { retainedByOptionWithDefault: RC } = hr,
  $o = (e) => (e instanceof Cy ? e.value : e);
function xC(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = RC(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(d) {
    return Xa(
      d
        .then((p) => ((s = gr(p)), p))
        .catch((p) => {
          throw ((s = Za(p)), p);
        })
    );
  }
  let s = Se(e.default)
    ? i(e.default)
    : mC(e.default)
      ? e.default.state === "loading"
        ? i(e.default.contents)
        : e.default
      : gr($o(e.default));
  s.contents;
  let l;
  const a = new Map();
  function u(d) {
    return d;
  }
  function c(d, p) {
    const R = p
      .then((N) => {
        var C, k;
        return (
          ((k = ((C = d.getState().nextTree) !== null && C !== void 0 ? C : d.getState().currentTree).atomValues.get(
            t
          )) === null || k === void 0
            ? void 0
            : k.contents) === R && eh(d, m, N),
          N
        );
      })
      .catch((N) => {
        var C, k;
        throw (
          (((k = ((C = d.getState().nextTree) !== null && C !== void 0 ? C : d.getState().currentTree).atomValues.get(
            t
          )) === null || k === void 0
            ? void 0
            : k.contents) === R && EC(d, m, Za(N)),
          N)
        );
      });
    return R;
  }
  function f(d, p, R) {
    var N;
    o++;
    const C = () => {
      var D;
      o--, (D = a.get(d)) === null || D === void 0 || D.forEach((de) => de()), a.delete(d);
    };
    if ((d.getState().knownAtoms.add(t), s.state === "loading")) {
      const D = () => {
        var de;
        ((de = d.getState().nextTree) !== null && de !== void 0 ? de : d.getState().currentTree).atomValues.has(t) ||
          _C(d, m);
      };
      s.contents.finally(D);
    }
    const k = (N = e.effects) !== null && N !== void 0 ? N : e.effects_UNSTABLE;
    if (k != null) {
      let D = function (b) {
          if (be && b.key === t) {
            const K = ue;
            return K instanceof Sn ? h(d, p) : Se(K) ? Xa(K.then((_) => (_ instanceof Sn ? s.toPromise() : _))) : gr(K);
          }
          return wC(d, b);
        },
        de = function (b) {
          return D(b).toPromise();
        },
        et = function (b) {
          var K;
          const _ = vC(d, (K = d.getState().nextTree) !== null && K !== void 0 ? K : d.getState().currentTree, b.key);
          return be && b.key === t && !(ue instanceof Sn) ? { ..._, isSet: !0, loadable: D(b) } : _;
        },
        ue = Kn,
        be = !0,
        $t = !1,
        De = null;
      const Be = (b) => (K) => {
          if (be) {
            const _ = D(m),
              P = _.state === "hasValue" ? _.contents : Kn;
            (ue = typeof K == "function" ? K(P) : K),
              Se(ue) && (ue = ue.then((I) => ((De = { effect: b, value: I }), I)));
          } else {
            if (Se(K)) throw ne("Setting atoms to async values is not implemented.");
            typeof K != "function" && (De = { effect: b, value: $o(K) }),
              eh(
                d,
                m,
                typeof K == "function"
                  ? (_) => {
                      const P = $o(K(_));
                      return (De = { effect: b, value: P }), P;
                    }
                  : $o(K)
              );
          }
        },
        M = (b) => () => Be(b)(Kn),
        H = (b) => (K) => {
          var _;
          const { release: P } = d.subscribeToTransactions((I) => {
            var G;
            let { currentTree: U, previousTree: J } = I.getState();
            J || (J = U);
            const Z = (G = U.atomValues.get(t)) !== null && G !== void 0 ? G : s;
            if (Z.state === "hasValue") {
              var W, pe, _e, ie;
              const ke = Z.contents,
                Ot = (W = J.atomValues.get(t)) !== null && W !== void 0 ? W : s,
                Vn = Ot.state === "hasValue" ? Ot.contents : Kn;
              ((pe = De) === null || pe === void 0 ? void 0 : pe.effect) !== b ||
              ((_e = De) === null || _e === void 0 ? void 0 : _e.value) !== ke
                ? K(ke, Vn, !U.atomValues.has(t))
                : ((ie = De) === null || ie === void 0 ? void 0 : ie.effect) === b && (De = null);
            }
          }, t);
          a.set(d, [...((_ = a.get(d)) !== null && _ !== void 0 ? _ : []), P]);
        };
      for (const b of k)
        try {
          const K = b({
            node: m,
            storeID: d.storeID,
            parentStoreID_UNSTABLE: d.parentStoreID,
            trigger: R,
            setSelf: Be(b),
            resetSelf: M(b),
            onSet: H(b),
            getPromise: de,
            getLoadable: D,
            getInfo_UNSTABLE: et,
          });
          if (K != null) {
            var $;
            a.set(d, [...(($ = a.get(d)) !== null && $ !== void 0 ? $ : []), K]);
          }
        } catch (K) {
          (ue = K), ($t = !0);
        }
      if (((be = !1), !(ue instanceof Sn))) {
        var re;
        const b = $t ? Za(ue) : Se(ue) ? Xa(c(d, ue)) : gr($o(ue));
        b.contents,
          p.atomValues.set(t, b),
          (re = d.getState().nextTree) === null || re === void 0 || re.atomValues.set(t, b);
      }
    }
    return C;
  }
  function h(d, p) {
    var R, N;
    return (R = (N = p.atomValues.get(t)) !== null && N !== void 0 ? N : l) !== null && R !== void 0 ? R : s;
  }
  function y(d, p) {
    if (p.atomValues.has(t)) return xe(p.atomValues.get(t));
    if (p.nonvalidatedAtoms.has(t)) {
      if (l != null) return l;
      if (n == null) return s;
      const R = p.nonvalidatedAtoms.get(t),
        N = n.validator(R, Kn);
      return (l = N instanceof Sn ? s : gr(N)), l;
    } else return s;
  }
  function v() {
    l = void 0;
  }
  function S(d, p, R) {
    if (p.atomValues.has(t)) {
      const N = xe(p.atomValues.get(t));
      if (N.state === "hasValue" && R === N.contents) return new Map();
    } else if (!p.nonvalidatedAtoms.has(t) && R instanceof Sn) return new Map();
    return (l = void 0), new Map().set(t, gr(R));
  }
  function T() {
    return Ny(t) !== void 0 && o <= 0;
  }
  const m = gC({
    key: t,
    nodeType: "atom",
    peek: h,
    get: y,
    set: S,
    init: f,
    invalidate: v,
    shouldDeleteConfigOnRelease: T,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? { type: e.persistence_UNSTABLE.type, backButton: e.persistence_UNSTABLE.backButton }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return m;
}
function Kf(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return SC(n) ? kC({ ...t, default: n }) : xC({ ...t, default: n });
}
function kC(e) {
  const t = Kf({
      ...e,
      default: Kn,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) => (r instanceof Sn ? r : xe(e.persistence_UNSTABLE).validator(r, Kn)),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = Xr({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof Sn ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return yC(n.key, Ny(e.key)), n;
}
Kf.value = (e) => new Cy(e);
var Ay = Kf;
class TC {
  constructor(t) {
    var n;
    ee(this, "_map", void 0),
      ee(this, "_keyMapper", void 0),
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
var CC = { MapCache: TC },
  NC = CC.MapCache,
  AC = Object.freeze({ __proto__: null, MapCache: NC });
const { LRUCache: th } = Ry,
  { MapCache: LC } = AC,
  ss = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function PC({ equality: e = ss.equality, eviction: t = ss.eviction, maxSize: n = ss.maxSize } = ss) {
  const r = IC(e);
  return $C(t, n, r);
}
function IC(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => ea(t);
  }
  throw ne(`Unrecognized equality policy ${e}`);
}
function $C(e, t, n) {
  switch (e) {
    case "keep-all":
      return new LC({ mapKey: n });
    case "lru":
      return new th({ mapKey: n, maxSize: xe(t) });
    case "most-recent":
      return new th({ mapKey: n, maxSize: 1 });
  }
  throw ne(`Unrecognized eviction policy ${e}`);
}
var Ly = PC;
const { setConfigDeletionHandler: OC } = ft;
function jC(e) {
  var t, n;
  const r = Ly({
    equality:
      (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null &&
      t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, s;
    const l = r.get(o);
    if (l != null) return l;
    const { cachePolicyForParams_UNSTABLE: a, ...u } = e,
      c = "default" in e ? e.default : new Promise(() => {}),
      f = Ay({
        ...u,
        key: `${e.key}__${(i = ea(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof c == "function" ? c(o) : c,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
              ? e.effects_UNSTABLE(o)
              : (s = e.effects) !== null && s !== void 0
                ? s
                : e.effects_UNSTABLE,
      });
    return (
      r.set(o, f),
      OC(f.key, () => {
        r.delete(o);
      }),
      f
    );
  };
}
var bC = jC;
const { setConfigDeletionHandler: DC } = ft;
let MC = 0;
function UC(e) {
  var t, n;
  const r = Ly({
    equality:
      (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null &&
      t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let s;
    try {
      s = r.get(o);
    } catch (h) {
      throw ne(`Problem with cache lookup for selector ${e.key}: ${h.message}`);
    }
    if (s != null) return s;
    const l = `${e.key}__selectorFamily/${(i = ea(o, { allowFunctions: !0 })) !== null && i !== void 0 ? i : "void"}/${MC++}`,
      a = (h) => e.get(o)(h),
      u = e.cachePolicy_UNSTABLE,
      c = typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE;
    let f;
    if (e.set != null) {
      const h = e.set;
      f = Xr({
        key: l,
        get: a,
        set: (v, S) => h(o)(v, S),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    } else
      f = Xr({
        key: l,
        get: a,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    return (
      r.set(o, f),
      DC(f.key, () => {
        r.delete(o);
      }),
      f
    );
  };
}
var Fn = UC;
const zC = Fn({ key: "__constant", get: (e) => () => e, cachePolicyForParams_UNSTABLE: { equality: "reference" } });
function FC(e) {
  return zC(e);
}
var BC = FC;
const VC = Fn({
  key: "__error",
  get: (e) => () => {
    throw ne(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function WC(e) {
  return VC(e);
}
var HC = WC;
function KC(e) {
  return e;
}
var GC = KC;
const { loadableWithError: Py, loadableWithPromise: Iy, loadableWithValue: $y } = Ai;
function ta(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (s) {
      r[o] = s;
    }
  return [n, r];
}
function QC(e) {
  return e != null && !Se(e);
}
function na(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function _c(e, t) {
  return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((n, r, o) => ({ ...n, [r]: t[o] }), {});
}
function Fr(e, t, n) {
  const r = n.map((o, i) => (o == null ? $y(t[i]) : Se(o) ? Iy(o) : Py(o)));
  return _c(e, r);
}
function YC(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const qC = Fn({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = na(e),
          [r, o] = ta(t, n);
        return Fr(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  JC = Fn({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = na(e),
          [r, o] = ta(t, n);
        return o.some((i) => !Se(i))
          ? Fr(e, r, o)
          : new Promise((i) => {
              for (const [s, l] of o.entries())
                Se(l) &&
                  l
                    .then((a) => {
                      (r[s] = a), (o[s] = void 0), i(Fr(e, r, o));
                    })
                    .catch((a) => {
                      (o[s] = a), i(Fr(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  ZC = Fn({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = na(e),
          [r, o] = ta(t, n);
        if (o.every((s) => s == null)) return _c(e, r);
        const i = o.find(QC);
        if (i != null) throw i;
        return Promise.all(o).then((s) => _c(e, YC(r, s)));
      },
    dangerouslyAllowMutability: !0,
  }),
  XC = Fn({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = na(e),
          [r, o] = ta(t, n);
        return o.every((i) => !Se(i))
          ? Fr(e, r, o)
          : Promise.all(
              o.map((i, s) =>
                Se(i)
                  ? i
                      .then((l) => {
                        (r[s] = l), (o[s] = void 0);
                      })
                      .catch((l) => {
                        (r[s] = void 0), (o[s] = l);
                      })
                  : null
              )
            ).then(() => Fr(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  eN = Fn({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return Xr.value($y(t(e)));
        } catch (n) {
          return Xr.value(Se(n) ? Iy(n) : Py(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var tN = { waitForNone: qC, waitForAny: JC, waitForAll: ZC, waitForAllSettled: XC, noWait: eN };
const { RecoilLoadable: nN } = Ai,
  { DefaultValue: rN } = ft,
  { RecoilRoot: oN, useRecoilStoreID: iN } = pn,
  { isRecoilValue: sN } = qr,
  { retentionZone: lN } = Vl,
  { freshSnapshot: aN } = Yl,
  {
    useRecoilState: uN,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: cN,
    useRecoilStateLoadable: fN,
    useRecoilValue: dN,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: pN,
    useRecoilValueLoadable: hN,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: mN,
    useResetRecoilState: vN,
    useSetRecoilState: gN,
  } = Ck,
  { useGotoRecoilSnapshot: yN, useRecoilSnapshot: SN, useRecoilTransactionObserver: wN } = vy,
  { useRecoilCallback: _N } = wy,
  { noWait: EN, waitForAll: RN, waitForAllSettled: xN, waitForAny: kN, waitForNone: TN } = tN;
var ra = {
    DefaultValue: rN,
    isRecoilValue: sN,
    RecoilLoadable: nN,
    RecoilEnv: co,
    RecoilRoot: oN,
    useRecoilStoreID: iN,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: eT,
    atom: Ay,
    selector: Xr,
    atomFamily: bC,
    selectorFamily: Fn,
    constSelector: BC,
    errorSelector: HC,
    readOnlySelector: GC,
    noWait: EN,
    waitForNone: TN,
    waitForAny: kN,
    waitForAll: RN,
    waitForAllSettled: xN,
    useRecoilValue: dN,
    useRecoilValueLoadable: hN,
    useRecoilState: uN,
    useRecoilStateLoadable: fN,
    useSetRecoilState: gN,
    useResetRecoilState: vN,
    useGetRecoilValueInfo_UNSTABLE: Qk,
    useRecoilRefresher_UNSTABLE: AT,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: mN,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: pN,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: cN,
    useRecoilCallback: _N,
    useRecoilTransaction_UNSTABLE: OT,
    useGotoRecoilSnapshot: yN,
    useRecoilSnapshot: SN,
    useRecoilTransactionObserver_UNSTABLE: wN,
    snapshot_UNSTABLE: aN,
    useRetain: Ff,
    retentionZone: lN,
  },
  Oy = ra.RecoilRoot,
  po = ra.atom,
  ot = ra.useRecoilValue,
  xn = ra.useSetRecoilState;
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yi() {
  return (
    (yi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yi.apply(this, arguments)
  );
}
var kn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(kn || (kn = {}));
const nh = "popstate";
function CN(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Ec(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : by(o);
  }
  return AN(t, n, null, e);
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jy(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function NN() {
  return Math.random().toString(36).substr(2, 8);
}
function rh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ec(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    yi({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? ho(t) : t, {
      state: n,
      key: (t && t.key) || r || NN(),
    })
  );
}
function by(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ho(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function AN(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = kn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(yi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = kn.Pop;
    let T = c(),
      m = T == null ? null : T - u;
    (u = T), a && a({ action: l, location: S.location, delta: m });
  }
  function h(T, m) {
    l = kn.Push;
    let d = Ec(S.location, T, m);
    u = c() + 1;
    let p = rh(d, u),
      R = S.createHref(d);
    try {
      s.pushState(p, "", R);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      o.location.assign(R);
    }
    i && a && a({ action: l, location: S.location, delta: 1 });
  }
  function y(T, m) {
    l = kn.Replace;
    let d = Ec(S.location, T, m);
    u = c();
    let p = rh(d, u),
      R = S.createHref(d);
    s.replaceState(p, "", R), i && a && a({ action: l, location: S.location, delta: 0 });
  }
  function v(T) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      d = typeof T == "string" ? T : by(T);
    return (
      (d = d.replace(/ $/, "%20")),
      je(m, "No window.location.(origin|href) available to create URL for href: " + d),
      new URL(d, m)
    );
  }
  let S = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(nh, f),
        (a = T),
        () => {
          o.removeEventListener(nh, f), (a = null);
        }
      );
    },
    createHref(T) {
      return t(o, T);
    },
    createURL: v,
    encodeLocation(T) {
      let m = v(T);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: y,
    go(T) {
      return s.go(T);
    },
  };
  return S;
}
var oh;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(oh || (oh = {}));
function LN(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? ho(t) : t,
    o = Uy(r.pathname || "/", n);
  if (o == null) return null;
  let i = Dy(e);
  PN(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
    let a = VN(o);
    s = zN(i[l], a);
  }
  return s;
}
function Dy(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (je(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = er([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (je(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
      ),
      Dy(i.children, t, c, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: MN(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of My(i.path)) o(i, s, a);
    }),
    t
  );
}
function My(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = My(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function PN(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : UN(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const IN = /^:[\w-]+$/,
  $N = 3,
  ON = 2,
  jN = 1,
  bN = 10,
  DN = -2,
  ih = (e) => e === "*";
function MN(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ih) && (r += DN),
    t && (r += ON),
    n.filter((o) => !ih(o)).reduce((o, i) => o + (IN.test(i) ? $N : i === "" ? jN : bN), r)
  );
}
function UN(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function zN(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      a = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = FN({ path: l.relativePath, caseSensitive: l.caseSensitive, end: a }, u);
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    i.push({ params: r, pathname: er([o, c.pathname]), pathnameBase: YN(er([o, c.pathnameBase])), route: f }),
      c.pathnameBase !== "/" && (o = er([o, c.pathnameBase]));
  }
  return i;
}
function FN(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = BN(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: h, isOptional: y } = c;
      if (h === "*") {
        let S = l[f] || "";
        s = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[f];
      return y && !v ? (u[h] = void 0) : (u[h] = (v || "").replace(/%2F/g, "/")), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function BN(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jy(
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
          (s, l, a) => (r.push({ paramName: l, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)")
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
function VN(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      jy(
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
function Uy(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function WN(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? ho(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : HN(n, t)) : t, search: qN(r), hash: JN(o) };
}
function HN(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function eu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function KN(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function GN(e, t) {
  let n = KN(e);
  return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function QN(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = ho(e))
    : ((o = yi({}, e)),
      je(!o.pathname || !o.pathname.includes("?"), eu("?", "pathname", "search", o)),
      je(!o.pathname || !o.pathname.includes("#"), eu("#", "pathname", "hash", o)),
      je(!o.search || !o.search.includes("#"), eu("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      o.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = WN(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const er = (e) => e.join("/").replace(/\/\/+/g, "/"),
  YN = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qN = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  JN = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ZN(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const zy = ["post", "put", "patch", "delete"];
new Set(zy);
const XN = ["get", ...zy];
new Set(XN);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Si() {
  return (
    (Si = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Si.apply(this, arguments)
  );
}
const Gf = j.createContext(null),
  eA = j.createContext(null),
  oa = j.createContext(null),
  ia = j.createContext(null),
  mo = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fy = j.createContext(null);
function sa() {
  return j.useContext(ia) != null;
}
function Qf() {
  return sa() || je(!1), j.useContext(ia).location;
}
function By(e) {
  j.useContext(oa).static || j.useLayoutEffect(e);
}
function It() {
  let { isDataRoute: e } = j.useContext(mo);
  return e ? pA() : tA();
}
function tA() {
  sa() || je(!1);
  let e = j.useContext(Gf),
    { basename: t, future: n, navigator: r } = j.useContext(oa),
    { matches: o } = j.useContext(mo),
    { pathname: i } = Qf(),
    s = JSON.stringify(GN(o, n.v7_relativeSplatPath)),
    l = j.useRef(!1);
  return (
    By(() => {
      l.current = !0;
    }),
    j.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = QN(u, JSON.parse(s), i, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : er([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function nA(e, t) {
  return rA(e, t);
}
function rA(e, t, n, r) {
  sa() || je(!1);
  let { navigator: o } = j.useContext(oa),
    { matches: i } = j.useContext(mo),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Qf(),
    c;
  if (t) {
    var f;
    let T = typeof t == "string" ? ho(t) : t;
    a === "/" || ((f = T.pathname) != null && f.startsWith(a)) || je(!1), (c = T);
  } else c = u;
  let h = c.pathname || "/",
    y = h;
  if (a !== "/") {
    let T = a.replace(/^\//, "").split("/");
    y = "/" + h.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let v = LN(e, { pathname: y }),
    S = aA(
      v &&
        v.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, l, T.params),
            pathname: er([a, o.encodeLocation ? o.encodeLocation(T.pathname).pathname : T.pathname]),
            pathnameBase:
              T.pathnameBase === "/"
                ? a
                : er([a, o.encodeLocation ? o.encodeLocation(T.pathnameBase).pathname : T.pathnameBase]),
          })
        ),
      i,
      n,
      r
    );
  return t && S
    ? j.createElement(
        ia.Provider,
        {
          value: {
            location: Si({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
            navigationType: kn.Pop,
          },
        },
        S
      )
    : S;
}
function oA() {
  let e = dA(),
    t = ZN(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: o }, n) : null,
    null
  );
}
const iA = j.createElement(oA, null);
class sA extends j.Component {
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
      ? j.createElement(
          mo.Provider,
          { value: this.props.routeContext },
          j.createElement(Fy.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function lA(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = j.useContext(Gf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(mo.Provider, { value: t }, r)
  );
}
function aA(e, t, n, r) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = s.findIndex((f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
    c >= 0 || je(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id)) {
        let { loaderData: h, errors: y } = n,
          v = f.route.loader && h[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, h) => {
    let y,
      v = !1,
      S = null,
      T = null;
    n &&
      ((y = l && f.route.id ? l[f.route.id] : void 0),
      (S = f.route.errorElement || iA),
      a &&
        (u < 0 && h === 0
          ? ((v = !0), (T = null))
          : u === h && ((v = !0), (T = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, h + 1)),
      d = () => {
        let p;
        return (
          y
            ? (p = S)
            : v
              ? (p = T)
              : f.route.Component
                ? (p = j.createElement(f.route.Component, null))
                : f.route.element
                  ? (p = f.route.element)
                  : (p = c),
          j.createElement(lA, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? j.createElement(sA, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: y,
          children: d(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Vy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e
    );
  })(Vy || {}),
  dl = (function (e) {
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
  })(dl || {});
function uA(e) {
  let t = j.useContext(Gf);
  return t || je(!1), t;
}
function cA(e) {
  let t = j.useContext(eA);
  return t || je(!1), t;
}
function fA(e) {
  let t = j.useContext(mo);
  return t || je(!1), t;
}
function Wy(e) {
  let t = fA(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || je(!1), n.route.id;
}
function dA() {
  var e;
  let t = j.useContext(Fy),
    n = cA(dl.UseRouteError),
    r = Wy(dl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function pA() {
  let { router: e } = uA(Vy.UseNavigateStable),
    t = Wy(dl.UseNavigateStable),
    n = j.useRef(!1);
  return (
    By(() => {
      n.current = !0;
    }),
    j.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Si({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Et(e) {
  je(!1);
}
function hA(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = kn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  sa() && je(!1);
  let a = t.replace(/^\/*/, "/"),
    u = j.useMemo(
      () => ({ basename: a, navigator: i, static: s, future: Si({ v7_relativeSplatPath: !1 }, l) }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = ho(r));
  let { pathname: c = "/", search: f = "", hash: h = "", state: y = null, key: v = "default" } = r,
    S = j.useMemo(() => {
      let T = Uy(c, a);
      return T == null ? null : { location: { pathname: T, search: f, hash: h, state: y, key: v }, navigationType: o };
    }, [a, c, f, h, y, v, o]);
  return S == null
    ? null
    : j.createElement(oa.Provider, { value: u }, j.createElement(ia.Provider, { children: n, value: S }));
}
function mA(e) {
  let { children: t, location: n } = e;
  return nA(Rc(t), n);
}
new Promise(() => {});
function Rc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (r, o) => {
      if (!j.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === j.Fragment) {
        n.push.apply(n, Rc(r.props.children, i));
        return;
      }
      r.type !== Et && je(!1), !r.props.index || !r.props.children || je(!1);
      let s = {
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
      r.props.children && (s.children = Rc(r.props.children, i)), n.push(s);
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
 */ const vA = "6";
try {
  window.__reactRouterVersion = vA;
} catch {}
const gA = "startTransition",
  sh = X0[gA];
function yA(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = j.useRef();
  i.current == null && (i.current = CN({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = j.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = j.useCallback(
      (f) => {
        u && sh ? sh(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    j.useLayoutEffect(() => s.listen(c), [s, c]),
    j.createElement(hA, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var lh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(lh || (lh = {}));
var ah;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(ah || (ah = {}));
var it = function () {
  return (
    (it =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    it.apply(this, arguments)
  );
};
function pl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ye = "-ms-",
  Xo = "-moz-",
  ce = "-webkit-",
  Hy = "comm",
  la = "rule",
  Yf = "decl",
  SA = "@import",
  Ky = "@keyframes",
  wA = "@layer",
  Gy = Math.abs,
  qf = String.fromCharCode,
  xc = Object.assign;
function _A(e, t) {
  return ze(e, 0) ^ 45 ? (((((((t << 2) ^ ze(e, 0)) << 2) ^ ze(e, 1)) << 2) ^ ze(e, 2)) << 2) ^ ze(e, 3) : 0;
}
function Qy(e) {
  return e.trim();
}
function nn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, n) {
  return e.replace(t, n);
}
function As(e, t, n) {
  return e.indexOf(t, n);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function eo(e, t, n) {
  return e.slice(t, n);
}
function Yt(e) {
  return e.length;
}
function Yy(e) {
  return e.length;
}
function zo(e, t) {
  return t.push(e), e;
}
function EA(e, t) {
  return e.map(t).join("");
}
function uh(e, t) {
  return e.filter(function (n) {
    return !nn(n, t);
  });
}
var aa = 1,
  to = 1,
  qy = 0,
  Pt = 0,
  Pe = 0,
  vo = "";
function ua(e, t, n, r, o, i, s, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: aa,
    column: to,
    length: s,
    return: "",
    siblings: l,
  };
}
function vn(e, t) {
  return xc(ua("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function yr(e) {
  for (; e.root; ) e = vn(e.root, { children: [e] });
  zo(e, e.siblings);
}
function RA() {
  return Pe;
}
function xA() {
  return (Pe = Pt > 0 ? ze(vo, --Pt) : 0), to--, Pe === 10 && ((to = 1), aa--), Pe;
}
function Wt() {
  return (Pe = Pt < qy ? ze(vo, Pt++) : 0), to++, Pe === 10 && ((to = 1), aa++), Pe;
}
function tr() {
  return ze(vo, Pt);
}
function Ls() {
  return Pt;
}
function ca(e, t) {
  return eo(vo, e, t);
}
function kc(e) {
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
function kA(e) {
  return (aa = to = 1), (qy = Yt((vo = e))), (Pt = 0), [];
}
function TA(e) {
  return (vo = ""), e;
}
function tu(e) {
  return Qy(ca(Pt - 1, Tc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function CA(e) {
  for (; (Pe = tr()) && Pe < 33; ) Wt();
  return kc(e) > 2 || kc(Pe) > 3 ? "" : " ";
}
function NA(e, t) {
  for (; --t && Wt() && !(Pe < 48 || Pe > 102 || (Pe > 57 && Pe < 65) || (Pe > 70 && Pe < 97)); );
  return ca(e, Ls() + (t < 6 && tr() == 32 && Wt() == 32));
}
function Tc(e) {
  for (; Wt(); )
    switch (Pe) {
      case e:
        return Pt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Tc(Pe);
        break;
      case 40:
        e === 41 && Tc(e);
        break;
      case 92:
        Wt();
        break;
    }
  return Pt;
}
function AA(e, t) {
  for (; Wt() && e + Pe !== 57; ) if (e + Pe === 84 && tr() === 47) break;
  return "/*" + ca(t, Pt - 1) + "*" + qf(e === 47 ? e : Wt());
}
function LA(e) {
  for (; !kc(tr()); ) Wt();
  return ca(e, Pt);
}
function PA(e) {
  return TA(Ps("", null, null, null, [""], (e = kA(e)), 0, [0], e));
}
function Ps(e, t, n, r, o, i, s, l, a) {
  for (
    var u = 0, c = 0, f = s, h = 0, y = 0, v = 0, S = 1, T = 1, m = 1, d = 0, p = "", R = o, N = i, C = r, k = p;
    T;

  )
    switch (((v = d), (d = Wt()))) {
      case 40:
        if (v != 108 && ze(k, f - 1) == 58) {
          As((k += te(tu(d), "&", "&\f")), "&\f", Gy(u ? l[u - 1] : 0)) != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += tu(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += CA(v);
        break;
      case 92:
        k += NA(Ls() - 1, 7);
        continue;
      case 47:
        switch (tr()) {
          case 42:
          case 47:
            zo(IA(AA(Wt(), Ls()), t, n, a), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * S:
        l[u++] = Yt(k) * m;
      case 125 * S:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            T = 0;
          case 59 + c:
            m == -1 && (k = te(k, /\f/g, "")),
              y > 0 &&
                Yt(k) - f &&
                zo(y > 32 ? fh(k + ";", r, n, f - 1, a) : fh(te(k, " ", "") + ";", r, n, f - 2, a), a);
            break;
          case 59:
            k += ";";
          default:
            if ((zo((C = ch(k, t, n, u, c, o, l, p, (R = []), (N = []), f, i)), i), d === 123))
              if (c === 0) Ps(k, t, C, C, R, i, f, l, N);
              else
                switch (h === 99 && ze(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ps(e, C, C, r && zo(ch(e, C, C, 0, 0, o, l, p, o, (R = []), f, N), N), o, N, f, l, r ? R : N);
                    break;
                  default:
                    Ps(k, C, C, C, [""], N, 0, l, N);
                }
        }
        (u = c = y = 0), (S = m = 1), (p = k = ""), (f = s);
        break;
      case 58:
        (f = 1 + Yt(k)), (y = v);
      default:
        if (S < 1) {
          if (d == 123) --S;
          else if (d == 125 && S++ == 0 && xA() == 125) continue;
        }
        switch (((k += qf(d)), d * S)) {
          case 38:
            m = c > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (l[u++] = (Yt(k) - 1) * m), (m = 1);
            break;
          case 64:
            tr() === 45 && (k += tu(Wt())), (h = tr()), (c = f = Yt((p = k += LA(Ls())))), d++;
            break;
          case 45:
            v === 45 && Yt(k) == 2 && (S = 0);
        }
    }
  return i;
}
function ch(e, t, n, r, o, i, s, l, a, u, c, f) {
  for (var h = o - 1, y = o === 0 ? i : [""], v = Yy(y), S = 0, T = 0, m = 0; S < r; ++S)
    for (var d = 0, p = eo(e, h + 1, (h = Gy((T = s[S])))), R = e; d < v; ++d)
      (R = Qy(T > 0 ? y[d] + " " + p : te(p, /&\f/g, y[d]))) && (a[m++] = R);
  return ua(e, t, n, o === 0 ? la : l, a, u, c, f);
}
function IA(e, t, n, r) {
  return ua(e, t, n, Hy, qf(RA()), eo(e, 2, -2), 0, r);
}
function fh(e, t, n, r, o) {
  return ua(e, t, n, Yf, eo(e, 0, r), eo(e, r + 1, -1), r, o);
}
function Jy(e, t, n) {
  switch (_A(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
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
      return ce + e + e;
    case 4789:
      return Xo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + Xo + e + ye + e + e;
    case 5936:
      switch (ze(e, t + 11)) {
        case 114:
          return ce + e + ye + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + ye + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + ye + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ce + e + ye + e + e;
    case 6165:
      return ce + e + ye + "flex-" + e + e;
    case 5187:
      return ce + e + te(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return (
        ce +
        e +
        ye +
        "flex-item-" +
        te(e, /flex-|-self/g, "") +
        (nn(e, /flex-|baseline/) ? "" : ye + "grid-row-" + te(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return ce + e + ye + "flex-line-pack" + te(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ce + e + ye + te(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + ye + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ce + "box-" + te(e, "-grow", "") + ce + e + ye + te(e, "grow", "positive") + e;
    case 4554:
      return ce + te(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return (
        te(te(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e
      );
    case 4200:
      if (!nn(e, /flex-|baseline/)) return ye + "grid-column-align" + eo(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ye + te(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), nn(r.props, /grid-\w+-end/);
        })
        ? ~As(e + (n = n[t].value), "span", 0)
          ? e
          : ye +
            te(e, "-start", "") +
            e +
            ye +
            "grid-row-span:" +
            (~As(n, "span", 0) ? nn(n, /\d+/) : +nn(n, /\d+/) - +nn(e, /\d+/)) +
            ";"
        : ye + te(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return nn(r.props, /grid-\w+-start/);
        })
        ? e
        : ye + te(te(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
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
      if (Yt(e) - 1 - t > 6)
        switch (ze(e, t + 1)) {
          case 109:
            if (ze(e, t + 4) !== 45) break;
          case 102:
            return te(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + Xo + (ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~As(e, "stretch", 0) ? Jy(te(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return te(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, o, i, s, l, a, u) {
        return ye + o + ":" + i + u + (s ? ye + o + "-span:" + (l ? a : +a - +i) + u : "") + e;
      });
    case 4949:
      if (ze(e, t + 6) === 121) return te(e, ":", ":" + ce) + e;
      break;
    case 6444:
      switch (ze(e, ze(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            te(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" + ce + (ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + ye + "$2box$3"
            ) + e
          );
        case 100:
          return te(e, ":", ":" + ye) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return te(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function hl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function $A(e, t, n, r) {
  switch (e.type) {
    case wA:
      if (e.children.length) break;
    case SA:
    case Yf:
      return (e.return = e.return || e.value);
    case Hy:
      return "";
    case Ky:
      return (e.return = e.value + "{" + hl(e.children, r) + "}");
    case la:
      if (!Yt((e.value = e.props.join(",")))) return "";
  }
  return Yt((n = hl(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function OA(e) {
  var t = Yy(e);
  return function (n, r, o, i) {
    for (var s = "", l = 0; l < t; l++) s += e[l](n, r, o, i) || "";
    return s;
  };
}
function jA(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function bA(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Yf:
        e.return = Jy(e.value, e.length, n);
        return;
      case Ky:
        return hl([vn(e, { value: te(e.value, "@", "@" + ce) })], r);
      case la:
        if (e.length)
          return EA((n = e.props), function (o) {
            switch (nn(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                yr(vn(e, { props: [te(o, /:(read-\w+)/, ":" + Xo + "$1")] })),
                  yr(vn(e, { props: [o] })),
                  xc(e, { props: uh(n, r) });
                break;
              case "::placeholder":
                yr(vn(e, { props: [te(o, /:(plac\w+)/, ":" + ce + "input-$1")] })),
                  yr(vn(e, { props: [te(o, /:(plac\w+)/, ":" + Xo + "$1")] })),
                  yr(vn(e, { props: [te(o, /:(plac\w+)/, ye + "input-$1")] })),
                  yr(vn(e, { props: [o] })),
                  xc(e, { props: uh(n, r) });
                break;
            }
            return "";
          });
    }
}
var DA = {
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
  pt = {},
  no = (typeof process < "u" && pt !== void 0 && (pt.REACT_APP_SC_ATTR || pt.SC_ATTR)) || "data-styled",
  Zy = "active",
  Xy = "data-styled-version",
  fa = "6.1.10",
  Jf = `/*!sc*/
`,
  Zf = typeof window < "u" && "HTMLElement" in window,
  MA = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        pt !== void 0 &&
        pt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        pt.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? pt.REACT_APP_SC_DISABLE_SPEEDY !== "false" && pt.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        pt !== void 0 &&
        pt.SC_DISABLE_SPEEDY !== void 0 &&
        pt.SC_DISABLE_SPEEDY !== "" &&
        pt.SC_DISABLE_SPEEDY !== "false" &&
        pt.SC_DISABLE_SPEEDY),
  da = Object.freeze([]),
  ro = Object.freeze({});
function UA(e, t, n) {
  return n === void 0 && (n = ro), (e.theme !== n.theme && e.theme) || t || n.theme;
}
var e0 = new Set([
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
  zA = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  FA = /(^-|-$)/g;
function dh(e) {
  return e.replace(zA, "-").replace(FA, "");
}
var BA = /(a)(d)/gi,
  ls = 52,
  ph = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Cc(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > ls; t = (t / ls) | 0) n = ph(t % ls) + n;
  return (ph(t % ls) + n).replace(BA, "$1-$2");
}
var nu,
  t0 = 5381,
  Or = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  n0 = function (e) {
    return Or(t0, e);
  };
function VA(e) {
  return Cc(n0(e) >>> 0);
}
function WA(e) {
  return e.displayName || e.name || "Component";
}
function ru(e) {
  return typeof e == "string" && !0;
}
var r0 = typeof Symbol == "function" && Symbol.for,
  o0 = r0 ? Symbol.for("react.memo") : 60115,
  HA = r0 ? Symbol.for("react.forward_ref") : 60112,
  KA = {
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
  GA = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  i0 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  QA =
    (((nu = {})[HA] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
    (nu[o0] = i0),
    nu);
function hh(e) {
  return ("type" in (t = e) && t.type.$$typeof) === o0 ? i0 : "$$typeof" in e ? QA[e.$$typeof] : KA;
  var t;
}
var YA = Object.defineProperty,
  qA = Object.getOwnPropertyNames,
  mh = Object.getOwnPropertySymbols,
  JA = Object.getOwnPropertyDescriptor,
  ZA = Object.getPrototypeOf,
  vh = Object.prototype;
function s0(e, t, n) {
  if (typeof t != "string") {
    if (vh) {
      var r = ZA(t);
      r && r !== vh && s0(e, r, n);
    }
    var o = qA(t);
    mh && (o = o.concat(mh(t)));
    for (var i = hh(e), s = hh(t), l = 0; l < o.length; ++l) {
      var a = o[l];
      if (!(a in GA || (n && n[a]) || (s && a in s) || (i && a in i))) {
        var u = JA(t, a);
        try {
          YA(e, a, u);
        } catch {}
      }
    }
  }
  return e;
}
function oo(e) {
  return typeof e == "function";
}
function Xf(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function qn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function gh(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function wi(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Nc(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !wi(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Nc(e[r], t[r]);
  else if (wi(t)) for (var r in t) e[r] = Nc(e[r], t[r]);
  return e;
}
function ed(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function ji(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var XA = (function () {
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
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw ji(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)), this.groupSizes.set(r), (this.length = i);
          for (var s = o; s < i; s++) this.groupSizes[s] = 0;
        }
        for (var l = this.indexOfGroup(t + 1), a = ((s = 0), n.length); s < a; s++)
          this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
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
        for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++)
          n += "".concat(this.tag.getRule(s)).concat(Jf);
        return n;
      }),
      e
    );
  })(),
  Is = new Map(),
  ml = new Map(),
  $s = 1,
  as = function (e) {
    if (Is.has(e)) return Is.get(e);
    for (; ml.has($s); ) $s++;
    var t = $s++;
    return Is.set(e, t), ml.set(t, e), t;
  },
  eL = function (e, t) {
    ($s = t + 1), Is.set(e, t), ml.set(t, e);
  },
  tL = "style[".concat(no, "][").concat(Xy, '="').concat(fa, '"]'),
  nL = new RegExp("^".concat(no, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  rL = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
  },
  oL = function (e, t) {
    for (
      var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Jf), o = [], i = 0, s = r.length;
      i < s;
      i++
    ) {
      var l = r[i].trim();
      if (l) {
        var a = l.match(nL);
        if (a) {
          var u = 0 | parseInt(a[1], 10),
            c = a[2];
          u !== 0 && (eL(c, u), rL(e, c, a[3]), e.getTag().insertRules(u, o)), (o.length = 0);
        } else o.push(l);
      }
    }
  };
function iL() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var l0 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (l) {
        var a = Array.from(l.querySelectorAll("style[".concat(no, "]")));
        return a[a.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(no, Zy), r.setAttribute(Xy, fa);
    var s = iL();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  sL = (function () {
    function e(t) {
      (this.element = l0(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.ownerNode === n) return s;
          }
          throw ji(17);
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
  lL = (function () {
    function e(t) {
      (this.element = l0(t)), (this.nodes = this.element.childNodes), (this.length = 0);
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
  aL = (function () {
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
  yh = Zf,
  uL = { isServer: !Zf, useCSSOMInjection: !MA },
  a0 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = ro), n === void 0 && (n = {});
      var o = this;
      (this.options = it(it({}, uL), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Zf &&
          yh &&
          ((yh = !1),
          (function (i) {
            for (var s = document.querySelectorAll(tL), l = 0, a = s.length; l < a; l++) {
              var u = s[l];
              u && u.getAttribute(no) !== Zy && (oL(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        ed(this, function () {
          return (function (i) {
            for (
              var s = i.getTag(),
                l = s.length,
                a = "",
                u = function (f) {
                  var h = (function (m) {
                    return ml.get(m);
                  })(f);
                  if (h === void 0) return "continue";
                  var y = i.names.get(h),
                    v = s.getGroup(f);
                  if (y === void 0 || v.length === 0) return "continue";
                  var S = "".concat(no, ".g").concat(f, '[id="').concat(h, '"]'),
                    T = "";
                  y !== void 0 &&
                    y.forEach(function (m) {
                      m.length > 0 && (T += "".concat(m, ","));
                    }),
                    (a += "".concat(v).concat(S, '{content:"').concat(T, '"}').concat(Jf));
                },
                c = 0;
              c < l;
              c++
            )
              u(c);
            return a;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return as(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return n === void 0 && (n = !0), new e(it(it({}, this.options), t), this.gs, (n && this.names) || void 0);
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
              return n.isServer ? new aL(o) : r ? new sL(o) : new lL(o);
            })(this.options)),
            new XA(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((as(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(as(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(as(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  cL = /&/g,
  fL = /^\s*\/\/.*$/gm;
function u0(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = u0(n.children, t)),
      n
    );
  });
}
function dL(e) {
  var t,
    n,
    r,
    o = ro,
    i = o.options,
    s = i === void 0 ? ro : i,
    l = o.plugins,
    a = l === void 0 ? da : l,
    u = function (h, y, v) {
      return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0 ? ".".concat(t) : h;
    },
    c = a.slice();
  c.push(function (h) {
    h.type === la && h.value.includes("&") && (h.props[0] = h.props[0].replace(cL, n).replace(r, u));
  }),
    s.prefix && c.push(bA),
    c.push($A);
  var f = function (h, y, v, S) {
    y === void 0 && (y = ""),
      v === void 0 && (v = ""),
      S === void 0 && (S = "&"),
      (t = S),
      (n = y),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var T = h.replace(fL, ""),
      m = PA(v || y ? "".concat(v, " ").concat(y, " { ").concat(T, " }") : T);
    s.namespace && (m = u0(m, s.namespace));
    var d = [];
    return (
      hl(
        m,
        OA(
          c.concat(
            jA(function (p) {
              return d.push(p);
            })
          )
        )
      ),
      d
    );
  };
  return (
    (f.hash = a.length
      ? a
          .reduce(function (h, y) {
            return y.name || ji(15), Or(h, y.name);
          }, t0)
          .toString()
      : ""),
    f
  );
}
var pL = new a0(),
  Ac = dL(),
  c0 = ae.createContext({ shouldForwardProp: void 0, styleSheet: pL, stylis: Ac });
c0.Consumer;
ae.createContext(void 0);
function Sh() {
  return j.useContext(c0);
}
var hL = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Ac);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        ed(this, function () {
          throw ji(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ac), this.name + t.hash;
      }),
      e
    );
  })(),
  mL = function (e) {
    return e >= "A" && e <= "Z";
  };
function wh(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    mL(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var f0 = function (e) {
    return e == null || e === !1 || e === "";
  },
  d0 = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !f0(i) &&
        ((Array.isArray(i) && i.isCss) || oo(i)
          ? r.push("".concat(wh(o), ":"), i, ";")
          : wi(i)
            ? r.push.apply(r, pl(pl(["".concat(o, " {")], d0(i), !1), ["}"], !1))
            : r.push(
                ""
                  .concat(wh(o), ": ")
                  .concat(
                    ((t = o),
                    (n = i) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" || n === 0 || t in DA || t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";"
                  )
              ));
    }
    return r;
  };
function nr(e, t, n, r) {
  if (f0(e)) return [];
  if (Xf(e)) return [".".concat(e.styledComponentId)];
  if (oo(e)) {
    if (!oo((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t) return [e];
    var o = e(t);
    return nr(o, t, n, r);
  }
  var i;
  return e instanceof hL
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : wi(e)
      ? d0(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            da,
            e.map(function (s) {
              return nr(s, t, n, r);
            })
          )
        : [e.toString()];
}
function vL(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (oo(n) && !Xf(n)) return !1;
  }
  return !0;
}
var gL = n0(fa),
  yL = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && vL(t)),
        (this.componentId = n),
        (this.baseHash = Or(gL, n)),
        (this.baseStyle = r),
        a0.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
        if (this.isStatic && !r.hash)
          if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = qn(o, this.staticRulesId);
          else {
            var i = gh(nr(this.rules, t, n, r)),
              s = Cc(Or(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var l = r(i, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, l);
            }
            (o = qn(o, s)), (this.staticRulesId = s);
          }
        else {
          for (var a = Or(this.baseHash, r.hash), u = "", c = 0; c < this.rules.length; c++) {
            var f = this.rules[c];
            if (typeof f == "string") u += f;
            else if (f) {
              var h = gh(nr(f, t, n, r));
              (a = Or(a, h + c)), (u += h);
            }
          }
          if (u) {
            var y = Cc(a >>> 0);
            n.hasNameForId(this.componentId, y) ||
              n.insertRules(this.componentId, y, r(u, ".".concat(y), void 0, this.componentId)),
              (o = qn(o, y));
          }
        }
        return o;
      }),
      e
    );
  })(),
  p0 = ae.createContext(void 0);
p0.Consumer;
var ou = {};
function SL(e, t, n) {
  var r = Xf(e),
    o = e,
    i = !ru(e),
    s = t.attrs,
    l = s === void 0 ? da : s,
    a = t.componentId,
    u =
      a === void 0
        ? (function (R, N) {
            var C = typeof R != "string" ? "sc" : dh(R);
            ou[C] = (ou[C] || 0) + 1;
            var k = "".concat(C, "-").concat(VA(fa + C + ou[C]));
            return N ? "".concat(N, "-").concat(k) : k;
          })(t.displayName, t.parentComponentId)
        : a,
    c = t.displayName,
    f =
      c === void 0
        ? (function (R) {
            return ru(R) ? "styled.".concat(R) : "Styled(".concat(WA(R), ")");
          })(e)
        : c,
    h = t.displayName && t.componentId ? "".concat(dh(t.displayName), "-").concat(t.componentId) : t.componentId || u,
    y = r && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
    v = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var S = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var T = t.shouldForwardProp;
      v = function (R, N) {
        return S(R, N) && T(R, N);
      };
    } else v = S;
  }
  var m = new yL(n, h, r ? o.componentStyle : void 0);
  function d(R, N) {
    return (function (C, k, $) {
      var re = C.attrs,
        D = C.componentStyle,
        de = C.defaultProps,
        et = C.foldedComponentIds,
        ue = C.styledComponentId,
        be = C.target,
        $t = ae.useContext(p0),
        De = Sh(),
        Be = C.shouldForwardProp || De.shouldForwardProp,
        M = UA(k, $t, de) || ro,
        H = (function (G, U, J) {
          for (var Z, W = it(it({}, U), { className: void 0, theme: J }), pe = 0; pe < G.length; pe += 1) {
            var _e = oo((Z = G[pe])) ? Z(W) : Z;
            for (var ie in _e)
              W[ie] = ie === "className" ? qn(W[ie], _e[ie]) : ie === "style" ? it(it({}, W[ie]), _e[ie]) : _e[ie];
          }
          return U.className && (W.className = qn(W.className, U.className)), W;
        })(re, k, M),
        b = H.as || be,
        K = {};
      for (var _ in H)
        H[_] === void 0 ||
          _[0] === "$" ||
          _ === "as" ||
          (_ === "theme" && H.theme === M) ||
          (_ === "forwardedAs" ? (K.as = H.forwardedAs) : (Be && !Be(_, b)) || (K[_] = H[_]));
      var P = (function (G, U) {
          var J = Sh(),
            Z = G.generateAndInjectStyles(U, J.styleSheet, J.stylis);
          return Z;
        })(D, H),
        I = qn(et, ue);
      return (
        P && (I += " " + P),
        H.className && (I += " " + H.className),
        (K[ru(b) && !e0.has(b) ? "class" : "className"] = I),
        (K.ref = $),
        j.createElement(b, K)
      );
    })(p, R, N);
  }
  d.displayName = f;
  var p = ae.forwardRef(d);
  return (
    (p.attrs = y),
    (p.componentStyle = m),
    (p.displayName = f),
    (p.shouldForwardProp = v),
    (p.foldedComponentIds = r ? qn(o.foldedComponentIds, o.styledComponentId) : ""),
    (p.styledComponentId = h),
    (p.target = r ? o.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (R) {
        this._foldedDefaultProps = r
          ? (function (N) {
              for (var C = [], k = 1; k < arguments.length; k++) C[k - 1] = arguments[k];
              for (var $ = 0, re = C; $ < re.length; $++) Nc(N, re[$], !0);
              return N;
            })({}, o.defaultProps, R)
          : R;
      },
    }),
    ed(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    i &&
      s0(p, e, {
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
function _h(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Eh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function wL(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (oo(e) || wi(e)) return Eh(nr(_h(da, pl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? nr(r) : Eh(nr(_h(r, t)));
}
function Lc(e, t, n) {
  if ((n === void 0 && (n = ro), !t)) throw ji(1, t);
  var r = function (o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, wL.apply(void 0, pl([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return Lc(e, t, it(it({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
    }),
    (r.withConfig = function (o) {
      return Lc(e, t, it(it({}, n), o));
    }),
    r
  );
}
var h0 = function (e) {
    return Lc(SL, e);
  },
  O = h0;
e0.forEach(function (e) {
  O[e] = h0(e);
});
var td = {};
Object.defineProperty(td, "__esModule", { value: !0 });
var m0 = (td.recoilPersist = void 0);
const _L = (e = {}) => {
  if (typeof window > "u") return { persistAtom: () => {} };
  const { key: t = "recoil-persist", storage: n = localStorage, converter: r = JSON } = e,
    o = ({ onSet: u, node: c, trigger: f, setSelf: h }) => {
      if (f === "get") {
        const y = s();
        typeof y.then == "function" &&
          y.then((v) => {
            v.hasOwnProperty(c.key) && h(v[c.key]);
          }),
          y.hasOwnProperty(c.key) && h(y[c.key]);
      }
      u(async (y, v, S) => {
        const T = s();
        typeof T.then == "function" ? T.then((m) => i(y, m, c.key, S)) : i(y, T, c.key, S);
      });
    },
    i = (u, c, f, h) => {
      h ? delete c[f] : (c[f] = u), a(c);
    },
    s = () => {
      const u = n.getItem(t);
      return u == null ? {} : typeof u == "string" ? l(u) : typeof u.then == "function" ? u.then(l) : {};
    },
    l = (u) => {
      if (u === void 0) return {};
      try {
        return r.parse(u);
      } catch (c) {
        return console.error(c), {};
      }
    },
    a = (u) => {
      try {
        typeof n.mergeItem == "function" ? n.mergeItem(t, r.stringify(u)) : n.setItem(t, r.stringify(u));
      } catch (c) {
        console.error(c);
      }
    };
  return { persistAtom: o };
};
m0 = td.recoilPersist = _L;
const { persistAtom: go } = m0({ key: "persistAtom", storage: sessionStorage }),
  bi = po({ key: "isLoggedIn", default: !1, effects_UNSTABLE: [go] }),
  bn = po({ key: "accessToken", default: "", effects_UNSTABLE: [go] }),
  nd = po({ key: "oliveYoung", default: [], effects_UNSTABLE: [go] }),
  rd = po({ key: "ediya", default: [], effects_UNSTABLE: [go] }),
  od = po({ key: "interPark", default: [], effects_UNSTABLE: [go] }),
  id = po({ key: "ssf", default: [], effects_UNSTABLE: [go] }),
  Nt = ({ primary: e = !1, size: t = "medium", backgroundColor: n, label: r, ...o }) => {
    const i = e ? "storybook-button--primary" : "storybook-button--secondary";
    return g.jsx("button", {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, i].join(" "),
      style: { backgroundColor: n },
      ...o,
      children: r,
    });
  },
  Bn = ({ onLogin: e, onLogout: t }) => {
    const n = ot(bi),
      r = It();
    return g.jsx("header", {
      children: g.jsxs("div", {
        className: "storybook-header",
        children: [
          g.jsx("div", {
            children: g.jsx("h1", {
              onClick: () => {
                r("/main");
              },
              children: "SnapEvent",
            }),
          }),
          g.jsx("div", {
            children: n
              ? g.jsxs(g.Fragment, {
                  children: [
                    g.jsx("span", { className: "welcome", children: "마이페이지" }),
                    g.jsx(Nt, { size: "medium", onClick: t, label: "Log out" }),
                  ],
                })
              : g.jsx(g.Fragment, {
                  children: g.jsx(Nt, { primary: !0, size: "medium", onClick: e, label: "Log In" }),
                }),
          }),
        ],
      }),
    });
  },
  EL = () => {
    const e = It(),
      t = () => {
        e("/login");
      },
      n = () => {
        e("/");
      },
      r = () => {
        navigator.clipboard.writeText("https://snapevent.site"),
          alert(" 📋클립보드에 링크가 복사되었어요! 친구들에게 공유해보세요");
      };
    return g.jsxs(RL, {
      children: [
        g.jsx(Bn, { onLogin: t, onLogout: n }),
        g.jsxs(Rh, {
          children: [
            g.jsx(xh, { src: "/sale.jpeg" }),
            g.jsx(xL, { children: g.jsx(kL, { children: "세일 기간을 놓쳐서 아쉬웠던 적 있으셨나요?" }) }),
            g.jsxs(kh, {
              children: [
                "SnapEvent는 관심 있는 브랜드를 구독하면",
                g.jsx("br", {}),
                "세일 기간에 알림을 보내드립니다.",
                g.jsx("br", {}),
                "마감 전 날까지도 알림을 받아보세요!",
              ],
            }),
            g.jsx(Th, {
              children: g.jsx(Nt, {
                primary: !1,
                label: "서비스 중인 상품 구경하기",
                onClick: () => {
                  e("/onboarding");
                },
              }),
            }),
          ],
        }),
        g.jsxs(Rh, {
          children: [
            g.jsx(xh, { src: "/hands.jpeg" }),
            g.jsxs(kh, {
              children: [
                "SnapEvent를 친구에게 공유하고 함께",
                g.jsx("br", {}),
                "구독 상품을 공유해보세요!",
                g.jsx("br", {}),
                "새로운 상품을 발견하세요.",
              ],
            }),
            g.jsx(Th, {
              children: g.jsx(Nt, {
                onClick: () => {
                  r();
                },
                primary: !1,
                label: "공유하기",
              }),
            }),
          ],
        }),
      ],
    });
  },
  RL = O.div`
  width: 100%;
  padding: 2rem;
`,
  Rh = O.div`
  margin-top: 5rem;
  text-align: center;
`,
  xh = O.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`,
  xL = O.div`
  margin-top: 1.5rem;
`,
  kL = O.h1`
  color: #333;
  font-size: 2rem;
  line-height: 1.5;
`,
  kh = O.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1.5rem 0;
`,
  Th = O.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,
  Os = ({ title: e, description: t, dateRange: n, image: r, href: o }) =>
    g.jsxs(v0, {
      children: [
        g.jsx(g0, { src: r }),
        g.jsxs(y0, {
          children: [
            g.jsx(S0, { href: o, children: e }),
            t && g.jsx(js, { children: t }),
            g.jsxs(js, { children: ["📅 시작 날짜 📅 : ", n.startDate] }),
            g.jsxs(js, { children: ["📅 종료 날짜 📅 : ", n.endDate] }),
            g.jsx(w0, { children: g.jsx(Nt, { primary: !0, size: "medium", label: "알림 설정" }) }),
          ],
        }),
      ],
    }),
  TL = ({ title: e, ticketOpenDate: t, image: n, href: r }) =>
    g.jsxs(v0, {
      children: [
        g.jsx(g0, { src: n }),
        g.jsxs(y0, {
          children: [
            g.jsx(S0, { href: r, children: e }),
            g.jsxs(js, { children: ["📅 시작 날짜 📅 : ", t] }),
            g.jsx(w0, { children: g.jsx(Nt, { primary: !0, size: "medium", label: "알림 설정" }) }),
          ],
        }),
      ],
    }),
  v0 = O.div`
  width: 40%;
  min-width: 250px;
  height: 70%;
  margin: 0.8rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  overflow: hidden;
`,
  g0 = O.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`,
  y0 = O.div`
  padding: 1rem;
  justify-content: space-evenly;
`,
  S0 = O.a`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`,
  js = O.p`
  color: #555;
  font-size: 1rem;
`,
  w0 = O.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,
  CL = () => {
    const e = It(),
      t = ot(nd),
      n = ot(od),
      r = ot(id),
      o = ot(rd);
    return g.jsxs(NL, {
      children: [
        g.jsx(Bn, {
          onLogin: () => {
            e("/login");
          },
        }),
        g.jsxs(AL, {
          children: [
            g.jsx(LL, { children: "구독할 이벤트를 골라 주세요!" }),
            g.jsxs(PL, {
              children: [
                g.jsx(us, { children: " 💄 화장품 💄 " }),
                g.jsxs(fs, {
                  children: [
                    g.jsx(ds, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                    g.jsx(ps, { htmlFor: "subscribe-cosmetics", children: "Oliveyoung 구독하기" }),
                  ],
                }),
                g.jsx(cs, { children: t.map((i) => g.jsx(Os, { ...i }, i.title)) }),
                g.jsx(us, { children: " 🎬 공연/티켓 🎤 " }),
                g.jsxs(fs, {
                  children: [
                    g.jsx(ds, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                    g.jsx(ps, { htmlFor: "subscribe-cosmetics", children: "Interpark 구독하기" }),
                  ],
                }),
                g.jsx(cs, { children: n.map((i) => g.jsx(TL, { ...i }, i.title)) }),
                g.jsx(us, { children: " 🧵 의류 🧶 " }),
                g.jsxs(fs, {
                  children: [
                    g.jsx(ds, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                    g.jsx(ps, { htmlFor: "subscribe-cosmetics", children: "SSF 구독하기" }),
                  ],
                }),
                g.jsx(cs, { children: r.map((i) => g.jsx(Os, { ...i })) }),
                g.jsx(us, { children: " ☕ 카페 🍰 " }),
                g.jsxs(fs, {
                  children: [
                    g.jsx(ds, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                    g.jsx(ps, { htmlFor: "subscribe-cosmetics", children: "Ediya 구독하기" }),
                  ],
                }),
                g.jsx(cs, { children: o.map((i) => g.jsx(Os, { ...i }, i.title)) }),
              ],
            }),
            g.jsx(IL, { children: g.jsx(Nt, { primary: !0, size: "large", label: "구독하기" }) }),
          ],
        }),
      ],
    });
  },
  NL = O.div`
  width: 100%;
  padding: 3rem;
`,
  AL = O.div`
  margin-top: 3rem;
`,
  LL = O.h1`
  color: #333;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`,
  PL = O.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 2rem;
`,
  us = O.h2`
  color: #333;
  font-size: 2rem;
  font-weight: bolder;
  text-align: start;
`,
  cs = O.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
`,
  IL = O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 1rem;
`,
  fs = O.div`
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
`,
  ds = O.input`
  margin-right: 0.5rem;
  zoom: 2;
`,
  ps = O.label`
  font-size: 1.3rem;
`,
  $L = () => {
    const [e, t] = j.useState(!1);
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
  OL = async (e) => {
    await he
      .post("/api/members/join", e)
      .then((t) => {
        t.status === 200 && alert("회원가입이 완료되었습니다:)");
      })
      .catch((t) => {
        console.log(t), t.response.status === 500 && alert(t.response.data);
      });
  },
  _0 = () => {
    const e = xn(bn),
      t = j.useCallback(
        (o) => {
          const i = o.data;
          e(i.accessToken),
            (he.defaults.headers.common.Authorization = `Bearer ${i.accessToken}`),
            console.log("액세스 토큰 변환"),
            console.log(i.accessToken),
            console.log(he.defaults.headers.common.Authorization);
        },
        [e]
      ),
      n = j.useCallback(
        (o) => {
          he.post("/api/members/login", o)
            .then(t)
            .catch((i) => console.log(i));
        },
        [t]
      ),
      r = j.useCallback(() => {
        he.post("/api/members/reissue")
          .then(t)
          .then(() => console.log("토큰재발급 완료"))
          .catch((o) => console.log("토큰 재발급 오류" + o));
      }, [t]);
    return { logIn: n, onSilentRefresh: r };
  },
  jL = () => {
    const [e, t] = j.useState(null);
    return [
      e,
      async (r) => {
        const o = { nickname: `${r}` };
        try {
          const i = await he.post("/api/members/checkname", o);
          console.log(i.data), t(i.data);
        } catch (i) {
          console.error("Error checking duplication:", i), t(null);
        }
      },
    ];
  },
  bL = ({ title: e, onLogIn: t, closeModal: n }) => {
    const r = It(),
      { logIn: o } = _0(),
      i = xn(bi),
      s = ot(bn),
      [l, a] = j.useState(""),
      [u, c] = j.useState(""),
      [f, h] = j.useState(""),
      [y, v] = j.useState(""),
      [S, T] = j.useState(""),
      [m, d] = j.useState(""),
      [p, R] = jL(),
      N = { username: `${l}`, password: `${u}` },
      C = { username: `${f}`, password: `${y}`, checkPassword: `${S}`, nickname: `${m}` };
    j.useEffect(() => {
      s !== "" && (i(!0), r("/main"));
    }, [s]);
    const k = () => {
        alert("로그인 되었습니다..!");
      },
      $ = async (D) => {
        try {
          await o(D), k();
        } catch (de) {
          console.error("로그인 중 오류가 발생했습니다:", de);
        }
      },
      re = async () => {
        if (p === !0) alert("중복된 닉네임을 입력하였습니다. 닉네임 수정 후 다시 시도해주세요:)");
        else if (p === null) alert("닉네임을 입력하고 중복 확인 버튼을 눌러주세요:)");
        else
          try {
            await OL(C), await $({ username: f, password: y });
          } catch (D) {
            console.error("회원가입 또는 로그인 중 오류가 발생했습니다:", D);
          }
      };
    return g.jsx(DL, {
      children: g.jsx(ML, {
        children: g.jsxs(UL, {
          children: [
            g.jsxs(zL, { children: [g.jsx(Ch, { children: e }), g.jsx(Ch, { onClick: n, children: " ❌ " })] }),
            t
              ? g.jsx(g.Fragment, {
                  children: g.jsxs(Nh, {
                    children: [
                      g.jsxs(Sr, {
                        children: [
                          g.jsx(wr, { htmlFor: "ID", children: "ID" }),
                          g.jsx(_r, {
                            name: "ID",
                            type: "text",
                            id: "ID",
                            onChange: (D) => {
                              a(D.target.value);
                            },
                          }),
                        ],
                      }),
                      g.jsxs(Sr, {
                        children: [
                          g.jsx(wr, { htmlFor: "PASSWORD", children: "PASSWORD" }),
                          g.jsx(_r, {
                            id: "PASSWORD",
                            name: "password",
                            type: "text",
                            onChange: (D) => {
                              c(D.target.value);
                            },
                          }),
                        ],
                      }),
                      g.jsx(Nt, {
                        primary: !0,
                        size: "medium",
                        label: "로그인",
                        onClick: async () => {
                          await $(N);
                        },
                      }),
                    ],
                  }),
                })
              : g.jsx(g.Fragment, {
                  children: g.jsxs(Nh, {
                    children: [
                      g.jsxs(Sr, {
                        children: [
                          g.jsx(wr, { htmlFor: "JOINID", children: "ID" }),
                          g.jsx(_r, {
                            id: "JOINID",
                            name: "joinId",
                            type: "text",
                            onChange: (D) => {
                              h(D.target.value);
                            },
                          }),
                        ],
                      }),
                      g.jsxs(Sr, {
                        children: [
                          g.jsx(wr, { htmlFor: "JOINPASSWORD", children: "PASSWORD" }),
                          g.jsx(_r, {
                            id: "JOINPASSWORD",
                            name: "joinPassword",
                            type: "text",
                            onChange: (D) => {
                              v(D.target.value);
                            },
                          }),
                        ],
                      }),
                      g.jsxs(Sr, {
                        children: [
                          g.jsx(wr, { htmlFor: "CHECKPASSWORD", children: "CHECK PASSWORD" }),
                          g.jsx(_r, {
                            id: "CHECKPASSWORD",
                            name: "checkPassword",
                            type: "text",
                            onChange: (D) => {
                              T(D.target.value);
                            },
                          }),
                          S !== y && g.jsx("div", { children: "입력한 비밀번호가 다릅니다." }),
                        ],
                      }),
                      g.jsxs(Sr, {
                        children: [
                          g.jsx(wr, { htmlFor: "NICKNAME", children: "닉네임" }),
                          g.jsx(_r, {
                            id: "NICKNAME",
                            name: "joinNickname",
                            type: "text",
                            onChange: (D) => {
                              d(D.target.value);
                            },
                          }),
                          g.jsx(Nt, {
                            primary: !1,
                            size: "small",
                            label: "중복 확인",
                            onClick: () => {
                              R(m);
                            },
                          }),
                          p !== null &&
                            g.jsx("div", {
                              children: p === !0 ? "닉네임이 이미 사용 중입니다." : "닉네임 사용 가능합니다.",
                            }),
                        ],
                      }),
                      g.jsx(Nt, { primary: !0, label: "회원가입", size: "medium", onClick: re }),
                    ],
                  }),
                }),
          ],
        }),
      }),
    });
  },
  DL = O.div`
  width: 100vw;
  height: 100vh;
`,
  ML = O.div`
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
  UL = O.div`
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
  zL = O.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,
  Ch = O.h1`
  font-size: 2.5rem;
  color: #333;
  cursor: pointer;
`,
  Nh = O.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 2rem);
`,
  Sr = O.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`,
  wr = O.label`
  width: 100px;
  color: #333;
`,
  _r = O.input`
  width: calc(80% - 1rem);
  height: 2rem;
  border-radius: 5px;
  border-color: #7a7a7a;
`,
  iu = (e) => {
    window.location.href = e;
  },
  FL = () => {
    const { isOpenModal: e, clickModal: t, closeModal: n } = $L(),
      [r, o] = j.useState(!1);
    return g.jsxs(BL, {
      children: [
        g.jsx(VL, { children: "🔥 SnapEvent 🔥" }),
        g.jsx(WL, { children: "회원가입 또는 로그인하세요!" }),
        g.jsx(HL, { children: "스냅 이벤트의 다양한 서비스를 이용해보세요." }),
        g.jsxs(KL, {
          children: [
            g.jsx(Nt, {
              primary: !1,
              size: "large",
              label: "회원가입",
              onClick: () => {
                o(!0), t();
              },
            }),
            g.jsx(Nt, {
              primary: !0,
              size: "large",
              label: "로그인",
              onClick: () => {
                o(!1), t();
              },
            }),
          ],
        }),
        g.jsx(GL, {}),
        g.jsxs(QL, {
          onClick: () => iu("https://snapevent.site/oauth2/authorization/kakao"),
          children: [g.jsx(lu, { src: "/kakao.png" }), g.jsx(su, { children: "카카오로 로그인" })],
        }),
        g.jsxs(YL, {
          onClick: () => iu("https://snapevent.site/oauth2/authorization/naver"),
          children: [g.jsx(lu, { src: "/naver.svg" }), g.jsx(su, { children: "네이버로 로그인" })],
        }),
        g.jsxs(qL, {
          onClick: () => iu("https://snapevent.site/oauth2/authorization/google"),
          children: [g.jsx(lu, { src: "/google.png" }), g.jsx(su, { children: "구글로 로그인" })],
        }),
        e && g.jsx(bL, { title: r ? "Join In" : "Log In", closeModal: n, onLogIn: !r }),
      ],
    });
  },
  BL = O.div`
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
  VL = O.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,
  WL = O.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,
  HL = O.p`
  font-size: 1.3rem;
  color: #777;
  margin-bottom: 2rem;
`,
  KL = O.div`
  display: flex;
  gap: 1rem;
`,
  GL = O.hr`
  margin-top: 2rem;
  border: solid 0.7px #777;
  width: 370px;
`,
  sd = O.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 47px;
  background-color: ${({ color: e }) => e || "#fff"};
  border: 2px solid ${({ color: e }) => e || "#999"};
  border-radius: 5px;
  margin-top: 0.5rem;
  position: relative;
`,
  QL = O(sd)`
  background-color: #fee500;
  border-color: #fee500;
`,
  su = O.p`
  font-size: 15px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #300;
  margin-left: 30px;
`,
  YL = O(sd)`
  background-color: #00c73c;
  border-color: #00c73c;
`,
  qL = O(sd)`
  background-color: #ffffff;
  border-color: #999999;
`,
  lu = O.img`
  width: 30px;
  border-radius: 5px;
  margin-left: 1vw;
`,
  Di = () => {
    const e = It();
    return g.jsx(JL, {
      children: g.jsxs(ZL, {
        children: [
          g.jsx(Oo, { onClick: () => e("/cosmetic"), children: "화장품" }),
          g.jsx(Oo, { onClick: () => e("/cafe"), children: "카페" }),
          g.jsx(Oo, { onClick: () => e("/concert"), children: "공연/티켓" }),
          g.jsx(Oo, { onClick: () => e("/clothes"), children: "의류" }),
          g.jsx(Oo, { onClick: () => e("/board"), children: "게시판" }),
        ],
      }),
    });
  },
  JL = O.div`
  margin: 0;
  width: 90vw;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  ZL = O.div`
  margin: 1rem;
  width: 95%;
  height: 10%;
  display: flex;
  background-color: #ffbe98;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`,
  Oo = O.span`
  color: black;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    color: #ff6f61;
  }
`,
  XL = () => {
    const e = It(),
      t = ot(bi),
      [n, r] = j.useState([
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
      j.useEffect(() => {
        (async () => {
          const o = await fetch("https://snapevent.site/api/posts/list/1/7/recent");
          if (!o.ok) throw new Error("api 호출 실패 " + o.statusText);
          const i = await o.json();
          r(i.content);
        })();
      }, []),
      g.jsxs("div", {
        children: [
          g.jsx(eP, { children: g.jsx("h2", { children: "게시판" }) }),
          n &&
            g.jsx(tP, {
              children: n.map((o) =>
                g.jsx(
                  nP,
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
  eP = O.div`
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
  tP = O.div`
  margin: 2rem auto;
  max-width: 1000px;
`,
  nP = O.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`,
  rP = () => {
    const e = Qf(),
      t = It(),
      n = xn(bi),
      r = xn(bn),
      o = ot(bn),
      [i, s] = j.useState([]),
      [l, a] = j.useState(null);
    return (
      j.useEffect(() => {
        const c = new URLSearchParams(e.search).get("accessToken");
        c &&
          (n(!0),
          r(c),
          t("/main", { replace: !0 }),
          he
            .get("/api/subs/showlist", { headers: { Authorization: `Bearer ${c}` } })
            .then((f) => {
              s(f.data), console.log(f.data);
            })
            .catch((f) => {
              a(f), console.log(f);
            }));
      }, [o]),
      { data: i, error: l }
    );
  },
  oP = () => {
    const e = It(),
      t = ot(bi),
      n = ["OliveYoung", "SSFShop", "Interpark", "EdiyaCoffee"],
      { data: r, error: o } = rP();
    console.log(r), o && console.log(o);
    const i = [
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
    return g.jsxs(iP, {
      children: [
        g.jsx(Bn, {
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        g.jsx(Di, {}),
        g.jsxs(Ah, {
          children: [
            t && bn ? g.jsx(au, { children: "구독 중인 브랜드" }) : g.jsx(au, { children: "서비스 중인 브랜드" }),
            t && bn
              ? g.jsx(uu, {
                  children:
                    r.length > 0
                      ? g.jsx(cu, {
                          children: r.map((s) =>
                            g.jsxs(
                              fu,
                              {
                                children: [
                                  g.jsx(du, { src: `/${s.subedSiteName}.jpg`, alt: `/${s.subedSiteName}.jpg` }),
                                  " ",
                                ],
                              },
                              s.id
                            )
                          ),
                        })
                      : g.jsx(Lh, { children: "구독 중인 브랜드가 없습니다!" }),
                })
              : g.jsx(uu, {
                  children: g.jsx(cu, {
                    children: n.map((s) =>
                      g.jsx(fu, { children: g.jsx(du, { src: `/${s}.jpg`, alt: `/${s}.jpg` }) }, s)
                    ),
                  }),
                }),
          ],
        }),
        t &&
          g.jsxs(Ah, {
            children: [
              g.jsx(au, { children: "000님이 팔로우 중인 000님이 구독 중인 브랜드" }),
              g.jsx(uu, {
                children:
                  i.length > 0
                    ? g.jsx(cu, {
                        children: i.map((s) =>
                          g.jsxs(
                            fu,
                            {
                              children: [
                                g.jsx(du, { src: s.image, alt: s.title }),
                                g.jsx(Os, {
                                  image: s.image,
                                  title: s.title,
                                  dateRange: s.dateRange,
                                  href: s.href,
                                  description: s.description,
                                }),
                              ],
                            },
                            s.title
                          )
                        ),
                      })
                    : g.jsx(Lh, { children: "팔로우 중인 브랜드가 없습니다!" }),
              }),
            ],
          }),
        g.jsx(XL, {}),
      ],
    });
  },
  iP = O.div`
  padding: 2rem;
`,
  Ah = O.section`
  margin-top: 2rem;
`,
  au = O.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  margin-left: 3.7rem;
`,
  uu = O.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-left: 3.7rem;
  max-width: 80vw;
  min-width: 400px;
`,
  cu = O.div`
  display: flex;
`,
  fu = O.div`
  width: 20vw;
  min-width: 200px;
  height: 15vw;
  min-height: 150px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 0 0 auto;
`,
  du = O.img`
  width: 20vw;
  min-width: 200px;
  height: 15vw;
  min-height: 150px;
  object-fit: cover;
  border-radius: 10px;
`,
  Lh = O.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-left: 3.7rem;
`,
  Ph = () => g.jsx("div", { children: g.jsx(Bn, {}) }),
  E0 = () => g.jsx(E0, {}),
  ld = ({ title: e, description: t, dateRange: n, image: r, href: o }) =>
    g.jsxs(R0, {
      children: [
        g.jsx(lP, { src: r, alt: e }),
        g.jsxs(x0, {
          children: [
            g.jsxs(k0, {
              onClick: () => {
                location.href = o;
              },
              children: [" ", e],
            }),
            g.jsx(aP, { children: t }),
            g.jsxs(T0, { children: ["시작 날짜: ", n.startDate, " ", g.jsx("br", {}), "종료 날짜: ", n.endDate] }),
          ],
        }),
      ],
    }),
  sP = ({ title: e, ticketOpenDate: t, image: n, href: r }) =>
    g.jsxs(R0, {
      children: [
        g.jsx(uP, { src: n, alt: e }),
        g.jsxs(x0, {
          children: [
            g.jsxs(k0, {
              onClick: () => {
                location.href = r;
              },
              children: [" ", e],
            }),
            g.jsxs(T0, { children: ["티켓 오픈 날짜: ", t] }),
          ],
        }),
      ],
    }),
  R0 = O.div`
  width: 100%;
  max-width: 1200px;
  background-color: #fff4e6;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 1vw;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`,
  x0 = O.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  padding: 20px;
  flex: 1;
`,
  lP = O.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`,
  k0 = O.div`
  font-size: 1.7rem;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #ff6f61;
  }
`,
  aP = O.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`,
  T0 = O.div`
  font-size: 1rem;
  color: #333;
`,
  uP = O.img`
  width: 20%;
  height: auto;
  object-fit: cover;
`,
  cP = () => {
    const e = It(),
      t = ot(nd);
    return g.jsxs(fP, {
      children: [
        g.jsx(Bn, {
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        g.jsx(Di, {}),
        g.jsxs(dP, { children: [g.jsx(pP, { children: "올리브영 🫒" }), t.map((n) => g.jsx(ld, { ...n }))] }),
      ],
    });
  },
  fP = O.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,
  dP = O.div`
  width: 79vw;
  min-width: 400px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 35px;
  padding: 3vw;
`,
  pP = O.h2`
  color: #333;
  font-size: 2.5em;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid #eee;
  padding-left: 10px;
  padding-bottom: 20px;
`,
  hP = () => {
    const e = It(),
      t = ot(rd);
    return g.jsxs(mP, {
      children: [
        g.jsx(Bn, {
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        g.jsx(Di, {}),
        g.jsxs(vP, { children: [g.jsx(gP, { children: "이디야 🧋" }), t.map((n) => g.jsx(ld, { ...n }))] }),
      ],
    });
  },
  mP = O.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,
  vP = O.div`
  width: 79vw;
  min-width: 400px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 35px;
  padding: 3vw;
`,
  gP = O.h2`
  color: #333;
  font-size: 2.5em;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid #eee;
  padding-left: 10px;
  padding-bottom: 20px;
`,
  yP = () => {
    const e = It(),
      t = ot(od);
    return g.jsxs(SP, {
      children: [
        g.jsx(Bn, {
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        g.jsx(Di, {}),
        g.jsxs(wP, { children: [g.jsx(_P, { children: "인터파크 🎪" }), t.map((n) => g.jsx(sP, { ...n }))] }),
      ],
    });
  },
  SP = O.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,
  wP = O.div`
  width: 79vw;
  min-width: 400px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 35px;
  padding: 3vw;
`,
  _P = O.h2`
  color: #333;
  font-size: 2.5em;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid #eee;
  padding-left: 10px;
  padding-bottom: 20px;
`,
  EP = () => {
    const e = It(),
      t = ot(id);
    return g.jsxs(RP, {
      children: [
        g.jsx(Bn, {
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        g.jsx(Di, {}),
        g.jsxs(xP, { children: [g.jsx(kP, { children: "SSF 👕" }), t.map((n) => g.jsx(ld, { ...n }))] }),
      ],
    });
  },
  RP = O.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,
  xP = O.div`
  width: 79vw;
  min-width: 400px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 35px;
  padding: 3vw;
`,
  kP = O.h2`
  color: #333;
  font-size: 2.5em;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid #eee;
  padding-left: 10px;
  padding-bottom: 20px;
`,
  TP = "https://snapevent.site/api/crawl/olive-young",
  CP = "https://snapevent.site/api/crawl/interpark",
  NP = "https://snapevent.site/api/crawl/ssf-shop",
  AP = "https://snapevent.site/api/crawl/ediya-coffee",
  LP = () => {
    const e = ot(bn),
      t = xn(nd),
      n = xn(od),
      r = xn(id),
      o = xn(rd),
      { onSilentRefresh: i } = _0();
    return (
      j.useEffect(() => {
        console.log("access Token: ", e), i();
      }, [bn]),
      j.useEffect(() => {
        (async () => {
          const s = await fetch(TP),
            l = await fetch(CP),
            a = await fetch(NP),
            u = await fetch(AP);
          if (!s.ok) throw new Error("API 호출 실패" + s.statusText);
          if (!l.ok) throw new Error("API 호출 실패" + l.statusText);
          if (!a.ok) throw new Error("API 호출 실패" + a.statusText);
          if (!u.ok) throw new Error("API 호출 실패" + u.statusText);
          const c = await s.json();
          t(c);
          const f = await l.json();
          n(f);
          const h = await a.json();
          r(h);
          const y = await u.json();
          o(y);
        })();
      }, []),
      g.jsx(Oy, {
        children: g.jsx(yA, {
          children: g.jsxs(mA, {
            children: [
              g.jsx(Et, { path: "/", element: g.jsx(EL, {}) }),
              g.jsx(Et, { path: "/onboarding", element: g.jsx(CL, {}) }),
              g.jsx(Et, { path: "/login", element: g.jsx(FL, {}) }),
              g.jsx(Et, { path: "/main", element: g.jsx(oP, {}) }),
              g.jsx(Et, { path: "/board", element: g.jsx(Ph, {}) }),
              g.jsx(Et, { path: "/mypage", element: g.jsx(E0, {}) }),
              g.jsx(Et, { path: "/cosmetic", element: g.jsx(cP, {}) }),
              g.jsx(Et, { path: "/cafe", element: g.jsx(hP, {}) }),
              g.jsx(Et, { path: "/concert", element: g.jsx(yP, {}) }),
              g.jsx(Et, { path: "/clothes", element: g.jsx(EP, {}) }),
              g.jsx(Et, { path: "/board", element: g.jsx(Ph, {}) }),
            ],
          }),
        }),
      })
    );
  };
he.defaults.baseURL = "https://snapevent.site";
he.defaults.withCredentials = !0;
pu.createRoot(document.getElementById("root")).render(
  g.jsx(ae.StrictMode, { children: g.jsx(Oy, { children: g.jsx(LP, {}) }) })
);
