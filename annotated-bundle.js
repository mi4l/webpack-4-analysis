/*
  Annotated bundle generated with two modules:
  - one concat
*/

/******/  (function(modules) { // webpackBootstrap
            /*
              This function is what bootstraps an application inside of a
              webpack iife (immediatley invoked function expression). It creates
              a scope for all of our modules to live in.
            */

/******/    // install a JSONP callback for chunk loading
/******/    function webpackJsonpCallback(data) {
            /*
              This function is generated when the import
              function is used to import a file at runtime

              If a bundle doesn't have a dynamic import, like
              we do on line 3 of index.js, it won't include this function
              and will jump straight to installedModules

              Dynamic imports add another request to the app, but contribute
              to the performance of the initial page load because less code is
              being loaded
            */

            /*
              `data` is an array containing two indexes:
              - 0 is an array of chunk ids
              - 1 is an associative array(POJO) containing modules in this import
                Here's an example of how this object is structured:
                {
                  '<path to a module>: function(module, __webpack_exports__, __webpack_require__) {
                  }
                }

                So in our case, it's
                {
                  './src/todo.js': function(module, __webpack_exports__, __webpack_require__) {...}
                }


/******/      var chunkIds = data[0];
              /*
                Establishes a reference to an array containing chunk ids. In
                this instance the referenced value is [0]
              */

/******/      var moreModules = data[1];
/******/
/******/
/******/      // add "moreModules" to the modules object,
/******/      // then flag all "chunkIds" as loaded and fire callback
/******/      var moduleId, chunkId, i = 0, resolves = [];
/******/      for(;i < chunkIds.length; i++) {
/******/        chunkId = chunkIds[i];
/******/        if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/          resolves.push(installedChunks[chunkId][0]);
/******/        }
/******/        installedChunks[chunkId] = 0;
/******/      }
/******/      for(moduleId in moreModules) {
/******/        if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/          modules[moduleId] = moreModules[moduleId];
/******/        }
/******/      }
/******/      if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/      while(resolves.length) {
/******/        resolves.shift()();
/******/      }
/******/
/******/    };
/******/
/******/
/******/    // The module cache
/******/    var installedModules = {};
/******/
/******/    // object to store loaded and loading chunks
/******/    // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/    // Promise = chunk loading, 0 = chunk loaded
/******/    var installedChunks = {
/******/      "main": 0
/******/    };
/******/
/******/
/******/
/******/    // script path function
/******/    function jsonpScriptSrc(chunkId) {
/******/      return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/    }
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
/******/
/******/      // Check if module is in cache
/******/      if(installedModules[moduleId]) {
/******/        return installedModules[moduleId].exports;
/******/      }
/******/      // Create a new module (and put it into the cache)
/******/      var module = installedModules[moduleId] = {
/******/        i: moduleId,
/******/        l: false,
/******/        exports: {}
/******/      };
/******/
/******/      // Execute the module function
/******/      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/      // Flag the module as loaded
/******/      module.l = true;
/******/
/******/      // Return the exports of the module
/******/      return module.exports;
/******/    }
/******/
/******/    // This file contains only the entry chunk.
/******/    // The chunk loading function for additional chunks
/******/    __webpack_require__.e = function requireEnsure(chunkId) {
/******/      var promises = [];
/******/
/******/
/******/      // JSONP chunk loading for javascript
/******/
/******/      var installedChunkData = installedChunks[chunkId];
/******/      if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/        // a Promise means "currently loading".
/******/        if(installedChunkData) {
/******/          promises.push(installedChunkData[2]);
/******/        } else {
/******/          // setup Promise in chunk cache
/******/          var promise = new Promise(function(resolve, reject) {
/******/            installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/          });
/******/          promises.push(installedChunkData[2] = promise);
/******/
/******/          // start chunk loading
/******/          var script = document.createElement('script');
/******/          var onScriptComplete;
/******/
/******/          script.charset = 'utf-8';
/******/          script.timeout = 120;
/******/          if (__webpack_require__.nc) {
/******/            script.setAttribute("nonce", __webpack_require__.nc);
/******/          }
/******/          script.src = jsonpScriptSrc(chunkId);
/******/
/******/          // create error before stack unwound to get useful stacktrace later
/******/          var error = new Error();
/******/          onScriptComplete = function (event) {
/******/            // avoid mem leaks in IE.
/******/            script.onerror = script.onload = null;
/******/            clearTimeout(timeout);
/******/            var chunk = installedChunks[chunkId];
/******/            if(chunk !== 0) {
/******/              if(chunk) {
/******/                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/                var realSrc = event && event.target && event.target.src;
/******/                error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/                error.name = 'ChunkLoadError';
/******/                error.type = errorType;
/******/                error.request = realSrc;
/******/                chunk[1](error);
/******/              }
/******/              installedChunks[chunkId] = undefined;
/******/            }
/******/          };
/******/          var timeout = setTimeout(function(){
/******/            onScriptComplete({ type: 'timeout', target: script });
/******/          }, 120000);
/******/          script.onerror = script.onload = onScriptComplete;
/******/          document.head.appendChild(script);
/******/        }
/******/      }
/******/      return Promise.all(promises);
/******/    };
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // define getter function for harmony exports
/******/    __webpack_require__.d = function(exports, name, getter) {
/******/      if(!__webpack_require__.o(exports, name)) {
/******/        Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/      }
/******/    };
/******/
/******/    // define __esModule on exports
/******/    __webpack_require__.r = function(exports) {
/******/      if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/      }
/******/      Object.defineProperty(exports, '__esModule', { value: true });
/******/    };
/******/
/******/    // create a fake namespace object
/******/    // mode & 1: value is a module id, require it
/******/    // mode & 2: merge all properties of value into the ns
/******/    // mode & 4: return value when already ns object
/******/    // mode & 8|1: behave like require
/******/    __webpack_require__.t = function(value, mode) {
/******/      if(mode & 1) value = __webpack_require__(value);
/******/      if(mode & 8) return value;
/******/      if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/      var ns = Object.create(null);
/******/      __webpack_require__.r(ns);
/******/      Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/      if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/      return ns;
/******/    };
/******/
/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = function(module) {
/******/      var getter = module && module.__esModule ?
/******/        function getDefault() { return module['default']; } :
/******/        function getModuleExports() { return module; };
/******/      __webpack_require__.d(getter, 'a', getter);
/******/      return getter;
/******/    };
/******/
/******/    // Object.prototype.hasOwnProperty.call
/******/    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";
/******/
/******/    // on error function for async loading
/******/    __webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/    jsonpArray.push = webpackJsonpCallback;
/******/    jsonpArray = jsonpArray.slice();
/******/    for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/    var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/  })
/************************************************************************/
/******/  ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst getTodoHandlers = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo */ \"./src/todo.js\"));\n\n(todos => {\n  const list = document.createElement('ul');\n  const listItemsFragment = document.createDocumentFragment();\n\n  todos.forEach(todo => {\n    const li = document.createElement('li');\n\n    li.textContent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toUppercase\"])(todo);\n    li.addEventListener('click', e => {\n      getTodoHandlers().then(m => {\n        m.default.complete(e.target);\n      });\n    });\n    listItemsFragment.appendChild(li);\n  });\n  \n  list.appendChild(listItemsFragment);\n\n  document.getElementsByTagName('body')[0].appendChild(list);\n})([\n  'Create article about webpack bundles',\n  'Create article about hot module replacement'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");

    /***/ }),

    /***/ "./src/utils.js":
    /*!**********************!*\
      !*** ./src/utils.js ***!
      \**********************/
    /*! exports provided: toUppercase */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toUppercase\", function() { return toUppercase; });\nconst toUppercase = string => string.toUpperCase();\n\n//# sourceURL=webpack:///./src/utils.js?");

    /***/ })

    /******/  });