// hamburger
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("navLinks");
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Carousel Slide
const carousel = document.getElementById("carousel");
const nextArrow = document.getElementById("next-arrow");

nextArrow.addEventListener("click", () => {
  const itemWidth = carousel.firstElementChild.offsetWidth;
  carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
});

//filter items in home page
document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".scroller-link a");
  const items = document.querySelectorAll(".boxes .box");
  const filterMapping = {
    "NEW ARRIVALS": (item) =>
      item.querySelector("h2").textContent.includes("Pizzeria"),
    "BEST SELLERS": (_, index) => index < 2,
    DEALS: (_, index) => index >= 2,
  };
  function updateFilter(category) {
    filters.forEach((filter) => filter.classList.remove("active"));
    items.forEach((item) => (item.style.display = "block"));
    if (category && filterMapping[category]) {
      filters.forEach((filter) => {
        if (filter.textContent.trim() === category) {
          filter.classList.add("active");
        }
      });
      items.forEach((item, index) => {
        if (!filterMapping[category](item, index)) {
          item.style.display = "none";
        }
      });
    }
  }
  filters.forEach((filter) => {
    filter.addEventListener("click", (e) => {
      e.preventDefault();
      const category = filter.textContent.trim();
      updateFilter(category);
    });
  });
  updateFilter();
});



function swapContent(card1, card2) {
  const tempContent = card1.innerHTML;
  card1.innerHTML = card2.innerHTML;
  card2.innerHTML = tempContent;
}
function handleMenuClick(index) {
  const cards = document.querySelectorAll(".card");
  if (index === 0) {
    swapContent(cards[0], cards[1]);
  } else if (index === 1) {
    swapContent(cards[1], cards[2]);
  } else if (index === 2) {
    swapContent(cards[2], cards[3]);
  } else if (index === 3) {
    swapContent(cards[3], cards[0]);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const navLinks = document.getElementById("navLinks");

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      console.log("clicked");
      navLinks.classList.toggle("active");
    });
  }
});