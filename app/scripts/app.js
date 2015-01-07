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
                .when('/drc', {
                    templateUrl: 'views/drc.html',
                    controller: 'congoCtrl'
                })
                .otherwise({
                    redirectTo: '/drc'
                });
        }]);
})();
