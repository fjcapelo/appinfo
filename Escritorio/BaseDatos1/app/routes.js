// Dependencies
var mongoose        = require('mongoose');
var User            = require('./model.js');
var Data            = require('./model2.js');
var Schema          = mongoose.Schema;


// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db

    app.get('/users', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({});
        query.exec(function(err, users){
            if(err)
                res.send(err);
//console.log (users);
            // If no errors are found, it responds with a JSON of all users
            res.json(users);
        });
    });

    app.get('/data', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = Data.find({});

        query.exec(function(err, users1){
            if(err)
                res.send(err);
//console.log (users1);
            // If no errors are found, it responds with a JSON of all users
            res.json(users1);
        });
    });


    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    app.post('/data', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newuser = new Data(req.body);
      //  console.log(req.body);

        // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);
                  res.json(req.body);

            // If no errors are found, it responds with a JSON of the new user
            //res.json(req.body);
        });
    });
    app.post('/users', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newuser = new User(req.body);
        //console.log(req.body);

        // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });

    //**********************************************************
    app.post('/prueba', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
      var semi = req.body.latitude;
    //  console.log(semi);

    });

    var UserSchema = new Schema({
        usuario: {type: String, required: true},
        direccion:{type: String, required: true},
         fecha: {type: String, required: true},
        location: {type: [Number], required: true}, // [Long, Lat]
        created_at: {type: Date, default: Date.now},
        updated_at: {type: Date, default: Date.now}
    });



    // Retrieves JSON records for all users who meet a certain set of query conditions
app.post('/query', function(req, res){


    var lat = req.body.lat;
    var long = req.body.lon;
    var distance = req.body.distance;
    var fecha = req.body.fecha;

    //console.log(req.body);


    UserSchema.index({location: '2dsphere'});
    var base1 = fecha;
    console.log (base1);

    // Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
    var Modelobase = mongoose.model(base1, UserSchema);


    // Opens a generic Mongoose Query. Depending on the post body we will...
    var query = Modelobase.find({});

    // ...include filter by Max Distance (converting miles to meters)
    if(distance){

        // Using MongoDB's geospatial querying features. (Note how coordinates are set [long, lat]
        query = query.where('location').near({ center: {type: 'Point', coordinates: [long, lat]},

            // Converting meters to miles. Specifying spherical geometry (for globe)
            //maxDistance: distance * 1609.34, spherical: true
            maxDistance: distance * 1000, spherical: true});
    }

    // ... Other queries will go here ...

    // Execute Query and Return the Query Results
    query.exec(function(err, users){
        if(err)
            res.send(err);


//console.log(users);
        // If no errors, respond with a JSON of all users that meet the criteria
        res.json(users);
    });
});
};
