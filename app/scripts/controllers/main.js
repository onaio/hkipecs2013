/*global console, angular */
(function() {'use strict';

    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('nigeriaCtrl', ["$scope", "$http", "$log", "$q", "OnadataService",
    function($scope, $http, $log, $q, ona) {
        $scope.$log = $log;

        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token e4ead99d97894a70c2222fcceec18b53600a5da4';

        $scope.survey = {};
        $scope.country = "Nigeria";
        $scope.date_label = 'Date of Interview';
        $scope.interviewer_label = 'Interviewer Last Name and Initials';
        $scope.village_label = 'Village or Community';
        $scope.ward_label = 'Ward';

        var query = {
            group : 'given_consent/interview_date',
            user : 'hkmnchwmonitoring1234',
            formid : 'PECS_Caregiver_Questionnaire_2',
            form_pk: '2845',
            site : 'ona.io'
        };
        query.name = 'date_interview';
        var interviewbyDate = ona.query(query);
        
        if(interviewbyDate == null){
            $(".data-section .tab-pane").
            html('<div class="alert alert-warning">No survey data added yet</div>');
        }
        
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

        query.group = 'given_consent/name_interviewer';
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

        query.group = 'given_consent/ward';
        query.name = 'ward';
        $scope.ward_data = ona.query(query);
        $scope.wardTable = {
            data : 'ward_data',
            columnDefs : [{
                field : 'ward',
                displayName : $scope.ward_label
            }, {
                field : 'count',
                displayName : 'No. of Surveys'
            }],
            sortInfo : {
                fields : ['ward'],
                directions : ['asc']
            }
        };

        var villages = ['abakaliki', 'afikpo_north', 'afikpo_south', 'ebonyi',
            'ezza_north', 'ezza_south', 'ikwo', 'ishielu', 'ivo', 'izzi',
            'ohaozara', 'ohaukwu', 'onicha'];
        var all_villages = [];
        villages.map(function(village){
            query.group = 'given_consent/' + village;
            query.name = 'village';

            var vdata = ona.query(query);
            vdata.$promise.then(function(data){
                console.log("loaded " + village);
                console.log(vdata);
            });
            all_villages.push(vdata.$promise);
        });
        
        var all_data = function(){
            var deferred = $q.defer();

            $q.all(all_villages).then(function(results){
                console.log("all loaded");
                var rec = [], i = 0, c = 0;
                for(; i < results.length; i++){
                    var value = results[i];
                    for(c = 0; c < value.length; c++){
//                        console.log(value[c].village + ": "+value[c].count);
                        if(value[c].village != null){
                            rec.push(value[c]);
                        }
                    }
                }
                $scope.village_data = rec;
                deferred.resolve("Hello");
            });
            return deferred.promise;
        };
        $scope.pulldata = all_data();

    }]);
})();
