(function ($) {
    var Notice = function () {
        return {
            restrict: "A",
            link: function (scope, $element, attrs, controller) {
                scope.$on("feedback.success", function () {
                    $element.fadeIn();
                });
                angular.element(document).on("click", function () {
                    $element.fadeOut();
                });
            }

        };
    };

    angular.module('landing.directives')
       .directive('ngNotice', [Notice]);
})(jQuery);