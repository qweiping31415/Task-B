// petModel.js
var mongoose = require('mongoose');
const {
    petsCollection,
    routeWithID,
    routeWithoutID,
    SINGLE_ENTITY,
} = require("./constants")

// Setup schema
var petSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Pet = module.exports = mongoose.model(SINGLE_ENTITY, petSchema);
module.exports.get = function (callback, limit) {
    Pet.find(callback).limit(limit);
}


// {
//     "name": "John 4",
//   "gender": "Male",
//   "email": "john@example.org",
//   "phone": "12345678"
// }