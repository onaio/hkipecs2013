/*global console, angular */
(function(){
    'use strict';

    var pecsApp = angular.module('hkipecsApp');

    pecsApp.controller('nigeriaCtrl', [ "$scope", "$http", "$log", "OnadataService", function ($scope, $http, $log, ona) {
		$scope.$log = $log;
		
        $http.defaults.useXDomain = true;
        delete $http.defaults.headers.common['X-Requested-With'];
        // onadata api token
        $http.defaults.headers.common.Authorization = 'Token 7468abd7e98236c3609e3edb242cd23606304d5e';

        $scope.survey = {};
        $scope.country = "Nigeria";
		var setChartData = function(data){
	        for(var lp=0; lp<data.length; lp++){
	        	intDays.push(data[lp].date_interview);
	        	intCount.push(data[lp].count);
	        }
	        
	        //Chart config
	        $scope.config = {
			    title: 'Survey by Interview date',
				tooltips: true,
			    labels: true,
			    mouseover: function() {},
			    mouseout: function() {},
			    click: function() {},
			    legend: {
			      display: true,
			      position: 'right'
			    }
			  };
			
			  $scope.data = {
			    series: ["Date of Interview"],
			    data: [
				    {
				      x: intDays,
				      y: intCount //[0,1,2,3,4,5]
				    }
			    ]
			  };
		};
        var query = {
            group: 'consent_group/date_interview',
            user: 'hkinigeriadata',
            formid: 'caretaker_Akwa_IBOMM',
            site: 'ona.io'
        };
        query.name = 'date_interview';
        var interviewbyDate = ona.query(query, setChartData);
        $scope.date_interview_data = interviewbyDate;
        var intDays = [];
        var intCount = [];
        
        console.log("Data: "+interviewbyDate);
        
        
        query.group = 'consent_group/interviewer_name';
        query.name = 'interviewer_name';
        $scope.interviewer_data = ona.query(query);

        query.group = 'consent_group/village';
        query.name = 'village';
        $scope.village_data = ona.query(query);

        query.group = 'consent_group/village_LGA';
        query.name = 'ward';
        $scope.wards = ona.query(query);
    }]);
})();
