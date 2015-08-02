
(function () {
   
    var Placeholder = function($timeout) {
        return {
            restrict: "A",
            scope: {
                settings: "=ngPlaceholder"
    },

            link: function (scope, $element, attrs, ctrl) {
              
                var settings = scope.settings;
                if (Modernizr && Modernizr.input && Modernizr.input.placeholder) {
                    $element.attr("placeholder", settings.placeholder);
                    return;
                }
                $timeout(function() {
                    $element.addClass(settings.placeholderActive);
                    $element.val(settings.placeholder);
                }, 500);
                
                $element.on("blur.placeholder", function() {
                    $element.val().trim() == "" && $element.val(settings.placeholder) && $element.addClass(settings.placeholderActive);
                }).on("focus.placeholder", function() {
                    $element.val() == settings.placeholder && $element.val("") &&  $element.removeClass(settings.placeholderActive);
                });
            }
        };
    };
    var LandingDirective = function () {
        return {
            restrict: "A",

            link: function (scope, $element, attrs, ctrl) {
                var $layout = angular.element(".b-layout"),
                    $document = angular.element(document),
                    $body = angular.element("body"),
                    headerModalOpenedClass = "fixed-modal-opened",
                    $fixed = angular.element(".b-header__inner, .b-services-nav"),

                    _getScrollBarWidth = function() {
                        var scrollDiv = document.createElement('div');
                        scrollDiv.className = 'modal-scrollbar-measure';
                        $body.append(scrollDiv);
                        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                        $body[0].removeChild(scrollDiv);
                        return scrollbarWidth;
                    },
                    _enableHeaderFix = function() {

                        $document.on("show.bs.modal", function() {
                            $fixed.css({ "right": _getScrollBarWidth() });
                            $fixed.addClass(headerModalOpenedClass);
                        }).on("hidden.bs.modal", function() {
                            $fixed.css({ "right": 0 });
                            $fixed.removeClass(headerModalOpenedClass);
                        });
                    };
                _enableHeaderFix();
                if (browser && browser.msie || browser.opera_presto || browser.msie11)
                {
                    
                    $document.on("show.bs.modal", function () {
                        $layout.css({ "padding-right": _getScrollBarWidth() });

                    }).on("hidden.bs.modal", function () {
                        $layout.css({ "padding-right": 0 });
                    });
                }

            }
        };

    };


    angular.module("landing.directives").directive("ngLanding", LandingDirective)
    .directive("ngPlaceholder", ["$timeout", Placeholder]);

})();