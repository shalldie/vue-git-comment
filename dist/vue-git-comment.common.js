module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1d2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("869a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2496":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2f30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGitComment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("89d7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGitComment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGitComment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueGitComment_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6246":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2496");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "869a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "89d7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8ccd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b2c3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b5e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b2c3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentPagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d4bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8ccd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBody_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb1f476-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueGitComment/VueGitComment.vue?vue&type=template&id=25b40430&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-git-comment"},[_c('CommentHeader'),_c('CommentBody'),_c('CommentPagination'),_c('CommentEditor',{ref:"editor"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueGitComment/VueGitComment.vue?vue&type=template&id=25b40430&

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_root_Vue_default.a ? superProto.constructor : external_commonjs_vue_commonjs2_vue_root_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.4.0 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = {
                from: reactiveInjectKey,
                default: {},
            };
        }
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./src/lib/store.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 全局的数据
 *
 * @export
 * @class StateStore
 */
var StateStore =
/*#__PURE__*/
function () {
  function StateStore() {
    _classCallCheck(this, StateStore);

    this.access_token = '';
    /**
     * 初始化配置
     *
     * @memberof StateStore
     */

    this.options = _objectSpread({
      client_id: '',
      client_secret: '',
      owner: '',
      repo: '',
      uuid: ''
    }, function () {
      return {
        title: ''
      };
    }());
    this.state = {
      /**
       * 正在初始化
       */
      loading: true,

      /**
       * 是否登录
       */
      ifLogin: false
    };
    /**
     * 登陆用户信息
     */

    this.userInfo = {
      loading: false,
      name: '',
      avatar_url: '',
      html_url: ''
    };
    this.issue = {
      /**
       * 是否已经创建
       */
      created: true,

      /**
       * issue 的number
       */
      number: 0,

      /**
       * issue 的地址
       */
      html_url: '',

      /**
       * `heart` 的id
       */
      heartId: '',

      /**
       * `喜欢` 的人的 id、用户名
       */
      likedList: []
    };
    this.comments = {
      /**
       * 正在加载
       */
      loading: false,

      /**
       * 评论的数量
       */
      count: 0,

      /**
       * 第几页
       */
      page: 1,

      /**
       * 每页数量
       */
      per_page: 10,

      /**
       * true-由旧到新 false-由新到旧
       */
      sortedAsc: true,

      /**
       * 当前页的评论
       */
      list: []
    };
  }

  _createClass(StateStore, [{
    key: "extend",
    value: function extend(store) {
      Object.assign(this, store);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.extend(new StateStore());
    }
  }]);

  return StateStore;
}();
/* harmony default export */ var store = (new StateStore());
// CONCATENATED MODULE: ./src/lib/utils.ts
/**
 * 将参数转换成 &key=value 格式
 *
 * @export
 * @param {Record<string, any>} params
 * @returns {string}
 */
function stringifyQuery(params) {
  return Object.keys(params).map(function (key) {
    return "".concat(key, "=").concat(encodeURIComponent(params[key]));
  }).join('&');
}
/**
 * 将参数添加到url中
 *
 * @export
 * @param {string} url 地址
 * @param {any} query 参数
 * @returns {string}
 */

function appendQuery(url, query) {
  if (!~url.indexOf('?')) {
    return url + '?' + stringifyQuery(query);
  }

  if (url[url.length - 1] !== '&') {
    url = '&' + url;
  }

  return url + stringifyQuery(query);
}
/**
 * 从地址中根据key得到query值
 *
 * @export
 * @param {string} key
 * @param {string} [url=window.location.href] 地址
 * @returns {string}
 */

function getQuery(key) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var reg = new RegExp("".concat(key, "=([^&]*)"));
  var matches = url.match(reg);

  if (matches && matches.length) {
    return matches[1];
  }

  return '';
}
/**
 * 给html中的a标签加个 target="_blank"
 *
 * @export
 * @param {string} content
 * @returns
 */

function addTargetBlank(content) {
  return content.replace(/(<a )/g, '$1target="_blank" ');
}
/**
 * 时间格式化
 *
 * @export
 * @param {Date} date
 * @param {string} format
 * @returns
 */

function dateFormat(date, format) {
  var dict = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'h+': date.getHours() - 12,
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  var _loop = function _loop(k) {
    var reg = new RegExp(k, 'g');
    format = format.replace(reg, function (g0) {
      return ('000000' + dict[k]).slice(-g0.length);
    });
  };

  for (var k in dict) {
    _loop(k);
  }

  return format;
}
/* eslint-disable */

/**
 * 根据 第几页、每页数量、总数量 计算倒序时候应该进行查询的 page、per_page、offset
 * 这绝笔是整个项目最难的地方。算法原来真的有用 >_<#@!
 *
 * @export
 * @param {number} page 第几页
 * @param {number} per_page 每页数量
 * @param {number} count 总数量
 * @returns {page:number;per_page:number;offset:number}
 */

function reversePageMatch(page, per_page, count) {
  var hash = []; // 存储所有可能

  var to = count - (page - 1) * per_page; // 目标结束位置

  var from = to - per_page + 1; // 目标起始位置
  // i 是转换后每页数量

  for (var i = 100; i >= per_page; i--) {
    if (i > from) continue;
    var ifBetween = false;
    var k = 1; // 无论第几页，最后一个元素不能在 from 和 to 之间
    // k 是第几页

    for (; k < count / per_page; k++) {
      var temp = i * k; // 该分法在k页时，最后一个元素的位置

      if (temp >= from && temp < to) {
        ifBetween = true;
        break;
      }

      if (temp >= to) {
        break;
      }
    }

    if (!ifBetween) {
      // 该方法符合期望
      hash.push({
        page: k,
        per_page: i,
        offset: from - ((k - 1) * i + 1)
      });
    }
  }

  hash.sort(function (a, b) {
    return a.per_page - b.per_page;
  }); // 一般在倒序的最后一页

  if (!hash.length) {
    hash.push({
      page: 1,
      per_page: to,
      offset: from - 1
    });
  }

  hash[0].offset < 0 && (hash[0].offset = 0);
  return hash[0];
}
/* eslint-enable */
// CONCATENATED MODULE: ./src/lib/constants.ts
/**
 * 存储在 localStorage 中的key
 */
var GIT_COMMENT_ACCESS_STOKEN = 'GIT_COMMENT_ACCESS_STOKEN';
/**
 * issue 所用label
 */

var ISSUE_LABELS = ['vue-git-comment'];
/**
 * issue 的body
 */

var ISSUE_BODY = 'this issue is made by: https://github.com/shalldie/vue-git-comment';
/**
 * 用户登陆跳转时带的 state
 */

var IDENTITY_STATE = 'IDENTITY_STATE';
// CONCATENATED MODULE: ./src/lib/Deferred.ts
function Deferred_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Deferred  ，对 Promise 对一次封装
 *
 * @export
 * @class Deferred
 */
var Deferred = function Deferred() {
  var _this = this;

  Deferred_classCallCheck(this, Deferred);

  var pro = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  }); // 提供 then,catch 2个接口去绑定方法

  this.then = pro.then.bind(pro);
  this.catch = pro.catch.bind(pro); // 提供 promise 属性，暴露原始 promise 对象

  this.promise = pro;
};


