/*global console, angular */
(function(){
    'use strict';


    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('cameroonCtrl', function ($scope, $http) {

        $scope.survey = {};
        $scope.area = {};
        $scope.country = "Cameroon";
        // get data from bamboo
        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/16ca62fbb8254ae69aa5ec38929d2f8b'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.survey = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/045e22bfdb2143a7b2d51e025a81e010'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.area = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });

        $http({
            method: 'GET',
            url: 'http://bamboo.io/datasets/b23d2ad0efc84379994e9389c87719bb'
        })
            .success(function (data, status, headers, config) {
                // See here, we are now assigning this username
                // to our existing model!
                $scope.summary = data;
            })
            .error(function (data, status, headers, config) {
                // something went wrong :(
            });


    });

    pecsApp.controller('burkinaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token ca87b3231663ca9823a763d19866dfaf0fec5dcc';

        $scope.survey = {};
        $scope.country = "Burkina Faso";
        // get form info from ona.io
        var query = {
            group: 'enqueteur',
            user: 'hkiburkinadata',
            formid: 'mere_enq',
            site: 'ona.io'
        };
        query.name = 'enqueteur';
        $scope.survey = ona.query(query);
        $scope.enqueteurGrid = {data: 'survey',
            columnDefs: [{field:'enqueteur', displayName:'Enqueteur'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = '_submission_time';
        query.name = 'day';
        $scope.byday = ona.query(query);
        $scope.bydayGrid = {data: 'byday',
            columnDefs: [{field:'day', displayName:'Date'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'village';
        query.name = 'village';
        $scope.area = ona.query(query);
        $scope.villageGrid = {data: 'area',
            columnDefs: [{field:'village', displayName:'Village'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);


    pecsApp.controller('guineaCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token e056d923e8a8a5ccb2fd64cd04e9bcefedc27ab0';

        $scope.survey = {};
        $scope.country = "Guinea";
        // get form info from ona.io
        var query = {
            group: 'enqueteur',
            user: 'hkiguineadata',
            formid: 'Meres_gardiennes_15-11-13',
            site: 'ona.io'
        };
        query.name = 'enqueteur';
        $scope.survey = ona.query(query);
        $scope.enqueteurGrid = {data: 'survey',
            columnDefs: [{field:'enqueteur', displayName:'Enqueteur'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = '_submission_time';
        query.name = 'day';
        $scope.byday = ona.query(query);
        $scope.bydayGrid = {data: 'byday',
            columnDefs: [{field:'day', displayName:'Date'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'village';
        query.name = 'village';
        $scope.area = ona.query(query);
        $scope.villageGrid = {data: 'area',
            columnDefs: [{field:'village', displayName:'Village'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'milieu_sous-prefecture';
        query.name = 'milieu_sp';
        $scope.sp = ona.query(query);
        $scope.spGrid = {data: 'sp',
            columnDefs: [{field:'milieu_sp', displayName:'Sous-Prefecture'}, {field:'count', displayName:'# Surveys'}]
        };
    }]);

    pecsApp.controller('akwaibommCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona, ngTableParams) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token 7468abd7e98236c3609e3edb242cd23606304d5e';

        $scope.survey = {};
        $scope.country = "Akwa Ibomm";
        // get form info from ona.io
        var query = {
            group: 'consent_group/date_interview',
            user: 'hkinigeriadata',
            formid: 'caretaker_Akwa_IBOMM',
            site: 'ona.io'
        };
        query.name = 'date_interview';
        $scope.dayofinterview = ona.query(query);
        $scope.dayofinterviewGrid = {data: 'dayofinterview',
            columnDefs: [{field:'date_interview', displayName:'Date of Interview'}, {field:'count', displayName:'# Surveys'}]
        };
        
        var intData = 'dayofinterview';
        
        //Pagination + sort
        $scope.tableParams = new ngTableParams({
	        page: 1, //show first page
	        count: 10 //count per page
	    }, {
	        total: intData.length, // length of data
	        getData: function($defer, params) {
	            // use build-in angular filter
	            var orderedData = params.sorting() ?
	                                $filter('orderBy')(intData, params.orderBy()) :
	                                data;
	            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    }); 

        query.group = 'consent_group/interviewer_name';
        query.name = 'interviewer_name';
        $scope.interviewer = ona.query(query);
        $scope.interviewerGrid = {data: 'interviewer',
            columnDefs: [{field:'interviewer_name', displayName:'Interviewer Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'consent_group/village';
        query.name = 'village';
        $scope.village = ona.query(query);
        $scope.villageGrid = {data: 'village',
            columnDefs: [{field:'village', displayName:'Village Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'consent_group/village_LGA';
        query.name = 'village_lga';
        $scope.villagelga = ona.query(query);
        $scope.villagelgaGrid = {data: 'villagelga',
            columnDefs: [{field:'village_lga', displayName:'Village LGA'}, {field:'count', displayName:'# Surveys'}]
        };
    }]);

    pecsApp.controller('benueCtrl', [ "$scope", "$http", "OnadataService", function ($scope, $http, ona) {

        // enable CORS
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token 7468abd7e98236c3609e3edb242cd23606304d5e';

        $scope.survey = {};
        $scope.country = "Benue";
        // get form info from ona.io
        var query = {
            group: 'consent_group/date_interview',
            user: 'hkinigeriadata',
            formid: 'caretaker_Benue',
            site: 'ona.io'
        };
        query.name = 'date_interview';
        $scope.dayofinterview = ona.query(query);
        $scope.dayofinterviewGrid = {data: 'dayofinterview',
            columnDefs: [{field:'date_interview', displayName:'Date of Interview'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'consent_group/interviewer_name';
        query.name = 'interviewer_name';
        $scope.interviewer = ona.query(query);
        $scope.interviewerGrid = {data: 'interviewer',
            columnDefs: [{field:'interviewer_name', displayName:'Interviewer Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'consent_group/village';
        query.name = 'village';
        $scope.village = ona.query(query);
        $scope.villageGrid = {data: 'village',
            columnDefs: [{field:'village', displayName:'Village Name'}, {field:'count', displayName:'# Surveys'}]
        };

        query.group = 'consent_group/LGA';
        query.name = 'village_lga';
        $scope.villagelga = ona.query(query);
        $scope.villagelgaGrid = {data: 'villagelga',
            columnDefs: [{field:'village_lga', displayName:'Village LGA'}, {field:'count', displayName:'# Surveys'}]
        };

    }]);
})();
