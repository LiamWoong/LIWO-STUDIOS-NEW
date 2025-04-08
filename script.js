function watchShow() {
    alert;
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  let autoIndex = 0;
  const autoSlides = document.querySelectorAll('.autoslide');

  function showAutoSlide(index) {
    autoSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextAutoSlide() {
    autoIndex = (autoIndex + 1) % autoSlides.length;
    showAutoSlide(autoIndex);
  }

  setInterval(nextAutoSlide, 4000);

  showSlide(currentSlide);
  showAutoSlide(autoIndex);
