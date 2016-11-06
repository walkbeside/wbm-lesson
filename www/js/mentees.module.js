/**
 * Created by dsgoers on 11/6/16.
 */
angular.module('mentees', [])
    .controller('menteesController', ['$scope', '$rootScope', '$state',
        '$stateParams', 'MockService', '$ionicActionSheet',
        '$ionicPopup', '$ionicScrollDelegate', '$timeout', '$interval', 'lessonContentService',

        function($scope, $rootScope, $state, $stateParams, MockService,
                 $ionicActionSheet,
                 $ionicPopup, $ionicScrollDelegate, $timeout, $interval, lessonContentService) {

            $scope.mentees = lessonContentService.getMentees();

        }

    ]);