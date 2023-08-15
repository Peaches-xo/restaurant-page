"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/Stardew_Valley.ttf */ "./src/Stardew_Valley.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/OpenSans.ttf */ "./src/OpenSans.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/SVThin.ttf */ "./src/SVThin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/med_logo.png */ "./src/med_logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/stardewbackground.png */ "./src/stardewbackground.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/border.png */ "./src/border.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./menubox.png */ "./src/menubox.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* CSS for TOP // Restaurant Page */
* {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
}
img { 
    max-width: 100%; 
    height: auto; 
}

@font-face {
    font-family: 'StardewValley';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

@font-face {
    font-family: 'OpenSans';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

@font-face{
    font-family: 'SV_Thin';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}

body{
    position: relative;
    min-height: 100vh;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat fixed center center / cover;
    background-repeat: no-repeat;
    background-position: center;
}

header{
    position:sticky;
}

header ul,
footer ul{
   display: flex;
   justify-content: center;
   background-color: rgba(21, 71, 148, 0.8);
}

header li{
    font-size: 30px;
}

footer li{
   font-size: 22px;
}

header li,
footer li{
    padding: 10px 20px;
    color: #fbfbf0 ;
    font-family: 'StardewValley';
    transition: 0.2s;
}
a{
    color: #fbfbf0;
}

a:hover,
li:hover{
    /* color: #d8d8bd;
    color: #DFA22D; */
    color: #edcfae;
    cursor: pointer;
    
}

#content{
    background:linear-gradient(180deg, rgba(255,200,124,1) 0%, rgba(255,200,124,1) 40%, rgba(237,172,109,1) 100%);
    font-family: 'SV_Thin';
    color: #2D0915;
    text-shadow: 0px 2px #d9965fa8;
    margin: 10px 100px;
    padding: 50px;
    border: solid 10px transparent;
    border-radius: 10px;
    border-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 33 stretch;
    border-image-slice: 33%;
    transition: 0.3s ease;
    line-height: 1.1;
    letter-spacing: 0.3px;
    word-spacing: 1.5px;
}

.contactpage{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.wrapper{
    margin: 20px 0px;
}

.wrapper h1 {
    font-family: 'StardewValley';

    font-size: 50px;
    margin-bottom: 20px;
    text-align: center;
}
p {
    margin: 10px;
    font-size: 18px;
}

section{
    /* background-color: #ffffff57; */
    margin: 20px auto;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    min-width: 80%;

}

.itemWrapper{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat;
    background-size: auto;
    display:flex;
    margin: 10px 0px;
    padding: 16px 30px 0px 26px;
    min-height: 162px;
    /* gap: 15px; */
    width: 320px;
    justify-content: space-between;
}

.itemWrapper h2{
    padding: 20px 0px 0px;
}

.rightwrap{
   display:flex;
   align-items: center;
}



/* home.js */
.innerWrap{
    display:flex;
    align-items: center;
    gap: 20px;
}
.innerWrap p{
    width: 50%;
}




footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    
}
footer ul{
    background-color: rgb(21 148 136 / 37%);
}






h1{
    animation: loader 1s ease-in ;
}

@keyframes loader {
    0% {
      transform: translateY(-10px);
      opacity: 0%;
    }
    100% {
       transform: translateY(0px);
       opacity: 100%; 
    }
  }
 




@media screen and (max-width: 900px){
    #content{
        padding: 5%;
        margin: 5%;
    }
    .innerWrap{
        flex-direction: column;
    }

    .innerWrap p{
        width: unset;
    }
    
}

@media screen and (max-width: 400px){
    header li{
        padding: 10px 5px;
        font-size: 24px;
    }

    footer li{
        padding: 10px 5px;
        font-size: 20px;
    }

    header ul{
        gap: 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;IACI,SAAS;IACT,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,+DAAsD;AAC1D;;AAEA;IACI,uBAAuB;IACvB,+DAAgD;AACpD;;AAEA;IACI,sBAAsB;IACtB,+DAA8C;AAClD;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kIAA6G;IAC7G,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;;GAEG,aAAa;GACb,uBAAuB;GACvB,wCAAwC;AAC3C;;AAEA;IACI,eAAe;AACnB;;AAEA;GACG,eAAe;AAClB;;AAEA;;IAEI,kBAAkB;IAClB,eAAe;IACf,4BAA4B;IAC5B,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;;AAEA;;IAEI;qBACiB;IACjB,cAAc;IACd,eAAe;;AAEnB;;AAEA;IACI,6GAA6G;IAC7G,sBAAsB;IACtB,cAAc;IACd,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gEAA+C;IAC/C,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;;IAE5B,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;;AAElB;;AAEA;IACI,6DAA0C;IAC1C,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;GACG,YAAY;GACZ,mBAAmB;AACtB;;;;AAIA,YAAY;AACZ;IACI,YAAY;IACZ,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,UAAU;AACd;;;;;AAKA;IACI,eAAe;IACf,SAAS;IACT,WAAW;;AAEf;AACA;IACI,uCAAuC;AAC3C;;;;;;;AAOA;IACI,6BAA6B;AACjC;;AAEA;IACI;MACE,4BAA4B;MAC5B,WAAW;IACb;IACA;OACG,0BAA0B;OAC1B,aAAa;IAChB;EACF;;;;;;AAMF;IACI;QACI,WAAW;QACX,UAAU;IACd;IACA;QACI,sBAAsB;IAC1B;;IAEA;QACI,YAAY;IAChB;;AAEJ;;AAEA;IACI;QACI,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,SAAS;IACb;AACJ","sourcesContent":["/* CSS for TOP // Restaurant Page */\n* {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    list-style-type: none;\n}\nimg { \n    max-width: 100%; \n    height: auto; \n}\n\n@font-face {\n    font-family: 'StardewValley';\n    src: url('/src/Stardew_Valley.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'OpenSans';\n    src: url('/src/OpenSans.ttf') format('truetype');\n}\n\n@font-face{\n    font-family: 'SV_Thin';\n    src: url('/src/SVThin.ttf') format('truetype');\n}\n\nbody{\n    position: relative;\n    min-height: 100vh;\n    background: url('/src/med_logo.png'), url('/src/stardewbackground.png') no-repeat fixed center center / cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\nheader{\n    position:sticky;\n}\n\nheader ul,\nfooter ul{\n   display: flex;\n   justify-content: center;\n   background-color: rgba(21, 71, 148, 0.8);\n}\n\nheader li{\n    font-size: 30px;\n}\n\nfooter li{\n   font-size: 22px;\n}\n\nheader li,\nfooter li{\n    padding: 10px 20px;\n    color: #fbfbf0 ;\n    font-family: 'StardewValley';\n    transition: 0.2s;\n}\na{\n    color: #fbfbf0;\n}\n\na:hover,\nli:hover{\n    /* color: #d8d8bd;\n    color: #DFA22D; */\n    color: #edcfae;\n    cursor: pointer;\n    \n}\n\n#content{\n    background:linear-gradient(180deg, rgba(255,200,124,1) 0%, rgba(255,200,124,1) 40%, rgba(237,172,109,1) 100%);\n    font-family: 'SV_Thin';\n    color: #2D0915;\n    text-shadow: 0px 2px #d9965fa8;\n    margin: 10px 100px;\n    padding: 50px;\n    border: solid 10px transparent;\n    border-radius: 10px;\n    border-image: url('/src/border.png') 33 stretch;\n    border-image-slice: 33%;\n    transition: 0.3s ease;\n    line-height: 1.1;\n    letter-spacing: 0.3px;\n    word-spacing: 1.5px;\n}\n\n.contactpage{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.wrapper{\n    margin: 20px 0px;\n}\n\n.wrapper h1 {\n    font-family: 'StardewValley';\n\n    font-size: 50px;\n    margin-bottom: 20px;\n    text-align: center;\n}\np {\n    margin: 10px;\n    font-size: 18px;\n}\n\nsection{\n    /* background-color: #ffffff57; */\n    margin: 20px auto;\n    padding: 10px 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    min-width: 80%;\n\n}\n\n.itemWrapper{\n    background: url('./menubox.png') no-repeat;\n    background-size: auto;\n    display:flex;\n    margin: 10px 0px;\n    padding: 16px 30px 0px 26px;\n    min-height: 162px;\n    /* gap: 15px; */\n    width: 320px;\n    justify-content: space-between;\n}\n\n.itemWrapper h2{\n    padding: 20px 0px 0px;\n}\n\n.rightwrap{\n   display:flex;\n   align-items: center;\n}\n\n\n\n/* home.js */\n.innerWrap{\n    display:flex;\n    align-items: center;\n    gap: 20px;\n}\n.innerWrap p{\n    width: 50%;\n}\n\n\n\n\nfooter{\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    \n}\nfooter ul{\n    background-color: rgb(21 148 136 / 37%);\n}\n\n\n\n\n\n\nh1{\n    animation: loader 1s ease-in ;\n}\n\n@keyframes loader {\n    0% {\n      transform: translateY(-10px);\n      opacity: 0%;\n    }\n    100% {\n       transform: translateY(0px);\n       opacity: 100%; \n    }\n  }\n \n\n\n\n\n@media screen and (max-width: 900px){\n    #content{\n        padding: 5%;\n        margin: 5%;\n    }\n    .innerWrap{\n        flex-direction: column;\n    }\n\n    .innerWrap p{\n        width: unset;\n    }\n    \n}\n\n@media screen and (max-width: 400px){\n    header li{\n        padding: 10px 5px;\n        font-size: 24px;\n    }\n\n    footer li{\n        padding: 10px 5px;\n        font-size: 20px;\n    }\n\n    header ul{\n        gap: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPageLoad: () => (/* binding */ contactPageLoad)
/* harmony export */ });
/* harmony import */ var _gus_dialog_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gus-dialog.png */ "./src/gus-dialog.png");
/* harmony import */ var _emily_dialog_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emily-dialog.png */ "./src/emily-dialog.png");
// Module to load CONTACT MODULE content





