// ===== STOCK DATA =====
let stock = JSON.parse(localStorage.getItem("stock")) || [];

// ===== PAGE TRANSITION (LOAD) =====
document.addEventListener("DOMContentLoaded", () => {
  // Overlay animation
  const overlay = document.createElement("div");
  overlay.className = "page-transition";
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.remove();
  }, 600);

  // Load data safely
  displayItems();
  displayReport();
});

// ===== LOGIN =====
function login() {
  const u = document.getElementById("username")?.value;
  const p = document.getElementById("password")?.value;

  if (u === "admin" && p === "1234") {
    goTo("home.html");
  } else {
    alert("Invalid login");
  }
}

// ===== LOGOUT =====
function logout() {
  goTo("index.html");
}

// ===== SMOOTH PAGE NAVIGATION =====
function goTo(page) {
  document.body.style.opacity = "0";
  document.body.style.transition = "0.4s";

  setTimeout(() => {
    window.location = page;
  }, 400);
}

// ===== ADD ITEM =====
function addItem() {
  const name = document.getElementById("itemName")?.value;
  const qty = document.getElementById("quantity")?.value;

  if (!name || !qty) {
    alert("Enter all fields");
    return;
  }

  stock.push({ name, qty });
  localStorage.setItem("stock", JSON.stringify(stock));

  displayItems();

  // Clear fields
  document.getElementById("itemName").value = "";
  document.getElementById("quantity").value = "";
}

// ===== DISPLAY STOCK =====
function displayItems() {
  const table = document.getElementById("stockTable");
  if (!table) return;

  table.innerHTML = "";

  stock.forEach((item, i) => {
    table.innerHTML += `
      <tr style="animation: fadeIn 0.5s">
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>
          <button onclick="deleteItem(${i})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// ===== DELETE ITEM =====
function deleteItem(i) {
  stock.splice(i, 1);
  localStorage.setItem("stock", JSON.stringify(stock));
  displayItems();
}

// ===== DISPLAY REPORT =====
function displayReport() {
  const table = document.getElementById("reportTable");
  if (!table) return;

  table.innerHTML = "";

  stock.forEach(item => {
    table.innerHTML += `
      <tr style="animation: fadeIn 0.5s">
        <td>${item.name}</td>
        <td>${item.qty}</td>
      </tr>
    `;
  });
}