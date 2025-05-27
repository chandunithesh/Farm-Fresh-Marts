// Array to hold cart items
let cart = [];

// Get all cart icons
const cartIcons = document.querySelectorAll('.cart-icon');
const cartCount = document.getElementById('cart-count');

// Add event listeners to each cart icon
cartIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const productCard = icon.parentElement;
        const name = productCard.querySelector('h3').innerText;
        const price = productCard.querySelector('p').innerText;

        const product = {
            name: name,
            price: price
        };

        cart.push(product);
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    cartCount.textContent = cart.length;
}
