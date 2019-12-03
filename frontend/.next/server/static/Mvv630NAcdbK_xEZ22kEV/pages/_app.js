module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n      orders {\n        id\n      }\n      cart {\n        id\n        quantity\n        item {\n          id\n          price\n          image\n          title\n          description\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return props.children(payload);
  });
};

//whenever you use it the only thing you must pass as a child is going to be a function
/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-1tc2ru8-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://mehko-next-prod.herokuapp.com/";
var perPage = 4;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TO_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart() {
    _classCallCheck(this, AddToCart);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddToCart).apply(this, arguments));
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: ADD_TO_CART_MUTATION,
        variables: {
          id: id
        },
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_3__[/* CURRENT_USER_QUERY */ "a"]
        }]
      }, function (addToCart, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          disabled: loading,
          onClick: addToCart
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " Add", loading ? 'ing' : '', " to Cart \uD83D\uDED2 "));
      });
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["b"] = (AddToCart);


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "r7a9xa-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["a"] = (SickButton);

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-adopt");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(22);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(8);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(17);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(14);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-1hj2obo-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;color:", ";font-weight:800;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:\"\";width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:\"\";width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var styles_NavStyles = (NavStyles);
// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/Signout.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SIGN_OUT_MUTATION = external_graphql_tag_default()(_templateObject());

var Signout_Signout = function Signout(props) {
  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: User["a" /* CURRENT_USER_QUERY */]
    }]
  }, function (signout) {
    return external_react_default.a.createElement("button", {
      onClick: signout
    }, "Sign Out");
  });
};

/* harmony default export */ var components_Signout = (Signout_Signout);
// EXTERNAL MODULE: external "react-adopt"
var external_react_adopt_ = __webpack_require__(25);

// CONCATENATED MODULE: ./components/styles/CartStyles.js

var CartStyles = external_styled_components_default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "gdxrsx-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:35%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:0rem;padding-bottom:0rem;p{text-align:right;}}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:flex;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{flex:1 21%;margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ var styles_CartStyles = (CartStyles);
// CONCATENATED MODULE: ./components/styles/Supreme.js

var Supreme = external_styled_components_default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-3zd7pr-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ var styles_Supreme = (Supreme);
// CONCATENATED MODULE: ./components/styles/CloseButton.js

var CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "oxgx8g-0"
})(["background:black;color:white;font-size:4rem;border:0;position:absolute;z-index:2;right:0;text-align:center;justify-content:center;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./components/styles/SickButton.js
var SickButton = __webpack_require__(18);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(6);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(10);

// CONCATENATED MODULE: ./components/RemoveFromCart.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function RemoveFromCart_templateObject() {
  var data = RemoveFromCart_taggedTemplateLiteral(["\n  mutation removeFromCart($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

  RemoveFromCart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function RemoveFromCart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var REMOVE_FROM_CART_MUTATION = external_graphql_tag_default()(RemoveFromCart_templateObject());
var BigButton = external_styled_components_default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-9669mv-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var RemoveFromCart_RemoveFromCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RemoveFromCart, _React$Component);

  function RemoveFromCart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RemoveFromCart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RemoveFromCart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      //cache is the apollo cache, payload is the dump of information that's returned from the server once it's done
      //1. read the cache
      var data = cache.readQuery({
        query: User["a" /* CURRENT_USER_QUERY */]
      }); // console.log(data);
      //2. remove that item from the cart

      var cartItemId = payload.data.removeFromCart.id;
      data.me.cart = data.me.cart.filter(function (cartItem) {
        return cartItem.id !== cartItemId;
      }); //3. write it back to the cache

      cache.writeQuery({
        query: User["a" /* CURRENT_USER_QUERY */],
        data: data
      });
    });

    return _this;
  }

  _createClass(RemoveFromCart, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: REMOVE_FROM_CART_MUTATION,
        variables: {
          id: this.props.id
        } // refetchQueries={[{ query: CURRENT_USER_QUERY }]} too slow, use cache instead
        ,
        update: this.update,
        optimisticResponse: {
          //give it what you think the server will responde with = optimisticResponse making feedback almost instantenous without haveing to wait for server
          __typename: 'Mutation',
          //have to give typename of what type we have. here we're assuming it's going to return a mutation
          removeFromCart: {
            //inside that mutation, we have assume it return a removeFromcart object
            __typename: 'CartItem',
            id: this.props.id //assume it's going to return an id with item was removed id.

          }
        }
      }, function (removeFromCart, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return external_react_default.a.createElement(BigButton, {
          disabled: loading,
          onClick: function onClick() {
            removeFromCart().catch(function (err) {
              return alert(err.message);
            });
          },
          title: "Delete Item"
        }, "\u24CD");
      });
    }
  }]);

  return RemoveFromCart;
}(external_react_default.a.Component);

