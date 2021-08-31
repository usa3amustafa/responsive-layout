const menuIcon = document.getElementById('menu-icon')
const navMenu = document.querySelector('nav')

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show-nav')
})
