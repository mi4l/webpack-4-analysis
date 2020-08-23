/*
  Webpack version 4.44.1
  Annotated bundle generated with two modules:
  - one concat
*/

/******/  (function(modules) { // webpackBootstrap
            /*
              This function is what bootstraps an application inside of a
              webpack IIFE (immediatley invoked function expression). It creates
              a scope for all of our modules to live in, and our code to be executed
              in.
            */

            /*
              The `modules` argument is an associative array(POJO) containing modules
              used at runtime.  In this case that's our index.js and utils.js files.
              {
                './src/index.js': function(module, __webpack_exports__, __webpack_require__) { ... },
                './src/utils.js': function(module, __webpack_exports__, __webpack_require__) { ... }
              }
            */
/******/    // install a JSONP callback for chunk loading
/******/    function webpackJsonpCallback(data) {
            /*
              This function is generated when the import
              function is used to import a file at runtime. It's
              a sequence of instructions for exposing a dynamic
              import to the parent scope.

              //////////// FIND LINE IN WEBPACK SOURCE WHERE THIS HAPPENS
                - it'd be good to know exactly what conditions generate this function,
                  as well as point to where this file is created so users can see  more
                  conditionally generated functions

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

                Later this will be used to...
              */

/******/      var moreModules = data[1];
              /*
                Establishes a reference to an object containing modules.

                ///////// FIGURE OUT WHEN MORE MODULES HAS MORE THAN ONE MODULE
                {
                  './src/todos.js': function(module, __webpack_exports__, __webpack_require__) {...}
                }

                Later this will be used to...
              */
/******/
/******/
/******/      // add "moreModules" to the modules object,
/******/      // then flag all "chunkIds" as loaded and fire callback
/******/      var moduleId,
                  /*
                    Instantiated now rather than in the for/in loop. This will be used
                    to check if the id exists in `moreModules`, and, if it does, set
                    a key of `moduleId` to the value of `moreModules[moduleId]` in
                    `modules` (modules[moduleId] = moreModules[moduleId])
                  */
                  chunkId,
                  /*
                    A bucket used for each chunk id in a for loop (chunkId = chunkIds[i])
                  */
                  i = 0,
                  /*
                    Instantiating here rather than in for loop
                  */
                  resolves = [];
                  /*
                    An array for Promise `resolve` functions to be placed for dynamic loading.
                    In the body of a Promise constructor's callback, the resolve function is passed
                    in an `installedChunksData` var in the form of [resolve, reject].
                  */
/******/      for(;i < chunkIds.length; i++) {
/******/        chunkId = chunkIds[i];

/******/        if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
                  /* Check for property of chunkId and if it's truthy */
/******/          resolves.push(installedChunks[chunkId][0]);
                  /* pushes a Promise constructor's resolve callback into the `resolves` array */
/******/        }
/******/        installedChunks[chunkId] = 0;
                /*
                  mutates installedChunks object and sets the chunkId to 0. If this function is called again,
                  it won't try to load the same module twice since now the `installedChunks[chunkId]` condition
                  will fail.
                */
/******/      }
/******/      for(moduleId in moreModules) {
                /* iterate over moreModules and if the moduleId exists in it, add its value to `modules`
/******/        if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/          modules[moduleId] = moreModules[moduleId];
/******/        }
/******/      }
/******/      if(parentJsonpFunction) parentJsonpFunction(data);
              /*
                At runtime, parentJsonpFunction is set to oldJsonpFunction, which is simply [].push
                bound to the jsonpArray reference. What that means is if this function exists, push
                data into the jsonpArray.
              */
/******/
/******/      while(resolves.length) {
/******/        resolves.shift()();
                /*
                  `resolves` queue members are shifted and then called
                */
/******/      }
/******/
/******/    };
            /* End of webpackJsonpCallback */
/******/
/******/
/******/    // The module cache
/******/    var installedModules = {};
            /*
              When a module is loaded, it is cached here. Any future references will hit this
              cache first.
            */
/******/
/******/    // object to store loaded and loading chunks
/******/    // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/    // Promise = chunk loading, 0 = chunk loaded
/******/    var installedChunks = {
/******/      "main": 0
/******/    };
            /*
              A quick lookup for whether or not a chunk has been loaded. The webpackJsonpCallback
              uses this tto see if it needs to load a chunk.
            */
