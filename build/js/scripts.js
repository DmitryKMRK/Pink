var toggle = document.querySelector('.header__toggle');
var header = document.querySelector('.header__top');
var menu = document.querySelector('.header__nav');
var state = 'close';

menu.classList.remove('header__nav--open');
toggle.classList.remove('header__toggle--nojs');
header.classList.remove('header__top--open');

toggle.addEventListener('click', function() {
  if(state === 'close') {
    header.classList.add('header__top--open');
    menu.classList.add('header__nav--open');
    toggle.classList.add('header__toggle--open');
    state = 'open';
  } else {
    header.classList.remove('header__top--open');
    menu.classList.remove('header__nav--open');
    toggle.classList.remove('header__toggle--open');
    state = 'close';
  }
});
