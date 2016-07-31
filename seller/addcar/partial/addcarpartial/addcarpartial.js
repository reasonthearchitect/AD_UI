angular.module('addcar').controller('AddcarpartialCtrl',function($scope, $stateParams, $http){

	$scope.newcar = {"seller": $stateParams.id};

	$scope.clear = function() {
		$scope.newcar = {"seller": $stateParams.id};
	};

	$scope.addcar = function() {

		$http({
  			method: 'POST',
  			url: '/addcar/',
  			data: $scope.newcar
		}).then(function successCallback(response) {
    		$scope.clear();
  		}, function errorCallback(response) {
    		console.log(JSON.stringify(response));
    	});
	};
});