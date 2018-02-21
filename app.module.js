var app = angular.module('myApp', [
    'ngRoute',
    'compOne',
    'compTwo',
    'compThree'
]);
app.controller('myCtrl', function ($timeout, $scope) {});