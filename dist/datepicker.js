(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else if(typeof exports === 'object')
		exports["Calendarium"] = factory(require("react"), require("react-dom"));
	else
		root["Calendarium"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_19__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	__webpack_require__(2);
	//require('calendariumStyle')
	var React = __webpack_require__(6);
	var MainPanel_1 = __webpack_require__(7);
	var ControlPanel_1 = __webpack_require__(11);
	var DatePanel_1 = __webpack_require__(10);
	var Weeks_1 = __webpack_require__(12);
	var Months_1 = __webpack_require__(14);
	var Years_1 = __webpack_require__(15);
	var Hours_1 = __webpack_require__(16);
	var Minutes_1 = __webpack_require__(17);
	var Calendarium = (function (_super) {
	    __extends(Calendarium, _super);
	    function Calendarium(props) {
	        _super.call(this, props);
	        this.state = {
	            datePanelSelected: DatePanel_1.DatePanel.Weeks
	        };
	    }
	    Calendarium.prototype.render = function () {
	        var style;
	        if (this.props.position) {
	            style = {
	                top: this.props.position.top,
	                left: this.props.position.left
	            };
	        }
	        var datePanel;
	        switch (this.state.datePanelSelected) {
	            case DatePanel_1.DatePanel.Weeks:
	                datePanel = (React.createElement(Weeks_1.Weeks, {ref: "weeks", selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
	                break;
	            case DatePanel_1.DatePanel.Months:
	                datePanel = (React.createElement(Months_1.Months, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
	                break;
	            case DatePanel_1.DatePanel.Years:
	                datePanel = (React.createElement(Years_1.Years, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
	                break;
	            case DatePanel_1.DatePanel.Hours:
	                datePanel = (React.createElement(Hours_1.Hours, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
	                break;
	            case DatePanel_1.DatePanel.Minutes:
	                datePanel = (React.createElement(Minutes_1.Minutes, {selectedDate: this.props.selectedDate, onSelect: this.props.onSelect, minDate: this.props.minDate, maxDate: this.props.maxDate}));
	                break;
	        }
	        return (React.createElement("div", {ref: "calendarium", className: "ardp-calendarium-" + this.props.id + " calendarium" + (this.props.visible ? " calendarium-show" : " calendarium-hide"), style: style}, React.createElement(MainPanel_1.MainPanel, {onSelect: this.props.onSelect, selectedDate: this.props.selectedDate, handleClick: this.handleClick.bind(this)}), React.createElement("div", {className: "date-panel"}, datePanel), React.createElement(ControlPanel_1.ControlPanel, {onSelect: this.props.onSelect, onClose: this.props.onClose})));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    Calendarium.prototype.handleClick = function (selected) {
	        this.state.datePanelSelected = selected;
	        this.setState(this.state);
	    };
	    return Calendarium;
	}(React.Component));
	exports.Calendarium = Calendarium;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./calendariumStyle.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/less-loader/index.js!./calendariumStyle.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".calendarium {\n  font-size: 16px;\n  font-family: Arial;\n  /* Применяется для изменения алгоритма расчёта ширины и высоты элемента. */\n  box-sizing: border-box;\n  /* Ширина блока с полями но не отступов (margin). Используется IE в режиме совместимости */\n  position: absolute;\n  z-index: 10;\n  width: 280px;\n  height: 215px;\n  background: #307E96;\n  padding: 0;\n  color: #FFFFFF;\n  border-radius: 1px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n.calendarium * {\n  box-sizing: border-box;\n}\n.calendarium.calendarium-show {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 100ms linear;\n}\n.calendarium.calendarium-hide {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 100ms, opacity 100ms linear;\n}\n.calendarium .main-panel {\n  float: left;\n  width: 90px;\n  height: 180px;\n  background: #307E96;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: column;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 5px;\n}\n.calendarium .main-panel .chosen-day {\n  cursor: pointer;\n  font-size: 2.5em;\n}\n.calendarium .main-panel .chosen-month {\n  cursor: pointer;\n  font-size: 1.1em;\n}\n.calendarium .main-panel .chosen-year {\n  cursor: pointer;\n  font-size: 1.5em;\n}\n.calendarium .main-panel .chosen-time {\n  cursor: pointer;\n  font-size: 1.6em;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.calendarium .main-panel .chosen-time .arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 9px solid #FFFFFF;\n  margin-left: 7px;\n  position: relative;\n  cursor: pointer;\n}\n.calendarium .main-panel .chosen-time .arrow-up:after {\n  position: absolute;\n  content: \"\";\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-bottom: 4px solid #307E96;\n  margin: 3px 0 0 -3px;\n}\n.calendarium .main-panel .chosen-time .arrow-up:hover:after {\n  display: none;\n}\n.calendarium .main-panel .chosen-time .arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 9px solid #FFFFFF;\n  margin-left: 7px;\n  position: relative;\n  cursor: pointer;\n}\n.calendarium .main-panel .chosen-time .arrow-down:after {\n  position: absolute;\n  content: \"\";\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 4px solid #307E96;\n  margin: -7px 0 0 -3px;\n}\n.calendarium .main-panel .chosen-time .arrow-down:hover:after {\n  display: none;\n}\n.calendarium .main-panel .selected {\n  font-weight: bold;\n}\n.calendarium .date-panel {\n  float: left;\n  width: 190px;\n  height: 180px;\n  background: #FFFFFF;\n  color: #727070;\n}\n.calendarium .date-panel .weeks {\n  float: left;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n}\n.calendarium .date-panel .weeks .week-header {\n  float: left;\n  width: 100%;\n  height: 25px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  display: table;\n  border-bottom: solid 1px #CCC;\n}\n.calendarium .date-panel .weeks .week-header > span {\n  float: left;\n  width: 14.285714285714286%;\n  font-size: 1em;\n  color: #727070;\n  font-weight: bold;\n  text-align: center;\n  vertical-align: center;\n}\n.calendarium .date-panel .weeks .week-header > span.weekend {\n  color: #e95552;\n}\n.calendarium .date-panel .weeks .week-body > div {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.calendarium .date-panel .weeks .week-body > div.current {\n  left: 0;\n}\n.calendarium .date-panel .weeks .week-body > div .week {\n  float: left;\n  width: 100%;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day {\n  float: left;\n  width: 14.285714285714286%;\n  font-size: 0.8em;\n  padding: 4px 0;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day:hover {\n  background: #EAEAEA;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day.other-month {\n  color: #AAA;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day.disabled {\n  color: #E0E0E0;\n  cursor: default;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day.disabled:hover {\n  background: transparent !important;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day.today {\n  background: #4da9c6;\n  color: white;\n}\n.calendarium .date-panel .weeks .week-body > div .week .day.selected {\n  background: #307E96;\n  color: white;\n}\n.calendarium .date-panel .months {\n  float: left;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n}\n.calendarium .date-panel .months > ul {\n  float: left;\n  width: 50%;\n  height: 100%;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.calendarium .date-panel .months > ul .month {\n  float: left;\n  width: 100%;\n  height: 16.66666666666667%;\n  font-size: 0.8em;\n  padding: 6px 0;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n}\n.calendarium .date-panel .months > ul .month:hover {\n  background: #EAEAEA;\n}\n.calendarium .date-panel .months > ul .month.other-month {\n  color: #AAA;\n}\n.calendarium .date-panel .months > ul .month.disabled {\n  color: #E0E0E0;\n  cursor: default;\n}\n.calendarium .date-panel .months > ul .month.disabled:hover {\n  background: transparent !important;\n}\n.calendarium .date-panel .months > ul .month.today {\n  background: #4da9c6;\n  color: white;\n}\n.calendarium .date-panel .months > ul .month.selected {\n  background: #307E96;\n  color: white;\n}\n.calendarium .date-panel .years {\n  float: left;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n}\n.calendarium .date-panel .years .years-columns {\n  float: left;\n  width: 80%;\n  height: 100%;\n  list-style-type: none;\n  padding: 0 5px 0 5px;\n  margin: 0;\n}\n.calendarium .date-panel .years .years-columns ul {\n  float: left;\n  width: 50%;\n  height: 100%;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.calendarium .date-panel .years .years-columns ul .year {\n  float: left;\n  width: 100%;\n  height: 16.66666666666667%;\n  font-size: 0.8em;\n  padding: 6px 0;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n}\n.calendarium .date-panel .years .years-columns ul .year:hover {\n  background: #EAEAEA;\n}\n.calendarium .date-panel .years .years-columns ul .year.other-month {\n  color: #AAA;\n}\n.calendarium .date-panel .years .years-columns ul .year.disabled {\n  color: #E0E0E0;\n  cursor: default;\n}\n.calendarium .date-panel .years .years-columns ul .year.disabled:hover {\n  background: transparent !important;\n}\n.calendarium .date-panel .years .years-columns ul .year.today {\n  background: #4da9c6;\n  color: white;\n}\n.calendarium .date-panel .years .years-columns ul .year.selected {\n  background: #307E96;\n  color: white;\n}\n.calendarium .date-panel .years .arrow-left {\n  position: relative;\n  cursor: pointer;\n  top: 50%;\n  margin-top: -15px;\n  float: left;\n  width: 10%;\n  height: 0;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-right: 15px solid #307E96;\n}\n.calendarium .date-panel .years .arrow-left:after {\n  position: absolute;\n  content: \"\";\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid #FFFFFF;\n  margin: -8px 0px 0px 7px;\n}\n.calendarium .date-panel .years .arrow-left:hover:after {\n  display: none;\n}\n.calendarium .date-panel .years .arrow-right {\n  position: relative;\n  cursor: pointer;\n  top: 50%;\n  margin-top: -15px;\n  float: left;\n  width: 10%;\n  height: 0;\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #307E96;\n}\n.calendarium .date-panel .years .arrow-right:after {\n  position: absolute;\n  content: \"\";\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid #FFFFFF;\n  margin: -8px 0px 0px -12px;\n}\n.calendarium .date-panel .years .arrow-right:hover:after {\n  display: none;\n}\n.calendarium .date-panel .hours {\n  float: left;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n}\n.calendarium .date-panel .hours .hour {\n  float: left;\n  width: 25%;\n  height: 16.66666666666667%;\n  font-size: 0.8em;\n  padding: 6px 0;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n}\n.calendarium .date-panel .hours .hour:hover {\n  background: #EAEAEA;\n}\n.calendarium .date-panel .hours .hour.other-month {\n  color: #AAA;\n}\n.calendarium .date-panel .hours .hour.disabled {\n  color: #E0E0E0;\n  cursor: default;\n}\n.calendarium .date-panel .hours .hour.disabled:hover {\n  background: transparent !important;\n}\n.calendarium .date-panel .hours .hour.today {\n  background: #4da9c6;\n  color: white;\n}\n.calendarium .date-panel .hours .hour.selected {\n  background: #307E96;\n  color: white;\n}\n.calendarium .date-panel .minutes {\n  float: left;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 5px;\n}\n.calendarium .date-panel .minutes .minute {\n  float: left;\n  width: 12.5%;\n  height: 12.5%;\n  font-size: 0.8em;\n  padding: 3px 0;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n}\n.calendarium .date-panel .minutes .minute:hover {\n  background: #EAEAEA;\n}\n.calendarium .date-panel .minutes .minute.other-month {\n  color: #AAA;\n}\n.calendarium .date-panel .minutes .minute.disabled {\n  color: #E0E0E0;\n  cursor: default;\n}\n.calendarium .date-panel .minutes .minute.disabled:hover {\n  background: transparent !important;\n}\n.calendarium .date-panel .minutes .minute.today {\n  background: #4da9c6;\n  color: white;\n}\n.calendarium .date-panel .minutes .minute.selected {\n  background: #307E96;\n  color: white;\n}\n.calendarium .control-panel {\n  float: left;\n  width: 280px;\n  height: 35px;\n  background: #307E96;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 6px;\n}\n.calendarium .button-contour {\n  text-transform: uppercase;\n  text-align: center;\n  cursor: pointer;\n  padding-top: 2px;\n  display: block;\n  outline: 0;\n  background-color: #307E96;\n  border: 1px solid #e6e6e6;\n  color: #FFFFFF;\n  border-radius: 2px;\n  transition: all 0.2s ease-out;\n}\n.calendarium .button-contour:hover,\n.calendarium .button-contour.hover {\n  background-color: #FFFFFF;\n  color: #307E96;\n  border-color: #307E96;\n}\n.calendarium .button-contour:active,\n.calendarium .button-contour.active {\n  transition: all 0.01s;\n  background-color: #e6e6e6;\n  color: #307E96;\n  border-color: #ebebeb;\n}\n.calendarium .button_relief {\n  text-transform: uppercase;\n  text-align: center;\n  cursor: pointer;\n  line-height: 1.6;\n  outline: 0;\n  transition: all .1s;\n  border-radius: 2px;\n  border: 1px solid #368ea9;\n  background: #368ea9;\n  box-shadow: inset 0 1px 0 #368ea9, 0 2px 2px #2a6e83;\n  color: #ffffff;\n}\n.calendarium .button_relief:hover,\n.calendarium .button_relief.hover {\n  color: #FFFFFF;\n  border: 1px solid #2a6e83;\n  background: #307E96;\n  box-shadow: none;\n}\n.calendarium .button_relief:active,\n.calendarium .button_relief.active {\n  background: #2a6e83;\n  color: #FFFFFF;\n  box-shadow: none;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**__________________________________________________________________________________________________________________
	 * | MainPanel is a React component.
	 * | Uses inside Calendarium to manage its.
	 * |
	 * @author sumbad
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var DatePanel_1 = __webpack_require__(10);
	var MainPanel = (function (_super) {
	    __extends(MainPanel, _super);
	    function MainPanel(props) {
	        _super.call(this, props);
	        this.state = { chosen: "day" };
	    }
	    MainPanel.prototype.render = function () {
	        var day = DateUtilities_1.DateUtilities.toDayOfMonthString(this.props.selectedDate);
	        var month = DateUtilities_1.DateUtilities.toMonthString(this.props.selectedDate);
	        var year = this.props.selectedDate.getFullYear().toString();
	        var hours = DateUtilities_1.DateUtilities.pad(this.props.selectedDate.getHours().toString(), 2);
	        var minutes = DateUtilities_1.DateUtilities.pad(this.props.selectedDate.getMinutes().toString(), 2);
	        return (React.createElement("div", {className: "main-panel"}, React.createElement("label", {onClick: this.handleClickDay.bind(this), className: "chosen-day " + (this.state.chosen === "day" ? "selected" : "")}, day), React.createElement("label", {onClick: this.handleClickMonth.bind(this), className: "chosen-month " + (this.state.chosen === "month" ? "selected" : "")}, month), React.createElement("label", {onClick: this.handleClickYear.bind(this), className: "chosen-year " + (this.state.chosen === "year" ? "selected" : "")}, year), React.createElement("label", {className: "chosen-time"}, React.createElement("div", {className: "chosen-time__hour " + (this.state.chosen === "hour" ? "selected" : "")}, React.createElement("div", {onClick: this.handleClickHoursArrowUp.bind(this), className: "arrow-up"}), React.createElement("span", {onClick: this.handleClickHours.bind(this)}, hours), React.createElement("div", {onClick: this.handleClickHoursArrowDown.bind(this), className: "arrow-down"})), React.createElement("div", {className: "chosen-time__colon"}, React.createElement("span", null, ": ")), React.createElement("div", {className: "chosen-time__minute " + (this.state.chosen === "minute" ? "selected" : "")}, React.createElement("div", {onClick: this.handleClickMinutesArrowUp.bind(this), className: "arrow-up"}), React.createElement("span", {onClick: this.handleClickMinutes.bind(this)}, minutes), React.createElement("div", {onClick: this.handleClickMinutesArrowDown.bind(this), className: "arrow-down"})))));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    MainPanel.prototype.handleClickDay = function () {
	        this.props.handleClick(DatePanel_1.DatePanel.Weeks);
	        this.setState({ chosen: "day" });
	    };
	    MainPanel.prototype.handleClickMonth = function () {
	        this.props.handleClick(DatePanel_1.DatePanel.Months);
	        this.setState({ chosen: "month" });
	    };
	    MainPanel.prototype.handleClickYear = function () {
	        this.props.handleClick(DatePanel_1.DatePanel.Years);
	        this.setState({ chosen: "year" });
	    };
	    MainPanel.prototype.handleClickHours = function () {
	        this.props.handleClick(DatePanel_1.DatePanel.Hours);
	        this.setState({ chosen: "hour" });
	    };
	    MainPanel.prototype.handleClickMinutes = function () {
	        this.props.handleClick(DatePanel_1.DatePanel.Minutes);
	        this.setState({ chosen: "minute" });
	    };
	    MainPanel.prototype.handleClickHoursArrowUp = function () {
	        var date = this.props.selectedDate;
	        date.setHours(this.props.selectedDate.getHours() + 1);
	        this.props.onSelect(date);
	    };
	    MainPanel.prototype.handleClickHoursArrowDown = function () {
	        var date = this.props.selectedDate;
	        date.setHours(this.props.selectedDate.getHours() - 1);
	        this.props.onSelect(date);
	    };
	    MainPanel.prototype.handleClickMinutesArrowUp = function () {
	        var date = this.props.selectedDate;
	        date.setMinutes(this.props.selectedDate.getMinutes() + 1);
	        this.props.onSelect(date);
	    };
	    MainPanel.prototype.handleClickMinutesArrowDown = function () {
	        var date = this.props.selectedDate;
	        date.setMinutes(this.props.selectedDate.getMinutes() - 1);
	        this.props.onSelect(date);
	    };
	    return MainPanel;
	}(React.Component));
	exports.MainPanel = MainPanel;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DateUtilities = (function () {
	    function DateUtilities() {
	    }
	    ;
	    DateUtilities.loadLocale = function (locale) {
	        this.locale = locale;
	        //this.locale = require("i18n!./locale/ru.json");
	        // this.locale = require('bundle?name=[path][name].[ext]!./locale/' + name + '.json');
	        // require.ensure([], function(require){
	        //     this.locale = require('./locale/' + name + '.json');
	        // });
	        // const req = require.context('bundle?lazy&name=/dist/locale/lll!./locale/!./pages',
	        //     true, // Load files recursively. Pass false to skip recursion.
	        //     /^\.\/.*\.json$/ // Match files ending with .json.
	        // );
	    };
	    /**
	     * Add zero before value if value.length < length
	     */
	    DateUtilities.pad = function (value, length) {
	        while (value.length < length)
	            value = "0" + value;
	        return value;
	    };
	    /**
	     * Clonning date
	     */
	    DateUtilities.clone = function (date) {
	        // getFullYear - get year
	        // getMonth - get month
	        // getDate - get day of the month
	        // ...
	        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	    };
	    /**
	     * Format date
	     */
	    DateUtilities.formatDate = function (date) {
	        var format = this.locale.format;
	        format = format.replace(/dd/g, DateUtilities.pad(date.getDate().toString(), 2));
	        format = format.replace("MM", DateUtilities.pad((date.getMonth() + 1).toString(), 2));
	        format = format.replace("YYYY", date.getFullYear().toString());
	        format = format.replace("HH", DateUtilities.pad(date.getHours().toString(), 2));
	        format = format.replace("mm", DateUtilities.pad(date.getMinutes().toString(), 2));
	        return format; //date.getFullYear() + "-" + DateUtilities.pad((date.getMonth() + 1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
	    };
	    /**
	    * Convert day of the date to String
	    */
	    DateUtilities.toDayOfMonthString = function (date) {
	        return DateUtilities.pad(date.getDate().toString(), 0);
	    };
	    /**
	     * Get month of the date
	     */
	    DateUtilities.toMonthString = function (date) {
	        return this.locale.months[date.getMonth()];
	    };
	    /**
	     * Get day of the week at number the "dayOfWeek", start from the "date" an dgo to the last
	     */
	    DateUtilities.moveToDayOfWeek = function (date, dayOfWeek) {
	        while (DateUtilities.getDayOfWeekWithLocal(date) !== dayOfWeek)
	            date.setDate(date.getDate() - 1);
	        return date;
	    };
	    /**
	     * Get day of the week with "locale"
	     */
	    DateUtilities.getDayOfWeekWithLocal = function (date) {
	        // date.getDay() returns number of day of a week starting from Sunday – 0, Monday – 1, Tuesday – 2
	        var currentDayOfWeek = date.getDay();
	        if (this.locale.name === 'ru') {
	            switch (currentDayOfWeek) {
	                case 0:
	                    currentDayOfWeek = 6;
	                    break;
	                default:
	                    currentDayOfWeek = currentDayOfWeek - 1;
	                    break;
	            }
	        }
	        return currentDayOfWeek;
	    };
	    DateUtilities.isSameDay = function (first, second) {
	        return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
	    };
	    DateUtilities.isBefore = function (first, second) {
	        return first.getTime() < second.getTime();
	    };
	    DateUtilities.isAfter = function (first, second) {
	        return first.getTime() > second.getTime();
	    };
	    DateUtilities.locale = __webpack_require__(9);
	    return DateUtilities;
	}());
	exports.DateUtilities = DateUtilities;
	;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
		"name": "en",
		"format": "YYYY-MM-dd HH:mm",
		"close": "Close",
		"now": "Сurrent",
		"months": [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		"week": [
			{
				"name": "Su",
				"class": "weekend"
			},
			{
				"name": "Mo",
				"class": "weekday"
			},
			{
				"name": "Tu",
				"class": "weekday"
			},
			{
				"name": "We",
				"class": "weekday"
			},
			{
				"name": "Th",
				"class": "weekday"
			},
			{
				"name": "Fr",
				"class": "weekday"
			},
			{
				"name": "Sa",
				"class": "weekend"
			}
		]
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	(function (DatePanel) {
	    DatePanel[DatePanel["Weeks"] = 0] = "Weeks";
	    DatePanel[DatePanel["Months"] = 1] = "Months";
	    DatePanel[DatePanel["Years"] = 2] = "Years";
	    DatePanel[DatePanel["Hours"] = 3] = "Hours";
	    DatePanel[DatePanel["Minutes"] = 4] = "Minutes";
	})(exports.DatePanel || (exports.DatePanel = {}));
	var DatePanel = exports.DatePanel;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var ControlPanel = (function (_super) {
	    __extends(ControlPanel, _super);
	    function ControlPanel(props) {
	        _super.call(this, props);
	    }
	    ControlPanel.prototype.render = function () {
	        return (React.createElement("div", {className: "control-panel"}, React.createElement("button", {onClick: this.handleClickNow.bind(this), className: "button-contour"}, DateUtilities_1.DateUtilities.locale.now), React.createElement("button", {onClick: this.handleClickClose.bind(this), className: "button-contour"}, DateUtilities_1.DateUtilities.locale.close)));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    ControlPanel.prototype.handleClickNow = function () {
	        this.props.onSelect(new Date());
	    };
	    ControlPanel.prototype.handleClickClose = function () {
	        this.props.onClose();
	    };
	    return ControlPanel;
	}(React.Component));
	exports.ControlPanel = ControlPanel;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var Week_1 = __webpack_require__(13);
	var Weeks = (function (_super) {
	    __extends(Weeks, _super);
	    function Weeks(props) {
	        _super.call(this, props);
	    }
	    Weeks.prototype.render = function () {
	        var weeks = this.renderWeeks(DateUtilities_1.DateUtilities.clone(this.props.selectedDate));
	        var weekHeader = DateUtilities_1.DateUtilities.locale.week.map(function (w) {
	            return (React.createElement("span", {key: w.name, className: w.class}, w.name));
	        });
	        return (React.createElement("div", {className: "weeks"}, React.createElement("div", {className: "week-header"}, weekHeader), React.createElement("div", {className: "week-body"}, React.createElement("div", {ref: "current", className: "current"}, weeks))));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    /**
	     * Rendering weeks
	     */
	    Weeks.prototype.renderWeeks = function (view) {
	        var _this = this;
	        var starts = this.getWeekStartDates(view);
	        var month = starts[1].getMonth();
	        var WeeksElement = starts.map(function (s, i) {
	            return React.createElement(Week_1.Week, {key: i, start: s, month: month, selectedDate: _this.props.selectedDate, onSelect: _this.props.onSelect, minDate: _this.props.minDate, maxDate: _this.props.maxDate});
	        });
	        return WeeksElement;
	    };
	    /**
	     * Get weeks for a view
	     */
	    Weeks.prototype.getWeekStartDates = function (date) {
	        // set a first day of the month
	        date.setDate(1);
	        date = DateUtilities_1.DateUtilities.moveToDayOfWeek(DateUtilities_1.DateUtilities.clone(date), 0);
	        var current = DateUtilities_1.DateUtilities.clone(date);
	        current.setDate(current.getDate() + 7);
	        var weeks = [date];
	        var month = current.getMonth();
	        while (current.getMonth() === month || weeks.length < 6) {
	            weeks.push(DateUtilities_1.DateUtilities.clone(current));
	            current.setDate(current.getDate() + 7);
	        }
	        return weeks;
	    };
	    return Weeks;
	}(React.Component));
	exports.Weeks = Weeks;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var Week = (function (_super) {
	    __extends(Week, _super);
	    function Week(props) {
	        _super.call(this, props);
	        // this.isDisabled = this.isDisabled.bind(this);
	        //this.onSelect = this.onSelect.bind(this);
	    }
	    Week.prototype.render = function () {
	        var _this = this;
	        var days = this.buildDays(this.props.start);
	        var DaysElement = days.map(function (day, i) {
	            return (React.createElement("div", {key: i, onClick: _this.onSelect.bind(_this, day), className: _this.getDayClassName(day)}, DateUtilities_1.DateUtilities.toDayOfMonthString(day)));
	        });
	        return (React.createElement("div", {className: "week"}, DaysElement));
	    };
	    /*** ADDITIONAL METHODS **************************************************************************************/
	    /**
	     * Create days of the week
	     */
	    Week.prototype.buildDays = function (start) {
	        // push start day to array days
	        var days = [DateUtilities_1.DateUtilities.clone(start)];
	        // clonning start day
	        var clone = DateUtilities_1.DateUtilities.clone(start);
	        for (var i = 1; i <= 6; i++) {
	            clone = DateUtilities_1.DateUtilities.clone(clone);
	            clone.setDate(clone.getDate() + 1);
	            days.push(clone);
	        }
	        return days;
	    };
	    Week.prototype.isOtherMonth = function (day) {
	        return this.props.month !== day.month();
	    };
	    Week.prototype.getDayClassName = function (day) {
	        var className = "day";
	        if (DateUtilities_1.DateUtilities.isSameDay(day, new Date()))
	            className += " today";
	        if (this.props.month !== day.getMonth())
	            className += " other-month";
	        if (this.props.selectedDate && DateUtilities_1.DateUtilities.isSameDay(day, this.props.selectedDate))
	            className += " selected";
	        if (this.isDisabled(day))
	            className += " disabled";
	        return className;
	    };
	    Week.prototype.onSelect = function (day) {
	        if (!this.isDisabled(day))
	            this.props.onSelect(day);
	    };
	    Week.prototype.isDisabled = function (day) {
	        var minDate = this.props.minDate, maxDate = this.props.maxDate;
	        return (minDate && DateUtilities_1.DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities_1.DateUtilities.isAfter(day, maxDate));
	    };
	    return Week;
	}(React.Component));
	exports.Week = Week;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var Months = (function (_super) {
	    __extends(Months, _super);
	    function Months(props) {
	        _super.call(this, props);
	    }
	    Months.prototype.render = function () {
	        var _this = this;
	        var month1col = [];
	        var month2col = [];
	        DateUtilities_1.DateUtilities.locale.months.forEach(function (month, index) {
	            var selected = _this.props.selectedDate.getMonth() == index ? "selected" : "";
	            var m = React.createElement("li", {key: index, onClick: _this.handleClickMonth.bind(_this, index), className: "month " + selected}, month);
	            if (index < 6) {
	                month1col.push(m);
	            }
	            else {
	                month2col.push(m);
	            }
	        });
	        return (React.createElement("div", {className: "months"}, React.createElement("ul", null, month1col), React.createElement("ul", null, month2col)));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    Months.prototype.handleClickMonth = function (month) {
	        var date = this.props.selectedDate;
	        date.setMonth(month);
	        this.props.onSelect(date);
	    };
	    return Months;
	}(React.Component));
	exports.Months = Months;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var Years = (function (_super) {
	    __extends(Years, _super);
	    function Years(props) {
	        _super.call(this, props);
	        var yearSelected = props.selectedDate.getFullYear();
	        this.state = {
	            years: [yearSelected - 6, yearSelected - 5, yearSelected - 4, yearSelected - 3, yearSelected - 2, yearSelected - 1, yearSelected, yearSelected + 1, yearSelected + 2, yearSelected + 3, yearSelected + 4, yearSelected + 5]
	        };
	    }
	    Years.prototype.render = function () {
	        var _this = this;
	        var years = this.state.years.map(function (year) {
	            var selected = _this.props.selectedDate.getFullYear() == year ? "selected" : "";
	            return (React.createElement("li", {key: year, onClick: _this.handleClickYear.bind(_this, year), className: "year " + selected}, year));
	        });
	        var years1col = years.slice(0, 6);
	        var years2col = years.slice(6, 12);
	        return (React.createElement("div", {className: "years"}, React.createElement("div", {onClick: this.handleClickArrowLeft.bind(this), className: "arrow-left"}), React.createElement("div", {className: "years-columns"}, React.createElement("ul", null, years1col), React.createElement("ul", null, years2col)), React.createElement("div", {onClick: this.handleClickArrowRight.bind(this), className: "arrow-right"})));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    Years.prototype.handleClickYear = function (year) {
	        var date = this.props.selectedDate;
	        date.setFullYear(year);
	        this.props.onSelect(date);
	    };
	    Years.prototype.handleClickArrowLeft = function () {
	        this.state.years = this.state.years.map(function (year) {
	            return year - 6;
	        });
	        this.setState(this.state);
	    };
	    Years.prototype.handleClickArrowRight = function () {
	        this.state.years = this.state.years.map(function (year) {
	            return year + 6;
	        });
	        this.setState(this.state);
	    };
	    return Years;
	}(React.Component));
	exports.Years = Years;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var Hours = (function (_super) {
	    __extends(Hours, _super);
	    function Hours(props) {
	        _super.call(this, props);
	    }
	    Hours.prototype.render = function () {
	        var hours = [];
	        for (var hour = 0; hour <= 23; hour++) {
	            var selected = this.props.selectedDate.getHours() === hour ? "selected" : "";
	            hours.push(React.createElement("div", {key: hour, onClick: this.handleClickHour.bind(this, hour), className: "hour " + selected}, DateUtilities_1.DateUtilities.pad(hour.toString(), 2)));
	        }
	        return (React.createElement("div", {className: "hours"}, hours));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    Hours.prototype.handleClickHour = function (hour) {
	        var date = this.props.selectedDate;
	        date.setHours(hour);
	        this.props.onSelect(date);
	    };
	    return Hours;
	}(React.Component));
	exports.Hours = Hours;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var DateUtilities_1 = __webpack_require__(8);
	var Minutes = (function (_super) {
	    __extends(Minutes, _super);
	    function Minutes(props) {
	        _super.call(this, props);
	    }
	    Minutes.prototype.render = function () {
	        var minutes = [];
	        for (var minute = 0; minute <= 59; minute++) {
	            var selected = this.props.selectedDate.getMinutes() === minute ? "selected" : "";
	            minutes.push(React.createElement("div", {key: minute, onClick: this.handleClickMinutes.bind(this, minute), className: "minute " + selected}, DateUtilities_1.DateUtilities.pad(minute.toString(), 2)));
	        }
	        return (React.createElement("div", {className: "minutes"}, minutes));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    Minutes.prototype.handleClickMinutes = function (minute) {
	        var date = this.props.selectedDate;
	        date.setMinutes(minute);
	        this.props.onSelect(date);
	    };
	    return Minutes;
	}(React.Component));
	exports.Minutes = Minutes;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(6);
	var ReactDOM = __webpack_require__(19);
	var Calendarium_1 = __webpack_require__(1);
	var DateUtilities_1 = __webpack_require__(8);
	var packageJson = __webpack_require__(20);
	var locale = __webpack_require__(21);
	var DatePicker = (function (_super) {
	    __extends(DatePicker, _super);
	    function DatePicker(props) {
	        _super.call(this, props);
	        var date = this.props.selectedDate || new Date();
	        this.state = {
	            selectedDate: date,
	            minDate: null,
	            maxDate: null,
	            visible: false
	        };
	        this.hideOnDocumentClick = this.hideOnDocumentClick.bind(this);
	        DateUtilities_1.DateUtilities.loadLocale(locale);
	    }
	    DatePicker.prototype.componentDidMount = function () {
	        document.addEventListener("click", this.hideOnDocumentClick);
	    };
	    DatePicker.prototype.componentWillUnmount = function () {
	        document.removeEventListener("click", this.hideOnDocumentClick);
	    };
	    DatePicker.prototype.render = function () {
	        return (React.createElement("div", {id: this.props.id, className: "ardp-date-picker"}, React.createElement("input", {ref: "trigger", type: "text", className: "date-picker-trigger-" + this.props.id, readOnly: true, value: DateUtilities_1.DateUtilities.formatDate(this.state.selectedDate), onClick: this.show.bind(this)}), React.createElement(Calendarium_1.Calendarium, {ref: "calendar", id: "calendarium-" + this.props.id, selectedDate: this.state.selectedDate, visible: this.state.visible, position: this.state.position, onSelect: this.onSelect.bind(this), onClose: this.onClose.bind(this)})));
	    };
	    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    // ADDITIONAL METHODS
	    //
	    DatePicker.prototype.hideOnDocumentClick = function (e) {
	        var parent = e.target;
	        var idDatePicker = this.props.id;
	        while (parent) {
	            if (parent.id && parent.id === idDatePicker) {
	                return;
	            }
	            parent = parent.parentNode;
	        }
	        this.state.visible = false;
	        this.setState(this.state);
	    };
	    DatePicker.prototype.onClose = function () {
	        this.setState({ visible: false });
	    };
	    DatePicker.prototype.onSelect = function (date) {
	        this.setState({ selectedDate: date });
	    };
	    DatePicker.prototype.getPosition = function () {
	        var trigger = ReactDOM.findDOMNode(this.refs["trigger"]);
	        var rect = trigger.getBoundingClientRect();
	        var isTopHalf = rect.top > window.innerHeight / 2;
	        var calendarHeight = 203;
	        return {
	            top: isTopHalf ? (rect.top + window.scrollY - calendarHeight - 3) : (rect.top + trigger.clientHeight + window.scrollY + 3),
	            left: rect.left
	        };
	    };
	    DatePicker.prototype.show = function () {
	        this.state.position = this.getPosition();
	        this.state.visible = true;
	        this.setState(this.state);
	    };
	    return DatePicker;
	}(React.Component));
	exports.DatePicker = DatePicker;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
		"name": "calendarium",
		"version": "0.1.9",
		"description": "React datetime picker",
		"main": "webpack.config.js",
		"scripts": {
			"clean:dist": "rimraf ./dist/*",
			"clean:lib": "rimraf ./lib/*",
			"compile:dist": "webpack",
			"compile:lib": "tsc --rootDir ./src --outDir ./lib",
			"less": "lessc -x src/calendariumStyle.less lib/calendariumStyle.css",
			"assets:lib": "cpy src/locale/* lib/locale/",
			"build:dist": "npm run clean:dist && npm run compile:dist",
			"build:lib": "npm run clean:lib && npm run compile:lib && npm run less && npm run assets:lib",
			"start": "webpack-dev-server --progress --colors --content-base example/",
			"build": "webpack",
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"keywords": [
			"react",
			"react-component",
			"calendar",
			"datetime",
			"picker"
		],
		"author": "sumbad",
		"license": "ISC",
		"peerDependencies": {
			"react": "^0.14.7",
			"react-dom": "^0.14.7"
		},
		"devDependencies": {
			"autoprefixer": "^6.3.3",
			"clean-webpack-plugin": "^0.1.8",
			"css-loader": "^0.23.1",
			"extract-text-webpack-plugin": "^1.0.1",
			"file-loader": "^0.8.5",
			"html-webpack-plugin": "^2.9.0",
			"json-loader": "^0.5.4",
			"less": "^2.6.0",
			"less-loader": "^2.2.2",
			"lodash": "^4.5.1",
			"postcss-loader": "^0.8.1",
			"style-loader": "^0.13.0",
			"ts-loader": "^0.8.1",
			"typescript": "^1.8.2",
			"webpack": "^1.12.14",
			"webpack-dev-server": "^1.14.1"
		}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
		"name": "ru",
		"format": "dd.MM.YYYY HH:mm",
		"close": "Закрыть",
		"now": "Сейчас",
		"months": [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь"
		],
		"week": [
			{
				"name": "Пн",
				"class": "weekday"
			},
			{
				"name": "Вт",
				"class": "weekday"
			},
			{
				"name": "Ср",
				"class": "weekday"
			},
			{
				"name": "Чт",
				"class": "weekday"
			},
			{
				"name": "Пт",
				"class": "weekday"
			},
			{
				"name": "Сб",
				"class": "weekend"
			},
			{
				"name": "Вс",
				"class": "weekend"
			}
		]
	};

/***/ }
/******/ ])
});
;