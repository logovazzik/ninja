(function () {
    angular.module('landing.services', []);
    angular.module('landing.controllers', []);
    angular.module('landing.directives', []);
    angular.module('landing.factories', []);
    angular.module('landing.filters', []);


    angular.module('landing', [
        'landing.services',
        'landing.controllers',
        'landing.directives',
        'landing.factories',
        'landing.filters'
    ]);
})();

