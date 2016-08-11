angular.module('addcar').controller('AddcarpartialCtrl',function($scope, $stateParams, $http, $location){

	$scope.newcar = {"seller": $stateParams.id};

	$scope.required = true;

	$scope.clear = function() {
		$location.path('/sellerslist/' + $stateParams.id);
	};

	$scope.addcar = function() {
		$http({
  			method: 'POST',
  			url: '/addcar/',
  			data: $scope.newcar
		}).then(function successCallback(response) {
			$location.path('/sellerslist/' + $stateParams.id)
  		}, function errorCallback(response) {
    		console.log(JSON.stringify(response));
    	});
	};
});