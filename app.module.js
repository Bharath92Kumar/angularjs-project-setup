var app = angular.module('myApp', [
    'ngRoute',
    'compOne',
    'compTwo',
    'compThree'
]);
app.controller('myCtrl', function ($timeout, $scope) {
    $scope.test = false;
    // $timeout(function () {
    //     $scope.test = false;
    // }, 3000);
});