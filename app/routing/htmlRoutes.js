var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
  });


  app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
  });

  // set static folder /
  app.use(express.static(path.join(__dirname, "..", "public")));


  app.get("/main.html", function (req, res, next) {
    res.sendFile(__dirname, +'/main.html');

  });

};