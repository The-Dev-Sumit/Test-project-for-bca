const questions = [
    {
        question: "C language was developed by: ",
        answers: [
            { text: "Dennis Rechard", correct: false },
            { text: "Bjarne Stroustrup", correct: false },
            { text: "Dennis M. Ritchie", correct: true },
            { text: "Anders Hejlsberg", correct: false },
        ]
    },
    {
        question: "In which year was C language developed?",
        answers: [
            { text: "1962", correct: false },
            { text: "1978", correct: false },
            { text: "1979", correct: false },
            { text: "1972", correct: true },
        ]
    },
    {
        question: "How many keywords are there in C language?",
        answers: [
            { text: "32", correct: true },
            { text: "33", correct: false },
            { text: "64", correct: false },
            { text: "18", correct: false },
        ]
    },
    {
        question: "A C-style comment, simply surround the text with __",
        answers: [
            { text: "//", correct: false },
            { text: "/* and */", correct: true },
            { text: "// and //", correct: false },
            { text: "/** and **/", correct: false },
        ]
    },
    {
        question: "What will be the output of the following code snippet int a = 3, b = 5; int t = a;a = b;b = t;output?",
        answers: [
            { text: "3 5", correct: false },
            { text: "3 3", correct: false },
            { text: "5 5", correct: false },
            { text: "5 3", correct: true },
        ]
    },
    {
        question: "How is an array initialized in C language?",
        answers: [
            { text: "int a[3]={1,2,3};", correct: true },
            { text: "int a={1,2,3};", correct: false },
            { text: "int a(3)=1,2,3;", correct: false },
            { text: "int a[3]=(1,2,3)", correct: false },
        ]
    },
    {
        question: "What is the output of the following code snippet? int a[] = { 1, 2, 3, 4};int sum = 0;for(int i = 0; i< 4; i++) { sum += a[i]};output of sum?",
        answers: [
            { text: "1", correct: false },
            { text: "10", correct: true },
            { text: "20", correct: false },
            { text: "4", correct: false },
        ]
    },
    {
        question: "What is the output of the following code snippet?int sum = 2 + 4 / 2 + 6 * 2;output of sum?",
        answers: [
            { text: "16", correct: true },
            { text: "18", correct: false },
            { text: "10", correct: false },
            { text: "15", correct: false },
        ]
    },
    {
        question: " In which version of C language, the C++ Style comment (//) are introduced?",
        answers: [
            { text: "C17", correct: false },
            { text: "C18", correct: false },
            { text: "C89", correct: false },
            { text: "C99", correct: true },
        ]
    },
    {
        question: "Which of the following is an exit controlled loop?",
        answers: [
            { text: "for loop", correct: false },
            { text: "while loop", correct: false },
            { text: "do-while loop", correct: true },
            { text: "all the above", correct: false },
        ]
    },
    {
        question: "Which of the following are not standard header files in C?",
        answers: [
            { text: "stdio.h", correct: false },
            { text: "stdlib.h", correct: false },
            { text: "conio.h", correct: false },
            { text: "none of the above", correct: true },
        ]
    },
    {
        question: "Does C language support object-oriented approach?",
        answers: [
            { text: "Some type of data", correct: false },
            { text: "With library", correct: false },
            { text: "No", correct: true },
            { text: "Yes", correct: false },
        ]
    },
    {
        question: "Which operator is used to find the remainder of two numbers in C?",
        answers: [
            { text: "/", correct: false },
            { text: "//", correct: false },
            { text: "^", correct: false },
            { text: "%", correct: true },
        ]
    },
    {
        question: "Which of the following is not a logical operator?",
        answers: [
            { text: "!", correct: false },
            { text: "|", correct: true },
            { text: "&&", correct: false },
            { text: "||", correct: false },
        ]
    },
    {
        question: "Which of the following operators can be applied on structure variables?",
        answers: [
            { text: "both", correct: false },
            { text: "==", correct: false },
            { text: "=", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
    
];

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



