angular.module('buyer').controller('BuyerlandingCtrl',function($scope,  $stateParams, $http, ngstomp, ngToast){

	$scope.carlist = [];

  function loadList() {


      $http({
          method: 'GET',
          url: '/watchingcars/getwatchlist/' + $stateParams.id
      }).then(function successCallback(response) {

        console.log( "The watchlist: " + JSON.stringify(response.data) );
        }, function errorCallback(response) {
          console.log('Failure??????');
        });


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

  }

  loadList();
  function addToCarList(message) {

  	ngToast.create("A new car! " + message.body.year + " " + message.body.make + " " + message.body.model);
      $scope.carlist.unshift(message.body);
  };

  $scope.addToWatchList = function(vin) {

    $http({
          method: 'POST',
          url: "/watchingcars/for/" + $stateParams.id + "/carvin/" + vin
      }).then(function successCallback(response) {
          console.log("Added to the watch list!!!!!!!!!");
        }, function errorCallback(response) {
          console.log('Failure??????');
        });
  };

});