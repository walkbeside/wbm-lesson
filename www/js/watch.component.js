(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('watchLesson', {
            controller: watchController,
            templateUrl: '../templates/tab-watch.html'
        });

    function watchController() {
        this.loadVideo();

        function loadVideo() {

        }
    }
})();
