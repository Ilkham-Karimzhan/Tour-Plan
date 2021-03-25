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
  
  var menuButton = $(".menu-button");

  menuButton.on("click", function(){
    $(".navbar__bottom").toggleClass('navbar__bottom--vivible');
  });
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  function openModal(){
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");      
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");   
  }
  function closeModal(event){
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  $('.newsletter').parallax({imageSrc: '../image/newsletter.jpg'});
  ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [7.890730745473269, 98.29478491535427],
                zoom: 15
            });
            var myGeoObject = new ymaps.GeoObject({
              geometry: {
                  type: "Point", // тип геометрии - точка
                  coordinates: [7.890730745473269, 98.29478491535427] // координаты точки
              }
            });
            var myPlacemark = new ymaps.Placemark([7.890730745473269, 98.29478491535427]);
            myMap.geoObjects.add(myPlacemark);
        }
});