//function that creates div, adds content and appends to dom
function contactPageLoad(){
    console.log("contactPageLoad is loaded");

        const content = document.createElement('div');
        content.id = "content";
        content.classList.add("contactpage");
        const footer = document.querySelector('footer');

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


                const myImage = new Image();
                myImage.src = obj.imgName;

                //let img = document.createElement('img');
                //img.setAttribute('src', obj.imgSrc);
                myImage.setAttribute('alt', obj.imgAlt);
                //myImage.setAttribute('style', obj.style);
                myImage.classList.add(obj.titleText)
                wrapper.appendChild(myImage);        
            }
    
            content.appendChild(wrapper);
         }
         contentArrayofObjects.forEach(createSection);

         //APPENDS TO DOM
         document.body.insertBefore(content,footer); 
}






//DATA OBJECTS
const heading = {
    titleTag: "h1",
    titleText : "Contact Us",
}

const gus = {
    titleTag: "h2",
    titleText : "Gus",
    textTag: "p",
    bodyText: "Owner - Stardrop Saloon.",
    imgName: _gus_dialog_png__WEBPACK_IMPORTED_MODULE_0__,
    imgSrc: "./gus-dialog.png",
    imgAlt: "Gus Dialog Box Image",
}

const emily = {
    titleTag: "h2",
    titleText : "Emily",
    textTag: "p",
    bodyText: "Bartender - Stardrop Saloon",
    imgName: _emily_dialog_png__WEBPACK_IMPORTED_MODULE_1__,
    imgSrc: "./emily-dialog.png",
    imgAlt: "Emily Dialog Box Image",
}



let contentArrayofObjects = [heading, gus, emily];

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad)
/* harmony export */ });
/* harmony import */ var _Saloon_nobg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Saloon-nobg.png */ "./src/Saloon-nobg.png");
/* harmony import */ var _Map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map.png */ "./src/Map.png");
// Module to load HOME MODULE content





//function that creates div, adds content and appends to dom
function homePageLoad(){

    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";
    const footer = document.querySelector('footer');
   
    //ADDS CONTENT
        function createSection(obj){
            let wrapper = document.createElement('div');
            wrapper.classList.add('wrapper');
         
            let heading = document.createElement(obj.titleTag);
            heading.textContent = obj.titleText;
            wrapper.appendChild(heading);
            

            let innerWrap = document.createElement('div');
            innerWrap.classList.add('innerWrap');

            if(obj.textTag){
                let text = document.createElement(obj.textTag);
                text.textContent = obj.bodyText;
                innerWrap.appendChild(text);
            }

            if(obj.imgSrc){
                innerWrap.appendChild(imageFactory(obj.imgName));
            }
            wrapper.appendChild(innerWrap);
            content.appendChild(wrapper);
         }
         contentArrayofObjects.forEach(createSection);


    //APPENDS TO DOM
    document.body.insertBefore(content,footer); 
}


//DATA OBJECTS
const heading = {
    titleTag: "h1",
    titleText : "The Stardrop Saloon",
}

const about = {
    titleTag: "h2",
    titleText: "About",
    textTag: "p",
    bodyText: "The Stardrop Saloon is owned by Gus, and is located in the center of Pelican Town. It's a meeting place for many villagers, and hosts a variety of entertainment, including fully playable arcade machines, a jukebox, and a Joja Cola soda machine.",
    imgSrc: "./src/saloon.png",
    imgName: _Saloon_nobg_png__WEBPACK_IMPORTED_MODULE_0__,
    imgAlt: "Stardew Valley Stardrop Saloon",
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
    imgName: _Map_png__WEBPACK_IMPORTED_MODULE_1__,
    imgSrc : "/src/Map.png",
    imgAlt: "Stardew Valley Map",
}

