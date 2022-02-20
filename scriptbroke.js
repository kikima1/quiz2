
("use strict")

const q_a_data = [
  {
    question: "What is her favorite color?",
    answers: ["blue","green", "yellow","doesn't have one"],
    correct_choice: 3
  },
  {
    question: "Which instrument is she best at?",
    answers: [ "fiddle", "guitar", "piano", "mandolin" ],
    correct_choice: 0
  },
  {
    question: "What is her favorite instrument to play?",
    answers: [ "fiddle", "guitar", "piano", "mandolin" ],
    correct_choice: 2
  }
  
];



var turn = 0;
var score = 0;

//see script1 to check out what was commented out
$("#score").text("Current score = " + score + " points");

showQuestion();


function showQuestion() {
  // set the counter and score
  
  $("#counter").text("Question # " + (turn +1));


 
 
  $('#question').text(q_a_data[turn].question);
  
  $('#answers').empty();
  
 for ( let index in q_a_data[turn].answers ) {
  
 var button = $("<button>");
 button.text( q_a_data[turn].answers[index] ); 
 $('#answers').append( button );
  
  button.click(
    function() {

        checkAnswer(index);
    }
  );
  }
}


function checkAnswer(choice) {
    
    if ( choice == q_a_data[turn].correct_choice ) {
      
      //document.getElementById("try_again").innerHTML = "";
      $("#try_again").empty;
      //document.getElementById("right").innerHTML = "Correct answer!";
      $("#right").text("Correct answer!");
      
      //document.getElementById("score").innerHTML = "Current score = " + (score += 1) + " points";
      $("#score").text("Current score = " + (score += 1) + " points");

     
      nextQuestion();
      
    } else {
      
      $("#try_again").text("Try Again!");
      //document.getElementById("try_again").innerHTML = "Try Again!";
      $("#right").empty;
      //document.getElementById("right").innerHTML = "";
      //nextQuestion();
    }
    
}


function nextQuestion() {
  turn++;
  if ( turn < q_a_data.length ) {
    showQuestion();
  
  }
  else {
    

switch(score){//DON'T NEED THE SWITCH CASE IN THIS VERSION BUT LEFT IN SO COULD PRACTICE THE JQUERY SYNTAX
    
case 0:
  //document.getElementById("knowledge").innerHTML = "You may not know her very well!";
  $("#knowldedge").text("You may not know her very well!");
  break;
case 1:
  //document.getElementById("knowledge").innerHTML = "Good guess!";
    $("#knowldedge").text("Good guess");

  break;
case 2:
  //document.getElementById("knowledge").innerHTML = "Hey, not bad, but still room to improve";
    $("#knowldedge").text("Hey, not bad, but still room to improve");

  break;
case 3:
  //document.getElementById("knowledge").innerHTML = "Woohoo! Well done!";
      $("#knowldedge").text("Woohoo! Well done!");

  
  
  
  break;
};

}
} 



