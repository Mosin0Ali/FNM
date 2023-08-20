(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_wallet_RechargeDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/wallet/RechargeDialog.vue */ "./resources/js/components/wallet/RechargeDialog.vue");
/* harmony import */ var _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/address/AddressDialog.vue */ "./resources/js/components/address/AddressDialog.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      rechargeDialogShow: false,
      addressDialogShow: false,
      dashboardLoading: true,
      total_order_products: 0,
      purchasedProducts: [{}, {}, {}],
      recentlyViewedProducts: {
        loading: true,
        products: []
      },
      last_recharge: {
        amount: 0,
        date: ''
      }
    };
  },
  components: {
    RechargeDialog: _components_wallet_RechargeDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddressDialog: _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('app', ['generalSettings'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("auth", ["currentUser"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("cart", ["getCartCount"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("wishlist", ["wislistLoaded", "getTotalWishlisted", "getWislistProducts"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("address", ["getDefaultBillingAddress"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])("recentlyViewed", ["recentlyViewedLoaded", "getRecentlyViewedProducts"])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("auth", ["rechargeWallet"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("address", ["fetchAddresses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("wishlist", ["fetchWislistProducts"])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("recentlyViewed", ["fetchRecentlyViewedProducts"])), {}, {
    getDashboardData: function getDashboardData() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "user/dashboard");
            case 2:
              res = _context.sent;
              if (res.data.success) {
                _this.total_order_products = res.data.total_order_products;
                _this.purchasedProducts = res.data.recent_purchased_products.data;
                _this.last_recharge = res.data.last_recharge;
              }
              _this.dashboardLoading = false;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    rechargeDialogClosed: function rechargeDialogClosed() {
      this.rechargeDialogShow = false;
    },
    addressDialogClosed: function addressDialogClosed() {
      this.addressDialogShow = false;
    }
  }),
  created: function created() {
    this.getDashboardData();
    this.fetchAddresses();
    this.fetchWislistProducts();
    this.fetchRecentlyViewedProducts();
  },
  mounted: function mounted() {
    this.rechargeWallet(this.$route.query.wallet_payment);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("banner", {
    attrs: {
      loading: false,
      banner: _vm.$store.getters["app/banners"].dashboard_page_top
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "ps-lg-7 pt-4"
  }, [_c("h1", {
    staticClass: "fs-21 fw-700 opacity-80 mb-5"
  }, [_vm._v(_vm._s(_vm.$t("dashboard")))]), _vm._v(" "), _vm.generalSettings.wallet_system == 1 ? _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "d-flex justify-center align-center white--text flex-column",
    attrs: {
      color: "grey darken-3",
      rounded: "rounded",
      elevation: "0",
      height: "130"
    }
  }, [_c("div", {
    staticClass: "fs-14 mb-3 fw-700 primary--text"
  }, [_vm._v(_vm._s(_vm.$t("wallet_balance")))]), _vm._v(" "), _c("div", {
    staticClass: "fw-500 text-h4"
  }, [_vm._v(_vm._s(_vm.format_price(_vm.currentUser.balance)))])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "d-flex justify-center align-center white--text flex-column",
    attrs: {
      color: "grey darken-3",
      rounded: "rounded",
      elevation: "0",
      height: "130"
    }
  }, [_c("div", {
    staticClass: "fs-14 mb-3 fw-700 primary--text"
  }, [_vm._v(_vm._s(_vm.$t("last_recharge")))]), _vm._v(" "), _c("div", {
    staticClass: "fw-500 text-h4"
  }, [_vm._v(_vm._s(_vm.format_price(_vm.last_recharge.amount)))]), _vm._v(" "), _c("div", {
    staticClass: "fw-700 fs-12 opacity-60"
  }, [_vm._v(_vm._s(_vm.last_recharge.date))])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "4"
    }
  }, [_c("recharge-dialog", {
    attrs: {
      show: _vm.rechargeDialogShow,
      from: "/user/dashboard"
    },
    on: {
      close: _vm.rechargeDialogClosed
    }
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "border-dashed border-gray-300 h-100 py-6",
    attrs: {
      elevation: "0",
      block: "",
      "x-large": ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.rechargeDialogShow = true;
      }
    }
  }, [_c("span", [_c("div", {
    staticClass: "fs-14 mb-3 w-100"
  }, [_vm._v(_vm._s(_vm.$t("recharge_wallet")))]), _vm._v(" "), _c("i", {
    staticClass: "las la-plus la-3x opacity-70"
  })])])], 1)], 1) : _vm._e(), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "d-flex justify-center flex-column pa-5",
    attrs: {
      color: "grey lighten-5 border border-gray-200 mb-4 red--text",
      rounded: "rounded",
      elevation: "0",
      height: "130"
    }
  }, [_c("div", {
    staticClass: "fw-500 text-h4"
  }, [_vm._v(_vm._s(_vm.getCartCount))]), _vm._v(" "), _c("div", {
    staticClass: "fw-700 fs-12"
  }, [_vm._v(_vm._s(_vm.$t("products_in_your_cart")))])]), _vm._v(" "), _c("v-sheet", {
    staticClass: "d-flex justify-center flex-column pa-5",
    attrs: {
      color: "grey lighten-5 border border-gray-200 mb-4 blue--text",
      rounded: "rounded",
      elevation: "0",
      height: "130"
    }
  }, [_c("div", {
    staticClass: "fw-500 text-h4"
  }, [_vm._v(_vm._s(_vm.getTotalWishlisted))]), _vm._v(" "), _c("div", {
    staticClass: "fw-700 fs-12"
  }, [_vm._v(_vm._s(_vm.$t("products_in_your_wishlist")))])]), _vm._v(" "), _c("v-sheet", {
    staticClass: "d-flex justify-center flex-column pa-5",
    attrs: {
      color: "grey lighten-5 border border-gray-200 mb-4 green--text",
      rounded: "rounded",
      elevation: "0",
      height: "130"
    }
  }, [_c("div", {
    staticClass: "fw-500 text-h4"
  }, [_vm._v(_vm._s(_vm.total_order_products))]), _vm._v(" "), _c("div", {
    staticClass: "fw-700 fs-12"
  }, [_vm._v(_vm._s(_vm.$t("products_you_ordered")))])]), _vm._v(" "), _c("banner", {
    attrs: {
      loading: false,
      banner: _vm.$store.getters["app/banners"].dashboard_page_bottom
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "pa-2",
    attrs: {
      color: "border border-gray-200 mb-4",
      rounded: "rounded",
      height: "422",
      elevation: "0"
    }
  }, [_c("div", {
    staticClass: "fw-700 fs-16 border-bottom pb-2 mx-2 my-2"
  }, [_vm._v(_vm._s(_vm.$t("recent_purchase_history")))]), _vm._v(" "), _c("div", {
    staticClass: "h-350px overflow-auto c-scrollbar pa-2"
  }, _vm._l(_vm.purchasedProducts, function (product, i) {
    return _c("div", {
      key: i,
      "class": ["mt-3", {
        "border-top pt-3": i != 0
      }]
    }, [_c("product-box", {
      attrs: {
        "product-details": product,
        "is-loading": _vm.dashboardLoading,
        "box-style": "two",
        "no-border": ""
      }
    })], 1);
  }), 0)]), _vm._v(" "), _c("v-sheet", {
    staticClass: "pa-2 my-wishlist",
    attrs: {
      color: "border border-gray-200 mb-4",
      rounded: "rounded",
      height: "405",
      elevation: "0"
    }
  }, [_c("div", {
    staticClass: "fw-700 fs-16 border-bottom pb-2 mx-2 my-2"
  }, [_vm._v(_vm._s(_vm.$t("my_wishlist")))]), _vm._v(" "), _vm.wislistLoaded && _vm.getWislistProducts.length > 0 ? _c("div", {
    staticClass: "h-340px overflow-auto c-scrollbar pa-2"
  }, _vm._l(_vm.getWislistProducts, function (product, i) {
    return _c("div", {
      key: i,
      "class": ["mt-3", {
        "border-top pt-3": i != 0
      }]
    }, [_c("product-box", {
      attrs: {
        "product-details": product,
        "is-loading": !_vm.wislistLoaded,
        "box-style": "two",
        "no-border": ""
      }
    })], 1);
  }), 0) : _vm._e()])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("v-sheet", {
    staticClass: "pa-4",
    attrs: {
      color: "border border-gray-200 mb-4",
      rounded: "rounded",
      elevation: "0",
      height: "275"
    }
  }, [_c("div", {
    staticClass: "fw-700 fs-16 border-bottom pb-2"
  }, [_vm._v(_vm._s(_vm.$t("default_shipping_address")))]), _vm._v(" "), _vm.getDefaultBillingAddress ? _c("div", {
    staticClass: "mt-3 lh-1-8"
  }, [_c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.address))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.postal_code) + ", " + _vm._s(_vm.getDefaultBillingAddress.city) + ", " + _vm._s(_vm.getDefaultBillingAddress.state))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.country))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.phone))])]) : _vm._e()]), _vm._v(" "), _c("v-sheet", {
    staticClass: "mb-4",
    attrs: {
      rounded: "rounded",
      elevation: "0",
      height: "131"
    }
  }, [_c("v-btn", {
    staticClass: "border-dashed border-gray-300 primary--text fs-14 h-100",
    attrs: {
      elevation: "0",
      block: "",
      "x-large": ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.addressDialogShow = true;
      }
    }
  }, [_c("i", {
    staticClass: "las la-plus"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("add_new_address")))])])], 1), _vm._v(" "), _c("address-dialog", {
    attrs: {
      show: _vm.addressDialogShow
    },
    on: {
      close: _vm.addressDialogClosed
    }
  }), _vm._v(" "), _c("v-sheet", {
    staticClass: "pa-2 recenty-viewed",
    attrs: {
      color: "border border-gray-200 mb-4",
      rounded: "rounded",
      height: "405",
      elevation: "0"
    }
  }, [_c("div", {
    staticClass: "fw-700 fs-16 border-bottom pb-2 mx-2 my-2"
  }, [_vm._v(_vm._s(_vm.$t("recently_viewed")))]), _vm._v(" "), _c("div", {
    staticClass: "h-340px overflow-auto c-scrollbar pa-2"
  }, _vm._l(_vm.getRecentlyViewedProducts, function (product, i) {
    return _c("div", {
      key: i,
      "class": ["mt-3", {
        "border-top pt-3": i != 0
      }]
    }, [_c("product-box", {
      attrs: {
        "product-details": product,
        "is-loading": !_vm.recentlyViewedLoaded,
        "box-style": "two",
        "no-border": ""
      }
    })], 1);
  }), 0)])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 960px) and (max-width: 1263px) {\n.my-wishlist[data-v-5c5876d9],\n    .recenty-viewed[data-v-5c5876d9]{\n        height: 365px !important;\n}\n.my-wishlist .c-scrollbar[data-v-5c5876d9],\n    .recenty-viewed .c-scrollbar[data-v-5c5876d9]{\n        height: 297px;\n}\n}\n@media (min-width: 1264px) and (max-width: 1903px) {\n.my-wishlist[data-v-5c5876d9],\n    .recenty-viewed[data-v-5c5876d9]{\n        height: 350px !important;\n}\n.my-wishlist .c-scrollbar[data-v-5c5876d9],\n    .recenty-viewed .c-scrollbar[data-v-5c5876d9]{\n        height: 282px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_5c5876d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true& */ "./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_5c5876d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css& */ "./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_5c5876d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_5c5876d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c5876d9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_5c5876d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=style&index=0&id=5c5876d9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_5c5876d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_5c5876d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_5c5876d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_5c5876d9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5c5876d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5c5876d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5c5876d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);