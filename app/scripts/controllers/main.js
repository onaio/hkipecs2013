/*global console, angular */
(function() {'use strict';

    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('burkinaCtrl', ["$scope", "$http", "$log", "OnadataService",
    function($scope, $http, $log, ona) {
        $scope.$log = $log;
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token ca87b3231663ca9823a763d19866dfaf0fec5dcc';

        $scope.survey = {};
        $scope.country = "Burkina Faso";
        $scope.date_label = 'Date d’aujourd’hui';
        $scope.village_label =  'Village';
        $scope.interviewer_label = 'Nom et prénom de l’enquêteur';

        var query = {
            group: 'date',
            user: 'hkiburkinadata',
            formid: 'mere_enq_Est_form',
            site: 'ona.io'
        };
        query.name = 'date_interview';
        var interviewbyDate = ona.query(query);
        $scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'date_interview',
                displayName : $scope.date_label,
                cellFilter : 'date'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['date_interview'],
                directions : ['asc']
            }
        };

        query.group = 'enqueteur';
        query.name = 'interviewer_name';
        $scope.interviewer_data = ona.query(query);
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'interviewer_name',
                displayName : $scope.interviewer_label
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['interviewer_name'],
                directions : ['asc']
            }
        };

        query.group = 'village';
        query.name = 'village';
        $scope.village_data = ona.query(query);
        $scope.villageTable = {
            data : 'village_data',
            columnDefs : [{
                field : 'village',
                displayName : $scope.village_label
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['village'],
                directions : ['asc']
            }
        };
    }]);
})();
