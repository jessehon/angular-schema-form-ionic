/*!
 * angular-schema-form-ionic
 * @version 1.0.0
 * @date Wed, 20 Sep 2017 03:08:16 GMT
 * @link https://github.com/jessehon/angular-schema-form-ionic
 * @license MIT
 * Copyright (c) 2014-2017 JSON Schema Form
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var path = '/ionic/array.html';
var html = "<div  class=\"list schema-form-array {{::form.htmlClass + ' ' + idClass}}\"\n      sf-field-model=\"sf-new-array\"\n      sf-new-array>\n\n  <div class=\"item item-divider\" ng-show=\"showTitle()\">\n    {{ form.title }}\n  </div>\n\n  <div sf-field-model>\n    <div  class=\"list list-inset {{::form.fieldHtmlClass}}\"\n          sf-field-model=\"ng-repeat\"\n          ng-repeat=\"item in $$value$$ track by $id(trackBy(item, index))\">\n\n      <div  schema-form-array-items\n            sf-key-controller\n            sf-parent-key=\"[{{form.key.join('][')}}]\"\n            sf-index=\"{{$index}}\">\n      </div>\n\n      <button ng-hide=\"form.readonly || form.remove === null\"\n          ng-click=\"deleteFromArray(item)\"\n          ng-disabled=\"form.schema.minItems >= modelArray.length\"\n          type=\"button\"\n          class=\"button icon-left ion-close {{ form.style.remove || 'button-block' }}\">\n        {{ form.remove || 'Remove'}}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"padding\" ng-model=\"modelArray\" schema-validate=\"form\">\n    <p class=\"help-block\"\n         ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n         ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\">\n    </p>\n\n    <button ng-hide=\"form.readonly || form.add === null\"\n            ng-click=\"appendToArray()\"\n            ng-disabled=\"form.schema.maxItems <= modelArray.length\"\n            type=\"button\"\n            class=\"button icon-left ion-plus {{ form.style.add || 'button-block' }}\">\n      {{ form.add || 'Add'}}\n    </button>\n  </div>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var path = '/ionic/checkbox.html';
var html = "<label  for=\"{{::fieldId(true, false)}}\"\n        class=\"item item-checkbox schema-form-{{form.type}} {{::form.htmlClass + ' ' + idClass}}\"\n        ng-class=\"{\n          'has-error': form.disableErrorState !== true && hasError(),\n          'has-success': form.disableSuccessState !== true && hasSuccess(),\n          'has-feedback': form.feedback !== false,\n          'required': form.required === true\n        }\">\n  <div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n    <input  type=\"checkbox\"\n            sf-changed=\"form\"\n            ng-disabled=\"form.readonly\"\n            sf-field-model\n            schema-validate=\"form\"\n            class=\"{{::form.fieldHtmlClass}}\"\n            name=\"{{::fieldId(true, false)}}\">\n    <i class=\"checkbox-icon\"></i>\n  </div>\n\n  <div  class=\"item-content disable-pointer-events {{form.labelHtmlClass}}\"\n        ng-bind-html=\"form.title\">\n  </div>\n\n  <!-- Help block for help text and error message -->\n  <p class=\"help-block\" sf-message=\"form.description\"></p>\n</label>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var path = '/ionic/default.html';
var html = "<label  for=\"{{::fieldId(true, false)}}\"\n        class=\"item item-input {{::form.htmlClass + ' schema-form-' + form.type + ' ' + idClass}}\"\n        ng-class=\"{\n          'has-error': form.disableErrorState !== true && hasError(),\n          'has-success': form.disableSuccessState !== true && hasSuccess(),\n          'has-feedback': form.feedback !== false,\n          'required': form.required === true\n        }\">\n\n  <span ng-show=\"showTitle()\"\n        class=\"input-label {{::form.labelHtmlClass}}\">\n    {{form.title}}\n  </span>\n\n  <input ng-show=\"::form.key\"\n         type=\"{{::form.type}}\"\n         step=\"any\"\n         sf-changed=\"form\"\n         placeholder=\"{{::form.placeholder}}\"\n         class=\"{{::form.fieldHtmlClass}}\"\n         id=\"{{::fieldId(true, false)}}\"\n         sf-field-model\n         ng-disabled=\"form.readonly\"\n         schema-validate=\"form\"\n         name=\"{{::fieldId(true, false)}}\"\n         aria-describedby=\"{{::fieldId(true, false) + '-status'}}\">\n\n  <!-- Help block for help text and error message -->\n  <p class=\"help-block\" sf-message=\"form.description\"></p>\n</label>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var path = '/ionic/fieldset.html';
var html = "<fieldset ng-disabled=\"form.readonly\"\n          class=\"schema-form-fieldset {{::form.htmlClass + ' ' + idClass}}\">\n  <div ng-show=\"showTitle()\" class=\"item item-divider\">\n    {{ form.title }}\n  </div>\n\n  <!-- Help block for help text and error message -->\n  <p class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></p>\n</fieldset>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var path = '/ionic/radios.html';
var html = "<div  class=\"list schema-form-radios {{::form.htmlClass + ' ' + idClass}}\"\n      ng-class=\"{\n        'has-error': form.disableErrorState !== true &&  hasError(),\n        'has-success': form.disableSuccessState !== true && hasSuccess(),\n        'required': form.required === true\n      }\">\n\n  <label class=\"item item-radio\" ng-repeat=\"tm in form.titleMap\">\n    <input type=\"radio\"\n           class=\"{{form.fieldHtmlClass}}\"\n           sf-changed=\"form\"\n           ng-disabled=\"form.readonly\"\n           sf-field-model\n           ng-value=\"tm.value\"\n           name=\"{{::fieldId(true, false)}}\">\n\n    <div class=\"radio-content\">\n      <div class=\"item-content disable-pointer-events {{::form.labelHtmlClass}}\"\n           ng-bind-html=\"tm.name\">\n      </div>\n      <i class=\"radio-icon disable-pointer-events icon ion-checkmark\"></i>\n    </div>\n\n    <!-- Help block for help text and error message -->\n    <p class=\"help-block\" sf-message=\"form.description\"></p>\n  </label>\n\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var path = '/ionic/section.html';
var html = "<div  class=\"schema-form-section {{::form.htmlClass + ' ' + idClass}}\"\n      sf-key-controller\n      sf-parent-key=\"[{{form.key.join('][')}}]\"\n      sf-index=\"{{$index}}\">\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var path = '/ionic/select.html';
var html = "<label  class=\"item item-input item-select schema-form-select {{::form.htmlClass + ' ' + idClass}}\"\n        for=\"{{::fieldId(true, false)}}\"\n        ng-class=\"{\n          'has-error': form.disableErrorState !== true && hasError(),\n          'has-success': form.disableSuccessState !== true && hasSuccess(),\n          'has-feedback': form.feedback !== false,\n          'required': form.required === true\n        }\">\n\n  <div class=\"input-label {{form.labelHtmlClass}}\" ng-show=\"showTitle()\">\n    {{form.title}}\n  </div>\n\n  <select sf-field-model\n          id=\"{{::fieldId(true, false)}}\"\n          ng-disabled=\"form.readonly\"\n          sf-changed=\"form\"\n          class=\"{{::form.fieldHtmlClass}}\"\n          schema-validate=\"form\"\n          ng-options=\"item.value as item.name group by item.group for item in form.titleMap\"\n          name=\"{{::fieldId(true, false)}}\">\n  </select>\n\n  <!-- Help block for help text and error message -->\n  <p class=\"help-block\" sf-message=\"form.description\"></p>\n</label>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var path = '/ionic/submit.html';
var html = "<div class=\"form-group schema-form-submit {{::form.htmlClass + ' ' + idClass}}\">\n  <input type=\"submit\"\n         class=\"button {{ form.style || 'button-positive' }} {{::form.fieldHtmlClass}}\"\n         value=\"{{form.title}}\"\n         ng-disabled=\"form.readonly\"\n         ng-if=\"form.type === 'submit'\">\n  <button class=\"button {{ form.style }} {{::form.fieldHtmlClass}}\"\n          type=\"button\"\n          ng-click=\"buttonClick($event, form)\"\n          ng-disabled=\"form.readonly\"\n          ng-if=\"form.type !== 'submit'\">\n    <span ng-if=\"form.icon\" class=\"{{form.icon}}\"></span>\n    {{form.title}}\n  </button>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var path = '/ionic/textarea.html';
var html = "<label  class=\"item item-input {{::form.htmlClass + ' ' + idClass}} schema-form-textarea\"\n        for=\"{{::fieldId(true, false)}}\"\n        ng-class=\"{\n          'has-error': form.disableErrorState !== true && hasError(),\n          'has-success': form.disableSuccessState !== true && hasSuccess(),\n          'has-feedback': form.feedback !== false,\n          'required': form.required === true\n        }\">\n\n  <span ng-show=\"showTitle()\"\n        class=\"input-label {{::form.labelHtmlClass}}\">\n    {{form.title}}\n  </span>\n\n  <textarea class=\"{{::form.fieldHtmlClass}}\"\n            id=\"{{::fieldId(true, false)}}\"\n            sf-changed=\"form\"\n            ng-attr-placeholder=\"{{::form.placeholder}}\"\n            ng-disabled=\"form.readonly\"\n            sf-field-model\n            schema-validate=\"form\"\n            name=\"{{::fieldId(true, false)}}\"></textarea>\n\n  <!-- Help block for help text and error message -->\n  <p class=\"help-block\" sf-message=\"form.description\"></p>\n</label>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var path = '/ionic/toggle.html';
var html = "<div  class=\"item item-toggle schema-form-toggle {{::form.htmlClass + ' ' + idClass}}\"\n      ng-class=\"{\n        'has-error': form.disableErrorState !== true && hasError(),\n        'has-success': form.disableSuccessState !== true && hasSuccess(),\n        'has-feedback': form.feedback !== false,\n        'required': form.required === true\n      }\">\n\n  <div class=\"{{::form.labelHtmlClass}}\">\n    {{form.title}}\n  </div>\n\n  <label  for=\"{{::fieldId(true, false)}}\"\n          class=\"toggle\">\n\n    <input type=\"checkbox\"\n           sf-changed=\"form\"\n           ng-disabled=\"form.readonly\"\n           sf-field-model\n           schema-validate=\"form\"\n           class=\"{{::form.fieldHtmlClass}}\"\n           name=\"{{::fieldId(true, false)}}\">\n\n    <div class=\"track\">\n      <div class=\"handle\"></div>\n    </div>\n\n  </label>\n\n  <!-- Help block for help text and error message -->\n  <p class=\"help-block\" sf-message=\"form.description\"></p>\n</div>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_array_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_array_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ionic_array_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_checkbox_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_checkbox_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ionic_checkbox_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_default_html__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_default_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ionic_default_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_fieldset_html__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_fieldset_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ionic_fieldset_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_radios_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_radios_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ionic_radios_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_section_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_section_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_section_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_select_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_select_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ionic_select_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_submit_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_submit_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ionic_submit_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_textarea_html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_textarea_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ionic_textarea_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_toggle_html__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_toggle_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ionic_toggle_html__);
// ngtemplate-loader embeds the html on build
// import actionsTemplate from './ionic/actions.html';


// import checkboxesTemplate from './ionic/checkboxes.html';


// import helpTemplate from './ionic/help.html';
// import radiobuttonsTemplate from './ionic/radio-buttons.html';

// import radiosInlineTemplate from './ionic/radios-inline.html';



// import tabarrayTemplate from './ionic/tabarray.html';
// import tabsTemplate from './ionic/tabs.html';



angular
  .module('schemaForm')
  .config(ionicDecoratorConfig);

ionicDecoratorConfig.$inject = [
  'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector'
];

function ionicDecoratorConfig(
    schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
  var base = 'decorators/ionic/';

  var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;
  var array               = sfBuilderProvider.builders.array;
  var numeric             = sfBuilderProvider.builders.numeric;

  var selectPlaceholder = function(args) {
    if (args.form.placeholder) {
      var selectBox = args.fieldFrag.querySelector('select');
      var option = document.createElement('option');
      option.setAttribute('value', '');

      /* We only want the placeholder to show when we do not have a value on the model.
       * We make ngModel builder replace all so we can use $$value$$.
       */
      option.setAttribute('sf-field-model', 'replaceAll');

      /* https://github.com/angular/angular.js/issues/12190#issuecomment-115277040
       * angular > 1.4 does a emptyOption.attr('selected', true)
       * which does not like the ng-if comment.
       */
      if (angular.version.major === 1 && angular.version.minor < 4) {
        option.setAttribute('ng-if', '$$value$$ === undefined');
      } else {
        option.setAttribute('ng-show', '$$value$$ === undefined');
      }

      option.textContent = args.form.placeholder;

      selectBox.appendChild(option);
    }
  };

  var defaults = [sfField, ngModel, ngModelOptions, condition];
  decoratorsProvider.defineDecorator('ionicDecorator', {
    // actions: {template: actionsTemplate, builder: defaults},
    array: {template: __WEBPACK_IMPORTED_MODULE_0__ionic_array_html___default.a, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
    button: {template: __WEBPACK_IMPORTED_MODULE_7__ionic_submit_html___default.a, builder: defaults},
    checkbox: {template: __WEBPACK_IMPORTED_MODULE_1__ionic_checkbox_html___default.a, builder: defaults},
    // checkboxes: {template: checkboxesTemplate, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
    // conditional: {template: sectionTemplate, builder: [ sfField, simpleTransclusion, condition ]},
    'default': {template: __WEBPACK_IMPORTED_MODULE_2__ionic_default_html___default.a, builder: defaults},
    fieldset: {template: __WEBPACK_IMPORTED_MODULE_3__ionic_fieldset_html___default.a, builder: [ sfField, simpleTransclusion, condition ]},
    // help: {template: helpTemplate, builder: defaults},
    // number: {template: defaultTemplate, builder: defaults.concat(numeric)},
    // password: {template: defaultTemplate, builder: defaults},
    radios: {template: __WEBPACK_IMPORTED_MODULE_4__ionic_radios_html___default.a, builder: defaults},
    // 'radios-inline': {template: radiosInlineTemplate, builder: defaults},
    // radiobuttons: {template: radiobuttonsTemplate, builder: defaults},
    section: {template: __WEBPACK_IMPORTED_MODULE_5__ionic_section_html___default.a, builder: [ sfField, simpleTransclusion, condition ]},
    select: {template: __WEBPACK_IMPORTED_MODULE_6__ionic_select_html___default.a, builder: [ selectPlaceholder ].concat(defaults)},
    submit: {template: __WEBPACK_IMPORTED_MODULE_7__ionic_submit_html___default.a, builder: defaults},
    // tabarray: {template: tabarrayTemplate, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
    // tabs: {template: tabsTemplate, builder: [ sfField, ngModelOptions, tabs, condition ]},
    textarea: {template: __WEBPACK_IMPORTED_MODULE_8__ionic_textarea_html___default.a, builder: defaults},
    toggle: {template: __WEBPACK_IMPORTED_MODULE_9__ionic_toggle_html___default.a, builder: defaults},
  }, []);
};


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);