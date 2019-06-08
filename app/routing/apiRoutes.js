module.exports = function (app) {
  // // var express = require("express");
  // var path = require("path");
  // var fs = require("fs");
  var friends = require("../data/friends");


  // ? get single friend **Not necessary but done for learning
  app.get("/api/friends/:name", function (req, res, next) {
    for (var i = 0; i < friends.length; i++) {
      var name = friends[i].name;
    }

    // ? Search if a friend exists by name
    if (name === req.params.name) {
      res.status(200).json({
        msg: req.params.name + " found"
      });
    } else {
      res.status(400).json({
        msg: req.params.name + " not found"
      });
    }
    console.log("name", name);
    console.log("param", req.params.name);
  });


  // ? get /api/friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
    console.log(req.path);
  });

  // ? This is where the magic happens
  app.post("/api/friends", function (req, res) {
    // var totalDiff;
    var diffArr = []; // * this is needed to score the differences
    var user = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores,
    };

    // ! function to add scores together
    function getSum(total, num) {
      return parseInt(total) + parseInt(num);
    }
    // !  map scores from integer to numbers
    var userTotal = req.body.scores.map(function (count) {
      return parseInt(count, 10);
    });

    // !  use reduce to get current user total
    userTotal = userTotal.reduce(getSum);

    console.log("\n\t\t----- Current User ----\n");
    console.log("Name: " + user.name);
    console.log("Total: " + userTotal);

    console.log('\n\t\t--- There are ' + friends.length + ' friends ---');

    for (let i = 0; i < friends.length; i++) {
      console.log("\nName: \t\t", friends[i].name);

      var friendsScore = friends[i].scores.reduce(getSum);
      console.table[friends];
      console.log("Total: \t\t " + friendsScore);
      friendsDifference = Math.abs(userTotal - friendsScore);
      console.log('Diff: \t', friendsDifference);

      //?  push the differences of each friend to an array
      diffArr.push(friendsDifference);
    }
    // ? Assign the index of the lowest number in the array to match
    var match = diffArr.indexOf(Math.min(...diffArr));

    console.log("\n\n😊  😊  " + user.name + ", your match is " + friends[match].name + " 😊  😊");
    // ? The current user needs to be pushed after the match has been made
    friends.push(user);


    // ! Show the Match
    res.json(match);
  }); //post /api/friends
} //module.exports