// ? add event listener to submit button
var answers = $('.questions').find(".slider");
console.log(answers);
for (let i = 0; i < answers.length; i++) {


  // console.log($(this).value) 
  // console.log("val" + [i] +
  // " = " + answers[i].value)
}

// answers.forEach(function (answer) {
//   console.log(answer)
//   // console.log('hi')
//   // console.log(this.value);
// })


// answers.forEach(input =

// console.log(this.value);

$("#submitFriend").on("click",
  function (event) {
    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: []
    };
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    var q4 = $("#q4").val();
    var q5 = $("#q5").val();
    var q6 = $("#q6").val();
    var q7 = $("#q7").val();
    var q8 = $("#q8").val();
    var q9 = $("#q9").val();
    var q10 = $("#q10").val();

    newFriend.scores.push(parseInt(q1), parseInt(q2), parseInt(q3), parseInt(q4), parseInt(q5), parseInt(q6),
      parseInt(
        q7), parseInt(q8), parseInt(q9), parseInt(q10));
    console.log(newFriend);


    function getSum(total, num) {
      return total + num;
    }
    console.log("This Friend's Score is " + newFriend.scores.reduce(getSum));
  });

module.exports = newFriend;