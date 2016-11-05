(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .factory('lessonReaderService', lessonReaderService);

    function lessonReaderService($http) {
        return {
            readLesson: function(lessonUrl) {
                var baseUrl = 'resources/lessons/';
                return $http.get(baseUrl + lessonUrl);
            }
        };
    }
})();