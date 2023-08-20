(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AllBlogs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_product_SocialShare_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/SocialShare.vue */ "./resources/js/components/product/SocialShare.vue");
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
      loading: true,
      searchKeyword: '',
      currentPage: 1,
      totalPages: 1,
      blogs: [{}, {}, {}],
      recentBlogs: [{}, {}, {}, {}, {}],
      filterDrawerOpen: false,
      blogCategories: [],
      queryParamBlog: {
        page: 1,
        categorySlug: null,
        searchKeyword: ''
      },
      currentCategory: {}
    };
  },
  components: {
    SocialShare: _components_product_SocialShare_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    toggleFilterDrawer: function toggleFilterDrawer(status) {
      this.filterDrawerOpen = status;
    },
    pageSwitch: function pageSwitch(pageNumber) {
      this.$router.push({
        query: _objectSpread(_objectSpread({}, this.$route.query), {}, {
          page: this.queryParamBlog.page
        })
      })["catch"](function () {});
      this.getBlogList({
        page: pageNumber
      });
    },
    search: function search() {
      this.$router.push({
        name: "SearchBlogs",
        params: this.queryParamBlog.searchKeyword.length > 0 ? {
          searchKeyword: this.queryParamBlog.searchKeyword
        } : {},
        query: {
          page: 1
        }
      })["catch"](function () {});
    },
    getBlogCategories: function getBlogCategories() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "all-blog-categories");
            case 2:
              res = _context.sent;
              if (res.data.success) {
                _this.blogCategories = res.data.data;
                _this.recentBlogs = res.data.recentBlogs.data;
              } else {
                _this.snack({
                  message: _this.$i18n.t("something_went_wrong"),
                  color: "red"
                });
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getBlogList: function getBlogList(obj) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var params, url, res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              params = _objectSpread(_objectSpread({}, _this2.queryParamBlog), obj);
              url = 'all-blogs/search?';
              url += "&page=".concat(_this2.queryParamBlog.page);
              url += params.categorySlug ? "&category_slug=".concat(params.categorySlug) : '';
              url += params.searchKeyword ? "&searchKeyword=".concat(params.searchKeyword) : '';
              _context2.next = 8;
              return _this2.call_api("get", url);
            case 8:
              res = _context2.sent;
              if (res.data.success) {
                _this2.blogs = res.data.blogs.data;
                _this2.totalPages = res.data.totalPage;
                _this2.queryParamBlog.page = res.data.currentPage;
                _this2.currentCategory = res.data.currentCategory ? res.data.currentCategory : {};
              }
              if (params.searchKeyword.length > 0) {
                _this2.searchKeyword = params.searchKeyword;
              }
              _this2.loading = false;
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  created: function created() {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _this3.queryParamBlog.categorySlug = _this3.$route.params.categorySlug || _this3.queryParamBlog.categorySlug;
            _this3.queryParamBlog.searchKeyword = _this3.$route.params.searchKeyword || _this3.queryParamBlog.searchKeyword;
            if (_this3.$route.query.page) _this3.queryParamBlog.page = _this3.$route.query.page;
            _this3.getBlogCategories();
            _this3.getBlogList({
              page: _this3.queryParamBlog.page,
              categorySlug: _this3.queryParamBlog.categorySlug,
              searchKeyword: _this3.queryParamBlog.searchKeyword
            });
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-container", {
    staticClass: "pt-0 all-blogs"
  }, [_c("v-row", {
    attrs: {
      "no-gutters": "",
      align: "start"
    }
  }, [_c("v-col", {
    staticClass: "w-lg-270px sticky-top",
    attrs: {
      cols: "3"
    }
  }, [_c("div", {
    "class": ["border-end filter-drawer", {
      "open c-scrollbar overflow-y-auto": _vm.filterDrawerOpen
    }]
  }, [_c("div", {
    staticClass: "border-bottom pa-5 d-lg-none d-flex align-center"
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_2643",
      "data-name": "Path 2643",
      d: "M20,5H18.829a3,3,0,0,0-5.659,0H4A1,1,0,0,0,4,7h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2ZM16,7a1,1,0,1,0-1-1A1,1,0,0,0,16,7ZM3,12a1,1,0,0,1,1-1H5.171a3,3,0,0,1,5.659,0H20a1,1,0,0,1,0,2H10.829a3,3,0,0,1-5.659,0H4A1,1,0,0,1,3,12Zm5,1a1,1,0,1,0-1-1A1,1,0,0,0,8,13ZM4,17a1,1,0,0,0,0,2h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2H18.829a3,3,0,0,0-5.659,0Zm13,1a1,1,0,1,1-1-1A1,1,0,0,1,17,18Z",
      transform: "translate(-3 -3)",
      fill: "#2a2e34",
      "fill-rule": "evenodd"
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ms-4 fw-600 fs-14 lh-1"
  }, [_vm._v(_vm._s(_vm.$t("filters")))]), _vm._v(" "), _c("button", {
    staticClass: "ms-auto",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleFilterDrawer(!_vm.filterDrawerOpen);
      }
    }
  }, [_c("i", {
    staticClass: "la la-close fs-20"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "pa-5 min-100vh"
  }, [_c("div", {
    staticClass: "mb-5"
  }, [_c("v-form", {
    staticClass: "border rounded-pill flex-grow-1",
    attrs: {
      rounded: ""
    },
    on: {
      submit: function submit($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.search();
      }
    }
  }, [_c("v-row", {
    attrs: {
      align: "center",
      dense: ""
    }
  }, [_c("v-col", {}, [_c("v-text-field", {
    attrs: {
      placeholder: _vm.$t("search"),
      type: "text",
      "hide-details": "auto",
      solo: "",
      flat: "",
      dense: ""
    },
    model: {
      value: _vm.queryParamBlog.searchKeyword,
      callback: function callback($$v) {
        _vm.$set(_vm.queryParamBlog, "searchKeyword", $$v);
      },
      expression: "queryParamBlog.searchKeyword"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "auto"
    }
  }, [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.search();
      }
    }
  }, [_c("i", {
    staticClass: "las la-search fs-18 ts-05"
  })])], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }, [_c("h4", {
    staticClass: "fw-700 fs-14 mb-4 border-bottom pb-3"
  }, [_vm._v(_vm._s(_vm.$t("categories")))]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "list-unstyled ps-0"
  }, [[_c("li", {
    staticClass: "my-2"
  }, [_c("router-link", {
    "class": ["text-reset fs-14", {
      "fw-600": _vm.is_empty_obj(_vm.currentCategory)
    }],
    attrs: {
      to: {
        name: "AllBlogs"
      }
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.$t("all_categories")))])])], 1), _vm._v(" "), _vm._l(_vm.blogCategories, function (category, i) {
    return _c("li", {
      key: i,
      staticClass: "my-2"
    }, [_vm.is_empty_obj(_vm.currentCategory) ? _c("router-link", {
      staticClass: "text-reset fs-14",
      attrs: {
        to: {
          name: "AllBlogsFilter",
          params: {
            categorySlug: category.slug
          }
        }
      }
    }, [_vm._v(_vm._s(category.name))]) : _c("router-link", {
      "class": ["text-reset fs-14", {
        "fw-600": _vm.currentCategory.slug === category.slug
      }],
      attrs: {
        to: {
          name: "AllBlogsFilter",
          params: {
            categorySlug: category.slug
          }
        }
      }
    }, [_vm._v(_vm._s(category.name))])], 1);
  })]], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-6"
  }, [_c("h4", {
    staticClass: "fw-700 fs-14 mb-4 border-bottom pb-3"
  }, [_vm._v(_vm._s(_vm.$t("social_media")))]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "list-unstyled ps-0"
  }, [[_c("li", {
    staticClass: "my-2"
  }, [_c("SocialShare", {
    attrs: {
      title: _vm.$t("all_blogs")
    }
  })], 1)]], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }, [_c("h4", {
    staticClass: "fw-700 fs-14 mb-4 border-bottom pb-3"
  }, [_vm._v(_vm._s(_vm.$t("recent_blogs")))]), _vm._v(" "), _c("div", [_c("ul", {
    staticClass: "list-unstyled ps-0"
  }, [_vm._l(_vm.recentBlogs, function (blogRecent, iR) {
    return _c("li", {
      key: iR,
      staticClass: "my-2"
    }, [blogRecent ? _c("router-link", {
      staticClass: "text-reset fs-14",
      attrs: {
        to: {
          name: "BlogDetails",
          params: {
            slug: blogRecent.slug
          }
        }
      }
    }, [_c("div", {
      staticClass: "product-box-three"
    }, [_c("div", {
      staticClass: "overflow-hidden rounded border"
    }, [_c("v-row", {
      staticClass: "flex-nowrap pa-1",
      attrs: {
        align: "center",
        "no-gutters": ""
      }
    }, [_c("v-col", {
      staticClass: "flex-shrink-0",
      attrs: {
        cols: "auto"
      }
    }, [_c("div", {
      staticClass: "position-relative"
    }, [_c("router-link", {
      staticClass: "text-reset d-block lh-0 text-center",
      attrs: {
        to: {
          name: "BlogDetails",
          params: {
            slug: blogRecent.slug
          }
        }
      }
    }, [_c("img", {
      staticClass: "size-60px",
      staticStyle: {
        "object-fit": "cover"
      },
      attrs: {
        src: blogRecent.banner,
        alt: blogRecent.title
      },
      on: {
        error: function error($event) {
          return _vm.imageFallback($event);
        }
      }
    })])], 1)]), _vm._v(" "), _c("v-col", {
      staticClass: "minw-0 flex-shrink-0"
    }, [_c("div", {
      staticClass: "px-3 d-flex flex-column py-2"
    }, [_c("h5", {
      staticClass: "opacity-60 fw-400lh-1-6 fs-13 text-truncate-2 h-40px"
    }, [_c("router-link", {
      staticClass: "text-reset",
      attrs: {
        to: {
          name: "BlogDetails",
          params: {
            slug: blogRecent.slug
          }
        }
      }
    }, [_vm._v(_vm._s(blogRecent.title))])], 1)])])], 1)], 1)])]) : _vm._e()], 1);
  })], 2)])])])])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "9"
    }
  }, [_c("div", {
    staticClass: "pt-5 ps-lg-7"
  }, [_c("v-row", {
    attrs: {
      align: "end"
    }
  }, [_c("v-col", {
    staticClass: "pb-0 pt-3",
    attrs: {
      cols: "12",
      sm: ""
    }
  }, [_c("div", {
    staticClass: "d-flex align-center"
  }, [_c("div", [_vm.searchKeyword.length > 0 ? _c("h1", {
    staticClass: "fs-18"
  }, [_vm._v(_vm._s(_vm.$t("search_results_for")) + ' "' + _vm._s(_vm.searchKeyword) + '"')]) : !_vm.is_empty_obj(_vm.currentCategory) ? _c("h1", {
    staticClass: "fs-18"
  }, [_vm._v(_vm._s(_vm.currentCategory.name))]) : _c("h1", {
    staticClass: "fs-18 ml-2"
  }, [_vm._v(_vm._s(_vm.$t("all_blogs")))])]), _vm._v(" "), _c("div", {
    staticClass: "d-lg-none ms-auto ms-sm-0"
  }, [_c("button", {
    staticClass: "ms-4 pa-2 border-gray-300 rounded border d-flex justify-center align-center",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleFilterDrawer(!_vm.filterDrawerOpen);
      }
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 18 18"
    }
  }, [_c("path", {
    attrs: {
      id: "Path_2643",
      "data-name": "Path 2643",
      d: "M20,5H18.829a3,3,0,0,0-5.659,0H4A1,1,0,0,0,4,7h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2ZM16,7a1,1,0,1,0-1-1A1,1,0,0,0,16,7ZM3,12a1,1,0,0,1,1-1H5.171a3,3,0,0,1,5.659,0H20a1,1,0,0,1,0,2H10.829a3,3,0,0,1-5.659,0H4A1,1,0,0,1,3,12Zm5,1a1,1,0,1,0-1-1A1,1,0,0,0,8,13ZM4,17a1,1,0,0,0,0,2h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2H18.829a3,3,0,0,0-5.659,0Zm13,1a1,1,0,1,1-1-1A1,1,0,0,1,17,18Z",
      transform: "translate(-3 -3)",
      fill: "#2a2e34",
      "fill-rule": "evenodd"
    }
  })])])])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-7"
  }, [_vm.blogs.length > 0 ? _c("v-row", {
    staticClass: "row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-3 md-gutters-10"
  }, _vm._l(_vm.blogs, function (blog, i) {
    return _c("v-col", {
      key: i,
      attrs: {
        cols: "8",
        sm: "4"
      }
    }, [_vm.loading ? _c("div", [_c("v-skeleton-loader", {
      staticClass: "pa-2",
      attrs: {
        type: "image",
        height: "100"
      }
    })], 1) : _c("v-card", {
      staticClass: "mx-auto my-6 mx-lg-2 border",
      staticStyle: {
        "box-shadow": "none"
      }
    }, [_c("template", {
      slot: "progress"
    }, [_c("v-progress-linear", {
      attrs: {
        color: "deep-purple",
        height: "10",
        indeterminate: ""
      }
    })], 1), _vm._v(" "), _c("v-img", {
      attrs: {
        height: "250",
        src: blog.banner
      }
    }), _vm._v(" "), _c("v-card-title", {
      staticClass: "text-truncate-2 py-0 my-4 blog-title",
      staticStyle: {
        "font-size": "1rem"
      }
    }, [_vm._v(_vm._s(blog.title))]), _vm._v(" "), _c("v-card-text", {
      staticClass: "pb-0"
    }, [_c("span", {
      staticClass: "grey--text d-block"
    }, [_c("i", [_vm._v(_vm._s(blog.category))])]), _vm._v(" "), _c("span", {
      staticClass: "grey--text"
    }, [_vm._v(_vm._s(blog.created_at))])]), _vm._v(" "), _c("v-card-actions", {
      staticClass: "pt-1"
    }, [_c("v-btn", {
      staticClass: "text-capitalize",
      attrs: {
        color: "primary",
        text: "",
        to: {
          name: "BlogDetails",
          params: {
            slug: blog.slug
          }
        }
      }
    }, [_vm._v("\n                                            " + _vm._s(_vm.$t("read_full_blog")) + "\n                                        ")])], 1)], 2)], 1);
  }), 1) : _c("div", {
    staticClass: "pa-4 text-center fs-20"
  }, [_vm._v(_vm._s(_vm.$t("no_blog_found")))])], 1), _vm._v(" "), _vm.totalPages > 1 ? _c("div", {
    staticClass: "text-center"
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
      input: _vm.pageSwitch
    },
    model: {
      value: _vm.queryParamBlog.page,
      callback: function callback($$v) {
        _vm.$set(_vm.queryParamBlog, "page", $$v);
      },
      expression: "queryParamBlog.page"
    }
  })], 1) : _vm._e()], 1)])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (max-width: 1263px) {\n.sticky-top[data-v-1891ca79]{\n        position: static;\n}\n.filter-drawer[data-v-1891ca79]{\n        position: fixed;\n        width: 350px;\n        max-width: 100vw;\n        height: 100vh;\n        visibility: hidden;\n        right: -350px;\n        top: 0;\n        bottom: 0;\n        background: #fff;\n        z-index: 610;\n        box-shadow: 0 0 50px rgb(0 0 0 / 16%);\n        transition: all 0.3s;\n        -webkit-transition: all 0.3s;\n}\n.filter-drawer.open[data-v-1891ca79]{\n        right: 0;\n        visibility: visible;\n}\n}\n@media (min-width: 1264px) {\n.w-lg-270px[data-v-1891ca79]{\n        width:270px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css&");

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

/***/ "./resources/js/pages/AllBlogs.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/AllBlogs.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllBlogs_vue_vue_type_template_id_1891ca79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true& */ "./resources/js/pages/AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true&");
/* harmony import */ var _AllBlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllBlogs.vue?vue&type=script&lang=js& */ "./resources/js/pages/AllBlogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AllBlogs_vue_vue_type_style_index_0_id_1891ca79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css& */ "./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AllBlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllBlogs_vue_vue_type_template_id_1891ca79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllBlogs_vue_vue_type_template_id_1891ca79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1891ca79",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/AllBlogs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/AllBlogs.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/AllBlogs.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AllBlogs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_style_index_0_id_1891ca79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=style&index=0&id=1891ca79&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_style_index_0_id_1891ca79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_style_index_0_id_1891ca79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_style_index_0_id_1891ca79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_style_index_0_id_1891ca79_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_template_id_1891ca79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AllBlogs.vue?vue&type=template&id=1891ca79&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_template_id_1891ca79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AllBlogs_vue_vue_type_template_id_1891ca79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);