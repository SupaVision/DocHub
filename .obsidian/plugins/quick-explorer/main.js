var ee = Object.defineProperty;
var Ge = Object.getOwnPropertyDescriptor;
var Xe = Object.getOwnPropertyNames;
var Ye = Object.prototype.hasOwnProperty;
var Je = (r, i) => {
    for (var e in i) ee(r, e, { get: i[e], enumerable: !0 });
  },
  Z = (r, i, e, t) => {
    if ((i && typeof i == "object") || typeof i == "function")
      for (let o of Xe(i))
        !Ye.call(r, o) &&
          o !== e &&
          ee(r, o, {
            get: () => i[o],
            enumerable: !(t = Ge(i, o)) || t.enumerable,
          });
    return r;
  },
  K = (r, i, e) => (Z(r, i, "default"), e && Z(e, i, "default"));
var Qe = (r) => Z(ee({}, "__esModule", { value: !0 }), r);
var mt = {};
Je(mt, { default: () => Q });
module.exports = Qe(mt);
var c = {};
K(c, require("obsidian"));
var h = {};
K(h, require("obsidian"));
var te = Symbol.for("v1.to-use.peak-dev.org"),
  oe = Symbol.for("v1.factory.to-use.peak-dev.org"),
  A,
  H,
  y = (function () {
    return Object.defineProperties(r(), {
      this: {
        get() {
          if (A) return A;
          throw new TypeError("No current context");
        },
      },
      me: { value: te },
      factory: { value: oe },
    });
    function r(o) {
      let n = new Map();
      n.prev = o;
      let s = Object.assign(
        o
          ? (l) => {
              let u = n.get(l);
              if (!u) {
                for (let f = n.prev; f; f = f.prev)
                  if ((u = f.get(l))) {
                    u = Object.assign(Object.assign({}, u), { s: u.s || 1 });
                    break;
                  }
                (u = u || { s: 2, v: e }), n.set(l, u);
              }
              let p, m, d;
              for (;;)
                switch (u.s) {
                  case 0:
                    return A === s && H && H.push(l), u.v;
                  case 1:
                    if (
                      ((p = u.d),
                      !p || a(() => p.k.every((f) => s(f) === p.c(f))))
                    ) {
                      u.s = 0;
                      break;
                    }
                    u.v = p.f;
                  case 2:
                    u.s = 4;
                    try {
                      i(n, l, 0, a((m = u.v), l, (d = []))),
                        d.length && (u.d = { c: s, f: m, k: d });
                      break;
                    } catch (f) {
                      (u.s = 3), (u.v = f), (u.d = null);
                    }
                  case 3:
                    throw u.v;
                  case 4:
                    throw new Error(
                      `Factory ${String(u.v)} didn't resolve ${String(l)}`,
                    );
                }
            }
          : (l) => y.this(l),
        {
          def(l, u) {
            return i(n, l, 2, u), s;
          },
          set(l, u) {
            return i(n, l, 1, u), s;
          },
          fork(l) {
            let u = r(n);
            return l != null ? u(l) : u;
          },
        },
      );
      return o ? (s.use = s) : s;
      function a(l, u, p) {
        let m = A,
          d = H;
        try {
          return (A = s), (H = p), l(u);
        } finally {
          (A = m), (H = d);
        }
      }
    }
    function i(o, n, s, a) {
      if (o.has(n)) {
        let l = o.get(n);
        if (!l.s) throw new Error(`Already read: ${String(n)}`);
        (l.s = s), (l.v = a), (l.d = null);
      } else o.set(n, { s, v: a });
    }
    function e(o) {
      if (typeof o[te] == "function") return o[te](o);
      if (t(o))
        return typeof o.prototype[oe] == "function"
          ? o.prototype[oe]()
          : new o();
      throw new ReferenceError(`No config for ${String(o)}`);
    }
    function t(o) {
      return (
        typeof o == "function" &&
        o.prototype !== void 0 &&
        (Object.getPrototypeOf(o.prototype) !== Object.prototype ||
          Object.getOwnPropertyNames(o.prototype).length > 1 ||
          o.toString().startsWith("class"))
      );
    }
  })();
var be,
  C =
    (be = window.queueMicrotask) != null
      ? be
      : (
          (r) => (i) =>
            r.then(i)
        )(Promise.resolve());
y.def(h.Plugin, () => {
  throw new Error("Plugin not created yet");
});
var L = class extends h.Component {
  constructor() {
    super(...arguments);
    this.use = y.service(this);
  }
};
y.service = function (r) {
  return y(j).addChild(r), y.this;
};
y.plugin = function (r) {
  let i = y.fork().set(h.Plugin, r).set(r.constructor, r);
  return r.addChild(i.use(j)), i;
};
var j = class extends h.Component {
  constructor() {
    super(...arguments);
    this.children = new Set([this]);
  }
  onload() {
    this.loaded = !0;
  }
  onunload() {
    (this.loaded = !1), this.children.clear();
  }
  addChild(e) {
    return (
      this.children.has(e) ||
        (this.children.add(e),
        this.loaded ? C(() => super.addChild(e)) : super.addChild(e)),
      e
    );
  }
};
function U(r, i) {
  r._loaded && r.removeChild(i);
}
function ye(r, i) {
  let e = new h.Component();
  (e.onload = () => {
    U(r, e), i();
  }),
    r.addChild(e);
}
function E(r, i) {
  let e = Object.keys(i).map((t) => Ze(r, t, i[t]));
  return e.length === 1
    ? e[0]
    : function () {
        e.forEach((t) => t());
      };
}
function Ze(r, i, e) {
  let t = r[i],
    o = r.hasOwnProperty(i),
    n = e(t);
  return (
    t && Object.setPrototypeOf(n, t), Object.setPrototypeOf(s, n), (r[i] = s), a
  );
  function s(...l) {
    return n === t && r[i] === s && a(), n.apply(this, l);
  }
  function a() {
    r[i] === s && (o ? (r[i] = t) : delete r[i]),
      n !== t && ((n = t), Object.setPrototypeOf(s, t || Function));
  }
}
function z(r) {
  let i = app.workspace;
  switch (r == null ? void 0 : r.getRoot()) {
    case i.rootSplit:
    case i.floatingSplit:
    case i.leftSplit:
    case i.rightSplit:
      return !0;
    default:
      return !1;
  }
}
var ie = 2,
  jt = Symbol.for(`v${ie}.layout-storage-events.ophidian.peak-dev.org`);
var Ut = `ophidian-layout-storage:v${ie}:item-load`,
  zt = `ophidian-layout-storage:v${ie}:item-save`;
