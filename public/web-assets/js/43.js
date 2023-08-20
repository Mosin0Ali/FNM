(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
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
      form: {
        refund_items: [],
        refund_reasons: [],
        refund_note: "",
        attachments: null
      },
      orderCode: null,
      order: {},
      loading: false
    };
  },
  validations: {
    form: {
      refund_reasons: {
        required: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["requiredIf"])(function () {
          return this.refundSettings.refund_reason_types && this.refundSettings.refund_reason_types.length > 0;
        })
      },
      refund_note: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('app', ['refundSettings'])), {}, {
    headers: function headers() {
      var headers = [{
        text: '#',
        align: 'start',
        sortable: false,
        value: 'serial'
      }, {
        text: this.$i18n.t('product'),
        sortable: false,
        value: 'product'
      }, {
        text: this.$i18n.t('quantity'),
        sortable: false,
        value: 'quantity'
      }, {
        text: this.$i18n.t('unit_price'),
        sortable: false,
        value: 'unit_price'
      }, {
        text: this.$i18n.t('total'),
        sortable: false,
        align: 'end',
        value: 'total'
      }];
      return headers;
    },
    refundReasonsErrors: function refundReasonsErrors() {
      var errors = [];
      if (!this.$v.form.refund_reasons.$dirty) return errors;
      !this.$v.form.refund_reasons.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    refundNoteErrors: function refundNoteErrors() {
      var errors = [];
      if (!this.$v.form.refund_note.$dirty) return errors;
      !this.$v.form.refund_note.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    }
  }),
  methods: {
    getDetails: function getDetails(orderId) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "user/refund-request/create/".concat(orderId));
            case 2:
              res = _context.sent;
              if (res.data.success) {
                _this.orderCode = res.data.order_code;
                _this.order = res.data.order;
                _this.order.products.data.forEach(function (product) {
                  var item = {
                    status: false,
                    order_detail_id: product.order_detail_id,
                    quantity: product.quantity,
                    unit_price: product.price,
                    unit_tax: product.tax
                  };
                  _this.form.refund_items.push(item);
                });
              } else {
                _this.snack({
                  message: res.data.message,
                  color: "red"
                });
                _this.$router.push({
                  name: "404"
                });
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    sendRefundRequest: function sendRefundRequest() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var refund_items, formData, res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.$v.form.$touch();
              if (!_this2.$v.form.$anyError) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              refund_items = _this2.form.refund_items.map(function (item) {
                return item.status;
              }).filter(function (item) {
                return item;
              });
              if (!(refund_items.length == 0)) {
                _context2.next = 7;
                break;
              }
              _this2.snack({
                message: _this2.$i18n.t("please_select_a_product."),
                color: "red"
              });
              return _context2.abrupt("return");
            case 7:
              _this2.loading = true;
              refund_items = JSON.stringify(_this2.form.refund_items.map(function (item) {
                var a = {
                  order_detail_id: item.order_detail_id,
                  quantity: item.quantity,
                  status: item.status
                };
                return a;
              }).filter(function (item) {
                return item.status;
              }));
              formData = new FormData();
              formData.append('refund_items', refund_items);
              formData.append('order_id', _this2.order.id);
              formData.append('refund_reasons', _this2.form.refund_reasons);
              formData.append('refund_note', _this2.form.refund_note);
              if (_this2.form.attachments) {
                _this2.form.attachments.forEach(function (file, index) {
                  formData.append("attachments[".concat(index, "]"), file);
                });
              }
              _context2.next = 17;
              return _this2.call_api("post", "user/refund-request/store", formData, true);
            case 17:
              res = _context2.sent;
              if (res.data.success) {
                _this2.snack({
                  message: res.data.message
                });
                _this2.$router.push({
                  name: "RefundRequests"
                });
              } else {
                _this2.snack({
                  message: res.data.message,
                  color: "red"
                });
              }
              _this2.loading = false;
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    calculateRefund: function calculateRefund() {
      var amount = 0;
      this.form.refund_items.forEach(function (item) {
        amount += item.status ? (item.unit_price + item.unit_tax) * item.quantity : 0;
      });
      this.form.refund_amount = amount;
    }
  },
  created: function created() {
    this.getDetails(this.$route.params.orderId);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=template&id=25111552&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=template&id=25111552& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "ps-lg-7 pt-4"
  }, [_c("h1", {
    staticClass: "text-h6 fw-700 mb-2"
  }, [_vm._v(_vm._s(_vm.$t("create_new_refund_request")))]), _vm._v(" "), !_vm.is_empty_obj(_vm.order) ? _c("v-form", {
    attrs: {
      "lazy-validation": "",
      autocomplete: "chrome-off",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendRefundRequest();
      }
    }
  }, [_c("v-card", {
    staticClass: "mb-6",
    attrs: {
      elevation: "0",
      outlined: ""
    }
  }, [_c("v-card-title", [_vm._v(_vm._s(_vm.$t("order_code")) + ": " + _vm._s(_vm.orderCode))]), _vm._v(" "), _c("v-card-text", [_c("v-data-table", {
    attrs: {
      headers: _vm.headers,
      items: _vm.order.products.data,
      "hide-default-footer": "",
      "mobile-breakpoint": "750",
      "item-key": "order_detail_id"
    },
    scopedSlots: _vm._u([{
      key: "item.serial",
      fn: function fn(_ref) {
        var item = _ref.item,
          index = _ref.index;
        return [_c("v-checkbox", {
          staticClass: "mt-1",
          attrs: {
            "on-icon": "la-check",
            "hide-details": "",
            name: "order_detail_ids"
          },
          model: {
            value: _vm.form.refund_items[index].status,
            callback: function callback($$v) {
              _vm.$set(_vm.form.refund_items[index], "status", $$v);
            },
            expression: "form.refund_items[index].status"
          }
        })];
      }
    }, {
      key: "item.product",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("div", {
          staticClass: "d-flex align-center"
        }, [_c("img", {
          staticClass: "size-70px flex-shrink-0",
          attrs: {
            src: item.thumbnail,
            alt: item.name
          },
          on: {
            error: function error($event) {
              return _vm.imageFallback($event);
            }
          }
        }), _vm._v(" "), _c("div", {
          staticClass: "flex-grow-1 ms-4"
        }, [_c("div", {
          staticClass: "text-truncate-2"
        }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), item.combinations.length > 0 ? _c("div", {}, _vm._l(item.combinations, function (combination, j) {
          return _c("span", {
            key: j,
            staticClass: "me-4 py-1 fs-12"
          }, [_c("span", {
            staticClass: "opacity-70"
          }, [_vm._v(_vm._s(combination.attribute))]), _vm._v(" : "), _c("span", {
            staticClass: "fw-500"
          }, [_vm._v(_vm._s(combination.value))])]);
        }), 0) : _vm._e()])])];
      }
    }, {
      key: "item.quantity",
      fn: function fn(_ref3) {
        var item = _ref3.item,
          index = _ref3.index;
        return [_c("vue-numeric-input", {
          attrs: {
            min: 1,
            max: item.quantity,
            step: 1,
            align: "center",
            size: "110px"
          },
          model: {
            value: _vm.form.refund_items[index].quantity,
            callback: function callback($$v) {
              _vm.$set(_vm.form.refund_items[index], "quantity", $$v);
            },
            expression: "form.refund_items[index].quantity"
          }
        })];
      }
    }, {
      key: "item.unit_price",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("span", {
          staticClass: "d-block fw-600"
        }, [_vm._v(_vm._s(_vm.format_price(item.price + item.tax)))])];
      }
    }, {
      key: "item.total",
      fn: function fn(_ref5) {
        var item = _ref5.item;
        return [_c("span", {
          staticClass: "d-block fw-600"
        }, [_vm._v(_vm._s(_vm.format_price(item.total)))])];
      }
    }], null, true)
  })], 1)], 1), _vm._v(" "), _c("v-card", {
    staticClass: "mb-6",
    attrs: {
      elevation: "0",
      outlined: ""
    }
  }, [_c("v-card-title", {}, [_vm._v(_vm._s(_vm.$t("refund_information")))]), _vm._v(" "), _c("v-card-text", [_vm.refundSettings.refund_reason_types && _vm.refundSettings.refund_reason_types.length > 0 ? _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v(_vm._s(_vm.$t("refund_reasons")))]), _vm._v(" "), _c("v-select", {
    attrs: {
      items: _vm.refundSettings.refund_reason_types,
      label: _vm.$t("choose_one"),
      "menu-props": {
        offsetY: true
      },
      "error-messages": _vm.refundReasonsErrors,
      "hide-details": "auto",
      flat: "",
      outlined: "",
      solo: "",
      multiple: "",
      required: ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.refund_reasons.$touch();
      }
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref6) {
        var item = _ref6.item;
        return [_c("span", [_vm._v(_vm._s(item))])];
      }
    }], null, false, 2957485812),
    model: {
      value: _vm.form.refund_reasons,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "refund_reasons", $$v);
      },
      expression: "form.refund_reasons"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v(_vm._s(_vm.$t("refund_note")))]), _vm._v(" "), _c("v-textarea", {
    attrs: {
      placeholder: _vm.$t("refund_note"),
      "error-messages": _vm.refundNoteErrors,
      "hide-details": "auto",
      rows: "3",
      required: "",
      outlined: "",
      "no-resize": ""
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.refund_note.$touch();
      }
    },
    model: {
      value: _vm.form.refund_note,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "refund_note", $$v);
      },
      expression: "form.refund_note"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "mb-1 fs-13 fw-500"
  }, [_vm._v(_vm._s(_vm.$t("attachments")))]), _vm._v(" "), _c("v-file-input", {
    attrs: {
      placeholder: _vm.$t("select_images"),
      "prepend-icon": "",
      accept: "image/png, image/jpg, image/jpeg",
      "hide-details": "auto",
      outlined: "",
      multiple: "",
      dense: "",
      solo: "",
      flat: "",
      clearable: "",
      "clear-icon": "las la-times"
    },
    scopedSlots: _vm._u([{
      key: "selection",
      fn: function fn(_ref7) {
        var text = _ref7.text;
        return [_c("v-chip", {
          attrs: {
            small: "",
            label: "",
            color: "primary"
          }
        }, [_vm._v("\n                                " + _vm._s(text) + "\n                            ")])];
      }
    }], null, false, 1221588800),
    model: {
      value: _vm.form.attachments,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "attachments", $$v);
      },
      expression: "form.attachments"
    }
  })], 1), _vm._v(" "), _c("v-btn", {
    staticClass: "px-10 mt-2",
    attrs: {
      type: "submit",
      color: "primary",
      elevation: "0",
      loading: _vm.loading,
      disabled: _vm.loading
    },
    on: {
      click: _vm.sendRefundRequest
    }
  }, [_vm._v(_vm._s(_vm.$t("request_refund")))])], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/user/refund_request/RefundRequestCreate.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/user/refund_request/RefundRequestCreate.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RefundRequestCreate_vue_vue_type_template_id_25111552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RefundRequestCreate.vue?vue&type=template&id=25111552& */ "./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=template&id=25111552&");
/* harmony import */ var _RefundRequestCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RefundRequestCreate.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RefundRequestCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RefundRequestCreate_vue_vue_type_template_id_25111552___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RefundRequestCreate_vue_vue_type_template_id_25111552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/refund_request/RefundRequestCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundRequestCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RefundRequestCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundRequestCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=template&id=25111552&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=template&id=25111552& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundRequestCreate_vue_vue_type_template_id_25111552___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RefundRequestCreate.vue?vue&type=template&id=25111552& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/refund_request/RefundRequestCreate.vue?vue&type=template&id=25111552&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundRequestCreate_vue_vue_type_template_id_25111552___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundRequestCreate_vue_vue_type_template_id_25111552___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);