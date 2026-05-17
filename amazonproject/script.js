const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "electronics",
    price: "₹1,999",
    description: "Comfort fit with deep bass and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    deal: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "electronics",
    price: "₹2,499",
    description: "Track steps, heart rate, sleep, and notifications.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    deal: false
  },
  {
    id: 3,
    name: "Casual Cotton Shirt",
    category: "fashion",
    price: "₹799",
    description: "Soft everyday shirt available in multiple colors.",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    deal: true
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "fashion",
    price: "₹1,499",
    description: "Lightweight shoes for walking, gym, and daily use.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    deal: false
  },
  {
    id: 5,
    name: "Non-Stick Cookware Set",
    category: "home",
    price: "₹2,199",
    description: "Three-piece kitchen set with easy-clean coating.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    deal: true
  },
  {
    id: 6,
    name: "Desk Study Lamp",
    category: "home",
    price: "₹599",
    description: "Adjustable LED lamp with three brightness modes.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    deal: false
  },
  {
    id: 7,
    name: "JavaScript Beginner Guide",
    category: "books",
    price: "₹399",
    description: "Learn web development basics with practical examples.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    deal: true
  },
  {
    id: 8,
    name: "School Notebook Pack",
    category: "books",
    price: "₹249",
    description: "Set of six ruled notebooks for daily classwork.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    deal: false
  }
];

const categories = [
  {
    key: "electronics",
    title: "Electronics",
    subtitle: "Headphones, watches, gadgets",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80"
  },
  {
    key: "fashion",
    title: "Fashion",
    subtitle: "Clothing, shoes, accessories",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80"
  },
  {
    key: "home",
    title: "Home & Kitchen",
    subtitle: "Cookware, lighting, essentials",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80"
  },
  {
    key: "books",
    title: "Books",
    subtitle: "Learning and school supplies",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80"
  }
];

let cartCount = 0;
let activeFilter = "all";

const productGrid = document.querySelector("#productGrid");
const categoryGrid = document.querySelector("#categoryGrid");
const resultText = document.querySelector("#resultText");
const cartCountElement = document.querySelector("#cartCount");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const toast = document.querySelector("#toast");
const filterButtons = document.querySelectorAll("[data-filter]");

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map(category => `
      <button class="category-card" type="button" data-filter="${category.key}" style="background-image: url('${category.image}')">
        <strong>${category.title}</strong>
        <span>${category.subtitle}</span>
      </button>
    `)
    .join("");
}

function productMatches(product, searchTerm, selectedCategory) {
  const matchesSearch = product.name.toLowerCase().includes(searchTerm)
    || product.description.toLowerCase().includes(searchTerm);
  const matchesCategory = selectedCategory === "all"
    || product.category === selectedCategory
    || (selectedCategory === "deals" && product.deal);

  return matchesSearch && matchesCategory;
}

function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = activeFilter === "all" ? categorySelect.value : activeFilter;
  const filteredProducts = products.filter(product => productMatches(product, searchTerm, selectedCategory));

  resultText.textContent = filteredProducts.length
    ? `Showing ${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"}`
    : "No products found. Try another search.";

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-details">
        <div class="price-row">
          <span class="price">${product.price}</span>
          ${product.deal ? '<span class="deal-badge">Deal</span>' : ""}
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button class="add-button" type="button" data-product-id="${product.id}">Add to Cart</button>
      </div>
    </article>
  `).join("");
}

function setActiveFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  if (filter !== "all" && filter !== "deals") {
    categorySelect.value = filter;
  }

  renderProducts();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  activeFilter = "all";
  filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === "all"));
  renderProducts();
});

categorySelect.addEventListener("change", () => {
  activeFilter = "all";
  filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === "all"));
  renderProducts();
});

document.addEventListener("click", event => {
  const filterButton = event.target.closest("[data-filter]");
  const addButton = event.target.closest("[data-product-id]");

  if (filterButton) {
    setActiveFilter(filterButton.dataset.filter);
  }

  if (addButton) {
    const product = products.find(item => item.id === Number(addButton.dataset.productId));
    cartCount += 1;
    cartCountElement.textContent = cartCount;
    showToast(`${product.name} added to cart`);
  }
});

document.querySelector("#shopDealsButton").addEventListener("click", () => {
  setActiveFilter("deals");
  document.querySelector(".section-heading").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#cartButton").addEventListener("click", () => {
  showToast(cartCount ? `You have ${cartCount} item${cartCount === 1 ? "" : "s"} in your cart.` : "Your cart is empty.");
});

renderCategories();
setActiveFilter("all");