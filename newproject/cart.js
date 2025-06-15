// cart.js
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const totalPrice = document.getElementById("total-price");

function addToCart(name, price, image) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function renderCart() {
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
    totalPrice.innerHTML = "";
    checkoutBtn.style.display = "none";
    return;
  }

  let total = 0;
  checkoutBtn.style.display = "block";

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-img">
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
      </div>
      <div class="item-actions">
        <button class="remove-btn" onclick="removeFromCart(${index}, this)">Remove</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  totalPrice.innerHTML = `<strong>Total: ₹${total}</strong>`;
}

function removeFromCart(index, btn) {
  const itemDiv = btn.closest(".cart-item");
  itemDiv.classList.add("fade-out");

  setTimeout(() => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }, 300);
}

function checkout() {
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();
