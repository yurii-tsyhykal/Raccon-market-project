import Swiper from 'swiper/bundle';
import 'swiper/css';

const reviewSwiper = new Swiper('.gallery-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
