let mongoose = require('mongoose');
const { app } = require("./app");
// Import routes
let apiRoutes = require("./api-routes");
const DEV_DB = "mongodb://localhost/resthub";


// Connect to Mongoose and set connection variable
mongoose.connect(DEV_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Added check for DB connection
if (!db) {
    console.log("Error connecting db");
} else {
    console.log("Db connected successfully");
}


// Setup server port
var port = process.env.PORT || 8080;

//Routes
app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/api", apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log(`Running backend on port ${port} on development mode`);
});