/* harmony default export */ var components_RemoveFromCart = (RemoveFromCart_RemoveFromCart);

// EXTERNAL MODULE: ./components/AddToCart.js
var AddToCart = __webpack_require__(15);

// CONCATENATED MODULE: ./components/AddOne.js
function AddOne_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AddOne_typeof = function _typeof(obj) { return typeof obj; }; } else { AddOne_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AddOne_typeof(obj); }

function AddOne_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AddOne_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AddOne_createClass(Constructor, protoProps, staticProps) { if (protoProps) AddOne_defineProperties(Constructor.prototype, protoProps); if (staticProps) AddOne_defineProperties(Constructor, staticProps); return Constructor; }

function AddOne_possibleConstructorReturn(self, call) { if (call && (AddOne_typeof(call) === "object" || typeof call === "function")) { return call; } return AddOne_assertThisInitialized(self); }

function AddOne_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AddOne_getPrototypeOf(o) { AddOne_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AddOne_getPrototypeOf(o); }

function AddOne_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AddOne_setPrototypeOf(subClass, superClass); }

function AddOne_setPrototypeOf(o, p) { AddOne_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AddOne_setPrototypeOf(o, p); }







var AddOne_AddOne =
/*#__PURE__*/
function (_React$Component) {
  AddOne_inherits(AddOne, _React$Component);

  function AddOne() {
    AddOne_classCallCheck(this, AddOne);

    return AddOne_possibleConstructorReturn(this, AddOne_getPrototypeOf(AddOne).apply(this, arguments));
  }

  AddOne_createClass(AddOne, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      console.log(this.props);
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: AddToCart["a" /* ADD_TO_CART_MUTATION */],
        variables: {
          id: id
        },
        refetchQueries: [{
          query: User["a" /* CURRENT_USER_QUERY */]
        }]
      }, function (addToCart, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return external_react_default.a.createElement("button", {
          disabled: loading,
          onClick: addToCart
        }, "\uFF0B");
      });
    }
  }]);

  return AddOne;
}(external_react_default.a.Component);

/* harmony default export */ var components_AddOne = (AddOne_AddOne);
// CONCATENATED MODULE: ./components/RemoveOne.js
function RemoveOne_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RemoveOne_typeof = function _typeof(obj) { return typeof obj; }; } else { RemoveOne_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RemoveOne_typeof(obj); }

function RemoveOne_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RemoveOne_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RemoveOne_createClass(Constructor, protoProps, staticProps) { if (protoProps) RemoveOne_defineProperties(Constructor.prototype, protoProps); if (staticProps) RemoveOne_defineProperties(Constructor, staticProps); return Constructor; }

function RemoveOne_possibleConstructorReturn(self, call) { if (call && (RemoveOne_typeof(call) === "object" || typeof call === "function")) { return call; } return RemoveOne_assertThisInitialized(self); }

function RemoveOne_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RemoveOne_getPrototypeOf(o) { RemoveOne_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RemoveOne_getPrototypeOf(o); }

function RemoveOne_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RemoveOne_setPrototypeOf(subClass, superClass); }

function RemoveOne_setPrototypeOf(o, p) { RemoveOne_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RemoveOne_setPrototypeOf(o, p); }

