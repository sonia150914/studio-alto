document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------------------------MENU MOBILE------------------------------------------------------------------------------------ */

  var burgerMenu = document.getElementById('burgerMenu')
  var menuMobile = document.querySelector('.menu-mobile')
  var crossBtn = document.getElementById('crossBtn')
  var body = document.body;

  burgerMenu.addEventListener('click', handleOpenMenu)
  crossBtn.addEventListener('click', handleCloseMenu)

  function handleOpenMenu (e) {
    e.preventDefault()
    menuMobile.classList.add('open')
    body.classList.add('scroll-locked');
  }

  function handleCloseMenu (e) {
    e.preventDefault()
    menuMobile.classList.remove('open')
    body.classList.remove('scroll-locked');
  }

  /* ------------------------------------------------------------------------------------SLIDER------------------------------------------------------------------------------------ */

  var next = document.querySelector('.next');
  console.log("NEXT", next);
  var prev = document.querySelector('.prev');
  console.log("Prev", prev);

  var slider = document.querySelector('.slider');
  console.log("slider", slider);


  var elementsCount = 5;
  var current = 1;
  var slideWidth = 400;
  var shift = 0;



  next.addEventListener('click', function() {
console.log("next button clicked")
    if (current < elementsCount) {
      shift += slideWidth;
      slider.style.transform = `translateX(-${shift}px)`;
      current++;
    } else {
      shift = 0;
      current = 1;
      slider.style.transform = `translateX(${shift}px)`;
    };
  });

  prev.addEventListener('click', function() {
    console.log("previous button clicked")
    if (current > 1) {
      slider.classList.toggle('move');
      shift -= slideWidth;
      current--;
      slider.style.transform = `translateX(-${shift}px)`;
    } else if (current === 1) {
      shift = elementsCount * slideWidth - slideWidth;
      slider.classList.toggle('move');
      slider.style.transform = `translateX(-${shift}px)`;
      current = elementsCount;
    };
  });


})
