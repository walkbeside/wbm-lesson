(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .factory('lessonContentService', lessonContentService);

    function lessonContentService($http) {
        var baseUrl = 'resources/lessons/';

        return {
            getTextContent: function(lessonUrl) {
                return $http.get(baseUrl + lessonUrl);
            },

            getVideoUrl: function(lesson) {
                if (lesson === 'lesson1') {
                    return 'https://player.vimeo.com/video/75800126';
                } else if (lesson === 'lesson2') {
                    return 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/160/3/75800126/197711276.mp4?token=581e475e_0x05be3080b36b25891f79554ef8c03a12a4542217';
                } else {
                    return null;
                }
            },

            getAudioUrl: function(lesson, lessonNumber) {
                return baseUrl + lesson + "/" + lessonNumber;
            }
        };
    }
})();