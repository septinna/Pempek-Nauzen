// Data menu makanan
var menuMakanan = [
    { name: "Pempek Kapal Selam", description: "Pempek berbentuk kapal selam yang didalamnya terdapat telur.", price: "Rp 28.000,-", imgSrc: "img/kapal-selam.png" },
    { name: "Pempek Lenjer", description: "Pempek dengan bentuk panjang", price: "Rp 25.000,-", imgSrc: "img/lenjer.png" },
    { name: "Pempek Lenggang", description: "Pempek lenjer yang di kolaborasi dengan telur.", price: "Rp 26.000,-", imgSrc: "img/lenggang.png" },
    { name: "Pempek Bakar", description: "Pempek yang dimasak dengan cara dibakar.", price: "Rp 20.000,-", imgSrc: "img/bakar.png" },
    { name: "Tekwan", description: "Makanan berkuah yang terdapat mie dan bengkoang.", price: "Rp 20.000,-", imgSrc: "img/tekwan.png" },
    { name: "Pempek Mix", description: "Percampuran dari semua jenis pempek.", price: "Rp 30.000,-", imgSrc: "img/gambar.png" },
    { name: "Paket Gembira", description: "Percampuran dari semua jenis pempek.", price: "Rp 40.000,-", imgSrc: "img/paket1.png" },
    { name: "Pempek Mix 2", description: "Percampuran dari semua jenis pempek.", price: "Rp 30.000,-", imgSrc: "img/paket2.png" }
];

// Function untuk menampilkan menu makanan
function displayMenuMakanan(items) {
    var menuContainer = document.getElementById('menuMakanan');
    menuContainer.innerHTML = ''; // Bersihkan konten sebelum menampilkan ulang

    items.forEach(function(item) {
        var cardHtml = `
        <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="card custom-card">
                <img src="${item.imgSrc}" class="card-img-top-food img-fluid" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">Harga: ${item.price}</p>
                </div>
            </div>
        </div>
        `;
        menuContainer.innerHTML += cardHtml;
    });
}

// Function untuk melakukan pencarian
function searchMenuMakanan(keyword) {
    var filteredItems = menuMakanan.filter(function(item) {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
    });

    displayMenuMakanan(filteredItems);
}

// Event listener untuk input pencarian
document.getElementById('searchInput').addEventListener('input', function(event) {
    var keyword = event.target.value;
    searchMenuMakanan(keyword);
});

// Menampilkan semua menu makanan saat pertama kali memuat halaman
displayMenuMakanan(menuMakanan);
