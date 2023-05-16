const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const menuShopCart = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMyOrder = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuBurger.addEventListener('click', toogleMobileMenu);
menuShopCart.addEventListener('click', toogleShopCart);

function toogleDesktopMenu(event)
{
    const isShopCartOpen = !asideMyOrder.classList.contains('inactive');
    if(isShopCartOpen)
    {
        asideMyOrder.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(event)
{
    const isShopCartOpen = !asideMyOrder.classList.contains('inactive');
    if(isShopCartOpen)
    {
        asideMyOrder.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleShopCart(event)
{
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isMobileMenuOpen || isDesktopMenuOpen)
    {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    asideMyOrder.classList.toggle('inactive');
}