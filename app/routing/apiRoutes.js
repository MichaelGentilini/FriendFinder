var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("../data/friends");
// var newFriends = require("../public/js/index");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
    console.log(req.path);
  });

  // ? get single friend

  app.get("/api/friends/:name", function (req, res, next) {
    for (let i = 0; i < friends.length; i++) {
      var name = friends[i].name;
    }

    if (name === req.params.name) {
      res.status(200).json({
        msg: req.params.name + " found"
      });
      // res.send(req.params.name + " found");
      // res.json(friends);
    } else {
      res.status(400).json({
        msg: req.params.name + " not found"
      });
    }
    console.log("name", name);
    console.log("param", req.params.name);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body.name);
    console.log(req.body.photo);

    var difference = 0;
    var match = {
      name: req.body.name,
      photo: req.body.photo,
      scores: difference
    }

    console.log(match);

    console.log("\n\t\t----- Friend Scores ----\n");
    friends.forEach(function (friend) {
      console.log(friend.scores);
    })

    console.log("\n\t\t----- Your Scores ----\n");
    console.log(req.body.scores);

    function getSum(total, num) {
      return parseInt(total) + parseInt(num + 0);
    }
    var sum = req.body.scores.reduce(getSum);
    console.log(sum);


    // req.body.scores.forEach(score => {
    //   return parseInt(difference += score);
    // })
    // console.log(difference);

    // ! The current user needs to be pushed after the match has been made
    friends.push(req.body);
  });


  // res.json(friends.filter(function (friend) {

  //   // console.log(friend.name, req.params.name)
  //   friend.name == req.params.name
  //   console.log(req.params.name)
  //   // console.log('found him')
  // }))

  // 
  //   var difference = 0;
  //   var match = {
  //     name: "",
  //     photo: "",
  //     friendDifference: 1000
  //   };

  //   var user = req.body;
  //   var userName = user.name;
  //   var userScore = user.scores;

  //   var b = userScore.map(function (count) {
  //     return parseInt(count, 10);
  //   });

  //   user = {
  //     name: req.body.name,
  //     photo: req.body.photo,
  //     scores: b
  //   };

  //   console.log("name " + userName);
  //   console.log("scores " + userScore);

  //   var sum = b.reduce(function (total, num) {
  //     return total + num;
  //   })
  //   console.log("sum of scores is " + sum);
  //   console.log("bestmatch diff " + match.difference);

  //   // Displays all friends in the database
  //   // app.get("/api/friends", function (req, res) {
  //   //   return res.json(friends);
  //   // });
  //   for (let i = 0; i < friends.length; i++) {
  //     console.log(friends[i].name);
  //     difference = 0;
  //     console.log(difference);
  //     console.log(match.difference);

  //     var matchScore = b.reduce(function (total, num) {
  //       return total + num;
  //     });
  //     console.log("friendsScore " + matchScore);
  //     difference += Math.abs(sum - matchScore);
  //     console.log('------------------------------' + difference);

  //     if (difference <= match.difference) {
  //       match.name = friends[i].name;
  //       match.photo = friends[i].photo;
  //       match.scores = friends[i].scores;
  //     }
  //     console.log(difference);

  //   }

  //   console.log(match);
  //   friends.push(user);
  //   console.log("new user added");
  //   console.log(user);
  //   res.json(match);

  //   // Create New friends - takes in JSON input
  // });
};