const quizQuestionsBox = document.getElementById("question-container");
const answerBtns = document.getElementById("answer-buttons");

var currentQuestionIndex;
var quizQuestion = document.getElementById("question");
var hsBoard = document.getElementById("score-board");
var start = document.getElementById("start-btn");
var timerEl = document.getElementById("time-left");
var submitBtn = document.getElementById("submit-button");
var hsSubmission = document.getElementById("high-score-submission");
var initials = document.querySelector("#initials");
var button = document.createElement("button");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var selectAnswer;
var randomQ;
var countDown;
var timeRemaining = 90;
var currentQuestionIndex = 0;
var finalScore = document.getElementById("time-remaining");
var true1 = ["4", "25"];


const endHighScores = JSON.parse(localStorage.getItem("endHighScores")) || [];
var highScoresList = document.getElementById("hs-board-list");


var questions = [
    {   question: "What is 2+2",
        options: [
            {text: "2"},
            {text: "4"},
           
        ]
    },
    {   question: "How old am I?",
        options: [
            {text: "25"},
            {text: "32", },
          
        ]

    }
];

start.addEventListener("click", startQuiz);
document.getElementById("high-score-board").addEventListener("click", showScoreBoard);

function showScoreBoard() {
    if(hsBoard.classList.value === "hide") {
        hsBoard.classList.remove("hide")}
    else if(hsBoard.classList.value != "hide") {
        hsBoard.classList.add("hide");
    }
}

function startQuiz() {
    countDown = setInterval(timer, 1000);
    start.classList.add("hide");
    timerEl.classList.remove("hide");
    quizQuestionsBox.classList.remove("hide");
    randomQ = questions.sort(() => Math.random() > .5 ? 1 : -1);
    setNextQuestion();
    a1.addEventListener("click", selectAnswer);
    a2.addEventListener("click", selectAnswer);
}

function setNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        clearInterval(countDown);
        initEnd();
    } else {
        showQuestion(randomQ[currentQuestionIndex]);
    }
}

function showQuestion(question) {
    quizQuestion.innerText = question.question;
    
    let options = questions[currentQuestionIndex].options;
    options.sort(() => Math.random() > .5 ? 1 : -1);

    a1.textContent = options[0].text;
    a2.textContent = options[1].text;
}

function selectAnswer(event) {
    if (event.target.value = true1) {
        currentQuestionIndex++;
        setNextQuestion();
    }
    else {
        timeRemaining = timeRemaining - 15;
        currentQuestionIndex++;
        setNextQuestion();
    }
}

function initEnd() {
    quizQuestionsBox.classList.add("hide");
    hsSubmission.classList.remove("hide");
    timerEl.classList.add("hide");
    finalScore.textContent = "Your score is: " + timeRemaining;

    var user = {
        name: initials.value.trim(),
        score: timeRemaining
    };
    localStorage.setItem("user", JSON.stringify(user));

    submitBtn.addEventListener("click", showHSBoard);
}

function showHSBoard() {
    hsSubmission.classList.add("hide");
    hsBoard.classList.remove("hide");
    highScoresList.textContent = localStorage.getItem("user");

}

function timer() {
    timeRemaining--;
    timerEl.textContent = "Seconds remaining: " + timeRemaining;
    if (timeRemaining <= -1) {
        clearInterval(countDown);
    }
}

