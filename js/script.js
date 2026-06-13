const screen1 = document.getElementById("screen1");
const screenMessage = document.getElementById("screenMessage");

const btnStart = document.getElementById("btnStart");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const intro = document.getElementById("intro");

const finalScreen = document.getElementById("finalScreen");

const particles = document.getElementById("particles");
const rain = document.getElementById("rain");

const background = document.querySelector(".background");

const glows = document.querySelectorAll(".glow");

/* ==========================
   INTRO
========================== */

setTimeout(() => {

    intro.classList.add("hide");

}, 3000);

/* ==========================
   MENSAJE PRINCIPAL
========================== */

const message = `No quiero sonar igual que todos.

Tampoco quiero decirte algo que hayas escuchado muchas veces antes.

Simplemente quería encontrar una forma diferente de expresarme, porque a veces las palabras en un mensaje no alcanzan para decir lo que uno realmente piensa.

Sé que la distancia no juega a nuestro favor y que apenas estamos conociéndonos, pero hasta ahora me has parecido una persona muy linda, alguien que vale la pena conocer más.

No espero que esto cambie nada de inmediato, ni quiero presionarte de ninguna manera.

Solo quería que supieras que me agrada hablar contigo y que me gustaría seguir ganándome tu confianza poco a poco.

Quizás esta página no sea perfecta, pero la hice porque hay cosas que me resulta más fácil expresar cuando las construyo que cuando simplemente las escribo.

Y esta es una de ellas.`;

/* ==========================
   INICIO
========================== */

btnStart.addEventListener("click", () => {

    screen1.classList.remove("active");

    setTimeout(() => {

        screenMessage.classList.add("active");

        music.volume = 1;

        music.play().catch(() => {
            console.log("Autoplay bloqueado por el navegador.");
        });

        startMessage();

    }, 700);

});

/* ==========================
   CONTROL DE MÚSICA
========================== */

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "♪";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});

/* ==========================
   EFECTO ESCRITURA
========================== */

function startMessage() {

    const container =
    document.getElementById("typewriter");

    container.innerHTML = "";

    let i = 0;

    function type() {

        if (i >= message.length) {

            startEndingSequence();

            return;

        }

        const char = message.charAt(i);

        container.innerHTML += char;

        i++;

        let delay = 45;

        if (char === ",") {

            delay = 350;

        }

        if (char === ".") {

            delay = 900;

        }

        if (char === "\n") {

            delay = 1200;

        }

        setTimeout(type, delay);

    }

    type();

}

/* ==========================
   SECUENCIA FINAL
========================== */

function startEndingSequence() {

    setTimeout(() => {

        particles.classList.add("fadeOut");

        rain.classList.add("fadeOut");

        background.classList.add("fadeOut");

        glows.forEach(glow => {

            glow.classList.add("fadeOut");

        });

    }, 2500);

    setTimeout(() => {

        screenMessage.style.transition = "2.5s";
        screenMessage.style.opacity = "0";
        screenMessage.style.pointerEvents = "none";

    }, 4500);

    setTimeout(() => {

        finalScreen.classList.add("show");

    }, 7000);

}

/* ==========================
   PARTÍCULAS
========================== */

createParticles();

function createParticles() {

    for (let i = 0; i < 70; i++) {

        const particle =
        document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
        Math.random() * 100 + "%";

        particle.style.top =
        Math.random() * 100 + "%";

        particle.style.animationDuration =
        (12 + Math.random() * 20) + "s";

        particle.style.animationDelay =
        (Math.random() * 10) + "s";

        particles.appendChild(particle);

    }

}

/* ==========================
   LLUVIA
========================== */

createRain();

function createRain() {

    for (let i = 0; i < 120; i++) {

        const drop =
        document.createElement("div");

        drop.classList.add("raindrop");

        drop.style.left =
        Math.random() * 100 + "%";

        drop.style.animationDuration =
        (0.7 + Math.random() * 1.5) + "s";

        drop.style.animationDelay =
        Math.random() * 3 + "s";

        rain.appendChild(drop);

    }

}

/* ==========================
   PARALLAX
========================== */

document.addEventListener("mousemove", (e) => {

    const x =
    (e.clientX / window.innerWidth - 0.5) * 10;

    const y =
    (e.clientY / window.innerHeight - 0.5) * 10;

    background.style.transform =
    `scale(1.08) translate(${x}px, ${y}px)`;

});