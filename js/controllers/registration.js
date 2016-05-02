myApp.controller('RegistrationController', ['$scope', function($scope) {
	$scope.welcome = "Register already motherfucka!";

	$scope.register = function() {
		$scope.message = "thanks for registering " + $scope.firstname + " " + $scope.lastname;
	}

}]);