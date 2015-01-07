/*global console, angular */
(function() {'use strict';

    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('congoCtrl', ["$scope", "$http", "$log", "OnadataService",
    function($scope, $http, $log, ona) {
        $scope.$log = $log;

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token a636902e21215d96989879e1f1bfd3194eaff951';

        $scope.survey = {};
        $scope.country = "DRC";
		
		// forms_pk & formid
		var formsData = {
			22438: 'Menage_R2_2014_TR',
			22436: 'Distributeur_R2_2014_TR',
			22437 : 'IT_R2_2014_TR',
			22439 : 'Leaders_Communitaire_R2_2014_TR'
		};
		
        var query = {
            group : 'consent_group/date_interview',
            user : 'hkidrcdata',
            formid : 'Menage_R2_2014_TR',
            form_pk: 22438,
            site : 'ona.io'
        };
		
        query.name = 'date_interview';
        var interviewbyDate = ona.query(query);

        if(interviewbyDate === null){
            $(".data-section .tab-pane").
            html('<div class="alert alert-warning">No survey data added yet</div>');
        }

        $scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'date_interview',
                displayName : 'Date of Interview',
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

        query.group = 'consent_group/interviewer_name';
        query.name = 'interviewer_name';
        $scope.interviewer_data = ona.query(query);
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'interviewer_name',
                displayName : 'Interviewer'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['interviewer_name'],
                directions : ['asc']
            }
        };

        query.group = 'consent_group/village';
        query.name = 'village';
        $scope.village_data = ona.query(query);
        $scope.villageTable = {
            data : 'village_data',
            columnDefs : [{
                field : 'village',
                displayName : 'Village'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['village'],
                directions : ['asc']
            }
        };

        query.group = 'consent_group/village_LGA';
        query.name = 'ward';
        $scope.wards = ona.query(query);
        $scope.wardTable = {
            data : 'wards',
            columnDefs : [{
                field : 'ward',
                displayName : 'Ward'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['ward'],
                directions : ['asc']
            }
        };
    }]);
})();
