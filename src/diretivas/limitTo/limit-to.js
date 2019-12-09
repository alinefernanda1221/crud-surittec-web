import angular from 'angular';

export default function limitTo() {
    return {
        restrict: "A",

        link: function (scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function (e) {
                if (this.value.length == limit) e.preventDefault();
            });

            angular.element(elem).on("keydown", function () {
                if (event.keyCode > 47 && event.keyCode < 127) {
                    if (this.value.length == limit)
                        return false;
                }
            });
        }
    }
}
