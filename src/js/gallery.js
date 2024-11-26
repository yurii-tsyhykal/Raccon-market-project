import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const gallerySwiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  spaceBetween: 60,
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
  },
  navigation: {
    nextEl: '.gallery-custom-next',
    prevEl: '.gallery-custom-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    1200: {
      spaceBetween: 24,
      centeredSlides: true,
      slidesPerView: 3,
    },
  },
});
