const form = document.getElementById("formLogin");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

const emaill = document.getElementById("email");
const passwords = document.getElementById("password");
const err = document.getElementById("errormsg");
const email = emaill ? emaill.value.trim() : "";
const password = passwords ? passwords.value.trim() : "";

    if (email === "") {
      if (err) err.textContent = ""; 
      alert("Email harus diisi!");
      return;
    }

    if (password === "") {
      if (err) err.textContent = ""; 
      alert("Password harus diisi!");
      return; 
    }

    if (err) err.textContent = "";
    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  });
}

document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const link = icon.dataset.link;
    if (link) window.location.href = link;
  });
});

const totalProductsEl = document.getElementById("totalProducts");
const totalSalesEl = document.getElementById("totalSales");
const totalRevenueEl = document.getElementById("totalRevenue");

const summary = {
  totalProducts: 500,
  totalSales: 250,
  totalRevenue: 12500000,
};

if (totalProductsEl) totalProductsEl.textContent = summary.totalProducts;
if (totalSalesEl) totalSalesEl.textContent = summary.totalSales;
if (totalRevenueEl) totalRevenueEl.textContent = "Rp " + summary.totalRevenue.toLocaleString("id-ID");


const products = [
    { id: 1, name: "TWS Headset Edisi Aurora", price: 750000, stock: 50 },
    { id: 2, name: "Power Bank Ultra Slim 10000mAh", price: 350000, stock: 15 },
    { id: 3, name: "Mouse Gaming RGB (Purple Haze)", price: 480000, stock: 30 },
    { id: 4, name: "Smartwatch Strap Kulit Premium", price: 890000, stock: 45 },
    { id: 5, name: "Kabel Data Fast Charging Type-C", price: 120000, stock: 50 },
    { id: 6, name: "Mini Speaker Bluetooth Vintage", price: 620000, stock: 25 },
    { id: 7, name: "Keyboard Mekanik Silent (Pink Gloss)", price: 1150000, stock: 15 }
];

const table = document.getElementById("tableBody");
if (table) renderProducts();

function renderProducts() {
  table.innerHTML = "";

  products.forEach((p, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.name}</td>
      <td>Rp ${p.price.toLocaleString("id-ID")}</td>
      <td>${p.stock}</td>
      <td>
        <img src="img/edit.png" class="icon-edit" title="Edit" style="cursor:pointer; width:20px; margin-right:10px;" />
        <img src="img/delete.png" class="icon-delete" title="Hapus" style="cursor:pointer; width:20px;" />
      </td>
    `;

    // tombol edit (icon)
    tr.querySelector(".icon-edit").addEventListener("click", () => {
      const newName = prompt("Edit nama produk:", p.name);
      if (newName === null) return;

      const newPrice = prompt("Edit harga produk:", p.price);
      if (newPrice === null) return;

      const newStock = prompt("Edit stock produk:", p.stock);
      if (newStock === null) return;

      p.name = newName.trim() || p.name;
      const priceNum = Number(newPrice);
      if (!isNaN(priceNum) && priceNum >= 0) p.price = priceNum;
      const stockNum = Number(newStock);
      if (!isNaN(stockNum) && stockNum >= 0) p.stock = stockNum;

      renderProducts();
    });

    // tombol hapus (icon)
tr.querySelector(".icon-delete").addEventListener("click", () => {
    if (confirm(`Yakin hapus produk "${p.name}"?`)) {
        const idx = products.findIndex(x => x.id === p.id);
        if (idx > -1) products.splice(idx, 1);
        tr.remove(); 
        
    }
});

    table.appendChild(tr);
  });
}

function goProduct() {
  window.location.href = "product.html";
}

window.goProduct = goProduct;
