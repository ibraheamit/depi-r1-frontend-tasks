const questions = [
    {
        question: "What is JavaScript?",
        options: ["A scripting language", "A compiled language", "An assembly language", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following is correct about JavaScript?",
        options: ["Object-Based language", "Assembly-language", "Object-Oriented language", "High-level language"],
        answer: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
        answer: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: 0
    },
    {
        question: "Which method is used to write HTML output in JavaScript?",
        options: ["document.write()", "console.log()", "window.alert()", "document.getElementById()"],
        answer: 0
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        options: ["getElementById()", "getElementByClass()", "getElementByTag()", "getElementByName()"],
        answer: 0
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseover", "onmouseclick"],
        answer: 1
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["var carName;", "variable carName;", "v carName;", "carName;"],
        answer: 0
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "-", "*", "/"],
        answer: 0
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Rails"],
        answer: 0
    }
];

let timer;
let timeLeft = 60;

function loadQuiz() {
    const quizDiv = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-3');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach((option, i) => {
            questionDiv.innerHTML += `<div class="form-check">
                <input class="form-check-input" type="radio" name="q${index}" value="${i}">
                <label class="form-check-label">${option}</label>
            </div>`;
        });
        quizDiv.appendChild(questionDiv);
    });
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        } else {
            document.getElementById('timer').innerText = `Time left: ${timeLeft} seconds`;
            timeLeft--;
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timer);
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score += 10;
            selectedOption.parentElement.classList.add('correct');
        } else if (selectedOption) {
            selectedOption.parentElement.classList.add('incorrect');
        }
    });
    displayResult(score);
}

function displayResult(score) {
    let resultText = '';
    if (score >= 85) {
        resultText = 'Excellent';
    } else if (score >= 75) {
        resultText = 'Very Good';
    } else if (score >= 65) {
        resultText = 'Good';
    } else if (score >= 50) {
        resultText = 'Passed';
    } else {
        resultText = 'Failed';
    }
    document.getElementById('result').innerHTML = `Your score is ${score}. ${resultText}`;
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
}

loadQuiz();