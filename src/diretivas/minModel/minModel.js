import angular from 'angular';

export default function positiveFloat() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {
                if (viewValue > scope[attrs.minModel]) { // it is valid
                    ctrl.$setValidity('minModel', true);
                    return viewValue;
                } else { // it is invalid, return undefined (no model update)
                    ctrl.$setValidity('minModel', false);
                    return undefined;
                }
            });

        }
    };
}