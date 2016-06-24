// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.
// Creates the addCtrl Module and Controller. Note that it depends on the 'geolocation' module and service.
var addCtrl = angular.module('addCtrl', ['geolocation','gservice','ngRoute']);
addCtrl.controller('addCtrl', function($scope, $http, $location, geolocation,gservice){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;
    var self = this;


    // Set initial coordinates to the center of the US
    $scope.formData.usuario = "Pepe";
    $scope.formData.latitude = "";
    $scope.formData.longitude = "";
    $scope.formData.distancia = "32";
    $scope.formData.time = "542354353";
    $scope.formData.alt = "3";
    $scope.formData.distance = "";
    latitudeini = 40.4378698;
    longitudeini = -3.8196207;

    gservice.refresh(latitudeini, longitudeini);


    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields
    $scope.createUser = function() {


       var patron = ".";
      var fecha1 = $scope.formData.fecha;
      var second = fecha1.replace(patron,'');
      basefecha = second.replace(patron,'');
      distance =  $scope.formData.distance;

//gservice.refresh($scope.formData.latitude, $scope.formData.longitude);

        // Grabs all of the text box fields
        var userData = {
            usuario: $scope.formData.usuario,
            direccion : $scope.formData.direccion,
            location: [$scope.formData.longitude, $scope.formData.latitude],
            fecha:  basefecha

        };
        var userData1 = {
          distancia: $scope.formData.distancia,
          time: $scope.formData.time,
          lat: parseFloat($scope.formData.latitude),
          lon: parseFloat($scope.formData.longitude),
          distance: parseFloat($scope.formData.distance),
           alt: $scope.formData.alt

      };


      $http.post('/data', userData1)
            .success(function (data1) {
              //console.log (userData1);

            })
            .error(function (data1) {
                console.log('Error: ' + data1);
            });
            /**********************************************************

            $http.post('/query', userData1)
                .success(function (data2) {
                  console.log ("QueryBody:");
                  console.log (userData1);
                  console.log ("QueryResults:");
                  console.log (data2);

                  $scope.queryCount = data2.length;

                })
                .error(function (data2) {
                    console.log('Error: ' + data2);
                });
//*************************************************************************/
        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {

                // Once complete, clear the form (except location)
              //  $scope.formData.direccion = "";
              //  $scope.formData.fecha = "";
              //  $scope.formData.latitude = "";
                //$scope.formData.longitude = "";



var lat = $scope.formData.latitude;
var lon = $scope.formData.longitude;
var direccion = $scope.formData.direccion;
var fec = $scope.formData.fecha;
var ciudad1 = $scope.formData.codePostal;
  $location.url('/prueba/' + lat + '/' + lon + '/' + fec+ '/' + ciudad1);

  gservice.refresh2($scope.formData.latitude, $scope.formData.longitude, basefecha, distance);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });



    };

    var input = document.getElementById('direccion');

    var autocomplete = new google.maps.places.Autocomplete(input);


    //window.alert("Autocomplete's returned place contains no geometry");
    autocomplete.addListener('place_changed', function() {

    var place = autocomplete.getPlace();
    var lati = place.geometry.location.lat();
    var lngi = place.geometry.location.lng();
    var ciudad1 = place.formatted_address; // Ciudad



    if (!place.geometry) {
    window.alert("Autocomplete's returned place contains no geometry");
      }
      else
      {
           $scope.formData.latitude = lati;
             $scope.formData.longitude = lngi;
             $scope.formData.codePostal = ciudad1
        //  document.getElementById("lng").setAttribute("value", lngi);// window.alert(place.geometry.location.lat());
      }

    });


});