function RemoveOne_templateObject() {
  var data = RemoveOne_taggedTemplateLiteral(["\n  mutation removeOne($id: ID!) {\n    removeOne(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);

  RemoveOne_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function RemoveOne_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var REMOVE_ONE_MUTATION = external_graphql_tag_default()(RemoveOne_templateObject());

var RemoveOne_RemoveOne =
/*#__PURE__*/
function (_React$Component) {
  RemoveOne_inherits(RemoveOne, _React$Component);

  function RemoveOne() {
    RemoveOne_classCallCheck(this, RemoveOne);

    return RemoveOne_possibleConstructorReturn(this, RemoveOne_getPrototypeOf(RemoveOne).apply(this, arguments));
  }

  RemoveOne_createClass(RemoveOne, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: REMOVE_ONE_MUTATION,
        variables: {
          id: id
        },
        refetchQueries: [{
          query: User["a" /* CURRENT_USER_QUERY */]
        }]
      }, function (removeOne, _ref) {
        var loading = _ref.loading;
        return external_react_default.a.createElement("button", {
          disabled: loading,
          onClick: removeOne
        }, "\uFF0D");
      });
    }
  }]);

  return RemoveOne;
}(external_react_default.a.Component);

/* harmony default export */ var components_RemoveOne = (RemoveOne_RemoveOne);
// CONCATENATED MODULE: ./components/CartItem.js








var CartItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "nfpkeu-0"
})(["padding:0.7rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{border-radius:25px;margin-right:10px;}h3{margin-left:5%;}p{margin-left:5%;color:gray;}.delete{grid-column-end:five;}.addremove{justify-self:start;}button{cursor:pointer;}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem_CartItem = function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  //1. check if that item exists
  if (!cartItem.item) return external_react_default.a.createElement(CartItemStyles, null, "This Item has been removed", external_react_default.a.createElement(components_RemoveFromCart, {
    id: cartItem.id
  }));
  return external_react_default.a.createElement(CartItemStyles, null, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/item',
      query: {
        id: cartItem.item.id
      }
    }
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("img", {
    width: "100",
    src: cartItem.item.image,
    alt: cartItem.item.title
  }))), external_react_default.a.createElement("div", {
    className: "cart-item-details"
  }, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/item',
      query: {
        id: cartItem.item.id
      }
    }
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("h3", null, cartItem.item.title))), external_react_default.a.createElement("p", null, external_react_default.a.createElement("em", null, cartItem.quantity, " @ ", Object(formatMoney["a" /* default */])(cartItem.item.price), " each"), ' ', "= ", Object(formatMoney["a" /* default */])(cartItem.item.price * cartItem.quantity))), external_react_default.a.createElement("div", {
    className: "addremove"
  }, external_react_default.a.createElement(components_RemoveOne, {
    id: cartItem.item.id
  }), external_react_default.a.createElement(components_AddOne, {
    id: cartItem.item.id
  })), external_react_default.a.createElement("div", {
    className: "delete"
  }, external_react_default.a.createElement(components_RemoveFromCart, {
    id: cartItem.id
  })));
};

/* harmony default export */ var components_CartItem = (CartItem_CartItem);
// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}
// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__(26);
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Payment.js


function Payment_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Payment_typeof = function _typeof(obj) { return typeof obj; }; } else { Payment_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Payment_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Payment_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Payment_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Payment_createClass(Constructor, protoProps, staticProps) { if (protoProps) Payment_defineProperties(Constructor.prototype, protoProps); if (staticProps) Payment_defineProperties(Constructor, staticProps); return Constructor; }

function Payment_possibleConstructorReturn(self, call) { if (call && (Payment_typeof(call) === "object" || typeof call === "function")) { return call; } return Payment_assertThisInitialized(self); }

function Payment_getPrototypeOf(o) { Payment_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Payment_getPrototypeOf(o); }

function Payment_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Payment_setPrototypeOf(subClass, superClass); }

function Payment_setPrototypeOf(o, p) { Payment_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Payment_setPrototypeOf(o, p); }

