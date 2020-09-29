(function(modules) {
	var installedModules = {};

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

	return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/index.js": (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ \"./src/renderUtils.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n(todos => {\n  const list = document.createElement('ul');\n\n  list.innerHTML = todos.reduce(\n    (html, todo) => html + Object(_renderUtils__WEBPACK_IMPORTED_MODULE_0__[\"listItemTemplate\"])(todo),\n    ''\n  );\n  \n  list.addEventListener('click', e => {\n    if (e.target.tagName === 'BUTTON') {\n      Object(_todo__WEBPACK_IMPORTED_MODULE_1__[\"complete\"])(e.target);\n    }\n  });\n\n  document\n    .getElementsByTagName('body')[0]\n    .appendChild(list);\n})([\n  'Repot plants',\n  'Fill bird feeders',\n  'Restring guitar'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");
  }),
  "./src/renderUtils.js": (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listItemTemplate\", function() { return listItemTemplate; });\nconst listItemTemplate = text => `<li><button>${text}</button></li>`;\n\n//# sourceURL=webpack:///./src/renderUtils.js?");
  }),
  "./src/todo.js": (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"complete\", function() { return complete; });\nconst complete = el => {\n  if (el.getAttribute('disabled') != 'true') {\n    el.setAttribute('disabled', true);\n  }\n};\n\n//# sourceURL=webpack:///./src/todo.js?");
  })
});