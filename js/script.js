const clickSound = new Audio("audio/click.mp3");

document.querySelectorAll("button").forEach(botao => {

    botao.addEventListener("click", () => {

        clickSound.currentTime = 0;
        clickSound.play();

    });

});
const crowd = new Audio("audio/crowd.mp3");
const cheer = new Audio("audio/cheer.mp3");

crowd.loop = true;
crowd.volume = 0;

const botao = document.getElementById("btnInscrever");

let tocando = false;

document.addEventListener("mousemove", (e) => {

    const rect = botao.getBoundingClientRect();

    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;

    const distancia = Math.sqrt(
        Math.pow(e.clientX - centroX, 2) +
        Math.pow(e.clientY - centroY, 2)
    );

    const alcance = 500;

    if (distancia < alcance) {

        if (!tocando) {
            crowd.play();
            tocando = true;
        }

        let volume = 1 - (distancia / alcance);

        volume = Math.max(0, Math.min(volume, 1));

        crowd.volume = volume;

    } else {

        crowd.pause();
        crowd.currentTime = 0;
        tocando = false;

    }

});

botao.addEventListener("click", () => {

    crowd.pause();
    crowd.currentTime = 0;

    cheer.currentTime = 0;
    cheer.volume = 1;

    cheer.play();

});