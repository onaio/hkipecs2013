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
        $scope.current_form = "Distributeur_R2_2014_FINAL";

        $scope.isStatsAvailable = function(data){
            if(data === null || data === ''){
                $(".data-section .tab-pane").
                html('<div class="alert alert-warning">No survey data added yet</div>');
            }
        };

        // form defaults
        var query = {
            group: 'Date',
            user : 'hkidrcdata',
            form_pk: 23624,
            site : 'ona.io'
        };

        var interviewbyDate = ona.query(query);

        $scope.date_interview_data = [];
        $scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'Date',
                displayName : 'Date of Interview',
                cellFilter : 'date'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'enum_name';
        query.name = 'enum_name';
        var interviewers = ona.query(query);
        //$scope.isStatsAvailable(interviewers);

        $scope.interviewer_data = [];
        $scope.interviewer_data = interviewers;
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'enum_name',
                displayName : 'Name of Interviewer'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'aire';
        query.name = 'aire';
        var airesDeSante = ona.query(query);
        //$scope.isStatsAvailable(airesDeSante);

        $scope.aires_data = [];
        $scope.aires_data = airesDeSante;
        $scope.airesTable = {
            data : 'aires_data',
            columnDefs : [{
                field : 'aire',
                displayName : 'Area (Aire de Sante)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'grappe';
        query.name = 'grappe';
        var clusters = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.cluster_data = [];
        $scope.cluster_data = clusters;
        $scope.clusterTable = {
            data : 'cluster_data',
            columnDefs : [{
                field : 'grappe',
                displayName : 'Cluster (Village/Quartier avenue /grappes)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'A7Presentation';
        query.name = 'A7Presentation';
        var a7 = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.a7_data = [];
        $scope.a7_data = a7;
        $scope.a7Table = {
            data : 'a7_data',
            columnDefs : [{
                field : 'A7Presentation',
                displayName : 'numero de menage (A7)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
    }]);


    /*
     * Menage_R2_2014
     */
    pecsApp.controller('menageCtrl', ["$scope", "$http", "$log", "OnadataService",
    function($scope, $http, $log, ona) {
        $scope.$log = $log;

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token a636902e21215d96989879e1f1bfd3194eaff951';

        $scope.survey = {};
        $scope.country = "DRC";
        $scope.current_form = "Menage_R2_2014_FINAL";

        $scope.isStatsAvailable = function(data){
            if(data === null || data === ''){
                $(".data-section .tab-pane").
                html('<div class="alert alert-warning">No survey data added yet</div>');
            }
        };

        // form defaults
        var query = {
            group: 'Date',
            user : 'hkidrcdata',
            form_pk: 23616,
            site : 'ona.io'
        };

        var interviewbyDate = ona.query(query);

        $scope.date_interview_data = [];
        $scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'Date',
                displayName : 'Date of Interview',
                cellFilter : 'date'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'enum_name';
        query.name = 'enum_name';
        var interviewers = ona.query(query);
        //$scope.isStatsAvailable(interviewers);

        $scope.interviewer_data = [];
        $scope.interviewer_data = interviewers;
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'enum_name',
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

        $scope.aires_data = [];
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

        $scope.cluster_data = [];
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

        query.group = 'A7';
        query.name = 'A7';
        var a7 = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.a7_data = [];
        $scope.a7_data = a7;
        $scope.a7Table = {
            data : 'a7_data',
            columnDefs : [{
                field : 'A7',
                displayName : 'numero de menage (A7)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
    }]);



    /*
     * IT_R2_2014
     */
    pecsApp.controller('itCtrl', ["$scope", "$http", "$log", "OnadataService",
    function($scope, $http, $log, ona) {
        $scope.$log = $log;

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token a636902e21215d96989879e1f1bfd3194eaff951';

        $scope.survey = {};
        $scope.country = "DRC";
        $scope.current_form = "IT_R2_2014_FINAL";

        $scope.isStatsAvailable = function(data){
            if(data === null || data === ''){
                $(".data-section .tab-pane").
                html('<div class="alert alert-warning">No survey data added yet</div>');
            }
        };

        // form defaults
        var query = {
            group: 'Date',
            user : 'hkidrcdata',
            form_pk: 23620,
            site : 'ona.io'
        };

        var interviewbyDate = ona.query(query);

        $scope.date_interview_data = [];
        $scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'Date',
                displayName : 'Date of Interview',
                cellFilter : 'date'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'enum_name';
        query.name = 'enum_name';
        var interviewers = ona.query(query);
        //$scope.isStatsAvailable(interviewers);

        $scope.interviewer_data = [];
        $scope.interviewer_data = interviewers;
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'enum_name',
                displayName : 'Name of Interviewer'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'aire';
        query.name = 'aire';
        var airesDeSante = ona.query(query);
        //$scope.isStatsAvailable(airesDeSante);

        $scope.aires_data = [];
        $scope.aires_data = airesDeSante;
        $scope.airesTable = {
            data : 'aires_data',
            columnDefs : [{
                field : 'aire',
                displayName : 'Area (Aire de Sante)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'grappe';
        query.name = 'grappe';
        var clusters = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.cluster_data = [];
        $scope.cluster_data = clusters;
        $scope.clusterTable = {
            data : 'cluster_data',
            columnDefs : [{
                field : 'grappe',
                displayName : 'Cluster (Village/Quartier avenue /grappes)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'A7';
        query.name = 'A7';
        var a7 = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.a7_data = [];
        $scope.a7_data = a7;
        $scope.a7Table = {
            data : 'a7_data',
            columnDefs : [{
                field : 'A7',
                displayName : 'numero de menage (A7)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
    }]);



    /*
     * Leaders_Communitaire_R2_2014
     */
    pecsApp.controller('leadersCtrl', ["$scope", "$http", "$log", "OnadataService",
    function($scope, $http, $log, ona) {
        $scope.$log = $log;

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token a636902e21215d96989879e1f1bfd3194eaff951';

        $scope.survey = {};
        $scope.country = "DRC";
        $scope.current_form = "Leaders_Communitaire_R2_2014_FINAL";

        $scope.isStatsAvailable = function(data){
            if(data === null || data === ''){
                $(".data-section .tab-pane").
                html('<div class="alert alert-warning">No survey data added yet</div>');
            }
        };

        // form defaults
        var query = {
            group: 'Date',
            user : 'hkidrcdata',
            form_pk: 23618,
            site : 'ona.io'
        };

        var interviewbyDate = ona.query(query);

        $scope.date_interview_data = [];
        $scope.date_interview_data = interviewbyDate;
        $scope.interviewDateTable = {
            data : 'date_interview_data',
            columnDefs : [{
                field : 'Date',
                displayName : 'Date of Interview',
                cellFilter : 'date'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'enum_name';
        query.name = 'enum_name';
        var interviewers = ona.query(query);
        //$scope.isStatsAvailable(interviewers);

        $scope.interviewer_data = [];
        $scope.interviewer_data = interviewers;
        $scope.interviewerTable = {
            data : 'interviewer_data',
            columnDefs : [{
                field : 'enum_name',
                displayName : 'Name of Interviewer'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'aire';
        query.name = 'aire';
        var airesDeSante = ona.query(query);
        //$scope.isStatsAvailable(airesDeSante);

        $scope.aires_data = [];
        $scope.aires_data = airesDeSante;
        $scope.airesTable = {
            data : 'aires_data',
            columnDefs : [{
                field : 'aire',
                displayName : 'Area (Aire de Sante)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'grappe';
        query.name = 'grappe';
        var clusters = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.cluster_data = [];
        $scope.cluster_data = clusters;
        $scope.clusterTable = {
            data : 'cluster_data',
            columnDefs : [{
                field : 'grappe',
                displayName : 'Cluster (Village/Quartier avenue /grappes)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };

        query.group = 'A7';
        query.name = 'A7';
        var a7 = ona.query(query);
        //$scope.isStatsAvailable(interviewbyDate);

        $scope.a7_data = [];
        $scope.a7_data = a7;
        $scope.a7Table = {
            data : 'a7_data',
            columnDefs : [{
                field : 'A7',
                displayName : 'numero de menage (A7)'
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }]
        };
    }]);
})();
