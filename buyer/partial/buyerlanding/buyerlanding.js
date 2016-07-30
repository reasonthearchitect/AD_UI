angular.module('buyer').controller('BuyerlandingCtrl',function($scope, $http){

	$scope.carlist = [];

	$http({
  		method: 'GET',
  		url: '/api/cars'
	}).then(function successCallback(response) {
		$scope.carlist = response.data;
		console.log('Success!!!!' + JSON.stringify($scope.carlist));

    	// this callback will be called asynchronously
    	// when the response is available
  	}, function errorCallback(response) {
  		console.log('Failure??????');
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  	});
});