/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::root {\r\n\tfont-size: 12px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\nbody {\r\n\tfont-family:'Raleway', sans-serif;\r\n\tbackground:#f5f5f5;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr;\r\n\tgrid-template-rows:auto 1fr;\r\n\tmargin:0;\r\n\tpadding:0;\r\n\theight: 100vh;\r\n}\r\n\r\nheader {\r\n\tgrid-column: 1/-1;\r\n\tbackground:#14151f;\r\n\tpadding:16px;\r\n\tcolor:white;\r\n\tfont-size:1.4rem;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr ;\r\n\talign-items:center;\r\n}\r\n\r\nheader div:first-child {\r\n\tjustify-self:flex-start;\r\n\tfont-size:2rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#search-bar {\r\n\twidth:70%;\r\n\tpadding:0.8rem 1rem;\r\n\tfont-size:1.2rem;\r\n\tborder-radius:12px;\r\n\toutline: none;\r\n\tbackground: #14151f;\r\n\tcolor:white;\r\n\tborder:1px solid white;\r\n}\r\n\r\n#search-bar:placeholder {\r\n\tcolor: #ccc;\r\n}\r\n\r\n#search-bar:focus, \r\n#search-bar:hover{\r\n\tbackground:white;\r\n\tcolor:black;\r\n}\r\n\r\n\r\n.side-bar {\r\n\tbackground:white;\r\n\theight:100%;\r\n\tbox-shadow: 0 0 1em rgba(0, 0, 0, 0.3);\r\n\tdisplay:grid;\r\n\tgrid-template-rows: 1fr auto;\r\n\tfont-weight:700;\r\n}\r\n\r\n.project-navigation {\r\n\tfont-size:1.2rem;\r\n\tpadding: 40px 15px 0px 15px;\r\n}\r\n\r\n#general, #categories {\r\n\tpadding:10px 10px;\r\n\tborder-radius:12px;\r\n}\r\n\r\n#categories {\r\n\ttext-transform: uppercase;\r\n\tfont-weight:500;\r\n\tmargin-top:20px;\r\n\tcolor:#c5c5c5;\r\n} \r\n\r\n.projects-list > div {\r\n\tpadding:10px 20px;\r\n}\r\n\r\n.projects-list > div, \r\n#general  {\r\n\tborder-radius:12px;\r\n}\r\n\r\n.projects-list > div:hover,\r\n#general:hover {\r\n\tcursor:pointer;\r\n\tbackground: rgba(0,0,0,0.3);\r\n}\r\n\r\n#open-project-dialog {\r\n\tpadding:20px;\r\n\tborder:none;\r\n\tborder-top:1px solid #ccc;\r\n\tbackground:transparent;\r\n\ttext-align:left;\r\n\toutline:none;\r\n\tcolor: #2b2b2b;\r\n\tfont-size:1.2rem;\r\n}\r\n\r\n#open-project-dialog:hover {\r\n\tcursor:pointer;\r\n\tbackground:rgba(0,0,0,0.3);\r\n}\r\n\r\n#main-content {\r\n\tpadding:40px 0px 0px 80px;\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n}\r\n\r\n.project-description {\r\n\tfont-size:1.4rem;\r\n}\r\n\r\n.create-task-btn {\r\n\twidth:120px;\r\n\ttext-transform: uppercase;\r\n\tbackground:#1088eb;\r\n\tborder:none;\r\n\tborder-radius:8px;\r\n\tcolor:white;\r\n\tpadding:8px 12px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.create-task-btn:hover {\r\n\tcursor:pointer;\r\n\ttransform: scale(1.01);\r\n}\r\n\r\nh1 {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-size:3.4rem;\r\n/*\tfont-style: italic;*/\r\n}\r\n\r\nh3 {\r\n\tfont-size:1.8rem;\r\n\ttext-align:center;\r\n}\r\n\r\np {\r\n\tmargin:0;\r\n\r\n}\r\n\r\ndialog {\r\n\tborder:none;\r\n\tbox-shadow: 0 0 5em rgba(0, 0, 0, 0.3);\r\n\tborder-radius:12px;\r\n\tpadding:20px;\r\n\tbackground:#14151f;\r\n\tcolor:white;\r\n}\r\n\r\nform {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-content {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:20px;\r\n}\r\n\r\n.input-desc {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect {\r\n\twidth:340px;\r\n/*\tmargin:0 auto;*/\r\n\tpadding:8px 12px;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tbackground:transparent;\r\n\tborder-color:white;\r\n\tcolor:white;\r\n}\r\n\r\n.form-content option {\r\n\tcolor:black;\r\n}\r\n\r\n.form-content textarea {\r\n\tresize:none;\r\n}\r\n\r\n.form-row {\r\n\tdisplay:flex;\r\n\tgap:5px;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-footer{\r\n\tpadding-top:20px;\r\n\ttext-align:center;\r\n}\r\n\r\n.form-footer button {\r\n\tmargin:0 auto;\r\n\twidth:120px;\r\n\tborder-radius:8px;\r\n\tpadding:12px 16px;\r\n\tbackground:#1088eb;\r\n\tcolor:white;\r\n}\r\n\r\n#task-description {\r\n\r\n}\r\n\r\ndialog::backdrop {\r\n\tbackground:rgba(0,0,0,0.6);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;CACC,eAAe;AAChB;;AAEA;;;CAGC,sBAAsB;AACvB;;;AAGA;CACC,iCAAiC;CACjC,kBAAkB;CAClB,YAAY;CACZ,8BAA8B;CAC9B,2BAA2B;CAC3B,QAAQ;CACR,SAAS;CACT,aAAa;AACd;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,gBAAgB;CAChB,YAAY;CACZ,+BAA+B;CAC/B,kBAAkB;AACnB;;AAEA;CACC,uBAAuB;CACvB,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,SAAS;CACT,mBAAmB;CACnB,gBAAgB;CAChB,kBAAkB;CAClB,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,sBAAsB;AACvB;;AAEA;CACC,WAAW;AACZ;;AAEA;;CAEC,gBAAgB;CAChB,WAAW;AACZ;;;AAGA;CACC,gBAAgB;CAChB,WAAW;CACX,sCAAsC;CACtC,YAAY;CACZ,4BAA4B;CAC5B,eAAe;AAChB;;AAEA;CACC,gBAAgB;CAChB,2BAA2B;AAC5B;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,yBAAyB;CACzB,eAAe;CACf,eAAe;CACf,aAAa;AACd;;AAEA;CACC,iBAAiB;AAClB;;AAEA;;CAEC,kBAAkB;AACnB;;AAEA;;CAEC,cAAc;CACd,2BAA2B;AAC5B;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,yBAAyB;CACzB,sBAAsB;CACtB,eAAe;CACf,YAAY;CACZ,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,cAAc;CACd,0BAA0B;AAC3B;;AAEA;CACC,yBAAyB;CACzB,YAAY;CACZ,qBAAqB;CACrB,QAAQ;AACT;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,WAAW;CACX,yBAAyB;CACzB,kBAAkB;CAClB,WAAW;CACX,iBAAiB;CACjB,WAAW;CACX,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;CACC,cAAc;CACd,sBAAsB;AACvB;;AAEA;CACC,SAAS;CACT,QAAQ;CACR,gBAAgB;AACjB,uBAAuB;AACvB;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,QAAQ;;AAET;;AAEA;CACC,WAAW;CACX,sCAAsC;CACtC,kBAAkB;CAClB,YAAY;CACZ,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,qBAAqB;AACtB;;AAEA;CACC,YAAY;CACZ,sBAAsB;CACtB,QAAQ;AACT;;AAEA;CACC,YAAY;CACZ,8BAA8B;AAC/B;;AAEA;;;CAGC,WAAW;AACZ,kBAAkB;CACjB,gBAAgB;CAChB,kCAAkC;CAClC,sBAAsB;CACtB,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,OAAO;CACP,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,WAAW;CACX,iBAAiB;CACjB,iBAAiB;CACjB,kBAAkB;CAClB,WAAW;AACZ;;AAEA;;AAEA;;AAEA;CACC,0BAA0B;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@300;500;700&display=swap');\r\n\r\n::root {\r\n\tfont-size: 12px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\nbody {\r\n\tfont-family:'Raleway', sans-serif;\r\n\tbackground:#f5f5f5;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr;\r\n\tgrid-template-rows:auto 1fr;\r\n\tmargin:0;\r\n\tpadding:0;\r\n\theight: 100vh;\r\n}\r\n\r\nheader {\r\n\tgrid-column: 1/-1;\r\n\tbackground:#14151f;\r\n\tpadding:16px;\r\n\tcolor:white;\r\n\tfont-size:1.4rem;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr ;\r\n\talign-items:center;\r\n}\r\n\r\nheader div:first-child {\r\n\tjustify-self:flex-start;\r\n\tfont-size:2rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#search-bar {\r\n\twidth:70%;\r\n\tpadding:0.8rem 1rem;\r\n\tfont-size:1.2rem;\r\n\tborder-radius:12px;\r\n\toutline: none;\r\n\tbackground: #14151f;\r\n\tcolor:white;\r\n\tborder:1px solid white;\r\n}\r\n\r\n#search-bar:placeholder {\r\n\tcolor: #ccc;\r\n}\r\n\r\n#search-bar:focus, \r\n#search-bar:hover{\r\n\tbackground:white;\r\n\tcolor:black;\r\n}\r\n\r\n\r\n.side-bar {\r\n\tbackground:white;\r\n\theight:100%;\r\n\tbox-shadow: 0 0 1em rgba(0, 0, 0, 0.3);\r\n\tdisplay:grid;\r\n\tgrid-template-rows: 1fr auto;\r\n\tfont-weight:700;\r\n}\r\n\r\n.project-navigation {\r\n\tfont-size:1.2rem;\r\n\tpadding: 40px 15px 0px 15px;\r\n}\r\n\r\n#general, #categories {\r\n\tpadding:10px 10px;\r\n\tborder-radius:12px;\r\n}\r\n\r\n#categories {\r\n\ttext-transform: uppercase;\r\n\tfont-weight:500;\r\n\tmargin-top:20px;\r\n\tcolor:#c5c5c5;\r\n} \r\n\r\n.projects-list > div {\r\n\tpadding:10px 20px;\r\n}\r\n\r\n.projects-list > div, \r\n#general  {\r\n\tborder-radius:12px;\r\n}\r\n\r\n.projects-list > div:hover,\r\n#general:hover {\r\n\tcursor:pointer;\r\n\tbackground: rgba(0,0,0,0.3);\r\n}\r\n\r\n#open-project-dialog {\r\n\tpadding:20px;\r\n\tborder:none;\r\n\tborder-top:1px solid #ccc;\r\n\tbackground:transparent;\r\n\ttext-align:left;\r\n\toutline:none;\r\n\tcolor: #2b2b2b;\r\n\tfont-size:1.2rem;\r\n}\r\n\r\n#open-project-dialog:hover {\r\n\tcursor:pointer;\r\n\tbackground:rgba(0,0,0,0.3);\r\n}\r\n\r\n#main-content {\r\n\tpadding:40px 0px 0px 80px;\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n}\r\n\r\n.project-description {\r\n\tfont-size:1.4rem;\r\n}\r\n\r\n.create-task-btn {\r\n\twidth:120px;\r\n\ttext-transform: uppercase;\r\n\tbackground:#1088eb;\r\n\tborder:none;\r\n\tborder-radius:8px;\r\n\tcolor:white;\r\n\tpadding:8px 12px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.create-task-btn:hover {\r\n\tcursor:pointer;\r\n\ttransform: scale(1.01);\r\n}\r\n\r\nh1 {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-size:3.4rem;\r\n/*\tfont-style: italic;*/\r\n}\r\n\r\nh3 {\r\n\tfont-size:1.8rem;\r\n\ttext-align:center;\r\n}\r\n\r\np {\r\n\tmargin:0;\r\n\r\n}\r\n\r\ndialog {\r\n\tborder:none;\r\n\tbox-shadow: 0 0 5em rgba(0, 0, 0, 0.3);\r\n\tborder-radius:12px;\r\n\tpadding:20px;\r\n\tbackground:#14151f;\r\n\tcolor:white;\r\n}\r\n\r\nform {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-content {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:20px;\r\n}\r\n\r\n.input-desc {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect {\r\n\twidth:340px;\r\n/*\tmargin:0 auto;*/\r\n\tpadding:8px 12px;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tbackground:transparent;\r\n\tborder-color:white;\r\n\tcolor:white;\r\n}\r\n\r\n.form-content option {\r\n\tcolor:black;\r\n}\r\n\r\n.form-content textarea {\r\n\tresize:none;\r\n}\r\n\r\n.form-row {\r\n\tdisplay:flex;\r\n\tgap:5px;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-footer{\r\n\tpadding-top:20px;\r\n\ttext-align:center;\r\n}\r\n\r\n.form-footer button {\r\n\tmargin:0 auto;\r\n\twidth:120px;\r\n\tborder-radius:8px;\r\n\tpadding:12px 16px;\r\n\tbackground:#1088eb;\r\n\tcolor:white;\r\n}\r\n\r\n#task-description {\r\n\r\n}\r\n\r\ndialog::backdrop {\r\n\tbackground:rgba(0,0,0,0.6);\r\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Project = (title, description, tasks) => {
	return {
		title, 
		description,
		tasks,
	}
}

const projects = (() => {
	const projects = [];

	const getProjectList = () => projects;

	const addProject = (title, desc) => {
		const newProject = Project(title, desc, []);
		projects.push(newProject);
	}

	const getProject = (index) => {
		return projects[index];
	}

	const addTask = (index, task) => {
		projects[index].push(task);
	}

	return {
		addProject,
		getProjectList,
		getProject,
		addTask, 
	}
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (title, details, dueDate, priority) => {
	let isFinished = false;
	return {
		title, 
		description,
		dueDate,
		priority,
		isFinished,
	}
}

const task = () => {
	const createTask = (title, description, date, priority) => {
		return Task(title, description, date, priority);
	}

	return {
		createTask,
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");





const DOMController = (() => {
	const generalTask = [];

	const addProjectBtn = document.querySelector('#open-project-dialog');
	const projectDialog = document.querySelector('#project-form-dialog');
	const taskDialog = document.querySelector("#task-form-dialog");

	const projectTitle = document.querySelector('#project-title');
	const projectTitleCounter = document.querySelector('#title-counter');
	const projectDesc = document.querySelector('#project-description');
	const projectDescCounter = document.querySelector('#desc-counter');
	const createProjectBtn = document.querySelector('#create-project');
	const createTaskBtn = document.querySelector('#create-task');

	const general = document.querySelector('#general');
	const projectListContainer = document.querySelector('.projects-list');

	const mainContent = document.querySelector('#main-content');

	let currentPage = -1;

	const openProjectFormDialog = () => {
		projectDialog.showModal();
	}

	const closeProjectFormDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const openTaskFormDialog = () => {
		taskDialog.showModal();
	}

	const closeTaskFormDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const countLetters = (event, p, limit) => {
		p.textContent = `${event.target.value.length}/${limit}`;
	}

	const cleanInput = () => {
		projectTitle.value = '';
		projectDesc.value = '';
		projectTitleCounter.textContent = `0/30`;
		projectDescCounter.textContent = `0/50`;
	}

	const clearProjectList = () => {
		while(projectListContainer.firstChild) {
			projectListContainer.removeChild(projectListContainer.lastChild);
		}
	}

	const createTask = (e) => {
		e.preventDefault();
		const title = document.querySelector('#task-title').value;
		const description = document.querySelector('#task-description').value;
		const dueDate = document.querySelector('#due-date').value;
		const priority = document.querySelector("#task-priority").value;

		if(!title || !priority || !dueDate) return; 

		console.log(_task_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask)
		const taskObj = _task_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(title, description, dueDate, priority);
		console.log(taskObj);
		_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(currentPage, taskObj);
		taskDialog.close();
	}

	const renderGeneralPage = () => {
		clearPageContent();
		currentPage = -1;

		const h1 = document.createElement('h1');
		h1.textContent = 'All Tasks';
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = 'General Tasks';
		p.style.fontSize = '1.4rem';
		mainContent.appendChild(p);
	}

	const renderPage = (index) => {
		clearPageContent();
		currentPage = index;
		const projectObj = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(index);	
		
		const h1 = document.createElement('h1');
		h1.textContent = projectObj.title;
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = projectObj.description;
		mainContent.appendChild(p);

		const createTaskBtn = document.createElement('button');
		createTaskBtn.textContent = 'Create Task';
		createTaskBtn.classList.add('create-task-btn');
		createTaskBtn.dataset.idx = index;
		createTaskBtn.addEventListener('click', openTaskFormDialog);

		mainContent.appendChild(createTaskBtn);
	}

	const clearPageContent = () => {
		while(mainContent.firstChild) {
			mainContent.removeChild(mainContent.lastChild);
		}
	}

	const renderProjectList = () => {
		const projectList = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList()

		clearProjectList();

		projectList.forEach((project, idx) => {
			let div = document.createElement('div');
			div.textContent = project.title;
			div.dataset.idx = idx; 
			div.addEventListener('click', (e) => {
				renderPage(e.target.dataset.idx);
			})

			projectListContainer.append(div);
		})
	}

	const createProject = (e) => {
		e.preventDefault();
		_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectTitle.value, projectDesc.value)
		cleanInput();
		renderProjectList();
		renderPage(_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList().length - 1);
		projectDialog.close();
	}

	renderProjectList();
	renderGeneralPage();

	general.addEventListener('click', renderGeneralPage);

	projectDialog.addEventListener('click', closeProjectFormDialog);
	taskDialog.addEventListener('click', closeTaskFormDialog);
	addProjectBtn.addEventListener('click', openProjectFormDialog);
	createTaskBtn.addEventListener('click', createTask);
	projectTitle.addEventListener('input', (e) => countLetters(e, projectTitleCounter, 30));
	projectDesc.addEventListener('input', (e) => countLetters(e, projectDescCounter, 50));
	createProjectBtn.addEventListener('click', createProject);

})();	
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUVBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBa0I7QUFDcEI7QUFDQTtBQUNBLGFBQWEsbUVBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjo6cm9vdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6J1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcblxcdGJhY2tncm91bmQ6I2Y1ZjVmNTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcjtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogMS8tMTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxNDE1MWY7XFxyXFxuXFx0cGFkZGluZzoxNnB4O1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxLjRyZW07XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciA7XFxyXFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHRqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXHJcXG5cXHRmb250LXNpemU6MnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhciB7XFxyXFxuXFx0d2lkdGg6NzAlO1xcclxcblxcdHBhZGRpbmc6MC44cmVtIDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOjEuMnJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMTQxNTFmO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGJvcmRlcjoxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6Zm9jdXMsIFxcclxcbiNzZWFyY2gtYmFyOmhvdmVye1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0Y29sb3I6YmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlLWJhciB7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6MTAwJTtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG5cXHRmb250LXdlaWdodDo3MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hdmlnYXRpb24ge1xcclxcblxcdGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogNDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ2VuZXJhbCwgI2NhdGVnb3JpZXMge1xcclxcblxcdHBhZGRpbmc6MTBweCAxMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6MTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6NTAwO1xcclxcblxcdG1hcmdpbi10b3A6MjBweDtcXHJcXG5cXHRjb2xvcjojYzVjNWM1O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3RzLWxpc3QgPiBkaXYge1xcclxcblxcdHBhZGRpbmc6MTBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtbGlzdCA+IGRpdiwgXFxyXFxuI2dlbmVyYWwgIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1saXN0ID4gZGl2OmhvdmVyLFxcclxcbiNnZW5lcmFsOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcblxcclxcbiNvcGVuLXByb2plY3QtZGlhbG9nIHtcXHJcXG5cXHRwYWRkaW5nOjIwcHg7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxuXFx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcXHJcXG5cXHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xcclxcblxcdHRleHQtYWxpZ246bGVmdDtcXHJcXG5cXHRvdXRsaW5lOm5vbmU7XFxyXFxuXFx0Y29sb3I6ICMyYjJiMmI7XFxyXFxuXFx0Zm9udC1zaXplOjEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI29wZW4tcHJvamVjdC1kaWFsb2c6aG92ZXIge1xcclxcblxcdGN1cnNvcjpwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250ZW50IHtcXHJcXG5cXHRwYWRkaW5nOjQwcHggMHB4IDBweCA4MHB4O1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG5cXHRmb250LXNpemU6MS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXRhc2stYnRuIHtcXHJcXG5cXHR3aWR0aDoxMjBweDtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdGJhY2tncm91bmQ6IzEwODhlYjtcXHJcXG5cXHRib3JkZXI6bm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjhweDtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nOjhweCAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIge1xcclxcblxcdGN1cnNvcjpwb2ludGVyO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFx0Zm9udC1zaXplOjMuNHJlbTtcXHJcXG4vKlxcdGZvbnQtc3R5bGU6IGl0YWxpYzsqL1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1zaXplOjEuOHJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCAwIDVlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcblxcdHBhZGRpbmc6MjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxNDE1MWY7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGVzYyB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG5cXHR3aWR0aDozNDBweDtcXHJcXG4vKlxcdG1hcmdpbjowIGF1dG87Ki9cXHJcXG5cXHRwYWRkaW5nOjhweCAxMnB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXHJcXG5cXHRib3JkZXItY29sb3I6d2hpdGU7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQgb3B0aW9uIHtcXHJcXG5cXHRjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxyXFxuXFx0cmVzaXplOm5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdyB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGdhcDo1cHg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1mb290ZXJ7XFxyXFxuXFx0cGFkZGluZy10b3A6MjBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZm9vdGVyIGJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHR3aWR0aDoxMjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjhweDtcXHJcXG5cXHRwYWRkaW5nOjEycHggMTZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxMDg4ZWI7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxyXFxuXFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBOzs7Q0FHQyxzQkFBc0I7QUFDdkI7OztBQUdBO0NBQ0MsaUNBQWlDO0NBQ2pDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixRQUFRO0NBQ1IsU0FBUztDQUNULGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLCtCQUErQjtDQUMvQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjs7O0FBR0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLHNDQUFzQztDQUN0QyxZQUFZO0NBQ1osNEJBQTRCO0NBQzVCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsZUFBZTtDQUNmLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsWUFBWTtDQUNaLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsUUFBUTtDQUNSLGdCQUFnQjtBQUNqQix1QkFBdUI7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsUUFBUTs7QUFFVDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxzQ0FBc0M7Q0FDdEMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsWUFBWTtDQUNaLDhCQUE4QjtBQUMvQjs7QUFFQTs7O0NBR0MsV0FBVztBQUNaLGtCQUFrQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0NBQWtDO0NBQ2xDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLE9BQU87Q0FDUCxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjo6cm9vdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6J1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcblxcdGJhY2tncm91bmQ6I2Y1ZjVmNTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcjtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogMS8tMTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxNDE1MWY7XFxyXFxuXFx0cGFkZGluZzoxNnB4O1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxLjRyZW07XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciA7XFxyXFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHRqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXHJcXG5cXHRmb250LXNpemU6MnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhciB7XFxyXFxuXFx0d2lkdGg6NzAlO1xcclxcblxcdHBhZGRpbmc6MC44cmVtIDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOjEuMnJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMTQxNTFmO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGJvcmRlcjoxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6Zm9jdXMsIFxcclxcbiNzZWFyY2gtYmFyOmhvdmVye1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0Y29sb3I6YmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlLWJhciB7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6MTAwJTtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG5cXHRmb250LXdlaWdodDo3MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hdmlnYXRpb24ge1xcclxcblxcdGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogNDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ2VuZXJhbCwgI2NhdGVnb3JpZXMge1xcclxcblxcdHBhZGRpbmc6MTBweCAxMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6MTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6NTAwO1xcclxcblxcdG1hcmdpbi10b3A6MjBweDtcXHJcXG5cXHRjb2xvcjojYzVjNWM1O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3RzLWxpc3QgPiBkaXYge1xcclxcblxcdHBhZGRpbmc6MTBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtbGlzdCA+IGRpdiwgXFxyXFxuI2dlbmVyYWwgIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1saXN0ID4gZGl2OmhvdmVyLFxcclxcbiNnZW5lcmFsOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcblxcclxcbiNvcGVuLXByb2plY3QtZGlhbG9nIHtcXHJcXG5cXHRwYWRkaW5nOjIwcHg7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxuXFx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcXHJcXG5cXHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xcclxcblxcdHRleHQtYWxpZ246bGVmdDtcXHJcXG5cXHRvdXRsaW5lOm5vbmU7XFxyXFxuXFx0Y29sb3I6ICMyYjJiMmI7XFxyXFxuXFx0Zm9udC1zaXplOjEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI29wZW4tcHJvamVjdC1kaWFsb2c6aG92ZXIge1xcclxcblxcdGN1cnNvcjpwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250ZW50IHtcXHJcXG5cXHRwYWRkaW5nOjQwcHggMHB4IDBweCA4MHB4O1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG5cXHRmb250LXNpemU6MS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLXRhc2stYnRuIHtcXHJcXG5cXHR3aWR0aDoxMjBweDtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdGJhY2tncm91bmQ6IzEwODhlYjtcXHJcXG5cXHRib3JkZXI6bm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjhweDtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHRwYWRkaW5nOjhweCAxMnB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtdGFzay1idG46aG92ZXIge1xcclxcblxcdGN1cnNvcjpwb2ludGVyO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFx0Zm9udC1zaXplOjMuNHJlbTtcXHJcXG4vKlxcdGZvbnQtc3R5bGU6IGl0YWxpYzsqL1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1zaXplOjEuOHJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCAwIDVlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcblxcdHBhZGRpbmc6MjBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxNDE1MWY7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtZGVzYyB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG5cXHR3aWR0aDozNDBweDtcXHJcXG4vKlxcdG1hcmdpbjowIGF1dG87Ki9cXHJcXG5cXHRwYWRkaW5nOjhweCAxMnB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuXFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXHJcXG5cXHRib3JkZXItY29sb3I6d2hpdGU7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQgb3B0aW9uIHtcXHJcXG5cXHRjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxyXFxuXFx0cmVzaXplOm5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdyB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGdhcDo1cHg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1mb290ZXJ7XFxyXFxuXFx0cGFkZGluZy10b3A6MjBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZm9vdGVyIGJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luOjAgYXV0bztcXHJcXG5cXHR3aWR0aDoxMjBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjhweDtcXHJcXG5cXHRwYWRkaW5nOjEycHggMTZweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxMDg4ZWI7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWRlc2NyaXB0aW9uIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxyXFxuXFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFByb2plY3QgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCB0YXNrcykgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHR0aXRsZSwgXHJcblx0XHRkZXNjcmlwdGlvbixcclxuXHRcdHRhc2tzLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xyXG5cdGNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5cdGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvamVjdHM7XHJcblxyXG5cdGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGRlc2MpID0+IHtcclxuXHRcdGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHRpdGxlLCBkZXNjLCBbXSk7XHJcblx0XHRwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGFkZFRhc2sgPSAoaW5kZXgsIHRhc2spID0+IHtcclxuXHRcdHByb2plY3RzW2luZGV4XS5wdXNoKHRhc2spO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGFkZFByb2plY3QsXHJcblx0XHRnZXRQcm9qZWN0TGlzdCxcclxuXHRcdGdldFByb2plY3QsXHJcblx0XHRhZGRUYXNrLCBcclxuXHR9XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7IiwiY29uc3QgVGFzayA9ICh0aXRsZSwgZGV0YWlscywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuXHRsZXQgaXNGaW5pc2hlZCA9IGZhbHNlO1xyXG5cdHJldHVybiB7XHJcblx0XHR0aXRsZSwgXHJcblx0XHRkZXNjcmlwdGlvbixcclxuXHRcdGR1ZURhdGUsXHJcblx0XHRwcmlvcml0eSxcclxuXHRcdGlzRmluaXNoZWQsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCB0YXNrID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xyXG5cdFx0cmV0dXJuIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y3JlYXRlVGFzayxcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5cclxuXHJcbmNvbnN0IERPTUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG5cdGNvbnN0IGdlbmVyYWxUYXNrID0gW107XHJcblxyXG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbi1wcm9qZWN0LWRpYWxvZycpO1xyXG5cdGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLWRpYWxvZycpO1xyXG5cdGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybS1kaWFsb2dcIik7XHJcblxyXG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XHJcblx0Y29uc3QgcHJvamVjdFRpdGxlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1jb3VudGVyJyk7XHJcblx0Y29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbicpO1xyXG5cdGNvbnN0IHByb2plY3REZXNjQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWNvdW50ZXInKTtcclxuXHRjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XHJcblx0Y29uc3QgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpO1xyXG5cclxuXHRjb25zdCBnZW5lcmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYWwnKTtcclxuXHRjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XHJcblxyXG5cdGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpO1xyXG5cclxuXHRsZXQgY3VycmVudFBhZ2UgPSAtMTtcclxuXHJcblx0Y29uc3Qgb3BlblByb2plY3RGb3JtRGlhbG9nID0gKCkgPT4ge1xyXG5cdFx0cHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsb3NlUHJvamVjdEZvcm1EaWFsb2cgPSAoZSkgPT4ge1xyXG5cdFx0aWYoIWUudGFyZ2V0LmNsb3Nlc3QoJ2RpdicpKSB7XHJcblx0XHRcdGUudGFyZ2V0LmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvcGVuVGFza0Zvcm1EaWFsb2cgPSAoKSA9PiB7XHJcblx0XHR0YXNrRGlhbG9nLnNob3dNb2RhbCgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xvc2VUYXNrRm9ybURpYWxvZyA9IChlKSA9PiB7XHJcblx0XHRpZighZS50YXJnZXQuY2xvc2VzdCgnZGl2JykpIHtcclxuXHRcdFx0ZS50YXJnZXQuY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNvdW50TGV0dGVycyA9IChldmVudCwgcCwgbGltaXQpID0+IHtcclxuXHRcdHAudGV4dENvbnRlbnQgPSBgJHtldmVudC50YXJnZXQudmFsdWUubGVuZ3RofS8ke2xpbWl0fWA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGVhbklucHV0ID0gKCkgPT4ge1xyXG5cdFx0cHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XHJcblx0XHRwcm9qZWN0RGVzYy52YWx1ZSA9ICcnO1xyXG5cdFx0cHJvamVjdFRpdGxlQ291bnRlci50ZXh0Q29udGVudCA9IGAwLzMwYDtcclxuXHRcdHByb2plY3REZXNjQ291bnRlci50ZXh0Q29udGVudCA9IGAwLzUwYDtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsZWFyUHJvamVjdExpc3QgPSAoKSA9PiB7XHJcblx0XHR3aGlsZShwcm9qZWN0TGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcblx0XHRcdHByb2plY3RMaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyLmxhc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGVUYXNrID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZTtcclxuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24nKS52YWx1ZTtcclxuXHRcdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZTtcclxuXHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xyXG5cclxuXHRcdGlmKCF0aXRsZSB8fCAhcHJpb3JpdHkgfHwgIWR1ZURhdGUpIHJldHVybjsgXHJcblxyXG5cdFx0Y29uc29sZS5sb2codGFzay5jcmVhdGVUYXNrKVxyXG5cdFx0Y29uc3QgdGFza09iaiA9IHRhc2suY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuXHRcdGNvbnNvbGUubG9nKHRhc2tPYmopO1xyXG5cdFx0cHJvamVjdC5hZGRUYXNrKGN1cnJlbnRQYWdlLCB0YXNrT2JqKTtcclxuXHRcdHRhc2tEaWFsb2cuY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbmRlckdlbmVyYWxQYWdlID0gKCkgPT4ge1xyXG5cdFx0Y2xlYXJQYWdlQ29udGVudCgpO1xyXG5cdFx0Y3VycmVudFBhZ2UgPSAtMTtcclxuXHJcblx0XHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblx0XHRoMS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLnRleHRDb250ZW50ID0gJ0dlbmVyYWwgVGFza3MnO1xyXG5cdFx0cC5zdHlsZS5mb250U2l6ZSA9ICcxLjRyZW0nO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZW5kZXJQYWdlID0gKGluZGV4KSA9PiB7XHJcblx0XHRjbGVhclBhZ2VDb250ZW50KCk7XHJcblx0XHRjdXJyZW50UGFnZSA9IGluZGV4O1xyXG5cdFx0Y29uc3QgcHJvamVjdE9iaiA9IHByb2plY3QuZ2V0UHJvamVjdChpbmRleCk7XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cdFx0aDEudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLnRpdGxlO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLnRleHRDb250ZW50ID0gcHJvamVjdE9iai5kZXNjcmlwdGlvbjtcclxuXHRcdG1haW5Db250ZW50LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHRcdGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdGNyZWF0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snO1xyXG5cdFx0Y3JlYXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzay1idG4nKTtcclxuXHRcdGNyZWF0ZVRhc2tCdG4uZGF0YXNldC5pZHggPSBpbmRleDtcclxuXHRcdGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza0Zvcm1EaWFsb2cpO1xyXG5cclxuXHRcdG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tCdG4pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xlYXJQYWdlQ29udGVudCA9ICgpID0+IHtcclxuXHRcdHdoaWxlKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0bWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdENoaWxkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbmRlclByb2plY3RMaXN0ID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0LmdldFByb2plY3RMaXN0KClcclxuXHJcblx0XHRjbGVhclByb2plY3RMaXN0KCk7XHJcblxyXG5cdFx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XHJcblx0XHRcdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0ZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuXHRcdFx0ZGl2LmRhdGFzZXQuaWR4ID0gaWR4OyBcclxuXHRcdFx0ZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRyZW5kZXJQYWdlKGUudGFyZ2V0LmRhdGFzZXQuaWR4KTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZChkaXYpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0cHJvamVjdC5hZGRQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSwgcHJvamVjdERlc2MudmFsdWUpXHJcblx0XHRjbGVhbklucHV0KCk7XHJcblx0XHRyZW5kZXJQcm9qZWN0TGlzdCgpO1xyXG5cdFx0cmVuZGVyUGFnZShwcm9qZWN0LmdldFByb2plY3RMaXN0KCkubGVuZ3RoIC0gMSk7XHJcblx0XHRwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJQcm9qZWN0TGlzdCgpO1xyXG5cdHJlbmRlckdlbmVyYWxQYWdlKCk7XHJcblxyXG5cdGdlbmVyYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJHZW5lcmFsUGFnZSk7XHJcblxyXG5cdHByb2plY3REaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RGb3JtRGlhbG9nKTtcclxuXHR0YXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrRm9ybURpYWxvZyk7XHJcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0Rm9ybURpYWxvZyk7XHJcblx0Y3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2spO1xyXG5cdHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiBjb3VudExldHRlcnMoZSwgcHJvamVjdFRpdGxlQ291bnRlciwgMzApKTtcclxuXHRwcm9qZWN0RGVzYy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiBjb3VudExldHRlcnMoZSwgcHJvamVjdERlc2NDb3VudGVyLCA1MCkpO1xyXG5cdGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcclxuXHJcbn0pKCk7XHQiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=