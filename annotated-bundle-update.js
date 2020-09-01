/* Webpack version 4.44.1 */
/******/ (function(modules) { // webpackBootstrap
  /*
    This IIFE bootstraps the webpack require function
    and also pulls any statically imported entry point
    descendent modules into scope on some level.

    The `modules` argument is a map of static modules.  Each
    key is a path to a module, and the value is a function
    that exposes that module to the parent scope.  Here's an
    example from this file:

    {
      './src/index.js': function(module, __webpack_exports__, __webpack_require__) { ... },
      './src/renderUtils.js': function(module, __webpack_exports__, __webpack_require__) { ... }
    }
   */
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
  /*
    Description:
    This function is included when the import function
    is used to import a file dynamically, when it's
    needed.  The result is exposing the dynamically
    imported module to its parent scope.

    Dynamic imports add another request, but because
    the bundle is smaller and takes less time to download,
    the UX feels a bit snappier.  The subsequent request
    is essentially non-existent.

    What does this do?
    `data` is an array with two indexes:
    - 0 is an array of chunk ids
    - 1 is a map containing modules similar to the modules
      argument passed into the webpack IIFE

    {
      './src/todo.js': function(module, __webpack_exports__, __webpack_require__) {...}
    }
   */
/******/ 		var chunkIds = data[0];
  /*
    Establishes a reference to an array containing chunk ids.
    __webpack_require__.e will add chunkIds to the `installedChunks`
    object before the webpackJsonpCallback function is called.
    Later on, `installedChunks` will be checked against `chunkIds`
    to see if the module paired with that id should be loaded.
   */
/******/ 		var moreModules = data[1];
  /*
    Establishes a reference to an object of the same shape as the
    original `modules` argument at the top of the webpack IIFE.  These
    modules are later added to the `modules` object.
   */
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId,
  /*
    Bucket later used to check if the module id exists in `moreModules`.  If
    it does, set `modules[moduleId]` to be `moreModules[moduleId]`.
   */
              chunkId,
  /*
    Transient bucket later used to store individual chunk ids when looping over
    the `chunkIds` array.  A `chunkId` is used to both cache modules and get
    a resolve function that brings the module's code into greater scope.
   */
              i = 0,
  /*
    Current iteration
   */
              resolves = [];
  /*
    An array of resolve functions populated over the next couple of lines.
    In the body of a Promise constructor's callback, the resolve function is passed
    in an `installedChunksData` var in the form of [resolve, reject].
   */
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
  /*
    Iterate over chunkIds ([0]), and if a prop of [chunkId] exists in `installedChunks`
    and is truthy, grab its first index and add it to the resolves array.  Set the
    installedChunks[chunkId] value to 0, meaning loaded.

    Setting it to 0 also prevents it from being run a second time should
    the same chunkId be used by a separate dynamic import.
   */
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
  /*
    Add modules in `moreModules` to `modules` at the key of `moduleId`
   */
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
  /*
    At runtime, parentJsonpFunction is set to oldJsonpFunction, which is simply [].push
    bound to the jsonpArray reference. What that means is if this function exists, push
    data into the jsonpArray.
   */
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
  /*
    `resolves` queue members are shifted and then called
   */
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
  /*
    When a module is loaded, it's cached here.  Any subsequent load attempts
    will first check this cache.  We saw this in the webpackJsonpCallback.
   */
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
  /*
    A quick lookup to see if a chunk should be loaded.  The webpackJsonpCallback
    will set each modules passed to it to installedChunks[chunkId] = 0.
   */
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
  /*
    Creates a file name name created by concatenating the `publicPath`
    string in webpack.config (defaults to ''), the chunkId, and '.js'.
    This will look something like '0.js' when this bundle is executed,
    but could look something like 'https://cdn.something.com/chunk-name.js'.
   */
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
  /*
    The webpack require function is the primary handler of module
    loading and encapsulation.  It's passed into each module's related
    scope (dependency injection) as an argument, and exposes that
    module to the parent scope.  It also has many helper methods and
    properties set that work to malleate the bundle to fit the
    instruction set in webpack.config.
   */
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
  /*
    If cached, exit early with cached module.
   */
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
  /* id */
/******/ 			l: false,
  /* loaded true/false */
/******/ 			exports: {}
  /*
    An exports object populated using __webpack_require__.r as well
    as the execution context of whatever module the export is coming
    from.  For example, in the case of `renderUtils`, the object will
    look like this:

    {
      listItemTemplate: (...)
      Symbol(Symbol.toStringTag): "Module"
      __esModule: true
    }

    Note the `listItemTemplate` function.
   */
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /*
    This call will populate the exports object with the exports
    from the module.
   */
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
  /*
    The exports object is returned, which is basically the object above
    on line 183.
   */
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ \"./src/renderUtils.js\");\n\n\nconst getTodoHandlers = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo */ \"./src/todo.js\"));\n\n(todos => {\n  const list = document.createElement('ul');\n\n  list.innerHTML = todos.reduce(\n    (html, todo) => html + Object(_renderUtils__WEBPACK_IMPORTED_MODULE_0__[\"listItemTemplate\"])(todo),\n    ''\n  );\n  list.addEventListener('click', e => {\n    if (e.target.tagName === 'BUTTON') {\n      getTodoHandlers().then(m => {\n        m.default.complete(e.target);\n      });\n    }\n  });\n\n  document\n    .getElementsByTagName('body')[0]\n    .appendChild(list);\n})([\n  'Repot plants',\n  'Fill bird feeders',\n  'Restring guitar'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");

  /***/ }),

  /***/ "./src/renderUtils.js":
  /*!****************************!*\
    !*** ./src/renderUtils.js ***!
    \****************************/
  /*! exports provided: listItemTemplate */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemTemplate\", function() { return listItemTemplate; });\nconst listItemTemplate = text => `<li><button>${text}</button></li>`;\n\n//# sourceURL=webpack:///./src/renderUtils.js?");

  /***/ })

  /******/ });