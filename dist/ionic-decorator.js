angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/ionic/default.html","<label for=\"{{form.key.slice(-1)[0]}}\" class=\"item item-input schema-form-{{::form.type}} {{::form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><span ng-show=\"showTitle()\" class=\"input-label {{form.labelHtmlClass}}\">{{form.title}}</span> <input sf-field-model=\"\" ng-show=\"form.key\" type=\"{{form.type}}\" step=\"any\" sf-changed=\"form\" placeholder=\"{{form.placeholder}}\" id=\"{{form.key.slice(-1)[0]}}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" schema-validate=\"form\" name=\"{{form.key.slice(-1)[0]}}\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\"></label>");}]);
angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/ionic/';

  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;

  var defaults = [sfField, ngModel, ngModelOptions, condition];
  decoratorsProvider.defineDecorator('ionicDecorator', {
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);
