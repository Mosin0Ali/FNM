(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductReviews.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductReviews.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSingleReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSingleReview */ "./resources/js/components/product/ProductSingleReview.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isLoading: {
      type: Boolean,
      "default": true
    },
    id: {
      type: Number,
      "default": null
    },
    reviewSummary: {
      type: Object,
      required: true,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      loading: true,
      sortingDefaultValue: 'latest',
      filterDefaultValue: 'all',
      totalPages: 1,
      currentPage: 1,
      reviews: []
    };
  },
  components: {
    ProductSingleReview: _ProductSingleReview__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    sortingDefault: {
      get: function get() {
        return {
          name: this.$i18n.t('latest_first'),
          value: 'latest'
        };
      },
      set: function set(newVal) {}
    },
    sortingOptions: function sortingOptions() {
      return [{
        name: this.$i18n.t('latest_first'),
        value: 'latest'
      }, {
        name: this.$i18n.t('oldest_first'),
        value: 'oldest'
      }, {
        name: this.$i18n.t('higher_rating_first'),
        value: 'higer_rating'
      }, {
        name: this.$i18n.t('lower_rating_first'),
        value: 'lower_rating'
      }];
    },
    filterDefault: {
      get: function get() {
        return {
          name: this.$i18n.t('all_star'),
          value: 'all'
        };
      },
      set: function set(newVal) {}
    },
    filterOptions: function filterOptions() {
      return [{
        name: this.$i18n.t('all_star'),
        value: 'all'
      }, {
        name: '5 ' + this.$i18n.t('star'),
        value: '5'
      }, {
        name: '4 ' + this.$i18n.t('star'),
        value: '4'
      }, {
        name: '3 ' + this.$i18n.t('star'),
        value: '3'
      }, {
        name: '2 ' + this.$i18n.t('star'),
        value: '2'
      }, {
        name: '1 ' + this.$i18n.t('star'),
        value: '1'
      }];
    }
  },
  methods: {
    getList: function getList() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var pageNumber, sortBy, filterBy, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              pageNumber = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              sortBy = _this.sortingDefaultValue;
              filterBy = _this.filterDefaultValue;
              if (!(_this.id !== null)) {
                _context.next = 8;
                break;
              }
              _context.next = 6;
              return _this.call_api("get", "product/reviews/".concat(_this.id, "?page=").concat(pageNumber, "&sortby=").concat(sortBy, "&filterby=").concat(filterBy));
            case 6:
              res = _context.sent;
              if (res.data.success) {
                _this.loading = false;
                _this.reviews = res.data.data;
                _this.totalPages = res.data.meta.last_page;
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    sortUpdate: function sortUpdate(sort) {
      this.sortingDefaultValue = sort;
      this.getList();
    },
    filterUpdate: function filterUpdate(filter) {
      this.filterDefaultValue = filter;
      this.getList();
    }
  },
  watch: {
    id: function id() {
      this.getList();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductSingleReview.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductSingleReview.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isLoading: {
      type: Boolean,
      "default": true
    },
    review: {
      type: Object,
      required: true,
      "default": function _default() {}
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ProductDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_product_ProductReviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/product/ProductReviews */ "./resources/js/components/product/ProductReviews.vue");
/* harmony import */ var _components_product_AddToCart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/product/AddToCart.vue */ "./resources/js/components/product/AddToCart.vue");
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
  metaInfo: function metaInfo() {
    return {
      title: this.metaTitle
    };
  },
  data: function data() {
    return {
      metaTitle: '',
      detailsLoading: true,
      productDetails: {},
      reviewSummary: {
        average: 0
      },
      relatedLoading: true,
      relatedProducts: [{}, {}, {}, {}, {}],
      togetherLoading: true,
      boughtTogetherProducts: [{}, {}, {}, {}, {}],
      moreLoading: true,
      moreProducts: [{}, {}, {}, {}, {}],
      panel: [0, 1],
      carouselOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 12
          },
          // when window width is >= 320px
          599: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          // when window width is >= 480px
          960: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          // when window width is >= 640px
          1264: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1904: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }
      }
    };
  },
  components: {
    ProductReviews: _components_product_ProductReviews__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddToCart: _components_product_AddToCart_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {},
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("recentlyViewed", ["addNewRecentlyViewedProduct"])), {}, {
    getDetails: function getDetails() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "product/details/".concat(_this.$route.params.slug));
            case 2:
              res = _context.sent;
              if (res.data.success) {
                _this.metaTitle = res.data.data.metaTitle;
                _this.productDetails = res.data.data;
                _this.reviewSummary = _this.productDetails.review_summary;
                _this.getRelatedProducts(_this.productDetails.id);
                _this.getBoughtTogetherProducts(_this.productDetails.id);
                _this.getMoreProducts(_this.productDetails.id);
                _this.addNewRecentlyViewedProduct(_this.productDetails.id);
              } else {
                _this.snack({
                  message: res.data.message,
                  color: "red"
                });
                _this.$router.push({
                  name: "404"
                });
              }
              _this.detailsLoading = false;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getRelatedProducts: function getRelatedProducts(id) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.call_api("get", "product/related/".concat(id));
            case 2:
              res = _context2.sent;
              if (res.data.success) {
                _this2.relatedProducts = res.data.data;
                _this2.relatedLoading = false;
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getBoughtTogetherProducts: function getBoughtTogetherProducts(id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.call_api("get", "product/bought-together/".concat(id));
            case 2:
              res = _context3.sent;
              if (res.data.success) {
                _this3.boughtTogetherProducts = res.data.data;
                _this3.togetherLoading = false;
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getMoreProducts: function getMoreProducts(id) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var res;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4.call_api("get", "product/random/10/".concat(id));
            case 2:
              res = _context4.sent;
              if (res.data.success) {
                _this4.moreProducts = res.data.data;
                _this4.moreLoading = false;
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }),
  created: function created() {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _this5.getDetails();
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductReviews.vue?vue&type=template&id=5ca03f77&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductReviews.vue?vue&type=template&id=5ca03f77& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "product-reviews"
  }, [_c("v-row", {
    staticClass: "pt-8 pb-16",
    attrs: {
      justify: "center",
      align: "center"
    }
  }, [_c("v-col", {
    staticClass: "text-center",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("div", {
    staticClass: "display-2 opacity-60"
  }, [_vm._v(_vm._s(_vm.reviewSummary.average.toFixed(2)))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.$t("out_of")) + " 5.00")]), _vm._v(" "), _c("v-rating", {
    staticClass: "lh-1-5",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star grey--text",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "15",
      length: "5",
      value: _vm.reviewSummary.average
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "fs-12 opacity-70 mt-1"
  }, [_vm._v(_vm._s(_vm.reviewSummary.total_count) + " " + _vm._s(_vm.$t("ratings")))])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "text-center border-md-start",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("div", {
    staticClass: "w-260px mx-auto"
  }, [_c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-rating", {
    staticClass: "lh-1-5",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: 5
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "ms-5",
    attrs: {
      "background-color": "#EEEEEE",
      color: "#B8B8B8",
      value: parseInt(_vm.reviewSummary.count_5 * 100 / _vm.reviewSummary.total_count),
      height: "6",
      rounded: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "w-60px text-right fs-12 opacity-60"
  }, [_vm._v(_vm._s(_vm.reviewSummary.count_5))])], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-rating", {
    staticClass: "lh-1-5",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: 4
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "ms-5",
    attrs: {
      "background-color": "#EEEEEE",
      color: "#B8B8B8",
      value: parseInt(_vm.reviewSummary.count_4 * 100 / _vm.reviewSummary.total_count),
      height: "6",
      rounded: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "w-60px text-right fs-12 opacity-60"
  }, [_vm._v(_vm._s(_vm.reviewSummary.count_4))])], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-rating", {
    staticClass: "lh-1-5",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: 3
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "ms-5",
    attrs: {
      "background-color": "#EEEEEE",
      color: "#B8B8B8",
      value: parseInt(_vm.reviewSummary.count_3 * 100 / _vm.reviewSummary.total_count),
      height: "6",
      rounded: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "w-60px text-right fs-12 opacity-60"
  }, [_vm._v(_vm._s(_vm.reviewSummary.count_3))])], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-rating", {
    staticClass: "lh-1-5",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: 2
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "ms-5",
    attrs: {
      "background-color": "#EEEEEE",
      color: "#B8B8B8",
      value: parseInt(_vm.reviewSummary.count_2 * 100 / _vm.reviewSummary.total_count),
      height: "6",
      rounded: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "w-60px text-right fs-12 opacity-60"
  }, [_vm._v(_vm._s(_vm.reviewSummary.count_2))])], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center"
  }, [_c("v-rating", {
    staticClass: "lh-1-5",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: 1
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "ms-5",
    attrs: {
      "background-color": "#EEEEEE",
      color: "#B8B8B8",
      value: parseInt(_vm.reviewSummary.count_1 * 100 / _vm.reviewSummary.total_count),
      height: "6",
      rounded: ""
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "w-60px text-right fs-12 opacity-60"
  }, [_vm._v(_vm._s(_vm.reviewSummary.count_1))])], 1)])])], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "border-md-top border-bottom d-md-flex align-center mb-3"
  }, [_c("span", {
    staticClass: "fw-700 d-inline-block mb-4 mb-md-0"
  }, [_vm._v(_vm._s(_vm.$t("product_reviews")))]), _vm._v(" "), _c("div", {
    staticClass: "ms-auto d-flex justify-space-between border-top border-md-top-0"
  }, [_c("span", {
    staticClass: "border-md-start border-start-0 d-block flex-grow-1"
  }, [_c("v-select", {
    attrs: {
      items: _vm.sortingOptions,
      "item-text": "name",
      "item-value": "value",
      "menu-props": {
        offsetY: true
      },
      flat: "",
      solo: "",
      "hide-details": ""
    },
    on: {
      change: _vm.sortUpdate
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("span", {
          staticClass: "fs-13 d-flex align-center opacity-80"
        }, [_c("i", {
          staticClass: "las la-exchange-alt la-rotate-90 fs-17"
        }), _vm._v(" "), _c("span", {
          staticClass: "opacity-60 mx-1"
        }, [_vm._v(_vm._s(_vm.$t("sort")) + ":")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(item.name))])])];
      }
    }]),
    model: {
      value: _vm.sortingDefault,
      callback: function callback($$v) {
        _vm.sortingDefault = $$v;
      },
      expression: "sortingDefault"
    }
  })], 1), _vm._v(" "), _c("span", {
    staticClass: "border-start d-block flex-grow-1"
  }, [_c("v-select", {
    attrs: {
      items: _vm.filterOptions,
      "item-text": "name",
      "item-value": "value",
      "menu-props": {
        offsetY: true
      },
      flat: "",
      solo: "",
      "hide-details": ""
    },
    on: {
      change: _vm.filterUpdate
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("span", {
          staticClass: "fs-13 d-flex align-center"
        }, [_c("i", {
          staticClass: "las la-filter fs-17 opacity-80"
        }), _vm._v(" "), _c("span", {
          staticClass: "opacity-60 mx-1"
        }, [_vm._v("Filter:")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(item.name))])])];
      }
    }]),
    model: {
      value: _vm.filterDefault,
      callback: function callback($$v) {
        _vm.filterDefault = $$v;
      },
      expression: "filterDefault"
    }
  })], 1)])]), _vm._v(" "), _c("div", [_vm.reviews.length > 0 ? _vm._l(_vm.reviews, function (review, i) {
    return _c("ProductSingleReview", {
      key: i,
      attrs: {
        "id-loading": _vm.loading,
        review: review
      }
    });
  }) : [_c("div", {
    staticClass: "text-center pa-4"
  }, [_vm._v(_vm._s(_vm.$t("no_reviews_found_for_this_product")))])]], 2), _vm._v(" "), _vm.totalPages > 1 ? _c("div", {
    staticClass: "text-end"
  }, [_c("v-pagination", {
    staticClass: "my-4",
    attrs: {
      length: _vm.totalPages,
      "prev-icon": "la-angle-left",
      "next-icon": "la-angle-right",
      "total-visible": 7,
      elevation: "0"
    },
    on: {
      input: _vm.getList
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductSingleReview.vue?vue&type=template&id=50b1ded8&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/ProductSingleReview.vue?vue&type=template&id=50b1ded8& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex py-4"
  }, [_vm.review.user.avatar ? _c("v-avatar", [_c("img", {
    staticClass: "border",
    attrs: {
      src: _vm.review.user.avatar,
      alt: _vm.review.user.name
    }
  })]) : _c("v-avatar", {
    attrs: {
      color: _vm.get_random_color()
    }
  }, [_c("span", {
    staticClass: "white--text text-h5"
  }, [_vm._v(_vm._s(_vm.review.user.name.charAt(0)))])]), _vm._v(" "), _c("span", {
    staticClass: "ms-4"
  }, [_c("div", {
    staticClass: "fw-700 lh-1"
  }, [_vm._v(_vm._s(_vm.review.user.name))]), _vm._v(" "), _c("div", {
    staticClass: "fs-11 opacity-50"
  }, [_vm._v(_vm._s(_vm.review.time))]), _vm._v(" "), _c("v-rating", {
    staticClass: "lh-1-5 mb-2",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: _vm.review.rating
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "fs-12 opacity-70"
  }, [_vm._v(_vm._s(_vm.review.comment))])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true& ***!
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
  return _c("v-container", {
    staticClass: "pt-7"
  }, [_c("v-row", {
    attrs: {
      align: "start"
    }
  }, [_c("v-col", {
    staticClass: "main-bar",
    attrs: {
      lg: "10",
      cols: "12"
    }
  }, [_c("add-to-cart", {
    staticClass: "mb-10",
    attrs: {
      "is-loading": _vm.detailsLoading,
      "product-details": _vm.productDetails
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-6",
    attrs: {
      cols: "12"
    }
  }, [_c("v-expansion-panels", {
    staticClass: "product-details-expansion",
    attrs: {
      flat: "",
      multiple: ""
    },
    model: {
      value: _vm.panel,
      callback: function callback($$v) {
        _vm.panel = $$v;
      },
      expression: "panel"
    }
  }, [_c("v-expansion-panel", {
    staticClass: "mb-3"
  }, [_c("v-expansion-panel-header", {
    attrs: {
      "expand-icon": "las la-arrow-circle-right"
    }
  }, [_c("div", {
    staticClass: "d-flex align-center"
  }, [_c("svg", {
    attrs: {
      id: "_004-product-description",
      "data-name": "004-product-description",
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20"
    }
  }, [_c("g", {
    attrs: {
      id: "Group_1264",
      "data-name": "Group 1264"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3166",
      "data-name": "Path 3166",
      d: "M18.75,5H1.25A1.252,1.252,0,0,1,0,3.75V1.25A1.252,1.252,0,0,1,1.25,0h17.5A1.252,1.252,0,0,1,20,1.25v2.5A1.252,1.252,0,0,1,18.75,5ZM1.25.833a.417.417,0,0,0-.417.417v2.5a.417.417,0,0,0,.417.417h17.5a.417.417,0,0,0,.417-.417V1.25A.417.417,0,0,0,18.75.833Z",
      fill: "#f5a100"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1265",
      "data-name": "Group 1265",
      transform: "translate(15 7.5)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3167",
      "data-name": "Path 3167",
      d: "M20.5,14A2.5,2.5,0,1,1,23,11.5,2.5,2.5,0,0,1,20.5,14Zm0-4.167A1.667,1.667,0,1,0,22.167,11.5,1.668,1.668,0,0,0,20.5,9.833Z",
      transform: "translate(-18 -9)",
      fill: "#f5a100"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1266",
      "data-name": "Group 1266",
      transform: "translate(15 15)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3168",
      "data-name": "Path 3168",
      d: "M20.5,23A2.5,2.5,0,1,1,23,20.5,2.5,2.5,0,0,1,20.5,23Zm0-4.167A1.667,1.667,0,1,0,22.167,20.5,1.668,1.668,0,0,0,20.5,18.833Z",
      transform: "translate(-18 -18)",
      fill: "#f5a100"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1267",
      "data-name": "Group 1267",
      transform: "translate(0 8.333)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3169",
      "data-name": "Path 3169",
      d: "M12.917,10.833H.417a.417.417,0,1,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",
      transform: "translate(0 -10)",
      fill: "#f5a100"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1268",
      "data-name": "Group 1268",
      transform: "translate(0 10.833)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3170",
      "data-name": "Path 3170",
      d: "M12.917,13.833H.417a.417.417,0,1,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",
      transform: "translate(0 -13)",
      fill: "#f5a100"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1269",
      "data-name": "Group 1269",
      transform: "translate(0 15.833)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3171",
      "data-name": "Path 3171",
      d: "M12.917,19.833H.417a.417.417,0,1,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",
      transform: "translate(0 -19)",
      fill: "#f5a100"
    }
  })]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1270",
      "data-name": "Group 1270",
      transform: "translate(0 18.333)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3172",
      "data-name": "Path 3172",
      d: "M12.917,22.833H.417a.417.417,0,0,1,0-.833h12.5a.417.417,0,1,1,0,.833Z",
      transform: "translate(0 -22)",
      fill: "#f5a100"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "fs-16 ms-5"
  }, [_vm._v(_vm._s(_vm.$t("description")))])])]), _vm._v(" "), _c("v-expansion-panel-content", [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.productDetails.description)
    }
  })])], 1), _vm._v(" "), _c("v-expansion-panel", {
    staticClass: "mb-3"
  }, [_c("v-expansion-panel-header", {
    attrs: {
      "expand-icon": "las la-arrow-circle-right"
    }
  }, [_c("div", {
    staticClass: "d-flex align-center"
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20"
    }
  }, [_c("g", {
    attrs: {
      id: "Group_1286",
      "data-name": "Group 1286",
      transform: "translate(-567 -1260.5)"
    }
  }, [_c("g", {
    attrs: {
      id: "Group_1272",
      "data-name": "Group 1272",
      transform: "translate(567 1260.5)"
    }
  }, [_c("g", {
    attrs: {
      id: "Group_1271",
      "data-name": "Group 1271",
      transform: "translate(0 0)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3173",
      "data-name": "Path 3173",
      d: "M6.65,2.545a.417.417,0,0,0-.287-.273L4.655,1.805,3.684.325a.433.433,0,0,0-.7,0l-.971,1.48L.307,2.271a.417.417,0,0,0-.216.663L1.2,4.316,1.115,6.085a.417.417,0,0,0,.564.41l1.656-.627,1.656.627a.417.417,0,0,0,.564-.41L5.471,4.316,6.579,2.935A.417.417,0,0,0,6.65,2.545ZM4.722,3.917a.418.418,0,0,0-.091.281L4.692,5.49,3.483,5.032a.416.416,0,0,0-.3,0L1.978,5.49,2.04,4.2a.417.417,0,0,0-.091-.281L1.14,2.909l1.248-.341a.417.417,0,0,0,.239-.174l.709-1.081.709,1.081a.417.417,0,0,0,.239.174l1.247.341Z",
      transform: "translate(0 -0.148)",
      fill: "#fff"
    }
  })])]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1285",
      "data-name": "Group 1285",
      transform: "translate(567 1274.127)"
    }
  }, [_c("g", {
    attrs: {
      id: "Group_1271-2",
      "data-name": "Group 1271",
      transform: "translate(0 0)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3173-2",
      "data-name": "Path 3173",
      d: "M6.65,2.545a.417.417,0,0,0-.287-.273L4.655,1.805,3.684.325a.433.433,0,0,0-.7,0l-.971,1.48L.307,2.271a.417.417,0,0,0-.216.663L1.2,4.316,1.115,6.085a.417.417,0,0,0,.564.41l1.656-.627,1.656.627a.417.417,0,0,0,.564-.41L5.471,4.316,6.579,2.935A.417.417,0,0,0,6.65,2.545ZM4.722,3.917a.418.418,0,0,0-.091.281L4.692,5.49,3.483,5.032a.416.416,0,0,0-.3,0L1.978,5.49,2.04,4.2a.417.417,0,0,0-.091-.281L1.14,2.909l1.248-.341a.417.417,0,0,0,.239-.174l.709-1.081.709,1.081a.417.417,0,0,0,.239.174l1.247.341Z",
      transform: "translate(0 -0.148)",
      fill: "#fff"
    }
  })])]), _vm._v(" "), _c("g", {
    attrs: {
      id: "Group_1278",
      "data-name": "Group 1278",
      transform: "translate(567 1267.314)"
    }
  }, [_c("g", {
    attrs: {
      id: "Group_1277",
      "data-name": "Group 1277"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3174",
      "data-name": "Path 3174",
      d: "M6.65,169.895a.418.418,0,0,0-.287-.273l-1.708-.466-.971-1.48a.433.433,0,0,0-.7,0l-.971,1.48-1.708.466a.417.417,0,0,0-.216.663L1.2,171.666l-.084,1.769a.417.417,0,0,0,.564.41l1.656-.627,1.656.627a.417.417,0,0,0,.564-.41l-.084-1.769,1.108-1.381A.417.417,0,0,0,6.65,169.895Zm-1.928,1.372a.418.418,0,0,0-.091.281l.062,1.292-1.209-.458a.416.416,0,0,0-.3,0l-1.209.458.062-1.291a.417.417,0,0,0-.091-.281l-.809-1.009,1.248-.34a.417.417,0,0,0,.239-.174l.709-1.081.709,1.081a.417.417,0,0,0,.239.174l1.247.34Z",
      transform: "translate(0 -167.498)",
      fill: "#fff"
    }
  })])]), _vm._v(" "), _c("rect", {
    attrs: {
      id: "Rectangle_1289",
      "data-name": "Rectangle 1289",
      width: "6.667",
      height: "0.833",
      rx: "0.417",
      transform: "translate(575.333 1262.583)",
      fill: "#fff"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      id: "Rectangle_1293",
      "data-name": "Rectangle 1293",
      width: "6.667",
      height: "0.833",
      rx: "0.417",
      transform: "translate(575.333 1276.21)",
      fill: "#fff"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      id: "Rectangle_1291",
      "data-name": "Rectangle 1291",
      width: "6.667",
      height: "0.833",
      rx: "0.417",
      transform: "translate(575.333 1269.25)",
      fill: "#fff"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      id: "Rectangle_1290",
      "data-name": "Rectangle 1290",
      width: "11.667",
      height: "0.833",
      rx: "0.417",
      transform: "translate(575.333 1265.083)",
      fill: "#fff"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      id: "Rectangle_1294",
      "data-name": "Rectangle 1294",
      width: "11.667",
      height: "0.833",
      rx: "0.417",
      transform: "translate(575.333 1278.71)",
      fill: "#fff"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      id: "Rectangle_1292",
      "data-name": "Rectangle 1292",
      width: "11.667",
      height: "0.833",
      rx: "0.417",
      transform: "translate(575.333 1271.75)",
      fill: "#fff"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "fs-16 ms-5"
  }, [_vm._v(_vm._s(_vm.$t("rating__reviews")))])])]), _vm._v(" "), _c("v-expansion-panel-content", {}, [_c("ProductReviews", {
    attrs: {
      id: _vm.productDetails.id,
      "is-loading": _vm.detailsLoading,
      "review-summary": _vm.reviewSummary
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _vm.boughtTogetherProducts.length > 0 ? _c("div", {
    staticClass: "mb-5"
  }, [_c("h2", {
    staticClass: "mb-3 fs-21 opacity-80"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("frequently_bought_together")) + "\n                ")]), _vm._v(" "), _c("swiper", {
    attrs: {
      options: _vm.carouselOption
    }
  }, _vm._l(_vm.boughtTogetherProducts, function (product, i) {
    return _c("swiper-slide", {
      key: i
    }, [_c("product-box", {
      attrs: {
        "product-details": product,
        "is-loading": _vm.togetherLoading
      }
    })], 1);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }, [_c("h2", {
    staticClass: "mb-3 fs-21 opacity-80"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("you_may_also_like")) + "\n                ")]), _vm._v(" "), _c("swiper", {
    attrs: {
      options: _vm.carouselOption
    }
  }, _vm._l(_vm.moreProducts, function (product, i) {
    return _c("swiper-slide", {
      key: i
    }, [_c("product-box", {
      attrs: {
        "product-details": product,
        "is-loading": _vm.moreLoading
      }
    })], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "sticky-top right-bar",
    attrs: {
      lg: "2",
      cols: "12"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      lg: "12",
      md: "3",
      sm: "4",
      cols: "12"
    }
  }, [_vm.is_addon_activated("multi_vendor") ? [_vm.detailsLoading ? [_c("v-skeleton-loader", {
    staticClass: "mb-3",
    attrs: {
      type: "image",
      height: "158"
    }
  })] : _c("div", {
    staticClass: "border rounded bg-light px-3 py-2 mb-3 grey lighten-5 border-gray-300"
  }, [_c("div", {
    staticClass: "fw-700 fs-12 mb-2"
  }, [_vm._v(_vm._s(_vm.$t("shop")))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex mb-2"
  }, [_c("img", {
    staticClass: "flex-shrink-0 border rounded-circle shadow-xl size-50px mb-2",
    attrs: {
      src: _vm.productDetails.shop.logo,
      alt: _vm.productDetails.shop.name
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "fs-13 fw-500 ms-3 mt-2 text-truncate-2 minw-0"
  }, [_vm._v(_vm._s(_vm.productDetails.shop.name))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-center fs-12 mb-2"
  }, [_c("span", {}, [_vm._v(_vm._s(_vm.productDetails.shop.rating.toFixed(2)))]), _vm._v(" "), _c("v-rating", {
    staticClass: "lh-1-5 mx-1",
    attrs: {
      "background-color": "",
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half",
      hover: "",
      "half-increments": "",
      readonly: "",
      size: "12",
      length: "5",
      value: _vm.productDetails.shop.rating
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "opacity-50"
  }, [_vm._v(" (" + _vm._s(_vm.productDetails.shop.review_count) + " " + _vm._s(_vm.$t("ratings")) + ") ")])], 1), _vm._v(" "), _c("router-link", {
    staticClass: "text-primary fw-500 fs-11",
    attrs: {
      to: {
        name: "ShopDetails",
        params: {
          slug: _vm.productDetails.shop.slug
        }
      }
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("visit_store")) + "\n                            ")])], 1)] : _vm._e(), _vm._v(" "), _vm.detailsLoading ? [_c("v-skeleton-loader", {
    attrs: {
      type: "image",
      height: "200"
    }
  })] : [_c("banner", {
    attrs: {
      loading: false,
      banner: _vm.$store.getters["app/banners"].product_page
    }
  })], _vm._v(" "), _vm.productDetails.has_warranty == 1 ? _c("div", {
    staticClass: "bg-soft-primary border border-primary d-flex rounded px-4 py-3 mt-3"
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16.667",
      height: "20",
      viewBox: "0 0 16.667 20"
    }
  }, [_c("g", {
    attrs: {
      id: "Policy",
      transform: "translate(-8.752 -4.644)"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_3102",
      "data-name": "Path 3102",
      d: "M17.085,24.644a.7.7,0,0,1-.211-.033,17.254,17.254,0,0,1-6.395-4.9C8.608,17.09,8.647,11.575,8.841,7.654a.368.368,0,0,1,.133-.267.353.353,0,0,1,.28-.077,9.543,9.543,0,0,0,7.578-2.558.354.354,0,0,1,.509,0,9.507,9.507,0,0,0,7.578,2.558.353.353,0,0,1,.28.077.368.368,0,0,1,.133.267c.194,3.921.233,9.436-1.638,12.06a17.431,17.431,0,0,1-6.395,4.9A.7.7,0,0,1,17.085,24.644ZM9.558,8.063c-.172,3.779-.161,8.855,1.516,11.2A16.654,16.654,0,0,0,17.1,23.9a16.743,16.743,0,0,0,6.029-4.634c1.66-2.339,1.67-7.415,1.5-11.2A9.979,9.979,0,0,1,17.1,5.505,10,10,0,0,1,9.558,8.063Z",
      fill: "#b8b8b8"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      id: "Path_3103",
      "data-name": "Path 3103",
      d: "M25.523,30.137a.358.358,0,0,1-.258-.111L23.387,28.1a.359.359,0,1,1,.513-.5l1.613,1.652,3.405-3.724a.359.359,0,0,1,.531.484l-3.66,4a.376.376,0,0,1-.258.118Z",
      transform: "translate(-9.323 -13.133)",
      fill: "#b8b8b8"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "ms-2"
  }, [_c("div", {
    staticClass: "fw-700"
  }, [_vm._v("\n                                " + _vm._s(_vm.$t("warranty_available")) + "\n                            ")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-decoration-underline grey--text fs-12",
    attrs: {
      to: {
        name: "CustomPage",
        params: {
          pageSlug: "warranty-policy"
        }
      }
    }
  }, [_vm._v("\n                                * " + _vm._s(_vm.$t("view_warranty_policy")) + "\n                            ")])], 1)]) : _vm._e()], 2), _vm._v(" "), _c("v-col", {
    attrs: {
      lg: "12",
      md: "9",
      sm: "8",
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("related_products")))]), _vm._v(" "), _c("v-row", {
    staticClass: "row-cols-2 row-cols-md-3 row-cols-lg-1 gutters-10"
  }, _vm._l(_vm.relatedProducts, function (product, i) {
    return _c("v-col", {
      key: i,
      staticClass: "py-2"
    }, [_c("product-box", {
      attrs: {
        "product-details": product,
        "is-loading": _vm.relatedLoading,
        "box-style": "two"
      }
    })], 1);
  }), 1)], 1)])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (max-width: 1263px) {\n}\n@media (min-width: 1264px) {\n.main-bar[data-v-2f275ac8] {\r\n        max-width: calc(100% - 224px);\n}\n.right-bar[data-v-2f275ac8] {\r\n        width: 224px;\r\n        max-width: 224px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/product/ProductReviews.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/product/ProductReviews.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductReviews_vue_vue_type_template_id_5ca03f77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductReviews.vue?vue&type=template&id=5ca03f77& */ "./resources/js/components/product/ProductReviews.vue?vue&type=template&id=5ca03f77&");
/* harmony import */ var _ProductReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductReviews.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductReviews_vue_vue_type_template_id_5ca03f77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductReviews_vue_vue_type_template_id_5ca03f77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductReviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductReviews.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/product/ProductReviews.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductReviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductReviews.vue?vue&type=template&id=5ca03f77&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/product/ProductReviews.vue?vue&type=template&id=5ca03f77& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviews_vue_vue_type_template_id_5ca03f77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductReviews.vue?vue&type=template&id=5ca03f77& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductReviews.vue?vue&type=template&id=5ca03f77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviews_vue_vue_type_template_id_5ca03f77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductReviews_vue_vue_type_template_id_5ca03f77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product/ProductSingleReview.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/product/ProductSingleReview.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSingleReview_vue_vue_type_template_id_50b1ded8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSingleReview.vue?vue&type=template&id=50b1ded8& */ "./resources/js/components/product/ProductSingleReview.vue?vue&type=template&id=50b1ded8&");
/* harmony import */ var _ProductSingleReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSingleReview.vue?vue&type=script&lang=js& */ "./resources/js/components/product/ProductSingleReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSingleReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSingleReview_vue_vue_type_template_id_50b1ded8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductSingleReview_vue_vue_type_template_id_50b1ded8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/ProductSingleReview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/ProductSingleReview.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/product/ProductSingleReview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSingleReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSingleReview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductSingleReview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSingleReview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/ProductSingleReview.vue?vue&type=template&id=50b1ded8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/product/ProductSingleReview.vue?vue&type=template&id=50b1ded8& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSingleReview_vue_vue_type_template_id_50b1ded8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductSingleReview.vue?vue&type=template&id=50b1ded8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/ProductSingleReview.vue?vue&type=template&id=50b1ded8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSingleReview_vue_vue_type_template_id_50b1ded8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSingleReview_vue_vue_type_template_id_50b1ded8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/ProductDetails.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/ProductDetails.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetails_vue_vue_type_template_id_2f275ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true& */ "./resources/js/pages/ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true&");
/* harmony import */ var _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=script&lang=js& */ "./resources/js/pages/ProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductDetails_vue_vue_type_style_index_0_id_2f275ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css& */ "./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetails_vue_vue_type_template_id_2f275ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetails_vue_vue_type_template_id_2f275ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f275ac8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ProductDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ProductDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/ProductDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_style_index_0_id_2f275ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=style&index=0&id=2f275ac8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_style_index_0_id_2f275ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_style_index_0_id_2f275ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_style_index_0_id_2f275ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_style_index_0_id_2f275ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_2f275ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ProductDetails.vue?vue&type=template&id=2f275ac8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_2f275ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_2f275ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);