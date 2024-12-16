document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");
  const items = document.querySelectorAll("[data-carousel-item]");
  let currentIndex = 0;

  function updateCarousel(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.remove("hidden");
        item.setAttribute("data-carousel-item", "active");
      } else {
        item.classList.add("hidden");
        item.setAttribute("data-carousel-item", "");
      }
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
  });

  // Inicializa el carrusel
  updateCarousel(currentIndex);
});
