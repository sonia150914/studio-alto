document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------------------------MENU MOBILE------------------------------------------------------------------------------------ */

  var burgerMenu = document.getElementById('burgerMenu')
  var menuMobile = document.querySelector('.menu-mobile')
  var crossBtn = document.getElementById('crossBtn')

  burgerMenu.addEventListener('click', handleOpenMenu)
  crossBtn.addEventListener('click', handleCloseMenu)

  function handleOpenMenu (e) {
    e.preventDefault()
    menuMobile.classList.add('open')
  }

  function handleCloseMenu (e) {
    e.preventDefault()
    menuMobile.classList.remove('open')
  }


})
