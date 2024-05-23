(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/main.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 19));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));\n__webpack_require__(/*! ./uni.promisify.adaptor */ 23);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFHbkI7QUFDQTtBQUFnQztBQUFBO0FBQ2hDQSxZQUFHLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLEtBQUs7QUFDaENDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFDbEIsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUcsbUJBQ2RHLFlBQUcsRUFDTjtBQUNGRSxHQUFHLENBQUNDLE1BQU0sRUFBRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgJy4vdW5pLnByb21pc2lmeS5hZGFwdG9yJ1xuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcbkFwcC5tcFR5cGUgPSAnYXBwJ1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!********************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/pages.json ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 7).default);
});

/***/ }),
/* 7 */
/*!*******************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/pages/index/index.vue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    ppSlider:
      __webpack_require__(/*! @/uni_modules/pp-slider/components/pp-slider/pp-slider.vue */ 10)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "content"),
      attrs: { _i: 0 },
      on: {
        touchmove: function ($event) {
          $event.stopPropagation()
          $event.preventDefault()
          return (function () {})($event)
        },
      },
    },
    [
      _vm._$s(1, "i", _vm.isShowVideo)
        ? _c(
            "view",
            { staticClass: _vm._$s(1, "sc", "myvideo"), attrs: { _i: 1 } },
            [
              _c("image", {
                staticClass: _vm._$s(2, "sc", "startImage"),
                attrs: { _i: 2 },
              }),
            ]
          )
        : _vm._e(),
      _vm._$s(3, "i", !_vm.isShowVideo)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(3, "sc", "myContent"),
              attrs: { _i: 3 },
              on: {
                touchmove: function ($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return (function () {})($event)
                },
              },
            },
            [
              _c("image", {
                staticClass: _vm._$s(4, "sc", "logo"),
                attrs: { _i: 4 },
              }),
              _c("view", {
                staticClass: _vm._$s(5, "sc", "line1"),
                attrs: { _i: 5 },
              }),
              _vm._$s(
                6,
                "i",
                _vm.isShowSlider &&
                  _vm.connected &&
                  _vm.victroyConnected &&
                  !_vm.maskShow
              )
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(6, "sc", "ppContent"),
                      attrs: { _i: 6 },
                    },
                    [
                      _c("pp-slider", {
                        attrs: {
                          min: 0,
                          max: 100,
                          "background-color": "#1a9ed6",
                          "active-color": "#d0d6e8",
                          vertical: true,
                          value: _vm.slideValue,
                          "show-value": false,
                          "block-size": 35,
                          "line-size": 20,
                          disabled: false,
                          _i: 7,
                        },
                        on: { changing: _vm.changing },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._$s(8, "i", _vm.connected && _vm.victroyConnected)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(8, "sc", "buttonsView"),
                      attrs: { _i: 8 },
                    },
                    [
                      _vm._$s(9, "i", !_vm.isComputeOldType)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(9, "sc", "openButtonView"),
                              attrs: { _i: 9 },
                            },
                            [
                              _vm._$s(10, "i", !_vm.isOpenBtnLight)
                                ? _c("image", {
                                    staticClass: _vm._$s(10, "sc", "myButton"),
                                    attrs: { _i: 10 },
                                    on: {
                                      click: function ($event) {
                                        return _vm.writeBluetoothWithId("1")
                                      },
                                    },
                                  })
                                : _vm._e(),
                              _vm._$s(11, "i", _vm.isOpenBtnLight)
                                ? _c("image", {
                                    staticClass: _vm._$s(11, "sc", "myButton"),
                                    attrs: { _i: 11 },
                                    on: {
                                      click: function ($event) {
                                        return _vm.writeBluetoothWithId("1")
                                      },
                                    },
                                  })
                                : _vm._e(),
                            ]
                          )
                        : _vm._e(),
                      _vm._$s(12, "i", !_vm.isComputeOldType)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(12, "sc", "openButtonView"),
                              attrs: { _i: 12 },
                            },
                            [
                              _vm._$s(13, "i", !_vm.isLightBtnLight)
                                ? _c("image", {
                                    staticClass: _vm._$s(13, "sc", "myButton"),
                                    attrs: { _i: 13 },
                                    on: {
                                      click: function ($event) {
                                        return _vm.writeBluetoothWithId("2")
                                      },
                                    },
                                  })
                                : _vm._e(),
                              _vm._$s(14, "i", _vm.isLightBtnLight)
                                ? _c("image", {
                                    staticClass: _vm._$s(14, "sc", "myButton"),
                                    attrs: { _i: 14 },
                                    on: {
                                      click: function ($event) {
                                        return _vm.writeBluetoothWithId("2")
                                      },
                                    },
                                  })
                                : _vm._e(),
                            ]
                          )
                        : _vm._e(),
                      _vm._$s(15, "i", _vm.isComputeOldType)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(15, "sc", "openButtonView"),
                              attrs: { _i: 15 },
                            },
                            [
                              _vm._$s(16, "i", !_vm.isOpenBtnLight)
                                ? _c("image", {
                                    staticClass: _vm._$s(16, "sc", "myButton"),
                                    attrs: { _i: 16 },
                                    on: {
                                      click: function ($event) {
                                        return _vm.writeBluetoothWithId("1")
                                      },
                                    },
                                  })
                                : _vm._e(),
                              _vm._$s(17, "i", _vm.isOpenBtnLight)
                                ? _c("image", {
                                    staticClass: _vm._$s(17, "sc", "myButton"),
                                    attrs: { _i: 17 },
                                    on: {
                                      click: function ($event) {
                                        return _vm.writeBluetoothWithId("1")
                                      },
                                    },
                                  })
                                : _vm._e(),
                            ]
                          )
                        : _vm._e(),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(18, "sc", "openButtonView"),
                          attrs: { _i: 18 },
                        },
                        [
                          _vm._$s(19, "i", !_vm.isWind1BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(19, "sc", "myButton"),
                                attrs: { _i: 19 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("3")
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._$s(20, "i", _vm.isWind1BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(20, "sc", "myButton"),
                                attrs: { _i: 20 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("3")
                                  },
                                },
                              })
                            : _vm._e(),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(21, "sc", "openButtonView"),
                          attrs: { _i: 21 },
                        },
                        [
                          _vm._$s(22, "i", !_vm.isWind2BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(22, "sc", "myButton"),
                                attrs: { _i: 22 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("4")
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._$s(23, "i", _vm.isWind2BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(23, "sc", "myButton"),
                                attrs: { _i: 23 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("4")
                                  },
                                },
                              })
                            : _vm._e(),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(24, "sc", "openButtonView"),
                          attrs: { _i: 24 },
                        },
                        [
                          _vm._$s(25, "i", !_vm.isWind3BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(25, "sc", "myButton"),
                                attrs: { _i: 25 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("5")
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._$s(26, "i", _vm.isWind3BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(26, "sc", "myButton"),
                                attrs: { _i: 26 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("5")
                                  },
                                },
                              })
                            : _vm._e(),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(27, "sc", "openButtonView"),
                          attrs: { _i: 27 },
                        },
                        [
                          _vm._$s(28, "i", !_vm.isWind4BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(28, "sc", "myButton"),
                                attrs: { _i: 28 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("6")
                                  },
                                },
                              })
                            : _vm._e(),
                          _vm._$s(29, "i", _vm.isWind4BtnLight)
                            ? _c("image", {
                                staticClass: _vm._$s(29, "sc", "myButton"),
                                attrs: { _i: 29 },
                                on: {
                                  click: function ($event) {
                                    return _vm.writeBluetoothWithId("6")
                                  },
                                },
                              })
                            : _vm._e(),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._$s(30, "i", _vm.connected)
                ? _c("image", {
                    staticClass: _vm._$s(30, "sc", "connectBtn"),
                    attrs: { _i: 30 },
                    on: { click: _vm.connectBtnAction },
                  })
                : _vm._e(),
              _vm._$s(31, "i", !_vm.connected)
                ? _c("image", {
                    staticClass: _vm._$s(31, "sc", "connectBtn"),
                    attrs: { _i: 31 },
                    on: { click: _vm.connectBtnAction },
                  })
                : _vm._e(),
              _c("view", {
                staticClass: _vm._$s(32, "sc", "line2"),
                attrs: { _i: 32 },
              }),
            ]
          )
        : _vm._e(),
      _vm._$s(33, "i", _vm.maskShow)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(33, "sc", "uni-mask"),
              attrs: { _i: 33 },
              on: {
                touchmove: function ($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.moveHandle($event)
                },
                click: _vm.maskclose,
              },
            },
            [
              _c(
                "scroll-view",
                {
                  staticClass: _vm._$s(34, "sc", "uni-scroll_box"),
                  attrs: { _i: 34 },
                  on: {
                    touchmove: function ($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.moveHandle($event)
                    },
                    click: function ($event) {
                      $event.stopPropagation()
                      return _vm.moveHandle($event)
                    },
                  },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(35, "sc", "uni-title"),
                      attrs: { _i: 35 },
                    },
                    [
                      _vm._v(
                        _vm._$s(35, "t0-0", _vm._s(_vm.list.length)) +
                          _vm._$s(
                            35,
                            "t0-1",
                            _vm._s(" devices have been discovered")
                          )
                      ),
                    ]
                  ),
                  _vm._l(
                    _vm._$s(36, "f", { forItems: _vm.list }),
                    function (item, index, $20, $30) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(36, "f", { forIndex: $20, key: index }),
                          staticClass: _vm._$s(
                            "36-" + $30,
                            "sc",
                            "uni-list-box"
                          ),
                          attrs: { _i: "36-" + $30 },
                          on: {
                            click: function ($event) {
                              return _vm.tapQuery(item)
                            },
                          },
                        },
                        [
                          _c("view", [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  "38-" + $30,
                                  "sc",
                                  "uni-list_name"
                                ),
                                attrs: { _i: "38-" + $30 },
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    "38-" + $30,
                                    "t0-0",
                                    _vm._s(item.name || item.localName)
                                  )
                                ),
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
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!******************************************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/uni_modules/pp-slider/components/pp-slider/pp-slider.vue ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pp-slider.vue?vue&type=template&id=2fe2d1ba&scoped=true& */ 11);\n/* harmony import */ var _pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pp-slider.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2fe2d1ba\",\n  null,\n  false,\n  _pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"uni_modules/pp-slider/components/pp-slider/pp-slider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDs7O0FBR3hEO0FBQzROO0FBQzVOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BwLXNsaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZlMmQxYmEmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcC1zbGlkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcC1zbGlkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmZlMmQxYmFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvcHAtc2xpZGVyL2NvbXBvbmVudHMvcHAtc2xpZGVyL3BwLXNsaWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************************************************************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/uni_modules/pp-slider/components/pp-slider/pp-slider.vue?vue&type=template&id=2fe2d1ba&scoped=true& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pp-slider.vue?vue&type=template&id=2fe2d1ba&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_template_id_2fe2d1ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/uni_modules/pp-slider/components/pp-slider/pp-slider.vue?vue&type=template&id=2fe2d1ba&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "slider"),
      style: _vm._$s(0, "s", _vm.sliderStyle),
      attrs: { _i: 0 },
    },
    [
      _c(
        "movable-area",
        {
          staticClass: _vm._$s(1, "sc", "movable-area"),
          style: _vm._$s(1, "s", _vm.areaStyle),
          attrs: { id: "movable_area", _i: 1 },
        },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "block"),
            style: _vm._$s(2, "s", _vm.blockStyle),
            attrs: { _i: 2 },
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "active"),
            style: _vm._$s(3, "s", _vm.activeStyle),
            attrs: { _i: 3 },
          }),
          _c("movable-view", {
            staticClass: _vm._$s(4, "sc", "movable-view"),
            style: _vm._$s(4, "s", {
              width: _vm.blockSize + "px",
              height: _vm.blockSize + "px",
              background: "" + _vm.blockColor,
            }),
            attrs: {
              x: _vm._$s(4, "a-x", _vm.x),
              y: _vm._$s(4, "a-y", _vm.y),
              disabled: _vm._$s(4, "a-disabled", _vm.disabled),
              _i: 4,
            },
            on: { change: _vm.onChange, touchend: _vm.touchend },
          }),
        ]
      ),
      _vm._$s(5, "i", _vm.showValue)
        ? _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "val"), attrs: { _i: 5 } },
            [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.val)))]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/uni_modules/pp-slider/components/pp-slider/pp-slider.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./pp-slider.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_pp_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXl3QixDQUFnQiwrc0JBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BwLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BwLXNsaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/uni_modules/pp-slider/components/pp-slider/pp-slider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  name: \"slider\",\n  props: {\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 100\n    },\n    value: {\n      type: Number,\n      default: 0\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    blockSize: {\n      type: Number,\n      default: 20\n    },\n    lineSize: {\n      type: Number,\n      default: 2\n    },\n    vertical: {\n      type: Boolean,\n      default: false\n    },\n    backgroundColor: {\n      type: String,\n      default: '#e9e9e9'\n    },\n    blockColor: {\n      type: String,\n      default: '#ffffff'\n    },\n    activeColor: {\n      type: String,\n      default: '#2878ff'\n    },\n    showValue: {\n      type: Boolean,\n      default: false\n    }\n  },\n  computed: {\n    sliderStyle: function sliderStyle() {\n      var res = this.vertical ? \"height:100%;flex-direction:column;\" : \"width:100%;flex-direction:row;\";\n      return res;\n    },\n    areaStyle: function areaStyle() {\n      var res = this.vertical ? \"width:\".concat(this.blockSize, \"px;\") : \"height:\".concat(this.blockSize, \"px\");\n      return res;\n    },\n    blockStyle: function blockStyle() {\n      var res = this.vertical ? \"top:\".concat(this.blockSize / 2, \"px;bottom:\").concat(this.blockSize / 2, \"px;width:\").concat(this.lineSize, \"px;left:50%;margin-left:-\").concat(this.lineSize / 2, \"px;background:\").concat(this.backgroundColor, \";border-radius:\").concat(this.lineSize / 2, \"px;\") : \"left:\".concat(this.blockSize / 2, \"px;right:\").concat(this.blockSize / 2, \"px;height:\").concat(this.lineSize, \"px;top:50%;margin-top:-\").concat(this.lineSize / 2, \"px;background:\").concat(this.backgroundColor, \";border-radius:\").concat(this.lineSize / 2, \"px;\");\n      return res;\n    },\n    activeStyle: function activeStyle() {\n      var res = this.vertical ? \"top:\".concat(this.left, \";bottom:\").concat(this.right, \";width:\").concat(this.lineSize, \"px;left:50%;margin-left:-\").concat(this.lineSize / 2, \"px;background:\").concat(this.activeColor, \";border-radius:\").concat(this.lineSize / 2, \"px;\") : \"left:\".concat(this.left, \";right:\").concat(this.right, \";height:\").concat(this.lineSize, \"px;top:50%;margin-top:-\").concat(this.lineSize / 2, \"px;background:\").concat(this.activeColor, \";border-radius:\").concat(this.lineSize / 2, \"px;\");\n      return res;\n    }\n  },\n  mounted: function mounted() {\n    this.selectorQuery();\n  },\n  data: function data() {\n    return {\n      width: 0,\n      left: \"\".concat(this.blockSize / 2, \"px\"),\n      right: 1000000,\n      val: this.value < this.min ? this.min : this.value,\n      x: 0,\n      y: 0\n    };\n  },\n  methods: {\n    selectorQuery: function selectorQuery() {\n      var _this = this;\n      var that = this;\n      var query = uni.createSelectorQuery().in(this);\n      query.select('#movable_area').boundingClientRect(function (data) {\n        that.width = that.vertical ? data.height : data.width;\n        that.right = \"\".concat(that.width - _this.blockSize / 2, \"px\");\n        var shift = +((that.val - that.min) / (_this.max - _this.min) * (that.width - _this.blockSize)).toFixed(1);\n        that.x = that.vertical ? 0 : shift;\n        that.y = that.vertical ? shift : 0;\n        _this.setVal(shift);\n      }).exec();\n    },\n    onChange: function onChange(e) {\n      var shift = this.vertical ? e.detail.y : e.detail.x;\n      this.setVal(shift);\n    },\n    touchend: function touchend() {\n      this.$emit('change', this.val);\n    },\n    setVal: function setVal(shift) {\n      var val = +(shift / (this.width - this.blockSize) * (this.max - this.min) + this.min).toFixed(0);\n      this.right = \"\".concat(this.width - shift, \"px\");\n      if (this.val == val) return false;\n      this.val = val;\n      this.$emit('changing', this.val);\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvcHAtc2xpZGVyL2NvbXBvbmVudHMvcHAtc2xpZGVyL3BwLXNsaWRlci52dWUiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwibWluIiwidHlwZSIsImRlZmF1bHQiLCJtYXgiLCJ2YWx1ZSIsImRpc2FibGVkIiwiYmxvY2tTaXplIiwibGluZVNpemUiLCJ2ZXJ0aWNhbCIsImJhY2tncm91bmRDb2xvciIsImJsb2NrQ29sb3IiLCJhY3RpdmVDb2xvciIsInNob3dWYWx1ZSIsImNvbXB1dGVkIiwic2xpZGVyU3R5bGUiLCJhcmVhU3R5bGUiLCJibG9ja1N0eWxlIiwiYWN0aXZlU3R5bGUiLCJtb3VudGVkIiwiZGF0YSIsIndpZHRoIiwibGVmdCIsInJpZ2h0IiwidmFsIiwieCIsInkiLCJtZXRob2RzIiwic2VsZWN0b3JRdWVyeSIsInF1ZXJ5IiwidGhhdCIsIm9uQ2hhbmdlIiwidG91Y2hlbmQiLCJzZXRWYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBWUE7RUFDQUE7RUFDQUM7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtJQUNBQztNQUNBRjtNQUNBQztJQUNBO0lBQ0FFO01BQ0FIO01BQ0FDO0lBQ0E7SUFDQUc7TUFDQUo7TUFDQUM7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0lBQ0FLO01BQ0FOO01BQ0FDO0lBQ0E7SUFDQU07TUFDQVA7TUFDQUM7SUFDQTtJQUNBTztNQUNBUjtNQUNBQztJQUNBO0lBQ0FRO01BQ0FUO01BQ0FDO0lBQ0E7SUFDQVM7TUFDQVY7TUFDQUM7SUFDQTtJQUNBVTtNQUNBWDtNQUNBQztJQUNBO0VBQ0E7RUFDQVc7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQSxtVEFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQSwwUkFDQTtNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQUM7UUFDQUM7UUFDQUE7UUFDQTtRQUNBQTtRQUNBQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJzbGlkZXJcIiA6c3R5bGU9XCJzbGlkZXJTdHlsZVwiPlxyXG5cdFx0PG1vdmFibGUtYXJlYSBjbGFzcz1cIm1vdmFibGUtYXJlYVwiIDpzdHlsZT1cImFyZWFTdHlsZVwiIGlkPVwibW92YWJsZV9hcmVhXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmxvY2tcIiA6c3R5bGU9XCJibG9ja1N0eWxlXCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImFjdGl2ZVwiIDpzdHlsZT1cImFjdGl2ZVN0eWxlXCI+PC92aWV3PlxyXG5cdFx0XHQ8bW92YWJsZS12aWV3IGNsYXNzPVwibW92YWJsZS12aWV3XCIgOng9XCJ4XCIgOnk9XCJ5XCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6YW5pbWF0aW9uPVwiZmFsc2VcIiBkaXJlY3Rpb249XCJhbGxcIiBAY2hhbmdlPVwib25DaGFuZ2VcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiIDpzdHlsZT1cInt3aWR0aDpgJHtibG9ja1NpemV9cHhgLGhlaWdodDpgJHtibG9ja1NpemV9cHhgLGJhY2tncm91bmQ6YCR7YmxvY2tDb2xvcn1gfVwiPlxyXG5cdFx0XHQ8L21vdmFibGUtdmlldz5cclxuXHRcdDwvbW92YWJsZS1hcmVhPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ2YWxcIiB2LWlmPVwic2hvd1ZhbHVlXCI+e3t2YWx9fTwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogXCJzbGlkZXJcIixcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1pbjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdG1heDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaXNhYmxlZDoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0YmxvY2tTaXplOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDIwXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmVTaXplOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0dmVydGljYWw6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2U5ZTllOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YmxvY2tDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0YWN0aXZlQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMyODc4ZmYnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dWYWx1ZToge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHNsaWRlclN0eWxlKCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlcyA9IHRoaXMudmVydGljYWwgPyBgaGVpZ2h0OjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2AgOiBgd2lkdGg6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7YDtcclxuXHRcdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhcmVhU3R5bGUoKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzID0gdGhpcy52ZXJ0aWNhbCA/IGB3aWR0aDoke3RoaXMuYmxvY2tTaXplfXB4O2AgOiBgaGVpZ2h0OiR7dGhpcy5ibG9ja1NpemV9cHhgO1xyXG5cdFx0XHRcdHJldHVybiByZXM7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJsb2NrU3R5bGUoKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzID0gdGhpcy52ZXJ0aWNhbCA/IGB0b3A6JHt0aGlzLmJsb2NrU2l6ZS8yfXB4O2JvdHRvbToke3RoaXMuYmxvY2tTaXplLzJ9cHg7d2lkdGg6JHt0aGlzLmxpbmVTaXplfXB4O2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0ke3RoaXMubGluZVNpemUvMn1weDtiYWNrZ3JvdW5kOiR7dGhpcy5iYWNrZ3JvdW5kQ29sb3J9O2JvcmRlci1yYWRpdXM6JHt0aGlzLmxpbmVTaXplLzJ9cHg7YCA6XHJcblx0XHRcdFx0XHRgbGVmdDoke3RoaXMuYmxvY2tTaXplLzJ9cHg7cmlnaHQ6JHt0aGlzLmJsb2NrU2l6ZS8yfXB4O2hlaWdodDoke3RoaXMubGluZVNpemV9cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0ke3RoaXMubGluZVNpemUvMn1weDtiYWNrZ3JvdW5kOiR7dGhpcy5iYWNrZ3JvdW5kQ29sb3J9O2JvcmRlci1yYWRpdXM6JHt0aGlzLmxpbmVTaXplLzJ9cHg7YDtcclxuXHRcdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhY3RpdmVTdHlsZSgpIHtcclxuXHRcdFx0XHRjb25zdCByZXMgPSB0aGlzLnZlcnRpY2FsID8gYHRvcDoke3RoaXMubGVmdH07Ym90dG9tOiR7dGhpcy5yaWdodH07d2lkdGg6JHt0aGlzLmxpbmVTaXplfXB4O2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi0ke3RoaXMubGluZVNpemUvMn1weDtiYWNrZ3JvdW5kOiR7dGhpcy5hY3RpdmVDb2xvcn07Ym9yZGVyLXJhZGl1czoke3RoaXMubGluZVNpemUvMn1weDtgIDpcclxuXHRcdFx0XHRcdGBsZWZ0OiR7dGhpcy5sZWZ0fTtyaWdodDoke3RoaXMucmlnaHR9O2hlaWdodDoke3RoaXMubGluZVNpemV9cHg7dG9wOjUwJTttYXJnaW4tdG9wOi0ke3RoaXMubGluZVNpemUvMn1weDtiYWNrZ3JvdW5kOiR7dGhpcy5hY3RpdmVDb2xvcn07Ym9yZGVyLXJhZGl1czoke3RoaXMubGluZVNpemUvMn1weDtgXHJcblx0XHRcdFx0cmV0dXJuIHJlcztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0b3JRdWVyeSgpO1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2lkdGg6IDAsXHJcblx0XHRcdFx0bGVmdDogYCR7dGhpcy5ibG9ja1NpemUvMn1weGAsXHJcblx0XHRcdFx0cmlnaHQ6IDEwMDAwMDAsXHJcblx0XHRcdFx0dmFsOiB0aGlzLnZhbHVlIDwgdGhpcy5taW4gPyB0aGlzLm1pbiA6IHRoaXMudmFsdWUsXHJcblx0XHRcdFx0eDogMCxcclxuXHRcdFx0XHR5OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNlbGVjdG9yUXVlcnkoKSB7XHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpLmluKHRoaXMpO1xyXG5cdFx0XHRcdHF1ZXJ5LnNlbGVjdCgnI21vdmFibGVfYXJlYScpLmJvdW5kaW5nQ2xpZW50UmVjdChkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoYXQud2lkdGggPSB0aGF0LnZlcnRpY2FsID8gZGF0YS5oZWlnaHQgOiBkYXRhLndpZHRoO1xyXG5cdFx0XHRcdFx0dGhhdC5yaWdodCA9IGAke3RoYXQud2lkdGgtKHRoaXMuYmxvY2tTaXplLzIpfXB4YDtcclxuXHRcdFx0XHRcdGNvbnN0IHNoaWZ0ID0gKygoKHRoYXQudmFsIC0gdGhhdC5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pKSAqICh0aGF0LndpZHRoIC0gdGhpcy5ibG9ja1NpemUpKS50b0ZpeGVkKDEpO1xyXG5cdFx0XHRcdFx0dGhhdC54ID0gdGhhdC52ZXJ0aWNhbCA/IDAgOiBzaGlmdDtcclxuXHRcdFx0XHRcdHRoYXQueSA9IHRoYXQudmVydGljYWwgPyBzaGlmdCA6IDA7XHJcblx0XHRcdFx0XHR0aGlzLnNldFZhbChzaGlmdCk7XHJcblx0XHRcdFx0fSkuZXhlYygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNvbnN0IHNoaWZ0ID0gdGhpcy52ZXJ0aWNhbCA/IGUuZGV0YWlsLnkgOiBlLmRldGFpbC54O1xyXG5cdFx0XHRcdHRoaXMuc2V0VmFsKHNoaWZ0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hlbmQoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy52YWwpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRWYWwoc2hpZnQpIHtcclxuXHRcdFx0XHRsZXQgdmFsID0gKygoc2hpZnQgLyAodGhpcy53aWR0aCAtIHRoaXMuYmxvY2tTaXplKSkgKiAodGhpcy5tYXggLSB0aGlzLm1pbikgKyB0aGlzLm1pbikudG9GaXhlZCgwKTtcclxuXHRcdFx0XHR0aGlzLnJpZ2h0ID0gYCR7dGhpcy53aWR0aC1zaGlmdH1weGA7XHJcblx0XHRcdFx0aWYgKHRoaXMudmFsID09IHZhbCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMudmFsID0gdmFsO1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5naW5nJywgdGhpcy52YWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdHBwLXNsaWRlciB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LyogI2VuZGlmICovXHJcbjwvc3R5bGU+XHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuXHQuc2xpZGVyIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubW92YWJsZS1hcmVhIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cclxuXHQubW92YWJsZS12aWV3IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgMTBycHggIzk5OTk5OTtcclxuXHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC5ibG9jayxcclxuXHQuYWN0aXZlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cdC52YWwge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 16 */
