(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .directive('readLesson', function() {
            return {
                controller: readController,
                controllerAs: '$ctrl',
                replace: true,
                templateUrl: '../../templates/tabs/tab-read.html'
            };
        });

    function readController(lessonContentService) {
        loadTextContent();
        var vm = this;
        vm.lessonText = "Loading...";

        function loadTextContent() {
            lessonContentService.getTextContent('knowing-jesus/lesson-one.html')
                .then(function(data) {
                    vm.lessonText = data;
                });
        }
    }
})();
