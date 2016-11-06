(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('watchLesson', {
            controller: watchController,
            templateUrl: '../../templates/tabs/tab-watch.html'
        });

    function watchController($sce, lessonContentService) {
        var vm = this;
        loadVideoUrl();

        function loadVideoUrl() {
            vm.videoUrl = $sce.trustAsResourceUrl(lessonContentService.getVideoUrl('lesson1'));
        }
    }
})();
