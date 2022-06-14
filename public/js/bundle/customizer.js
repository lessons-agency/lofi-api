"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["customizer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false,
      langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn", "kr"]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["getThemeMode", "getcompactLeftSideBarBgColor"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["changeThemeRtl", "changeThemeLayout", "changeThemeMode", "changecompactLeftSideBarBgColor"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    }
  })
});

/***/ }),

/***/ "./resources/src/components/common/customizer.vue":
/*!********************************************************!*\
  !*** ./resources/src/components/common/customizer.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customizer_vue_vue_type_template_id_525a0006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customizer.vue?vue&type=template&id=525a0006&scoped=true& */ "./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true&");
/* harmony import */ var _customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customizer.vue?vue&type=script&lang=js& */ "./resources/src/components/common/customizer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customizer_vue_vue_type_template_id_525a0006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _customizer_vue_vue_type_template_id_525a0006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "525a0006",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/common/customizer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/common/customizer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customizer_vue_vue_type_template_id_525a0006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customizer.vue?vue&type=template&id=525a0006&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/common/customizer.vue?vue&type=template&id=525a0006&scoped=true& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "customizer", class: { open: _vm.isOpen } },
      [
        _c(
          "div",
          {
            staticClass: "handle",
            on: {
              click: function ($event) {
                _vm.isOpen = !_vm.isOpen
              },
            },
          },
          [_c("i", { staticClass: "i-Gear spin" })]
        ),
        _vm._v(" "),
        _c(
          "vue-perfect-scrollbar",
          {
            staticClass: "customizer-body ps rtl-ps-none",
            attrs: {
              settings: { suppressScrollX: true, wheelPropagation: false },
            },
          },
          [
            _vm.getThemeMode.layout != "vertical-sidebar" &&
            _vm.getThemeMode.layout != "vertical-sidebar-two"
              ? _c("div", {}, [
                  _c(
                    "div",
                    { staticClass: "card-header", attrs: { id: "headingOne" } },
                    [_c("p", { staticClass: "mb-0" }, [_vm._v("RTL")])]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c("label", { staticClass: "checkbox checkbox-primary" }, [
                      _c("input", {
                        attrs: { type: "checkbox", id: "rtl-checkbox" },
                        on: { change: _vm.changeThemeRtl },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v("Enable RTL")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "checkmark" }),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", { staticClass: "card-header" }, [
                _c("p", { staticClass: "mb-0" }, [_vm._v("Dark Mode")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "label",
                  {
                    directives: [
                      {
                        name: "b-popover",
                        rawName: "v-b-popover.hover.left",
                        value: "Dark Mode",
                        expression: "'Dark Mode'",
                        modifiers: { hover: true, left: true },
                      },
                    ],
                    staticClass: "switch switch-primary mr-3 mt-2",
                  },
                  [
                    _c("input", {
                      attrs: { type: "checkbox" },
                      on: { click: _vm.changeThemeMode },
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "slider" }),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", {}, [
              _c("div", { staticClass: "card-header" }, [
                _c("p", { staticClass: "mb-0" }, [_vm._v("Language")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "menu-icon-language" }, [
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("en")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-gb",
                        attrs: { title: "en" },
                      }),
                      _vm._v(" English\n            "),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("fr")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-fr",
                        attrs: { title: "fr" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("French"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("ar")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-sa",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Arabic"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("tur")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-tr",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Turkish"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("sm_ch")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-cn",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Simplified Chinese"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("thai")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-th",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Thaï"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("hn")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-in",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Hindi"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("de")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-de",
                        attrs: { title: "de" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("German"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("es")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-es",
                        attrs: { title: "es" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Spanish"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("it")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-it",
                        attrs: { title: "it" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Italien"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("Ind")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-id",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Indonesian"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("tr_ch")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-cn",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Traditional Chinese"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("ru")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-ru",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Russian"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("vn")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-vn",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Vietnamese"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.SetLocal("kr")
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "flag-icon flag-icon-squared flag-icon-kr",
                        attrs: { title: "sa" },
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title-lang" }, [
                        _vm._v("Korean"),
                      ]),
                    ]
                  ),
                ]),
              ]),
            ]),
          ]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);