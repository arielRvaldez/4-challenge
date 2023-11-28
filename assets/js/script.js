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
var submitScotreBtn = document.getElementById("submitScore");
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

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer !== correctAnswer) {
        return false; //incorrect answer
    if (!checkAnswer(selectedAnswer, correctAnswer)) {
        timerValue -= 10; //substracts 10 seconds for incorrect answer
    }
    } else {
        return true; //correct answer
    }
}

function updateTimer(){
    const minutes=Math.floor(timeLeft/60);
    let seconds=timeLeft%60;
    timerElement.textContent='${minutes}:${seconds}';

    if (timeLeft===0){
        showScore();
    }
    else {
        timeLeft--;
    }
}
//when finished only show score//
function showScore(){
    clearInterval(timerInterval);
    questionElement.style.display="none";
    choicesElement.style.display="none";
    scoreElement.textContent='Your score: ${score}';
    scoreElement.style.display="block";
}


