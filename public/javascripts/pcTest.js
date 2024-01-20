const questions = [
    {
    question : "Which devices are interconnected by the data BUS?",
    answers : [
        {text: "Hard Drive, SSD, and CD/DVD drive", correct: false },
        {text: "Monitor, Keyboard, and Mouse", correct: false },
        {text: "CPU, RAM, ROM, and I/O units", correct: true },
        {text: "Printer, Scanner, and Speaker", correct: false },
      ]
    },
    {
    question : "Which mode allows for faster access to memory?",
    answers : [
        {text: "None of the all", correct: true },
        {text: "Real Mode", correct: false },
        {text: "Multi Mode", correct: false },
        {text: "Virtual Mode", correct: false },
      ]
    },
    {
    question : "What does CISC stand for?",
    answers : [
        {text: "Central Intelligence Service Computer", correct: false },
        {text: "Complex Integrated System Computer", correct: false },
        {text: "None of the all", correct: false },
        {text: "Complex Instruction Set Computer", correct: true },
      ]
    },
    {
    question : "What is the main difference between super pipelining and normal pipelining?",
    answers : [
        {text: "Super pipelining uses longer pipelines with more stages", correct: true },
        {text: "Normal pipelining performs less work at each step", correct: false },
        {text: "Super pipelining is an enhancement over normal pipelining", correct: false },
        {text: "Super pipelining executes multiple instructions at a single clock time", correct: false },
      ]
    },
    {
    question : "What is encoding in the context of memory?",
    answers : [
        {text: "The process of transferring information", correct: false },
        {text: "The process of converting information into usable form", correct: true },
        {text: "The process of backing up information", correct: false },
        {text: "The process of editing information", correct: false },
      ]
    },
    {
    question : "What is retrieval in the context of memory?",
    answers : [
        {text: "The process of decoding information", correct: false },
        {text: "The process of transferring information", correct: false },
        {text: "The process of backing up information", correct: false },
        {text: "The process of making stored information available", correct: true },
      ]
    },
    {
    question : "What does upgradation of new memory require in terms of compatibility?",
    answers : [
        {text: "No compatibility required", correct: false },
        {text: "Compatibility with the CPU and chipsets", correct: false },
        {text: "Proficient compatibility with the old memory", correct: true },
        {text: "Compatibility with any type of memory", correct: false },
      ]
    },
    {
    question : "Which type of memory can be written only once and cannot be erased or modified?",
    answers : [
        {text: "PROM", correct: true },
        {text: "Cache memory", correct: false },
        {text: "EEPROM", correct: false },
        {text: "SDRAM", correct: false },
      ]
    },
    {
    question : "Which type of memory is used whenever there is a need for fast memory?",
    answers : [
        {text: "DDR SDRAM", correct: false },
        {text: "SRAM", correct: true },
        {text: "EPROM", correct: false },
        {text: "PROM", correct: false },
      ]
    },
    {
    question : "What does ISA stand for in the context of this passage?",
    answers : [
        {text: "International System Architecture", correct: false },
        {text: "Integrated Standard Architecture", correct: false },
        {text: "Industry Standard Architecture", correct: true },
        {text: "Integrated System Architecture", correct: false },
      ]
    },
    {
    question : "What is the main function of CMOS?",
    answers : [
        {text: "To access the hard disks and other peripherals", correct: true },
        {text: "To provide power to the motherboard", correct: false },
        {text: "To carry out the basic input/output system", correct: false },
        {text: "To store information about the operating system", correct: false },
      ]
    },
    {
    question : "What is the purpose of BIOS in a computer system?",
    answers : [
        {text: "To configure hardware and RAM", correct: false },
        {text: "To manage disk failure", correct: false },
        {text: "All of them", correct: true },
        {text: "To provide layer between hardware and operating system", correct: false },
      ]
    },
    {
    question : "What is latency?",
    answers : [
        {text: "None of All", correct: false },
        {text: "The time taken to step between adjacent tracks", correct: false },
        {text: "The time taken to pass a byte under a read/write head", correct: false },
        {text: "The time delay between initiating a read/write command and accessing the desired information", correct: true },
      ]
    },
    {
    question : "How does the voice coil motor in a hard drive work?",
    answers : [
        {text: "By opposing a permanent magnet with opposing coils", correct: true },
        {text: "By translating electronic signals into magnetic flux transitions", correct: false },
        {text: "By actuating head movement", correct: false },
        {text: "None of the above", correct: false },
      ]
    },
    {
    question : "How is data represented on a hard drive?",
    answers : [
        {text: "Rectangular shapes", correct: false },
        {text: "Concentric circles", correct: false },
        {text: "Spiral shapes", correct: false },
        {text: "None of All", correct: true },
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