!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
      return e[t];
    }.bind(null, r));
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  "use strict";

  n.r(t), t.default = function () {
    var e, t;
    e = function (e) {
      1 == e ? document.querySelector("body").classList.add("webp") : document.querySelector("body").classList.add("no-webp");
    }, (t = new Image()).onload = t.onerror = function () {
      e(2 == t.height);
    }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  };
}, function (e, t, n) {
  n(2), e.exports = n(0);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var o = n(0);
  Object(o.default)(), document.addEventListener("DOMContentLoaded", function () {
    const e = document.getElementById("header"),
          t = document.getElementById("html");
    const n = document.getElementById("searchOpen"),
          o = document.getElementById("searchClose");
    n.addEventListener("click", function () {
      e.classList.add("search");
    }), o.addEventListener("click", function () {
      e.classList.remove("search");
    });
    const r = document.getElementById("searchForm");
    r.addEventListener("submit", function (e) {
      e.preventDefault();
      const t = r.querySelector("input").value;
      console.log(t), window.location.href = "/search?search=" + t;
    });
    const c = document.getElementById("burgerOpen"),
          u = document.getElementById("burgerClose");
    c.addEventListener("click", function () {
      e.classList.add("menu"), t.style.overflowX = "hidden", t.style.overflowY = "hidden";
    }), u.addEventListener("click", function () {
      e.classList.remove("menu"), t.style.overflowX = "hidden", t.style.overflowY = "scroll";
    });
  });
}]);