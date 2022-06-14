"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["detail_quotation"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions", "currentUser"]),
  metaInfo: {
    title: "Detail Quotation"
  },
  data: function data() {
    return {
      isLoading: true,
      quote: {},
      details: [],
      variants: [],
      company: {},
      email: {
        to: "",
        subject: "",
        message: "",
        client_name: "",
        Quote_Ref: ""
      }
    };
  },
  methods: {
    //------------------------------ Print -------------------------\\
    print: function print() {
      this.$htmlToPaper('print_Invoice');
    },
    //----------------------------------- Print Quotation -------------------------\\
    Quote_PDF: function Quote_PDF() {
      var _this = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("Quote_PDF/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Quotation_" + _this.quote.Ref + ".pdf");
        document.body.appendChild(link);
        link.click(); // Complete the animation of the  progress bar.

        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
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
    //----------------------------------- Get Details Product ------------------------------\\
    Get_Details: function Get_Details() {
      var _this2 = this;

      var id = this.$route.params.id;
      axios.get("quotations/".concat(id)).then(function (response) {
        _this2.quote = response.data.quote;
        _this2.details = response.data.details;
        _this2.company = response.data.company;
        _this2.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
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
    //------------------------------------ Form Send Quotation in Email -------------------------\\
    Quote_Email: function Quote_Email() {
      this.email.to = this.quote.client_email;
      this.email.Quote_Ref = this.quote.Ref;
      this.email.client_name = this.quote.client_name;
      this.SendEmail();
    },
    SendEmail: function SendEmail() {
      var _this3 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.post("quotations/sendQuote/email", {
        id: id,
        to: this.email.to,
        client_name: this.email.client_name,
        Ref: this.email.Quote_Ref
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);

        _this3.makeToast("success", _this3.$t("Send.TitleEmail"), _this3.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);

        _this3.makeToast("danger", _this3.$t("SMTPIncorrect"), _this3.$t("Failed"));
      });
    },
    //---------SMS notification
    Quote_SMS: function Quote_SMS() {
      var _this4 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.post("quotations/send/sms", {
        id: id
      }).then(function (response) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);

        _this4.makeToast("success", _this4.$t("Send_SMS"), _this4.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);

        _this4.makeToast("danger", _this4.$t("sms_config_invalid"), _this4.$t("Failed"));
      });
    },
    //-------------------------------------------- Delete Quotation -------------------------\\
    Remove_Quote: function Remove_Quote() {
      var _this5 = this;

      var id = this.$route.params.id;
      this.$swal({
        title: this.$t("Delete.Title"),
        text: this.$t("Delete.Text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Delete.cancelButtonText"),
        confirmButtonText: this.$t("Delete.confirmButtonText")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("quotations/" + id).then(function () {
            _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.QuoteDeleted"), "success");

            _this5.$router.push({
              name: "index_quotation"
            });
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods
  //----------------------------- Created function-------------------
  created: function created() {
    this.Get_Details();
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/quotations/detail_quotation.vue":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/pages/quotations/detail_quotation.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_quotation_vue_vue_type_template_id_9bec600e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_quotation.vue?vue&type=template&id=9bec600e& */ "./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=9bec600e&");
/* harmony import */ var _detail_quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_quotation.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_quotation_vue_vue_type_template_id_9bec600e___WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_quotation_vue_vue_type_template_id_9bec600e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/quotations/detail_quotation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_quotation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=9bec600e&":
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=9bec600e& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_quotation_vue_vue_type_template_id_9bec600e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_quotation_vue_vue_type_template_id_9bec600e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_quotation_vue_vue_type_template_id_9bec600e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_quotation.vue?vue&type=template&id=9bec600e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=9bec600e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=9bec600e&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/quotations/detail_quotation.vue?vue&type=template&id=9bec600e& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
        attrs: {
          page: _vm.$t("DetailQuote"),
          folder: _vm.$t("ListQuotations"),
        },
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
            "b-card",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "mb-5", attrs: { md: "12" } },
                    [
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("Quotations_edit")
                        ? _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-sm btn btn-success ripple btn-icon m-1",
                              attrs: {
                                title: "Edit",
                                to: {
                                  name: "edit_quotation",
                                  params: { id: _vm.$route.params.id },
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Edit" }),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(_vm.$t("EditQuote")))]),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.quote.statut &&
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("Quotations_edit")
                        ? _c(
                            "router-link",
                            {
                              staticClass:
                                "btn-sm btn btn-primary ripple btn-icon m-1",
                              attrs: {
                                title: "Create",
                                to: {
                                  name: "change_to_sale",
                                  params: { id: _vm.$route.params.id },
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Add" }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("CreateSale"))),
                              ]),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-sm btn btn-info ripple btn-icon m-1",
                          on: {
                            click: function ($event) {
                              return _vm.Quote_Email()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Envelope-2" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Email")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-secondary btn-icon ripple btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.Quote_SMS()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Speach-Bubble" }),
                          _vm._v("\n          SMS\n        "),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-sm btn btn-light ripple btn-icon m-1",
                          on: {
                            click: function ($event) {
                              return _vm.Quote_PDF()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-File-TXT" }),
                          _vm._v(" PDF\n        "),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn-sm btn btn-warning ripple btn-icon m-1",
                          on: {
                            click: function ($event) {
                              return _vm.print()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Billing" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("print")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.currentUserPermissions &&
                      _vm.currentUserPermissions.includes("Quotations_delete")
                        ? _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-danger btn-icon icon-left btn-sm m-1",
                              on: {
                                click: function ($event) {
                                  return _vm.Remove_Quote()
                                },
                              },
                            },
                            [
                              _c("i", { staticClass: "i-Close-Window" }),
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.$t("Del")) +
                                  "\n        "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "invoice", attrs: { id: "print_Invoice" } },
                [
                  _c(
                    "div",
                    { staticClass: "invoice-print" },
                    [
                      _c(
                        "b-row",
                        { staticClass: "justify-content-md-center" },
                        [
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              _vm._s(_vm.$t("DetailQuote")) +
                                " : " +
                                _vm._s(_vm.quote.Ref)
                            ),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-5" },
                        [
                          _c(
                            "b-col",
                            { staticClass: "mb-4", attrs: { md: "4" } },
                            [
                              _c("h5", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("Customer_Info"))),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.quote.client_name)),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.quote.client_email)),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.quote.client_phone)),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v(_vm._s(_vm.quote.client_adr))]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-4", attrs: { md: "4" } },
                            [
                              _c("h5", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("Company_Info"))),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.company.CompanyName)),
                              ]),
                              _vm._v(" "),
                              _c("div", [_vm._v(_vm._s(_vm.company.email))]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.company.CompanyPhone)),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(_vm._s(_vm.company.CompanyAdress)),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { staticClass: "mb-4", attrs: { md: "4" } },
                            [
                              _c("h5", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("Quote_Info"))),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("Reference")) +
                                    " : " +
                                    _vm._s(_vm.quote.Ref)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.$t("Status")) +
                                    " :\n              "
                                ),
                                _vm.quote.statut == "sent"
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-success",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Sent")))]
                                    )
                                  : _c(
                                      "span",
                                      {
                                        staticClass:
                                          "badge badge-outline-warning",
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Pending")))]
                                    ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("date")) +
                                    " : " +
                                    _vm._s(_vm.quote.date)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _vm._v(
                                  _vm._s(_vm.$t("warehouse")) +
                                    " : " +
                                    _vm._s(_vm.quote.warehouse)
                                ),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-3" },
                        [
                          _c("b-col", { attrs: { md: "12" } }, [
                            _c("h5", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.$t("Order_Summary"))),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                { staticClass: "table table-hover table-md" },
                                [
                                  _c("thead", { staticClass: "bg-gray-300" }, [
                                    _c("tr", [
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("ProductName"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(
                                          _vm._s(_vm.$t("Net_Unit_Price"))
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("Quantity"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("UnitPrice"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("Discount"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("Tax"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { scope: "col" } }, [
                                        _vm._v(_vm._s(_vm.$t("SubTotal"))),
                                      ]),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.details, function (detail) {
                                      return _c("tr", [
                                        _c("td", [
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(detail.code) +
                                                " (" +
                                                _vm._s(detail.name) +
                                                ")"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    detail.is_imei &&
                                                    detail.imei_number !== null,
                                                  expression:
                                                    "detail.is_imei && detail.imei_number !==null ",
                                                },
                                              ],
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("IMEI_SN")) +
                                                  " : " +
                                                  _vm._s(detail.imei_number)
                                              ),
                                            ]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
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
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatNumber(
                                                detail.quantity,
                                                2
                                              )
                                            ) +
                                              " " +
                                              _vm._s(detail.unit_sale)
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail.price,
                                                  2
                                                )
                                              )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  detail.DiscountNet,
                                                  2
                                                )
                                              )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.formatNumber(detail.taxe, 2)
                                              )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(detail.total.toFixed(2))
                                          ),
                                        ]),
                                      ])
                                    }),
                                    0
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "offset-md-9 col-md-3 mt-4" },
                            [
                              _c(
                                "table",
                                { staticClass: "table table-striped table-sm" },
                                [
                                  _c("tbody", [
                                    _c("tr", [
                                      _c("td", { staticClass: "bold" }, [
                                        _vm._v(_vm._s(_vm.$t("OrderTax"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.currentUser.currency) +
                                              " " +
                                              _vm._s(
                                                _vm.quote.TaxNet.toFixed(2)
                                              ) +
                                              " (" +
                                              _vm._s(
                                                _vm.formatNumber(
                                                  _vm.quote.tax_rate,
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
                                      _c("td", { staticClass: "bold" }, [
                                        _vm._v(_vm._s(_vm.$t("Discount"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.currentUser.currency) +
                                            " " +
                                            _vm._s(
                                              _vm.quote.discount.toFixed(2)
                                            )
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", { staticClass: "bold" }, [
                                        _vm._v(_vm._s(_vm.$t("Shipping"))),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(_vm.currentUser.currency) +
                                            " " +
                                            _vm._s(
                                              _vm.quote.shipping.toFixed(2)
                                            )
                                        ),
                                      ]),
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [_vm._v(_vm._s(_vm.$t("Total")))]
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.currentUser.currency) +
                                                " " +
                                                _vm._s(_vm.quote.GrandTotal)
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.quote.note,
                            expression: "quote.note",
                          },
                        ],
                      }),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        { staticClass: "mt-4" },
                        [
                          _c("b-col", { attrs: { md: "12" } }, [
                            _c("p", [_vm._v(_vm._s(_vm.quote.note))]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
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