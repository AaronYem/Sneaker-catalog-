//  My entire sneaker collection
// At first, I honestly didn’t know how to use arrays of objects like this.
// I watched a couple YouTube videos ( Thank you Bro code 🙏 ) to understand how to structure data in JavaScript.
// Once I realized each sneaker could be its own object with properties, it clicked. 

const sneakers = [
  {
    name: "Nike Dunk Low 'Michigan State'", // Name of my sneaker
    brand: "Nike",                         // Shoe brand
    price: 110,                            // Retail price (not always what i actually paid ;)
    color: "White/Green",                  // Colorway
    releaseYear: 2021,                     // Year of release
    type: "Lifestyle",                     // Type of sneaker
    image: "images/IMG_2333.jpeg"          // Path to sneaker image
  },


// to connect the image to the item i created a folder named images uploaded all the pictures into that specific folder and then copied its jpeg name into its matching sneaker profile 



// Every single shoe below follows has the same variables! 


  
  {
    name: "Wales Bonner x Adidas Samba 'Cream Green'",
    brand: "Adidas x Wales Bonner",
    price: 180,
    color: "Cream/Green",
    releaseYear: 2023,
    type: "Fashion",
    image: "images/IMG_2352.jpeg"
  },
  {
    name: "Wales Bonner x Adidas Samba 'Wonder Clay Royal'",
    brand: "Adidas x Wales Bonner",
    price: 180,
    color: "Clay/Grey/Royal Blue",
    releaseYear: 2023,
    type: "Fashion",
    image: "images/IMG_2421.jpeg"
  },
  {
    name: "Adidas Samba OG Low-Top Sneakers",
    brand: "Adidas",
    price: 100,
    color: "Grey/White",
    releaseYear: 2022,
    type: "Lifestyle",
    image: "images/IMG_2428.jpeg"
  },
  {
    name: "UGG Talisman Slippers",
    brand: "UGG",
    price: 130,
    color: "Chestnut",
    releaseYear: 2024,
    type: "Casual",
    image: "images/IMG_2458.jpeg"
  },

  {
    name: "Nike Air Max 1 'Denim Red Swoosh'",
    brand: "Nike",
    price: 160,
    color: "Light Blue Denim/Red/White",
    releaseYear: 2024,
    type: "Lifestyle",
    image: "images/IMG_2403.jpeg"
  },

  {
    name: "Yeezy Slides 'Onyx'",
    brand: "Yeezy",
    price: 70,
    color: "Black",
    releaseYear: 2022,
    type: "Slide",
    image: "images/IMG_2379.jpeg"
  },
  {
    name: "Nike Vomero 5 'Metallic Silver'",
    brand: "Nike",
    price: 160,
    color: "Metallic Silver",
    releaseYear: 2023,
    type: "Running",
    image: "images/IMG_2411.jpeg"
  },
  





  {
    name: "Air Jordan 1 Retro High OG 'Mocha'",
    brand: "Jordan",
    price: 180,
    color: "Sail/Dark Mocha/Black",
    releaseYear: 2020,
    type: "Basketball",
    image: "images/IMG_2360.jpeg"
  },
  {
    name: "Air Jordan 4 'Taupe Haze'",
    brand: "Jordan",
    price: 200,
    color: "Taupe/Infrared/Black",
    releaseYear: 2021,
    type: "Basketball",
    image: "images/IMG_2370.jpeg"
  },
  {
    name: "A Bathing Ape Bapesta 'Black Patent'",
    brand: "BAPE",
    price: 300,
    color: "Black/Patent Leather",
    releaseYear: 2022,
    type: "Streetwear",
    image: "images/IMG_2450.jpeg"
  },
  {
    name: "Union x Air Jordan 4 'Off Noir'",
    brand: "Jordan x Union",
    price: 250,
    color: "Off Noir/Brigade Blue/Red",
    releaseYear: 2020,
    type: "Collab",
    image: "images/IMG_2440.jpeg"
  },
  {
    name: "Wales Bonner x Adidas Samba 'Desert White'",
    brand: "Adidas x Wales Bonner",
    price: 180,
    color: "Cream/White",
    releaseYear: 2023,
    type: "Fashion",
    image: "images/IMG_2341.jpeg"
  }
];




// This part was confusing at first, especially working with the DOM.

// I had to learn how to create and append elements by watching tutorials and experimenting in the browser console. 

// thanks for the tip to use the browser console!!!!!





// This function below shows sneaker cards on the page.
// It takes in an array of sneaker objects and then loops through each one,
// building a little "card" with the sneaker's image, name, brand, color, etc.
// Before it starts, it clears out whatever was on the page before
// just so you don’t end up stacking duplicate entries.
// and im using this function whenever i need to show filtered, searched, or all sneakers



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



  //  Function to apply all filters
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

    // Here results are sorted based on the selected price direction
    
// If it's "low to high", it sorts sneakers from cheapest to most expensive
    if (sortPrice.value === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortPrice.value === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);

// If it's "high to low", it does the opposite

    }

    displaySneakers(filtered); // and then re-displaying the filtered and sorted list
  }

  // Where we are adding event listeners so filters update in real time
searchInput.addEventListener("input", applyFilters);     // Runs when the user types in the search box
brandFilter.addEventListener("change", applyFilters);    // Runs when a brand is selected
sortPrice.addEventListener("change", applyFilters);      // Runs when one of the sort optiona are changed
}



// Show all sneakers when page loads
document.addEventListener("DOMContentLoaded", () => {
  displaySneakers(sneakers);
});

displaySneakers(sneakers);

