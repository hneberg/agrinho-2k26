/* ==================================
   LUMINA
   JAVASCRIPT
================================== */


/* ==================================
   MODO ESCURO / CLARO
================================== */

const themeButton =
    document.getElementById("themeButton");

const savedTheme =
    localStorage.getItem("lumina-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "☀️";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    themeButton.textContent =
        isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "lumina-theme",
        isLight ? "light" : "dark"
    );

});


/* ==================================
   PARTICULAS
================================== */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() * 2 + .5;

        this.speedX =
            (Math.random() - .5) * .4;

        this.speedY =
            (Math.random() - .5) * .4;

        this.opacity =
            Math.random() * .6;

    }


    update() {

        this.x += this.speedX;
        this.y += this.speedY;


        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {

            this.speedX *= -1;

        }


        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.speedY *= -1;

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(167,139,250,${this.opacity})`;

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    const quantity =
        Math.min(
            100,
            Math.floor(
                window.innerWidth / 12
            )
        );


    for (
        let i = 0;
        i < quantity;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.update();
            particle.draw();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


animateParticles();


/* ==================================
   CARDS
================================== */

const cards =
    document.querySelectorAll(
        ".phenomenon-card"
    );


cards.forEach(card => {

    const button =
        card.querySelector(
            ".learn-button"
        );


    button.addEventListener(
        "click",
        () => {

            const title =
                card.dataset.title;

            const description =
                card.dataset.description;


            alert(
                `${title}\n\n${description}`
            );

        }
    );

});


/* ==================================
   SLIDER
================================== */

const slider =
    document.getElementById(
        "lightSlider"
    );

const sliderValue =
    document.getElementById(
        "sliderValue"
    );


slider.addEventListener(
    "input",
    () => {

        sliderValue.textContent =
            slider.value;


        const intensity =
            slider.value / 100;


        document.querySelector(
            ".laser"
        ).style.opacity =
            intensity;


        document.querySelector(
            ".spectrum"
        ).style.opacity =
            intensity;

    }
);


/* ==================================
   QUIZ
================================== */

const questions = [

    {
        question:
            "O que acontece quando a luz branca passa por um prisma?",

        answers: [

            "Ela desaparece",
            "Ela é separada em diferentes cores",
            "Ela vira som",
            "Ela para de se mover"

        ],

        correct: 1
    },


    {
        question:
            "Qual fenômeno está relacionado ao espalhamento da luz ao passar por uma abertura estreita?",

        answers: [

            "Difração",
            "Reflexão",
            "Combustão",
            "Absorção"

        ],

        correct: 0
    },


    {
        question:
            "O que é interferência luminosa?",

        answers: [

            "Quando a luz vira matéria",
            "Quando ondas luminosas se sobrepõem",
            "Quando a luz desaparece",
            "Quando a luz deixa de ser uma onda"

        ],

        correct: 1
    },


    {
        question:
            "Qual tecnologia utiliza polarização?",

        answers: [

            "Óculos polarizados",
            "Termômetro de mercúrio",
            "Bússola",
            "Régua"

        ],

        correct: 0
    }

];


let currentQuestion = 0;

let score = 0;


const questionElement =
    document.getElementById(
        "question"
    );

const answersElement =
    document.getElementById(
        "answers"
    );

const startButton =
    document.getElementById(
        "startQuiz"
    );

const scoreElement =
    document.getElementById(
        "score"
    );


function startQuiz() {

    currentQuestion = 0;

    score = 0;

    scoreElement.textContent = "";

    startButton.style.display =
        "none";

    showQuestion();

}


function showQuestion() {

    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    answersElement.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                () => {

                    checkAnswer(index);

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );

}


function checkAnswer(index) {

    if (
        index ===
        questions[currentQuestion].correct
    ) {

        score++;

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    } else {

        finishQuiz();

    }

}


function finishQuiz() {

    questionElement.textContent =
        "🎉 Quiz finalizado!";


    answersElement.innerHTML = "";


    scoreElement.textContent =
        `Você acertou ${score} de ${questions.length}!`;


    startButton.style.display =
        "inline-block";


    startButton.textContent =
        "Refazer quiz";

}


startButton.addEventListener(
    "click",
    startQuiz
);


/* ==================================
   BOTÃO VOLTAR AO TOPO
================================== */

const topButton =
    document.getElementById(
        "topButton"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topButton.classList.add(
                "show"
            );

        } else {

            topButton.classList.remove(
                "show"
            );

        }

    }
);


topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ==================================
   ANIMAÇÃO AO APARECER
================================== */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: .15
        }
    );


document
    .querySelectorAll(
        ".phenomenon-card, .curiosity, .video-card"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });