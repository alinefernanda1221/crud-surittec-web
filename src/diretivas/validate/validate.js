import angular from 'angular';

export default function validate() {
    return {
        restrict: 'A',
        require: 'ngModel', // require:  '^form',
        link: function (scope, element, attrs, ctrl) {
            var elementErrors = element.next();
            var errorsList = '',
                errorItem;
            var errorMessages = {
                //defaultMsg: 'Please add error message for {0}',
                required: 'This field is required',
                number: 'Please enter a valid number',
                min: 'Please enter the minimum number of {0}',
                max: 'Please enter the maximum number of {0}',
                url: 'Please enter a valid URL in the format of http(s)://wwww.google.com',
                email: 'Please enter a valid email address',
                minlength: 'Please enter at least {0} characters',
                maxlength: 'You have entered more than the maximum {0} characters',
                date: 'Please enter a valid date',
                time: 'Please enter a valid time',
                pattern: 'Please ensure the entered information adheres to this pattern {0}',
                minmodel: 'Should be at least as big as {0}',
                positiveInteger: 'Please enter positive integer number'
            };
            element.bind('keyup', function () {
                console.log('======================');
                console.log(scope);
                console.log(element);
                console.log(attrs);
                console.log(ctrl);
                console.log('------------------------');
                if (ctrl.$dirty && ctrl.$invalid) {
                    errorsList = '';
                    angular.forEach(ctrl.$error, function (value, key) {
                        if (value && errorMessages[key]) { // show only truthy errors
                            errorItem = errorMessages[key];
                            errorItem = errorItem.replace(/\{0\}/g, attrs[key]);
                            errorsList = errorsList + '<li>' + key + ' == ' + errorItem + '</li>';
                        }
                    });
                    elementErrors.html('<ul>' + errorsList + '</ul>')
                    elementErrors.show();
                } else {
                    elementErrors.hide();
                    elementErrors.html('');
                }
            })
        }
    };
}