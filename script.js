let stock = JSON.parse(localStorage.getItem("stock")) || [];

// Page animation
document.addEventListener("DOMContentLoaded", () => {
  displayItems();
  displayReport();
});

// Login
function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "admin" && p === "1234") {
    goTo("home.html");
  } else {
    alert("Invalid login");
  }
}

// Navigation animation
function goTo(page) {
  document.body.style.opacity = 0;

  setTimeout(() => {
    window.location = page;
  }, 300);
}

// Logout
function logout() {
  goTo("index.html");
}

// Add item
function addItem() {
  const name = document.getElementById("itemName").value;
  const qty = document.getElementById("quantity").value;

  if (!name || !qty) return alert("Enter all fields");

  stock.push({ name, qty });
  localStorage.setItem("stock", JSON.stringify(stock));
  displayItems();
}

// Display stock
function displayItems() {
  const table = document.getElementById("stockTable");
  if (!table) return;

  table.innerHTML = "";

  stock.forEach((item, i) => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td><button onclick="deleteItem(${i})">❌</button></td>
      </tr>`;
  });
}

// Delete
function deleteItem(i) {
  stock.splice(i, 1);
  localStorage.setItem("stock", JSON.stringify(stock));
  displayItems();
}

// Report
function displayReport() {
  const table = document.getElementById("reportTable");
  if (!table) return;

  table.innerHTML = "";

  stock.forEach(item => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.qty}</td>
      </tr>`;
  });
}