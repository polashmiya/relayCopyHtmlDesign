const bestSellers = [
  {
    badge: "SALE",
    badgeColor: "#c44a13",
    badgeTextColor: "#fff",
    img: "https://broadcast-theme-relay.myshopify.com/cdn/shop/files/contrast-jogger-1.jpg?v=1749505383&width=3000",
    alt: "Contrast Jogger",
    title: "Contrast Jogger",
    price: "$45.00",
    oldPrice: "$65.00",
    color: "1 color",
  },
  {
    badge: "STAFF PICK",
    badgeColor: "#fff",
    badgeTextColor: "#000",
    img: "https://broadcast-theme-relay.myshopify.com/cdn/shop/files/coat-dress-1.jpg?v=1749505483&width=3000",
    alt: "Coat Dress",
    title: "Coat Dress",
    price: "$98.00",
    oldPrice: "",
    color: "1 color",
  },
  {
    badge: "STAFF PICK",
    badgeColor: "#fff",
    badgeTextColor: "#000",
    img: "https://broadcast-theme-relay.myshopify.com/cdn/shop/files/easy-overalls-1.jpg?v=1749505489&width=3000",
    alt: "Easy Overalls",
    title: "Easy Overalls",
    price: "$80.00",
    oldPrice: "$115.00",
    color: "1 color",
  },
  {
    badge: "SALE",
    badgeColor: "#c44a13",
    badgeTextColor: "#fff",
    img: "https://broadcast-theme-relay.myshopify.com/cdn/shop/files/ruffle-beach-dress-1.jpg?v=1749505521&width=3000",
    alt: "Crisscross Dress",
    title: "Crisscross Dress",
    price: "$64.00",
    oldPrice: "$92.00",
    color: "1 color",
  },
  {
    badge: "SALE",
    badgeColor: "#c44a13",
    badgeTextColor: "#fff",
    img: "https://broadcast-theme-relay.myshopify.com/cdn/shop/files/contrast-jogger-1.jpg?v=1749505383&width=3000",
    alt: "Contrast Jogger",
    title: "Contrast Jogger",
    price: "$45.00",
    oldPrice: "$65.00",
    color: "1 color",
  },
];

function renderBestSellers(products) {
  const container = document.getElementById("best-sellers-carousel");
  container.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "bestseller-card";
    card.style = `min-width: 350px; max-width: 350px; flex: 0 0 350px; display: flex; flex-direction: column; align-items: center; position: relative;`;

    const badge = document.createElement("span");
    badge.textContent = product.badge;
    badge.style = `position: absolute; top: 8px; left: 4px; background: ${product.badgeColor}; color: ${product.badgeTextColor}; font-size: 0.85rem; font-weight: 600; border-radius: 16px; padding: 0.2rem 0.9rem; letter-spacing: 1px;`;
    card.appendChild(badge);

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.alt;
    img.style =
      "width: 100%; height: 100%; margin: 0 0 1.5rem 0; object-fit: contain; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03); background: #f7eddc;";
    card.appendChild(img);

    const info = document.createElement("div");
    info.style =
      "padding: 0 1.2rem 1.5rem 1.2rem; width: 100%; text-align: center;";

    const title = document.createElement("div");
    title.style = "font-size: 1rem; color: #222; margin-bottom: 0.2rem;";
    title.textContent = product.title;
    info.appendChild(title);

    const priceRow = document.createElement("div");
    priceRow.style = "margin-bottom: 0.2rem";
    const price = document.createElement("span");
    price.style = "color: #c44a13; font-size: 1rem";
    price.textContent = product.price;
    priceRow.appendChild(price);
    if (product.oldPrice) {
      const oldPrice = document.createElement("span");
      oldPrice.style =
        "color: #888; text-decoration: line-through; font-size: 1rem; margin-left: 0.5rem;";
      oldPrice.textContent = product.oldPrice;
      priceRow.appendChild(oldPrice);
    }
    info.appendChild(priceRow);

    const color = document.createElement("div");
    color.style = "color: #888; font-size: 0.95rem; font-style: italic";
    color.textContent = product.color;
    info.appendChild(color);

    card.appendChild(info);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderBestSellers(bestSellers);

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      mobileBtn.style.display = "block";
      navMenu.classList.remove("active");
      navMenu.style.display = "";
    } else {
      mobileBtn.style.display = "none";
      navMenu.classList.remove("active");
      navMenu.style.display = "flex";
    }
  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  mobileBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
const carouselTrack = document.getElementById("carouselTrack");
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
let itemsPerPage = 3; // Default for desktop

function updateItemsPerPage() {
  if (window.innerWidth <= 768) {
    itemsPerPage = 1;
  } else if (window.innerWidth <= 1024) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 3;
  }
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const itemWidth = carouselItems[0].offsetWidth;
  carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function moveCarousel(direction) {
  const totalItems = carouselItems.length;
  const maxIndex = totalItems - itemsPerPage;

  currentIndex += direction;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  updateCarouselPosition();
}

window.addEventListener("load", () => {
  updateItemsPerPage();
});

window.addEventListener("resize", updateItemsPerPage);

const menuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");
let menuOpen = false;
menuBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  menuOpen = !menuOpen;
  if (menuOpen) {
    navMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    navMenu.classList.remove("open");
    document.body.style.overflow = "";
  }
});
document.addEventListener("click", function (e) {
  if (menuOpen && !navMenu.contains(e.target) && e.target !== menuBtn) {
    navMenu.classList.remove("open");
    document.body.style.overflow = "";
    menuOpen = false;
  }
});
window.addEventListener("resize", function () {
  document.documentElement.style.overflowX = "hidden";
  document.body.style.overflowX = "hidden";
});
document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";
