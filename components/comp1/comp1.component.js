angular.
module('compOne').
component('compOne', {
    templateUrl: 'components/comp1/comp1.template.html',
    controller: [
        '$timeout',
        '$http',
        '$scope',
        function CompOneController($timeout, $http, $scope) {
            $scope.msg = "This is component one";
            $scope.parameter = "compone";
            $scope.test = true;
            $timeout(function () {
                $scope.test = false;
            }, 3000);
        }
    ]
})