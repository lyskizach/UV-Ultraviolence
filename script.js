
const quizQuestionsBox = document.getElementById("question-container");
const quizQuestion = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");

var hsBoard = document.getElementById("score-board");
var start = document.getElementById("start-btn");
var timer = document.getElementById("time-left");
var countDown;
var hsSubmission = document.getElementById("high-score-submission");
var initials = document.getElementById("initials");
var counter = 90;


// changing visibility ***
//document.getElementById(id).style.visibility = "hidden";
//document.getElementById(id).style.visibility = "visible";

// eventlistener function to toggle display of begin quiz button...

start.addEventListener("click", startQuiz);
document.getElementById("high-score-board").addEventListener("click", showScoreBoard);

function showScoreBoard() {
    hsBoard.classList.remove("hide");
};

function startQuiz() {
    start.classList.add("hide");
};

var questionsArray = [

]
