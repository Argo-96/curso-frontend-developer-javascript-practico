const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuBurger.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu(event)
{
    console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(event)
{
    console.log('Click');
    mobileMenu.classList.toggle('inactive');
}