({
  "./src/index.js": (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    
    eval(`
      __webpack_require__.r(__webpack_exports__);
      
      /* harmony import */
      var _renderUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUtils */ \"./src/renderUtils.js\");
      
      /* harmony import */
      var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");
      
      (todos => {
        const list = document.createElement('ul');
        
        list.innerHTML = todos.reduce(
          (html, todo) => html + Object(
            _renderUtils__WEBPACK_IMPORTED_MODULE_0__['listItemTemplate']
          )(todo),
          ''
        );
          
        list.addEventListener('click', e => {
          if (e.target.tagName === 'BUTTON') {
            Object(_todo__WEBPACK_IMPORTED_MODULE_1__['complete'])(e.target);
          }
        });
        
        document
          .getElementsByTagName('body')[0]
          .appendChild(list);
      })([
        'Repot plants',
        'Fill bird feeders',
        'Restring guitar'
      ]); //# sourceURL=webpack:///./src/index.js?
    `);
  })
});