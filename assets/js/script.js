var welcomeDiv = document.getElementById("intro-screen");
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
var highscoresscreen = document.getElementById("highscores-screen");
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

//start button//
startbutton.addEventListener("click",startQuiz);

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


//when finished will only show score//
function showScore(){
    questions.style.display="none";
    goameoverDiv.style.display="flex";
    clearInterval(timerInterval);
    highscorePlaceName.value = "";
    finishedpageEl.innerHTML = "You got" + score + " out of " + Quizquestions.length + " correct!";
}

submitScoreBtn.addEventListener("click", function highscore(){
   //if not valid initials// 
    if(highscorePlaceName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }
    else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score //stores new high score//
        };
    //shows only high scores and "go bac"//
        gameoverDiv.style.display = "none";
        highscoresscreen.style.display = "flex";
        highscoreDiv.style.display = "block";
        Goback.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }    
});

//shows high scores//
function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
}

//only shows high score screen//
function showHighscore(){
    welcomeDiv.style.display = "none";
    gameoverDiv.style.display = "none";
    highscorescreen.style.display = "flex";
    highscoreDiv.style.display = "block";
    Goback.style.display = "flex";
    generateHighscores();
}
//will go back to welcome screen again//
function restartQuiz(){
    welcomeDiv.style.display = "flex";
    gameoverDiv.style.display = "none";
    highscorescreen.style.display = "none";
    welcomeDiv.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}
