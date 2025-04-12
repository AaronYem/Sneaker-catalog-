// Sneaker catalog data
const sneakers = [
  {
    name: "Nike Dunk Low 'Michigan State'",
    brand: "Nike",
    price: 110,
    color: "White/Green",
    releaseYear: 2021,
    type: "Lifestyle",
    image: "images/michiganstate.jpg"
  },
  {
    name: "Air Jordan 1 Retro High OG 'Mocha'",
    brand: "Jordan",
    price: 180,
    color: "Sail/Dark Mocha/Black",
    releaseYear: 2020,
    type: "Basketball",
    image: "images/mocha.jpg"
  },
  {
    name: "Air Jordan 4 'Taupe Haze'",
    brand: "Jordan",
    price: 200,
    color: "Taupe/Infrared/Black",
    releaseYear: 2021,
    type: "Basketball",
    image: "images/taupehaze.jpg"
  },
  {
    name: "A Bathing Ape Bapesta 'Black Patent'",
    brand: "BAPE",
    price: 300,
    color: "Black/Patent Leather",
    releaseYear: 2022,
    type: "Streetwear",
    image: "images/bapesta.jpg"
  },
  {
    name: "Union x Air Jordan 4 'Off Noir'",
    brand: "Jordan x Union",
    price: 250,
    color: "Off Noir/Brigade Blue/Red",
    releaseYear: 2020,
    type: "Collab",
    image: "images/union4.jpg"
  },
  {
    name: "Wales Bonner x Adidas Samba 'Desert White'",
    brand: "Adidas x Wales Bonner",
    price: 180,
    color: "Cream/White",
    releaseYear: 2023,
    type: "Fashion",
    image: "images/walesbonner.jpg"
  }
];

// Function to display sneakers on the page
function displaySneakers(sneakerArray) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = ""; // Clear any previous content

  sneakerArray.forEach((sneaker) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${sneaker.image}" alt="${sneaker.name}" />
      <h3>${sneaker.name}</h3>
      <p><strong>Brand:</strong> ${sneaker.brand}</p>
      <p><strong>Type:</strong> ${sneaker.type}</p>
      <p><strong>Color:</strong> ${sneaker.color}</p>
      <p><strong>Year:</strong> ${sneaker.releaseYear}</p>
      <p><strong>Price:</strong> $${sneaker.price}</p>
    `;

    catalog.appendChild(card);
  });



  const searchInput = document.getElementById("searchInput");
  const brandFilter = document.getElementById("brandFilter");
  const sortPrice = document.getElementById("sortPrice");

  
  function applyFilters() {
    // Sort by price
if (sortPrice.value === "lowToHigh") {
  filtered.sort((a, b) => a.price - b.price);
} else if (sortPrice.value === "highToLow") {
  filtered.sort((a, b) => b.price - a.price);
}

    const query = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
  
    const filtered = sneakers.filter((sneaker) => {
      const matchesSearch =
        sneaker.name.toLowerCase().includes(query) ||
        sneaker.brand.toLowerCase().includes(query);
  
      const matchesBrand =
        selectedBrand === "all" || sneaker.brand === selectedBrand;
  
      return matchesSearch && matchesBrand;
    });
  
    displaySneakers(filtered);
  }
  
  searchInput.addEventListener("input", applyFilters);
brandFilter.addEventListener("change", applyFilters);
sortPrice.addEventListener("change", applyFilters);




}

