angular.module('buyer', ['ui.bootstrap','ui.router', 'AngularStompDK', 'ngToast','ngAnimate', 'smart-table']);

angular.module('buyer').config(function($stateProvider) {

    $stateProvider.state('buyerlanding', {
        url: '/buyerlanding',
        templateUrl: 'buyer/partial/buyerlanding/buyerlanding.html'
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


angular.module('buyer')
        .config(function(ngstompProvider){
            ngstompProvider
                .url('/listenfornewcars/')
                .class(SockJS);
        });

