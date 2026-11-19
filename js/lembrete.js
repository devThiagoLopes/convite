const btnMais = document.getElementById('btnMais');
const textoBtnMais = document.getElementById('textoBtnMais');
const conviteExtra = document.getElementById('conviteExtra');

const mascara = document.getElementById("mascara");
const logo = document.getElementById("logoConvite");
const conteudo = document.getElementById("conteudoConvite");

const CHAVE_VER_MAIS = "lembreteJulia_verMais";

// Popups de WhatsApp e Localização
const btnWhatsapp = document.getElementById("btnWhatsapp");
const popupWhatsapp = document.getElementById("popupWhatsapp");
const btnLocalizacao = document.getElementById("btnLocalizacao");
const popupLocalizacao = document.getElementById("popupLocalizacao");

function abrirPopup(popup) {
    popup.classList.remove("hidden");
}

function fecharPopup(popup) {
    popup.classList.add("hidden");
}

btnWhatsapp.addEventListener("click", () => abrirPopup(popupWhatsapp));
btnLocalizacao.addEventListener("click", () => abrirPopup(popupLocalizacao));

document.querySelectorAll(".popup-fechar").forEach((botao) => {
    botao.addEventListener("click", () => {
        fecharPopup(document.getElementById(botao.dataset.popup));
    });
});

[popupWhatsapp, popupLocalizacao].forEach((popup) => {
    popup.addEventListener("click", (evento) => {
        if (evento.target === popup) {
            fecharPopup(popup);
        }
    });
});

// só pula a animação dos cantos quando voltamos da página de presentes
// (o link "Voltar" em presentes.html manda ?voltar=1);
// vindo da capa (index.html) ou de qualquer outro acesso, anima normal
const vemDePresentes = new URLSearchParams(window.location.search).get("voltar") === "1";

if (vemDePresentes) {

    [mascara, logo, conteudo].forEach((el) => {
        el.style.animation = "none";
        el.style.opacity = "1";
        el.style.transform = "none";
    });

} else {

    mascara.classList.add("mascara-animar");

    setTimeout(() => {
        logo.classList.add("logo-animar");
    }, 400);

    setTimeout(() => {
        conteudo.classList.add("conteudo-animar");
    }, 1000);

}

if (sessionStorage.getItem(CHAVE_VER_MAIS) === "1") {
    conviteExtra.classList.remove("hidden");
    textoBtnMais.textContent = "Ver Menos";
}

btnMais.addEventListener('click', () => {

    const estaAberto = !conviteExtra.classList.contains('hidden');

    if (estaAberto) {

        sessionStorage.removeItem(CHAVE_VER_MAIS);

        conviteExtra.classList.add('hidden');
        textoBtnMais.textContent = 'Ver Mais';

        btnMais.scrollIntoView({
            behavior: 'smooth'
        });

    } else {

        sessionStorage.setItem(CHAVE_VER_MAIS, "1");

        conviteExtra.classList.remove('hidden');
        textoBtnMais.textContent = 'Ver Menos';

        conviteExtra.scrollIntoView({
            behavior: 'smooth'
        });

    }

});

// Data da festa
const dataEvento = new Date("December 4, 2026 19:30:00").getTime();

function atualizarContador() {

    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    if (distancia <= 0) {

        document.getElementById("contador").innerHTML =
            "<span class='text-[#d4af37] text-xl'>Chegou o grande dia!</span>";

        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);
