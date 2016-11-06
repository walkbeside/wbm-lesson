(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .factory('lessonContentService', lessonContentService);

    function lessonContentService($http) {
        var baseUrl = 'resources/lessons/';

        var mentees = [
            {
                name: 'Bill',
                last_contact: '3 days ago'
            },
            {
                name: 'Daniel',
                last_contact: '2 weeks ago'
            },
            {
                name: 'Miheret',
                last_contact: '1 month ago'
            }
        ];

        var completed = [
            {
                name: 'Stepping From Uncertainty to Confidence',
                completed: true
            },
            {
                name: 'Stepping From Feelings of Unworthiness to Forgiveness',
                completed: true
            },
            {
                name: 'Stepping From Being Unable to Empowered',
                completed: true
            }
        ];

        var next = [
            {
                name: 'Stepping From Being Unprepared to Equipped',
                completed: false
            },
            {
                name: 'Stepping From Being Undeveloped to Maturity',
                completed: false
            }
        ];

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
            },

            getAllLessons: function() {
                return completed.concat(next);
            },

            getCompletedLessons: function() {
                return completed;
            },

            getNextLessons: function() {
                return next;
            },

            getMentees: function() {
                return mentees;
            }
        };
    }



})();