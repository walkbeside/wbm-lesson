(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .controller('MenteeCtrl', ['lessonContentService', '$scope'], function(lessonContentService, $scope) {
            loadCourses();

            $ionicModal.fromTemplateUrl('mentee-courses-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.coursesModal = modal;
            });

            function loadCourses() {
                $scope.courses = lessonContentService.getAllLessons();
            }

            $scope.openModal = function(whichModal) {
                if(whichModal === 'courses') {
                    $scope.coursesModal.show();
                }
            };
        })
})();