function Ee(
  r,
  i = window,
  e = "plugin-" +
    r
      .use(h.Plugin)
      .manifest.id.toLowerCase()
      .replace(/[^_a-zA-Z0-9-]/, "-"),
) {
  let t = i.document.querySelector("body > .app-container"),
    o = t.find(".status-bar") || t.createDiv("status-bar"),
    n =
      o.find(".status-bar-item." + e) ||
      o.createDiv(`status-bar-item ${e.replace(/\./g, " ")}`);
  return (
    (t = null),
    r.register(() =>
      C(() => {
        (n = xe(n)), (o = xe(o));
      }),
    ),
    r.use(h.Plugin).register(() => n && n.detach()),
    n
  );
}
function xe(r) {
  return r && !r.hasChildNodes() ? (r.detach(), null) : r;
}
var q = class extends h.Component {
    constructor(e, t) {
      super();
      this.use = e;
      this.container = t;
      this.win = this.container.win;
    }
    [y.factory]() {
      return new ne(this.constructor);
    }
    static onload(e) {}
    static onunload(e) {}
  },
  ne = class extends L {
    constructor(e) {
      super();
      this.factory = e;
      this.instances = new Map();
      this.watching = !1;
      this.layoutReadyCallbacks = [];
    }
    onload() {
      var e, t;
      this.registerEvent(
        app.workspace.on("layout-change", () => {
          app.workspace.layoutReady &&
            this.layoutReadyCallbacks.length &&
            (this.layoutReadyCallbacks.forEach(C),
            (this.layoutReadyCallbacks = []));
        }),
      ),
        (t = (e = this.factory).onload) == null || t.call(e, this.use);
    }
    onLeafChange(e, t) {
      return (
        this.onLayoutReady(() => e.call(t, app.workspace.activeLeaf)),
        app.workspace.on("active-leaf-change", (o) => {
          app.workspace.layoutReady && e.call(t, o);
        })
      );
    }
    onLayoutReady(e) {
      app.workspace.layoutReady ? C(e) : this.layoutReadyCallbacks.push(e);
    }
    onunload() {
      var e, t;
      (t = (e = this.factory).onunload) == null || t.call(e, this.use);
    }
    watch() {
      if (!this._loaded) ye(this, () => this.watch());
      else if (!this.watching) {
        let { workspace: e } = app,
          t = this;
        (this.watching = !0),
          this.registerEvent(
            e.on("window-open", (o) => {
              this.onLayoutReady(() => this.forContainer(o));
            }),
          ),
          this.register(
            E(e, {
              clearLayout(o) {
                return async function () {
                  try {
                    return await o.call(this);
                  } finally {
                    t.onLayoutReady(() => t.forAll());
                  }
                };
              },
            }),
          ),
          this.onLayoutReady(() => this.forAll());
      }
      return this;
    }
    forWindow(
      e = ((o) => ((o = window.activeWindow) != null ? o : window))(),
      t = !0,
    ) {
      let n = tt(e);
      if (n) return this.forContainer(n, t);
    }
    forContainer(e, t = !0) {
      e = e.getContainer();
      let o = this.instances.get(e);
      return (
        !o &&
          t &&
          ((o = new this.factory(this.use, e)),
          o &&
            (this.instances.set(e, o),
            this.addChild(o),
            e.component.addChild(o),
            o.register(() => {
              U(this, o), U(e.component, o), this.instances.delete(e);
            }))),
        o
      );
    }
    forDom(e, t = !0) {
      return this.forWindow(re(e), t);
    }
    forLeaf(e = app.workspace.activeLeaf, t = !0) {
      if (z(e)) return this.forContainer(e.getContainer(), t);
    }
    forView(e, t = !0) {
      return this.forLeaf(e.leaf, t);
    }
    forAll(e = !0) {
      return et()
        .map((t) => this.forContainer(t, e))
        .filter((t) => t);
    }
  };
