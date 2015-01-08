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
			22438: 'Menage_R2_2014_TR',
			22436: 'Distributeur_R2_2014_TR',
			22437 : 'IT_R2_2014_TR',
			22439 : 'Leaders_Communitaire_R2_2014_TR'
		};
        
        $scope.loadFormData = function(formpk){
            console.log("Key: " + $scope.formsData[formpk]);
        };
		
        var query = {
           
			user : 'hkidrcdata',
            formid : 'Distributeur_R2_2014_TR2',
            form_pk: 22729,
            site : 'ona.io'
        };
		
        query.name = 'A6';
        var interviewbyDate = ona.query(query);

        if(interviewbyDate === null){
            $(".data-section .tab-pane").
            html('<div class="alert alert-warning">No survey data added yet</div>');
        }

        $scope.drc_survey_data = interviewbyDate;
        $scope.surveyTable = {
            data : 'drc_survey_data',
            columnDefs : [{
                field : 'today',
                displayName : 'Date of Interview',
                cellFilter : 'date'
            }, {
                field : 'A6',
                displayName : 'Name of Interviewer (Nom du Enqueteur)'
            }, {
                field : 'aire',
                displayName : 'Area (Aire de Sante)'
            }, {
                field : 'grappe',
                displayName : 'Cluster (Village/Quartier avenue/grappes)'
            }]
        };
    }]);
})();
