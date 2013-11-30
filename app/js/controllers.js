'use strict';

/* Controllers */

angular.module('eleven.controllers', [])
  .controller('11Ctrl', ['$scope', '$timeout', '$position', function($scope, $timeout, $position) {

    $scope.imageNumber = 1;
    $scope.$watch('imageNumber', function() {
    	if ($scope.imageNumber < 11)
			$timeout(function() {
				$scope.imageNumber++; 
	  		}, 2000);
		else 
			$scope.imageNumber = 1;
    });

    $scope.dots = [1,2,3,4,5];

////////// ANIMATIONS //////////

//1
    $scope.whenItsTrue = false;
//2
    $scope.whenItsTrue2 = false;
    $scope.transClass = '';
//3 
    $scope.imageArray = [1];

    $scope.insertPic = function () {
        $scope.imageArray.push($scope.imageArray.length + 1);
        console.log($scope.imageArray);
    };

    $scope.removePic = function () {
        $scope.imageArray.splice(2,1);
                console.log($scope.imageArray);
    };

////////// VIDEOS //////////

    $scope.videoWidth = '';
    $scope.videoHeight = '';

  }]);
