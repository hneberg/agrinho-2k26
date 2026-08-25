/* =====================================
   OPTIBOT
   JAVASCRIPT PRINCIPAL
===================================== */


/* =====================================
   PARTÍCULAS NO FUNDO
===================================== */

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");


function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


resizeCanvas();


window.addEventListener("resize", resizeCanvas);


const particles = [];


for (let i = 0; i < 80; i++) {

    particles.push({

        x: Math.random() * window.innerWidth,

        y: Math.random() * window.innerHeight,

        size: Math.random() * 3 + 1,

        speedX: Math.random() - 0.5,

        speedY: Math.random() - 0.5

    });

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(particle => {

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            "rgba(0, 217, 255, 0.5)";


        ctx.fill();


        particle.x += particle.speedX;

        particle.y += particle.speedY;


        if (
            particle.x < 0 ||
            particle.x > canvas.width
        ) {

            particle.speedX *= -1;

        }


        if (
            particle.y < 0 ||
            particle.y > canvas.height
        ) {

            particle.speedY *= -1;

        }

    });


    requestAnimationFrame(animateParticles);

}


animateParticles();



/* =====================================
   CONTADOR ANIMADO
===================================== */

const counters =
    document.querySelectorAll(".counter");


counters.forEach(counter => {

    const target =
        Number(counter.dataset.target);


    let count = 0;


    const updateCounter = () => {

        const increment =
            Math.ceil(target / 80);


        count += increment;


        if (count < target) {

            counter.textContent = count;

            requestAnimationFrame(updateCounter);

        }

        else {

            counter.textContent = target;

        }

    };


    updateCounter();

});



/* =====================================
   ROBÔ CONTROLÁVEL
===================================== */

const robot =
    document.getElementById("mini-robot");


const world =
    document.getElementById("robot-world");


const message =
    document.getElementById("robot-message");


let robotX = 20;

let robotY = 20;

const speed = 20;


function moveRobot(x, y) {

    robotX += x;

    robotY += y;


    const maxX =
        world.clientWidth - robot.clientWidth;


    const maxY =
        world.clientHeight - robot.clientHeight;


    robotX =
        Math.max(
            0,
            Math.min(robotX, maxX)
        );


    robotY =
        Math.max(
            0,
            Math.min(robotY, maxY)
        );


    robot.style.left =
        robotX + "px";


    robot.style.top =
        robotY + "px";


    checkGoal();

}



document
    .getElementById("up")
    .addEventListener(
        "click",
        () => moveRobot(0, -speed)
    );


document
    .getElementById("down")
    .addEventListener(
        "click",
        () => moveRobot(0, speed)
    );


document
    .getElementById("left")
    .addEventListener(
        "click",
        () => moveRobot(-speed, 0)
    );


document
    .getElementById("right")
    .addEventListener(
        "click",
        () => moveRobot(speed, 0)
    );



document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowUp"
        ) {
            moveRobot(0, -speed);
        }


        if (
            event.key === "ArrowDown"
        ) {
            moveRobot(0, speed);
        }


        if (
            event.key === "ArrowLeft"
        ) {
            moveRobot(-speed, 0);
        }


        if (
            event.key === "ArrowRight"
        ) {
            moveRobot(speed, 0);
        }

    }
);



function checkGoal() {

    const target =
        document.getElementById("target");


    const robotRect =
        robot.getBoundingClientRect();


    const targetRect =
        target.getBoundingClientRect();


    const distanceX =
        Math.abs(
            robotRect.left -
            targetRect.left
        );


    const distanceY =
        Math.abs(
            robotRect.top -
            targetRect.top
        );


    if (
        distanceX < 50 &&
        distanceY < 50
    ) {

        message.textContent =
            "🎉 MISSÃO CUMPRIDA! Você encontrou o alvo!";

    }

}



/* =====================================
   EDITOR DE CÓDIGO
===================================== */

const runCode =
    document.getElementById("run-code");


const codeInput =
    document.getElementById("code-input");


const output =
    document.getElementById("code-output");


runCode.addEventListener(
    "click",
    () => {

        const code =
            codeInput.value;


        let logs = [];


        const originalConsole =
            console.log;


        console.log =
            function(message) {

                logs.push(message);

            };


        try {

            eval(code);


            if (logs.length === 0) {

                output.innerHTML =
                    "> Código executado com sucesso.";

            }

            else {

                output.innerHTML =
                    logs
                        .map(
                            item =>
                                "> " + item
                        )
                        .join("<br>");

            }

        }

        catch (error) {

            output.innerHTML =
                "> ERRO: " +
                error.message;

        }


        console.log =
            originalConsole;

    }
);



/* =====================================
   SIMULADOR DE LUZ
===================================== */

const lightButtons =
    document.querySelectorAll(".light-btn");


const lightBeam =
    document.getElementById("light-beam");


lightButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const color =
                button.dataset.color;


            if (
                color === "rainbow"
            ) {

                lightBeam.style.background =
                    "linear-gradient(90deg, red, orange, yellow, lime, cyan, blue, violet)";

            }

            else {

                lightBeam.style.background =
                    color;

            }


            lightBeam.style.opacity =
                "0.9";

        }
    );

});



