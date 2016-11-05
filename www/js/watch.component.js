(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('watchLesson', {
            controller: watchController,
            templateUrl: '../templates/tabs/tab-watch.html'
        });

    function watchController() {
        loadVideo();

        function loadVideo() {

        }
    }
})();
