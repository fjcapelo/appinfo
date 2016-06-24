// Pulls Mongoose dependency for creating schemas
// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var UserSchema1 = new Schema({
    distancia: {type: Number, required: true},
    time:{type: Number, required: true},
     lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    alt: {type: Number, required: true}

});



// Indexes this schema in 2dsphere format (critical for running proximity searches)
UserSchema1.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('geonew', UserSchema1);
