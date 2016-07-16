var addCtrl = angular.module('addCtrl', ['ngRoute']);

addCtrl.controller('addCtrl', function($scope, $http, $location){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
     var self = this;



     $scope.createUser = function() {
       var danos = $scope.formData.danos;
       var causa = $scope.formData.causa;
       var origen = $scope.formData.origen;
       var zona =  $scope.formData.zona;
       var vivienda = $scope.formData.vivienda;
        var don =  $scope.formData.don;
        var nombre =  $scope.formData.nombre;
          var cobertura =  $scope.formData.cobertura;
          var garantia =  $scope.formData.garantia;
          var riesgo =  $scope.formData.riesgo;
          var circunstancias =  $scope.formData.circunstancias;
        var circunstancias2 =  $scope.formData.circunstancias2;
        var circunstancias3 =  $scope.formData.circunstancias3;
        var circunstancias4 =  $scope.formData.circunstancias4;
        var circunstancias5 =  $scope.formData.circunstancias5;
          var reserva =  $scope.formData.reserva;

     $location.url('/resultado/' + danos + '/' + causa + '/' + origen + '/' + vivienda + '/' + zona + '/' + don + '/' + nombre+ '/' + cobertura + '/' + garantia + '/' + riesgo + '/' + circunstancias + '/' + circunstancias2 + '/' + circunstancias3 + '/' + circunstancias4 + '/' + circunstancias5+ '/' + reserva);
}

} );
