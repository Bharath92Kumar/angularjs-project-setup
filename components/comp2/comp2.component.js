angular.
module('compTwo').
component('compTwo', {
    templateUrl: 'components/comp2/comp2.template.html',
    controller: [
        '$routeParams',
        '$http',
        '$timeout',
        '$scope',
        function CompTwoController($routeParams, $http, $timeout, $scope) {
            $scope.msg = "This is component two";
            $scope.para = $routeParams.para;
            $scope.parameter = "comptwo"
            $scope.test = true;
            var preloader = $timeout(function () {
                $scope.test = false;
            }, 3000);
            $scope.$on('$destroy', function () {
                if (preloader) {
                    $timeout.cancel(preloader);
                }
            })
        }
    ]
})