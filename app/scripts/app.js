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
                .when('/Menage', {
                    templateUrl: 'views/drc.html',
                    controller: 'menageCtrl'
                })
                .when('/IT', {
                    templateUrl: 'views/drc.html',
                    controller: 'itCtrl'
                })
                .when('/Leaders_Communitaire', {
                    templateUrl: 'views/drc.html',
                    controller: 'leadersCtrl'
                })
                .otherwise({
                    redirectTo: '/drc'
                });
        }]);
})();
