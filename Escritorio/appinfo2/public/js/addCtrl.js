
var addCtrl = angular.module('addCtrl', ['ngRoute','jkuri.datepicker']);
addCtrl.controller('addCtrl', function($scope, $http, $location){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
     var self = this;
     var la = "la";
     var el = "el";
     var asegur = "";




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
          var causadeclarada =  $scope.formData.causadeclarada;
          var cia =  $scope.formData.cia;
          var fechaencargo =  $scope.formData.fechaencargo;
          var fechacontacto = $scope.formData.fechacontacto;
          var fechavisita =  $scope.formData.fechavisita;
          var horavisita =  $scope.formData.horavisita;
          var tiposiniestro =  $scope.formData.tiposiniestro;
          var asegur = $scope.formData.asegur;
          var riesgotipo = $scope.formData.riesgotipo;
          var utilidad = $scope.formData.utilidad;
          var protecciones = $scope.formData.protecciones;
          var construccion = $scope.formData.construccion;
          var antiguedad = $scope.formData.antiguedad;
          var estado = $scope.formData.estado;
          var superficie = $scope.formData.superficie;
          var recomendaciones = $scope.formData.recomendaciones;
          var garantia1 = $scope.formData.garantia1;
          var garantia2 = $scope.formData.garantia2;
          var capitalAsegurado = $scope.formData.capitalAsegurado;
          var capitalAsegurado2 = $scope.formData.capitalAsegurado2;
          var capitalPreexistencia = $scope.formData.capitalPreexistencia;
          var capitalPreexistencia2 = $scope.formData.capitalPreexistencia2;
          var valorm2 = $scope.formData.valorm2;

          var genero1 = "pp";

       genero(asegur);

         function genero (asegur){

          if (asegur == "el Asegurado, D."){
            genero1 = "el";

          } else if ( asegur == "la Asegurada, Dña."){
            genero1 = "la";
                  }
                else if ( asegur == "la gerente de la empresa asegurada, Dña."){
                  genero1 = "la";}
               else if ( asegur == "el gerente de la empresa asegurada, D."){
                  genero1 = "el";}
                  else if ( asegur == "el encargado, D."){
                     genero1 = "el";}
                     else if ( asegur == "la encargada, Dña."){
                        genero1 = "la";}
                  else {}


        };




     $location.url('/resultado/' + danos + '/' + causa + '/' + origen + '/' + vivienda + '/' + zona + '/' + don + '/'
     + nombre+ '/' + cobertura + '/' + garantia + '/' + riesgo + '/' + circunstancias + '/' + circunstancias2 + '/'
     + circunstancias3 + '/' + circunstancias4 + '/' + circunstancias5 + '/' + reserva+ '/' + causadeclarada + '/'
     + cia + '/' + fechaencargo + '/' + fechacontacto + '/' + fechavisita + '/' + horavisita + '/' + tiposiniestro + '/'
      + asegur + '/' + genero1 + '/' + riesgotipo + '/' + utilidad + '/' + protecciones + '/' + construccion  + '/' + antiguedad + '/'
       + estado + '/' + superficie + '/' + recomendaciones + '/' + garantia1 + '/' + garantia2 + '/' + capitalAsegurado + '/' + capitalAsegurado2 + '/' + capitalPreexistencia + '/' + capitalPreexistencia2 + '/' + valorm2);
}

} );
