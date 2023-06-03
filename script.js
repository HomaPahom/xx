const burgerButton = document.querySelector('.bhurger');
const dropdownMenu = document.querySelector('.dropdown-menu');

burgerButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});