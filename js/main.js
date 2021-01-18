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

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const slider = document.querySelector('.slider');

  let elementsCount = 5;
  let current = 1;
  let slideWidth = 400;
  let shift = 0;

  next.addEventListener('click', () => {
    if (current < elementsCount) {
      slider.classList.toggle('move');
      shift += slideWidth;
      slider.style.transform = `translateX(-${shift}px)`;
      current++;
    } else {
      shift = 0;
      current = 1;
      slider.style.transform = `translateX(${shift}px)`;
    };
  });

  prev.addEventListener('click', () => {
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
