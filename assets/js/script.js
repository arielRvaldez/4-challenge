var questions=[
    {
        question : "A very useful tool used during development and debugging for printing content to the dedugger is:",
        choices:["Javascript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: 2
    },
    {
        question : "String values must be enclosed within ____ when being assigned to variables.",
        choices:["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: 3   
    },
    {
        question : "Commonly used data types DO Not include:",
        choices:["strings", "booleans", "alerts", "numbers"],
        correctAnswer: 3   
    },
    {
        question : "Arrays in Javascript can be used to store____.",
        choices:["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: 4   
    }
];

var margins = document.querySelector(".margins");
var questionElement = document.getElementById("questions");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("score");
var restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");

let currentQuestion=0;
let score=0;
let timeLeft = 120; //initial timer value in seconds//

function loadQuestion(){
    var question=questions[currentQuestion];
    questionElement.textContent=question.question;

    choicesElement.innerHTML="";
    for(let i=0;i<question.choices.length;i++){
        const li=document.createElement("li");
        const radio=document.createElement("input");
        radio.type="radio";
        radio.name="choice";
        radio.value=i;s
        li.appendChild(radio);
        li.appendChild(document.createTextNode(question.choices[i]));
        choicesElement.appendChild(li);
    }
}

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


