const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0 );});

    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }