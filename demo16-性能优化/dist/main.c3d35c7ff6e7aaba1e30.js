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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(10);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/react/index.js from dll-reference react
var reactfrom_dll_reference_react = __webpack_require__(0);
var reactfrom_dll_reference_react_default = /*#__PURE__*/__webpack_require__.n(reactfrom_dll_reference_react);

// EXTERNAL MODULE: delegated ./node_modules/react-dom/index.js from dll-reference react
var react_domfrom_dll_reference_react = __webpack_require__(2);
var react_domfrom_dll_reference_react_default = /*#__PURE__*/__webpack_require__.n(react_domfrom_dll_reference_react);

// CONCATENATED MODULE: ./src/Child.jsx


class Child_Child extends reactfrom_dll_reference_react_default.a.Component {
  render() {
    return reactfrom_dll_reference_react_default.a.createElement("div", null, "this is Child");
  }

}

/* harmony default export */ var src_Child = (Child_Child);
// EXTERNAL MODULE: delegated ./node_modules/lodash/lodash.js from dll-reference lodash
var lodashfrom_dll_reference_lodash = __webpack_require__(3);
var lodashfrom_dll_reference_lodash_default = /*#__PURE__*/__webpack_require__.n(lodashfrom_dll_reference_lodash);

// CONCATENATED MODULE: ./src/index.js





class src_App extends reactfrom_dll_reference_react_default.a.Component {
  render() {
    return reactfrom_dll_reference_react_default.a.createElement("div", null, reactfrom_dll_reference_react_default.a.createElement("div", null, "this is App ,", lodashfrom_dll_reference_lodash_default.a.join(['a', 'b'], '*')), reactfrom_dll_reference_react_default.a.createElement(src_Child, null));
  }

}

react_domfrom_dll_reference_react_default.a.render(reactfrom_dll_reference_react_default.a.createElement(src_App, null), document.getElementById('root'));

/***/ })
/******/ ]);