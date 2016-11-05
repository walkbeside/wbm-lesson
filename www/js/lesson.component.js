(function() {
    'use strict';

    angular
        .module('')
        .component('lesson', {
            controller: lessonController,
            templateUrl: '../templates/lesson.html'
        });

    function lessonController() {
        this.loadLesson();

        function loadLesson() {

        }
    }
})();
