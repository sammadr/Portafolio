// Funcionalidad de filtrado
const filterButtons = document.querySelectorAll('.botonFiltro');
const cards = document.querySelectorAll('.cards');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-categoria');

    // Quitar la clase 'active' de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Agregar la clase 'active' al botón clicado
    this.classList.add('active');

    // Mostrar/Ocultar tarjetas
    cards.forEach(card => {
      if (category === 'all') {
        if (!card.classList.contains('extra-content')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      } else {
        if (card.id === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});
