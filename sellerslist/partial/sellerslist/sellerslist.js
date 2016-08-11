angular.module('sellerslist').controller('SellerslistCtrl',function($scope, $stateParams, $log, $http, ngstomp, ngToast){

	$scope.carlist = [];
	$scope.id = $stateParams.id;

	function loadList() {

      $http({
          method: 'GET',
          url: '/filterSellers/for/' + $stateParams.id
      }).then(function successCallback(response) {
        $scope.carlist        = response.data.cars;
        //$scope.highestBidMap  = response.data.highestBidMap; 
        console.log(JSON.stringify(response.data));
      }, function errorCallback(response) {
        console.log('Failure??????');
      });
  }; 
  loadList();
});