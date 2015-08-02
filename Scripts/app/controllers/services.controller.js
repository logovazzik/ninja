


(function () {
    var Services = function ($rootScope) {
        
        this.visible = null;
        this.$rootScope = $rootScope;
    };
    Services.prototype.openService = function(id) {
        this.visible = id;
        this.$rootScope.$broadcast("service.open", { serviceId: id });
    };

    var OrderServiceController = function ($rootScope) {
        this.submit = function () {
            var data = {
                Contacts: this.contacts,
                Name: this.name
            };

            $.ajax({
                url: '/Email/SendEmail',
                type: 'POST',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data),
                async: true
            }).success(function () {
                $rootScope.$broadcast("feedback.success");
            });
        }
    };

    angular.module("landing.controllers")
        .controller("OrderServiceController",  ["$rootScope",  OrderServiceController])
        .controller("ServicesController", ["$rootScope", Services]);
})();