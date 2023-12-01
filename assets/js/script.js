//start
const startbutton = document.querySelector("#start-button");
//welcome screen//
const welcomeDiv = document.querySelector("#intro-screen");
let timer = document.getElementById("timer");

// questions screen//
const questionsEl = document.querySelector("#questions");
let title = document.querySelector("#question_title")
let buttonA = document.getElementById("a");
let buttonB = document.getElementById("b");
let buttonC = document.getElementById("c");
let buttonD = document.getElementById("d");

//finished screen//
let resultsElement = document.getElementById("result");
let gameoverDiv = document.getElementById("gameover");
let finishedpageEl = document.getElementById("finished-page");
let submitScoreBtn = document.getElementById("submitScore");

//high scores screen//
let highscoresscreen = document.getElementById("highscores-screen");
let highscoreDiv = document.getElementById("highscores-popup");
let highscorePlaceName = document.getElementById("initials");
let highscoreShowName = document.getElementById("highscore-initials");
let Goback = document.getElementById("go-back");

const questions = [
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
        choiceA: "strings",
        choiceB: "booleans", 
        choiceC: "alerts", 
        choiceD: "numbers",
        correctAnswer: "3"   
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
var finalQuestionIndex  = questions.length;
var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 120; //initial timer value in seconds//
var timerInterval;
var correct;

//Timer
function setTime() {
let timerInterval = setInterval(function() {
    timeLeft--;
    console.log(timeLeft);
    timer.textContent = `Time:${timeLeft}s`;
    timer.style.display = "block";
    if(timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
}, 1000);
}

//removes start button and generates quiz
function startQuiz(){
    welcomeDiv.style.display = "none";
    gameoverDiv.style.display = "none";
    generateQuizQuestion();
    setTime();
    questionsEl.style.display = "block";
}

//loads questions//
function generateQuizQuestion(){
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
    console.log (questions);
    questionsEl.style.display = "block";
    buttonA.style.display = "block";
    console.log (buttonA);
    buttonB.style.display = "block";
    buttonC.style.display = "block";
    buttonD.style.display = "block";
    var currentQuestion = questions[currentQuestionIndex];
    title.innerHTML = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// checks answers and pop-up box if correct or not//
function checkAnswer(answer){
    correct = questions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        }
    else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
        }
    else{
        showScore();
    }
}

//when finished will only show score//
function showScore(){
    questionsEl.style.display="none";
    gameoverDiv.style.display="flex";
    resultsElement.style.display = "block";
    finishedpageEl.style.display = "block";
    submitScoreBtn.style.display = "block";
    clearInterval(timerInterval);
    highscorePlaceName.value = "";
    finishedpageEl.innerHTML = "You got" + score + " out of " + questions.length + " correct!";
}

submitScoreBtn.addEventListener("click", function highscore(){
   //if not valid initials// 
    if(highscorePlaceName.value === "") {
        alert("Initials cannot be blank");
        return false;
    }
    else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscorePlaceName.value.trim();
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
    highscoreShowName.innerHTML = "";
    highscoreShowName.style.display = "flex"
    highscoreDisplayScore.innerHTML = "";
    highscoreDisplayScore.style.display ="flex"
}

//only shows high score screen//
function showHighscore(){
    welcomeDiv.style.display = "none";
    gameoverDiv.style.display = "none";
    highscoresscreen.style.display = "flex";
    highscoreDiv.style.display = "block";
    Goback.style.display = "flex";
    generateHighscores();
}

//will go back to welcome screen again//
function restartQuiz(){
    welcomeDiv.style.display = "flex";
    gameoverDiv.style.display = "none";
    highscoresscreen.style.display = "none";
    Goback.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

//start button//

startbutton.addEventListener('click',startQuiz);
