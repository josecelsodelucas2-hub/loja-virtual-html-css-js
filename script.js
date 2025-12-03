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
      let li = document.createElement('li');
      li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
      items.appendChild(li);
    });
  }

  const totalSpan = document.getElementById('total');
  if (totalSpan) totalSpan.innerText = total.toFixed(2);
}

function finalizePurchase(event) {
  event.preventDefault();
  alert("Compra finalizada com sucesso! Obrigado por comprar na Minha Loja.");
  cart = [];
  localStorage.removeItem('cart');
  total = 0;
  updateCart();
}

// Atualiza ao carregar a página
updateCart();
