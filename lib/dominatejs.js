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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = (arg) => {
  if (typeof arg === "string") {
    arg = document.querySelectorAll(arg);
    return new DOMNodeCollection(arg);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
};

window.$create = (arg) => {
  return document.createElement(arg);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (HTMLElements) {
      this.HTMLElements = HTMLElements;
  }

  html(string) {
    if (string) {
      this.HTMLElements.forEach((el) => {
        el.innerHTML = string;
      });
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }

  empty() {
    this.HTMLElements.forEach((el) => {
      el.innerHTML = "";
    });
  }

  append(element) {
    this.HTMLElements.forEach((el) => {
      el.innerHTML += element.outerHTML;
    });
  }

  attr(attributeName, setting) {
    if (!setting) {
      const attrArr = [];
      this.HTMLElements.forEach((el) => {
        attrArr.push(el.getAttribute(attributeName));
      });
      return attrArr;
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(attributeName, setting);
      });
    }
  }

  addClass(classNameGiven) {
    this.HTMLElements.forEach((el) => {
      el.classList.add(classNameGiven);
    });
  }

  removeClass(classNameGiven) {
    if (!classNameGiven) {
      this.HTMLElements.forEach((el) => {
        el.classList = [];
      });
    } else {
      this.HTMLElements.forEach((el) => {
        el.classList.remove(classNameGiven);
      });
    }
  }

  children() {
    let childArr = [];

    this.HTMLElements.forEach((el) => {
      childArr = childArr.concat(el.children);
    });

    return new DOMNodeCollection(childArr);
  }

  parent() {
    const parentArr = [];

    this.HTMLElements.foreach(({ parentNode }) => {

      // if (!parentNode.visited) {
        parentArr.push(parentNode);
      //   parentNode.visited = true;
      // }
    });

    parentArr.forEach((node) => {
      node.visited = false;
    });
    
    return new DomNodeCollection(parentArr);
  }

}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);