(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .component('readLesson', {
            controller: readController,
            templateUrl: '../templates/tab-read.html'
        });

    function readController() {
        this.loadTextContent();

        function loadTextContent() {

        }
    }
})();
