angular.module('buyerwatch', ['ui.bootstrap','ui.router', 'AngularStompDK', 'ngToast','ngAnimate', 'smart-table']);

angular.module('buyerwatch').config(function($stateProvider) {

    $stateProvider.state('buyerwatch', {
        url: '/buyerwatch/:id',
        templateUrl: 'buyerwatch/partial/buyerwatch/buyerwatch.html'
    });
    /* Add New States Above */

});

angular
  	.module('buyer')
  	.config(['ngToastProvider', function(ngToast) {
    	ngToast.configure({
      		verticalPosition: 'top',
      		horizontalPosition: 'center',
      		maxNumber: 3
    	});
  }]);