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
        console.log(JSON.stringify(response.data));
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
    console.log("NEW BID: " + JSON.stringify(message))
    ngToast.create("A new price! " + message.body.id + " " + message.body.vin + " " + message.body.amount);
    loadList();
  };
  
});