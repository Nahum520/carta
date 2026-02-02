function abrirCarta() {
    document.getElementById("carta").style.display = "none";
    document.getElementById("contenido").style.display = "block";
}

const mensajes = [
    "Eres la mejor 💖",
    "Te amo infinitamente ♾️",
    "Eres preciosa ✨",
    "Mi princesa hermosa 👑",
    "Eres mi luz 🌟",
    "Mi reina 🤍",
    "Mi psicóloga favorita 🧠💞",
    "Siempre estaré contigo 🤝",
    "Gracias por existir 🌷",
    "Mi lugar seguro eres tú 🏡",
    "Te amo hoy y siempre 💕",
    "Tú puedes con todo 🫂",
    "Eres valiente 💗",
    "Te amo más de lo que las palabras saben decir 💕",
    "Amarte es lo más bonito que me pasa cada día🫂",
    "Contigo todo se siente más tranquilo 🌙",
    "Incluso en tus días grises, sigues siendo luz💕",
    "Paso a paso, yo voy contigo 🤝",
    "Siempre serás tú❤️‍🩹",
    "Admiro tu corazón, tu forma de sentir, tu forma de ser💖",
    "Eres increíble incluso cuando no te das cuenta🌟",
    "Eres más de lo que crees ✨",
];

let indiceMensaje = 0;


function mostrarMensajes() {

    if (indiceMensaje >= mensajes.length) {
        indiceMensaje = 0; // bucle infinito 💞
    }

    const msg = document.createElement("div");
    msg.className = "mensaje";
    msg.textContent = mensajes[indiceMensaje];

    msg.style.left = Math.random() * 80 + "vw";
    msg.style.top = Math.random() * 80 + "vh";

    document.body.appendChild(msg);

    // eliminar después de que termine la animación
    setTimeout(() => {
        msg.remove();
    }, 5000);

    indiceMensaje++;
}


function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.textContent = "💕";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (16 + Math.random() * 14) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 10000);
}

setInterval(crearCorazon, 1200);
