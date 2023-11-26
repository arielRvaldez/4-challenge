const questions=[
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

const margins = document.querySelector(".margins");
const questionElement = document.getElementById("questions");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("time");

let currentQuestion=0;
let score=0;
let timeLeft=75;

function loadQuestion(){
    const question=questions[currentQuestion];
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

function checkAnswer(){
    const selectOption=document.querySelector("input[name='choice']:checked");
    if(selectOption){
        const selectedAnswer=parseInt(selectOption.value);
        if(selectedAnswer===questions[currentQuestion].correctAnswer){
            score++;
        }
        currentQuestion++;
        if(currentQuestion<questions.length){
            loadQuestion();
        }
        else{
            showScore();
        }
    }
}

function shoScore()
{
    clearInterval(timerInterval);
    questionElement.style.display="none";
    choicesElement.style.display="none";

}
