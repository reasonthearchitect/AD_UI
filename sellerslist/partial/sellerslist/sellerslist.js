angular.module('sellerslist').controller('SellerslistCtrl',function($scope, $stateParams, $log, $http, ngstomp, ngToast){

	$scope.carlist = [];
	$scope.id = $stateParams.id;

	function loadList() {

      $http({
          method: 'GET',
          url: '/filterSellers/for/' + $stateParams.id
      }).then(function successCallback(response) {
        $scope.carlist        = response.data.cars;
        $scope.highestBidMap  = response.data.highestBidMap; 
        //console.log(JSON.stringify(response.data));
      }, function errorCallback(response) {
        console.log('Failure??????');
      });
  }; 
  loadList();

  ngstomp
          .subscribeTo('/topic/newbid')
              .callback(newbid)
              .withBodyInJson()
              .bindTo($scope)
          .connect();

  function newbid(message) {
    var newbidvin = message.body.vin;
    
    for (var i = 0; i < $scope.carlist.length; i++) { 
    	if (newbidvin == $scope.carlist[i].vin) {
    		ngToast.create("A new price from: " + message.body.id + ". For Car: " + message.body.vin);
    		loadList();
    	}
	}
  };

});