/* =====================================
   PRISMA
===================================== */

const prismButton =
    document.getElementById("prism-btn");


const rainbowBeam =
    document.getElementById("rainbow-beam");


prismButton.addEventListener(
    "click",
    () => {

        rainbowBeam.classList.toggle(
            "active"
        );


        if (
            rainbowBeam.classList.contains("active")
        ) {

            prismButton.innerHTML =
                "🌈 PRISMA ATIVADO";

        }

        else {

            prismButton.innerHTML =
                "✨ ATIVAR PRISMA";

        }

    }
);



/* =====================================
   REFLEXÃO
===================================== */

const slider =
    document.getElementById(
        "reflection-slider"
    );


const incidentRay =
    document.getElementById(
        "incident-ray"
    );


const reflectedRay =
    document.getElementById(
        "reflected-ray"
    );


slider.addEventListener(
    "input",
    () => {

        const angle =
            slider.value;


        incidentRay.style.transform =
            `rotate(${-angle}deg)`;


        reflectedRay.style.transform =
            `rotate(${angle}deg)`;

    }
);



/* =====================================
   QUIZ
===================================== */

const questions = [

    {

        question:
            "O que um sensor permite que um robô faça?",

        answers: [

            "Sentir o ambiente",

            "Virar um ser humano",

            "Parar de funcionar",

            "Comer energia"

        ],

        correct: 0

    },


    {

        question:
            "Qual linguagem é muito utilizada para criar páginas web?",

        answers: [

            "HTML",

            "Bateria",

            "Laser",

            "Motor"

        ],

        correct: 0

    },


    {

        question:
            "O que acontece na refração?",

        answers: [

            "A luz muda de direção",

            "A luz desaparece",

            "O robô para",

            "O computador explode"

        ],

        correct: 0

    },


    {

        question:
            "Qual componente pode movimentar um robô?",

        answers: [

            "Motor",

            "Espelho",

            "Monitor",

            "Teclado"

        ],

        correct: 0

    },


    {

        question:
            "Quais são os três temas do OPTIBOT?",

        answers: [

            "Robótica, Programação e Óptica",

            "Biologia, História e Música",

            "Comida, Moda e Jogos",

            "Matemática, Futebol e Cinema"

        ],

        correct: 0

    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


const questionElement =
    document.getElementById("question");


const answersElement =
    document.getElementById("answers");


const resultElement =
    document.getElementById("quiz-result");


const progressElement =
    document.getElementById("quiz-progress");


const nextButton =
    document.getElementById("next-question");



function loadQuestion() {

    answered = false;


    const question =
        questions[currentQuestion];


    progressElement.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;


    questionElement.textContent =
        question.question;


    answersElement.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );


            answersElement.appendChild(
                button
            );

        }
    );


    resultElement.textContent = "";

}


function selectAnswer(index) {

    if (answered) return;


    answered = true;


    const correct =
        questions[currentQuestion].correct;


    const buttons =
        answersElement.querySelectorAll(
            "button"
        );


    buttons.forEach(
        (button, buttonIndex) => {

            if (
                buttonIndex === correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

            if (
                buttonIndex === index &&
                index !== correct
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    if (index === correct) {

        score++;


        resultElement.textContent =
            "🎉 CORRETO! Muito bem!";

    }

    else {

        resultElement.textContent =
            "❌ Quase! Continue tentando.";

    }

}


nextButton.addEventListener(
    "click",
    () => {

        if (!answered) {

            resultElement.textContent =
                "Escolha uma resposta primeiro!";

            return;

        }


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        }

        else {

            questionElement.textContent =
                "QUIZ FINALIZADO!";


            answersElement.innerHTML =
                `Você acertou ${score} de ${questions.length} perguntas! 🚀`;


            resultElement.innerHTML =
                score >= 4
                    ? "🏆 Você é um mestre da tecnologia!"
                    : "🤖 Continue estudando e tente novamente!";


            nextButton.textContent =
                "RECOMEÇAR";


            nextButton.onclick =
                () => {

                    currentQuestion = 0;

                    score = 0;

                    nextButton.textContent =
                        "PRÓXIMA";

                    loadQuestion();

                };

        }

    }
);


loadQuestion();



/* =====================================
   MENU MOBILE
===================================== */

const menuButton =
    document.getElementById("menu-btn");


const navbar =
    document.querySelector(".navbar");


menuButton.addEventListener(
    "click",
    () => {

        if (
            navbar.style.display === "flex"
        ) {

            navbar.style.display =
                "none";

        }

        else {

            navbar.style.display =
                "flex";

            navbar.style.flexDirection =
                "column";

            navbar.style.position =
                "absolute";

            navbar.style.top =
                "75px";

            navbar.style.right =
                "20px";

            navbar.style.padding =
                "20px";

            navbar.style.background =
                "#111122";

            navbar.style.borderRadius =
                "15px";

        }

    }
);