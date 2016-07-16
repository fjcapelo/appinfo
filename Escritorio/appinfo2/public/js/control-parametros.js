var addCtrl = angular.module('addCtrl', ['ngRoute','jkuri.datepicker']);



addCtrl.controller('companias', ['$scope', function($scope) {
   $scope.data = {
    model: null,
    availableOptions: [
      {id: 'ALLIANZ COMPAÑIA DE SEGUROS Y REASEGUROS', name: 'Allianz hogar'},
      {id: 'ALLIANZ EMPRESAS', name: 'Allianz empresas'},
      {id: 'GENERALI SEGUROS SA', name: 'Generali'},
        {id: 'AXA HOGAR', name: 'Axa horar'},
          {id: 'AXA PARTICULARES', name: 'Axa particulares'},
            {id: 'AXA EMPRESA', name: 'Axa empresa'},
              {id: 'PELAYO MUTUA DE SEGUROS', name: 'Pelayo'},
                {id: 'PATRIA HISPANA S.A. DE SEGUROS Y SREASEGUROS', name: 'Patria hispania'},
                  {id: 'NORTHIPANIA', name: 'NortHispania'},
                  {id: 'CAJAMAR SEGUROS GENERALES S.A.DE SEG. Y REAS.', name: 'Cajamar'}
    ],
   };
}]);

addCtrl.controller('asegur', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'la Asegurada, Dña.', name: 'Asegurada'},
     {id: 'el Asegurado, D.', name: 'Asegurado'},
     {id: 'el gerente de la empresa asegurada, D.', name: 'Gerente'},
       {id: 'la gerente de la empresa asegurada, Dña.', name: 'La Gerente'},
         {id: 'el encargado, D.AXA PARTICULARES', name: 'Encargado'},
           {id: 'la encargada, Dña.', name: 'La Encargada'},
             {id: 'el administrador', name: 'Administrador'},
               {id: 'la administradora', name: 'Administradora'}

   ],
  };
}]);


addCtrl.controller('vivienda', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Piso', name: 'Piso'},
     {id: 'Adosado', name: 'Adosado'},
     {id: 'Chalet', name: 'Chalet'},
       {id: 'Local comercial', name: 'Local comercial'},
         {id: 'Nave industrial', name: 'Nave industrial'}

   ],
  };
}]);

addCtrl.controller('ubicacion', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Urbana', name: 'Urbana'},
     {id: 'Rural', name: 'Rural'},
     {id: 'Extra-radio', name: 'Extradio'},
       {id: 'Nucleo industrial', name: 'Nucleo industrial'}

   ],
  };
}]);

addCtrl.controller('don', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Sr.D.', name: 'Señor'},
     {id: 'Sra.D.', name: 'Señora'}


   ],
  };
}]);
