angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/ionic/array.html","<div class=\"list schema-form-array {{form.htmlClass}}\" sf-field-model=\"sf-new-array\" sf-new-array=\"\"><div class=\"item item-divider\" ng-show=\"showTitle()\">{{ form.title }}<div sf-field-model=\"\"><div class=\"list list-inset {{form.fieldHtmlClass}}\" schema-form-array-items=\"\" sf-field-model=\"ng-repeat\" ng-repeat=\"item in $$value$$ track by $index\"><button ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\" type=\"button\" class=\"button icon-left ion-close {{ form.style.remove || \'button-block\' }}\">{{ form.remove || \'Remove\'}}</button></div></div><div class=\"padding\" ng-model=\"modelArray\" schema-validate=\"form\"><p class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></p><button ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" type=\"button\" class=\"button icon-left ion-plus {{ form.style.add || \'button-block\' }}\">{{ form.add || \'Add\'}}</button></div></div></div>");
$templateCache.put("decorators/ionic/checkbox.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-checkbox schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div class=\"checkbox checkbox-input-hidden disable-pointer-events\"><input sf-field-model=\"\" type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title}}\"> <i class=\"checkbox-icon\"></i></div><div class=\"item-content disable-pointer-events {{form.labelHtmlClass}}\">{{form.title}}</div><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/default.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</span> <input sf-field-model=\"\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"schema-form-fieldset {{form.htmlClass}}\"><div ng-show=\"showTitle()\" class=\"item item-divider\">{{ form.title }}</div><p class=\"help-block\" ng-show=\"form.description\" ng-bind-html=\"form.description\"></p></fieldset>");
$templateCache.put("decorators/ionic/radios.html","<div class=\"list schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><label class=\"item item-radio\" ng-repeat=\"item in form.titleMap\"><input type=\"radio\" class=\"{{form.fieldHtmlClass}}\" sf-changed=\"form\" ng-disabled=\"form.readonly\" sf-field-model=\"\" ng-value=\"item.value\" name=\"{{form.key.join(\'.\')}}\"><div class=\"radio-content\"><div class=\"item-content disable-pointer-events {{form.labelHtmlClass}}\" ng-bind-html=\"item.name\"></div><i class=\"radio-icon disable-pointer-events icon ion-checkmark\"></i></div><p class=\"help-block\" sf-message=\"form.description\"></p></label></div>");
$templateCache.put("decorators/ionic/section.html","<div class=\"schema-form-section {{form.htmlClass}}\"></div>");
$templateCache.put("decorators/ionic/select.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input item-select schema-form-select {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</div><select sf-field-model=\"\" sf-changed=\"form\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" ng-options=\"item.value as item.name group by item.group for item in form.titleMap\"></select><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/submit.html","<div class=\"form-group schema-form-submit {{form.htmlClass}}\"><button class=\"button {{form.style}} {{form.fieldHtmlClass}}\" type=\"{{form.type}}\" ng-disabled=\"form.readonly\" aria-label=\"{{form.title}}\">{{form.title}}</button></div>");
$templateCache.put("decorators/ionic/textarea.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</span> <textarea sf-field-model=\"\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\">\n  </textarea><p class=\"help-block\" sf-message=\"form.description\"></p></label>");
$templateCache.put("decorators/ionic/toggle.html","<div class=\"item item-toggle schema-form-toggle {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><div class=\"{{form.labelHtmlClass}}\">{{form.title}}</div><label for=\"{{form.key.slice(-1)[0]}}\" class=\"toggle\"><input sf-field-model=\"\" type=\"checkbox\" sf-changed=\"form\" ng-disabled=\"form.readonly\" schema-validate=\"form\" class=\"{{form.fieldHtmlClass}}\" name=\"{{form.key.slice(-1)[0]}}\" aria-label=\"{{form.title}}\"><div class=\"track\"><div class=\"handle\"></div></div></label><p class=\"help-block\" sf-message=\"form.description\"></p></div>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/ionic/';

  var simpleTransclusion  = sfBuilderProvider.builders.simpleTransclusion;
  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;
  var array               = sfBuilderProvider.builders.array;

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
    'textarea': {template: base + 'textarea.html', builder: defaults},
    'fieldset': {template: base + 'fieldset.html', builder: [sfField, simpleTransclusion, condition]},
    'array': {template: base + 'array.html', builder: [sfField, ngModelOptions, ngModel, array, condition]},
    'section': {template: base + 'section.html', builder: [sfField, simpleTransclusion, condition]},
    'checkbox': {template: base + 'checkbox.html', builder: defaults},
    'select': {template: base + 'select.html', builder: [selectPlaceholder, sfField, ngModel, ngModelOptions, condition]},
    'submit': {template: base + 'submit.html', builder: defaults},
    'button': {template: base + 'submit.html', builder: defaults},
    'radios': {template: base + 'radios.html', builder: defaults},
    'toggle': {template: base + 'toggle.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);
