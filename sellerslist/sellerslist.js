angular.module('sellerslist', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('sellerslist').config(function($stateProvider) {

    $stateProvider.state('sellerslist', {
        url: '/sellerslist/:id',
        templateUrl: 'sellerslist/partial/sellerslist/sellerslist.html'
    });
    /* Add New States Above */

});

angular.module('buyerwatch')
  	.config(['ngToastProvider', function(ngToast) {
    	ngToast.configure({
      		verticalPosition: 'top',
      		horizontalPosition: 'center',
      		maxNumber: 3
    	});
  }]);

angular.module('buyerwatch')
        .config(function(ngstompProvider){
            ngstompProvider
                .url('/listenfornewbid/')
                .class(SockJS);
        });

