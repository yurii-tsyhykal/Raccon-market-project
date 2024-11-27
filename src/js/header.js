import image1 from '../img/image1.png';
import image2 from '../img/image2.png';

const mobileMenu = document.querySelector('.header-menu');
const openMenuBtn = document.querySelector('.open-menu');
const menuLinks = document.querySelectorAll('.header-list-link');
const backdrop = document.getElementById('backdrop');

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.remove('active');
  openMenuBtn.classList.remove('hidden');
  menuLinks.forEach(item => item.classList.remove('active'));
  document.body.classList.remove('no-scroll');
}

openMenuBtn.addEventListener('click', function () {
  const isOpen = mobileMenu.classList.contains('is-open');
  mobileMenu.classList.toggle('is-open', !isOpen);
  document.body.classList.add('no-scroll');
  backdrop.classList.toggle('active', !isOpen);
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
    link.classList.add('active');
  });
});

backdrop.addEventListener('click', closeMenu);

window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (e.matches) {
    closeMenu();
  }
});

document.querySelectorAll('.header-list-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(
      this.getAttribute('href').split('#')[1]
    );
    if (!target) return;

    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth',
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const fallingImagesContainer = document.getElementById('falling-images');
const imageFiles = [image1, image2];

const imageSourcesDesctop = imageFiles;
const imageSourcesMob = [image1];

let imageSources =
  window.innerWidth <= 1200 ? imageSourcesMob : imageSourcesDesctop;

  const imageCount = window.innerWidth <= 1200 ? 5 : 30;

  function createFallingImage() {
    const img = document.createElement('img');
    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.classList.add('falling-image');

    const screenWidth = window.innerWidth;
    const size = screenWidth < 1200 ? 55 : Math.random() * 50 + 30;
    img.style.width = `${size}px`;

    img.style.left = Math.random() * 100 + 'vw';
    img.style.top = Math.random() * -100 - 50 + 'px';

    img.style.animationDuration = Math.random() * 3 + 2 + 's';
    img.style.animationDelay = Math.random() * 5 + 's';

    fallingImagesContainer.appendChild(img);
  }

  for (let i = 0; i < imageCount; i++) {
    createFallingImage();
  }

  document.addEventListener('click', () => {
    fallingImagesContainer.innerHTML = '';
  });
});
