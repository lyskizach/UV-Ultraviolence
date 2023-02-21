const quizQuestionsBox = document.getElementById("question-container");
const answerBtns = document.getElementById("answer-buttons");
const viewHSBoard = document.getElementById("high-score-board");
const isTrue = true;

var currentQuestionIndex;
var quizQuestion = document.getElementById("question");
var hsBoard = document.getElementById("score-board");
var start = document.getElementById("start-btn");
var timerEl = document.getElementById("time-left");
var submitBtn = document.getElementById("submit-button");
var hsSubmission = document.getElementById("high-score-submission");
var initials = document.getElementById("initials");
var button = document.createElement("button");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var selectAnswer;
var randomQ;
var countDown;
var timeRemaining = 90;
var currentQuestionIndex = 0;
// var for collectScores?
// var for "enter-highscores" - the div for entering initials

var questions = [
    {   question: "What is 2+2",
        options: [
            {text: "2", correct: false},
            {text: "4", correct: true},
           
        ]
    },
    {   question: "How old am I?",
        options: [
            {text: "25", correct: true},
            {text: "32", correct: false},
          
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

    a1.value = options[1].isTrue;
    a2.value = options[0].isTrue;
}


function selectAnswer(event) {
    if (event.target.value === true) {
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
    hsBoard.classList.remove("hide");
    timerEl.textContent =  timeRemaining;
    submitBtn.addEventListener("click");
}


function showScores() {

}

function timer() {
    timeRemaining--;
    timerEl.textContent = "Seconds remaining: " + timeRemaining;
    if (timeRemaining <= -1) {
        clearInterval(countDown);
    }
}