// CONCATENATED MODULE: ./src/lib/http.ts
function http_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function http_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { http_ownKeys(Object(source), true).forEach(function (key) { http_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { http_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function http_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var BASE_URL = 'https://api.github.com';
function fetch(options) {
  var method = options.method,
      url = options.url,
      proxy = options.proxy,
      query = options.query,
      params = options.params,
      headers = options.headers;

  if (!/^http/.test(url)) {
    url = BASE_URL + url;
  }

  if (proxy) {
    url = proxy + url;
  }

  var dfd = new Deferred();
  var xh = new XMLHttpRequest();

  xh.onload = function () {
    var contentType = this.getResponseHeader('content-type') || '';

    if (!/json/.test(contentType)) {
      dfd.resolve(this.responseText);
      return;
    }

    var result = this.responseText ? JSON.parse(this.responseText) : {};
    dfd.resolve(result);
  };

  xh.onerror = function (ex) {
    console.log('invoke xhr error');
    dfd.reject(ex.message);
  };

  if (query) {
    url = appendQuery(url, query);
  }

  xh.open(method, url, true);
  headers = http_objectSpread({
    Accept: 'application/json'
  }, headers);

  for (var key in headers) {
    xh.setRequestHeader(key, headers[key]);
  }

  if (method === 'POST') {
    xh.setRequestHeader('Content-Type', 'application/json');
  }

  xh.send(params ? JSON.stringify(params) : null);
  return dfd.promise;
}
/* harmony default export */ var http = ({
  fetch: fetch
});
// CONCATENATED MODULE: ./src/lib/github.ts
function github_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function github_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { github_ownKeys(Object(source), true).forEach(function (key) { github_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { github_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function github_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function github_toConsumableArray(arr) { return github_arrayWithoutHoles(arr) || github_iterableToArray(arr) || github_nonIterableSpread(); }

function github_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function github_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function github_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





/**
 * 组件的通用凭证
 *
 * @returns
 */

function basicAuthHeader() {
  var _store$options = store.options,
      client_id = _store$options.client_id,
      client_secret = _store$options.client_secret;
  return {
    Authorization: 'Basic ' + btoa("".concat(client_id, ":").concat(client_secret))
  };
}
/**
 * 登陆后用户的凭证
 *
 * @returns
 */


function tokenAuthHeader() {
  return {
    Authorization: "token ".concat(store.access_token)
  };
} // #region auth 相关

/**
 * 跳转去认证
 *
 * @export
 */


function toAuthorize() {
  var url = 'https://github.com/login/oauth/authorize';
  url = appendQuery(url, {
    client_id: store.options.client_id,
    redirect_uri: window.location.href,
    scope: 'public_repo',
    state: IDENTITY_STATE
  });
  window.location.href = url;
}
/**
 * 获取token
 *
 * @export
 * @param {string} code
 * @returns {Promise<string>}
 */

function getToken(code) {
  var _store$options2 = store.options,
      client_id = _store$options2.client_id,
      client_secret = _store$options2.client_secret;
  return http.fetch({
    method: 'POST',
    url: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
    params: {
      client_id: client_id,
      client_secret: client_secret,
      code: code
    }
  }).then(function (body) {
    return body.access_token;
  });
}
/**
 * 获取当前用户信息
 *
 * @export
 * @returns
 */

function getAuthUser() {
  return http.fetch({
    method: 'GET',
    url: '/user',
    headers: tokenAuthHeader(),
    query: {
      _: Math.random()
    }
  });
} // #endregion
// #region issue 相关

/**
 * 创建一个 issue
 * https://developer.github.com/v3/issues/#create-an-issue
 *
 * @export
 * @param {string[]} labels
 * @param {string} title
 * @param {string} body
 * @returns
 */

function github_createIssue(labels, title, body) {
  var _store$options3 = store.options,
      owner = _store$options3.owner,
      repo = _store$options3.repo;
  return http.fetch({
    method: 'POST',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues"),
    headers: tokenAuthHeader(),
    params: {
      labels: labels,
      title: title,
      body: body
    }
  });
}
/**
 * 获取第一个 issue 相关信息
 *
 * @export
 * @returns {Promise<{ comments: number; number: number; html_url: string }>}
 */

function getFirstIssue() {
  var _store$options4 = store.options,
      owner = _store$options4.owner,
      repo = _store$options4.repo,
      uuid = _store$options4.uuid;
  var labels = [uuid].concat(github_toConsumableArray(ISSUE_LABELS)).join(',');
  return http.fetch({
    method: 'GET',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues"),
    headers: basicAuthHeader(),
    query: {
      creator: owner,
      labels: labels,
      _: Math.random()
    }
  }).then(function (list) {
    return list[0];
  });
}
/**
 * 获取 issue 对应的 reactions
 *
 * @export
 * @returns
 */

function issueReactions() {
  var _store$options5 = store.options,
      owner = _store$options5.owner,
      repo = _store$options5.repo;
  var number = store.issue.number;
  return http.fetch({
    method: 'GET',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues/").concat(number, "/reactions"),
    headers: github_objectSpread({}, basicAuthHeader(), {
      // 获取 issue 信息的时候带上 reactions
      // https://developer.github.com/v3/reactions/#list-reactions-for-an-issue
      Accept: 'application/vnd.github.squirrel-girl-preview+json'
    }),
    query: {
      _: Math.random()
    }
  });
} // #endregion
// #region comment 相关

/**
 * 创建评论
 *
 * @export
 * @param {string} body
 */

function createComment(body) {
  var _store$options6 = store.options,
      owner = _store$options6.owner,
      repo = _store$options6.repo;
  var number = store.issue.number;
  return http.fetch({
    method: 'POST',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues/").concat(number, "/comments"),
    headers: tokenAuthHeader(),
    params: {
      body: body
    }
  });
}
/**
 * 获取 markdown 对应的html片段
 *
 * @export
 * @param {string} content
 * @returns
 */

function getMarkDown(content) {
  return http.fetch({
    method: 'POST',
    url: '/markdown',
    headers: basicAuthHeader(),
    params: {
      mode: 'gfm',
      text: content
    }
  });
}
/**
 * 根据 page, per_page 获取某一页的评论
 *
 * @export
 * @param {number} [page]
 * @param {number} [per_page]
 * @returns
 */

function getComments(page, per_page) {
  var _store$options7 = store.options,
      owner = _store$options7.owner,
      repo = _store$options7.repo;
  var number = store.issue.number;
  return http.fetch({
    method: 'GET',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues/").concat(number, "/comments"),
    headers: github_objectSpread({}, basicAuthHeader(), {
      Accept: [// 返回的 comment 带 reactions
      // https://developer.github.com/v3/issues/comments/#reactions-summary
      'application/vnd.github.squirrel-girl-preview', // body 的原始markdown，以及渲染的html。 全都要
      // https://developer.github.com/v3/issues/comments/#custom-media-types
      'application/vnd.github.v3.raw+json', 'application/vnd.github.VERSION.html+json'].join(',')
    }),
    // 这个参数找不到了，，不知道咋回事。但是还能用
    // https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue
    query: {
      page: page || store.comments.page,
      per_page: per_page || store.comments.per_page,
      _: Math.random()
    }
  });
}
/**
 * 获取某comment的点赞信息
 *
 * @export
 * @param {string} commentId
 * @returns {Promise<any>}
 */

function commentReactions(commentId) {
  var _store$options8 = store.options,
      owner = _store$options8.owner,
      repo = _store$options8.repo;
  return http.fetch({
    method: 'GET',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues/comments/").concat(commentId, "/reactions?_=").concat(Math.random()),
    headers: github_objectSpread({}, basicAuthHeader(), {
      // 获取 issue 的 reactions
      // https://developer.github.com/v3/reactions/#list-reactions-for-an-issue-comment
      Accept: 'application/vnd.github.squirrel-girl-preview+json'
    })
  });
} // #endregion
// #region 点赞相关

/**
 * 给 issue 点赞
 *
 * @export
 * @returns
 */

function heartIssue() {
  var _store$options9 = store.options,
      owner = _store$options9.owner,
      repo = _store$options9.repo;
  var number = store.issue.number;
  return http.fetch({
    method: 'POST',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues/").concat(number, "/reactions"),
    headers: github_objectSpread({}, tokenAuthHeader(), {
      // https://developer.github.com/v3/reactions/#create-reaction-for-an-issue
      Accept: 'application/vnd.github.squirrel-girl-preview+json'
    }),
    params: {
      content: 'heart'
    }
  });
}
/**
 * 取消issue的赞
 * https://developer.github.com/v3/reactions/#delete-a-reaction
 *
 * @export
 * @param {string} id heart的id
 * @returns
 */

function deleteIssueHeart(heartId) {
  return http.fetch({
    method: 'DELETE',
    url: "/reactions/".concat(heartId),
    headers: github_objectSpread({}, tokenAuthHeader(), {
      Accept: 'application/vnd.github.squirrel-girl-preview+json'
    })
  });
}
/**
 * 给 comment 点赞
 * https://developer.github.com/v3/reactions/#create-reaction-for-an-issue-comment
 *
 * @export
 * @param {string} commentId
 * @returns
 */

function heartComment(commentId) {
  var _store$options10 = store.options,
      owner = _store$options10.owner,
      repo = _store$options10.repo;
  return http.fetch({
    method: 'POST',
    url: "/repos/".concat(owner, "/").concat(repo, "/issues/comments/").concat(commentId, "/reactions"),
    params: {
      content: 'heart'
    },
    headers: github_objectSpread({}, tokenAuthHeader(), {
      Accept: 'application/vnd.github.squirrel-girl-preview+json'
    })
  });
}
/**
 * 取消 comment 的赞
 *
 * @export
 * @param {*} heartId
 * @returns
 */

function deleteCommentHeart(heartId) {
  return deleteIssueHeart(heartId);
} //#endregion
// CONCATENATED MODULE: ./src/lib/gitComment.ts
function gitComment_toConsumableArray(arr) { return gitComment_arrayWithoutHoles(arr) || gitComment_iterableToArray(arr) || gitComment_nonIterableSpread(); }

function gitComment_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function gitComment_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function gitComment_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function gitComment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function gitComment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { gitComment_ownKeys(Object(source), true).forEach(function (key) { gitComment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { gitComment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function gitComment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function gitComment_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function gitComment_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function gitComment_createClass(Constructor, protoProps, staticProps) { if (protoProps) gitComment_defineProperties(Constructor.prototype, protoProps); if (staticProps) gitComment_defineProperties(Constructor, staticProps); return Constructor; }







var gitComment_GitComment =
/*#__PURE__*/
function () {
  function GitComment() {
    gitComment_classCallCheck(this, GitComment);
  }

  gitComment_createClass(GitComment, [{
    key: "init",
    value: function init(options) {
      var _this = this;

      // 初始化配置
      store.reset();
      store.extend({
        options: options
      }); // 不用 await 是为了减小打包体积
      // 1. 如果是auth回来，获取并处理token

      this.tryHandleBack().then(function () {
        // 2. 尝试从 localStorage 中拿到token保存
        _this.tryHandleToken(); // 3. 尝试获取当前登陆的用户信息


        _this.getUserInfo(); // 4. 获取组件所需的信息


        _this.getIssueInfo().then(function () {
          return _this.getCurrentPage();
        }).catch(function (ex) {
          console.log(ex);
        });
      });
    }
    /**
     * 如果从auth验证跳转回来，生成并处理token
     *
     * @private
     * @returns {Promise<void>}
     * @memberof GitComment
     */

  }, {
    key: "tryHandleBack",
    value: function tryHandleBack() {
      var _this2 = this;

      // 校验是否是从github跳转过来
      if (getQuery('state') !== IDENTITY_STATE) {
        return Promise.resolve();
      }

      var code = getQuery('code');

      if (!code) {
        return Promise.resolve();
      }

      var replaceUrl = window.location.href.replace(/(code|state)=[^&]*/g, '') // 去掉 code,state 的query
      .replace(/&*$/, '') // 去掉末尾可能的 &
      .replace(/\?/, ''); // 去掉末尾可能的 ?

      window.history.replaceState(null, '', replaceUrl);
      return getToken(code).then(function (token) {
        store.access_token = token;
        localStorage.setItem(GIT_COMMENT_ACCESS_STOKEN, token);
      }).catch(function (ex) {
        console.log(ex);

        _this2.logOut();
      });
    }
    /**
     * 从 localstorage 中更新token
     *
     * @private
     * @returns {void}
     * @memberof GitComment
     */

  }, {
    key: "tryHandleToken",
    value: function tryHandleToken() {
      var token = localStorage.getItem(GIT_COMMENT_ACCESS_STOKEN); // webStorage 里面存储的token

      if (!token) {
        return;
      }

      store.access_token = token;
    }
    /**
     * 获取当前用户信息（仅当前有token时）
     *
     * @private
     * @returns
     * @memberof GitComment
     */

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var _this3 = this;

      if (!store.access_token) {
        return;
      }

      store.userInfo.loading = true;
      return getAuthUser().then(function (body) {
        store.state.ifLogin = true;
        store.userInfo = {
          loading: false,
          name: body.login,
          avatar_url: body.avatar_url,
          html_url: body.html_url
        };
      }).catch(function (err) {
        // token失效，未登录状态
        console.log(err);

        _this3.logOut();
      }).finally(function () {
        store.state.loading = false;
      });
    }
    /**
     * 获取 issue 相关信息
     *
     * @private
     * @returns
     * @memberof GitComment
     */

  }, {
    key: "getIssueInfo",
    value: function getIssueInfo() {
      var _this4 = this;

      return getFirstIssue().then(function (result) {
        // 没有初始化issue
        if (!result) {
          store.issue.created = false;
          throw new Error('issue uninited');
          return;
        }

        store.comments.count = result.comments;
        store.issue = gitComment_objectSpread({}, store.issue, {
          created: true,
          number: result.number,
          html_url: result.html_url
        });

        _this4.getIssueReactions();
      });
    }
    /**
     * 获取当前所用 issue 的 reactions
     *
     * @private
     * @memberof GitComment
     */

  }, {
    key: "getIssueReactions",
    value: function getIssueReactions() {
      issueReactions().then(function (list) {
        list = list.filter(function (n) {
          return n.content === 'heart';
        }).map(function (n) {
          return {
            id: n.id,
            name: n.user.login
          };
        });
        store.issue.likedList = list;
      });
    }
    /**
     * 获取当前页的所有评论
     *
     * @param {boolean} [issueRefresh=false] 是否需要更新issue
     * @memberof GitComment
     */

  }, {
    key: "getCurrentPage",
    value: function getCurrentPage() {
      var _this5 = this;

      var issueRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      store.comments.loading = true;
      var dfd = new Deferred();
      var _store$comments = store.comments,
          page = _store$comments.page,
          per_page = _store$comments.per_page; // 如果按时间 asc 排序，则直接查询

      if (store.comments.sortedAsc) {
        var pro = issueRefresh ? this.getIssueInfo() : Promise.resolve();
        pro.then(function () {
          dfd.resolve({
            page: page,
            per_page: per_page,
            offset: 0
          });
        });
      } // 如果按时间 desc 排序，先查一次总数量，然后得到【倒序page、per_page、offset】
      else {
          this.getIssueInfo().then(function () {
            var count = store.comments.count;
            var match = reversePageMatch(page, per_page, count);
            dfd.resolve(match);
          });
        }

      dfd.then(function (match) {
        // 先通过偏移量得到数据
        return getComments(match.page, match.per_page).then(function (list) {
          list = list.slice(match.offset, match.offset + per_page);
          !store.comments.sortedAsc && list.reverse(); // 如果倒序查询，需要reverse一哈

          return list;
        });
      }).then(function (result) {
        // 再把最终的结果存储
        var list = result.map(function (item) {
          return {
            id: item.id,
            body_html: addTargetBlank(item.body_html),
            body: item.body,
            created_at: dateFormat(new Date(item.created_at), 'yyyy/MM/dd HH:mm:ss'),
            heart: item.reactions.heart,
            likedList: Array(item.reactions.heart),
            user: {
              name: item.user.login,
              avatar_url: item.user.avatar_url,
              link: item.user.html_url
            }
          };
        }); // 有 heart 的时候，去获取具体信息

        if (store.state.ifLogin) {
          list.forEach(function (item) {
            if (!item.likedList.length) {
              return;
            }

            _this5.getCommentReactions(item.id + '').then(function (likedList) {
              item.likedList = likedList;
              store.comments.list = store.comments.list.slice();
            });
          });
        }

        store.comments.loading = false;
        store.comments.list = list;
      });
    }
    /**
     * 获取某个评论的点赞信息
     *
     * @private
     * @param {string} commentId
     * @returns {Promise<{ id: string; name: string }[]>}
     * @memberof GitComment
     */

  }, {
    key: "getCommentReactions",
    value: function getCommentReactions(commentId) {
      return commentReactions(commentId).then(function (list) {
        list = list.filter(function (n) {
          return n.content == 'heart';
        }).map(function (n) {
          return {
            id: n.id,
            name: n.user.login
          };
        });
        return list;
      });
    }
    /**
     * 登陆
     *
     * @memberof GitComment
     */

  }, {
    key: "login",
    value: function login() {
      toAuthorize();
    }
    /**
     * 退出
     *
     * @memberof GitComment
     */

  }, {
    key: "logOut",
    value: function logOut() {
      store.extend({
        access_token: '',
        state: {
          loading: false,
          ifLogin: false
        },
        userInfo: {
          loading: false,
          name: '',
          avatar_url: '',
          html_url: ''
        }
      });
      window.localStorage.removeItem(GIT_COMMENT_ACCESS_STOKEN);
    }
    /**
     * 创建一个 issue，用来储存当前文章的评论
     *
     * @returns
     * @memberof GitComment
     */

  }, {
    key: "createIssue",
    value: function createIssue() {
      return github_createIssue([store.options.uuid].concat(gitComment_toConsumableArray(ISSUE_LABELS)), store.options.title || document.title.substr(0, 20), ISSUE_BODY);
    }
  }]);

  return GitComment;
}();

/* harmony default export */ var gitComment = (new gitComment_GitComment());
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb1f476-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentHeader.vue?vue&type=template&id=1c09425d&
var CommentHeadervue_type_template_id_1c09425d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-header"},[_c('span',{staticClass:"like-item",class:{ disabled: !_vm.store.state.ifLogin, 'vgc-busy': _vm.issueHeartLoading },on:{"click":_vm.toggleHeart}},[(_vm.issueHeartLoading)?_c('span',{staticClass:"heart-icon vgc-rotate",domProps:{"innerHTML":_vm._s(_vm.spinnerIcon)}}):_c('span',{staticClass:"heart-icon",class:{ liked: _vm.liked },domProps:{"innerHTML":_vm._s(_vm.heartIcon)}}),_c('span',{staticClass:"heart-txt"},[_c('strong',[_vm._v(_vm._s(_vm.store.issue.likedList.length))]),_c('span',[_vm._v(" Liked")])])]),_c('span',{staticClass:"split-point"},[_vm._v("•")]),_c('a',{staticClass:"comment-num",attrs:{"href":_vm.store.issue.html_url,"target":"_blank"}},[_c('strong',[_vm._v(_vm._s(_vm.store.comments.count))]),_c('span',[_vm._v(" Comments")])]),_c('div',{staticClass:"sort-item-wrap"},[_c('strong',{staticClass:"sort-item",class:{ active: !_vm.store.comments.sortedAsc },on:{"click":function($event){return _vm.changeSort(false)}}},[_vm._v(" Latest ")]),_c('strong',{staticClass:"split-point"},[_vm._v("•")]),_c('strong',{staticClass:"sort-item",class:{ active: _vm.store.comments.sortedAsc },on:{"click":function($event){return _vm.changeSort(true)}}},[_vm._v(" Earliest ")])])])}
var CommentHeadervue_type_template_id_1c09425d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentHeader.vue?vue&type=template&id=1c09425d&

// CONCATENATED MODULE: ./src/lib/icons.ts
/**
 * 把 gitcomment 里面的代码拿过来稍微修改了一哈 >_<#@!
 * Modified from https://github.com/imsun/gitment/blob/master/src/icons.js
 */
var githubIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>';
var heartIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>';
var spinnerIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>';
var replyIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1332 1024"><path d="M529.066665 273.066666 529.066665 0 51.2 477.866666 529.066665 955.733335 529.066665 675.84C870.4 675.84 1109.333335 785.066665 1280 1024 1211.733335 682.666665 1006.933335 341.333334 529.066665 273.066666"></path></svg>';
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentHeader.vue?vue&type=script&lang=ts&
function CommentHeadervue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CommentHeadervue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { CommentHeadervue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CommentHeadervue_type_script_lang_ts_typeof(obj); }

function CommentHeadervue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommentHeadervue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommentHeadervue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommentHeadervue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommentHeadervue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (CommentHeadervue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var CommentHeadervue_type_script_lang_ts_CommentHeader =
/*#__PURE__*/
function (_Vue) {
  _inherits(CommentHeader, _Vue);

  function CommentHeader() {
    var _this;

    CommentHeadervue_type_script_lang_ts_classCallCheck(this, CommentHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentHeader).apply(this, arguments));
    _this.spinnerIcon = spinnerIcon; // loading icon

    _this.heartIcon = heartIcon; // heart icon

    _this.issueHeartLoading = false; // issue heart 是否在请求中

    return _this;
  }

  CommentHeadervue_type_script_lang_ts_createClass(CommentHeader, [{
    key: "toggleHeart",
    value: function toggleHeart() {
      var _this2 = this;

      if (!this.store.state.ifLogin || this.issueHeartLoading) {
        return;
      }

      this.issueHeartLoading = true; // 如果`喜欢`了，去取消喜欢

      if (this.liked) {
        var LikedItem = store.issue.likedList.find(function (n) {
          return n.name == store.userInfo.name;
        });
        LikedItem && deleteIssueHeart(LikedItem.id).then(function () {
          _this2.issueHeartLoading = false;
          store.issue.likedList = store.issue.likedList.filter(function (n) {
            return n.name != store.userInfo.name;
          });
        });
        return;
      } // 否则去 `喜欢`


      heartIssue().then(function (item) {
        _this2.issueHeartLoading = false;
        store.issue.likedList.push({
          id: item.id,
          name: item.user.login
        });
      });
    }
  }, {
    key: "changeSort",
    value: function changeSort(ifAsc) {
      // 懒得写watch了，就这么处理吧
      if (this.store.comments.sortedAsc == ifAsc) {
        return;
      }

      this.store.comments.sortedAsc = ifAsc;
      this.store.comments.page = 1;
      gitComment.getCurrentPage();
    }
  }, {
    key: "liked",
    get: function get() {
      var _this3 = this;

      return this.store.issue.likedList.some(function (n) {
        return n.name === _this3.store.userInfo.name;
      });
    }
  }]);

  return CommentHeader;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Inject()], CommentHeadervue_type_script_lang_ts_CommentHeader.prototype, "store", void 0);

CommentHeadervue_type_script_lang_ts_CommentHeader = __decorate([vue_class_component_esm], CommentHeadervue_type_script_lang_ts_CommentHeader);
/* harmony default export */ var CommentHeadervue_type_script_lang_ts_ = (CommentHeadervue_type_script_lang_ts_CommentHeader);
// CONCATENATED MODULE: ./src/components/CommentHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommentHeadervue_type_script_lang_ts_ = (CommentHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CommentHeader.vue?vue&type=style&index=0&lang=scss&
var CommentHeadervue_type_style_index_0_lang_scss_ = __webpack_require__("1d2e");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./src/components/CommentHeader.vue






/* normalize component */

var component = normalizeComponent(
  components_CommentHeadervue_type_script_lang_ts_,
  CommentHeadervue_type_template_id_1c09425d_render,
  CommentHeadervue_type_template_id_1c09425d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_CommentHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb1f476-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=template&id=52ab7a58&
var CommentBodyvue_type_template_id_52ab7a58_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-body"},[(_vm.creating)?_c('div',[_vm._v("Creating...")]):(!_vm.store.issue.created && _vm.store.options.owner === _vm.store.userInfo.name)?_c('div',[_vm._v(" Seems new, "),_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.createIssue}},[_vm._v("Click")]),_vm._v(" to create an issue. ")]):(_vm.store.comments.loading)?_c('div',{staticClass:"comment-loading",domProps:{"innerHTML":_vm._s(_vm.spinnerIcon)}}):_c('div',{staticClass:"comment-list"},_vm._l((_vm.store.comments.list),function(item,index){return _c('div',{key:index,staticClass:"markdown-body comment-list-item"},[_c('a',{attrs:{"href":item.user.link,"target":"_blank"}},[_c('img',{staticClass:"user-avatar",attrs:{"src":item.user.avatar_url}})]),_c('div',{staticClass:"comment-item-main border-arrow"},[_c('div',{staticClass:"cim-header"},[_c('div',{staticClass:"cim-info-wrap"},[_c('a',{staticClass:"cim-name",attrs:{"target":"_blank","href":item.user.link}},[_vm._v(_vm._s(item.user.name))]),_c('span',{staticClass:"cim-time"},[_vm._v(" commented on ")]),_c('span',{staticClass:"cim-time"},[_vm._v(_vm._s(item.created_at))])]),_c('div',{staticClass:"cim-reaction"},[_c('span',{staticClass:"cim-heart-item",class:{
                                liked: _vm.heartMap[index],
                                disabled: !_vm.store.state.ifLogin,
                                'vgc-busy': item.heartLoading
                            },on:{"click":function($event){return _vm.toggleHeart(index)}}},[(!item.heartLoading)?_c('span',{staticClass:"cim-heart-icon",domProps:{"innerHTML":_vm._s(_vm.heartIcon)}}):_c('span',{staticClass:"cim-heart-icon vgc-rotate",domProps:{"innerHTML":_vm._s(_vm.spinnerIcon)}}),_c('span',{staticClass:"cim-heart-num"},[_vm._v(_vm._s(item.likedList.length || ''))])]),_c('span',{staticClass:"cim-reply-item",class:{ disabled: !_vm.store.state.ifLogin },domProps:{"innerHTML":_vm._s(_vm.replyIcon)},on:{"click":function($event){return _vm.handleReply(item)}}})])]),_c('div',{staticClass:"cim-body",domProps:{"innerHTML":_vm._s(item.body_html)}})])])}),0)])}
