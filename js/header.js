// Combinar funcionalidad de NavBar y mostrar/ocultar secciones
const navBotons = document.querySelectorAll('.nav-link[data-target]');
const mainContent = document.getElementById('main-content');
const sections = mainContent.children;

navBotons.forEach(boton => {
  boton.addEventListener('click', function(event) {
    event.preventDefault();
    // Quitar la clase 'active' de todos los botones
    navBotons.forEach(btn => btn.classList.remove('active'));

    // Agregar la clase 'active' al botón clicado
    this.classList.add('active');

    // Obtener el targetId del botón clicado
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
        }
      }
    }
  });
});
