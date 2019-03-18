webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../data */ "./data.js");
var _jsxFileName = "C:\\Users\\might\\Studies\\landing-pages\\portfolio\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isMenuOpen: false,
      lg: _data__WEBPACK_IMPORTED_MODULE_10__["default"].en,
      indexOfIntroOpened: -1,
      windowSmaller620px: false,
      scrollY: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleLanguage", function (e) {
      e.persist();

      _this.setState(function () {
        return {
          lg: _data__WEBPACK_IMPORTED_MODULE_10__["default"][e.target.value]
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "displayMenu", function () {
      _this.setState(function (_ref) {
        var isMenuOpen = _ref.isMenuOpen;
        return {
          isMenuOpen: !isMenuOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resize", function () {
      if (window.innerWidth < 620 && !_this.state.windowSmaller620px) {
        _this.trackScrollToSetOpenIntroBox();
      }

      if (window.innerWidth >= 620 && _this.state.windowSmaller620px) {
        _this.trackScrollToSetOpenIntroBox(false);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "trackScrollToSetOpenIntroBox", function () {
      var track = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var intros = _toConsumableArray(document.querySelectorAll('.intro'));

      var mapScrollYs = intros.map(function (intro) {
        return {
          top: intro.getBoundingClientRect().top + window.scrollY,
          bottom: intro.getBoundingClientRect().bottom + window.scrollY
        };
      });

      _this.setIndexOfIntroOpened(mapScrollYs); //bellow: we need a named function so it is removable from listener event
      // we remove if window resizes to a width where 'scroll' event is no longer wanted to be listened


      var that = _assertThisInitialized(_assertThisInitialized(_this));

      function setIndex() {
        var intros = _toConsumableArray(document.querySelectorAll('.intro')); // why add window.scrollY: so we get el position relative to the top, indepedent of the initial page scroll
        // afterwards we use only window.scrollY to compare these values


        var mapScrollYs = intros.map(function (intro) {
          return {
            top: intro.getBoundingClientRect().top + window.scrollY,
            bottom: intro.getBoundingClientRect().bottom + window.scrollY
          };
        });
        that.setIndexOfIntroOpened.call(that, mapScrollYs);
      } // verifies if 'scroll' event listener should be added or not


      if (!track) {
        window.removeEventListener('scroll', setIndex);

        _this.setState(function () {
          return {
            windowSmaller620px: false
          };
        });
      } else {
        window.addEventListener('scroll', setIndex);

        _this.setState(function () {
          return {
            windowSmaller620px: true
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setIndexOfIntroOpened", function (mapScrollYs) {
      // here we find if an element is on a frame where should be displayed, hence animating its intro child tag
      var openIntroIndex = mapScrollYs.findIndex(function (scrollY) {
        return window.scrollY > scrollY.top - window.innerHeight / 2 && window.scrollY < scrollY.bottom - window.innerHeight / 2;
      }); // we check if the one found is different from the value from state

      if (openIntroIndex !== _this.state.indexOfIntroOpened) {
        _this.setState(function () {
          return {
            indexOfIntroOpened: openIntroIndex
          };
        });
      }
    });

    _this.storeScrollY = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.throttle(_this.storeScrollY.bind(_assertThisInitialized(_assertThisInitialized(_this))), 100);
    return _this;
  }

  _createClass(App, [{
    key: "storeScrollY",
    value: function storeScrollY() {
      {
        if (window.scrollY !== this.state.scrollY) this.setState(function () {
          return {
            scrollY: window.scrollY
          };
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var language = localStorage.getItem('lg');

      if (language) {
        this.setState(function () {
          return {
            lg: _data__WEBPACK_IMPORTED_MODULE_10__["default"][language]
          };
        });
      }

      if (typeof window === 'undefined') {
        return;
      }

      this.storeScrollY();
      window.addEventListener("scroll", this.storeScrollY);

      window.onload = function () {
        if (window.innerWidth < 620) {
          _this2.trackScrollToSetOpenIntroBox();
        } //on resize: verifies if boundary width is passed. if so trackScroll is invoked


        window.addEventListener('resize', _this2.resize);
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.storeScrollY);
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "render",
    value: function render() {
      var lg = this.state.lg;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Rafael Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        displayMenu: this.displayMenu,
        isMenuOpen: this.state.isMenuOpen,
        text: lg.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main ".concat(this.state.isMenuOpen ? 'main-animate' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_5__["default"], {
        toggleLanguage: this.toggleLanguage,
        text: lg.landing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: lg.about,
        isIntroOpen: this.state.indexOfIntroOpened === 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Skills__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: lg.skills,
        isIntroOpen: this.state.indexOfIntroOpened === 1,
        scrollY: this.state.scrollY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: lg.projects,
        isIntroOpen: this.state.indexOfIntroOpened === 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: lg.footer,
        isMenuOpen: this.state.isMenuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.1159fd83964128d1294b.hot-update.js.map