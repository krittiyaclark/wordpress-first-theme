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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/customize-preview.js":
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_strip_tags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/strip-tags.js */ "./src/assets/js/helpers/strip-tags.js");


wp.customize('blogname', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-header__blogname').html(to);
  });
});
wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-site-info__text').html(Object(_helpers_strip_tags_js__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});

/***/ }),

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var strip_tags = function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (strip_tags);

/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./src/assets/js/customize-preview.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/customtheme/wp-content/themes/customtheme/src/assets/js/customize-preview.js */"./src/assets/js/customize-preview.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwiJCIsImh0bWwiLCJzdHJpcF90YWdzIiwiaW5wdXQiLCJhbGxvd2VkIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImpvaW4iLCJ0YWdzIiwiY29tbWVudHNBbmRQaHBUYWdzIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxFQUFFLENBQUNDLFNBQUgsQ0FBYyxVQUFkLEVBQTBCLFVBQUNDLEtBQUQsRUFBVztBQUNqQ0EsT0FBSyxDQUFDQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCQyxpREFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLElBQXpCLENBQThCRixFQUE5QjtBQUNILEdBRkQ7QUFHSCxDQUpEO0FBTUFKLEVBQUUsQ0FBQ0MsU0FBSCxDQUFjLHNCQUFkLEVBQXNDLFVBQUNDLEtBQUQsRUFBVztBQUM3Q0EsT0FBSyxDQUFDQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCQyxpREFBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLElBQXhCLENBQTZCQyxzRUFBVSxDQUFDSCxFQUFELEVBQUksS0FBSixDQUF2QztBQUNILEdBRkQ7QUFHSCxDQUpELEU7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ25DQSxTQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUNBLE9BQU8sSUFBSSxFQUFaLElBQWtCLEVBQW5CLEVBQ1ZDLFdBRFUsR0FFVkMsS0FGVSxDQUVKLG1CQUZJLEtBRW9CLEVBRnJCLEVBR1RDLElBSFMsQ0FHSixFQUhJLENBQVYsQ0FEbUMsQ0FJeEI7O0FBQ1gsTUFBSUMsSUFBSSxHQUFHLGdDQUFYO0FBQUEsTUFDQUMsa0JBQWtCLEdBQUcsMENBRHJCO0FBRUEsU0FBT04sS0FBSyxDQUFDTyxPQUFOLENBQWNELGtCQUFkLEVBQWtDLEVBQWxDLEVBQ05DLE9BRE0sQ0FDRUYsSUFERixFQUNRLFVBQVNHLEVBQVQsRUFBYUMsRUFBYixFQUFpQjtBQUM5QixXQUFPUixPQUFPLENBQUNTLE9BQVIsQ0FBZ0IsTUFBTUQsRUFBRSxDQUFDUCxXQUFILEVBQU4sR0FBeUIsR0FBekMsSUFBZ0QsQ0FBQyxDQUFqRCxHQUFxRE0sRUFBckQsR0FBMEQsRUFBakU7QUFDRCxHQUhNLENBQVA7QUFJSCxDQVhEOztBQWFlVCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLHdCIiwiZmlsZSI6ImN1c3RvbWl6ZS1wcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBzdHJpcF90YWdzIGZyb20gJy4vaGVscGVycy9zdHJpcC10YWdzLmpzJztcblxud3AuY3VzdG9taXplKCAnYmxvZ25hbWUnLCAodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcbiAgICAgICAgJCgnLmMtaGVhZGVyX19ibG9nbmFtZScpLmh0bWwodG8pO1xuICAgIH0gKVxufSlcblxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9zaXRlX2luZm8nLCAodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcbiAgICAgICAgJCgnLmMtc2l0ZS1pbmZvX190ZXh0JykuaHRtbChzdHJpcF90YWdzKHRvLCc8YT4nKSk7XG4gICAgfSApXG59KSIsImNvbnN0IHN0cmlwX3RhZ3MgPSAoaW5wdXQsIGFsbG93ZWQpID0+IHtcbiAgICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJylcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSlcbiAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcbiAgICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2ksXG4gICAgY29tbWVudHNBbmRQaHBUYWdzID0gLzwhLS1bXFxzXFxTXSo/LS0+fDxcXD8oPzpwaHApP1tcXHNcXFNdKj9cXD8+L2dpO1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpXG4gICAgLnJlcGxhY2UodGFncywgZnVuY3Rpb24oJDAsICQxKSB7XG4gICAgICByZXR1cm4gYWxsb3dlZC5pbmRleE9mKCc8JyArICQxLnRvTG93ZXJDYXNlKCkgKyAnPicpID4gLTEgPyAkMCA6ICcnO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpcF90YWdzOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=