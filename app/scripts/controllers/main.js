/*global console, angular */
(function() {'use strict';

    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('mozambiqueCtrl', ["$scope", "$http", "$log", "OnadataService",
    function($scope, $http, $log, ona) {
        $scope.$log = $log;
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token 65404ec537cb16abf8597d6696f35389bd5c5672';

        $scope.survey = {};
        $scope.country = "Burkina Faso";
        $scope.date_label = 'Data da entrevista';
        $scope.village_label =  'Bairro';
        $scope.interviewer_label = 'Nome do entrevistador';

        var query = {
            group: 'start_survey/data',
            user: 'hkimozambiquedata',
            formid: 'Maes_2014',
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

        query.group = 'start_survey/entrevista';
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

        query.group = 'start_survey/bairro';
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
