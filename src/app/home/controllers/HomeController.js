(function() {
  
  'use strict';

  var HomeController = function() {

    this.name = 'Horse Horsington';

  };

  angular
    .module('myApp.home')
    .config(function($routeProvider) {
      $routeProvider
        .when('home', {
          controller: 'HomeController',
          controllerAs: 'home',
          templateUrl: '/views/home.tpl.html'
          title: 'Home'
        });
    })
    .controller('HomeController', HomeController);

})();