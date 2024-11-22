import Swiper from 'swiper/bundle';
import 'swiper/css';
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

const reviewSwiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 25,
  slidesPerView: 1,
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
