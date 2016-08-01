angular.module('buyerwatch', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('buyerwatch').config(function($stateProvider) {

    $stateProvider.state('buyerwatch', {
        url: '/buyerwatch/:id',
        templateUrl: 'buyerwatch/partial/buyerwatch/buyerwatch.html'
    });
    /* Add New States Above */

});

