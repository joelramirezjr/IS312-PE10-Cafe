export interface Item {
  name: string;
  price: number;
  stock: number;
}

export const defaultTaxRate = 0.08;

export function getItems(): Item[] {
  const data = sessionStorage.getItem("items");
  if (data) {
    return JSON.parse(data);
  }

  const items: Item[] = [
    { name: "Latte", price: 5, stock: 20 },
    { name: "Espresso", price: 4, stock: 20 },
    { name: "Americano", price: 3, stock: 20 },
    { name: "Frappe", price: 6, stock: 20 },
    { name: "Cold Brew", price: 3, stock: 20 }
  ];

  sessionStorage.setItem("items", JSON.stringify(items));
  sessionStorage.setItem("taxRate", defaultTaxRate.toString());
  return items;
}

export function getTaxRate(): number {
  const rate = sessionStorage.getItem("taxRate");
  return rate ? Number(rate) : defaultTaxRate;
}

export function setTaxRate(rate: number): void {
  sessionStorage.setItem("taxRate", rate.toString());
}
