document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------------------------MENU MOBILE------------------------------------------------------------------------------------ */

  var burgerMenu = document.getElementById('burgerMenu')
  var menuMobile = document.querySelector('.menu-mobile')
  var crossBtn = document.getElementById('crossBtn')
  var body = document.body

  burgerMenu.addEventListener('click', handleOpenMenu)
  crossBtn.addEventListener('click', handleCloseMenu)

  function handleOpenMenu (e) {
    e.preventDefault()
    menuMobile.classList.add('open')
    body.classList.add('scroll-locked')
  }

  function handleCloseMenu (e) {
    e.preventDefault()
    menuMobile.classList.remove('open')
    body.classList.remove('scroll-locked')
  }

  var slider = document.querySelector('.slider')

  var slideIndex = 0

  var nextBtn = document.getElementById('slideShowNextBtn')
  var previousBtn = document.getElementById('slideShowPreviousBtn')
  var slides = document.getElementsByClassName('mySlides')

  function initSlider () {
    //TODO: Optimiser cette fonction pour cacher tous les slides sauf le premier
    var i
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[0].style.display = 'block'
  }

  //TODO gérer le cas de la première et de la dernière image: bloquer les btn quand on arrive à la fin et aussi au début
  function showNextSlide () {

    slides[slideIndex].style.display = 'none'

    slideIndex++
    // if (slideIndex > slides.length) {
    //   slideIndex = 1
    // }
    slides[slideIndex].style.display = 'block'
  }

  function showPreviousSlide () {

    slides[slideIndex].style.display = 'none'
    // slideIndex++
    // if (slideIndex > slides.length) {
    //   slideIndex = 1
    // }
    slideIndex--
    slides[slideIndex].style.display = 'block'
  }

  nextBtn.addEventListener('click', showNextSlide)

  previousBtn.addEventListener('click', showPreviousSlide)

  initSlider()

})
