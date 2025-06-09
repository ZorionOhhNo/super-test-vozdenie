let current = 0;
let result = 0;
let selectAnswer = null;
const questions = [
    {
        numberQuestion: "Pervyy vopros!",
        textQuestion: "Tut vopros voznik.",
        imageQuestion: "",
        optionsQuestion: ["A", "B", "C", "D"],
        correctAnswer: "A",
        buttonQuestion: "Prodolzhit"
    },
    {
        numberQuestion: "Vtoroy vopros!",
        textQuestion: "Sosal?",
        imageQuestion: "",
        optionsQuestion: ["A", "B", "C", "D"],
        correctAnswer: "A",
        buttonQuestion: "Prodolzhit"
    },

    {
        numberQuestion: "Posledniy vopros!",
        textQuestion: "Final?",
        imageQuestion: "",
        optionsQuestion: ["A", "B", "C", "D"],
        correctAnswer: "A",
        buttonQuestion: "Zavershit"
    }
];

function startTest() {
    result = 0;
    selectAnswer = null;
    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("question-screen").classList.add("active");
    current = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[current];
    document.getElementById("numberQuestion").innerText = q.numberQuestion;
    document.getElementById("textQuestion").innerText = q.textQuestion;
    document.getElementById("imageQuestion").src = "/photo/nr1.png";

    const optionsDiv = document.getElementById("optionsQuestion");
    optionsDiv.innerHTML = "";

    q.optionsQuestion.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.addEventListener("click", function () {
            // Снять выделение со всех кнопок
            Array.from(optionsDiv.children).forEach(b => b.classList.remove("selected"));
            // Выделить выбранную кнопку
            btn.classList.add("selected");
            selectAnswer = btn.innerText;
        });
        optionsDiv.appendChild(btn);
    });

    document.getElementById("buttonQuestion").innerText = q.buttonQuestion;
}


function showResult() {
    document.getElementById("resultQuestion").innerText = `Pravilnykh otvetov: ${result} iz ${questions.length}`;
}


function resultQuestion() {



    alert("poshel nahuj!");
    location.reload();
}




function nextQuestion() {
    const correct = questions[current].correctAnswer;
    if (selectAnswer === correct) {
        result++;
    }
    selectAnswer = null;
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        alert("Test zavershen!");
        document.getElementById("question-screen").classList.remove("active");
        document.getElementById("result-screen").classList.add("active")
        showResult();
    }
}
