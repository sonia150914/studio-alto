document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------------------------MENU MOBILE------------------------------------------------------------------------------------ */
  var burgerMenu = document.getElementById('burgerMenu')
  var menuMobile = document.querySelector('.menu-mobile')
  var crossBtn = document.getElementById('crossBtn')

  /*var slide = new Array("./assets/projet1.jpg", "./assets/projet2.jpg", "./assets/projet3.jpg",);
  var numero = 0;

    function ChangeSlide(sens) {
        numero = numero + sens;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            numero = 0;
        document.getElementById('slide').src = slide[numero];
    }*/



  burgerMenu.addEventListener('click', handleOpenMenu)
  crossBtn.addEventListener('click', handleCloseMenu)




    /*menuMobile.addEventListener('sroll', onScrolling)


    function onScrolling (e) {
      e.preventDefault()
      burgerMenu.classList.add('scroll')
    }*/



  function handleOpenMenu (e) {
    e.preventDefault()
    menuMobile.classList.add('open')
  }

  function handleCloseMenu (e) {
    e.preventDefault()
    menuMobile.classList.remove('open')

  }



});
