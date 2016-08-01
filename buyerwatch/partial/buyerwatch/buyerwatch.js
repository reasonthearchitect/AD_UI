angular.module('buyerwatch').controller('BuyerwatchCtrl',function($scope, $stateParams, $http, ngToast){

	$scope.carlist = [];

  $scope.id = $stateParams.id;

  function loadList() {

      $http({
          method: 'GET',
          url: '/filtercarlist/buyerwatching/' + $stateParams.id
      }).then(function successCallback(response) {
        $scope.carlist = response.data;
      }, function errorCallback(response) {
        console.log('Failure??????');
      });
  }; 

  loadList();

  $scope.removeFromWatchList = function(vin) {
    
    $http({
          method: 'DELETE',
          url: "/watchingcars/remove/" + $stateParams.id + "/carvin/" + vin
      }).then(function successCallback(response) {
          loadList();
        }, function errorCallback(response) {
          console.log('Failure??????');
        });
  };

});