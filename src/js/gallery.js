import Swiper from 'swiper/bundle';
import 'swiper/css';

const reviewSwiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