/*!*******************************************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      slideValue: 100,\n      isShowVideo: true,\n      isShowSlider: false,\n      timer: '',\n      isComputeOldType: false,\n      title: '',\n      disabled: [false, true, true, true, true, true, true, true, true, true, true],\n      newDeviceLoad: false,\n      searchLoad: false,\n      maskShow: false,\n      equipment: [],\n      adapterState: {\n        discovering: false,\n        available: false\n      },\n      connected: false,\n      victroyConnected: false,\n      servicesData: [],\n      characteristicsData: [],\n      valueChangeData: {},\n      isStop: true,\n      list: [],\n      serviceId: '',\n      characteristicsId: '',\n      notify: false,\n      isOpenBtnLight: false,\n      isLightBtnLight: false,\n      isWind1BtnLight: false,\n      isWind2BtnLight: false,\n      isWind3BtnLight: false,\n      isWind4BtnLight: false\n    };\n  },\n  onLoad: function onLoad() {\n    var _this2 = this;\n    // this.onBLEConnectionStateChange();\n    this.openBluetoothAdapter();\n    // toast('Uninitialized Bluetooth adapter');\n\n    __f__(\"log\", '111111', \" at pages/index/index.vue:126\");\n    this.isShowVideo = true;\n    plus.navigator.closeSplashscreen();\n    setTimeout(function () {\n      __f__(\"log\", '77777', \" at pages/index/index.vue:130\");\n      _this2.isShowVideo = false;\n      // uni.setStorageSync('CurrentConnectDevice', '');\n      // let currentConnectDevice = uni.getStorageSync('CurrentConnectDevice');\n      // if(currentConnectDevice.length>2){\n      // \tthis.startBluetoothDevicesDiscovery();\n      // \tthis.maskShow = true;\n      // }\n    }, 2000);\n\n    // this.isShowVideo = false;\n    // let currentConnectDevice = uni.getStorageSync('CurrentConnectDevice');\n\n    // if(currentConnectDevice.length>2){\n    // \tthis.startBluetoothDevicesDiscovery();\n    // \tthis.maskShow = true;\n    // }\n\n    // setInterval(()=>{\n    // \tif(this.victroyConnected){\n    // \t\t_this.writeBluetoothWithId('10');\n    // \t}\n    // },1000);\n    var platform = uni.getSystemInfoSync().platform;\n    if (platform == 'android') {} else {\n      setInterval(function () {\n        if (_this2.victroyConnected) {\n          _this.writeBluetoothWithId('10');\n        }\n      }, 1000);\n    }\n\n    // this.slideValue = 30\n    // setInterval(()=>{\n    // \tthis.isShowSlider=true\n    // \tthis.slideValue = (this.slideValue==100)?0:(this.slideValue+10)\n    // \tconsole.log(this.slideValue)\n    // \tthis.isShowSlider=false\n\n    // },2000);\n    // setTimeout(() => {\n    //     // this.slideValue = 50\n    // }, 3000)\n  },\n  onUnload: function onUnload() {\n    if (this.connected) {\n      this.closeBLEConnection();\n    }\n    this.stopBluetoothDevicesDiscovery(true);\n    this.closeBluetoothAdapter();\n  },\n  beforeDestroy: function beforeDestroy() {\n    clearInterval(this.timer);\n  },\n  methods: {\n    changing: function changing(val) {\n      if (!this.connected) {\n        return;\n      }\n      var deviceId = this.equipment[0].deviceId;\n      var serviceId = this.serviceId;\n      var characteristicId = this.characteristicsId;\n      var num = 224 * (100 - val) / 100;\n      var sum = num + 64;\n      if (sum > 255) {\n        sum = sum - 256;\n      }\n      var buffer = new ArrayBuffer(9);\n      var dataView = new DataView(buffer);\n      dataView.setUint8(0, 0xAA);\n      dataView.setUint8(1, 0xAA);\n      dataView.setUint8(2, 0xAA);\n      dataView.setUint8(3, 0xAA);\n      dataView.setUint8(4, 0x02);\n      dataView.setUint8(5, 0xFD);\n      dataView.setUint8(6, 0x40);\n      dataView.setUint8(7, 0xFF & num);\n      dataView.setUint8(8, 0xFF & sum);\n      uni.writeBLECharacteristicValue({\n        deviceId: deviceId,\n        // 设备ID，在【4】里获取到\n        serviceId: serviceId,\n        // 服务UUID，在【6】里能获取到\n        characteristicId: characteristicId,\n        // 特征值，在【7】里能获取到\n        value: buffer,\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/index.vue:226\");\n        },\n        fail: function fail(err) {\n          __f__(\"error\", err, \" at pages/index/index.vue:229\");\n        }\n      });\n    },\n    moveHandle: function moveHandle() {},\n    /**\n     * 关闭遮罩\n     */\n    maskclose: function maskclose() {\n      this.maskShow = false;\n    },\n    connectBtnAction: function connectBtnAction() {\n      if (this.connected) {\n        this.connected = false;\n        this.victroyConnected = false;\n        this.closeBLEConnection();\n      } else {\n        this.startBluetoothDevicesDiscovery();\n        this.maskShow = true;\n      }\n      uni.setStorageSync('CurrentConnectDevice', '');\n    },\n    dealReturnData: function dealReturnData(returnData) {\n      var statusStr = returnData.substr(14, 2);\n      var lightProStr = returnData.substr(16, 2);\n      var typeStr = returnData.substr(18, 2);\n      __f__(\"log\", statusStr, \" at pages/index/index.vue:258\");\n      __f__(\"log\", lightProStr, \" at pages/index/index.vue:259\");\n      __f__(\"log\", typeStr, \" at pages/index/index.vue:260\");\n      if (typeStr == '01') {\n        this.isComputeOldType = true;\n      } else {\n        this.isComputeOldType = false;\n      }\n      if (typeStr == '03') {\n        this.isShowSlider = true;\n      } else {\n        this.isShowSlider = false;\n      }\n      if (typeStr != '01' && typeStr != '02' && typeStr != '03') {\n        this.connected = false;\n        this.victroyConnected = false;\n        this.closeBLEConnection();\n      } else {\n        this.victroyConnected = true;\n        uni.setStorageSync('CurrentConnectDevice', this.equipment[0].deviceId);\n      }\n      var statusStrTwo = parseInt(statusStr, 16).toString(2);\n      statusStrTwo = statusStrTwo.padStart(8, '0');\n      __f__(\"log\", statusStrTwo, \" at pages/index/index.vue:288\");\n      var statusTimer = statusStrTwo.substr(0, 2);\n      var statusWind = statusStrTwo.substr(2, 4);\n      var statusLight = statusStrTwo.substr(6, 2);\n      this.overOpenBtnBing();\n      __f__(\"log\", 'statusTimer', \" at pages/index/index.vue:294\");\n      __f__(\"log\", statusTimer, \" at pages/index/index.vue:295\");\n      if (statusTimer == '10') {\n        this.isOpenBtnLight = true;\n      } else if (statusTimer == '11') {\n        this.isOpenBtnLight = true;\n        this.startOpenBtnBing();\n      } else {\n        this.isOpenBtnLight = false;\n      }\n      if (statusWind == '0000' || !this.isOpenBtnLight) {\n        this.isWind1BtnLight = false;\n        this.isWind2BtnLight = false;\n        this.isWind3BtnLight = false;\n        this.isWind4BtnLight = false;\n        this.isOpenBtnLight = false;\n      } else if (statusWind == '0000') {\n        this.isWind1BtnLight = false;\n        this.isWind2BtnLight = false;\n        this.isWind3BtnLight = false;\n        this.isWind4BtnLight = false;\n        this.isOpenBtnLight = false;\n      } else if (statusWind == '0001') {\n        this.isWind1BtnLight = true;\n        this.isWind2BtnLight = false;\n        this.isWind3BtnLight = false;\n        this.isWind4BtnLight = false;\n      } else if (statusWind == '0010') {\n        this.isWind1BtnLight = false;\n        this.isWind2BtnLight = true;\n        this.isWind3BtnLight = false;\n        this.isWind4BtnLight = false;\n      } else if (statusWind == '0100') {\n        this.isWind1BtnLight = false;\n        this.isWind2BtnLight = false;\n        this.isWind3BtnLight = true;\n        this.isWind4BtnLight = false;\n      } else if (statusWind == '1000') {\n        this.isWind1BtnLight = false;\n        this.isWind2BtnLight = false;\n        this.isWind3BtnLight = false;\n        this.isWind4BtnLight = true;\n      }\n      if (statusLight == '00') {\n        this.isLightBtnLight = false;\n        this.slideValue = 100;\n        // this.isShowSlider = false\n      } else if (statusLight == '01') {\n        this.isLightBtnLight = true;\n        var lightProTen = parseInt(lightProStr, 16).toString(10);\n        var tempValue = 100 - lightProTen * 100 / 224;\n        this.slideValue = parseInt(tempValue);\n        // this.isShowSlider = true\n      }\n\n      __f__(\"log\", 'statusLight', \" at pages/index/index.vue:355\");\n      __f__(\"log\", statusLight, \" at pages/index/index.vue:356\");\n      __f__(\"log\", this.slideValue, \" at pages/index/index.vue:357\");\n    },\n    startOpenBtnBing: function startOpenBtnBing() {\n      var _this3 = this;\n      this.timer = setInterval(function () {\n        if (_this3.isOpenBtnLight) {\n          _this3.isOpenBtnLight = false;\n        } else {\n          _this3.isOpenBtnLight = true;\n        }\n      }, 500);\n    },\n    overOpenBtnBing: function overOpenBtnBing() {\n      clearInterval(this.timer);\n    },\n    /**\n     * 选择设备\n     */\n    queryDevices: function queryDevices() {\n      // this.newDeviceLoad = true;\n      this.showMaskType = 'device';\n      this.maskShow = true;\n    },\n    tapQuery: function tapQuery(item) {\n      this.$set(this.disabled, 4, false);\n      if (this.equipment.length > 0) {\n        this.equipment[0] = item;\n      } else {\n        this.equipment.push(item);\n      }\n      this.newDeviceLoad = false;\n      this.maskShow = false;\n      this.createBLEConnection();\n      // this.getBLEDeviceServices();\n    },\n    writeBluetoothWithId: function writeBluetoothWithId(id) {\n      var deviceId = this.equipment[0].deviceId;\n      var serviceId = this.serviceId;\n      var characteristicId = this.characteristicsId;\n      var length = id == '10' ? 8 : 9;\n      var buffer = new ArrayBuffer(length);\n      var dataView = new DataView(buffer);\n      dataView.setUint8(0, 0xAA);\n      dataView.setUint8(1, 0xAA);\n      dataView.setUint8(2, 0xAA);\n      dataView.setUint8(3, 0xAA);\n      if (id == '10') {\n        dataView.setUint8(4, 0x01);\n        dataView.setUint8(5, 0xFE);\n        dataView.setUint8(6, 0x10);\n        dataView.setUint8(7, 0x10);\n      } else {\n        dataView.setUint8(4, 0x02);\n        dataView.setUint8(5, 0xFD);\n        dataView.setUint8(6, 0x20);\n        if (id == '1') {\n          dataView.setUint8(7, 0x01);\n          dataView.setUint8(8, 0x21);\n        } else if (id == '2') {\n          dataView.setUint8(7, 0x06);\n          dataView.setUint8(8, 0x26);\n        } else if (id == '3') {\n          dataView.setUint8(7, 0x05);\n          dataView.setUint8(8, 0x25);\n        } else if (id == '4') {\n          dataView.setUint8(7, 0x04);\n          dataView.setUint8(8, 0x24);\n        } else if (id == '5') {\n          dataView.setUint8(7, 0x03);\n          dataView.setUint8(8, 0x23);\n        } else if (id == '6') {\n          dataView.setUint8(7, 0x02);\n          dataView.setUint8(8, 0x22);\n        }\n      }\n      uni.writeBLECharacteristicValue({\n        deviceId: deviceId,\n        // 设备ID，在【4】里获取到\n        serviceId: serviceId,\n        // 服务UUID，在【6】里能获取到\n        characteristicId: characteristicId,\n        // 特征值，在【7】里能获取到\n        value: buffer,\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/index.vue:452\");\n        },\n        fail: function fail(err) {\n          __f__(\"error\", err, \" at pages/index/index.vue:455\");\n        }\n      });\n    },\n    ab2hex: function ab2hex(buffer) {\n      var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {\n        return ('00' + bit.toString(16)).slice(-2);\n      });\n      return hexArr.join('');\n    },\n    /**\n     * 初始化蓝牙设备\n     */\n    openBluetoothAdapter: function openBluetoothAdapter() {\n      var _this4 = this;\n      uni.openBluetoothAdapter({\n        success: function success(e) {\n          __f__(\"log\", 'Bluetooth init success:' + e.errMsg, \" at pages/index/index.vue:476\");\n          __f__(\"log\", JSON.stringify(e), \" at pages/index/index.vue:477\");\n          _this4.isStop = false;\n          _this4.$set(_this4.disabled, 0, true);\n          _this4.$set(_this4.disabled, 1, false);\n          _this4.$set(_this4.disabled, 10, false);\n          _this4.onBluetoothAdapterInitialised();\n        },\n        fail: function fail(e) {\n          __f__(\"log\", e, \" at pages/index/index.vue:485\");\n          __f__(\"log\", 'Bluetooth init failed with error code:' + (e.errCode || e.errMsg), \" at pages/index/index.vue:486\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode, e.errMsg);\n          }\n        }\n      });\n    },\n    onBluetoothAdapterInitialised: function onBluetoothAdapterInitialised() {\n      this.getBluetoothAdapterState();\n    },\n    /**\n     * 开始搜索蓝牙设备\n     */\n    startBluetoothDevicesDiscovery: function startBluetoothDevicesDiscovery() {\n      var _this5 = this;\n      uni.startBluetoothDevicesDiscovery({\n        services: ['FFE0'],\n        allowDuplicatesKey: false,\n        success: function success(e) {\n          __f__(\"log\", 'Start searching for Bluetooth devices:' + e.errMsg, \" at pages/index/index.vue:505\");\n          _this5.searchLoad = true;\n          _this5.$set(_this5.disabled, 1, true);\n          _this5.$set(_this5.disabled, 2, false);\n          _this5.$set(_this5.disabled, 3, false);\n          _this5.onBluetoothDeviceFound();\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '搜索蓝牙设备失败，错误码:' + e.errCode, \" at pages/index/index.vue:513\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 停止搜索蓝牙设备\n     */\n    stopBluetoothDevicesDiscovery: function stopBluetoothDevicesDiscovery(types) {\n      var _this6 = this;\n      uni.stopBluetoothDevicesDiscovery({\n        success: function success(e) {\n          __f__(\"log\", '停止搜索蓝牙设备:' + e.errMsg, \" at pages/index/index.vue:526\");\n          if (types) {\n            _this6.$set(_this6.disabled, 1, true);\n          } else {\n            _this6.$set(_this6.disabled, 1, false);\n          }\n          _this6.$set(_this6.disabled, 2, true);\n          // this.$set(this.disabled, 3, true);\n          _this6.searchLoad = false;\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '停止搜索蓝牙设备失败，错误码：' + e.errCode, \" at pages/index/index.vue:537\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 发现外围设备\n     */\n    onBluetoothDeviceFound: function onBluetoothDeviceFound() {\n      var _this7 = this;\n      uni.onBluetoothDeviceFound(function (devices) {\n        __f__(\"log\", '开始监听寻找到新设备的事件', \" at pages/index/index.vue:549\");\n        // this.$set(this.disabled, 3, false);\n        __f__(\"log\", \"Devices Found: \".concat(devices.length), \" at pages/index/index.vue:551\");\n        _this7.stopBluetoothDevicesDiscovery(true);\n        _this7.getBluetoothDevices();\n      });\n    },\n    /**\n     * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。\n     */\n    getBluetoothDevices: function getBluetoothDevices() {\n      var _this8 = this;\n      uni.getBluetoothDevices({\n        success: function success(res) {\n          _this8.newDeviceLoad = false;\n          __f__(\"log\", '获取蓝牙设备成功:' + res.errMsg, \" at pages/index/index.vue:564\");\n          // console.log(JSON.stringify(res))\n          var _this = _this8;\n          _this.list = [];\n          res.devices.forEach(function (item, index) {\n            __f__(\"log\", item, \" at pages/index/index.vue:569\"); //输出数组的每一个元素\n            if (item.name || item.localName) {\n              _this.list.push(item);\n            }\n            if (item.deviceId == uni.getStorageSync('CurrentConnectDevice')) {\n              _this.tapQuery(item);\n              // break;\n            }\n          });\n          // this.list = res.devices;\n        },\n\n        fail: function fail(e) {\n          __f__(\"log\", '获取蓝牙设备错误，错误码：' + e.errCode, \" at pages/index/index.vue:584\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 获取本机蓝牙适配器状态\n     */\n    getBluetoothAdapterState: function getBluetoothAdapterState() {\n      var _this9 = this;\n      __f__(\"log\", '--->', \" at pages/index/index.vue:595\");\n      uni.getBluetoothAdapterState({\n        success: function success(res) {\n          __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:598\");\n          _this9.adapterState = res;\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '获取本机蓝牙适配器状态失败，错误码：' + e.errCode, \" at pages/index/index.vue:602\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 连接低功耗蓝牙\n     */\n    createBLEConnection: function createBLEConnection() {\n      var _this10 = this;\n      var deviceId = this.equipment[0].deviceId;\n      var _this = this;\n      // uni.showToast({\n      // \ttitle: 'Bluetooth Connecting...',\n      // \ticon: 'loading',\n      // \tduration: 99999\n      // });\n      uni.createBLEConnection({\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/index.vue:624\");\n          __f__(\"log\", '连接蓝牙成功:' + res.errMsg, \" at pages/index/index.vue:625\");\n          // 连接设备后断开搜索 并且不能搜索设备\n          // this.stopBluetoothDevicesDiscovery(true);\n          _this10.onBLEConnectionStateChange();\n          uni.hideToast();\n          setTimeout(function () {\n            if (!_this.victroyConnected) {\n              toast('Error device');\n              if (_this.connected) {\n                _this.connected = false;\n                _this.victroyConnected = false;\n                _this.closeBLEConnection();\n              }\n            }\n          }, 3000);\n          _this.getBLEDeviceServices();\n          var platform = uni.getSystemInfoSync().platform;\n          if (platform == 'android') {\n            setTimeout(function () {\n              _this.getBLEDeviceServices();\n            }, 1000);\n          } else {\n            _this.getBLEDeviceServices();\n          }\n          // this.connected = true;\n        },\n\n        fail: function fail(e) {\n          __f__(\"log\", '连接低功耗蓝牙失败，错误码：' + e.errCode, \" at pages/index/index.vue:654\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 断开与低功耗蓝牙设备的连接\n     */\n    closeBLEConnection: function closeBLEConnection() {\n      var _this11 = this;\n      var deviceId = this.equipment[0].deviceId;\n      uni.closeBLEConnection({\n        deviceId: deviceId,\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/index/index.vue:670\");\n          __f__(\"log\", '断开低功耗蓝牙成功:' + res.errMsg, \" at pages/index/index.vue:671\");\n          _this11.$set(_this11.disabled, 1, false);\n          _this11.$set(_this11.disabled, 3, true);\n          _this11.$set(_this11.disabled, 4, true);\n          _this11.$set(_this11.disabled, 5, true);\n          _this11.$set(_this11.disabled, 6, true);\n          _this11.$set(_this11.disabled, 7, true);\n          _this11.$set(_this11.disabled, 8, true);\n          _this11.$set(_this11.disabled, 9, true);\n          _this11.equipment = [];\n          _this11.servicesData = [];\n          _this11.characteristicsData = [];\n          _this11.serviceId = '';\n          _this11.characteristicsId = '';\n          toast('Connection closed');\n          _this11.openBluetoothAdapter();\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '断开低功耗蓝牙成功，错误码：' + e.errCode, \" at pages/index/index.vue:689\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n          _this11.openBluetoothAdapter();\n        }\n      });\n    },\n    /**\n     * 获取所有服务\n     */\n    getBLEDeviceServices: function getBLEDeviceServices() {\n      var _this12 = this;\n      var deviceId = this.equipment[0].deviceId;\n      __f__(\"log\", '获取所有服务的 uuid:' + deviceId, \" at pages/index/index.vue:702\");\n      var _this = this;\n      uni.getBLEDeviceServices({\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        success: function success(res) {\n          __f__(\"log\", JSON.stringify(res.services), \" at pages/index/index.vue:708\");\n          __f__(\"log\", '获取设备服务成功:' + res.errMsg, \" at pages/index/index.vue:709\");\n          _this12.$set(_this12.disabled, 7, true);\n          _this12.$set(_this12.disabled, 8, true);\n          // this.showMaskType = 'service';\n          // this.list = res.services;\n          res.services.forEach(function (item, index) {\n            __f__(\"log\", item, \" at pages/index/index.vue:715\"); //输出数组的每一个元素\n            // if(item.uuid.includes('FFE0')){\n\n            // }\n            __f__(\"log\", _this.serviceId, \" at pages/index/index.vue:719\");\n            __f__(\"log\", item.uuid, \" at pages/index/index.vue:720\");\n            _this.serviceId = item.uuid;\n            setTimeout(function () {\n              _this.getBLEDeviceCharacteristics();\n            }, 300);\n          });\n          _this12.characteristicsData = [];\n          // this.maskShow = true;\n        },\n\n        fail: function fail(e) {\n          __f__(\"log\", '获取设备服务失败，错误码：' + e.errCode, \" at pages/index/index.vue:731\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 获取某个服务下的所有特征值\n     */\n    getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics() {\n      var _this13 = this;\n      var deviceId = this.equipment[0].deviceId;\n      var serviceId = this.serviceId;\n      __f__(\"log\", 'asdasdasd', \" at pages/index/index.vue:744\");\n      __f__(\"log\", deviceId, \" at pages/index/index.vue:745\");\n      __f__(\"log\", serviceId, \" at pages/index/index.vue:746\");\n      var _this = this;\n      uni.getBLEDeviceCharacteristics({\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取\n        serviceId: serviceId,\n        success: function success(res) {\n          __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:754\");\n          __f__(\"log\", '获取特征值成功:' + res.errMsg, \" at pages/index/index.vue:755\");\n          _this13.$set(_this13.disabled, 7, true);\n          res.characteristics.forEach(function (item, index) {\n            __f__(\"log\", item, \" at pages/index/index.vue:759\"); //输出数组的每一个元素\n            // if(item.uuid.includes('FFE1')){\n\n            // }\n            __f__(\"log\", '获取特征值成功:' + item, \" at pages/index/index.vue:763\");\n            _this.characteristicsId = item.uuid;\n            __f__(\"log\", '获取特征值成功:' + item.properties.notify, \" at pages/index/index.vue:765\");\n            _this.notify = item.properties.notify;\n            _this.readBLECharacteristicValue();\n            // setTimeout(function() {\n            // \treturn _this.writeBluetoothWithId('1')\n            // }, 300);\n          });\n        },\n\n        fail: function fail(e) {\n          __f__(\"log\", '获取特征值失败，错误码：' + e.errCode, \" at pages/index/index.vue:775\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n    },\n    /**\n     * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等\n     */\n    onBLEConnectionStateChange: function onBLEConnectionStateChange() {\n      var _this14 = this;\n      uni.onBLEConnectionStateChange(function (res) {\n        // 该方法回调中可以用于处理连接意外断开等异常情况\n        __f__(\"log\", \"\\u84DD\\u7259\\u8FDE\\u63A5\\u72B6\\u6001 -------------------------->\", \" at pages/index/index.vue:788\");\n        __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:789\");\n        if (!res.connected) {\n          if (_this14.isStop) {\n            _this14.connected = false;\n            _this14.victroyConnected = false;\n            _this14.closeBLEConnection();\n            return;\n          }\n          __f__(\"log\", '断开低功耗蓝牙成功:', \" at pages/index/index.vue:798\");\n          _this14.$set(_this14.disabled, 1, false);\n          _this14.$set(_this14.disabled, 3, true);\n          _this14.$set(_this14.disabled, 4, true);\n          _this14.$set(_this14.disabled, 5, true);\n          _this14.$set(_this14.disabled, 6, true);\n          _this14.$set(_this14.disabled, 7, true);\n          _this14.$set(_this14.disabled, 8, true);\n          _this14.$set(_this14.disabled, 9, true);\n          _this14.searchLoad = false;\n          _this14.equipment = [];\n          _this14.servicesData = [];\n          _this14.characteristicsData = [];\n          _this14.valueChangeData = {};\n          _this14.connected = false;\n          _this14.victroyConnected = false;\n          // this.openBluetoothAdapter();\n          toast('Bluetooth connection disconnected');\n        }\n      });\n    },\n    /**\n     * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用\n     */\n    readBLECharacteristicValue: function readBLECharacteristicValue() {\n      var deviceId = this.equipment[0].deviceId;\n      var serviceId = this.serviceId;\n      var characteristicId = this.characteristicsId;\n      __f__(\"log\", '哈哈哈', \" at pages/index/index.vue:827\");\n      __f__(\"log\", deviceId, \" at pages/index/index.vue:828\");\n      __f__(\"log\", serviceId, \" at pages/index/index.vue:829\");\n      __f__(\"log\", characteristicId, \" at pages/index/index.vue:830\");\n      __f__(\"log\", '哈哈哈', \" at pages/index/index.vue:831\");\n      var _this = this;\n      this.connected = true;\n      uni.readBLECharacteristicValue({\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取\n        serviceId: serviceId,\n        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取\n        characteristicId: characteristicId,\n        success: function success(res) {\n          __f__(\"log\", '读取设备数据值成功', \" at pages/index/index.vue:842\");\n          __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:843\");\n          _this.notifyBLECharacteristicValueChange();\n          var platform = uni.getSystemInfoSync().platform;\n          if (platform == 'android') {\n            setTimeout(function () {\n              _this.writeBluetoothWithId('10');\n            }, 300);\n          } else {\n            _this.writeBluetoothWithId('10');\n          }\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '读取设备数据值失败，错误码：' + e.errCode, \" at pages/index/index.vue:858\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        }\n      });\n      // this.onBLECharacteristicValueChange();\n    },\n    /**\n     * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。\n     */\n    onBLECharacteristicValueChange: function onBLECharacteristicValueChange() {\n      var _this15 = this;\n      // 必须在这里的回调才能获取\n      uni.onBLECharacteristicValueChange(function (characteristic) {\n        __f__(\"log\", '监听低功耗蓝牙设备的特征值变化事件成功', \" at pages/index/index.vue:872\");\n        __f__(\"log\", JSON.stringify(characteristic), \" at pages/index/index.vue:873\");\n        _this15.valueChangeData = characteristic;\n      });\n    },\n    /**\n     * 订阅操作成功后需要设备主动更新特征值的 value，才会触发 uni.onBLECharacteristicValueChange 回调。\n     */\n    notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange() {\n      var deviceId = this.equipment[0].deviceId;\n      var serviceId = this.serviceId;\n      var characteristicId = this.characteristicsId;\n      var notify = this.notify;\n      __f__(\"log\", deviceId, \" at pages/index/index.vue:885\");\n      __f__(\"log\", serviceId, \" at pages/index/index.vue:886\");\n      __f__(\"log\", characteristicId, \" at pages/index/index.vue:887\");\n      __f__(\"log\", notify, \" at pages/index/index.vue:888\");\n      var _this = this;\n      uni.notifyBLECharacteristicValueChange({\n        state: true,\n        // 启用 notify 功能\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取\n        serviceId: serviceId,\n        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取\n        characteristicId: characteristicId,\n        success: function success(res) {\n          __f__(\"log\", 'notifyBLECharacteristicValueChange success:' + res.errMsg, \" at pages/index/index.vue:899\");\n          __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:900\");\n          uni.onBLECharacteristicValueChange(function (res) {\n            var receiveValue = _this.ab2hex(res.value); //2进制数据转为16进制字符串\n\n            __f__(\"log\", \"蓝牙返回数据为：\" + receiveValue, \" at pages/index/index.vue:904\");\n            _this.dealReturnData(receiveValue);\n          });\n        }\n      });\n    },\n    /**\n     * \t断开蓝牙模块\n     */\n    closeBluetoothAdapter: function closeBluetoothAdapter(OBJECT) {\n      var _this16 = this;\n      uni.closeBluetoothAdapter({\n        success: function success(res) {\n          __f__(\"log\", '断开蓝牙模块成功', \" at pages/index/index.vue:916\");\n          _this16.isStop = true;\n          _this16.$set(_this16.disabled, 0, false);\n          _this16.$set(_this16.disabled, 1, true);\n          _this16.$set(_this16.disabled, 2, true);\n          _this16.$set(_this16.disabled, 3, true);\n          _this16.$set(_this16.disabled, 4, true);\n          _this16.$set(_this16.disabled, 5, true);\n          _this16.$set(_this16.disabled, 6, true);\n          _this16.$set(_this16.disabled, 7, true);\n          _this16.$set(_this16.disabled, 8, true);\n          _this16.$set(_this16.disabled, 9, true);\n          _this16.$set(_this16.disabled, 10, true);\n          _this16.equipment = [];\n          _this16.servicesData = [];\n          _this16.characteristicsData = [];\n          _this16.valueChangeData = {};\n          _this16.adapterState = [];\n          _this16.searchLoad = false;\n          toast('Disconnect Bluetooth');\n        }\n      });\n    }\n  }\n};\n/**\n * 判断初始化蓝牙状态\n */\nexports.default = _default;\nfunction initTypes(code, errMsg) {\n  switch (code) {\n    case 10000:\n      toast('Uninitialized Bluetooth adapter');\n      break;\n    case 10001:\n      toast('Bluetooth not detected, please turn on Bluetooth and try again!');\n      break;\n    case 10002:\n      toast('No specified device found');\n      break;\n    case 10003:\n      toast('Connect failed');\n      break;\n    case 10004:\n      toast('No specified service found');\n      break;\n    case 10005:\n      toast('No specified feature found');\n      break;\n    case 10006:\n      toast('Connection has been disconnected');\n      break;\n    case 10007:\n      toast('The current feature does not support this operation');\n      break;\n    case 10008:\n      toast('All exceptions reported by other systems');\n      break;\n    case 10009:\n      toast('Unique to Android system, system version below 4.3 does not support BLE');\n      break;\n    default:\n      break;\n    // toast(errMsg);\n  }\n}\n\n/**\n * 弹出框封装\n */\nfunction toast(content) {\n  var showCancel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  uni.showModal({\n    title: 'Prompt',\n    confirmText: 'Confirm',\n    content: content,\n    showCancel: showCancel\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJzbGlkZVZhbHVlIiwiaXNTaG93VmlkZW8iLCJpc1Nob3dTbGlkZXIiLCJ0aW1lciIsImlzQ29tcHV0ZU9sZFR5cGUiLCJ0aXRsZSIsImRpc2FibGVkIiwibmV3RGV2aWNlTG9hZCIsInNlYXJjaExvYWQiLCJtYXNrU2hvdyIsImVxdWlwbWVudCIsImFkYXB0ZXJTdGF0ZSIsImRpc2NvdmVyaW5nIiwiYXZhaWxhYmxlIiwiY29ubmVjdGVkIiwidmljdHJveUNvbm5lY3RlZCIsInNlcnZpY2VzRGF0YSIsImNoYXJhY3RlcmlzdGljc0RhdGEiLCJ2YWx1ZUNoYW5nZURhdGEiLCJpc1N0b3AiLCJsaXN0Iiwic2VydmljZUlkIiwiY2hhcmFjdGVyaXN0aWNzSWQiLCJub3RpZnkiLCJpc09wZW5CdG5MaWdodCIsImlzTGlnaHRCdG5MaWdodCIsImlzV2luZDFCdG5MaWdodCIsImlzV2luZDJCdG5MaWdodCIsImlzV2luZDNCdG5MaWdodCIsImlzV2luZDRCdG5MaWdodCIsIm9uTG9hZCIsIm9wZW5CbHVldG9vdGhBZGFwdGVyIiwicGx1cyIsIm5hdmlnYXRvciIsImNsb3NlU3BsYXNoc2NyZWVuIiwic2V0VGltZW91dCIsInBsYXRmb3JtIiwidW5pIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJzZXRJbnRlcnZhbCIsIl90aGlzIiwid3JpdGVCbHVldG9vdGhXaXRoSWQiLCJvblVubG9hZCIsImNsb3NlQkxFQ29ubmVjdGlvbiIsInN0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5IiwiY2xvc2VCbHVldG9vdGhBZGFwdGVyIiwiYmVmb3JlRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJtZXRob2RzIiwiY2hhbmdpbmciLCJ2YWwiLCJkZXZpY2VJZCIsImNoYXJhY3RlcmlzdGljSWQiLCJudW0iLCJzdW0iLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsImRhdGFWaWV3IiwiRGF0YVZpZXciLCJzZXRVaW50OCIsIndyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSIsInZhbHVlIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJtb3ZlSGFuZGxlIiwibWFza2Nsb3NlIiwiY29ubmVjdEJ0bkFjdGlvbiIsInN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSIsInNldFN0b3JhZ2VTeW5jIiwiZGVhbFJldHVybkRhdGEiLCJyZXR1cm5EYXRhIiwic3RhdHVzU3RyIiwic3Vic3RyIiwibGlnaHRQcm9TdHIiLCJ0eXBlU3RyIiwic3RhdHVzU3RyVHdvIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwic3RhdHVzVGltZXIiLCJzdGF0dXNXaW5kIiwic3RhdHVzTGlnaHQiLCJvdmVyT3BlbkJ0bkJpbmciLCJzdGFydE9wZW5CdG5CaW5nIiwibGlnaHRQcm9UZW4iLCJ0ZW1wVmFsdWUiLCJxdWVyeURldmljZXMiLCJzaG93TWFza1R5cGUiLCJ0YXBRdWVyeSIsIml0ZW0iLCIkc2V0IiwibGVuZ3RoIiwicHVzaCIsImNyZWF0ZUJMRUNvbm5lY3Rpb24iLCJpZCIsImFiMmhleCIsImhleEFyciIsIkFycmF5IiwicHJvdG90eXBlIiwibWFwIiwiY2FsbCIsIlVpbnQ4QXJyYXkiLCJiaXQiLCJzbGljZSIsImpvaW4iLCJlIiwiZXJyTXNnIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQmx1ZXRvb3RoQWRhcHRlckluaXRpYWxpc2VkIiwiZXJyQ29kZSIsImluaXRUeXBlcyIsImdldEJsdWV0b290aEFkYXB0ZXJTdGF0ZSIsInNlcnZpY2VzIiwiYWxsb3dEdXBsaWNhdGVzS2V5Iiwib25CbHVldG9vdGhEZXZpY2VGb3VuZCIsInR5cGVzIiwiZGV2aWNlcyIsImdldEJsdWV0b290aERldmljZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJuYW1lIiwibG9jYWxOYW1lIiwiZ2V0U3RvcmFnZVN5bmMiLCJvbkJMRUNvbm5lY3Rpb25TdGF0ZUNoYW5nZSIsImhpZGVUb2FzdCIsInRvYXN0IiwiZ2V0QkxFRGV2aWNlU2VydmljZXMiLCJ1dWlkIiwiZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzIiwiY2hhcmFjdGVyaXN0aWNzIiwicHJvcGVydGllcyIsInJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlIiwibm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSIsIm9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSIsImNoYXJhY3RlcmlzdGljIiwic3RhdGUiLCJyZWNlaXZlVmFsdWUiLCJPQkpFQ1QiLCJjb2RlIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJzaG93TW9kYWwiLCJjb25maXJtVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUVlO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLFVBQVUsRUFBQyxHQUFHO01BQ2RDLFdBQVcsRUFBQyxJQUFJO01BQ2hCQyxZQUFZLEVBQUMsS0FBSztNQUNsQkMsS0FBSyxFQUFDLEVBQUU7TUFDUkMsZ0JBQWdCLEVBQUMsS0FBSztNQUN0QkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMs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QUMsQ0FBQztNQUUzQixJQUFNekMsTUFBTSxHQUFHLElBQUlDLFdBQVcsQ0FBQ3FDLE1BQU0sQ0FBQztNQUN0QyxJQUFNcEMsUUFBUSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDO01BQ3JDRSxRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO01BQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO01BQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO01BQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO01BQ3pCLElBQUlxQyxFQUFFLElBQUUsSUFBSSxFQUFFO1FBRWJ2QyxRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO01BQzFCLENBQUMsTUFBSztRQUNMRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUlxQyxFQUFFLElBQUUsR0FBRyxFQUFFO1VBRVp2QyxRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1VBQ3pCRixRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUMsTUFDSSxJQUFHcUMsRUFBRSxJQUFFLEdBQUcsRUFBQztVQUNmdkMsUUFBUSxDQUFDRSxRQUFRLENBQUMsQ0FBQyxFQUFDLElBQUks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QUFTLENBQUM7SUFDYjNJLEtBQUssRUFBRSxRQUFRO0lBQ2Y0SSxXQUFXLEVBQUMsU0FBUztJQUNyQkgsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLFVBQVUsRUFBVkE7RUFDRCxDQUFDLENBQUM7QUFDSCxDIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzbGlkZVZhbHVlOjEwMCxcblx0XHRcdGlzU2hvd1ZpZGVvOnRydWUsXG5cdFx0XHRpc1Nob3dTbGlkZXI6ZmFsc2UsXG5cdFx0XHR0aW1lcjonJyxcblx0XHRcdGlzQ29tcHV0ZU9sZFR5cGU6ZmFsc2UsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0XHRkaXNhYmxlZDogW2ZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcblx0XHRcdG5ld0RldmljZUxvYWQ6IGZhbHNlLFxuXHRcdFx0c2VhcmNoTG9hZDogZmFsc2UsXG5cdFx0XHRtYXNrU2hvdzogZmFsc2UsXG5cdFx0XHRlcXVpcG1lbnQ6IFtdLFxuXHRcdFx0YWRhcHRlclN0YXRlOiB7XG5cdFx0XHRcdGRpc2NvdmVyaW5nOiBmYWxzZSxcblx0XHRcdFx0YXZhaWxhYmxlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGNvbm5lY3RlZDogZmFsc2UsXG5cdFx0XHR2aWN0cm95Q29ubmVjdGVkOiBmYWxzZSxcblx0XHRcdHNlcnZpY2VzRGF0YTogW10sXG5cdFx0XHRjaGFyYWN0ZXJpc3RpY3NEYXRhOiBbXSxcblx0XHRcdHZhbHVlQ2hhbmdlRGF0YToge30sXG5cdFx0XHRpc1N0b3A6dHJ1ZSAsXG5cdFx0XHRsaXN0OiBbXSxcblx0XHRcdHNlcnZpY2VJZDonJyxcblx0XHRcdGNoYXJhY3RlcmlzdGljc0lkOicnLFxuXHRcdFx0bm90aWZ5OmZhbHNlLFxuXHRcdFx0aXNPcGVuQnRuTGlnaHQ6ZmFsc2UsXG5cdFx0XHRpc0xpZ2h0QnRuTGlnaHQ6ZmFsc2UsXG5cdFx0XHRpc1dpbmQxQnRuTGlnaHQ6ZmFsc2UsXG5cdFx0XHRpc1dpbmQyQnRuTGlnaHQ6ZmFsc2UsXG5cdFx0XHRpc1dpbmQzQnRuTGlnaHQ6ZmFsc2UsXG5cdFx0XHRpc1dpbmQ0QnRuTGlnaHQ6ZmFsc2Vcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRcblx0XHQvLyB0aGlzLm9uQkxFQ29ubmVjdGlvblN0YXRlQ2hhbmdlKCk7XG5cdFx0dGhpcy5vcGVuQmx1ZXRvb3RoQWRhcHRlcigpO1xuXHRcdC8vIHRvYXN0KCdVbmluaXRpYWxpemVkIEJsdWV0b290aCBhZGFwdGVyJyk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coJzExMTExMScpO1xuXHRcdHRoaXMuaXNTaG93VmlkZW8gPSB0cnVlO1xuXHRcdHBsdXMubmF2aWdhdG9yLmNsb3NlU3BsYXNoc2NyZWVuKCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnNzc3NzcnKTtcblx0XHQgICAgdGhpcy5pc1Nob3dWaWRlbyA9IGZhbHNlO1xuXHRcdFx0Ly8gdW5pLnNldFN0b3JhZ2VTeW5jKCdDdXJyZW50Q29ubmVjdERldmljZScsICcnKTtcblx0XHRcdC8vIGxldCBjdXJyZW50Q29ubmVjdERldmljZSA9IHVuaS5nZXRTdG9yYWdlU3luYygnQ3VycmVudENvbm5lY3REZXZpY2UnKTtcblx0XHRcdC8vIGlmKGN1cnJlbnRDb25uZWN0RGV2aWNlLmxlbmd0aD4yKXtcblx0XHRcdC8vIFx0dGhpcy5zdGFydEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkoKTtcblx0XHRcdC8vIFx0dGhpcy5tYXNrU2hvdyA9IHRydWU7XG5cdFx0XHQvLyB9XG5cdFx0fSwgMjAwMClcblx0XHRcblx0XHQgLy8gdGhpcy5pc1Nob3dWaWRlbyA9IGZhbHNlO1xuXHRcdCAvLyBsZXQgY3VycmVudENvbm5lY3REZXZpY2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ0N1cnJlbnRDb25uZWN0RGV2aWNlJyk7XG5cblx0XHQgLy8gaWYoY3VycmVudENvbm5lY3REZXZpY2UubGVuZ3RoPjIpe1xuXHRcdCAvLyBcdHRoaXMuc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KCk7XG5cdFx0IC8vIFx0dGhpcy5tYXNrU2hvdyA9IHRydWU7XG5cdFx0IC8vIH1cblx0XHQgXG5cdFx0XG5cdFx0XG5cdFx0Ly8gc2V0SW50ZXJ2YWwoKCk9Pntcblx0XHQvLyBcdGlmKHRoaXMudmljdHJveUNvbm5lY3RlZCl7XG5cdFx0Ly8gXHRcdF90aGlzLndyaXRlQmx1ZXRvb3RoV2l0aElkKCcxMCcpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0sMTAwMCk7XG5cdFx0bGV0IHBsYXRmb3JtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm07XG5cdFx0aWYocGxhdGZvcm09PSdhbmRyb2lkJyl7XG5cdFx0XHRcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHNldEludGVydmFsKCgpPT57XG5cdFx0XHRcdGlmKHRoaXMudmljdHJveUNvbm5lY3RlZCl7XG5cdFx0XHRcdFx0X3RoaXMud3JpdGVCbHVldG9vdGhXaXRoSWQoJzEwJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sMTAwMCk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdFxuXHRcdC8vIHRoaXMuc2xpZGVWYWx1ZSA9IDMwXG5cdFx0Ly8gc2V0SW50ZXJ2YWwoKCk9Pntcblx0XHQvLyBcdHRoaXMuaXNTaG93U2xpZGVyPXRydWVcblx0XHQvLyBcdHRoaXMuc2xpZGVWYWx1ZSA9ICh0aGlzLnNsaWRlVmFsdWU9PTEwMCk/MDoodGhpcy5zbGlkZVZhbHVlKzEwKVxuXHRcdC8vIFx0Y29uc29sZS5sb2codGhpcy5zbGlkZVZhbHVlKVxuXHRcdC8vIFx0dGhpcy5pc1Nob3dTbGlkZXI9ZmFsc2Vcblx0XHRcdFxuXHRcdC8vIH0sMjAwMCk7XG5cdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gICAgIC8vIHRoaXMuc2xpZGVWYWx1ZSA9IDUwXG5cdFx0Ly8gfSwgMzAwMClcblx0fSxcblx0XG5cdG9uVW5sb2FkKCkge1xuXHRcdGlmKHRoaXMuY29ubmVjdGVkKSB7XG5cdFx0XHR0aGlzLmNsb3NlQkxFQ29ubmVjdGlvbigpO1xuXHRcdH1cblx0XHR0aGlzLnN0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KHRydWUpO1xuXHRcdHRoaXMuY2xvc2VCbHVldG9vdGhBZGFwdGVyKClcblx0fSxcblx0XG5cdGJlZm9yZURlc3Ryb3koKSB7XG5cdCAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHQgIH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjaGFuZ2luZyh2YWwpe1xuXHRcdFx0aWYoIXRoaXMuY29ubmVjdGVkKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XG5cdFx0XHRsZXQgc2VydmljZUlkID0gdGhpcy5zZXJ2aWNlSWQ7XG5cdFx0XHRsZXQgY2hhcmFjdGVyaXN0aWNJZCA9IHRoaXMuY2hhcmFjdGVyaXN0aWNzSWQ7XG5cdFx0XHRcblx0XHRcdHZhciBudW0gPSAyMjQqKDEwMC12YWwpLzEwMDtcblx0XHRcdHZhciBzdW0gPSBudW0rNjQ7XG5cdFx0XHRpZihzdW0+MjU1KXtcblx0XHRcdFx0c3VtID0gc3VtLTI1Njtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDkpO1xuXHRcdFx0Y29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcblx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDAsMHhBQSk7XG5cdFx0XHRkYXRhVmlldy5zZXRVaW50OCgxLDB4QUEpO1xuXHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoMiwweEFBKTtcblx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDMsMHhBQSk7XG5cdFx0XHRkYXRhVmlldy5zZXRVaW50OCg0LDB4MDIpO1xuXHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoNSwweEZEKTtcblx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDYsMHg0MCk7XG5cdFx0XHRkYXRhVmlldy5zZXRVaW50OCg3LDB4RkYmbnVtKTtcblx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDgsMHhGRiZzdW0pO1xuXHRcdFx0XG5cdFx0XHR1bmkud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcblx0XHRcdCAgZGV2aWNlSWQ6IGRldmljZUlkLCAvLyDorr7lpIdJRO+8jOWcqOOAkDTjgJHph4zojrflj5bliLBcblx0XHRcdCAgc2VydmljZUlkOiBzZXJ2aWNlSWQsIC8vIOacjeWKoVVVSUTvvIzlnKjjgJA244CR6YeM6IO96I635Y+W5YiwXG5cdFx0XHQgIGNoYXJhY3RlcmlzdGljSWQ6IGNoYXJhY3RlcmlzdGljSWQsIC8vIOeJueW+geWAvO+8jOWcqOOAkDfjgJHph4zog73ojrflj5bliLBcblx0XHRcdCAgdmFsdWU6IGJ1ZmZlcixcblx0XHRcdCAgc3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0ICB9LFxuXHRcdFx0ICBmYWlsKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcblx0XHRcdCAgfVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdG1vdmVIYW5kbGUoKSB7fSxcblx0XHQvKipcblx0XHQgKiDlhbPpl63pga7nvalcblx0XHQgKi9cblx0XHRtYXNrY2xvc2UoKXtcblx0XHRcdHRoaXMubWFza1Nob3cgPSBmYWxzZTtcblx0XHR9LFxuXHRcdGNvbm5lY3RCdG5BY3Rpb24oKXtcblx0XHRcdGlmKHRoaXMuY29ubmVjdGVkKXtcblx0XHRcdFx0dGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy52aWN0cm95Q29ubmVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2xvc2VCTEVDb25uZWN0aW9uKCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHR0aGlzLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSgpO1xuXHRcdFx0XHR0aGlzLm1hc2tTaG93ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnQ3VycmVudENvbm5lY3REZXZpY2UnLCAnJyk7XG5cdFx0fSxcblx0XHRkZWFsUmV0dXJuRGF0YShyZXR1cm5EYXRhKXtcblx0XHRcdFxuXHRcdFx0bGV0IHN0YXR1c1N0ciA9IHJldHVybkRhdGEuc3Vic3RyKDE0LDIpXG5cdFx0XHRsZXQgbGlnaHRQcm9TdHIgPSByZXR1cm5EYXRhLnN1YnN0cigxNiwyKVxuXHRcdFx0bGV0IHR5cGVTdHIgPSByZXR1cm5EYXRhLnN1YnN0cigxOCwyKVxuXHRcdFx0XG5cdFx0XHRjb25zb2xlLmxvZyhzdGF0dXNTdHIpXG5cdFx0XHRjb25zb2xlLmxvZyhsaWdodFByb1N0cilcblx0XHRcdGNvbnNvbGUubG9nKHR5cGVTdHIpXG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0aWYgKHR5cGVTdHI9PScwMScpIHtcblx0XHRcdFx0dGhpcy5pc0NvbXB1dGVPbGRUeXBlID0gdHJ1ZVxuXHRcdFx0fSBlbHNle1xuXHRcdFx0XHR0aGlzLmlzQ29tcHV0ZU9sZFR5cGUgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdFx0aWYodHlwZVN0cj09JzAzJyl7XG5cdFx0XHRcdHRoaXMuaXNTaG93U2xpZGVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2V7XG5cdFx0XHRcdHRoaXMuaXNTaG93U2xpZGVyID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZigodHlwZVN0ciE9JzAxJykmJih0eXBlU3RyIT0nMDInKSYmKHR5cGVTdHIhPScwMycpKXtcblx0XHRcdFx0dGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy52aWN0cm95Q29ubmVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2xvc2VCTEVDb25uZWN0aW9uKCk7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0dGhpcy52aWN0cm95Q29ubmVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdDdXJyZW50Q29ubmVjdERldmljZScsIHRoaXMuZXF1aXBtZW50WzBdLmRldmljZUlkKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHR2YXIgc3RhdHVzU3RyVHdvID0gcGFyc2VJbnQoc3RhdHVzU3RyLDE2KS50b1N0cmluZygyKVxuXHRcdFx0c3RhdHVzU3RyVHdvID0gc3RhdHVzU3RyVHdvLnBhZFN0YXJ0KDgsJzAnKVxuXHRcdFx0Y29uc29sZS5sb2coc3RhdHVzU3RyVHdvKVxuXHRcdFx0dmFyIHN0YXR1c1RpbWVyID0gc3RhdHVzU3RyVHdvLnN1YnN0cigwLDIpXG5cdFx0XHR2YXIgc3RhdHVzV2luZCA9IHN0YXR1c1N0clR3by5zdWJzdHIoMiw0KVxuXHRcdFx0dmFyIHN0YXR1c0xpZ2h0ID0gc3RhdHVzU3RyVHdvLnN1YnN0cig2LDIpXG5cdFx0XHRcblx0XHRcdHRoaXMub3Zlck9wZW5CdG5CaW5nKCk7XG5cdFx0XHRjb25zb2xlLmxvZygnc3RhdHVzVGltZXInKTtcblx0XHRcdGNvbnNvbGUubG9nKHN0YXR1c1RpbWVyKTtcblx0XHRcdFxuXHRcdFx0aWYoc3RhdHVzVGltZXI9PScxMCcpe1xuXHRcdFx0XHR0aGlzLmlzT3BlbkJ0bkxpZ2h0ID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihzdGF0dXNUaW1lcj09JzExJyl7XG5cdFx0XHRcdHRoaXMuaXNPcGVuQnRuTGlnaHQgPSB0cnVlXG5cdFx0XHRcdHRoaXMuc3RhcnRPcGVuQnRuQmluZygpXG5cdFx0XHR9XG5cdFx0XHRlbHNle1xuXHRcdFx0XHR0aGlzLmlzT3BlbkJ0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKChzdGF0dXNXaW5kID09JzAwMDAnKXx8IXRoaXMuaXNPcGVuQnRuTGlnaHQpIHtcblx0XHRcdFx0dGhpcy5pc1dpbmQxQnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmlzV2luZDJCdG5MaWdodCA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuaXNXaW5kM0J0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQ0QnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmlzT3BlbkJ0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdH0gZWxzZSBpZiAoc3RhdHVzV2luZCA9PScwMDAwJykge1xuXHRcdFx0XHR0aGlzLmlzV2luZDFCdG5MaWdodCA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuaXNXaW5kMkJ0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQzQnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmlzV2luZDRCdG5MaWdodCA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuaXNPcGVuQnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0fSBlbHNlIGlmIChzdGF0dXNXaW5kID09JzAwMDEnKSB7XG5cdFx0XHRcdHRoaXMuaXNXaW5kMUJ0bkxpZ2h0ID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLmlzV2luZDJCdG5MaWdodCA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuaXNXaW5kM0J0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQ0QnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0fSBlbHNlIGlmIChzdGF0dXNXaW5kID09JzAwMTAnKSB7XG5cdFx0XHRcdHRoaXMuaXNXaW5kMUJ0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQyQnRuTGlnaHQgPSB0cnVlXG5cdFx0XHRcdHRoaXMuaXNXaW5kM0J0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQ0QnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0fSBlbHNlIGlmIChzdGF0dXNXaW5kID09JzAxMDAnKSB7XG5cdFx0XHRcdHRoaXMuaXNXaW5kMUJ0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQyQnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmlzV2luZDNCdG5MaWdodCA9IHRydWVcblx0XHRcdFx0dGhpcy5pc1dpbmQ0QnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0fSBlbHNlIGlmIChzdGF0dXNXaW5kID09JzEwMDAnKSB7XG5cdFx0XHRcdHRoaXMuaXNXaW5kMUJ0bkxpZ2h0ID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5pc1dpbmQyQnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLmlzV2luZDNCdG5MaWdodCA9IGZhbHNlXG5cdFx0XHRcdHRoaXMuaXNXaW5kNEJ0bkxpZ2h0ID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGlmKHN0YXR1c0xpZ2h0PT0nMDAnKXtcblx0XHRcdFx0dGhpcy5pc0xpZ2h0QnRuTGlnaHQgPSBmYWxzZVxuXHRcdFx0XHR0aGlzLnNsaWRlVmFsdWUgPSAxMDBcblx0XHRcdFx0Ly8gdGhpcy5pc1Nob3dTbGlkZXIgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihzdGF0dXNMaWdodD09JzAxJyl7XG5cdFx0XHRcdHRoaXMuaXNMaWdodEJ0bkxpZ2h0ID0gdHJ1ZVxuXHRcdFx0XHR2YXIgbGlnaHRQcm9UZW4gPSBwYXJzZUludChsaWdodFByb1N0ciwxNikudG9TdHJpbmcoMTApXG5cdFx0XHRcdHZhciB0ZW1wVmFsdWUgPSAxMDAtbGlnaHRQcm9UZW4qMTAwLzIyNFxuXHRcdFx0XHR0aGlzLnNsaWRlVmFsdWUgPSBwYXJzZUludCh0ZW1wVmFsdWUpXG5cdFx0XHRcdC8vIHRoaXMuaXNTaG93U2xpZGVyID0gdHJ1ZVxuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXR1c0xpZ2h0Jyk7XG5cdFx0XHRjb25zb2xlLmxvZyhzdGF0dXNMaWdodCk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnNsaWRlVmFsdWUpO1xuXG5cdFx0fSxcblx0XHRcblx0XHRzdGFydE9wZW5CdG5CaW5nKCl7XG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9Pntcblx0XHRcdFx0aWYodGhpcy5pc09wZW5CdG5MaWdodCl7XG5cdFx0XHRcdFx0dGhpcy5pc09wZW5CdG5MaWdodCA9IGZhbHNlO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHQgIHRoaXMuaXNPcGVuQnRuTGlnaHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LDUwMCk7XG5cdFx0fSxcblx0XHRvdmVyT3BlbkJ0bkJpbmcoKXtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDpgInmi6norr7lpIdcblx0XHQgKi9cblx0XHRxdWVyeURldmljZXMoKSB7XG5cdFx0XHQvLyB0aGlzLm5ld0RldmljZUxvYWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5zaG93TWFza1R5cGUgPSAnZGV2aWNlJztcblx0XHRcdHRoaXMubWFza1Nob3cgPSB0cnVlO1xuXHRcdH0sXG5cdFx0dGFwUXVlcnkoaXRlbSkge1xuXHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDQsIGZhbHNlKTtcblx0XHRcdGlmICh0aGlzLmVxdWlwbWVudC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuZXF1aXBtZW50WzBdID0gaXRlbTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXF1aXBtZW50LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5ld0RldmljZUxvYWQgPSBmYWxzZTtcblx0XHRcdFxuXHRcdFx0dGhpcy5tYXNrU2hvdyA9IGZhbHNlO1xuXHRcdFx0dGhpcy5jcmVhdGVCTEVDb25uZWN0aW9uKCk7XG5cdFx0XHQvLyB0aGlzLmdldEJMRURldmljZVNlcnZpY2VzKCk7XG5cdFx0fSxcblx0XHRcblx0XHRcblx0XHR3cml0ZUJsdWV0b290aFdpdGhJZChpZCl7XG5cdFx0XHRcblx0XHRcdGxldCBkZXZpY2VJZCA9IHRoaXMuZXF1aXBtZW50WzBdLmRldmljZUlkO1xuXHRcdFx0bGV0IHNlcnZpY2VJZCA9IHRoaXMuc2VydmljZUlkO1xuXHRcdFx0bGV0IGNoYXJhY3RlcmlzdGljSWQgPSB0aGlzLmNoYXJhY3RlcmlzdGljc0lkO1xuXHRcdFx0XG5cdFx0XHR2YXIgbGVuZ3RoID0gKGlkPT0nMTAnKT84Ojlcblx0XHRcdFxuXHRcdFx0Y29uc3QgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aClcblx0XHRcdGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcilcblx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDAsMHhBQSk7XG5cdFx0XHRkYXRhVmlldy5zZXRVaW50OCgxLDB4QUEpO1xuXHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoMiwweEFBKTtcblx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDMsMHhBQSk7XG5cdFx0XHRpZiAoaWQ9PScxMCcpIHtcblx0XHRcdFx0XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDQsMHgwMSk7XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDUsMHhGRSk7XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDYsMHgxMCk7XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDcsMHgxMCk7XG5cdFx0XHR9IGVsc2V7XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDQsMHgwMik7XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDUsMHhGRCk7XG5cdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDYsMHgyMCk7XG5cdFx0XHRcdGlmIChpZD09JzEnKSB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoNywweDAxKTtcblx0XHRcdFx0XHRkYXRhVmlldy5zZXRVaW50OCg4LDB4MjEpO1xuXHRcdFx0XHR9IFxuXHRcdFx0XHRlbHNlIGlmKGlkPT0nMicpe1xuXHRcdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDcsMHgwNik7XG5cdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoOCwweDI2KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKGlkPT0nMycpe1xuXHRcdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDcsMHgwNSk7XG5cdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoOCwweDI1KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKGlkPT0nNCcpe1xuXHRcdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDcsMHgwNCk7XG5cdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoOCwweDI0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKGlkPT0nNScpe1xuXHRcdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDcsMHgwMyk7XG5cdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoOCwweDIzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKGlkPT0nNicpe1xuXHRcdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDcsMHgwMik7XG5cdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoOCwweDIyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dW5pLndyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSh7XG5cdFx0XHQgIGRldmljZUlkOiBkZXZpY2VJZCwgLy8g6K6+5aSHSUTvvIzlnKjjgJA044CR6YeM6I635Y+W5YiwXG5cdFx0XHQgIHNlcnZpY2VJZDogc2VydmljZUlkLCAvLyDmnI3liqFVVUlE77yM5Zyo44CQNuOAkemHjOiDveiOt+WPluWIsFxuXHRcdFx0ICBjaGFyYWN0ZXJpc3RpY0lkOiBjaGFyYWN0ZXJpc3RpY0lkLCAvLyDnibnlvoHlgLzvvIzlnKjjgJA344CR6YeM6IO96I635Y+W5YiwXG5cdFx0XHQgIHZhbHVlOiBidWZmZXIsXG5cdFx0XHQgIHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdCAgfSxcblx0XHRcdCAgZmFpbChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXG5cdFx0XHQgIH1cblx0XHRcdH0pXG5cdFx0XHRcblx0XHR9LFxuXHRcdGFiMmhleChidWZmZXIpIHtcblx0XHQgIGNvbnN0IGhleEFyciA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcblx0XHQgICAgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSxcblx0XHQgICAgZnVuY3Rpb24gKGJpdCkge1xuXHRcdCAgICAgIHJldHVybiAoJzAwJyArIGJpdC50b1N0cmluZygxNikpLnNsaWNlKC0yKVxuXHRcdCAgICB9XG5cdFx0ICApXG5cdFx0ICByZXR1cm4gaGV4QXJyLmpvaW4oJycpXG5cdFx0fSxcblx0XHRcblx0XHQvKipcblx0XHQgKiDliJ3lp4vljJbok53niZnorr7lpIdcblx0XHQgKi9cblx0XHRvcGVuQmx1ZXRvb3RoQWRhcHRlcigpIHtcblx0XHRcdHVuaS5vcGVuQmx1ZXRvb3RoQWRhcHRlcih7XG5cdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdCbHVldG9vdGggaW5pdCBzdWNjZXNzOicgKyBlLmVyck1zZyk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xuXHRcdFx0XHRcdHRoaXMuaXNTdG9wID0gZmFsc2UgO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAwLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMSwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAxMCwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMub25CbHVldG9vdGhBZGFwdGVySW5pdGlhbGlzZWQoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFpbDogZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQmx1ZXRvb3RoIGluaXQgZmFpbGVkIHdpdGggZXJyb3IgY29kZTonICsgKGUuZXJyQ29kZSB8fCBlLmVyck1zZykpO1xuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUsZS5lcnJNc2cpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRcblx0XHRvbkJsdWV0b290aEFkYXB0ZXJJbml0aWFsaXNlZCgpIHtcblx0XHRcdHRoaXMuZ2V0Qmx1ZXRvb3RoQWRhcHRlclN0YXRlKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDlvIDlp4vmkJzntKLok53niZnorr7lpIdcblx0XHQgKi9cblx0XHRzdGFydEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkoKSB7XG5cdFx0XHR1bmkuc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KHtcblx0XHRcdFx0c2VydmljZXM6IFsnRkZFMCddLFxuXHRcdFx0XHRhbGxvd0R1cGxpY2F0ZXNLZXk6IGZhbHNlLFxuXHRcdFx0XHRzdWNjZXNzOiBlID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3RhcnQgc2VhcmNoaW5nIGZvciBCbHVldG9vdGggZGV2aWNlczonICsgZS5lcnJNc2cpO1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoTG9hZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDEsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAyLCBmYWxzZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDMsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFpbDogZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aQnOe0ouiTneeJmeiuvuWkh+Wksei0pe+8jOmUmeivr+eggTonICsgZS5lcnJDb2RlKTtcblx0XHRcdFx0XHRpZiAoZS5lcnJDb2RlICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog5YGc5q2i5pCc57Si6JOd54mZ6K6+5aSHXG5cdFx0ICovXG5cdFx0c3RvcEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkodHlwZXMpIHtcblx0XHRcdHVuaS5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG5cdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCflgZzmraLmkJzntKLok53niZnorr7lpIc6JyArIGUuZXJyTXNnKTtcblx0XHRcdFx0XHRpZiAodHlwZXMpIHtcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAxLCB0cnVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDEsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDIsIHRydWUpO1xuXHRcdFx0XHRcdC8vIHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAzLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaExvYWQgPSBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFpbDogZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WBnOatouaQnOe0ouiTneeJmeiuvuWkh+Wksei0pe+8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDlj5HnjrDlpJblm7Torr7lpIdcblx0XHQgKi9cblx0XHRvbkJsdWV0b290aERldmljZUZvdW5kKCkge1xuXHRcdFx0dW5pLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoZGV2aWNlcyA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCflvIDlp4vnm5HlkKzlr7vmib7liLDmlrDorr7lpIfnmoTkuovku7YnKTtcblx0XHRcdFx0Ly8gdGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDMsIGZhbHNlKTtcblx0XHRcdFx0Y29uc29sZS5sb2coYERldmljZXMgRm91bmQ6ICR7ZGV2aWNlcy5sZW5ndGh9YCk7XG5cdFx0XHRcdHRoaXMuc3RvcEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkodHJ1ZSk7XG5cdFx0XHRcdHRoaXMuZ2V0Qmx1ZXRvb3RoRGV2aWNlcygpO1x0XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIOiOt+WPluWcqOiTneeJmeaooeWdl+eUn+aViOacn+mXtOaJgOacieW3suWPkeeOsOeahOiTneeJmeiuvuWkh+OAguWMheaLrOW3sue7j+WSjOacrOacuuWkhOS6jui/nuaOpeeKtuaAgeeahOiuvuWkh+OAglxuXHRcdCAqL1xuXHRcdGdldEJsdWV0b290aERldmljZXMoKSB7XG5cdFx0XHR1bmkuZ2V0Qmx1ZXRvb3RoRGV2aWNlcyh7XG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5uZXdEZXZpY2VMb2FkID0gZmFsc2U7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluiTneeJmeiuvuWkh+aIkOWKnzonICsgcmVzLmVyck1zZyk7XG5cdFx0XHRcdFx0IC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpXG5cdFx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdFx0XHRfdGhpcy5saXN0ID0gW107XG5cdFx0XHRcdFx0cmVzLmRldmljZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pOyAvL+i+k+WHuuaVsOe7hOeahOavj+S4gOS4quWFg+e0oFxuXHRcdFx0XHRcdFx0aWYoaXRlbS5uYW1lIHx8IGl0ZW0ubG9jYWxOYW1lKXtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdF90aGlzLmxpc3QucHVzaChpdGVtKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZihpdGVtLmRldmljZUlkID09IHVuaS5nZXRTdG9yYWdlU3luYygnQ3VycmVudENvbm5lY3REZXZpY2UnKSl7XG5cblx0XHRcdFx0XHRcdFx0X3RoaXMudGFwUXVlcnkoaXRlbSk7XG5cdFx0XHRcdFx0XHRcdC8vIGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIHRoaXMubGlzdCA9IHJlcy5kZXZpY2VzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiBlID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W6JOd54mZ6K6+5aSH6ZSZ6K+v77yM6ZSZ6K+v56CB77yaJyArIGUuZXJyQ29kZSk7XG5cdFx0XHRcdFx0aWYgKGUuZXJyQ29kZSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIOiOt+WPluacrOacuuiTneeJmemAgumFjeWZqOeKtuaAgVxuXHRcdCAqL1xuXHRcdGdldEJsdWV0b290aEFkYXB0ZXJTdGF0ZSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCctLS0+Jyk7XG5cdFx0XHR1bmkuZ2V0Qmx1ZXRvb3RoQWRhcHRlclN0YXRlKHtcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFx0XHR0aGlzLmFkYXB0ZXJTdGF0ZSA9IHJlcztcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFpbDogZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluacrOacuuiTneeJmemAgumFjeWZqOeKtuaAgeWksei0pe+8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDov57mjqXkvY7lip/ogJfok53niZlcblx0XHQgKi9cblx0XHRjcmVhdGVCTEVDb25uZWN0aW9uKCkge1xuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHQvLyBcdHRpdGxlOiAnQmx1ZXRvb3RoIENvbm5lY3RpbmcuLi4nLFxuXHRcdFx0Ly8gXHRpY29uOiAnbG9hZGluZycsXG5cdFx0XHQvLyBcdGR1cmF0aW9uOiA5OTk5OVxuXHRcdFx0Ly8gfSk7XG5cdFx0XHR1bmkuY3JlYXRlQkxFQ29ubmVjdGlvbih7XG5cdFx0XHRcdC8vIOi/memHjOeahCBkZXZpY2VJZCDpnIDopoHlt7Lnu4/pgJrov4cgY3JlYXRlQkxFQ29ubmVjdGlvbiDkuI7lr7nlupTorr7lpIflu7rnq4vpk77mjqVcblx0XHRcdFx0ZGV2aWNlSWQsXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6L+e5o6l6JOd54mZ5oiQ5YqfOicgKyByZXMuZXJyTXNnKTtcblx0XHRcdFx0XHQvLyDov57mjqXorr7lpIflkI7mlq3lvIDmkJzntKIg5bm25LiU5LiN6IO95pCc57Si6K6+5aSHXG5cdFx0XHRcdFx0Ly8gdGhpcy5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh0cnVlKTtcblx0XHRcdFx0XHR0aGlzLm9uQkxFQ29ubmVjdGlvblN0YXRlQ2hhbmdlKCk7XG5cdFx0XHRcdFx0dW5pLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoIV90aGlzLnZpY3Ryb3lDb25uZWN0ZWQpe1xuXHRcdFx0XHRcdFx0XHR0b2FzdCgnRXJyb3IgZGV2aWNlJyk7XG5cdFx0XHRcdFx0XHRcdGlmKF90aGlzLmNvbm5lY3RlZCl7XG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuY29ubmVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMudmljdHJveUNvbm5lY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmNsb3NlQkxFQ29ubmVjdGlvbigpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMzAwMClcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRfdGhpcy5nZXRCTEVEZXZpY2VTZXJ2aWNlcygpO1xuXHRcdFx0XHRcdGxldCBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xuXHRcdFx0XHRcdGlmKHBsYXRmb3JtPT0nYW5kcm9pZCcpe1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHQgICAgX3RoaXMuZ2V0QkxFRGV2aWNlU2VydmljZXMoKTtcblx0XHRcdFx0XHRcdH0sIDEwMDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRfdGhpcy5nZXRCTEVEZXZpY2VTZXJ2aWNlcygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhaWw6IGUgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfov57mjqXkvY7lip/ogJfok53niZnlpLHotKXvvIzplJnor6/noIHvvJonICsgZS5lcnJDb2RlKTtcblx0XHRcdFx0XHRpZiAoZS5lcnJDb2RlICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog5pat5byA5LiO5L2O5Yqf6ICX6JOd54mZ6K6+5aSH55qE6L+e5o6lXG5cdFx0ICovXG5cdFx0Y2xvc2VCTEVDb25uZWN0aW9uKCkge1xuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XG5cdFx0XHR1bmkuY2xvc2VCTEVDb25uZWN0aW9uKHtcblx0XHRcdFx0ZGV2aWNlSWQsXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5pat5byA5L2O5Yqf6ICX6JOd54mZ5oiQ5YqfOicgKyByZXMuZXJyTXNnKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMSwgZmFsc2UpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAzLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNCwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDUsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA2LCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNywgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDgsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA5LCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLmVxdWlwbWVudCA9IFtdO1xuXHRcdFx0XHRcdHRoaXMuc2VydmljZXNEYXRhID0gW107XG5cdFx0XHRcdFx0dGhpcy5jaGFyYWN0ZXJpc3RpY3NEYXRhID0gW107XG5cdFx0XHRcdFx0dGhpcy5zZXJ2aWNlSWQgPSAnJztcblx0XHRcdFx0XHR0aGlzLmNoYXJhY3RlcmlzdGljc0lkID0gJyc7XG5cdFx0XHRcdFx0dG9hc3QoJ0Nvbm5lY3Rpb24gY2xvc2VkJylcblx0XHRcdFx0XHR0aGlzLm9wZW5CbHVldG9vdGhBZGFwdGVyKClcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFpbDogZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aWreW8gOS9juWKn+iAl+iTneeJmeaIkOWKn++8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLm9wZW5CbHVldG9vdGhBZGFwdGVyKClcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDojrflj5bmiYDmnInmnI3liqFcblx0XHQgKi9cblx0XHRnZXRCTEVEZXZpY2VTZXJ2aWNlcygpIHtcblx0XHRcdGxldCBkZXZpY2VJZCA9IHRoaXMuZXF1aXBtZW50WzBdLmRldmljZUlkO1xuXHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluaJgOacieacjeWKoeeahCB1dWlkOicgKyBkZXZpY2VJZCk7XG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0dW5pLmdldEJMRURldmljZVNlcnZpY2VzKHtcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxuXHRcdFx0XHRkZXZpY2VJZCxcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMuc2VydmljZXMpKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W6K6+5aSH5pyN5Yqh5oiQ5YqfOicgKyByZXMuZXJyTXNnKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNywgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDgsIHRydWUpO1xuXHRcdFx0XHRcdC8vIHRoaXMuc2hvd01hc2tUeXBlID0gJ3NlcnZpY2UnO1xuXHRcdFx0XHRcdC8vIHRoaXMubGlzdCA9IHJlcy5zZXJ2aWNlcztcblx0XHRcdFx0XHRyZXMuc2VydmljZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pOyAvL+i+k+WHuuaVsOe7hOeahOavj+S4gOS4quWFg+e0oFxuXHRcdFx0XHRcdFx0Ly8gaWYoaXRlbS51dWlkLmluY2x1ZGVzKCdGRkUwJykpe1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKF90aGlzLnNlcnZpY2VJZCk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhpdGVtLnV1aWQpO1xuXHRcdFx0XHRcdFx0X3RoaXMuc2VydmljZUlkID0gaXRlbS51dWlkO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0X3RoaXMuZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKClcblx0XHRcdFx0XHRcdH0sIDMwMCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdFx0XHR0aGlzLmNoYXJhY3RlcmlzdGljc0RhdGEgPSBbXTtcblx0XHRcdFx0XHQvLyB0aGlzLm1hc2tTaG93ID0gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZmFpbDogZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluiuvuWkh+acjeWKoeWksei0pe+8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDojrflj5bmn5DkuKrmnI3liqHkuIvnmoTmiYDmnInnibnlvoHlgLxcblx0XHQgKi9cblx0XHRnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MoKSB7XG5cdFx0XHRsZXQgZGV2aWNlSWQgPSB0aGlzLmVxdWlwbWVudFswXS5kZXZpY2VJZDtcblx0XHRcdGxldCBzZXJ2aWNlSWQgPSB0aGlzLnNlcnZpY2VJZDtcblx0XHRcdGNvbnNvbGUubG9nKCdhc2Rhc2Rhc2QnKTtcblx0XHRcdGNvbnNvbGUubG9nKGRldmljZUlkKTtcblx0XHRcdGNvbnNvbGUubG9nKHNlcnZpY2VJZCk7XG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0dW5pLmdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcyh7XG5cdFx0XHRcdC8vIOi/memHjOeahCBkZXZpY2VJZCDpnIDopoHlt7Lnu4/pgJrov4cgY3JlYXRlQkxFQ29ubmVjdGlvbiDkuI7lr7nlupTorr7lpIflu7rnq4vpk77mjqVcblx0XHRcdFx0ZGV2aWNlSWQsXG5cdFx0XHRcdC8vIOi/memHjOeahCBzZXJ2aWNlSWQg6ZyA6KaB5ZyoIGdldEJMRURldmljZVNlcnZpY2VzIOaOpeWPo+S4reiOt+WPllxuXHRcdFx0XHRzZXJ2aWNlSWQsXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPlueJueW+geWAvOaIkOWKnzonICsgcmVzLmVyck1zZyk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDcsIHRydWUpO1xuXG5cdFx0XHRcdFx0cmVzLmNoYXJhY3RlcmlzdGljcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaXRlbSk7IC8v6L6T5Ye65pWw57uE55qE5q+P5LiA5Liq5YWD57SgXG5cdFx0XHRcdFx0XHQvLyBpZihpdGVtLnV1aWQuaW5jbHVkZXMoJ0ZGRTEnKSl7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPlueJueW+geWAvOaIkOWKnzonICsgaXRlbSk7XG5cdFx0XHRcdFx0XHRfdGhpcy5jaGFyYWN0ZXJpc3RpY3NJZCA9IGl0ZW0udXVpZDtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfojrflj5bnibnlvoHlgLzmiJDlip86JyArIGl0ZW0ucHJvcGVydGllcy5ub3RpZnkpO1xuXHRcdFx0XHRcdFx0X3RoaXMubm90aWZ5ID0gaXRlbS5wcm9wZXJ0aWVzLm5vdGlmeTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0X3RoaXMucmVhZEJMRUNoYXJhY3RlcmlzdGljVmFsdWUoKTtcblx0XHRcdFx0XHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQvLyBcdHJldHVybiBfdGhpcy53cml0ZUJsdWV0b290aFdpdGhJZCgnMScpXG5cdFx0XHRcdFx0XHQvLyB9LCAzMDApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiBlID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W54m55b6B5YC85aSx6LSl77yM6ZSZ6K+v56CB77yaJyArIGUuZXJyQ29kZSk7XG5cdFx0XHRcdFx0aWYgKGUuZXJyQ29kZSAhPT0gMCkge1xuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIOebkeWQrOS9juWKn+iAl+iTneeJmei/nuaOpeeKtuaAgeeahOaUueWPmOS6i+S7tuOAguWMheaLrOW8gOWPkeiAheS4u+WKqOi/nuaOpeaIluaWreW8gOi/nuaOpe+8jOiuvuWkh+S4ouWkse+8jOi/nuaOpeW8guW4uOaWreW8gOetieetiVxuXHRcdCAqL1xuXHRcdG9uQkxFQ29ubmVjdGlvblN0YXRlQ2hhbmdlKCkge1xuXHRcdFx0dW5pLm9uQkxFQ29ubmVjdGlvblN0YXRlQ2hhbmdlKHJlcyA9PiB7XG5cdFx0XHRcdC8vIOivpeaWueazleWbnuiwg+S4reWPr+S7peeUqOS6juWkhOeQhui/nuaOpeaEj+WkluaWreW8gOetieW8guW4uOaDheWGtVxuXHRcdFx0XHRjb25zb2xlLmxvZyhg6JOd54mZ6L+e5o6l54q25oCBIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPmApO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFx0aWYgKCFyZXMuY29ubmVjdGVkKSB7XG5cblx0XHRcdFx0XHRpZih0aGlzLmlzU3RvcCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHRoaXMudmljdHJveUNvbm5lY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZUJMRUNvbm5lY3Rpb24oKTtcblx0XHRcdFx0XHRcdHJldHVybiA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmlq3lvIDkvY7lip/ogJfok53niZnmiJDlip86Jyk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDEsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMywgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDQsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA1LCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNiwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDcsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA4LCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgOSwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hMb2FkID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5lcXVpcG1lbnQgPSBbXTtcblx0XHRcdFx0XHR0aGlzLnNlcnZpY2VzRGF0YSA9IFtdO1xuXHRcdFx0XHRcdHRoaXMuY2hhcmFjdGVyaXN0aWNzRGF0YSA9IFtdO1xuXHRcdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VEYXRhID0ge307XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnZpY3Ryb3lDb25uZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHQvLyB0aGlzLm9wZW5CbHVldG9vdGhBZGFwdGVyKCk7XG5cdFx0XHRcdFx0dG9hc3QoJ0JsdWV0b290aCBjb25uZWN0aW9uIGRpc2Nvbm5lY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIOivu+WPluS9juWKn+iAl+iTneeJmeiuvuWkh+eahOeJueW+geWAvOeahOS6jOi/m+WItuaVsOaNruWAvOOAguazqOaEj++8muW/hemhu+iuvuWkh+eahOeJueW+geWAvOaUr+aMgSByZWFkIOaJjeWPr+S7peaIkOWKn+iwg+eUqFxuXHRcdCAqL1xuXHRcdHJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKCkge1xuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XG5cdFx0XHRsZXQgc2VydmljZUlkID0gdGhpcy5zZXJ2aWNlSWQ7XG5cdFx0XHRsZXQgY2hhcmFjdGVyaXN0aWNJZCA9IHRoaXMuY2hhcmFjdGVyaXN0aWNzSWQ7XG5cdFx0XHRjb25zb2xlLmxvZygn5ZOI5ZOI5ZOIJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhkZXZpY2VJZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhzZXJ2aWNlSWQpO1xuXHRcdFx0Y29uc29sZS5sb2coY2hhcmFjdGVyaXN0aWNJZCk7XG5cdFx0XHRjb25zb2xlLmxvZygn5ZOI5ZOI5ZOIJyk7XG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0dGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuXHRcdFx0dW5pLnJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxuXHRcdFx0XHRkZXZpY2VJZCxcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIHNlcnZpY2VJZCDpnIDopoHlnKggZ2V0QkxFRGV2aWNlU2VydmljZXMg5o6l5Y+j5Lit6I635Y+WXG5cdFx0XHRcdHNlcnZpY2VJZCxcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGNoYXJhY3RlcmlzdGljSWQg6ZyA6KaB5ZyoIGdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcyDmjqXlj6PkuK3ojrflj5Zcblx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNJZCxcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6K+75Y+W6K6+5aSH5pWw5o2u5YC85oiQ5YqfJyk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cdFx0XHRcdFx0X3RoaXMubm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSgpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxldCBwbGF0Zm9ybSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtO1xuXHRcdFx0XHRcdGlmKHBsYXRmb3JtPT0nYW5kcm9pZCcpe1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0X3RoaXMud3JpdGVCbHVldG9vdGhXaXRoSWQoJzEwJyk7XG5cdFx0XHRcdFx0XHR9LCAzMDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2V7XG5cdFx0XHRcdFx0XHRfdGhpcy53cml0ZUJsdWV0b290aFdpdGhJZCgnMTAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhaWwoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfor7vlj5borr7lpIfmlbDmja7lgLzlpLHotKXvvIzplJnor6/noIHvvJonICsgZS5lcnJDb2RlKTtcblx0XHRcdFx0XHRpZiAoZS5lcnJDb2RlICE9PSAwKSB7XG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0Ly8gdGhpcy5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIOebkeWQrOS9juWKn+iAl+iTneeJmeiuvuWkh+eahOeJueW+geWAvOWPmOWMluS6i+S7tuOAguW/hemhu+WFiOWQr+eUqCBub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlIOaOpeWPo+aJjeiDveaOpeaUtuWIsOiuvuWkh+aOqOmAgeeahCBub3RpZmljYXRpb27jgIJcblx0XHQgKi9cblx0XHRvbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKSB7XG5cdFx0XHQvLyDlv4XpobvlnKjov5nph4znmoTlm57osIPmiY3og73ojrflj5Zcblx0XHRcdHVuaS5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoY2hhcmFjdGVyaXN0aWMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygn55uR5ZCs5L2O5Yqf6ICX6JOd54mZ6K6+5aSH55qE54m55b6B5YC85Y+Y5YyW5LqL5Lu25oiQ5YqfJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYXJhY3RlcmlzdGljKSk7XG5cdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VEYXRhID0gY2hhcmFjdGVyaXN0aWM7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIOiuoumYheaTjeS9nOaIkOWKn+WQjumcgOimgeiuvuWkh+S4u+WKqOabtOaWsOeJueW+geWAvOeahCB2YWx1Ze+8jOaJjeS8muinpuWPkSB1bmkub25CTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlIOWbnuiwg+OAglxuXHRcdCAqL1xuXHRcdG5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKSB7XG5cdFx0XHRsZXQgZGV2aWNlSWQgPSB0aGlzLmVxdWlwbWVudFswXS5kZXZpY2VJZDtcblx0XHRcdGxldCBzZXJ2aWNlSWQgPSB0aGlzLnNlcnZpY2VJZDtcblx0XHRcdGxldCBjaGFyYWN0ZXJpc3RpY0lkID0gdGhpcy5jaGFyYWN0ZXJpc3RpY3NJZDtcblx0XHRcdGxldCBub3RpZnkgPSB0aGlzLm5vdGlmeTtcblx0XHRcdGNvbnNvbGUubG9nKGRldmljZUlkKTtcblx0XHRcdGNvbnNvbGUubG9nKHNlcnZpY2VJZCk7XG5cdFx0XHRjb25zb2xlLmxvZyhjaGFyYWN0ZXJpc3RpY0lkKTtcblx0XHRcdGNvbnNvbGUubG9nKG5vdGlmeSk7XG5cdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xuXHRcdFx0dW5pLm5vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2Uoe1xuXHRcdFx0XHRzdGF0ZTogdHJ1ZSwgLy8g5ZCv55SoIG5vdGlmeSDlip/og71cblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxuXHRcdFx0XHRkZXZpY2VJZCxcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIHNlcnZpY2VJZCDpnIDopoHlnKggZ2V0QkxFRGV2aWNlU2VydmljZXMg5o6l5Y+j5Lit6I635Y+WXG5cdFx0XHRcdHNlcnZpY2VJZCxcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGNoYXJhY3RlcmlzdGljSWQg6ZyA6KaB5ZyoIGdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcyDmjqXlj6PkuK3ojrflj5Zcblx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNJZCxcblx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnbm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSBzdWNjZXNzOicgKyByZXMuZXJyTXNnKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFx0XHR1bmkub25CTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVjZWl2ZVZhbHVlID0gX3RoaXMuYWIyaGV4KHJlcy52YWx1ZSkgLy8y6L+b5Yi25pWw5o2u6L2s5Li6MTbov5vliLblrZfnrKbkuLJcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6JOd54mZ6L+U5Zue5pWw5o2u5Li677yaXCIrcmVjZWl2ZVZhbHVlKVxuXHRcdFx0XHRcdFx0XHRfdGhpcy5kZWFsUmV0dXJuRGF0YShyZWNlaXZlVmFsdWUpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFx05pat5byA6JOd54mZ5qih5Z2XXG5cdFx0ICovXG5cdFx0Y2xvc2VCbHVldG9vdGhBZGFwdGVyKE9CSkVDVCkge1xuXHRcdFx0dW5pLmNsb3NlQmx1ZXRvb3RoQWRhcHRlcih7XG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aWreW8gOiTneeJmeaooeWdl+aIkOWKnycpO1xuXHRcdFx0XHRcdHRoaXMuaXNTdG9wID0gdHJ1ZSA7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDAsIGZhbHNlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMSwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDIsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAzLCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNCwgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDUsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA2LCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNywgdHJ1ZSk7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDgsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA5LCB0cnVlKTtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMTAsIHRydWUpO1xuXHRcdFx0XHRcdHRoaXMuZXF1aXBtZW50ID0gW107XG5cdFx0XHRcdFx0dGhpcy5zZXJ2aWNlc0RhdGEgPSBbXTtcblx0XHRcdFx0XHR0aGlzLmNoYXJhY3RlcmlzdGljc0RhdGEgPSBbXTtcblx0XHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlRGF0YSA9IHt9O1xuXHRcdFx0XHRcdHRoaXMuYWRhcHRlclN0YXRlID0gW107XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hMb2FkID1mYWxzZTtcblx0XHRcdFx0XHR0b2FzdCgnRGlzY29ubmVjdCBCbHVldG9vdGgnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4vKipcbiAqIOWIpOaWreWIneWni+WMluiTneeJmeeKtuaAgVxuICovXG5mdW5jdGlvbiBpbml0VHlwZXMoY29kZSwgZXJyTXNnKSB7XG5cdHN3aXRjaCAoY29kZSkge1xuXHRcdGNhc2UgMTAwMDA6XG5cdFx0XHR0b2FzdCgnVW5pbml0aWFsaXplZCBCbHVldG9vdGggYWRhcHRlcicpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwMTpcblx0XHRcdHRvYXN0KCdCbHVldG9vdGggbm90IGRldGVjdGVkLCBwbGVhc2UgdHVybiBvbiBCbHVldG9vdGggYW5kIHRyeSBhZ2FpbiEnKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTAwMDI6XG5cdFx0XHR0b2FzdCgnTm8gc3BlY2lmaWVkIGRldmljZSBmb3VuZCcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwMzpcblx0XHRcdHRvYXN0KCdDb25uZWN0IGZhaWxlZCcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwNDpcblx0XHRcdHRvYXN0KCdObyBzcGVjaWZpZWQgc2VydmljZSBmb3VuZCcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwNTpcblx0XHRcdHRvYXN0KCdObyBzcGVjaWZpZWQgZmVhdHVyZSBmb3VuZCcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwNjpcblx0XHRcdHRvYXN0KCdDb25uZWN0aW9uIGhhcyBiZWVuIGRpc2Nvbm5lY3RlZCcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwNzpcblx0XHRcdHRvYXN0KCdUaGUgY3VycmVudCBmZWF0dXJlIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBvcGVyYXRpb24nKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMTAwMDg6XG5cdFx0XHR0b2FzdCgnQWxsIGV4Y2VwdGlvbnMgcmVwb3J0ZWQgYnkgb3RoZXIgc3lzdGVtcycpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAxMDAwOTpcblx0XHRcdHRvYXN0KCdVbmlxdWUgdG8gQW5kcm9pZCBzeXN0ZW0sIHN5c3RlbSB2ZXJzaW9uIGJlbG93IDQuMyBkb2VzIG5vdCBzdXBwb3J0IEJMRScpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gdG9hc3QoZXJyTXNnKTtcblx0fVxufVxuXG4vKipcbiAqIOW8ueWHuuahhuWwgeijhVxuICovXG5mdW5jdGlvbiB0b2FzdChjb250ZW50LCBzaG93Q2FuY2VsID0gZmFsc2UpIHtcblx0dW5pLnNob3dNb2RhbCh7XG5cdFx0dGl0bGU6ICdQcm9tcHQnLFxuXHRcdGNvbmZpcm1UZXh0OidDb25maXJtJyxcblx0XHRjb250ZW50LFxuXHRcdHNob3dDYW5jZWxcblx0fSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 19 */
/*!*****************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/App.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!******************************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 23 */
/*!**********************************************************************************************!*\
  !*** /Users/swapnilkondekar/Documents/O_O/journey/hope/uni-victory/uni.promisify.adaptor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);\nuni.addInterceptor({\n  returnValue: function returnValue(res) {\n    if (!(!!res && (_typeof(res) === \"object\" || typeof res === \"function\") && typeof res.then === \"function\")) {\n      return res;\n    }\n    return new Promise(function (resolve, reject) {\n      res.then(function (res) {\n        return res[0] ? reject(res[0]) : resolve(res[1]);\n      });\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pLnByb21pc2lmeS5hZGFwdG9yLmpzIl0sIm5hbWVzIjpbInVuaSIsImFkZEludGVyY2VwdG9yIiwicmV0dXJuVmFsdWUiLCJyZXMiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7QUFBQUEsR0FBRyxDQUFDQyxjQUFjLENBQUM7RUFDakJDLFdBQVcsdUJBQUVDLEdBQUcsRUFBRTtJQUNoQixJQUFJLEVBQUUsQ0FBQyxDQUFDQSxHQUFHLEtBQUssUUFBT0EsR0FBRyxNQUFLLFFBQVEsSUFBSSxPQUFPQSxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBT0EsR0FBRyxDQUFDQyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUU7TUFDeEcsT0FBT0QsR0FBRztJQUNaO0lBQ0EsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7TUFDdENKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNELEdBQUc7UUFBQSxPQUFLQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdJLE1BQU0sQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdHLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQUEsRUFBQztJQUM5RCxDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQyIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbInVuaS5hZGRJbnRlcmNlcHRvcih7XG4gIHJldHVyblZhbHVlIChyZXMpIHtcbiAgICBpZiAoISghIXJlcyAmJiAodHlwZW9mIHJlcyA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgcmVzID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiByZXMudGhlbiA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcy50aGVuKChyZXMpID0+IHJlc1swXSA/IHJlamVjdChyZXNbMF0pIDogcmVzb2x2ZShyZXNbMV0pKTtcbiAgICB9KTtcbiAgfSxcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ })
],[[0,"app-config"]]]);