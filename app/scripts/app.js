/*global angular $httpProvider console*/
(function(){
    'use strict';

    angular.module('hkipecsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngGrid'
        ])
        .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/burkina', {
                    templateUrl: 'views/main.html',
                    controller: 'burkinaCtrl'
                })
                .otherwise({
                    redirectTo: 'burkina'
                });
        }]);
})();
