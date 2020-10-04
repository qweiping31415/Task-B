const serverless = require("serverless-http");
let mongoose = require('mongoose');
const { app } = require("./app");
// Import routes
let apiRoutes = require("./api-routes");
require('dotenv').config({ path: './variables.env' });

// set up CORS for the UI
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, DELETE, GET");
  next();
});


mongoose.connect(
  process.env.DEPLOYMENT_DB,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

var db = mongoose.connection;

// Added check for DB connection
if (!db) {
  console.log("Error connecting db");
} else {
  console.log("Db connected successfully");
}


//Routes
app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/api", apiRoutes);


// Setup server port
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Running backend on port ${port} for deployment`);
});


module.exports = {
  server: app,
  handler: serverless(app),
};
