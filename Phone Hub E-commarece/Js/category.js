// Sample product data
const products = [
    {
        id: 1,
        name: 'Premium Headphones',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        description: 'High-quality wireless headphones with noise cancellation'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        description: 'Latest generation smartwatch with health tracking'
    },
    {
        id: 3,
        name: 'Laptop Backpack',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        description: 'Water-resistant laptop backpack with USB charging port'
    },
    {
        id: 1,
        name: 'Premium Headphones',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        description: 'High-quality wireless headphones with noise cancellation'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        description: 'Latest generation smartwatch with health tracking'
    },
    {
        id: 3,
        name: 'Laptop Backpack',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        description: 'Water-resistant laptop backpack with USB charging port'
    }, {
        id: 4,
        name: 'Premium Headphones',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        description: 'High-quality wireless headphones with noise cancellation'
    },
    {
        id: 5,
        name: 'Smart Watch',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        description: 'Latest generation smartwatch with health tracking'
    },
    {
        id: 6,
        name: 'Laptop Backpack',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        description: 'Water-resistant laptop backpack with USB charging port'
    }, {
        id: 7,
        name: 'Premium Headphones',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        description: 'High-quality wireless headphones with noise cancellation'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        description: 'Latest generation smartwatch with health tracking'
    },
    {
        id: 3,
        name: 'Laptop Backpack',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        description: 'Water-resistant laptop backpack with USB charging port'
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        // alert('Product added to cart!');
    }
}
// Page reload hote hi cart empty ho jaye
window.addEventListener("load", () => {
    localStorage.removeItem("cart");
    cart = [];
    updateCartCount();
});

// Display featured products
function displayFeaturedProducts() {
    const productsContainer = document.getElementById('featured-products');
    if (!productsContainer) return;

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})" class="cta-button">
                    Add to Cart
                </button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
    updateCartCount();
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        // TODO: Implement search results display
        console.log('Search results:', filteredProducts);
    });
}