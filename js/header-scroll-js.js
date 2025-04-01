// Controle do cabeçalho fixo
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header.style.padding = '10px 10%';
    } else {
        header.classList.remove('scrolled');
        header.style.padding = '15px 10%';
    }
});
