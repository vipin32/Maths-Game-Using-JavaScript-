var playing = false;
var score;
var timer;
var totalTime;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick =
function()
{
    if(playing == true)
    {    //if we are playing
      location.reload();  //Reload Page if game is on
    }
    else
    {      //if we are no playing

      // change mode to playing
      playing = true;
      //set score to 0 when game starts
      score = 0;
       //set score to 0
      document.getElementById('scorevalue').innerHTML = score;

      //show countdown box
      document.getElementById('timeremaining').style.display = "block";
      startCountdown();

      //change button to reset
      document.getElementById("startreset").innerHTML = "Reset Game";

      // Generate Questions
      generateQA();

    }
}

//If we click on answer box
for(i=1;i<5;i++)
{
    document.getElementById("box"+i).onclick =
    function()
    {
        if(playing == true)    //check if we are playing
        {
          // yes we are playing
          //if correct?
          if(this.innerHTML == correctAnswer)
          {
            //increase score by 1
            score = score + 1;
            document.getElementById("scorevalue").innerHTML = score;

            //show correct box for 1sec
            document.getElementById("correct").style.display = "block";
            // hide Correct box after 1 sec: USE setTimeout(function, duration)  here 1 sec = 1000
            setTimeout(function()
            {
                document.getElementById("correct").style.display = "none";},1000);

            //generate new Q&A
            generateQA();
          }
          else  //If wrong Answer show wrong box for 1sec
          {
            document.getElementById("wrong").style.display = "block";
            setTimeout(function(){
              document.getElementById("wrong").style.display = "none";},1000);
          }

        }
    }
}


// Functions

// start Countdown Function
function startCountdown(){
  totalTime = 60;
  timer = setInterval(function(){
    totalTime--;
    document.getElementById('timeremainingvalue').innerHTML = totalTime;

    if(totalTime == 0){
      clearInterval(timer);  //Stop Timer
      //Show Game Over Box
      document.getElementById("gameover").style.display = "block";
      //Show Score after Game over
      document.getElementById("gameover").innerHTML =
      "<p>Game Over</p><p>Your Score is "+ score +"</p>";

      //Hide Timer Box When Game is Over
      document.getElementById("timeremaining").style.display = "none";
      //Change Button to Start Game when game is over
      document.getElementById("startreset").innerHTML = "Start Game";
    }
  },1000);
}

// generate A question and and multiple answers
function generateQA(){
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  var z = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;
  //Displaying Question
  document.getElementById("question").innerHTML = x + "x" + y;

  //Selecting any Random Box between 1 to 4 to place correct answer
  var correctPostion = 1 + Math.round(3*Math.random());
  //Filling One box with correct answer
  document.getElementById("box"+correctPostion).innerHTML = correctAnswer;

  // Generate Wrong answers
  var answers = [correctAnswer];
  for(i=1; i<5;i++)
  {
      if(i!=correctPostion)
      {
        var wrongAnswer
        do
        {
          wrongAnswer = (Math.round(9 * Math.random())) * (Math.round(9 * Math.random()));
        }
        while(answers.indexOf(wrongAnswer) > -1 );   //runs till this condition is false

        document.getElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
      }

  }
}




//if we click on the start/reset
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        // show countdown box
        //reduce time by 1sec in loops
            //Check if time left ?
                //yes --> continue
                //no --> gameover
        //generate button to reset
        //generate new Q&A

//If we click on answer box
      //check if we are playing
          //if correct?
              // yes
                  //increase score by 1
                  //show correct box for 1sec
                  //generate new Q&A
              //no
                  //show try again box for 1 sec
