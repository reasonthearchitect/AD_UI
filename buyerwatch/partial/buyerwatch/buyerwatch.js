angular.module('buyerwatch').controller('BuyerwatchCtrl',function($scope, $uibModal, $stateParams, $log, $http, ngstomp, ngToast){
 
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

  ngstomp
          .subscribeTo('/topic/newbid')
              .callback(newbid)
              .withBodyInJson()
              .bindTo($scope)
          .connect();

  function newbid(message) {

    var newbidvin = message.body.vin;

    if (message.body.id == $stateParams.id ) {
      ngToast.create("Congrats! Your bid is the highest bid!");
      loadList();
    } else {
      for (var i = 0; i < $scope.carlist.length; i++) { 
        if (newbidvin == $scope.carlist[i].vin) {
          ngToast.create("A new price from: " + message.body.id + ". For Car: " + message.body.vin);
          loadList();
        }
      }
    }
  };

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