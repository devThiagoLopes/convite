(function criarPoeiraDourada() {

    const overlay = document.createElement("div");
    overlay.id = "poeiraDourada";
    overlay.setAttribute("aria-hidden", "true");
    document.body.prepend(overlay);

    const quantidade = window.innerWidth < 768 ? 9 : 16;

    for (let i = 0; i < quantidade; i++) {

        const particula = document.createElement("span");
        particula.className = "particula-dourada";

        const tamanho = (Math.random() * 2 + 1).toFixed(1);
        const esquerda = (Math.random() * 100).toFixed(1);
        const duracao = (Math.random() * 18 + 18).toFixed(1);
        const atraso = (Math.random() * -36).toFixed(1);
        const derivaX = (Math.random() * 40 - 20).toFixed(0);

        particula.style.left = esquerda + "vw";
        particula.style.width = tamanho + "px";
        particula.style.height = tamanho + "px";
        particula.style.animationDuration = duracao + "s";
        particula.style.animationDelay = atraso + "s";
        particula.style.setProperty("--deriva-x", derivaX + "px");

        overlay.appendChild(particula);
    }

})();
