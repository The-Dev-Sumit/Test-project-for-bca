const questions = [
    {
        question: "Who is the father of Computers?",
        answers: [
            {text: "Dennis Ritchie", correct: false }, 
            {text: "Charles Babbage", correct: true },
            {text: "Bjarne Stroustrup", correct: false },
            {text: "James Gosling", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct abbreviation of COMPUTER?",
        answers: [
            {text: "Commonly Oriented Machines Used in Technical and Educational Research", correct: false },
            {text: "Commonly Operated Machines Used in Technical and Environmental Research", correct: false },
            {text: "Commonly Occupied Machines Used in Technical and Educational Research", correct: false },
            {text: "Commonly Operated Machines Used in Technical and Educational Research", correct: true },
        ]
    },
    {
        question: "Which of the following language does the computer understand?",
        answers: [
            {text: "Computer understands only Binary Language", correct: true },
            {text: "Computer understands only C Language", correct: false },
            {text: "Computer understands only Assembly Language", correct: false },
            {text: "Computer understands only C++ language", correct: false },
        ]
    },
    {
        question: "Which of the following is the brain of the computer?",
        answers: [
            {text: "Arithmetic and Logic unit", correct: false },
            {text: "Central Processing Unit", correct: true },
            {text: "Control unit", correct: false },
            {text: "Memory", correct: false },
        ]
    },
    {
        question: "Which of the following is the smallest unit of data in a computer?",
        answers: [
            {text: "KB", correct: false },
            {text: "Byte", correct: false },
            {text: "MB", correct: false },
            {text: "Bit", correct: true },
        ]
    },
    {
        question: "Which of the following can access the server?",
        answers: [
            {text: "Web Browser", correct: false },
            {text: "Web Client", correct: true },
            {text: "Web Server", correct: false },
            {text: "User", correct: false },
        ]
    },
    {
        question: "Which of the following is not a type of computer on the basis of operation?",
        answers: [
            {text: "Remote", correct: true },
            {text: "Digital", correct: false },
            {text: "Hybrid", correct: false },
            {text: "Analog", correct: false },
        ]
    },
    {
        question: "Which of the following type of computer is mostly used for automatic operations?",
        answers: [
            {text: "analog", correct: false },
            {text: "digital", correct: false },
            {text: "hybrid", correct: true },
            {text: "remote", correct: false },
        ]
    },
    {
        question: "Which of the following is the first neural network computer?",
        answers: [
            {text: "RFD", correct: false },
            {text: "SNARC", correct: true },
            {text: "AM", correct: false },
            {text: "AN", correct: false },
        ]
    },
    {
        question: "What is the full form of PROM ?",
        answers: [
            {text: "Primary read-only memory", correct: false },
            {text: "Primary read-only memory", correct: false },
            {text: "Program read-output memory", correct: false },
            {text: "Programmable read-only memory", correct: true },
        ]
    },
    {
        question: "In the context of computing, what is the full form of URL ?",
        answers: [
            {text: "Undistributed Resource Locator ", correct: false },
            {text: "Uniform Resource Locator ", correct: true },
            {text: "Uniform Region Locator ", correct: false },
            {text: "Unified Resource Locator ", correct: false },
        ]
    },
    {
        question: "In the field of computing, what does ENIAC stand for ?",
        answers: [
            {text: "Electronic Numerical Integrated Advanced Computer", correct: false },
            {text: "Electronic Numerals Integration and Computing", correct: false },
            {text: "Electronic Numerical Integrator and Computer", correct: true },
            {text: "Electronic Numbers Integration and Computer", correct: false },
        ]
    },
    {
        question: "Electronic Numerals Integration and Computing",
        answers: [
            {text: "Number of Pixels", correct: false },
            {text: "Screen Resolution", correct: false },
            {text: "Storage", correct: false },
            {text: "Speed", correct: true },
        ]
    },
    {
        question: "what is computer booting",
        answers: [
            {text: "Loading operating system into memory to make the computer system ready to use", correct: true },
            {text: "Defragmenting the hard disk drive", correct: false },
            {text: "Deleting the operation system", correct: false },
            {text: "Formatting the hard disk drive", correct: false },
        ]
    },
    {
        question: "Which generation of computer used transistor?",
        answers: [
            {text: "Fourth", correct: false },
            {text: "Second", correct: true },
            {text: "Third", correct: false },
            {text: "Fifth", correct: false },
        ]
    },
]

const questionElement = document.getElementById("question");
const ansBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const start = document.getElementById("start");
const test = document.querySelector(".test");

let currentQuestionIndex = 0;
let score = 0;

function startTest() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btns");
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";

    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Start Again";
    nextBtn.style.display = "block";
    start.style.display = "block";  // Show the "Start" button again
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore()
    }
}

nextBtn.addEventListener("click",() => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startTest();
    }
})


let testKey = 202;

if (testKey === 202) {
    // If testKey is 202, initially hide the "test" element
    test.style.display = "none";

    start.addEventListener("click", () => {
        // When the "Start" button is clicked, start the test
        startTest();
        // Hide the "Start" button
        start.style.display = "none";
         test.style.display = "block";
    });
}

  window.addEventListener("beforeunload", (event) => {
        // You might want to provide a confirmation message
        event.preventDefault();
        event.returnValue = "Are you sure you want to quit?";
    });