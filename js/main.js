document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------------------------MENU MOBILE------------------------------------------------------------------------------------ */

  var burgerMenu = document.getElementById('burgerMenu')
  var menuMobile = document.querySelector('.menu-mobile')

  burgerMenu.addEventListener('click', handleClick)

  function handleClick (e) {
    e.preventDefault()
    menuMobile.classList.add('open')
  }
})
