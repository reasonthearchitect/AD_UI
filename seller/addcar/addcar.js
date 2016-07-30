angular.module('addcar', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('addcar').config(function($stateProvider) {

    $stateProvider.state('addcarpartial', {
        url: '/addcar/:id',
        templateUrl: 'seller/addcar/partial/addcarpartial/addcarpartial.html'
    });
    /* Add New States Above */

});

