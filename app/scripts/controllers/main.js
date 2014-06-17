/*global console, angular */
(function(){
    'use strict';


    var pecsApp = angular.module('hkipecsApp');


    pecsApp.controller('burkinaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token ca87b3231663ca9823a763d19866dfaf0fec5dcc';

        $scope.survey = {};
        $scope.country = "Burkina Faso";

        var query = {
            group: 'date',
            user: 'hkiburkinadata',
            formid: 'mere_enq_Est_form',
            site: 'ona.io'
        };
        query.name = 'date_interview';
        $scope.date_interview_data = ona.query(query);

        query.group = 'enqueteur';
        query.name = 'interviewer_name';
        $scope.interviewer_data = ona.query(query);

        query.group = 'village';
        query.name = 'village';
        $scope.village_data = ona.query(query);

    }]);

})();
