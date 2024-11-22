import Swiper from 'swiper/bundle';
import 'swiper/css';

const gallerySwiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination.gallery',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
