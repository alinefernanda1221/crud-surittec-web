import angular from 'angular';

export default function positiveInteger() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var INTEGER_REGEXP = /^\d+$/;
                if (INTEGER_REGEXP.test(viewValue)) { // it is valid
                    ctrl.$setValidity('positiveInteger', true);
                    return viewValue;
                } else { // it is invalid, return undefined (no model update)
                    ctrl.$setValidity('positiveInteger', false);
                    return undefined;
                }
            });
        }
    };
}