function Payment_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Payment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Payment_templateObject() {
  var data = Payment_taggedTemplateLiteral(["\n  mutation createOrder($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

  Payment_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Payment_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var CREATE_ORDER_MUTATION = external_graphql_tag_default()(Payment_templateObject());

function totalItems(cart) {
  return cart.reduce(function (tally, cartItem) {
    return tally + cartItem.quantity;
  }, 0);
}

var Payment_Payment =
/*#__PURE__*/
function (_Component) {
  Payment_inherits(Payment, _Component);

  function Payment() {
    var _getPrototypeOf2;

    var _this;

    Payment_classCallCheck(this, Payment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Payment_possibleConstructorReturn(this, (_getPrototypeOf2 = Payment_getPrototypeOf(Payment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Payment_defineProperty(Payment_assertThisInitialized(Payment_assertThisInitialized(_this)), "onToken",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(res, createOrder) {
        var order;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                external_nprogress_default.a.start();
                console.log('On token called');
                console.log(res);
                console.log(res.id); // manually call the mutation once we have the stripe token

                _context.next = 6;
                return createOrder({
                  variables: {
                    token: res.id
                  }
                }).catch(function (err) {
                  alert(err.message);
                });

              case 6:
                order = _context.sent;
                // console.log(order)
                router_default.a.push({
                  pathname: '/order',
                  query: {
                    id: order.data.createOrder.id
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Payment_createClass(Payment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(User["b" /* default */], null, function (_ref2) {
        var me = _ref2.data.me,
            loading = _ref2.loading;
        if (loading) return null;
        return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
          mutation: CREATE_ORDER_MUTATION,
          refetchQueries: [{
            query: User["a" /* CURRENT_USER_QUERY */]
          }]
        }, function (createOrder) {
          return external_react_default.a.createElement(external_react_stripe_checkout_default.a, {
            amount: calcTotalPrice(me.cart),
            name: "Mehko LLC",
            description: "Order of ".concat(totalItems(me.cart)),
            image: me.cart.length && me.cart[0].item && me.cart[0].item.image //won't return image if no 1st item.
            ,
            stripeKey: "pk_test_q84Z3HocMGPwVyZprfY0UpJn00BIVcU0X9",
            currency: "USD",
            email: me.email,
            token: function token(res) {
              return _this2.onToken(res, createOrder);
            } //reason not just "this.onToken" is b/c we will be passing a mutation

          }, _this2.props.children);
        });
      });
    }
  }]);

  return Payment;
}(external_react_["Component"]);

/* harmony default export */ var components_Payment = (Payment_Payment);

// CONCATENATED MODULE: ./components/Cart.js
function _templateObject3() {
  var data = Cart_taggedTemplateLiteral(["\n  mutation {\n    closeCart @client\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Cart_taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Cart_templateObject() {
  var data = Cart_taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n    # //this is client side data, don't go to server for this data, grab it directly from the apollo store\n  }\n"]);

  Cart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Cart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var LOCAL_STATE_QUERY = external_graphql_tag_default()(Cart_templateObject());
var TOGGLE_CART_MUTATION = external_graphql_tag_default()(_templateObject2());
var CLOSE_CART_MUTATION = external_graphql_tag_default()(_templateObject3());
var Composed = Object(external_react_adopt_["adopt"])({
  user: function user(_ref) {
    var render = _ref.render;
    return external_react_default.a.createElement(User["b" /* default */], null, render);
  },
  //arrow function gets rid of console warnings, otherwise <User /> works just fine.
  closeCart: function closeCart(_ref2) {
    var render = _ref2.render;
    return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: CLOSE_CART_MUTATION
    }, render);
  },
  // toggleCart: ({ render }) => (
  //   <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  // ),
  localState: function localState(_ref3) {
    var render = _ref3.render;
    return external_react_default.a.createElement(external_react_apollo_["Query"], {
      query: LOCAL_STATE_QUERY
    }, render);
  }
});
var pStyle = {
  background: 'red',
  textAlign: 'center',
  color: 'white',
  cursor: 'pointer',
  fontSize: 24
};

var Cart_Cart = function Cart() {
  return external_react_default.a.createElement(Composed, null, function (_ref4) {
    var user = _ref4.user,
        closeCart = _ref4.closeCart,
        localState = _ref4.localState;
    var me = user.data.me;
    if (!me) return null; //we don't want to show the cart unless person is logged in

    return external_react_default.a.createElement(styles_CartStyles, {
      open: localState.data.cartOpen
    }, external_react_default.a.createElement("header", null, external_react_default.a.createElement(styles_CloseButton, {
      onClick: closeCart,
      title: "close"
    }, "\xD7"), external_react_default.a.createElement(styles_Supreme, null, me.name, "'s Cart"), external_react_default.a.createElement("p", null, "You Have ", me.cart.length, " Item", me.cart.length > 1 ? 's' : '', " in Your Cart")), external_react_default.a.createElement("ul", null, me.cart.map(function (cartItem) {
      return external_react_default.a.createElement(components_CartItem, {
        key: cartItem.id,
        cartItem: cartItem
      });
    })), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("p", null, "Subtotal:"), external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(calcTotalPrice(me.cart))), me.cart.length ? //if cart is true, then render the checkout button
    external_react_default.a.createElement(components_Payment, null, external_react_default.a.createElement(SickButton["a" /* default */], null, "Checkout")) : external_react_default.a.createElement("p", {
      style: pStyle
    }, "No Item to Checkout")));
  });
};

/* harmony default export */ var components_Cart = (Cart_Cart);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(23);

// CONCATENATED MODULE: ./components/CartCount.js




var AnimationStyles = external_styled_components_default.a.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sll66f-0"
})(["position:relative;.count{display:block;position:relative;transition:all 0.3s;backface-visibility:hidden;}.count-enter{transform:scale(3) rotateX(0.5turn);}.count-enter-active{transform:rotate(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(3) rotateX(0.5turn);}"]);
var Dot = external_styled_components_default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sll66f-1"
})(["background:", ";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"], function (props) {
  return props.theme.red;
});

var CartCount_CartCount = function CartCount(_ref) {
  var count = _ref.count;
  return external_react_default.a.createElement(AnimationStyles, null, external_react_default.a.createElement(external_react_transition_group_["TransitionGroup"], null, external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
    unmountOnExit: true,
    className: "count",
    classNames: "count",
    key: count,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, external_react_default.a.createElement(Dot, null, count))));
};

/* harmony default export */ var components_CartCount = (CartCount_CartCount);
// CONCATENATED MODULE: ./components/Nav.js









var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var me = _ref.data.me;
    return external_react_default.a.createElement(styles_NavStyles, {
      "data-test": "nav"
    }, external_react_default.a.createElement(link_default.a, {
      href: "/items"
    }, external_react_default.a.createElement("a", null, "Shop")), me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(link_default.a, {
      href: "/sell"
    }, external_react_default.a.createElement("a", null, "Sell")), external_react_default.a.createElement(link_default.a, {
      href: "/orders"
    }, external_react_default.a.createElement("a", null, "My Orders")), external_react_default.a.createElement(components_Signout, null), external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, function (toggleCart) {
      return external_react_default.a.createElement("button", {
        onClick: toggleCart
      }, "My Cart", external_react_default.a.createElement(components_CartCount, {
        count: me.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0)
      }));
    })), !me && external_react_default.a.createElement(link_default.a, {
      href: "/signup"
    }, external_react_default.a.createElement("a", null, "Sign In")));
  });
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(24);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(27);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/styles/DropDown.js

