(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('quiz', {
            controller: readController,
            bindings: {
                // watch/read/listen
                'lessonType': '<'
            },
            templateUrl: '../templates/quiz.html'
        });

    function readController(lessonContentService) {
        loadQuizQuestion();
        var vm = this;

        function loadQuizQuestion() {
            lessonContentService.getTextContent('knowing-jesus/quiz-one.json')
                .success(function(data) {
                    vm.questions = data.questions;
                });
        }
    }
})();