var CommentBodyvue_type_template_id_52ab7a58_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentBody.vue?vue&type=template&id=52ab7a58&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentBody.vue?vue&type=script&lang=ts&
function CommentBodyvue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CommentBodyvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { CommentBodyvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CommentBodyvue_type_script_lang_ts_typeof(obj); }

function CommentBodyvue_type_script_lang_ts_toConsumableArray(arr) { return CommentBodyvue_type_script_lang_ts_arrayWithoutHoles(arr) || CommentBodyvue_type_script_lang_ts_iterableToArray(arr) || CommentBodyvue_type_script_lang_ts_nonIterableSpread(); }

function CommentBodyvue_type_script_lang_ts_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function CommentBodyvue_type_script_lang_ts_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function CommentBodyvue_type_script_lang_ts_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CommentBodyvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommentBodyvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommentBodyvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommentBodyvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommentBodyvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function CommentBodyvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (CommentBodyvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return CommentBodyvue_type_script_lang_ts_assertThisInitialized(self); }

function CommentBodyvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CommentBodyvue_type_script_lang_ts_getPrototypeOf(o) { CommentBodyvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CommentBodyvue_type_script_lang_ts_getPrototypeOf(o); }

function CommentBodyvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CommentBodyvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function CommentBodyvue_type_script_lang_ts_setPrototypeOf(o, p) { CommentBodyvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CommentBodyvue_type_script_lang_ts_setPrototypeOf(o, p); }







