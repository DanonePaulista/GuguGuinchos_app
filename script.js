
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');

    // Adiciona sombra e muda o tom do menu ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});