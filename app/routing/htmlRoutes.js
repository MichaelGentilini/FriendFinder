var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/survey", function (req, res) {
    // res.send("Hello World!!");
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
  });

  app.get("/hello", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "hello.html"));
  });

  app.get("/hello/:newFriend", function (req, res, next) {
    res.send(200, req.params.newFriend, );
  });

  app.post("/survey", function (req, res, next) {
    // console.log(req.body);
    var name = req.body.name;
    // console.log(req)
    // console.log(res)
    console.log('something');
    res.send('Post working in PostMan')
    // res.redirect('/hello/' + name);
    // res.render(200, res.body);
  });


  app.use("/", function (req, res) {

    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
  });

  // set static folder /
  app.use(express.static(path.join(__dirname, "..", "public")));





};