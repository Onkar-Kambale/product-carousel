const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  items.forEach((item, idx) => {
    item.classList.toggle('active', idx === currentIndex);
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
  // Change background gradient based on product
  document.body.style.background = [
    "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",
    "linear-gradient(120deg, #fbeff2 0%, #f5e6e8 100%)",
    "linear-gradient(120deg, #232526 0%, #1a1a1a 100%)"
  ][currentIndex];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateCarousel();
  });
});

// Optional: Auto-slide every 6 seconds
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 6000);

carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 6000);
});

updateCarousel();
