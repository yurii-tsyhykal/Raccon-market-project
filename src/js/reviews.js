import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
document.addEventListener('DOMContentLoaded', initSwiper);
window.addEventListener('resize', initSwiper);

let reviewSwiper;
const swiper = () => {
  reviewSwiper = new Swiper('.review-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 60,

    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.review-custom-next',
      prevEl: '.review-custom-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
};

function initSwiper() {
  const width = window.innerWidth;
  if (width < 1200 && !reviewSwiper) {
    swiper();
  } else if (width >= 1200 && reviewSwiper) {
    reviewSwiper.destroy(true, true);
    reviewSwiper = null;
    const pagination = document.querySelector('.swiper-pagination');
    const prevButton = document.querySelector('.review-custom-prev');
    const nextButton = document.querySelector('.review-custom-next');
    if (pagination) pagination.style.display = 'none';
    if (prevButton) prevButton.style.display = 'none';
    if (nextButton) nextButton.style.display = 'none';
  }
}
