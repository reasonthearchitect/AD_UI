angular.module('buyer', ['ui.bootstrap','ui.router','ngAnimate', 'smart-table']);

angular.module('buyer').config(function($stateProvider) {

    $stateProvider.state('buyerlanding', {
        url: '/buyerlanding',
        templateUrl: 'buyer/partial/buyerlanding/buyerlanding.html'
    });
    /* Add New States Above */

});