var DropDown = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-1xoqn8i-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-1xoqn8i-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(external_styled_components_["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-1xoqn8i-2"
})(["position:relative;input{background:lightgray;color:white;width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

// CONCATENATED MODULE: ./components/Search.js


function Search_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search_typeof = function _typeof(obj) { return typeof obj; }; } else { Search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Search_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Search_createClass(Constructor, protoProps, staticProps) { if (protoProps) Search_defineProperties(Constructor.prototype, protoProps); if (staticProps) Search_defineProperties(Constructor, staticProps); return Constructor; }

function Search_possibleConstructorReturn(self, call) { if (call && (Search_typeof(call) === "object" || typeof call === "function")) { return call; } return Search_assertThisInitialized(self); }

function Search_getPrototypeOf(o) { Search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Search_getPrototypeOf(o); }

function Search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Search_setPrototypeOf(subClass, superClass); }

function Search_setPrototypeOf(o, p) { Search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Search_setPrototypeOf(o, p); }

function Search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Search_templateObject() {
  var data = Search_taggedTemplateLiteral(["\n  query SEARCH_ITEMS_QUERY($searchTerm: String!) {\n    items(\n      where: {\n        OR: [\n          { title_contains: $searchTerm }\n          { description_contains: $searchTerm }\n        ]\n        # saying find me search where title contains the search term or description contains search term\n      }\n    ) {\n      id\n      image\n      title\n    }\n  }\n"]);

  Search_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Search_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 //makes sure we're not unnessarily firing off after each key press, but instead after a set (i.e. 350ms) time.


var SEARCH_ITEMS_QUERY = external_graphql_tag_default()(Search_templateObject());

function routeToItem(item) {
  // console.log(item);
  router_default.a.push({
    pathname: '/item',
    query: {
      id: item.id
    }
  });
}

var Search_AutoComplete =
/*#__PURE__*/
function (_React$Component) {
  Search_inherits(AutoComplete, _React$Component);

  function AutoComplete() {
    var _getPrototypeOf2;

    var _this;

    Search_classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Search_possibleConstructorReturn(this, (_getPrototypeOf2 = Search_getPrototypeOf(AutoComplete)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "state", {
      items: [],
      loading: false //because we don't have the convience of our query or mutation component, we have to take care of the loading state ourselves

    });

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "onChange", external_lodash_debounce_default()(
    /*#__PURE__*/
    function () {
      var _ref = Search_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e, client) {
        var res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('searching');
                console.log(client); // turn loading on

                _this.setState({
                  loading: true
                }); //Manually query apollo client


                _context.next = 5;
                return client.query({
                  query: SEARCH_ITEMS_QUERY,
                  variables: {
                    searchTerm: e.target.value
                  }
                });

              case 5:
                res = _context.sent;
                console.log(res);

                _this.setState({
                  items: res.data.items,
                  loading: false
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), 350));

    return _this;
  }

  Search_createClass(AutoComplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      Object(external_downshift_["resetIdCounter"])();
      return external_react_default.a.createElement(SearchStyles, null, external_react_default.a.createElement(external_downshift_default.a, {
        onChange: routeToItem,
        itemToString: function itemToString(item) {
          return item === null ? '' : item.title;
        }
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            highlightedIndex = _ref2.highlightedIndex;
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_apollo_["ApolloConsumer"], null, function (client) {
          return external_react_default.a.createElement("input", getInputProps({
            type: 'search',
            placeholder: 'search for an item',
            id: 'search',
            className: _this2.state.loading ? 'loading' : '',
            onChange: function onChange(e) {
              e.persist();

              _this2.onChange(e, client);
            }
          })) //what this does:
          //1. ApolloConsumer exposes client to us
          //2. When user types, we're going to pass the client to a separate function
          //3. That allows us to go above the render and make an onchange handler that accepts that event and the client
          ;
        }), isOpen && //if it's open then show the downdown
        external_react_default.a.createElement(DropDown, null, _this2.state.items.map(function (item, index) {
          return external_react_default.a.createElement(DropDownItem, _extends({}, getItemProps({
            item: item
          }), {
            key: item.id,
            highlighted: index === highlightedIndex
          }), external_react_default.a.createElement("img", {
            width: "50",
            src: item.image,
            alt: item.title
          }), item.title);
        }), !_this2.state.items.length && !_this2.state.loading && external_react_default.a.createElement(DropDownItem, null, " Nothing Found for ", inputValue)));
      }));
    }
  }]);

  return AutoComplete;
}(external_react_default.a.Component);

