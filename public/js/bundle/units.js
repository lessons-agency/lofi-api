"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["units"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/units.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/units.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Unit"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      totalRows: "",
      search: "",
      limit: "10",
      units: [],
      units_base: [],
      editmode: false,
      show_operator: false,
      unit: {
        id: "",
        name: "",
        ShortName: "",
        base_unit: "",
        base_unit_name: "",
        operator: "*",
        operator_value: 1
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Name"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("ShortName"),
        field: "ShortName",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("BaseUnit"),
        field: "base_unit_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Operator"),
        field: "operator",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("OperationValue"),
        field: "operator_value",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  },
  methods: {
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;

      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Units(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;

      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Units(1);
      }
    },
    //---- Event Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Units(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Units(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref3) {
      var dirty = _ref3.dirty,
          validated = _ref3.validated,
          _ref3$valid = _ref3.valid,
          valid = _ref3$valid === void 0 ? null : _ref3$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit Unit
    Submit_Unit: function Submit_Unit() {
      var _this = this;

      this.$refs.Create_Unit.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          if (!_this.editmode) {
            _this.Create_Unit();
          } else {
            _this.Update_Unit();
          }
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
    //------------------------------ Modal (create Unit) -------------------------------\\
    New_Unit: function New_Unit() {
      this.reset_Form();
      this.show_operator = false;
      this.editmode = false;
      this.$bvModal.show("New_Unit");
    },
    //------------------------------ Modal (Update Unit) -------------------------------\\
    Edit_Unit: function Edit_Unit(unit) {
      this.Get_Units(this.serverParams.page);
      this.reset_Form();
      this.unit = unit;

      if (this.unit.base_unit == "") {
        this.show_operator = false;
      } else {
        this.show_operator = true;
      }

      this.editmode = true;
      this.$bvModal.show("New_Unit");
    },
    Selected_Base_Unit: function Selected_Base_Unit(value) {
      if (value == null) {
        this.show_operator = false;
      } else {
        this.show_operator = true;
      }
    },
    //----------------------------------------  Get All Units -------------------------\\
    Get_Units: function Get_Units(page) {
      var _this2 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("units?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this2.units = response.data.Units;
        _this2.totalRows = response.data.totalRows;
        _this2.units_base = response.data.Units_base; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings: function setToStrings() {
      // Simply replaces null values with strings=''
      if (this.unit.base_unit === null) {
        this.unit.base_unit = "";
      }
    },
    //---------------- Send Request with axios ( Create Unit) --------------------\\
    Create_Unit: function Create_Unit() {
      var _this3 = this;

      this.SubmitProcessing = true;
      this.setToStrings();
      axios.post("units", {
        name: this.unit.name,
        ShortName: this.unit.ShortName,
        base_unit: this.unit.base_unit,
        operator: this.unit.operator,
        operator_value: this.unit.operator_value
      }).then(function (response) {
        _this3.SubmitProcessing = false;
        Fire.$emit("Event_Unit");

        _this3.makeToast("success", _this3.$t("Create.TitleUnit"), _this3.$t("Success"));
      })["catch"](function (error) {
        _this3.SubmitProcessing = false;

        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    },
    //--------------- Send Request with axios ( Update Unit) --------------------\\
    Update_Unit: function Update_Unit() {
      var _this4 = this;

      this.SubmitProcessing = true;
      this.setToStrings();
      axios.put("units/" + this.unit.id, {
        name: this.unit.name,
        ShortName: this.unit.ShortName,
        base_unit: this.unit.base_unit,
        operator: this.unit.operator,
        operator_value: this.unit.operator_value
      }).then(function (response) {
        _this4.SubmitProcessing = false;
        Fire.$emit("Event_Unit");

        _this4.makeToast("success", _this4.$t("Update.TitleUnit"), _this4.$t("Success"));
      })["catch"](function (error) {
        _this4.SubmitProcessing = false;

        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));
      });
    },
    //------------------------------ reset Form ------------------------------\\
    reset_Form: function reset_Form() {
      this.unit = {
        id: "",
        name: "",
        ShortName: "",
        base_unit: "",
        base_unit_name: "",
        operator: "*",
        operator_value: 1
      };
    },
    //--------------------------------- Remove Unit --------------------\\
    Remove_Unit: function Remove_Unit(id) {
      var _this5 = this;

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
          axios["delete"]("units/" + id).then(function (response) {
            if (response.data.success) {
              _this5.$swal(_this5.$t("Delete.Deleted"), _this5.$t("Delete.UnitDeleted"), "success");
            } else {
              _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Unit_already_linked_with_sub_unit"), "warning");
            }

            Fire.$emit("Delete_Unit");
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete.Failed"), _this5.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Method
  //----------------------------- Created function-------------------
  created: function created() {
    var _this6 = this;

    this.Get_Units(1);
    Fire.$on("Event_Unit", function () {
      setTimeout(function () {
        _this6.Get_Units(_this6.serverParams.page);

        _this6.$bvModal.hide("New_Unit");
      }, 500);
    });
    Fire.$on("Delete_Unit", function () {
      setTimeout(function () {
        _this6.Get_Units(_this6.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/products/units.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/app/pages/products/units.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _units_vue_vue_type_template_id_6063eb21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units.vue?vue&type=template&id=6063eb21& */ "./resources/src/views/app/pages/products/units.vue?vue&type=template&id=6063eb21&");
/* harmony import */ var _units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/products/units.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _units_vue_vue_type_template_id_6063eb21___WEBPACK_IMPORTED_MODULE_0__.render,
  _units_vue_vue_type_template_id_6063eb21___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/products/units.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/products/units.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/units.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./units.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/units.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/products/units.vue?vue&type=template&id=6063eb21&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/units.vue?vue&type=template&id=6063eb21& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_template_id_6063eb21___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_template_id_6063eb21___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_units_vue_vue_type_template_id_6063eb21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./units.vue?vue&type=template&id=6063eb21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/units.vue?vue&type=template&id=6063eb21&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/units.vue?vue&type=template&id=6063eb21&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/units.vue?vue&type=template&id=6063eb21& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        attrs: { page: _vm.$t("Units"), folder: _vm.$t("Products") },
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
            { staticClass: "wrapper" },
            [
              _c(
                "vue-good-table",
                {
                  attrs: {
                    mode: "remote",
                    columns: _vm.columns,
                    totalRows: _vm.totalRows,
                    rows: _vm.units,
                    "search-options": {
                      enabled: true,
                      placeholder: _vm.$t("Search_this_table"),
                    },
                    "select-options": {
                      enabled: true,
                      clearSelectionText: "",
                    },
                    "pagination-options": {
                      enabled: true,
                      mode: "records",
                      nextLabel: "next",
                      prevLabel: "prev",
                    },
                    styleClass: "table-hover tableOne vgt-table",
                  },
                  on: {
                    "on-page-change": _vm.onPageChange,
                    "on-per-page-change": _vm.onPerPageChange,
                    "on-sort-change": _vm.onSortChange,
                    "on-search": _vm.onSearch,
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "table-row",
                        fn: function (props) {
                          return [
                            props.column.field == "actions"
                              ? _c("span", [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: { title: "Edit" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Edit_Unit(props.row)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "i-Edit text-25 text-success",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover",
                                          modifiers: { hover: true },
                                        },
                                      ],
                                      attrs: { title: "Delete" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Remove_Unit(props.row.id)
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
                                ])
                              : props.column.field == "BaseUnit"
                              ? _c("div", [
                                  props.row.base_unit_name != ""
                                    ? _c("span", [
                                        _vm._v(
                                          _vm._s(props.row.base_unit_name)
                                        ),
                                      ])
                                    : _c("span", [_vm._v("N/D")]),
                                ])
                              : _vm._e(),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    67566315
                  ),
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "mt-2 mb-3",
                      attrs: { slot: "table-actions" },
                      slot: "table-actions",
                    },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "btn btn-primary btn-icon m-1" },
                          on: {
                            click: function ($event) {
                              return _vm.New_Unit()
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "i-Add" }),
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Add")) +
                              "\n        "
                          ),
                        ]
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
      _vm._v(" "),
      _c(
        "validation-observer",
        { ref: "Create_Unit" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_Unit",
                title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add"),
              },
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Submit_Unit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Code Currency",
                              rules: { required: true, max: 15 },
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
                                          label: _vm.$t("Name") + " " + "*",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            placeholder:
                                              _vm.$t("Enter_Name_Unit"),
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby": "Name-feedback",
                                            label: "Name",
                                          },
                                          model: {
                                            value: _vm.unit.name,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.unit, "name", $$v)
                                            },
                                            expression: "unit.name",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          { attrs: { id: "Name-feedback" } },
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
                        { attrs: { md: "12" } },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "ShortName",
                              rules: { required: true, max: 15 },
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
                                            _vm.$t("ShortName") + " " + "*",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            placeholder: _vm.$t(
                                              "Enter_ShortName_Unit"
                                            ),
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "ShortName-feedback",
                                            label: "ShortName",
                                          },
                                          model: {
                                            value: _vm.unit.ShortName,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.unit,
                                                "ShortName",
                                                $$v
                                              )
                                            },
                                            expression: "unit.ShortName",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "ShortName-feedback" },
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
                        { attrs: { md: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("BaseUnit") } },
                            [
                              _c("v-select", {
                                attrs: {
                                  reduce: function (label) {
                                    return label.value
                                  },
                                  placeholder: _vm.$t("Choose_Base_Unit"),
                                  options: _vm.units_base.map(function (
                                    units_base
                                  ) {
                                    return {
                                      label: units_base.name,
                                      value: units_base.id,
                                    }
                                  }),
                                },
                                on: { input: _vm.Selected_Base_Unit },
                                model: {
                                  value: _vm.unit.base_unit,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.unit, "base_unit", $$v)
                                  },
                                  expression: "unit.base_unit",
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
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.show_operator,
                              expression: "show_operator",
                            },
                          ],
                          attrs: { md: "12" },
                        },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("Operator") } },
                            [
                              _c("v-select", {
                                attrs: {
                                  reduce: function (label) {
                                    return label.value
                                  },
                                  placeholder: _vm.$t("Choose_Operator"),
                                  options: [
                                    { label: "Multiply (*)", value: "*" },
                                    { label: "Divide (/)", value: "/" },
                                  ],
                                },
                                model: {
                                  value: _vm.unit.operator,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.unit, "operator", $$v)
                                  },
                                  expression: "unit.operator",
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
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.show_operator,
                              expression: "show_operator",
                            },
                          ],
                          attrs: { md: "12" },
                        },
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Operation Value",
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
                                            _vm.$t("OperationValue") +
                                            " " +
                                            "*",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            placeholder: _vm.$t(
                                              "Enter_Operation_Value"
                                            ),
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "Operation-feedback",
                                            label: "Operation",
                                          },
                                          model: {
                                            value: _vm.unit.operator_value,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.unit,
                                                "operator_value",
                                                $$v
                                              )
                                            },
                                            expression: "unit.operator_value",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: { id: "Operation-feedback" },
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
                        { staticClass: "mt-3", attrs: { md: "12" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                variant: "primary",
                                type: "submit",
                                disabled: _vm.SubmitProcessing,
                              },
                            },
                            [_vm._v(_vm._s(_vm.$t("submit")))]
                          ),
                          _vm._v(" "),
                          _vm.SubmitProcessing ? _vm._m(0) : _vm._e(),
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
]
render._withStripped = true



/***/ })

}]);