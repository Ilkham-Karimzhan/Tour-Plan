const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--pref',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});