// Cart data store
let cart = [];
let cartCount = 5;

// Elements
const cartBtn = document.querySelector("#cart-btn .cart-count");
const mobileCartBtn = document.querySelector("#mobile-cart-btn .cart-count");
const addToCartBtns = document.querySelectorAll(".add-to-cart");

// Function: Update cart count UI
function updateCartCount() {
  cartBtn.textContent = cartCount;
  mobileCartBtn.textContent = cartCount;
}

// Function: Add product to cart
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  cartCount++;
  updateCartCount();
  console.log("Cart:", cart);
}

// Event listeners for all buttons
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Find product details
    // const productCard = btn.closest(".best-p1");
    // const productName = productCard.querySelector(".name-of-p p").innerText;
    // const priceText = productCard.querySelector(".price").innerText;
    // const price = priceText.replace("$", "").trim();

    // Add product
    addToCart(cartCount, price);
    alert(`${cartCount} added to cart!`);
  });
});



