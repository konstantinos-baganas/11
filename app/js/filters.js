'use strict';

/* Filters */

angular.module('eleven.filters', []).
  filter('interpolate', ['version', function(localvar) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, localvar);
    }
  }]);