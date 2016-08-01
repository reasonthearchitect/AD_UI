angular.module('app', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'login', 'buyer', 'addcar', 'buyerwatch']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/buyerlanding');

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
