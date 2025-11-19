let currentSlide = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const totalCards = document.querySelectorAll(".carousel .card").length;
  const cardWidth = document.querySelector(".card").offsetWidth + 20; // Card width + margin
  const visibleCards = Math.floor(document.querySelector(".carousel-container").offsetWidth / cardWidth);

  currentSlide += direction;

  // Controle de limite
  if (currentSlide < 0) {
    currentSlide = totalCards - visibleCards;
  } else if (currentSlide > totalCards - visibleCards) {
    currentSlide = 0;
  }

  carousel.style.transform = `translateX(${-currentSlide * cardWidth}px)`;
}