const quizQuestionsBox = document.getElementById("question-container");
const answerBtns = document.getElementById("answer-buttons");
const viewHSBoard = document.getElementById("high-score-board");

var currentQuestionIndex;
var quizQuestion = document.getElementById("question");
var hsBoard = document.getElementById("score-board");
var start = document.getElementById("start-btn");
var timerEl = document.getElementById("time-left");
var hsSubmission = document.getElementById("high-score-submission");
var initials = document.getElementById("initials");
var button = document.createElement("button");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var selectAnswer;
var randomQ;
var countDown;
var timeRemaining = 90;

var questions = [
    {   question: "What is 2+2",
        selectAns: [
            {text: "2", correct: false},
            {text: "4", correct: true},
           
        ]
    },
    {   question: "How old am I?",
        selectAns: [
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
}

function startQuiz() {
    countDown();
    start.classList.add("hide");
    timerEl.classList.remove("hide");
    quizQuestionsBox.classList.remove("hide");
    randomQ = questions.sort(() => Math.random() > .5 ? 1 : -1);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    if (currentQuestionIndex >= createdQuestions.length) {
        clearInterval(countDown);
    } else {
        showQuestion(randomizedQ[currentQuestionIndex]);
    }
}

function showQuestion(question) {
    quizQuestion.innerText = question.question
    
    let options = questions[currentQuestionIndex].options;
    options.sort(() => Math.random() > .5 ? 1 : -1);

    a1.textContent = options[0].text;
    a2.textContent = options[1].text;

    a1.value = options[0].correct;
    a2.value = options[1].correct;
}

function selectAnswer(event) {
    if(event.target.value == "true") {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        timeRemaining = timeRemaining -15;
        currentQuestionIndex++;
        setNextQuestion();
    }
}

function clearData() {
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function submitHS() {
    quizQuestions.classList.add("hide");
    hsSubmission.classList.remove("hide");
    timerEl.textContent =  timeRemaining;
    submitButton.addEventListener("click");
}

