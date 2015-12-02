(function() {
    var TriangleDecoration = function() {
        return {
            restrict: "A",

            link: function(scope, $element, attrs, ctrl) {

                var $window = angular.element(window);
                var _setSize = function() {


                    var width = $window.width();
                    $element.css(eval("(" + attrs.ngTriangleDecoration + ")"));
                }

                $window.on("resize.triagleDecoration", function() {
                    _setSize();
                });
                _setSize();
            }
        }
    };
    var Services = function($rootScope) {
        return {
            restrict: "A",

            link: function(scope, $element, attrs, ctrl) {
                var $window = angular.element(window);

                scope.$on("service.open", function() {
                    var $body = angular.element("html, body"),
                      
                    $listContainer = angular.element(".b-services-list-container"),
                        offsetTop = $listContainer.offset().top + $listContainer.height();

                    $body.stop().animate({ scrollTop: offsetTop }, '500', 'swing', function() {
                        $rootScope.$broadcast("nav.toggle", { action: "open" });
                    });
                   
                });
            }
        };

    };
    var ServicesNav = function () {
        return {
            restrict: "A",

            link: function (scope, $element, attrs, ctrl) {
                var $window = angular.element(window),
                      $listContainer = angular.element(".b-services-list-container"),
                      
                    timer,
                    toggleClass = "b-services-nav_open",

                    _toggleVisiblity = function () {
                       
                        var offsetT = $listContainer.offset().top + $listContainer.height(),
                            offsetB = offsetT + angular.element(".b-service").filter(":visible").height(),
                        currentOffset = $window.scrollTop();

                        (currentOffset >= Math.floor(offsetT) && currentOffset <= Math.floor(offsetB)) && $element.addClass(toggleClass) || $element.removeClass(toggleClass);
                };
                $window.on("scroll.services", function (e) {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(function () {
                        _toggleVisiblity();
                    }, 400);
                  
               
                });

                scope.$on("nav.toggle", function(e, data) {
                    data && (data.action == "open" && $element.addClass(toggleClass) || $element.removeClass(toggleClass));
                });


            }
        };

    };
    var MobileList = function() {
        return {
            restrict: "A",
            scope : {
              options : "=ngMobileList"  
            },
            link: function(scope, $element, attrs, ctrl) {
                var $trigger = angular.element(scope.options.trigger),
                    toggleClass = scope.options.openClass;
                $element.on("click.menu-click", function (e) {
                    e.stopPropagation();
                });
                $trigger.on("click.menu-toggle", function(e) {
                    $element.toggleClass(toggleClass);
                    e.stopPropagation();
                });
                angular.element(document).on("click.menu-close", function() {
                    $element.removeClass(toggleClass);
                });

            }
        }
    };

    angular.module("landing.directives").directive("ngTriangleDecoration", TriangleDecoration)
    .directive("ngMobileList", MobileList)
    .directive("ngServices", ["$rootScope", Services])
    .directive("ngServicesNav", ServicesNav);
})();