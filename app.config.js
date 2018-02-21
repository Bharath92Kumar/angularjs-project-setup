angular.module('myApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/home', {
            template: '<comp-one></comp-one>'
        }).
        when('/:para/comptwo', {
            template: '<comp-two></comp-two>'
        }).
        when('/:para/compthree', {
            template: '<comp-three></comp-three>'
        }).otherwise('/home');
    }
]);