(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('watchLesson', {
            controller: watchController,
            templateUrl: '../templates/tabs/tab-watch.html'
        });

    function watchController($sce) {
        var vm = this;
        loadVideoUrl();

        function loadVideoUrl() {
            vm.videoUrl = $sce.trustAsResourceUrl('https://player.vimeo.com/video/75800126');
        }
    }
})();
