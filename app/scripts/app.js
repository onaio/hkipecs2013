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
                .when('/mere_enq_est', {
                    templateUrl: 'views/main.html',
                    controller: 'estCtrl'
                })
                .when('/mere_enq_sahel', {
                    templateUrl: 'views/main.html',
                    controller: 'sahelCtrl'
                })
                .otherwise({
                    redirectTo: 'est'
                });
        }]);
})();
