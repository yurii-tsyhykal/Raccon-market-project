import Swiper from 'swiper/bundle';
import 'swiper/css';
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
prevBtn.addEventListener('click', () => {
  reviewSwiper.slidePrev();
});
nextBtn.addEventListener('click', () => {
  reviewSwiper.slideNext();
});

const reviewSwiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});
