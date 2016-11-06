(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('readLesson', {
            controller: readController,
            templateUrl: '../../templates/tabs/tab-read.html'
        });

    function readController(lessonContentService) {
        loadTextContent();
        var vm = this;
        vm.lessonText = "Loading...";

        function loadTextContent() {
            lessonContentService.getTextContent('knowing-jesus/lesson-one.html')
                .success(function(data) {
                    vm.lessonText = data;
                });
        }
    }
})();
