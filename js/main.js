// Importar los otros módulos
import './filtro.js';
import './imgCambio.js';
import './header.js';

// Modo Dark
document.getElementById('switch').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  const footerIcon = document.querySelector('.footer-icon');
  const bootstrapIcon = document.querySelector('#bootstrap-icon');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    footerIcon.setAttribute('src', './assets/figmaDark.png');
    bootstrapIcon.setAttribute('src', './assets/icons/bootstrapDark.png');
  } else {
    footerIcon.setAttribute('src', './assets/figma.png');
    bootstrapIcon.setAttribute('src', './assets/icons/bootstrap.png');
  }
});



// Configuración inicial
const flowers = document.querySelectorAll('.flower');

flowers.forEach(flower => {
  setRandomPosition(flower);
});

function setRandomPosition(element) {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const delay = Math.random() * 10; // Añade un retraso aleatorio para cada flor
  element.style.left = `${randomX}px`;
  element.style.top = `${randomY}px`;
  // element.style.animationDelay = `${delay}s`; // retraso aleatorio
};