function et() {
  return [app.workspace.rootSplit].concat(app.workspace.floatingSplit.children);
}
function re(r) {
  return r.win || (r.ownerDocument || r).defaultView || window;
}
function tt(r) {
  if (r === window) return app.workspace.rootSplit;
  let { floatingSplit: i } = app.workspace;
  if (i) {
    for (let e of i.children) if (r === e.win) return e;
  }
}
var $ = class extends L {
  onload() {
    let i = this,
      e = this.use(h.Plugin);
    this.register(
      E(e, {
        loadCSS(t) {
          return async function () {
            await t.call(this),
              i.triggerReparse(),
              this.register(() => i.triggerReparse());
          };
        },
      }),
    );
  }
  triggerReparse() {
    app.workspace.layoutReady && app.workspace.trigger("parse-style-settings");
  }
};
function W(r, i, e, t, o) {
  return r.on(i, e, t, o), () => r.off(i, e, t, o);
}
var Fe = {};
function D(r, i, e = [], t = {}) {
  typeof e == "string" && (e = [e]), typeof e == "object" && e.key && (e = [e]);
  let o = e.map(function (s) {
    if (typeof s == "object") return s;
    let a = s.split("+");
    return { modifiers: a, key: a.pop() || "+" };
  });
  Object.assign(t, { id: r, name: i, hotkeys: o });
  let n = Symbol("cmd:" + r);
  return (Fe[n] = t), n;
}
function Ce(r, i = r.constructor.prototype) {
  Object.getOwnPropertySymbols(i).forEach((e) => {
    let t = Fe[e],
      o = i[e];
    t &&
      r.addCommand(
        Object.assign({}, t, {
          checkCallback(n) {
            let s = o.call(r);
            return n || typeof s != "function" ? !!s : (s(), !0);
          },
        }),
      );
  });
}
function ot(r) {
  for (
    var i = r.split(/([#.])/), e = "", t = "", o = [], n = 0;
    n < i.length;
    n++
  ) {
    var s = i[n];
    s === "#" ? (t = i[++n]) : s === "." ? o.push(i[++n]) : s.length && (e = s);
  }
  return { tag: e || "div", id: t, className: o.join(" ") };
}
function Se(r, i) {
  var e = ot(r),
    t = e.tag,
    o = e.id,
    n = e.className,
    s = i ? document.createElementNS(i, t) : document.createElement(t);
  return (
    o && (s.id = o),
    n && (i ? s.setAttribute("class", n) : (s.className = n)),
    s
  );
}
function M(r, i) {
  var e = w(r),
    t = w(i);
  return (
    i === t && t.__redom_view && (i = t.__redom_view),
    t.parentNode && (Ae(i, t, e), e.removeChild(t)),
    i
  );
}
function Ae(r, i, e) {
  var t = i.__redom_lifecycle;
  if (Me(t)) {
    i.__redom_lifecycle = {};
    return;
  }
  var o = e;
  for (i.__redom_mounted && G(i, "onunmount"); o; ) {
    var n = o.__redom_lifecycle || {};
    for (var s in t) n[s] && (n[s] -= t[s]);
    Me(n) && (o.__redom_lifecycle = null), (o = o.parentNode);
  }
}
function Me(r) {
  if (r == null) return !0;
  for (var i in r) if (r[i]) return !1;
  return !0;
}
var it = ["onmount", "onremount", "onunmount"],
  nt = typeof window != "undefined" && "ShadowRoot" in window;
function T(r, i, e, t) {
  var o = w(r),
    n = w(i);
  i === n && n.__redom_view && (i = n.__redom_view),
    i !== n && (n.__redom_view = i);
  var s = n.__redom_mounted,
    a = n.parentNode;
  return (
    s && a !== o && Ae(i, n, a),
    e != null
      ? t
        ? o.replaceChild(n, w(e))
        : o.insertBefore(n, w(e))
      : o.appendChild(n),
    rt(i, n, o, a),
    i
  );
}
function G(r, i) {
  i === "onmount" || i === "onremount"
    ? (r.__redom_mounted = !0)
    : i === "onunmount" && (r.__redom_mounted = !1);
  var e = r.__redom_lifecycle;
  if (!!e) {
    var t = r.__redom_view,
      o = 0;
    t && t[i] && t[i]();
    for (var n in e) n && o++;
    if (o)
      for (var s = r.firstChild; s; ) {
        var a = s.nextSibling;
        G(s, i), (s = a);
      }
  }
}
function rt(r, i, e, t) {
  for (
    var o = i.__redom_lifecycle || (i.__redom_lifecycle = {}),
      n = e === t,
      s = !1,
      a = 0,
      l = it;
    a < l.length;
    a += 1
  ) {
    var u = l[a];
    n || (r !== i && u in r && (o[u] = (o[u] || 0) + 1)), o[u] && (s = !0);
  }
  if (!s) {
    i.__redom_lifecycle = {};
    return;
  }
  var p = e,
    m = !1;
  for (
    (n || (p && p.__redom_mounted)) &&
    (G(i, n ? "onremount" : "onmount"), (m = !0));
    p;

  ) {
    var d = p.parentNode,
      f = p.__redom_lifecycle || (p.__redom_lifecycle = {});
    for (var v in o) f[v] = (f[v] || 0) + o[v];
    if (m) break;
    (p.nodeType === Node.DOCUMENT_NODE ||
      (nt && p instanceof ShadowRoot) ||
      (d && d.__redom_mounted)) &&
      (G(p, n ? "onremount" : "onmount"), (m = !0)),
      (p = d);
  }
}
function st(r, i, e) {
  var t = w(r);
  if (typeof i == "object") for (var o in i) Te(t, o, i[o]);
  else Te(t, i, e);
}
function Te(r, i, e) {
  e == null ? (r.style[i] = "") : (r.style[i] = e);
}
var ke = "http://www.w3.org/1999/xlink";
function _e(r, i, e, t) {
  var o = w(r),
    n = typeof i == "object";
  if (n) for (var s in i) _e(o, s, i[s], t);
  else {
    var a = o instanceof SVGElement,
      l = typeof e == "function";
    if (i === "style" && typeof e == "object") st(o, e);
    else if (a && l) o[i] = e;
    else if (i === "dataset") He(o, e);
    else if (!a && (i in o || l) && i !== "list") o[i] = e;
    else {
      if (a && i === "xlink") {
        Ie(o, e);
        return;
      }
      t && i === "class" && (e = o.className + " " + e),
        e == null ? o.removeAttribute(i) : o.setAttribute(i, e);
    }
  }
}
function Ie(r, i, e) {
  if (typeof i == "object") for (var t in i) Ie(r, t, i[t]);
  else e != null ? r.setAttributeNS(ke, i, e) : r.removeAttributeNS(ke, i, e);
}
function He(r, i, e) {
  if (typeof i == "object") for (var t in i) He(r, t, i[t]);
  else e != null ? (r.dataset[i] = e) : delete r.dataset[i];
}
function We(r) {
  return document.createTextNode(r != null ? r : "");
}
function ae(r, i, e) {
  for (var t = 0, o = i; t < o.length; t += 1) {
    var n = o[t];
    if (!(n !== 0 && !n)) {
      var s = typeof n;
      s === "function"
        ? n(r)
        : s === "string" || s === "number"
          ? r.appendChild(We(n))
          : X(w(n))
            ? T(r, n)
            : n.length
              ? ae(r, n, e)
              : s === "object" && _e(r, n, null, e);
    }
  }
}
function De(r) {
  return typeof r == "string" ? R(r) : w(r);
}
function w(r) {
  return (r.nodeType && r) || (!r.el && r) || w(r.el);
}
function X(r) {
  return r && r.nodeType;
}
var Pe = {};
function R(r) {
  for (var i = [], e = arguments.length - 1; e-- > 0; ) i[e] = arguments[e + 1];
  var t,
    o = typeof r;
  if (o === "string") t = Re(r).cloneNode(!1);
  else if (X(r)) t = r.cloneNode(!1);
  else if (o === "function") {
    var n = r;
    t = new (Function.prototype.bind.apply(n, [null].concat(i)))();
  } else throw new Error("At least one argument required");
  return ae(w(t), i, !0), t;
}
var O = R;
R.extend = function (i) {
  for (var e = [], t = arguments.length - 1; t-- > 0; ) e[t] = arguments[t + 1];
  var o = Re(i);
  return R.bind.apply(R, [this, o].concat(e));
};
function Re(r) {
  return Pe[r] || (Pe[r] = Se(r));
}
function Oe(r) {
  for (var i = [], e = arguments.length - 1; e-- > 0; ) i[e] = arguments[e + 1];
  for (var t = w(r), o = Ve(r, i, t.firstChild); o; ) {
    var n = o.nextSibling;
    M(r, o), (o = n);
  }
}
function Ve(r, i, e) {
  for (var t = e, o = new Array(i.length), n = 0; n < i.length; n++)
    o[n] = i[n] && w(i[n]);
  for (var s = 0; s < i.length; s++) {
    var a = i[s];
    if (!!a) {
      var l = o[s];
      if (l === t) {
        t = t.nextSibling;
        continue;
      }
      if (X(l)) {
        var u = t && t.nextSibling,
          p = a.__redom_index != null,
          m = p && u === o[s + 1];
        T(r, a, t, m), m && (t = u);
        continue;
      }
      a.length != null && (t = Ve(r, a, t));
    }
  }
  return t;
}
var Ne = function (i, e, t) {
  (this.View = i),
    (this.initData = t),
    (this.oldLookup = {}),
    (this.lookup = {}),
    (this.oldViews = []),
    (this.views = []),
    e != null && (this.key = typeof e == "function" ? e : at(e));
};
Ne.prototype.update = function (i, e) {
  for (
    var t = this,
      o = t.View,
      n = t.key,
      s = t.initData,
      a = n != null,
      l = this.lookup,
      u = {},
      p = new Array(i.length),
      m = this.views,
      d = 0;
    d < i.length;
    d++
  ) {
    var f = i[d],
      v = void 0;
    if (a) {
      var g = n(f);
      (v = l[g] || new o(s, f, d, i)), (u[g] = v), (v.__redom_id = g);
    } else v = m[d] || new o(s, f, d, i);
    v.update && v.update(f, d, i, e);
    var S = w(v.el);
    (S.__redom_view = v), (p[d] = v);
  }
  (this.oldViews = m),
    (this.views = p),
    (this.oldLookup = l),
    (this.lookup = u);
};
function at(r) {
  return function (i) {
    return i[r];
  };
}
function le(r, i, e, t) {
  return new _(r, i, e, t);
}
var _ = function (i, e, t, o) {
  (this.View = e),
    (this.initData = o),
    (this.views = []),
    (this.pool = new Ne(e, t, o)),
    (this.el = De(i)),
    (this.keySet = t != null);
};
_.prototype.update = function (i, e) {
  i === void 0 && (i = []);
  var t = this,
    o = t.keySet,
    n = this.views;
  this.pool.update(i, e);
  var s = this.pool,
    a = s.views,
    l = s.lookup;
  if (o)
    for (var u = 0; u < n.length; u++) {
      var p = n[u],
        m = p.__redom_id;
      l[m] == null && ((p.__redom_index = null), M(this, p));
    }
  for (var d = 0; d < a.length; d++) {
    var f = a[d];
    f.__redom_index = d;
  }
  Oe(this, a), o && (this.lookup = l), (this.views = a);
};
_.extend = function (i, e, t, o) {
  return _.bind(_, i, e, t, o);
};
le.extend = _.extend;
var lt = function (i, e) {
  (this.el = We("")),
    (this.visible = !1),
    (this.view = null),
    (this._placeholder = this.el),
    i instanceof Node
      ? (this._el = i)
      : i.el instanceof Node
        ? ((this._el = i), (this.view = i))
        : (this._View = i),
    (this._initData = e);
};
lt.prototype.update = function (i, e) {
  var t = this._placeholder,
    o = this.el.parentNode;
  if (i) {
    if (!this.visible)
      if (this._el)
        T(o, this._el, t), M(o, t), (this.el = w(this._el)), (this.visible = i);
      else {
        var n = this._View,
          s = new n(this._initData);
        (this.el = w(s)), (this.view = s), T(o, s, t), M(o, t);
      }
    this.view && this.view.update && this.view.update(e);
  } else if (this.visible) {
    if (this._el) {
      T(o, t, this._el), M(o, this._el), (this.el = t), (this.visible = i);
      return;
    }
    T(o, t, this.view), M(o, this.view), (this.el = t), (this.view = null);
  }
  this.visible = i;
};
var ct = function (i, e, t) {
  (this.el = De(i)), (this.Views = e), (this.initData = t);
};
ct.prototype.update = function (i, e) {
  if (i !== this.route) {
    var t = this.Views,
      o = t[i];
    (this.route = i),
      o && (o instanceof Node || o.el instanceof Node)
        ? (this.view = o)
        : (this.view = o && new o(this.initData, e)),
      Oe(this.el, [this.view]);
  }
  this.view && this.view.update && this.view.update(e, i);
};
var Be = "http://www.w3.org/2000/svg",
  Le = {};
function se(r) {
  for (var i = [], e = arguments.length - 1; e-- > 0; ) i[e] = arguments[e + 1];
  var t,
    o = typeof r;
  if (o === "string") t = Ke(r).cloneNode(!1);
  else if (X(r)) t = r.cloneNode(!1);
  else if (o === "function") {
    var n = r;
    t = new (Function.prototype.bind.apply(n, [null].concat(i)))();
  } else throw new Error("At least one argument required");
  return ae(w(t), i, !0), t;
}
se.extend = function (i) {
  var e = Ke(i);
  return se.bind(this, e);
};
se.ns = Be;
function Ke(r) {
  return Le[r] || (Le[r] = Se(r, Be));
}
var ce = class extends c.MenuItem {
    setTitle(e) {
      return (
        (this.title = typeof e == "string" ? e : e.textContent),
        super.setTitle(e)
      );
    }
  },
  F = class extends c.Menu {
    constructor(e, t = e instanceof c.App ? e : e.app) {
      var n;
      super(t);
      this.parent = e;
      this.app = t;
      this.match = "";
      this.resetSearchOnTimeout = (0, c.debounce)(
        () => {
          this.match = "";
        },
        1500,
        !0,
      );
      this.visible = !1;
      (n = this.setUseNativeMenu) == null || n.call(this, !1),
        e instanceof F && e.setChildMenu(this),
        (this.scope = new c.Scope()),
        this.scope.register([], "ArrowUp", this.onArrowUp.bind(this)),
        this.scope.register([], "ArrowDown", this.onArrowDown.bind(this)),
        this.scope.register([], "Enter", this.onEnter.bind(this)),
        this.scope.register([], "Escape", this.onEscape.bind(this)),
        this.scope.register([], "ArrowLeft", this.onArrowLeft.bind(this)),
        this.scope.register([], "Home", this.onHome.bind(this)),
        this.scope.register([], "End", this.onEnd.bind(this)),
        this.scope.register([], "ArrowRight", this.onArrowRight.bind(this));
      let o = this;
      E(this.dom, {
        contains(s) {
          return function (a) {
            var u;
            return (
              s.call(this, a) ||
              ((u = o.child) == null ? void 0 : u.dom.contains(a))
            );
          };
        },
      }),
        this.dom.addClass("qe-popup-menu"),
        this.onMouseOver &&
          this.dom.removeEventListener("mouseover", this.onMouseOver);
    }
    onEscape() {
      return this.hide(), !1;
    }
    onload() {
      this.scope.register(null, null, this.onKeyDown.bind(this)),
        super.onload(),
        (this.visible = !0),
        this.showSelected();
      let e, t;
      this.register(
        pt(this.dom, "mouseover", ".menu-item", (o, n) => {
          (e !== o.clientX || t !== o.clientY) &&
            !n.hasClass("is-disabled") &&
            !this.child &&
            this.onItemHover(
              this.items.find((s) => s.dom === n),
              o,
              n,
            ),
            (e = o.clientX),
            (t = o.clientY);
        }),
      );
    }
    onItemHover(e, t, o) {
      this.select(this.items.indexOf(e), !1);
    }
    onunload() {
      (this.visible = !1), super.onunload();
    }
    addItem(e) {
      let t = new ce(this);
      return (
        this.items.push(t), e(t), this._loaded && this.sort && this.sort(), this
      );
    }
    onKeyDown(e) {
      let t = c.Keymap.getModifiers(e);
      if (e.key.length === 1 && !e.isComposing && (!t || t === "Shift")) {
        let o = this.match + e.key;
        for (; o && !this.searchFor(o); ) o = o.slice(1);
        (this.match = o), this.resetSearchOnTimeout();
      }
      return !1;
    }
    searchFor(e) {
      let t = e.split("").map(ut);
      return (
        this.find(new RegExp("^" + t.join(""), "ui")) ||
        this.find(new RegExp("^" + t.join(".*"), "ui")) ||
        this.find(new RegExp(t.join(".*"), "ui"))
      );
    }
    find(e) {
      var o, n, s;
      let t = Math.min(0, this.selected);
      for (let a = this.items.length; a; ++t, a--)
        if (
          !((o = this.items[t]) != null && o.disabled) &&
          (s = (n = this.items[t]) == null ? void 0 : n.title) != null &&
          s.match(e)
        )
          return this.select(t), !0;
      return !1;
    }
    onEnter(e) {
      let t = this.items[this.selected];
      return t && (t.handleEvent(e), this.child || this.hide()), !1;
    }
    select(e, t = !0) {
      (this.match = ""), super.select(e), t && this.showSelected();
    }
    showSelected() {
      var t;
      let e = (t = this.items[this.selected]) == null ? void 0 : t.dom;
      if (e) {
        let o = this.dom.getBoundingClientRect(),
          n = e.getBoundingClientRect();
        (n.top < o.top || n.bottom > o.bottom) && e.scrollIntoView();
      }
    }
    unselect() {
      var e;
      (e = this.items[this.selected]) == null || e.dom.removeClass("selected");
    }
    onEnd(e) {
      return (
        this.unselect(),
        (this.selected = this.items.length),
        this.onArrowUp(e),
        this.selected === this.items.length && (this.selected = -1),
        !1
      );
    }
    onHome(e) {
      return this.unselect(), (this.selected = -1), this.onArrowDown(e), !1;
    }
    onArrowLeft() {
      return this.rootMenu() !== this && this.hide(), !1;
    }
    onArrowRight() {
      return !1;
    }
    hide() {
      return this.setChildMenu(), super.hide();
    }
    setChildMenu(e) {
      var t;
      (t = this.child) == null || t.hide(), (this.child = e);
    }
    rootMenu() {
      return this.parent instanceof c.App ? this : this.parent.rootMenu();
    }
    cascade(e, t, o, n = 15, s = 5) {
      var we, ge;
      let { left: a, top: l, bottom: u, width: p } = e.getBoundingClientRect(),
        m = a + (e.matchParent(".menu") ? Math.min(150, p / 3) : 0),
        d = (we = window.activeWindow) != null ? we : window,
        { innerHeight: f, innerWidth: v } = d,
        g = { x: t ? t.clientX - n : m, y: u - s };
      (ge = this.sort) == null || ge.call(this),
        d.document.body.appendChild(this.dom);
      let { offsetWidth: S, offsetHeight: b } = this.dom,
        ve = g.y + b < f,
        qe = l - s - b > 0,
        $e = g.x + S <= v;
      return (
        ve || (qe ? (g.y = l - s) : (g.y = u > f - (u - l) ? l + s : f)),
        $e || (g.x = b < u - s || ve ? v : m),
        this.showAtPosition(g),
        e.toggleClass("selected", !0),
        this.register(() => {
          this.parent instanceof c.App
            ? e.toggleClass("selected", !1)
            : this.parent instanceof F && this.parent.setChildMenu(),
            o && o();
        }),
        this
      );
    }
  };
function ut(r) {
  return r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function pt(r, i, e, t, o = !1) {
  return r.on(i, e, t, o), () => r.off(i, e, t, o);
}
function V(r) {
  return i18next.t(`plugins.file-explorer.menu-opt-${r}`);
}
var k = class extends F {
  constructor(i, e) {
    super(i);
    let { workspace: t } = this.app,
      o = this.app.internalPlugins.plugins["file-explorer"].enabled;
    e instanceof c.TFolder &&
      (this.addItem((n) =>
        n
          .setTitle(V("new-note"))
          .setIcon("create-new")
          .onClick(async (s) => {
            this.rootMenu().hide();
            let a = await this.app.fileManager.createNewMarkdownFile(e);
            a &&
              (await this.app.workspace
                .getLeaf(c.Keymap.isModEvent(s))
                .openFile(a, {
                  active: !0,
                  state: { mode: "source" },
                  eState: { rename: "all" },
                }));
          }),
      ),
      this.addItem((n) =>
        n
          .setTitle(V("new-folder"))
          .setIcon("folder")
          .setDisabled(!o)
          .onClick((s) => {
            var a;
            o
              ? (this.rootMenu().hide(),
                (a = this.withExplorer(e)) == null ||
                  a.createAbstractFile("folder", e))
              : (new c.Notice(
                  "The File Explorer core plugin must be enabled to create new folders",
                ),
                s.stopPropagation());
          }),
      ),
      this.addItem((n) =>
        n
          .setTitle(V("set-attachment-folder"))
          .setIcon("image-file")
          .onClick(() => {
            this.app.setAttachmentFolder(e);
          }),
      ),
      this.addSeparator()),
      this.addItem((n) => {
        n.setTitle(V("rename"))
          .setIcon("pencil")
          .onClick((s) => {
            this.app.fileManager.promptForFileRename(e);
          });
      }),
      this.addItem((n) =>
        n
          .setTitle(V("delete"))
          .setIcon("trash")
          .onClick(() => {
            e instanceof c.TFolder
              ? this.app.fileManager.promptForFolderDeletion(e)
              : e instanceof c.TFile &&
                this.app.fileManager.promptForFileDeletion(e);
          }),
      ),
      e instanceof c.TFolder &&
        o &&
        this.addItem((n) =>
          n
            .setIcon("folder")
            .setTitle(i18next.t("plugins.file-explorer.action-reveal-file"))
            .onClick(() => {
              this.rootMenu().hide(), this.withExplorer(e);
            }),
        ),
      t.trigger("file-menu", this, e, "quick-explorer");
  }
  onEnter(i) {
    return this.rootMenu().hide(), super.onEnter(i);
  }
  withExplorer(i) {
    let e = this.app.internalPlugins.plugins["file-explorer"];
    if (e.enabled)
      return (
        e.instance.revealInFolder(i),
        this.app.workspace.getLeavesOfType("file-explorer")[0].view
      );
  }
};
var pe = {
    markdown: "document",
    image: "image-file",
    audio: "audio-file",
    pdf: "pdf-file",
  },
  dt = { ...pe, excalidraw: "excalidraw-icon" };
function Y(r) {
  var i;
  if (r instanceof c.TFolder) return "folder";
  if (r instanceof c.TFile) {
    let e = app.viewRegistry.getTypeByExtension(r.extension);
    if (e) return (i = dt[e]) != null ? i : "document";
  }
}
function J(r) {
  return app.vault.getAbstractFileByPath(ht(r));
}
function ht(r) {
  return `${r.path}/${r.name}.md`;
}
var ue = new Intl.Collator(void 0, {
  usage: "sort",
  sensitivity: "base",
  numeric: !0,
}).compare;
function de(r, i = app.vault.getConfig("showUnsupportedFiles")) {
  let { children: e } = r,
    t = J(r),
    o = e.slice().sort((a, l) => ue(a.name, l.name)),
    n = o.filter((a) => a instanceof c.TFolder),
    s = o.filter((a) => a instanceof c.TFile && a !== t && (i || Y(a)));
  return (
    n.sort((a, l) => ue(a.name, l.name)),
    s.sort((a, l) => ue(a.basename, l.basename)),
    { folderNote: t, folders: n, files: s }
  );
}
function je(r, i) {
  let { folderNote: e, folders: t, files: o } = de(r, !1);
  return (e ? [e] : []).concat(t, o);
}
function Ue(r, i, e) {
  let t = new Set();
  for (; (r == null ? void 0 : r.parent) && !t.has(r); ) {
    t.add(r);
    let o = je(r.parent, !1),
      n = o.indexOf(r);
    if (n === -1) return;
    for (
      e ? (n += i) : (n = i < 0 ? 0 : o.length - 1), r = r.parent;
      n >= 0 && n < o.length;

    ) {
      if (((r = o[n]), r instanceof c.TFile)) return r;
      r instanceof c.TFolder
        ? ((o = je(r, !1)), (n = i > 0 ? 0 : o.length - 1))
        : (n += i);
    }
  }
}
var x = !0,
  P = class extends F {
    constructor(e, t, o, n) {
      super(e);
      this.parent = e;
      this.folder = t;
      this.selectedFile = o;
      this.crumb = n;
      this.parentFolder = this.parent instanceof P ? this.parent.folder : null;
      this.fileCount = (e) =>
        e instanceof c.TFolder
          ? e.children.map(this.fileCount).reduce((t, o) => t + o, 0)
          : Y(e)
            ? 1
            : 0;
      this.refreshFiles = (0, c.debounce)(
        () => this.loadFiles(this.folder, this.currentFile()),
        100,
        !0,
      );
      this.showPopover = (0, c.debounce)(
        () => {
          var e;
          this.hidePopover(),
            x &&
              this.maybeHover(
                (e = this.currentItem()) == null ? void 0 : e.dom,
                (t) =>
                  this.app.workspace.trigger(
                    "link-hover",
                    this,
                    re(this.dom).document.body,
                    t.path,
                    "",
                  ),
              );
        },
        50,
        !0,
      );
      this.onItemClick = (e, t) => {
        if (e.type === "auxclick" && !c.Keymap.isModEvent(e)) return;
        let o = this.fileForDom(t);
        if (!!o && !this.onClickFile(o, t, e))
          return e.stopPropagation(), e.preventDefault(), !1;
      };
      this.onItemMenu = (e, t) => {
        let o = this.fileForDom(t);
        if (o) {
          let n = this.itemForPath(o.path);
          n >= 0 && this.selected != n && this.select(n),
            new k(this, o).cascade(t, e),
            e.stopPropagation();
        }
      };
      this.loadFiles(t, o),
        this.scope.register([], "Tab", this.togglePreviewMode.bind(this)),
        this.scope.register(["Mod"], "Enter", this.onEnter.bind(this)),
        this.scope.register(
          ["Alt"],
          "Enter",
          this.onKeyboardContextMenu.bind(this),
        ),
        this.scope.register([], "\\", this.onKeyboardContextMenu.bind(this)),
        this.scope.register(
          [],
          "ContextMenu",
          this.onKeyboardContextMenu.bind(this),
        ),
        this.scope.register([], "F2", this.doRename.bind(this)),
        this.scope.register(["Shift"], "F2", this.doMove.bind(this)),
        this.scope.register([], "PageUp", this.doScroll.bind(this, -1, !1)),
        this.scope.register([], "PageDown", this.doScroll.bind(this, 1, !1)),
        this.scope.register(["Mod"], "Home", this.doScroll.bind(this, 0, !0)),
        this.scope.register(["Mod"], "End", this.doScroll.bind(this, 1, !0));
      let { dom: s } = this,
        a = ".menu-item[data-file-path]";
      s.on("click", a, this.onItemClick, !0),
        s.on("auxclick", a, this.onItemClick, !0),
        s.on("contextmenu", a, this.onItemMenu),
        s.on(
          "mousedown",
          a,
          (u) => {
            u.stopPropagation();
          },
          !0,
        ),
        s.on("dragstart", a, (u, p) => {
          he(this.app, p.dataset.filePath, u);
        }),
        this.register(() => {
          x && this.parent instanceof P && this.parent.showPopover();
        });
      let l = this;
      E(this.dom, {
        contains(u) {
          return function (p) {
            var d;
            return (
              u.call(this, p) ||
              ((d = l._popover) == null ? void 0 : d.hoverEl.contains(p))
            );
          };
        },
      });
    }
    onArrowLeft() {
      var e;
      return (
        super.onArrowLeft(),
        this.rootMenu() === this &&
          this.openBreadcrumb((e = this.crumb) == null ? void 0 : e.prev()),
        !1
      );
    }
    onKeyboardContextMenu(e) {
      var n;
      if (e.code === "ContextMenu") {
        let s = function (a) {
          if (a.code === "ContextMenu")
            return (
              a.preventDefault(),
              a.view.removeEventListener("keyup", s, { capture: !0 }),
              !1
            );
        };
        e.view.addEventListener("keyup", s, { capture: !0 });
      }
      let t = (n = this.items[this.selected]) == null ? void 0 : n.dom,
        o = t && this.fileForDom(t);
      return o && new k(this, o).cascade(t), !1;
    }
    doScroll(e, t, o) {
      var a, l;
      let n = (a = this.hoverPopover) == null ? void 0 : a.hoverEl,
        s =
          n == null
            ? void 0
            : n.find(
                (l = this.hoverPopover) != null && l.rootSplit
                  ? '[data-mode="preview"] .markdown-preview-view, [data-mode="source"] .cm-scroller'
                  : ".markdown-preview-view",
              );
      if (s) {
        s.style.scrollBehavior = t ? "auto" : "smooth";
        let u = s.scrollTop,
          p = (t ? 0 : s.scrollTop) + e * (t ? s.scrollHeight : s.clientHeight);
        (s.scrollTop = p),
          t ||
            (p >= s.scrollHeight
              ? this.onArrowDown(o)
              : p < 0 && (u > 0 ? (s.scrollTop = 0) : this.onArrowUp(o)));
      } else
        x
          ? e > 0
            ? this.onArrowDown(o)
            : this.onArrowUp(o)
          : ((x = !0), this.showPopover());
      return !1;
    }
    doRename() {
      let e = this.currentFile();
      return (
        this.rootMenu().hide(),
        e && this.app.fileManager.promptForFileRename(e),
        !1
      );
    }
    doMove() {
      let e = this.app.internalPlugins.plugins["file-explorer"];
      if (!e.enabled)
        return (
          new c.Notice(
            "File explorer core plugin must be enabled to move files or folders",
          ),
          !1
        );
      this.rootMenu().hide();
      let t = e.instance.moveFileModal;
      return t.setCurrentFile(this.currentFile()), t.open(), !1;
    }
    currentItem() {
      return this.items[this.selected];
    }
    currentFile() {
      var e;
      return this.fileForDom((e = this.currentItem()) == null ? void 0 : e.dom);
    }
    fileForDom(e) {
      let { filePath: t } = e == null ? void 0 : e.dataset;
      if (t) return this.app.vault.getAbstractFileByPath(t);
    }
    itemForPath(e) {
      return this.items.findIndex((t) => t.dom.dataset.filePath === e);
    }
    openBreadcrumb(e) {
      if (e && this.rootMenu() === this) return this.hide(), e.open(), !1;
    }
    onArrowRight() {
      var t;
      let e = this.currentFile();
      if (e instanceof c.TFolder)
        e !== this.selectedFile
          ? this.onClickFile(e, this.currentItem().dom)
          : this.openBreadcrumb((t = this.crumb) == null ? void 0 : t.next());
      else if (e instanceof c.TFile) {
        let o = this.hoverPopover;
        o &&
          o.rootSplit &&
          this.app.workspace.iterateLeaves((n) => {
            var s;
            return (
              n.view instanceof c.FileView &&
                n.view.file === e &&
                (o.togglePin(!0),
                (this._popover = null),
                this.onEscape(),
                n.view instanceof c.MarkdownView
                  ? n
                      .setViewState({
                        type: n.view.getViewType(),
                        state: { file: e.path, mode: "source" },
                      })
                      .then(() => this.app.workspace.setActiveLeaf(n, !1, !0))
                  : ((s = this.dom.ownerDocument.activeElement) == null ||
                      s.blur(),
                    this.app.workspace.setActiveLeaf(n, !1, !0))),
              !0
            );
          }, o.rootSplit);
      }
      return !1;
    }
    loadFiles(e, t) {
      this.dom.empty(), (this.items = []);
      let { folderNote: o, folders: n, files: s } = de(e);
      o && this.addFile(o),
        n.length && (o && this.addSeparator(), n.map(this.addFile, this)),
        s.length &&
          ((n.length || o) && this.addSeparator(), s.map(this.addFile, this)),
        this.select(t ? this.itemForPath(t.path) : 0);
    }
    addFile(e) {
      let t = Y(e);
      this.addItem((o) => {
        if (
          (o.setTitle(e.name),
          (o.dom.dataset.filePath = e.path),
          o.dom.setAttr("draggable", "true"),
          o.dom.addClass(
            e instanceof c.TFolder ? "is-qe-folder" : "is-qe-file",
          ),
          t && o.setIcon(t),
          e instanceof c.TFile)
        )
          o.setTitle(e.basename),
            e.extension !== "md" &&
              o.dom.createDiv({
                text: e.extension,
                cls: ["nav-file-tag", "qe-extension"],
              });
        else if (e !== this.folder.parent) {
          let n = this.fileCount(e);
          n &&
            o.dom.createDiv({
              text: "" + n,
              cls: "nav-file-tag qe-file-count",
            });
        }
        o.onClick((n) => this.onClickFile(e, o.dom, n));
      });
    }
    togglePreviewMode() {
      return (x = !x) ? this.showPopover() : this.hidePopover(), !1;
    }
    onload() {
      super.onload(),
        this.register(
          W(
            this.dom.ownerDocument.body,
            "pointerdown",
            ".hover-popover",
            (e, t) => {
              var o, n, s;
              ((o = this.hoverPopover) == null ? void 0 : o.hoverEl) === t &&
                ((s = (n = this.hoverPopover).togglePin) == null ||
                  s.call(n, !0),
                (this._popover = null));
            },
            { capture: !0 },
          ),
        ),
        this.registerEvent(
          this.app.vault.on("create", (e) => {
            this.folder === e.parent && this.refreshFiles();
          }),
        ),
        this.registerEvent(
          this.app.vault.on("rename", (e, t) => {
            if (this.folder === e.parent) {
              let o = this.itemForPath(t) >= 0 ? e : this.currentFile();
              this.loadFiles(this.folder, o);
            } else this.removeItemForPath(t);
          }),
        ),
        this.registerEvent(
          this.app.vault.on("delete", (e) => this.removeItemForPath(e.path)),
        ),
        x && this.selected != -1 && this.showPopover();
    }
    removeItemForPath(e) {
      let t = this.itemForPath(e);
      if (t < 0) return;
      let o = this.items[t];
      this.selected > t && (this.selected -= 1),
        o.dom.detach(),
        this.items.remove(o);
    }
    onEscape() {
      return (
        super.onEscape(), this.parent instanceof F && this.parent.onEscape(), !1
      );
    }
    hide() {
      return this.hidePopover(), super.hide();
    }
    setChildMenu(e) {
      super.setChildMenu(e), x && this.canShowPopover() && this.showPopover();
    }
    select(e, t = !0) {
      let o = this.selected;
      super.select(e, t),
        o !== this.selected && (x ? this.showPopover() : this.hidePopover());
    }
    hidePopover() {
      this.hoverPopover = null;
    }
    canShowPopover() {
      return !this.child && this.visible;
    }
    onItemHover(e, t, o) {
      super.onItemHover(e, t, o),
        o.matches(".menu-item[data-file-path]") &&
          (x ||
            this.maybeHover(o, (n) =>
              this.app.workspace.trigger("hover-link", {
                event: t,
                source: N,
                hoverParent: this,
                targetEl: o,
                linktext: n.path,
              }),
            ));
    }
    maybeHover(e, t) {
      if (!this.canShowPopover()) return;
      let o = this.fileForDom(e);
      o instanceof c.TFolder && (o = J(o)),
        o instanceof c.TFile &&
          pe[this.app.viewRegistry.getTypeByExtension(o.extension)] &&
          t(o);
    }
    get hoverPopover() {
      return this._popover;
    }
    set hoverPopover(e) {
      var n;
      let t = this._popover;
      if (e === t) return;
      t &&
        e !== t &&
        ((this._popover = null),
        (t.onHover = t.onTarget = !1),
        (!t.isPinned || x) && t.hide()),
        e && !this.canShowPopover() && ((e.onHover = !1), e.hide(), (e = null)),
        (this._popover = e);
      let o = e == null ? void 0 : e.targetEl;
      if (
        (o &&
          o === o.ownerDocument.body &&
          (o.removeEventListener("mouseover", e.onMouseIn),
          o.removeEventListener("mouseout", e.onMouseOut)),
        x && e && this.currentItem())
      ) {
        (n = e.togglePin) == null || n.call(e, !1),
          Promise.resolve().then(() => {
            var a, l;
            return (l = (a = e.abortController) == null ? void 0 : a.unload) ==
              null
              ? void 0
              : l.call(a);
          });
        let s = () => {
          var v;
          let a = e.hoverEl;
          if (!a.parentElement) return;
          let l = this.dom.getBoundingClientRect(),
            u = this.currentItem().dom.getBoundingClientRect(),
            p = a.offsetParent || this.dom.ownerDocument.documentElement,
            m = a.offsetHeight,
            d = Math.min(l.right + 2, p.clientWidth - a.offsetWidth),
            f = Math.min(Math.max(0, u.top - m / 8), p.clientHeight - m);
          d < l.left + l.width / 3 &&
            l.left > a.offsetWidth &&
            (d = l.left - a.offsetWidth),
            e.position({ x: d, y: f }),
            (a.style.top = f + "px"),
            (a.style.left = d + "px"),
            (v = e.togglePin) == null || v.call(e, !0);
        };
        "onShowCallback" in e
          ? E(e, {
              onShowCallback(a) {
                return () => (
                  e.hoverEl.win.requestAnimationFrame(s),
                  a == null ? void 0 : a.call(e)
                );
              },
            })
          : this.dom.win.requestAnimationFrame(s);
      }
    }
    onClickFile(e, t, o) {
      var s;
      this.hidePopover();
      let n = this.itemForPath(e.path);
      if (
        (n >= 0 && this.selected != n && this.select(n), e instanceof c.TFile)
      ) {
        if (this.app.viewRegistry.isExtensionRegistered(e.extension))
          return (
            this.app.workspace.openLinkText(
              e.path,
              "",
              o && c.Keymap.isModEvent(o),
            ),
            this.rootMenu().hide(),
            o == null || o.stopPropagation(),
            !0
          );
        new c.Notice(
          `.${e.extension} files cannot be opened in Obsidian; Use "Open in Default App" to open them externally`,
        );
      } else
        e === this.selectedFile
          ? this.openBreadcrumb((s = this.crumb) == null ? void 0 : s.next())
          : new P(this, e, J(e)).cascade(
              t,
              o instanceof MouseEvent ? o : void 0,
            );
    }
  };
var N = "quick-explorer:folder-menu";
function he(r, i, e) {
  if (!i || i === "/") return;
  let t = r.vault.getAbstractFileByPath(i);
  if (!t) return;
  let { dragManager: o } = r,
    n = t instanceof c.TFile ? o.dragFile(e, t) : o.dragFolder(e, t);
  o.onDragStart(e, n);
}
var me = class {
    constructor() {
      this.nameEl = O("span", { class: "explorable-name" });
      this.sepEl = O("span", { class: "explorable-separator" });
      this.el = O(
        "span",
        { draggable: !0, class: "explorable titlebar-button" },
        this.nameEl,
        this.sepEl,
      );
    }
    update(i, e, t) {
      var a, l;
      let { file: o, path: n } = i,
        s = o.name || n;
      this.sepEl.toggle(e < t.length - 1),
        (this.nameEl.textContent = s),
        (this.el.dataset.parentPath =
          (l = (a = o.parent) == null ? void 0 : a.path) != null ? l : "/"),
        (this.el.dataset.filePath = n);
    }
  },
  I = class extends q {
    constructor() {
      super(...arguments);
      this.lastFile = null;
      this.lastPath = null;
      this.el = O("div", { id: "quick-explorer" });
      this.list = le(this.el, me);
      this.isOpen = 0;
      this.app = app;
    }
    onload() {
      var t, o;
      if (
        (this.register(() => {
          var n;
          return (n = this.lastMenu) == null ? void 0 : n.hide();
        }),
        (0, c.requireApiVersion)("0.15.6"))
      ) {
        let n = this.win.document.body.find(
            ".titlebar .titlebar-inner .titlebar-text",
          ),
          s = n == null ? void 0 : n.cloneNode(!0);
        s &&
          (s.addClass("qe-replacement"),
          (s.textContent =
            (o = (t = app.getAppTitle) == null ? void 0 : t.call(app)) != null
              ? o
              : this.win.document.title),
          n.replaceWith(s),
          this.register(() => s.replaceWith(n)));
      }
      if (
        ((0, c.requireApiVersion)("0.16.0") &&
          this.win.document.body.addClass("obsidian-themepocalypse"),
        (0, c.requireApiVersion)("0.16.3"))
      ) {
        let n =
          ".view-header .view-header-breadcrumb, .view-header .view-header-title-parent";
        this.register(
          W(
            this.win.document.body,
            "click",
            n,
            (s, a) => {
              var l;
              if (
                !s.target.matches(
                  ".view-header-breadcrumb-separator, .is-exploring",
                )
              )
                return (
                  (l = fe(a)) == null || l.open(s), s.stopPropagation(), !1
                );
            },
            { capture: !0 },
          ),
        ),
          this.register(
            W(
              this.win.document.body,
              "contextmenu",
              ".view-header .view-header-breadcrumb",
              (s, a) => {
                var u, p;
                if (s.target.matches(".view-header-breadcrumb-separator"))
                  return;
                let l =
                  (p = (u = fe(a)) == null ? void 0 : u.file) == null
                    ? void 0
                    : p.parent;
                if (l)
                  return (
                    new k(this.app, l).cascade(a, s),
                    s.stopImmediatePropagation(),
                    !1
                  );
              },
              { capture: !0 },
            ),
          );
      }
      let e =
        this.win.document.body.find(
          "body:not(.is-hidden-frameless) .titlebar .titlebar-button-container.mod-left",
        ) || Ee(this, this.win, "left-region");
      if ((this.register(() => M(e, this)), T(e, this), this.isCurrent()))
        this.update(this.app.workspace.getActiveFile());
      else {
        let n = app.workspace.getMostRecentLeaf(this.container),
          s =
            (n == null ? void 0 : n.view) instanceof c.FileView && n.view.file;
        s && this.update(s);
      }
      this.registerEvent(this.app.vault.on("rename", this.onFileChange, this)),
        this.registerEvent(
          this.app.vault.on("delete", this.onFileDelete, this),
        ),
        this.el.on("contextmenu", ".explorable", (n, s) => {
          let { filePath: a } = s.dataset,
            l = this.app.vault.getAbstractFileByPath(a);
          new k(this.app, l).cascade(s, n);
        }),
        this.el.on("click", ".explorable", (n, s) => {
          this.folderMenu(s, n.isTrusted && n);
        }),
        this.el.on("dragstart", ".explorable", (n, s) => {
          he(this.app, s.dataset.filePath, n);
        });
    }
    onFileChange(e) {
      e === this.lastFile && this.update(e);
    }
    onFileDelete(e) {
      e === this.lastFile && this.update();
    }
    visibleCrumb(e) {
      let t = ft(this, e);
      if (!e.isShown()) {
        let o = app.workspace
          .getActiveViewOfType(c.View)
          .containerEl.find(".view-header .view-header-title-parent");
        if (o != null && o.isShown()) {
          let { file: n } = t;
          (t = fe(o)), (t = t.peers.find((s) => s.file === n) || t);
        }
      }
      return t;
    }
    folderMenu(e = this.el.firstElementChild, t) {
      var o;
      return (this.lastMenu =
        (o = this.visibleCrumb(e)) == null ? void 0 : o.open(t));
    }
    browseVault() {
      return this.folderMenu();
    }
    browseCurrent() {
      return this.folderMenu(this.el.lastElementChild);
    }
    browseFile(e) {
      if (e === this.lastFile) return this.browseCurrent();
      let t,
        o = this.el.firstElementChild,
        n = [],
        s = e.path.split("/").filter((a) => a);
      for (; o && s.length; ) {
        if ((n.push(s[0]), o.dataset.filePath !== n.join("/"))) {
          (t = this.folderMenu(o)), n.pop();
          break;
        }
        s.shift(), (o = o.nextElementSibling);
      }
      for (; t && s.length; ) {
        n.push(s.shift());
        let a = t.itemForPath(n.join("/"));
        if (a == -1) break;
        t.select(a),
          (s.length || e instanceof c.TFolder) &&
            (t.onArrowRight(), (t = t.child));
      }
      return t;
    }
    isCurrent() {
      return this === this.use(I).forLeaf(app.workspace.activeLeaf);
    }
    update(e) {
      if (
        this.isOpen ||
        (e != null || (e = this.app.vault.getAbstractFileByPath("/")),
        e == this.lastFile && e.path == this.lastPath)
      )
        return;
      (this.lastFile = e), (this.lastPath = e.path);
      let t = ze(e);
      this.list.update(t);
    }
  },
  B = class {
    constructor(i, e, t, o, n) {
      this.peers = i;
      this.el = e;
      this.file = t;
      this.onOpen = o;
      this.onClose = n;
      i.push(this);
    }
    next() {
      let i = this.peers.indexOf(this);
      if (i > -1) return this.peers[i + 1];
    }
    prev() {
      let i = this.peers.indexOf(this);
      if (i > 0) return this.peers[i - 1];
    }
    open(i) {
      var t;
      let e = this.file;
      if (e) {
        (t = this.onOpen) == null || t.call(this, this);
        let o = this.file.parent || e;
        return new P(app, o, e, this).cascade(
          this.el,
          i && i.isTrusted && i,
          () => this.onClose(this),
        );
      }
    }
  };
function fe(r) {
  var m, d, f, v, g, S;
  let i = [],
    e = r.matchParent(".workspace-leaf"),
    t,
    o;
  app.workspace.iterateAllLeaves((b) => b.containerEl === e && (t = b) && !0);
  let n = app.vault.getAbstractFileByPath("/"),
    s =
      (d = (m = t == null ? void 0 : t.view) == null ? void 0 : m.file) != null
        ? d
        : n,
    a = ze(s),
    l = r.matchParent(".view-header-title-parent");
  o = new B(
    i,
    l,
    (v = (f = a.shift()) == null ? void 0 : f.file) != null ? v : n,
    u,
    p,
  );
  for (let b of l.findAll(".view-header-breadcrumb"))
    new B(
      i,
      b,
      (S = (g = a.shift()) == null ? void 0 : g.file) != null ? S : n,
      u,
      p,
    ),
      b === r && (o = i[i.length - 1]);
  return o;
  function u(b) {
    b.el.toggleClass("is-exploring", !0);
  }
  function p(b) {
    b.el.toggleClass("is-exploring", !1);
  }
}
function ft(r, i) {
  let e = [],
    t = i.matchParent("#quick-explorer"),
    o;
  for (let a of t.findAll(".explorable"))
    new B(e, a, app.vault.getAbstractFileByPath(a.dataset.filePath), n, s),
      a === i && (o = e[e.length - 1]);
  return o;
  function n() {
    r.isOpen++;
  }
  function s() {
    r.isOpen--,
      (r.lastMenu = null),
      !r.isOpen && r.isCurrent() && r.update(app.workspace.getActiveFile());
  }
}
function ze(r) {
  let i = [];
  for (; r; ) i.unshift({ file: r, path: r.path }), (r = r.parent);
  return i.length > 1 && i.shift(), i;
}
var Q = class extends c.Plugin {
  constructor() {
    super(...arguments);
    this.use = y.plugin(this);
    this.explorers = this.use(I).watch();
    this.ss = this.use($);
  }
  updateCurrent(
    e = this.app.workspace.activeLeaf,
    t = this.app.workspace.getActiveFile(),
  ) {
    z(e) && this.explorers.forLeaf(e).update(t);
  }
  onload() {
    this.app.workspace.registerHoverLinkSource(N, {
      display: "Quick Explorer",
      defaultMod: !0,
    }),
      this.registerEvent(
        this.app.workspace.on("file-open", () => this.updateCurrent()),
      ),
      this.registerEvent(
        this.explorers.onLeafChange((e) => this.updateCurrent(e)),
      ),
      this.addCommand({
        id: "browse-vault",
        name: "Browse vault",
        callback: () => {
          var e;
          (e = this.explorers.forWindow()) == null || e.browseVault();
        },
      }),
      this.addCommand({
        id: "browse-current",
        name: "Browse current folder",
        callback: () => {
          var e;
          (e = this.explorers.forWindow()) == null || e.browseCurrent();
        },
      }),
      Ce(this),
      this.registerEvent(
        this.app.workspace.on("file-menu", (e, t, o) => {
          let n;
          if (
            (o !== "quick-explorer" &&
              e.addItem((s) => {
                var a;
                s
                  .setIcon("folder")
                  .setTitle("Show in Quick Explorer")
                  .onClick((l) => {
                    var u;
                    (u = this.explorers.forDom(n.dom)) == null ||
                      u.browseFile(t);
                  }),
                  (n = s),
                  (a = n.setSection) == null || a.call(n, "view");
              }),
            n)
          ) {
            let s = i18next.t("plugins.file-explorer.action-reveal-file"),
              a = e.items.findIndex((l) => {
                var u;
                return ((u = l.titleEl) == null ? void 0 : u.textContent) === s;
              });
            a > -1 &&
              (e.sections || e.dom.insertBefore(n.dom, e.items[a].dom),
              e.items.remove(n),
              e.items.splice(a, 0, n));
          }
        }),
      ),
      Object.defineProperty(c.TFolder.prototype, "basename", {
        get() {
          return this.name;
        },
        configurable: !0,
      });
  }
  [D("go-next", "Go to next file in folder")]() {
    return this.goFile(1, !0);
  }
  [D("go-prev", "Go to previous file in folder")]() {
    return this.goFile(-1, !0);
  }
  [D("go-first", "Go to first file in folder")]() {
    return this.goFile(-1, !1);
  }
  [D("go-last", "Go to last file in folder")]() {
    return this.goFile(1, !1);
  }
  goFile(e, t) {
    return () => {
      let o = app.workspace.getActiveFile(),
        n = o && Ue(o, e, t);
      n && n !== o && app.workspace.activeLeaf.openFile(n);
    };
  }
  onunload() {
    this.app.workspace.unregisterHoverLinkSource(N);
  }
};
