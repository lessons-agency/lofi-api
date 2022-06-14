"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["departments"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/department.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/department.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Department"
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
      selectedIds: [],
      totalRows: "",
      search: "",
      limit: "10",
      editmode: false,
      departments: {},
      employees: [],
      companies: [],
      department: {
        department: "",
        company_id: "",
        department_head: ""
      }
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("department"),
        field: "department",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Department_Head"),
        field: "employee_head",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Company"),
        field: "company_name",
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
        this.Get_Department(currentPage);
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
        this.Get_Department(1);
      }
    },
    //---- Event Select Rows
    selectionChanged: function selectionChanged(_ref3) {
      var _this = this;

      var selectedRows = _ref3.selectedRows;
      this.selectedIds = [];
      selectedRows.forEach(function (row, index) {
        _this.selectedIds.push(row.id);
      });
    },
    //---- Event Sort Change
    onSortChange: function onSortChange(params) {
      var field = "";

      if (params[0].field == "company_name") {
        field = "company_id";
      } else {
        field = params[0].field;
      }

      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Department(this.serverParams.page);
    },
    //---- Event Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Department(this.serverParams.page);
    },
    //---- Validation State Form
    getValidationState: function getValidationState(_ref4) {
      var dirty = _ref4.dirty,
          validated = _ref4.validated,
          _ref4$valid = _ref4.valid,
          valid = _ref4$valid === void 0 ? null : _ref4$valid;
      return dirty || validated ? valid : null;
    },
    //------------- Submit Validation Create & Edit department
    Submit_Department: function Submit_Department() {
      var _this2 = this;

      this.$refs.Create_Department.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (!_this2.editmode) {
            _this2.Create_Department();
          } else {
            _this2.Update_Department();
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
    //------------------------------ Modal (create department) -------------------------------\\
    New_Department: function New_Department() {
      this.reset_Form();
      this.editmode = false;
      this.Get_Data_Create();
      this.$bvModal.show("New_Department");
    },
    //------------------------------ Modal (Update department) -------------------------------\\
    Edit_Department: function Edit_Department(department) {
      this.Get_Department(this.serverParams.page);
      this.reset_Form();
      this.Get_Data_Edit(department.id);
      this.Get_employees_by_company(department.company_id);
      this.department = department;
      this.editmode = true;
      this.$bvModal.show("New_Department");
    },
    Selected_Company: function Selected_Company(value) {
      if (value === null) {
        this.department.company_id = "";
      }

      this.employees = [];
      this.department.department_head = "";
      this.Get_employees_by_company(value);
    },
    Selected_Employee: function Selected_Employee(value) {
      if (value === null) {
        this.department.department_head = "";
      }
    },
    //---------------------- Get_employees_by_company ------------------------------\\
    Get_employees_by_company: function Get_employees_by_company(value) {
      var _this3 = this;

      axios.get("/core/Get_employees_by_company?id=" + value).then(function (_ref5) {
        var data = _ref5.data;
        return _this3.employees = data;
      });
    },
    //---------------------- Get_Data_Create  ------------------------------\\
    Get_Data_Create: function Get_Data_Create() {
      var _this4 = this;

      axios.get("/departments/create").then(function (response) {
        _this4.companies = response.data.companies;
      })["catch"](function (error) {});
    },
    //---------------------- Get_Data_Edit  ------------------------------\\
    Get_Data_Edit: function Get_Data_Edit(id) {
      var _this5 = this;

      axios.get("/departments/" + id + "/edit").then(function (response) {
        _this5.companies = response.data.companies;
      })["catch"](function (error) {});
    },
    //--------------------------Get ALL department ---------------------------\\
    Get_Department: function Get_Department(page) {
      var _this6 = this;

      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("departments?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this6.totalRows = response.data.totalRows;
        _this6.departments = response.data.departments; // Complete the animation of theprogress bar.

        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this6.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this6.isLoading = false;
        }, 500);
      });
    },
    //------------------------------- Create department ------------------------\\
    Create_Department: function Create_Department() {
      var _this7 = this;

      this.SubmitProcessing = true;
      axios.post("departments", {
        department: this.department.department,
        company_id: this.department.company_id,
        department_head: this.department.department_head
      }).then(function (response) {
        _this7.SubmitProcessing = false;
        Fire.$emit("Event_Department");

        _this7.makeToast("success", _this7.$t("Created_in_successfully"), _this7.$t("Success"));
      })["catch"](function (error) {
        _this7.SubmitProcessing = false;

        _this7.makeToast("danger", _this7.$t("InvalidData"), _this7.$t("Failed"));
      });
    },
    //------------------------------- Update department ------------------------\\
    Update_Department: function Update_Department() {
      var _this8 = this;

      this.SubmitProcessing = true;
      axios.put("departments/" + this.department.id, {
        department: this.department.department,
        company_id: this.department.company_id,
        department_head: this.department.department_head
      }).then(function (response) {
        _this8.SubmitProcessing = false;
        Fire.$emit("Event_Department");

        _this8.makeToast("success", _this8.$t("Updated_in_successfully"), _this8.$t("Success"));
      })["catch"](function (error) {
        _this8.SubmitProcessing = false;

        _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
      });
    },
    //------------------------------- reset Form ------------------------\\
    reset_Form: function reset_Form() {
      this.department = {
        id: "",
        department: "",
        company_id: "",
        department_head: ""
      };
    },
    //------------------------------- Delete department ------------------------\\
    Remove_Department: function Remove_Department(id) {
      var _this9 = this;

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
          axios["delete"]("departments/" + id).then(function () {
            _this9.$swal(_this9.$t("Delete.Deleted"), _this9.$t("Deleted_in_successfully"), "success");

            Fire.$emit("Delete_Department");
          })["catch"](function () {
            _this9.$swal(_this9.$t("Delete.Failed"), _this9.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---- Delete department by selection
    delete_by_selected: function delete_by_selected() {
      var _this10 = this;

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
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
          axios.post("departments/delete/by_selection", {
            selectedIds: _this10.selectedIds
          }).then(function () {
            _this10.$swal(_this10.$t("Delete.Deleted"), _this10.$t("Deleted_in_successfully"), "success");

            Fire.$emit("Delete_Department");
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
            }, 500);

            _this10.$swal(_this10.$t("Delete.Failed"), _this10.$t("Delete.Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //----------------------------- Created function-------------------\\
  created: function created() {
    var _this11 = this;

    this.Get_Department(1);
    Fire.$on("Event_Department", function () {
      setTimeout(function () {
        _this11.Get_Department(_this11.serverParams.page);

        _this11.$bvModal.hide("New_Department");
      }, 500);
    });
    Fire.$on("Delete_Department", function () {
      setTimeout(function () {
        _this11.Get_Department(_this11.serverParams.page);
      }, 500);
    });
  }
});

/***/ }),

/***/ "./resources/src/views/app/pages/hrm/department.vue":
/*!**********************************************************!*\
  !*** ./resources/src/views/app/pages/hrm/department.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _department_vue_vue_type_template_id_39ffb75b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department.vue?vue&type=template&id=39ffb75b& */ "./resources/src/views/app/pages/hrm/department.vue?vue&type=template&id=39ffb75b&");
/* harmony import */ var _department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.vue?vue&type=script&lang=js& */ "./resources/src/views/app/pages/hrm/department.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _department_vue_vue_type_template_id_39ffb75b___WEBPACK_IMPORTED_MODULE_0__.render,
  _department_vue_vue_type_template_id_39ffb75b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/app/pages/hrm/department.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/hrm/department.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/hrm/department.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/department.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/hrm/department.vue?vue&type=template&id=39ffb75b&":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/hrm/department.vue?vue&type=template&id=39ffb75b& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_template_id_39ffb75b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_template_id_39ffb75b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_department_vue_vue_type_template_id_39ffb75b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./department.vue?vue&type=template&id=39ffb75b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/department.vue?vue&type=template&id=39ffb75b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/department.vue?vue&type=template&id=39ffb75b&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/hrm/department.vue?vue&type=template&id=39ffb75b& ***!
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
        attrs: { page: _vm.$t("department"), folder: _vm.$t("hrm") },
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
                    rows: _vm.departments,
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
                    "on-selected-rows-change": _vm.selectionChanged,
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
                                      staticClass: "cursor-pointer",
                                      attrs: { title: "Edit" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Edit_Department(props.row)
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
                                      staticClass: "cursor-pointer",
                                      attrs: { title: "Delete" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.Remove_Department(
                                            props.row.id
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
                                ])
                              : _vm._e(),
                          ]
                        },
                      },
                    ],
                    null,
                    false,
                    3823395130
                  ),
                },
                [
                  _c(
                    "div",
                    {
                      attrs: { slot: "selected-row-actions" },
                      slot: "selected-row-actions",
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          on: {
                            click: function ($event) {
                              return _vm.delete_by_selected()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("Del")))]
                      ),
                    ]
                  ),
                  _vm._v(" "),
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
                              return _vm.New_Department()
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
        { ref: "Create_Department" },
        [
          _c(
            "b-modal",
            {
              attrs: {
                "hide-footer": "",
                size: "md",
                id: "New_Department",
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
                      return _vm.Submit_Department.apply(null, arguments)
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
                              name: "department",
                              rules: { required: true },
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
                                            _vm.$t("department") + " " + "*",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            placeholder: _vm.$t(
                                              "Enter_Department_Name"
                                            ),
                                            state:
                                              _vm.getValidationState(
                                                validationContext
                                              ),
                                            "aria-describedby":
                                              "department-feedback",
                                            label: "department",
                                          },
                                          model: {
                                            value: _vm.department.department,
                                            callback: function ($$v) {
                                              _vm.$set(
                                                _vm.department,
                                                "department",
                                                $$v
                                              )
                                            },
                                            expression: "department.department",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-invalid-feedback",
                                          {
                                            attrs: {
                                              id: "department-feedback",
                                            },
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
                          _c("validation-provider", {
                            attrs: {
                              name: "Company",
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
                                        label: _vm.$t("Company") + " " + "*",
                                      },
                                    },
                                    [
                                      _c("v-select", {
                                        staticClass: "required",
                                        class: {
                                          "is-invalid": !!errors.length,
                                        },
                                        attrs: {
                                          state: errors[0]
                                            ? false
                                            : valid
                                            ? true
                                            : null,
                                          required: "",
                                          placeholder: _vm.$t("Choose_Company"),
                                          reduce: function (label) {
                                            return label.value
                                          },
                                          options: _vm.companies.map(function (
                                            companies
                                          ) {
                                            return {
                                              label: companies.name,
                                              value: companies.id,
                                            }
                                          }),
                                        },
                                        on: { input: _vm.Selected_Company },
                                        model: {
                                          value: _vm.department.company_id,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.department,
                                              "company_id",
                                              $$v
                                            )
                                          },
                                          expression: "department.company_id",
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
                        { attrs: { md: "12" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: _vm.$t("Department_Head") } },
                            [
                              _c("v-select", {
                                attrs: {
                                  placeholder: _vm.$t("Choose_Department_Head"),
                                  reduce: function (label) {
                                    return label.value
                                  },
                                  options: _vm.employees.map(function (
                                    employees
                                  ) {
                                    return {
                                      label: employees.username,
                                      value: employees.id,
                                    }
                                  }),
                                },
                                on: { input: _vm.Selected_Employee },
                                model: {
                                  value: _vm.department.department_head,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.department,
                                      "department_head",
                                      $$v
                                    )
                                  },
                                  expression: "department.department_head",
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