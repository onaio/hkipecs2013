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
                .when('/mozambique', {
                    templateUrl: 'views/main.html',
                    controller: 'mozambiqueCtrl'
                })
                .otherwise({
                    redirectTo: 'mozambique'
                });
        }]);
})();
