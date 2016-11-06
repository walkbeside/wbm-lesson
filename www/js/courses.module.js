/**
 * Created by dsgoers on 11/6/16.
 */
angular.module('courses', [])
    .controller('coursesController', ['$scope', '$rootScope', '$state',
        '$stateParams', 'MockService', '$ionicActionSheet',
        '$ionicPopup', '$ionicScrollDelegate', '$timeout', '$interval', 'lessonContentService',

        function($scope, $rootScope, $state, $stateParams, MockService,
                 $ionicActionSheet,
                 $ionicPopup, $ionicScrollDelegate, $timeout, $interval, lessonContentService) {

            $scope.lessons = lessonContentService.getAllLessons();
        }

    ]);