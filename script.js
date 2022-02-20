
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


$("#score").text("Current score = " + score + " points");

showQuestion();


function showQuestion() {
  // set the counter and score
  
  $("#counter").text("Question # " + (turn +1));


  $('#question').text(q_a_data[turn].question);
  
  $('#answers').empty();
  
  
 for ( let index in q_a_data[turn].answers ) {
  
  //var button = document.createElement("button");
 //button.innerHTML = q_a_data[turn].answers[index];
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
     
      $("#try_again").text("Correct answer!");
      
    
     
    $("#score").text("Current score = " + (score += 1) + " points");
    
      nextQuestion();
       
    } else {
      
      
      
      $("#try_again").text("Not Right...Try Again!");

      
      
    }
    
}


function nextQuestion() {
  turn++;
  if ( turn < q_a_data.length ) {
    
    showQuestion();
  
  }
  else {
    $("body").css("background-color","lightgreen");
    $("#try_again").hide(225);
    $('#answers').text("PIANO!");
    $("#knowledge").text("Woohoo! Well done!");

  
};
}



