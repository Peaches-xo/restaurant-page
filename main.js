/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPageLoad: () => (/* binding */ contactPageLoad)
/* harmony export */ });
// Module to load contact page content

//export this function below


//function that creates div, adds content and appends to dom
function contactPageLoad(){
    console.log("contactPageLoad is loaded");

        // const content = document.createElement('div');
        // content.id = "content";

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


// create component class or factory to be able to create each component 
// header and footer could be the same 
// each of the wrappers could be the same 

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad)
/* harmony export */ });
// Module to load HOME MODULE content

//export this function below


//function that creates div, adds content and appends to dom
function homePageLoad(){

    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";

    //ADDS CONTENT
    //function that creates section
    //appends to content
        function createSection(obj){
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
         
            let heading = document.createElement(obj.titleTag);
            heading.textContent = obj.titleText;
            wrapper.appendChild(heading);
            
            if(obj.textTag){
                let text = document.createElement(obj.textTag);
                text.textContent = obj.bodyText;
                wrapper.appendChild(text);
            }

            if(obj.imgSrc){
                let img = document.createElement('img');
                img.setAttribute('src', obj.imgSrc);
                img.setAttribute('alt', obj.imgAlt);
                img.setAttribute('style', obj.style);
                wrapper.appendChild(img);        
            }

            content.appendChild(wrapper);
         }
         contentArrayofObjects.forEach(createSection);


    //APPENDS TO DOM
    document.body.appendChild(content);
}


//a way to create each section object then append them all to one element and return that element

/* create function, pass in array of objects,
for each object: 
    create div with class of wrapper
    Create heading element using value of titleTag
    Set text of heading using TitleText 
    append heading to wrapper
    Create p element (if req)
    Set text of p 
    append p to wrapper
    Create img element (if req)
    Set src of img
    append img to wrapper
    append wrapper to content
*/



const heading = {
    titleTag: "h1",
    titleText : "The Stardrop Saloon",
}

const about = {
    titleTag: "h2",
    titleText: "About",
    textTag: "p",
    bodyText: "The Stardrop Saloon is owned by Gus, and is located in the center of Pelican Town. It's a meeting place for many villagers, and hosts a variety of entertainment, including fully playable arcade machines, a jukebox, and a Joja Cola soda machine.",
    imgSrc: "/src/saloon.png",
    imgAlt: "Stardw Valley Stardrop Saloon",
    style: "width: 250px",
}

const hours = {
    titleTag: "h2",
    titleText: "Hours",
    textTag: "p",
    bodyText: "12:00pm - 12:00am",
}

const location = {
    titleTag: "h2",
    titleText: "Location",
    textTag: "p",
    bodyText: "The Stardrop Saloon is located in the center of Pelican Town.",
    imgSrc : "/src/Map.png",
    imgAlt: "Stardew Valley Map",
}

let contentArrayofObjects = [heading, about, hours, location];



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





// Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.

function createHeader(){
    //create elements
    let header = document.createElement('header');
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
    header.addEventListener('click', eventHandler);
    return header;
}
document.body.appendChild(createHeader());

let content = document.querySelector('#content');


function eventHandler(e){
    switch (e.target.id){
        case 'home': console.log('home btn clicked');
        //code to unappend children


        //if div#content exists in document.body.childNodes, remove it from dom
        let mynodeList = document.body.childNodes;
console.log(mynodeList);
        if (mynodeList.includes("div#content")){
            console.log("document body includes div#content");
        }
       //console.log(document.body.children);
       console.log(document.body.childNodes);

        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();
        //console.log(document.body.children);
        console.log(document.body.childNodes);

        break;
        case 'menu': console.log('menu btn clicked');
        //code to unappend children


        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPageLoad)();
        break;

        case 'contact': console.log('contact btn clicked');
        //code to unappend children

        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactPageLoad)();
        break; 
    }
}




