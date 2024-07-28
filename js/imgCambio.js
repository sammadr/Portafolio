const botonImg = document.querySelector('.boton-img');
const img = document.querySelector('.img-boton');
const titulo = document.querySelector('.sobre-text');

let cambioImg = true;

botonImg.addEventListener('click', () => {
  if (cambioImg) {
    img.setAttribute('src', './assets/samma-icon.png');
    titulo.innerHTML = "Haz clic para regresar a mi versión floral"
  } else {
    img.setAttribute('src', './assets/samma-ia.jpg');
    titulo.innerHTML = "Un clic y descubre a la flor detrás del código"
  }
  cambioImg = !cambioImg; // Alternar el estado
  
});




