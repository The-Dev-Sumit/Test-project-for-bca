const questions = [
    {
        question: "belongs to symbol",
        answers: [
            { text: "∋", correct: false },
            { text: "€", correct: false },
            { text: "∈", correct: true },
            { text: "₼", correct: false },
        ]
    },
    {
        question: "Which of the following sets can be represented in roster form?",
        answers: [
            { text: "The set of all odd natural numbers", correct: true },
            { text: "The set of all prime numbers", correct: false },
            { text: "The set of all integers", correct: false },
            { text: "None of All", correct: false },
        ]
    },
    {
        question: "How is the set of all vowels in the English alphabet represented in set builder form?",
        answers: [
            { text: "{a, e, i, o, u}", correct: false },
            { text: "{x : x is a consonant in the English alphabet}", correct: false },
            { text: "{x : x is an English alphabet}", correct: false },
            { text: "{x : x is a vowel in the English alphabet}", correct: true },
        ]
    },
    {
        question: "What does the colon (:) stand for in set builder form?",
        answers: [
            { text: "At least", correct: false },
            { text: "Such that", correct: true },
            { text: "Or", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "What is the definition of a subset?",
        answers: [
            { text: "A set that is the same as another set", correct: false },
            { text: "A set that does not contain any elements", correct: false },
            { text: "A set that contains all the elements of another set", correct: true },
            { text: "A set that contains at least one element not found in another set", correct: false },
        ]
    },
    {
        question: "How many subsets does the set {1, 2} have?",
        answers: [
            { text: "4", correct: true },
            { text: "2", correct: false },
            { text: "1", correct: false },
            { text: "None of All", correct: false },
        ]
    },
    {
        question: "Let S = {1, 2, 3, 4, 5} and let A = S x S. Define the relation R on A as follows",
        answers: [
            { text: " R (c, d) iff ad = cb. Then, R is", correct: false },
            { text: "Symmetric relation", correct: false },
            { text: "Transitive relation", correct: false },
            { text: "Equivalence relation", correct: true },
        ]
    },
    {
        question: "what is complex number?",
        answers: [
            { text: "Combination of rational number and irrational number.", correct: false },
            { text: "Combination of both the real number and imaginary number.", correct: true },
            { text: "all the positive numbers", correct: false },
            { text: "None of Above", correct: false },
        ]
    },
    {
        question: "cumulative frequency table is required to find out which of the following",
        answers: [
            { text: "Median", correct: true },
            { text: "Mode", correct: false },
            { text: "Mean", correct: false },
            { text: "All the Above", correct: false },
        ]
    },
    {
        question: "If we consider a Matrix A. Let us assume that the matrix is skew-symmetric. Then the matrix A2 is?",
        answers: [
            { text: "Skew-Symmetric Matrix", correct: false },
            { text: "Both", correct: false },
            { text: "None of Both", correct: false },
            { text: "Symmetric Matrix", correct: true },
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