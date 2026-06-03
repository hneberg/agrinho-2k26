function resposta(correto) {
    const result = document.getElementById("resultado");

    if (correto) {
        result.innerHTML = "✔ Correto! Sustentabilidade é equilíbrio entre produção e natureza.";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "✖ Incorreto. Pense no equilíbrio ambiental!";
        result.style.color = "red";
    }
}

/* animação simples ao rolar */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".box").forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});