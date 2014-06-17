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
                .when('/nigeria', {
                    templateUrl: 'views/nigeria.html',
                    controller: 'nigeriaCtrl'
                })
                .otherwise({
                    redirectTo: '/nigeria'
                });
        }]);
})();

$(document).ready(function(){
	/*configure active nav states*/
	var nav_lnk = $("#ctr_nav li");
	nav_lnk.click(function(){
	  nav_lnk.removeClass("active");
	  $(this).addClass("active");
	});
});
