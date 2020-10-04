// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var petController = require('./petController');

const {
    petsCollection,
    routeWithID,
    routeWithoutID,
    SINGLE_ENTITY,
    COLLECTION_ID
} = require("./constants");


// Contact routes
router.route(routeWithoutID)
    .get(petController.index)
    .post(petController.new);

router.route(routeWithID)
    .get(petController.view)
    .patch(petController.update)
    .put(petController.update)
    .delete(petController.delete);


// Export API routes
module.exports = router;