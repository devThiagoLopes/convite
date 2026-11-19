(function configurarExpiracaoDeSessao() {

    const DEZ_MINUTOS = 10 * 60 * 1000;
    let timer;

    function reiniciarTimer() {
        clearTimeout(timer);

        timer = setTimeout(() => {
            window.location.href = "index.html";
        }, DEZ_MINUTOS);
    }

    ["click", "touchstart", "scroll", "keydown", "mousemove"].forEach((evento) => {
        document.addEventListener(evento, reiniciarTimer, { passive: true });
    });

    reiniciarTimer();

})();
