angular.module('sellerslist', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('sellerslist').config(function($stateProvider) {

    $stateProvider.state('sellerslist', {
        url: '/sellerslist/:id',
        templateUrl: 'sellerslist/partial/sellerslist/sellerslist.html'
    });
    /* Add New States Above */

});

