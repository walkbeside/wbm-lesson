// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('wbmLesson', ['ionic'])

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
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('UserMessages', {
    url: '/UserMessages',
    templateUrl: 'templates/UserMessages.html',
    controller: 'UserMessagesCtrl'
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
        templateUrl: 'templates/quiz.html',
        controller: 'quizController'
      }
    }
  })

  .state('tab.listen.quiz', {
    url: '/quiz',
    views: {
      'tab-listen@tab': {
        templateUrl: 'templates/quiz.html',
        controller: 'quizController'
      }
    }
  })

  .state('tab.read.quiz', {
    url: '/quiz',
    views: {
      'tab-read@tab': {
        templateUrl: 'templates/quiz.html',
        controller: 'quizController'
      }
    }
  })
  // Each tab has its own nav history stack:

  .state('tab.watch', {
    url: '/watch',
    views: {
      'tab-watch': {
        templateUrl: 'templates/tabs/tab-watch.html',
        controller: 'watchController'
      }
    }
  })

  .state('tab.listen', {
      url: '/listen',
      views: {
        'tab-listen': {
          templateUrl: 'templates/tabs/tab-listen.html',
          controller: 'listenController'
        }
      }
    })

  .state('tab.read', {
    url: '/read',
    views: {
      'tab-read': {
        templateUrl: 'templates/tabs/tab-read.html',
        controller: 'readController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/UserMessages');

});