/* harmony default export */ var Search = (Search_AutoComplete); //we need direct access to our apollo client because our Apollo Client we can manually fire off these search queries
// rather than using a render prop, hence why we imported ApolloConsumer.
//ApolloConsumer will do is it will expose the client to us so that we can manually run these onChange queries oursevles
// CONCATENATED MODULE: ./components/Header.js









router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.done();
};

var Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "p7vglm-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.red;
});
var StyledHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "p7vglm-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement("div", {
    className: "bar"
  }, external_react_default.a.createElement(Logo, null, external_react_default.a.createElement(link_default.a, {
    href: "/items"
  }, external_react_default.a.createElement("a", null, "MEHKO"))), external_react_default.a.createElement(components_Nav, null)), external_react_default.a.createElement("div", {
    className: "sub-bar"
  }, external_react_default.a.createElement(Search, null)), external_react_default.a.createElement(components_Cart, null));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(12);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  }), external_react_default.a.createElement("title", null, "MEHKO"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// CONCATENATED MODULE: ./components/Page.js
function Page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page_typeof = function _typeof(obj) { return typeof obj; }; } else { Page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page_typeof(obj); }

function Page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page_createClass(Constructor, protoProps, staticProps) { if (protoProps) Page_defineProperties(Constructor.prototype, protoProps); if (staticProps) Page_defineProperties(Constructor, staticProps); return Constructor; }

