var rsvpApp = angular.module('rsvpApp', ['ngRoute', 'ngAnimate']);

rsvpApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'RsvpController',
      templateUrl: 'index.html'
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
    .otherwise({ redirectTo: '/' });
});