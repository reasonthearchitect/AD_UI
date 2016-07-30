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
    		console.log("Success");
    		console.log(JSON.stringify(response));
  			
  			$scope.clear();
  		}, function errorCallback(response) {
    		console.log("ERROR????????????");
    		console.log(JSON.stringify(response));
    	});
		
	}
});