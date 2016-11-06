(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .directive('quiz', function() {
            return {
                controller: quizController,
                controllerAs: '$ctrl',
                replace: true,
                bindings: {
                    // watch/read/listen
                    'lessonType': '<'
                },
                templateUrl: '../../templates/quiz.html'
            };
        });

    function quizController($state, lessonContentService, MockService) {
        loadQuizQuestion();
        var vm = this;
        vm.done = done;

        function loadQuizQuestion() {
            lessonContentService.getTextContent('knowing-jesus/quiz-one.json')
                .success(function(data) {
                    vm.questions = data.questions;
                });
        }

        function done() {
            $state.go('UserMessages');
            MockService.sendQuestion("What did you think of the lesson Knowing Jesus?")
        }
    }
})();
