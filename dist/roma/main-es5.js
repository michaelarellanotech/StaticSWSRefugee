function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.footer.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.footer.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"p-grid\">\n        <div class=\"p-col-12 p-md-6 \">\n            <a href=\"#\" class=\"\">\n                <img src=\"assets/images/rflogo.png\" class=\"footer-logo1\">\n            </a>\n            <a href=\"https://www.swslhd.health.nsw.gov.au/tye.html\" class=\"\" title=\"Transforming Your Experience\">\n                <img src=\"assets/images/tye_patient_logo.png\" class=\"footer-logo2\">\n            </a>            \n            <!-- <a href=\"#\" class=\"layout-topbar-logo\">\n                <svg width=\"46\" height=\"49\" viewBox=\"0 0 46 49\" xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"global-header__nsw-gov-logo\">\n                    <title>NSW Government</title>\n                    <path fill=\"#002664\"\n                        d=\"M41.6 29.3l-2 8.6-2.2-8.6h-2.8l-2.2 8.5-1.9-8.5h-3.2l3.5 13.5h3.1l2.1-8.5 2.1 8.5h3v-.1l3.6-13.4zM12.5 37.9l-7.3-8.6H2.1v13.5h3v-8.6l7.3 8.6h3.2V29.3h-3.1zM1.8 46.9c0-1.2.9-2.2 2.2-2.2.7 0 1.2.2 1.6.6l-.5.6c-.3-.3-.6-.4-1.2-.4-.8 0-1.4.7-1.4 1.5 0 .9.6 1.5 1.4 1.5.4 0 .7-.1 1-.3v-.8h-1v-.6h1.8v1.8c-.5.2-1.1.4-1.7.4-1.3 0-2.2-.9-2.2-2.1M8.3 44.7c-1.3 0-2.2 1-2.2 2.2 0 1.2.9 2.1 2.2 2.1 1.3 0 2.2-1 2.2-2.2 0-1.1-.9-2.1-2.2-2.1zm1.4 2.2c0 .8-.6 1.5-1.4 1.5-.8 0-1.4-.7-1.4-1.5s.6-1.5 1.4-1.5c.8 0 1.4.7 1.4 1.5zM10.4 44.8h.8l1.3 3.2 1.3-3.2h.7L12.8 49h-.6zM15 44.8h3.1v.7h-2.3v1h2.1v.7h-2.1v1.1h2.4v.7H15zM21.3 47.4c.6-.2 1-.6 1-1.3 0-.4-.1-.7-.3-.9-.3-.3-.7-.4-1.2-.4h-1.9V49h.7v-1.5h.9l1 1.4h.9l-1.1-1.5zm-1.7-.5v-1.4h1.1c.5 0 .9.2.9.7 0 .4-.3.7-.9.7h-1.1zM22.9 44.8h.7l2.2 2.9v-2.9h.7V49h-.6l-2.3-3v3h-.7zM27.3 44.8h.8l1.2 2 1.3-2h.8V49h-.8v-3l-1.3 1.9L28 46v3h-.7zM32.1 44.8h3.1v.7h-2.4v1h2.1v.7h-2.1v1.1h2.4v.7h-3.1zM35.9 44.8h.7l2.2 2.9v-2.9h.7V49h-.6l-2.3-3v3h-.7zM41.4 45.5h-1.3v-.7h3.4v.7h-1.3V49h-.8zM16.4 40.9l1.8-2.1c1.2 1 2.5 1.7 4.1 1.7 1.2 0 2-.5 2-1.3s-.5-1.2-2.8-1.7c-2.8-.7-4.5-1.5-4.5-4.2 0-2.5 2-4.1 4.8-4.1 2 0 3.7.6 5.1 1.7L25.2 33c-1.2-.8-2.4-1.3-3.5-1.3-1.2 0-1.8.5-1.8 1.2 0 .9.6 1.2 2.9 1.8 2.8.7 4.3 1.7 4.3 4.1 0 2.7-2.1 4.2-5 4.2-2 .1-4.1-.6-5.7-2.1\" />\n                    <g fill=\"#d7153a\">\n                        <path\n                            d=\"M9.3 3.8c-.3 0-.4.1-.5.5 0 0-.1.5-.1 1.3-.1 1.1-.2 2.3-.2 3.4 0 3.2.4 7.8 2.4 11.4 1.5 2.7 3.7 4.2 6.2 4.3-1.3-1-2.2-2.3-2.7-3.8-.6-1.8-.9-3.9-.9-6.3 0-3.3.6-6.1.7-6.9.1-.5.4-.8.7-1-2.5-1.6-4.6-2.5-5-2.7-.2-.1-.3-.2-.3-.2h-.3M30.5 7.6c-.1 0-.1 0-.2.1l-.2.2c-.1.1-.3.3-.6.5-.4.3-1.1 1-2 2-1.4 1.6-3.3 4-4.1 6.9-.5 1.7-.8 3.1-.7 4.3 0 .9.1 1.6.4 2.2.3.6.7 1 1.3 1.3.2.1.6.2.9.2 1.7 0 4.5-1.4 5.5-4.6.5-1.7.8-3.7.8-6 0-2.8-.4-5.2-.6-6.2l-.1-.5c-.1-.2-.2-.4-.4-.4\" />\n                        <path\n                            d=\"M15.5 7.6c-.1 0-.2.2-.3.4l-.1.5c0 .2-.1.7-.2 1.4-.2 1.1-.3 2.8-.3 4.7 0 2.3.3 4.3.8 6 1 3.2 3.9 4.6 5.7 4.6.4 0 .7-.1 1-.2.1-.1.3-.1.4-.2l-.3-.6c-.3-.7-.5-1.6-.5-2.6 0-1.3.3-2.8.8-4.6 0-.2.1-.3.2-.5 0-.1 0-.1.1-.2-1.9-4.6-6.1-8.1-6.6-8.5l-.2-.2c-.3 0-.4-.1-.5 0M23 0c-.1 0-.2.1-.3.2 0 0-.1.1-.2.4-.3.4-.5.7-.7 1.1-.5.8-1.2 2.1-1.9 3.8-.5 1.1-.9 2.3-1.3 3.5 1.4 1.4 3.2 3.5 4.5 6.1 1-2 2.4-4.1 4.3-6.1-1.3-3.9-3.1-7.2-3.9-8.4l-.2-.4c-.1-.2-.2-.2-.3-.2M36.7 3.8c-.1 0-.1 0-.3.1 0 0-.1 0-.4.2-.2.1-.6.2-.9.4H35c-1.2.6-2.4 1.3-3.6 2-.1.1-.3.2-.4.2.4.2.6.5.7 1 .2.8.7 3.6.7 6.9 0 2.4-.3 4.5-.8 6.3-.5 1.5-1.4 2.8-2.6 3.8 2.4-.1 4.6-1.6 6.1-4.3 2-3.5 2.4-8.1 2.4-11.4 0-1.1 0-2.3-.2-3.4 0-.4-.1-.9-.1-1.3-.1-.4-.2-.5-.5-.5M30 1s-.1 0 0 0h-.1c-.1 0-.2 0-.2.1 0 0-.5.3-1.4.9-.5.3-1.2.9-2.1 1.6.6 1.3 1.2 2.7 1.7 4 1-.8 2.2-1.6 3.5-2.4-.4-1.9-.8-3.3-1-3.8 0-.2-.2-.4-.4-.4M16 1c-.2 0-.4.1-.5.4-.2.5-.6 1.9-1 3.8C15.8 6 17 6.8 18 7.6c.5-1.3 1-2.7 1.7-4-.7-.6-1.4-1.1-2-1.6-.8-.6-1.3-.9-1.4-.9-.1 0-.1-.1-.3-.1M4.2 9.8H3.1c-.3 0-.5.2-.7.4-.1.2-.1.3-.1.5 0 .5.4 2.2 2.5 4.9 1.1-.5 2.1-1 3.2-1.4-.2-1.3-.3-2.8-.4-4.3-1-.1-2-.1-2.9-.2l-.5.1M41.8 9.8h-.4c-.6 0-1.6 0-2.9.2 0 1.5-.2 2.9-.4 4.3 1 .4 2.1.9 3.2 1.4 2.1-2.7 2.4-4.4 2.5-4.9 0-.2-.1-.4-.1-.5-.2-.2-.4-.4-.7-.4-.1-.1-.5-.1-1.2-.1\" />\n                        <path\n                            d=\"M37.9 15.2c-.4 2.2-1.1 4.1-2 5.6-.9 1.6-2.1 2.9-3.5 3.7 10-.5 12.8-3.8 13.1-4.1.1-.1.2-.3.2-.5 0-.3-.1-.6-.4-.7L45 19c-.2-.1-.4-.3-.7-.5l-.2-.2c-1.1-.7-2.2-1.3-3.3-1.9-.9-.4-1.9-.8-2.9-1.2M8.1 15.2C4.7 16.5 2 18.3 1 19c-.2.1-.3.2-.3.2-.2.2-.3.4-.3.7 0 .2 0 .3.1.5l.1.1c.1.1.2.2.5.4.4.4 1.2.9 2.4 1.5 2.5 1.1 6 1.9 10.1 2.1-1.4-.8-2.6-2.1-3.5-3.7-.9-1.5-1.6-3.4-2-5.6M36.6 25.3c-.5 0-1.3.1-2.4.3-.2 0-.3 0-.5.1-.5.1-1.1.1-1.9.1h-3.3c-1.2 0-2.8 0-4.2.4-.1 0-.1.1-.1.1s.1.1.2.1h.1c.6 0 1.1-.1 1.6-.1 1.8 0 3.1.3 4.3.6 1.1.3 2.2.6 3.7.6 1.6 0 2.8-.3 3.4-.9.2-.2.3-.4.2-.6-.2-.5-.3-.7-1.1-.7M9.4 25.3c-.7 0-.8.2-.9.6 0 .2.1.4.2.6.5.6 1.8.9 3.4.9 1.5 0 2.6-.3 3.7-.6 1.2-.3 2.5-.6 4.3-.6.5 0 1 0 1.6.1h.1c.1 0 .2 0 .2-.1 0 0 0-.1-.1-.1-1.4-.4-3-.4-4.2-.4h-3.3c-.8 0-1.4 0-1.9-.1-.2 0-.4 0-.5-.1-1.3-.1-2.1-.2-2.6-.2\" />\n                    </g>\n                </svg>\n            </a>\n            <p>NSW Refugee Health Service</p> -->\n        </div>\n        <div class=\"p-col-12 p-md-6 footer-icons\">\n            <a href=\"http://www.youtube.com/user/SWSHealth?feature=mhee\" target=\"_blank\" title=\"YouTube\">\n                <img src=\"assets/images/youtube_footer.jpg\" class=\"footer-social-icons\">\n            </a>\n            <a href=\"http://facebook.com/SWSLHD\" target=\"_blank\" title=\"Facebook\">\n                <img src=\"assets/images/facebook_footer.jpg\" class=\"footer-social-icons\">\n            </a>\n            <a href=\"https://twitter.com/SWSLHD\" target=\"_blank\" title=\"Twitter\">\n                <img src=\"assets/images/twitter_bird.jpg\" class=\"footer-social-icons\">\n            </a>\n        </div>\n    </div>\n    <div class=\"p-grid\">\n        <div class=\"p-col-12\" style=\"text-align: center;padding-top: 20px;\">\n            <a href=\"#\" download=\"privacypolicy.pdf\">\n                Disclaimer\n            </a>|\n            <a href=\"#\" download=\"privacypolicy.pdf\">\n                Privacy Statement\n            </a>|\n            <a href=\"#\" download=\"privacypolicy.pdf\">\n                Accessibility\n            </a>|\n            <a href=\"#\" download=\"privacypolicy.pdf\">\n                Sitemap\n            </a>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.main.component.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.main.component.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"layout-wrapper\" [ngClass]=\"{'layout-horizontal': menuMode === 'horizontal',\n    'layout-overlay': menuMode === 'overlay',\n    'layout-static': menuMode === 'static',\n    'layout-slim': menuMode === 'slim',\n    'layout-menu-light': lightMenu === true,\n    'layout-menu-dark': lightMenu === false,\n    'layout-overlay-active': overlayMenuActive,\n    'layout-mobile-active': staticMenuMobileActive,\n    'layout-static-inactive': staticMenuDesktopInactive,\n    'layout-rtl': isRTL}\" [class]=\"topbarColor\" (click)=\"onLayoutClick()\">\n    <app-topbar></app-topbar>\n\n    <app-menu></app-menu>\n    <!-- <app-right-menu></app-right-menu> -->\n\n    <div class=\"layout-main\">\n        <div class=\"layout-content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <!-- <app-config></app-config> -->\n    <div class=\"layout-footer\">\n        <app-footer></app-footer>\n    </div>\n    <div class=\"layout-content-mask\" style=\"top: 70px;\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"layout-menu-container\" (click)=\"onMenuClick($event)\" style=\"top: 70px;\">\n    <div class=\"menu-scroll-content\">\n        <!-- <div class=\"layout-profile\" *ngIf=\"app.inlineUser && !app.isHorizontal()\">\n                <a class=\"layout-profile-button\" (click)=\"app.onProfileClick($event)\">\n                    <img src=\"assets/layout/images/avatar.png\" alt=\"roma-layout\">\n                    <div class=\"layout-profile-userinfo\">\n                        <span class=\"layout-profile-name\">Arlene Welch</span>\n                        <span class=\"layout-profile-role\">Design Ops</span>\n                    </div>\n                </a>\n                <ul [@inline]=\"!app.isSlim() ? app.inlineUserMenuActive ? 'visibleAnimated' : 'hiddenAnimated' : app.inlineUserMenuActive ? 'visible' : 'hidden'\" class=\"layout-profile-menu\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-user\"></i><span>Profile</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-cog\"></i><span>Settings</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-envelope\"></i><span>Messages</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-bell\"></i><span>Notifications</span>\n                        </a>\n                    </li>\n                </ul>\n        </div> -->\n        <ul class=\"layout-menu\">\n            <li app-menuitem *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\"></li>\n        </ul>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.right-menu.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.right-menu.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppRightMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"layout-right-panel\" [ngClass]=\"{'layout-right-panel-active': app.rightPanelMenuActive}\" (click)=\"app.rightMenuClick = true\">\n    <p-tabView>\n        <p-tabPanel header=\"Status\">\n            <div class=\"status-title\">\n                <span>Datacenter Status</span>\n                <i class=\"pi pi-download\"></i>\n            </div>\n            <div class=\"ui-progressbar ui-widget ui-widget-content ui-corner-all ui-progressbar-determinate\">\n                <p-progressBar [value]=\"88\" [showValue]=\"false\"></p-progressBar>\n                <div class=\"ui-progressbar-label\"></div>\n            </div>\n            <div class=\"status-content\">\n                <span class=\"percentage-1\">65</span><span class=\"percentage-2\">/88</span> Servers Online\n            </div>\n\n            <div class=\"status-title\">\n                <span>Performance Status</span>\n                <i class=\"pi pi-clock\"></i>\n            </div>\n            <div class=\"ui-progressbar ui-widget ui-widget-content ui-corner-all ui-progressbar-determinate\">\n                <p-progressBar [value]=\"65\" [showValue]=\"false\"></p-progressBar>\n                <div class=\"ui-progressbar-label\"></div>\n            </div>\n            <div class=\"status-content\">\n                <span class=\"percentage-1\">4</span>\n                <span class=\"percentage-2\">/5</span> \n                Active Pipeline\n            </div>\n\n            <div class=\"status-title\">\n                <span>Drivers on Way</span>\n                <i class=\"pi pi-cloud\"></i>\n            </div>\n            <div class=\"ui-progressbar ui-widget ui-widget-content ui-corner-all ui-progressbar-determinate\">\n                <p-progressBar [value]=\"35\" [showValue]=\"false\"></p-progressBar>\n                <div class=\"ui-progressbar-label\"></div>\n            </div>\n            <div class=\"status-content\">\n                <span class=\"percentage-1\">12</span>\n                <span class=\"percentage-2\">/40</span> \n                Drivers\n            </div>\n\n            <div class=\"status-title\">\n                <span>Datacenter Status</span>\n                <i class=\"pi pi-map-marker\"></i>\n            </div>\n            <div class=\"ui-progressbar ui-widget ui-widget-content ui-corner-all ui-progressbar-determinate\">\n                <p-progressBar [value]=\"85\" [showValue]=\"false\"></p-progressBar>\n                <div class=\"ui-progressbar-label\"></div>\n            </div>\n            <div class=\"status-content\">\n                <span class=\"percentage-1\">65</span><span class=\"percentage-2\">/88</span> \n                Servers Online\n            </div>\n        </p-tabPanel>\n        <p-tabPanel header=\"Messages\">\n            <div class=\"messages-title\">\n                <span>November 13, 2018</span>\n            </div>\n            <div class=\"messages-content ui-g\">\n                <div class=\"time ui-g-4\">00:00 GMT+03:00</div>\n                <div class=\"message-1 ui-g-8\">All systems reporting at 100%</div>\n            </div>\n\n            <div class=\"messages-title\">\n                <span>November 12, 2018</span>\n            </div>\n            <div class=\"messages-content ui-g\">\n                <span class=\"time ui-g-4\">00:00 GMT+03:00</span>\n                <span class=\"message-1 ui-g-8\">All systems reporting at 100%</span>\n            </div>\n\n            <div class=\"messages-title\">\n                <span>November 7, 2018</span>\n            </div>\n            <div class=\"messages-content ui-g\">\n                <span class=\"time ui-g-4\">09:23 GMT+03:00</span>\n                <span class=\"message-1 ui-g-8\">Everything operating normally.</span>\n\n                <span class=\"time ui-g-4\">08:58 GMT+03:00</span>\n                <span class=\"message-2 ui-g-8\">We're investigating delays inupdates to PrimeFaces.org.</span>\n\n                <span class=\"time ui-g-4\">08:50 GMT+03:00</span>\n                <span class=\"message-2 ui-g-8\">We are investigating reports of elevated error rates.</span>\n            </div>\n        </p-tabPanel>\n    </p-tabView>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.topbar.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.topbar.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppTopbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"layout-topbar\">\n\n    <!-- <a class=\"layout-right-panel-button layout-topbar-icon\" (click)=\"app.onRightMenuClick($event)\" href=\"#\">\n            <i class=\"pi pi-ellipsis-v\"></i>\n    </a> -->\n\n    <a href=\"#\" class=\"layout-menu-button layout-topbar-icon\" (click)=\"app.onMenuButtonClick($event)\">\n        <i class=\"pi pi-bars\"></i>\n    </a>\n<!-- \n    <a href=\"#\">\n        <svg width=\"46\" height=\"49\" viewBox=\"0 0 46 49\" xmlns=\"http://www.w3.org/2000/svg\"\n            class=\"global-header__nsw-gov-logo\">\n            <title>NSW Government</title>\n            <path fill=\"#002664\"\n                d=\"M41.6 29.3l-2 8.6-2.2-8.6h-2.8l-2.2 8.5-1.9-8.5h-3.2l3.5 13.5h3.1l2.1-8.5 2.1 8.5h3v-.1l3.6-13.4zM12.5 37.9l-7.3-8.6H2.1v13.5h3v-8.6l7.3 8.6h3.2V29.3h-3.1zM1.8 46.9c0-1.2.9-2.2 2.2-2.2.7 0 1.2.2 1.6.6l-.5.6c-.3-.3-.6-.4-1.2-.4-.8 0-1.4.7-1.4 1.5 0 .9.6 1.5 1.4 1.5.4 0 .7-.1 1-.3v-.8h-1v-.6h1.8v1.8c-.5.2-1.1.4-1.7.4-1.3 0-2.2-.9-2.2-2.1M8.3 44.7c-1.3 0-2.2 1-2.2 2.2 0 1.2.9 2.1 2.2 2.1 1.3 0 2.2-1 2.2-2.2 0-1.1-.9-2.1-2.2-2.1zm1.4 2.2c0 .8-.6 1.5-1.4 1.5-.8 0-1.4-.7-1.4-1.5s.6-1.5 1.4-1.5c.8 0 1.4.7 1.4 1.5zM10.4 44.8h.8l1.3 3.2 1.3-3.2h.7L12.8 49h-.6zM15 44.8h3.1v.7h-2.3v1h2.1v.7h-2.1v1.1h2.4v.7H15zM21.3 47.4c.6-.2 1-.6 1-1.3 0-.4-.1-.7-.3-.9-.3-.3-.7-.4-1.2-.4h-1.9V49h.7v-1.5h.9l1 1.4h.9l-1.1-1.5zm-1.7-.5v-1.4h1.1c.5 0 .9.2.9.7 0 .4-.3.7-.9.7h-1.1zM22.9 44.8h.7l2.2 2.9v-2.9h.7V49h-.6l-2.3-3v3h-.7zM27.3 44.8h.8l1.2 2 1.3-2h.8V49h-.8v-3l-1.3 1.9L28 46v3h-.7zM32.1 44.8h3.1v.7h-2.4v1h2.1v.7h-2.1v1.1h2.4v.7h-3.1zM35.9 44.8h.7l2.2 2.9v-2.9h.7V49h-.6l-2.3-3v3h-.7zM41.4 45.5h-1.3v-.7h3.4v.7h-1.3V49h-.8zM16.4 40.9l1.8-2.1c1.2 1 2.5 1.7 4.1 1.7 1.2 0 2-.5 2-1.3s-.5-1.2-2.8-1.7c-2.8-.7-4.5-1.5-4.5-4.2 0-2.5 2-4.1 4.8-4.1 2 0 3.7.6 5.1 1.7L25.2 33c-1.2-.8-2.4-1.3-3.5-1.3-1.2 0-1.8.5-1.8 1.2 0 .9.6 1.2 2.9 1.8 2.8.7 4.3 1.7 4.3 4.1 0 2.7-2.1 4.2-5 4.2-2 .1-4.1-.6-5.7-2.1\" />\n            <g fill=\"#d7153a\">\n                <path\n                    d=\"M9.3 3.8c-.3 0-.4.1-.5.5 0 0-.1.5-.1 1.3-.1 1.1-.2 2.3-.2 3.4 0 3.2.4 7.8 2.4 11.4 1.5 2.7 3.7 4.2 6.2 4.3-1.3-1-2.2-2.3-2.7-3.8-.6-1.8-.9-3.9-.9-6.3 0-3.3.6-6.1.7-6.9.1-.5.4-.8.7-1-2.5-1.6-4.6-2.5-5-2.7-.2-.1-.3-.2-.3-.2h-.3M30.5 7.6c-.1 0-.1 0-.2.1l-.2.2c-.1.1-.3.3-.6.5-.4.3-1.1 1-2 2-1.4 1.6-3.3 4-4.1 6.9-.5 1.7-.8 3.1-.7 4.3 0 .9.1 1.6.4 2.2.3.6.7 1 1.3 1.3.2.1.6.2.9.2 1.7 0 4.5-1.4 5.5-4.6.5-1.7.8-3.7.8-6 0-2.8-.4-5.2-.6-6.2l-.1-.5c-.1-.2-.2-.4-.4-.4\" />\n                <path\n                    d=\"M15.5 7.6c-.1 0-.2.2-.3.4l-.1.5c0 .2-.1.7-.2 1.4-.2 1.1-.3 2.8-.3 4.7 0 2.3.3 4.3.8 6 1 3.2 3.9 4.6 5.7 4.6.4 0 .7-.1 1-.2.1-.1.3-.1.4-.2l-.3-.6c-.3-.7-.5-1.6-.5-2.6 0-1.3.3-2.8.8-4.6 0-.2.1-.3.2-.5 0-.1 0-.1.1-.2-1.9-4.6-6.1-8.1-6.6-8.5l-.2-.2c-.3 0-.4-.1-.5 0M23 0c-.1 0-.2.1-.3.2 0 0-.1.1-.2.4-.3.4-.5.7-.7 1.1-.5.8-1.2 2.1-1.9 3.8-.5 1.1-.9 2.3-1.3 3.5 1.4 1.4 3.2 3.5 4.5 6.1 1-2 2.4-4.1 4.3-6.1-1.3-3.9-3.1-7.2-3.9-8.4l-.2-.4c-.1-.2-.2-.2-.3-.2M36.7 3.8c-.1 0-.1 0-.3.1 0 0-.1 0-.4.2-.2.1-.6.2-.9.4H35c-1.2.6-2.4 1.3-3.6 2-.1.1-.3.2-.4.2.4.2.6.5.7 1 .2.8.7 3.6.7 6.9 0 2.4-.3 4.5-.8 6.3-.5 1.5-1.4 2.8-2.6 3.8 2.4-.1 4.6-1.6 6.1-4.3 2-3.5 2.4-8.1 2.4-11.4 0-1.1 0-2.3-.2-3.4 0-.4-.1-.9-.1-1.3-.1-.4-.2-.5-.5-.5M30 1s-.1 0 0 0h-.1c-.1 0-.2 0-.2.1 0 0-.5.3-1.4.9-.5.3-1.2.9-2.1 1.6.6 1.3 1.2 2.7 1.7 4 1-.8 2.2-1.6 3.5-2.4-.4-1.9-.8-3.3-1-3.8 0-.2-.2-.4-.4-.4M16 1c-.2 0-.4.1-.5.4-.2.5-.6 1.9-1 3.8C15.8 6 17 6.8 18 7.6c.5-1.3 1-2.7 1.7-4-.7-.6-1.4-1.1-2-1.6-.8-.6-1.3-.9-1.4-.9-.1 0-.1-.1-.3-.1M4.2 9.8H3.1c-.3 0-.5.2-.7.4-.1.2-.1.3-.1.5 0 .5.4 2.2 2.5 4.9 1.1-.5 2.1-1 3.2-1.4-.2-1.3-.3-2.8-.4-4.3-1-.1-2-.1-2.9-.2l-.5.1M41.8 9.8h-.4c-.6 0-1.6 0-2.9.2 0 1.5-.2 2.9-.4 4.3 1 .4 2.1.9 3.2 1.4 2.1-2.7 2.4-4.4 2.5-4.9 0-.2-.1-.4-.1-.5-.2-.2-.4-.4-.7-.4-.1-.1-.5-.1-1.2-.1\" />\n                <path\n                    d=\"M37.9 15.2c-.4 2.2-1.1 4.1-2 5.6-.9 1.6-2.1 2.9-3.5 3.7 10-.5 12.8-3.8 13.1-4.1.1-.1.2-.3.2-.5 0-.3-.1-.6-.4-.7L45 19c-.2-.1-.4-.3-.7-.5l-.2-.2c-1.1-.7-2.2-1.3-3.3-1.9-.9-.4-1.9-.8-2.9-1.2M8.1 15.2C4.7 16.5 2 18.3 1 19c-.2.1-.3.2-.3.2-.2.2-.3.4-.3.7 0 .2 0 .3.1.5l.1.1c.1.1.2.2.5.4.4.4 1.2.9 2.4 1.5 2.5 1.1 6 1.9 10.1 2.1-1.4-.8-2.6-2.1-3.5-3.7-.9-1.5-1.6-3.4-2-5.6M36.6 25.3c-.5 0-1.3.1-2.4.3-.2 0-.3 0-.5.1-.5.1-1.1.1-1.9.1h-3.3c-1.2 0-2.8 0-4.2.4-.1 0-.1.1-.1.1s.1.1.2.1h.1c.6 0 1.1-.1 1.6-.1 1.8 0 3.1.3 4.3.6 1.1.3 2.2.6 3.7.6 1.6 0 2.8-.3 3.4-.9.2-.2.3-.4.2-.6-.2-.5-.3-.7-1.1-.7M9.4 25.3c-.7 0-.8.2-.9.6 0 .2.1.4.2.6.5.6 1.8.9 3.4.9 1.5 0 2.6-.3 3.7-.6 1.2-.3 2.5-.6 4.3-.6.5 0 1 0 1.6.1h.1c.1 0 .2 0 .2-.1 0 0 0-.1-.1-.1-1.4-.4-3-.4-4.2-.4h-3.3c-.8 0-1.4 0-1.9-.1-.2 0-.4 0-.5-.1-1.3-.1-2.1-.2-2.6-.2\" />\n            </g>\n        </svg>\n    </a> -->\n\n    <a href=\"#\" class=\"layout-topbar-logo\">\n        <img src=\"assets/images/swslhd.png\">\n    </a>\n\n    <div class=\"header-title desktop\">NSW Refugee Health Service</div>\n    <div class=\"header-title mobile\">\n        NSW Refugee Health Service\n    </div>\n\n    <!-- <span class=\"layout-topbar-search\">\n        <i class=\"pi pi-search\"></i>\n        <input type=\"text\" placeholder=\"Enter your search term\">\n    </span> -->\n\n    <!-- <ul  class=\"topbar-menu\" >\n        <li class=\"user-profile\" [ngClass]=\"{'active-topmenuitem fadeInDown': app.topbarUserMenuActive}\">\n            <a href=\"#\" (click)=\"app.onTopbarUserMenuButtonClick($event)\" *ngIf=\"!app.inlineUser\">\n                <img src=\"assets/layout/images/avatar.png\" alt=\"roma-layout\" />\n                <div class=\"layout-profile-userinfo\">\n                    <span class=\"layout-profile-name\">Arlene Welch</span>\n                    <span class=\"layout-profile-role\">Design Ops</span>\n                </div>\n            </a>\n            <ul class=\"fadeInDown\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-user\"></i>\n                            <span>Profile</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-cog\"></i>\n                            <span>Settings</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-envelope\"></i>\n                            <span>Messages</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pi pi-fw pi-bell\"></i>\n                            <span>Notifications</span>\n                        </a>\n                    </li>\n            </ul>\n        </li>\n        <li [ngClass]=\"{'active-topmenuitem fadeInDown': app.topbarNotificationMenuActive}\">\n                <a href=\"#\" class=\"layout-topbar-icon\" (click)=\"app.onTopbarNotificationMenuButtonClick($event)\">\n                    <i class=\"topbar-icon pi pi-fw pi-bell\"></i>\n                </a>\n                <ul class=\"fadeInDown\">\n                    <li role=\"menuitem\">\n                        <a href=\"#\"><img src=\"assets/layout/images/avatar-1.png\" alt=\"\">\n                            <div class=\"topbar-menu-info\">\n                                <span class=\"topbar-menu-name\">Bithika Abhedananda</span>\n                                <span class=\"topbar-menu-role\">User interface review is done.</span>\n                            </div>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\"><img src=\"assets/layout/images/avatar-2.png\" alt=\"\">\n                            <div class=\"topbar-menu-info\">\n                                <span class=\"topbar-menu-name\">Dai Jiang</span>\n                                <span class=\"topbar-menu-role\">Uh, we have sort of a problem here.</span>\n                            </div>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\"><img src=\"assets/layout/images/avatar-3.png\" alt=\"\">\n                            <div class=\"topbar-menu-info\">\n                                <span class=\"topbar-menu-name\">Karlien Nijhuis</span>\n                                <span class=\"topbar-menu-role\">You apparently didn’t put the thing</span>\n                            </div>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\"><img src=\"assets/layout/images/avatar-4.png\" alt=\"\">\n                            <div class=\"topbar-menu-info\">\n                                <span class=\"topbar-menu-name\">Tom Chun</span>\n                                <span class=\"topbar-menu-role\">Please check the files</span>\n                            </div>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\"><img src=\"assets/layout/images/avatar-5.png\" alt=\"\">\n                            <div class=\"topbar-menu-info\">\n                                <span class=\"topbar-menu-name\">Maria Trofimova</span>\n                                <span class=\"topbar-menu-role\">Meeting reports attached.</span>\n                            </div>\n                        </a>\n                    </li>\n                </ul>\n        </li>\n    </ul> -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/chartsdemo.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/chartsdemo.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewChartsdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid ui-fluid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h1 class=\"centerText\">Linear Chart</h1>\n            <p-chart type=\"line\" [data]=\"lineData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h1 class=\"centerText\">Pie Chart</h1>\n            <p-chart type=\"pie\" [data]=\"pieData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h1 class=\"centerText\">Polar Area Chart</h1>\n            <p-chart type=\"polarArea\" [data]=\"polarData\"></p-chart>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h1 class=\"centerText\">Bar Chart</h1>\n            <p-chart type=\"bar\" [data]=\"barData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h1 class=\"centerText\">Doughnut Chart</h1>\n            <p-chart type=\"doughnut\" [data]=\"pieData\"></p-chart>\n        </div>\n\n        <div class=\"card\">\n            <h1 class=\"centerText\">Radar Chart</h1>\n            <p-chart type=\"radar\" [data]=\"radarData\"></p-chart>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid layout-dashboard\">\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"overview-box card\">\n            <div class=\"overview-box-title\">TASKS</div>\n            <div class=\"overview-box-value\">90</div>\n            <img src=\"assets/layout/images/dashboard/graph-tasks.svg\" alt=\"\">\n            <div class=\"overview-box-status\">\n                +8.9% <i class=\"pi pi-arrow-circle-up\"></i>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"overview-box card\">\n            <div class=\"overview-box-title\">PURCHASES</div>\n            <div class=\"overview-box-value\">1259</div>\n            <img src=\"assets/layout/images/dashboard/graph-purchases.svg\" alt=\"\">\n            <div class=\"overview-box-status\">\n                +67.2% <i class=\"pi pi-arrow-circle-up\"></i>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"overview-box card\">\n            <div class=\"overview-box-title\">ISSUES</div>\n            <div class=\"overview-box-value\">21</div>\n            <img src=\"assets/layout/images/dashboard/graph-issues.svg\" alt=\"\">\n            <div class=\"overview-box-status\">\n                +3.0% <i class=\"pi pi-arrow-circle-up\"></i>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-6 p-lg-3\">\n        <div class=\"overview-box card\">\n            <div class=\"overview-box-title\">MESSAGES</div>\n            <div class=\"overview-box-value\">42</div>\n            <img src=\"assets/layout/images/dashboard/graph-messages.svg\" alt=\"\">\n            <div class=\"overview-box-status\">\n                +12.5% <i class=\"pi pi-arrow-circle-up\"></i>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-8 p-lg-8\">\n        <div class=\"card card-w-title\">\n            <h3>Statistics</h3>\n            <p-chart type=\"line\" [data]=\"chartData\" [options]=\"chartOptions\"></p-chart>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-md-4 p-lg-4\">\n        <div class=\"timeline card card-w-title\">\n            <h3>Timeline</h3>\n            <ul>\n                <li>\n                    <i class=\"pi pi-image\"></i>\n                    <span class=\"timeline-event-title\">Uploaded Images</span>\n                    <span class=\"timeline-event-time\">15m</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-6\">\n                            <img src=\"assets/layout/images/dashboard/image-1.jpg\" alt=\"\">\n                        </div>\n                        <div class=\"p-col-6\">\n                            <img src=\"assets/layout/images/dashboard/image-2.jpg\" alt=\"\">\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <i class=\"pi pi-star\"></i>\n                    <span class=\"timeline-event-title\">Favorites</span>\n                    <span class=\"timeline-event-time\">1h</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>\n                </li>\n                <li>\n                    <i class=\"pi pi-users\"></i>\n                    <span class=\"timeline-event-title\">Meeting</span>\n                    <span class=\"timeline-event-time\">2h</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>\n                </li>\n                <li>\n                    <i class=\"pi pi-money-bill\"></i>\n                    <span class=\"timeline-event-title\">Payment Received</span>\n                    <span class=\"timeline-event-time\">3h</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-6\">\n        <div class=\"expenses card card-w-title\">\n            <h3>Expenses</h3>\n            <div class=\"chart\">\n                $5500\n            </div>\n            <div class=\"p-grid expenses-legend\">\n                <div class=\"p-col-12 p-lg-4\">\n                    <i class=\"pi pi-circle-on\"></i>\n                    <span class=\"expenses-title\">Printer: Color Cartridge</span>\n                    <div class=\"expenses-price\">$420</div>\n                    <span class=\"legend-status\">23+ more than last month</span>\n                </div>\n                <div class=\"p-col-12 p-lg-4\">\n                    <i class=\"pi pi-circle-on\"></i>\n                    <span class=\"expenses-title\">Printer: B&amp;W Cartridge</span>\n                    <div class=\"expenses-price\">$680</div>\n                    <span class=\"legend-status\">60+ more than last month</span>\n                </div>\n                <div class=\"p-col-12 p-lg-4\">\n                    <i class=\"pi pi-circle-on\"></i>\n                    <span class=\"expenses-title\">Coffee Capsules</span>\n                    <div class=\"expenses-price\">$150</div>\n                    <span class=\"legend-status\">8% less than last month</span>\n                </div>\n            </div>\n\n            <div class=\"expenses-footer\">\n                <a href=\"#\">View more details >></a>\n            </div>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-xl-6\">\n        <div class=\"card card-w-title\">\n            <h3>Schedule</h3>\n            <p-fullCalendar [events]=\"events\" [options]=\"fullCalendarOptions\"></p-fullCalendar>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6 p-xl-4\">\n            <div class=\"card card-w-title tasks\">\n                <h3>Tasks</h3>\n                <p>You have <span class=\"task-highlight\">completed</span> 3 tasks out of 6.</p>\n                <p-progressBar [value]=\"50\"></p-progressBar>\n\n                <ul>\n                    <li>\n                        <p-checkbox></p-checkbox>\n                        <span>Sales Reports</span>\n                        <span class=\"task-badge-open\">Open</span>\n                    </li>\n                    <li>\n                        <p-checkbox></p-checkbox>\n                        <span>Pay Invoices</span>\n                        <span class=\"task-badge-open\">Open</span>\n                    </li>\n                    <li>\n                        <p-checkbox></p-checkbox>\n                        <span>Birthday Party</span>\n                        <span class=\"task-badge-open\">Open</span>\n                    </li>\n                    <li>\n                        <p-checkbox></p-checkbox>\n                        <span>Client Meeting</span>\n                        <span class=\"task-badge-closed\">Closed</span>\n                    </li>\n                    <li>\n                        <p-checkbox></p-checkbox>\n                        <span>New Themes</span>\n                        <span class=\"task-badge-closed\">Closed</span>\n                    </li>\n                    <li>\n                        <p-checkbox></p-checkbox>\n                        <span>Flight Ticket</span>\n                        <span class=\"task-badge-closed\">Closed</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-lg-6 p-xl-4\">\n            <div class=\"card card-w-title resolution-center ui-fluid\">\n                <h3>Resolution Center</h3>\n\n                <input id=\"username\" type=\"text\" pInputText placeholder=\"Username\">\n\n                <input id=\"email\" type=\"text\" pInputText placeholder=\"Email\">\n\n                <textarea rows=\"5\" pInputTextarea placeholder=\"Message\"></textarea>\n\n                <div class=\"resolution-button-bar\">\n                    <button pButton type=\"button\" label=\"Send\" icon=\"pi pi-envelope\" ></button>\n                    <button pButton type=\"button\" label=\"Save\" icon=\"pi pi-plus\" class=\"ui-button-secondary\"></button>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-xl-4\">\n            <div class=\"card card-w-title team\">\n                <h3>Team</h3>\n                <ul>\n                    <li>\n                        <img src=\"assets/layout/images/avatar-1.png\" library=\"roma-layout\" />\n                        <div class=\"team-box\">\n                            <span class=\"team-member\">John Swisher Welch</span>\n                            <span class=\"team-member-account\">@jswisher</span>\n                        </div>\n                        <a href=\"#\">\n                            <i class=\"pi pi-paperclip\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-comment\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-share-alt\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <img src=\"assets/layout/images/avatar-2.png\" library=\"roma-layout\" />\n                        <div class=\"team-box\">\n                            <span class=\"team-member\">Bernd Pfefferberg</span>\n                            <span class=\"team-member-account\">@pfefferberg</span>\n                        </div>\n                        <a href=\"#\">\n                            <i class=\"pi pi-paperclip\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-comment\"></i>\n                        </a><a href=\"#\">\n                            <i class=\"pi pi-share-alt\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <img src=\"assets/layout/images/avatar-3.png\" library=\"roma-layout\" />\n                        <div class=\"team-box\">\n                            <span class=\"team-member\">Chinaza Akachi</span>\n                            <span class=\"team-member-account\">@chinazzza_</span>\n                        </div>\n                        <a href=\"#\">\n                            <i class=\"pi pi-paperclip\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-comment\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-share-alt\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <img src=\"assets/layout/images/avatar-4.png\" library=\"roma-layout\" />\n                        <div class=\"team-box\">\n                            <span class=\"team-member\">Luka Miller</span>\n                            <span class=\"team-member-account\">@luk4mr</span>\n                        </div>\n                        <a href=\"#\">\n                            <i class=\"pi pi-paperclip\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-comment\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-share-alt\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <img src=\"assets/layout/images/avatar-5.png\" library=\"roma-layout\" />\n                        <div class=\"team-box\">\n                            <span class=\"team-member\">Arlene Welch</span>\n                            <span class=\"team-member-account\">@arlene</span>\n                        </div>\n                        <a href=\"#\">\n                            <i class=\"pi pi-paperclip\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-comment\"></i>\n                        </a>\n                        <a href=\"#\">\n                            <i class=\"pi pi-share-alt\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-xl-8\">\n            <div class=\"card card-w-title live-support\">\n                <h3>Live Support</h3>\n                <ul>\n                    <li class=\"message-from\">\n                        <div class=\"p-grid\">\n                            <div class=\"p-col-fixed\">\n                                <img src=\"assets/layout/images/avatar-1.png\" library=\"roma-layout\" />\n                            </div>\n                            <div class=\"p-col\">\n                                <div class=\"chat-message\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                                        Nam ac euismod justo, eget blandit purus.</div>\n                            </div>\n                        </div>\n                    </li>\n                    <li class=\"message-to\">\n                        <div class=\"p-grid\">\n                            <div class=\"p-col\">\n                                <div class=\"chat-message\">Mauris malesuada quis risus ut consequat.\n                                    Maecenas ornare nunc risus, pulvinar euismod mi pellentesque eget.</div>\n                            </div>\n                            <div class=\"p-col-fixed\">\n                                <img src=\"assets/layout/images/avatar-1.png\" library=\"roma-layout\" />\n                            </div>\n                        </div>\n                    </li>\n                    <li class=\"message-from\">\n                        <div class=\"p-grid\">\n                            <div class=\"p-col-fixed\">\n                                <img src=\"assets/layout/images/avatar-2.png\" library=\"roma-layout\" />\n                            </div>\n                            <div class=\"p-col\">\n                                <div class=\"chat-message\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                                    Nam ac euismod justo, eget blandit purus.</div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n\n                <div class=\"new-message\">\n                    <div class=\"p-grid p-nogutter\">\n                        <div class=\"p-col\">\n                            <input id=\"input\" type=\"text\" pInputText placeholder=\"Write a message..\">\n                        </div>\n                        <div class=\"p-col-fixed\">\n                            <button pButton type=\"button\" label=\"Send\"></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-xl-4\">\n            <div class=\"card user-card\">\n                <div class=\"user-card-header\">\n                    <img src=\"assets/layout/images/dashboard/bg-header.png\" library=\"roma-layout\"/>\n                </div>\n                <div class=\"user-card-content\">\n                    <img src=\"assets/layout/images/avatar.png\" library=\"roma-layout\"/>\n                    <button pButton type=\"button\" (click)=\"menu.toggle($event)\" icon=\"pi pi-cog\" ></button>\n\n                    <p-menu #menu [popup]=\"true\" [model]=\"items\"></p-menu>\n\n                    <div class=\"user-card-name\">\n                        <span>Maria Llescas</span>\n                    </div>\n\n                    <div class=\"user-detail\">\n                        <div class=\"p-grid\">\n                            <div class=\"p-col-4\">\n                                <div class=\"user-detail-box\">\n                                    <div class=\"user-detail-box-name\">Tasks</div>\n                                    <div class=\"user-detail-box-detail\">3 open</div>\n                                    <i class=\"pi pi-list\"></i>\n                                    <p-progressBar [value]=\"60\"></p-progressBar>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"user-detail-box\">\n                                    <div class=\"user-detail-box-name\">Revenue</div>\n                                    <div class=\"user-detail-box-detail\">+20%</div>\n                                    <i class=\"pi pi-dollar\"></i>\n                                    <p-progressBar [value]=\"80\"></p-progressBar>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"user-detail-box\">\n                                    <div class=\"user-detail-box-name\">Payments</div>\n                                    <div class=\"user-detail-box-detail\">24 New</div>\n                                    <i class=\"pi pi-money-bill\"></i>\n                                    <p-progressBar [value]=\"60\"></p-progressBar>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"user-detail-box\">\n                                    <div class=\"user-detail-box-name\">Clients</div>\n                                    <div class=\"user-detail-box-detail\">+80%</div>\n                                    <i class=\"pi pi-users\"></i>\n                                    <p-progressBar [value]=\"50\"></p-progressBar>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"user-detail-box\">\n                                    <div class=\"user-detail-box-name\">Sales</div>\n                                    <div class=\"user-detail-box-detail\">3 open</div>\n                                    <i class=\"pi pi-money-bill\"></i>\n                                    <p-progressBar [value]=\"60\"></p-progressBar>\n                                </div>\n                            </div>\n                            <div class=\"p-col-4\">\n                                <div class=\"user-detail-box\">\n                                    <div class=\"user-detail-box-name\">Tasks</div>\n                                    <div class=\"user-detail-box-detail\">3 open</div>\n                                    <i class=\"pi pi-chart-bar\"></i>\n                                    <p-progressBar [value]=\"60\"></p-progressBar>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-xl-8\">\n            <div class=\"card card-w-title global-sales ui-fluid\">\n                <h3>Global Sales</h3>\n                <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" dataKey=\"vin\" [(selection)]=\"selectedCar\" [responsive]=\"true\"\n                         [paginator]=\"true\" [rows]=\"5\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th>\n                                Logo\n                            </th>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                            </th>\n                            <th>\n                                View\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr [pSelectableRow]=\"rowData\">\n                            <td>\n                                <img src=\"assets/demo/images/car/{{rowData.brand}}.png\" width=\"50\">\n                            </td>\n                            <td *ngFor=\"let col of columns\">\n                                {{rowData[col.field]}}\n                            </td>\n                            <td>\n                                <div class=\"p-grid\">\n                                    <div class=\"p-col-6\"><p-button icon=\"pi pi-search\" type=\"button\"></p-button></div>\n                                    <div class=\"p-col-6\"><p-button icon=\"pi pi-times\" type=\"button\" styleClass=\"ui-button-danger\"></p-button></div>\n                                </div>\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-xl-4\">\n            <div class=\"card weather\">\n                <div class=\"weather-header\">\n                    <img src=\"assets/layout/images/dashboard/weather.png\" library=\"roma-layout\"  />\n                </div>\n                <div class=\"weather-content\">\n                    <div class=\"weather-city\">Antalya</div>\n                    <div class=\"weather-status\">24&#176; C <i class=\"pi pi-map-marker\"></i></div>\n                    <div class=\"weather-detail\">Feels like 26&#176; Low 14 &#176; High 28 &#176;</div>\n                    <a>Change Location</a>\n                </div>\n            </div>\n        </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/datademo.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/datademo.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewDatademoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataTable</h1>\n            <p-table #dt [columns]=\"cols\" styleClass=\"ui-table-cars\" [value]=\"cars1\" [paginator]=\"true\" [rows]=\"10\" dataKey=\"vin\" selectionMode=\"single\" [(selection)]=\"selectedCar\">\n                <ng-template pTemplate=\"caption\">\n                    DataTable\n                    <div class=\"ui-table-globalfilter-container\">\n                        <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:250px;\">\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\" let-columns>\n                    <tr>\n                        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngSwitch]=\"col.field\">\n                            {{col.header}}\n                            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                        </th>\n                        <th style=\"width: 8em; text-align: center;\">\n                            <button pButton type=\"button\" icon=\"pi pi-cog\"></button>\n                        </th>\n                    </tr>\n                    <tr>\n                        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\" style=\"padding: .5em;\">\n                            <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" placeholder=\"Starts with\" class=\"ui-column-filter\" style=\"width: 100%; margin-top: 0;\" (input)=\"dt.filter($event.target.value, col.field, 'startsWith')\">\n                            <input *ngSwitchCase=\"'year'\" pInputText type=\"text\" placeholder=\"Contains\" class=\"ui-column-filter\" style=\"width: 100%; margin-top: 0;\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                            <p-dropdown *ngSwitchCase=\"'brand'\" appendTo=\"body\" [options]=\"brands\" styleClass=\"ui-column-filter\" [showClear]=\"true\" [style]=\"{'min-width':'1em', 'width':'100%', 'margin-top':'0'}\" placeholder=\"Select a Brand\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\">\n                                <ng-template let-item pTemplate=\"selectedItem\">\n                                    <img src=\"assets/demo/images/car/{{item.label}}.png\" style=\"width:16px;vertical-align:middle\" />\n                                    <span style=\"vertical-align:middle; margin-left: .5em\">{{item.label}}</span>\n                                </ng-template>\n                                <ng-template let-car pTemplate=\"item\">\n                                    <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                                        <img src=\"assets/demo/images/car/{{car.label}}.png\" style=\"width:24px;position:absolute;top:1px;left:5px\"/>\n                                        <div style=\"font-size:14px;float:right;margin-top:4px\">{{car.label}}</div>\n                                    </div>\n                                </ng-template>\n                            </p-dropdown>\n                            <p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" [filter]=\"false\"  styleClass=\"ui-column-filter\" [style]=\"{'width':'100%', 'margin-top':'0'}\"  defaultLabel=\"Select a color\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect>\n                        </th>\n                        <th style=\"width: 8em;\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                    <tr [pSelectableRow]=\"rowData\" [pEditableRow]=\"rowData\">\n                        <td>{{rowData.vin}}</td>\n                        <td>{{rowData.year}}</td>\n                        <td>\n                            <img src=\"assets/demo/images/car/{{rowData.brand}}.png\" style=\"width: 50px; margin-right: 1em; vertical-align: middle;\">\n                            {{rowData.brand}}\n                        </td>\n                        <td>{{rowData.color}}</td>\n                        <td>\n                            <button pButton type=\"button\" class=\"ui-button-success\" icon=\"pi pi-search\" style=\"margin-right: .5em\"></button>\n                            <button pButton type=\"button\" class=\"ui-button-warning\" icon=\"pi pi-pencil\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataView</h1>\n            <p-dataView #dv [value]=\"cars2\" [paginator]=\"true\" [rows]=\"10\" paginatorPosition=\"both\" filterBy=\"brand\"\n                [sortField]=\"sortField\" [sortOrder]=\"sortOrder\">\n                <p-header>\n                    <div class=\"ui-helper-clearfix\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12 ui-md-4\">\n                                <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By\" (onChange)=\"onSortChange($event)\" [style]=\"{'min-width':'140px'}\"></p-dropdown>\n                            </div>\n                            <div class=\"ui-g-6 ui-md-4 filter-container\">\n                                <div style=\"position:relative\">\n                                    <input type=\"search\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\">\n                                </div>\n                            </div>\n                            <div class=\"ui-g-6 ui-md-4\" style=\"text-align:right\">\n                                <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n                            </div>\n                        </div>\n                    </div>\n                </p-header>\n                <ng-template let-car pTemplate=\"listItem\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"car-details-list\">\n                            <div>\n                                <img src=\"assets/demo/images/car/{{car.brand}}.png\">\n                                <div class=\"ui-g\">\n                                    <div class=\"ui-g-12\">Vin: <b>{{car.vin}}</b></div>\n                                    <div class=\"ui-g-12\">Year: <b>{{car.year}}</b></div>\n                                    <div class=\"ui-g-12\">Brand: <b>{{car.brand}}</b></div>\n                                    <div class=\"ui-g-12\">Color: <b>{{car.color}}</b></div>\n                                </div>\n                            </div>\n                            <button pButton type=\"button\" icon=\"pi pi-search\"></button>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template let-car pTemplate=\"gridItem\">\n                    <div style=\"padding:.5em\" class=\"ui-g-12 ui-md-3\">\n                        <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.png\" width=\"60\">\n                            <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                            <button pButton type=\"button\" icon=\"pi pi-search\" style=\"margin-top:0\"></button>\n                        </p-panel>\n                    </div>\n                </ng-template>\n            </p-dataView>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>VirtualScroller</h1>\n            <p-virtualScroller [value]=\"cars3\" scrollHeight=\"500px\" [itemSize]=\"150\" [rows]=\"40\" [cache]=\"false\"\n                               [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [totalRecords]=\"200\">\n                <p-header>\n                    List of Cars\n                </p-header>\n                <ng-template let-car pTemplate=\"item\" let-i=\"index\">\n                    <div class=\"p-grid car-item\">\n                        <div class=\"p-col-12 p-md-2 index-col\" style=\"text-align:center\">\n                            <div style=\"font-size: 24px; text-align: center; padding-top: 48px\">{{i}}</div>\n                        </div>\n                        <div class=\"p-col-12 p-md-2 image-col\" style=\"text-align:center\">\n                            <img style=\"padding-top: 23px\" width=\"72\" src=\"assets/demo/images/car/{{car?.brand}}.png\">\n                        </div>\n                        <div class=\"p-col-12 p-md-8\">\n                            <div class=\"p-grid\">\n                                <div class=\"p-col-2 p-sm-6\">Vin: </div>\n                                <div class=\"p-col-10 p-sm-6\">{{car?.vin}}</div>\n\n                                <div class=\"p-col-2 p-sm-6\">Year: </div>\n                                <div class=\"p-col-10 p-sm-6\">{{car?.year}}</div>\n\n                                <div class=\"p-col-2 p-sm-6\">Brand: </div>\n                                <div class=\"p-col-10 p-sm-6\">{{car?.brand}}</div>\n\n                                <div class=\"p-col-2 p-sm-6\">Color: </div>\n                                <div class=\"p-col-10 p-sm-6\">{{car?.color}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n                <ng-template let-car pTemplate=\"loadingItem\">\n                    <div class=\"p-grid car-item empty-car-item\">\n                        <div class=\"p-col-12 p-md-2 index-col\">\n                            <div class=\"empty-car-item-index\"></div>\n                        </div>\n                        <div class=\"p-col-12 p-md-2 image-col\">\n                            <div class=\"empty-car-item-image\"></div>\n                        </div>\n                        <div class=\"p-col-12 p-md-8\">\n                            <div class=\"p-grid\">\n                                <div class=\"p-col-12\"><div class=\"empty-car-item-text\"></div></div>\n                                <div class=\"p-col-12\"><div class=\"empty-car-item-text\"></div></div>\n                                <div class=\"p-col-12\"><div class=\"empty-car-item-text\"></div></div>\n                                <div class=\"p-col-12\"><div class=\"empty-car-item-text\"></div></div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </p-virtualScroller>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-8\">\n        <div class=\"card card-w-title\">\n            <h1>PickList</h1>\n            <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" filterBy=\"brand\" filterPlaceholder=\"Search by Brand\" sourceHeader=\"Available\"\n                targetHeader=\"Selected\" [responsive]=\"true\" [sourceStyle]=\"{'height':'250px'}\" [targetStyle]=\"{'height':'250px'}\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px; width: 50px\" />\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-pickList>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-md-4\">\n        <div class=\"card card-w-title\">\n            <h1>OrderList</h1>\n            <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\" filterBy=\"brand\"\n                filterPlaceholder=\"Search by Brand\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px; width: 50px\" />\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-orderList>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-6\">\n                    <h1>Tree</h1>\n                    <p-tree [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedNode1\" [style]=\"{width: '100%'}\"></p-tree>\n                </div>\n                <div class=\"p-col-12 p-md-6\">\n                    <h1>Checkbox Tree</h1>\n                    <p-tree [value]=\"files2\" selectionMode=\"checkbox\" [(selection)]=\"selectedNodes\" [style]=\"{width: '100%'}\"></p-tree>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h1>Horizontal Tree</h1>\n            <p-tree [value]=\"files3\" selectionMode=\"single\" [(selection)]=\"selectedNode2\" layout=\"horizontal\"></p-tree>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>TreeTable</h1>\n            <p-treeTable [value]=\"files4\" [columns]=\"cols2\" selectionMode=\"checkbox\" [(selection)]=\"selectedNode3\">\n                <ng-template pTemplate=\"caption\">\n                    FileSystem\n                </ng-template>\n                <ng-template pTemplate=\"caption\">\n                    Documents\n                </ng-template>\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Size</th>\n                        <th>Type</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowNode let-rowData=\"rowData\" let-columns=\"columns\">\n                    <tr>\n                        <td *ngFor=\"let col of columns; let i = index\">\n                            <p-treeTableToggler [rowNode]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableToggler>\n                            <p-treeTableCheckbox [value]=\"rowNode\" *ngIf=\"i == 0\"></p-treeTableCheckbox>\n                            <span style=\"vertical-align: middle\">{{rowData[col.field]}}</span>\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-treeTable>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Carousel</h1>\n            <p-carousel [value]=\"carouselCars\" [numVisible]=\"4\" [numScroll]=\"3\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"car-details\">\n                        <div class=\"p-grid p-nogutter\">\n                            <div class=\"p-col-12\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.png\" />\n                            </div>\n                            <div class=\"p-col-12 car-data\">\n                                <div class=\"car-title\">{{car.brand}}</div>\n                                <div class=\"car-subtitle\">{{car.year}} | {{car.color}}</div>\n\n                                <div class=\"car-buttons\">\n                                    <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"></button>\n                                    <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"></button>\n                                    <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"></button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </p-carousel>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Schedule</h1>\n            <p-fullCalendar [events]=\"events\" [options]=\"fullcalendarOptions\" ></p-fullCalendar>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/documentation.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/documentation.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewDocumentationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card docs no-margin\">\n\n            <h1>Current Version</h1>\n            <p>Angular 9 and PrimeNG 9</p>\n\n            <h1>Dependencies</h1>\n            <p>Roma has no direct dependency other than PrimeNG. More information about dependencies is available at <a href=\"https://www.primefaces.org/why-primeng-templates/\">Why PrimeNG Templates</a> article.</p>\n\n            <h1>Getting Started</h1>\n            <p>Roma is a true native application template for Angular and is distributed as a CLI project. In case CLI is not installed already, use\n                the command below to set it up.\n            </p>\n\n<pre class=\"doc-command\">\nnpm install -g @angular/cli\n</pre>\n\n            <p>Once CLI is ready in your system, extract the contents of the Roma zip file distribution, cd to the directory,\n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment.</p>\n<pre class=\"doc-command\">\ncd roma\nnpm install\nng serve\n</pre>\n\n            <p>The application should run at http://localhost:4200/, you may now start with the development of your application.</p>\n\n            <h1>Important CLI Commands</h1>\n            <p>Following commands are derived from CLI.</p>\n<pre class=\"doc-command\">\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n</pre>\n\n            <h1>Structure</h1>\n            <p>Roma consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout,\n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder.\n            </p>\n\n            <h1>Template</h1>\n            <p>Main layout is the html template of the app.main.component.ts, it is divided into a couple of sections such as topbar, sidebar, right panel and footer. Here is the code for\n                the main template. The component class app.main.component.ts implements the logic such as opening menus and managing layout modes.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode>\n&lt;div class=\"layout-wrapper\" [ngClass]=\"&#123;'layout-horizontal': menuMode === 'horizontal',\n    'layout-overlay': menuMode === 'overlay',\n    'layout-static': menuMode === 'static',\n    'layout-slim': menuMode === 'slim',\n    'layout-menu-light': lightMenu === true,\n    'layout-menu-dark': lightMenu === false,\n    'layout-overlay-active': overlayMenuActive,\n    'layout-mobile-active': staticMenuMobileActive,\n    'layout-static-inactive': staticMenuDesktopInactive&#125;\" (click)=\"onLayoutClick()\"&gt;\n    &lt;app-topbar&gt;&lt;/app-topbar&gt;\n\n    &lt;app-menu&gt;&lt;/app-menu&gt;\n    &lt;app-right-menu&gt;&lt;/app-right-menu&gt;\n\n    &lt;div class=\"layout-main\"&gt;\n        &lt;div class=\"layout-content\"&gt;\n            &lt;router-outlet&gt;&lt;/router-outlet&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;app-config&gt;&lt;/app-config&gt;\n    &lt;div class=\"layout-footer\"&gt;\n        &lt;app-footer&gt;&lt;/app-footer&gt;\n    &lt;/div&gt;\n    &lt;div class=\"layout-content-mask\"&gt;&lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n            <h1>Menu</h1>\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems,\n            navigate to this file and define your own model as a nested structure. Here is the menu component from the sample application.</p>\n\n<div style=\"height:400px;overflow: auto;\">\n<pre>\n<code class=\"language-javascript\" pCode>\nimport &#123; Component, OnInit &#125; from '@angular/core';\nimport &#123; trigger, state, style, transition, animate &#125; from '@angular/animations';\nimport &#123; AppMainComponent &#125; from './app.main.component';\n\n@Component(&#123;\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html',\n    animations: [\n        trigger('inline', [\n            state('hiddenAnimated', style(&#123;\n                height: '0px',\n                overflow: 'hidden'\n            &#125;)),\n            state('visibleAnimated', style(&#123;\n                height: '*',\n            &#125;)),\n            transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),\n            transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))\n        ])\n    ]\n&#125;)\nexport class AppMenuComponent implements OnInit, AfterViewInit &#123;\n\n    model: any[];\n\n    inlineModel: any[];\n\n    constructor(public app: AppMainComponent) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.model = [\n            &#123; label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']&#125;,\n            &#123;\n                label: 'Components', icon: 'pi pi-fw pi-star', routerLink: ['/components'],\n                items: [\n                    &#123; label: 'Sample Page', icon: 'pi pi-fw pi-th-large', routerLink: ['/components/sample']  &#125;,\n                    &#123; label: 'Forms', icon: 'pi pi-fw pi-file', routerLink: ['/components/forms'] &#125;,\n                    &#123; label: 'Data', icon: 'pi pi-fw pi-table', routerLink: ['/components/data'] &#125;,\n                    &#123; label: 'Panels', icon: 'pi pi-fw pi-list', routerLink: ['/components/panels'] &#125;,\n                    &#123; label: 'Overlays', icon: 'pi pi-fw pi-clone', routerLink: ['/components/overlays'] &#125;,\n                    &#123; label: 'Menus', icon: 'pi pi-fw pi-plus', routerLink: ['/components/menus'] &#125;,\n                    &#123; label: 'Messages', icon: 'pi pi-fw pi-envelope', routerLink: ['/components/messages'] &#125;,\n                    &#123; label: 'Charts', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/components/charts'] &#125;,\n                    &#123; label: 'File', icon: 'pi pi-fw pi-upload', routerLink: ['/components/file'] &#125;,\n                    &#123; label: 'Misc', icon: 'pi pi-fw pi-spinner', routerLink: ['/components/misc'] &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Pages', icon: 'pi pi-fw pi-copy', routerLink: ['/pages'],\n                items: [\n                    &#123; label: 'Empty', icon: 'pi pi-fw pi-clone', routerLink: ['/pages/empty'] &#125;,\n                    &#123; label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login'], target: '_blank' &#125;,\n                    &#123; label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' &#125;,\n                    &#123; label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/error'], target: '_blank' &#125;,\n                    &#123; label: '404', icon: 'pi pi-fw pi-times', routerLink: ['/accessdenied'], target: '_blank' &#125;,\n                    &#123;\n                        label: 'Access Denied', icon: 'pi pi-fw pi-ban',\n                        routerLink: ['/access'], target: '_blank'\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',\n                items: [\n                    &#123;\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',\n                        items: [\n                            &#123;\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                    &#123; label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                    &#123; label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' &#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',\n                        items: [\n                            &#123;\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                    &#123; label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',\n                                items: [\n                                    &#123; label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' &#125;,\n                                ]\n                            &#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Docs', icon: 'pi pi-fw pi-file', routerLink: ['/documentation']\n            &#125;,\n            &#123;\n                label: 'Buy Now', icon: 'pi pi-fw pi-money-bill', url: ['https://www.primefaces.org/store']\n            &#125;\n        ];\n        this.inlineModel = [\n            &#123;\n                label: 'Profile', icon: 'pi pi-fw pi-user'\n            &#125;,\n            &#123;\n                label: 'Settings', icon: 'pi pi-fw pi-cog'\n            &#125;,\n            &#123;\n                label: 'Messages', icon: 'pi pi-fw pi-envelope'\n            &#125;,\n            &#123;\n                label: 'Notifications', icon: 'pi pi-fw pi-bell'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n</div>\n\n            <h1>Integration with an Existing CLI Project</h1>\n            <p>To setup Roma in an existing project, follow the steps below;</p>\n\n<ul>\n    <li>Copy the <i>src/assets</i> folder to your projects folder with the same name</li>\n    <li>Copy all app.* files and breadcrumb.service.ts to the src/app folder of your application.</li>\n</ul>\n\n          <p>Install PrimeNG</p>\n<pre class=\"doc-command\">\nnpm install primeng@latest --save\nnpm install primeicons@latest --save\n</pre>\n\n          <p>Add PrimeNG CSS at styles section in angular.json.</p>\n\n<pre>\n<code class=\"language-json\" pCode>\n\"styles\": [\n    \"../node_modules/primeng/resources/primeng.min.css\",        //required: PrimeNG components\n    \"node_modules/primeicons/primeicons.css\",                   //required: PrimeIcons\n    \"styles.scss\"                                               //your styles and overrides\n],\n</code>\n</pre>\n\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration above so they go inside the bundle.</p>\n\n            <h1>Theme</h1>\n            <p>Roma provides 15 PrimeNG themes out of the box. Setup of a theme is simple by including the css of theme\n                to your bundle that are located inside assets/theme folder such as assets/theme/theme-amber-teal.css.</p>\n\n            <ul>\n                <li>blue</li>\n                <li>green</li>\n                <li>orange</li>\n                <li>magenta</li>\n                <li>bluegrey</li>\n                <li>deeppurple</li>\n                <li>brown</li>\n                <li>lime</li>\n                <li>rose</li>\n                <li>cyan</li>\n                <li>teal</li>\n                <li>deeporange</li>\n                <li>indigo</li>\n                <li>pink</li>\n                <li>purple</li>\n            </ul>\n\n            <p>A custom theme can be developed by the following steps.</p>\n            <ul>\n                <li>Choose a custom theme name such as \"mytheme\".</li>\n                <li>Create a folder named \"mytheme\" under <i>assets/theme folder</i>.</li>\n                <li>Create a file such as theme.scss under <i>assets/theme/mytheme folder</i>.</li>\n                <li>Define the variables listed below in your file and import the <i>../../sass/theme/_theme.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Include the generated theme.css to your page.</li>\n            </ul>\n\n            <p>Here are the variables required to create a theme.</p>\n<pre>\n<code class=\"language-css\" pCode>\n$primaryDarkestColor:#024f9e;\n$primaryDarkerColor:#0772b3;\n$primaryColor:#0f97c7;\n$primaryLighterColor:#1cb9d7;\n$primaryLightestColor:#2ed7e4;\n$primaryColorText:#ffffff;\n\n@import '../sass/theme/_theme_variables';\n@import '../sass/theme_core/_core';\n</code>\n</pre>\n\n            <p> An example sass command to compile the css would be;</p>\n\n<pre class=\"doc-command\">\nsass --update src/assets/theme/mytheme/theme.scss:src/assets/theme/mytheme/theme.css\n</pre>\n\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\n<pre class=\"doc-command\">\nsass --watch src/assets/theme/mytheme/theme.scss:src/assets/theme/mytheme/theme.css\n</pre>\n\n            <p>Same can also be applied to layout itself;</p>\n            <ul>\n                <li>Choose a layout name such as layout-myown.</li>\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\n            </ul>\n\n            <p>Here are the variables required to create a layout.</p>\n<pre>\n<code class=\"language-css\" pCode>\n$primaryColor:#0f97c7;\n$primaryTextColor:#ffffff;\n\n@import '../../sass/layout/_layout';\n</code>\n</pre>\n\n            <h1>Common SASS Variables</h1>\n            <p>In case you'd like to customize the shared variables, the _variables.scss files are where the options are defined for both layout and theme.</p>\n\n<h3>sass/_variables.scss</h3>\n<pre>\n<code class=\"language-css\" pCode>\n$fontFamily:'Inter UI',sans-serif;\n$fontSize:13px;\n$textColor:#252529;\n$textSecondaryColor:#65656a;\n$borderRadius:2px;\n$transitionDuration:.2s;\n</code>\n</pre>\n\n<h3>sass/layout/_variables</h3>\n<pre>\n<code class=\"language-css\" pCode>\n@import '../_variables';\n\n//main\n$bodyBgColor:#f4f4f4;\n\n$footerBgColor:#ffffff;\n$footerBorderColor:#ebebef;\n\n//light menu\n$menuBgColor:#ffffff;\n$menuBorderColor:#ebebef;\n$menuitemTextColor:#666666;\n$menuitemIconColor:#65656a;\n$menuitemTextHoverColor:#252529;\n$menuitemIconHoverColor:#252529;\n$menuitemHoverBgColor:#eaeaea;\n$menuitemSeparator:#ebebef;\n\n//dark menu\n$darkMenuBgColor:#252529;\n$darkMenuBorderColor:#252529;\n$darkMenuitemTextColor:#8b8b90;\n$darkMenuitemIconColor:#a6a6a6;\n$darkMenuitemTextHoverColor:#ebebef;\n$darkMenuitemIconHoverColor:#ebebef;\n$darkMenuitemHoverBgColor:#2e2e33;\n$darkMenuitemSeparator:#424247;\n\n$slimMenuTooltipBgColor:#333333;\n$slimMenuTooltipTextColor:#c8c8c8;\n</code>\n</pre>\n\n<h3>sass/theme/_theme_variables</h3>\n<div style=\"height:400px;overflow: auto;\">\n<pre>\n<code class=\"language-css\" pCode>\n@import '../_variables';\n\n//Global\n$primeIconFontSize:1.25em;\n\n//anchors\n$linkColor:$primaryColor;\n$linkHoverColor:$primaryDarkerColor;\n$linkActiveColor:$primaryDarkestColor;\n\n//highlight\n$highlightBgColor:$primaryColor;\n$highlightColorText:$primaryColorText;\n\n//input field (e.g. inputtext, spinner, inputmask)\n$inputPadding:.5em;\n$inputBgColor:#ffffff;\n$inputBorder:1px solid #a9a9ae;\n$inputHoverBorderColor:#525257;\n$inputFocusBorderColor:$primaryColor;\n$inputFocusShadow:0 0 0 0.2em $primaryLightestColor;\n$inputErrorBorder:1px solid #e0284f;\n$inputPlaceholderTextColor:$textSecondaryColor;\n$inputTransition:border-color $transitionDuration,box-shadow $transitionDuration;\n\n//input groups\n$inputGroupBorderColor:#a9a9ae;\n$inputGroupBgColor:#ffffff;\n$inputGroupTextColor:$textColor;\n\n//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)\n$inputListMinWidth:12em;\n$inputListBgColor:#ffffff;\n$inputListPadding:.65em 0;\n$inputListBorder:1px solid #a9a9ae;\n\n$inputListItemPadding:.5em .75em;\n$inputListItemBgColor:transparent;\n$inputListItemTextColor:$textColor;\n$inputListItemHoverBgColor:#eaeaea;\n$inputListItemHoverTextColor:$primaryColor;\n$inputListItemHighlightBgColor:$highlightBgColor;\n$inputListItemHighlightTextColor:$highlightColorText;\n$inputListItemBorder:0 none;\n$inputListItemMargin:0;\n\n$inputListItemDividerColor:#ffffff;\n$inputListHeaderPaddingTop:.5em;\n$inputListHeaderPaddingLeft:.75em;\n$inputListHeaderPaddingRight:.75em;\n$inputListHeaderPaddingBottom:.5em;\n$inputListHeaderMargin:0;\n$inputListHeaderBgColor:#ffffff;\n$inputListHeaderTextColor:$textColor;\n$inputListHeaderBorder:1px solid #d8d8dc;\n\n$inputListHeaderSearchIconColor:$textSecondaryColor;\n$inputListHeaderCloseIconColor:$textColor;\n$inputListHeaderCloseIconHoverColor:$primaryColor;\n$inputListHeaderCloseIconTransition:color $transitionDuration;\n\n//inputs with panels (e.g. password)\n$inputContentPanelPadding:.75em;\n$inputContentPanelBgColor:#ffffff;\n$inputContentPanelTextColor:$textColor;\n\n//inputs with overlays (e.g. autocomplete, dropdown, multiselect)\n$inputOverlayBorder:0 none;\n$inputOverlayShadow:0 0 10px 0 rgba(0, 0, 0, 0.16);\n\n//input dropdowns (e.g. multiselect, dropdown)\n$inputDropdownIconColor:$textSecondaryColor;\n\n//button\n$buttonTextOnlyPadding:.5em 1em;\n$buttonWithLeftIconPadding:.5em 1em .5em 2em;\n$buttonWithRightIconPadding:.5em 2em .5em 1em;\n$buttonIconOnlyPadding:.5em;\n$buttonIconOnlyWidth:2.143em;\n\n$buttonBgColor:$primaryColor;\n$buttonBorder:1px solid $primaryColor;\n$buttonTextColor:$primaryColorText;\n\n$buttonHoverBgColor:$primaryLighterColor;\n$buttonHoverTextColor:$primaryColorText;\n$buttonHoverBorderColor:$primaryLighterColor;\n\n$buttonActiveBgColor:$primaryDarkerColor;\n$buttonActiveTextColor:$primaryColorText;\n$buttonActiveBorderColor:$primaryDarkerColor;\n\n$buttonFocusOutline:0 none;\n$buttonFocusOutlineOffset:0px;\n$buttonFocusShadow:0 0 0 0.2em $primaryLightestColor;\n$buttonTransition:background-color $transitionDuration,box-shadow $transitionDuration;\n$raisedButtonShadow:0 2px 4px 0 rgba(0, 0, 0, 0.10);\n$roundedButtonBorderRadius:1em;\n\n$secondaryButtonBgColor:$primaryColorText;\n$secondaryButtonBorder:1px solid $primaryColor;\n$secondaryButtonTextColor:$primaryColor;\n$secondaryButtonHoverBgColor:$primaryLighterColor;\n$secondaryButtonHoverTextColor:$primaryColorText;\n$secondaryButtonHoverBorderColor:$primaryLighterColor;\n$secondaryButtonActiveBgColor:$primaryDarkerColor;\n$secondaryButtonActiveTextColor:$primaryColorText;\n$secondaryButtonActiveBorderColor:$primaryDarkerColor;\n$secondaryButtonFocusShadow:$buttonFocusShadow;\n\n$infoButtonBgColor:#3f8efc;\n$infoButtonTextColor:#ffffff;\n$infoButtonBorder:1px solid #3f8efc;\n$infoButtonHoverBgColor:#54ccff;\n$infoButtonHoverTextColor:#ffffff;\n$infoButtonHoverBorderColor:#54ccff;\n$infoButtonActiveBgColor:#0c54b8;\n$infoButtonActiveTextColor:#ffffff;\n$infoButtonActiveBorderColor:#0c54b8;\n$infoButtonFocusShadow:0 0 0 0.2em #6fd4ff;\n\n$successButtonBgColor:#0fc763;\n$successButtonTextColor:#ffffff;\n$successButtonBorder:1px solid #0fc763;\n$successButtonHoverBgColor:#31e885;\n$successButtonHoverTextColor:#ffffff;\n$successButtonHoverBorderColor:#31e885;\n$successButtonActiveBgColor:#0a9c4d;\n$successButtonActiveTextColor:#ffffff;\n$successButtonActiveBorderColor:#0a9c4d;\n$successButtonFocusShadow:0 0 0 0.2em #72ffb3;\n\n$warningButtonBgColor:#f5b064;\n$warningButtonTextColor:#ffffff;\n$warningButtonBorder:1px solid #f5b064;\n$warningButtonHoverBgColor:#ffbf3c;\n$warningButtonHoverTextColor:#ffffff;\n$warningButtonHoverBorderColor:#ffbf3c;\n$warningButtonActiveBgColor:#cb7d27;\n$warningButtonActiveTextColor:#ffffff;\n$warningButtonActiveBorderColor:#cb7d27;\n$warningButtonFocusShadow:0 0 0 0.2em #fad78e;\n\n$dangerButtonBgColor:#f56f64;\n$dangerButtonTextColor:#ffffff;\n$dangerButtonBorder:1px solid #f56f64;\n$dangerButtonHoverBgColor:#ff4545;\n$dangerButtonHoverTextColor:#ffffff;\n$dangerButtonHoverBorderColor:#ff4545;\n$dangerButtonActiveBgColor:#a8281e;\n$dangerButtonActiveTextColor:#ffffff;\n$dangerButtonActiveBorderColor:#a8281e;\n$dangerButtonFocusShadow:0 0 0 0.2em #ff4545;\n\n//checkbox\n$checkboxWidth:20px;\n$checkboxHeight:20px;\n$checkboxActiveBorderColor:$primaryColor;\n$checkboxActiveBgColor:$primaryColor;\n$checkboxActiveTextColor:$primaryColorText;\n$checkboxActiveHoverBgColor:$primaryLighterColor;\n$checkboxActiveHoverTextColor:$primaryColorText;\n$checkboxActiveHoverBorderColor:$primaryColor;\n$checkboxActiveFocusBgColor:$primaryColor;\n$checkboxActiveFocusTextColor:$primaryColorText;\n$checkboxActiveFocusBorderColor:$primaryColor;\n$checkboxFocusBgColor:$inputBgColor;\n$checkboxFocusTextColor:$primaryColor;\n$checkboxFocusBorderColor:$inputBorder;\n$checkboxFocusShadow:0 0 0 0.2em $primaryLightestColor;\n$checkboxTransition:background-color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration;\n\n//radiobutton\n$radiobuttonWidth:20px;\n$radiobuttonHeight:20px;\n$radiobuttonActiveBorderColor:$primaryColor;\n$radiobuttonActiveBgColor:$primaryColor;\n$radiobuttonActiveTextColor:$primaryColorText;\n$radiobuttonActiveHoverBgColor:$primaryLighterColor;\n$radiobuttonActiveHoverTextColor:$primaryColorText;\n$radiobuttonActiveHoverBorderColor:$primaryColor;\n$radiobuttonActiveFocusBgColor:$primaryColor;\n$radiobuttonActiveFocusTextColor:$primaryColorText;\n$radiobuttonActiveFocusBorderColor:$primaryColor;\n$radiobuttonFocusBgColor:$inputBgColor;\n$radiobuttonFocusTextColor:$primaryColor;\n$radiobuttonFocusBorderColor:$inputBorder;\n$radiobuttonFocusShadow:0 0 0 0.2em $primaryLightestColor;\n$radiobuttonTransition:background-color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration;\n\n//togglebutton\n$toggleButtonBgColor:#eaeaea;\n$toggleButtonBorder:1px solid #eaeaea;\n$toggleButtonTextColor:$textColor;\n$toggleButtonIconColor:$textColor;\n$toggleButtonHoverBgColor:#eaeaea;\n$toggleButtonHoverBorderColor:#eaeaea;\n$toggleButtonHoverTextColor:$primaryColor;\n$toggleButtonHoverIconColor:$primaryColor;\n$toggleButtonActiveBgColor:$primaryColor;\n$toggleButtonActiveBorderColor:$primaryColor;\n$toggleButtonActiveTextColor:$primaryColorText;\n$toggleButtonActiveIconColor:$primaryColorText;\n$toggleButtonActiveHoverBgColor:$primaryLighterColor;\n$toggleButtonActiveHoverBorderColor:$primaryLighterColor;\n$toggleButtonActiveHoverTextColor:$primaryColorText;\n$toggleButtonActiveHoverIconColor:$primaryColorText;\n$toggleButtonFocusOutline:$buttonFocusShadow;\n$toggleButtonFocusBgColor:#eaeaea;\n$toggleButtonFocusBorderColor:#eaeaea;\n$toggleButtonFocusTextColor:$primaryColor;\n$toggleButtonFocusIconColor:$primaryColor;\n$toggleButtonActiveFocusBgColor:$primaryLighterColor;\n$toggleButtonActiveFocusBorderColor:$primaryLighterColor;\n$toggleButtonActiveFocusTextColor:$primaryColorText;\n$toggleButtonActiveFocusIconColor:$primaryColorText;\n\n//inplace\n$inplacePadding:.5em;\n$inplaceHoverBgColor:#ebebef;\n$inplaceHoverTextColor:$textColor;\n$inplaceTransition:background-color $transitionDuration;\n\n//rating\n$ratingTransition:color $transitionDuration;\n$ratingCancelIconColor:#e0284f;\n$ratingCancelHoverIconColor:#e0284f;\n$ratingIconFontSize:1.5em;\n$ratingStarIconColor:$textColor;\n$ratingStarIconHoverColor:$primaryColor;\n\n//slider\n$sliderBgColor:#d8d8dc;\n$sliderBorder:0 none;\n$sliderHeight:.286em;\n$sliderWidth:0.286em;\n$sliderHandleWidth:1.5em;\n$sliderHandleHeight:1.5em;\n$sliderHandleBgColor:$primaryColor;\n$sliderHandleBorder:2px solid $primaryColor;\n$sliderHandleBorderRadius:50%;\n$sliderHandleHoverBorder:2px solid $primaryColor;\n$sliderHandleHoverBgColor:$primaryLighterColor;\n$sliderHandleTransition:background-color $transitionDuration;\n$sliderRangeBgColor:$primaryColor;\n\n//calendar\n$calendarWidth:20em;\n$calendarNavIconColor:$textSecondaryColor;\n$calendarNavIconHoverColor:$textColor;\n$calendarNavIconTransition:color $transitionDuration;\n$calendarPadding:0.857em;\n$calendarTableMargin:0.857em 0 0 0;\n$calendarHeaderCellPadding:.286em;\n$calendarCellDatePadding:.286em;\n$calendarCellDateHoverBgColor:#ebebef;\n$calendarCellDateBorderRadius:$borderRadius;\n$calendarCellDateSelectedBgColor:$primaryColor;\n$calendarCellDateSelectedTextColor:$primaryColorText;\n$calendarCellDateTodayBgColor:$primaryColor;\n$calendarCellDateTodayTextColor:$primaryColorText;\n$calendarTimePickerDivider: 1px solid #ebebef;\n$calendarTimePickerPadding:.75em 1.25em .75em .75em;\n$calendarTimePickerIconColor:$textSecondaryColor;\n$calendarTimePickerIconFontSize:1.286em;\n$calendarTimePickerTimeFontSize:1.286em;\n$calendarTimePickerIconHoverColor:$textColor;\n$calendarButtonBarDivider: 1px solid #ebebef;\n$calendarMultipleMonthDivider: 1px solid #ebebef;\n\n//spinner\n$spinnerButtonWidth:1.5em;\n\n//input switch\n$inputSwitchWidth:2.615em;\n$inputSwitchHeight:1.077em;\n$inputSwitchBorderRadius:30px;\n$inputSwitchTransition:background-color $transitionDuration;\n$inputSwitchSliderOffBgColor:$inputBgColor;\n$inputSwitchHandleOffBgColor:$textSecondaryColor;\n$inputSwitchSliderOffHoverBgColor:$inputBgColor;\n$inputSwitchSliderOffFocusBgColor:$inputBgColor;\n$inputSwitchSliderOnBgColor:$primaryColor;\n$inputSwitchSliderOnHoverBgColor:$primaryColor;\n$inputSwitchHandleOnBgColor:$primaryDarkerColor;\n$inputSwitchSliderOnFocusBgColor:$primaryColor;\n\n//panel common (e.g. accordion, panel, tabview)\n$panelHeaderBorder:1px solid #d8d8dc;\n$panelHeaderBgColor:#ffffff;\n$panelHeaderTextColor:$textColor;\n$panelHeaderIconColor:$textSecondaryColor;\n$panelHeaderIconHoverColor:$textColor;\n$panelHeaderIconTransition:color $transitionDuration;\n$panelHeaderFontWeight:500;\n$panelHeaderPadding:.857em 1em;\n$panelContentBorder:1px solid #d8d8dc;\n$panelContentBgColor:#ffffff;\n$panelContentTextColor:$textColor;\n$panelContentPadding:0.571em 1em;\n$panelContentLineHeight:1.5;\n$panelFooterBorder:1px solid #d8d8dc;\n$panelFooterBgColor:#ffffff;\n$panelFooterTextColor:$textColor;\n$panelFooterPadding:0.571em 1em;\n$panelHeaderHoverBgColor:#eaeaea;\n$panelHeaderHoverBorder:1px solid #d8d8dc;\n$panelHeaderHoverTextColor:$textColor;\n$panelHeaderHoverIconColor:$textColor;\n$panelHeaderActiveBgColor:#ffffff;\n$panelHeaderActiveBorder:1px solid #d8d8dc;\n$panelHeaderActiveTextColor:$primaryColor;\n$panelHeaderActiveIconColor:$primaryColor;\n$panelHeaderActiveHoverBgColor:#eaeaea;\n$panelHeaderActiveHoverBorder:1px solid #d8d8dc;\n$panelHeaderActiveHoverTextColor:$primaryColor;\n$panelHeaderActiveHoverIconColor:$primaryColor;\n$panelHeaderTransition:background-color $transitionDuration, box-shadow $transitionDuration;\n\n//accordion\n$accordionSpacing:2px;\n\n//tabview\n$tabsNavBorder:0 none;\n$tabsNavBgColor:#ffffff;\n$tabHeaderSpacing:.214em;\n\n//scrollpanel\n$scrollPanelHandleBgColor:#dadada;\n$scrollPanelTrackBorder:0 none;\n$scrollPanelTrackBgColor:#f8f8f8;\n\n//card\n$cardShadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n//paginator\n$paginatorBgColor:#ffffff;\n$paginatorBorder:1px solid #d8d8dc;\n$paginatorPadding:.25em 0;\n$paginatorIconColor:$textSecondaryColor;\n$paginatorElementWidth:2.286em;\n$paginatorElementHeight:2.286em;\n$paginatorElementHoverBgColor:#eaeaea;\n$paginatorElementHoverIconColor:$textColor;\n$paginatorElementBorderRadius:$borderRadius;\n$paginatorElementMargin:0 .125em;\n$paginatorElementPadding:0;\n$paginatorElementBorder:1px solid transparent;\n\n//table\n$tableCaptionFontWeight:500;\n$tableSummaryFontWeight:500;\n$tableHeaderCellPadding:.75em 1.214em;\n$tableHeaderCellBgColor:#ffffff;\n$tableHeaderCellTextColor:$textColor;\n$tableHeaderCellFontWeight:500;\n$tableHeaderCellBorder:1px solid #d8d8dc;\n$tableHeaderCellHoverBgColor:#eaeaea;\n$tableHeaderCellHoverTextColor:$textColor;\n$tableHeaderCellIconColor:$textColor;\n$tableHeaderCellHoverIconColor:$textColor;\n$tableBodyRowBgColor:#ffffff;\n$tableBodyRowTextColor:$textColor;\n$tableBodyRowEvenBgColor:#f8f8f8;\n$tableBodyRowHoverBgColor:#eaeaea;\n$tableBodyRowHoverTextColor:$textColor;\n$tableBodyCellBorder:1px solid #d8d8dc;\n$tableBodyCellPadding:.75em 1.214em;\n$tableFooterCellPadding:.75em 1.214em;\n$tableFooterCellBgColor:#ffffff;\n$tableFooterCellTextColor:$textColor;\n$tableFooterCellFontWeight:500;\n$tableFooterCellBorder:1px solid #d8d8dc;\n$tableResizerHelperBgColor:$primaryColor;\n\n//schedule\n$scheduleEventBgColor:$primaryColor;\n$scheduleEventBorder:1px solid $primaryColor;\n$scheduleEventTextColor:$primaryColorText;\n\n//tree\n$treeNodePadding:0.143em 0;\n$treeNodeLabelPadding:0.286em;\n$treeNodeContentSpacing:0.143em;\n\n//lightbox\n$lightBoxNavIconFontSize:3em;\n$lightBoxNavIconColor:#ffffff;\n\n//org chart\n$organizationChartConnectorColor:#c8c8c8;\n\n//messages\n$messagesMargin:1em 0;\n$messagesPadding:1em;\n$messagesIconFontSize:1.714em;\n$messageCloseIconFontSize:1.5em;\n\n//message\n$messagePadding:$inputPadding;\n$messageMargin: 0;\n$messageIconFontSize: 1.25em;\n$messageTextFontSize: 1em;\n\n//toast\n$toastShadow: 0 3px .5em 0 rgba(0, 0, 0, 0.16);\n$toastMessageMargin:0 0 1em 0;\n\n//severities\n$infoMessageBgColor:#1cb9d7;\n$infoMessageBorder:1px solid #1cb9d7;\n$infoMessageTextColor:#ffffff;\n$infoMessageIconColor:#ffffff;\n$successMessageBgColor:#34CE83;\n$successMessageBorder:1px solid #34CE83;\n$successMessageTextColor:#ffffff;\n$successMessageIconColor:#ffffff;\n$warnMessageBgColor:#f5b064;\n$warnMessageBorder:1px solid #f5b064;\n$warnMessageTextColor:#ffffff;\n$warnMessageIconColor:#ffffff;\n$errorMessageBgColor:#f56f64;\n$errorMessageBorder:1px solid #f56f64;\n$errorMessageTextColor:#ffffff;\n$errorMessageIconColor:#ffffff;\n\n//growl\n$growlTopLocation:70px;\n$growlIconFontSize:3.5em;\n$growlMessageTextMargin: 0 0 0 4em;\n$growlMargin:0 0 1em 0;\n$growlPadding:1em;\n$growlShadow:0 3px .5em 0 rgba(0, 0, 0, 0.16);\n$growlOpacity:.9;\n\n//overlays\n$overlayContentBorderColor:#c8c8c8;\n$overlayContentBorder:0 none;\n$overlayContainerShadow:0 0 10px 0 rgba(0, 0, 0, 0.16);\n\n//dialog\n$dialogHeaderPadding:1.5em;\n$confirmDialogPadding:1.5em;\n\n//overlay panel\n$overlayPanelCloseIconBgColor:$primaryColor;\n$overlayPanelCloseIconColor:$primaryColorText;\n$overlayPanelCloseIconHoverBgColor:$primaryLighterColor;\n$overlayPanelCloseIconHoverColor:$primaryColorText;\n\n//tooltip\n$tooltipBgColor:#252529;\n$tooltipTextColor:#ffffff;\n$tooltipPadding:$inputPadding;\n\n//steps\n$stepsItemBgColor:#ffffff;\n$stepsItemBorder:1px solid #d8d8dc;\n$stepsItemNumberColor:$textColor;\n$stepsItemTextColor:$textSecondaryColor;\n$stepsItemActiveBorder:1px solid $primaryColor;\n$stepsItemWidth:2em;\n$stepsItemHeight:2em;\n\n//progressbar\n$progressBarHeight:1.714em;\n$progressBarBorder:0 none;\n$progressBarBgColor:#efefef;\n$progressBarValueBgColor:$primaryColor;\n\n//menu (e.g. menu, menubar, tieredmenu)\n$menuBgColor:#ffffff;\n$menuBorder:1px solid #d8d8dc;\n$menuPadding:0;\n$menuTextColor:$textColor;\n$menuitemPadding:.571em .857em;\n$menuitemMargin:0;\n$menuitemTextColor:$textColor;\n$menuitemIconColor:$textSecondaryColor;\n$menuitemHoverTextColor:$textColor;\n$menuitemHoverIconColor:$textColor;\n$menuitemHoverBgColor:#eaeaea;\n$menuitemActiveTextColor:$primaryColorText;\n$menuitemActiveIconColor:$primaryColorText;\n$menuitemActiveBgColor:$primaryColor;\n$submenuHeaderMargin: 0;\n$submenuPadding: 0;\n$overlayMenuBorder:0 none;\n$overlayMenuShadow:0 0px 10px 0 rgba(0, 0, 0, 0.16);\n\n//misc\n$maskBgColor:rgba(0, 0, 0, 0.4);        //dialog mask\n$inlineSpacing:.5em;                      //spacing between inline elements\n$chipsItemMargin:0 .286em 0 0;            //autocomplete and chips token spacing\n$dataIconColor:$textSecondaryColor;       //icon color of a data such as treetoggler, table expander\n$dataIconHoverColor:$textColor;           //hover icon color of a data such as treetoggler, table expander\n\n//general\n$disabledOpacity:.5;                      //opacity of a disabled item\n</code>\n</pre>\n</div>\n\n            <h1>Menu Modes</h1>\n            <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in app.component.html is used to define which mode to use by adding specific classes. List\n            below indicates the style classes for each mode. </p>\n            <ul>\n                <li>Static: \"layout-wrapper layout-static\"</li>\n                <li>Overlay: \"layout-wrapper layout-overlay\"</li>\n                <li>Slim: \"layout-wrapper layout-slim\"</li>\n                <li>Horizontal: \"layout-wrapper layout-horizontal\"</li>\n            </ul>\n\n            <p>For example to create a horizontal menu, the div element should be in following form;</p>\n<pre>\n<code class=\"language-markup\" pCode>\n&lt;div class=\"layout-wrapper layout-horizontal\"&gt;\n</code>\n</pre>\n\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an ngClass expression so that user can switch between modes. Sample\n                    application has an example implementation of such use case. Refer to app.component.ts for an example.</p>\n\n            <h1>Menu Colors</h1>\n            <p>Menu offers two color options, \"light\" and \"dark\" which is defined using the main container element.</p>\n            <ul>\n                <li>Light: \"layout-wrapper layout-menu-light\"</li>\n                <li>Dark: \"layout-wrapper layout-menu-dark\"</li>\n            </ul>\n\n            <h1>TopBar Colors</h1>\n            <p>Roma provides 17 built-in color alternatives for the topbar which is defined by adding a style class to the \"layout-wrapper\" element such as \"layout-topbar-dark\".</p>\n\n<pre>\n<code class=\"language-markup\" pCode>\n&lt;div class=\"layout-wrapper layout-topbar-dark\"&gt;\n...\n&lt;/div&gt;\n</code>\n</pre>\n            <p>The full list of alternatives are;</p>\n            <ul>\n                <li>layout-topbar-light</li>\n                <li>layout-topbar-dark</li>\n                <li>layout-topbar-blue</li>\n                <li>layout-topbar-green</li>\n                <li>layout-topbar-orange</li>\n                <li>layout-topbar-magenta</li>\n                <li>layout-topbar-bluegrey</li>\n                <li>layout-topbar-deeppurple</li>\n                <li>layout-topbar-brown</li>\n                <li>layout-topbar-lime</li>\n                <li>layout-topbar-rose</li>\n                <li>layout-topbar-cyan</li>\n                <li>layout-topbar-teal</li>\n                <li>layout-topbar-deeporange</li>\n                <li>layout-topbar-indigo</li>\n                <li>layout-topbar-pink</li>\n                <li>layout-topbar-purple</li>\n            </ul>\n\n            <h1>Grid CSS</h1>\n            <p>Roma uses PrimeNG Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Roma Layout itself does not depend on PrimeFlex CSS.</p>\n\n            <h1>RTL</h1>\n            <p>Layout can be used in RTL orientation as well by adding \"layout-rtl\" to the \"layout-wrapper\" div in app.main.component.html.</p>\n\n            <h1>Customizing Styles</h1>\n            <p>It is suggested to add your customizations in the following sass files under the \"sass/overrides\" folder instead of adding them to the\n                scss files under sass folder to avoid maintenance issues after an update.</p>\n\n            <ul>\n                <li><b>_layout_variables</b>: Variables of the layout.</li>\n                <li><b>_layout_styles</b>: Styles for the layout.</li>\n                <li><b>_theme_variables</b>: Variables of the theme.</li>\n                <li><b>_theme_styles</b>: Styles for the theme.</li>\n            </ul>\n\n            <h1>Migration Guide</h1>\n\n            <h4>8.0.1 to 9.0.0</h4>\n            <p>Angular 9 and PrimeNG 9</p>\n            <ul>\n                <li>Update dependencies with <a href=\"https://angular.io/cli/update\">ng update</a>.</li>\n                <li>Update theme.css and layout.css files.</li>\n                <li>Update app.menu.component.ts and app.menu.component.html while retaining your MenuModel.</li>\n                <li>Include app.menuitem.component.ts under app folder and define it app.module.ts with declarations property.</li>\n                <li>Include app.menu.service.ts under app folder and define it app.module.ts with providers property.</li>\n            </ul>\n\n            <h4>8.0.0 to 8.0.1</h4>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>7.0.0 to 8.0.0</h4>\n            <ul>\n                <li>Update your project to Angular 8 with ng update. View the official update guide -<a href=\"https://update.angular.io/\">https://update.angular.io/</a>- for more information.</li>\n                <li>Update app.menu.component.ts.</li>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <h4>1.0.0 to 7.0.0</h4>\n            <ul>\n                <li>Update app.main.component.html.</li>\n                <li>Update app.main.component.ts.</li>\n                <li>Update app.menu.component.ts.</li>\n                <li>Update theme css files.</li>\n                <li>Update layout css files.</li>\n            </ul>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/emptydemo.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/emptydemo.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewEmptydemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card\">\n            <h1>Empty Page</h1>\n            <p>Use this page to start from scratch and place your custom content.</p>\n            <button type=\"button\" pButton label=\"Home\" icon=\"pi pi-home\" style=\"display:inline-block;margin-top:6px\"></button>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/filedemo.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/filedemo.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewFiledemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"p-grid\">\n        <div class=\"p-col-12\">\n            <div class=\"card\">\n                <h1>Upload</h1>\n\n                <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\">\n                    <ng-template pTemplate=\"content\">\n                        <ul *ngIf=\"uploadedFiles.length\">\n                            <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                        </ul>\n                    </ng-template>\n                </p-fileUpload>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/formsdemo.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/formsdemo.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewFormsdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid ui-fluid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card card-w-title\">\n            <h1>InputText</h1>\n            <div class=\"p-grid form-group\">\n                <div class=\"p-col-12 p-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Name\">\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Email\">\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Phone\">\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Disabled\" disabled=\"disabled\">\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <input type=\"text\" pInputText readonly=\"readonly\" placeholder=\"Readonly\">\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>TextArea</h1>\n            <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"Your Message\" autoResize=\"autoResize\"></textarea>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>AutoComplete</h1>\n            <div class=\"p-grid form-group\">\n                <div class=\"p-col-12\">\n                    <label for=\"acSimple\">Simple</label>\n                </div>\n                <div class=\"p-col-12\" style=\"margin-bottom:10px\">\n                    <p-autoComplete id=\"acSimple\" [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\"\n                        field=\"name\" [size]=\"30\" [minLength]=\"1\"></p-autoComplete>\n                </div>\n\n                <div class=\"p-col-12\">\n                    <label for=\"acAdvanced\">Advanced</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-autoComplete id=\"acAdvanced\" [(ngModel)]=\"selectedBrands\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\"\n                        [size]=\"30\" [minLength]=\"1\" [dropdown]=\"true\" multiple=\"true\">\n                        <ng-template let-brand pTemplate=\"item\">\n                            <div class=\"ui-helper-clearfix\">\n                                <img src=\"assets/demo/images/car/{{brand}}.png\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\" />\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\n                            </div>\n                        </ng-template>\n                    </p-autoComplete>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>MultiSelect</h1>\n            <p-multiSelect [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Calendar</h1>\n            <p-calendar [inline]=\"true\"></p-calendar>\n\n            <div class=\"p-grid form-group\" style=\"margin-top:20px\">\n                <div class=\"p-col-12\">\n                    <label for=\"popup\">Popup:</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-calendar id=\"popup\" placeholder=\"Popup\" [showButtonBar]=\"true\"></p-calendar>\n                </div>\n                <div class=\"p-col-12\">\n                    <label for=\"datetime\">DateTime:</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-calendar id=\"datetime\" dateFormat=\"mm/dd/yy\" showTime=\"true\" placeholder=\"DateTime\" [minDate]=\"yesterday\"></p-calendar>\n                </div>\n                <div class=\"p-col-12\">\n                    <label for=\"time\">Time:</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-calendar id=\"time\" showTime=\"true\" [timeOnly]=\"true\" placeholder=\"Time\"></p-calendar>\n                </div>\n                <div class=\"p-col-12\">\n                    <label for=\"showIcon\">Button:</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-calendar id=\"showIcon\" [showIcon]=\"true\" placeholder=\"Button\"></p-calendar>\n                </div>\n                <div class=\"p-col-12\">\n                    <label for=\"multiple\">Multiple Month:</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-calendar id=\"multiple\" [numberOfMonths]=\"3\" placeholder=\"Multiple Months\"></p-calendar>\n                </div>\n                <div class=\"p-col-12\">\n                    <label for=\"month\">Month Picker:</label>\n                </div>\n                <div class=\"p-col-12\">\n                    <p-calendar id=\"month\" placeholder=\"Month Picker\" dateFormat=\"mm/yy\" view=\"month\"></p-calendar>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Chips</h1>\n            <p-chips></p-chips>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card card-w-title\">\n            <h1>Checkboxes</h1>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-4\">\n                    <p-checkbox name=\"cg\" value=\"Xbox One\" label=\"Xbox One\" [(ngModel)]=\"checkboxValues\"></p-checkbox>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <p-checkbox name=\"cg\" value=\"PS4\" label=\"PS4\" [(ngModel)]=\"checkboxValues\"></p-checkbox>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <p-checkbox name=\"cg\" value=\"Wii U\" label=\"Wii U\" [(ngModel)]=\"checkboxValues\"></p-checkbox>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>RadioButtons</h1>\n            <div class=\"p-grid\">\n                <div class=\"p-col-12 p-md-4\">\n                    <p-radioButton name=\"rg\" value=\"Xbox One\" label=\"Xbox One\" [(ngModel)]=\"radioValue\"></p-radioButton>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <p-radioButton name=\"rg\" value=\"PS4\" label=\"PS4\" [(ngModel)]=\"radioValue\"></p-radioButton>\n                </div>\n                <div class=\"p-col-12 p-md-4\">\n                    <p-radioButton name=\"rg\" value=\"Wii U\" label=\"Wii U\" [(ngModel)]=\"radioValue\"></p-radioButton>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>InputSwitch</h1>\n            <p-inputSwitch [(ngModel)]=\"switchChecked\"></p-inputSwitch>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Dropdown</h1>\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity1\"></p-dropdown>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Password</h1>\n            <input pPassword type=\"password\" />\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Spinner</h1>\n            <p-spinner></p-spinner>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Slider</h1>\n            <p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"></p-slider>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Listbox</h1>\n            <p-listbox [options]=\"citiesListbox\" [(ngModel)]=\"selectedCity2\" checkbox=\"checkbox\" filter=\"filter\" multiple=\"multiple\"></p-listbox>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Rating</h1>\n            <p-rating [(ngModel)]=\"ratingValue\"></p-rating>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>ColorPicker</h1>\n            <p-colorPicker [(ngModel)]=\"color\" inline=\"true\"></p-colorPicker>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Input Groups</h1>\n\n            <div class=\"p-grid form-group\">\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\">\n                            <i class=\"pi pi-user\"></i>\n                        </span>\n                        <input type=\"text\" pInputText placeholder=\"Username\" style=\"border-left:0\">\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\">\n                            <i class=\"pi pi-clock\"></i>\n                        </span>\n                        <span class=\"ui-inputgroup-addon\">\n                            <i class=\"pi pi-star\"></i>\n                        </span>\n                        <input type=\"text\" pInputText placeholder=\"Price\" style=\"border-left:0;border-right:0\">\n                        <span class=\"ui-inputgroup-addon\">$</span>\n                        <span class=\"ui-inputgroup-addon\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <button pButton type=\"button\" label=\"Search\"></button>\n                        <input type=\"text\" pInputText placeholder=\"Keyword\" style=\"border-left:0\">\n                    </div>\n                </div>\n\n                <div class=\"p-col-12 p-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon ui-inputgroup-addon-checkbox\">\n                            <p-checkbox></p-checkbox>\n                        </span>\n                        <input type=\"text\" pInputText placeholder=\"Username\" style=\"border-left:0\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Editor</h1>\n            <p-editor [style]=\"{'height':'320px'}\"></p-editor>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-col-nopad\">\n        <div class=\"p-grid\">\n            <div class=\"p-col-12 p-lg-6\" style=\"padding-top:0\">\n                <div class=\"card card-w-title\">\n                    <h1>Buttons</h1>\n\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-12\">ToggleButton</div>\n                        <div class=\"p-col-12\">\n                            <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                        </div>\n\n                        <div class=\"p-col-12\">SelectButton</div>\n                        <div class=\"p-col-12\">\n                            <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                        </div>\n\n                        <div class=\"p-col-12\">Button</div>\n                        <div class=\"p-col-12\">\n                            <button type=\"button\" label=\"Bookmark\" icon=\"pi pi-star\" pButton></button>\n                        </div>\n\n                        <div class=\"p-col-12\">Left Icon</div>\n                        <div class=\"p-col-12\">\n                            <button type=\"button\" label=\"Clear\" pButton icon=\"pi pi-star\"></button>\n                        </div>\n\n                        <div class=\"p-col-12\">Right Icon</div>\n                        <div class=\"p-col-12\">\n                            <button type=\"button\" label=\"Clear\" pButton icon=\"pi pi-star\" iconPos=\"right\"></button>\n                        </div>\n\n                        <div class=\"p-col-12\">Icon Only</div>\n                        <div class=\"p-col-12\">\n                            <button type=\"button\" icon=\"pi pi-star\" pButton></button>\n                        </div>\n\n                        <div class=\"p-col-12\">Link</div>\n                        <div class=\"p-col-12\">\n                            <a href=\"http://www.primefaces.org\" target=\"_blank\">Homepage</a>\n                        </div>\n\n                        <div class=\"p-col-12\">SplitButton</div>\n                        <div class=\"p-col-12\">\n                            <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"splitButtonItems\"></p-splitButton>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-col-12 p-lg-6\" style=\"padding-top:0\">\n                <div class=\"card\">\n                    <h1>Buttons</h1>\n                    <p>Raised and Flat buttons with various severities.</p>\n                    <div class=\"p-grid\">\n                        <div class=\"p-col-12 p-md-4\" style=\"text-align:center\">\n                            <button pButton type=\"button\" label=\"Primary\" style=\"margin-bottom:10px\"></button>\n\n                            <button pButton type=\"button\" label=\"Secondary\" style=\"margin-bottom:10px\" class=\"ui-button-secondary\"></button>\n\n                            <button pButton type=\"button\" label=\"Success\" style=\"margin-bottom:10px\" class=\"ui-button-success\"></button>\n\n                            <button pButton type=\"button\" label=\"Info\" style=\"margin-bottom:10px\" class=\"ui-button-info\"></button>\n\n                            <button pButton type=\"button\" label=\"Warning\" style=\"margin-bottom:10px\" class=\"ui-button-warning\"></button>\n\n                            <button pButton type=\"button\" label=\"Danger\" style=\"margin-bottom:10px\" class=\"ui-button-danger\"></button>\n                        </div>\n\n                        <div class=\"p-col-12 p-md-4\" style=\"text-align:center\">\n                            <button pButton type=\"button\" label=\"Primary\" style=\"margin-bottom:10px\" class=\"ui-button-raised\"></button>\n\n                            <button pButton type=\"button\" label=\"Secondary\" style=\"margin-bottom:10px\" class=\"ui-button-secondary ui-button-raised\"></button>\n\n                            <button pButton type=\"button\" label=\"Success\" style=\"margin-bottom:10px\" class=\"ui-button-success ui-button-raised\"></button>\n\n                            <button pButton type=\"button\" label=\"Info\" style=\"margin-bottom:10px\" class=\"ui-button-info ui-button-raised\"></button>\n\n                            <button pButton type=\"button\" label=\"Warning\" style=\"margin-bottom:10px\" class=\"ui-button-warning ui-button-raised\"></button>\n\n                            <button pButton type=\"button\" label=\"Danger\" style=\"margin-bottom:10px\" class=\"ui-button-danger ui-button-raised\"></button>\n                        </div>\n\n                        <div class=\"p-col-12 p-md-4\" style=\"text-align:center\">\n                            <button pButton type=\"button\" label=\"Primary\" style=\"margin-bottom:10px\" class=\"ui-button-rounded\"></button>\n\n                            <button pButton type=\"button\" label=\"Secondary\" style=\"margin-bottom:10px\" class=\"ui-button-secondary ui-button-rounded\"></button>\n\n                            <button pButton type=\"button\" label=\"Success\" style=\"margin-bottom:10px\" class=\"ui-button-success ui-button-rounded\"></button>\n\n                            <button pButton type=\"button\" label=\"Info\" style=\"margin-bottom:10px\" class=\"ui-button-info ui-button-rounded\"></button>\n\n                            <button pButton type=\"button\" label=\"Warning\" style=\"margin-bottom:10px\" class=\"ui-button-warning ui-button-rounded\"></button>\n\n                            <button pButton type=\"button\" label=\"Danger\" style=\"margin-bottom:10px\" class=\"ui-button-danger ui-button-rounded\"></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/menusdemo.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/menusdemo.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewMenusdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid ui-fluid\">\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Breadcrumb</h1>\n            <p-breadcrumb [model]=\"breadcrumbItems\" [home]=\"{icon: 'pi pi-home'}\"></p-breadcrumb>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Steps</h1>\n            <p-steps [model]=\"stepsItems\" [activeIndex]=\"1\"></p-steps>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>MenuBar</h1>\n            <p-menubar [model]=\"tieredItems\"></p-menubar>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n        <!-- Left Colum -->\n        <div class=\"card card-w-title\">\n            <h1>Plain Menu</h1>\n            <p-menu #menu [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n\n            <p-menu #menu popup=\"popup\" [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n            <button type=\"button\" pButton icon=\"pi pi-external-link\" label=\"Show\" (click)=\"menu.toggle($event)\" style=\"margin-top:20px;width:auto\"></button>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>TieredMenu</h1>\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'250px','margin-bottom':'20px'}\"></p-tieredMenu>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <!-- Right Colum -->\n        <div class=\"card card-w-title\">\n            <h1 style=\"margin-top:40px\">ContextMenu</h1>\n            Right click!\n\n            <p-contextMenu [global]=\"true\" [model]=\"tieredItems\" [style]=\"{'width':'12.5em'}\"></p-contextMenu>\n        </div>\n\n        <div class=\"card\">\n            <h1>SlideMenu</h1>\n            <p-slideMenu [model]=\"items\" [style]=\"{'width':'260px'}\" [menuWidth]=\"260\"></p-slideMenu>\n        </div>\n\n        <div class=\"card\">\n            <h1>PanelMenu</h1>\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-col-6\">\n        <div class=\"card\">\n            <h1>MegaMenu - Horizontal</h1>\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\n\n            <h1>MegaMenu - Vertical</h1>\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-col-6\">\n        <div class=\"card\">\n            <h1>TabMenu</h1>\n            <p-tabMenu [model]=\"tabMenuItems\" [activeItem]=\"tabMenuItems[3]\"></p-tabMenu>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/messagesdemo.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/messagesdemo.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewMessagesdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card no-margin\">\n            <h1>Toast</h1>\n            <p-toast key=\"tst\"></p-toast>\n\n            <button type=\"button\" pButton (click)=\"showInfoViaToast()\" label=\"Info\" class=\"ui-button-info\"></button>\n            <button type=\"button\" pButton (click)=\"showSuccessViaToast()\" label=\"Success\" class=\"ui-button-success\"></button>\n            <button type=\"button\" pButton (click)=\"showWarnViaToast()\" label=\"Warn\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" pButton (click)=\"showErrorViaToast()\" label=\"Error\" class=\"ui-button-danger\"></button>\n            <button type=\"button\" pButton (click)=\"showMultipleViaToast()\" label=\"Multiple\"></button>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card no-margin\">\n            <h1>Messages</h1>\n            <button type=\"button\" pButton (click)=\"showInfoViaMessages()\" label=\"Info\" class=\"ui-button-info\"></button>\n            <button type=\"button\" pButton (click)=\"showSuccessViaMessages()\" label=\"Success\" class=\"ui-button-success\"></button>\n            <button type=\"button\" pButton (click)=\"showWarnViaMessages()\" label=\"Warn\" class=\"ui-button-warning\"></button>\n            <button type=\"button\" pButton (click)=\"showErrorViaMessages()\" label=\"Error\" class=\"ui-button-danger\"></button>\n            <button type=\"button\" pButton (click)=\"showMultipleViaMessages()\" label=\"Multiple\"></button>\n\n            <p-messages [value]=\"msgs\"></p-messages>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card no-margin\">\n            <h1>Inline Message</h1>\n            <div>\n                <p-message severity=\"info\" text=\"PrimeNG Rocks\" [style]=\"{marginLeft: 0}\"></p-message>\n                <p-message severity=\"success\" text=\"Record Saved\"></p-message>\n                <p-message severity=\"warn\" text=\"Are you sure?\"></p-message>\n                <p-message severity=\"error\" text=\"Field is required\"></p-message>\n            </div>\n\n            <div style=\"margin-top:30px\">\n                <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\">\n                <p-message severity=\"error\" text=\"Field is required\"></p-message>\n            </div>\n\n            <div style=\"margin-top:30px\">\n                <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\">\n                <p-message severity=\"error\"></p-message>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/miscdemo.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/miscdemo.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewMiscdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h1>ProgressBar</h1>\n            <p-progressBar [value]=\"value\" [showValue]=\"false\"></p-progressBar>\n        </div>\n        <div class=\"card\">\n            <h1>Terminal</h1>\n            <p-terminal [response]=\"response\" welcomeMessage=\"Welcome to Roma\" prompt=\"primeng $\"></p-terminal>\n        </div>\n    </div>\n    <div class=\"p-col-12 p-lg-6\">\n        <div class=\"card\">\n            <h1>Galleria</h1>\n            <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/overlaysdemo.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/overlaysdemo.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewOverlaysdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid ui-fluid\">\n    <div class=\"p-col-12 p-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card\">\n            <h1>Overlay Panel</h1>\n            <div class=\"p-grid\">\n                <div class=\"p-col-6\">\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\"></button>\n                    <p-overlayPanel #op1>\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\n                    </p-overlayPanel>\n                </div>\n                <div class=\"p-col-6\">\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\"></button>\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\">\n                        <p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\" [style]=\"{'width':'500px'}\">\n                            <ng-template pTemplate=\"header\" let-columns>\n                                <tr>\n                                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                        {{col.header}}\n                                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                                <tr [pSelectableRow]=\"rowData\">\n                                    <td *ngFor=\"let col of columns\">\n                                        {{rowData[col.field]}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                    </p-overlayPanel>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"card\">\n            <h1>Dialog</h1>\n            <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '400px'}\">\n                <div style=\"line-height: 1.5\">The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.\n                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's\n                    business. Through Michael's life the nature of the family business becomes clear. The business of the\n                    family is just like the head of the family, kind and benevolent to those who give respect, but given\n                    to ruthless violence whenever anything stands against the good of the family.</div>\n                <p-footer>\n                    <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\"></button>\n                    <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display=false\" label=\"No\" class=\"ui-button-secondary\"></button>\n                </p-footer>\n            </p-dialog>\n\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"pi pi-external-link\" label=\"Show\"></button>\n        </div>\n\n        <div class=\"card\">\n            <h1>Confirm Dialog</h1>\n            <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-info\" [style]=\"{width: '425px'}\"></p-confirmDialog>\n\n            <button type=\"text\" (click)=\"confirm()\" pButton icon=\"pi pi-check\" label=\"Confirm\"></button>\n        </div>\n    </div>\n\n    <div class=\"p-col-12 p-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card\">\n            <h1>LightBox</h1>\n            <p-lightbox [images]=\"images\"></p-lightbox>\n        </div>\n\n        <div class=\"card\">\n            <h1>Tooltip</h1>\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\">\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/panelsdemo.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/panelsdemo.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewPanelsdemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid\">\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>AccordionPanel</h1>\n            <p-accordion>\n                <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son\n                    ichael has just come home from the war, but does not intend to become part of his father's business.\n                    T hrough Michael's life the nature of the family business becomes clear. The business of the family is\n                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless\n                    violence whenever anything stands against the good of the family.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather II\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito\n                    Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark\n                    side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America\n                    after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his\n                    wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary\n                    cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather III\">\n                    After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third\n                    and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael\n                    Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family\n                    would one day be completely legitimate.\n                </p-accordionTab>\n            </p-accordion>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Panel</h1>\n            <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family.\n            </p-panel>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>TabView</h1>\n            <p-tabView>\n                <p-tabPanel header=\"Godfather I\" leftIcon=\"pi pi-check\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son\n                    ichael has just come home from the war, but does not intend to become part of his father's business.\n                    T hrough Michael's life the nature of the family business becomes clear. The business of the family is\n                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless\n                    violence whenever anything stands against the good of the family.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather II\" leftIcon=\"pi pi-user\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito\n                    Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark\n                    side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America\n                    after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his\n                    wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary\n                    cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-mobile\">\n                    After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third\n                    and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael\n                    Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family\n                    would one day be completely legitimate.\n                </p-tabPanel>\n            </p-tabView>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Fieldset</h1>\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family.\n            </p-fieldset>\n        </div>\n    </div>\n\n    <div class=\"p-col-12\">\n        <div class=\"card card-w-title\">\n            <h1>Toolbar</h1>\n            <p-toolbar>\n                <div class=\"ui-toolbar-group-left\">\n                    <button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"></button>\n                    <button pButton type=\"button\" label=\"Update\" class=\"ui-button-info\" icon=\"pi pi-refresh\"></button>\n\n                    <i class=\"pi pi-bars ui-toolbar-separator\"></i>\n\n                    <button pButton type=\"button\" class=\"ui-button-success\" icon=\"pi pi-check\"></button>\n                    <button pButton type=\"button\" class=\"ui-button-warning\" icon=\"pi pi-print\"></button>\n                    <button pButton type=\"button\" class=\"ui-button-danger\" icon=\"pi pi-trash\"></button>\n                </div>\n\n                <div class=\"ui-toolbar-group-right\">\n                    <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>\n                </div>\n            </p-toolbar>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/sampledemo.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/sampledemo.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDemoViewSampledemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui-fluid\">\n    <div class=\"p-grid\">\n        <div class=\"p-col-12\">\n            <div class=\"ui-messages ui-widget ui-corner-all ui-messages-success\" style=\"margin: 0 0 1em 0\">\n                <span class=\"ui-messages-icon pi pi-fw pi-2x pi-check\"></span>\n                <ul>\n                    <li>\n                        <span class=\"ui-messages-summary\" style=\"font-size:16px\">Roma provides a theme for all 80+ PrimeNG Components. This page contains samples of the commonly\n                            used components for demo purposes.</span>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"card no-margin\">\n                <h1>Form Elements</h1>\n                <div class=\"p-grid form-group\">\n                    <div class=\"p-col-12 p-md-6\">\n                        <div class=\"p-grid\">\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"input\">Input</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <input id=\"input\" type=\"text\" pInputText/>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"textarea\">Textarea</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <textarea id=\"textarea\" [rows]=\"3\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"calendar\">Calendar</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-calendar id=\"calendar\"></p-calendar>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"autocomplete\">AutoComplete</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-autoComplete id=\"autocomplete\" [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\"\n                                    placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"dropdown\">Dropdown</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-dropdown id=\"dropdown\" [options]=\"cities1\" [(ngModel)]=\"selectedCity1\"></p-dropdown>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"password\">Password</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <input id=\"password\" pPassword type=\"password\" [feedback]=\"false\" />\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                Button\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <button pButton type=\"button\" label=\"Edit\" icon=\"pi pi-pencil\"></button>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                SplitButton\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-splitButton label=\"Save\" icon=\"pi pi-save\" [model]=\"splitButtonItems\"></p-splitButton>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"multiselect\">MultiSelect</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-multiSelect id=\"multiselect\" [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"slider\">Slider</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\" style=\"padding-top:1em\">\n                                <p-slider id=\"slider\"></p-slider>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-col-12 p-md-6\">\n                        <div class=\"p-grid\">\n                            <div class=\"p-col-12 p-md-4\">\n                            Checkbox\n                        </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <div class=\"p-grid\">\n                                    <div class=\"p-col-12 p-md-4\">\n                                        <p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox>\n                                    </div>\n                                    <div class=\"p-col-12 p-md-4\">\n                                        <p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox>\n                                    </div>\n                                    <div class=\"p-col-12 p-md-4\">\n                                        <p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                RadioButton\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <div class=\"p-grid\">\n                                    <div class=\"p-col-12 p-md-4\">\n                                        <p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton>\n                                    </div>\n                                    <div class=\"p-col-12 p-md-4\">\n                                        <p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton>\n                                    </div>\n                                    <div class=\"p-col-12 p-md-4\">\n                                        <p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"mask\">Mask</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-inputMask id=\"mask\" mask=\"99/99/9999\" slotChar=\"dd/mm/yyyy\" placeholder=\"Date\"></p-inputMask>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"spinner\">Spinner</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-spinner id=\"spinner\"></p-spinner>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                ToggleButton\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                SelectButton\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                Dialog\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <button type=\"button\" label=\"Login\" icon=\"pi pi-external-link\" (click)=\"dialogVisible=true\" pButton></button>\n                            </div>\n\n                            <div class=\"p-col-12 p-md-4\">\n                                <label for=\"listbox\">Listbox</label>\n                            </div>\n                            <div class=\"p-col-12 p-md-8\">\n                                <p-listbox id=\"listbox\" [options]=\"cities2\" [(ngModel)]=\"selectedCity2\"></p-listbox>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <p-dialog header=\"Login\" [resizable]=\"false\" responsive=\"true\" [(visible)]=\"dialogVisible\">\n                    <div class=\"p-grid form-group\" style=\"margin-bottom: 16px;\">\n                        <div class=\"p-col-12\">\n                            <input type=\"text\" pInputText placeholder=\"Name\">\n                        </div>\n                        <div class=\"p-col-12\">\n                            <input type=\"password\" pInputText placeholder=\"Password\">\n                        </div>\n                    </div>\n\n                    <p-footer>\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                            <button type=\"button\" label=\"Login\" icon=\"pi pi-user\" (click)=\"dialogVisible=false\" pButton></button>\n                        </div>\n                    </p-footer>\n                </p-dialog>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Table</h1>\n                <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" dataKey=\"vin\" [style]=\"{'margin-bottom':'20px'}\" [(selection)]=\"selectedCar3\" styleClass=\"ui-table-borderless\"\n                    [responsive]=\"true\">\n                    <ng-template pTemplate=\"header\" let-columns>\n                        <tr>\n                            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                                {{col.header}}\n                                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                        <tr [pSelectableRow]=\"rowData\">\n                            <td *ngFor=\"let col of columns\">\n                                <span class=\"ui-column-title\">{{col.header}}</span>\n                                {{rowData[col.field]}}\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n        </div>\n\n        <div class=\"p-col-12 p-lg-6\">\n            <!-- Left Side -->\n            <div class=\"card card-w-title\">\n                <h1>DataView</h1>\n                <p-dataView #dv [value]=\"carsLarge\" [paginator]=\"true\" [rows]=\"10\" paginatorPosition=\"both\" filterBy=\"brand\">\n                    <p-header>\n                        <div class=\"ui-helper-clearfix\">\n                            <div class=\"p-grid\">\n                                <div class=\"p-col-12 p-md-6\">\n                                    <div style=\"position:relative\">\n                                        <input type=\"search\" pInputText placeholder=\"Search by brand\" (keyup)=\"dv.filter($event.target.value)\">\n                                    </div>\n                                </div>\n                                <div class=\"p-col-12 p-md-6\" style=\"text-align:right\">\n                                    <p-dataViewLayoutOptions></p-dataViewLayoutOptions>\n                                </div>\n                            </div>\n                        </div>\n                    </p-header>\n                    <ng-template let-car pTemplate=\"listItem\">\n                        <div class=\"p-grid\" style=\"padding: 2em;border-bottom: 1px solid #d9d9d9\">\n                            <div class=\"p-col-12 p-md-3\" style=\"text-align:center\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.png\">\n                            </div>\n                            <div class=\"p-col-12 p-md-8 car-details\">\n                                <div class=\"p-grid\">\n                                    <div class=\"p-col-2 p-sm-6\">Vin: </div>\n                                    <div class=\"p-col-10 p-sm-6\">\n                                        <b>{{car.vin}}</b>\n                                    </div>\n\n                                    <div class=\"p-col-2 p-sm-6\">Year: </div>\n                                    <div class=\"p-col-10 p-sm-6\">\n                                        <b>{{car.year}}</b>\n                                    </div>\n\n                                    <div class=\"p-col-2 p-sm-6\">Brand: </div>\n                                    <div class=\"p-col-10 p-sm-6\">\n                                        <b>{{car.brand}}</b>\n                                    </div>\n\n                                    <div class=\"p-col-2 p-sm-6\">Color: </div>\n                                    <div class=\"p-col-10 p-sm-6\">\n                                        <b>{{car.color}}</b>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"p-col-12 p-md-1 search-icon\">\n                                <button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectCar($event, car)\"></button>\n                            </div>\n                        </div>\n                    </ng-template>\n                    <ng-template let-car pTemplate=\"gridItem\">\n                        <div style=\"padding:.5em\" class=\"p-col-12 p-md-3\">\n                            <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.png\">\n                                <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                                <hr class=\"ui-widget-content\" style=\"border-top:0\">\n                                <button pButton type=\"button\" icon=\"pi pi-search\" (click)=\"selectCar($event, car)\" style=\"margin-top:0\"></button>\n                            </p-panel>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </div>\n        </div>\n        <div class=\"p-col-12 p-lg-6\">\n            <!-- Right Side -->\n            <div class=\"card card-w-title\">\n                <h1>PickList</h1>\n                <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <span>{{car.brand}}</span>\n                    </ng-template>\n                </p-pickList>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>OrderList</h1>\n                <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-helper-clearfix\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px; width: 50px;\" />\n                            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-orderList>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Accordion Panel</h1>\n                <p-accordion>\n                    <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son\n                        ichael has just come home from the war, but does not intend to become part of his father's business.\n                        T hrough Michael's life the nature of the family business becomes clear. The business of the family\n                        is just like the head of the family, kind and benevolent to those who give respect, but given to\n                        ruthless violence whenever anything stands against the good of the family.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather II\">\n                        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito\n                        Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the\n                        dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for\n                        America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally,\n                        for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands\n                        his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather III\">\n                        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third\n                        and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin\n                        Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n                        his family would one day be completely legitimate.\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Panel</h1>\n                <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business.\n                    Through Michael's life the nature of the family business becomes clear. The business of the family is\n                    just like the head of the family, kind and benevolent to those who give respect, but given to ruthless\n                    violence whenever anything stands against the good of the family.\n                </p-panel>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>ProgressBar - Static Display</h1>\n                <p-progressBar [value]=\"50\"></p-progressBar>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Tree</h1>\n                <p-tree [value]=\"filesTree\"></p-tree>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>Menu</h1>\n                <p-menu [model]=\"menuItems\" [style]=\"{'width':'100%'}\"></p-menu>\n            </div>\n\n            <div class=\"card card-w-title\">\n                <h1>PanelMenu</h1>\n                <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n            </div>\n        </div>\n\n        <div class=\"p-col-12\">\n            <div class=\"card card-w-title\">\n                <h1>Carousel</h1>\n                <p-carousel [value]=\"carouselCars\" [numVisible]=\"4\" [numScroll]=\"3\" [circular]=\"false\" [responsiveOptions]=\"responsiveOptions\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"car-details\">\n                            <div class=\"p-grid p-nogutter\">\n                                <div class=\"p-col-12\">\n                                    <img src=\"assets/demo/images/car/{{car.brand}}.png\" />\n                                </div>\n                                <div class=\"p-col-12 car-data\">\n                                    <div class=\"car-title\">{{car.brand}}</div>\n                                    <div class=\"car-subtitle\">{{car.year}} | {{car.color}}</div>\n\n                                    <div class=\"car-buttons\">\n                                        <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-search\"></button>\n                                        <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-star\"></button>\n                                        <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"pi pi-cog\"></button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.accessdenied.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.accessdenied.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppAccessdeniedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"exception-body accessdenied\">\n    <div class=\"exception-panel\">\n            <div class=\"exception-content\">\n            <img src=\"assets/layout/images/pages/icon-access.svg\">\n                <h1>Access Denied</h1>\n                <p>You do not have the necessary permissons.</p>\n                <button [routerLink]=\"['/']\" type=\"button\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\">\n                    <span class=\"ui-button-text ui-c\">Go to Dashboard</span>\n                </button>\n            </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.error.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.error.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"exception-body error\">\n    <div class=\"exception-panel\">\n            <div class=\"exception-content\">\n                <img src=\"assets/layout/images/pages/icon-error.svg\">\n                <h1>Error Occured</h1>\n                <p>Something went wrong.</p>\n                <button type=\"button\" [routerLink]=\"['/']\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\">\n                    <span class=\"ui-button-text ui-c\">Go to Dashboard</span>\n                </button>\n            </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.login.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.login.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-body\">\n        <div class=\"card login-panel ui-fluid\">\n            <div class=\"login-panel-content\">\n                <div class=\"p-grid\">\n                    <div class=\"p-col-12 p-sm-6 p-md-6 logo-container\">\n                        <img src=\"assets/layout/images/logo-roma.svg\" />\n                        <span class=\"guest-sign-in\">Welcome, please use the form to sign-in Roma network</span>\n                    </div>\n                    <div class=\"p-col-12 username-container\">\n                        <!-- <h:panelGroup> -->\n                            <label>User Name</label>\n                            <div class=\"login-input\">\n                                <input id=\"input\" type=\"text\" pInputText> \n                            </div>\n                        <!-- </h:panelGroup> -->\n                    </div>\n                    <div class=\"p-col-12 password-container\">\n                        <!-- <h:panelGroup> -->\n                            <label>Password</label>\n                            <div class=\"login-input\">\n                                <input pPassword type=\"password\" />\n                            </div>\n                        <!-- </h:panelGroup> -->\n                    </div>\n                    <div class=\"p-col-12 p-sm-6 p-md-6 rememberme-container\">\n                        <p-checkbox></p-checkbox>\n                        <label> Remember me</label>\n                    </div>\n    \n                    <div class=\"p-col-12 p-sm-6 p-md-6 forgetpassword-container\">\n                        <a href=\"#\" class=\"forget-password\">Forget Password</a>\n                    </div>\n    \n                    <div class=\"p-col-12 p-sm-6 p-md-6\">\n                            <button [routerLink]=\"['/']\"  pButton type=\"button\" icon=\"pi pi-user\" label=\"Sign In\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.notfound.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.notfound.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppNotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"exception-body notfound\">\n    <div class=\"exception-panel\">\n        <div class=\"exception-content\">\n            <img src=\"assets/layout/images/pages/icon-404.svg\">\n            <h1>Page Not Found</h1>\n            <p>Requested resource is not available.</p>\n            <button type=\"button\" [routerLink]=\"['/']\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only\" role=\"button\" aria-disabled=\"false\">\n                <span class=\"ui-button-text ui-c\">Go to Home Page</span>\n            </button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/staticpages/home.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/staticpages/home.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStaticpagesHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-grid ui-fluid home-page\">\n  <div class=\"p-col-12 p-xl-8\">\n    <div class=\"p-grid\">\n      <div class=\"p-col-12\">\n        <img src=\"assets/images/stripb.jpg\" width=\"100%\">\n      </div>\n      <div class=\"p-col-12 p-xl-5\">\n        <p class=\"page-text\">\n          Each year, some 4,000 people who have\n          experienced persecution or other serious human rights abuses settle in New South\n          Wales. Common refugee experiences include torture, war or civil unrest, the loss\n          of family and friends through violence, and prolonged periods of deprivation.\n          These experiences can have major implications on health status and the delivery\n          of health care.<br><br>\n          The NSW Refugee Health Service was set up by the NSW Department of Health in\n          1999 to help meet some of these challenges. We aim to promote the health of\n          people from a refugee background living in NSW by assisting refugees, and the\n          health professionals who work with them.\n        </p>\n      </div>\n      <div class=\"p-col-12 p-xl-7\">\n        <p-carousel [value]=\"pics\" styleClass=\"custom-carousel\" [numVisible]=\"1\" [numScroll]=\"1\" [circular]=\"true\"\n          [autoplayInterval]=\"3000\" [responsiveOptions]=\"responsiveOptions\">\n          <!-- <p-header>\n            <h3>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h3>\n          </p-header> -->\n          <ng-template let-pics pTemplate=\"item\">\n            <div class=\"carousel-details\">\n              <div class=\"p-grid p-nogutter\">\n                <div class=\"p-col-12\">\n                  <img src=\"assets/images/{{pics}}\" width=\"100%\" />\n                </div>\n              </div>\n            </div>\n          </ng-template>\n        </p-carousel>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.config.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.config.component.ts ***!
    \*****************************************/

  /*! exports provided: AppConfigComponent */

  /***/
  function srcAppAppConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function () {
      return AppConfigComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");

    var AppConfigComponent =
    /*#__PURE__*/
    function () {
      function AppConfigComponent(app) {
        _classCallCheck(this, AppConfigComponent);

        this.app = app;
        this.themeColor = 'blue';
      }

      _createClass(AppConfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.topbarColors = [{
            label: 'layout-topbar-light',
            logo: 'logo-roma',
            image: 'light.png'
          }, {
            label: 'layout-topbar-dark',
            logo: 'logo-roma-white',
            image: 'dark.png'
          }, {
            label: 'layout-topbar-blue',
            logo: 'logo-roma-white',
            image: 'blue.png'
          }, {
            label: 'layout-topbar-green',
            logo: 'logo-roma-white',
            image: 'green.png'
          }, {
            label: 'layout-topbar-orange',
            logo: 'logo-roma-white',
            image: 'orange.png'
          }, {
            label: 'layout-topbar-magenta',
            logo: 'logo-roma-white',
            image: 'magenta.png'
          }, {
            label: 'layout-topbar-bluegrey',
            logo: 'logo-roma-white',
            image: 'bluegrey.png'
          }, {
            label: 'layout-topbar-deeppurple',
            logo: 'logo-roma-white',
            image: 'deeppurple.png'
          }, {
            label: 'layout-topbar-brown',
            logo: 'logo-roma-white',
            image: 'brown.png'
          }, {
            label: 'layout-topbar-lime',
            logo: 'logo-roma-white',
            image: 'lime.png'
          }, {
            label: 'layout-topbar-rose',
            logo: 'logo-roma-white',
            image: 'rose.png'
          }, {
            label: 'layout-topbar-cyan',
            logo: 'logo-roma-white',
            image: 'cyan.png'
          }, {
            label: 'layout-topbar-teal',
            logo: 'logo-roma-white',
            image: 'teal.png'
          }, {
            label: 'layout-topbar-deeporange',
            logo: 'logo-roma-white',
            image: 'deeporange.png'
          }, {
            label: 'layout-topbar-indigo',
            logo: 'logo-roma-white',
            image: 'indigo.png'
          }, {
            label: 'layout-topbar-pink',
            logo: 'logo-roma-white',
            image: 'pink.png'
          }, {
            label: 'layout-topbar-purple',
            logo: 'logo-roma-white',
            image: 'purple.png'
          }];
          this.themes = [{
            label: 'blue',
            image: 'blue.svg'
          }, {
            label: 'green',
            image: 'green.svg'
          }, {
            label: 'orange',
            image: 'orange.svg'
          }, {
            label: 'magenta',
            image: 'magenta.svg'
          }, {
            label: 'bluegrey',
            image: 'bluegrey.svg'
          }, {
            label: 'deeppurple',
            image: 'deeppurple.svg'
          }, {
            label: 'brown',
            image: 'brown.svg'
          }, {
            label: 'lime',
            image: 'lime.svg'
          }, {
            label: 'rose',
            image: 'rose.svg'
          }, {
            label: 'cyan',
            image: 'cyan.svg'
          }, {
            label: 'teal',
            image: 'teal.svg'
          }, {
            label: 'deeporange',
            image: 'deeporange.svg'
          }, {
            label: 'indigo',
            image: 'indigo.svg'
          }, {
            label: 'pink',
            image: 'pink.svg'
          }, {
            label: 'purple',
            image: 'purple.svg'
          }];
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.changeStyleSheetsColor('layout-css', 'layout-' + theme + '.css');
          this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
          this.themeColor = theme;
        }
      }, {
        key: "changeTopbarColor",
        value: function changeTopbarColor(topbarColor, logo) {
          this.app.topbarColor = topbarColor;
          var topbarLogoLink = document.getElementById('topbar-logo');
          topbarLogoLink.src = 'assets/layout/images/' + logo + '.svg';
        }
      }, {
        key: "changeStyleSheetsColor",
        value: function changeStyleSheetsColor(id, value) {
          var element = document.getElementById(id);
          var urlTokens = element.getAttribute('href').split('/');
          urlTokens[urlTokens.length - 1] = value;
          var newURL = urlTokens.join('/');
          this.replaceLink(element, newURL);
        }
      }, {
        key: "replaceLink",
        value: function replaceLink(linkElement, href) {
          if (this.isIE()) {
            linkElement.setAttribute('href', href);
          } else {
            var id = linkElement.getAttribute('id');
            var cloneLinkElement = linkElement.cloneNode(true);
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
            cloneLinkElement.addEventListener('load', function () {
              linkElement.remove();
              cloneLinkElement.setAttribute('id', id);
            });
          }
        }
      }, {
        key: "isIE",
        value: function isIE() {
          return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
        }
      }, {
        key: "onConfigButtonClick",
        value: function onConfigButtonClick(event) {
          this.app.configActive = !this.app.configActive;
          event.preventDefault();
        }
      }, {
        key: "onConfigCloseClick",
        value: function onConfigCloseClick(event) {
          this.app.configActive = false;
          event.preventDefault();
        }
      }]);

      return AppConfigComponent;
    }();

    AppConfigComponent.ctorParameters = function () {
      return [{
        type: _app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]
      }];
    };

    AppConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config',
      template: "\n        <div class=\"layout-config\" [ngClass]=\"{'layout-config-active': app.configActive}\" (click)=\"app.onConfigClick($event)\">\n            <div class=\"layout-config-content\">\n                <a style=\"cursor: pointer\" id=\"layout-config-button\" class=\"layout-config-button\" (click)=\"onConfigButtonClick($event)\">\n                    <i class=\"pi pi-cog\"></i>\n                </a>\n                <a style=\"cursor: pointer\" class=\"layout-config-close\" (click)=\"onConfigCloseClick($event)\">\n                    <i class=\"pi pi-times\"></i>\n                </a>\n                <p-tabView>\n                    <p-tabPanel header=\"Menu\">\n                        <h1>Menu Modes</h1>\n                        <div class=\"panel-items\">\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"app.menuMode = 'static'\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-static.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.menuMode === 'static'\"></i>\n                                </a>\n                                <span>Static</span>\n                            </div>\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"app.menuMode = 'overlay'\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-overlay.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.menuMode === 'overlay'\"></i>\n                                </a>\n                                <span>Overlay</span>\n                            </div>\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\"\n                                   (click)=\"app.menuMode = 'horizontal'; app.inlineUser = false; app.inlineUserMenuActive = false;\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-horizontal.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.menuMode === 'horizontal'\"></i>\n                                </a>\n                                <span>Horizontal</span>\n                            </div>\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"app.menuMode = 'slim'\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-slim.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.menuMode === 'slim'\"></i>\n                                </a>\n                                <span>Slim</span>\n                            </div>\n                        </div>\n                        <h1>Menu Colors</h1>\n                        <div class=\"panel-items\">\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"this.app.lightMenu = false\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-dark.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"!this.app.lightMenu\"></i>\n                                </a>\n                                <span>Dark</span>\n                            </div>\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"this.app.lightMenu = true\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-static.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.lightMenu\"></i>\n                                </a>\n                                <span>Light</span>\n                            </div>\n                        </div>\n                    </p-tabPanel>\n                    <p-tabPanel header=\"User Profile\">\n                        <div class=\"panel-items\">\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" [ngClass]=\"{'ui-state-disabled': app.isHorizontal()}\"\n                                   (click)=\"this.app.inlineUser = true\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-inline.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.inlineUser\"></i>\n                                </a>\n                                <span>Inline</span>\n                            </div>\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" [ngClass]=\"{'ui-state-disabled': app.isHorizontal()}\"\n                                   (click)=\"this.app.inlineUser = false\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-popup.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"!app.inlineUser\"></i>\n                                </a>\n                                <span>Overlay</span>\n                            </div>\n                        </div>\n                    </p-tabPanel>\n                    <p-tabPanel header=\"Orientation\">\n                        <div class=\"panel-items\">\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"this.app.isRTL = false\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-static.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"!app.isRTL\"></i>\n                                </a>\n                                <span>LTR</span>\n                            </div>\n                            <div class=\"panel-item\">\n                                <a style=\"cursor: pointer\" (click)=\"this.app.isRTL = true\">\n                                    <img src=\"assets/layout/images/configurator/menu/roma-rtl.png\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.isRTL\"></i>\n                                </a>\n                                <span>RTL</span>\n                            </div>\n                        </div>\n                    </p-tabPanel>\n                    <p-tabPanel header=\"Topbar\">\n                        <div class=\"panel-items\">\n                            <div class=\"panel-item\" *ngFor=\"let topbarColor of topbarColors\">\n                                <a style=\"cursor: pointer\" class=\"layout-config-option\"\n                                   (click)=\"changeTopbarColor(topbarColor.label, topbarColor.logo)\">\n                                    <img src=\"assets/layout/images/configurator/topbar/{{topbarColor.image}}\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"app.topbarColor === topbarColor.label\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </p-tabPanel>\n                    <p-tabPanel header=\"Themes\">\n                        <div class=\"panel-items\">\n                            <div class=\"panel-item\" *ngFor=\"let theme of themes\">\n                                <a style=\"cursor: pointer\" class=\"layout-config-option\" (click)=\"changeTheme(theme.label)\">\n                                    <img src=\"assets/layout/images/configurator/themes/{{theme.image}}\" alt=\"roma\"/>\n                                    <i class=\"pi pi-check\" *ngIf=\"themeColor === theme.label\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </p-tabPanel>\n                </p-tabView>\n            </div>\n        </div>\n    "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]])], AppConfigComponent);
    /***/
  },

  /***/
  "./src/app/app.footer.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.footer.component.ts ***!
    \*****************************************/

  /*! exports provided: AppFooterComponent */

  /***/
  function srcAppAppFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
      return AppFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppFooterComponent = function AppFooterComponent() {
      _classCallCheck(this, AppFooterComponent);
    };

    AppFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.footer.component.html")).default
    })], AppFooterComponent);
    /***/
  },

  /***/
  "./src/app/app.main.component.ts":
  /*!***************************************!*\
    !*** ./src/app/app.main.component.ts ***!
    \***************************************/

  /*! exports provided: AppMainComponent */

  /***/
  function srcAppAppMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMainComponent", function () {
      return AppMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.menu.service */
    "./src/app/app.menu.service.ts");

    var AppMainComponent =
    /*#__PURE__*/
    function () {
      function AppMainComponent(menuService) {
        _classCallCheck(this, AppMainComponent);

        this.menuService = menuService;
        this.menuMode = 'static';
        this.lightMenu = true;
        this.topbarColor = 'layout-topbar-pink';
        this.inlineUserMenuActive = false;
      }

      _createClass(AppMainComponent, [{
        key: "onLayoutClick",
        value: function onLayoutClick() {
          if (!this.userMenuClick) {
            this.topbarUserMenuActive = false;
          }

          if (!this.notificationMenuClick) {
            this.topbarNotificationMenuActive = false;
          }

          if (!this.rightMenuClick) {
            this.rightPanelMenuActive = false;
          }

          if (!this.profileClick && this.isSlim()) {
            this.inlineUserMenuActive = false;
          }

          if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
              this.menuService.reset();
            }

            if (this.overlayMenuActive || this.staticMenuMobileActive) {
              this.hideOverlayMenu();
            }

            this.menuHoverActive = false;
            this.unblockBodyScroll();
          }

          if (this.configActive && !this.configClick) {
            this.configActive = false;
          }

          this.configClick = false;
          this.userMenuClick = false;
          this.rightMenuClick = false;
          this.notificationMenuClick = false;
          this.menuClick = false;
          this.profileClick = false;
        }
      }, {
        key: "onMenuButtonClick",
        value: function onMenuButtonClick(event) {
          this.menuClick = true;
          this.topbarUserMenuActive = false;
          this.topbarNotificationMenuActive = false;
          this.rightPanelMenuActive = false;

          if (this.isOverlay()) {
            this.overlayMenuActive = !this.overlayMenuActive;
          }

          if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
          } else {
            this.staticMenuMobileActive = !this.staticMenuMobileActive;

            if (this.staticMenuMobileActive) {
              this.blockBodyScroll();
            } else {
              this.unblockBodyScroll();
            }
          }

          event.preventDefault();
        }
      }, {
        key: "onMenuClick",
        value: function onMenuClick($event) {
          this.menuClick = true;
          this.resetMenu = false;
        }
      }, {
        key: "onTopbarUserMenuButtonClick",
        value: function onTopbarUserMenuButtonClick(event) {
          this.userMenuClick = true;
          this.topbarUserMenuActive = !this.topbarUserMenuActive;
          this.hideOverlayMenu();
          event.preventDefault();
        }
      }, {
        key: "onTopbarNotificationMenuButtonClick",
        value: function onTopbarNotificationMenuButtonClick(event) {
          this.notificationMenuClick = true;
          this.topbarNotificationMenuActive = !this.topbarNotificationMenuActive;
          this.hideOverlayMenu();
          event.preventDefault();
        }
      }, {
        key: "onRightMenuClick",
        value: function onRightMenuClick(event) {
          this.rightMenuClick = true;
          this.rightPanelMenuActive = !this.rightPanelMenuActive;
          this.hideOverlayMenu();
          event.preventDefault();
        }
      }, {
        key: "onProfileClick",
        value: function onProfileClick(event) {
          this.profileClick = true;
          this.inlineUserMenuActive = !this.inlineUserMenuActive;
        }
      }, {
        key: "onTopbarSubItemClick",
        value: function onTopbarSubItemClick(event) {
          event.preventDefault();
        }
      }, {
        key: "onConfigClick",
        value: function onConfigClick(event) {
          this.configClick = true;
        }
      }, {
        key: "isHorizontal",
        value: function isHorizontal() {
          return this.menuMode === 'horizontal';
        }
      }, {
        key: "isSlim",
        value: function isSlim() {
          return this.menuMode === 'slim';
        }
      }, {
        key: "isOverlay",
        value: function isOverlay() {
          return this.menuMode === 'overlay';
        }
      }, {
        key: "isStatic",
        value: function isStatic() {
          return this.menuMode === 'static';
        }
      }, {
        key: "isMobile",
        value: function isMobile() {
          return window.innerWidth < 1025;
        }
      }, {
        key: "isDesktop",
        value: function isDesktop() {
          return window.innerWidth > 896;
        }
      }, {
        key: "isTablet",
        value: function isTablet() {
          var width = window.innerWidth;
          return width <= 1024 && width > 640;
        }
      }, {
        key: "hideOverlayMenu",
        value: function hideOverlayMenu() {
          this.overlayMenuActive = false;
          this.staticMenuMobileActive = false;
        }
      }, {
        key: "changeMenuMode",
        value: function changeMenuMode(menuMode) {
          this.menuMode = menuMode;
          this.staticMenuDesktopInactive = false;
          this.overlayMenuActive = false;
        }
      }, {
        key: "blockBodyScroll",
        value: function blockBodyScroll() {
          if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
          } else {
            document.body.className += ' blocked-scroll';
          }
        }
      }, {
        key: "unblockBodyScroll",
        value: function unblockBodyScroll() {
          if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
          } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }
      }]);

      return AppMainComponent;
    }();

    AppMainComponent.ctorParameters = function () {
      return [{
        type: _app_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }];
    };

    AppMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.main.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])], AppMainComponent);
    /***/
  },

  /***/
  "./src/app/app.menu.component.ts":
  /*!***************************************!*\
    !*** ./src/app/app.menu.component.ts ***!
    \***************************************/

  /*! exports provided: AppMenuComponent */

  /***/
  function srcAppAppMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function () {
      return AppMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");

    var AppMenuComponent =
    /*#__PURE__*/
    function () {
      function AppMenuComponent(app) {
        _classCallCheck(this, AppMenuComponent);

        this.app = app;
      }

      _createClass(AppMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.model = [{
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/']
          }, {
            label: 'About Us',
            icon: 'pi pi-fw pi-star',
            items: [{
              label: 'Purpose',
              icon: 'pi pi-arrow-right',
              routerLink: ['/about/purpose']
            }, {
              label: 'History',
              icon: 'pi pi-list',
              routerLink: ['/about/']
            }, {
              label: 'Achievement',
              icon: 'pi pi-check',
              routerLink: ['/about/']
            }, {
              label: 'Staff',
              icon: 'pi pi-users',
              routerLink: ['/about/']
            }, {
              label: 'Annual Summary',
              icon: 'pi pi-calendar',
              routerLink: ['/about/'],
              items: [{
                label: '2016/2017',
                icon: 'pi pi-calendar-plus',
                routerLink: ['/about/annualsummary']
              }, {
                label: '2018/2019',
                icon: 'pi pi-calendar-plus',
                routerLink: ['/about/annualsummary']
              }]
            }]
          }, {
            label: 'FAQs',
            icon: 'pi pi-question',
            routerLink: ['faqs']
          }, {
            label: 'Asylum Seeker Advocacy & GP Clinics',
            icon: 'pi pi-heart',
            routerLink: ['a']
          }, {
            label: 'Refugee Health Nurse Program',
            icon: 'pi pi-plus-circle',
            routerLink: ['a']
          }, {
            label: 'Disability Support Team',
            icon: 'pi pi-users',
            routerLink: ['a']
          }, {
            label: 'Communications Health Information',
            icon: 'pi pi-comment',
            routerLink: ['a']
          }, {
            label: 'Education & Training',
            icon: 'pi pi-pencil',
            routerLink: ['a']
          }, {
            label: 'Projects',
            icon: 'pi pi-cog',
            routerLink: ['a']
          }, {
            label: 'Resources',
            icon: 'pi pi-globe',
            routerLink: ['a']
          }, {
            label: 'GP Information',
            icon: 'pi pi-info-circle',
            routerLink: ['a']
          }, {
            label: 'Refugee Health Networks',
            icon: 'pi pi-plus-circle',
            routerLink: ['a']
          }, {
            label: 'Placements, Employment, Volunteering',
            icon: 'pi pi-user-edit',
            routerLink: ['a']
          }, {
            label: 'Links',
            icon: 'pi pi-share-alt',
            routerLink: ['a']
          }, {
            label: 'Contact Us',
            icon: 'pi pi-comments',
            routerLink: ['a']
          }];
          this.inlineModel = [{
            label: 'Profile',
            icon: 'pi pi-fw pi-user'
          }, {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog'
          }, {
            label: 'Messages',
            icon: 'pi pi-fw pi-envelope'
          }, {
            label: 'Notifications',
            icon: 'pi pi-fw pi-bell'
          }];
        }
      }, {
        key: "onMenuClick",
        value: function onMenuClick(event) {
          this.app.onMenuClick(event);
        }
      }]);

      return AppMenuComponent;
    }();

    AppMenuComponent.ctorParameters = function () {
      return [{
        type: _app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]
      }];
    };

    AppMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('inline', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0px',
        overflow: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '0px',
        overflow: 'hidden'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]])], AppMenuComponent);
    /***/
  },

  /***/
  "./src/app/app.menu.service.ts":
  /*!*************************************!*\
    !*** ./src/app/app.menu.service.ts ***!
    \*************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppAppMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MenuService =
    /*#__PURE__*/
    function () {
      function MenuService() {
        _classCallCheck(this, MenuService);

        this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.menuSource$ = this.menuSource.asObservable();
        this.resetSource$ = this.resetSource.asObservable();
      }

      _createClass(MenuService, [{
        key: "onMenuStateChange",
        value: function onMenuStateChange(key) {
          this.menuSource.next(key);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.resetSource.next();
        }
      }]);

      return MenuService;
    }();

    MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MenuService);
    /***/
  },

  /***/
  "./src/app/app.menuitem.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/app.menuitem.component.ts ***!
    \*******************************************/

  /*! exports provided: AppMenuitemComponent */

  /***/
  function srcAppAppMenuitemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppMenuitemComponent", function () {
      return AppMenuitemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.menu.service */
    "./src/app/app.menu.service.ts");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");

    var AppMenuitemComponent =
    /*#__PURE__*/
    function () {
      function AppMenuitemComponent(app, router, cd, menuService) {
        var _this = this;

        _classCallCheck(this, AppMenuitemComponent);

        this.app = app;
        this.router = router;
        this.cd = cd;
        this.menuService = menuService;
        this.active = false;
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(function (key) {
          // deactivate current active menu
          if (_this.active && _this.key !== key && key.indexOf(_this.key) !== 0) {
            _this.active = false;
          }
        });
        this.menuResetSubscription = this.menuService.resetSource$.subscribe(function () {
          _this.active = false;
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        })).subscribe(function (params) {
          if (_this.app.isHorizontal() || _this.app.isSlim()) {
            _this.active = false;
          } else {
            if (_this.item.routerLink) {
              _this.updateActiveStateFromRoute();
            } else {// Bug Fix - Uncommenting this will cause the menu with sub-menu to retract - MA
              //this.active = false;
            }
          }
        });
      }

      _createClass(AppMenuitemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!(this.app.isHorizontal() || this.app.isSlim()) && this.item.routerLink) {
            this.updateActiveStateFromRoute();
          }

          this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
        }
      }, {
        key: "updateActiveStateFromRoute",
        value: function updateActiveStateFromRoute() {
          this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
        }
      }, {
        key: "itemClick",
        value: function itemClick(event) {
          // avoid processing disabled items
          if (this.item.disabled) {
            event.preventDefault();
            return true;
          } // navigate with hover in horizontal mode


          if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
          } // notify other items


          this.menuService.onMenuStateChange(this.key); // execute command

          if (this.item.command) {
            this.item.command({
              originalEvent: event,
              item: this.item
            });
          } // toggle active state


          if (this.item.items) {
            this.active = !this.active;
          } else {
            // activate item
            this.active = true; // reset horizontal menu

            if (this.app.isHorizontal() || this.app.isSlim()) {
              this.menuService.reset();
              this.app.menuHoverActive = false;
            } //
            // Bug fix - menu overlay mode not reseting after click - MA
            //


            if (this.app.overlayMenuActive || this.app.staticMenuMobileActive) {
              this.app.hideOverlayMenu();
              this.app.unblockBodyScroll();
            }
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          // activate item on hover
          if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim()) && this.app.isDesktop()) {
            this.menuService.onMenuStateChange(this.key);
            this.active = true;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
          }

          if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
          }
        }
      }]);

      return AppMenuitemComponent;
    }();

    AppMenuitemComponent.ctorParameters = function () {
      return [{
        type: _app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _app_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AppMenuitemComponent.prototype, "item", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AppMenuitemComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AppMenuitemComponent.prototype, "root", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AppMenuitemComponent.prototype, "parentKey", void 0);
    AppMenuitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      /* tslint:disable:component-selector */
      selector: '[app-menuitem]',

      /* tslint:enable:component-selector */
      template: "\n\t\t<ng-container>\n\t\t\t<a [attr.href]=\"item.url\" (click)=\"itemClick($event)\" *ngIf=\"!item.routerLink || item.items\" (mouseenter)=\"onMouseEnter()\"\n\t\t\t   (keydown.enter)=\"itemClick($event)\"\n\t\t\t   [attr.target]=\"item.target\" [attr.tabindex]=\"0\">\n\t\t\t\t<i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n\t\t\t\t<span class=\"layout-menuitem-text\">{{item.label}}</span>\n\t\t\t\t<i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n\t\t\t</a>\n\t\t\t<a (click)=\"itemClick($event)\" (mouseenter)=\"onMouseEnter()\" *ngIf=\"item.routerLink && !item.items\"\n\t\t\t   [routerLink]=\"item.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n\t\t\t   [routerLinkActiveOptions]=\"{exact: true}\" [attr.target]=\"item.target\" [attr.tabindex]=\"0\">\n\t\t\t\t<i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n\t\t\t\t<span class=\"layout-menuitem-text\">{{item.label}}</span>\n\t\t\t\t<i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n\t\t\t</a>\n\t\t\t<div class=\"layout-menu-tooltip\">\n\t\t\t\t<div class=\"layout-menu-tooltip-arrow\"></div>\n\t\t\t\t<div class=\"layout-menu-tooltip-text\">{{item.label}}</div>\n\t\t\t</div>\n\t\t\t<ul *ngIf=\"item.items && active\"\n\t\t\t\t[@children]=\"((app.isHorizontal() || app.isSlim()) && root) ? (active ? 'visible' : 'hidden') :\n\t\t\t\t(active ? 'visibleAnimated' : 'hiddenAnimated')\">\n\t\t\t\t<ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"item.items\">\n\t\t\t\t\t<li app-menuitem [item]=\"child\" [index]=\"i\" [parentKey]=\"key\" [class]=\"child.badgeClass\"></li>\n\t\t\t\t</ng-template>\n\t\t\t</ul>\n\t\t</ng-container>\n    ",
      host: {
        '[class.active-menuitem]': 'active'
      },
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        height: '*',
        'z-index': 100
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        height: '0px',
        'z-index': '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visibleAnimated, visibleAnimated => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _app_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]])], AppMenuitemComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var primeng_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/accordion */
    "./node_modules/primeng/fesm2015/primeng-accordion.js");
    /* harmony import */


    var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/autocomplete */
    "./node_modules/primeng/fesm2015/primeng-autocomplete.js");
    /* harmony import */


    var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/breadcrumb */
    "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/fesm2015/primeng-calendar.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/fesm2015/primeng-card.js");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! primeng/carousel */
    "./node_modules/primeng/fesm2015/primeng-carousel.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/fesm2015/primeng-chart.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/chips */
    "./node_modules/primeng/fesm2015/primeng-chips.js");
    /* harmony import */


    var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/codehighlighter */
    "./node_modules/primeng/fesm2015/primeng-codehighlighter.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/colorpicker */
    "./node_modules/primeng/fesm2015/primeng-colorpicker.js");
    /* harmony import */


    var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/contextmenu */
    "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
    /* harmony import */


    var primeng_dataview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/dataview */
    "./node_modules/primeng/fesm2015/primeng-dataview.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_editor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! primeng/editor */
    "./node_modules/primeng/fesm2015/primeng-editor.js");
    /* harmony import */


    var primeng_fieldset__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! primeng/fieldset */
    "./node_modules/primeng/fesm2015/primeng-fieldset.js");
    /* harmony import */


    var primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! primeng/fileupload */
    "./node_modules/primeng/fesm2015/primeng-fileupload.js");
    /* harmony import */


    var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! primeng/fullcalendar */
    "./node_modules/primeng/fesm2015/primeng-fullcalendar.js");
    /* harmony import */


    var primeng_galleria__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! primeng/galleria */
    "./node_modules/primeng/fesm2015/primeng-galleria.js");
    /* harmony import */


    var primeng_inplace__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! primeng/inplace */
    "./node_modules/primeng/fesm2015/primeng-inplace.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/fesm2015/primeng-inputmask.js");
    /* harmony import */


    var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! primeng/inputswitch */
    "./node_modules/primeng/fesm2015/primeng-inputswitch.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_lightbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! primeng/lightbox */
    "./node_modules/primeng/fesm2015/primeng-lightbox.js");
    /* harmony import */


    var primeng_listbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! primeng/listbox */
    "./node_modules/primeng/fesm2015/primeng-listbox.js");
    /* harmony import */


    var primeng_megamenu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! primeng/megamenu */
    "./node_modules/primeng/fesm2015/primeng-megamenu.js");
    /* harmony import */


    var primeng_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! primeng/menu */
    "./node_modules/primeng/fesm2015/primeng-menu.js");
    /* harmony import */


    var primeng_menubar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! primeng/menubar */
    "./node_modules/primeng/fesm2015/primeng-menubar.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/fesm2015/primeng-message.js");
    /* harmony import */


    var primeng_multiselect__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! primeng/multiselect */
    "./node_modules/primeng/fesm2015/primeng-multiselect.js");
    /* harmony import */


    var primeng_orderlist__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! primeng/orderlist */
    "./node_modules/primeng/fesm2015/primeng-orderlist.js");
    /* harmony import */


    var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! primeng/organizationchart */
    "./node_modules/primeng/fesm2015/primeng-organizationchart.js");
    /* harmony import */


    var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! primeng/overlaypanel */
    "./node_modules/primeng/fesm2015/primeng-overlaypanel.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/fesm2015/primeng-paginator.js");
    /* harmony import */


    var primeng_panel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! primeng/panel */
    "./node_modules/primeng/fesm2015/primeng-panel.js");
    /* harmony import */


    var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! primeng/panelmenu */
    "./node_modules/primeng/fesm2015/primeng-panelmenu.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_picklist__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! primeng/picklist */
    "./node_modules/primeng/fesm2015/primeng-picklist.js");
    /* harmony import */


    var primeng_progressbar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! primeng/progressbar */
    "./node_modules/primeng/fesm2015/primeng-progressbar.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/fesm2015/primeng-radiobutton.js");
    /* harmony import */


    var primeng_rating__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! primeng/rating */
    "./node_modules/primeng/fesm2015/primeng-rating.js");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/fesm2015/primeng-scrollpanel.js");
    /* harmony import */


    var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! primeng/selectbutton */
    "./node_modules/primeng/fesm2015/primeng-selectbutton.js");
    /* harmony import */


    var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! primeng/slidemenu */
    "./node_modules/primeng/fesm2015/primeng-slidemenu.js");
    /* harmony import */


    var primeng_slider__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! primeng/slider */
    "./node_modules/primeng/fesm2015/primeng-slider.js");
    /* harmony import */


    var primeng_spinner__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! primeng/spinner */
    "./node_modules/primeng/fesm2015/primeng-spinner.js");
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! primeng/splitbutton */
    "./node_modules/primeng/fesm2015/primeng-splitbutton.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/fesm2015/primeng-steps.js");
    /* harmony import */


    var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! primeng/tabmenu */
    "./node_modules/primeng/fesm2015/primeng-tabmenu.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/fesm2015/primeng-tabview.js");
    /* harmony import */


    var primeng_terminal__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! primeng/terminal */
    "./node_modules/primeng/fesm2015/primeng-terminal.js");
    /* harmony import */


    var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! primeng/tieredmenu */
    "./node_modules/primeng/fesm2015/primeng-tieredmenu.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! primeng/togglebutton */
    "./node_modules/primeng/fesm2015/primeng-togglebutton.js");
    /* harmony import */


    var primeng_toolbar__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! primeng/toolbar */
    "./node_modules/primeng/fesm2015/primeng-toolbar.js");
    /* harmony import */


    var primeng_tooltip__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! primeng/tooltip */
    "./node_modules/primeng/fesm2015/primeng-tooltip.js");
    /* harmony import */


    var primeng_tree__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! primeng/tree */
    "./node_modules/primeng/fesm2015/primeng-tree.js");
    /* harmony import */


    var primeng_treetable__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! primeng/treetable */
    "./node_modules/primeng/fesm2015/primeng-treetable.js");
    /* harmony import */


    var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! primeng/virtualscroller */
    "./node_modules/primeng/fesm2015/primeng-virtualscroller.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");
    /* harmony import */


    var _app_config_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! ./app.config.component */
    "./src/app/app.config.component.ts");
    /* harmony import */


    var _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! ./pages/app.notfound.component */
    "./src/app/pages/app.notfound.component.ts");
    /* harmony import */


    var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! ./pages/app.error.component */
    "./src/app/pages/app.error.component.ts");
    /* harmony import */


    var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
    /*! ./pages/app.accessdenied.component */
    "./src/app/pages/app.accessdenied.component.ts");
    /* harmony import */


    var _pages_app_login_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
    /*! ./pages/app.login.component */
    "./src/app/pages/app.login.component.ts");
    /* harmony import */


    var _app_menu_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
    /*! ./app.menu.component */
    "./src/app/app.menu.component.ts");
    /* harmony import */


    var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
    /*! ./app.menuitem.component */
    "./src/app/app.menuitem.component.ts");
    /* harmony import */


    var _app_right_menu_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
    /*! ./app.right-menu.component */
    "./src/app/app.right-menu.component.ts");
    /* harmony import */


    var _app_topbar_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
    /*! ./app.topbar.component */
    "./src/app/app.topbar.component.ts");
    /* harmony import */


    var _app_footer_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
    /*! ./app.footer.component */
    "./src/app/app.footer.component.ts");
    /* harmony import */


    var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
    /*! ./demo/view/dashboarddemo.component */
    "./src/app/demo/view/dashboarddemo.component.ts");
    /* harmony import */


    var _demo_view_sampledemo_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
    /*! ./demo/view/sampledemo.component */
    "./src/app/demo/view/sampledemo.component.ts");
    /* harmony import */


    var _demo_view_formsdemo_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
    /*! ./demo/view/formsdemo.component */
    "./src/app/demo/view/formsdemo.component.ts");
    /* harmony import */


    var _demo_view_datademo_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
    /*! ./demo/view/datademo.component */
    "./src/app/demo/view/datademo.component.ts");
    /* harmony import */


    var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
    /*! ./demo/view/panelsdemo.component */
    "./src/app/demo/view/panelsdemo.component.ts");
    /* harmony import */


    var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
    /*! ./demo/view/overlaysdemo.component */
    "./src/app/demo/view/overlaysdemo.component.ts");
    /* harmony import */


    var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
    /*! ./demo/view/menusdemo.component */
    "./src/app/demo/view/menusdemo.component.ts");
    /* harmony import */


    var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
    /*! ./demo/view/messagesdemo.component */
    "./src/app/demo/view/messagesdemo.component.ts");
    /* harmony import */


    var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
    /*! ./demo/view/miscdemo.component */
    "./src/app/demo/view/miscdemo.component.ts");
    /* harmony import */


    var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
    /*! ./demo/view/emptydemo.component */
    "./src/app/demo/view/emptydemo.component.ts");
    /* harmony import */


    var _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
    /*! ./demo/view/chartsdemo.component */
    "./src/app/demo/view/chartsdemo.component.ts");
    /* harmony import */


    var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
    /*! ./demo/view/filedemo.component */
    "./src/app/demo/view/filedemo.component.ts");
    /* harmony import */


    var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
    /*! ./demo/view/documentation.component */
    "./src/app/demo/view/documentation.component.ts");
    /* harmony import */


    var _demo_service_carservice__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
    /*! ./demo/service/carservice */
    "./src/app/demo/service/carservice.ts");
    /* harmony import */


    var _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
    /*! ./demo/service/countryservice */
    "./src/app/demo/service/countryservice.ts");
    /* harmony import */


    var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
    /*! ./demo/service/eventservice */
    "./src/app/demo/service/eventservice.ts");
    /* harmony import */


    var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
    /*! ./demo/service/nodeservice */
    "./src/app/demo/service/nodeservice.ts");
    /* harmony import */


    var _app_menu_service__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
    /*! ./app.menu.service */
    "./src/app/app.menu.service.ts");
    /* harmony import */


    var _staticpages_home_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(
    /*! ./staticpages/home.component */
    "./src/app/staticpages/home.component.ts");
    /* harmony import */


    var _staticpages_purpose_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(
    /*! ./staticpages/purpose.component */
    "./src/app/staticpages/purpose.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutes"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutoCompleteModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModule"], primeng_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_15__["ChartModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_16__["CheckboxModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_17__["ChipsModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_18__["CodeHighlighterModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_20__["ColorPickerModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_21__["ContextMenuModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_22__["DataViewModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_23__["DialogModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__["DropdownModule"], primeng_editor__WEBPACK_IMPORTED_MODULE_25__["EditorModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_26__["FieldsetModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_28__["FullCalendarModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_29__["GalleriaModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_30__["InplaceModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_31__["InputMaskModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_32__["InputSwitchModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_33__["InputTextModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_34__["InputTextareaModule"], primeng_lightbox__WEBPACK_IMPORTED_MODULE_35__["LightboxModule"], primeng_listbox__WEBPACK_IMPORTED_MODULE_36__["ListboxModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_37__["MegaMenuModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_38__["MenuModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_39__["MenubarModule"], primeng_message__WEBPACK_IMPORTED_MODULE_41__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_40__["MessagesModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_42__["MultiSelectModule"], primeng_orderlist__WEBPACK_IMPORTED_MODULE_43__["OrderListModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_44__["OrganizationChartModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_45__["OverlayPanelModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_46__["PaginatorModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_47__["PanelModule"], primeng_panelmenu__WEBPACK_IMPORTED_MODULE_48__["PanelMenuModule"], primeng_password__WEBPACK_IMPORTED_MODULE_49__["PasswordModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_50__["PickListModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_51__["ProgressBarModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_52__["RadioButtonModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_53__["RatingModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_54__["ScrollPanelModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_55__["SelectButtonModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_56__["SlideMenuModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_57__["SliderModule"], primeng_spinner__WEBPACK_IMPORTED_MODULE_58__["SpinnerModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_59__["SplitButtonModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_60__["StepsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_62__["TableModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_61__["TabMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_63__["TabViewModule"], primeng_terminal__WEBPACK_IMPORTED_MODULE_64__["TerminalModule"], primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_65__["TieredMenuModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_66__["ToastModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_67__["ToggleButtonModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_68__["ToolbarModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_69__["TooltipModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_70__["TreeModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_71__["TreeTableModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_72__["VirtualScrollerModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_73__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_74__["AppMainComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_80__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_81__["AppMenuitemComponent"], _app_config_component__WEBPACK_IMPORTED_MODULE_75__["AppConfigComponent"], _app_right_menu_component__WEBPACK_IMPORTED_MODULE_82__["AppRightMenuComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_83__["AppTopBarComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_84__["AppFooterComponent"], _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_85__["DashboardDemoComponent"], _demo_view_sampledemo_component__WEBPACK_IMPORTED_MODULE_86__["SampleDemoComponent"], _demo_view_formsdemo_component__WEBPACK_IMPORTED_MODULE_87__["FormsDemoComponent"], _demo_view_datademo_component__WEBPACK_IMPORTED_MODULE_88__["DataDemoComponent"], _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_89__["PanelsDemoComponent"], _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_90__["OverlaysDemoComponent"], _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_91__["MenusDemoComponent"], _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_92__["MessagesDemoComponent"], _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_92__["MessagesDemoComponent"], _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_93__["MiscDemoComponent"], _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_95__["ChartsDemoComponent"], _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_94__["EmptyDemoComponent"], _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_96__["FileDemoComponent"], _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_97__["DocumentationComponent"], _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_76__["AppNotfoundComponent"], _pages_app_error_component__WEBPACK_IMPORTED_MODULE_77__["AppErrorComponent"], _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_78__["AppAccessdeniedComponent"], _pages_app_login_component__WEBPACK_IMPORTED_MODULE_79__["AppLoginComponent"], _staticpages_home_component__WEBPACK_IMPORTED_MODULE_103__["HomeComponent"], _staticpages_purpose_component__WEBPACK_IMPORTED_MODULE_104__["PurposeComponent"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"]
      }, _demo_service_carservice__WEBPACK_IMPORTED_MODULE_98__["CarService"], _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_99__["CountryService"], _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_100__["EventService"], _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_101__["NodeService"], _app_menu_service__WEBPACK_IMPORTED_MODULE_102__["MenuService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_73__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.right-menu.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/app.right-menu.component.ts ***!
    \*********************************************/

  /*! exports provided: AppRightMenuComponent */

  /***/
  function srcAppAppRightMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRightMenuComponent", function () {
      return AppRightMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");

    var AppRightMenuComponent =
    /*#__PURE__*/
    function () {
      function AppRightMenuComponent(app) {
        _classCallCheck(this, AppRightMenuComponent);

        this.app = app;
        this.statusActive = true;
      }

      _createClass(AppRightMenuComponent, [{
        key: "messagesClick",
        value: function messagesClick() {
          this.statusActive = false;
          this.messagesActive = true;
        }
      }, {
        key: "statusClick",
        value: function statusClick() {
          this.statusActive = true;
          this.messagesActive = false;
        }
      }]);

      return AppRightMenuComponent;
    }();

    AppRightMenuComponent.ctorParameters = function () {
      return [{
        type: _app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]
      }];
    };

    AppRightMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-right-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.right-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.right-menu.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]])], AppRightMenuComponent);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: routes, AppRoutes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _demo_view_sampledemo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./demo/view/sampledemo.component */
    "./src/app/demo/view/sampledemo.component.ts");
    /* harmony import */


    var _demo_view_formsdemo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./demo/view/formsdemo.component */
    "./src/app/demo/view/formsdemo.component.ts");
    /* harmony import */


    var _demo_view_datademo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./demo/view/datademo.component */
    "./src/app/demo/view/datademo.component.ts");
    /* harmony import */


    var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./demo/view/panelsdemo.component */
    "./src/app/demo/view/panelsdemo.component.ts");
    /* harmony import */


    var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./demo/view/overlaysdemo.component */
    "./src/app/demo/view/overlaysdemo.component.ts");
    /* harmony import */


    var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./demo/view/menusdemo.component */
    "./src/app/demo/view/menusdemo.component.ts");
    /* harmony import */


    var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./demo/view/messagesdemo.component */
    "./src/app/demo/view/messagesdemo.component.ts");
    /* harmony import */


    var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./demo/view/miscdemo.component */
    "./src/app/demo/view/miscdemo.component.ts");
    /* harmony import */


    var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./demo/view/emptydemo.component */
    "./src/app/demo/view/emptydemo.component.ts");
    /* harmony import */


    var _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./demo/view/chartsdemo.component */
    "./src/app/demo/view/chartsdemo.component.ts");
    /* harmony import */


    var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./demo/view/filedemo.component */
    "./src/app/demo/view/filedemo.component.ts");
    /* harmony import */


    var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./demo/view/documentation.component */
    "./src/app/demo/view/documentation.component.ts");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");
    /* harmony import */


    var _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/app.notfound.component */
    "./src/app/pages/app.notfound.component.ts");
    /* harmony import */


    var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/app.error.component */
    "./src/app/pages/app.error.component.ts");
    /* harmony import */


    var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/app.accessdenied.component */
    "./src/app/pages/app.accessdenied.component.ts");
    /* harmony import */


    var _pages_app_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/app.login.component */
    "./src/app/pages/app.login.component.ts");
    /* harmony import */


    var _staticpages_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./staticpages/home.component */
    "./src/app/staticpages/home.component.ts");
    /* harmony import */


    var _staticpages_purpose_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./staticpages/purpose.component */
    "./src/app/staticpages/purpose.component.ts");

    var routes = [{
      path: '',
      component: _app_main_component__WEBPACK_IMPORTED_MODULE_14__["AppMainComponent"],
      children: [{
        path: '',
        component: _staticpages_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
      }, {
        path: 'about/purpose',
        component: _staticpages_purpose_component__WEBPACK_IMPORTED_MODULE_20__["PurposeComponent"]
      }, // { path: '', component: DashboardDemoComponent },
      {
        path: 'components/sample',
        component: _demo_view_sampledemo_component__WEBPACK_IMPORTED_MODULE_2__["SampleDemoComponent"]
      }, {
        path: 'components/forms',
        component: _demo_view_formsdemo_component__WEBPACK_IMPORTED_MODULE_3__["FormsDemoComponent"]
      }, {
        path: 'components/data',
        component: _demo_view_datademo_component__WEBPACK_IMPORTED_MODULE_4__["DataDemoComponent"]
      }, {
        path: 'components/panels',
        component: _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_5__["PanelsDemoComponent"]
      }, {
        path: 'components/overlays',
        component: _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_6__["OverlaysDemoComponent"]
      }, {
        path: 'components/menus',
        component: _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_7__["MenusDemoComponent"]
      }, {
        path: 'components/messages',
        component: _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_8__["MessagesDemoComponent"]
      }, {
        path: 'components/misc',
        component: _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_9__["MiscDemoComponent"]
      }, {
        path: 'pages/empty',
        component: _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_10__["EmptyDemoComponent"]
      }, {
        path: 'components/charts',
        component: _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_11__["ChartsDemoComponent"]
      }, {
        path: 'components/file',
        component: _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_12__["FileDemoComponent"]
      }, {
        path: 'documentation',
        component: _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_13__["DocumentationComponent"]
      }]
    }, {
      path: 'error',
      component: _pages_app_error_component__WEBPACK_IMPORTED_MODULE_16__["AppErrorComponent"]
    }, {
      path: 'accessdenied',
      component: _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_17__["AppAccessdeniedComponent"]
    }, {
      path: '404',
      component: _pages_app_notfound_component__WEBPACK_IMPORTED_MODULE_15__["AppNotfoundComponent"]
    }, {
      path: 'login',
      component: _pages_app_login_component__WEBPACK_IMPORTED_MODULE_18__["AppLoginComponent"]
    }, {
      path: '**',
      redirectTo: '/404'
    }];

    var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    });
    /***/

  },

  /***/
  "./src/app/app.topbar.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.topbar.component.ts ***!
    \*****************************************/

  /*! exports provided: AppTopBarComponent */

  /***/
  function srcAppAppTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppTopBarComponent", function () {
      return AppTopBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.main.component */
    "./src/app/app.main.component.ts");

    var AppTopBarComponent = function AppTopBarComponent(app) {
      _classCallCheck(this, AppTopBarComponent);

      this.app = app;
    };

    AppTopBarComponent.ctorParameters = function () {
      return [{
        type: _app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]
      }];
    };

    AppTopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-topbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.topbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.topbar.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]])], AppTopBarComponent);
    /***/
  },

  /***/
  "./src/app/demo/service/carservice.ts":
  /*!********************************************!*\
    !*** ./src/app/demo/service/carservice.ts ***!
    \********************************************/

  /*! exports provided: CarService */

  /***/
  function srcAppDemoServiceCarserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarService", function () {
      return CarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CarService =
    /*#__PURE__*/
    function () {
      function CarService(http) {
        _classCallCheck(this, CarService);

        this.http = http;
      }

      _createClass(CarService, [{
        key: "getCarsSmall",
        value: function getCarsSmall() {
          return this.http.get('assets/demo/data/cars-small.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }, {
        key: "getCarsMedium",
        value: function getCarsMedium() {
          return this.http.get('assets/demo/data/cars-medium.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }, {
        key: "getCarsLarge",
        value: function getCarsLarge() {
          return this.http.get('assets/demo/data/cars-large.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }]);

      return CarService;
    }();

    CarService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CarService);
    /***/
  },

  /***/
  "./src/app/demo/service/countryservice.ts":
  /*!************************************************!*\
    !*** ./src/app/demo/service/countryservice.ts ***!
    \************************************************/

  /*! exports provided: CountryService */

  /***/
  function srcAppDemoServiceCountryserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryService", function () {
      return CountryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CountryService =
    /*#__PURE__*/
    function () {
      function CountryService(http) {
        _classCallCheck(this, CountryService);

        this.http = http;
      }

      _createClass(CountryService, [{
        key: "getCountries",
        value: function getCountries() {
          return this.http.get('assets/demo/data/countries.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }]);

      return CountryService;
    }();

    CountryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CountryService);
    /***/
  },

  /***/
  "./src/app/demo/service/eventservice.ts":
  /*!**********************************************!*\
    !*** ./src/app/demo/service/eventservice.ts ***!
    \**********************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppDemoServiceEventserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EventService =
    /*#__PURE__*/
    function () {
      function EventService(http) {
        _classCallCheck(this, EventService);

        this.http = http;
      }

      _createClass(EventService, [{
        key: "getEvents",
        value: function getEvents() {
          return this.http.get('assets/demo/data/scheduleevents.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], EventService);
    /***/
  },

  /***/
  "./src/app/demo/service/nodeservice.ts":
  /*!*********************************************!*\
    !*** ./src/app/demo/service/nodeservice.ts ***!
    \*********************************************/

  /*! exports provided: NodeService */

  /***/
  function srcAppDemoServiceNodeserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodeService", function () {
      return NodeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var NodeService =
    /*#__PURE__*/
    function () {
      function NodeService(http) {
        _classCallCheck(this, NodeService);

        this.http = http;
      }

      _createClass(NodeService, [{
        key: "getFiles",
        value: function getFiles() {
          return this.http.get('assets/demo/data/files.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }, {
        key: "getFilesystem",
        value: function getFilesystem() {
          return this.http.get('assets/demo/data/filesystem.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }]);

      return NodeService;
    }();

    NodeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], NodeService);
    /***/
  },

  /***/
  "./src/app/demo/view/chartsdemo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/demo/view/chartsdemo.component.ts ***!
    \***************************************************/

  /*! exports provided: ChartsDemoComponent */

  /***/
  function srcAppDemoViewChartsdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartsDemoComponent", function () {
      return ChartsDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChartsDemoComponent =
    /*#__PURE__*/
    function () {
      function ChartsDemoComponent() {
        _classCallCheck(this, ChartsDemoComponent);
      }

      _createClass(ChartsDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#b944d6'
            }, {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#0F97C7'
            }]
          };
          this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: '#0F97C7',
              borderColor: '#0F97C7',
              data: [65, 59, 80, 81, 56, 55, 40]
            }, {
              label: 'My Second dataset',
              backgroundColor: '#e2841a',
              borderColor: '#e2841a',
              data: [28, 48, 40, 19, 86, 27, 90]
            }]
          };
          this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [{
              data: [540, 325, 702, 421],
              backgroundColor: ['#0F97C7', '#b944d6', '#e2841a', '#10b163']
            }]
          };
          this.polarData = {
            datasets: [{
              data: [11, 16, 7, 3],
              backgroundColor: ['#0F97C7', '#b944d6', '#e2841a', '#10b163'],
              label: 'My dataset'
            }],
            labels: ['Blue', 'Purple', 'Orange', 'Green']
          };
          this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(15,151,199,0.2)',
              borderColor: 'rgba(15,151,199,1)',
              pointBackgroundColor: 'rgba(15,151,199,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(15,151,199,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
            }, {
              label: 'My Second dataset',
              backgroundColor: 'rgba(185,68,214,0.2)',
              borderColor: 'rgba(185,68,214,1)',
              pointBackgroundColor: 'rgba(185,68,214,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(185,68,214,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
            }]
          };
        }
      }]);

      return ChartsDemoComponent;
    }();

    ChartsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chartsdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/chartsdemo.component.html")).default
    })], ChartsDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/dashboarddemo.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/demo/view/dashboarddemo.component.ts ***!
    \******************************************************/

  /*! exports provided: DashboardDemoComponent */

  /***/
  function srcAppDemoViewDashboarddemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardDemoComponent", function () {
      return DashboardDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/carservice */
    "./src/app/demo/service/carservice.ts");
    /* harmony import */


    var _service_eventservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/eventservice */
    "./src/app/demo/service/eventservice.ts");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fullcalendar/daygrid */
    "./node_modules/@fullcalendar/daygrid/main.js");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fullcalendar/timegrid */
    "./node_modules/@fullcalendar/timegrid/main.js");
    /* harmony import */


    var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fullcalendar/interaction */
    "./node_modules/@fullcalendar/interaction/main.js");
    /* harmony import */


    var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__);

    var DashboardDemoComponent =
    /*#__PURE__*/
    function () {
      function DashboardDemoComponent(carService, eventService) {
        _classCallCheck(this, DashboardDemoComponent);

        this.carService = carService;
        this.eventService = eventService;
      }

      _createClass(DashboardDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.carService.getCarsMedium().then(function (cars) {
            return _this2.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.items = [{
            label: 'Save',
            icon: 'pi pi-check'
          }, {
            label: 'Update',
            icon: 'pi pi-refresh'
          }, {
            label: 'Delete',
            icon: 'pi pi-trash'
          }];
          this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Sales',
              data: [12, 19, 3, 5, 2, 3, 9],
              borderColor: ['#0F97C7'],
              borderWidth: 3,
              borderDash: [5, 5],
              fill: false,
              pointRadius: 3
            }, {
              label: 'Income',
              data: [1, 2, 5, 3, 12, 7, 15],
              backgroundColor: ['rgba(187,222,251,0.2)'],
              borderColor: ['#578697'],
              borderWidth: 3,
              fill: true
            }, {
              label: 'Expenses',
              data: [7, 12, 15, 5, 3, 13, 21],
              borderColor: ['#1BA7AF'],
              borderWidth: 3,
              fill: false,
              pointRadius: [4, 6, 4, 12, 8, 0, 4]
            }, {
              label: 'New Users',
              data: [3, 7, 2, 17, 15, 13, 19],
              borderColor: ['#E2841A'],
              borderWidth: 3,
              fill: false
            }]
          };
          this.chartOptions = {
            responsive: true,
            hover: {
              mode: 'index'
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Month'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Value'
                }
              }]
            }
          };
          this.eventService.getEvents().then(function (events) {
            _this2.events = events;
          });
          this.fullCalendarOptions = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default.a],
            defaultDate: '2016-01-12',
            header: {
              right: 'prev,next, today',
              left: 'title'
            }
          };
        }
      }]);

      return DashboardDemoComponent;
    }();

    DashboardDemoComponent.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: _service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    DashboardDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/dashboard.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], _service_eventservice__WEBPACK_IMPORTED_MODULE_3__["EventService"]])], DashboardDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/datademo.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/demo/view/datademo.component.ts ***!
    \*************************************************/

  /*! exports provided: DataDemoComponent */

  /***/
  function srcAppDemoViewDatademoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataDemoComponent", function () {
      return DataDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/carservice */
    "./src/app/demo/service/carservice.ts");
    /* harmony import */


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/nodeservice */
    "./src/app/demo/service/nodeservice.ts");
    /* harmony import */


    var _service_eventservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/eventservice */
    "./src/app/demo/service/eventservice.ts");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fullcalendar/daygrid */
    "./node_modules/@fullcalendar/daygrid/main.js");
    /* harmony import */


    var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fullcalendar/timegrid */
    "./node_modules/@fullcalendar/timegrid/main.js");
    /* harmony import */


    var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fullcalendar/interaction */
    "./node_modules/@fullcalendar/interaction/main.js");
    /* harmony import */


    var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7__);

    var DataDemoComponent =
    /*#__PURE__*/
    function () {
      function DataDemoComponent(carService, eventService, nodeService) {
        _classCallCheck(this, DataDemoComponent);

        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.carsVirtual = [];
      }

      _createClass(DataDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.carService.getCarsLarge().then(function (cars) {
            return _this3.cars1 = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.cols2 = [{
            field: 'name',
            header: 'Name'
          }, {
            field: 'size',
            header: 'Size'
          }, {
            field: 'type',
            header: 'Type'
          }];
          this.carService.getCarsMedium().then(function (cars) {
            return _this3.cars2 = cars;
          });
          this.carService.getCarsLarge().then(function (cars) {
            return _this3.carsVirtual = cars;
          });
          this.carService.getCarsMedium().then(function (cars) {
            return _this3.sourceCars = cars;
          });
          this.targetCars = [];
          this.carService.getCarsSmall().then(function (cars) {
            return _this3.orderListCars = cars;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this3.files1 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this3.files2 = files;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this3.files3 = files;
          });
          this.nodeService.getFilesystem().then(function (files) {
            return _this3.files4 = files;
          });
          this.eventService.getEvents().then(function (events) {
            _this3.events = events;
          });
          this.brands = [{
            label: 'Audi',
            value: 'Audi'
          }, {
            label: 'BMW',
            value: 'BMW'
          }, {
            label: 'Fiat',
            value: 'Fiat'
          }, {
            label: 'Honda',
            value: 'Honda'
          }, {
            label: 'Jaguar',
            value: 'Jaguar'
          }, {
            label: 'Mercedes',
            value: 'Mercedes'
          }, {
            label: 'Renault',
            value: 'Renault'
          }, {
            label: 'Volkswagen',
            value: 'Volkswagen'
          }, {
            label: 'Volvo',
            value: 'Volvo'
          }];
          this.colors = [{
            label: 'White',
            value: 'White'
          }, {
            label: 'Green',
            value: 'Green'
          }, {
            label: 'Silver',
            value: 'Silver'
          }, {
            label: 'Black',
            value: 'Black'
          }, {
            label: 'Red',
            value: 'Red'
          }, {
            label: 'Maroon',
            value: 'Maroon'
          }, {
            label: 'Brown',
            value: 'Brown'
          }, {
            label: 'Orange',
            value: 'Orange'
          }, {
            label: 'Blue',
            value: 'Blue'
          }];
          this.carouselCars = [{
            vin: 'r3278r2',
            year: 2010,
            brand: 'Audi',
            color: 'Black'
          }, {
            vin: 'jhto2g2',
            year: 2015,
            brand: 'BMW',
            color: 'White'
          }, {
            vin: 'h453w54',
            year: 2012,
            brand: 'Honda',
            color: 'Blue'
          }, {
            vin: 'g43gwwg',
            year: 1998,
            brand: 'Renault',
            color: 'White'
          }, {
            vin: 'gf45wg5',
            year: 2011,
            brand: 'Volkswagen',
            color: 'Red'
          }, {
            vin: 'bhv5y5w',
            year: 2015,
            brand: 'Jaguar',
            color: 'Blue'
          }, {
            vin: 'ybw5fsd',
            year: 2012,
            brand: 'Ford',
            color: 'Yellow'
          }, {
            vin: '45665e5',
            year: 2011,
            brand: 'Mercedes',
            color: 'Brown'
          }, {
            vin: 'he6sb5v',
            year: 2015,
            brand: 'Ford',
            color: 'Black'
          }];
          this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
          }, {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
          }, {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
          }];
          this.fullcalendarOptions = {
            plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_7___default.a],
            defaultDate: '2016-01-12',
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }
          };
          this.data = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [{
              label: 'F.C Barcelona',
              expanded: true,
              children: [{
                label: 'Chelsea FC'
              }, {
                label: 'F.C. Barcelona'
              }]
            }, {
              label: 'Real Madrid',
              expanded: true,
              children: [{
                label: 'Bayern Munich'
              }, {
                label: 'Real Madrid'
              }]
            }]
          }];
          this.sortOptions = [{
            label: 'Newest First',
            value: '!year'
          }, {
            label: 'Oldest First',
            value: 'year'
          }, {
            label: 'Brand',
            value: 'brand'
          }];
        }
      }, {
        key: "loadCarsLazy",
        value: function loadCarsLazy(event) {
          var _this4 = this;

          if (this.timeout) {
            clearTimeout(this.timeout);
          }

          this.timeout = setTimeout(function () {
            _this4.cars3 = [];

            if (_this4.carsVirtual) {
              _this4.cars3 = _this4.carsVirtual.slice(event.first, event.first + event.rows);
            }
          }, 2000);
        }
      }, {
        key: "onSortChange",
        value: function onSortChange(event) {
          var value = event.value;

          if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
          } else {
            this.sortOrder = 1;
            this.sortField = value;
          }
        }
      }]);

      return DataDemoComponent;
    }();

    DataDemoComponent.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: _service_eventservice__WEBPACK_IMPORTED_MODULE_4__["EventService"]
      }, {
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__["NodeService"]
      }];
    };

    DataDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./datademo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/datademo.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: ["\n        /* Table */\n        .ui-table.ui-table-cars .ui-table-caption.ui-widget-header {\n            border: 0 none;\n            padding: 12px;\n            text-align: left;\n            font-size: 20px;\n            font-weight: normal;\n        }\n\n        .ui-table .ui-table-globalfilter-container {\n            position: relative;\n            top: -4px;\n        }\n\n        .ui-column-filter {\n            margin-top: 1em;\n        }\n\n        .ui-column-filter .ui-multiselect-label {\n            font-weight: 500;\n        }\n\n        .ui-table.ui-table-cars .ui-table-thead > tr > th {\n            border: 0 none;\n            text-align: left;\n        }\n\n        .ui-table-globalfilter-container {\n            float: right;\n            display: inline;\n        }\n\n        .ui-table.ui-table-cars .ui-table-tbody > tr > td {\n            border: 0 none;\n        }\n\n        .ui-table.ui-table-cars .ui-table-tbody .ui-column-title {\n            font-size: 16px;\n        }\n\n        .ui-table.ui-table-cars .ui-paginator {\n            border: 0 none;\n            padding: 1em;\n        }\n\n        /* DataView */\n        .filter-container {\n            text-align: center;\n        }\n\n        .car-details-list {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 2em;\n            border-bottom: 1px solid #d9dad9;\n        }\n\n        .car-details-list > div {\n            display: flex;\n            align-items: center;\n        }\n\n        .car-details-list > div img {\n            margin-right: 14px;\n        }\n\n        .car-detail {\n            padding: 0 1em 1em 1em;\n            border-bottom: 1px solid #d9dad9;\n            margin: 1em;\n        }\n\n        .ui-panel-content {\n            padding: 1em;\n        }\n\n        @media (max-width: 1024px) {\n            .car-details-list img {\n                width: 75px;\n            }\n\n            .filter-container {\n                text-align: left;\n            }\n        }\n\n        .car-item {\n            padding-top: 5px;\n        }\n\n        .car-item .p-md-3 {\n            text-align: center;\n        }\n\n        .car-item .p-col-10 {\n            font-weight: bold;\n        }\n\n        .empty-car-item-index {\n            background-color: #f1f1f1;\n            width: 60px;\n            height: 60px;\n            margin: 36px auto 0 auto;\n            animation: pulse 1s infinite ease-in-out;\n        }\n\n        .empty-car-item-image {\n            background-color: #f1f1f1;\n            width: 120px;\n            height: 120px;\n            animation: pulse 1s infinite ease-in-out;\n        }\n\n        .empty-car-item-text {\n            background-color: #f1f1f1;\n            height: 18px;\n            animation: pulse 1s infinite ease-in-out;\n        }\n\n        .title-container {\n            padding: 1em;\n            text-align: right;\n        }\n\n        .sort-container {\n            text-align: left;\n        }\n\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {\n\t\t\tborder: 1px solid #b3c2ca;\n\t\t\tborder-radius: 3px;\n\t\t\tmargin: 0.3em;\n\t\t\ttext-align: center;\n\t\t\tpadding: 2em 0 2.25em 0;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 20px;\n\t\t\tmargin-top: 24px;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n\t\t\tmargin: 0.25em 0 2em 0;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n\t\t\tmargin-left: 0.5em;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t.ui-carousel.custom-carousel .ui-carousel-dot-icon {\n\t\t\twidth: 16px !important;\n\t\t\theight: 16px !important;\n\t\t\tborder-radius: 50%;\n\t\t}\n\t\t.ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {\n\t\t\tmargin-left: 0.6em;\n\t\t}\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n            .index-col {\n                display: none;\n            }\n            .image-col {\n                display: none;\n            }\n        }\n        @keyframes pulse {\n            0% {\n                background-color: rgba(165, 165, 165, 0.1)\n            }\n            50% {\n                background-color: rgba(165, 165, 165, 0.3)\n            }\n            100% {\n                background-color: rgba(165, 165, 165, 0.1)\n            }\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], _service_eventservice__WEBPACK_IMPORTED_MODULE_4__["EventService"], _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__["NodeService"]])], DataDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/documentation.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/demo/view/documentation.component.ts ***!
    \******************************************************/

  /*! exports provided: DocumentationComponent */

  /***/
  function srcAppDemoViewDocumentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
      return DocumentationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DocumentationComponent = function DocumentationComponent() {
      _classCallCheck(this, DocumentationComponent);
    };

    DocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./documentation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/documentation.component.html")).default,
      styles: ["\n        .docs pre.doc-command {\n            font-family: monospace;\n            background-color: #EFEFEF;\n            color: #333333;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 0;\n            overflow: auto;\n        }\n\n        .docs p {\n            line-height: 1.5;\n        }"]
    })], DocumentationComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/emptydemo.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/demo/view/emptydemo.component.ts ***!
    \**************************************************/

  /*! exports provided: EmptyDemoComponent */

  /***/
  function srcAppDemoViewEmptydemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyDemoComponent", function () {
      return EmptyDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EmptyDemoComponent = function EmptyDemoComponent() {
      _classCallCheck(this, EmptyDemoComponent);
    };

    EmptyDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./emptydemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/emptydemo.component.html")).default
    })], EmptyDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/filedemo.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/demo/view/filedemo.component.ts ***!
    \*************************************************/

  /*! exports provided: FileDemoComponent */

  /***/
  function srcAppDemoViewFiledemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileDemoComponent", function () {
      return FileDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FileDemoComponent =
    /*#__PURE__*/
    function () {
      function FileDemoComponent() {
        _classCallCheck(this, FileDemoComponent);

        this.uploadedFiles = [];
      }

      _createClass(FileDemoComponent, [{
        key: "onUpload",
        value: function onUpload(event) {
          var _iterator = _createForOfIteratorHelper(event.files),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var file = _step.value;
              this.uploadedFiles.push(file);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.msgs = [];
          this.msgs.push({
            severity: 'info',
            summary: 'Success',
            detail: 'Upload Completed'
          });
        }
      }]);

      return FileDemoComponent;
    }();

    FileDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filedemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/filedemo.component.html")).default
    })], FileDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/formsdemo.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/demo/view/formsdemo.component.ts ***!
    \**************************************************/

  /*! exports provided: FormsDemoComponent */

  /***/
  function srcAppDemoViewFormsdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsDemoComponent", function () {
      return FormsDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_countryservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/countryservice */
    "./src/app/demo/service/countryservice.ts");

    var FormsDemoComponent =
    /*#__PURE__*/
    function () {
      function FormsDemoComponent(countryService) {
        _classCallCheck(this, FormsDemoComponent);

        this.countryService = countryService;
        this.yesterday = new Date();
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'Volkswagen'];
        this.selectedMultiSelectCars = [];
        this.checkboxValues = [];
        this.rangeValues = [20, 80];
      }

      _createClass(FormsDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carOptions = [];
          this.carOptions.push({
            label: 'Audi',
            value: 'Audi'
          });
          this.carOptions.push({
            label: 'BMW',
            value: 'BMW'
          });
          this.carOptions.push({
            label: 'Fiat',
            value: 'Fiat'
          });
          this.carOptions.push({
            label: 'Ford',
            value: 'Ford'
          });
          this.carOptions.push({
            label: 'Honda',
            value: 'Honda'
          });
          this.carOptions.push({
            label: 'Jaguar',
            value: 'Jaguar'
          });
          this.carOptions.push({
            label: 'Mercedes',
            value: 'Mercedes'
          });
          this.carOptions.push({
            label: 'Renault',
            value: 'Renault'
          });
          this.carOptions.push({
            label: 'VW',
            value: 'VW'
          });
          this.carOptions.push({
            label: 'Volvo',
            value: 'Volvo'
          });
          this.cities = [];
          this.cities.push({
            label: 'Select City',
            value: 0
          });
          this.cities.push({
            label: 'New York',
            value: {
              id: 1,
              name: 'New York',
              code: 'NY'
            }
          });
          this.cities.push({
            label: 'Rome',
            value: {
              id: 2,
              name: 'Rome',
              code: 'RM'
            }
          });
          this.cities.push({
            label: 'London',
            value: {
              id: 3,
              name: 'London',
              code: 'LDN'
            }
          });
          this.cities.push({
            label: 'Istanbul',
            value: {
              id: 4,
              name: 'Istanbul',
              code: 'IST'
            }
          });
          this.cities.push({
            label: 'Paris',
            value: {
              id: 5,
              name: 'Paris',
              code: 'PRS'
            }
          });
          this.citiesListbox = this.cities.slice(1);
          this.types = [];
          this.types.push({
            label: 'Xbox One',
            value: 'Xbox One'
          });
          this.types.push({
            label: 'PS4',
            value: 'PS4'
          });
          this.types.push({
            label: 'Wii U',
            value: 'Wii U'
          });
          this.splitButtonItems = [{
            label: 'Update',
            icon: 'pi pi-fw pi-refresh'
          }, {
            label: 'Delete',
            icon: 'pi pi-fw pi-times'
          }, {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: 'http://www.primefaces.org/primeng'
          }];
        }
      }, {
        key: "filterCountry",
        value: function filterCountry(event) {
          var _this5 = this;

          var query = event.query;
          this.countryService.getCountries().then(function (countries) {
            _this5.filteredCountries = _this5.searchCountry(query, countries);
          });
        }
      }, {
        key: "searchCountry",
        value: function searchCountry(query, countries) {
          // in a real application, make a request to a remote url with the query and return filtered results,
          // for demo we filter at client side
          var filtered = [];

          var _iterator2 = _createForOfIteratorHelper(countries),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              var country = item;

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return filtered;
        }
      }, {
        key: "filterBrands",
        value: function filterBrands(event) {
          this.filteredBrands = [];

          var _iterator3 = _createForOfIteratorHelper(this.brands),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var item = _step3.value;
              var brand = item;

              if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredBrands.push(brand);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }]);

      return FormsDemoComponent;
    }();

    FormsDemoComponent.ctorParameters = function () {
      return [{
        type: _service_countryservice__WEBPACK_IMPORTED_MODULE_2__["CountryService"]
      }];
    };

    FormsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./formsdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/formsdemo.component.html")).default
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_countryservice__WEBPACK_IMPORTED_MODULE_2__["CountryService"]])], FormsDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/menusdemo.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/demo/view/menusdemo.component.ts ***!
    \**************************************************/

  /*! exports provided: MenusDemoComponent */

  /***/
  function srcAppDemoViewMenusdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenusDemoComponent", function () {
      return MenusDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenusDemoComponent =
    /*#__PURE__*/
    function () {
      function MenusDemoComponent() {
        _classCallCheck(this, MenusDemoComponent);
      }

      _createClass(MenusDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.breadcrumbItems = [];
          this.breadcrumbItems.push({
            label: 'Sports'
          });
          this.breadcrumbItems.push({
            label: 'Basketball'
          });
          this.breadcrumbItems.push({
            label: 'NBA'
          });
          this.breadcrumbItems.push({
            label: 'Teams'
          });
          this.breadcrumbItems.push({
            label: 'L.A. LAkers'
          });
          this.breadcrumbItems.push({
            label: 'Roster'
          });
          this.breadcrumbItems.push({
            label: 'Kobe Bryant'
          });
          this.tabMenuItems = [{
            label: 'Home',
            icon: 'pi pi-fw pi-home'
          }, {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar'
          }, {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil'
          }, {
            label: 'Documentation',
            icon: 'pi pi-fw pi-file'
          }, {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog'
          }];
          this.tieredItems = [{
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              }, {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }]
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }, {
              separator: true
            }, {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }]
          }, {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [{
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            }, {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            }, {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            }, {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            }]
          }, {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
            }, {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [{
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [{
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }]
              }, {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }]
            }]
          }, {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [{
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [{
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              }, {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }]
            }, {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [{
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }]
            }]
          }, {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
          }];
          this.items = [{
            label: 'Options',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash',
              url: 'http://primetek.com.tr'
            }]
          }, {
            label: 'Account',
            items: [{
              label: 'Options',
              icon: 'pi pi-fw pi-cog'
            }, {
              label: 'Sign Out',
              icon: 'pi pi-fw pi-power-off'
            }]
          }];
          this.megaMenuItems = [{
            label: 'Videos',
            icon: 'pi pi-fw pi-video',
            items: [[{
              label: 'Video 1',
              items: [{
                label: 'Video 1.1'
              }, {
                label: 'Video 1.2'
              }]
            }, {
              label: 'Video 2',
              items: [{
                label: 'Video 2.1'
              }, {
                label: 'Video 2.2'
              }]
            }], [{
              label: 'Video 3',
              items: [{
                label: 'Video 3.1'
              }, {
                label: 'Video 3.2'
              }]
            }, {
              label: 'Video 4',
              items: [{
                label: 'Video 4.1'
              }, {
                label: 'Video 4.2'
              }]
            }]]
          }, {
            label: 'Users',
            icon: 'pi pi-fw pi-users',
            items: [[{
              label: 'User 1',
              items: [{
                label: 'User 1.1'
              }, {
                label: 'User 1.2'
              }]
            }, {
              label: 'User 2',
              items: [{
                label: 'User 2.1'
              }, {
                label: 'User 2.2'
              }]
            }], [{
              label: 'User 3',
              items: [{
                label: 'User 3.1'
              }, {
                label: 'User 3.2'
              }]
            }, {
              label: 'User 4',
              items: [{
                label: 'User 4.1'
              }, {
                label: 'User 4.2'
              }]
            }], [{
              label: 'User 5',
              items: [{
                label: 'User 5.1'
              }, {
                label: 'User 5.2'
              }]
            }, {
              label: 'User 6',
              items: [{
                label: 'User 6.1'
              }, {
                label: 'User 6.2'
              }]
            }]]
          }, {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [[{
              label: 'Event 1',
              items: [{
                label: 'Event 1.1'
              }, {
                label: 'Event 1.2'
              }]
            }, {
              label: 'Event 2',
              items: [{
                label: 'Event 2.1'
              }, {
                label: 'Event 2.2'
              }]
            }], [{
              label: 'Event 3',
              items: [{
                label: 'Event 3.1'
              }, {
                label: 'Event 3.2'
              }]
            }, {
              label: 'Event 4',
              items: [{
                label: 'Event 4.1'
              }, {
                label: 'Event 4.2'
              }]
            }]]
          }, {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            items: [[{
              label: 'Setting 1',
              items: [{
                label: 'Setting 1.1'
              }, {
                label: 'Setting 1.2'
              }]
            }, {
              label: 'Setting 2',
              items: [{
                label: 'Setting 2.1'
              }, {
                label: 'Setting 2.2'
              }]
            }, {
              label: 'Setting 3',
              items: [{
                label: 'Setting 3.1'
              }, {
                label: 'Setting 3.2'
              }]
            }], [{
              label: 'Technology 4',
              items: [{
                label: 'Setting 4.1'
              }, {
                label: 'Setting 4.2'
              }]
            }]]
          }];
          this.panelMenuItems = [{
            label: 'Documents',
            icon: 'pi pi-fw pi-file',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              }, {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }]
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }, {
              separator: true
            }, {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }]
          }, {
            label: 'Manage',
            icon: 'pi pi-fw pi-pencil',
            items: [{
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            }, {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            }, {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            }, {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            }]
          }, {
            label: 'Accounts',
            icon: 'pi pi-fw pi-user',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
            }, {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [{
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [{
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }]
              }, {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }]
            }]
          }, {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar',
            items: [{
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [{
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              }, {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }]
            }, {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [{
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }]
            }]
          }];
          this.stepsItems = [{
            label: 'Personal'
          }, {
            label: 'Seat'
          }, {
            label: 'Payment'
          }, {
            label: 'Confirmation'
          }];
        }
      }]);

      return MenusDemoComponent;
    }();

    MenusDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menusdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/menusdemo.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: ["\n        .ui-steps-item {\n            width: 25%\n        }\n    "]
    })], MenusDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/messagesdemo.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/demo/view/messagesdemo.component.ts ***!
    \*****************************************************/

  /*! exports provided: MessagesDemoComponent */

  /***/
  function srcAppDemoViewMessagesdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesDemoComponent", function () {
      return MessagesDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var MessagesDemoComponent =
    /*#__PURE__*/
    function () {
      function MessagesDemoComponent(service) {
        _classCallCheck(this, MessagesDemoComponent);

        this.service = service;
        this.msgs = [];
      }

      _createClass(MessagesDemoComponent, [{
        key: "showInfoViaToast",
        value: function showInfoViaToast() {
          this.service.add({
            key: 'tst',
            severity: 'info',
            summary: 'Info Message',
            detail: 'PrimeNG rocks'
          });
        }
      }, {
        key: "showWarnViaToast",
        value: function showWarnViaToast() {
          this.service.add({
            key: 'tst',
            severity: 'warn',
            summary: 'Warn Message',
            detail: 'There are unsaved changes'
          });
        }
      }, {
        key: "showErrorViaToast",
        value: function showErrorViaToast() {
          this.service.add({
            key: 'tst',
            severity: 'error',
            summary: 'Error Message',
            detail: 'Validation failed'
          });
        }
      }, {
        key: "showSuccessViaToast",
        value: function showSuccessViaToast() {
          this.service.add({
            key: 'tst',
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message sent'
          });
        }
      }, {
        key: "showMultipleViaToast",
        value: function showMultipleViaToast() {
          this.service.addAll([{
            key: 'tst',
            severity: 'info',
            summary: 'Message 1',
            detail: 'PrimeNG rocks'
          }, {
            key: 'tst',
            severity: 'info',
            summary: 'Message 2',
            detail: 'PrimeReact rocks'
          }, {
            key: 'tst',
            severity: 'info',
            summary: 'Message 3',
            detail: 'PrimeFaces rocks'
          }]);
        }
      }, {
        key: "showInfoViaMessages",
        value: function showInfoViaMessages() {
          this.msgs = [];
          this.msgs.push({
            severity: 'info',
            summary: 'Info Message',
            detail: 'PrimeNG rocks'
          });
        }
      }, {
        key: "showWarnViaMessages",
        value: function showWarnViaMessages() {
          this.msgs = [];
          this.msgs.push({
            severity: 'warn',
            summary: 'Warn Message',
            detail: 'There are unsaved changes'
          });
        }
      }, {
        key: "showErrorViaMessages",
        value: function showErrorViaMessages() {
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Validation failed'
          });
        }
      }, {
        key: "showSuccessViaMessages",
        value: function showSuccessViaMessages() {
          this.msgs = [];
          this.msgs.push({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Message sent'
          });
        }
      }, {
        key: "showMultipleViaMessages",
        value: function showMultipleViaMessages() {
          this.msgs = [];
          this.msgs.push({
            severity: 'info',
            summary: 'Message 1',
            detail: 'PrimeNG rocks'
          });
          this.msgs.push({
            severity: 'info',
            summary: 'Message 2',
            detail: 'PrimeUI rocks'
          });
          this.msgs.push({
            severity: 'info',
            summary: 'Message 3',
            detail: 'PrimeFaces rocks'
          });
        }
      }]);

      return MessagesDemoComponent;
    }();

    MessagesDemoComponent.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    MessagesDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./messagesdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/messagesdemo.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
      styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n            min-width: 8em;\n        }\n\n        :host ::ng-deep .ui-message {\n            margin-left: .25em;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])], MessagesDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/miscdemo.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/demo/view/miscdemo.component.ts ***!
    \*************************************************/

  /*! exports provided: MiscDemoComponent */

  /***/
  function srcAppDemoViewMiscdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscDemoComponent", function () {
      return MiscDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var primeng_terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/terminal */
    "./node_modules/primeng/fesm2015/primeng-terminal.js");

    var MiscDemoComponent =
    /*#__PURE__*/
    function () {
      function MiscDemoComponent(terminalService) {
        var _this6 = this;

        _classCallCheck(this, MiscDemoComponent);

        this.terminalService = terminalService;
        this.value = 0;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
          var response = command === 'date' ? new Date().toDateString() : 'Unknown command: ' + command;

          _this6.terminalService.sendResponse(response);
        });
      }

      _createClass(MiscDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.interval = setInterval(function () {
            _this7.value = _this7.value + Math.floor(Math.random() * 10) + 1;

            if (_this7.value >= 100) {
              _this7.value = 100;
              clearInterval(_this7.interval);
              _this7.interval = null;
            }
          }, 2000);
          this.images = [];
          this.images.push({
            source: 'assets/demo/images/nature/nature1.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature2.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature3.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature4.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature5.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature6.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature7.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature8.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature9.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature10.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature11.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11'
          });
          this.images.push({
            source: 'assets/demo/images/nature/nature12.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12'
          });
        }
      }, {
        key: "onCommand",
        value: function onCommand(event) {
          if (event.command === 'date') {
            this.response = new Date().toDateString();
          } else {
            this.response = 'Unknown command: ' + event.command;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.interval) {
            clearInterval(this.interval);
          }
        }
      }]);

      return MiscDemoComponent;
    }();

    MiscDemoComponent.ctorParameters = function () {
      return [{
        type: primeng_terminal__WEBPACK_IMPORTED_MODULE_2__["TerminalService"]
      }];
    };

    MiscDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./miscdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/miscdemo.component.html")).default,
      providers: [primeng_terminal__WEBPACK_IMPORTED_MODULE_2__["TerminalService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [primeng_terminal__WEBPACK_IMPORTED_MODULE_2__["TerminalService"]])], MiscDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/overlaysdemo.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/demo/view/overlaysdemo.component.ts ***!
    \*****************************************************/

  /*! exports provided: OverlaysDemoComponent */

  /***/
  function srcAppDemoViewOverlaysdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlaysDemoComponent", function () {
      return OverlaysDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/carservice */
    "./src/app/demo/service/carservice.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var OverlaysDemoComponent =
    /*#__PURE__*/
    function () {
      function OverlaysDemoComponent(carService, confirmationService) {
        _classCallCheck(this, OverlaysDemoComponent);

        this.carService = carService;
        this.confirmationService = confirmationService;
      }

      _createClass(OverlaysDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this8.cars = cars.splice(0, 5);
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.images = [];
          this.images.push({
            source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg',
            title: 'Sopranos 1'
          });
          this.images.push({
            source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg',
            title: 'Sopranos 2'
          });
          this.images.push({
            source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg',
            title: 'Sopranos 3'
          });
          this.images.push({
            source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg',
            title: 'Sopranos 4'
          });
        }
      }, {
        key: "confirm",
        value: function confirm() {
          this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
          });
        }
      }]);

      return OverlaysDemoComponent;
    }();

    OverlaysDemoComponent.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]
      }];
    };

    OverlaysDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./overlaysdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/overlaysdemo.component.html")).default,
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])], OverlaysDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/panelsdemo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/demo/view/panelsdemo.component.ts ***!
    \***************************************************/

  /*! exports provided: PanelsDemoComponent */

  /***/
  function srcAppDemoViewPanelsdemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelsDemoComponent", function () {
      return PanelsDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PanelsDemoComponent =
    /*#__PURE__*/
    function () {
      function PanelsDemoComponent() {
        _classCallCheck(this, PanelsDemoComponent);
      }

      _createClass(PanelsDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = [{
            label: 'Angular.io',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
          }, {
            label: 'Theming',
            icon: 'pi pi-bookmark',
            routerLink: ['/theming']
          }];
        }
      }]);

      return PanelsDemoComponent;
    }();

    PanelsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./panelsdemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/panelsdemo.component.html")).default,
      styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n            margin-left: .25em;\n        }\n\n        :host ::ng-deep .ui-splitbutton button {\n            margin-right: 0;\n        }"]
    })], PanelsDemoComponent);
    /***/
  },

  /***/
  "./src/app/demo/view/sampledemo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/demo/view/sampledemo.component.ts ***!
    \***************************************************/

  /*! exports provided: SampleDemoComponent */

  /***/
  function srcAppDemoViewSampledemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SampleDemoComponent", function () {
      return SampleDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_carservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/carservice */
    "./src/app/demo/service/carservice.ts");
    /* harmony import */


    var _service_countryservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/countryservice */
    "./src/app/demo/service/countryservice.ts");
    /* harmony import */


    var _service_nodeservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/nodeservice */
    "./src/app/demo/service/nodeservice.ts");

    var SampleDemoComponent =
    /*#__PURE__*/
    function () {
      function SampleDemoComponent(carService, countryService, nodeService) {
        _classCallCheck(this, SampleDemoComponent);

        this.carService = carService;
        this.countryService = countryService;
        this.nodeService = nodeService;
        this.checkboxValues = [];
        this.selectedMultiSelectCars = [];
      }

      _createClass(SampleDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.carService.getCarsSmall().then(function (cars) {
            return _this9.cars = cars;
          });
          this.cols = [{
            field: 'vin',
            header: 'Vin'
          }, {
            field: 'year',
            header: 'Year'
          }, {
            field: 'brand',
            header: 'Brand'
          }, {
            field: 'color',
            header: 'Color'
          }];
          this.carService.getCarsLarge().then(function (cars) {
            return _this9.carsLarge = cars;
          });
          this.nodeService.getFiles().then(function (files) {
            return _this9.filesTree = files;
          });
          this.carService.getCarsSmall().then(function (cars) {
            return _this9.sourceCars = cars;
          });
          this.targetCars = [];
          this.carService.getCarsSmall().then(function (cars) {
            return _this9.orderListCars = cars;
          });
          this.cities1 = [];
          this.cities1.push({
            label: 'Select City',
            value: null
          });
          this.cities1.push({
            label: 'New York',
            value: {
              id: 1,
              name: 'New York',
              code: 'NY'
            }
          });
          this.cities1.push({
            label: 'Rome',
            value: {
              id: 2,
              name: 'Rome',
              code: 'RM'
            }
          });
          this.cities1.push({
            label: 'London',
            value: {
              id: 3,
              name: 'London',
              code: 'LDN'
            }
          });
          this.cities1.push({
            label: 'Istanbul',
            value: {
              id: 4,
              name: 'Istanbul',
              code: 'IST'
            }
          });
          this.cities1.push({
            label: 'Paris',
            value: {
              id: 5,
              name: 'Paris',
              code: 'PRS'
            }
          });
          this.cities2 = this.cities1.slice(1, 6);
          this.splitButtonItems = [{
            label: 'Update',
            icon: 'pi pi-fw pi-refresh'
          }, {
            label: 'Delete',
            icon: 'pi pi-fw pi-times'
          }, {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: 'http://www.primefaces.org/primeng'
          }];
          this.carOptions = [];
          this.carOptions.push({
            label: 'Audi',
            value: 'Audi'
          });
          this.carOptions.push({
            label: 'BMW',
            value: 'BMW'
          });
          this.carOptions.push({
            label: 'Fiat',
            value: 'Fiat'
          });
          this.carOptions.push({
            label: 'Ford',
            value: 'Ford'
          });
          this.carOptions.push({
            label: 'Honda',
            value: 'Honda'
          });
          this.carOptions.push({
            label: 'Jaguar',
            value: 'Jaguar'
          });
          this.carOptions.push({
            label: 'Mercedes',
            value: 'Mercedes'
          });
          this.carOptions.push({
            label: 'Renault',
            value: 'Renault'
          });
          this.carOptions.push({
            label: 'Volkswagen',
            value: 'Volkswagen'
          });
          this.carOptions.push({
            label: 'Volvo',
            value: 'Volvo'
          });
          this.types = [];
          this.types.push({
            label: 'Apartment',
            value: 'Apartment'
          });
          this.types.push({
            label: 'House',
            value: 'House'
          });
          this.types.push({
            label: 'Studio',
            value: 'Studio'
          });
          this.menuItems = [{
            label: 'File',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus'
            }, {
              label: 'Open',
              icon: 'pi pi-fw pi-download'
            }]
          }, {
            label: 'Edit',
            items: [{
              label: 'Undo',
              icon: 'pi pi-fw pi-refresh'
            }, {
              label: 'Redo',
              icon: 'pi pi-fw pi-replay'
            }]
          }];
          this.panelMenuItems = [{
            label: 'Documents',
            icon: 'pi pi-fw pi-file',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [{
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              }, {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              }]
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }, {
              separator: true
            }, {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
            }]
          }, {
            label: 'Manage',
            icon: 'pi pi-fw pi-pencil',
            items: [{
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            }, {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            }, {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            }, {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            }]
          }, {
            label: 'Accounts',
            icon: 'pi pi-fw pi-user',
            items: [{
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
            }, {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [{
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [{
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }]
              }, {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }]
            }]
          }, {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar',
            items: [{
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [{
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              }, {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }]
            }, {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [{
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }]
            }]
          }];
          this.carouselCars = [{
            vin: 'r3278r2',
            year: 2010,
            brand: 'Audi',
            color: 'Black'
          }, {
            vin: 'jhto2g2',
            year: 2015,
            brand: 'BMW',
            color: 'White'
          }, {
            vin: 'h453w54',
            year: 2012,
            brand: 'Honda',
            color: 'Blue'
          }, {
            vin: 'g43gwwg',
            year: 1998,
            brand: 'Renault',
            color: 'White'
          }, {
            vin: 'gf45wg5',
            year: 2011,
            brand: 'Volkswagen',
            color: 'Red'
          }, {
            vin: 'bhv5y5w',
            year: 2015,
            brand: 'Jaguar',
            color: 'Blue'
          }, {
            vin: 'ybw5fsd',
            year: 2012,
            brand: 'Ford',
            color: 'Yellow'
          }, {
            vin: '45665e5',
            year: 2011,
            brand: 'Mercedes',
            color: 'Brown'
          }, {
            vin: 'he6sb5v',
            year: 2015,
            brand: 'Ford',
            color: 'Black'
          }];
          this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
          }, {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
          }, {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
          }];
        }
      }, {
        key: "filterCountry",
        value: function filterCountry(event) {
          var _this10 = this;

          var query = event.query;
          this.countryService.getCountries().then(function (countries) {
            _this10.filteredCountries = _this10.searchCountry(query, countries);
          });
        }
      }, {
        key: "searchCountry",
        value: function searchCountry(query, countries) {
          // in a real application, make a request to a remote url with the query and return filtered results,
          // for demo we filter at client side
          var filtered = [];

          var _iterator4 = _createForOfIteratorHelper(countries),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var item = _step4.value;
              var country = item;

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return filtered;
        }
      }]);

      return SampleDemoComponent;
    }();

    SampleDemoComponent.ctorParameters = function () {
      return [{
        type: _service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"]
      }, {
        type: _service_countryservice__WEBPACK_IMPORTED_MODULE_3__["CountryService"]
      }, {
        type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_4__["NodeService"]
      }];
    };

    SampleDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sampledemo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/sampledemo.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: ["\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {\n\t\t\tborder: 1px solid #b3c2ca;\n\t\t\tborder-radius: 3px;\n\t\t\tmargin: 0.3em;\n\t\t\ttext-align: center;\n\t\t\tpadding: 2em 0 2.25em 0;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 20px;\n\t\t\tmargin-top: 24px;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n\t\t\tmargin: 0.25em 0 2em 0;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n\t\t\tmargin-left: 0.5em;\n\t\t}\n\t\t.ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n\t\t\tmargin-left: 0;\n\t\t}\n\t\t.ui-carousel.custom-carousel .ui-carousel-dot-icon {\n\t\t\twidth: 16px !important;\n\t\t\theight: 16px !important;\n\t\t\tborder-radius: 50%;\n\t\t}\n\t\t.ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {\n\t\t\tmargin-left: 0.6em;\n\t\t}\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_carservice__WEBPACK_IMPORTED_MODULE_2__["CarService"], _service_countryservice__WEBPACK_IMPORTED_MODULE_3__["CountryService"], _service_nodeservice__WEBPACK_IMPORTED_MODULE_4__["NodeService"]])], SampleDemoComponent);
    /***/
  },

  /***/
  "./src/app/pages/app.accessdenied.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/app.accessdenied.component.ts ***!
    \*****************************************************/

  /*! exports provided: AppAccessdeniedComponent */

  /***/
  function srcAppPagesAppAccessdeniedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppAccessdeniedComponent", function () {
      return AppAccessdeniedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppAccessdeniedComponent = function AppAccessdeniedComponent() {
      _classCallCheck(this, AppAccessdeniedComponent);
    };

    AppAccessdeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accessdenied',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.accessdenied.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.accessdenied.component.html")).default
    })], AppAccessdeniedComponent);
    /***/
  },

  /***/
  "./src/app/pages/app.error.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/app.error.component.ts ***!
    \**********************************************/

  /*! exports provided: AppErrorComponent */

  /***/
  function srcAppPagesAppErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppErrorComponent", function () {
      return AppErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppErrorComponent = function AppErrorComponent() {
      _classCallCheck(this, AppErrorComponent);
    };

    AppErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.error.component.html")).default
    })], AppErrorComponent);
    /***/
  },

  /***/
  "./src/app/pages/app.login.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/app.login.component.ts ***!
    \**********************************************/

  /*! exports provided: AppLoginComponent */

  /***/
  function srcAppPagesAppLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoginComponent", function () {
      return AppLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppLoginComponent = function AppLoginComponent() {
      _classCallCheck(this, AppLoginComponent);
    };

    AppLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.login.component.html")).default
    })], AppLoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/app.notfound.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/app.notfound.component.ts ***!
    \*************************************************/

  /*! exports provided: AppNotfoundComponent */

  /***/
  function srcAppPagesAppNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppNotfoundComponent", function () {
      return AppNotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppNotfoundComponent = function AppNotfoundComponent() {
      _classCallCheck(this, AppNotfoundComponent);
    };

    AppNotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notfound',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.notfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.notfound.component.html")).default
    })], AppNotfoundComponent);
    /***/
  },

  /***/
  "./src/app/staticpages/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/staticpages/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppStaticpagesHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.pics = ['rotate01.jpg', 'rotate02.jpg', 'rotate03.jpg', 'rotate04.jpg', 'rotate05.jpg', 'rotate06.jpg', 'rotate07.jpg', 'rotate08.jpg', 'rotate09.jpg'];
        this.responsiveOptions = [// {
        //     breakpoint: '1024px',
        //     numVisible: 3,
        //     numScroll: 3
        // },
        {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
        }, {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/staticpages/home.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: ["\n        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .carousel-details > .p-grid {\n            border: 1px solid #b3c2ca;\n            border-radius: 3px;\n            margin: 0.3em;\n            text-align: center;\n            /*padding: 2em 0 2.25em 0;*/\n            padding: 3px;\n        }\n        /* .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n            font-weight: 700;\n            font-size: 20px;\n            margin-top: 24px;\n        }\n        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n            margin: 0.25em 0 2em 0;\n        }\n        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n            margin-left: 0.5em;\n        }\n        .home-page .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n            margin-left: 0;\n        } */\n        .home-page .ui-carousel.custom-carousel .ui-carousel-dot-icon {\n            width: 16px !important;\n            height: 16px !important;\n            border-radius: 50%;\n        }\n        .home-page .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .carousel-details > .p-grid {\n            margin-left: 0.6em;\n        }\n        .home-page .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .carousel-details > .p-grid {\n            margin-right: 0.6em;\n        }\n    "]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/staticpages/purpose.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/staticpages/purpose.component.ts ***!
    \**************************************************/

  /*! exports provided: PurposeComponent */

  /***/
  function srcAppStaticpagesPurposeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurposeComponent", function () {
      return PurposeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PurposeComponent = function PurposeComponent() {
      _classCallCheck(this, PurposeComponent);
    };

    PurposeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "<h1 class=\"page-title\">About RHS - Purpose</h1>\n                <p>The NSW Refugee Health Service aims to protect and promote the health of \n                    refugees and people of refugee-like backgrounds living in NSW.</p>\n                <p>Our Service:</p>\n                <div id=\"div\">\n                        <ul>\n                        <li>provides early health assessments by refugee health nurses for newly  arrived refugees </li>\n                        <li>educates health service providers on refugee health and related issues; </li>\n                        <li>acts as a link between agencies working with refugees and health services; </li>\n                        <li>provides targeted health promotion programs for refugees</li>\n                        <li>provides medical assessments and referrals through GP clinics, particularly for recent arrivals;</li>\n                        <li>facilitates and conducts research in refugee health; and</li>\n                        <li>advocates for health policies and appropriate services for refugees.</li>\n                    </ul></div>"
    })], PurposeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Development\SWSRefugee\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map