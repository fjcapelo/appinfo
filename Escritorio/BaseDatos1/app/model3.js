var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var UserSchema = new Schema({
    lat: {type: Number, required: true},
    lon:{type: Number, required: true},
     distance: {type: Number, required: true},
    fecha: {type: String, required: true}

});




// Indexes this schema in 2dsphere format (critical for running proximity searches)

UserSchema.index({location: '2dsphere'});
var base1 = 'geobase11';

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model(base1, UserSchema);
