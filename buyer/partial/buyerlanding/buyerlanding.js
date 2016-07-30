angular.module('buyer').controller('BuyerlandingCtrl',function($scope, $http, ngstomp, ngToast){

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

    	ngToast.create("A new car! " + message.body.year + " " + message.body.make + " " + message.body.model);
        $scope.carlist.unshift(message.body);
    }
});