import angular from 'angular';

export default function regexInput() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (inputValue) {
        if (inputValue == null) {
          return '';
        }

        var cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
        if (cleanInputValue != inputValue) {
          modelCtrl.$setViewValue(cleanInputValue);
          modelCtrl.$render();
        }

        return cleanInputValue;
      });
    }
  }
  // return {
  //   restrict: 'A',
  //   require: 'ngModel',
  //   link: function (scope, elem, attrs, ngModel) {
  //     ngModel.$parsers.push(function (viewValue) {
  //       var reg = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./]*$/;
  //       // if view values matches regexp, update model value
  //       if (viewValue.match(reg)) {
  //         return viewValue;
  //       }
  //       // keep the model value as it is
  //       var transformedValue = ngModel.$modelValue;
  //       ngModel.$setViewValue(transformedValue);
  //       ngModel.$render();
  //       return transformedValue;
  //     });
  //   }
  // };
}