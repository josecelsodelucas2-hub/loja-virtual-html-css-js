let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price, 0);

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  total += price;
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  if (cartDiv) cartDiv.innerText = `Carrinho (${cart.length})`;

  const items = document.getElementById('cart-items');
  if (items) {
    items.innerHTML = '';
    cart.forEach(item => {
      let li = document.create
