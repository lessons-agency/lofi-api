"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["edit_adjustment"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Edit Adjustment"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      SubmitProcessing: false,
      warehouses: [],
      products: [],
      details: [],
      adjustment: {
        id: "",
        notes: "",
        warehouse_id: "",
        date: ""
      },
      product: {
        id: "",
        code: "",
        current: "",
        quantity: 1,
        name: "",
        product_id: "",
        detail_id: "",
        product_variant_id: "",
        del: "",
        unit: ""
      }
    };
  },
  methods: {
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    // Search Products
    search: function search() {
      var _this = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      if (this.search_input.length < 1) {
        return this.product_filter = [];
      }

      if (this.adjustment.warehouse_id != "" && this.adjustment.warehouse_id != null) {
        this.timer = setTimeout(function () {
          var product_filter = _this.products.filter(function (product) {
            return product.code === _this.search_input || product.barcode.includes(_this.search_input);
          });

          if (product_filter.length === 1) {
            _this.SearchProduct(product_filter[0]);
          } else {
            _this.product_filter = _this.products.filter(function (product) {
              return product.name.toLowerCase().includes(_this.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this.search_input.toLowerCase());
            });
          }
        }, 800);
      } else {
        this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
      }
    },
    //---------------------- Event Get Value Search ------------------------------\\
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    //---------------- Submit Search Product-----------------\\
    SearchProduct: function SearchProduct(result) {
      this.product = {};

      if (this.details.length > 0 && this.details.some(function (detail) {
        return detail.code === result.code;
      })) {
        this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
      } else {
        this.product.code = result.code;
        this.product.current = result.qte;

        if (result.qte < 1) {
          this.product.quantity = result.qte;
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
    //------------- Submit Validation Update Adjustment
    Submit_Adjustment: function Submit_Adjustment() {
      var _this2 = this;

      this.$refs.Edit_adjustment.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          _this2.Update_Adjustment();
        }
      });
    },
    //------------- Event Get Validation state
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
          validated = _ref.validated,
          _ref$valid = _ref.valid,
          valid = _ref$valid === void 0 ? null : _ref$valid;
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
    //------------------------------------ Get Products By Warehouse -------------------------\\
    Get_Products_By_Warehouse: function Get_Products_By_Warehouse(id) {
      var _this3 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("Products/Warehouse/" + id + "?stock=" + 0).then(function (response) {
        _this3.products = response.data;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {});
    },
    //----------------------------------------- Add Product To list -------------------------\\
    add_product: function add_product() {
      if (this.details.length > 0) {
        this.detail_order_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }

      this.details.push(this.product);
    },
    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty: function Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.current;
          }

          if (detail.type == "sub" && detail.quantity > detail.current) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.current;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }

      this.$forceUpdate();
    },
    //----------------------------------- Increment QTY ------------------------------\\
    increment: function increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.type == "sub") {
            if (detail.quantity + 1 > detail.current) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity++, 2);
            }
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }

      this.$forceUpdate();
    },
    //----------------------------------- Decrement QTY ------------------------------\\
    decrement: function decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            if (detail.type == "sub" && detail.quantity - 1 > detail.current) {
              this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }

      this.$forceUpdate();
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
    //-----------------------------------Remove the product from the order list ------------------------------\\
    Remove_Product: function Remove_Product(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
        }
      }
    },
    //----------------------------------- Verified Quantity if Null Or zero ------------------------------\\
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
    //--------------------------------- Update Adjustment -------------------------\\
    Update_Adjustment: function Update_Adjustment() {
      var _this4 = this;

      if (this.verifiedForm()) {
        this.SubmitProcessing = true; // Start the progress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        var id = this.$route.params.id;
        axios.put("adjustments/".concat(id), {
          warehouse_id: this.adjustment.warehouse_id,
          date: this.adjustment.date,
          notes: this.adjustment.notes,
          details: this.details
        }).then(function (response) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this4.SubmitProcessing = false;

          _this4.$router.push({
            name: "index_adjustment"
          });

          _this4.makeToast("success", _this4.$t("Successfully_Updated"), _this4.$t("Success"));
        })["catch"](function (error) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();

          _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));

          _this4.SubmitProcessing = false;
        });
      }
    },
    //-------------------------------- detail order id -------------------------\\
    detail_order_id: function detail_order_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },
    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse: function Selected_Warehouse(value) {
      this.search_input = '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);
    },
    //---------------------------------Get Product Details ------------------------\\
    Get_Product_Details: function Get_Product_Details(product_id) {
      var _this5 = this;

      axios.get("Products/" + product_id).then(function (response) {
        _this5.product.del = 0;
        _this5.product.id = 0;
        _this5.product.product_id = response.data.id;
        _this5.product.name = response.data.name;
        _this5.product.type = "add";
        _this5.product.unit = response.data.unit;

        _this5.add_product();
      });
    },
    //---------------------------------------Get Adjustment Elements------------------------------\\
    GetElements: function GetElements() {
      var _this6 = this;

      var id = this.$route.params.id;
      axios.get("adjustments/".concat(id, "/edit")).then(function (response) {
        _this6.adjustment = response.data.adjustment;
        _this6.details = response.data.details;
        _this6.warehouses = response.data.warehouses;

        _this6.Get_Products_By_Warehouse(_this6.adjustment.warehouse_id);

        _this6.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this6.isLoading = false;
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

/***/ "./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue":
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_Adjustment_vue_vue_type_template_id_09aad8bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit_Adjustment.vue?vue&type=template&id=09aad8bd& */ "./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=09aad8bd&");
/* harmony import */ var _Edit_Adjustment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit_Adjustment.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_Adjustment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_Adjustment_vue_vue_type_template_id_09aad8bd___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_Adjustment_vue_vue_type_template_id_09aad8bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/adjustment/Edit_Adjustment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_Adjustment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit_Adjustment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_Adjustment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=09aad8bd&":
/*!*****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=09aad8bd& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_Adjustment_vue_vue_type_template_id_09aad8bd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_Adjustment_vue_vue_type_template_id_09aad8bd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_Adjustment_vue_vue_type_template_id_09aad8bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit_Adjustment.vue?vue&type=template&id=09aad8bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=09aad8bd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=09aad8bd&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/adjustment/Edit_Adjustment.vue?vue&type=template&id=09aad8bd& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
          page: _vm.$t("EditAdjustement"),
          folder: _vm.$t("ListAdjustments"),
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
            "validation-observer",
            { ref: "Edit_adjustment" },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Adjustment.apply(null, arguments)
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
                                    { staticClass: "mb-3", attrs: { md: "6" } },
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
                                                          _vm.adjustment
                                                            .warehouse_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.adjustment,
                                                            "warehouse_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "adjustment.warehouse_id",
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
                                          935377333
                                        ),
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
                                                          value:
                                                            _vm.adjustment.date,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.adjustment,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "adjustment.date",
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
                                          2238917526
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
                                  _c("b-col", { attrs: { md: "12" } }, [
                                    _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "table",
                                          { staticClass: "table table-hover" },
                                          [
                                            _c(
                                              "thead",
                                              { staticClass: "bg-gray-300" },
                                              [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [_vm._v("#")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("CodeProduct")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("ProductName")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t("CurrentStock")
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(_vm.$t("Qty"))
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    { attrs: { scope: "col" } },
                                                    [
                                                      _vm._v(
                                                        _vm._s(_vm.$t("type"))
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
                                                          "fa fa-trash",
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
                                                            colspan: "7",
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
                                                    return _c(
                                                      "tr",
                                                      {
                                                        key: detail.detail_id,
                                                        class: {
                                                          row_deleted:
                                                            detail.del === 1,
                                                        },
                                                      },
                                                      [
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              detail.detail_id
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(detail.code)
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            "(" +
                                                              _vm._s(
                                                                detail.name
                                                              ) +
                                                              ")"
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
                                                                  detail.current
                                                                ) +
                                                                  " " +
                                                                  _vm._s(
                                                                    detail.unit
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
                                                                      max: detail.current,
                                                                      disabled:
                                                                        detail.del ===
                                                                        1,
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
                                                          _c(
                                                            "select",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    detail.type,
                                                                  expression:
                                                                    "detail.type",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-control",
                                                              attrs: {
                                                                type: "text",
                                                                required: "",
                                                              },
                                                              on: {
                                                                change: [
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    var $$selectedVal =
                                                                      Array.prototype.filter
                                                                        .call(
                                                                          $event
                                                                            .target
                                                                            .options,
                                                                          function (
                                                                            o
                                                                          ) {
                                                                            return o.selected
                                                                          }
                                                                        )
                                                                        .map(
                                                                          function (
                                                                            o
                                                                          ) {
                                                                            var val =
                                                                              "_value" in
                                                                              o
                                                                                ? o._value
                                                                                : o.value
                                                                            return val
                                                                          }
                                                                        )
                                                                    _vm.$set(
                                                                      detail,
                                                                      "type",
                                                                      $event
                                                                        .target
                                                                        .multiple
                                                                        ? $$selectedVal
                                                                        : $$selectedVal[0]
                                                                    )
                                                                  },
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    return _vm.Verified_Qty(
                                                                      detail,
                                                                      detail.detail_id
                                                                    )
                                                                  },
                                                                ],
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      "add",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "Addition"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    value:
                                                                      "sub",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "Subtraction"
                                                                      )
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
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
                                                                    return _vm.Remove_Product(
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
                                                      ]
                                                    )
                                                  }
                                                ),
                                              ],
                                              2
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { md: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          staticClass: "mt-4",
                                          attrs: { label: _vm.$t("Note") },
                                        },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.adjustment.notes,
                                                expression: "adjustment.notes",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              rows: "4",
                                              placeholder: _vm.$t("Afewwords"),
                                            },
                                            domProps: {
                                              value: _vm.adjustment.notes,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.adjustment,
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
                                                disabled: _vm.SubmitProcessing,
                                              },
                                              on: {
                                                click: _vm.Submit_Adjustment,
                                              },
                                            },
                                            [_vm._v(_vm._s(_vm.$t("submit")))]
                                          ),
                                          _vm._v(" "),
                                          _vm.SubmitProcessing
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
]
render._withStripped = true



/***/ })

}]);