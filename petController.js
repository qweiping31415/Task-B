// petController.js
// Import contact model
Pet = require('./petModel');
// Handle index actions
const {
    petsCollection,
    routeWithID,
    routeWithoutID,
    SINGLE_ENTITY,
    COLLECTION_ID
} = require("./constants");

exports.index = function (req, res) {
    Pet.get(function (err, pets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Pets retrieved successfully",
            data: pets
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var pet = new Pet();
    pet.name = req.body.name ? req.body.name : pet.name;
    pet.gender = req.body.gender;
    pet.email = req.body.email;
    pet.phone = req.body.phone;
// save the contact and check for errors
    pet.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: `New ${SINGLE_ENTITY} created!`,
                data: pet
            });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Pet.findById(req.params[COLLECTION_ID], function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Pet details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Pet.findById(req.params[COLLECTION_ID], function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Pet Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Pet.remove({
        _id: req.params[COLLECTION_ID]
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Pet deleted'
        });
    });
};