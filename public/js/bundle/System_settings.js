"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["System_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "System Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      setting: {
        client_id: "",
        warehouse_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer: "",
        developed_by: "",
        default_language: ""
      },
      pos_settings: {
        note_customer: "",
        show_note: "",
        show_barcode: "",
        show_discount: "",
        show_phone: "",
        show_email: "",
        show_address: "",
        show_customer: ""
      },
      gateway: {
        stripe_key: "",
        stripe_secret: "",
        deleted: false
      },
      sms: {
        gateway: 'Twilio',
        TWILIO_SID: '',
        TWILIO_TOKEN: '',
        TWILIO_FROM: ''
      },
      server: {
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["refreshUserPermissions"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    //------------- Submit Validation Setting
    Submit_Setting: function Submit_Setting() {
      var _this = this;

      this.$refs.form_setting.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Settings();
        }
      });
    },
    //------------- Submit Validation Pos Setting
    Submit_Pos_Settings: function Submit_Pos_Settings() {
      var _this2 = this;

      this.$refs.Submit_Pos_Settings.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.Update_Pos_Settings();
        }
      });
    },
    //------------- Submit Validation SMTP
    Submit_SMTP: function Submit_SMTP() {
      var _this3 = this;

      this.$refs.form_smtp.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        } else {
          _this3.Update_Smtp();
        }
      });
    },
    //------------- Submit Validation Payment
    Submit_Payment: function Submit_Payment() {
      var _this4 = this;

      this.$refs.form_payment.validate().then(function (success) {
        if (!success) {
          _this4.makeToast("danger", _this4.$t("Please_fill_the_form_correctly"), _this4.$t("Failed"));
        } else {
          _this4.Update_Payment();
        }
      });
    },
    //------------- Submit Validation SMS
    Submit_sms: function Submit_sms() {
      var _this5 = this;

      this.$refs.form_sms.validate().then(function (success) {
        if (!success) {
          _this5.makeToast("danger", _this5.$t("Please_fill_the_form_correctly"), _this5.$t("Failed"));
        } else {
          _this5.Update_SMS();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this6$$refs$L, valid;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this6.$refs.Logo.validate(e);

              case 2:
                _yield$_this6$$refs$L = _context.sent;
                valid = _yield$_this6$$refs$L.valid;

                if (valid) {
                  _this6.setting.logo = e.target.files[0];
                } else {
                  _this6.setting.logo = "";
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this7 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("_method", "put");
      axios.post("settings/" + self.setting.id, self.data).then(function (response) {
        Fire.$emit("Event_Setting");

        _this7.makeToast("success", _this7.$t("Successfully_Updated"), _this7.$t("Success"));

        _this7.refreshUserPermissions();

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this7.SetLocal(self.setting.default_language);
      })["catch"](function (error) {
        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Update_Pos_Settings ----------------\\
    Update_Pos_Settings: function Update_Pos_Settings() {
      var _this8 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.put("pos_settings/" + this.pos_settings.id, {
        note_customer: this.pos_settings.note_customer,
        show_note: this.pos_settings.show_note,
        show_barcode: this.pos_settings.show_barcode,
        show_discount: this.pos_settings.show_discount,
        show_phone: this.pos_settings.show_phone,
        show_email: this.pos_settings.show_email,
        show_address: this.pos_settings.show_address,
        show_customer: this.pos_settings.show_customer
      }).then(function (response) {
        Fire.$emit("Event_Pos_Settings");

        _this8.makeToast("success", _this8.$t("Successfully_Updated"), _this8.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
      });
    },
    //---------------------------------- Update SMTP ----------------\\
    Update_Smtp: function Update_Smtp() {
      var _this9 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.put("SMTP/" + this.server.id, {
        host: this.server.host,
        port: this.server.port,
        username: this.server.username,
        password: this.server.password,
        encryption: this.server.encryption
      }).then(function (response) {
        Fire.$emit("Event_Smtp");

        _this9.makeToast("success", _this9.$t("Successfully_Updated"), _this9.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this9.makeToast("danger", _this9.$t("InvalidData"), _this9.$t("Failed"));
      });
    },
    //---------------------------------- Update Payment Gateway ----------------\\
    Update_Payment: function Update_Payment() {
      var _this10 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("payment_gateway", {
        stripe_key: this.gateway.stripe_key,
        stripe_secret: this.gateway.stripe_secret,
        deleted: this.gateway.deleted
      }).then(function (response) {
        Fire.$emit("Event_payment");

        _this10.makeToast("success", _this10.$t("Successfully_Updated"), _this10.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this10.makeToast("danger", _this10.$t("InvalidData"), _this10.$t("Failed"));
      });
    },
    //---------------------------------- Update sms ----------------\\
    Update_SMS: function Update_SMS() {
      var _this11 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("sms_config", {
        TWILIO_SID: this.sms.TWILIO_SID,
        TWILIO_TOKEN: this.sms.TWILIO_TOKEN,
        TWILIO_FROM: this.sms.TWILIO_FROM
      }).then(function (response) {
        Fire.$emit("Event_sms");

        _this11.makeToast("success", _this11.$t("Successfully_Updated"), _this11.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this11.makeToast("danger", _this11.$t("InvalidData"), _this11.$t("Failed"));
      });
    },
    //---------------------------------- get_sms_config ----------------\\
    get_sms_config: function get_sms_config() {
      var _this12 = this;

      axios.get("get_sms_config").then(function (response) {
        _this12.sms = response.data.sms;
      })["catch"](function (error) {});
    },
    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache: function Clear_Cache() {
      var _this13 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("Clear_Cache").then(function (response) {
        _this13.makeToast("success", _this13.$t("Cache_cleared_successfully"), _this13.$t("Success"));

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this13.makeToast("danger", _this13.$t("Failed_to_clear_cache"), _this13.$t("Failed"));
      });
    },
    //---------------------------------- GET Payment_Gateway ----------------\\
    Get_Payment_Gateway: function Get_Payment_Gateway() {
      var _this14 = this;

      axios.get("Get_payment_gateway").then(function (response) {
        _this14.gateway = response.data.gateway;
      })["catch"](function (error) {});
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this15 = this;

      axios.get("getSettings").then(function (response) {
        _this15.setting = response.data.settings;
        _this15.currencies = response.data.currencies;
        _this15.clients = response.data.clients;
        _this15.warehouses = response.data.warehouses;

        _this15.Get_SMTP();

        _this15.get_pos_Settings();

        _this15.Get_Payment_Gateway();

        _this15.get_sms_config();

        _this15.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this15.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------- GET SMTP ----------------\\ 
    Get_SMTP: function Get_SMTP() {
      var _this16 = this;

      axios.get("getSMTP").then(function (response) {
        _this16.server = response.data.server;
      })["catch"](function (error) {});
    },
    //---------------------------------- Get_pos_Settings ----------------\\ 
    get_pos_Settings: function get_pos_Settings() {
      var _this17 = this;

      axios.get("get_pos_Settings").then(function (response) {
        _this17.pos_settings = response.data.pos_settings;
      })["catch"](function (error) {});
    }
  }),
  //end Methods
  //----------------------------- Created function-------------------
  created: function created() {
    var _this18 = this;

    this.Get_Settings();
    Fire.$on("Event_Smtp", function () {
      _this18.Get_SMTP();
    });
    Fire.$on("Event_payment", function () {
      _this18.Get_Payment_Gateway();
    });
    Fire.$on("Event_Setting", function () {
      _this18.Get_Settings();
    });
    Fire.$on("Event_Pos_Settings", function () {
      _this18.get_pos_Settings();
    });
    Fire.$on("Event_sms", function () {
      _this18.get_sms_config();
    });
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_settings.vue?vue&type=template&id=7bd1aea4& */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&");
/* harmony import */ var _system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_settings.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.render,
  _system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/settings/system_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=template&id=7bd1aea4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main-content" },
    [
      _c("breadcumb", {
        attrs: { page: _vm.$t("SystemSettings"), folder: _vm.$t("Settings") },
      }),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", {
            staticClass: "loading_page spinner spinner-primary mr-3",
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "form_setting" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Setting.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                "no-body": "",
                                header: _vm.$t("SystemSettings"),
                              },
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label:
                                                  _vm.$t("DefaultCurrency"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Currency"),
                                                  options: _vm.currencies.map(
                                                    function (currencies) {
                                                      return {
                                                        label: currencies.name,
                                                        value: currencies.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value:
                                                    _vm.setting.currency_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "currency_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.currency_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Email",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "DefaultEmail"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Email-feedback",
                                                              label: "Email",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "DefaultEmail"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .email,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.email",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Email-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              4279491894
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            ref: "Logo",
                                            attrs: {
                                              name: "Logo",
                                              rules: "mimes:image/*|size:200",
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var validate = ref.validate
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t(
                                                              "ChangeLogo"
                                                            ),
                                                        },
                                                      },
                                                      [
                                                        _c("input", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            label:
                                                              "Choose Logo",
                                                            type: "file",
                                                          },
                                                          on: {
                                                            change:
                                                              _vm.onFileSelected,
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          {
                                                            attrs: {
                                                              id: "Logo-feedback",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3189141354
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Company Name",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "CompanyName"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Company-feedback",
                                                              label:
                                                                "Company Name",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "CompanyName"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .CompanyName,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "CompanyName",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.CompanyName",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Company-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1317089302
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Company Phone",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "CompanyPhone"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Phone-feedback",
                                                              label:
                                                                "Company Phone",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "CompanyPhone"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .CompanyPhone,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "CompanyPhone",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.CompanyPhone",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Phone-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1395357846
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "developed by",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "developed_by"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "developed_by-feedback",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .developed_by,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "developed_by",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.developed_by",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "developed_by-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              4204870398
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "footer",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("footer") +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "footer-feedback",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.setting
                                                                  .footer,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.setting,
                                                                    "footer",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "setting.footer",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "footer-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3264557662
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "DefaultLanguage",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (ref) {
                                                    var valid = ref.valid
                                                    var errors = ref.errors
                                                    return _c(
                                                      "b-form-group",
                                                      {
                                                        attrs: {
                                                          label:
                                                            _vm.$t(
                                                              "DefaultLanguage"
                                                            ) +
                                                            " " +
                                                            "*",
                                                        },
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          class: {
                                                            "is-invalid":
                                                              !!errors.length,
                                                          },
                                                          attrs: {
                                                            state: errors[0]
                                                              ? false
                                                              : valid
                                                              ? true
                                                              : null,
                                                            reduce: function (
                                                              label
                                                            ) {
                                                              return label.value
                                                            },
                                                            placeholder:
                                                              _vm.$t(
                                                                "DefaultLanguage"
                                                              ),
                                                            options: [
                                                              {
                                                                label:
                                                                  "English",
                                                                value: "en",
                                                              },
                                                              {
                                                                label: "French",
                                                                value: "fr",
                                                              },
                                                              {
                                                                label: "Arabic",
                                                                value: "ar",
                                                              },
                                                              {
                                                                label:
                                                                  "Turkish",
                                                                value: "tur",
                                                              },
                                                              {
                                                                label:
                                                                  "Simplified Chinese",
                                                                value: "sm_ch",
                                                              },
                                                              {
                                                                label: "Thaï",
                                                                value: "thai",
                                                              },
                                                              {
                                                                label: "Hindi",
                                                                value: "hn",
                                                              },
                                                              {
                                                                label: "German",
                                                                value: "de",
                                                              },
                                                              {
                                                                label:
                                                                  "Spanish",
                                                                value: "es",
                                                              },
                                                              {
                                                                label:
                                                                  "Italien",
                                                                value: "it",
                                                              },
                                                              {
                                                                label:
                                                                  "Indonesian",
                                                                value: "Ind",
                                                              },
                                                              {
                                                                label:
                                                                  "Traditional Chinese",
                                                                value: "tr_ch",
                                                              },
                                                              {
                                                                label:
                                                                  "Russian",
                                                                value: "ru",
                                                              },
                                                              {
                                                                label:
                                                                  "Vietnamese",
                                                                value: "vn",
                                                              },
                                                              {
                                                                label: "Korean",
                                                                value: "kr",
                                                              },
                                                            ],
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.setting
                                                                .default_language,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.setting,
                                                                "default_language",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "setting.default_language",
                                                          },
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "b-form-invalid-feedback",
                                                          [
                                                            _vm._v(
                                                              _vm._s(errors[0])
                                                            ),
                                                          ]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              2880158493
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label:
                                                  _vm.$t("DefaultCustomer"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Customer"),
                                                  options: _vm.clients.map(
                                                    function (clients) {
                                                      return {
                                                        label: clients.name,
                                                        value: clients.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value: _vm.setting.client_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "client_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.client_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label:
                                                  _vm.$t("DefaultWarehouse"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Warehouse"),
                                                  options: _vm.warehouses.map(
                                                    function (warehouses) {
                                                      return {
                                                        label: warehouses.name,
                                                        value: warehouses.id,
                                                      }
                                                    }
                                                  ),
                                                },
                                                model: {
                                                  value:
                                                    _vm.setting.warehouse_id,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.setting,
                                                      "warehouse_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "setting.warehouse_id",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: {
                                            lg: "12",
                                            md: "12",
                                            sm: "12",
                                          },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Adress",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("Adress") +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("textarea", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.setting
                                                                    .CompanyAdress,
                                                                expression:
                                                                  "setting.CompanyAdress",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Adress-feedback",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Afewwords"
                                                                ),
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.setting
                                                                  .CompanyAdress,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.setting,
                                                                  "CompanyAdress",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Adress-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              758978009
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant: "primary",
                                                    type: "submit",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("submit"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "Submit_Pos_Settings" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Pos_Settings.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                "no-body": "",
                                header: _vm.$t("Pos_Settings"),
                              },
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          attrs: {
                                            lg: "12",
                                            md: "12",
                                            sm: "12",
                                          },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "note",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "Note_to_customer"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "note-feedback",
                                                              label:
                                                                "Note to customer",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Note_to_customer"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.pos_settings
                                                                  .note_customer,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.pos_settings,
                                                                    "note_customer",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "pos_settings.note_customer",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "note-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1637698482
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(_vm.$t("Show_Phone")) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_phone,
                                                    expression:
                                                      "pos_settings.show_phone",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings.show_phone
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_phone,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_phone,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_phone,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_phone",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_phone",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_phone",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(
                                                    _vm.$t("Show_Address")
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_address,
                                                    expression:
                                                      "pos_settings.show_address",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings
                                                      .show_address
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_address,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_address,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_address,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_address",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_address",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_address",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(_vm.$t("Show_Email")) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_email,
                                                    expression:
                                                      "pos_settings.show_email",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings.show_email
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_email,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_email,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_email,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_email",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_email",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_email",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(
                                                    _vm.$t("Show_Customer")
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_customer,
                                                    expression:
                                                      "pos_settings.show_customer",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings
                                                      .show_customer
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_customer,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_customer,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_customer,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_customer",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_customer",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_customer",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "Show_Tax_and_Discount"
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_discount,
                                                    expression:
                                                      "pos_settings.show_discount",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings
                                                      .show_discount
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_discount,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_discount,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_discount,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_discount",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_discount",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_discount",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(
                                                    _vm.$t("Show_barcode")
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_barcode,
                                                    expression:
                                                      "pos_settings.show_barcode",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings
                                                      .show_barcode
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_barcode,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_barcode,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_barcode,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_barcode",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_barcode",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_barcode",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "4" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "Show_Note_to_customer"
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.pos_settings
                                                        .show_note,
                                                    expression:
                                                      "pos_settings.show_note",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.pos_settings.show_note
                                                  )
                                                    ? _vm._i(
                                                        _vm.pos_settings
                                                          .show_note,
                                                        null
                                                      ) > -1
                                                    : _vm.pos_settings
                                                        .show_note,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.pos_settings
                                                          .show_note,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_note",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.pos_settings,
                                                            "show_note",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.pos_settings,
                                                        "show_note",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant: "primary",
                                                    type: "submit",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("submit"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "form_payment" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Payment.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                "no-body": "",
                                header: _vm.$t("Payment_Gateway"),
                              },
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            { attrs: { label: "STRIPE_KEY" } },
                                            [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    _vm.$t("LeaveBlank"),
                                                },
                                                model: {
                                                  value: _vm.gateway.stripe_key,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.gateway,
                                                      "stripe_key",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "gateway.stripe_key",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: { label: "STRIPE_SECRET" },
                                            },
                                            [
                                              _c("b-form-input", {
                                                attrs: {
                                                  type: "password",
                                                  placeholder:
                                                    _vm.$t("LeaveBlank"),
                                                },
                                                model: {
                                                  value:
                                                    _vm.gateway.stripe_secret,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.gateway,
                                                      "stripe_secret",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "gateway.stripe_secret",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3 mb-3",
                                          attrs: { md: "6" },
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "switch switch-primary mr-3",
                                            },
                                            [
                                              _vm._v(
                                                "\n                       " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "Remove_Stripe_Key_Secret"
                                                    )
                                                  ) +
                                                  "\n                        "
                                              ),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.gateway.deleted,
                                                    expression:
                                                      "gateway.deleted",
                                                  },
                                                ],
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.gateway.deleted
                                                  )
                                                    ? _vm._i(
                                                        _vm.gateway.deleted,
                                                        null
                                                      ) > -1
                                                    : _vm.gateway.deleted,
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    var $$a =
                                                        _vm.gateway.deleted,
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.gateway,
                                                            "deleted",
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.gateway,
                                                            "deleted",
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.gateway,
                                                        "deleted",
                                                        $$c
                                                      )
                                                    }
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("span", {
                                                staticClass: "slider",
                                              }),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant: "primary",
                                                    type: "submit",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("submit"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "form_sms" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_sms.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                "no-body": "",
                                header: _vm.$t("SMS_Configuration"),
                              },
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { md: "6" } },
                                        [
                                          _c(
                                            "validation-provider",
                                            { attrs: { name: "Gateway" } },
                                            [
                                              _c(
                                                "b-form-group",
                                                {
                                                  attrs: {
                                                    label: _vm.$t("Gateway"),
                                                  },
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      reduce: function (label) {
                                                        return label.value
                                                      },
                                                      placeholder:
                                                        _vm.$t(
                                                          "Choose_Gateway"
                                                        ),
                                                      options: [
                                                        {
                                                          label: "Twilio",
                                                          value: "Twilio",
                                                        },
                                                      ],
                                                    },
                                                    model: {
                                                      value: _vm.sms.gateway,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.sms,
                                                          "gateway",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "sms.gateway",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "TWILIO_SID",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label: "TWILIO_SID",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "TWILIO_SID-feedback",
                                                              label:
                                                                "TWILIO_SID",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sms
                                                                  .TWILIO_SID,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sms,
                                                                    "TWILIO_SID",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "sms.TWILIO_SID",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "TWILIO_SID-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3763386067
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: { label: "TWILIO_TOKEN" },
                                            },
                                            [
                                              _c("b-form-input", {
                                                attrs: {
                                                  label: "TWILIO_TOKEN",
                                                  placeholder:
                                                    _vm.$t("LeaveBlank"),
                                                },
                                                model: {
                                                  value: _vm.sms.TWILIO_TOKEN,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.sms,
                                                      "TWILIO_TOKEN",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "sms.TWILIO_TOKEN",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "6", md: "6", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "TWILIO_FROM",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              "TWILIO_FROM",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "TWILIO_FROM-feedback",
                                                              label:
                                                                "TWILIO_FROM",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sms
                                                                  .TWILIO_FROM,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sms,
                                                                    "TWILIO_FROM",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "sms.TWILIO_FROM",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "TWILIO_FROM-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3199732955
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant: "primary",
                                                    type: "submit",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("submit"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "validation-observer",
            { ref: "form_smtp" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_SMTP.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "12", md: "12", sm: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              attrs: {
                                "no-body": "",
                                header: _vm.$t("SMTPConfiguration"),
                              },
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "HOST",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("HOST") +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "HOST-feedback",
                                                              label: "HOST",
                                                              placeholder:
                                                                _vm.$t("HOST"),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.server.host,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.server,
                                                                    "host",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "server.host",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "HOST-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              1931176933
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "PORT",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t("PORT") +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "PORT-feedback",
                                                              label: "PORT",
                                                              placeholder:
                                                                _vm.$t("PORT"),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.server.port,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.server,
                                                                    "port",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "server.port",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "PORT-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              2177655621
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Username",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "username"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Username-feedback",
                                                              label: "Username",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "username"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.server
                                                                  .username,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.server,
                                                                    "username",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "server.username",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Username-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              2499207045
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Password",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "password"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Password-feedback",
                                                              label: "Password",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "password"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.server
                                                                  .password,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.server,
                                                                    "password",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "server.password",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Password-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              3858009893
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        {
                                          attrs: { lg: "4", md: "4", sm: "12" },
                                        },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "encryption",
                                              rules: { required: true },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function (
                                                    validationContext
                                                  ) {
                                                    return [
                                                      _c(
                                                        "b-form-group",
                                                        {
                                                          attrs: {
                                                            label:
                                                              _vm.$t(
                                                                "encryption"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "encryption-feedback",
                                                              label:
                                                                "encryption",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "encryption"
                                                                ),
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.server
                                                                  .encryption,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.server,
                                                                    "encryption",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "server.encryption",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "encryption-feedback",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  validationContext
                                                                    .errors[0]
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              2876509381
                                            ),
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  attrs: {
                                                    variant: "primary",
                                                    type: "submit",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("submit"))
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c(
            "b-form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.Clear_Cache.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "b-row",
                { staticClass: "mt-5" },
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "12", md: "12", sm: "12" } },
                    [
                      _c(
                        "b-card",
                        {
                          attrs: {
                            "no-body": "",
                            header: _vm.$t("Clear_Cache"),
                          },
                        },
                        [
                          _c(
                            "b-card-body",
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { md: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: { variant: "primary" },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.Clear_Cache()
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("Clear_Cache"))
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);