let contentArrayofObjects = [heading, about, hours, location];

function imageFactory(image){
    const myImage = new Image();
    myImage.src = image;
    return myImage;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






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

function eventHandler(e){
    switch (e.target.id){
        case 'home':
            clearContent();
            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();
            break;
        case 'menu': 
            clearContent();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPageLoad)();
            break;
        case 'contact': 
            clearContent();
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactPageLoad)();
            break; 
    }
}

function clearContent(){
    const element = document.getElementById("content");
    if (element !== null){   
         element.remove();
    }
}


function createFooter(){
    //create elements
    let footer = document.createElement('footer');
    const creditMenu = document.createElement('ul');

    //create objects for each array item
    let credits = {
        loadCredits(){
            alert("Image credits: www.stardewvalley.com");
        },
        linkText: 'Credits'
    }

    let odin = {
        link: 'https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page',
        linkText: 'The Odin Project'
    }

    let github = {
        link: 'https://github.com/Peaches-xo/restaurant-page',
        linkText: 'Github'
    }

    let creditMenuItemsArray = [credits, odin, github]; 


    creditMenuItemsArray.forEach((item) => {
        let listItem = document.createElement('li');
        
        if (item.link){
            let linkItem = document.createElement('a');
            linkItem.href = item.link;
            linkItem.textContent = item.linkText;
            listItem.appendChild(linkItem);
        } else {
            listItem.textContent = item.linkText;
        }
        creditMenu.appendChild(listItem);

        

    })
footer.appendChild(creditMenu);




return footer;
}
document.body.appendChild(createFooter());
let creditBtn = document.querySelector('footer>ul>li:first-child');
creditBtn.addEventListener('click', () => alert("Images from www.stardewvalley.com")); 
console.log(creditBtn);






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)
/* harmony export */ });
/* harmony import */ var _Beer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beer.png */ "./src/Beer.png");
/* harmony import */ var _Coffee_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coffee.png */ "./src/Coffee.png");
/* harmony import */ var _Joja_cola_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Joja_cola.png */ "./src/Joja_cola.png");
/* harmony import */ var _Salad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Salad.png */ "./src/Salad.png");
/* harmony import */ var _Bread_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bread.png */ "./src/Bread.png");
/* harmony import */ var _Spaghetti_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spaghetti.png */ "./src/Spaghetti.png");
/* harmony import */ var _Pizza_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pizza.png */ "./src/Pizza.png");
// Module to load MENU MODULE content










class Item {
    constructor(name, description, price, imgName, imgAlt){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgName = imgName;
        this.imgAlt = imgAlt;
    }

    createItem(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('itemWrapper');

        let leftwrap = document.createElement('div');
        leftwrap.classList.add('leftwrap');
        let rightwrap = document.createElement('div');
        rightwrap.classList.add('rightwrap');

        wrapper.appendChild(leftwrap);
        wrapper.appendChild(rightwrap);

        let itemName = document.createElement('h2');
        itemName.textContent = this.name;
        leftwrap.appendChild(itemName);

        let itemDesc = document.createElement('p');
        itemDesc.textContent = this.description;
        leftwrap.appendChild(itemDesc);

        let itemPrice = document.createElement('span');
        itemPrice.textContent = this.price;
        leftwrap.appendChild(itemPrice);

        let itemImage = document.createElement('img');
        itemImage.src = this.imgName;
        itemImage.alt = this.imgAlt;
        rightwrap.appendChild(itemImage);
        
        return wrapper;
    }
}

//create instances of class for all food and bev items
let salad = new Item('Salad', 'A healthy garden salad', '220g', _Salad_png__WEBPACK_IMPORTED_MODULE_3__, 'Stardew Valley Salad');
let bread = new Item('Bread', 'A crusty baguette', '120g', _Bread_png__WEBPACK_IMPORTED_MODULE_4__, 'Stardew Valley Bread');
let spaghetti = new Item('Spaghetti', 'An old favourite', '240g', _Spaghetti_png__WEBPACK_IMPORTED_MODULE_5__, 'Stardew Valley Spaghetti');
let pizza = new Item('Pizza', "Popular for all the right reasons", '600g', _Pizza_png__WEBPACK_IMPORTED_MODULE_6__, 'Stardew Valley Pizza');


let beer = new Item('Beer', 'Drink in moderation', '400g', _Beer_png__WEBPACK_IMPORTED_MODULE_0__, 'Stardew Valley Beer');
let coffee = new Item('Coffee', 'It smells delicious. This is sure to give you a boost.', '300g', _Coffee_png__WEBPACK_IMPORTED_MODULE_1__, 'Stardew Valley Coffee');
let cola = new Item('Joja Cola', 'The flagship product of Joja corporation.', '75g', _Joja_cola_png__WEBPACK_IMPORTED_MODULE_2__, 'Stardew Valley Joja Cola');


// add instances to array
let mealsArray = [salad, bread, spaghetti, pizza];
let bevArray = [beer, coffee, cola];


//function that creates div, adds content and appends to dom
function menuPageLoad(){
    //CREATES THE DIV
    const content = document.createElement('div');
    content.id = "content";
    const footer = document.querySelector('footer');

//APPENDS TO DOM
document.body.insertBefore(content,footer); 


    function createHeading(){
        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
     
        let h1heading = document.createElement('h1');
        h1heading.textContent = "The Stardrop Saloon Menu"
        wrapper.appendChild(h1heading);
        content.appendChild(wrapper);
    }
    createHeading();

    function createMainSections(arrItem){
        let sectionwrapper = document.createElement('section');
        sectionwrapper.classList.add('section');
        sectionwrapper.classList.add(arrItem.toLowerCase());
     
        let sectionHeading = document.createElement('h2');
        sectionHeading.textContent = arrItem; 
        
        sectionwrapper.appendChild(sectionHeading);
        content.appendChild(sectionwrapper);
    }
    let sectionNames = ["Beverages", "Meals"];
    sectionNames.forEach(createMainSections);

   let mealsSection = document.querySelector('.meals');
   let bevSection = document.querySelector('.beverages');

//loop through meals array and call meal.createItem on each meal
mealsArray.forEach((food) => {
    mealsSection.appendChild(food.createItem());
});

bevArray.forEach((drink) => {
    bevSection.appendChild(drink.createItem());
});


//APPENDS TO DOM
//document.body.insertBefore(content,footer); 
  
}












/***/ }),

/***/ "./src/Beer.png":
/*!**********************!*\
  !*** ./src/Beer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fcd9b34ee15fb3d2d64.png";

/***/ }),

/***/ "./src/Bread.png":
/*!***********************!*\
  !*** ./src/Bread.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84ed7e379ba8b5e15a89.png";

/***/ }),

