/* =========================================
   BOTÃO MODO ESCURO / CLARO
========================================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


/* =========================================
   BOTÃO "ME SURPREENDA"
========================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const facts = [

    "👁️ A retina é uma camada sensível à luz localizada no fundo do olho.",

    "🧠 O cérebro participa ativamente da construção da nossa percepção visual.",

    "💡 A córnea ajuda a focalizar a luz que entra no olho.",

    "🌈 Os cones da retina participam da percepção das cores.",

    "🌙 Os bastonetes são importantes para enxergar em condições de pouca luz.",

    "⚡ O nervo óptico transporta sinais da retina em direção ao cérebro."

];

surpriseButton.addEventListener("click", () => {

    const random =
        facts[Math.floor(Math.random() * facts.length)];

    alert(random);

});


/* =========================================
   INFORMAÇÕES DAS PARTES DO OLHO
========================================= */

const parts = {

    cornea: {
        title: "💎 Córnea",
        text: "A córnea é a superfície transparente na parte frontal do olho. Ela ajuda a proteger o olho e a desviar a luz para a focalização."
    },

    iris: {
        title: "🎨 Íris",
        text: "A íris é a parte colorida do olho. Ela controla o tamanho da pupila e, consequentemente, ajuda a regular a quantidade de luz que entra."
    },

    lens: {
        title: "🔍 Cristalino",
        text: "O cristalino é uma estrutura transparente localizada atrás da íris. Ele ajuda a focalizar a luz na retina."
    },

    retina: {
        title: "⚡ Retina",
        text: "A retina é uma camada sensível à luz localizada no fundo do olho. Ela possui fotorreceptores que transformam a informação luminosa em sinais elétricos."
    },

    nerve: {
        title: "🧠 Nervo óptico",
        text: "O nervo óptico é formado por fibras nervosas que levam informações da retina para o cérebro."
    }

};

const partButtons =
    document.querySelectorAll(".part");

const partInfo =
    document.getElementById("partInfo");

partButtons.forEach(button => {

    button.addEventListener("click", () => {

        const part =
            parts[button.dataset.part];

        partInfo.innerHTML = `
            <h3>${part.title}</h3>
            <p>${part.text}</p>
        `;

    });

});


/* =========================================
   CURIOSIDADES
========================================= */

const factText =
    document.getElementById("factText");

const factButton =
    document.getElementById("factButton");

const curiosityFacts = [

    "Você pisca aproximadamente 15 a 20 vezes por minuto.",

    "👁️ A retina possui células especializadas chamadas fotorreceptores.",

    "🧠 A visão envolve tanto os olhos quanto o processamento realizado pelo cérebro.",

    "🌈 Cones e bastonetes possuem funções diferentes na visão.",

    "💧 As lágrimas ajudam a manter a superfície do olho úmida e também contribuem para uma superfície óptica regular."

];

factButton.addEventListener("click", () => {

    const random =
        curiosityFacts[
            Math.floor(Math.random() * curiosityFacts.length)
        ];

    factText.style.opacity = "0";

    setTimeout(() => {

        factText.textContent = random;

        factText.style.opacity = "1";

    }, 250);

});


/* =========================================
   ILUSÃO DE ÓTICA
========================================= */

const illusionButton =
    document.getElementById("illusionButton");

const illusionBox =
    document.querySelector(".illusion-box");

const illusionMessage =
    document.getElementById("illusionMessage");

illusionButton.addEventListener("click", () => {

    illusionBox.classList.toggle("active");

    if (illusionBox.classList.contains("active")) {

        illusionMessage.textContent =
            "🌀 Seu cérebro está tentando interpretar padrões e movimento!";

        illusionButton.textContent =
            "⏹️ Parar ilusão";

    } else {

        illusionMessage.textContent = "";

        illusionButton.textContent =
            "🌀 Ativar ilusão";

    }

});


/* =========================================
   QUIZ
========================================= */

const quiz = [

    {
        question:
            "Qual parte controla a quantidade de luz que entra no olho?",

        answers: [
            "Retina",
            "Íris",
            "Nervo óptico",
            "Cristalino"
        ],

        correct: 1
    },

    {
        question:
            "Onde ficam os fotorreceptores?",

        answers: [
            "Retina",
            "Pupila",
            "Córnea",
            "Esclera"
        ],

        correct: 0
    },

    {
        question:
            "Qual estrutura transporta informações visuais em direção ao cérebro?",

        answers: [
            "Íris",
            "Cristalino",
            "Nervo óptico",
            "Córnea"
        ],

        correct: 2
    },

    {
        question:
            "Qual estrutura ajuda a focalizar a luz na retina?",

        answers: [
            "Cristalino",
            "Pupila",
            "Nervo óptico",
            "Íris"
        ],

        correct: 0
    },

    {
        question:
            "O que o cérebro faz com os sinais visuais?",

        answers: [
            "Ignora os sinais",
            "Transforma-os em percepção visual",
            "Manda os sinais de volta para a pupila",
            "Produz lágrimas"
        ],

        correct: 1
    }

];


let currentQuestion = 0;

let score = 0;

const question =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const questionNumber =
    document.getElementById("questionNumber");

const progress =
    document.getElementById("progress");

const quizResult =
    document.getElementById("quizResult");


function loadQuestion() {

    const current =
        quiz[currentQuestion];

    question.textContent =
        current.question;

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${quiz.length}`;

    progress.style.width =
        `${((currentQuestion + 1) / quiz.length) * 100}%`;

    answersContainer.innerHTML = "";

    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer");

        button.addEventListener("click", () => {

            checkAnswer(button, index);

        });

        answersContainer.appendChild(button);

    });

}


function checkAnswer(button, index) {

    const current =
        quiz[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(btn => {

        btn.disabled = true;

    });


    if (index === current.correct) {

        button.classList.add("correct");

        score++;

    } else {

        button.classList.add("wrong");

        buttons[current.correct]
            .classList.add("correct");

    }


    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < quiz.length) {

            loadQuestion();

        } else {

            finishQuiz();

        }

    }, 1000);

}


function finishQuiz() {

    question.textContent =
        "🎉 Quiz finalizado!";

    questionNumber.textContent =
        "RESULTADO";

    answersContainer.innerHTML = "";

    progress.style.width = "100%";

    let message = "";

    if (score === 5) {

        message =
            "🏆 PERFEITO! Você é praticamente um especialista em visão!";

    } else if (score >= 3) {

        message =
            "🔥 Muito bem! Você já entendeu bastante sobre visão.";

    } else {

        message =
            "👁️ Continue explorando o site e tente novamente!";

    }

    quizResult.innerHTML = `
        <p>${message}</p>
        <p>Você acertou <strong>${score}</strong> de <strong>${quiz.length}</strong> perguntas.</p>
        <br>
        <button onclick="restartQuiz()" class="main-button">
            🔄 Jogar novamente
        </button>
    `;

}


function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    quizResult.innerHTML = "";

    loadQuestion();

}


loadQuestion();


/* =========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".timeline-card, .curiosity, .video-card, .process-item"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "0.7s ease";

    observer.observe(element);

});