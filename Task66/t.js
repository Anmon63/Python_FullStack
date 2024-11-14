var timeLeft = 30;
var timerId;
var currentQuestionIndex = 0;
var score = 0;
var questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: 1
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: 2
    }
];

function startTimer() {
    timeLeft = 30;
    timerId = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        submitAnswer();
    } else {
        document.getElementById("time").innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function submitAnswer() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        var userAnswer = parseInt(selectedOption.value);
        if (userAnswer === questions[currentQuestionIndex].answer) {
            score++;
        } else {
            alert("Wrong! The correct answer is " + questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer]);
        }
    } else {
        alert("Please select an answer.");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        question();
        startTimer();
    } else {
        alert("Quiz finished,Your score is " + score+"out of"+questions.length);
    }
}

function question() {
    var currentQuestion = questions[currentQuestionIndex];
    document.getElementById("q").innerHTML = currentQuestion.question;
    document.getElementById("option1").innerHTML = currentQuestion.options[0];
    document.getElementById("option2").innerHTML = currentQuestion.options[1];
    document.getElementById("option3").innerHTML = currentQuestion.options[2];
    document.getElementById("option4").innerHTML = currentQuestion.options[3];
    document.querySelectorAll('input[name="option"]').forEach(input => input.checked = false);
}

// Start the first question and timer
question();
startTimer();