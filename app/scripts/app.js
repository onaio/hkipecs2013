/*global angular $httpProvider console*/
(function(){
    'use strict';

    angular.module('hkipecsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'siTable',
            'angularCharts'
        ])
        .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/nigeria', {
                    templateUrl: 'views/nigeria.html',
                    controller: 'nigeriaCtrl'
                })
                .when('/benue', {
                    templateUrl: 'views/nigeria.html',
                    controller: 'nigeriaCtrl'
                })
                .otherwise({
                    redirectTo: '/nigeria'
                });
        }]);
})();
