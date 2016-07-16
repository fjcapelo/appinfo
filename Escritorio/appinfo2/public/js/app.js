// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('meanMapApp', ['addCtrl','ngRoute']);

app.controller('BookController', function($scope, $routeParams) {
     $scope.name = "BookController";
     $scope.params = $routeParams;
 })

// Configures Angular routing -- showing the relevant view and controller when needed.
    app.config(['$routeProvider',function($routeProvider){

        // Join Team Control Panel
        $routeProvider.

        when('/join', {
            templateUrl: 'partials/addForm.html',
            controller: 'addCtrl'
            // Find Teammates Control Panel
            // All else forward to the Join Team Control Panel
        }).

        when('/resultado/:danos/:causa/:origen/:vivienda/:zona/:don/:nombre/:cobertura/:garantia/:riesgo/:circunstancias/:circunstancias2/:circunstancias3/:circunstancias4/:circunstancias5/:reserva', {
    templateUrl: 'partials/resultado.html',
    controller: 'BookController'
    // Find Teammates Control Panel
  }).

          when('/prueba', {
    templateUrl: 'partials/recogidadatos.html',
    controller: 'BookController'

  }).

  otherwise({redirectTo:'/join'});


}]);
