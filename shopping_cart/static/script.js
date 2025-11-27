// Simple demo item data. You can change names & prices as needed.
const ITEMS = [
  { id: 1, name: "Chocolate Hamper", price: 15 },
  { id: 2, name: "Dried Fruit Basket", price: 24 },
  { id: 3, name: "Cleaning Set", price: 21 },
];

const itemList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
const totalSpan = document.getElementById("total");
const clearCartBtn = document.getElementById("clear-cart");
const cartEmptyMsg = document.getElementById("cart-empty");

// Cart is a map: itemId -> { ...item, qty }
let cart = {};

// Render the list of available items with "Add" buttons
function renderItems() {
  itemList.innerHTML = "";

  ITEMS.forEach(item => {
    const li = document.createElement("li");
    li.className = "item-row";

    const nameSpan = document.createElement("span");
    nameSpan.className = "item-name";
    nameSpan.textContent = item.name;

    const priceSpan = document.createElement("span");
    priceSpan.className = "item-price";
    priceSpan.textContent = `$${item.price}`;

    const addBtn = document.createElement("button");
    addBtn.className = "btn btn-primary";
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", () => addToCart(item.id));

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    li.appendChild(addBtn);

    itemList.appendChild(li);
  });
}

// Add an item to the cart (or increase qty)
function addToCart(itemId) {
  const item = ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (!cart[itemId]) {
    cart[itemId] = { ...item, qty: 0 };
  }
  cart[itemId].qty += 1;
  renderCart();
}

// Decrease quantity of an item in the cart
function decreaseItem(itemId) {
  if (!cart[itemId]) return;
  cart[itemId].qty -= 1;
  if (cart[itemId].qty <= 0) {
    delete cart[itemId];
  }
  renderCart();
}

// Increase quantity of an item in the cart
function increaseItem(itemId) {
  if (!cart[itemId]) return;
  cart[itemId].qty += 1;
  renderCart();
}

// Clear entire cart
function clearCart() {
  cart = {};
  renderCart();
}

// Re-render the cart list and total
function renderCart() {
  cartList.innerHTML = "";

  const entries = Object.values(cart);

  if (entries.length === 0) {
    cartEmptyMsg.style.display = "block";
  } else {
    cartEmptyMsg.style.display = "none";
  }

  let total = 0;

  entries.forEach(item => {
    const li = document.createElement("li");
    li.className = "cart-row";

    const nameSpan = document.createElement("span");
    nameSpan.className = "item-name";
    nameSpan.textContent = item.name;

    const qtyControls = document.createElement("div");
    qtyControls.className = "qty-controls";

    const minusBtn = document.createElement("button");
    minusBtn.className = "btn btn-qty";
    minusBtn.textContent = "-";
    minusBtn.addEventListener("click", () => decreaseItem(item.id));

    const qtySpan = document.createElement("span");
    qtySpan.className = "qty";
    qtySpan.textContent = item.qty;

    const plusBtn = document.createElement("button");
    plusBtn.className = "btn btn-qty";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", () => increaseItem(item.id));

    qtyControls.appendChild(minusBtn);
    qtyControls.appendChild(qtySpan);
    qtyControls.appendChild(plusBtn);

    const subtotalSpan = document.createElement("span");
    subtotalSpan.className = "item-price";
    const subtotal = item.price * item.qty;
    subtotalSpan.textContent = `$${subtotal}`;
    total += subtotal;

    li.appendChild(nameSpan);
    li.appendChild(qtyControls);
    li.appendChild(subtotalSpan);

    cartList.appendChild(li);
  });

  totalSpan.textContent = total.toString();
}

// Event listeners
clearCartBtn.addEventListener("click", clearCart);

// Initial render
renderItems();
renderCart();