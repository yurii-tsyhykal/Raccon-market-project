const mobileMenu = document.querySelector('.header-menu');
const openMenuBtn = document.querySelector('.open-menu');
const menuLinks = document.querySelectorAll('.header-list-item');
const backdrop = document.getElementById('backdrop');

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.remove('active');
  openMenuBtn.classList.remove('hidden');
  menuLinks.forEach(item => item.classList.remove('active'));
}

openMenuBtn.addEventListener('click', function () {
  const isOpen = mobileMenu.classList.contains('is-open');
  mobileMenu.classList.toggle('is-open', !isOpen);
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
