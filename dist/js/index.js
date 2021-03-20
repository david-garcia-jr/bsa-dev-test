"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/

  /*! no exports provided */

  /***/
  function srcJsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/navigation */ \"./src/js/lib/navigation.js\");\n/* harmony import */ var _lib_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_testimonials_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/testimonials-carousel */ \"./src/js/lib/testimonials-carousel.js\");\n/* harmony import */ var _lib_testimonials_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_testimonials_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");
    /***/
  },

  /***/
  "./src/js/lib/navigation.js":
  /*!**********************************!*\
    !*** ./src/js/lib/navigation.js ***!
    \**********************************/

  /*! no static exports found */

  /***/
  function srcJsLibNavigationJs(module, exports) {
    eval("(function () {\n  const siteNavigation = document.getElementById(\"navigation\");\n  const mobileNavTrigger = document.getElementById(\n    \"navigation-header-mobile-toggle\"\n  );\n  const mobileNavTriggerTitle = document.getElementById(\n    \"navigation-header-mobile-toggle-title\"\n  );\n  const submenuToggleButtons = document.querySelectorAll(\n    \".navigation-menu__submenu-toggle\"\n  );\n  let mobileMenuOpen = false;\n\n  // Mobile Menu Toggle Active\n  function toggleMobileActive() {\n    siteNavigation.classList.toggle(\"navigation--mobile-active\");\n    mobileMenuOpen = mobileMenuOpen ? false : true;\n    mobileNavTriggerTitle.innerHTML = mobileMenuOpen ? \"Close\" : \"Menu\";\n  }\n\n  // Toggle Submenu Elements\n  function toggleSubmenuActive(submenuParent) {\n    submenuParent.classList.toggle(\"navigation-menu__item--submenu-active\");\n  }\n\n  // Adding Event Listeners to Touch and Click Events\n  function setupClickEventListener(element, functionCall) {\n    if (typeof window.ontouchstart === \"undefined\") {\n      element.addEventListener(\"click\", functionCall);\n    } else {\n      element.addEventListener(\"touchstart\", functionCall);\n    }\n  }\n\n  // Set Sticky Navigation on Scroll\n  function setStickyNav(currentScroll) {\n    if (currentScroll > 0) {\n      siteNavigation.classList.add(\"navigation--sticky\");\n    } else {\n      siteNavigation.classList.remove(\"navigation--sticky\");\n    }\n  }\n\n  // Add Event Listener to Window to Check if Navigation Has Scrolled\n  function handleScroll() {\n    const currentScroll = document.scrollingElement\n      ? document.scrollingElement.scrollTop\n      : document.documentElement.scrollTop;\n\n    setStickyNav(currentScroll);\n  }\n\n  // Initialize Mobile Menu Toggle Event\n  setupClickEventListener(mobileNavTrigger, toggleMobileActive);\n\n  // Initialize Submenu Toggle Event\n  for (let i = 0; i < submenuToggleButtons.length; i++) {\n    setupClickEventListener(submenuToggleButtons[i], () => {\n      const submenuParent = submenuToggleButtons[i].closest(\n        \".navigation-menu__item--has-submenu\"\n      );\n      toggleSubmenuActive(submenuParent);\n    });\n  }\n\n  // Add Event Listener to Window to Check if Navigation Has Scrolled\n  window.addEventListener(\"scroll\", handleScroll);\n})();\n\n\n//# sourceURL=webpack:///./src/js/lib/navigation.js?");
    /***/
  },

  /***/
  "./src/js/lib/testimonials-carousel.js":
  /*!*********************************************!*\
    !*** ./src/js/lib/testimonials-carousel.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function srcJsLibTestimonialsCarouselJs(module, exports) {
    eval("(function () {\n\tconst testimonialsCarousel = document.getElementById('testimonials-carousel');\n\t// TODO: Implement Carousel\n})();\n\n\n//# sourceURL=webpack:///./src/js/lib/testimonials-carousel.js?");
    /***/
  }
  /******/

});