/***/ "./src/Coffee.png":
/*!************************!*\
  !*** ./src/Coffee.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d08454ef452ad7ad9a3.png";

/***/ }),

/***/ "./src/Joja_cola.png":
/*!***************************!*\
  !*** ./src/Joja_cola.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b49b095a9b4ab7089597.png";

/***/ }),

/***/ "./src/Map.png":
/*!*********************!*\
  !*** ./src/Map.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b52be3fc993409ebbd94.png";

/***/ }),

/***/ "./src/OpenSans.ttf":
/*!**************************!*\
  !*** ./src/OpenSans.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "071a1becc7f00e33cc5b.ttf";

/***/ }),

/***/ "./src/Pizza.png":
/*!***********************!*\
  !*** ./src/Pizza.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "074c4abfa282309cf0dd.png";

/***/ }),

/***/ "./src/SVThin.ttf":
/*!************************!*\
  !*** ./src/SVThin.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc727903249255523974.ttf";

/***/ }),

/***/ "./src/Salad.png":
/*!***********************!*\
  !*** ./src/Salad.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9757c735a8bafcc0f421.png";

/***/ }),

/***/ "./src/Saloon-nobg.png":
/*!*****************************!*\
  !*** ./src/Saloon-nobg.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5cba71adc0f74ee8a79.png";

/***/ }),

/***/ "./src/Spaghetti.png":
/*!***************************!*\
  !*** ./src/Spaghetti.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2e08a945077b3196c58.png";

/***/ }),

/***/ "./src/Stardew_Valley.ttf":
/*!********************************!*\
  !*** ./src/Stardew_Valley.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94d4418a519004763596.ttf";

/***/ }),

/***/ "./src/border.png":
/*!************************!*\
  !*** ./src/border.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "106d01a404f9f80e78c2.png";

/***/ }),

/***/ "./src/emily-dialog.png":
/*!******************************!*\
  !*** ./src/emily-dialog.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d1751f15d0e2884028b.png";

/***/ }),

/***/ "./src/gus-dialog.png":
/*!****************************!*\
  !*** ./src/gus-dialog.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9caa4674d0ecef21ed94.png";

/***/ }),

/***/ "./src/med_logo.png":
/*!**************************!*\
  !*** ./src/med_logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f3c27448b65c32a3c63.png";

/***/ }),

/***/ "./src/menubox.png":
/*!*************************!*\
  !*** ./src/menubox.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2fa65a2a906163d6c58.png";

/***/ }),

