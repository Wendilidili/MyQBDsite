
//JS for the mini slide in menu on the Homepage. 
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const dropdowns = document.querySelectorAll('.dropdown-toggle');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

dropdowns.forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const targetId = toggle.getAttribute('data-target');
    const submenu = document.getElementById(targetId);

    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    toggle.classList.toggle('open');
  });
});
