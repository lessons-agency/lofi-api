"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_sale"],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadStripe": () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.31.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Create Sale"
  },
  data: function data() {
    var _ref;

    return _ref = {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      stripe_key: '',
      stripe: {},
      cardElement: {},
      paymentProcessing: false,
      Submit_Processing_detail: false,
      isLoading: true,
      warehouses: [],
      clients: [],
      client: {},
      products: [],
      details: [],
      detail: {},
      sales: [],
      payment: {
        status: "pending",
        Reglement: "Cash",
        amount: "",
        received_amount: ""
      },
      sale: {
        id: "",
        date: new Date().toISOString().slice(0, 10),
        statut: "completed",
        notes: "",
        client_id: "",
        warehouse_id: "",
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0
      }
    }, _defineProperty(_ref, "timer", null), _defineProperty(_ref, "total", 0), _defineProperty(_ref, "GrandTotal", 0), _defineProperty(_ref, "units", []), _defineProperty(_ref, "product", {
      id: "",
      code: "",
      stock: "",
      quantity: 1,
      discount: "",
      DiscountNet: "",
      discount_Method: "",
      name: "",
      sale_unit_id: "",
      fix_stock: "",
      fix_price: "",
      unitSale: "",
      Net_price: "",
      Unit_price: "",
      Total_price: "",
      subtotal: "",
      product_id: "",
      detail_id: "",
      taxe: "",
      tax_percent: "",
      tax_method: "",
      product_variant_id: "",
      is_imei: "",
      imei_number: ""
    }), _ref;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["currentUser"])),
  methods: {
    loadStripe_payment: function loadStripe_payment() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var elements;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)("".concat(_this.stripe_key));

              case 2:
                _this.stripe = _context.sent;
                elements = _this.stripe.elements();
                _this.cardElement = elements.create("card", {
                  classes: {
                    base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
                  }
                });

                _this.cardElement.mount("#card-element");

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    //---------------------- Event Select Payment Method ------------------------------\\
    Selected_PaymentMethod: function Selected_PaymentMethod(value) {
      var _this2 = this;

      if (value == "credit card") {
        setTimeout(function () {
          _this2.loadStripe_payment();
        }, 500);
      }
    },
    //---------------------- Event Select Payment Status ------------------------------\\
    Selected_PaymentStatus: function Selected_PaymentStatus(value) {
      if (value == "paid") {
        var payment_amount = this.GrandTotal.toFixed(2);
        this.payment.amount = this.formatNumber(payment_amount, 2);
        this.payment.received_amount = this.formatNumber(payment_amount, 2);
      } else {
        this.payment.amount = 0;
        this.payment.received_amount = 0;
      }
    },
    //---------- keyup paid Amount
    Verified_paidAmount: function Verified_paidAmount() {
      if (isNaN(this.payment.amount)) {
        this.payment.amount = 0;
      } else if (this.payment.amount > this.payment.received_amount) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Received_amount"), this.$t("Warning"));
        this.payment.amount = 0;
      } else if (this.payment.amount > this.GrandTotal) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Grand_Total"), this.$t("Warning"));
        this.payment.amount = 0;
      }
    },
    //---------- keyup Received Amount
    Verified_Received_Amount: function Verified_Received_Amount() {
      if (isNaN(this.payment.received_amount)) {
        this.payment.received_amount = 0;
      }
    },
    //--- Submit Validate Create Sale
    Submit_Sale: function Submit_Sale() {
      var _this3 = this;

      this.$refs.create_sale.validate().then(function (success) {
        if (!success) {
          _this3.makeToast("danger", _this3.$t("Please_fill_the_form_correctly"), _this3.$t("Failed"));
        } else if (_this3.payment.amount > _this3.payment.received_amount) {
          _this3.makeToast("warning", _this3.$t("Paying_amount_is_greater_than_Received_amount"), _this3.$t("Warning"));

          _this3.payment.received_amount = 0;
        } else if (_this3.payment.amount > _this3.GrandTotal) {
          _this3.makeToast("warning", _this3.$t("Paying_amount_is_greater_than_Grand_Total"), _this3.$t("Warning"));

          _this3.payment.amount = 0;
        } else {
          _this3.Create_Sale();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail: function submit_Update_Detail() {
      var _this4 = this;

      this.$refs.Update_Detail.validate().then(function (success) {
        if (!success) {
          return;
        } else {
          _this4.Update_Detail();
        }
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref2) {
      var dirty = _ref2.dirty,
          validated = _ref2.validated,
          _ref2$valid = _ref2.valid,
          valid = _ref2$valid === void 0 ? null : _ref2$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //---------------------- Get_sales_units ------------------------------\\
    Get_sales_units: function Get_sales_units(value) {
      var _this5 = this;

      axios.get("Get_sales_units?id=" + value).then(function (_ref3) {
        var data = _ref3.data;
        return _this5.units = data;
      });
    },
    //------ Show Modal Update Detail Product
    Modal_Updat_Detail: function Modal_Updat_Detail(detail) {
      var _this6 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      this.detail = {};
      this.Get_sales_units(detail.product_id);
      this.detail.detail_id = detail.detail_id;
      this.detail.sale_unit_id = detail.sale_unit_id;
      this.detail.name = detail.name;
      this.detail.Unit_price = detail.Unit_price;
      this.detail.fix_price = detail.fix_price;
      this.detail.fix_stock = detail.fix_stock;
      this.detail.stock = detail.stock;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.detail.is_imei = detail.is_imei;
      this.detail.imei_number = detail.imei_number;
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

        _this6.$bvModal.show("form_Update_Detail");
      }, 1000);
    },
    //------ Submit Update Detail Product
    Update_Detail: function Update_Detail() {
      var _this7 = this;

      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      this.Submit_Processing_detail = true;

      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          // this.convert_unit();
          for (var k = 0; k < this.units.length; k++) {
            if (this.units[k].id == this.detail.sale_unit_id) {
              if (this.units[k].operator == '/') {
                this.details[i].stock = this.detail.fix_stock * this.units[k].operator_value;
                this.details[i].unitSale = this.units[k].ShortName;
              } else {
                this.details[i].stock = this.detail.fix_stock / this.units[k].operator_value;
                this.details[i].unitSale = this.units[k].ShortName;
              }
            }
          }

          if (this.details[i].stock < this.details[i].quantity) {
            this.details[i].quantity = this.details[i].stock;
          } else {
            this.details[i].quantity = 1;
          }

          this.details[i].Unit_price = this.detail.Unit_price;
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;
          this.details[i].sale_unit_id = this.detail.sale_unit_id;
          this.details[i].imei_number = this.detail.imei_number;

          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.details[i].discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(this.details[i].Unit_price * this.details[i].discount / 100);
          }

          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_price = parseFloat(this.details[i].Unit_price - this.details[i].DiscountNet);
            this.details[i].taxe = parseFloat(this.details[i].tax_percent * (this.details[i].Unit_price - this.details[i].DiscountNet) / 100);
          } else {
            //Inclusive
            this.details[i].Net_price = parseFloat((this.details[i].Unit_price - this.details[i].DiscountNet) / (this.details[i].tax_percent / 100 + 1));
            this.details[i].taxe = parseFloat(this.details[i].Unit_price - this.details[i].Net_price - this.details[i].DiscountNet);
          }

          this.$forceUpdate();
        }
      }

      this.Calcul_Total();
      setTimeout(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this7.Submit_Processing_detail = false;

        _this7.$bvModal.hide("form_Update_Detail");
      }, 1000);
    },
    // Search Products
    search: function search() {
      var _this8 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      if (this.search_input.length < 1) {
        return this.product_filter = [];
      }

      if (this.sale.warehouse_id != "" && this.sale.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this8.products.filter(function (product) {
            return product.code === _this8.search_input || product.barcode.includes(_this8.search_input) > -1;
          });

          if (product_filter.length === 1) {
            _this8.SearchProduct(product_filter[0]);
          } else {
            _this8.product_filter = _this8.products.filter(function (product) {
              return product.name.toLowerCase().indexOf(_this8.search_input.toLowerCase()) > -1 || product.code.toLowerCase().includes(_this8.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this8.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //------------------------- get Result Value Search Product
    getResultValue: function getResultValue(result) {
      return result.name + " " + "(" + result.code + ")";
    },
    //------------------------- Submit Search Product
    SearchProduct: function SearchProduct(result) {
      this.product = {};

      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        this.product.code = result.code;
        this.product.stock = result.qte_sale;
        this.product.fix_stock = result.qte;

        if (result.qte_sale < 1) {
          this.product.quantity = result.qte_sale;
        } else {
          this.product.quantity = 1;
        }

        this.product.product_variant_id = result.product_variant_id;
        this.Get_Product_Details(result.id);
      }

      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);
    },
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this9 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("Products/Warehouse/" + id + "?stock=" + 1).then(function (response) {
        _this9.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add Product to order list -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }

      this.details.push(this.product);

      if (this.product.is_imei) {
        this.Modal_Updat_Detail(this.product);
      }
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.stock;
          }

          if (detail.quantity > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.stock;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }

      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity + 1 > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }

      this.$forceUpdate();
      this.Calcul_Total();
    },
    //-----------------------------------decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            if (detail.quantity - 1 > detail.stock) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }

      this.$forceUpdate();
      this.Calcul_Total();
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));

      while (formated.length < dec) {
        formated += "0";
      }

      return "".concat(value[0], ".").concat(formated);
    },
    //-----------------------------------------Calcul Total ------------------------------\\
    Calcul_Total: function Calcul_Total() {
      this.total = 0;

      for (var i = 0; i < this.details.length; i++) {
        var tax = this.details[i].taxe * this.details[i].quantity;
        this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }

      var total_without_discount = parseFloat(this.total - this.sale.discount);
      this.sale.TaxNet = parseFloat(total_without_discount * this.sale.tax_rate / 100);
      this.GrandTotal = parseFloat(total_without_discount + this.sale.TaxNet + this.sale.shipping);
      var grand_total = this.GrandTotal.toFixed(2);
      this.GrandTotal = parseFloat(grand_total);

      if (this.payment.status == 'paid') {
        this.payment.amount = this.formatNumber(this.GrandTotal, 2);
      }
    },
    //-----------------------------------Delete Detail Product ------------------------------\\
    delete_Product_Detail: function delete_Product_Detail(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
          this.Calcul_Total();
        }
      }
    },
    //-----------------------------------verified Order List ------------------------------\\
    verifiedForm: function verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
        return false;
      } else {
        var count = 0;

        for (var i = 0; i < this.details.length; i++) {
          if (this.details[i].quantity == "" || this.details[i].quantity === 0) {
            count += 1;
          }
        }

        if (count > 0) {
          this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
          return false;
        } else {
          return true;
        }
      }
    },
    //---------- keyup OrderTax
    keyup_OrderTax: function keyup_OrderTax() {
      if (isNaN(this.sale.tax_rate)) {
        this.sale.tax_rate = 0;
      } else if (this.sale.tax_rate == '') {
        this.sale.tax_rate = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Discount
    keyup_Discount: function keyup_Discount() {
      if (isNaN(this.sale.discount)) {
        this.sale.discount = 0;
      } else if (this.sale.discount == '') {
        this.sale.discount = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    //---------- keyup Shipping
    keyup_Shipping: function keyup_Shipping() {
      if (isNaN(this.sale.shipping)) {
        this.sale.shipping = 0;
      } else if (this.sale.shipping == '') {
        this.sale.shipping = 0;
        this.Calcul_Total();
      } else {
        this.Calcul_Total();
      }
    },
    processPayment: function processPayment() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$_this10$stripe, token, error;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this10.paymentProcessing = true;
                _context2.next = 3;
                return _this10.stripe.createToken(_this10.cardElement);

              case 3:
                _yield$_this10$stripe = _context2.sent;
                token = _yield$_this10$stripe.token;
                error = _yield$_this10$stripe.error;

                if (error) {
                  _this10.paymentProcessing = false;
                  nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

                  _this10.makeToast("danger", _this10.$t("InvalidData"), _this10.$t("Failed"));
                } else {
                  axios.post("sales", {
                    date: _this10.sale.date,
                    client_id: _this10.sale.client_id,
                    warehouse_id: _this10.sale.warehouse_id,
                    statut: _this10.sale.statut,
                    notes: _this10.sale.notes,
                    tax_rate: _this10.sale.tax_rate ? _this10.sale.tax_rate : 0,
                    TaxNet: _this10.sale.TaxNet ? _this10.sale.TaxNet : 0,
                    discount: _this10.sale.discount ? _this10.sale.discount : 0,
                    shipping: _this10.sale.shipping ? _this10.sale.shipping : 0,
                    GrandTotal: _this10.GrandTotal,
                    details: _this10.details,
                    payment: _this10.payment,
                    amount: parseFloat(_this10.payment.amount).toFixed(2),
                    received_amount: parseFloat(_this10.payment.received_amount).toFixed(2),
                    change: parseFloat(_this10.payment.received_amount - _this10.payment.amount).toFixed(2),
                    token: token.id
                  }).then(function (response) {
                    _this10.paymentProcessing = false;

                    _this10.makeToast("success", _this10.$t("Create.TitleSale"), _this10.$t("Success"));

                    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

                    _this10.$router.push({
                      name: "index_sales"
                    });
                  })["catch"](function (error) {
                    _this10.paymentProcessing = false;
                    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

                    _this10.makeToast("danger", _this10.$t("InvalidData"), _this10.$t("Failed"));
                  });
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //--------------------------------- Create Sale -------------------------\\
    Create_Sale: function Create_Sale() {
      var _this11 = this;

      if (this.verifiedForm()) {
        // Start the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);

        if (this.payment.Reglement == 'credit card') {
          if (this.stripe_key != '') {
            this.processPayment();
          } else {
            this.makeToast("danger", this.$t("credit_card_account_not_available"), this.$t("Failed"));
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          }
        } else {
          this.paymentProcessing = true;
          axios.post("sales", {
            date: this.sale.date,
            client_id: this.sale.client_id,
            warehouse_id: this.sale.warehouse_id,
            statut: this.sale.statut,
            notes: this.sale.notes,
            tax_rate: this.sale.tax_rate ? this.sale.tax_rate : 0,
            TaxNet: this.sale.TaxNet ? this.sale.TaxNet : 0,
            discount: this.sale.discount ? this.sale.discount : 0,
            shipping: this.sale.shipping ? this.sale.shipping : 0,
            GrandTotal: this.GrandTotal,
            details: this.details,
            payment: this.payment,
            amount: parseFloat(this.payment.amount).toFixed(2),
            received_amount: parseFloat(this.payment.received_amount).toFixed(2),
            change: parseFloat(this.payment.received_amount - this.payment.amount).toFixed(2)
          }).then(function (response) {
            _this11.makeToast("success", _this11.$t("Create.TitleSale"), _this11.$t("Success"));

            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
            _this11.paymentProcessing = false;

            _this11.$router.push({
              name: "index_sales"
            });
          })["catch"](function (error) {
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
            _this11.paymentProcessing = false;

            _this11.makeToast("danger", _this11.$t("InvalidData"), _this11.$t("Failed"));
          });
        }
      }
    },
    //-------------------------------- Get Last Detail Id -------------------------\\
    Last_Detail_id: function Last_Detail_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //---------------------------------Get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id) {
      var _this12 = this;

      axios.get("Products/" + product_id).then(function (response) {
        console.log("From Here", response.data);
        _this12.product.discount = 0;
        _this12.product.DiscountNet = 0;
        _this12.product.discount_Method = "2";
        _this12.product.product_id = response.data.id;
        _this12.product.name = response.data.name;
        _this12.product.Net_price = response.data.Unit_cost;
        _this12.product.Unit_price = response.data.Unit_cost;
        _this12.product.taxe = response.data.tax_price;
        _this12.product.tax_method = response.data.tax_method;
        _this12.product.tax_percent = response.data.tax_percent;
        _this12.product.unitSale = response.data.unitSale;
        _this12.product.fix_price = response.data.fix_price;
        _this12.product.sale_unit_id = response.data.sale_unit_id;
        _this12.product.is_imei = response.data.is_imei;
        _this12.product.imei_number = '';

        _this12.add_product();

        _this12.Calcul_Total();
      });
    },
    //---------------------------------------Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this13 = this;

      axios.get("sales/create").then(function (response) {
        _this13.clients = response.data.clients;
        _this13.warehouses = response.data.warehouses;
        _this13.stripe_key = response.data.stripe_key;
        _this13.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this13.isLoading = false;
        }, 500);
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/sales/create_sale.vue":
/*!*************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_sale_vue_vue_type_template_id_e1ed42cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_sale.vue?vue&type=template&id=e1ed42cc& */ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc&");
/* harmony import */ var _create_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_sale.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_sale_vue_vue_type_template_id_e1ed42cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_sale_vue_vue_type_template_id_e1ed42cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/sales/create_sale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_sale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc&":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_template_id_e1ed42cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_template_id_e1ed42cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_sale_vue_vue_type_template_id_e1ed42cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create_sale.vue?vue&type=template&id=e1ed42cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/sales/create_sale.vue?vue&type=template&id=e1ed42cc& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("AddSale"), folder: _vm.$t("ListSales") },
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
            { ref: "create_sale" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Sale.apply(null, arguments)
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
                            [
                              _c(
                                "b-row",
                                [
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "date",
                                          rules: { required: true },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("date") +
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
                                                            "date-feedback",
                                                          type: "date",
                                                        },
                                                        model: {
                                                          value: _vm.sale.date,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.sale,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "sale.date",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "OrderTax-feedback",
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
                                          4059139714
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Customer",
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
                                                        _vm.$t("Customer") +
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
                                                            "Choose_Customer"
                                                          ),
                                                        options:
                                                          _vm.clients.map(
                                                            function (clients) {
                                                              return {
                                                                label:
                                                                  clients.name,
                                                                value:
                                                                  clients.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.sale.client_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sale,
                                                            "client_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sale.client_id",
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
                                          1559569131
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "warehouse",
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
                                                        _vm.$t("warehouse") +
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
                                                        disabled:
                                                          _vm.details.length >
                                                          0,
                                                        reduce: function (
                                                          label
                                                        ) {
                                                          return label.value
                                                        },
                                                        placeholder:
                                                          _vm.$t(
                                                            "Choose_Warehouse"
                                                          ),
                                                        options:
                                                          _vm.warehouses.map(
                                                            function (
                                                              warehouses
                                                            ) {
                                                              return {
                                                                label:
                                                                  warehouses.name,
                                                                value:
                                                                  warehouses.id,
                                                              }
                                                            }
                                                          ),
                                                      },
                                                      on: {
                                                        input:
                                                          _vm.Selected_Warehouse,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.sale.warehouse_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sale,
                                                            "warehouse_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sale.warehouse_id",
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
                                          1961133601
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-5",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c("h6", [
                                        _vm._v(_vm._s(_vm.$t("ProductName"))),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "autocomplete",
                                          attrs: { id: "autocomplete" },
                                        },
                                        [
                                          _c("input", {
                                            ref: "product_autocomplete",
                                            staticClass: "autocomplete-input",
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "Scan_Search_Product_by_Code_Name"
                                              ),
                                            },
                                            on: {
                                              input: function (e) {
                                                return (_vm.search_input =
                                                  e.target.value)
                                              },
                                              keyup: function ($event) {
                                                return _vm.search(
                                                  _vm.search_input
                                                )
                                              },
                                              focus: _vm.handleFocus,
                                              blur: _vm.handleBlur,
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.focused,
                                                  expression: "focused",
                                                },
                                              ],
                                              staticClass:
                                                "autocomplete-result-list",
                                            },
                                            _vm._l(
                                              _vm.product_filter,
                                              function (product_fil) {
                                                return _c(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "autocomplete-result",
                                                    on: {
                                                      mousedown: function (
                                                        $event
                                                      ) {
                                                        return _vm.SearchProduct(
                                                          product_fil
                                                        )
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getResultValue(
                                                          product_fil
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                )
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-4",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c("h5", [
                                        _vm._v(
                                          _vm._s(_vm.$t("order_products")) +
                                            " *"
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "table-responsive" },
                                        [
                                          _c(
                                            "table",
                                            {
                                              staticClass: "table table-hover",
                                            },
                                            [
                                              _c(
                                                "thead",
                                                { staticClass: "bg-gray-300" },
                                                [
                                                  _c("tr", [
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [_vm._v("#")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "ProductName"
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "Net_Unit_Price"
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "CurrentStock"
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Qty"))
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("Discount")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Tax"))
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t("SubTotal")
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "text-center",
                                                        attrs: { scope: "col" },
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "i-Close-Window text-25",
                                                        }),
                                                      ]
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                [
                                                  _vm.details.length <= 0
                                                    ? _c("tr", [
                                                        _c(
                                                          "td",
                                                          {
                                                            attrs: {
                                                              colspan: "9",
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "NodataAvailable"
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.details,
                                                    function (detail) {
                                                      return _c("tr", [
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              detail.detail_id
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                detail.code
                                                              )
                                                            ),
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("br"),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-success",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  detail.name
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("i", {
                                                            staticClass:
                                                              "i-Edit",
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.Modal_Updat_Detail(
                                                                  detail
                                                                )
                                                              },
                                                            },
                                                          }),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.formatNumber(
                                                                  detail.Net_price,
                                                                  3
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-outline-warning",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  detail.stock
                                                                ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    detail.unitSale
                                                                  )
                                                              ),
                                                            ]
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "quantity",
                                                            },
                                                            [
                                                              _c(
                                                                "b-input-group",
                                                                [
                                                                  _c(
                                                                    "b-input-group-prepend",
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "btn btn-primary btn-sm",
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                return _vm.decrement(
                                                                                  detail,
                                                                                  detail.detail_id
                                                                                )
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "-"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("input", {
                                                                    directives:
                                                                      [
                                                                        {
                                                                          name: "model",
                                                                          rawName:
                                                                            "v-model.number",
                                                                          value:
                                                                            detail.quantity,
                                                                          expression:
                                                                            "detail.quantity",
                                                                          modifiers:
                                                                            {
                                                                              number: true,
                                                                            },
                                                                        },
                                                                      ],
                                                                    staticClass:
                                                                      "form-control",
                                                                    attrs: {
                                                                      min: 0.0,
                                                                      max: detail.stock,
                                                                    },
                                                                    domProps: {
                                                                      value:
                                                                        detail.quantity,
                                                                    },
                                                                    on: {
                                                                      keyup:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          return _vm.Verified_Qty(
                                                                            detail,
                                                                            detail.detail_id
                                                                          )
                                                                        },
                                                                      input:
                                                                        function (
                                                                          $event
                                                                        ) {
                                                                          if (
                                                                            $event
                                                                              .target
                                                                              .composing
                                                                          ) {
                                                                            return
                                                                          }
                                                                          _vm.$set(
                                                                            detail,
                                                                            "quantity",
                                                                            _vm._n(
                                                                              $event
                                                                                .target
                                                                                .value
                                                                            )
                                                                          )
                                                                        },
                                                                      blur: function (
                                                                        $event
                                                                      ) {
                                                                        return _vm.$forceUpdate()
                                                                      },
                                                                    },
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "b-input-group-append",
                                                                    [
                                                                      _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "btn btn-primary btn-sm",
                                                                          on: {
                                                                            click:
                                                                              function (
                                                                                $event
                                                                              ) {
                                                                                return _vm.increment(
                                                                                  detail,
                                                                                  detail.detail_id
                                                                                )
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "+"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ],
                                                                1
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.formatNumber(
                                                                  detail.DiscountNet *
                                                                    detail.quantity,
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                _vm.formatNumber(
                                                                  detail.taxe *
                                                                    detail.quantity,
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.currentUser
                                                                .currency
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                detail.subtotal.toFixed(
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _c(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-icon btn-sm",
                                                              attrs: {
                                                                title: "Delete",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.delete_Product_Detail(
                                                                      detail.detail_id
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "i-Close-Window text-25 text-danger",
                                                              }),
                                                            ]
                                                          ),
                                                        ]),
                                                      ])
                                                    }
                                                  ),
                                                ],
                                                2
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "offset-md-9 col-md-3 mt-4",
                                    },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-striped table-sm",
                                        },
                                        [
                                          _c("tbody", [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "bold" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("OrderTax"))
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.currentUser.currency
                                                    ) +
                                                      " " +
                                                      _vm._s(
                                                        _vm.sale.TaxNet.toFixed(
                                                          2
                                                        )
                                                      ) +
                                                      " (" +
                                                      _vm._s(
                                                        _vm.formatNumber(
                                                          _vm.sale.tax_rate,
                                                          2
                                                        )
                                                      ) +
                                                      " %)"
                                                  ),
                                                ]),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "bold" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Discount"))
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.currentUser.currency
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.sale.discount.toFixed(
                                                        2
                                                      )
                                                    )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c(
                                                "td",
                                                { staticClass: "bold" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("Shipping"))
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("td", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.currentUser.currency
                                                  ) +
                                                    " " +
                                                    _vm._s(
                                                      _vm.sale.shipping.toFixed(
                                                        2
                                                      )
                                                    )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c("tr", [
                                              _c("td", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.$t("Total"))
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-bold",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.currentUser.currency
                                                      ) +
                                                        " " +
                                                        _vm._s(
                                                          _vm.GrandTotal.toFixed(
                                                            2
                                                          )
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Order Tax",
                                          rules: { regex: /^\d*\.?\d*$/ },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("OrderTax"),
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "b-input-group",
                                                        {
                                                          attrs: {
                                                            append: "%",
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
                                                                "OrderTax-feedback",
                                                              label:
                                                                "Order Tax",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.keyup_OrderTax()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale
                                                                  .tax_rate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale,
                                                                    "tax_rate",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "sale.tax_rate",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "OrderTax-feedback",
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
                                          2557352802
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Discount",
                                          rules: { regex: /^\d*\.?\d*$/ },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("Discount"),
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "b-input-group",
                                                        {
                                                          attrs: {
                                                            append:
                                                              _vm.currentUser
                                                                .currency,
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
                                                                "Discount-feedback",
                                                              label: "Discount",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.keyup_Discount()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale
                                                                  .discount,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale,
                                                                    "discount",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "sale.discount",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "Discount-feedback",
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
                                          1543927045
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Shipping",
                                          rules: { regex: /^\d*\.?\d*$/ },
                                        },
                                        scopedSlots: _vm._u(
                                          [
                                            {
                                              key: "default",
                                              fn: function (validationContext) {
                                                return [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label:
                                                          _vm.$t("Shipping"),
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "b-input-group",
                                                        {
                                                          attrs: {
                                                            append:
                                                              _vm.currentUser
                                                                .currency,
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
                                                                "Shipping-feedback",
                                                              label: "Shipping",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.keyup_Shipping()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.sale
                                                                  .shipping,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.sale,
                                                                    "shipping",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "sale.shipping",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-form-invalid-feedback",
                                                        {
                                                          attrs: {
                                                            id: "Shipping-feedback",
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
                                          1943903941
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mb-3",
                                      attrs: { lg: "4", md: "4", sm: "12" },
                                    },
                                    [
                                      _c("validation-provider", {
                                        attrs: {
                                          name: "Status",
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
                                                        _vm.$t("Status") +
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
                                                            "Choose_Status"
                                                          ),
                                                        options: [
                                                          {
                                                            label: "completed",
                                                            value: "completed",
                                                          },
                                                          {
                                                            label: "Pending",
                                                            value: "pending",
                                                          },
                                                          {
                                                            label: "ordered",
                                                            value: "ordered",
                                                          },
                                                        ],
                                                      },
                                                      model: {
                                                        value: _vm.sale.statut,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.sale,
                                                            "statut",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "sale.statut",
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
                                          255606126
                                        ),
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "4" } },
                                    [
                                      _c(
                                        "validation-provider",
                                        { attrs: { name: "PaymentStatus" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: _vm.$t("PaymentStatus"),
                                              },
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  reduce: function (label) {
                                                    return label.value
                                                  },
                                                  placeholder:
                                                    _vm.$t("Choose_Status"),
                                                  options: [
                                                    {
                                                      label: "Paid",
                                                      value: "paid",
                                                    },
                                                    {
                                                      label: "partial",
                                                      value: "partial",
                                                    },
                                                    {
                                                      label: "Pending",
                                                      value: "pending",
                                                    },
                                                  ],
                                                },
                                                on: {
                                                  input:
                                                    _vm.Selected_PaymentStatus,
                                                },
                                                model: {
                                                  value: _vm.payment.status,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.payment,
                                                      "status",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "payment.status",
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
                                  _vm.payment.status != "pending"
                                    ? _c(
                                        "b-col",
                                        { attrs: { md: "4" } },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Payment choice",
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
                                                              "Paymentchoice"
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
                                                                "PleaseSelect"
                                                              ),
                                                            options: [
                                                              {
                                                                label: "Cash",
                                                                value: "Cash",
                                                              },
                                                              {
                                                                label:
                                                                  "credit card",
                                                                value:
                                                                  "credit card",
                                                              },
                                                              {
                                                                label: "cheque",
                                                                value: "cheque",
                                                              },
                                                              {
                                                                label:
                                                                  "Western Union",
                                                                value:
                                                                  "Western Union",
                                                              },
                                                              {
                                                                label:
                                                                  "bank transfer",
                                                                value:
                                                                  "bank transfer",
                                                              },
                                                              {
                                                                label: "other",
                                                                value: "other",
                                                              },
                                                            ],
                                                          },
                                                          on: {
                                                            input:
                                                              _vm.Selected_PaymentMethod,
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.payment
                                                                .Reglement,
                                                            callback: function (
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.payment,
                                                                "Reglement",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "payment.Reglement",
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
                                              261554337
                                            ),
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment.status != "pending"
                                    ? _c(
                                        "b-col",
                                        { attrs: { md: "4" } },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Received Amount",
                                              rules: {
                                                required: true,
                                                regex: /^\d*\.?\d*$/,
                                              },
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
                                                                "Received_Amount"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              label:
                                                                "Received_Amount",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Received_Amount"
                                                                ),
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Received_Amount-feedback",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.Verified_Received_Amount(
                                                                  _vm.payment
                                                                    .received_amount
                                                                )
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.payment
                                                                  .received_amount,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.payment,
                                                                    "received_amount",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "payment.received_amount",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Received_Amount-feedback",
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
                                              4075423960
                                            ),
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment.status != "pending"
                                    ? _c(
                                        "b-col",
                                        { attrs: { md: "4" } },
                                        [
                                          _c("validation-provider", {
                                            attrs: {
                                              name: "Amount",
                                              rules: {
                                                required: true,
                                                regex: /^\d*\.?\d*$/,
                                              },
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
                                                                "Paying_Amount"
                                                              ) +
                                                              " " +
                                                              "*",
                                                          },
                                                        },
                                                        [
                                                          _c("b-form-input", {
                                                            attrs: {
                                                              disabled:
                                                                _vm.payment
                                                                  .status ==
                                                                "paid",
                                                              label: "Amount",
                                                              placeholder:
                                                                _vm.$t(
                                                                  "Paying_Amount"
                                                                ),
                                                              state:
                                                                _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                              "aria-describedby":
                                                                "Amount-feedback",
                                                            },
                                                            on: {
                                                              keyup: function (
                                                                $event
                                                              ) {
                                                                return _vm.Verified_paidAmount(
                                                                  _vm.payment
                                                                    .amount
                                                                )
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.payment
                                                                  .amount,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.payment,
                                                                    "amount",
                                                                    _vm._n($$v)
                                                                  )
                                                                },
                                                              expression:
                                                                "payment.amount",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-form-invalid-feedback",
                                                            {
                                                              attrs: {
                                                                id: "Amount-feedback",
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
                                              1383817694
                                            ),
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment.status != "pending"
                                    ? _c("b-col", { attrs: { md: "4" } }, [
                                        _c("label", [
                                          _vm._v(
                                            _vm._s(_vm.$t("Change")) + " :"
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "change_amount" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                parseFloat(
                                                  _vm.payment.received_amount -
                                                    _vm.payment.amount
                                                ).toFixed(2)
                                              )
                                            ),
                                          ]
                                        ),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.payment.status != "pending" &&
                                  _vm.payment.Reglement == "credit card"
                                    ? _c(
                                        "b-col",
                                        {
                                          staticClass: "mt-3",
                                          attrs: { md: "12" },
                                        },
                                        [
                                          _c(
                                            "form",
                                            { attrs: { id: "payment-form" } },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "leading-7 text-sm text-gray-600",
                                                  attrs: {
                                                    for: "card-element",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("Credit_Card_Info")
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("div", {
                                                attrs: { id: "card-element" },
                                              }),
                                              _vm._v(" "),
                                              _c("div", {
                                                attrs: {
                                                  id: "card-errors",
                                                  role: "alert",
                                                },
                                              }),
                                            ]
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    {
                                      staticClass: "mt-3",
                                      attrs: { md: "12" },
                                    },
                                    [
                                      _c(
                                        "b-form-group",
                                        { attrs: { label: _vm.$t("Note") } },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.sale.notes,
                                                expression: "sale.notes",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder: _vm.$t("Afewwords"),
                                            },
                                            domProps: { value: _vm.sale.notes },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.sale,
                                                  "notes",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                        ]
                                      ),
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
                                                disabled: _vm.paymentProcessing,
                                              },
                                              on: { click: _vm.Submit_Sale },
                                            },
                                            [_vm._v(_vm._s(_vm.$t("submit")))]
                                          ),
                                          _vm._v(" "),
                                          _vm.paymentProcessing
                                            ? _vm._m(0)
                                            : _vm._e(),
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
      _c(
        "validation-observer",
        { ref: "Update_Detail" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "lg",
                id: "form_Update_Detail",
                title: _vm.detail.name,
              },
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.submit_Update_Detail.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Product Price",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label:
                                            _vm.$t("ProductPrice") + " " + "*",
                                          id: "Price-input",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "Product Price",
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Price-feedback",
                                          },
                                          model: {
                                            value: _vm.detail.Unit_price,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "Unit_price",
                                                $$v
                                              )
                                            },
                                            expression: "detail.Unit_price",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Price-feedback" } },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Tax Method",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: _vm.$t("TaxMethod") + " " + "*",
                                      },
                                    },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          placeholder: _vm.$t("Choose_Method"),
                                          options: [
                                            { label: "Exclusive", value: "1" },
                                            { label: "Inclusive", value: "2" },
                                          ],
                                        },
                                        model: {
                                          value: _vm.detail.tax_method,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.detail,
                                              "tax_method",
                                              $$v
                                            )
                                          },
                                          expression: "detail.tax_method",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Order Tax",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("OrderTax") + " " + "*",
                                        },
                                      },
                                      [
                                        _c(
                                          "b-input-group",
                                          { attrs: { append: "%" } },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                label: "Order Tax",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                "aria-describedby":
                                                  "OrderTax-feedback",
                                              },
                                              model: {
                                                value: _vm.detail.tax_percent,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.detail,
                                                    "tax_percent",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "detail.tax_percent",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "OrderTax-feedback" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Discount Method",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
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
                                          _vm.$t("Discount_Method") + " " + "*",
                                      },
                                    },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          placeholder: _vm.$t("Choose_Method"),
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          options: [
                                            { label: "Percent %", value: "1" },
                                            { label: "Fixed", value: "2" },
                                          ],
                                        },
                                        model: {
                                          value: _vm.detail.discount_Method,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.detail,
                                              "discount_Method",
                                              $$v
                                            )
                                          },
                                          expression: "detail.discount_Method",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Discount Rate",
                              rules: { required: true, regex: /^\d*\.?\d*$/ },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (validationContext) {
                                  return [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Discount") + " " + "*",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            label: "Discount",
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Discount-feedback",
                                          },
                                          model: {
                                            value: _vm.detail.discount,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "discount",
                                                _vm._n($$v)
                                              )
                                            },
                                            expression: "detail.discount",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "Discount-feedback" },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                validationContext.errors[0]
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
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { lg: "6", md: "6", sm: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Unit Sale",
                              rules: { required: true },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function (ref) {
                                  var valid = ref.valid
                                  var errors = ref.errors
                                  return _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: _vm.$t("UnitSale") + " " + "*",
                                      },
                                    },
                                    [
                                      _c("v-select", {
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          placeholder:
                                            _vm.$t("Choose_Unit_Sale"),
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          options: _vm.units.map(function (
                                            units
                                          ) {
                                            return {
                                              label: units.name,
                                              value: units.id,
                                            }
                                          }),
                                        },
                                        model: {
                                          value: _vm.detail.sale_unit_id,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.detail,
                                              "sale_unit_id",
                                              $$v
                                            )
                                          },
                                          expression: "detail.sale_unit_id",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("b-form-invalid-feedback", [
                                        _vm._v(_vm._s(errors[0])),
                                      ]),
                                    ],
                                    1
                                  )
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.detail.is_imei,
                              expression: "detail.is_imei",
                            },
                          ],
                          attrs: { lg: "12", md: "12", sm: "12" },
                        },
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: _vm.$t("Add_product_IMEI_Serial_number"),
                              },
                            },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  label: "Add_product_IMEI_Serial_number",
                                  placeholder: _vm.$t(
                                    "Add_product_IMEI_Serial_number"
                                  ),
                                },
                                model: {
                                  value: _vm.detail.imei_number,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.detail, "imei_number", $$v)
                                  },
                                  expression: "detail.imei_number",
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
                                    disabled: _vm.Submit_Processing_detail,
                                  },
                                },
                                [_vm._v(_vm._s(_vm.$t("submit")))]
                              ),
                              _vm._v(" "),
                              _vm.Submit_Processing_detail
                                ? _vm._m(1)
                                : _vm._e(),
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
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "typo__p" }, [
      _c("div", { staticClass: "spinner sm spinner-primary mt-3" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "typo__p" }, [
      _c("div", { staticClass: "spinner sm spinner-primary mt-3" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);