
const quizQuestionsBox = document.getElementById("question-container");
const quizQuestion = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("incorrect");

var hsBoard = document.getElementById("score-board");
var start = document.getElementById("start-btn");
var timerEl = document.getElementById("time-left");
var countDown;
var hsSubmission = document.getElementById("high-score-submission");
var initials = document.getElementById("initials");



// changing visibility ***
//document.getElementById(id).style.visibility = "hidden";
//document.getElementById(id).style.visibility = "visible";

// eventlistener function to toggle display of begin quiz button...

start.addEventListener("click", startQuiz);
document.getElementById("high-score-board").addEventListener("click", showScoreBoard);

function showScoreBoard() {
    if(hsBoard.classList.value === "hide") {
        hsBoard.classList.remove("hide")}
    else if(hsBoard.classList.value != "hide") {
        hsBoard.classList.add("hide")
    }
};

function startQuiz() {
    start.classList.add("hide");
    timerEl.classList.remove("hide");
    countDown();
    quizQuestionsBox.classList.remove("hide");
};


function countDown() {
    var timeRemaining = 90;
    var timeInterval = setInterval(function () {
        if (timeRemaining >= 0) {
            timerEl.textContent = "Seconds remaining: " + timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
};
