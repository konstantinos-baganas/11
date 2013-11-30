'use strict';

/* Directives */
angular.module('eleven.directives', [])
.directive('video', ['$timeout', function ($timeout) {
	return {
		restrict: 'E',
		link: function (scope, element) {

			$timeout(function(){
				scope.videoWidth = element[0].videoWidth;
				scope.videoHeight = element[0].videoHeight;
			}, 1000);

		}
	};
}])
