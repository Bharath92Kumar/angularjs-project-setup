angular.
module('compThree').
component('compThree', {
    templateUrl: 'components/comp3/comp3.template.html',
    controller: [
        '$routeParams',
        '$http',
        '$timeout',
        '$scope',
        function CompThreeController($routeParams, $http, $timeout, $scope) {
            $scope.msg = "This is component three";
            $scope.para = $routeParams.para;
            $scope.test = true;
            $timeout(function () {
                $scope.test = false;
            }, 3000);
        }
    ]
})