var CommentBodyvue_type_script_lang_ts_CommentBody =
/*#__PURE__*/
function (_Vue) {
  CommentBodyvue_type_script_lang_ts_inherits(CommentBody, _Vue);

  function CommentBody() {
    var _this;

    CommentBodyvue_type_script_lang_ts_classCallCheck(this, CommentBody);

    _this = CommentBodyvue_type_script_lang_ts_possibleConstructorReturn(this, CommentBodyvue_type_script_lang_ts_getPrototypeOf(CommentBody).apply(this, arguments));
    _this.heartIcon = heartIcon;
    _this.spinnerIcon = spinnerIcon;
    _this.replyIcon = replyIcon;
    _this.creating = false;
    return _this;
  }
  /**
   * 是否 `heart` 的字典
   */


  CommentBodyvue_type_script_lang_ts_createClass(CommentBody, [{
    key: "createIssue",
    value: function createIssue() {
      var _this2 = this;

      this.creating = true;
      gitComment.createIssue().then(function () {
        _this2.creating = false;
        _this2.store.issue.created = true;
        gitComment.init(_this2.store.options);
      });
    }
  }, {
    key: "toggleHeart",
    value: function toggleHeart(index) {
      var _this3 = this;

      if (!this.store.state.ifLogin) {
        return;
      }

      var loadingKey = 'heartLoading';
      var commentItem = this.store.comments.list[index];

      if (commentItem[loadingKey]) {
        return;
      }

      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(commentItem, loadingKey, true);

      if (this.heartMap[index]) {
        var heartId = commentItem.likedList.filter(function (item) {
          return item.name == _this3.store.userInfo.name;
        })[0].id;
        deleteCommentHeart(heartId).then(function () {
          commentItem.likedList = commentItem.likedList.filter(function (n) {
            return n.name != _this3.store.userInfo.name;
          }); // this.store.comments.list = this.store.comments.list.slice();

          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(commentItem, loadingKey, false);
        });
        return;
      }

      heartComment(commentItem.id + '').then(function (result) {
        commentItem.likedList.push({
          id: result.id,
          name: result.user.login
        });
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(commentItem, loadingKey, false); // this.store.comments.list = this.store.comments.list.slice();
      });
    }
  }, {
    key: "handleReply",
    value: function handleReply(item) {
      if (!this.store.state.ifLogin) {
        return;
      }

      var content = ["@".concat(item.user.name)].concat(CommentBodyvue_type_script_lang_ts_toConsumableArray(item.body.split('\n'))).map(function (line) {
        return "> ".concat(line);
      }).join('\n') + '\n';
      var editor = this.$parent.$refs.editor;
      editor.showArea = true;
      this.$nextTick(function () {
        editor.areaContent = content;
        editor.$refs.editor.focus();
      });
    }
  }, {
    key: "heartMap",
    get: function get() {
      var _this4 = this;

      return this.store.comments.list.map(function (n) {
        return n.likedList.some(function (item) {
          return item.name == _this4.store.userInfo.name;
        });
      });
    }
  }]);

  return CommentBody;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Inject()], CommentBodyvue_type_script_lang_ts_CommentBody.prototype, "store", void 0);

