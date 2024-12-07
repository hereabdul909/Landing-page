const carousel = document.getElementById('carousel');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalItems - 1;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

// Function to swap content between two cards
function swapContent(card1, card2) {
  const tempContent = card1.innerHTML;
  card1.innerHTML = card2.innerHTML;
  card2.innerHTML = tempContent;
}

// Function to handle swapping based on menu item clicks
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

