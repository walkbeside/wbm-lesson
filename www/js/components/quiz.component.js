(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('quiz', {
            controller: quizController,
            bindings: {
                // watch/read/listen
                'lessonType': '<'
            },
            templateUrl: '../../templates/quiz.html'
        });

    function quizController(lessonContentService) {
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