CommentBodyvue_type_script_lang_ts_CommentBody = __decorate([vue_class_component_esm], CommentBodyvue_type_script_lang_ts_CommentBody);
/* harmony default export */ var CommentBodyvue_type_script_lang_ts_ = (CommentBodyvue_type_script_lang_ts_CommentBody);
// CONCATENATED MODULE: ./src/components/CommentBody.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommentBodyvue_type_script_lang_ts_ = (CommentBodyvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CommentBody.vue?vue&type=style&index=0&lang=scss&
var CommentBodyvue_type_style_index_0_lang_scss_ = __webpack_require__("d4bf");

// CONCATENATED MODULE: ./src/components/CommentBody.vue






/* normalize component */

var CommentBody_component = normalizeComponent(
  components_CommentBodyvue_type_script_lang_ts_,
  CommentBodyvue_type_template_id_52ab7a58_render,
  CommentBodyvue_type_template_id_52ab7a58_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_CommentBody = (CommentBody_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb1f476-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentPagination.vue?vue&type=template&id=f3301d2e&
var CommentPaginationvue_type_template_id_f3301d2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"comment-pagination"},[_vm._l((_vm.pageCount),function(item,index){return _c('li',{key:index,staticClass:"comment-page-item",class:{ disabled: index + 1 == _vm.store.comments.page },on:{"click":function($event){return _vm.fetchPage(index + 1)}}},[_vm._v(" "+_vm._s(index + 1)+" ")])}),_c('li',{staticClass:"comment-page-item",class:{ disabled: _vm.store.comments.page >= _vm.pageCount },on:{"click":_vm.nextPage}},[_vm._v(" Next page ")])],2)}
var CommentPaginationvue_type_template_id_f3301d2e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CommentPagination.vue?vue&type=template&id=f3301d2e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentPagination.vue?vue&type=script&lang=ts&
function CommentPaginationvue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CommentPaginationvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { CommentPaginationvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CommentPaginationvue_type_script_lang_ts_typeof(obj); }

function CommentPaginationvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommentPaginationvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommentPaginationvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommentPaginationvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommentPaginationvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function CommentPaginationvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (CommentPaginationvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return CommentPaginationvue_type_script_lang_ts_assertThisInitialized(self); }

function CommentPaginationvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CommentPaginationvue_type_script_lang_ts_getPrototypeOf(o) { CommentPaginationvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CommentPaginationvue_type_script_lang_ts_getPrototypeOf(o); }

function CommentPaginationvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CommentPaginationvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function CommentPaginationvue_type_script_lang_ts_setPrototypeOf(o, p) { CommentPaginationvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CommentPaginationvue_type_script_lang_ts_setPrototypeOf(o, p); }






var CommentPaginationvue_type_script_lang_ts_CommentPagination =
/*#__PURE__*/
function (_Vue) {
  CommentPaginationvue_type_script_lang_ts_inherits(CommentPagination, _Vue);

  function CommentPagination() {
    CommentPaginationvue_type_script_lang_ts_classCallCheck(this, CommentPagination);

    return CommentPaginationvue_type_script_lang_ts_possibleConstructorReturn(this, CommentPaginationvue_type_script_lang_ts_getPrototypeOf(CommentPagination).apply(this, arguments));
  }

  CommentPaginationvue_type_script_lang_ts_createClass(CommentPagination, [{
    key: "nextPage",
    value: function nextPage() {
      this.fetchPage(this.store.comments.page + 1);
    }
  }, {
    key: "fetchPage",
    value: function fetchPage(page) {
      if (this.store.comments.page === page || page <= 0 || page > this.pageCount) {
        return;
      }

      store.comments.page = page;
      gitComment.getCurrentPage();
    }
  }, {
    key: "pageCount",
    get: function get() {
      var _this$store$comments = this.store.comments,
          per_page = _this$store$comments.per_page,
          count = _this$store$comments.count;
      return Math.ceil(count / per_page) || 1;
    }
  }]);

  return CommentPagination;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Inject()], CommentPaginationvue_type_script_lang_ts_CommentPagination.prototype, "store", void 0);

