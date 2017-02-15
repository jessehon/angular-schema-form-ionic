angular.module('schemaForm').config(['schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider',
function(decoratorsProvider, sfBuilderProvider, sfPathProvider) {
  var base = 'decorators/ionic/';

  var ngModelOptions      = sfBuilderProvider.builders.ngModelOptions;
  var ngModel             = sfBuilderProvider.builders.ngModel;
  var sfField             = sfBuilderProvider.builders.sfField;
  var condition           = sfBuilderProvider.builders.condition;

  var defaults = [sfField, ngModel, ngModelOptions, condition];
  decoratorsProvider.defineDecorator('ionicDecorator', {
    'textarea': {template: base + 'textarea.html', builder: defaults},
    'checkbox': {template: base + 'checkbox.html', builder: defaults},
    'submit': {template: base + 'submit.html', builder: defaults},
    'button': {template: base + 'submit.html', builder: defaults},
    'default': {template: base + 'default.html', builder: defaults}
  }, []);

}]);
