/*global angular */
(function(){
    'use strict';

    angular.module('hkipecsApp')
      .service('OnadataService', ["$resource", function Onadataservice($resource) {
          return $resource(
              'https://:site/api/v1/stats/submissions/:form_pk',
              {user: 'demouser', form_pk: '123', site: 'ona.io'},
              {query: {method: 'GET', params: {group: 'enqueteur'}, withCredentials: true, isArray: true}}
          );
      }]);
})();
