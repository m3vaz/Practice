'use strict';

/**
 * @ngdoc overview
 * @name monasnipApp
 * @description
 * # monasnipApp
 *
 * Main module of the application.
 */
angular
  .module('monasnipApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
