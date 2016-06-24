// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl','queryCtrl', 'geolocation','gservice','ngRoute','jkuri.datepicker']);

app.controller('BookController', function($scope, $routeParams) {
     $scope.name = "BookController";
     $scope.params = $routeParams;
 })

// Configures Angular routing -- showing the relevant view and controller when needed.
    app.config(function($routeProvider){

        // Join Team Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

// <a href="Book/Gatsby/ch/4?key=value"> Ejemplo de angularjs

            // Find Teammates Control Panel
        }).when('/find?:param:', {
          controller: 'BookController',
            templateUrl: 'partials/queryForm.html',



            // All else forward to the Join Team Control Panel
        }).when('/prueba/:lat/:lon/:fec/:ciudad1', {
    templateUrl: 'partials/queryForm.html',
    controller: 'BookController'

  }).otherwise({redirectTo:'/join'});


    });
