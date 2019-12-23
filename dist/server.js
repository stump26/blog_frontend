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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("hast-util-sanitize/lib/github.json");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-lowlight");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-common");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-simplemde-editor");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("remark-react");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("remark-parse");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("unified");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/css.js");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript.js");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/xml.js");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/1c.js");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/cpp.js");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/java.js");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/nginx.js");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/python.js");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/sql.js");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/typescript.js");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/shell.js");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/yaml.js");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/json.js");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("fetch-everywhere");

/***/ }),
/* 46 */
/***/ (function(module, exports) {



/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-moveable");

/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("html2canvas");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("upath");

/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("easymde/dist/easymde.min.css");

/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports) {



/***/ }),
/* 56 */
/***/ (function(module, exports) {



/***/ }),
/* 57 */
/***/ (function(module, exports) {



/***/ }),
/* 58 */
/***/ (function(module, exports) {



/***/ }),
/* 59 */
/***/ (function(module, exports) {



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "koa"
var external_koa_ = __webpack_require__(18);
var external_koa_default = /*#__PURE__*/__webpack_require__.n(external_koa_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(8);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);

// EXTERNAL MODULE: external "koa-static"
var external_koa_static_ = __webpack_require__(19);
var external_koa_static_default = /*#__PURE__*/__webpack_require__.n(external_koa_static_);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(2);
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
var server_ = __webpack_require__(7);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@apollo/react-common"
var react_common_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@apollo/react-ssr"
var react_ssr_ = __webpack_require__(21);

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__(22);

// EXTERNAL MODULE: external "react-router"
var external_react_router_ = __webpack_require__(23);

// EXTERNAL MODULE: external "@loadable/server"
var external_loadable_server_ = __webpack_require__(15);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(16);

// EXTERNAL MODULE: external "fetch-everywhere"
var external_fetch_everywhere_ = __webpack_require__(45);

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
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(3);

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(5);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/queries/postQueries.js


function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATEPOST(\n    $id: String!\n    $newTitle: String!\n    $newDescription: String!\n    $newTags: [String]\n  ) {\n    updatePost(\n      _id: $id\n      newTitle: $newTitle\n      newDescription: $newDescription\n      newTags: $newTags\n    ) {\n      _id\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation writePost(\n    $title: String!\n    $writer: String!\n    $description: String!\n    $tags: [String]\n  ) {\n    writePost(\n      title: $title\n      writer: $writer\n      description: $description\n      tags: $tags\n    ) {\n      _id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query POST_BY_ID($id: String!) {\n    post_BY_ID(id: $id) {\n      _id\n      title\n      modifyDate\n      description\n      tags\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query post($page: Int!) {\n    post(page: $page) {\n      _id\n      title\n      modifyDate\n      description\n      tags\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_POST_LIST = external_graphql_tag_default()(_templateObject());
var GET_POST_BYID = external_graphql_tag_default()(_templateObject2());
var WRITE_POST = external_graphql_tag_default()(_templateObject3());
var UPDATE_POST = external_graphql_tag_default()(_templateObject4());
// EXTERNAL MODULE: ./src/component/ArticleList/ArticleList.scss
var ArticleList_ArticleList = __webpack_require__(46);

// CONCATENATED MODULE: ./src/component/ArticleList/ArticleList.jsx





/* eslint-disable no-underscore-dangle */







var ArticleList_ArticleCard = function ArticleCard(_ref) {
  var id = _ref.id,
      title = _ref.title,
      date = _ref.date,
      desc = _ref.desc,
      tags = _ref.tags,
      onClickArticle = _ref.onClickArticle;
  // filter Markdown syntex
  var markdownRegExp = /!?\[.*?\]\(.*?\)|<.*?>|\*.*?\*|#+|\t+|\n|[\s]{2,}|`{3}.*?`{3}/gi;
  var sampleDescription = desc.replace(markdownRegExp, '').slice(0, 200) + '...';
  return external_react_default.a.createElement(core_["Card"], {
    className: "Article-card",
    onClick: function onClick() {
      onClickArticle(id);
    }
  }, external_react_default.a.createElement(core_["CardContent"], null, external_react_default.a.createElement("div", {
    className: "Article-card-head"
  }, external_react_default.a.createElement(core_["Typography"], {
    className: "Article-title",
    variant: "h4"
  }, title), external_react_default.a.createElement("hr", {
    className: "Article-divide"
  }), external_react_default.a.createElement("div", {
    className: "Article-date"
  }, date)), external_react_default.a.createElement("p", {
    className: "Article-desc"
  }, sampleDescription), external_react_default.a.createElement("div", {
    className: "Article-Tag-list"
  }, tags.map(function (i) {
    return external_react_default.a.createElement("span", {
      key: i,
      className: "Article-tag-item"
    }, i);
  }))));
};

var ArticleList_ArticleList_ArticleList = function ArticleList() {
  var _useState = Object(external_react_["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      articleElements = _useState2[0],
      setArticleElements = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      existNext = _useState6[0],
      setExistNext = _useState6[1];

  var _useQuery = Object(react_hooks_["useQuery"])(GET_POST_LIST, {
    variables: {
      page: 0
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore;

  var history = Object(external_react_router_dom_["useHistory"])();

  var fetchNextPage =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(nextPage) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setPage(nextPage);
              fetchMore({
                variables: {
                  page: nextPage
                },
                updateQuery: function updateQuery(previousResult, _ref3) {
                  var fetchMoreResult = _ref3.fetchMoreResult;
                  if (!fetchMoreResult) return previousResult;

                  if (fetchMoreResult.post.length === 0) {
                    setExistNext(false);
                  }

                  setArticleElements([].concat(_toConsumableArray(articleElements), _toConsumableArray(fetchMoreResult.post)));
                  return fetchMoreResult.post;
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchNextPage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var setCurrentReadOffset = function setCurrentReadOffset(e) {
    var scrollTop = Math.floor(document.documentElement.scrollTop);
    var scrollMax = Math.floor(document.documentElement.scrollHeight - document.documentElement.clientHeight);

    if (scrollMax !== 0 && existNext && scrollMax === scrollTop) {
      fetchNextPage(page + 1);
    }
  };

  Object(external_react_["useEffect"])(function () {
    window.addEventListener('scroll', setCurrentReadOffset);
    return function () {
      window.removeEventListener('scroll', setCurrentReadOffset);
    };
  }, [setCurrentReadOffset]);
  Object(external_react_["useMemo"])(function () {
    if (!error && !loading && data) {
      setArticleElements(_toConsumableArray(data.post));
    }
  }, data);

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    console.error('TCL: error', error);
    return "Error! ".concat(error.message);
  }

  var onClickArticle = function onClickArticle(articleId) {
    history.push("/post/".concat(articleId));
  };

  return external_react_default.a.createElement("div", {
    className: "Article-list"
  }, articleElements !== undefined && articleElements !== null && articleElements.map(function (articleElement) {
    return external_react_default.a.createElement(ArticleList_ArticleCard, {
      key: articleElement._id,
      id: articleElement._id,
      title: articleElement.title,
      date: articleElement.modifyDate,
      desc: articleElement.description,
      tags: articleElement.tags,
      onClickArticle: onClickArticle
    });
  }));
};

/* harmony default export */ var component_ArticleList_ArticleList = (ArticleList_ArticleList_ArticleList);
// CONCATENATED MODULE: ./src/component/ArticleList/index.jsx

/* harmony default export */ var component_ArticleList = (component_ArticleList_ArticleList);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/pages/Home.jsx




var Home_Home = function Home() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "home-container"
  }, external_react_default.a.createElement(component_ArticleList, null)));
};

/* harmony default export */ var pages_Home = (Home_Home);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(6);

// EXTERNAL MODULE: external "react-simplemde-editor"
var external_react_simplemde_editor_ = __webpack_require__(24);
var external_react_simplemde_editor_default = /*#__PURE__*/__webpack_require__.n(external_react_simplemde_editor_);

// CONCATENATED MODULE: ./src/graphql/queries/imageQuery.js


function imageQuery_templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation imageUpload(\n    $file: Upload!\n    $fileSize: Int!\n    $lastModifiedDate: Date!\n  ) {\n    imageUpload(\n      file: $file\n      fileSize: $fileSize\n      lastModifiedDate: $lastModifiedDate\n    ) {\n      id\n      isExist\n      fileName\n      filePath\n      lastModifiedDate\n    }\n  }\n"]);

  imageQuery_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var IMAGE_UPLOAD_QUERY = external_graphql_tag_default()(imageQuery_templateObject());
// CONCATENATED MODULE: ./src/component/PreviewImage/PreviewImage.jsx




/* eslint-disable no-param-reassign */

var Moveable = null;

if (process.browser) {
  Moveable = __webpack_require__(47);
}

var PreviewImage_PreviewImage = function PreviewImage(_ref) {
  var superElemtnt = _ref.superElemtnt,
      file = _ref.file,
      isEdited = _ref.isEdited;

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      srcImage = _useState2[0],
      setSrcImage = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      target = _useState4[0],
      setTarget = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isMoveable = _useState6[0],
      setIsMoveable = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isPressShift = _useState8[0],
      setIsPressShift = _useState8[1];

  var moveableRef = Object(external_react_["useRef"])();

  var onDrag = function onDrag(_ref2) {
    var target = _ref2.target,
        beforeDelta = _ref2.beforeDelta,
        beforeDist = _ref2.beforeDist,
        left = _ref2.left,
        top = _ref2.top,
        right = _ref2.right,
        bottom = _ref2.bottom,
        delta = _ref2.delta,
        dist = _ref2.dist,
        transform = _ref2.transform,
        clientX = _ref2.clientX,
        clientY = _ref2.clientY;
    target.style.transform = transform;
  };

  var onScale = function onScale(_ref3) {
    var currentTarget = _ref3.currentTarget,
        target = _ref3.target,
        scale = _ref3.scale,
        dist = _ref3.dist,
        delta = _ref3.delta,
        transform = _ref3.transform,
        clientX = _ref3.clientX,
        clientY = _ref3.clientY;
    isEdited(true);

    if (isPressShift) {
      transform = transform.replace(/scale\([0-9.,\s]+\)/g, "scale(".concat(scale[0], ",").concat(scale[0], ")"));
    }

    target.style.transform = transform;
  };

  var onRotate = function onRotate(_ref4) {
    var target = _ref4.target,
        delta = _ref4.delta,
        dist = _ref4.dist,
        transform = _ref4.transform,
        clientX = _ref4.clientX,
        clientY = _ref4.clientY;
    isEdited(true);
    target.style.transform = transform;
  };

  var imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%'
  };

  var keydownHandler = function keydownHandler(_ref5) {
    var key = _ref5.key;

    if (key === 'Shift') {
      setIsPressShift(true);
    }
  };

  var keyupHandler = function keyupHandler(_ref6) {
    var key = _ref6.key;

    if (key === 'Shift') {
      setIsPressShift(false);
    }
  };

  var onWindowReisze = function onWindowReisze() {
    if (moveableRef.current) {
      moveableRef.current.updateTarget();
    }
  }; // convert blob to Base64


  var toBase64 = function toBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  };

  var changePreviewImage =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = setSrcImage;
              _context.next = 3;
              return toBase64(file);

            case 3:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function changePreviewImage() {
      return _ref7.apply(this, arguments);
    };
  }();

  Object(external_react_["useEffect"])(function () {
    setTarget(document.getElementsByClassName('previewTarget')[0]);
    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);
    window.addEventListener('resize', onWindowReisze);
    window.addEventListener('scroll', onWindowReisze);
    return function () {
      window.removeEventListener('keydown', keydownHandler);
      window.removeEventListener('keyup', keyupHandler);
      window.removeEventListener('resize', onWindowReisze);
      window.removeEventListener('scroll', onWindowReisze);
    };
  }, []);
  Object(external_react_["useEffect"])(function () {
    setIsMoveable(false);
    changePreviewImage();

    if (moveableRef.current) {
      moveableRef.current.updateTarget();
    }
  }, [file]);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("img", {
    className: "previewTarget",
    src: srcImage,
    alt: "preview",
    style: imgStyle,
    onLoad: function onLoad() {
      setIsMoveable(true);
    }
  }), isMoveable && file.type !== 'image/gif' && external_react_default.a.createElement(Moveable, {
    ref: moveableRef,
    target: target,
    container: superElemtnt,
    draggable: true,
    scalable: true,
    rotatable: true,
    origin: false,
    throttleDrag: 1,
    throttleRotate: 0.2,
    throttleScale: 0.01,
    onDrag: onDrag,
    onScale: onScale,
    onRotate: onRotate // onDragEnd={this.onEnd}
    // onScaleEnd={this.onEnd}
    // onRotateEnd={this.onEnd}

  }));
};

/* harmony default export */ var component_PreviewImage_PreviewImage = (PreviewImage_PreviewImage);
// CONCATENATED MODULE: ./src/component/PreviewImage/index.jsx

/* harmony default export */ var component_PreviewImage = (component_PreviewImage_PreviewImage);
// EXTERNAL MODULE: ./src/component/ImageUploader/ImageUploader.scss
var ImageUploader_ImageUploader = __webpack_require__(48);

// CONCATENATED MODULE: ./src/component/ImageUploader/ImageUploader.jsx










var html2canvas = null;

if (process.browser) {
  html2canvas = __webpack_require__(49);
}

var ImageUploader_ImageUploader_ImageUploader = function ImageUploader(_ref) {
  var handleModalClose = _ref.handleModalClose,
      handleImageUploadComplet = _ref.handleImageUploadComplet;

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      targetFile = _useState2[0],
      setTargetFile = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isEdited = _useState4[0],
      setIsEdited = _useState4[1];

  var _useCallback = Object(external_react_["useCallback"])(Object(react_hooks_["useMutation"])(IMAGE_UPLOAD_QUERY), []),
      _useCallback2 = _slicedToArray(_useCallback, 1),
      imageUploadMutation = _useCallback2[0]; // 이미지 미리보기에 추가.


  var setPreView =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(file) {
      var fileTypeRegex;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log('TCL: setPreView -> file', file);
              // 이미지가 아닌것 거르기
              fileTypeRegex = /^image\/(.*?)/;

              if (fileTypeRegex.test(file.type)) {
                _context.next = 3;
                break;
              }

              throw new Error('type error');

            case 3:
              if (!(file.size > 1024 * 1024 * 10)) {
                _context.next = 5;
                break;
              }

              throw new Error('sizeover');

            case 5:
              setTargetFile(file);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setPreView(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // 이미지 셀렉터를 불러오기 위한.


  var handleImageSelector = function handleImageSelector() {
    var imagePathField = document.getElementsByClassName('image-path-field')[0];
    var upload = document.createElement('input');
    upload.type = 'file';

    upload.onchange = function (event) {
      if (!upload.files) return;
      var file = upload.files[0];

      try {
        setPreView(file);
        imagePathField.innerText = file.name;
      } catch (err) {
        // console.log('TCL: upload.onchange -> err', err);
        if (err === 'type error') {
          alert('지원하지 않는 확장자입니다.');
        } else if (err === 'sizeover') {
          alert('sizeover (upload under 10MB)');
        }
      }
    };

    upload.click();
  };

  var capturePreviewEdit =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var previewTarget, previewCanvas;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              previewTarget = document.querySelector('.previewTarget');
              _context2.next = 3;
              return html2canvas(previewTarget);

            case 3:
              previewCanvas = _context2.sent;
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                previewCanvas.toBlob(function (blob) {
                  var resultBlob = blob;
                  resultBlob.name = targetFile.name;
                  resultBlob.lastModifiedDate = new Date();
                  resolve(resultBlob);
                }, 'image/png');
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function capturePreviewEdit() {
      return _ref3.apply(this, arguments);
    };
  }(); // 이미지 업로드 작업.


  var handleUploadImage =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee3() {
      var uploadTargetFile, _ref5, imageUpload;

      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              uploadTargetFile = targetFile;

              if (!isEdited) {
                _context3.next = 5;
                break;
              }

              _context3.next = 4;
              return capturePreviewEdit();

            case 4:
              uploadTargetFile = _context3.sent;

            case 5:
              _context3.next = 7;
              return imageUploadMutation({
                variables: {
                  file: uploadTargetFile,
                  fileSize: uploadTargetFile.size,
                  lastModifiedDate: uploadTargetFile.lastModifiedDate
                }
              });

            case 7:
              _ref5 = _context3.sent;
              imageUpload = _ref5.data.imageUpload;
              // console.log('TCL: handleUploadImage -> imageUpload', imageUpload);
              handleImageUploadComplet({
                name: uploadTargetFile.name,
                path: imageUpload.filePath
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleUploadImage() {
      return _ref4.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement("div", {
    className: "image-uploader-bg"
  }, external_react_default.a.createElement("div", {
    className: "modal-header"
  }, external_react_default.a.createElement(core_["Typography"], {
    className: "modal-title",
    variant: "h5"
  }, "Image Uploader"), external_react_default.a.createElement(icons_["Close"], {
    color: "disabled",
    className: "CloseBtn",
    onClick: handleModalClose
  })), external_react_default.a.createElement("div", {
    className: "modal-body"
  }, external_react_default.a.createElement("div", {
    className: "image-selector-field"
  }, external_react_default.a.createElement("span", {
    className: "image-path-field"
  }), external_react_default.a.createElement(core_["Button"], {
    className: "Image-Search-Btn",
    onClick: handleImageSelector
  }, external_react_default.a.createElement(icons_["ImageSearch"], null), "Search")), external_react_default.a.createElement("div", {
    id: "image-preview"
  }, targetFile && external_react_default.a.createElement(component_PreviewImage, {
    superElemtnt: document.getElementById('image-preview'),
    file: targetFile,
    isEdited: setIsEdited
  })), external_react_default.a.createElement("div", {
    className: "recent-image-list"
  }, external_react_default.a.createElement("span", {
    className: "subTitle-on-div"
  }, "Recent"))), external_react_default.a.createElement("div", {
    className: "modal-footer"
  }, external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    className: "upload-btn",
    onClick: handleUploadImage
  }, external_react_default.a.createElement(icons_["Publish"], null), "Upload")));
};

/* harmony default export */ var component_ImageUploader_ImageUploader = (ImageUploader_ImageUploader_ImageUploader);
// CONCATENATED MODULE: ./src/component/ImageUploader/index.jsx

/* harmony default export */ var component_ImageUploader = (component_ImageUploader_ImageUploader);
// EXTERNAL MODULE: external "remark-react"
var external_remark_react_ = __webpack_require__(25);
var external_remark_react_default = /*#__PURE__*/__webpack_require__.n(external_remark_react_);

// EXTERNAL MODULE: external "remark-parse"
var external_remark_parse_ = __webpack_require__(26);
var external_remark_parse_default = /*#__PURE__*/__webpack_require__.n(external_remark_parse_);

// EXTERNAL MODULE: external "unified"
var external_unified_ = __webpack_require__(27);
var external_unified_default = /*#__PURE__*/__webpack_require__.n(external_unified_);

// EXTERNAL MODULE: external "hast-util-sanitize/lib/github.json"
var github_json_ = __webpack_require__(11);
var github_json_default = /*#__PURE__*/__webpack_require__.n(github_json_);

// EXTERNAL MODULE: external "react-lowlight"
var external_react_lowlight_ = __webpack_require__(17);
var external_react_lowlight_default = /*#__PURE__*/__webpack_require__.n(external_react_lowlight_);

// EXTERNAL MODULE: external "upath"
var external_upath_ = __webpack_require__(50);

// CONCATENATED MODULE: ./src/component/commons/MarkdownRenderer/CodeSection.jsx




var CodeSection_LangTag = function LangTag(_ref) {
  var language = _ref.language;
  var tagStyle = {
    position: 'absolute',
    right: '10px',
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: "'Nanum Gothic', 'Segoe UI'",
    color: '#595f6a'
  };
  return external_react_default.a.createElement("div", {
    style: tagStyle
  }, language);
};

/* harmony default export */ var CodeSection = (function (languageDefinitions) {
  Object.keys(languageDefinitions).forEach(function (language) {
    var definition = languageDefinitions[language];
    external_react_lowlight_default.a.registerLanguage(language, definition);
  });

  var Code = function Code(_ref2) {
    var _ref2$className = _ref2.className,
        className = _ref2$className === void 0 ? '' : _ref2$className,
        children = _ref2.children;
    var language = className.split('-')[1] || '';
    var inline = language !== '' ? null : true;
    var value = children[0] || '';
    var props = {
      value: value,
      inline: inline
    };

    if (Object.keys(languageDefinitions).indexOf(language) > -1) {
      // Include the language only if it was previously registered
      props.language = language;
    }

    console.log('TCL: Code -> language', language);
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, inline === null && external_react_default.a.createElement(CodeSection_LangTag, {
      language: language
    }), external_react_default.a.createElement(external_react_lowlight_default.a, props));
  };

  return Code;
});
// EXTERNAL MODULE: ./src/component/commons/MarkdownRenderer/atom-one-dark-reasonable.min.css
var atom_one_dark_reasonable_min = __webpack_require__(51);

// EXTERNAL MODULE: external "highlight.js/lib/languages/css.js"
var css_js_ = __webpack_require__(28);
var css_js_default = /*#__PURE__*/__webpack_require__.n(css_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/javascript.js"
var javascript_js_ = __webpack_require__(29);
var javascript_js_default = /*#__PURE__*/__webpack_require__.n(javascript_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/xml.js"
var xml_js_ = __webpack_require__(30);
var xml_js_default = /*#__PURE__*/__webpack_require__.n(xml_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/1c.js"
var _1c_js_ = __webpack_require__(31);
var _1c_js_default = /*#__PURE__*/__webpack_require__.n(_1c_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/cpp.js"
var cpp_js_ = __webpack_require__(32);
var cpp_js_default = /*#__PURE__*/__webpack_require__.n(cpp_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/java.js"
var java_js_ = __webpack_require__(33);
var java_js_default = /*#__PURE__*/__webpack_require__.n(java_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/nginx.js"
var nginx_js_ = __webpack_require__(34);
var nginx_js_default = /*#__PURE__*/__webpack_require__.n(nginx_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/python.js"
var python_js_ = __webpack_require__(35);
var python_js_default = /*#__PURE__*/__webpack_require__.n(python_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/sql.js"
var sql_js_ = __webpack_require__(36);
var sql_js_default = /*#__PURE__*/__webpack_require__.n(sql_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/typescript.js"
var typescript_js_ = __webpack_require__(37);
var typescript_js_default = /*#__PURE__*/__webpack_require__.n(typescript_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/shell.js"
var shell_js_ = __webpack_require__(38);
var shell_js_default = /*#__PURE__*/__webpack_require__.n(shell_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/yaml.js"
var yaml_js_ = __webpack_require__(39);
var yaml_js_default = /*#__PURE__*/__webpack_require__.n(yaml_js_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/json.js"
var json_js_ = __webpack_require__(40);
var json_js_default = /*#__PURE__*/__webpack_require__.n(json_js_);

// CONCATENATED MODULE: ./src/component/commons/MarkdownRenderer/common-languages.js
// https://github.com/isagalaev/highlight.js/tree/master/src/languages
// @todo more smart selection using an autoloading on demand
// and THAT TAKE ALIASES IN CONSIDERACTION













/* harmony default export */ var common_languages = ({
  // @todo support aliases automatically!
  // we will have probably to reimplement remark-react-lowlight to support auto language loading
  oneC: _1c_js_default.a,
  cpp: cpp_js_default.a,
  css: css_js_default.a,
  html: xml_js_default.a,
  java: java_js_default.a,
  js: javascript_js_default.a,
  json: json_js_default.a,
  nginx: nginx_js_default.a,
  python: python_js_default.a,
  shell: shell_js_default.a,
  sql: sql_js_default.a,
  typescript: typescript_js_default.a,
  yaml: yaml_js_default.a
}); // import oneC from "highlight.js/lib/languages/1c.js"
// import abnf from "highlight.js/lib/languages/abnf.js"
// import accesslog from "highlight.js/lib/languages/accesslog.js"
// import actionscript from "highlight.js/lib/languages/actionscript.js"
// import ada from "highlight.js/lib/languages/ada.js"
// import apache from "highlight.js/lib/languages/apache.js"
// import applescript from "highlight.js/lib/languages/applescript.js"
// import arduino from "highlight.js/lib/languages/arduino.js"
// import armasm from "highlight.js/lib/languages/armasm.js"
// import asciidoc from "highlight.js/lib/languages/asciidoc.js"
// import aspectj from "highlight.js/lib/languages/aspectj.js"
// import autohotkey from "highlight.js/lib/languages/autohotkey.js"
// import autoit from "highlight.js/lib/languages/autoit.js"
// import avrasm from "highlight.js/lib/languages/avrasm.js"
// import awk from "highlight.js/lib/languages/awk.js"
// import axapta from "highlight.js/lib/languages/axapta.js"
// import bash from "highlight.js/lib/languages/bash.js"
// import basic from "highlight.js/lib/languages/basic.js"
// import bnf from "highlight.js/lib/languages/bnf.js"
// import brainfuck from "highlight.js/lib/languages/brainfuck.js"
// import cal from "highlight.js/lib/languages/cal.js"
// import capnproto from "highlight.js/lib/languages/capnproto.js"
// import ceylon from "highlight.js/lib/languages/ceylon.js"
// import clean from "highlight.js/lib/languages/clean.js"
// import clojureRepl from "highlight.js/lib/languages/clojure-repl.js"
// import clojure from "highlight.js/lib/languages/clojure.js"
// import cmake from "highlight.js/lib/languages/cmake.js"
// import coffeescript from "highlight.js/lib/languages/coffeescript.js"
// import coq from "highlight.js/lib/languages/coq.js"
// import cos from "highlight.js/lib/languages/cos.js"
// import cpp from "highlight.js/lib/languages/cpp.js"
// import crmsh from "highlight.js/lib/languages/crmsh.js"
// import crystal from "highlight.js/lib/languages/crystal.js"
// import cs from "highlight.js/lib/languages/cs.js"
// import csp from "highlight.js/lib/languages/csp.js"
// import css from "highlight.js/lib/languages/css.js"
// import d from "highlight.js/lib/languages/d.js"
// import dart from "highlight.js/lib/languages/dart.js"
// import delphi from "highlight.js/lib/languages/delphi.js"
// import diff from "highlight.js/lib/languages/diff.js"
// import django from "highlight.js/lib/languages/django.js"
// import dns from "highlight.js/lib/languages/dns.js"
// import dockerfile from "highlight.js/lib/languages/dockerfile.js"
// import dos from "highlight.js/lib/languages/dos.js"
// import dsconfig from "highlight.js/lib/languages/dsconfig.js"
// import dts from "highlight.js/lib/languages/dts.js"
// import dust from "highlight.js/lib/languages/dust.js"
// import ebnf from "highlight.js/lib/languages/ebnf.js"
// import elixir from "highlight.js/lib/languages/elixir.js"
// import elm from "highlight.js/lib/languages/elm.js"
// import erb from "highlight.js/lib/languages/erb.js"
// import erlangRepl from "highlight.js/lib/languages/erlang-repl.js"
// import erlang from "highlight.js/lib/languages/erlang.js"
// import excel from "highlight.js/lib/languages/excel.js"
// import fix from "highlight.js/lib/languages/fix.js"
// import flix from "highlight.js/lib/languages/flix.js"
// import fortran from "highlight.js/lib/languages/fortran.js"
// import fsharp from "highlight.js/lib/languages/fsharp.js"
// import gams from "highlight.js/lib/languages/gams.js"
// import gauss from "highlight.js/lib/languages/gauss.js"
// import gcode from "highlight.js/lib/languages/gcode.js"
// import gherkin from "highlight.js/lib/languages/gherkin.js"
// import glsl from "highlight.js/lib/languages/glsl.js"
// import go from "highlight.js/lib/languages/go.js"
// import golo from "highlight.js/lib/languages/golo.js"
// import gradle from "highlight.js/lib/languages/gradle.js"
// import groovy from "highlight.js/lib/languages/groovy.js"
// import haml from "highlight.js/lib/languages/haml.js"
// import handlebars from "highlight.js/lib/languages/handlebars.js"
// import haskell from "highlight.js/lib/languages/haskell.js"
// import haxe from "highlight.js/lib/languages/haxe.js"
// import hsp from "highlight.js/lib/languages/hsp.js"
// import htmlbars from "highlight.js/lib/languages/htmlbars.js"
// import http from "highlight.js/lib/languages/http.js"
// import hy from "highlight.js/lib/languages/hy.js"
// import inform7 from "highlight.js/lib/languages/inform7.js"
// import ini from "highlight.js/lib/languages/ini.js"
// import irpf90 from "highlight.js/lib/languages/irpf90.js"
// import java from "highlight.js/lib/languages/java.js"
// import javascript from "highlight.js/lib/languages/javascript.js"
// import jbossCli from "highlight.js/lib/languages/jboss-cli.js"
// import json from "highlight.js/lib/languages/json.js"
// import julia from "highlight.js/lib/languages/julia.js"
// import kotlin from "highlight.js/lib/languages/kotlin.js"
// import lasso from "highlight.js/lib/languages/lasso.js"
// import ldif from "highlight.js/lib/languages/ldif.js"
// import leaf from "highlight.js/lib/languages/leaf.js"
// import less from "highlight.js/lib/languages/less.js"
// import lisp from "highlight.js/lib/languages/lisp.js"
// import livecodeserver from "highlight.js/lib/languages/livecodeserver.js"
// import livescript from "highlight.js/lib/languages/livescript.js"
// import llvm from "highlight.js/lib/languages/llvm.js"
// import lsl from "highlight.js/lib/languages/lsl.js"
// import lua from "highlight.js/lib/languages/lua.js"
// import makefile from "highlight.js/lib/languages/makefile.js"
// import markdown from "highlight.js/lib/languages/markdown.js"
// import mathematica from "highlight.js/lib/languages/mathematica.js"
// import matlab from "highlight.js/lib/languages/matlab.js"
// import maxima from "highlight.js/lib/languages/maxima.js"
// import mel from "highlight.js/lib/languages/mel.js"
// import mercury from "highlight.js/lib/languages/mercury.js"
// import mipsasm from "highlight.js/lib/languages/mipsasm.js"
// import mizar from "highlight.js/lib/languages/mizar.js"
// import mojolicious from "highlight.js/lib/languages/mojolicious.js"
// import monkey from "highlight.js/lib/languages/monkey.js"
// import moonscript from "highlight.js/lib/languages/moonscript.js"
// import n1ql from "highlight.js/lib/languages/n1ql.js"
// import nginx from "highlight.js/lib/languages/nginx.js"
// import nimrod from "highlight.js/lib/languages/nimrod.js"
// import nix from "highlight.js/lib/languages/nix.js"
// import nsis from "highlight.js/lib/languages/nsis.js"
// import objectivec from "highlight.js/lib/languages/objectivec.js"
// import ocaml from "highlight.js/lib/languages/ocaml.js"
// import openscad from "highlight.js/lib/languages/openscad.js"
// import oxygene from "highlight.js/lib/languages/oxygene.js"
// import parser3 from "highlight.js/lib/languages/parser3.js"
// import perl from "highlight.js/lib/languages/perl.js"
// import pf from "highlight.js/lib/languages/pf.js"
// import php from "highlight.js/lib/languages/php.js"
// import pony from "highlight.js/lib/languages/pony.js"
// import powershell from "highlight.js/lib/languages/powershell.js"
// import processing from "highlight.js/lib/languages/processing.js"
// import profile from "highlight.js/lib/languages/profile.js"
// import prolog from "highlight.js/lib/languages/prolog.js"
// import protobuf from "highlight.js/lib/languages/protobuf.js"
// import puppet from "highlight.js/lib/languages/puppet.js"
// import purebasic from "highlight.js/lib/languages/purebasic.js"
// import python from "highlight.js/lib/languages/python.js"
// import q from "highlight.js/lib/languages/q.js"
// import qml from "highlight.js/lib/languages/qml.js"
// import r from "highlight.js/lib/languages/r.js"
// import rib from "highlight.js/lib/languages/rib.js"
// import roboconf from "highlight.js/lib/languages/roboconf.js"
// import rsl from "highlight.js/lib/languages/rsl.js"
// import ruby from "highlight.js/lib/languages/ruby.js"
// import ruleslanguage from "highlight.js/lib/languages/ruleslanguage.js"
// import rust from "highlight.js/lib/languages/rust.js"
// import scala from "highlight.js/lib/languages/scala.js"
// import scheme from "highlight.js/lib/languages/scheme.js"
// import scilab from "highlight.js/lib/languages/scilab.js"
// import scss from "highlight.js/lib/languages/scss.js"
// import shell from "highlight.js/lib/languages/shell.js"
// import smali from "highlight.js/lib/languages/smali.js"
// import smalltalk from "highlight.js/lib/languages/smalltalk.js"
// import sml from "highlight.js/lib/languages/sml.js"
// import sqf from "highlight.js/lib/languages/sqf.js"
// import sql from "highlight.js/lib/languages/sql.js"
// import stan from "highlight.js/lib/languages/stan.js"
// import stata from "highlight.js/lib/languages/stata.js"
// import step21 from "highlight.js/lib/languages/step21.js"
// import stylus from "highlight.js/lib/languages/stylus.js"
// import subunit from "highlight.js/lib/languages/subunit.js"
// import swift from "highlight.js/lib/languages/swift.js"
// import taggerscript from "highlight.js/lib/languages/taggerscript.js"
// import tap from "highlight.js/lib/languages/tap.js"
// import tcl from "highlight.js/lib/languages/tcl.js"
// import tex from "highlight.js/lib/languages/tex.js"
// import thrift from "highlight.js/lib/languages/thrift.js"
// import tp from "highlight.js/lib/languages/tp.js"
// import twig from "highlight.js/lib/languages/twig.js"
// import typescript from "highlight.js/lib/languages/typescript.js"
// import vala from "highlight.js/lib/languages/vala.js"
// import vbnet from "highlight.js/lib/languages/vbnet.js"
// import vbscriptHtml from "highlight.js/lib/languages/vbscript-html.js"
// import vbscript from "highlight.js/lib/languages/vbscript.js"
// import verilog from "highlight.js/lib/languages/verilog.js"
// import vhdl from "highlight.js/lib/languages/vhdl.js"
// import vim from "highlight.js/lib/languages/vim.js"
// import x86asm from "highlight.js/lib/languages/x86asm.js"
// import xl from "highlight.js/lib/languages/xl.js"
// import xml from "highlight.js/lib/languages/xml.js"
// import xquery from "highlight.js/lib/languages/xquery.js"
// import yaml from "highlight.js/lib/languages/yaml.js"
// import zephir from "highlight.js/lib/languages/zephir.js"
// export default {
// "1c": oneC,
// abnf,
// accesslog,
// actionscript,
// ada,
// apache,
// applescript,
// arduino,
// armasm,
// asciidoc,
// aspectj,
// autohotkey,
// autoit,
// avrasm,
// awk,
// axapta,
// bash,
// basic,
// bnf,
// brainfuck,
// cal,
// capnproto,
// ceylon,
// clean,
// clojureRepl,
// clojure,
// cmake,
// coffeescript,
// coq,
// cos,
// cpp,
// crmsh,
// crystal,
// cs,
// csp,
// css,
// d,
// dart,
// delphi,
// diff,
// django,
// dns,
// dockerfile,
// dos,
// dsconfig,
// dts,
// dust,
// ebnf,
// elixir,
// elm,
// erb,
// erlangRepl,
// erlang,
// excel,
// fix,
// flix,
// fortran,
// fsharp,
// gams,
// gauss,
// gcode,
// gherkin,
// glsl,
// go,
// golo,
// gradle,
// groovy,
// haml,
// handlebars,
// haskell,
// haxe,
// hsp,
// htmlbars,
// http,
// hy,
// inform7,
// ini,
// irpf90,
// java,
// javascript,
// jbossCli,
// json,
// julia,
// kotlin,
// lasso,
// ldif,
// leaf,
// less,
// lisp,
// livecodeserver,
// livescript,
// llvm,
// lsl,
// lua,
// makefile,
// markdown,
// mathematica,
// matlab,
// maxima,
// mel,
// mercury,
// mipsasm,
// mizar,
// mojolicious,
// monkey,
// moonscript,
// n1ql,
// nginx,
// nimrod,
// nix,
// nsis,
// objectivec,
// ocaml,
// openscad,
// oxygene,
// parser3,
// perl,
// pf,
// php,
// pony,
// powershell,
// processing,
// profile,
// prolog,
// protobuf,
// puppet,
// purebasic,
// python,
// q,
// qml,
// r,
// rib,
// roboconf,
// rsl,
// ruby,
// ruleslanguage,
// rust,
// scala,
// scheme,
// scilab,
// scss,
// shell,
// smali,
// smalltalk,
// sml,
// sqf,
// sql,
// stan,
// stata,
// step21,
// stylus,
// subunit,
// swift,
// taggerscript,
// tap,
// tcl,
// tex,
// thrift,
// tp,
// twig,
// typescript,
// vala,
// vbnet,
// vbscriptHtml,
// vbscript,
// verilog,
// vhdl,
// vim,
// x86asm,
// xl,
// xml,
// xquery,
// yaml,
// zephir,
// }
// CONCATENATED MODULE: ./src/component/commons/MarkdownRenderer/MarkdownRenderer.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var schema = _objectSpread({}, github_json_default.a, {
  attributes: _objectSpread({}, github_json_default.a.attributes, {
    code: [].concat(_toConsumableArray(github_json_default.a.attributes.code || []), ['className'])
  })
});

/* harmony default export */ var MarkdownRenderer = (function (_ref) {
  var markup = _ref.markup;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_unified_default()().use(external_remark_parse_default.a, {
    commonmark: true
  }).use(external_remark_react_default.a, {
    sanitize: schema,
    remarkReactComponents: {
      code: CodeSection(common_languages)
    }
  }).processSync(markup, {
    commonmark: true
  }).contents);
});
// CONCATENATED MODULE: ./src/component/commons/MarkdownRenderer/index.jsx

/* harmony default export */ var commons_MarkdownRenderer = (MarkdownRenderer);
// EXTERNAL MODULE: ./src/component/Editor/Editor.scss
var Editor_Editor = __webpack_require__(53);

// CONCATENATED MODULE: ./src/component/Editor/Editor.jsx











process.browser && __webpack_require__(52);


var Editor_Editor_Editor = function Editor(_ref) {
  var postID = _ref.postID;

  var _useState = Object(external_react_["useState"])(postID !== undefined),
      _useState2 = _slicedToArray(_useState, 2),
      editMode = _useState2[0],
      setEditMode = _useState2[1]; // false: newPost, true: modifyPost


  var _useState3 = Object(external_react_["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(external_react_["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      tags = _useState6[0],
      setTags = _useState6[1];

  var _useState7 = Object(external_react_["useState"])('#Hello World'),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(null),
      _useState10 = _slicedToArray(_useState9, 2),
      focusedEditor = _useState10[0],
      setFocusedEditor = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      imageUploaderModalIsOpen = _useState12[0],
      setImageUploaderModalIsOpen = _useState12[1];

  var history = Object(external_react_router_dom_["useHistory"])(); // 글 id 조회 graphql query

  var _useLazyQuery = Object(react_hooks_["useLazyQuery"])(GET_POST_BYID, {
    variables: {
      id: postID
    },
    fetchPolicy: 'cache-and-network',
    // 게시글(post)에서 한번 동일한 조회가 캐싱되어 안보이는것을 방지.
    onCompleted: function onCompleted(_ref2) {
      var curPostData = _ref2.post_BY_ID;
      console.log('TCL: curPostData', curPostData);
      setTitle(curPostData.title);
      setTags(curPostData.tags);
      setValue(curPostData.description);
    }
  }),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 1),
      currentPostdata = _useLazyQuery2[0]; // 글 작성 grapql mutation


  var _useMutation = Object(react_hooks_["useMutation"])(WRITE_POST, {
    onCompleted: function onCompleted(_ref3) {
      var _id = _ref3.writePost._id;
      history.push("/post/".concat(_id));
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      writePost = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      writeLoding = _useMutation2$.loading,
      writeErr = _useMutation2$.error; // 글 업데이트 graphql mutation


  var _useMutation3 = Object(react_hooks_["useMutation"])(UPDATE_POST, {
    onCompleted: function onCompleted(_ref4) {
      var _id = _ref4.updatePost._id;
      history.push("/post/".concat(_id));
    }
  }),
      _useMutation4 = _slicedToArray(_useMutation3, 2),
      updatePostQuering = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      updateLoding = _useMutation4$.loading,
      updateErr = _useMutation4$.error;

  var onTypeTitle = function onTypeTitle(e) {
    setTitle(e.target.value);
  };

  var onTypeTags = function onTypeTags(e) {
    var inputString = e.target.value;
    setTags(inputString.split(/,\s?/));
  };

  var onClickSave = function onClickSave(e) {
    writePost({
      variables: {
        title: title,
        writer: 'stump26',
        description: value,
        tags: tags
      }
    });
  };

  var onClickUpdate = function onClickUpdate(e) {
    updatePostQuering({
      variables: {
        id: postID,
        newTitle: title,
        newDescription: value,
        newTags: tags
      }
    });
  };

  var handleImageUploadModal = function handleImageUploadModal(editor) {
    setImageUploaderModalIsOpen(true);
    setFocusedEditor(editor);
  }; // 사용자가 모달의 x를 눌러 업로드 취소.


  var handleImageUploadModalClose = function handleImageUploadModalClose() {
    setImageUploaderModalIsOpen(false);
    setFocusedEditor(null);
  }; // 사용자가 업로드를 완료한경우 이루어져야될것
  // For editing result


  var handleImageUploadComplet = function handleImageUploadComplet(img) {
    var cm = focusedEditor.codemirror;
    var output = "![".concat(img.name, "](").concat(img.path, ")");
    cm.replaceSelection(output);
    setImageUploaderModalIsOpen(false);
  }; // simpleMDE tool 객체


  var customImageUploadTool = {
    name: 'custom-image',
    action: handleImageUploadModal,
    className: 'fa fa-picture-o',
    title: 'Custom-Image-button'
  }; // 수정모드인경우 postid를통해 쿼리요청.

  Object(external_react_["useEffect"])(function () {
    if (postID !== undefined) {
      console.log('TCL: editor >> postID', postID);
      currentPostdata();
      console.log(title);
    }
  }, [postID]);
  return external_react_default.a.createElement("div", {
    id: "container"
  }, external_react_default.a.createElement("div", {
    className: "title-field"
  }, external_react_default.a.createElement(core_["Typography"], {
    className: "label-title"
  }, " \uC81C\uBAA9 "), external_react_default.a.createElement(core_["Divider"], {
    orientation: "vertical"
  }), external_react_default.a.createElement(core_["TextField"], {
    className: "input-title",
    value: title,
    margin: "normal",
    onChange: onTypeTitle
  })), external_react_default.a.createElement("div", {
    className: "tag-field"
  }, external_react_default.a.createElement(core_["Typography"], {
    className: "label-tags"
  }, " tag "), external_react_default.a.createElement(core_["Divider"], {
    orientation: "vertical"
  }), external_react_default.a.createElement(core_["TextField"], {
    className: "input-tags",
    onChange: onTypeTags,
    value: tags.join(', ')
  })), external_react_default.a.createElement(external_react_simplemde_editor_default.a, {
    value: value,
    onChange: setValue,
    options: {
      toolbar: ['bold', 'italic', 'heading', '|', 'quote', 'ordered-list', 'unordered-list', '|', 'code', customImageUploadTool, 'table', 'link', '|', 'preview', 'side-by-side', 'fullscreen'],
      previewRender: function previewRender(text) {
        return server_default.a.renderToString(external_react_default.a.createElement(commons_MarkdownRenderer, {
          markup: text
        }));
      },
      uploadImage: true,
      imageUploadFunction: function imageUploadFunction() {
        console.log('test');
      },
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true
      }
    }
  }), editMode ? external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    size: "large",
    className: "saveBtn",
    startIcon: external_react_default.a.createElement(icons_["Update"], null),
    onClick: onClickUpdate,
    disabled: updateLoding
  }, "Update") : external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    size: "large",
    className: "saveBtn",
    startIcon: external_react_default.a.createElement(icons_["Save"], null),
    onClick: onClickSave,
    disabled: writeLoding
  }, "Save"), external_react_default.a.createElement(core_["Modal"], {
    open: imageUploaderModalIsOpen
  }, external_react_default.a.createElement("div", {
    className: "image-uploader-modal-container"
  }, external_react_default.a.createElement(component_ImageUploader, {
    handleModalClose: handleImageUploadModalClose,
    handleImageUploadComplet: handleImageUploadComplet
  }))));
};

/* harmony default export */ var component_Editor_Editor = (Editor_Editor_Editor);
// CONCATENATED MODULE: ./src/component/Editor/index.jsx

/* harmony default export */ var component_Editor = (component_Editor_Editor);
// CONCATENATED MODULE: ./src/graphql/queries/authQuerues.js


function authQuerues_templateObject() {
  var data = _taggedTemplateLiteral(["\n  query jwtVerify($token: String!) {\n    jwtVerify(token: $token) {\n      _id\n      email\n      username\n      authority\n    }\n  }\n"]);

  authQuerues_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CHK_TOKEN_VERIFY = external_graphql_tag_default()(authQuerues_templateObject());
// CONCATENATED MODULE: ./src/pages/EditorPage.jsx






var EditorPage_EditorPage = function EditorPage(_ref) {
  var params = _ref.match.params;
  var history = Object(external_react_router_dom_["useHistory"])();
  var token = sessionStorage.getItem('token');

  if (!token) {
    history.push('/auth');
  }

  var _useQuery = Object(react_hooks_["useQuery"])(CHK_TOKEN_VERIFY, {
    variables: {
      token: token
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return 'Loading...';
  var authority = data.jwtVerify.authority;

  if (authority > 1) {
    alert('권한이 없습니다.');
    history.goBack();
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(component_Editor, {
    postID: params.postid
  }));
};

/* harmony default export */ var pages_EditorPage = (EditorPage_EditorPage);
// EXTERNAL MODULE: external "react-loading"
var external_react_loading_ = __webpack_require__(10);
var external_react_loading_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_);

// EXTERNAL MODULE: ./src/component/PostBody/PostBody.scss
var PostBody_PostBody = __webpack_require__(54);

// CONCATENATED MODULE: ./src/component/PostBody/PostBody.jsx









var PostBody_PostBody_PostBody = function PostBody(_ref) {
  var postID = _ref.postID,
      title = _ref.title,
      modifyDate = _ref.modifyDate,
      description = _ref.description;
  var history = Object(external_react_router_dom_["useHistory"])();

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      author = _useState2[0],
      setAuthor = _useState2[1];

  if (process.browser) {
    Object(external_react_["useEffect"])(function () {
      var token = sessionStorage.getItem('token');

      if (token) {
        var _jwt$decode = external_jsonwebtoken_default.a.decode(token),
            userId = _jwt$decode._id,
            username = _jwt$decode.username,
            authority = _jwt$decode.authority;

        setAuthor(authority);
      }
    }, []);
  }

  var onClickModify = function onClickModify() {
    history.push("/editor/".concat(postID));
  };

  return external_react_default.a.createElement("div", {
    className: "container"
  }, author !== false && author < 1 && external_react_default.a.createElement(core_["Fab"], {
    className: "ModifyBtn",
    size: "small",
    "aria-label": "edit",
    onClick: onClickModify
  }, external_react_default.a.createElement(icons_["Edit"], null)), external_react_default.a.createElement("div", {
    className: "post-title-bg"
  }, external_react_default.a.createElement("h1", {
    id: "post-title"
  }, title)), external_react_default.a.createElement(core_["Divider"], {
    className: "titie-section-divider"
  }), external_react_default.a.createElement("div", {
    className: "modify-date"
  }, modifyDate, external_react_default.a.createElement("meta", {
    itemprop: "dateModified",
    content: modifyDate
  })), external_react_default.a.createElement("div", {
    className: "post-desc",
    itemscope: true,
    itemtype: "http://schema.org/BlogPosting"
  }, external_react_default.a.createElement(commons_MarkdownRenderer, {
    markup: description
  })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("meta", {
    itemprop: "mainEntityOfPage",
    content: "/post/".concat(postID)
  }), external_react_default.a.createElement("meta", {
    itemprop: "name",
    content: title
  }), external_react_default.a.createElement("div", {
    itemprop: "publisher",
    itemscope: true,
    itemtype: "http://schema.org/Organization"
  }, external_react_default.a.createElement("meta", {
    itemprop: "name",
    content: "Stumpark's blog"
  }), external_react_default.a.createElement("div", {
    itemprop: "logo",
    itemscope: true,
    itemtype: "http://schema.org/ImageObject"
  }, external_react_default.a.createElement("meta", {
    itemprop: "url",
    content: "{https://blog.stumpark.com/logo512.png}"
  }))), external_react_default.a.createElement("div", {
    itemprop: "author",
    itemscope: true,
    itemtype: "http://schema.org/Person"
  }, external_react_default.a.createElement("meta", {
    itemprop: "name",
    content: "Outsider"
  }), external_react_default.a.createElement("meta", {
    itemprop: "url",
    content: "/"
  }))));
};

/* harmony default export */ var component_PostBody_PostBody = (PostBody_PostBody_PostBody);
// CONCATENATED MODULE: ./src/component/PostBody/index.jsx

/* harmony default export */ var component_PostBody = (component_PostBody_PostBody);
// CONCATENATED MODULE: ./src/pages/Post.jsx







var Post_Post = function Post(_ref) {
  var params = _ref.match.params;

  var _useQuery = Object(react_hooks_["useQuery"])(GET_POST_BYID, {
    variables: {
      id: params.id
    },
    fetchPolicy: 'cache-and-network'
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data; // Query on loading..


  if (loading) {
    return external_react_default.a.createElement(external_react_loading_default.a, {
      className: "loding-symbole",
      type: "bars",
      color: "#3376FB",
      width: 100,
      height: 100
    });
  } // Quering Error


  if (error) {
    console.error(error);
    return external_react_default.a.createElement("div", null, "bad");
  } // GET_POST_BYID 결과 구조분해


  var _data$post_BY_ID = data.post_BY_ID,
      _id = _data$post_BY_ID._id,
      title = _data$post_BY_ID.title,
      modifyDate = _data$post_BY_ID.modifyDate,
      description = _data$post_BY_ID.description,
      tags = _data$post_BY_ID.tags;
  var markdownRegExp = /!?\[.*?\]\(.*?\)|<.*?>|\*.*?\*|#+|\t+|\n|[\s]{2,}|`{3}.*?`{3}/g;
  var extrectDescription = description.replace(markdownRegExp, '').slice(0, 150) + '...';
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_helmet_["Helmet"], null, external_react_default.a.createElement("meta", {
    name: "description",
    content: extrectDescription
  }), external_react_default.a.createElement("meta", {
    name: "Keywords",
    content: tags.join(', ')
  }), external_react_default.a.createElement("title", null, "".concat(title, " | Stumpark's blog")), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "https://blog.stumpark.co.kr/post/".concat(_id)
  }), external_react_default.a.createElement("meta", {
    name: "og:description",
    content: extrectDescription
  }), external_react_default.a.createElement("meta", {
    name: "og:title",
    content: "".concat(title, " | Stumpark's blog")
  })), external_react_default.a.createElement(component_PostBody, {
    postID: params.id,
    title: title,
    modifyDate: modifyDate,
    description: description
  }));
};

/* harmony default export */ var pages_Post = (Post_Post);
// EXTERNAL MODULE: ./src/component/About/About.scss
var About_About = __webpack_require__(55);

// CONCATENATED MODULE: ./src/component/About/About.jsx



var About_ImageList = function ImageList(_ref) {
  var imgs = _ref.imgs;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, imgs.map(function (img) {
    return external_react_default.a.createElement("img", {
      className: "skill-img",
      src: "/img//tech/".concat(img, ".png"),
      alt: img
    });
  }));
};

var About_SKILLS = function SKILLS() {
  var lang = ['javascript', 'html_css', 'python', 'java', 'c', 'cpp', 'php'];
  var libs = ['react', 'node', 'webpack', 'sass', 'hooks', 'redux', 'passport', 'mongo', 'graphql', 'apollo', 'docker', 'kubernetes', 'git', 'nginx'];
  return external_react_default.a.createElement("div", {
    className: "skills-list"
  }, external_react_default.a.createElement("div", {
    className: "skills skill-lang"
  }, external_react_default.a.createElement(About_ImageList, {
    imgs: lang
  })), external_react_default.a.createElement("div", {
    className: "skills skill-libs"
  }, external_react_default.a.createElement(About_ImageList, {
    imgs: libs
  })));
};

var About_About_About = function About() {
  return external_react_default.a.createElement("div", {
    id: "container"
  }, external_react_default.a.createElement("h1", {
    className: "title"
  }, external_react_default.a.createElement("span", {
    className: "title-Name"
  }, "Shawn Park"), external_react_default.a.createElement("span", {
    style: {
      fontSize: '0.5em'
    }
  }, "aka 'stumpark'")), external_react_default.a.createElement("div", {
    className: "row-me"
  }, external_react_default.a.createElement("div", {
    className: "me"
  }, external_react_default.a.createElement("span", null, "\uCEF4\uD4E8\uD130 \uACF5\uD559\uACFC \uC7AC\uD559 (cs major)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, "\uC0AC\uC9C4 \uC88B\uC544\uD568."), external_react_default.a.createElement("span", null, "\uCDE8\uBBF8: \uCF54\uB529, \uC0AC\uC9C4\uCC0D\uAE30, \uAC8C\uC784"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, "\uC138\uBBF8\uB098 \uCC3E\uC544\uB2E4\uB2C8\uB294\uAC70 \uC88B\uC544\uD568."), external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", null, "*\uD2B9\uC774\uC810: google \uC5C6\uC73C\uBA74 \uCF54\uB529\uBABB\uD568. "), external_react_default.a.createElement("br", null)), external_react_default.a.createElement("img", {
    className: "my-shot",
    src: "https://stumpark.com/wordpress/wp-content/uploads/2018/04/IMG_9008-1-768x512.jpg"
  })), external_react_default.a.createElement(About_SKILLS, null));
};

/* harmony default export */ var component_About_About = (About_About_About);
// CONCATENATED MODULE: ./src/component/About/index.jsx

/* harmony default export */ var component_About = (component_About_About);
// CONCATENATED MODULE: ./src/pages/AboutPage.jsx



var AboutPage_AboutPage = function AboutPage() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(component_About, null));
};

/* harmony default export */ var pages_AboutPage = (AboutPage_AboutPage);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(41);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(42);
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_);

// CONCATENATED MODULE: ./src/context.js

var DarkModeContext = Object(external_react_["createContext"])(false);
var UserInfoContext = Object(external_react_["createContext"])({
  userId: '',
  username: '',
  authority: null
}); // export const PreloadContext = createContext(null);
// export const withPreload = (callback) => (WrappedComponent) => {
//   class WithPreload extends Component {
//     static contextType = PreloadContext;
//     constructor(props, context) {
//       super(props);
//       if (context === null) return; // 값이 null 이면 아무것도 하지 않음
//       context.push({ callback, props });
//     }
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }
//   return WithPreload;
// };
// EXTERNAL MODULE: ./src/component/SignIn/SignIn.scss
var SignIn_SignIn = __webpack_require__(56);

// CONCATENATED MODULE: ./src/component/SignIn/SignIn.jsx




/* eslint-disable no-underscore-dangle */









var SignIn_SignIn_SignIn = function SignIn() {
  var _useState = Object(external_react_["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      inputEmail = _useState2[0],
      setInputEmail = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      inputPW = _useState4[0],
      setInputPW = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSigninLoading = _useState6[0],
      setIsSigninLoading = _useState6[1];

  var history = Object(external_react_router_dom_["useHistory"])();

  var _useContext = Object(external_react_["useContext"])(UserInfoContext),
      setUserInfoContext = _useContext.setUserInfoContext;

  var handleInputEmail = function handleInputEmail(e) {
    setInputEmail(e.target.value);
  };

  var handleinputPW = function handleinputPW(e) {
    setInputPW(e.target.value);
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var opt;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsSigninLoading(true);
              opt = {
                method: 'post',
                url: Object({"NODE_ENV":"production","PUBLIC_URL":"","APP_ENV":"browser"}).REACT_APP_BACKEND_HOST + '/signin',
                headers: {
                  Accept: '*/*',
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: external_querystring_default.a.stringify({
                  email: inputEmail,
                  password: inputPW
                })
              };
              external_axios_default()(opt).then(function (res) {
                var _res$data = res.data,
                    token = _res$data.token,
                    user = _res$data.user;
                sessionStorage.setItem('token', token);
                setUserInfoContext({
                  userId: user._id,
                  username: user.username,
                  authority: user.authority
                });
                alert("Wellcome, ".concat(user.username));
                history.goBack();
              }).catch(function (_ref2) {
                var response = _ref2.response;

                if (response.status === 400) {
                  if (response.data === 'nulluser') {
                    alert('존재하지 않는 Email입니다.');
                  } else if (response.data === 'wrongpass') {
                    alert('비밀번호가 잘못되었습니다.');
                  }

                  setIsSigninLoading(false);
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement("div", {
    className: "sign-in-box-bg"
  }, external_react_default.a.createElement(core_["Typography"], {
    className: "input-form-header",
    variant: "h4"
  }, "Sign In"), external_react_default.a.createElement(core_["TextField"], {
    id: "filled",
    label: "Email",
    className: "input-email",
    margin: "normal",
    variant: "filled",
    onChange: handleInputEmail
  }), external_react_default.a.createElement(core_["TextField"], {
    id: "filled-password",
    label: "password",
    className: "input-password",
    type: "password",
    margin: "normal",
    variant: "filled",
    onChange: handleinputPW
  }), external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    className: "button-signin",
    onClick: handleSubmit,
    disabled: isSigninLoading
  }, isSigninLoading && external_react_default.a.createElement(external_react_loading_default.a, {
    type: "spin",
    width: 30,
    height: 30
  }), "Sign In"));
};

/* harmony default export */ var component_SignIn_SignIn = (SignIn_SignIn_SignIn);
// CONCATENATED MODULE: ./src/component/SignIn/index.jsx

/* harmony default export */ var component_SignIn = (component_SignIn_SignIn);
// CONCATENATED MODULE: ./src/pages/AuthPage.jsx



var AuthPage_AuthPage = function AuthPage() {
  return external_react_default.a.createElement("div", {
    className: "login-container"
  }, external_react_default.a.createElement(component_SignIn, null));
};

/* harmony default export */ var pages_AuthPage = (AuthPage_AuthPage);
// CONCATENATED MODULE: ./src/pages/index.jsx





// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(43);

// EXTERNAL MODULE: ./src/component/NavBar/NavBar.scss
var NavBar_NavBar = __webpack_require__(57);

// CONCATENATED MODULE: ./src/component/NavBar/NavBar.jsx







var DarkSwitch = Object(styles_["withStyles"])({
  switchBase: {
    color: colors_["purple"][300],
    '&$checked': {
      color: colors_["purple"][500]
    },
    '&$checked + $track': {
      backgroundColor: colors_["purple"][500]
    }
  },
  checked: {},
  track: {}
})(core_["Switch"]);

var NavBar_NavButtons = function NavButtons() {
  var githubURL = 'https://github.com/stump26';
  var instaURL = 'https://www.instagram.com/stumpark_26/';
  var DSMURL = 'https://stumpark.com:5001';
  var githubProfileIMG = 'https://blog.stumpark.com/img/stumpark/logo64.jpg';

  var _useContext = Object(external_react_["useContext"])(DarkModeContext),
      darkMode = _useContext.darkMode,
      toggleDarkMode = _useContext.toggleDarkMode;

  return external_react_default.a.createElement("div", {
    className: "Nav-Button-group"
  }, external_react_default.a.createElement(core_["Typography"], {
    id: "Nav-Color-switch"
  }, "L", external_react_default.a.createElement(DarkSwitch, {
    onChange: toggleDarkMode,
    checked: darkMode
  }), "D"), external_react_default.a.createElement(core_["Link"], {
    href: "/aboutMe"
  }, external_react_default.a.createElement(core_["Typography"], {
    id: "Nav-Link"
  }, "AboutMe")), external_react_default.a.createElement(core_["Link"], {
    href: instaURL
  }, external_react_default.a.createElement(core_["Typography"], {
    id: "Nav-Link"
  }, "Instagram")), external_react_default.a.createElement(core_["Link"], {
    href: DSMURL
  }, external_react_default.a.createElement(core_["Typography"], {
    id: "Nav-Link"
  }, "DSM")), external_react_default.a.createElement(core_["Link"], {
    href: githubURL
  }, external_react_default.a.createElement(core_["Avatar"], {
    alt: "Stump26",
    src: githubProfileIMG,
    id: "Nav-Profile"
  })));
};

var NavBar_NavBar_NavBar = function NavBar() {
  var history = Object(external_react_router_dom_["useHistory"])();
  return external_react_default.a.createElement(core_["AppBar"], {
    id: "Nav-Bar"
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5",
    className: "Nav-logo",
    onClick: function onClick() {
      history.push('/');
    }
  }, "StumPark"), external_react_default.a.createElement(core_["Input"], {
    className: "Nav-Search-Bar"
  }), external_react_default.a.createElement(NavBar_NavButtons, null));
};

/* harmony default export */ var component_NavBar_NavBar = (NavBar_NavBar_NavBar);
// CONCATENATED MODULE: ./src/component/NavBar/index.jsx

/* harmony default export */ var component_NavBar = (component_NavBar_NavBar);
// EXTERNAL MODULE: ./src/component/Footer/Footer.scss
var Footer_Footer = __webpack_require__(58);

// CONCATENATED MODULE: ./src/component/Footer/Footer.jsx




var Footer_Footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    className: "Foot-menu"
  }, external_react_default.a.createElement("span", null, "\u24D2 ", external_react_default.a.createElement(core_["Link"], {
    href: "/editor"
  }, "stumpark"), ", created by react.js"));
};

/* harmony default export */ var component_Footer_Footer = (Footer_Footer_Footer);
// CONCATENATED MODULE: ./src/component/Footer/index.jsx

/* harmony default export */ var component_Footer = (component_Footer_Footer);
// EXTERNAL MODULE: ./src/App.scss
var App = __webpack_require__(59);

// CONCATENATED MODULE: ./src/App.jsx





function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { App_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { App_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









/* harmony default export */ var src_App = (function () {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      darkMode = _useState2[0],
      setDarkMode = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userInfo = _useState4[0],
      setUserInfo = _useState4[1];

  var darkActions = {
    toggleDarkMode: function () {
      var _toggleDarkMode = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setDarkMode(!darkMode);
                localStorage.setItem('isDark', !darkMode);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function toggleDarkMode() {
        return _toggleDarkMode.apply(this, arguments);
      }

      return toggleDarkMode;
    }()
  };
  var userActions = {
    setUserInfoContext: function setUserInfoContext(userInfoDic) {
      setUserInfo(userInfoDic);
    },
    decodeJWTPayload: function decodeJWTPayload() {
      var token = sessionStorage.getItem('token');

      if (token) {
        var _jwt$decode = external_jsonwebtoken_default.a.decode(token),
            userId = _jwt$decode._id,
            username = _jwt$decode.username,
            authority = _jwt$decode.authority;

        return authority;
      }

      return false;
    }
  }; // componentDidMount

  Object(external_react_["useEffect"])(function () {
    var historyDark = localStorage.getItem('isDark'); // console.log('TCL: App -> historyDark', historyDark);

    if (historyDark === 'true') {
      // console.log('TCL: load localstorage');
      setDarkMode(true);
    } else if ((historyDark === undefined || historyDark === null) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // console.log('TCL: load prefers-color-scheme');
      setDarkMode(true);
    }
  }, []); // componentDidUpdate

  Object(external_react_["useEffect"])(function () {
    document.getElementsByTagName('body')[0].classList.toggle('dark-mode', darkMode);
  });
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(DarkModeContext.Provider, {
    value: App_objectSpread({
      darkMode: darkMode
    }, darkActions)
  }, external_react_default.a.createElement(UserInfoContext.Provider, {
    value: App_objectSpread({
      userInfo: userInfo
    }, userActions)
  }, external_react_default.a.createElement("div", {
    className: "App"
  }, external_react_default.a.createElement(component_NavBar, null), external_react_default.a.createElement(external_react_router_dom_["Switch"], null, external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/",
    component: pages_Home
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/editor/:postid",
    component: pages_EditorPage
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/editor/",
    component: pages_EditorPage
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/post/:id",
    component: pages_Post
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/aboutMe",
    component: pages_AboutPage
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/auth",
    component: pages_AuthPage
  })), external_react_default.a.createElement(component_Footer, null)))));
});
// CONCATENATED MODULE: ./src/ssr/Html.jsx


var Html_Html = function Html(_ref) {
  var content = _ref.content,
      styledElement = _ref.styledElement,
      apolloState = _ref.apolloState,
      extractor = _ref.extractor;
  return external_react_default.a.createElement("html", null, external_react_default.a.createElement("head", null, styledElement, extractor.getLinkElements(), extractor.getStyleElements()), external_react_default.a.createElement("body", null, external_react_default.a.createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), external_react_default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__APOLLO_STATE__=".concat(JSON.stringify(apolloState).replace(/</g, "\\u003c"), ";")
    }
  }), extractor.getScriptElements()));
};

/* harmony default export */ var ssr_Html = (Html_Html);
// CONCATENATED MODULE: ./src/ssr/serverRender.jsx















var statsFile = external_path_default.a.resolve(__dirname, '../build/loadable-stats.json');

var serverRender =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(ctx) {
    var client, context, sheet, extractor, Root, content, initialState, styledElement, html;
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
                uri: 'http://localhost:4000/graphql'
              }),
              cache: new external_apollo_boost_["InMemoryCache"]()
            });
            context = {};
            sheet = new external_styled_components_["ServerStyleSheet"]();
            extractor = new external_loadable_server_["ChunkExtractor"]({
              statsFile: statsFile
            });
            Root = external_react_default.a.createElement(external_loadable_server_["ChunkExtractorManager"], {
              extractor: extractor
            }, external_react_default.a.createElement(external_styled_components_["StyleSheetManager"], {
              sheet: sheet.instance
            }, external_react_default.a.createElement(react_common_["ApolloProvider"], {
              client: client
            }, external_react_default.a.createElement(external_react_router_["StaticRouter"], {
              location: ctx.url,
              context: context
            }, external_react_default.a.createElement(src_App, null)))));
            _context.prev = 5;
            _context.next = 8;
            return Object(react_ssr_["getDataFromTree"])(Root);

          case 8:
            _context.next = 15;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](5);
            console.log('TCL: serverRender -> e', _context.t0); // TODO: status-code 500

            ctx.throw(500);
            return _context.abrupt("return");

          case 15:
            content = server_default.a.renderToString(Root);
            initialState = client.extract();
            styledElement = sheet.getStyleElement();
            html = external_react_default.a.createElement(ssr_Html, {
              content: content,
              apolloState: initialState,
              styledElement: styledElement,
              extractor: extractor
            });
            ctx.body = "<!doctype html>\n".concat(server_default.a.renderToStaticMarkup(html));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 10]]);
  }));

  return function serverRender(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var ssr_serverRender = (serverRender);
// CONCATENATED MODULE: ./src/index.server.jsx




var app = new external_koa_default.a();
app.use(external_koa_static_default()(external_path_default.a.resolve('./build'), {
  index: false
}));
app.use(ssr_serverRender);
app.listen(3001, function () {
  console.log('SSR server is listening to http://localhost:3001');
});

/***/ })
/******/ ]);