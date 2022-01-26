let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
})