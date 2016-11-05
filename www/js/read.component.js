(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('readLesson', {
            controller: readController,
            templateUrl: '../templates/tabs/tab-read.html'
        });

    function readController(lessonReaderService) {
        loadTextContent();
        var vm = this;
        vm.lessonText = "Loading...";

        function loadTextContent() {
            lessonReaderService.readLesson('knowing-jesus/lesson-one.html')
                .success(function(data) {
                    vm.lessonText = data;
                });
        }
    }
})();