CommentPaginationvue_type_script_lang_ts_CommentPagination = __decorate([vue_class_component_esm], CommentPaginationvue_type_script_lang_ts_CommentPagination);
/* harmony default export */ var CommentPaginationvue_type_script_lang_ts_ = (CommentPaginationvue_type_script_lang_ts_CommentPagination);
// CONCATENATED MODULE: ./src/components/CommentPagination.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommentPaginationvue_type_script_lang_ts_ = (CommentPaginationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CommentPagination.vue?vue&type=style&index=0&lang=scss&
var CommentPaginationvue_type_style_index_0_lang_scss_ = __webpack_require__("b5e3");

// CONCATENATED MODULE: ./src/components/CommentPagination.vue






/* normalize component */

var CommentPagination_component = normalizeComponent(
  components_CommentPaginationvue_type_script_lang_ts_,
  CommentPaginationvue_type_template_id_f3301d2e_render,
  CommentPaginationvue_type_template_id_f3301d2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_CommentPagination = (CommentPagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1eb1f476-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=188cccd2&
var CommentEditorvue_type_template_id_188cccd2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-editor"},[(!_vm.store.state.ifLogin && !_vm.store.userInfo.loading)?_c('span',{staticClass:"user-avatar user-avatar-github",domProps:{"innerHTML":_vm._s(_vm.githubIcon)}}):(_vm.store.userInfo.loading)?_c('span',{staticClass:"user-avatar user-avatar-loading",domProps:{"innerHTML":_vm._s(_vm.spinnerIcon)}}):_c('a',{attrs:{"href":_vm.store.userInfo.html_url,"target":"_blank"}},[_c('img',{staticClass:"user-avatar user-avatar-img",attrs:{"src":_vm.store.userInfo.avatar_url}})]),_c('div',{staticClass:"comment-editor-main"},[_c('div',{staticClass:"ce-header border-arrow"},[_c('div',{staticClass:"ce-tab-item",class:{ active: _vm.showArea },on:{"click":function($event){_vm.showArea = true}}},[_vm._v("Write")]),_c('div',{staticClass:"ce-tab-item",class:{ active: !_vm.showArea },on:{"click":function($event){_vm.showArea = false}}},[_vm._v("Preview")]),(!_vm.store.state.ifLogin)?_c('div',{staticClass:"login-link-btn"},[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.login}},[_vm._v("Login")]),_c('span',[_vm._v(" with Github")])]):_c('span',{staticClass:"logout-link",on:{"click":_vm.logOut}},[_vm._v("Logout")])]),_c('div',{staticClass:"ce-body"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.areaContent),expression:"areaContent"},{name:"show",rawName:"v-show",value:(_vm.showArea),expression:"showArea"}],ref:"editor",staticClass:"ce-textarea",attrs:{"disabled":!_vm.store.state.ifLogin || _vm.submitting,"placeholder":"Leave a comment."},domProps:{"value":(_vm.areaContent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.areaContent=$event.target.value}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showArea),expression:"!showArea"}],staticClass:"markdown-body ce-preview",domProps:{"innerHTML":_vm._s(_vm.markdownContent)}})]),_c('div',{staticClass:"ce-comment-row"},[_vm._m(0),_c('button',{staticClass:"ce-comment-btn",attrs:{"disabled":!_vm.store.state.ifLogin || _vm.submitting},on:{"click":_vm.comment}},[_vm._v(" "+_vm._s(_vm.submitting ? 'Submitting ...' : 'Comment')+" ")])]),_vm._m(1)])])}
var CommentEditorvue_type_template_id_188cccd2_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ce-link-wrap"},[_c('a',{staticClass:"ce-md-link",attrs:{"target":"_blank","href":"https://guides.github.com/features/mastering-markdown/"}},[_vm._v(" Markdown is supported ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ce-power-row"},[_c('span',[_vm._v("Powered by ")]),_c('a',{attrs:{"target":"_blank","href":"https://github.com/shalldie/vue-git-comment"}},[_vm._v("vue-git-comment")])])}]


// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=template&id=188cccd2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CommentEditor.vue?vue&type=script&lang=ts&
function CommentEditorvue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CommentEditorvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { CommentEditorvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CommentEditorvue_type_script_lang_ts_typeof(obj); }

function CommentEditorvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommentEditorvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommentEditorvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommentEditorvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommentEditorvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function CommentEditorvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (CommentEditorvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return CommentEditorvue_type_script_lang_ts_assertThisInitialized(self); }

function CommentEditorvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CommentEditorvue_type_script_lang_ts_getPrototypeOf(o) { CommentEditorvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CommentEditorvue_type_script_lang_ts_getPrototypeOf(o); }

function CommentEditorvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CommentEditorvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function CommentEditorvue_type_script_lang_ts_setPrototypeOf(o, p) { CommentEditorvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CommentEditorvue_type_script_lang_ts_setPrototypeOf(o, p); }








var CommentEditorvue_type_script_lang_ts_CommentEditor =
/*#__PURE__*/
function (_Vue) {
  CommentEditorvue_type_script_lang_ts_inherits(CommentEditor, _Vue);

  function CommentEditor() {
    var _this;

    CommentEditorvue_type_script_lang_ts_classCallCheck(this, CommentEditor);

    _this = CommentEditorvue_type_script_lang_ts_possibleConstructorReturn(this, CommentEditorvue_type_script_lang_ts_getPrototypeOf(CommentEditor).apply(this, arguments));
    _this.githubIcon = githubIcon;
    _this.spinnerIcon = spinnerIcon;
    _this.showArea = true; // 是否展示 textarea

    _this.submitting = false;
    _this.areaContent = '';
    _this.markdownContent = 'Nothing to preview';
    _this.cacheList = [];
    return _this;
  }

  CommentEditorvue_type_script_lang_ts_createClass(CommentEditor, [{
    key: "getCache",
    value: function getCache(content) {
      var item = this.cacheList.find(function (n) {
        return n.content === content;
      });

      if (item) {
        return item.preview;
      }
    }
  }, {
    key: "addCache",
    value: function addCache(content, preview) {
      this.cacheList.push({
        content: content,
        preview: preview
      });

      if (this.cacheList.length > 10) {
        this.cacheList.shift();
      }
    }
  }, {
    key: "login",
    value: function login() {
      gitComment.login();
    }
  }, {
    key: "logOut",
    value: function logOut() {
      gitComment.logOut();
    }
  }, {
    key: "comment",
    value: function comment() {
      var _this2 = this;

      if (this.areaContent.trim().length <= 0) {
        return;
      }

      this.submitting = true;
      createComment(this.areaContent).then(function () {
        _this2.areaContent = '';
        _this2.submitting = false;
        _this2.showArea = true;
        return gitComment.getCurrentPage(true);
      });
    }
  }, {
    key: "handleShowAreaChange",
    value: function handleShowAreaChange(ifShowArea) {
      var _this3 = this;

      this.areaContent = this.areaContent.trim();

      if (ifShowArea || !this.areaContent.length) {
        this.markdownContent = 'Nothing to preview';
        return;
      } // 尝试从缓存获取


      var cache = this.getCache(this.areaContent);

      if (cache) {
        this.markdownContent = cache;
        return;
      } // 从接口获取，并缓存


      this.markdownContent = 'Loading preview ...';
      getMarkDown(this.areaContent).then(function (body) {
        body = addTargetBlank(body);
        _this3.markdownContent = body;

        _this3.addCache(_this3.areaContent, body);
      });
    }
  }]);

  return CommentEditor;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Inject()], CommentEditorvue_type_script_lang_ts_CommentEditor.prototype, "store", void 0);

__decorate([Watch('showArea')], CommentEditorvue_type_script_lang_ts_CommentEditor.prototype, "handleShowAreaChange", null);

CommentEditorvue_type_script_lang_ts_CommentEditor = __decorate([vue_class_component_esm], CommentEditorvue_type_script_lang_ts_CommentEditor);
/* harmony default export */ var CommentEditorvue_type_script_lang_ts_ = (CommentEditorvue_type_script_lang_ts_CommentEditor);
// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_CommentEditorvue_type_script_lang_ts_ = (CommentEditorvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/CommentEditor.vue?vue&type=style&index=0&lang=scss&
var CommentEditorvue_type_style_index_0_lang_scss_ = __webpack_require__("6246");

// CONCATENATED MODULE: ./src/components/CommentEditor.vue






/* normalize component */

var CommentEditor_component = normalizeComponent(
  components_CommentEditorvue_type_script_lang_ts_,
  CommentEditorvue_type_template_id_188cccd2_render,
  CommentEditorvue_type_template_id_188cccd2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_CommentEditor = (CommentEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueGitComment/VueGitComment.vue?vue&type=script&lang=ts&
function VueGitCommentvue_type_script_lang_ts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { VueGitCommentvue_type_script_lang_ts_typeof = function _typeof(obj) { return typeof obj; }; } else { VueGitCommentvue_type_script_lang_ts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return VueGitCommentvue_type_script_lang_ts_typeof(obj); }

function VueGitCommentvue_type_script_lang_ts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VueGitCommentvue_type_script_lang_ts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VueGitCommentvue_type_script_lang_ts_createClass(Constructor, protoProps, staticProps) { if (protoProps) VueGitCommentvue_type_script_lang_ts_defineProperties(Constructor.prototype, protoProps); if (staticProps) VueGitCommentvue_type_script_lang_ts_defineProperties(Constructor, staticProps); return Constructor; }

function VueGitCommentvue_type_script_lang_ts_possibleConstructorReturn(self, call) { if (call && (VueGitCommentvue_type_script_lang_ts_typeof(call) === "object" || typeof call === "function")) { return call; } return VueGitCommentvue_type_script_lang_ts_assertThisInitialized(self); }

function VueGitCommentvue_type_script_lang_ts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function VueGitCommentvue_type_script_lang_ts_getPrototypeOf(o) { VueGitCommentvue_type_script_lang_ts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return VueGitCommentvue_type_script_lang_ts_getPrototypeOf(o); }

function VueGitCommentvue_type_script_lang_ts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) VueGitCommentvue_type_script_lang_ts_setPrototypeOf(subClass, superClass); }

function VueGitCommentvue_type_script_lang_ts_setPrototypeOf(o, p) { VueGitCommentvue_type_script_lang_ts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return VueGitCommentvue_type_script_lang_ts_setPrototypeOf(o, p); }










var VueGitCommentvue_type_script_lang_ts_VueGitComment =
/*#__PURE__*/
function (_Vue) {
  VueGitCommentvue_type_script_lang_ts_inherits(VueGitComment, _Vue);

  function VueGitComment() {
    var _this;

    VueGitCommentvue_type_script_lang_ts_classCallCheck(this, VueGitComment);

    _this = VueGitCommentvue_type_script_lang_ts_possibleConstructorReturn(this, VueGitCommentvue_type_script_lang_ts_getPrototypeOf(VueGitComment).apply(this, arguments));
    /**
     * 全局store
     */

    _this.store = store;
    return _this;
  }
  /**
   * 当配置更新，重新初始化组件
   */


  VueGitCommentvue_type_script_lang_ts_createClass(VueGitComment, [{
    key: "handleOptionsChange",
    value: function handleOptionsChange(options) {
      gitComment.init(options);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.options && this.handleOptionsChange(this.options);
    }
  }]);

  return VueGitComment;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop()], VueGitCommentvue_type_script_lang_ts_VueGitComment.prototype, "options", void 0);

