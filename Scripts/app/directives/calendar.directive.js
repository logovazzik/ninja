(function () {
    var Calendar = function () {
        return {
            restrict: "A",
            scope: {
                options : "=ngFilterCalendar"
            },
            link: function (scope, $element, attrs, ctrl) {
                $element.pickmeup(jQuery.extend({
                        flat: true,
                        select_day: false,
                        locale: {
                            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                            monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
                        },

                    change  : function(date) {
                        if (scope.options.input) {
                            angular.element(scope.options.input).val(date).triggerHandler("change");
                        }
                    }
                }, scope.options || {}));
                
            }
        }
    };
   

    angular.module("landing.directives")
    .directive("ngFilterCalendar", Calendar);
})();