let mongoose = require('mongoose');
const { app } = require("./app");
// Import routes
let apiRoutes = require("./api-routes");
const TESTING_DB = "mongodb://localhost/test";

// Connect to Mongoose and set connection variable
mongoose.connect(TESTING_DB, { useNewUrlParser: true});
var db = mongoose.connection;

const Pet = require("./petModel");

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else {
    console.log("Db connected successfully");
    Pet.deleteMany(); // reset database
}

// Setup server port
var port = process.env.PORT || 8080;

//Routes
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log(`Running backend on port ${port} for testing`);
});

module.exports = app



/*



exports.validateSignupData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = 'Must not be empty';
    } else if (!isEmail(data.email)) {
        errors.email = 'Must be a valid email address';
    }

    if (isEmpty(data.password)) errors.password = 'Must not be empty';
    if (data.password !== data.confirmPassword)
        errors.confirmPassword = 'Passwords must match';
    if (isEmpty(data.handle)) errors.handle = 'Must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    };
};

exports.validateLoginData = (data) => {
    let errors = {};

    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    };
};

exports.reduceUserDetails = (data) => {
    let userDetails = {};

    if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if (!isEmpty(data.website.trim())) {
        // https://website.com
        if (data.website.trim().substring(0, 4) !== 'http') {
            userDetails.website = `http://${data.website.trim()}`;
        } else userDetails.website = data.website;
    }
    if (!isEmpty(data.location.trim())) userDetails.location = data.location;

    return userDetails;
};


 */