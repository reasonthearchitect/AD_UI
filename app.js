angular.module('app', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'login', 'buyer', 'addcar', 'buyerwatch', 'sellerslist']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/login');

});


angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
