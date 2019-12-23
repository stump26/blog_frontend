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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-common");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(2);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__(3);

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@apollo/react-common"
var react_common_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@apollo/react-ssr"
var react_ssr_ = __webpack_require__(6);

// EXTERNAL MODULE: external "koa"
var external_koa_ = __webpack_require__(15);

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__(8);
var external_apollo_client_default = /*#__PURE__*/__webpack_require__.n(external_apollo_client_);

// EXTERNAL MODULE: external "apollo-link"
var external_apollo_link_ = __webpack_require__(9);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__(10);

// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__(11);

// EXTERNAL MODULE: external "apollo-link-context"
var external_apollo_link_context_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/apolloClient.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var uri = Object({"NODE_ENV":"production","PUBLIC_URL":"","APP_ENV":"browser"}).REACT_APP_BACKEND_HOST + '/graphql'; // console.log('TCL: uri', uri);
// const httpLink = new HttpLink({
// 	uri,
// });

var authLink = Object(external_apollo_link_context_["setContext"])(function (_, _ref) {
  var headers = _ref.headers,
      context = _objectWithoutProperties(_ref, ["headers"]);

  // get the authentication token from local storage if it exists
  var token = sessionStorage.getItem('token'); // console.log('TCL: authLink -> token', token);
  // return the headers to the context so httpLink can read them

  return _objectSpread({
    headers: _objectSpread({}, headers, {
      authorization: token ? "Bearer ".concat(token) : ''
    })
  }, context);
});
var uploadLink = Object(external_apollo_upload_client_["createUploadLink"])({
  uri: uri
});
var apolloClient_link = external_apollo_link_["ApolloLink"].from([authLink, uploadLink]);
var apolloClient_client = new external_apollo_client_default.a({
  uri: uri,
  link: apolloClient_link,
  cache: new external_apollo_cache_inmemory_["InMemoryCache"]()
});
/* harmony default export */ var apolloClient = (apolloClient_client);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/ssr/serverRender.js













var serverRender =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(ctx) {
    var client, context, sheet, Root, content, initialState, styleTags, html;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const html = ReactDOMServer.renderToString(<div>Hello Koa Server</div>);
            // ctx.body = html;
            // prepare apollo-client
            client = new external_apollo_boost_["ApolloClient"]({
              ssrMode: true,
              link: Object(external_apollo_link_http_["createHttpLink"])({
                uri: 'http://localhost:5000/graphql'
              }),
              cache: new external_apollo_boost_["InMemoryCache"]()
            });
            context = {};
            sheet = new core_["ServerStyleSheets"]();
            Root = external_react_default.a.createElement(StyleSheetManager, {
              sheet: sheet
            }, external_react_default.a.createElement(react_common_["ApolloProvider"], {
              client: apolloClient
            }, external_react_default.a.createElement(external_react_router_["StaticRouter"], {
              location: ctx.url,
              context: context
            }, external_react_default.a.createElement(App, null))));
            _context.prev = 4;
            _context.next = 7;
            return Object(react_ssr_["getDataFromTree"])(Root);

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](4);
            // TODO: status-code 500
            ctx.throw(500);
            return _context.abrupt("return");

          case 13:
            content = server_default.a.renderToString(Root);
            initialState = client.extract();
            styleTags = sheet.getStyleTags();
            html = external_react_default.a.createElement(Html, {
              content: content,
              apolloState: initialState,
              styleTags: sheet
            });
            ctx.body = "<!doctype html>\n".concat(server_default.a.renderToStaticMarkup(html));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 9]]);
  }));

  return function serverRender(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var ssr_serverRender = __webpack_exports__["default"] = (serverRender);

/***/ })
/******/ ]);