angular.module('lessonPlan', [])
    .controller('lessonPlanController', ['$scope', '$rootScope', '$state',
        '$stateParams', 'MockService', '$ionicActionSheet',
        '$ionicPopup', '$ionicScrollDelegate', '$timeout', '$interval', 'lessonContentService',

        function($scope, $rootScope, $state, $stateParams, MockService,
                 $ionicActionSheet,
                 $ionicPopup, $ionicScrollDelegate, $timeout, $interval, lessonContentService) {

            $scope.lessons = lessonContentService.getLessons();
        }
    ]);