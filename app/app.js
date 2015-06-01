var rsvpApp = angular.module('rsvpApp', ['ngRoute', 'ngAnimate', 'firebase']);

rsvpApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'RsvpController',
      templateUrl: 'app/views/landing.html'
    })

    .when('/champ', {
      controller: 'ChampController',
      templateUrl: 'app/views/champ.html'
    })

    .when('/atlas', {
      controller: 'AtlasController',
      templateUrl: 'app/views/atlas.html'
    })

    .when('/rsvp', {
      controller: 'RsvpController',
      templateUrl: 'app/views/rsvp.html'
    })

    .when('/contact', {
      templateUrl: 'app/views/contact.html'
    })

    .when('/test', {
      controller: 'TestController',
      templateUrl: 'app/views/test.html'
    })

    .otherwise({ redirectTo: '/' });
});