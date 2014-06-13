/*global angular $httpProvider console*/
(function(){
    'use strict';

    angular.module('hkipecsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngGrid',
            'ngTable'
        ])
        .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
            $routeProvider
                .when('/cameroon', {
                    templateUrl: 'views/cameroon.html',
                    controller: 'cameroonCtrl'
                })
                .when('/burkina', {
                    templateUrl: 'views/burkina.html',
                    controller: 'burkinaCtrl'
                })
                .when('/guinea', {
                    templateUrl: 'views/guinea.html',
                    controller: 'guineaCtrl'
                })
                .when('/akwaibomm', {
                    templateUrl: 'views/nigeria.html',
                    controller: 'akwaibommCtrl'
                })
                .when('/benue', {
                    templateUrl: 'views/nigeria.html',
                    controller: 'benueCtrl'
                })
                .otherwise({
                    redirectTo: '/akwaibomm'
                });
        }]);
})();

/*configure active nav states*/
var nav_lnk = $("#ctr_nav li");
nav_lnk.click(function(){
  nav_lnk.removeClass("active");
  $(this).addClass("active");
});
