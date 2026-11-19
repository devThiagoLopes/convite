const btnEntrar = document.getElementById("btnEntrar");
const capa = document.getElementById("capa");
const envelope = document.getElementById("envelope");

function explodirPoeiraDourada(origemX, origemY) {

    const quantidade = 26;

    for (let i = 0; i < quantidade; i++) {

        const particula = document.createElement("span");
        particula.className = "particula-explosao";

        const tamanho = (Math.random() * 4 + 2).toFixed(1);
        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.random() * 130 + 50;
        const dx = (Math.cos(angulo) * distancia).toFixed(1);
        const dy = (Math.sin(angulo) * distancia).toFixed(1);

        particula.style.left = origemX + "px";
        particula.style.top = origemY + "px";
        particula.style.width = tamanho + "px";
        particula.style.height = tamanho + "px";
        particula.style.setProperty("--dx", dx + "px");
        particula.style.setProperty("--dy", dy + "px");

        particula.addEventListener("animationend", () => particula.remove());

        document.body.appendChild(particula);
    }

}

btnEntrar.addEventListener("click", () => {

    // explosão de poeira dourada saindo do convite
    const retanguloEnvelope = envelope.getBoundingClientRect();
    explodirPoeiraDourada(
        retanguloEnvelope.left + retanguloEnvelope.width / 2,
        retanguloEnvelope.top + retanguloEnvelope.height / 2
    );

    // anima envelope
    envelope.classList.add("envelope-open");

    setTimeout(() => {

        // desaparece capa
        capa.classList.add("fade-out");

        setTimeout(() => {

            // quando a capa termina de desaparecer, o convite já carrega
            // direto com os efeitos dos cantos (ver lembrete.js)
            window.location.href = "lembrete.html";

        }, 1000);

    }, 700);

});
