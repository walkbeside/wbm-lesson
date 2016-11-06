(function() {
    'use strict';

    angular
        .module('wbmLesson')
        .factory('lessonContentService', lessonContentService);

    function lessonContentService($q) {
        var baseUrl = 'resources/lessons/';

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
                var deferred = $q.defer();
                // return $http.get(baseUrl + lessonUrl);
                if (lessonUrl === 'knowing-jesus/quiz-one.json') {
                    deferred.resolve({
                        "questions": [
                            {
                                "text": "Who did Jesus love?",
                                "type": "checkbox",
                                "answers": [
                                    {
                                        "text": "Disciples",
                                        "chosen": false
                                    },
                                    {
                                        "text": "Followers",
                                        "chosen": false
                                    },
                                    {
                                        "text": "Pharisees",
                                        "chosen": false
                                    },
                                    {
                                        "text": "Judas",
                                        "chosen": false
                                    }
                                ]
                            },
                            {
                                "text": "How many disciples did Jesus have?",
                                "type": "radio",
                                "answers": [
                                    {
                                        "text": "One",
                                        "chosen": false
                                    },
                                    {
                                        "text": "Twelve",
                                        "chosen": false
                                    },
                                    {
                                        "text": "Five",
                                        "chosen": false
                                    },
                                    {
                                        "text": "Eight",
                                        "chosen": false
                                    }
                                ]
                            }
                        ]
                    });
                }
                if (lessonUrl === 'knowing-jesus/lesson-one.html') {
                    deferred.resolve("<p>Knowing Jesus Christ is the most exciting relationship you can have. " +
                        "It is the beginning of a life of adventure with an all-loving, all-powerful God. " +
                        "If you have sincerely asked Christ to come into your life, " +
                        "you can be sure that your relationship with God is secure. " +
                        "As a result of Christ’s death on the cross, the only sufficient provision for a relationship with God, " +
                        "you have been completely forgiven and accepted by Him. </p> " +
                        "<p>There are many exciting things that are true in your relationship with Christ. " +
                        "Understanding these truths will help you build a firm foundation on which to grow. " +
                        "Spend some time reflecting on the questions asked in each section; the answers are listed at the end of this challenge.    </p> " +
                        "<p>1. CHRIST FORGAVE YOUR SINS </p> " +
                        "<p>“In Him we have redemption through His blood, the forgiveness of sins, " +
                        "in accordance with the riches of God’s grace…” (Ephesians 1:7). </p> " +
                        "<p>When you trusted Christ for the forgiveness of your sin, all your sins were forgiven… " +
                        "past, present and future. What difference do you think it makes to know that all of your sins have been forgiven?    </p> " +
                        "</p>");
                }

                return deferred.promise;
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
            }
        };
    }



})();