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
                .when('/niger', {
                    templateUrl: 'views/niger.html',
                    controller: 'nigerCtrl'
                })
                .otherwise({
                    redirectTo: '/niger'
                });
        }]);
})();
