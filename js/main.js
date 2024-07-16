// Importar los otros módulos
import './filtro.js';
import './img.js';

// Modo Dark
document.getElementById('switch').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});


// NavBar

const navBotons = document.querySelectorAll('.nav-link');


// navBotons.addEventListener('click', () =>{
//   console.log('Clic en el nav')
// });

navBotons.forEach(boton => {
  boton.addEventListener('click', function(){
    console.log('Clic en el nav');
    // Quitar la clase 'active' de todos los botones
    navBotons.forEach(btn => btn.classList.remove('active'));

    // Agregar la clase 'active' al botón clicado
    this.classList.add('active');
  });
});

