// dark mode

// function toggleMode() {
//     document.body.classList.toggle("dark");
// }


// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Cart functionality
const cartBtn = document.getElementById('cart-btn');
const mobileCartBtn = document.getElementById('mobile-cart-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');

cartBtn.addEventListener('click', () => {
    checkoutModal.classList.add('active');
});

mobileCartBtn.addEventListener('click', () => {
    checkoutModal.classList.add('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Close modal when clicking outside
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
    }
});

// Add to cart functionality
document.addEventListener('DOMContentLoaded', function () {

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 1;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            count++;
            cartCount.textContent = count;

            // Animation effect
            this.textContent = 'Added!';
            this.style.backgroundColor = '#2bfb0bff';

            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '';
            }, 1500);
        });
    }
    );

    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#ef4444';
            } else {
                icon.classList.remove('ri');
                icon.classList.add('ri');
                icon.style.color = '';
            }
        });
    });

    // Quantity buttons
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const container = this.parentElement;
            const quantitySpan = container.querySelector('span');
            let quantity = parseInt(quantitySpan.textContent);

            if (this.textContent === '+') {
                quantity++;
            } else if (this.textContent === '-' && quantity > 1) {
                quantity--;
            }

            quantitySpan.textContent = quantity;
        });
    });

    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function () {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
