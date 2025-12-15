// shop.ts

import { getItems, getTaxRate, setTaxRate, Item } from "./data";

function initShop(): void {
  const page = document.body.dataset.page;
  if (page !== "shop") {
    return;
  }

  const shopDiv = document.getElementById("shop") as HTMLElement | null;
  const confirmBtn = document.getElementById("confirm") as HTMLButtonElement | null;
  const taxInput = document.getElementById("tax") as HTMLInputElement | null;

  if (!shopDiv || !confirmBtn || !taxInput) {
    return;
  }

  let items: Item[] = getItems();

  function renderShop(): void {
    shopDiv!.innerHTML = "";

    items.forEach(item => {
      const row = document.createElement("div");

      row.innerHTML = `
        <strong>${item.name}</strong><br>
        Price: <input type="number" value="${item.price}" step="0.01"><br>
        Stock: <input type="number" value="${item.stock}">
        <hr>
      `;

      const inputs = row.querySelectorAll("input");
      const priceInput = inputs[0] as HTMLInputElement;
      const stockInput = inputs[1] as HTMLInputElement;

      priceInput.onchange = () => {
        item.price = Number(priceInput.value);
      };

      stockInput.onchange = () => {
        item.stock = Number(stockInput.value);
      };

      shopDiv!.appendChild(row);
    });

    taxInput!.value = getTaxRate().toString();
  }

  confirmBtn!.addEventListener("click", () => {
    sessionStorage.setItem("items", JSON.stringify(items));
    setTaxRate(Number(taxInput!.value));
    alert("Updates completed");
  });

  renderShop();
}

initShop();

// Keep file a module
export {};