/***/ "./src/stardewbackground.png":
/*!***********************************!*\
  !*** ./src/stardewbackground.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abe81220aca4be59c87c.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ2lDO0FBQ0k7QUFDQztBQUNIO0FBQ0Q7QUFDUztBQUNSOztBQUVYOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBZ0UsdUNBQVE7QUFDeEUsMkRBQTJELHVDQUFRO0FBQ25FLGtFQUFrRSwyQ0FBWTtBQUM5RSwyRUFBMkUsdUNBQVE7OztBQUduRiwyREFBMkQsc0NBQU87QUFDbEUsa0dBQWtHLHdDQUFTO0FBQzNHLHFGQUFxRiwyQ0FBTzs7O0FBRzVGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvU3RhcmRld19WYWxsZXkudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9PcGVuU2Fucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL1NWVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIvc3JjL21lZF9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi9zcmMvc3RhcmRld2JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiL3NyYy9ib3JkZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9tZW51Ym94LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ1NTIGZvciBUT1AgLy8gUmVzdGF1cmFudCBQYWdlICovXG4qIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuaW1nIHsgXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IGF1dG87IFxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1N0YXJkZXdWYWxsZXknO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnU1ZfVGhpbic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5ib2R5e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBuby1yZXBlYXQgZml4ZWQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5oZWFkZXJ7XG4gICAgcG9zaXRpb246c3RpY2t5O1xufVxuXG5oZWFkZXIgdWwsXG5mb290ZXIgdWx7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCA3MSwgMTQ4LCAwLjgpO1xufVxuXG5oZWFkZXIgbGl7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5mb290ZXIgbGl7XG4gICBmb250LXNpemU6IDIycHg7XG59XG5cbmhlYWRlciBsaSxcbmZvb3RlciBsaXtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6ICNmYmZiZjAgO1xuICAgIGZvbnQtZmFtaWx5OiAnU3RhcmRld1ZhbGxleSc7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbn1cbmF7XG4gICAgY29sb3I6ICNmYmZiZjA7XG59XG5cbmE6aG92ZXIsXG5saTpob3ZlcntcbiAgICAvKiBjb2xvcjogI2Q4ZDhiZDtcbiAgICBjb2xvcjogI0RGQTIyRDsgKi9cbiAgICBjb2xvcjogI2VkY2ZhZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG5cbiNjb250ZW50e1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjAwLDEyNCwxKSAwJSwgcmdiYSgyNTUsMjAwLDEyNCwxKSA0MCUsIHJnYmEoMjM3LDE3MiwxMDksMSkgMTAwJSk7XG4gICAgZm9udC1mYW1pbHk6ICdTVl9UaGluJztcbiAgICBjb2xvcjogIzJEMDkxNTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAjZDk5NjVmYTg7XG4gICAgbWFyZ2luOiAxMHB4IDEwMHB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgMzMgc3RyZXRjaDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDMzJTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgd29yZC1zcGFjaW5nOiAxLjVweDtcbn1cblxuLmNvbnRhY3RwYWdle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXJ7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLndyYXBwZXIgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnU3RhcmRld1ZhbGxleSc7XG5cbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5wIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5zZWN0aW9ue1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1NzsgKi9cbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1pbi13aWR0aDogODAlO1xuXG59XG5cbi5pdGVtV3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSkgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxNnB4IDMwcHggMHB4IDI2cHg7XG4gICAgbWluLWhlaWdodDogMTYycHg7XG4gICAgLyogZ2FwOiAxNXB4OyAqL1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pdGVtV3JhcHBlciBoMntcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XG59XG5cbi5yaWdodHdyYXB7XG4gICBkaXNwbGF5OmZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuLyogaG9tZS5qcyAqL1xuLmlubmVyV3JhcHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG4uaW5uZXJXcmFwIHB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuXG5cblxuZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG5mb290ZXIgdWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxIDE0OCAxMzYgLyAzNyUpO1xufVxuXG5cblxuXG5cblxuaDF7XG4gICAgYW5pbWF0aW9uOiBsb2FkZXIgMXMgZWFzZS1pbiA7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgb3BhY2l0eTogMCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgIG9wYWNpdHk6IDEwMCU7IFxuICAgIH1cbiAgfVxuIFxuXG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XG4gICAgI2NvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICBtYXJnaW46IDUlO1xuICAgIH1cbiAgICAuaW5uZXJXcmFwe1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5pbm5lcldyYXAgcHtcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xuICAgIH1cbiAgICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAgIGhlYWRlciBsaXtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICBmb290ZXIgbGl7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgaGVhZGVyIHVse1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQ0FBbUM7QUFDbkM7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLCtEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwrREFBOEM7QUFDbEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtJQUE2RztJQUM3Ryw0QkFBNEI7SUFDNUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7R0FFRyxhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLHdDQUF3QztBQUMzQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7R0FDRyxlQUFlO0FBQ2xCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTtxQkFDaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksNkdBQTZHO0lBQzdHLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnRUFBK0M7SUFDL0MsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7O0lBRTVCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSw2REFBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWixtQkFBbUI7QUFDdEI7Ozs7QUFJQSxZQUFZO0FBQ1o7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7OztBQUtBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXOztBQUVmO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7Ozs7Ozs7QUFPQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO01BQ0UsNEJBQTRCO01BQzVCLFdBQVc7SUFDYjtJQUNBO09BQ0csMEJBQTBCO09BQzFCLGFBQWE7SUFDaEI7RUFDRjs7Ozs7O0FBTUY7SUFDSTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgZm9yIFRPUCAvLyBSZXN0YXVyYW50IFBhZ2UgKi9cXG4qIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5pbWcgeyBcXG4gICAgbWF4LXdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiBhdXRvOyBcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3RhcmRld1ZhbGxleSc7XFxuICAgIHNyYzogdXJsKCcvc3JjL1N0YXJkZXdfVmFsbGV5LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xcbiAgICBzcmM6IHVybCgnL3NyYy9PcGVuU2Fucy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnU1ZfVGhpbic7XFxuICAgIHNyYzogdXJsKCcvc3JjL1NWVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnL3NyYy9tZWRfbG9nby5wbmcnKSwgdXJsKCcvc3JjL3N0YXJkZXdiYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBwb3NpdGlvbjpzdGlja3k7XFxufVxcblxcbmhlYWRlciB1bCxcXG5mb290ZXIgdWx7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCA3MSwgMTQ4LCAwLjgpO1xcbn1cXG5cXG5oZWFkZXIgbGl7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuZm9vdGVyIGxpe1xcbiAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuaGVhZGVyIGxpLFxcbmZvb3RlciBsaXtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogI2ZiZmJmMCA7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3RhcmRld1ZhbGxleSc7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcbmF7XFxuICAgIGNvbG9yOiAjZmJmYmYwO1xcbn1cXG5cXG5hOmhvdmVyLFxcbmxpOmhvdmVye1xcbiAgICAvKiBjb2xvcjogI2Q4ZDhiZDtcXG4gICAgY29sb3I6ICNERkEyMkQ7ICovXFxuICAgIGNvbG9yOiAjZWRjZmFlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4jY29udGVudHtcXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyMDAsMTI0LDEpIDAlLCByZ2JhKDI1NSwyMDAsMTI0LDEpIDQwJSwgcmdiYSgyMzcsMTcyLDEwOSwxKSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdTVl9UaGluJztcXG4gICAgY29sb3I6ICMyRDA5MTU7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMnB4ICNkOTk2NWZhODtcXG4gICAgbWFyZ2luOiAxMHB4IDEwMHB4O1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDEwcHggdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1pbWFnZTogdXJsKCcvc3JjL2JvcmRlci5wbmcnKSAzMyBzdHJldGNoO1xcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDMzJTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XFxuICAgIHdvcmQtc3BhY2luZzogMS41cHg7XFxufVxcblxcbi5jb250YWN0cGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLndyYXBwZXJ7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxufVxcblxcbi53cmFwcGVyIGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTdGFyZGV3VmFsbGV5JztcXG5cXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnAge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuc2VjdGlvbntcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjU3OyAqL1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG5cXG59XFxuXFxuLml0ZW1XcmFwcGVye1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vbWVudWJveC5wbmcnKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDMwcHggMHB4IDI2cHg7XFxuICAgIG1pbi1oZWlnaHQ6IDE2MnB4O1xcbiAgICAvKiBnYXA6IDE1cHg7ICovXFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaXRlbVdyYXBwZXIgaDJ7XFxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweDtcXG59XFxuXFxuLnJpZ2h0d3JhcHtcXG4gICBkaXNwbGF5OmZsZXg7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuLyogaG9tZS5qcyAqL1xcbi5pbm5lcldyYXB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uaW5uZXJXcmFwIHB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcblxcblxcblxcbmZvb3RlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuZm9vdGVyIHVse1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEgMTQ4IDEzNiAvIDM3JSk7XFxufVxcblxcblxcblxcblxcblxcblxcbmgxe1xcbiAgICBhbmltYXRpb246IGxvYWRlciAxcyBlYXNlLWluIDtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkZXIge1xcbiAgICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgICAgIG9wYWNpdHk6IDEwMCU7IFxcbiAgICB9XFxuICB9XFxuIFxcblxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcXG4gICAgI2NvbnRlbnR7XFxuICAgICAgICBwYWRkaW5nOiA1JTtcXG4gICAgICAgIG1hcmdpbjogNSU7XFxuICAgIH1cXG4gICAgLmlubmVyV3JhcHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmlubmVyV3JhcCBwe1xcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XFxuICAgIGhlYWRlciBsaXtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciBsaXtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB1bHtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIE1vZHVsZSB0byBsb2FkIENPTlRBQ1QgTU9EVUxFIGNvbnRlbnRcbmltcG9ydCBndXNEaWFsb2cgZnJvbSAnLi9ndXMtZGlhbG9nLnBuZyc7XG5pbXBvcnQgZW1pbHlEaWFsb2cgZnJvbSAnLi9lbWlseS1kaWFsb2cucG5nJztcblxuZXhwb3J0IHsgY29udGFjdFBhZ2VMb2FkIH07XG5cbi8vZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGRpdiwgYWRkcyBjb250ZW50IGFuZCBhcHBlbmRzIHRvIGRvbVxuZnVuY3Rpb24gY29udGFjdFBhZ2VMb2FkKCl7XG4gICAgY29uc29sZS5sb2coXCJjb250YWN0UGFnZUxvYWQgaXMgbG9hZGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0cGFnZVwiKTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihvYmope1xuICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRpdGxlVGFnKTtcbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBvYmoudGl0bGVUZXh0O1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYob2JqLnRleHRUYWcpe1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGV4dFRhZyk7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IG9iai5ib2R5VGV4dDtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgaWYob2JqLmltZ1NyYyl7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBteUltYWdlLnNyYyA9IG9iai5pbWdOYW1lO1xuXG4gICAgICAgICAgICAgICAgLy9sZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgLy9pbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBvYmouaW1nU3JjKTtcbiAgICAgICAgICAgICAgICBteUltYWdlLnNldEF0dHJpYnV0ZSgnYWx0Jywgb2JqLmltZ0FsdCk7XG4gICAgICAgICAgICAgICAgLy9teUltYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvYmouc3R5bGUpO1xuICAgICAgICAgICAgICAgIG15SW1hZ2UuY2xhc3NMaXN0LmFkZChvYmoudGl0bGVUZXh0KVxuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobXlJbWFnZSk7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICB9XG4gICAgICAgICBjb250ZW50QXJyYXlvZk9iamVjdHMuZm9yRWFjaChjcmVhdGVTZWN0aW9uKTtcblxuICAgICAgICAgLy9BUFBFTkRTIFRPIERPTVxuICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGVudCxmb290ZXIpOyBcbn1cblxuXG5cblxuXG5cbi8vREFUQSBPQkpFQ1RTXG5jb25zdCBoZWFkaW5nID0ge1xuICAgIHRpdGxlVGFnOiBcImgxXCIsXG4gICAgdGl0bGVUZXh0IDogXCJDb250YWN0IFVzXCIsXG59XG5cbmNvbnN0IGd1cyA9IHtcbiAgICB0aXRsZVRhZzogXCJoMlwiLFxuICAgIHRpdGxlVGV4dCA6IFwiR3VzXCIsXG4gICAgdGV4dFRhZzogXCJwXCIsXG4gICAgYm9keVRleHQ6IFwiT3duZXIgLSBTdGFyZHJvcCBTYWxvb24uXCIsXG4gICAgaW1nTmFtZTogZ3VzRGlhbG9nLFxuICAgIGltZ1NyYzogXCIuL2d1cy1kaWFsb2cucG5nXCIsXG4gICAgaW1nQWx0OiBcIkd1cyBEaWFsb2cgQm94IEltYWdlXCIsXG59XG5cbmNvbnN0IGVtaWx5ID0ge1xuICAgIHRpdGxlVGFnOiBcImgyXCIsXG4gICAgdGl0bGVUZXh0IDogXCJFbWlseVwiLFxuICAgIHRleHRUYWc6IFwicFwiLFxuICAgIGJvZHlUZXh0OiBcIkJhcnRlbmRlciAtIFN0YXJkcm9wIFNhbG9vblwiLFxuICAgIGltZ05hbWU6IGVtaWx5RGlhbG9nLFxuICAgIGltZ1NyYzogXCIuL2VtaWx5LWRpYWxvZy5wbmdcIixcbiAgICBpbWdBbHQ6IFwiRW1pbHkgRGlhbG9nIEJveCBJbWFnZVwiLFxufVxuXG5cblxubGV0IGNvbnRlbnRBcnJheW9mT2JqZWN0cyA9IFtoZWFkaW5nLCBndXMsIGVtaWx5XTsiLCIvLyBNb2R1bGUgdG8gbG9hZCBIT01FIE1PRFVMRSBjb250ZW50XG5pbXBvcnQgc2Fsb29uSW1nIGZyb20gJy4vU2Fsb29uLW5vYmcucG5nJztcbmltcG9ydCBtYXAgZnJvbSAnLi9NYXAucG5nJztcblxuZXhwb3J0IHsgaG9tZVBhZ2VMb2FkIH07XG5cbi8vZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGRpdiwgYWRkcyBjb250ZW50IGFuZCBhcHBlbmRzIHRvIGRvbVxuZnVuY3Rpb24gaG9tZVBhZ2VMb2FkKCl7XG5cbiAgICAvL0NSRUFURVMgVEhFIERJVlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gICBcbiAgICAvL0FERFMgQ09OVEVOVFxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTZWN0aW9uKG9iail7XG4gICAgICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgICAgICBcbiAgICAgICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGl0bGVUYWcpO1xuICAgICAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IG9iai50aXRsZVRleHQ7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGxldCBpbm5lcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlubmVyV3JhcC5jbGFzc0xpc3QuYWRkKCdpbm5lcldyYXAnKTtcblxuICAgICAgICAgICAgaWYob2JqLnRleHRUYWcpe1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudGV4dFRhZyk7XG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IG9iai5ib2R5VGV4dDtcbiAgICAgICAgICAgICAgICBpbm5lcldyYXAuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG9iai5pbWdTcmMpe1xuICAgICAgICAgICAgICAgIGlubmVyV3JhcC5hcHBlbmRDaGlsZChpbWFnZUZhY3Rvcnkob2JqLmltZ05hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgICB9XG4gICAgICAgICBjb250ZW50QXJyYXlvZk9iamVjdHMuZm9yRWFjaChjcmVhdGVTZWN0aW9uKTtcblxuXG4gICAgLy9BUFBFTkRTIFRPIERPTVxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNvbnRlbnQsZm9vdGVyKTsgXG59XG5cblxuLy9EQVRBIE9CSkVDVFNcbmNvbnN0IGhlYWRpbmcgPSB7XG4gICAgdGl0bGVUYWc6IFwiaDFcIixcbiAgICB0aXRsZVRleHQgOiBcIlRoZSBTdGFyZHJvcCBTYWxvb25cIixcbn1cblxuY29uc3QgYWJvdXQgPSB7XG4gICAgdGl0bGVUYWc6IFwiaDJcIixcbiAgICB0aXRsZVRleHQ6IFwiQWJvdXRcIixcbiAgICB0ZXh0VGFnOiBcInBcIixcbiAgICBib2R5VGV4dDogXCJUaGUgU3RhcmRyb3AgU2Fsb29uIGlzIG93bmVkIGJ5IEd1cywgYW5kIGlzIGxvY2F0ZWQgaW4gdGhlIGNlbnRlciBvZiBQZWxpY2FuIFRvd24uIEl0J3MgYSBtZWV0aW5nIHBsYWNlIGZvciBtYW55IHZpbGxhZ2VycywgYW5kIGhvc3RzIGEgdmFyaWV0eSBvZiBlbnRlcnRhaW5tZW50LCBpbmNsdWRpbmcgZnVsbHkgcGxheWFibGUgYXJjYWRlIG1hY2hpbmVzLCBhIGp1a2Vib3gsIGFuZCBhIEpvamEgQ29sYSBzb2RhIG1hY2hpbmUuXCIsXG4gICAgaW1nU3JjOiBcIi4vc3JjL3NhbG9vbi5wbmdcIixcbiAgICBpbWdOYW1lOiBzYWxvb25JbWcsXG4gICAgaW1nQWx0OiBcIlN0YXJkZXcgVmFsbGV5IFN0YXJkcm9wIFNhbG9vblwiLFxuICAgIHN0eWxlOiBcIndpZHRoOiAyNTBweFwiLFxufVxuXG5jb25zdCBob3VycyA9IHtcbiAgICB0aXRsZVRhZzogXCJoMlwiLFxuICAgIHRpdGxlVGV4dDogXCJIb3Vyc1wiLFxuICAgIHRleHRUYWc6IFwicFwiLFxuICAgIGJvZHlUZXh0OiBcIjEyOjAwcG0gLSAxMjowMGFtXCIsXG59XG5cbmNvbnN0IGxvY2F0aW9uID0ge1xuICAgIHRpdGxlVGFnOiBcImgyXCIsXG4gICAgdGl0bGVUZXh0OiBcIkxvY2F0aW9uXCIsXG4gICAgdGV4dFRhZzogXCJwXCIsXG4gICAgYm9keVRleHQ6IFwiVGhlIFN0YXJkcm9wIFNhbG9vbiBpcyBsb2NhdGVkIGluIHRoZSBjZW50ZXIgb2YgUGVsaWNhbiBUb3duLlwiLFxuICAgIGltZ05hbWU6IG1hcCxcbiAgICBpbWdTcmMgOiBcIi9zcmMvTWFwLnBuZ1wiLFxuICAgIGltZ0FsdDogXCJTdGFyZGV3IFZhbGxleSBNYXBcIixcbn1cblxubGV0IGNvbnRlbnRBcnJheW9mT2JqZWN0cyA9IFtoZWFkaW5nLCBhYm91dCwgaG91cnMsIGxvY2F0aW9uXTtcblxuZnVuY3Rpb24gaW1hZ2VGYWN0b3J5KGltYWdlKXtcbiAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbXlJbWFnZS5zcmMgPSBpbWFnZTtcbiAgICByZXR1cm4gbXlJbWFnZTtcbn0iLCJpbXBvcnQgeyBob21lUGFnZUxvYWQgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgeyBjb250YWN0UGFnZUxvYWQgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG4vLyBXcml0ZSB0aGUgdGFiLXN3aXRjaGluZyBsb2dpYyBpbnNpZGUgb2YgaW5kZXguanMuIFlvdSBzaG91bGQgaGF2ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lwZXMgb3V0IHRoZSBjdXJyZW50IGNvbnRlbnRzIGFuZCB0aGVuIHJ1bnMgdGhlIGNvcnJlY3Qg4oCYdGFiIG1vZHVsZeKAmSB0byBwb3B1bGF0ZSBpdCBhZ2Fpbi5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBsZXQgbWVudUl0ZW1zQXJyYXkgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vY3JlYXRlIGxpLCBhZGQgYXJyYXkgaXRlbSBhcyB0ZXh0Q29udGVudCBvZiBsaSwgYWRkIGlkLCBhZGQgbGkgYXMgY2hpbGQgb2YgbWVudSAodWwpXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gbWVudUl0ZW1zQXJyYXlbaV07XG4gICAgICAgIGxpc3RJdGVtLmlkID0gbWVudUl0ZW1zQXJyYXlbaV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEhhbmRsZXIpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcblxuZnVuY3Rpb24gZXZlbnRIYW5kbGVyKGUpe1xuICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpe1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgaG9tZVBhZ2VMb2FkKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6IFxuICAgICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBtZW51UGFnZUxvYWQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzogXG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnRhY3RQYWdlTG9hZCgpO1xuICAgICAgICAgICAgYnJlYWs7IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCl7ICAgXG4gICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICAvL2NyZWF0ZSBlbGVtZW50c1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBjcmVkaXRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIC8vY3JlYXRlIG9iamVjdHMgZm9yIGVhY2ggYXJyYXkgaXRlbVxuICAgIGxldCBjcmVkaXRzID0ge1xuICAgICAgICBsb2FkQ3JlZGl0cygpe1xuICAgICAgICAgICAgYWxlcnQoXCJJbWFnZSBjcmVkaXRzOiB3d3cuc3RhcmRld3ZhbGxleS5jb21cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtUZXh0OiAnQ3JlZGl0cydcbiAgICB9XG5cbiAgICBsZXQgb2RpbiA9IHtcbiAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9sZXNzb25zL25vZGUtcGF0aC1qYXZhc2NyaXB0LXJlc3RhdXJhbnQtcGFnZScsXG4gICAgICAgIGxpbmtUZXh0OiAnVGhlIE9kaW4gUHJvamVjdCdcbiAgICB9XG5cbiAgICBsZXQgZ2l0aHViID0ge1xuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL1BlYWNoZXMteG8vcmVzdGF1cmFudC1wYWdlJyxcbiAgICAgICAgbGlua1RleHQ6ICdHaXRodWInXG4gICAgfVxuXG4gICAgbGV0IGNyZWRpdE1lbnVJdGVtc0FycmF5ID0gW2NyZWRpdHMsIG9kaW4sIGdpdGh1Yl07IFxuXG5cbiAgICBjcmVkaXRNZW51SXRlbXNBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaXRlbS5saW5rKXtcbiAgICAgICAgICAgIGxldCBsaW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmtJdGVtLmhyZWYgPSBpdGVtLmxpbms7XG4gICAgICAgICAgICBsaW5rSXRlbS50ZXh0Q29udGVudCA9IGl0ZW0ubGlua1RleHQ7XG4gICAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rSXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW0ubGlua1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3JlZGl0TWVudS5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICAgICAgXG5cbiAgICB9KVxuZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdE1lbnUpO1xuXG5cblxuXG5yZXR1cm4gZm9vdGVyO1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5sZXQgY3JlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyPnVsPmxpOmZpcnN0LWNoaWxkJyk7XG5jcmVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhbGVydChcIkltYWdlcyBmcm9tIHd3dy5zdGFyZGV3dmFsbGV5LmNvbVwiKSk7IFxuY29uc29sZS5sb2coY3JlZGl0QnRuKTtcblxuXG5cblxuIiwiLy8gTW9kdWxlIHRvIGxvYWQgTUVOVSBNT0RVTEUgY29udGVudFxuaW1wb3J0IGJlZXJJbWcgZnJvbSAnLi9CZWVyLnBuZyc7XG5pbXBvcnQgY29mZmVlSW1nIGZyb20gJy4vQ29mZmVlLnBuZyc7XG5pbXBvcnQgY29sYUltZyBmcm9tICcuL0pvamFfY29sYS5wbmcnO1xuaW1wb3J0IHNhbGFkSW1nIGZyb20gJy4vU2FsYWQucG5nJztcbmltcG9ydCBicmVhZEltZyBmcm9tICcuL0JyZWFkLnBuZydcbmltcG9ydCBzcGFnaGV0dGlJbWcgZnJvbSAnLi9TcGFnaGV0dGkucG5nJztcbmltcG9ydCBwaXp6YUltZyBmcm9tICcuL1BpenphLnBuZyc7XG5cbmV4cG9ydCB7IG1lbnVQYWdlTG9hZCB9O1xuXG5jbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGltZ05hbWUsIGltZ0FsdCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmltZ05hbWUgPSBpbWdOYW1lO1xuICAgICAgICB0aGlzLmltZ0FsdCA9IGltZ0FsdDtcbiAgICB9XG5cbiAgICBjcmVhdGVJdGVtKCl7XG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbVdyYXBwZXInKTtcblxuICAgICAgICBsZXQgbGVmdHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGVmdHdyYXAuY2xhc3NMaXN0LmFkZCgnbGVmdHdyYXAnKTtcbiAgICAgICAgbGV0IHJpZ2h0d3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodHdyYXAuY2xhc3NMaXN0LmFkZCgncmlnaHR3cmFwJyk7XG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsZWZ0d3JhcCk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmlnaHR3cmFwKTtcblxuICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgbGVmdHdyYXAuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuXG4gICAgICAgIGxldCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZWZ0d3JhcC5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG5cbiAgICAgICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gdGhpcy5wcmljZTtcbiAgICAgICAgbGVmdHdyYXAuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICAgICAgICBsZXQgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSB0aGlzLmltZ05hbWU7XG4gICAgICAgIGl0ZW1JbWFnZS5hbHQgPSB0aGlzLmltZ0FsdDtcbiAgICAgICAgcmlnaHR3cmFwLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG59XG5cbi8vY3JlYXRlIGluc3RhbmNlcyBvZiBjbGFzcyBmb3IgYWxsIGZvb2QgYW5kIGJldiBpdGVtc1xubGV0IHNhbGFkID0gbmV3IEl0ZW0oJ1NhbGFkJywgJ0EgaGVhbHRoeSBnYXJkZW4gc2FsYWQnLCAnMjIwZycsIHNhbGFkSW1nLCAnU3RhcmRldyBWYWxsZXkgU2FsYWQnKTtcbmxldCBicmVhZCA9IG5ldyBJdGVtKCdCcmVhZCcsICdBIGNydXN0eSBiYWd1ZXR0ZScsICcxMjBnJywgYnJlYWRJbWcsICdTdGFyZGV3IFZhbGxleSBCcmVhZCcpO1xubGV0IHNwYWdoZXR0aSA9IG5ldyBJdGVtKCdTcGFnaGV0dGknLCAnQW4gb2xkIGZhdm91cml0ZScsICcyNDBnJywgc3BhZ2hldHRpSW1nLCAnU3RhcmRldyBWYWxsZXkgU3BhZ2hldHRpJyk7XG5sZXQgcGl6emEgPSBuZXcgSXRlbSgnUGl6emEnLCBcIlBvcHVsYXIgZm9yIGFsbCB0aGUgcmlnaHQgcmVhc29uc1wiLCAnNjAwZycsIHBpenphSW1nLCAnU3RhcmRldyBWYWxsZXkgUGl6emEnKTtcblxuXG5sZXQgYmVlciA9IG5ldyBJdGVtKCdCZWVyJywgJ0RyaW5rIGluIG1vZGVyYXRpb24nLCAnNDAwZycsIGJlZXJJbWcsICdTdGFyZGV3IFZhbGxleSBCZWVyJyk7XG5sZXQgY29mZmVlID0gbmV3IEl0ZW0oJ0NvZmZlZScsICdJdCBzbWVsbHMgZGVsaWNpb3VzLiBUaGlzIGlzIHN1cmUgdG8gZ2l2ZSB5b3UgYSBib29zdC4nLCAnMzAwZycsIGNvZmZlZUltZywgJ1N0YXJkZXcgVmFsbGV5IENvZmZlZScpO1xubGV0IGNvbGEgPSBuZXcgSXRlbSgnSm9qYSBDb2xhJywgJ1RoZSBmbGFnc2hpcCBwcm9kdWN0IG9mIEpvamEgY29ycG9yYXRpb24uJywgJzc1ZycsIGNvbGFJbWcsICdTdGFyZGV3IFZhbGxleSBKb2phIENvbGEnKTtcblxuXG4vLyBhZGQgaW5zdGFuY2VzIHRvIGFycmF5XG5sZXQgbWVhbHNBcnJheSA9IFtzYWxhZCwgYnJlYWQsIHNwYWdoZXR0aSwgcGl6emFdO1xubGV0IGJldkFycmF5ID0gW2JlZXIsIGNvZmZlZSwgY29sYV07XG5cblxuLy9mdW5jdGlvbiB0aGF0IGNyZWF0ZXMgZGl2LCBhZGRzIGNvbnRlbnQgYW5kIGFwcGVuZHMgdG8gZG9tXG5mdW5jdGlvbiBtZW51UGFnZUxvYWQoKXtcbiAgICAvL0NSRUFURVMgVEhFIERJVlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbi8vQVBQRU5EUyBUTyBET01cbmRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNvbnRlbnQsZm9vdGVyKTsgXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRpbmcoKXtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgIFxuICAgICAgICBsZXQgaDFoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaDFoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgU3RhcmRyb3AgU2Fsb29uIE1lbnVcIlxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGgxaGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfVxuICAgIGNyZWF0ZUhlYWRpbmcoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5TZWN0aW9ucyhhcnJJdGVtKXtcbiAgICAgICAgbGV0IHNlY3Rpb253cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb253cmFwcGVyLmNsYXNzTGlzdC5hZGQoYXJySXRlbS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgXG4gICAgICAgIGxldCBzZWN0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHNlY3Rpb25IZWFkaW5nLnRleHRDb250ZW50ID0gYXJySXRlbTsgXG4gICAgICAgIFxuICAgICAgICBzZWN0aW9ud3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGluZyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbndyYXBwZXIpO1xuICAgIH1cbiAgICBsZXQgc2VjdGlvbk5hbWVzID0gW1wiQmV2ZXJhZ2VzXCIsIFwiTWVhbHNcIl07XG4gICAgc2VjdGlvbk5hbWVzLmZvckVhY2goY3JlYXRlTWFpblNlY3Rpb25zKTtcblxuICAgbGV0IG1lYWxzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscycpO1xuICAgbGV0IGJldlNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmV2ZXJhZ2VzJyk7XG5cbi8vbG9vcCB0aHJvdWdoIG1lYWxzIGFycmF5IGFuZCBjYWxsIG1lYWwuY3JlYXRlSXRlbSBvbiBlYWNoIG1lYWxcbm1lYWxzQXJyYXkuZm9yRWFjaCgoZm9vZCkgPT4ge1xuICAgIG1lYWxzU2VjdGlvbi5hcHBlbmRDaGlsZChmb29kLmNyZWF0ZUl0ZW0oKSk7XG59KTtcblxuYmV2QXJyYXkuZm9yRWFjaCgoZHJpbmspID0+IHtcbiAgICBiZXZTZWN0aW9uLmFwcGVuZENoaWxkKGRyaW5rLmNyZWF0ZUl0ZW0oKSk7XG59KTtcblxuXG4vL0FQUEVORFMgVE8gRE9NXG4vL2RvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNvbnRlbnQsZm9vdGVyKTsgXG4gIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=