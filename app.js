const TOQUES_META = 5;
let toquesActuales = 0;

const musica = document.getElementById('musicaFondo');
const iconoRegalo = document.getElementById('iconoRegalo');
const barraProgreso = document.getElementById('barraProgreso');
const mensajeToques = document.getElementById('mensajeToques');
const pantallaJuego = document.getElementById('pantallaJuego');
const pantallaRevelada = document.getElementById('pantallaRevelada');
const btnMusica = document.getElementById('btnMusica');

const fases = [
  "🎁 Rompiendo la primera capa...",
  "✨ Ya casi cede la cinta...",
  "🔥 Se siente aroma delicioso...",
  "⚡ ¡Un toque más y se abre!"
];

function darGolpe() {
  // Iniciar la música en el primer toque de pantalla
  if (musica.paused) {
    musica.play().catch(() => {});
  }

  toquesActuales++;

  // Efecto de sacudida
  iconoRegalo.classList.remove('animar-vibrar');
  void iconoRegalo.offsetWidth; // Forzar reinicio de animación
  iconoRegalo.classList.add('animar-vibrar');

  // Progreso de la barra
  const porcentaje = (toquesActuales / TOQUES_META) * 100;
  barraProgreso.style.width = porcentaje + '%';

  if (toquesActuales < TOQUES_META) {
    mensajeToques.textContent = fases[toquesActuales - 1] || "¡Sigue tocando!";
  } else {
    abrirRegaloFinal();
  }
}

function abrirRegaloFinal() {
  // Disparo de confeti
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });

  pantallaJuego.style.display = 'none';
  pantallaRevelada.style.display = 'block';
}

function toggleMusica() {
  if (musica.paused) {
    musica.play();
    btnMusica.textContent = "🎵";
  } else {
    musica.pause();
    btnMusica.textContent = "🔇";
  }
}