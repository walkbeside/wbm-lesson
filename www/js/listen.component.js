(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('listenLesson', {
            controller: listenController,
            templateUrl: '../templates/tab-listen.html'
        });

    function listenController() {
        this.loadAudioClip();

        function loadAudioClip() {

        }
    }
})();
