(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .directive('watchLesson', function() {
            return {
                controller: watchController,
                controllerAs: '$ctrl',
                replace: true,
                templateUrl: '../../templates/tabs/tab-watch.html'
            };
        });

    function watchController($sce, $ionicSideMenuDelegate, lessonContentService) {
        var vm = this;
        loadVideoUrl();

        function loadVideoUrl() {
            vm.videoUrl = $sce.trustAsResourceUrl(lessonContentService.getVideoUrl('lesson1'));
        }

        vm.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }
})();
