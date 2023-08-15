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
    color: #d8d8bd;
    color: #DFA22D;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;IACI,SAAS;IACT,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,+DAAsD;AAC1D;;AAEA;IACI,uBAAuB;IACvB,+DAAgD;AACpD;;AAEA;IACI,sBAAsB;IACtB,+DAA8C;AAClD;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kIAA6G;IAC7G,4BAA4B;IAC5B,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;;GAEG,aAAa;GACb,uBAAuB;GACvB,wCAAwC;AAC3C;;AAEA;IACI,eAAe;AACnB;;AAEA;GACG,eAAe;AAClB;;AAEA;;IAEI,kBAAkB;IAClB,eAAe;IACf,4BAA4B;IAC5B,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;;AAEA;;IAEI,cAAc;IACd,cAAc;IACd,eAAe;;AAEnB;;AAEA;IACI,6GAA6G;IAC7G,sBAAsB;IACtB,cAAc;IACd,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gEAA+C;IAC/C,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;;IAE5B,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;;AAElB;;AAEA;IACI,6DAA0C;IAC1C,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;GACG,YAAY;GACZ,mBAAmB;AACtB;;;;AAIA,YAAY;AACZ;IACI,YAAY;IACZ,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,UAAU;AACd;;;;;AAKA;IACI,eAAe;IACf,SAAS;IACT,WAAW;;AAEf;AACA;IACI,uCAAuC;AAC3C;;;;;;;AAOA;IACI,6BAA6B;AACjC;;AAEA;IACI;MACE,4BAA4B;MAC5B,WAAW;IACb;IACA;OACG,0BAA0B;OAC1B,aAAa;IAChB;EACF;;;;;;AAMF;IACI;QACI,WAAW;QACX,UAAU;IACd;IACA;QACI,sBAAsB;IAC1B;;IAEA;QACI,YAAY;IAChB;;AAEJ;;AAEA;IACI;QACI,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,iBAAiB;QACjB,eAAe;IACnB;;IAEA;QACI,SAAS;IACb;AACJ","sourcesContent":["/* CSS for TOP // Restaurant Page */\n* {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    list-style-type: none;\n}\nimg { \n    max-width: 100%; \n    height: auto; \n}\n\n@font-face {\n    font-family: 'StardewValley';\n    src: url('/src/Stardew_Valley.ttf') format('truetype');\n}\n\n@font-face {\n    font-family: 'OpenSans';\n    src: url('/src/OpenSans.ttf') format('truetype');\n}\n\n@font-face{\n    font-family: 'SV_Thin';\n    src: url('/src/SVThin.ttf') format('truetype');\n}\n\nbody{\n    position: relative;\n    min-height: 100vh;\n    background: url('/src/med_logo.png'), url('/src/stardewbackground.png') no-repeat fixed center center / cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\nheader{\n    position:sticky;\n}\n\nheader ul,\nfooter ul{\n   display: flex;\n   justify-content: center;\n   background-color: rgba(21, 71, 148, 0.8);\n}\n\nheader li{\n    font-size: 30px;\n}\n\nfooter li{\n   font-size: 22px;\n}\n\nheader li,\nfooter li{\n    padding: 10px 20px;\n    color: #fbfbf0 ;\n    font-family: 'StardewValley';\n    transition: 0.2s;\n}\na{\n    color: #fbfbf0;\n}\n\na:hover,\nli:hover{\n    color: #d8d8bd;\n    color: #DFA22D;\n    cursor: pointer;\n    \n}\n\n#content{\n    background:linear-gradient(180deg, rgba(255,200,124,1) 0%, rgba(255,200,124,1) 40%, rgba(237,172,109,1) 100%);\n    font-family: 'SV_Thin';\n    color: #2D0915;\n    text-shadow: 0px 2px #d9965fa8;\n    margin: 10px 100px;\n    padding: 50px;\n    border: solid 10px transparent;\n    border-radius: 10px;\n    border-image: url('/src/border.png') 33 stretch;\n    border-image-slice: 33%;\n    transition: 0.3s ease;\n    line-height: 1.1;\n    letter-spacing: 0.3px;\n    word-spacing: 1.5px;\n}\n\n.contactpage{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.wrapper{\n    margin: 20px 0px;\n}\n\n.wrapper h1 {\n    font-family: 'StardewValley';\n\n    font-size: 50px;\n    margin-bottom: 20px;\n    text-align: center;\n}\np {\n    margin: 10px;\n    font-size: 18px;\n}\n\nsection{\n    /* background-color: #ffffff57; */\n    margin: 20px auto;\n    padding: 10px 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 2px;\n    min-width: 80%;\n\n}\n\n.itemWrapper{\n    background: url('./menubox.png') no-repeat;\n    background-size: auto;\n    display:flex;\n    margin: 10px 0px;\n    padding: 16px 30px 0px 26px;\n    min-height: 162px;\n    /* gap: 15px; */\n    width: 320px;\n    justify-content: space-between;\n}\n\n.itemWrapper h2{\n    padding: 20px 0px 0px;\n}\n\n.rightwrap{\n   display:flex;\n   align-items: center;\n}\n\n\n\n/* home.js */\n.innerWrap{\n    display:flex;\n    align-items: center;\n    gap: 20px;\n}\n.innerWrap p{\n    width: 50%;\n}\n\n\n\n\nfooter{\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    \n}\nfooter ul{\n    background-color: rgb(21 148 136 / 37%);\n}\n\n\n\n\n\n\nh1{\n    animation: loader 1s ease-in ;\n}\n\n@keyframes loader {\n    0% {\n      transform: translateY(-10px);\n      opacity: 0%;\n    }\n    100% {\n       transform: translateY(0px);\n       opacity: 100%; \n    }\n  }\n \n\n\n\n\n@media screen and (max-width: 900px){\n    #content{\n        padding: 5%;\n        margin: 5%;\n    }\n    .innerWrap{\n        flex-direction: column;\n    }\n\n    .innerWrap p{\n        width: unset;\n    }\n    \n}\n\n@media screen and (max-width: 400px){\n    header li{\n        padding: 10px 5px;\n        font-size: 24px;\n    }\n\n    footer li{\n        padding: 10px 5px;\n        font-size: 20px;\n    }\n\n    header ul{\n        gap: 10px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6R0E7QUFDaUM7QUFDSTtBQUNDO0FBQ0g7QUFDRDtBQUNTO0FBQ1I7O0FBRVg7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSx1Q0FBUTtBQUN4RSwyREFBMkQsdUNBQVE7QUFDbkUsa0VBQWtFLDJDQUFZO0FBQzlFLDJFQUEyRSx1Q0FBUTs7O0FBR25GLDJEQUEyRCxzQ0FBTztBQUNsRSxrR0FBa0csd0NBQVM7QUFDM0cscUZBQXFGLDJDQUFPOzs7QUFHNUY7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9TdGFyZGV3X1ZhbGxleS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL09wZW5TYW5zLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvU1ZUaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi9zcmMvbWVkX2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiL3NyYy9zdGFyZGV3YmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIvc3JjL2JvcmRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL21lbnVib3gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBDU1MgZm9yIFRPUCAvLyBSZXN0YXVyYW50IFBhZ2UgKi9cbioge1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5pbWcgeyBcbiAgICBtYXgtd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogYXV0bzsgXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU3RhcmRld1ZhbGxleSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdTVl9UaGluJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbmJvZHl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbmhlYWRlcntcbiAgICBwb3NpdGlvbjpzdGlja3k7XG59XG5cbmhlYWRlciB1bCxcbmZvb3RlciB1bHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDcxLCAxNDgsIDAuOCk7XG59XG5cbmhlYWRlciBsaXtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbmZvb3RlciBsaXtcbiAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaGVhZGVyIGxpLFxuZm9vdGVyIGxpe1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogI2ZiZmJmMCA7XG4gICAgZm9udC1mYW1pbHk6ICdTdGFyZGV3VmFsbGV5JztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuYXtcbiAgICBjb2xvcjogI2ZiZmJmMDtcbn1cblxuYTpob3ZlcixcbmxpOmhvdmVye1xuICAgIGNvbG9yOiAjZDhkOGJkO1xuICAgIGNvbG9yOiAjREZBMjJEO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbn1cblxuI2NvbnRlbnR7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyMDAsMTI0LDEpIDAlLCByZ2JhKDI1NSwyMDAsMTI0LDEpIDQwJSwgcmdiYSgyMzcsMTcyLDEwOSwxKSAxMDAlKTtcbiAgICBmb250LWZhbWlseTogJ1NWX1RoaW4nO1xuICAgIGNvbG9yOiAjMkQwOTE1O1xuICAgIHRleHQtc2hhZG93OiAwcHggMnB4ICNkOTk2NWZhODtcbiAgICBtYXJnaW46IDEwcHggMTAwcHg7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBib3JkZXI6IHNvbGlkIDEwcHggdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSAzMyBzdHJldGNoO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMzMlO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICB3b3JkLXNwYWNpbmc6IDEuNXB4O1xufVxuXG4uY29udGFjdHBhZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud3JhcHBlcntcbiAgICBtYXJnaW46IDIwcHggMHB4O1xufVxuXG4ud3JhcHBlciBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdTdGFyZGV3VmFsbGV5JztcblxuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnAge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbnNlY3Rpb257XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjU3OyAqL1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWluLXdpZHRoOiA4MCU7XG5cbn1cblxuLml0ZW1XcmFwcGVye1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMzBweCAwcHggMjZweDtcbiAgICBtaW4taGVpZ2h0OiAxNjJweDtcbiAgICAvKiBnYXA6IDE1cHg7ICovXG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLml0ZW1XcmFwcGVyIGgye1xuICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweDtcbn1cblxuLnJpZ2h0d3JhcHtcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG4vKiBob21lLmpzICovXG4uaW5uZXJXcmFwe1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cbi5pbm5lcldyYXAgcHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG5cblxuXG5mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbn1cbmZvb3RlciB1bHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEgMTQ4IDEzNiAvIDM3JSk7XG59XG5cblxuXG5cblxuXG5oMXtcbiAgICBhbmltYXRpb246IGxvYWRlciAxcyBlYXNlLWluIDtcbn1cblxuQGtleWZyYW1lcyBsb2FkZXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICBvcGFjaXR5OiAwJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gICAgICAgb3BhY2l0eTogMTAwJTsgXG4gICAgfVxuICB9XG4gXG5cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcbiAgICAjY29udGVudHtcbiAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgIG1hcmdpbjogNSU7XG4gICAgfVxuICAgIC5pbm5lcldyYXB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmlubmVyV3JhcCBwe1xuICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgfVxuICAgIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gICAgaGVhZGVyIGxpe1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIGZvb3RlciBsaXtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICBoZWFkZXIgdWx7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1DQUFtQztBQUNuQztJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtEQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0lBQTZHO0lBQzdHLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztHQUVHLGFBQWE7R0FDYix1QkFBdUI7R0FDdkIsd0NBQXdDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtHQUNHLGVBQWU7QUFDbEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSw2R0FBNkc7SUFDN0csc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdFQUErQztJQUMvQyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0Qjs7SUFFNUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLDZEQUEwQztJQUMxQyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0dBQ0csWUFBWTtHQUNaLG1CQUFtQjtBQUN0Qjs7OztBQUlBLFlBQVk7QUFDWjtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7Ozs7O0FBS0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7O0FBRWY7QUFDQTtJQUNJLHVDQUF1QztBQUMzQzs7Ozs7OztBQU9BO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7TUFDRSw0QkFBNEI7TUFDNUIsV0FBVztJQUNiO0lBQ0E7T0FDRywwQkFBMEI7T0FDMUIsYUFBYTtJQUNoQjtFQUNGOzs7Ozs7QUFNRjtJQUNJO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBmb3IgVE9QIC8vIFJlc3RhdXJhbnQgUGFnZSAqL1xcbioge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbmltZyB7IFxcbiAgICBtYXgtd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IGF1dG87IFxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTdGFyZGV3VmFsbGV5JztcXG4gICAgc3JjOiB1cmwoJy9zcmMvU3RhcmRld19WYWxsZXkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XFxuICAgIHNyYzogdXJsKCcvc3JjL09wZW5TYW5zLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdTVl9UaGluJztcXG4gICAgc3JjOiB1cmwoJy9zcmMvU1ZUaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuYm9keXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcvc3JjL21lZF9sb2dvLnBuZycpLCB1cmwoJy9zcmMvc3RhcmRld2JhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHBvc2l0aW9uOnN0aWNreTtcXG59XFxuXFxuaGVhZGVyIHVsLFxcbmZvb3RlciB1bHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDcxLCAxNDgsIDAuOCk7XFxufVxcblxcbmhlYWRlciBsaXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5mb290ZXIgbGl7XFxuICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5oZWFkZXIgbGksXFxuZm9vdGVyIGxpe1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGNvbG9yOiAjZmJmYmYwIDtcXG4gICAgZm9udC1mYW1pbHk6ICdTdGFyZGV3VmFsbGV5JztcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuYXtcXG4gICAgY29sb3I6ICNmYmZiZjA7XFxufVxcblxcbmE6aG92ZXIsXFxubGk6aG92ZXJ7XFxuICAgIGNvbG9yOiAjZDhkOGJkO1xcbiAgICBjb2xvcjogI0RGQTIyRDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjAwLDEyNCwxKSAwJSwgcmdiYSgyNTUsMjAwLDEyNCwxKSA0MCUsIHJnYmEoMjM3LDE3MiwxMDksMSkgMTAwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnU1ZfVGhpbic7XFxuICAgIGNvbG9yOiAjMkQwOTE1O1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAjZDk5NjVmYTg7XFxuICAgIG1hcmdpbjogMTBweCAxMDBweDtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxMHB4IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItaW1hZ2U6IHVybCgnL3NyYy9ib3JkZXIucG5nJykgMzMgc3RyZXRjaDtcXG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAzMyU7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xcbiAgICB3b3JkLXNwYWNpbmc6IDEuNXB4O1xcbn1cXG5cXG4uY29udGFjdHBhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53cmFwcGVye1xcbiAgICBtYXJnaW46IDIwcHggMHB4O1xcbn1cXG5cXG4ud3JhcHBlciBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3RhcmRld1ZhbGxleSc7XFxuXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5wIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbnNlY3Rpb257XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY1NzsgKi9cXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWluLXdpZHRoOiA4MCU7XFxuXFxufVxcblxcbi5pdGVtV3JhcHBlcntcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL21lbnVib3gucG5nJykgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgcGFkZGluZzogMTZweCAzMHB4IDBweCAyNnB4O1xcbiAgICBtaW4taGVpZ2h0OiAxNjJweDtcXG4gICAgLyogZ2FwOiAxNXB4OyAqL1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLml0ZW1XcmFwcGVyIGgye1xcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XFxufVxcblxcbi5yaWdodHdyYXB7XFxuICAgZGlzcGxheTpmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi8qIGhvbWUuanMgKi9cXG4uaW5uZXJXcmFwe1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmlubmVyV3JhcCBwe1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG5cXG5cXG5cXG5mb290ZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbmZvb3RlciB1bHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxIDE0OCAxMzYgLyAzNyUpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5oMXtcXG4gICAgYW5pbWF0aW9uOiBsb2FkZXIgMXMgZWFzZS1pbiA7XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGVyIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAgICBvcGFjaXR5OiAxMDAlOyBcXG4gICAgfVxcbiAgfVxcbiBcXG5cXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XFxuICAgICNjb250ZW50e1xcbiAgICAgICAgcGFkZGluZzogNSU7XFxuICAgICAgICBtYXJnaW46IDUlO1xcbiAgICB9XFxuICAgIC5pbm5lcldyYXB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5pbm5lcldyYXAgcHtcXG4gICAgICAgIHdpZHRoOiB1bnNldDtcXG4gICAgfVxcbiAgICBcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xcbiAgICBoZWFkZXIgbGl7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgfVxcblxcbiAgICBmb290ZXIgbGl7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgdWx7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBNb2R1bGUgdG8gbG9hZCBDT05UQUNUIE1PRFVMRSBjb250ZW50XG5pbXBvcnQgZ3VzRGlhbG9nIGZyb20gJy4vZ3VzLWRpYWxvZy5wbmcnO1xuaW1wb3J0IGVtaWx5RGlhbG9nIGZyb20gJy4vZW1pbHktZGlhbG9nLnBuZyc7XG5cbmV4cG9ydCB7IGNvbnRhY3RQYWdlTG9hZCB9O1xuXG4vL2Z1bmN0aW9uIHRoYXQgY3JlYXRlcyBkaXYsIGFkZHMgY29udGVudCBhbmQgYXBwZW5kcyB0byBkb21cbmZ1bmN0aW9uIGNvbnRhY3RQYWdlTG9hZCgpe1xuICAgIGNvbnNvbGUubG9nKFwiY29udGFjdFBhZ2VMb2FkIGlzIGxvYWRlZFwiKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHBhZ2VcIik7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24ob2JqKXtcbiAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50aXRsZVRhZyk7XG4gICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gb2JqLnRpdGxlVGV4dDtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKG9iai50ZXh0VGFnKXtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRleHRUYWcpO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBvYmouYm9keVRleHQ7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmKG9iai5pbWdTcmMpe1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgbXlJbWFnZS5zcmMgPSBvYmouaW1nTmFtZTtcblxuICAgICAgICAgICAgICAgIC8vbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIC8vaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgb2JqLmltZ1NyYyk7XG4gICAgICAgICAgICAgICAgbXlJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG9iai5pbWdBbHQpO1xuICAgICAgICAgICAgICAgIC8vbXlJbWFnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb2JqLnN0eWxlKTtcbiAgICAgICAgICAgICAgICBteUltYWdlLmNsYXNzTGlzdC5hZGQob2JqLnRpdGxlVGV4dClcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG15SW1hZ2UpOyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICAgfVxuICAgICAgICAgY29udGVudEFycmF5b2ZPYmplY3RzLmZvckVhY2goY3JlYXRlU2VjdGlvbik7XG5cbiAgICAgICAgIC8vQVBQRU5EUyBUTyBET01cbiAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNvbnRlbnQsZm9vdGVyKTsgXG59XG5cblxuXG5cblxuXG4vL0RBVEEgT0JKRUNUU1xuY29uc3QgaGVhZGluZyA9IHtcbiAgICB0aXRsZVRhZzogXCJoMVwiLFxuICAgIHRpdGxlVGV4dCA6IFwiQ29udGFjdCBVc1wiLFxufVxuXG5jb25zdCBndXMgPSB7XG4gICAgdGl0bGVUYWc6IFwiaDJcIixcbiAgICB0aXRsZVRleHQgOiBcIkd1c1wiLFxuICAgIHRleHRUYWc6IFwicFwiLFxuICAgIGJvZHlUZXh0OiBcIk93bmVyIC0gU3RhcmRyb3AgU2Fsb29uLlwiLFxuICAgIGltZ05hbWU6IGd1c0RpYWxvZyxcbiAgICBpbWdTcmM6IFwiLi9ndXMtZGlhbG9nLnBuZ1wiLFxuICAgIGltZ0FsdDogXCJHdXMgRGlhbG9nIEJveCBJbWFnZVwiLFxufVxuXG5jb25zdCBlbWlseSA9IHtcbiAgICB0aXRsZVRhZzogXCJoMlwiLFxuICAgIHRpdGxlVGV4dCA6IFwiRW1pbHlcIixcbiAgICB0ZXh0VGFnOiBcInBcIixcbiAgICBib2R5VGV4dDogXCJCYXJ0ZW5kZXIgLSBTdGFyZHJvcCBTYWxvb25cIixcbiAgICBpbWdOYW1lOiBlbWlseURpYWxvZyxcbiAgICBpbWdTcmM6IFwiLi9lbWlseS1kaWFsb2cucG5nXCIsXG4gICAgaW1nQWx0OiBcIkVtaWx5IERpYWxvZyBCb3ggSW1hZ2VcIixcbn1cblxuXG5cbmxldCBjb250ZW50QXJyYXlvZk9iamVjdHMgPSBbaGVhZGluZywgZ3VzLCBlbWlseV07IiwiLy8gTW9kdWxlIHRvIGxvYWQgSE9NRSBNT0RVTEUgY29udGVudFxuaW1wb3J0IHNhbG9vbkltZyBmcm9tICcuL1NhbG9vbi1ub2JnLnBuZyc7XG5pbXBvcnQgbWFwIGZyb20gJy4vTWFwLnBuZyc7XG5cbmV4cG9ydCB7IGhvbWVQYWdlTG9hZCB9O1xuXG4vL2Z1bmN0aW9uIHRoYXQgY3JlYXRlcyBkaXYsIGFkZHMgY29udGVudCBhbmQgYXBwZW5kcyB0byBkb21cbmZ1bmN0aW9uIGhvbWVQYWdlTG9hZCgpe1xuXG4gICAgLy9DUkVBVEVTIFRIRSBESVZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgXG4gICAgLy9BRERTIENPTlRFTlRcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2VjdGlvbihvYmope1xuICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRpdGxlVGFnKTtcbiAgICAgICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBvYmoudGl0bGVUZXh0O1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBsZXQgaW5uZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbm5lcldyYXAuY2xhc3NMaXN0LmFkZCgnaW5uZXJXcmFwJyk7XG5cbiAgICAgICAgICAgIGlmKG9iai50ZXh0VGFnKXtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRleHRUYWcpO1xuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBvYmouYm9keVRleHQ7XG4gICAgICAgICAgICAgICAgaW5uZXJXcmFwLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvYmouaW1nU3JjKXtcbiAgICAgICAgICAgICAgICBpbm5lcldyYXAuYXBwZW5kQ2hpbGQoaW1hZ2VGYWN0b3J5KG9iai5pbWdOYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGlubmVyV3JhcCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgICAgfVxuICAgICAgICAgY29udGVudEFycmF5b2ZPYmplY3RzLmZvckVhY2goY3JlYXRlU2VjdGlvbik7XG5cblxuICAgIC8vQVBQRU5EUyBUTyBET01cbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250ZW50LGZvb3Rlcik7IFxufVxuXG5cbi8vREFUQSBPQkpFQ1RTXG5jb25zdCBoZWFkaW5nID0ge1xuICAgIHRpdGxlVGFnOiBcImgxXCIsXG4gICAgdGl0bGVUZXh0IDogXCJUaGUgU3RhcmRyb3AgU2Fsb29uXCIsXG59XG5cbmNvbnN0IGFib3V0ID0ge1xuICAgIHRpdGxlVGFnOiBcImgyXCIsXG4gICAgdGl0bGVUZXh0OiBcIkFib3V0XCIsXG4gICAgdGV4dFRhZzogXCJwXCIsXG4gICAgYm9keVRleHQ6IFwiVGhlIFN0YXJkcm9wIFNhbG9vbiBpcyBvd25lZCBieSBHdXMsIGFuZCBpcyBsb2NhdGVkIGluIHRoZSBjZW50ZXIgb2YgUGVsaWNhbiBUb3duLiBJdCdzIGEgbWVldGluZyBwbGFjZSBmb3IgbWFueSB2aWxsYWdlcnMsIGFuZCBob3N0cyBhIHZhcmlldHkgb2YgZW50ZXJ0YWlubWVudCwgaW5jbHVkaW5nIGZ1bGx5IHBsYXlhYmxlIGFyY2FkZSBtYWNoaW5lcywgYSBqdWtlYm94LCBhbmQgYSBKb2phIENvbGEgc29kYSBtYWNoaW5lLlwiLFxuICAgIGltZ1NyYzogXCIuL3NyYy9zYWxvb24ucG5nXCIsXG4gICAgaW1nTmFtZTogc2Fsb29uSW1nLFxuICAgIGltZ0FsdDogXCJTdGFyZGV3IFZhbGxleSBTdGFyZHJvcCBTYWxvb25cIixcbiAgICBzdHlsZTogXCJ3aWR0aDogMjUwcHhcIixcbn1cblxuY29uc3QgaG91cnMgPSB7XG4gICAgdGl0bGVUYWc6IFwiaDJcIixcbiAgICB0aXRsZVRleHQ6IFwiSG91cnNcIixcbiAgICB0ZXh0VGFnOiBcInBcIixcbiAgICBib2R5VGV4dDogXCIxMjowMHBtIC0gMTI6MDBhbVwiLFxufVxuXG5jb25zdCBsb2NhdGlvbiA9IHtcbiAgICB0aXRsZVRhZzogXCJoMlwiLFxuICAgIHRpdGxlVGV4dDogXCJMb2NhdGlvblwiLFxuICAgIHRleHRUYWc6IFwicFwiLFxuICAgIGJvZHlUZXh0OiBcIlRoZSBTdGFyZHJvcCBTYWxvb24gaXMgbG9jYXRlZCBpbiB0aGUgY2VudGVyIG9mIFBlbGljYW4gVG93bi5cIixcbiAgICBpbWdOYW1lOiBtYXAsXG4gICAgaW1nU3JjIDogXCIvc3JjL01hcC5wbmdcIixcbiAgICBpbWdBbHQ6IFwiU3RhcmRldyBWYWxsZXkgTWFwXCIsXG59XG5cbmxldCBjb250ZW50QXJyYXlvZk9iamVjdHMgPSBbaGVhZGluZywgYWJvdXQsIGhvdXJzLCBsb2NhdGlvbl07XG5cbmZ1bmN0aW9uIGltYWdlRmFjdG9yeShpbWFnZSl7XG4gICAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG15SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgcmV0dXJuIG15SW1hZ2U7XG59IiwiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgY29udGFjdFBhZ2VMb2FkIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuLy8gV3JpdGUgdGhlIHRhYi1zd2l0Y2hpbmcgbG9naWMgaW5zaWRlIG9mIGluZGV4LmpzLiBZb3Ugc2hvdWxkIGhhdmUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHRhYiB0aGF0IHdpcGVzIG91dCB0aGUgY3VycmVudCBjb250ZW50cyBhbmQgdGhlbiBydW5zIHRoZSBjb3JyZWN0IOKAmHRhYiBtb2R1bGXigJkgdG8gcG9wdWxhdGUgaXQgYWdhaW4uXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIC8vY3JlYXRlIGVsZW1lbnRzXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgbGV0IG1lbnVJdGVtc0FycmF5ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdOyBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAvL2NyZWF0ZSBsaSwgYWRkIGFycmF5IGl0ZW0gYXMgdGV4dENvbnRlbnQgb2YgbGksIGFkZCBpZCwgYWRkIGxpIGFzIGNoaWxkIG9mIG1lbnUgKHVsKVxuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc0FycmF5W2ldO1xuICAgICAgICBsaXN0SXRlbS5pZCA9IG1lbnVJdGVtc0FycmF5W2ldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH1cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIYW5kbGVyKTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5cbmZ1bmN0aW9uIGV2ZW50SGFuZGxlcihlKXtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKXtcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGhvbWVQYWdlTG9hZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOiBcbiAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgbWVudVBhZ2VMb2FkKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6IFxuICAgICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBjb250YWN0UGFnZUxvYWQoKTtcbiAgICAgICAgICAgIGJyZWFrOyBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpeyAgIFxuICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgLy9jcmVhdGUgZWxlbWVudHNcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgY3JlZGl0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAvL2NyZWF0ZSBvYmplY3RzIGZvciBlYWNoIGFycmF5IGl0ZW1cbiAgICBsZXQgY3JlZGl0cyA9IHtcbiAgICAgICAgbG9hZENyZWRpdHMoKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2UgY3JlZGl0czogd3d3LnN0YXJkZXd2YWxsZXkuY29tXCIpO1xuICAgICAgICB9LFxuICAgICAgICBsaW5rVGV4dDogJ0NyZWRpdHMnXG4gICAgfVxuXG4gICAgbGV0IG9kaW4gPSB7XG4gICAgICAgIGxpbms6ICdodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vbGVzc29ucy9ub2RlLXBhdGgtamF2YXNjcmlwdC1yZXN0YXVyYW50LXBhZ2UnLFxuICAgICAgICBsaW5rVGV4dDogJ1RoZSBPZGluIFByb2plY3QnXG4gICAgfVxuXG4gICAgbGV0IGdpdGh1YiA9IHtcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9QZWFjaGVzLXhvL3Jlc3RhdXJhbnQtcGFnZScsXG4gICAgICAgIGxpbmtUZXh0OiAnR2l0aHViJ1xuICAgIH1cblxuICAgIGxldCBjcmVkaXRNZW51SXRlbXNBcnJheSA9IFtjcmVkaXRzLCBvZGluLCBnaXRodWJdOyBcblxuXG4gICAgY3JlZGl0TWVudUl0ZW1zQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGl0ZW0ubGluayl7XG4gICAgICAgICAgICBsZXQgbGlua0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rSXRlbS5ocmVmID0gaXRlbS5saW5rO1xuICAgICAgICAgICAgbGlua0l0ZW0udGV4dENvbnRlbnQgPSBpdGVtLmxpbmtUZXh0O1xuICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlua0l0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtLmxpbmtUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGNyZWRpdE1lbnUuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgICAgIFxuXG4gICAgfSlcbmZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRNZW51KTtcblxuXG5cblxucmV0dXJuIGZvb3Rlcjtcbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xubGV0IGNyZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3Rlcj51bD5saTpmaXJzdC1jaGlsZCcpO1xuY3JlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWxlcnQoXCJJbWFnZXMgZnJvbSB3d3cuc3RhcmRld3ZhbGxleS5jb21cIikpOyBcbmNvbnNvbGUubG9nKGNyZWRpdEJ0bik7XG5cblxuXG5cbiIsIi8vIE1vZHVsZSB0byBsb2FkIE1FTlUgTU9EVUxFIGNvbnRlbnRcbmltcG9ydCBiZWVySW1nIGZyb20gJy4vQmVlci5wbmcnO1xuaW1wb3J0IGNvZmZlZUltZyBmcm9tICcuL0NvZmZlZS5wbmcnO1xuaW1wb3J0IGNvbGFJbWcgZnJvbSAnLi9Kb2phX2NvbGEucG5nJztcbmltcG9ydCBzYWxhZEltZyBmcm9tICcuL1NhbGFkLnBuZyc7XG5pbXBvcnQgYnJlYWRJbWcgZnJvbSAnLi9CcmVhZC5wbmcnXG5pbXBvcnQgc3BhZ2hldHRpSW1nIGZyb20gJy4vU3BhZ2hldHRpLnBuZyc7XG5pbXBvcnQgcGl6emFJbWcgZnJvbSAnLi9QaXp6YS5wbmcnO1xuXG5leHBvcnQgeyBtZW51UGFnZUxvYWQgfTtcblxuY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBpbWdOYW1lLCBpbWdBbHQpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5pbWdOYW1lID0gaW1nTmFtZTtcbiAgICAgICAgdGhpcy5pbWdBbHQgPSBpbWdBbHQ7XG4gICAgfVxuXG4gICAgY3JlYXRlSXRlbSgpe1xuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1XcmFwcGVyJyk7XG5cbiAgICAgICAgbGV0IGxlZnR3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxlZnR3cmFwLmNsYXNzTGlzdC5hZGQoJ2xlZnR3cmFwJyk7XG4gICAgICAgIGxldCByaWdodHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHR3cmFwLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0d3JhcCcpO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGVmdHdyYXApO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJpZ2h0d3JhcCk7XG5cbiAgICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG4gICAgICAgIGxlZnR3cmFwLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcblxuICAgICAgICBsZXQgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGVmdHdyYXAuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuXG4gICAgICAgIGxldCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHRoaXMucHJpY2U7XG4gICAgICAgIGxlZnR3cmFwLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gdGhpcy5pbWdOYW1lO1xuICAgICAgICBpdGVtSW1hZ2UuYWx0ID0gdGhpcy5pbWdBbHQ7XG4gICAgICAgIHJpZ2h0d3JhcC5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XG4gICAgfVxufVxuXG4vL2NyZWF0ZSBpbnN0YW5jZXMgb2YgY2xhc3MgZm9yIGFsbCBmb29kIGFuZCBiZXYgaXRlbXNcbmxldCBzYWxhZCA9IG5ldyBJdGVtKCdTYWxhZCcsICdBIGhlYWx0aHkgZ2FyZGVuIHNhbGFkJywgJzIyMGcnLCBzYWxhZEltZywgJ1N0YXJkZXcgVmFsbGV5IFNhbGFkJyk7XG5sZXQgYnJlYWQgPSBuZXcgSXRlbSgnQnJlYWQnLCAnQSBjcnVzdHkgYmFndWV0dGUnLCAnMTIwZycsIGJyZWFkSW1nLCAnU3RhcmRldyBWYWxsZXkgQnJlYWQnKTtcbmxldCBzcGFnaGV0dGkgPSBuZXcgSXRlbSgnU3BhZ2hldHRpJywgJ0FuIG9sZCBmYXZvdXJpdGUnLCAnMjQwZycsIHNwYWdoZXR0aUltZywgJ1N0YXJkZXcgVmFsbGV5IFNwYWdoZXR0aScpO1xubGV0IHBpenphID0gbmV3IEl0ZW0oJ1BpenphJywgXCJQb3B1bGFyIGZvciBhbGwgdGhlIHJpZ2h0IHJlYXNvbnNcIiwgJzYwMGcnLCBwaXp6YUltZywgJ1N0YXJkZXcgVmFsbGV5IFBpenphJyk7XG5cblxubGV0IGJlZXIgPSBuZXcgSXRlbSgnQmVlcicsICdEcmluayBpbiBtb2RlcmF0aW9uJywgJzQwMGcnLCBiZWVySW1nLCAnU3RhcmRldyBWYWxsZXkgQmVlcicpO1xubGV0IGNvZmZlZSA9IG5ldyBJdGVtKCdDb2ZmZWUnLCAnSXQgc21lbGxzIGRlbGljaW91cy4gVGhpcyBpcyBzdXJlIHRvIGdpdmUgeW91IGEgYm9vc3QuJywgJzMwMGcnLCBjb2ZmZWVJbWcsICdTdGFyZGV3IFZhbGxleSBDb2ZmZWUnKTtcbmxldCBjb2xhID0gbmV3IEl0ZW0oJ0pvamEgQ29sYScsICdUaGUgZmxhZ3NoaXAgcHJvZHVjdCBvZiBKb2phIGNvcnBvcmF0aW9uLicsICc3NWcnLCBjb2xhSW1nLCAnU3RhcmRldyBWYWxsZXkgSm9qYSBDb2xhJyk7XG5cblxuLy8gYWRkIGluc3RhbmNlcyB0byBhcnJheVxubGV0IG1lYWxzQXJyYXkgPSBbc2FsYWQsIGJyZWFkLCBzcGFnaGV0dGksIHBpenphXTtcbmxldCBiZXZBcnJheSA9IFtiZWVyLCBjb2ZmZWUsIGNvbGFdO1xuXG5cbi8vZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGRpdiwgYWRkcyBjb250ZW50IGFuZCBhcHBlbmRzIHRvIGRvbVxuZnVuY3Rpb24gbWVudVBhZ2VMb2FkKCl7XG4gICAgLy9DUkVBVEVTIFRIRSBESVZcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4vL0FQUEVORFMgVE8gRE9NXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250ZW50LGZvb3Rlcik7IFxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCl7XG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgICBcbiAgICAgICAgbGV0IGgxaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhlIFN0YXJkcm9wIFNhbG9vbiBNZW51XCJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoMWhlYWRpbmcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH1cbiAgICBjcmVhdGVIZWFkaW5nKCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNYWluU2VjdGlvbnMoYXJySXRlbSl7XG4gICAgICAgIGxldCBzZWN0aW9ud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgc2VjdGlvbndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuICAgICAgICBzZWN0aW9ud3JhcHBlci5jbGFzc0xpc3QuYWRkKGFyckl0ZW0udG9Mb3dlckNhc2UoKSk7XG4gICAgIFxuICAgICAgICBsZXQgc2VjdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzZWN0aW9uSGVhZGluZy50ZXh0Q29udGVudCA9IGFyckl0ZW07IFxuICAgICAgICBcbiAgICAgICAgc2VjdGlvbndyYXBwZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRpbmcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb253cmFwcGVyKTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25OYW1lcyA9IFtcIkJldmVyYWdlc1wiLCBcIk1lYWxzXCJdO1xuICAgIHNlY3Rpb25OYW1lcy5mb3JFYWNoKGNyZWF0ZU1haW5TZWN0aW9ucyk7XG5cbiAgIGxldCBtZWFsc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMnKTtcbiAgIGxldCBiZXZTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJldmVyYWdlcycpO1xuXG4vL2xvb3AgdGhyb3VnaCBtZWFscyBhcnJheSBhbmQgY2FsbCBtZWFsLmNyZWF0ZUl0ZW0gb24gZWFjaCBtZWFsXG5tZWFsc0FycmF5LmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBtZWFsc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZm9vZC5jcmVhdGVJdGVtKCkpO1xufSk7XG5cbmJldkFycmF5LmZvckVhY2goKGRyaW5rKSA9PiB7XG4gICAgYmV2U2VjdGlvbi5hcHBlbmRDaGlsZChkcmluay5jcmVhdGVJdGVtKCkpO1xufSk7XG5cblxuLy9BUFBFTkRTIFRPIERPTVxuLy9kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250ZW50LGZvb3Rlcik7IFxuICBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9