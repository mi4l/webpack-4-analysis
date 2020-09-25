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
  /*
    Handles loading of dynamically imported chunks.  If successfuly, this
    will append a script tag to the doc head.
   */
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
  /*
    This condition is false upon first load of module
   */
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
  /*
    resolve/reject are referenced and "exported" to be used later
   */
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
  /*
    Promise is added to installedChunkData/installedChunks[chunkId] as well.
   */
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
  /*
    This is truthy if a __webpack_nonce__ is added to the entry file
    for content security policies.
   */
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src =  jsonpScriptSrc(chunkId);
  /*
    This returns a string representing the file name (L142)
   */
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
  /*
   A script is created with the chunk name as the source.  When loaded,
   the contents of a dynamically imported module is made available.  It'll
   otherwise error.
   */
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
  /*
    Args:
    exports is the exports module coming from a static import
    name is the name of the export
    getter is a function that returns whatever's being exported
   */
/******/ 		if(!__webpack_require__.o(exports, name)) {
  /*
    __webpack_require__.o is a `hasOwnProperty` check
   */
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
  /*
    Creates several properties used for webpack's exports
   */
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
  /*
    A wrapper function for hasOwnProperty. This is used in
    `__webpack_require__.d` to check if an exports object already has
    a property of a specified name.
   */
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  /*
    Global reference to jsonpArray to be used with dynamic imports
  */
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /*
   `oldJsonpFunction` is [].push
   */
/******/ 	jsonpArray.push = webpackJsonpCallback;
  /*
    jsonpArray.push is now webpackJsonpCallback
   */
/******/ 	jsonpArray = jsonpArray.slice();
  /*
    A copy of the array is created
   */
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  /*
    Each member of the jsonpArray is
      1. passed into webpackJsonpCallback
      2. checks to see if chunkId (member data [0]) exists in installedChunks and that it's truthy
      3. pushes the installedChunk's `resolve` function into the `resolves` array
        - This comes from __webpack_require__.e,
          var promise = new Promise(function(resolve, reject) {
            installedChunkData = installedChunks[chunkId] = [resolve, reject];
          });
        - Each time an `import()` is called, it'll run through __webpack_require__.e.
          - __webpack_require__.e first checks to see if the installedChunks[chunkId] value is 0.
            - if it is, it will bypass executing any logic that re-"fetches" the module's code
      4. mutates the installedChunks object and sets the chunkId to 0.
      5. adds any included modules to the `modules` object in scope (passed in as an
          argument to the encapsulating function)
      6. pushes the data into the jsonpArray via the parentJsonpFunction ([].push bound to jsonpArray)
          if the parentJsonpFunction exists
      7. removes each item from the `resolves` queue and calls it

      In this case, the jsonpArray's length is 0 and this function is never called.
   */
/******/ 	var parentJsonpFunction = oldJsonpFunction;
  /*
    parentJsonpFunction is set to oldJsonpFunction, which at this time is [].push. This is used
    to add loaded modules to the jsonpArray (also window.webpackJsonpArray)
   */
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
  /*
    Sets __webpack_require__.s to the entrypoint and passes it into a __webpack_require__
    call
   */
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
  /*
    Our main entrypoint. Here's what's being passed in:
    module: {
      i: './src/index.js', // the chunk id
      l: false, // whether or not the module has been loaded
      exports: {} // the exports of this module
    }

    After being evaluated in this file, the module is mutated to look more like this:
    {
      i: './src/index.js', // id remains the same
      l: true, // has been loaded
      exports: Module // export is now a Module
    }
   */
  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ \"./src/renderUtils.js\");\n\n\nconst getTodoHandlers = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo */ \"./src/todo.js\"));\n\n(todos => {\n  const list = document.createElement('ul');\n\n  list.innerHTML = todos.reduce(\n    (html, todo) => html + Object(_renderUtils__WEBPACK_IMPORTED_MODULE_0__[\"listItemTemplate\"])(todo),\n    ''\n  );\n  list.addEventListener('click', e => {\n    if (e.target.tagName === 'BUTTON') {\n      getTodoHandlers().then(m => {\n        m.default.complete(e.target);\n      });\n    }\n  });\n\n  document\n    .getElementsByTagName('body')[0]\n    .appendChild(list);\n})([\n  'Repot plants',\n  'Fill bird feeders',\n  'Restring guitar'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");
  /*
    Code content is stringified when built and webpack encapsulation and runtime handlers
    are injected.  Webpack uses a dependency injection pattern to expose exports from this
    stringified file to its parent scope.

    * __webpack_require__.r(__webpack_exports__) defines __esModule on exports
    * var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ /*\// "./src/renderUtils.js\");
      This sets the `_renderUtils__WEBPACK_IMPORTED_MODULE_0__` variable equal to
      the return value (export object) of the __webpack_require__ functon when passed
      in './src/renderUtils.js'.
    * `getTodoHandlers` function body is replaced wth a __webpack_require__.e call,
      followed by a __webpack_require__ call with the name of the file as the argument.
    * a sourceURL for source maps is appended to the end of the string as a comment
   */
  /***/ }),

  /***/ "./src/renderUtils.js":
  /*!****************************!*\
    !*** ./src/renderUtils.js ***!
    \****************************/
  /*! exports provided: listItemTemplate */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemTemplate\", function() { return listItemTemplate; });\nconst listItemTemplate = text => `<li><button>${text}</button></li>`;\n\n//# sourceURL=webpack:///./src/renderUtils.js?");
  /*
    This import is similar to what we saw in the entrypoint, except we also have a __webpack_require__.d call
    that adds a .get method to the export object that will return the function exported in the utils.js file.

    1. __webpack_require__.r is called on __webpack_exports__
    2. __webpack_exports__ is mutated
    3. __webpack_require__.d is called on __webpack_exports__, the name of the exported function,
      and a getter that returns functions later declared in the file
    4. __webpack_exports__ is once again mutated with the updated exports
    */
  /***/ })

  /******/ });