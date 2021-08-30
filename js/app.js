const menuIcon = document.getElementById('menu-icon')
const navMenu = document.querySelector('nav')
const closeIcon = document.getElementById('close-icon')

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show-nav')
})
