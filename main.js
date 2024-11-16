var typed = new Typed(".text", {
    strings: ["Ofimática" , "Lenguajes de programación básicos"],
    typeSpeed: 100,
    backSpeed: 100,
    backDeplay: 1000,
    loop: true
})
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
