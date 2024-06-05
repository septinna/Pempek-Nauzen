// Data menu minuman
var menuItems = [
    { name: "Es Teh", description: "Segelas es teh manis.", price: "Rp 5.000,-", imgSrc: "img/es-teh.png" },
    { name: "Es Jeruk", description: "Segelas es jeruk manis.", price: "Rp 7.000,-", imgSrc: "img/jeruk.png" },
    { name: "Es Campur", description: "Segelas es campur segar.", price: "Rp 8.000,-", imgSrc: "img/escampur.png" },
    { name: "Lemon Tea", description: "Segelas lemon tea segar.", price: "Rp 6.000,-", imgSrc: "img/lemon.png" },
    { name: "Es Susu", description: "Segelas es susu.", price: "Rp 8.000,-", imgSrc: "img/susu.png" },
    { name: "Soda Gembira", description: "Segelas soda gembira.", price: "Rp 9.000,-", imgSrc: "img/sodagembira.png" }
];

// Fungsi untuk menampilkan menu minuman
function displayMenuItems(items) {
    var menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    items.forEach(function(item) {
        var cardHtml = `
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card custom-card">
            <img src="${item.imgSrc}" class="card-img-top img-fluid" alt="${item.name}">
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

// Panggil fungsi untuk menampilkan menu minuman
displayMenuItems(menuItems);