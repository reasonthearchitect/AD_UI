angular.module('login', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('login').config(function($stateProvider) {

    $stateProvider.state('loginform', {
        url: '/login',
        templateUrl: 'common/login/partial/loginform/loginform.html'
    });
    /* Add New States Above */

});

