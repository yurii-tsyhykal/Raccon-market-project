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