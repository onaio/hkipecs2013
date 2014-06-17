/*global console, angular */
(function(){
    'use strict';


    var pecsApp = angular.module('hkipecsApp');


    pecsApp.controller('nigeriaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token e4ead99d97894a70c2222fcceec18b53600a5da4';

        $scope.survey = {};
        $scope.country = "Nigeria";

        var query = {
            group: 'interview_date',
            user: 'hkmnchwmonitoring1234',
            formid: 'PECS_Caregiver_Questionnaire_2_final_revision',
            site: 'ona.io'
        };
        query.name = 'date_interview';
        $scope.date_interview_data = ona.query(query);

        query.group = 'interviewer_name';
        query.name = 'interviewer_name';
        $scope.interviewer_data = ona.query(query);

        query.group = 'village';
        query.name = 'village';
        $scope.village_data = ona.query(query);

        query.group = 'ward';
        query.name = 'ward';
        $scope.wards = ona.query(query);
    }]);

})();
