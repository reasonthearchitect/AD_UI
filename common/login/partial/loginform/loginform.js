angular.module('login').controller('LoginformCtrl',function($scope, $location){

	$scope.username = '';

	$scope.buyerlogin = function() {
		$location.path('/buyerlanding/' + $scope.username);
	};


	$scope.sellerlogin = function() {
		$location.path('/addcar/' + $scope.username);
	}  


});