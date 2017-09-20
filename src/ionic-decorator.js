// ngtemplate-loader embeds the html on build
// import actionsTemplate from './ionic/actions.html';
import arrayTemplate from './ionic/array.html';
import checkboxTemplate from './ionic/checkbox.html';
// import checkboxesTemplate from './ionic/checkboxes.html';
import defaultTemplate from './ionic/default.html';
import fieldsetTemplate from './ionic/fieldset.html';
// import helpTemplate from './ionic/help.html';
// import radiobuttonsTemplate from './ionic/radio-buttons.html';
import radiosTemplate from './ionic/radios.html';
// import radiosInlineTemplate from './ionic/radios-inline.html';
import sectionTemplate from './ionic/section.html';
import selectTemplate from './ionic/select.html';
import submitTemplate from './ionic/submit.html';
// import tabarrayTemplate from './ionic/tabarray.html';
// import tabsTemplate from './ionic/tabs.html';
import textareaTemplate from './ionic/textarea.html';
import toggleTemplate from './ionic/toggle.html';

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
    array: {template: arrayTemplate, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
    button: {template: submitTemplate, builder: defaults},
    checkbox: {template: checkboxTemplate, builder: defaults},
    // checkboxes: {template: checkboxesTemplate, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
    // conditional: {template: sectionTemplate, builder: [ sfField, simpleTransclusion, condition ]},
    'default': {template: defaultTemplate, builder: defaults},
    fieldset: {template: fieldsetTemplate, builder: [ sfField, simpleTransclusion, condition ]},
    // help: {template: helpTemplate, builder: defaults},
    // number: {template: defaultTemplate, builder: defaults.concat(numeric)},
    // password: {template: defaultTemplate, builder: defaults},
    radios: {template: radiosTemplate, builder: defaults},
    // 'radios-inline': {template: radiosInlineTemplate, builder: defaults},
    // radiobuttons: {template: radiobuttonsTemplate, builder: defaults},
    section: {template: sectionTemplate, builder: [ sfField, simpleTransclusion, condition ]},
    select: {template: selectTemplate, builder: [ selectPlaceholder ].concat(defaults)},
    submit: {template: submitTemplate, builder: defaults},
    // tabarray: {template: tabarrayTemplate, builder: [ sfField, ngModelOptions, ngModel, array, condition ]},
    // tabs: {template: tabsTemplate, builder: [ sfField, ngModelOptions, tabs, condition ]},
    textarea: {template: textareaTemplate, builder: defaults},
    toggle: {template: toggleTemplate, builder: defaults},
  }, []);
};
