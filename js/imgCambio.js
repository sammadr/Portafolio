const botonImg = document.querySelector('.boton-img');
const img = document.querySelector('.img-boton');
const titulo = document.querySelector('.sobre-text');

let cambioImg = true;

botonImg.addEventListener('click', () => {
  if (cambioImg) {
    img.setAttribute('src', './assets/samma-icon.png');
    titulo.innerHTML = "Ya me viste, haz clic"
  } else {
    img.setAttribute('src', './assets/samma-ia.jpg');
    titulo.innerHTML = "Haz clic para verme"
  }
  cambioImg = !cambioImg; // Alternar el estado
  
});




