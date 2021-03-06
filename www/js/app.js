// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('wbmLesson', ['ionic', 'ngCordova', 'userMessages', 'lessonPlan', 'courses',
  'mentees', 'stats', 'invite', 'favorites'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  $stateProvider

  .state('UserMessages', {
    url: '/UserMessages',
    templateUrl: 'templates/UserMessages.html',
    controller: 'UserMessagesCtrl'
  })

  .state('LessonPlan', {
    url: '/LessonPlan',
    templateUrl: 'templates/LessonPlan.html',
    controller: 'lessonPlanController'
  })

      .state('mentees', {
        url: '/mentees',
        templateUrl: 'templates/mentees.html',
        controller: 'menteesController'
      })


      .state('mentor', {
        url: '/mentor',
        abstract: true,
        templateUrl: 'templates/mentor.html'
      })

      .state('mentor.courses', {
        url: '/courses',
        views: {
          'mentor-courses': {
            templateUrl: 'templates/courses.html',
            controller: 'coursesController'
          }
        }
      })

      .state('mentor.favorites', {
        url: '/favorites',
        views: {
          'mentor-favorites': {
            templateUrl: 'templates/favorites.html',
            controller: 'favoritesController'
          }
        }
      })

      .state('mentor.stats', {
        url: '/stats',
        views: {
          'mentor-stats': {
            templateUrl: 'templates/stats.html',
            controller: 'statsController'
          }
        }
      })

      .state('mentor.invite', {
        url: '/invite',
        views: {
          'mentor-invite': {
            templateUrl: 'templates/invite.html',
            controller: 'inviteController'
          }
        }
      })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs/tabs.html'
  })

  .state('tab.watch.quiz', {
    url: '/quiz',
    views: {
      'tab-watch@tab': {
        template: '<quiz lessonType="watch"></quiz>'
      }
    }
  })

  .state('tab.listen.quiz', {
    url: '/quiz',
    views: {
      'tab-listen@tab': {
        template: '<quiz lessonType="listen"></quiz>'
      }
    }
  })

  .state('tab.read.quiz', {
    url: '/quiz',
    views: {
      'tab-read@tab': {
        template: '<quiz lessonType="read"></quiz>'
      }
    }
  })
  // Each tab has its own nav history stack:

  .state('tab.watch', {
    url: '/watch',
    views: {
      'tab-watch': {
        template: '<watch-lesson></watch-lesson>'
      }
    }
  })

  .state('tab.listen', {
      url: '/listen',
      views: {
        'tab-listen': {
          template: '<listen-lesson></listen-lesson>'
        }
      }
    })

  .state('tab.read', {
    url: '/read',
    views: {
      'tab-read': {
        template: '<read-lesson></read-lesson>'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/UserMessages');

});
