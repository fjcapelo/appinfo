// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('gservice', [])
    .factory('gservice', function($http){

        // Initialize Variables
        // -------------------------------------------------------------
        // Service our factory will return
        var googleMapService = {};

        // Array of locations obtained from API calls
        var locations = [];

        // Selected Location (initialize to center of spain)
        var selectedLat = 40.4378698;
        var selectedLong = -3.8196207;

        // Functions
        // --------------------------------------------------------------
        // Refresh the Map with new data. Function will take new latitude and longitude coordinates.
        googleMapService.refresh = function(latitude, longitude){

            // Clears the holding array of locations
            locations = [];

            // Set the selected lat and long equal to the ones provided on the refresh() call
            selectedLat = latitude;
            selectedLong = longitude;


            // Perform an AJAX call to get all of the records in the db.
            $http.get('/data').success(function(response){



                // Convert the results into Google Map Format
                locations = convertToMapPoints(response);

                // Then initialize the map.
                initialize(latitude, longitude);
            }).error(function(){});
        };
        googleMapService.refresh2 = function(latitude, longitude, fecha, distance){

            // Clears the holding array of locations
            locations = [];

            // Set the selected lat and long equal to the ones provided on the refresh() call
            selectedLat = latitude;
            selectedLong = longitude;
            selectfecha = fecha;

            var userData2 = {

              lat: latitude,
              lon: longitude,
              distance: distance,
              fecha: fecha
          };

            // Perform an AJAX call to get all of the records in the db.
            $http.post('/query', userData2)
                .success(function (response) {
                  console.log ("QueryBody:");
                  console.log (userData2);
                  console.log ("QueryResults:");
                  console.log (response);

                  //$scope.queryCount = data2.length;



                // Convert the results into Google Map Format
                locations = convertToMapPoints2(response);

                // Then initialize the map.
                initialize2(latitude, longitude, distance);
            }).error(function(){});
        };

        // Private Inner Functions
        // --------------------------------------------------------------
        // Convert a JSON of users into map points
        var convertToMapPoints2 = function(response){

            // Clear the locations holder
            var locations = [];


            // Loop through all of the JSON entries provided in the response
            for(var i= 0; i < response.length; i++) {
                var user = response[i];

                // Create popup windows for each record
                var  contentString =
                    '<p><b>Fecha</b>: ' + user.fecha +
                      '<p><b>Longitud</b>: ' + user.location[0] +

                  '</p>';

                // Converts each of the JSON records into Google Maps Location format (Note [Lat, Lng] format).
                locations.push({
                    latlon: new google.maps.LatLng(user.location[1], user.location[0]),
                    message: new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 320
                    }),
                    distancia: user.distance,
                    lat: user.location[1],
                    lon: user.location[0]

            });
        }
        // location is now an array populated with records in Google Maps format
        return locations;
    };

    // Convert a JSON of users into map points
    var convertToMapPoints = function(response){

        // Clear the locations holder
        var locations = [];


        // Loop through all of the JSON entries provided in the response
        for(var i= 0; i < response.length; i++) {
            var user = response[i];

            // Create popup windows for each record
            var  contentString =
                '<p><b>time</b>: ' + user.distancia +
                '<br><b>Alt</b>: ' + user.time +
                '<br><b>Pol</b>: ' + user.lat +
                '<br><b>mds</b>: ' + user.lon +
                '<br><b>mcg</b>: ' + user.alt +
                '</p>';

            // Converts each of the JSON records into Google Maps Location format (Note [Lat, Lng] format).
            locations.push({
                latlon: new google.maps.LatLng(user.lat, user.lon),
                message: new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 320
                }),
                distancia: user.distancia,
                time: user.time,
                lat: user.lat,
                lon: user.lon,
                alt: user.alt
        });
    }
    // location is now an array populated with records in Google Maps format
    return locations;
    };

// Initializes the map
var initialize = function(latitude, longitude) {

    // Uses the selected lat, long as starting point
    var myLatLng = {lat: selectedLat, lng: selectedLong};

    // If map has not been created already...
    if (!map){

        // Create a new map and place in the index.html page
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,//zoom del mapa
          center: myLatLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP, //tipo de mapa
          streetViewControl: false,
          zoomControl: false,
          mapTipeControl: false,
          scrollwheel: false
        });
    }

    // Loop through each location in the array and place a marker
   locations.forEach(function(n, i){
        var marker = new google.maps.Marker({
            position: n.latlon,
            map: map,
            title: "Big Map",
            icon: "imagenes/icono_rayo.png"
        });

        // For each marker created, add a listener that checks for clicks
        google.maps.event.addListener(marker, 'click', function(e){

            // When clicked, open the selected marker's message
            currentSelectedMarker = n;
            n.message.open(map, marker);
        });
    });



    // Set initial location as a bouncing red marker
    var initialLocation = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
        position: initialLocation,
        //animation: google.maps.Animation.BOUNCE,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
    lastMarker = marker;

};
//nitializes the map
var initialize2 = function(latitude, longitude, distance) {

    // Uses the selected lat, long as starting point
    var myLatLng = {lat: selectedLat, lng: selectedLong};
    var zxzoom = "";

   if (distance == "50"){
      zxzoom = 14;

    } else if (distance == "100"){
      zxzoom = 10;

    } else if (distance == "200"){
      zxzoom = 7;
     }
     console.log (zxzoom);



    // If map has not been created already...
    if (!map){

        // Create a new map and place in the index.html page
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: zxzoom,//zoom del mapa
          center: myLatLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP, //tipo de mapa
          streetViewControl: false,
          zoomControl: true,
          mapTipeControl: false,
          scrollwheel: false
        });
    }

    // Loop through each location in the array and place a marker
   locations.forEach(function(n, i){
        var marker = new google.maps.Marker({
            position: n.latlon,
            map: map,
            title: "Big Map",
            icon: "imagenes/icono_rayo.png"
        });

        // For each marker created, add a listener that checks for clicks
        google.maps.event.addListener(marker, 'click', function(e){

            // When clicked, open the selected marker's message
            currentSelectedMarker = n;
            n.message.open(map, marker);
        });
    });



    // Set initial location as a bouncing red marker
    var initialLocation = new google.maps.LatLng(latitude, longitude);
    var marker = new google.maps.Marker({
        position: initialLocation,
        //animation: google.maps.Animation.BOUNCE,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
    lastMarker = marker;

};

// Refresh the page upon window load. Use the initial latitude and longitude
google.maps.event.addDomListener(window, 'load',
    googleMapService.refresh(selectedLat, selectedLong));

return googleMapService;







});
