/*global angular $httpProvider console*/
(function(){
    'use strict';

    angular.module('hkipecsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'siTable'
        ])
        .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/burkina', {
                    templateUrl: 'views/burkina.html',
                    controller: 'burkinaCtrl'
                })
                .otherwise({
                    redirectTo: 'burkina'
                });
        }]);
})();
