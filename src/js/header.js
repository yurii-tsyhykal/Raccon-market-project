const mobileMenu = document.querySelector('.header-menu');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-btn');
const linkMenu = document.querySelector('.header-list-link');
openMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('is-open');
  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'inline-block';
});

closeMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('is-open');
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'inline-block';
});

const menuLinks = document.querySelectorAll('.header-list-link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'inline-block';
    menuLinks.forEach(item => (item.style.color = ''));
    link.style.color = 'orange';
  });
});

window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'inline-block';
  backdrop.classList.remove('active');
});
