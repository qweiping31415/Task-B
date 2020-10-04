// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
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
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}


// {
//     "name": "John 4",
//   "gender": "Male",
//   "email": "john@example.org",
//   "phone": "12345678"
// }