function createFooter(){

}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQzJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckNBOztBQUVBO0FBQ3dCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ0E7QUFDTTs7O0FBRy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBWTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsUUFBUSxzREFBWTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBLFFBQVEsNERBQWU7QUFDdkI7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGUgdG8gbG9hZCBjb250YWN0IHBhZ2UgY29udGVudFxuXG4vL2V4cG9ydCB0aGlzIGZ1bmN0aW9uIGJlbG93XG5leHBvcnQgeyBjb250YWN0UGFnZUxvYWQgfTtcblxuLy9mdW5jdGlvbiB0aGF0IGNyZWF0ZXMgZGl2LCBhZGRzIGNvbnRlbnQgYW5kIGFwcGVuZHMgdG8gZG9tXG5mdW5jdGlvbiBjb250YWN0UGFnZUxvYWQoKXtcbiAgICBjb25zb2xlLmxvZyhcImNvbnRhY3RQYWdlTG9hZCBpcyBsb2FkZWRcIik7XG5cbiAgICAgICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgbGV0IG1lbnVJdGVtc0FycmF5ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdOyBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL2NyZWF0ZSBsaSwgYWRkIGFycmF5IGl0ZW0gYXMgdGV4dENvbnRlbnQgb2YgbGksIGFkZCBpZCwgYWRkIGxpIGFzIGNoaWxkIG9mIG1lbnUgKHVsKVxuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc0FycmF5W2ldO1xuICAgICAgICBsaXN0SXRlbS5pZCA9IG1lbnVJdGVtc0FycmF5W2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cbiAgICAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAvL2FwcGVuZCB0byBjb250ZW50IGRpdiAtIGNhbiB0aGlzIGJlIGEgbG9vcCB0aGF0IGNoZWNrcyBpZiBlbGVtZW50cyBleGlzdCBhbmQgaWYgc28sIGFwcGVuZCB0aGVtP1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG4vLyBjcmVhdGUgY29tcG9uZW50IGNsYXNzIG9yIGZhY3RvcnkgdG8gYmUgYWJsZSB0byBjcmVhdGUgZWFjaCBjb21wb25lbnQgXG4vLyBoZWFkZXIgYW5kIGZvb3RlciBjb3VsZCBiZSB0aGUgc2FtZSBcbi8vIGVhY2ggb2YgdGhlIHdyYXBwZXJzIGNvdWxkIGJlIHRoZSBzYW1lICIsIi8vIE1vZHVsZSB0byBsb2FkIEhPTUUgTU9EVUxFIGNvbnRlbnRcblxuLy9leHBvcnQgdGhpcyBmdW5jdGlvbiBiZWxvd1xuZXhwb3J0IHsgaG9tZVBhZ2VMb2FkIH07XG5cbi8vZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGRpdiwgYWRkcyBjb250ZW50IGFuZCBhcHBlbmRzIHRvIGRvbVxuZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCl7XG5cbiAgICAvL0NSRUFURVMgVEhFIERJVlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG5cbiAgICAvL0FERFMgQ09OVEVOVFxuICAgIC8vZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHNlY3Rpb25cbiAgICAvL2FwcGVuZHMgdG8gY29udGVudFxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKG9iail7XG4gICAgICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgICAgICBcbiAgICAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGl0bGVUYWcpO1xuICAgICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50aXRsZVRleHQ7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihvYmoudGV4dFRhZyl7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50ZXh0VGFnKTtcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gb2JqLmJvZHlUZXh0O1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG9iai5pbWdTcmMpe1xuICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouaW1nU3JjKTtcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBvYmouaW1nQWx0KTtcbiAgICAgICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzdHlsZScsIG9iai5zdHlsZSk7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWcpOyAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICB9XG4gICAgICAgICBjb250ZW50QXJyYXlvZk9iamVjdHMuZm9yRWFjaChjcmVhdGVTZWN0aW9uKTtcblxuXG4gICAgLy9BUFBFTkRTIFRPIERPTVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cblxuLy9hIHdheSB0byBjcmVhdGUgZWFjaCBzZWN0aW9uIG9iamVjdCB0aGVuIGFwcGVuZCB0aGVtIGFsbCB0byBvbmUgZWxlbWVudCBhbmQgcmV0dXJuIHRoYXQgZWxlbWVudFxuXG4vKiBjcmVhdGUgZnVuY3Rpb24sIHBhc3MgaW4gYXJyYXkgb2Ygb2JqZWN0cyxcbmZvciBlYWNoIG9iamVjdDogXG4gICAgY3JlYXRlIGRpdiB3aXRoIGNsYXNzIG9mIHdyYXBwZXJcbiAgICBDcmVhdGUgaGVhZGluZyBlbGVtZW50IHVzaW5nIHZhbHVlIG9mIHRpdGxlVGFnXG4gICAgU2V0IHRleHQgb2YgaGVhZGluZyB1c2luZyBUaXRsZVRleHQgXG4gICAgYXBwZW5kIGhlYWRpbmcgdG8gd3JhcHBlclxuICAgIENyZWF0ZSBwIGVsZW1lbnQgKGlmIHJlcSlcbiAgICBTZXQgdGV4dCBvZiBwIFxuICAgIGFwcGVuZCBwIHRvIHdyYXBwZXJcbiAgICBDcmVhdGUgaW1nIGVsZW1lbnQgKGlmIHJlcSlcbiAgICBTZXQgc3JjIG9mIGltZ1xuICAgIGFwcGVuZCBpbWcgdG8gd3JhcHBlclxuICAgIGFwcGVuZCB3cmFwcGVyIHRvIGNvbnRlbnRcbiovXG5cblxuXG5jb25zdCBoZWFkaW5nID0ge1xuICAgIHRpdGxlVGFnOiBcImgxXCIsXG4gICAgdGl0bGVUZXh0IDogXCJUaGUgU3RhcmRyb3AgU2Fsb29uXCIsXG59XG5cbmNvbnN0IGFib3V0ID0ge1xuICAgIHRpdGxlVGFnOiBcImgyXCIsXG4gICAgdGl0bGVUZXh0OiBcIkFib3V0XCIsXG4gICAgdGV4dFRhZzogXCJwXCIsXG4gICAgYm9keVRleHQ6IFwiVGhlIFN0YXJkcm9wIFNhbG9vbiBpcyBvd25lZCBieSBHdXMsIGFuZCBpcyBsb2NhdGVkIGluIHRoZSBjZW50ZXIgb2YgUGVsaWNhbiBUb3duLiBJdCdzIGEgbWVldGluZyBwbGFjZSBmb3IgbWFueSB2aWxsYWdlcnMsIGFuZCBob3N0cyBhIHZhcmlldHkgb2YgZW50ZXJ0YWlubWVudCwgaW5jbHVkaW5nIGZ1bGx5IHBsYXlhYmxlIGFyY2FkZSBtYWNoaW5lcywgYSBqdWtlYm94LCBhbmQgYSBKb2phIENvbGEgc29kYSBtYWNoaW5lLlwiLFxuICAgIGltZ1NyYzogXCIvc3JjL3NhbG9vbi5wbmdcIixcbiAgICBpbWdBbHQ6IFwiU3RhcmR3IFZhbGxleSBTdGFyZHJvcCBTYWxvb25cIixcbiAgICBzdHlsZTogXCJ3aWR0aDogMjUwcHhcIixcbn1cblxuY29uc3QgaG91cnMgPSB7XG4gICAgdGl0bGVUYWc6IFwiaDJcIixcbiAgICB0aXRsZVRleHQ6IFwiSG91cnNcIixcbiAgICB0ZXh0VGFnOiBcInBcIixcbiAgICBib2R5VGV4dDogXCIxMjowMHBtIC0gMTI6MDBhbVwiLFxufVxuXG5jb25zdCBsb2NhdGlvbiA9IHtcbiAgICB0aXRsZVRhZzogXCJoMlwiLFxuICAgIHRpdGxlVGV4dDogXCJMb2NhdGlvblwiLFxuICAgIHRleHRUYWc6IFwicFwiLFxuICAgIGJvZHlUZXh0OiBcIlRoZSBTdGFyZHJvcCBTYWxvb24gaXMgbG9jYXRlZCBpbiB0aGUgY2VudGVyIG9mIFBlbGljYW4gVG93bi5cIixcbiAgICBpbWdTcmMgOiBcIi9zcmMvTWFwLnBuZ1wiLFxuICAgIGltZ0FsdDogXCJTdGFyZGV3IFZhbGxleSBNYXBcIixcbn1cblxubGV0IGNvbnRlbnRBcnJheW9mT2JqZWN0cyA9IFtoZWFkaW5nLCBhYm91dCwgaG91cnMsIGxvY2F0aW9uXTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVQYWdlTG9hZCB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGNvbnRhY3RQYWdlTG9hZCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuXG4vLyBXcml0ZSB0aGUgdGFiLXN3aXRjaGluZyBsb2dpYyBpbnNpZGUgb2YgaW5kZXguanMuIFlvdSBzaG91bGQgaGF2ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lwZXMgb3V0IHRoZSBjdXJyZW50IGNvbnRlbnRzIGFuZCB0aGVuIHJ1bnMgdGhlIGNvcnJlY3Qg4oCYdGFiIG1vZHVsZeKAmSB0byBwb3B1bGF0ZSBpdCBhZ2Fpbi5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBsZXQgbWVudUl0ZW1zQXJyYXkgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vY3JlYXRlIGxpLCBhZGQgYXJyYXkgaXRlbSBhcyB0ZXh0Q29udGVudCBvZiBsaSwgYWRkIGlkLCBhZGQgbGkgYXMgY2hpbGQgb2YgbWVudSAodWwpXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gbWVudUl0ZW1zQXJyYXlbaV07XG4gICAgICAgIGxpc3RJdGVtLmlkID0gbWVudUl0ZW1zQXJyYXlbaV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXIpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbmZ1bmN0aW9uIGV2ZW50SGFuZGxlcihlKXtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKXtcbiAgICAgICAgY2FzZSAnaG9tZSc6IGNvbnNvbGUubG9nKCdob21lIGJ0biBjbGlja2VkJyk7XG4gICAgICAgIC8vY29kZSB0byB1bmFwcGVuZCBjaGlsZHJlblxuXG5cbiAgICAgICAgLy9pZiBkaXYjY29udGVudCBleGlzdHMgaW4gZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzLCByZW1vdmUgaXQgZnJvbSBkb21cbiAgICAgICAgbGV0IG15bm9kZUxpc3QgPSBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXM7XG5jb25zb2xlLmxvZyhteW5vZGVMaXN0KTtcbiAgICAgICAgaWYgKG15bm9kZUxpc3QuaW5jbHVkZXMoXCJkaXYjY29udGVudFwiKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvY3VtZW50IGJvZHkgaW5jbHVkZXMgZGl2I2NvbnRlbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAvL2NvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgaG9tZVBhZ2VMb2FkKCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuY2hpbGROb2Rlcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOiBjb25zb2xlLmxvZygnbWVudSBidG4gY2xpY2tlZCcpO1xuICAgICAgICAvL2NvZGUgdG8gdW5hcHBlbmQgY2hpbGRyZW5cblxuXG4gICAgICAgIG1lbnVQYWdlTG9hZCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjb250YWN0JzogY29uc29sZS5sb2coJ2NvbnRhY3QgYnRuIGNsaWNrZWQnKTtcbiAgICAgICAgLy9jb2RlIHRvIHVuYXBwZW5kIGNoaWxkcmVuXG5cbiAgICAgICAgY29udGFjdFBhZ2VMb2FkKCk7XG4gICAgICAgIGJyZWFrOyBcbiAgICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuXG59XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==