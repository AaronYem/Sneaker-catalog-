//  My entire sneaker collection
// At first, I honestly didn’t know how to use arrays of objects like this.
// I watched a couple YouTube videos ( Thank you Bro code 🙏 ) to understand how to structure data in JavaScript.
// Once I realized each sneaker could be its own object with properties, it clicked. 


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
    name: "Wales Bonner x Adidas Samba 'Cream Green'",
    brand: "Adidas x Wales Bonner",
    price: 180,
    color: "Cream/Green",
    releaseYear: 2023,
    type: "Fashion",
    image: "images/creamgreen.jpg"
  },
  {
    name: "Wales Bonner x Adidas Samba 'Wonder Clay Royal'",
    brand: "Adidas x Wales Bonner",
    price: 180,
    color: "Clay/Grey/Royal Blue",
    releaseYear: 2023,
    type: "Fashion",
    image: "images/clayroyal.jpg"
  },
  {
    name: "Adidas Samba OG Low-Top Sneakers",
    brand: "Adidas",
    price: 100,
    color: "Grey/White",
    releaseYear: 2022,
    type: "Lifestyle",
    image: "images/sambaog.jpg"
  },
  {
    name: "UGG Talisman Slippers",
    brand: "UGG",
    price: 130,
    color: "Chestnut",
    releaseYear: 2024,
    type: "Casual",
    image: "images/uggslippers.jpg"
  },
  {
    name: "Yeezy Slides 'Onyx'",
    brand: "Yeezy",
    price: 70,
    color: "Black",
    releaseYear: 2022,
    type: "Slide",
    image: "images/yeezyonyx.jpg"
  },
  {
    name: "Nike Vomero 5 'Metallic Silver'",
    brand: "Nike",
    price: 160,
    color: "Metallic Silver",
    releaseYear: 2023,
    type: "Running",
    image: "images/vomero.jpg"
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



//This is my function that shows the sneakers on my page 

// This part was confusing at first, especially working with the DOM.

// The name Javascript is so misleading NOTHING like Java

// I learned how to create and append elements by watching tutorials and experimenting in the browser console. Which is something i know you guys reccomended we do
function displaySneakers(sneakerArray) {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = ""; // the ""  Clears the last piece of content so we can render the list again


  sneakerArray.forEach((sneaker) => {
    const card = document.createElement("div");
    card.className = "card";

    // Dynamically building each sneaker card
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


  //  This is just grabbing all my filter/sort/search inputs
  const searchInput = document.getElementById("searchInput");
  const brandFilter = document.getElementById("brandFilter");
  const sortPrice = document.getElementById("sortPrice");



  // 🔁 Function to apply all filters
  // This took me the longest, specificly getting all three (search, filter, and sort) to work together.
  //this tutorial really helped me understand `.filter()` and `.sort()`:
  //https://www.youtube.com/watch?v=5ba0gQ5wCzY

  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;

    let filtered = sneakers.filter((sneaker) => {
      const matchesSearch =
        sneaker.name.toLowerCase().includes(query) ||
        sneaker.brand.toLowerCase().includes(query);

      const matchesBrand =
        selectedBrand === "all" || sneaker.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });

    // Sorting results based on selected price direction
    if (sortPrice.value === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    displaySneakers(filtered); // and then re-displaying the filtered and sorted list
  }

  // Add event listeners so filters update live
  searchInput.addEventListener("input", applyFilters);
  brandFilter.addEventListener("change", applyFilters);
  sortPrice.addEventListener("change", applyFilters);
}



// Show all sneakers when page loads
document.addEventListener("DOMContentLoaded", () => {
  displaySneakers(sneakers);
});

displaySneakers(sneakers);

