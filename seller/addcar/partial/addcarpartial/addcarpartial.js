angular.module('addcar').controller('AddcarpartialCtrl',function($scope, $stateParams){

	$scope.newcar = {"seller": $stateParams.id};
	

});