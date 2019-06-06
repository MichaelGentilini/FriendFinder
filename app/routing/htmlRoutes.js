var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var fs = require('fs');
// Routes
// =============================================================
module.exports = function (app) {
  app.get("/survey", function (req, res) {
    // res.send("Hello World!!");
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
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

  // function css(request, response) {
  //   if (request.url === '../public/css/styles.css') {
  //     response.writeHead(200, {
  //       'Content-type': 'text/css'
  //     });
  //     var fileContents = fs.readFileSync('../public/css/styles.css', {
  //       encoding: 'utf8'
  //     });
  //     response.write(fileContents);
  //   }
  // }

  app.use("/", function (req, res) {
    // css(req, res);
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
  });

  // set static folder /
  app.use(express.static(path.join(__dirname, "..", "public")));


  app.get("/main.html", function (req, res, next) {
    res.sendFile(__dirname, +'/main.html');

  });

};