(function() {

  'use strict';
  angular
  .module('app', [])

  .controller('AppController', ['$scope', function($scope) {

    $scope.username = 'Ego';
	$scope.changeUsername = function(username) {
	$scope.username = username;
	};

	$scope.usersArray = [
	  ['BB', 'King'],
	  ['Ray', 'Charles'],
	  ['Muddy', 'Waters'],
	  ['Lightnin', 'Hopkins'],
	  ['Howlin', 'Wolf']
	];

$scope.randomUsernMW = 'random user';

$scope.randomUsernMW2 = function() {
  alert($scope.randomUsernMW);
};


$scope.textClass = '';

$scope.changeTextClass = function(name) {
$scope.textClass = name;
}


  }]);

})();