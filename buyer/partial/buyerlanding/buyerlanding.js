angular.module('buyer').controller('BuyerlandingCtrl',function($scope, $http, ngstomp){

	$scope.carlist = [];

	$http({
  		method: 'GET',
  		url: '/api/cars'
	}).then(function successCallback(response) {
		$scope.carlist = response.data;
  	}, function errorCallback(response) {
  		console.log('Failure??????');
  	});

  	ngstomp
        .subscribeTo('/topic/newcar')
            .callback(addToCarList)
            .withBodyInJson()
            .bindTo($scope)
        .connect();

    function addToCarList(message) {

    	console.log("GOT A NEW CAR!!!!!!!!!!!!!!! " );

        $scope.carlist.push(message.body);
    }
});