function Page_possibleConstructorReturn(self, call) { if (call && (Page_typeof(call) === "object" || typeof call === "function")) { return call; } return Page_assertThisInitialized(self); }

function Page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page_getPrototypeOf(o) { Page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Page_getPrototypeOf(o); }

function Page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Page_setPrototypeOf(subClass, superClass); }

function Page_setPrototypeOf(o, p) { Page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Page_setPrototypeOf(o, p); }

function Page_templateObject() {
  var data = Page_taggedTemplateLiteral(["\n@font-face {\n  font-family: 'radnika_next' ;\n  src: url('/static/radnikanext-medium-webfont.woff2')\n  format('woff2');\n  font-weight: normal;\n  font-style: normal;\n}\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'radnika_next';\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  Page_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Page_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)"
};
var StylePage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StylePage",
  componentId: "sc-1h5i6ow-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-1h5i6ow-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
Object(external_styled_components_["injectGlobal"])(Page_templateObject(), theme.black);

var Page_Page =
/*#__PURE__*/
function (_Component) {
  Page_inherits(Page, _Component);

  function Page() {
    Page_classCallCheck(this, Page);

    return Page_possibleConstructorReturn(this, Page_getPrototypeOf(Page).apply(this, arguments));
  }

  Page_createClass(Page, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(StylePage, null, external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Inner, null, this.props.children)));
    }
  }]);

  return Page;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__(28);
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__(29);
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(11);

// CONCATENATED MODULE: ./lib/withData.js
//this is where we create our apollo client / apollo store





function createClient(_ref) {
  var headers = _ref.headers;
  return new external_apollo_boost_default.a({
    uri:  false ? undefined : config["b" /* prodEndpoint */],
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    //local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            // underscore indicates don't need. Can replace with anything really 'lsdfsdfa'
            //variables allows us to access variables passed along by mutation, in our case we don't have any
            //cache is destructured from client (apollo's client)
            //1. read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: LOCAL_STATE_QUERY
            }),
                cartOpen = _cache$readQuery.cartOpen; //2. write the cart State to the opposite


            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          },
          closeCart: function closeCart(_, variables, _ref3) {
            var cache = _ref3.cache;
            cache.readQuery({
              query: LOCAL_STATE_QUERY
            });
            var data = {
              data: {
                cartOpen: false
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient));
// CONCATENATED MODULE: ./pages/_app.js



function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }






var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
        client: apollo
      }, external_react_default.a.createElement(Page_Page, null, external_react_default.a.createElement(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(_app_MyApp));

/***/ })
/******/ ]);