


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
                url: '/Landing/Send',
                type: 'POST',
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
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