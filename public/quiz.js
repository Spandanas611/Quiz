var questions = [];
var choices = [];
var answer = [];
var userAnswer = [];
var i = 0;

questions = ["To the well-organized mind, death is but the next great adventure.",
  "Time will not slow down when something unpleasant lies ahead.",
  "What is Harry's wand made of?",
  "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
  "It is our choices ... that show what we truly are, far more than our abilities.",
  "Who lost an ear in Harry Potter and the half-blood prince?",
  "What's the only book in the Harry Potter series that doesn't feature Lord Voldemort?",
  "How many owls did Ron get?",
  "In Harry Potter and the Sorcerer's Stone, the first book, a magical creature named Fluffy guards a trapdoor. What kind of creature is Fluffy?",
  "Which horse-like creatures pull the school carriages at Hogwarts?"
];

answer = ["Albus Dumbledore", "Harry Potter","Phoenix feather", "Sirius Black", "Albus Dumbledore","George Weasley",
          "Prisoner of Askaban","Seven","A Hellhound also known as three-headed dog","Thestrals"
];

choices = [
  ["Albus Dumbledore", "Harry Potter", "Sirius Black", "Hermione Granger"],
  ["Professor McGonagall", "Professor Snape", "Harry Potter", "Rubeus Hagrid"],
  ["Unicorn's hair","Phoenix feather","Tail hair of a Thestral","Dragon heartstring"],
  ["Sirius Black", "Albus Dumbledore", "Lord Voldemort", "Narcissa Malfoy"],
  ["Remus Lupin", "Lily Potter", "Luna Lovegood", "Albus Dumbledore"],
  ["Mad Eye Moody","George Weasley","Bill Weasley","Remus Lupin"],
  ["Prisoner of Askaban","Harry Potter and the half-blood prince","Harry Potter and the Goblet of Fire","Harry Potter and the Chambers of Secret"],
  ["Eleven","Three","Five","Seven"],
  ["Unicorns","A Hellhound also known as three-headed dog","Thestrals","Spiders"],
  ["Aragog","Werewolf","Thestrals","Hippogriffs"]

];

if (i == 0) {

  $(document).ready(function() {
    $(document).keypress(function() {
      $(".container").addClass("start");
      nextQuestion();

    });
  });
}

function nextQuestion() {

  $("#q").text("Question " + (i + 1) + " : " + questions[i]);
  $(".a").text(choices[i][0]);
  $(".b").text(choices[i][1]);
  $(".c").text(choices[i][2]);
  $(".d").text(choices[i][3]);
}



$(".options").click(function () {

    var radioValue = $(".options:checked").val();
                if (radioValue) {
                // alert("i: " + i + "value: " + radioValue);
                var ans = choices[i][radioValue];
                userAnswer.push(ans);

                i++;
                 if(i == 10) {
                   $(".sub").css("visibility", "visible");
                 }
                 else {
                   setTimeout(function() {
                     // alert(i);
                     $(".options").prop("checked", false);

                     nextQuestion();
                   }, 1000);

                 }
                 // alert(userAnswer);

               }

});


$(".sub").click(function () {
  var score = 0;
  var x = 0;
  while (x < 10) {
    if(userAnswer[x] == answer[x])
      score++;
    x++;
  }
  // alert(score);
  $("#q").text("CONGRATS!! \n Score: " +score);
  $(".container").removeClass("start");
  // $(".submit").text("Try Again").click(function () {
  //   redirect("/");
  //   userAnswer = [];
  //   i = 0;
  //   nextQuestion();
  // });
});














// $(".btn").click(function() {
//   $("#text").text("Bye!");
// });
