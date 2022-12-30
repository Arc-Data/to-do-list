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
___CSS_LOADER_EXPORT___.push([module.id, "::root {\r\n\tfont-size: 12px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\nbody {\r\n\tfont-family:'Raleway', sans-serif;\r\n\tbackground:#f5f5f5;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr;\r\n\tgrid-template-rows:auto 1fr;\r\n\tmargin:0;\r\n\tpadding:0;\r\n\theight: 100vh;\r\n}\r\n\r\nheader {\r\n\tgrid-column: 1/-1;\r\n\tbackground:#14151f;\r\n\tpadding:16px;\r\n\tcolor:white;\r\n\tfont-size:1.4rem;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr ;\r\n\talign-items:center;\r\n}\r\n\r\nheader div:first-child {\r\n\tjustify-self:flex-start;\r\n\tfont-size:2rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#search-bar {\r\n\twidth:70%;\r\n\tpadding:0.8rem 1rem;\r\n\tfont-size:1.2rem;\r\n\tborder-radius:12px;\r\n\toutline: none;\r\n\tbackground: #14151f;\r\n\tcolor:white;\r\n\tborder:1px solid white;\r\n}\r\n\r\n#search-bar:placeholder {\r\n\tcolor: #ccc;\r\n}\r\n\r\n#search-bar:focus, \r\n#search-bar:hover{\r\n\tbackground:white;\r\n\tcolor:black;\r\n}\r\n\r\n\r\n.side-bar {\r\n\tbackground:white;\r\n\theight:100%;\r\n\tbox-shadow: 0 0 1em rgba(0, 0, 0, 0.3);\r\n\tdisplay:grid;\r\n\tgrid-template-rows: 1fr auto;\r\n\tfont-weight:700;\r\n}\r\n\r\n.project-navigation {\r\n\tfont-size:1.2rem;\r\n\tpadding: 40px 15px 0px 15px;\r\n}\r\n\r\n#general, #categories {\r\n\tpadding:10px 10px;\r\n\tborder-radius:12px;\r\n}\r\n\r\n#categories {\r\n\ttext-transform: uppercase;\r\n\tfont-weight:500;\r\n\tmargin-top:20px;\r\n\tcolor:#c5c5c5;\r\n} \r\n\r\n.projects-list > div {\r\n\tpadding:10px 20px;\r\n}\r\n\r\n.projects-list > div, \r\n#general  {\r\n\tborder-radius:12px;\r\n}\r\n\r\n.projects-list > div:hover,\r\n#general:hover {\r\n\tcursor:pointer;\r\n\tbackground: rgba(0,0,0,0.3);\r\n}\r\n\r\n#open-project-dialog {\r\n\tpadding:20px;\r\n\tborder:none;\r\n\tborder-top:1px solid #ccc;\r\n\tbackground:transparent;\r\n\ttext-align:left;\r\n\toutline:none;\r\n\tcolor: #2b2b2b;\r\n\tfont-size:1.2rem;\r\n}\r\n\r\n#open-project-dialog:hover {\r\n\tcursor:pointer;\r\n\tbackground:rgba(0,0,0,0.3);\r\n}\r\n\r\n#main-content {\r\n\tpadding:40px 0px 0px 80px;\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n}\r\n\r\n.btn-flex {\r\n\tdisplay:flex;\r\n\tgap:10px;\r\n}\r\n\r\n.btn-flex-right {\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n#task-container {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:5px;\r\n\twidth:80%;\r\n}\r\n\r\n.taskCard {\r\n\tbox-shadow:0px 0px 5px rgba(0,0,0,0.3);\r\n\tposition:relative;\r\n\tbackground:white;\r\n\twidth:100%;\r\n\tpadding:10px 20px;\r\n\tfont-size:1.2em;\r\n\tdisplay:grid;\r\n\talign-items:center;\r\n\tgrid-template-columns:3fr 80px 1fr auto;\r\n\tgap:20px;\r\n}\r\n\r\n.taskCard:hover {\r\n\tcursor:pointer;\r\n}\r\n\r\n.taskCard.complete {\r\n\tbackground:rgba(0,0,0,0.3);\r\n\tbox-shadow:none;\r\n/*\ttext-decoration: line-through;*/\r\n}\r\n\r\n.taskCard.complete:before {\r\n\tcontent : '';\r\n\tposition:absolute;\r\n\ttop:50%;\r\n\tleft:0;\r\n\tborder-bottom:1px solid black;\r\n\twidth:100%;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"checkbox\"]::before,\r\ninput[type=\"checkbox\"]::after {\r\n\tmargin:0;\r\n}\r\n\r\ninput[type='checkbox']  {\r\n\twidth:20px;\r\n\theight:20px;\r\n}\r\n\r\n.project-description {\r\n\tfont-size:1.4rem;\r\n}\r\n\r\n.btn {\r\n\ttext-transform: uppercase;\r\n\tbackground:#1088eb;\r\n\tborder:2px solid transparent;\r\n\tborder-radius:8px;\r\n\tcolor:white;\r\n\tpadding:8px 12px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n.btn:hover {\r\n\tcursor:pointer;\r\n\ttransform: scale(1.01);\r\n}\r\n\r\n.primary-btn {\r\n\tbackground:#1088eb;\r\n}\r\n\r\n.delete-btn {\r\n\tbackground:red;\r\n}\r\n\r\n.detail-btn {\r\n\tbackground:transparent;\r\n\tcolor:black;\r\n\tborder:1px solid green;\r\n\ttext-align:center;\r\n}\r\n\r\n.ghost-btn {\r\n\tbackground:white;\r\n\tcolor:black;\r\n}\r\n\r\ninput[type=date] {\r\n\tz-index:99999;\r\n}\r\n\r\nh1 {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-size:3.4rem;\r\n/*\tfont-style: italic;*/\r\n}\r\n\r\nh3 {\r\n\tfont-size:1.8rem;\r\n\ttext-align:center;\r\n}\r\n\r\np {\r\n\tmargin:0;\r\n\r\n}\r\n\r\ndialog {\r\n\tborder:none;\r\n\tbox-shadow: 0 0 5em rgba(0, 0, 0, 0.3);\r\n\tborder-radius:12px;\r\n\tpadding:20px;\r\n\tbackground:#14151f;\r\n\tcolor:white;\r\n}\r\n\r\nform {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-content {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:20px;\r\n}\r\n\r\n.input-desc {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect {\r\n\twidth:340px;\r\n/*\tmargin:0 auto;*/\r\n\tpadding:8px 12px;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tbackground:transparent;\r\n\tborder-color:white;\r\n\tcolor:white;\r\n}\r\n\r\n.form-content option {\r\n\tcolor:black;\r\n}\r\n\r\n.form-content textarea {\r\n\tresize:none;\r\n}\r\n\r\n.form-row {\r\n\tdisplay:flex;\r\n\tgap:5px;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-footer{\r\n\tpadding-top:20px;\r\n\ttext-align:center;\r\n}\r\n\r\n.form-footer button {\r\n\tmargin:0 auto;\r\n\twidth:120px;\r\n\tborder-radius:8px;\r\n\tpadding:12px 16px;\r\n\tbackground:#1088eb;\r\n\tcolor:white;\r\n}\r\n\r\n\r\ndialog::backdrop {\r\n\tbackground:rgba(0,0,0,0.6);\r\n}\r\n\r\n#task-detail-dialog {\r\n\tmax-width:800px;\r\n\twidth:100%;\r\n}\r\n\r\n.task-detail-container {\r\n\tdisplay:grid;\r\n\tgrid-template-rows:auto 120px auto;\r\n}\r\n\r\n.task-description {\r\n\toverflow-y: auto;\r\n}\r\n\r\n.task-detail-header {\r\n\tdisplay:flex;\r\n\talign-items:center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.active {\r\n\tcolor:#1088eb;\r\n\tbackground:#e5e5e5;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@300;500;700&display=swap');\r\n\r\n::root {\r\n\tfont-size: 12px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\nbody {\r\n\tfont-family:'Raleway', sans-serif;\r\n\tbackground:#f5f5f5;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr;\r\n\tgrid-template-rows:auto 1fr;\r\n\tmargin:0;\r\n\tpadding:0;\r\n\theight: 100vh;\r\n}\r\n\r\nheader {\r\n\tgrid-column: 1/-1;\r\n\tbackground:#14151f;\r\n\tpadding:16px;\r\n\tcolor:white;\r\n\tfont-size:1.4rem;\r\n\tdisplay:grid;\r\n\tgrid-template-columns: 1fr 4fr ;\r\n\talign-items:center;\r\n}\r\n\r\nheader div:first-child {\r\n\tjustify-self:flex-start;\r\n\tfont-size:2rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#search-bar {\r\n\twidth:70%;\r\n\tpadding:0.8rem 1rem;\r\n\tfont-size:1.2rem;\r\n\tborder-radius:12px;\r\n\toutline: none;\r\n\tbackground: #14151f;\r\n\tcolor:white;\r\n\tborder:1px solid white;\r\n}\r\n\r\n#search-bar:placeholder {\r\n\tcolor: #ccc;\r\n}\r\n\r\n#search-bar:focus, \r\n#search-bar:hover{\r\n\tbackground:white;\r\n\tcolor:black;\r\n}\r\n\r\n\r\n.side-bar {\r\n\tbackground:white;\r\n\theight:100%;\r\n\tbox-shadow: 0 0 1em rgba(0, 0, 0, 0.3);\r\n\tdisplay:grid;\r\n\tgrid-template-rows: 1fr auto;\r\n\tfont-weight:700;\r\n}\r\n\r\n.project-navigation {\r\n\tfont-size:1.2rem;\r\n\tpadding: 40px 15px 0px 15px;\r\n}\r\n\r\n#general, #categories {\r\n\tpadding:10px 10px;\r\n\tborder-radius:12px;\r\n}\r\n\r\n#categories {\r\n\ttext-transform: uppercase;\r\n\tfont-weight:500;\r\n\tmargin-top:20px;\r\n\tcolor:#c5c5c5;\r\n} \r\n\r\n.projects-list > div {\r\n\tpadding:10px 20px;\r\n}\r\n\r\n.projects-list > div, \r\n#general  {\r\n\tborder-radius:12px;\r\n}\r\n\r\n.projects-list > div:hover,\r\n#general:hover {\r\n\tcursor:pointer;\r\n\tbackground: rgba(0,0,0,0.3);\r\n}\r\n\r\n#open-project-dialog {\r\n\tpadding:20px;\r\n\tborder:none;\r\n\tborder-top:1px solid #ccc;\r\n\tbackground:transparent;\r\n\ttext-align:left;\r\n\toutline:none;\r\n\tcolor: #2b2b2b;\r\n\tfont-size:1.2rem;\r\n}\r\n\r\n#open-project-dialog:hover {\r\n\tcursor:pointer;\r\n\tbackground:rgba(0,0,0,0.3);\r\n}\r\n\r\n#main-content {\r\n\tpadding:40px 0px 0px 80px;\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n\tgap:20px;\r\n}\r\n\r\n.btn-flex {\r\n\tdisplay:flex;\r\n\tgap:10px;\r\n}\r\n\r\n.btn-flex-right {\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n#task-container {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:5px;\r\n\twidth:80%;\r\n}\r\n\r\n.taskCard {\r\n\tbox-shadow:0px 0px 5px rgba(0,0,0,0.3);\r\n\tposition:relative;\r\n\tbackground:white;\r\n\twidth:100%;\r\n\tpadding:10px 20px;\r\n\tfont-size:1.2em;\r\n\tdisplay:grid;\r\n\talign-items:center;\r\n\tgrid-template-columns:3fr 80px 1fr auto;\r\n\tgap:20px;\r\n}\r\n\r\n.taskCard:hover {\r\n\tcursor:pointer;\r\n}\r\n\r\n.taskCard.complete {\r\n\tbackground:rgba(0,0,0,0.3);\r\n\tbox-shadow:none;\r\n/*\ttext-decoration: line-through;*/\r\n}\r\n\r\n.taskCard.complete:before {\r\n\tcontent : '';\r\n\tposition:absolute;\r\n\ttop:50%;\r\n\tleft:0;\r\n\tborder-bottom:1px solid black;\r\n\twidth:100%;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"checkbox\"]::before,\r\ninput[type=\"checkbox\"]::after {\r\n\tmargin:0;\r\n}\r\n\r\ninput[type='checkbox']  {\r\n\twidth:20px;\r\n\theight:20px;\r\n}\r\n\r\n.project-description {\r\n\tfont-size:1.4rem;\r\n}\r\n\r\n.btn {\r\n\ttext-transform: uppercase;\r\n\tbackground:#1088eb;\r\n\tborder:2px solid transparent;\r\n\tborder-radius:8px;\r\n\tcolor:white;\r\n\tpadding:8px 12px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n\r\n.btn:hover {\r\n\tcursor:pointer;\r\n\ttransform: scale(1.01);\r\n}\r\n\r\n.primary-btn {\r\n\tbackground:#1088eb;\r\n}\r\n\r\n.delete-btn {\r\n\tbackground:red;\r\n}\r\n\r\n.detail-btn {\r\n\tbackground:transparent;\r\n\tcolor:black;\r\n\tborder:1px solid green;\r\n\ttext-align:center;\r\n}\r\n\r\n.ghost-btn {\r\n\tbackground:white;\r\n\tcolor:black;\r\n}\r\n\r\ninput[type=date] {\r\n\tz-index:99999;\r\n}\r\n\r\nh1 {\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tfont-size:3.4rem;\r\n/*\tfont-style: italic;*/\r\n}\r\n\r\nh3 {\r\n\tfont-size:1.8rem;\r\n\ttext-align:center;\r\n}\r\n\r\np {\r\n\tmargin:0;\r\n\r\n}\r\n\r\ndialog {\r\n\tborder:none;\r\n\tbox-shadow: 0 0 5em rgba(0, 0, 0, 0.3);\r\n\tborder-radius:12px;\r\n\tpadding:20px;\r\n\tbackground:#14151f;\r\n\tcolor:white;\r\n}\r\n\r\nform {\r\n\tdisplay:flex;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-content {\r\n\tdisplay:flex;\r\n\tflex-direction: column;\r\n\tgap:20px;\r\n}\r\n\r\n.input-desc {\r\n\tdisplay:flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nselect {\r\n\twidth:340px;\r\n/*\tmargin:0 auto;*/\r\n\tpadding:8px 12px;\r\n\tfont-family: 'Raleway', sans-serif;\r\n\tbackground:transparent;\r\n\tborder-color:white;\r\n\tcolor:white;\r\n}\r\n\r\n.form-content option {\r\n\tcolor:black;\r\n}\r\n\r\n.form-content textarea {\r\n\tresize:none;\r\n}\r\n\r\n.form-row {\r\n\tdisplay:flex;\r\n\tgap:5px;\r\n\tflex-direction:column;\r\n}\r\n\r\n.form-footer{\r\n\tpadding-top:20px;\r\n\ttext-align:center;\r\n}\r\n\r\n.form-footer button {\r\n\tmargin:0 auto;\r\n\twidth:120px;\r\n\tborder-radius:8px;\r\n\tpadding:12px 16px;\r\n\tbackground:#1088eb;\r\n\tcolor:white;\r\n}\r\n\r\n\r\ndialog::backdrop {\r\n\tbackground:rgba(0,0,0,0.6);\r\n}\r\n\r\n#task-detail-dialog {\r\n\tmax-width:800px;\r\n\twidth:100%;\r\n}\r\n\r\n.task-detail-container {\r\n\tdisplay:grid;\r\n\tgrid-template-rows:auto 120px auto;\r\n}\r\n\r\n.task-description {\r\n\toverflow-y: auto;\r\n}\r\n\r\n.task-detail-header {\r\n\tdisplay:flex;\r\n\talign-items:center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.active {\r\n\tcolor:#1088eb;\r\n\tbackground:#e5e5e5;\r\n}"],"sourceRoot":""}]);
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
	const projects = JSON.parse(localStorage.getItem("projects")) || [];
	console.log(projects);
	const getProjectList = () => projects;

	const addProject = (title, desc) => {
		const newProject = Project(title, desc, []);
		projects.push(newProject);
		saveProjectState();
	}

	const getProject = (index) => {
		return projects[index];
	}

	const saveProjectState = () => {
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	const addTask = (index, task) => {
		projects[index].tasks.push(task);
		saveProjectState();
	}

	const deleteProject = (index) => {
		projects.splice(index, 1);		
		saveProjectState();
	}

	const deleteProjectTask = (index, taskIdx) => {
		projects[index].tasks.splice(taskIdx, 1);
		saveProjectState();
	}

	return {
		addProject,
		getProjectList,
		getProject,
		deleteProject,
		deleteProjectTask,
		addTask, 
		saveProjectState,
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
const Task = (title, description, dueDate, priority) => {
	let isFinished = false;
	return {
		title, 
		description,
		dueDate,
		isFinished,
	}
}

const task = (() => {
	const createTask = (title, description, date) => {
		return Task(title, description, date);
	}

	const changeStatus = (task, value) => {
		task.isFinished = value;
	}

	return {
		createTask,
		changeStatus,
	}
})();

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
	const addProjectBtn = document.querySelector('#open-project-dialog');
	const projectDialog = document.querySelector('#project-form-dialog');
	const taskDialog = document.querySelector("#task-form-dialog");
	const taskDetailDialog = document.querySelector("#task-detail-dialog");

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

	const closeDialog = (e) => {
		if(!e.target.closest('div')) {
			e.target.close();
		}
	}

	const openTaskFormDialog = () => {
		taskDialog.showModal();
	}

	const countLetters = (event, p, limit) => {
		p.textContent = `${event.target.value.length}/${limit}`;
	}

	const cleanProjectInput = () => {
		projectTitle.value = '';
		projectDesc.value = '';
		projectTitleCounter.textContent = `0/30`;
		projectDescCounter.textContent = `0/50`;
	}

	const clearContainerItems = (container) => {
		while(container.firstChild) {
			container.removeChild(container.lastChild);
		}
	} 

	const renderGeneralTasks = () => {
		const taskContainer = document.querySelector('#task-container')
		const projects = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
		projects.forEach((project, projectIdx) => {
			project.tasks.forEach((task, taskIdx) => {
				if(task.isFinished) return;
	
				let taskCard = document.createElement('div');
				taskCard.classList.add('taskCard');
				
				taskContainer.appendChild(taskCard);
				
				let taskTitle = document.createElement('p');
				taskTitle.textContent = task.title;
				taskCard.appendChild(taskTitle);

				let detailsBtn = document.createElement('div');
				detailsBtn.textContent = 'DETAILS';
				detailsBtn.classList.add('btn');
				detailsBtn.classList.add('detail-btn')
				detailsBtn.addEventListener('click', (e) => {
					taskDetails(e, projectIdx, taskIdx)
				});
				taskCard.appendChild(detailsBtn);

				let projectTitle = document.createElement('p');
				projectTitle.textContent = project.title;
				taskCard.appendChild(projectTitle);
				
				let dueDate = document.createElement('p');
				dueDate.textContent = task.dueDate;
				taskCard.appendChild(dueDate);
			}) 
		})
	}

	const setActiveTab = (index) => {
		const active = document.querySelector('.active');
		active.classList.remove('active');
		if(index == -1) {
			general.classList.add('active');
			return;
		}

		const tab = document.querySelector(`[data-idx="${index}"]`);
		tab.classList.add('active');
	}

	const taskDetails = (e, projectPage, taskIdx) => {
		clearContainerItems(taskDetailDialog);
		const projectObj = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(projectPage);
		const taskObj = projectObj.tasks[taskIdx];
		taskDetailDialog.dataset.idx = taskIdx;

		const taskDetailContainer = document.createElement('div');
		taskDetailContainer.classList.add('task-detail-container');
		taskDetailDialog.appendChild(taskDetailContainer);

		const headerSection = document.createElement('div');
		headerSection.classList.add('task-detail-header');
		taskDetailContainer.appendChild(headerSection);

		const h3 = document.createElement('h3');
		h3.textContent = taskObj.title;

		const dueDate = document.createElement('p');
		dueDate.textContent = `Due Date: ${taskObj.dueDate}`;
		dueDate.style.fontSize = '1.4rem';
		headerSection.append(h3,dueDate);

		const p = document.createElement('p');
		p.textContent = taskObj.description;
		p.classList.add('task-description');

		const btnContainer = document.createElement('div');
		btnContainer.style.padding = '10px';
		btnContainer.classList.add('btn-flex', 'btn-flex-right');

		const completeTaskBtn = document.createElement('div');
		completeTaskBtn.classList.add('btn', 'primary-btn');
		completeTaskBtn.textContent = taskObj.isFinished ? `Set to Incomplete` : `Set to Complete`;
		completeTaskBtn.addEventListener('click', () => {
			_task_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeStatus(taskObj, !taskObj.isFinished);
			_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjectState();
			taskDetailDialog.close();
			renderPage(-1);
		})

		const deleteTaskBtn = document.createElement('div');
		deleteTaskBtn.classList.add('btn', 'delete-btn');
		deleteTaskBtn.textContent = 'Delete';
		deleteTaskBtn.addEventListener('click', () => {
			_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProjectTask(projectPage, taskIdx)
			taskDetailDialog.close();
			renderPage(-1);
		});

		const closeBtn = document.createElement('div');
		closeBtn.classList.add('btn', 'ghost-btn');
		closeBtn.textContent = 'Close';
		closeBtn.addEventListener('click', () => {
			taskDetailDialog.close();
		})

		btnContainer.append(deleteTaskBtn, completeTaskBtn,  closeBtn);

		taskDetailContainer.append(headerSection, p, btnContainer);
		taskDetailDialog.showModal();
	}

	const taskComplete = (e, taskIdx) => {
		const projectObj = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(currentPage);
		const idx = taskIdx ? taskIdx : e.target.closest('div').dataset.idx;
		_task_js__WEBPACK_IMPORTED_MODULE_2__["default"].changeStatus(projectObj.tasks[idx], e.target.checked);
		_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveProjectState();
		renderTasks();
	}

	const renderTasks = () => {
		const tasks = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(currentPage).tasks;
		const taskContainer = document.querySelector('#task-container')
		clearContainerItems(taskContainer);

		tasks.forEach((taskItem, idx) => {
			let taskCard = document.createElement('div');
			taskCard.classList.add('taskCard');
			taskCard.dataset.idx = idx;
			
			if(taskItem.isFinished) {
				taskCard.classList.add('complete');
			}
			
			let title = document.createElement('p'); 
			title.textContent = taskItem.title;

			let detailsBtn = document.createElement('div');
			detailsBtn.textContent = 'DETAILS';
			detailsBtn.classList.add('btn');
			detailsBtn.classList.add('detail-btn')
			detailsBtn.dataset.idx = idx;
			detailsBtn.addEventListener('click', (e) => taskDetails(e, currentPage, idx));

			let dueDate = document.createElement('div');
			dueDate.textContent = taskItem.dueDate;

			let input = document.createElement('input')
			input.type = 'checkbox';
			input.name = 'finished';
			input.checked = taskItem.isFinished;
			input.addEventListener('click', (e) => taskComplete(e));

			taskCard.append(title, detailsBtn, dueDate, input)
			taskContainer.appendChild(taskCard);

		})

	}

	const createTask = (e) => {
		e.preventDefault();
		const title = document.querySelector('#task-title').value;
		const description = document.querySelector('#task-description').value;
		const dueDate = document.querySelector('#due-date').value;

		if(!title || !dueDate) return; 

		const taskObj = _task_js__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(title, description, dueDate);
		_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(currentPage, taskObj);
		renderTasks();
		taskDialog.close();
	}

	const renderGeneralPage = () => {
		setActiveTab(-1);
		clearPageContent();
		currentPage = -1;

		const h1 = document.createElement('h1');
		h1.textContent = 'All Tasks';
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = 'General Tasks';
		p.style.fontSize = '1.4rem';
		mainContent.appendChild(p);

		const taskContainer = document.createElement('div');
		taskContainer.id = 'task-container';
		mainContent.appendChild(taskContainer);
		renderGeneralTasks();
	}

	const deleteProject = () => {
		_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(currentPage);
		renderProjectList();
		renderGeneralPage();
	}

	const renderPage = (index) => {
		setActiveTab(index);
		clearPageContent();
		currentPage = index;
		if(currentPage == -1) return renderGeneralPage();
		const projectObj = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(index);	
		
		const h1 = document.createElement('h1');
		h1.textContent = projectObj.title;
		mainContent.appendChild(h1);

		const p = document.createElement('p');
		p.textContent = projectObj.description;
		mainContent.appendChild(p);

		const btnContainer = document.createElement('div');
		btnContainer.classList.add('btn-flex');
		mainContent.appendChild(btnContainer);

		const createTaskBtn = document.createElement('button');
		createTaskBtn.textContent = 'Create Task';
		createTaskBtn.classList.add('btn');
		createTaskBtn.classList.add('primary-btn');
		createTaskBtn.dataset.idx = index;
		createTaskBtn.addEventListener('click', openTaskFormDialog);
		btnContainer.appendChild(createTaskBtn);

		const deleteProjectBtn = document.createElement('button');
		deleteProjectBtn.textContent = 'Delete Project';
		deleteProjectBtn.classList.add('btn');
		deleteProjectBtn.classList.add('delete-btn');
		deleteProjectBtn.addEventListener('click', deleteProject);
		btnContainer.appendChild(deleteProjectBtn);

		const taskContainer = document.createElement('div');
		taskContainer.id = 'task-container';
		mainContent.appendChild(taskContainer);

		renderTasks();

	}

	const clearPageContent = () => {
		while(mainContent.firstChild) {
			mainContent.removeChild(mainContent.lastChild);
		}
	}

	const renderProjectList = () => {
		clearContainerItems(projectListContainer);
		const projectList = _projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList()

		projectList.forEach((project, idx) => {
			let div = document.createElement('div');
			div.textContent = project.title;
			div.dataset.idx = idx; 
			div.classList.add('project-tab');
			div.addEventListener('click', (e) => {
				renderPage(e.target.dataset.idx);
			})

			projectListContainer.append(div);
		})
	}

	const createProject = (e) => {
		e.preventDefault();
		_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectTitle.value, projectDesc.value)
		cleanProjectInput();
		renderProjectList();
		renderPage(_projects_js__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList().length - 1);
		projectDialog.close();
	}

	renderProjectList();
	renderGeneralPage();

	general.addEventListener('click', renderGeneralPage);

	projectDialog.addEventListener('click', closeDialog);
	taskDialog.addEventListener('click', closeDialog);
	taskDetailDialog.addEventListener('click', closeDialog);
	addProjectBtn.addEventListener('click', openProjectFormDialog);
	createTaskBtn.addEventListener('click', createTask);
	projectTitle.addEventListener('input', (e) => countLetters(e, projectTitleCounter, 30));
	projectDesc.addEventListener('input', (e) => countLetters(e, projectDescCounter, 50));
	createProjectBtn.addEventListener('click', createProject);

})();	
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1FQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFrQjtBQUNwQjtBQUNBO0FBQ0EsYUFBYSxtRUFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA1MDAmZmFtaWx5PVJhbGV3YXk6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6OnJvb3Qge1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OidSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiNmNWY1ZjU7XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxZnI7XFxyXFxuXFx0bWFyZ2luOjA7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuXFx0YmFja2dyb3VuZDojMTQxNTFmO1xcclxcblxcdHBhZGRpbmc6MTZweDtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHRmb250LXNpemU6MS40cmVtO1xcclxcblxcdGRpc3BsYXk6Z3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgO1xcclxcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0anVzdGlmeS1zZWxmOmZsZXgtc3RhcnQ7XFxyXFxuXFx0Zm9udC1zaXplOjJyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXIge1xcclxcblxcdHdpZHRoOjcwJTtcXHJcXG5cXHRwYWRkaW5nOjAuOHJlbSAxcmVtO1xcclxcblxcdGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcblxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZDogIzE0MTUxZjtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG5cXHRib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhcjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOmZvY3VzLCBcXHJcXG4jc2VhcmNoLWJhcjpob3ZlcntcXHJcXG5cXHRiYWNrZ3JvdW5kOndoaXRlO1xcclxcblxcdGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2lkZS1iYXIge1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0aGVpZ2h0OjEwMCU7XFxyXFxuXFx0Ym94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuXFx0Zm9udC13ZWlnaHQ6NzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYXZpZ2F0aW9uIHtcXHJcXG5cXHRmb250LXNpemU6MS4ycmVtO1xcclxcblxcdHBhZGRpbmc6IDQwcHggMTVweCAwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2dlbmVyYWwsICNjYXRlZ29yaWVzIHtcXHJcXG5cXHRwYWRkaW5nOjEwcHggMTBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxufVxcclxcblxcclxcbiNjYXRlZ29yaWVzIHtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdGZvbnQtd2VpZ2h0OjUwMDtcXHJcXG5cXHRtYXJnaW4tdG9wOjIwcHg7XFxyXFxuXFx0Y29sb3I6I2M1YzVjNTtcXHJcXG59IFxcclxcblxcclxcbi5wcm9qZWN0cy1saXN0ID4gZGl2IHtcXHJcXG5cXHRwYWRkaW5nOjEwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWxpc3QgPiBkaXYsIFxcclxcbiNnZW5lcmFsICB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czoxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtbGlzdCA+IGRpdjpob3ZlcixcXHJcXG4jZ2VuZXJhbDpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jb3Blbi1wcm9qZWN0LWRpYWxvZyB7XFxyXFxuXFx0cGFkZGluZzoyMHB4O1xcclxcblxcdGJvcmRlcjpub25lO1xcclxcblxcdGJvcmRlci10b3A6MXB4IHNvbGlkICNjY2M7XFxyXFxuXFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXHJcXG5cXHR0ZXh0LWFsaWduOmxlZnQ7XFxyXFxuXFx0b3V0bGluZTpub25lO1xcclxcblxcdGNvbG9yOiAjMmIyYjJiO1xcclxcblxcdGZvbnQtc2l6ZToxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNvcGVuLXByb2plY3QtZGlhbG9nOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tY29udGVudCB7XFxyXFxuXFx0cGFkZGluZzo0MHB4IDBweCAwcHggODBweDtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcblxcdGdhcDoyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWZsZXgge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRnYXA6MTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1mbGV4LXJpZ2h0IHtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDo1cHg7XFxyXFxuXFx0d2lkdGg6ODAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NhcmQge1xcclxcblxcdGJveC1zaGFkb3c6MHB4IDBweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG5cXHRwYWRkaW5nOjEwcHggMjBweDtcXHJcXG5cXHRmb250LXNpemU6MS4yZW07XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6M2ZyIDgwcHggMWZyIGF1dG87XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ2FyZDpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ2FyZC5jb21wbGV0ZSB7XFxyXFxuXFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7XFxyXFxuXFx0Ym94LXNoYWRvdzpub25lO1xcclxcbi8qXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDYXJkLmNvbXBsZXRlOmJlZm9yZSB7XFxyXFxuXFx0Y29udGVudCA6ICcnO1xcclxcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcclxcblxcdHRvcDo1MCU7XFxyXFxuXFx0bGVmdDowO1xcclxcblxcdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdHdpZHRoOjEwMCU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlLFxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSAge1xcclxcblxcdHdpZHRoOjIwcHg7XFxyXFxuXFx0aGVpZ2h0OjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG5cXHRmb250LXNpemU6MS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcblxcdGJhY2tncm91bmQ6IzEwODhlYjtcXHJcXG5cXHRib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdGJvcmRlci1yYWRpdXM6OHB4O1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdHBhZGRpbmc6OHB4IDEycHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW1hcnktYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxMDg4ZWI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOnJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1idG4ge1xcclxcblxcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XFxyXFxuXFx0Y29sb3I6YmxhY2s7XFxyXFxuXFx0Ym9yZGVyOjFweCBzb2xpZCBncmVlbjtcXHJcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdob3N0LWJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuXFx0ei1pbmRleDo5OTk5OTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdHBhZGRpbmc6MDtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRmb250LXNpemU6My40cmVtO1xcclxcbi8qXFx0Zm9udC1zdHlsZTogaXRhbGljOyovXFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG5cXHRmb250LXNpemU6MS44cmVtO1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZGlhbG9nIHtcXHJcXG5cXHRib3JkZXI6bm9uZTtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDAgNWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxuXFx0cGFkZGluZzoyMHB4O1xcclxcblxcdGJhY2tncm91bmQ6IzE0MTUxZjtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1kZXNjIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcblxcdHdpZHRoOjM0MHB4O1xcclxcbi8qXFx0bWFyZ2luOjAgYXV0bzsqL1xcclxcblxcdHBhZGRpbmc6OHB4IDEycHg7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG5cXHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xcclxcblxcdGJvcmRlci1jb2xvcjp3aGl0ZTtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGVudCBvcHRpb24ge1xcclxcblxcdGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250ZW50IHRleHRhcmVhIHtcXHJcXG5cXHRyZXNpemU6bm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93IHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0Z2FwOjVweDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZvb3RlcntcXHJcXG5cXHRwYWRkaW5nLXRvcDoyMHB4O1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1mb290ZXIgYnV0dG9uIHtcXHJcXG5cXHRtYXJnaW46MCBhdXRvO1xcclxcblxcdHdpZHRoOjEyMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6OHB4O1xcclxcblxcdHBhZGRpbmc6MTJweCAxNnB4O1xcclxcblxcdGJhY2tncm91bmQ6IzEwODhlYjtcXHJcXG5cXHRjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxyXFxuXFx0YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNik7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWRldGFpbC1kaWFsb2cge1xcclxcblxcdG1heC13aWR0aDo4MDBweDtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXRhaWwtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG8gMTIwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcclxcblxcdG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRldGFpbC1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG5cXHRjb2xvcjojMTA4OGViO1xcclxcblxcdGJhY2tncm91bmQ6I2U1ZTVlNTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7OztDQUdDLHNCQUFzQjtBQUN2Qjs7O0FBR0E7Q0FDQyxpQ0FBaUM7Q0FDakMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osK0JBQStCO0NBQy9CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsU0FBUztDQUNULG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOzs7QUFHQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsc0NBQXNDO0NBQ3RDLFlBQVk7Q0FDWiw0QkFBNEI7Q0FDNUIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixlQUFlO0NBQ2YsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxjQUFjO0NBQ2QsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixZQUFZO0NBQ1osY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osUUFBUTtBQUNUOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHNCQUFzQjtDQUN0QixPQUFPO0NBQ1AsU0FBUztBQUNWOztBQUVBO0NBQ0Msc0NBQXNDO0NBQ3RDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix1Q0FBdUM7Q0FDdkMsUUFBUTtBQUNUOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGVBQWU7QUFDaEIsa0NBQWtDO0FBQ2xDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsTUFBTTtDQUNOLDZCQUE2QjtDQUM3QixVQUFVO0FBQ1g7O0FBRUE7OztDQUdDLFFBQVE7QUFDVDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1QixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7OztBQUdBO0NBQ0MsY0FBYztDQUNkLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsUUFBUTtDQUNSLGdCQUFnQjtBQUNqQix1QkFBdUI7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsUUFBUTs7QUFFVDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxzQ0FBc0M7Q0FDdEMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsWUFBWTtDQUNaLDhCQUE4QjtBQUMvQjs7QUFFQTs7O0NBR0MsV0FBVztBQUNaLGtCQUFrQjtDQUNqQixnQkFBZ0I7Q0FDaEIsa0NBQWtDO0NBQ2xDLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLE9BQU87Q0FDUCxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7OztBQUdBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDUwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjo6cm9vdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6J1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcblxcdGJhY2tncm91bmQ6I2Y1ZjVmNTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czphdXRvIDFmcjtcXHJcXG5cXHRtYXJnaW46MDtcXHJcXG5cXHRwYWRkaW5nOjA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogMS8tMTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiMxNDE1MWY7XFxyXFxuXFx0cGFkZGluZzoxNnB4O1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGZvbnQtc2l6ZToxLjRyZW07XFxyXFxuXFx0ZGlzcGxheTpncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciA7XFxyXFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHRqdXN0aWZ5LXNlbGY6ZmxleC1zdGFydDtcXHJcXG5cXHRmb250LXNpemU6MnJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJhciB7XFxyXFxuXFx0d2lkdGg6NzAlO1xcclxcblxcdHBhZGRpbmc6MC44cmVtIDFyZW07XFxyXFxuXFx0Zm9udC1zaXplOjEuMnJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMTQxNTFmO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcblxcdGJvcmRlcjoxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYmFyOnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1iYXI6Zm9jdXMsIFxcclxcbiNzZWFyY2gtYmFyOmhvdmVye1xcclxcblxcdGJhY2tncm91bmQ6d2hpdGU7XFxyXFxuXFx0Y29sb3I6YmxhY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlLWJhciB7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHRoZWlnaHQ6MTAwJTtcXHJcXG5cXHRib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG5cXHRmb250LXdlaWdodDo3MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hdmlnYXRpb24ge1xcclxcblxcdGZvbnQtc2l6ZToxLjJyZW07XFxyXFxuXFx0cGFkZGluZzogNDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZ2VuZXJhbCwgI2NhdGVnb3JpZXMge1xcclxcblxcdHBhZGRpbmc6MTBweCAxMHB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6MTJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhdGVnb3JpZXMge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6NTAwO1xcclxcblxcdG1hcmdpbi10b3A6MjBweDtcXHJcXG5cXHRjb2xvcjojYzVjNWM1O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2plY3RzLWxpc3QgPiBkaXYge1xcclxcblxcdHBhZGRpbmc6MTBweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtbGlzdCA+IGRpdiwgXFxyXFxuI2dlbmVyYWwgIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOjEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1saXN0ID4gZGl2OmhvdmVyLFxcclxcbiNnZW5lcmFsOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcblxcclxcbiNvcGVuLXByb2plY3QtZGlhbG9nIHtcXHJcXG5cXHRwYWRkaW5nOjIwcHg7XFxyXFxuXFx0Ym9yZGVyOm5vbmU7XFxyXFxuXFx0Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztcXHJcXG5cXHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xcclxcblxcdHRleHQtYWxpZ246bGVmdDtcXHJcXG5cXHRvdXRsaW5lOm5vbmU7XFxyXFxuXFx0Y29sb3I6ICMyYjJiMmI7XFxyXFxuXFx0Zm9udC1zaXplOjEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI29wZW4tcHJvamVjdC1kaWFsb2c6aG92ZXIge1xcclxcblxcdGN1cnNvcjpwb2ludGVyO1xcclxcblxcdGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1jb250ZW50IHtcXHJcXG5cXHRwYWRkaW5nOjQwcHggMHB4IDBweCA4MHB4O1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuXFx0Z2FwOjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tZmxleCB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGdhcDoxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWZsZXgtcmlnaHQge1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOjVweDtcXHJcXG5cXHR3aWR0aDo4MCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ2FyZCB7XFxyXFxuXFx0Ym94LXNoYWRvdzowcHggMHB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDp3aGl0ZTtcXHJcXG5cXHR3aWR0aDoxMDAlO1xcclxcblxcdHBhZGRpbmc6MTBweCAyMHB4O1xcclxcblxcdGZvbnQtc2l6ZToxLjJlbTtcXHJcXG5cXHRkaXNwbGF5OmdyaWQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6Y2VudGVyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczozZnIgODBweCAxZnIgYXV0bztcXHJcXG5cXHRnYXA6MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDYXJkOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDYXJkLmNvbXBsZXRlIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4zKTtcXHJcXG5cXHRib3gtc2hhZG93Om5vbmU7XFxyXFxuLypcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NhcmQuY29tcGxldGU6YmVmb3JlIHtcXHJcXG5cXHRjb250ZW50IDogJyc7XFxyXFxuXFx0cG9zaXRpb246YWJzb2x1dGU7XFxyXFxuXFx0dG9wOjUwJTtcXHJcXG5cXHRsZWZ0OjA7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0d2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUsXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcclxcblxcdG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPSdjaGVja2JveCddICB7XFxyXFxuXFx0d2lkdGg6MjBweDtcXHJcXG5cXHRoZWlnaHQ6MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcclxcblxcdGZvbnQtc2l6ZToxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuXFx0YmFja2dyb3VuZDojMTA4OGViO1xcclxcblxcdGJvcmRlcjoycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czo4cHg7XFxyXFxuXFx0Y29sb3I6d2hpdGU7XFxyXFxuXFx0cGFkZGluZzo4cHggMTJweDtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpbWFyeS1idG4ge1xcclxcblxcdGJhY2tncm91bmQ6IzEwODhlYjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4ge1xcclxcblxcdGJhY2tncm91bmQ6cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcXHJcXG5cXHRjb2xvcjpibGFjaztcXHJcXG5cXHRib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xcclxcblxcdHRleHQtYWxpZ246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2hvc3QtYnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOndoaXRlO1xcclxcblxcdGNvbG9yOmJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG5cXHR6LWluZGV4Ojk5OTk5O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0cGFkZGluZzowO1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcdGZvbnQtc2l6ZTozLjRyZW07XFxyXFxuLypcXHRmb250LXN0eWxlOiBpdGFsaWM7Ki9cXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZToxLjhyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcblxcdG1hcmdpbjowO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcblxcdGJvcmRlcjpub25lO1xcclxcblxcdGJveC1zaGFkb3c6IDAgMCA1ZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6MTJweDtcXHJcXG5cXHRwYWRkaW5nOjIwcHg7XFxyXFxuXFx0YmFja2dyb3VuZDojMTQxNTFmO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250ZW50IHtcXHJcXG5cXHRkaXNwbGF5OmZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWRlc2Mge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuXFx0d2lkdGg6MzQwcHg7XFxyXFxuLypcXHRtYXJnaW46MCBhdXRvOyovXFxyXFxuXFx0cGFkZGluZzo4cHggMTJweDtcXHJcXG5cXHRmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcblxcdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOndoaXRlO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250ZW50IG9wdGlvbiB7XFxyXFxuXFx0Y29sb3I6YmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRlbnQgdGV4dGFyZWEge1xcclxcblxcdHJlc2l6ZTpub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcblxcdGRpc3BsYXk6ZmxleDtcXHJcXG5cXHRnYXA6NXB4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZm9vdGVye1xcclxcblxcdHBhZGRpbmctdG9wOjIwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWZvb3RlciBidXR0b24ge1xcclxcblxcdG1hcmdpbjowIGF1dG87XFxyXFxuXFx0d2lkdGg6MTIwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czo4cHg7XFxyXFxuXFx0cGFkZGluZzoxMnB4IDE2cHg7XFxyXFxuXFx0YmFja2dyb3VuZDojMTA4OGViO1xcclxcblxcdGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5kaWFsb2c6OmJhY2tkcm9wIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stZGV0YWlsLWRpYWxvZyB7XFxyXFxuXFx0bWF4LXdpZHRoOjgwMHB4O1xcclxcblxcdHdpZHRoOjEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRldGFpbC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6Z3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6YXV0byAxMjBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuXFx0b3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGV0YWlsLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTpmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcblxcdGNvbG9yOiMxMDg4ZWI7XFxyXFxuXFx0YmFja2dyb3VuZDojZTVlNWU1O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgdGFza3MpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGl0bGUsIFxyXG5cdFx0ZGVzY3JpcHRpb24sXHJcblx0XHR0YXNrcyxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcclxuXHRjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcblx0Y29uc29sZS5sb2cocHJvamVjdHMpO1xyXG5cdGNvbnN0IGdldFByb2plY3RMaXN0ID0gKCkgPT4gcHJvamVjdHM7XHJcblxyXG5cdGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGRlc2MpID0+IHtcclxuXHRcdGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHRpdGxlLCBkZXNjLCBbXSk7XHJcblx0XHRwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cdFx0c2F2ZVByb2plY3RTdGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG5cdFx0cmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNhdmVQcm9qZWN0U3RhdGUgPSAoKSA9PiB7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBhZGRUYXNrID0gKGluZGV4LCB0YXNrKSA9PiB7XHJcblx0XHRwcm9qZWN0c1tpbmRleF0udGFza3MucHVzaCh0YXNrKTtcclxuXHRcdHNhdmVQcm9qZWN0U3RhdGUoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuXHRcdHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHRcdFxyXG5cdFx0c2F2ZVByb2plY3RTdGF0ZSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGVsZXRlUHJvamVjdFRhc2sgPSAoaW5kZXgsIHRhc2tJZHgpID0+IHtcclxuXHRcdHByb2plY3RzW2luZGV4XS50YXNrcy5zcGxpY2UodGFza0lkeCwgMSk7XHJcblx0XHRzYXZlUHJvamVjdFN0YXRlKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0YWRkUHJvamVjdCxcclxuXHRcdGdldFByb2plY3RMaXN0LFxyXG5cdFx0Z2V0UHJvamVjdCxcclxuXHRcdGRlbGV0ZVByb2plY3QsXHJcblx0XHRkZWxldGVQcm9qZWN0VGFzayxcclxuXHRcdGFkZFRhc2ssIFxyXG5cdFx0c2F2ZVByb2plY3RTdGF0ZSxcclxuXHR9XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7IiwiY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XHJcblx0bGV0IGlzRmluaXNoZWQgPSBmYWxzZTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGl0bGUsIFxyXG5cdFx0ZGVzY3JpcHRpb24sXHJcblx0XHRkdWVEYXRlLFxyXG5cdFx0aXNGaW5pc2hlZCxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHRhc2sgPSAoKCkgPT4ge1xyXG5cdGNvbnN0IGNyZWF0ZVRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSA9PiB7XHJcblx0XHRyZXR1cm4gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2hhbmdlU3RhdHVzID0gKHRhc2ssIHZhbHVlKSA9PiB7XHJcblx0XHR0YXNrLmlzRmluaXNoZWQgPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjcmVhdGVUYXNrLFxyXG5cdFx0Y2hhbmdlU3RhdHVzLFxyXG5cdH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2s7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdHMuanMnO1xyXG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2suanMnO1xyXG5cclxuY29uc3QgRE9NQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcblx0Y29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuLXByb2plY3QtZGlhbG9nJyk7XHJcblx0Y29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tZGlhbG9nJyk7XHJcblx0Y29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtLWRpYWxvZ1wiKTtcclxuXHRjb25zdCB0YXNrRGV0YWlsRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRldGFpbC1kaWFsb2dcIik7XHJcblxyXG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlJyk7XHJcblx0Y29uc3QgcHJvamVjdFRpdGxlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1jb3VudGVyJyk7XHJcblx0Y29uc3QgcHJvamVjdERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbicpO1xyXG5cdGNvbnN0IHByb2plY3REZXNjQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWNvdW50ZXInKTtcclxuXHRjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0Jyk7XHJcblx0Y29uc3QgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpO1xyXG5cclxuXHRjb25zdCBnZW5lcmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYWwnKTtcclxuXHRjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XHJcblxyXG5cdGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudCcpOyBcclxuXHJcblx0bGV0IGN1cnJlbnRQYWdlID0gLTE7XHJcblxyXG5cdGNvbnN0IG9wZW5Qcm9qZWN0Rm9ybURpYWxvZyA9ICgpID0+IHtcclxuXHRcdHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbG9zZURpYWxvZyA9IChlKSA9PiB7XHJcblx0XHRpZighZS50YXJnZXQuY2xvc2VzdCgnZGl2JykpIHtcclxuXHRcdFx0ZS50YXJnZXQuY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9wZW5UYXNrRm9ybURpYWxvZyA9ICgpID0+IHtcclxuXHRcdHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb3VudExldHRlcnMgPSAoZXZlbnQsIHAsIGxpbWl0KSA9PiB7XHJcblx0XHRwLnRleHRDb250ZW50ID0gYCR7ZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aH0vJHtsaW1pdH1gO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xlYW5Qcm9qZWN0SW5wdXQgPSAoKSA9PiB7XHJcblx0XHRwcm9qZWN0VGl0bGUudmFsdWUgPSAnJztcclxuXHRcdHByb2plY3REZXNjLnZhbHVlID0gJyc7XHJcblx0XHRwcm9qZWN0VGl0bGVDb3VudGVyLnRleHRDb250ZW50ID0gYDAvMzBgO1xyXG5cdFx0cHJvamVjdERlc2NDb3VudGVyLnRleHRDb250ZW50ID0gYDAvNTBgO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xlYXJDb250YWluZXJJdGVtcyA9IChjb250YWluZXIpID0+IHtcclxuXHRcdHdoaWxlKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcblx0XHRcdGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuXHRcdH1cclxuXHR9IFxyXG5cclxuXHRjb25zdCByZW5kZXJHZW5lcmFsVGFza3MgPSAoKSA9PiB7XHJcblx0XHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stY29udGFpbmVyJylcclxuXHRcdGNvbnN0IHByb2plY3RzID0gcHJvamVjdC5nZXRQcm9qZWN0TGlzdCgpO1xyXG5cdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgcHJvamVjdElkeCkgPT4ge1xyXG5cdFx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2ssIHRhc2tJZHgpID0+IHtcclxuXHRcdFx0XHRpZih0YXNrLmlzRmluaXNoZWQpIHJldHVybjtcclxuXHRcclxuXHRcdFx0XHRsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHR0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdFx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHRcdFx0XHR0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG5cclxuXHRcdFx0XHRsZXQgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdGRldGFpbHNCdG4udGV4dENvbnRlbnQgPSAnREVUQUlMUyc7XHJcblx0XHRcdFx0ZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHRcdFx0XHRkZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC1idG4nKVxyXG5cdFx0XHRcdGRldGFpbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGFza0RldGFpbHMoZSwgcHJvamVjdElkeCwgdGFza0lkeClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0YXNrQ2FyZC5hcHBlbmRDaGlsZChkZXRhaWxzQnRuKTtcclxuXHJcblx0XHRcdFx0bGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdFx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG5cdFx0XHRcdHRhc2tDYXJkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRcdFx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHRcdFx0XHR0YXNrQ2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHRcdFx0fSkgXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2V0QWN0aXZlVGFiID0gKGluZGV4KSA9PiB7XHJcblx0XHRjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcblx0XHRhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRpZihpbmRleCA9PSAtMSkge1xyXG5cdFx0XHRnZW5lcmFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWR4PVwiJHtpbmRleH1cIl1gKTtcclxuXHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHRhc2tEZXRhaWxzID0gKGUsIHByb2plY3RQYWdlLCB0YXNrSWR4KSA9PiB7XHJcblx0XHRjbGVhckNvbnRhaW5lckl0ZW1zKHRhc2tEZXRhaWxEaWFsb2cpO1xyXG5cdFx0Y29uc3QgcHJvamVjdE9iaiA9IHByb2plY3QuZ2V0UHJvamVjdChwcm9qZWN0UGFnZSk7XHJcblx0XHRjb25zdCB0YXNrT2JqID0gcHJvamVjdE9iai50YXNrc1t0YXNrSWR4XTtcclxuXHRcdHRhc2tEZXRhaWxEaWFsb2cuZGF0YXNldC5pZHggPSB0YXNrSWR4O1xyXG5cclxuXHRcdGNvbnN0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRhc2tEZXRhaWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1kZXRhaWwtY29udGFpbmVyJyk7XHJcblx0XHR0YXNrRGV0YWlsRGlhbG9nLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxDb250YWluZXIpO1xyXG5cclxuXHRcdGNvbnN0IGhlYWRlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGhlYWRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXRhaWwtaGVhZGVyJyk7XHJcblx0XHR0YXNrRGV0YWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclNlY3Rpb24pO1xyXG5cclxuXHRcdGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHRcdGgzLnRleHRDb250ZW50ID0gdGFza09iai50aXRsZTtcclxuXHJcblx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHt0YXNrT2JqLmR1ZURhdGV9YDtcclxuXHRcdGR1ZURhdGUuc3R5bGUuZm9udFNpemUgPSAnMS40cmVtJztcclxuXHRcdGhlYWRlclNlY3Rpb24uYXBwZW5kKGgzLGR1ZURhdGUpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcclxuXHRcdHAuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0YnRuQ29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcblx0XHRidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWZsZXgnLCAnYnRuLWZsZXgtcmlnaHQnKTtcclxuXHJcblx0XHRjb25zdCBjb21wbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNvbXBsZXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncHJpbWFyeS1idG4nKTtcclxuXHRcdGNvbXBsZXRlVGFza0J0bi50ZXh0Q29udGVudCA9IHRhc2tPYmouaXNGaW5pc2hlZCA/IGBTZXQgdG8gSW5jb21wbGV0ZWAgOiBgU2V0IHRvIENvbXBsZXRlYDtcclxuXHRcdGNvbXBsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0dGFzay5jaGFuZ2VTdGF0dXModGFza09iaiwgIXRhc2tPYmouaXNGaW5pc2hlZCk7XHJcblx0XHRcdHByb2plY3Quc2F2ZVByb2plY3RTdGF0ZSgpO1xyXG5cdFx0XHR0YXNrRGV0YWlsRGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdHJlbmRlclBhZ2UoLTEpO1xyXG5cdFx0fSlcclxuXHJcblx0XHRjb25zdCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkZWxldGVUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdkZWxldGUtYnRuJyk7XHJcblx0XHRkZWxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcblx0XHRkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRwcm9qZWN0LmRlbGV0ZVByb2plY3RUYXNrKHByb2plY3RQYWdlLCB0YXNrSWR4KVxyXG5cdFx0XHR0YXNrRGV0YWlsRGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdHJlbmRlclBhZ2UoLTEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdnaG9zdC1idG4nKTtcclxuXHRcdGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcclxuXHRcdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR0YXNrRGV0YWlsRGlhbG9nLmNsb3NlKCk7XHJcblx0XHR9KVxyXG5cclxuXHRcdGJ0bkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlVGFza0J0biwgY29tcGxldGVUYXNrQnRuLCAgY2xvc2VCdG4pO1xyXG5cclxuXHRcdHRhc2tEZXRhaWxDb250YWluZXIuYXBwZW5kKGhlYWRlclNlY3Rpb24sIHAsIGJ0bkNvbnRhaW5lcik7XHJcblx0XHR0YXNrRGV0YWlsRGlhbG9nLnNob3dNb2RhbCgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdGFza0NvbXBsZXRlID0gKGUsIHRhc2tJZHgpID0+IHtcclxuXHRcdGNvbnN0IHByb2plY3RPYmogPSBwcm9qZWN0LmdldFByb2plY3QoY3VycmVudFBhZ2UpO1xyXG5cdFx0Y29uc3QgaWR4ID0gdGFza0lkeCA/IHRhc2tJZHggOiBlLnRhcmdldC5jbG9zZXN0KCdkaXYnKS5kYXRhc2V0LmlkeDtcclxuXHRcdHRhc2suY2hhbmdlU3RhdHVzKHByb2plY3RPYmoudGFza3NbaWR4XSwgZS50YXJnZXQuY2hlY2tlZCk7XHJcblx0XHRwcm9qZWN0LnNhdmVQcm9qZWN0U3RhdGUoKTtcclxuXHRcdHJlbmRlclRhc2tzKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRQcm9qZWN0KGN1cnJlbnRQYWdlKS50YXNrcztcclxuXHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1jb250YWluZXInKVxyXG5cdFx0Y2xlYXJDb250YWluZXJJdGVtcyh0YXNrQ29udGFpbmVyKTtcclxuXHJcblx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrSXRlbSwgaWR4KSA9PiB7XHJcblx0XHRcdGxldCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHR0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xyXG5cdFx0XHR0YXNrQ2FyZC5kYXRhc2V0LmlkeCA9IGlkeDtcclxuXHRcdFx0XHJcblx0XHRcdGlmKHRhc2tJdGVtLmlzRmluaXNoZWQpIHtcclxuXHRcdFx0XHR0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IFxyXG5cdFx0XHR0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tJdGVtLnRpdGxlO1xyXG5cclxuXHRcdFx0bGV0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0ZGV0YWlsc0J0bi50ZXh0Q29udGVudCA9ICdERVRBSUxTJztcclxuXHRcdFx0ZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHRcdFx0ZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtYnRuJylcclxuXHRcdFx0ZGV0YWlsc0J0bi5kYXRhc2V0LmlkeCA9IGlkeDtcclxuXHRcdFx0ZGV0YWlsc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0YXNrRGV0YWlscyhlLCBjdXJyZW50UGFnZSwgaWR4KSk7XHJcblxyXG5cdFx0XHRsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza0l0ZW0uZHVlRGF0ZTtcclxuXHJcblx0XHRcdGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHRcdFx0aW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcblx0XHRcdGlucHV0Lm5hbWUgPSAnZmluaXNoZWQnO1xyXG5cdFx0XHRpbnB1dC5jaGVja2VkID0gdGFza0l0ZW0uaXNGaW5pc2hlZDtcclxuXHRcdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGFza0NvbXBsZXRlKGUpKTtcclxuXHJcblx0XHRcdHRhc2tDYXJkLmFwcGVuZCh0aXRsZSwgZGV0YWlsc0J0biwgZHVlRGF0ZSwgaW5wdXQpXHJcblx0XHRcdHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xyXG5cclxuXHRcdH0pXHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgY3JlYXRlVGFzayA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRlc2NyaXB0aW9uJykudmFsdWU7XHJcblx0XHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJykudmFsdWU7XHJcblxyXG5cdFx0aWYoIXRpdGxlIHx8ICFkdWVEYXRlKSByZXR1cm47IFxyXG5cclxuXHRcdGNvbnN0IHRhc2tPYmogPSB0YXNrLmNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcclxuXHRcdHByb2plY3QuYWRkVGFzayhjdXJyZW50UGFnZSwgdGFza09iaik7XHJcblx0XHRyZW5kZXJUYXNrcygpO1xyXG5cdFx0dGFza0RpYWxvZy5jbG9zZSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVuZGVyR2VuZXJhbFBhZ2UgPSAoKSA9PiB7XHJcblx0XHRzZXRBY3RpdmVUYWIoLTEpO1xyXG5cdFx0Y2xlYXJQYWdlQ29udGVudCgpO1xyXG5cdFx0Y3VycmVudFBhZ2UgPSAtMTtcclxuXHJcblx0XHRjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblx0XHRoMS50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLnRleHRDb250ZW50ID0gJ0dlbmVyYWwgVGFza3MnO1xyXG5cdFx0cC5zdHlsZS5mb250U2l6ZSA9ICcxLjRyZW0nO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdFx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0dGFza0NvbnRhaW5lci5pZCA9ICd0YXNrLWNvbnRhaW5lcic7XHJcblx0XHRtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuXHRcdHJlbmRlckdlbmVyYWxUYXNrcygpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcclxuXHRcdHByb2plY3QuZGVsZXRlUHJvamVjdChjdXJyZW50UGFnZSk7XHJcblx0XHRyZW5kZXJQcm9qZWN0TGlzdCgpO1xyXG5cdFx0cmVuZGVyR2VuZXJhbFBhZ2UoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbmRlclBhZ2UgPSAoaW5kZXgpID0+IHtcclxuXHRcdHNldEFjdGl2ZVRhYihpbmRleCk7XHJcblx0XHRjbGVhclBhZ2VDb250ZW50KCk7XHJcblx0XHRjdXJyZW50UGFnZSA9IGluZGV4O1xyXG5cdFx0aWYoY3VycmVudFBhZ2UgPT0gLTEpIHJldHVybiByZW5kZXJHZW5lcmFsUGFnZSgpO1xyXG5cdFx0Y29uc3QgcHJvamVjdE9iaiA9IHByb2plY3QuZ2V0UHJvamVjdChpbmRleCk7XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cdFx0aDEudGV4dENvbnRlbnQgPSBwcm9qZWN0T2JqLnRpdGxlO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLnRleHRDb250ZW50ID0gcHJvamVjdE9iai5kZXNjcmlwdGlvbjtcclxuXHRcdG1haW5Db250ZW50LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHRcdGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0YnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1mbGV4Jyk7XHJcblx0XHRtYWluQ29udGVudC5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuXHRcdGNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdGNyZWF0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snO1xyXG5cdFx0Y3JlYXRlVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHRcdGNyZWF0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgncHJpbWFyeS1idG4nKTtcclxuXHRcdGNyZWF0ZVRhc2tCdG4uZGF0YXNldC5pZHggPSBpbmRleDtcclxuXHRcdGNyZWF0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza0Zvcm1EaWFsb2cpO1xyXG5cdFx0YnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tCdG4pO1xyXG5cclxuXHRcdGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xyXG5cdFx0ZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHRcdGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xyXG5cdFx0ZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xyXG5cdFx0YnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xyXG5cclxuXHRcdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRhc2tDb250YWluZXIuaWQgPSAndGFzay1jb250YWluZXInO1xyXG5cdFx0bWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcblxyXG5cdFx0cmVuZGVyVGFza3MoKTtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGVhclBhZ2VDb250ZW50ID0gKCkgPT4ge1xyXG5cdFx0d2hpbGUobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVuZGVyUHJvamVjdExpc3QgPSAoKSA9PiB7XHJcblx0XHRjbGVhckNvbnRhaW5lckl0ZW1zKHByb2plY3RMaXN0Q29udGFpbmVyKTtcclxuXHRcdGNvbnN0IHByb2plY3RMaXN0ID0gcHJvamVjdC5nZXRQcm9qZWN0TGlzdCgpXHJcblxyXG5cdFx0cHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCwgaWR4KSA9PiB7XHJcblx0XHRcdGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0ZGl2LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuXHRcdFx0ZGl2LmRhdGFzZXQuaWR4ID0gaWR4OyBcclxuXHRcdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFiJyk7XHJcblx0XHRcdGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0cmVuZGVyUGFnZShlLnRhcmdldC5kYXRhc2V0LmlkeCk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0VGl0bGUudmFsdWUsIHByb2plY3REZXNjLnZhbHVlKVxyXG5cdFx0Y2xlYW5Qcm9qZWN0SW5wdXQoKTtcclxuXHRcdHJlbmRlclByb2plY3RMaXN0KCk7XHJcblx0XHRyZW5kZXJQYWdlKHByb2plY3QuZ2V0UHJvamVjdExpc3QoKS5sZW5ndGggLSAxKTtcclxuXHRcdHByb2plY3REaWFsb2cuY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclByb2plY3RMaXN0KCk7XHJcblx0cmVuZGVyR2VuZXJhbFBhZ2UoKTtcclxuXHJcblx0Z2VuZXJhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckdlbmVyYWxQYWdlKTtcclxuXHJcblx0cHJvamVjdERpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRGlhbG9nKTtcclxuXHR0YXNrRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEaWFsb2cpO1xyXG5cdHRhc2tEZXRhaWxEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURpYWxvZyk7XHJcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0Rm9ybURpYWxvZyk7XHJcblx0Y3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2spO1xyXG5cdHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiBjb3VudExldHRlcnMoZSwgcHJvamVjdFRpdGxlQ291bnRlciwgMzApKTtcclxuXHRwcm9qZWN0RGVzYy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiBjb3VudExldHRlcnMoZSwgcHJvamVjdERlc2NDb3VudGVyLCA1MCkpO1xyXG5cdGNyZWF0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcclxuXHJcbn0pKCk7XHQiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=