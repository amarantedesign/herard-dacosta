//- import offside from 'offside-js';
//- import Glide from '@glidejs/glide';
import 'lazysizes';

const toggleMenu = document.querySelector(".navigation button");
const menu = document.querySelector(".navigation #menu");

toggleMenu.addEventListener("click", function () {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  toggleMenu.setAttribute("aria-expanded", !open);
  toggleMenu.classList.toggle('is-active');
  menu.hidden = !menu.hidden;
});

//document.querySelector(".col-overflow").classList.toggle('close');
var triggersOverflow = Array.from(document.querySelectorAll('.col-overflow'));

triggersOverflow.forEach( function(el) {
  
  el.addEventListener("click", function() {
    el.classList.toggle('close');
  });
});

/*
window.addEventListener('click', function (ev) {
  console.log(ev.target)
  var elm = ev.target;

  if (triggers.includes(elm)) {
    elm.classList.toggle('close');
  }
}, false);
*/
