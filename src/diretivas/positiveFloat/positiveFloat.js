import angular from 'angular';

export default function positiveFloat() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                var FLOAT_REGEXP = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;
                if (FLOAT_REGEXP.test(viewValue)) { // it is valid
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