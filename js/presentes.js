const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function passoDeRolagem() {
    const item = carousel.querySelector(".carousel-item");
    const gap = parseFloat(getComputedStyle(carousel).gap) || 16;
    return item.getBoundingClientRect().width + gap;
}

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: passoDeRolagem(), behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -passoDeRolagem(), behavior: "smooth" });
});

document.querySelectorAll(".copy-btn").forEach((btn) => {
    const textoOriginal = btn.textContent;

    btn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(btn.dataset.copy);
            btn.textContent = "Copiado!";
        } catch (erro) {
            btn.textContent = "Erro ao copiar";
        }

        setTimeout(() => {
            btn.textContent = textoOriginal;
        }, 1500);
    });
});
