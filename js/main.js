'use strict';


let links = document.querySelectorAll('.link-section');
let lis = document.querySelectorAll('.item');

function scrollSpy(e) {
  let item = e.currentTarget;

  for (let i = 0; i < lis.length; i++) {
    lis[i].classList.remove('item--check');
  }
  item.parentElement.classList.add('item--check');
}


for (let i = 0; i < links.length; i++) {

  links[i].addEventListener('click', scrollSpy);
}











     



