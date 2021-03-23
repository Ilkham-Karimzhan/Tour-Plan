$(document).ready(function(){
  const hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--pref',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const reviewSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function(){
    console.log("Hello"); 
    document.querySelector(".navbar__bottom").classList.toggle('navbar__bottom--vivible');
  });
  var modalButton = $('[data-toggle=modal]');
  modalButton.on('click', function(){});
  function openModal(){
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
  }
});