__decorate([Provide()], VueGitCommentvue_type_script_lang_ts_VueGitComment.prototype, "store", void 0);

__decorate([Watch('options', {
  deep: true
})], VueGitCommentvue_type_script_lang_ts_VueGitComment.prototype, "handleOptionsChange", null);

VueGitCommentvue_type_script_lang_ts_VueGitComment = __decorate([vue_class_component_esm({
  components: {
    CommentHeader: components_CommentHeader,
    CommentBody: components_CommentBody,
    CommentPagination: components_CommentPagination,
    CommentEditor: components_CommentEditor
  }
})], VueGitCommentvue_type_script_lang_ts_VueGitComment);
/* harmony default export */ var VueGitCommentvue_type_script_lang_ts_ = (VueGitCommentvue_type_script_lang_ts_VueGitComment);
// CONCATENATED MODULE: ./src/VueGitComment/VueGitComment.vue?vue&type=script&lang=ts&
 /* harmony default export */ var VueGitComment_VueGitCommentvue_type_script_lang_ts_ = (VueGitCommentvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/VueGitComment/VueGitComment.vue?vue&type=style&index=0&lang=scss&
var VueGitCommentvue_type_style_index_0_lang_scss_ = __webpack_require__("2f30");

// CONCATENATED MODULE: ./src/VueGitComment/VueGitComment.vue






/* normalize component */

var VueGitComment_component = normalizeComponent(
  VueGitComment_VueGitCommentvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueGitComment_VueGitComment = (VueGitComment_component.exports);
// CONCATENATED MODULE: ./src/VueGitComment/index.ts


VueGitComment_VueGitComment['install'] = function (Vue) {
  Vue.component('vue-git-comment', VueGitComment_VueGitComment);
};

/* harmony default export */ var src_VueGitComment = (VueGitComment_VueGitComment);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_VueGitComment);



/***/ })

/******/ })["default"];