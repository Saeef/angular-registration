myApp.controller('LoginController', ["$scope", function($scope) {

	$scope.welcome = "Hello bastards";

	$scope.login = function() {
		$scope.message = "Congrats you now in " + $scope.user.email;
	}

}]);