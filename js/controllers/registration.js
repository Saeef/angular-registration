	myApp.controller('RegistrationController',['$scope', function($scope) {

	$scope.login = function() {
		$scope.message = "Welcome " + $scope.user.email;
	};

	$scope.register = function() {
		$scope.message = "You are now registered " + $scope.user.firstname;
	};


	}]);







