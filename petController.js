// petController.js
// Import contact model
Pet = require('./petModel');
// Handle index actions
const {
    routeWithID,
    routeWithoutID,
    SINGLE_ENTITY,
    COLLECTION_ID
} = require("./constants");

exports.index = function(req, res) {
    Pet.get(function(err, pets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return;
        }
        res.json({
            status: "success",
            message: "Pets retrieved successfully",
            data: pets
        });
    })
};



// Handle create/POST actions
exports.new = function(req, res) {
    var pet = new Pet();

    const validation = validateNewPet(req);
    if (validation === false) {
        res.json({
            status:"New pet does not have proper inputs",
            message: "New pet does not have proper inputs"
        });
        return;
    }

    const { name, price, breed} = validation;
    pet.name = name;
    pet.price = price;
    pet.breed = breed;



    // check for duplicates
    Pet.findOne({name: pet.name, price: pet.price, breed: pet.breed}, function(err, found) {
        if (err) {
            res.json({
                status:"Error, please try again",
                message: err
            });
            return;
        }

        if (found) {
            res.json({
                status: "Already saved inside!",
                message: "Duplicate entry"
            });
            return;
        } else {
            pet.save(function (err, data) {
                if (err) {
                    res.json({
                        status: "Error!",
                        message: err
                    });
                    return;
                } else {
                    res.json({
                        message: 'New pet created!',
                        data: pet
                    });
                }
            })
        }
    });

};



exports.view = function(req, res) {
    Pet.findById(req.params.pet_id, function(err, pet) {
        if (err) {
            res.send(err);
            return;
        }
        res.json({

            message: 'Pet details loading..',
            data: pet
        });
    })
}

// Handle Updates
// Handle update contact info

exports.update = function (req, res) {
    Pet.findById(req.params.pet_id, function (err, pet) {
        if (err) {
            res.send(err);
            return;
        }
        try {
            pet.name = req.body.name ? req.body.name : pet.name;
            pet.price = req.body.price? req.body.price: pet.price;
            pet.breed = req.body.breed? req.body.breed: pet.breed;
            // save the contact and check for errors
            pet.save(function (err) {
                if (err) {
                    res.json(err);
                    return;
                }
                res.json({
                    message: 'Pet Info updated',
                    data: pet
                });
            });
        } catch (err) {
            res.json({
                status: "Error!",
                message: err
            })
            return;
        }
    });
};




// Handle delete contact
exports.delete = function (req, res) {
    Pet.remove({
        _id: req.params.pet_id
    }, function (err, data) {
        if (err) {
            res.send(err);
            return;
        } else {
            res.json({
                status: "success",
                message: 'Pet deleted',
                data: data
            });
        }
    });
};




function validateNewPet(req) {
    const { name, price, breed } = req.body;
    if (name.trim()=== "") {
        return false;
    } else if (price < 0) {
        return false;
    } else if (breed.trim()=== "") {
        return false;
    }

    return req.body;
}