/******/
/******/
/******/
/******/    // script path function
/******/    function jsonpScriptSrc(chunkId) {
/******/      return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
            /* TODO - understand why this expression is used */
/******/    }
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
            /*
              The webpack require function is the primary handler of module
              loading and encapsulation. It's passed into each module's related
              scope as an argument, and exposes that module to the parent. It also has
              many helper functions and properties set that allow it to ensure
              each module can be executed, as well as other chunks can be loaded.
            */
/******/
/******/      // Check if module is in cache
/******/      if(installedModules[moduleId]) {
/******/        return installedModules[moduleId].exports;
                /*
                  If cached, exit early with cached module

                  TODO - See what situation would require this.
                */
/******/      }
/******/      // Create a new module (and put it into the cache)
/******/      var module = installedModules[moduleId] = {
/******/        i: moduleId,
                /* id  */
/******/        l: false,
                /* loaded true/false */
/******/        exports: {}
                /* "synthetic exports"
/******/      };
/******/
/******/      // Execute the module function
/******/      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /*
                The function being executed here is the value of the modules object passed in at
                the top.  Basically looks like this: { './src/index.js': function(..) {}}.  It contains
                a string representing our code wrapped in an `eval` call plus generated webpack
                functions that are used to load and expose modules to the parent scope.
              */
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
              /*
                Handles loading of dynamically imported chunks. If successful,
                this will append a script tag to the doc head.
              */
/******/      var promises = [];
/******/
/******/
/******/      // JSONP chunk loading for javascript
/******/
/******/      var installedChunkData = installedChunks[chunkId];
/******/      if(installedChunkData !== 0) { // 0 means "already installed".
                /* Main loading block is skipped if chunk is already installed */
/******/
/******/        // a Promise means "currently loading".
/******/        if(installedChunkData) {
                  /*
                    On first load of a module, this condition can not be true

                    TODO - see when this condition is true
                  */
/******/          promises.push(installedChunkData[2]);
/******/        } else {
                  /* TODO - see when else condition is hit */
/******/          // setup Promise in chunk cache
/******/          var promise = new Promise(function(resolve, reject) {
/******/            installedChunkData = installedChunks[chunkId] = [resolve, reject];
                    /*
                      Set installedChunkData and installedChunks[chunkId] to a reference of
                      an array that currently holds [resolve, reject] params.
                    */
/******/          });
/******/          promises.push(installedChunkData[2] = promise);
                  /*
                    Set installedChunkData[2] to promise // now looks like [resolve, reject, promise]
                    and push the promise into the promises array
                  */
/******/
/******/          // start chunk loading
/******/          var script = document.createElement('script');
/******/          var onScriptComplete;
/******/
/******/          script.charset = 'utf-8';
/******/          script.timeout = 120;
/******/          if (__webpack_require__.nc) {
                    /* TODO - see what this does */
/******/            script.setAttribute("nonce", __webpack_require__.nc);
/******/          }
/******/          script.src = jsonpScriptSrc(chunkId);
                  /* Sets source of script tag to file name generated by jsonScriptSrc (would be 0.js for this bundle) */
/******/
/******/          // create error before stack unwound to get useful stacktrace later
/******/          var error = new Error();
/******/          onScriptComplete = function (event) {
/******/            // avoid mem leaks in IE.
/******/            script.onerror = script.onload = null;
/******/            clearTimeout(timeout);
/******/            var chunk = installedChunks[chunkId];
/******/            if(chunk !== 0) {
                      /*
                        If there's an issue loading the chunk, since all loaded chunks should be
                        a `0`, create an error saying that 'Loading chunk <chunkId> failed.', and
                        set that chunkId in installedChunks to undefined.
                      */
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
                    /* Fire onScriptComplete (error handling) callback after 120 seconds
/******/          }, 120000);
/******/          script.onerror = script.onload = onScriptComplete;
/******/          document.head.appendChild(script);
/******/        } /* END OF ELSE */
/******/      }
/******/      return Promise.all(promises);
              /* TODO - finally learn what promise.all does */
/******/    };
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
            /* Self-explanatory */

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
              /*
                This isn't used in our code.

                TODO - See why it exists and explain its use case.
              */
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
              /*
                This isn't used in our code.

                TODO - See why it exists and explain its use case.
              */
