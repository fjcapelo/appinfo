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

addCtrl.controller('circunstancias2', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Que en fecha de siniestro hubo un corte en el suministro eléctrico sobre las {{formData.hora}}, que afecto al {{formData.danos}}.', name: 'Corte de suministro'},
     {id: 'Que en fecha de siniestro, y sin motivo aparente, dejo de funcionar el {{formData.danos}}.', name: 'Sin motivo aparente'},
     {id: 'Que en fecha de siniestro, fueron a utilizar el {{formData.danos}}, y observaron que no se ponía en marcha.', name: 'No se pone en marcha'},
       {id: 'Que posterior a varios cortes de suministro eléctrico sobre las {{formData.hora}} , dejó de funcionar el {{formData.danos}}', name: 'Varios cortes'}

   ],
  };
}]);

addCtrl.controller('pieza', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'el motor eléctrico del compresor', name: 'Motor compresor'},
     {id: 'el bobinado del motor', name: 'Bobinado de motor'},
     {id: 'la fuente de alientación', name: 'Fuente de alimentación'},
       {id: 'la placa de control', name: 'Placa de control'}

   ],
  };
}]);

addCtrl.controller('circunstancias3', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Avisaron a un servicio técnico particularmente, el cual se desplazó al riesgo y tras comprobar el {{formData.danos}}, localizó daños en {{formData.pieza}}.', name: 'Avisaron a un servicio'},
     {id: 'Indica que hay más afectados en la zona.', name: 'Mas afectados'},
     {id: 'No ha avisado al servicio técnico, por que estaba a la espera de valoración por parte de su compañía aseguradora.', name: 'No avisa a servicio'}


   ],
  };
}]);

addCtrl.controller('circunstancias4', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Se han desecho del aparato afectado.', name: 'Se han desecho'},
     {id: '"El aparato se lo ha llevado el servicio técnico.', name: 'El servicio se lleva pieza'},
     {id: 'No ha avisado al servicio técnico, por que estaba a la espera de valoración por parte de su compañía aseguradora.', name: 'No avisa a servicio'}


   ],
  };
}]);


addCtrl.controller('circunstancias5', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Intento poner en funcionamiento el aparato, comprobando que no se pone en funcionamiento.', name: 'No funciona'},
     {id: '"El Asegurado muestra la pieza sustituida. Compruebo que sufre daños de origen eléctrico en su etapa primaria', name: 'Muestra  pieza'}



   ],
  };
}]);

addCtrl.controller('utilidad', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Principal', name: 'Principal'},
     {id: 'Secundaria', name: 'Secundaria'},
     {id: 'Restaurante', name: 'Restaurante'}


   ],
  };
}]);

addCtrl.controller('protecciones', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Puerta blindada y rejas en ventanas a menos de 3 metros del suelo', name: 'Puerta blin y rejas'},
     {id: 'Puerta maciza', name: 'Maciza'},
     {id: 'Puerta blindada', name: 'Blindada'},
     {id: 'Puerta blindada y alarma', name: 'Blindada y alarma'},
     {id: 'Las que constan en póliza', name: 'Las que constan'},


   ],
  };
}]);

addCtrl.controller('construccion', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Solidad de ladrillo', name: 'Ladrillo'},
     {id: 'Solida de bloque', name: 'Bloque'},
     {id: 'Madera', name: 'Madera'},
       {id: 'Solidad de hormigón', name: 'Solida de hormigón'}


   ],
  };
}]);

addCtrl.controller('estado', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Buendo', name: 'Bueno'},
     {id: 'Falta de mantenimiento', name: 'Falta mantenimiento'},
     {id: 'Malo', name: 'Malo'}



   ],
  };
}]);

addCtrl.controller('garantia1', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Mobiliario', name: 'Mobiliario'},
     {id: 'Contenido', name: 'Contenido'}


   ],
  };
}]);

addCtrl.controller('garantia2', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'Edificación', name: 'Edificiación'},
     {id: 'Continente', name: 'Continente'}


   ],
  };
}]);

addCtrl.controller('articulo', ['$scope', function($scope) {
  $scope.data = {
   model: null,
   availableOptions: [
     {id: 'FENOMENOS ELECTRICOS', name: 'Fenómenos eléctricos'},
     {id: 'DAÑOS ELETRICOS', name: 'Daños eléctricos'},
      {id: 'AVERIA DE MAQUINARIA', name: 'Avería de maquinaria'},
       {id: 'ROTURA', name: 'Rotura'},
        {id: 'INCENDIO', name: 'Incendio'},
         {id: ' AGUA', name: 'Agua'}


   ],
  };
}]);
