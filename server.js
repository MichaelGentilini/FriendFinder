// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var router = require('Router');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// ! middleware to parse to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// ! Start server listening

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});