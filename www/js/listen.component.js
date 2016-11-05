(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('listenLesson', {
            controller: listenController,
            templateUrl: '../templates/tabs/tab-listen.html'
        });

    function listenController($cordovaMedia, $ionicLoading, lessonContentService) {
        var vm = this;
        vm.playAudio = playAudio;

        function playAudio() {
            var audioUrl = lessonContentService.getAudioUrl('knowing-jesus', 'lesson-one');
            var media = new Media(audioUrl, null, null, mediaStatusCallback);
            $cordovaMedia.play(media);
        }

        var MEDIA_STARTING = 1;

        var mediaStatusCallback = function(status) {
            if(status == MEDIA_STARTING) {
                $ionicLoading.show({template: 'Loading...'});
            } else {
                $ionicLoading.hide();
            }
        }
    }
})();
