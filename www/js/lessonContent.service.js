(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .factory('lessonContentService', lessonContentService);

    function lessonContentService($http) {
        return {
            getTextContent: function(lessonUrl) {
                var baseUrl = 'resources/lessons/';
                return $http.get(baseUrl + lessonUrl);
            }
        };
    }
})();