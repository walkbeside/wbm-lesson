(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .directive('listenLesson', function() {
            return {
                controller: listenController,
                controllerAs: '$ctrl',
                replace: true,
                templateUrl: '../../templates/tabs/tab-listen.html'
            };
        });

    function listenController(lessonContentService) {
        var vm = this;
        vm.playAudio = playAudio;

        function playAudio() {
            var audioUrl = lessonContentService.getAudioUrl('knowing-jesus', 'lesson-one');
            // var media = new Media(audioUrl, null, null, mediaStatusCallback);
            // $cordovaMedia.play(media);
        }

        var MEDIA_STARTING = 1;

        var mediaStatusCallback = function(status) {
            // if(status == MEDIA_STARTING) {
            //     $ionicLoading.show({template: 'Loading...'});
            // } else {
            //     $ionicLoading.hide();
            // }
        };
    }
})();
