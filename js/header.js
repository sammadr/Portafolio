// NavBar
const navBotons = document.querySelectorAll('.nav-link');
navBotons.forEach(boton => {
  boton.addEventListener('click', function(){
    // Quitar la clase 'active' de todos los botones
    navBotons.forEach(btn => btn.classList.remove('active'));

    // Agregar la clase 'active' al botón clicado
    this.classList.add('active');
  });
});


// Funcionalidad para mostrar/ocultar secciones
const navLinks = document.querySelectorAll('a[data-target]');
const mainContent = document.getElementById('main-content');
const sections = mainContent.children;

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('data-target');

    if (targetId === 'inicio') {
      // Si es el enlace de "Inicio", muestra todas las secciones
      for (let section of sections) {
        section.classList.remove('hidden');
        section.querySelectorAll('.extra-content').forEach(content => content.style.display = 'none');
      }
    } else {
      // Si es cualquier otro enlace, oculta todas menos la seleccionada
      for (let section of sections) {
        if (section.id !== targetId) {
          section.classList.add('hidden');
        } else {
          section.classList.remove('hidden');
          section.querySelectorAll('.extra-content').forEach(content => content.style.display = 'block');
        
        // Si es la sección "Sobre mí", agrega la clase top-aligned a la imagen
        // if (targetId === 'sobre-mi') {
        //   section.querySelector('.sobre-container').classList.add('top-aligned');
        // } else {
        //   section.querySelector('.sobre-container').classList.remove('top-aligned');
        // }
        }
      }
    }
  });
});