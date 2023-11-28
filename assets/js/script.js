var welcomeDiv = document.getElementById("margins");
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var resultsElement = document.getElementById("result");
var gameoverDiv = document.getElementById("gameover");
var finishedpageEl = document.getElementById("finished-page");
var submitScoreBtn = document.getElementById("submitScore");
var highscoresscreeen = document.getElementById("highscores-screen");
var highscoreDiv = document.getElementById("highscores-popup");
var highscorePlaceName = document.getElementById("initials");
var highscoreShowName = document.getElementById("highscore-initials");
var Goback = document.getElementById("go-back");

var Quizquestions=[
    {
        question : "A very useful tool used during development and debugging for printing content to the dedugger is:",
        choiceA:"Javascript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        correctAnswer: "2"
    },
    {
        question : "String values must be enclosed within ____ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets", 
        choiceC: "quotes", 
        choiceD: "parenthesis",
        correctAnswer: "3"   
    },
    {
        question : "Commonly used data types DO Not include:",
        choices:["strings", "booleans", "alerts", "numbers"],
        correctAnswer: 3   
    },
    {
        question : "Arrays in Javascript can be used to store____.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correctAnswer: "4"   
    },
];

//global variables
var finalQuestionIndex  = quizQuestions.length;
var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 120; //initial timer value in seconds//
var timerInterval;
var correct;

//loads questions//
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questions.innerHTML = "<p>" + currentQuestion.question +"</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

//removes start button, generates quiz, and begins timer
function startQuiz(){
    gameoverDiv.style.display = "none";
    welcomeDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    questions.style.display = "block";
}

//when finished will only show score//
function showScore(){
    questions.style.display="none";
    goameoverDiv.style.display="flex";
    clearInterval(timerInterval);
    highscorePlaceName.value = "";
    finishedpageEl.innerHTML = "You got" + score + " out of " + Quizquestions.length + " correct!";
}


