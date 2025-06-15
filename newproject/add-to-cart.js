function addToCart(productName, price, image) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: productName, price: price, image: image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}
