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
        
        $scope.formsData = {
			'Menage_R2_2014_TR' : 22438,
			'Distributeur_R2_2014_TR' : 22729,
			'IT_R2_2014_TR' : 22437,
			'Leaders_Communitaire_R2_2014_TR' : 22439
		};
        
        $scope.loadFormData = function(formid){
            console.log("Key: " + $scope.formsData[formid]);
        };
		
		$scope.isStatsAvailable = function(data){
			if(data === null || data === ''){
				$(".data-section .tab-pane").
            	html('<div class="alert alert-warning">No survey data added yet</div>');
			}
		};
		
		// form defaults
        var query = {
			group: 'today',
			user : 'hkidrcdata',
            form_pk: 22729,
            site : 'ona.io'
        };
		
        var interviewbyDate = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);
		
		$scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'today',
                displayName : 'Date of Interview',
                cellFilter : 'date'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
		
		query.group = 'A6';
        query.name = 'A6';
        var interviewers = ona.query(query);
		//$scope.isStatsAvailable(interviewers);
		
		$scope.interviewer_data = interviewers;
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'A6',
                displayName : 'Name of Interviewer',
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

		query.group = 'aire';
        query.name = 'aire';
        var airesDeSante = ona.query(query);
		//$scope.isStatsAvailable(airesDeSante);
		
		$scope.aires_data = airesDeSante;
        $scope.airesTable = {
            data : 'aires_data',
            columnDefs : [{
                field : 'aire',
                displayName : 'Area (Aire de Sante)',
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
		
		query.group = 'grappe';
        query.name = 'grappe';
        var clusters = ona.query(query);
		//$scope.isStatsAvailable(interviewbyDate);
		
        $scope.cluster_data = clusters;
		$scope.clusterTable = {
            data : 'cluster_data',
            columnDefs : [{
                field : 'grappe',
                displayName : 'Cluster (Village/Quartier avenue /grappes)',
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
    }]);
})();
