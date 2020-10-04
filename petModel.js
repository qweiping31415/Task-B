var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose)
const {
    routeWithID,
    routeWithoutID,
    SINGLE_ENTITY,
} = require("./constants");


// {
//   "name" :"Bob",
//   "price": 50,
//   "breed":"Male"
// }




// set-up the schema
var petSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
}, {_id: false});

petSchema.plugin(AutoIncrement);

var Pet = module.exports = mongoose.model("pet", petSchema);

module.exports.get = function(callback, limit) {
    Pet.find(callback).limit(limit);
}



// {
//     "name": "John 4",
//   "gender": "Male",
//   "email": "john@example.org",
//   "phone": "12345678"
// }