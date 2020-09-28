(function(modules) { // webpackBootstrap
  function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];
    var moduleId, chunkId, i = 0, resolves = [];

    for(;i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        resolves.push(installedChunks[chunkId][0]);
      }
      installedChunks[chunkId] = 0;
    }

    for(moduleId in moreModules) {
      if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }

    if(parentJsonpFunction) {
      parentJsonpFunction(data);
    };

    while(resolves.length) {
      resolves.shift()();
    }
  };

  var installedModules = {};
  var installedChunks = {
    "main": 0
  };

  function jsonpScriptSrc(chunkId) {
    return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
  }

  function __webpack_require__(moduleId) {
    if(installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;

    return module.exports;
  }

  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = [];
    var installedChunkData = installedChunks[chunkId];

    if(installedChunkData !== 0) {
      if(installedChunkData) {
        promises.push(installedChunkData[2]);
      } else {
        var promise = new Promise(function(resolve, reject) {
          installedChunkData = installedChunks[chunkId] = [resolve, reject];
        });

        promises.push(installedChunkData[2] = promise);

        var script = document.createElement('script');
        var onScriptComplete;

        script.charset = 'utf-8';
        script.timeout = 120;
        if (__webpack_require__.nc) {
          script.setAttribute("nonce", __webpack_require__.nc);
        }
        script.src = jsonpScriptSrc(chunkId);

        var error = new Error();

        onScriptComplete = function (event) {
          script.onerror = script.onload = null;

          clearTimeout(timeout);

          var chunk = installedChunks[chunkId];

          if(chunk !== 0) {
            if(chunk) {
              var errorType = event && (event.type === 'load' ? 'missing' : event.type);
              var realSrc = event && event.target && event.target.src;

              error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
              error.name = 'ChunkLoadError';
              error.type = errorType;
              error.request = realSrc;

              chunk[1](error);
            }

            installedChunks[chunkId] = undefined;
          }
        };
        var timeout = setTimeout(function(){
          onScriptComplete({ type: 'timeout', target: script });
        }, 120000);

        script.onerror = script.onload = onScriptComplete;

        document.head.appendChild(script);
      }
    }

    return Promise.all(promises);
  };

  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;

  __webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  __webpack_require__.r = function(exports) {
    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function(value, mode) {
    if(mode & 1) value = __webpack_require__(value);
    if(mode & 8) return value;
    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    return ns;
  };

  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ?
      function getDefault() { return module['default']; } :
      function getModuleExports() { return module; };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property); 
  };

  __webpack_require__.p = "";
  __webpack_require__.oe = function(err) { console.error(err); throw err; };

  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);

  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();

  for(var i = 0; i < jsonpArray.length; i++) {
    webpackJsonpCallback(jsonpArray[i])
  }

  var parentJsonpFunction = oldJsonpFunction;

  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/index.js": (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ \"./src/renderUtils.js\");\n\n\nconst getTodoHandlers = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo */ \"./src/todo.js\"));\n\n(todos => {\n  const list = document.createElement('ul');\n\n  list.innerHTML = todos.reduce(\n    (html, todo) => html + Object(_renderUtils__WEBPACK_IMPORTED_MODULE_0__[\"listItemTemplate\"])(todo),\n    ''\n  );\n  list.addEventListener('click', e => {\n    if (e.target.tagName === 'BUTTON') {\n      getTodoHandlers().then(m => {\n        m.default.complete(e.target);\n      });\n    }\n  });\n\n  document\n    .getElementsByTagName('body')[0]\n    .appendChild(list);\n})([\n  'Repot plants',\n  'Fill bird feeders',\n  'Restring guitar'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");
  }),
  "./src/renderUtils.js": (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemTemplate\", function() { return listItemTemplate; });\nconst listItemTemplate = text => `<li><button>${text}</button></li>`;\n\n//# sourceURL=webpack:///./src/renderUtils.js?");
  })
});