/******/      var getter = module && module.__esModule ?
/******/        function getDefault() { return module['default']; } :
/******/        function getModuleExports() { return module; };
/******/      __webpack_require__.d(getter, 'a', getter);
/******/      return getter;
/******/    };
/******/
/******/    // Object.prototype.hasOwnProperty.call
/******/    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /*
              A wrapper function for hasOwnProperty. This is used in
              `__webpack_require__.d` because <???????>

              TODO - See why it exists and explain its use case.

            */
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";
            /*
              TODO - See how this is altered and explain what it does
            */
/******/
/******/    // on error function for async loading
/******/    __webpack_require__.oe = function(err) { console.error(err); throw err; };
            /*
              This is unused in output generatd by this project.  Should figure out when it is used.

              TODO - See why it exists and explain its use case.
            */
/******/


            /* Utilities for dynamically importing modules */
/******/    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
            /*
              Create a global reference to jsonpArray
              TODO - Why create a global ref here?
                - Looks like it's used in dynamic loading
            */
/******/    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
            /*
              array.push is bound to oldJsonpFunction
            */
/******/    jsonpArray.push = webpackJsonpCallback;
            /*
              jsonparray's prototype.push is overwritten in favor of webacpkJsonpCallback,
              the function declared at the top of the bundle.

              TODO - Why overwrite push?  It seems like this could be a new function on the prototype,
              or a completely external pure function.
            */

/******/    jsonpArray = jsonpArray.slice();
            /*
              create a copy of the jsonpArray. This reference is still active because the
              variable is declared using var.

              window.webpackJsonpArray === jsonpArray

              If it were done with let (let jsonpArray = window['webpackJsonpArray']...), it'd be
              window.webpackJsonpArray !== jsonpArray
            */
/******/    for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
            /*
              This is where webpackJsonpCallback is finally used.  Each member of the jsonpArray is
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
            */

/******/    var parentJsonpFunction = oldJsonpFunction;
            /*
              parentJsonpFunction is set to oldJsonpFunction, which at this time is [].push. This is used
              to add loaded modules to the jsonpArray (also window.webpackJsonpArray)
            */
/******/
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(__webpack_require__.s = "./src/index.js");
            /*
              Sets __webpack_require__.s to the entrypoint and passes it into a __webpack_require__
              call
            */
/******/  })
/************************************************************************/
/******/  ({

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

        TODO - what is a module?
      }
    */
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst getTodoHandlers = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo */ \"./src/todo.js\"));\n\n(todos => {\n  const list = document.createElement('ul');\n  const listItemsFragment = document.createDocumentFragment();\n\n  todos.forEach(todo => {\n    const li = document.createElement('li');\n\n    li.textContent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toUppercase\"])(todo);\n    li.addEventListener('click', e => {\n      getTodoHandlers().then(m => {\n        m.default.complete(e.target);\n      });\n    });\n    listItemsFragment.appendChild(li);\n  });\n  \n  list.appendChild(listItemsFragment);\n\n  document.getElementsByTagName('body')[0].appendChild(list);\n})([\n  'Create article about webpack bundles',\n  'Create article about hot module replacement'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");
    /*
      eval("
        __webpack_require__.r(__webpack_exports__)
        ;\n */
        /* harmony import *//*
        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(*//*! ./utils *//* \"./src/utils.js\");
        \n\n\n
        const getTodoHandlers = () => __webpack_require__.e(/*! import() *//* 0)
          .then(__webpack_require__.bind(null, /*! ./todo *//* \"./src/todo.js\"));
        \n\n
        (todos => {
          \n
          const list = document.createElement('ul');
          \n
          const listItemsFragment = document.createDocumentFragment();
          \n\n
          todos.forEach(todo => {
            \n
            const li = document.createElement('li');
            \n\n
            li.textContent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toUppercase\"])(todo);
            \n
            li.addEventListener('click', e => {
              \n
              getTodoHandlers().then(m => {
                \n
                m.default.complete(e.target);
                \n
              });\n
            });\n
            listItemsFragment.appendChild(li);\n
          });\n  \n

          list.appendChild(listItemsFragment);\n\n

          document
            .getElementsByTagName('body')[0]
            .appendChild(list);
            \n
          })([\n
            'Create article about webpack bundles',\n
            'Create article about hot module replacement'\n
          ]);

          \n\n//# sourceURL=webpack:///./src/index.js?");
    */

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