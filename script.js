const elementos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    elementos.forEach(el => {

        const topo = el.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){
            el.classList.add("show");
        }

    });

});

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo = +contador.dataset.target;
        const valor = +contador.innerText;

        const incremento = alvo / 100;

        if(valor < alvo){
            contador.innerText =
            Math.ceil(valor + incremento);

            setTimeout(atualizar,20);
        }
        else{
            contador.innerText = alvo;
        }

    };

    atualizar();

});

const botaoModo =
document.getElementById("modo");

botaoModo.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});