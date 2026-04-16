// ===== script.js =====

// Load stock from localStorage
let stock = JSON.parse(localStorage.getItem("stock")) || [];

// LOGIN
function login() {
  const u = document.getElementById("username")?.value;
  const p = document.getElementById("password")?.value;

  if (u === "admin" && p === "1234") {
    window.location = "home.html";
  } else {
    alert("Invalid login");
  }
}

// LOGOUT
function logout() {
  window.location = "index.html";
}

// NAVIGATION
function goTo(page) {
  window.location = page;
}

// ADD ITEM
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

  document.getElementById("itemName").value = "";
  document.getElementById("quantity").value = "";
}

// DISPLAY STOCK (FIXED)
function displayItems() {
  const table = document.getElementById("stockTable");

  if (!table) return;   // ✅ prevents error on other pages

  table.innerHTML = "";

  stock.forEach((item, i) => {
    table.innerHTML += `<tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td><button onclick="deleteItem(${i})">Delete</button></td>
    </tr>`;
  });
}

// DELETE ITEM
function deleteItem(i) {
  stock.splice(i, 1);
  localStorage.setItem("stock", JSON.stringify(stock));
  displayItems();
}

// REPORT (FIXED)
function displayReport() {
  const table = document.getElementById("reportTable");

  if (!table) return;   // ✅ prevents error

  table.innerHTML = "";

  stock.forEach(item => {
    table.innerHTML += `<tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
    </tr>`;
  });
}

// AUTO LOAD (SAFE)
window.onload = function () {
  displayItems();
  displayReport();
};