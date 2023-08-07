/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad)
/* harmony export */ });
// Module to load home page content

//export this function below


//function that creates div, adds content and appends to dom
function homePageLoad(){
    console.log("HomePageLoad is loaded");

    const content = document.createElement('div');
    content.id = "content";

    //create elements
    const header = document.createElement('header');
    const menu = document.createElement('ul');

    let menuItemsArray = ["Home", "Menu", "Contact"]; 

    for (let i = 0; i < menuItemsArray.length; i++){
        //create li, add array item as textContent of li, add id, add li as child of menu (ul)
        let listItem = document.createElement('li');
        listItem.textContent = menuItemsArray[i];
        listItem.id = menuItemsArray[i].toLowerCase();
        menu.appendChild(listItem);
    }
       
    header.appendChild(menu);

    //append to content div - can this be a loop that checks if elements exist and if so, append them?
    content.appendChild(header);
    
    return content;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



//write initial page load function that will create each div and append to div.content
function pageLoad() {
    window.addEventListener("DOMContentLoaded", (event) => {
        // console.log("DOM fully loaded and parsed");

        // const content = document.querySelector('div#content');

        // //create elements
        // const header = document.createElement('header');
        // const menu = document.createElement('ul');

        // let menuItemsArray = ["Home", "Menu", "Contact"]; 

        // for (let i = 0; i < menuItemsArray.length; i++){
        //     //create li, add array item as textContent of li, add id, add li as child of menu (ul)
        //     let listItem = document.createElement('li');
        //     listItem.textContent = menuItemsArray[i];
        //     listItem.id = menuItemsArray[i].toLowerCase();
        //     menu.appendChild(listItem);
        // }
       
        // header.appendChild(menu);

        // //append to content div - can this be a loop that checks if elements exist and if so, append them?
        // content.appendChild(header);
        
        // return content;
    })
};


//document.body.appendChild(pageLoad());
document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)());




// create component class or factory to be able to create each component 
// header and footer could be the same 
// each of the wrappers could be the same 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ3dCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnlDOzs7QUFHekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQSwwQkFBMEIsc0RBQVk7Ozs7O0FBS3RDO0FBQ0E7QUFDQSwwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGUgdG8gbG9hZCBob21lIHBhZ2UgY29udGVudFxuXG4vL2V4cG9ydCB0aGlzIGZ1bmN0aW9uIGJlbG93XG5leHBvcnQgeyBob21lUGFnZUxvYWQgfTtcblxuLy9mdW5jdGlvbiB0aGF0IGNyZWF0ZXMgZGl2LCBhZGRzIGNvbnRlbnQgYW5kIGFwcGVuZHMgdG8gZG9tXG5mdW5jdGlvbiBob21lUGFnZUxvYWQoKXtcbiAgICBjb25zb2xlLmxvZyhcIkhvbWVQYWdlTG9hZCBpcyBsb2FkZWRcIik7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGxldCBtZW51SXRlbXNBcnJheSA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTsgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9jcmVhdGUgbGksIGFkZCBhcnJheSBpdGVtIGFzIHRleHRDb250ZW50IG9mIGxpLCBhZGQgaWQsIGFkZCBsaSBhcyBjaGlsZCBvZiBtZW51ICh1bClcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBtZW51SXRlbXNBcnJheVtpXTtcbiAgICAgICAgbGlzdEl0ZW0uaWQgPSBtZW51SXRlbXNBcnJheVtpXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgLy9hcHBlbmQgdG8gY29udGVudCBkaXYgLSBjYW4gdGhpcyBiZSBhIGxvb3AgdGhhdCBjaGVja3MgaWYgZWxlbWVudHMgZXhpc3QgYW5kIGlmIHNvLCBhcHBlbmQgdGhlbT9cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBob21lUGFnZUxvYWQgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cblxuLy93cml0ZSBpbml0aWFsIHBhZ2UgbG9hZCBmdW5jdGlvbiB0aGF0IHdpbGwgY3JlYXRlIGVhY2ggZGl2IGFuZCBhcHBlbmQgdG8gZGl2LmNvbnRlbnRcbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJET00gZnVsbHkgbG9hZGVkIGFuZCBwYXJzZWRcIik7XG5cbiAgICAgICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG5cbiAgICAgICAgLy8gLy9jcmVhdGUgZWxlbWVudHNcbiAgICAgICAgLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIC8vIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICAgIC8vIGxldCBtZW51SXRlbXNBcnJheSA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTsgXG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vICAgICAvL2NyZWF0ZSBsaSwgYWRkIGFycmF5IGl0ZW0gYXMgdGV4dENvbnRlbnQgb2YgbGksIGFkZCBpZCwgYWRkIGxpIGFzIGNoaWxkIG9mIG1lbnUgKHVsKVxuICAgICAgICAvLyAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgLy8gICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gbWVudUl0ZW1zQXJyYXlbaV07XG4gICAgICAgIC8vICAgICBsaXN0SXRlbS5pZCA9IG1lbnVJdGVtc0FycmF5W2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vICAgICBtZW51LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgLy8gfVxuICAgICAgIFxuICAgICAgICAvLyBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgLy8gLy9hcHBlbmQgdG8gY29udGVudCBkaXYgLSBjYW4gdGhpcyBiZSBhIGxvb3AgdGhhdCBjaGVja3MgaWYgZWxlbWVudHMgZXhpc3QgYW5kIGlmIHNvLCBhcHBlbmQgdGhlbT9cbiAgICAgICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBcbiAgICAgICAgLy8gcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSlcbn07XG5cblxuLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VMb2FkKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lUGFnZUxvYWQoKSk7XG5cblxuXG5cbi8vIGNyZWF0ZSBjb21wb25lbnQgY2xhc3Mgb3IgZmFjdG9yeSB0byBiZSBhYmxlIHRvIGNyZWF0ZSBlYWNoIGNvbXBvbmVudCBcbi8vIGhlYWRlciBhbmQgZm9vdGVyIGNvdWxkIGJlIHRoZSBzYW1lIFxuLy8gZWFjaCBvZiB0aGUgd3JhcHBlcnMgY291bGQgYmUgdGhlIHNhbWUgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9