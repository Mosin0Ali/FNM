(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-tel-input */ "./node_modules/vue-tel-input/dist/vue-tel-input.umd.min.js");
/* harmony import */ var vue_tel_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_tel_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/address/AddressDialog.vue */ "./resources/js/components/address/AddressDialog.vue");
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
      mobileInputProps: {
        inputOptions: {
          type: 'tel',
          placeholder: 'phone number'
        },
        dropdownOptions: {
          showDialCodeInSelection: false,
          showFlags: true,
          showDialCodeInList: true
        },
        autoDefaultCountry: false,
        validCharactersOnly: true,
        mode: 'international'
      },
      form: {
        name: "",
        email: "",
        phone: "",
        invalidPhone: false,
        avatar: "",
        previewAvatar: "",
        oldPassword: "",
        password: "",
        confirmPassword: ""
      },
      passwordShow: false,
      addDialogShow: false,
      infoUpdateLoading: false,
      addressSelectedForEdit: {}
    };
  },
  components: {
    VueTelInput: vue_tel_input__WEBPACK_IMPORTED_MODULE_2__["VueTelInput"],
    AddressDialog: _components_address_AddressDialog_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  validations: {
    form: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      // email: {
      //     email,
      //     required
      // },
      // oldPassword: { required},
      password: {
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(6)
      },
      confirmPassword: {
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["currentUser"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('app', ['availableCountries'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("address", ["getAddresses", "addressesLoaded", "getDefaultShippingAddress", "getDefaultBillingAddress"])), {}, {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.form.name.required && errors.push(this.$i18n.t("this_field_is_required"));
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.required && errors.push(this.$i18n.t("this_field_is_required"));
      !this.$v.form.email.email && errors.push(this.$i18n.t("this_field_is_required_a_valid_email"));
      return errors;
    },
    oldPasswordErrors: function oldPasswordErrors() {
      // const errors = [];
      // if (!this.$v.form.oldPassword.$dirty) return errors;
      // !this.$v.form.oldPassword.required &&
      //     errors.push(this.$i18n.t("this_field_is_required"))
      // return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.form.password.$dirty) return errors;
      !this.$v.form.password.minLength && errors.push(this.$i18n.t("password_must_be_minimum_6_characters"));
      return errors;
    },
    confirmPasswordErrors: function confirmPasswordErrors() {
      var errors = [];
      if (!this.$v.form.confirmPassword.$dirty) return errors;
      !this.$v.form.confirmPassword.sameAsPassword && errors.push(this.$i18n.t("password_and_confirm_password_should_match"));
      return errors;
    }
  }),
  created: function created() {
    this.form.name = this.currentUser.name;
    this.form.email = this.currentUser.email;
    this.form.phone = this.currentUser.phone;
    this.form.previewAvatar = this.currentUser.avatar;
    this.fetchAddresses();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("auth", ["setUser"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("address", ["setAddresses"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("address", ["fetchAddresses"])), {}, {
    previewThumbnail: function previewThumbnail(event) {
      var _this = this;
      this.form.avatar = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          _this.form.previewAvatar = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    phoneValidate: function phoneValidate(phone) {
      this.form.invalidPhone = phone.valid ? false : true;
    },
    updateBasic: function updateBasic() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var formData, key, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // if(this.form.email == ""){
              //     this.snack({
              //         message: "Email is required.",
              //         color: "red"
              //     });
              //     return;
              // }
              // if(this.form.email != "" && !this.$v.form.email.email){
              //     this.snack({
              //         message: "Email must be valid.",
              //         color: "red"
              //     });
              //     return;
              // }
              // if(this.form.phone != ""  && this.form.invalidPhone){
              //     this.snack({
              //         message: "Phone number must be valid.",
              //         color: "red"
              //     });
              //     return;
              // }

              _this2.$v.form.$touch();
              if (!_this2.$v.form.$anyError) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              // this.form.phone = this.form.phone.replace(/\s/g, '')
              _this2.infoUpdateLoading = true;
              formData = new FormData();
              for (key in _this2.form) {
                formData.append(key, _this2.form[key]);
              }
              _context.next = 8;
              return _this2.call_api("post", "user/info/update", formData, true);
            case 8:
              res = _context.sent;
              if (res.data.success) {
                _this2.setUser(res.data.user);
                _this2.snack({
                  message: res.data.message
                });
              } else {
                _this2.snack({
                  message: res.data.message,
                  color: "red"
                });
              }
              _this2.infoUpdateLoading = false;
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    deleteAddress: function deleteAddress(id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.call_api("get", "user/address/delete/".concat(id));
            case 2:
              res = _context2.sent;
              if (res.data.success) {
                _this3.setAddresses(res.data.data);
                _this3.snack({
                  message: res.data.message
                });
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    editAddress: function editAddress(address) {
      this.addressSelectedForEdit = address;
      this.addDialogShow = true;
    },
    markDefaultShipping: function markDefaultShipping(id) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this4.call_api("get", "user/address/default-shipping/".concat(id));
            case 2:
              res = _context3.sent;
              if (res.data.success) {
                _this4.setAddresses(res.data.data);
                _this4.snack({
                  message: res.data.message
                });
              } else {
                _this4.snack({
                  message: _this4.$i18n.t("something_went_wrong"),
                  color: "red"
                });
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    markDefaultBilling: function markDefaultBilling(id) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var res;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.call_api("get", "user/address/default-billing/".concat(id));
            case 2:
              res = _context4.sent;
              if (res.data.success) {
                _this5.setAddresses(res.data.data);
                _this5.snack({
                  message: res.data.message
                });
              } else {
                _this5.snack({
                  message: _this5.$i18n.t("something_went_wrong"),
                  color: "red"
                });
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    addressDialogClosed: function addressDialogClosed() {
      this.addressSelectedForEdit = {};
      this.addDialogShow = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "fs-21 fw-700 opacity-80 mb-5"
  }, [_vm._v(_vm._s(_vm.$t("profile")))]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      xl: "8"
    }
  }, [_c("v-card", {
    staticClass: "mb-6",
    attrs: {
      elevation: "0"
    }
  }, [_c("v-card-title", {
    staticClass: "pa-0 fs-16 fw-700"
  }, [_vm._v(_vm._s(_vm.$t("profile_information")))]), _vm._v(" "), _c("v-form", {
    staticClass: "py-4",
    attrs: {
      "lazy-validation": "",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateBasic();
      }
    }
  }, [_c("input", {
    staticStyle: {
      width: "0",
      height: "0",
      border: "0",
      padding: "0"
    },
    attrs: {
      type: "email",
      name: "hidden"
    }
  }), _vm._v(" "), _c("input", {
    staticStyle: {
      width: "0",
      height: "0",
      border: "0",
      padding: "0"
    },
    attrs: {
      type: "password",
      name: "hidden"
    }
  }), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("full_name")))]), _vm._v(" "), _c("v-text-field", {
    staticClass: "mb-3",
    attrs: {
      placeholder: _vm.$t("full_name"),
      "error-messages": _vm.nameErrors,
      outlined: "",
      "hide-details": "auto"
    },
    model: {
      value: _vm.form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  }), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("email")))]), _vm._v(" "), _c("v-text-field", {
    staticClass: "mb-3",
    attrs: {
      placeholder: _vm.$t("email_address"),
      outlined: "",
      "hide-details": "auto",
      disabled: ""
    },
    model: {
      value: _vm.form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  }), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("phone_number")))]), _vm._v(" "), _c("vue-tel-input", _vm._b({
    staticClass: "mb-3 opacity-80",
    attrs: {
      onlyCountries: _vm.availableCountries,
      disabled: ""
    },
    on: {
      validate: _vm.phoneValidate
    },
    model: {
      value: _vm.form.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone", $$v);
      },
      expression: "form.phone"
    }
  }, "vue-tel-input", _vm.mobileInputProps, false)), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("new_password")))]), _vm._v(" "), _c("v-text-field", {
    staticClass: "mb-3",
    attrs: {
      placeholder: "******",
      type: "password",
      "error-messages": _vm.passwordErrors,
      outlined: "",
      "hide-details": "auto"
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.password.$touch();
      }
    },
    model: {
      value: _vm.form.password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "password", $$v);
      },
      expression: "form.password"
    }
  }), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("confirm_password")))]), _vm._v(" "), _c("v-text-field", {
    staticClass: "mb-3",
    attrs: {
      placeholder: "******",
      type: "password",
      "error-messages": _vm.confirmPasswordErrors,
      outlined: "",
      "hide-details": "auto"
    },
    on: {
      blur: function blur($event) {
        return _vm.$v.form.confirmPassword.$touch();
      }
    },
    model: {
      value: _vm.form.confirmPassword,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "confirmPassword", $$v);
      },
      expression: "form.confirmPassword"
    }
  }), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("profile_image")))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column align-center justify-center border rounded pa-6 mb-3"
  }, [_c("div", {
    staticClass: "avatar-upload"
  }, [_c("v-avatar", {
    attrs: {
      size: "160"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.form.previewAvatar
    },
    on: {
      error: function error($event) {
        return _vm.imageFallback($event);
      }
    }
  })]), _vm._v(" "), _c("label", [_c("input", {
    attrs: {
      type: "file",
      id: "avatar-input",
      accept: "image/png, image/jpg, image/jpeg"
    },
    on: {
      change: _vm.previewThumbnail
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "las la-image"
  })])], 1), _vm._v(" "), _c("label", {
    staticClass: "border border-gray-300 fs-14 fw-500 grey lighten-4 mt-3 opacity-50 px-4 py-1 rounded c-pointer",
    attrs: {
      "for": "avatar-input"
    }
  }, [_vm._v(_vm._s(_vm.$t("select_image")))])]), _vm._v(" "), _c("v-btn", {
    staticClass: "px-10",
    attrs: {
      type: "submit",
      loading: _vm.infoUpdateLoading,
      disabled: _vm.infoUpdateLoading,
      color: "primary",
      elevation: "0"
    },
    on: {
      click: _vm.updateBasic
    }
  }, [_vm._v(_vm._s(_vm.$t("update")))])], 1)], 1), _vm._v(" "), _c("v-card", {
    attrs: {
      elevation: "0"
    }
  }, [_c("address-dialog", {
    attrs: {
      show: _vm.addDialogShow,
      "old-address": _vm.addressSelectedForEdit
    },
    on: {
      close: _vm.addressDialogClosed
    }
  }), _vm._v(" "), _c("v-card-title", {
    staticClass: "pa-0 fs-16 fw-700 mb-4"
  }, [_c("span", {}, [_vm._v(_vm._s(_vm.$t("addresses")))]), _vm._v(" "), _c("v-btn", {
    staticClass: "ms-auto",
    attrs: {
      color: "primary",
      elevation: "0"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        _vm.addDialogShow = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("add_new")))])], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-4 row-cols-1 row-cols-sm-2 gutters-10"
  }, [_c("v-col", [_c("div", {
    staticClass: "fs-13 fw-600 opacity-80 mb-2"
  }, [_vm._v(_vm._s(_vm.$t("default_shipping_address")))]), _vm._v(" "), _vm.getDefaultShippingAddress ? _c("div", {
    staticClass: "border rounded pa-4 fs-13"
  }, [_c("div", [_vm._v(_vm._s(_vm.getDefaultShippingAddress.address))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultShippingAddress.postal_code) + ", " + _vm._s(_vm.getDefaultShippingAddress.city) + ", " + _vm._s(_vm.getDefaultShippingAddress.state))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultShippingAddress.country))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultShippingAddress.phone))])]) : _vm._e()]), _vm._v(" "), _c("v-col", [_c("div", {
    staticClass: "fs-13 fw-600 opacity-80 mb-2"
  }, [_vm._v(_vm._s(_vm.$t("default_billing_address")))]), _vm._v(" "), _vm.getDefaultBillingAddress ? _c("div", {
    staticClass: "border rounded pa-4 fs-13"
  }, [_c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.address))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.postal_code) + ", " + _vm._s(_vm.getDefaultBillingAddress.city) + ", " + _vm._s(_vm.getDefaultBillingAddress.state))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.country))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.getDefaultBillingAddress.phone))])]) : _vm._e()])], 1)], 1), _vm._v(" "), _c("v-card", {
    attrs: {
      elevation: "0"
    }
  }, [_c("v-card-title", {
    staticClass: "pa-0 fs-16 fw-700 mb-4"
  }, [_vm._v(_vm._s(_vm.$t("all_addresses")))]), _vm._v(" "), _c("div", [_vm.addressesLoaded && _vm.getAddresses.length > 0 ? _c("v-row", {
    staticClass: "row-cols-1 row-cols-sm-2 gutters-10"
  }, _vm._l(_vm.getAddresses, function (address, i) {
    return _c("v-col", {
      key: i
    }, [_c("div", {
      staticClass: "border rounded py-4 ps-4 pe-9 fs-13 position-relative"
    }, [_c("div", [_vm._v(_vm._s(address.address))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(address.postal_code) + ", " + _vm._s(address.city) + ", " + _vm._s(address.state))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(address.country))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(address.phone))]), _vm._v(" "), _c("v-menu", {
      attrs: {
        "offset-y": "",
        left: ""
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn(_ref) {
          var on = _ref.on,
            attrs = _ref.attrs;
          return [_c("v-btn", _vm._g(_vm._b({
            staticClass: "absolute-top-right",
            attrs: {
              color: "transparent",
              elevation: "0",
              fab: "",
              small: ""
            }
          }, "v-btn", attrs, false), on), [_c("i", {
            staticClass: "las la-ellipsis-v fs-18"
          })])];
        }
      }], null, true)
    }, [_vm._v(" "), _c("v-list", {}, [_c("v-list-item", {
      staticClass: "c-pointer",
      on: {
        click: function click($event) {
          return _vm.editAddress(address);
        }
      }
    }, [_c("v-list-item-title", [_vm._v(_vm._s(_vm.$t("edit")))])], 1), _vm._v(" "), _c("v-list-item", {
      staticClass: "c-pointer",
      on: {
        click: function click($event) {
          return _vm.markDefaultShipping(address.id);
        }
      }
    }, [_c("v-list-item-title", [_vm._v(_vm._s(_vm.$t("mark_as_default_shipping_address")))])], 1), _vm._v(" "), _c("v-list-item", {
      staticClass: "c-pointer",
      on: {
        click: function click($event) {
          return _vm.markDefaultBilling(address.id);
        }
      }
    }, [_c("v-list-item-title", [_vm._v(_vm._s(_vm.$t("mark_as_default_billing_address")))])], 1), _vm._v(" "), _c("v-list-item", {
      staticClass: "c-pointer",
      on: {
        click: function click($event) {
          return _vm.deleteAddress(address.id);
        }
      }
    }, [_c("v-list-item-title", [_vm._v(_vm._s(_vm.$t("delete")))])], 1)], 1)], 1)], 1)]);
  }), 1) : _c("div", {
    staticClass: "text-center"
  }, [_c("div", [_vm._v(_vm._s(_vm.$t("no_saved_address")))])])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "auto"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/user/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/user/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_aa78eaa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=aa78eaa4& */ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_aa78eaa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_aa78eaa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=aa78eaa4& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);