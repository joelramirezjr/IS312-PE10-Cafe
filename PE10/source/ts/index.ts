import "./login";
import "./customer";
import "./shop";

const page = document.body.getAttribute("data-page");

if (page !== "login") {
  document.getElementById("loginForm")?.remove();
}

if (page !== "customer") {
  document.getElementById("menu")?.remove();
  document.getElementById("cart")?.remove();
}

if (page !== "shop") {
  document.getElementById("shop")?.remove();
  document.getElementById("confirm")?.remove();
}
