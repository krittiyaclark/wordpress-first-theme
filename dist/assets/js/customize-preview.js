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
wp.customize('_themename_display_author_info', function (value) {
  value.bind(function (to) {
    if (to) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post-author').show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post-author').hide();
    }
  });
});
wp.customize('_themename_accent_colour', function (value) {
  value.bind(function (to) {
    var inline_css = "";
    var inline_css_obj = _themename['inline-css'];

    for (var selector in inline_css_obj) {
      inline_css += "".concat(selector, " {");

      for (var prop in inline_css_obj[selector]) {
        var val = inline_css_obj[selector][prop];
        inline_css += "".concat(prop, ": ").concat(wp.customize(val).get());
      }

      inline_css += "}";
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_themename-stylesheet-inline-css').html(inline_css);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwiJCIsImh0bWwiLCJzaG93IiwiaGlkZSIsImlubGluZV9jc3MiLCJpbmxpbmVfY3NzX29iaiIsIl90aGVtZW5hbWUiLCJzZWxlY3RvciIsInByb3AiLCJ2YWwiLCJnZXQiLCJzdHJpcF90YWdzIiwiaW5wdXQiLCJhbGxvd2VkIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImpvaW4iLCJ0YWdzIiwiY29tbWVudHNBbmRQaHBUYWdzIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxFQUFFLENBQUNDLFNBQUgsQ0FBYyxVQUFkLEVBQTBCLFVBQUNDLEtBQUQsRUFBVztBQUNqQ0EsT0FBSyxDQUFDQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCQyxpREFBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLElBQXpCLENBQThCRixFQUE5QjtBQUNILEdBRkQ7QUFHSCxDQUpEO0FBTUFKLEVBQUUsQ0FBQ0MsU0FBSCxDQUFjLGdDQUFkLEVBQWdELFVBQUNDLEtBQUQsRUFBVztBQUN2REEsT0FBSyxDQUFDQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCLFFBQUdBLEVBQUgsRUFBTztBQUNIQyxtREFBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JFLElBQXBCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hGLG1EQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsSUFBcEI7QUFDSDtBQUNKLEdBTkQ7QUFPSCxDQVJEO0FBVUFSLEVBQUUsQ0FBQ0MsU0FBSCxDQUFjLDBCQUFkLEVBQTBDLFVBQUNDLEtBQUQsRUFBVztBQUNqREEsT0FBSyxDQUFDQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCLFFBQUlLLFVBQVUsS0FBZDtBQUNBLFFBQUlDLGNBQWMsR0FBR0MsVUFBVSxDQUFDLFlBQUQsQ0FBL0I7O0FBQ0MsU0FBSSxJQUFJQyxRQUFSLElBQW9CRixjQUFwQixFQUFvQztBQUNqQ0QsZ0JBQVUsY0FBT0csUUFBUCxPQUFWOztBQUNJLFdBQUksSUFBSUMsSUFBUixJQUFnQkgsY0FBYyxDQUFDRSxRQUFELENBQTlCLEVBQTBDO0FBQ3RDLFlBQUlFLEdBQUcsR0FBR0osY0FBYyxDQUFDRSxRQUFELENBQWQsQ0FBeUJDLElBQXpCLENBQVY7QUFDQUosa0JBQVUsY0FBT0ksSUFBUCxlQUFnQmIsRUFBRSxDQUFDQyxTQUFILENBQWFhLEdBQWIsRUFBa0JDLEdBQWxCLEVBQWhCLENBQVY7QUFDSDs7QUFDTE4sZ0JBQVUsT0FBVjtBQUNIOztBQUNESixpREFBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNDLElBQXZDLENBQTRDRyxVQUE1QztBQUNILEdBWkQ7QUFhSCxDQWREO0FBZ0JBVCxFQUFFLENBQUNDLFNBQUgsQ0FBYyxzQkFBZCxFQUFzQyxVQUFDQyxLQUFELEVBQVc7QUFDN0NBLE9BQUssQ0FBQ0MsSUFBTixDQUFZLFVBQUNDLEVBQUQsRUFBUTtBQUNoQkMsaURBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCQyxJQUF4QixDQUE2QlUsc0VBQVUsQ0FBQ1osRUFBRCxFQUFJLEtBQUosQ0FBdkM7QUFDSCxHQUZEO0FBR0gsQ0FKRCxFOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQSxJQUFNWSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDbkNBLFNBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQ0EsT0FBTyxJQUFJLEVBQVosSUFBa0IsRUFBbkIsRUFDVkMsV0FEVSxHQUVWQyxLQUZVLENBRUosbUJBRkksS0FFb0IsRUFGckIsRUFHVEMsSUFIUyxDQUdKLEVBSEksQ0FBVixDQURtQyxDQUl4Qjs7QUFDWCxNQUFJQyxJQUFJLEdBQUcsZ0NBQVg7QUFBQSxNQUNBQyxrQkFBa0IsR0FBRywwQ0FEckI7QUFFQSxTQUFPTixLQUFLLENBQUNPLE9BQU4sQ0FBY0Qsa0JBQWQsRUFBa0MsRUFBbEMsRUFDTkMsT0FETSxDQUNFRixJQURGLEVBQ1EsVUFBU0csRUFBVCxFQUFhQyxFQUFiLEVBQWlCO0FBQzlCLFdBQU9SLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQixNQUFNRCxFQUFFLENBQUNQLFdBQUgsRUFBTixHQUF5QixHQUF6QyxJQUFnRCxDQUFDLENBQWpELEdBQXFETSxFQUFyRCxHQUEwRCxFQUFqRTtBQUNELEdBSE0sQ0FBUDtBQUlILENBWEQ7O0FBYWVULHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsd0IiLCJmaWxlIjoiY3VzdG9taXplLXByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHN0cmlwX3RhZ3MgZnJvbSAnLi9oZWxwZXJzL3N0cmlwLXRhZ3MuanMnO1xuXG53cC5jdXN0b21pemUoICdibG9nbmFtZScsICh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlLmJpbmQoICh0bykgPT4ge1xuICAgICAgICAkKCcuYy1oZWFkZXJfX2Jsb2duYW1lJykuaHRtbCh0byk7XG4gICAgfSApXG59KVxuXG53cC5jdXN0b21pemUoICdfdGhlbWVuYW1lX2Rpc3BsYXlfYXV0aG9yX2luZm8nLCAodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcbiAgICAgICAgaWYodG8pIHtcbiAgICAgICAgICAgICQoJy5jLXBvc3QtYXV0aG9yJykuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9IClcbn0pXG5cbndwLmN1c3RvbWl6ZSggJ190aGVtZW5hbWVfYWNjZW50X2NvbG91cicsICh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlLmJpbmQoICh0bykgPT4ge1xuICAgICAgICBsZXQgaW5saW5lX2NzcyA9IGBgO1xuICAgICAgICBsZXQgaW5saW5lX2Nzc19vYmogPSBfdGhlbWVuYW1lWydpbmxpbmUtY3NzJ107XG4gICAgICAgICBmb3IobGV0IHNlbGVjdG9yIGluIGlubGluZV9jc3Nfb2JqKSB7XG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3NlbGVjdG9yfSB7YDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb3AgaW4gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYCR7cHJvcH06ICR7d3AuY3VzdG9taXplKHZhbCkuZ2V0KCl9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGB9YDtcbiAgICAgICAgfVxuICAgICAgICAkKCcjX3RoZW1lbmFtZS1zdHlsZXNoZWV0LWlubGluZS1jc3MnKS5odG1sKGlubGluZV9jc3MpO1xuICAgIH0gKVxufSlcblxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9zaXRlX2luZm8nLCAodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcbiAgICAgICAgJCgnLmMtc2l0ZS1pbmZvX190ZXh0JykuaHRtbChzdHJpcF90YWdzKHRvLCc8YT4nKSk7XG4gICAgfSApXG59KSIsImNvbnN0IHN0cmlwX3RhZ3MgPSAoaW5wdXQsIGFsbG93ZWQpID0+IHtcbiAgICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJylcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSlcbiAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcbiAgICB2YXIgdGFncyA9IC88XFwvPyhbYS16XVthLXowLTldKilcXGJbXj5dKj4vZ2ksXG4gICAgY29tbWVudHNBbmRQaHBUYWdzID0gLzwhLS1bXFxzXFxTXSo/LS0+fDxcXD8oPzpwaHApP1tcXHNcXFNdKj9cXD8+L2dpO1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpXG4gICAgLnJlcGxhY2UodGFncywgZnVuY3Rpb24oJDAsICQxKSB7XG4gICAgICByZXR1cm4gYWxsb3dlZC5pbmRleE9mKCc8JyArICQxLnRvTG93ZXJDYXNlKCkgKyAnPicpID4gLTEgPyAkMCA6ICcnO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpcF90YWdzOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=