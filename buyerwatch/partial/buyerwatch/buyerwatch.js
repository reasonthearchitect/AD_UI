angular.module('buyerwatch').controller('BuyerwatchCtrl',function($scope, $uibModal, $stateParams, $log, $http, ngToast){

	$scope.carlist = [];
  $scope.highestBidMap = {};

  $scope.id = $stateParams.id;

  function loadList() {

      $http({
          method: 'GET',
          url: '/filtercarlist/buyerwatching/' + $stateParams.id
      }).then(function successCallback(response) {
        $scope.carlist        = response.data.cars;
        $scope.highestBidMap  = response.data.highestBidMap; 
        console.log(JSON.stringify($scope.highestBidMap));
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

  $scope.open = function (vin) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        vin: function () {
          return vin;
        }
      }
    });

    modalInstance.result.then(function (data) {

      // /bidstore/placebid
      var message = { vin: data.vin,id: $scope.id, amount:data.bid};
      
      $http({
          method: 'POST',
          url: "/bidstore/placebid/",
          data: message
      }).then(function successCallback(response) {
          loadList();
          console.log('SUCCESS!!!!!!!!!!');
        }, function errorCallback(response) {
          console.log('Failure??????');
        });
    });
  };

});


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
angular.module('buyerwatch').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, vin) {

  $scope.vin = vin;

  $scope.bid = 0;

  $scope.ok = function () {
    //console.log("BID: " + $scope.bid)
    $uibModalInstance.close({vin: $scope.vin, bid:$scope.bid});
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});