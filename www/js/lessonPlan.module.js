angular.module('lessonPlan', [])
    .controller('lessonPlanController', ['$scope', '$rootScope', '$state',
        '$stateParams', 'MockService', '$ionicActionSheet',
        '$ionicPopup', '$ionicScrollDelegate', '$timeout', '$interval', 'lessonContentService',

        function($scope, $rootScope, $state, $stateParams, MockService,
                 $ionicActionSheet,
                 $ionicPopup, $ionicScrollDelegate, $timeout, $interval, lessonContentService) {

            $scope.lessons = lessonContentService.getAllLessons();

            $scope.getAllLessons = function() {
                $scope.lessons = lessonContentService.getAllLessons();
            };

            $scope.getCompletedLessons = function() {
                $scope.lessons = lessonContentService.getCompletedLessons();
            };

            $scope.getNextLessons = function() {
                $scope.lessons = lessonContentService.getNextLessons();
            };
        }

    ]);