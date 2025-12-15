// login.ts

function initLogin(): void {
  const page = document.body.dataset.page;

  // Only run this code on the login page
  if (page !== "login") {
    return;
  }

  const form = document.getElementById("loginForm") as HTMLFormElement | null;
  const usernameInput = document.getElementById("username") as HTMLInputElement | null;

  if (!form || !usernameInput) {
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    sessionStorage.setItem("username", usernameInput.value);

    // Go to customer view
    window.location.href = "customer.html";
  });
}

initLogin();

export {};



