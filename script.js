    let current = 0;
let result = 0;
let selectAnswer = null;
let timer; 
let timeLeft = 900;
const questions = [
    {
        numberQuestion: "Pirmais jautājums!",
        textQuestion: "Vecmāmiņa apstājās uz ceļa, kā attēlā, un nekustas tālāk. Ko tu darīsi?",
        imageQuestion: "photo/nr1.png",
        optionsQuestion: ["Es iebrukšu tālāk", "Es izsaukšu policiju", "Es apiešu dubulto nepārtraukto līniju", "palīdzēt šķērsot ceļu"],
        correctAnswer: "palīdzēt šķērsot ceļu",
        buttonQuestion: "Turpinājums"
    },
    {
        numberQuestion: "Otrais jautājums!",
        textQuestion: "Vai motocikla, kura iekšdedzes dzinēja darba tilpums nepārsniedz 125 cm3 un maksimālā jauda nepārsniedz 11 kW, īpašnieks drīkst nodot šī transportlīdzekļa vadību savā klātbūtnē citai personai, kurai ir obligātās civiltiesiskās atbildības apdrošināšanas polise papīra formā vai elektroniska dokumenta veidā, vai tās kopija papīra formā? ",
        imageQuestion: "",
        optionsQuestion: ["Jūs varat, ja personai ir vadītāja apliecība “A” kategorijas vai “A1” apakškategorijas transportlīdzekļa vadīšanai", "drīkst, ja personai ir vadītāja apliecība “B1” apakškategorijas transportlīdzekļa vadīšanai", "drīkst, ja personai ir vadītāja apliecība “M” kategorijas transportlīdzekļa vadīšanai", "Var visos iepriekš minētajos gadījumos "],
        correctAnswer: "Jūs varat, ja personai ir vadītāja apliecība “A” kategorijas vai “A1” apakškategorijas transportlīdzekļa vadīšanai",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Trešais jautājums!",
        textQuestion: "Vai sastrēgumā laikā atļauts apdzīt priekšā stāvošos automobiļus,lai krustojumā nogrieztos pa labi?",
        imageQuestion: "photo/nr3.png",
        optionsQuestion: ["Aizliegts", "Atļauts"],
        correctAnswer: "Aizliegts",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Ceturtais jautājums!",
        textQuestion: "Vai attēlotajā situācija atļauts uzsākt apdzīšanas manevru?",
        imageQuestion: "photo/nr4.png",
        optionsQuestion: ["Aizliegts", "Atļauts"],
        correctAnswer: "Aizliegts",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Piektais jautājums!",
        textQuestion: "Par ko brīdina ceļa zīme?",
        imageQuestion: "photo/nr5.png",
        optionsQuestion: ["Par bīstamu labo pagriezienu", "Par bīstamiem pagriezieniem ,kur pirmais pagrieziens būs pa labi", "Par lejupceļu ar sekojošu augšupceļu"],
        correctAnswer: "Par bīstamiem pagriezieniem ,kur pirmais pagrieziens būs pa labi",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Sestais jautājums!",
        textQuestion: "Kuras no zīmēm brīdina par iespējamu riepu saķeres spēku sanazināšanos ar ceļa segumu?",
        imageQuestion: "photo/nr6.png",
        optionsQuestion: ["BDE", "ABC", "CDE", "ABE"],
        correctAnswer: "BDE",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Septītais jautājums!",
        textQuestion: "Kādos virzienos atļauts braukt attēlotā situācijā?",
        imageQuestion: "photo/nr7.png",
        optionsQuestion: ["A B C", "A C", "A C D","D"],
        correctAnswer: "A B C",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Astotais jautājums",
        textQuestion: "Kā rīkosieties attēlotajā situācijā,nogriežoties krustojumā pa kreisi?",
        imageQuestion: "photo/nr8.png",
        optionsQuestion: ["Dosiet ceļu automobiļa vadītājam", "Apturēsiet transportlīdzekli pirms ceļa zīmes “Apstāšanas vieta” un sagaidīsiet atļaujošo luksofora signalu"],
        correctAnswer: "Apturēsiet transportlīdzekli pirms ceļa zīmes “Apstāšanas vieta” un sagaidīsiet atļaujošo luksofora signalu",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Devītais jautājums!",
        textQuestion: "Kura no minētajām pazīmēm liecina par nogurumu - brīdi,kad ir nekavējoties jāpārtrauc transportlīdzekļa vadīšana?",
        imageQuestion: "",
        optionsQuestion: ["Grūti noturēt acis vaļā, bieža mirkšķināšana, bieža vēlme berzēt acis", "Bremzējot izslīd priekšējie riteņi", "Jūs saprotat, ka esat apmaldījies aizbraucis pa nepareizo ceļu"],
        correctAnswer: "Grūti noturēt acis vaļā, bieža mirkšķināšana, bieža vēlme berzēt acis",
        buttonQuestion: "Turpinājums"
    },

    {
        numberQuestion: "Pēdējais jautājums!",
        textQuestion: "Kā jūs rīkosieties ,lai samazinātu satiksmes drošības risku attēlotāja situācijā?",
        imageQuestion: "photo/nr10.png",
        optionsQuestion: ["Apbraukšu kravas auto pa tramvaja sliediem", "Signalizēšu un gaidīšu ,kad kravas automobiļa vadītājs atbrīvos man ceļu", "Apstāšos un atļaušu kravas automobiļa vadītājam pabeigt manevru"],
        correctAnswer: "Apstāšos un atļaušu kravas automobiļa vadītājam pabeigt manevru",
        buttonQuestion: "Pabeigt"
    },

];

function startTest() {
    result = 0;
    selectAnswer = null;
    timeLeft = 900;
    clearInterval(timer);
    startTimer();
    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("question-screen").classList.add("active");
    current = 0;
    showQuestion();
}

function showQuestion() {
    const q = questions[current];
    document.getElementById("numberQuestion").innerText = q.numberQuestion;
    document.getElementById("textQuestion").innerText = q.textQuestion;
    document.getElementById("imageQuestion").src = q.imageQuestion;

    const optionsDiv = document.getElementById("optionsQuestion");
    optionsDiv.innerHTML = "";

    q.optionsQuestion.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.addEventListener("click", function () {
            Array.from(optionsDiv.children).forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectAnswer = btn.innerText;
        });
        optionsDiv.appendChild(btn);
    });

    document.getElementById("buttonQuestion").innerText = q.buttonQuestion;
}


function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            endTest(true); 
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `Laiks: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}   

function showResult() {
    const wrongAnswers = questions.length - result;
    const passed = wrongAnswers <= 2;


    document.getElementById("resultQuestion").innerText = `pareizās atbildes: ${result} no ${questions.length}\n` + (passed ? "Tests nokārtots!" : "Tests nav nokārtots.");
}


function resultQuestion() {
    alert("Arivederci");
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
        endTest();
    }
}

function endTest(forced = false) {
    clearInterval(timer);
    if (forced) alert("Laiks beidzies!");
    document.getElementById("question-screen").classList.remove("active");
    document.getElementById("result-screen").classList.add("active");
    showResult();
}
