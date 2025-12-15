import { getItems, Item, getTaxRate } from "./data";

const username = sessionStorage.getItem("username") || "Customer";
const welcome = document.getElementById("welcome");

if (welcome) {
  welcome.textContent = `Welcome, ${username}`;
}

let items: Item[] = getItems();
let cart: Record<string, number> = {};

const menu = document.getElementById("menu");
const cartDiv = document.getElementById("cart");

function renderMenu(): void {
  if (!menu) return;

  menu.innerHTML = "";

  items.forEach(item => {
    const row = document.createElement("div");
    row.textContent =
      `${item.name} $${item.price} Stock: ${item.stock} `;

    const btn = document.createElement("button");
    btn.textContent = "Add to cart";

    btn.onclick = () => {
      if ((cart[item.name] || 0) < item.stock) {
        cart[item.name] = (cart[item.name] || 0) + 1;
        renderCart();
      } else {
        alert("Not enough in stock");
      }
    };

    row.appendChild(btn);
    menu.appendChild(row);
  });
}

function renderCart(): void {
  if (!cartDiv) return;

  cartDiv.innerHTML = "";
  let subtotal = 0;
  const taxRate = getTaxRate();

  for (const name in cart) {
    const item = items.find(i => i.name === name)!;
    const qty = cart[name];
    subtotal += item.price * qty;

    const row = document.createElement("div");
    row.textContent =
      `${name} $${item.price} x ${qty}`;
    cartDiv.appendChild(row);
  }

  const total =
    subtotal + subtotal * taxRate;

  const totalDiv = document.createElement("div");
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
  cartDiv.appendChild(totalDiv);

  const orderBtn = document.createElement("button");
  orderBtn.textContent = "Order";
  orderBtn.onclick = placeOrder;
  cartDiv.appendChild(orderBtn);
}

function placeOrder(): void {
  for (const name in cart) {
    const item = items.find(i => i.name === name)!;
    item.stock -= cart[name];
  }

  cart = {};
  sessionStorage.setItem("items", JSON.stringify(items));

  renderMenu();
  renderCart();
}

renderMenu();
renderCart();

export {};
