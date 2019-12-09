import angular from 'angular';

export default function maskChange() {
    return {
        restrict: 'A',
        scope: {
            maskChange: "=",
        },
        require: '?ngModel',
        link: function (scope, elem, attrs, ngModel) {

            var novoTel, flag = false, val;

            elem.off('keyup');
            elem.on('keyup', function (ev) {

                if (/^\d+$/.test(ev.key) || ev.key == 'Backspace' || ev.key == 'Delete') {

                    novoTel = String(ngModel.$viewValue).replace(/[\(\)\_\-/\s]/g, '')

                    if (novoTel.length == 10 && !flag) {
                        flag = true;
                        scope.maskChange = "(99) 9999-9999";
                        scope.$apply();
                    } else if (novoTel.length == 10 && flag) {
                        flag = false;
                        scope.maskChange = "(99) 9?9999-9999";

                        scope.$apply();
                        ngModel.$viewValue += ev.key
                        ngModel.$render();

                    } else if (novoTel.length < 10) {
                        flag = false;
                    }
                }
            })
        }

    };
}
