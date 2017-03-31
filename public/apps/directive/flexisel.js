myApp.directive('flexCarousel', function () {
    return {
        restrict: 'E',
        transclude : true,
        template : "<ng-transclude></ng-transclude>",
        scope : {
            options : "="
        },
        link: function (scope, element, attrs) {

            $('#flexisel').flexisel(scope.options);

        }
    };
});
