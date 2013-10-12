'use strict';


// Declare 'eleven' level module which depends on filters, and services
angular.module('eleven', ['eleven.filters', 'eleven.services', 'eleven.directives', 'eleven.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/eleven1.html', controller: 'eleven1Ctrl'});
    $routeProvider.when('/view2', {templateUrl: 'partials/eleven2.html', controller: 'eleven2Ctrl'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
