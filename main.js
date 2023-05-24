const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const menuShopCart = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMyOrder = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuShopCart.addEventListener('click', toggleShopCart);

function toggleDesktopMenu(event)
{
    const isShopCartOpen = !asideMyOrder.classList.contains('inactive');
    if(isShopCartOpen)
    {
        asideMyOrder.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(event)
{
    const isShopCartOpen = !asideMyOrder.classList.contains('inactive');
    if(isShopCartOpen)
    {
        asideMyOrder.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShopCart(event)
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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Televisor',
    price: 450,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Smartphone',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for(product of productList)
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productAdd2Cart = document.createElement('img');
    productAdd2Cart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productAdd2Cart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}