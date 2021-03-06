'use strict';


let links = document.querySelectorAll('.link-section');
let sections = document.querySelectorAll('.section');
let objSections = {};
let titleSection1 = document.querySelector('.container--sect1');
let titleSection2 = document.querySelector('.container--sect2');
let titleSection3 = document.querySelector('.container--sect3');
let titleSection4 = document.querySelector('.container--sect4');



for (let i = 0; i < sections.length; i++) {
  objSections[sections[i].id] = sections[i].offsetTop;
}

window.onload = function () {
  titleSection1.classList.add('show');
};

window.addEventListener('scroll', function (e) {

  scrollSpy(e);
  showDiv(e);

});


function scrollSpy(e) {

  e.preventDefault();
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  for (let i in objSections) {
    if (objSections[i] <= scrollPosition + 1) {
      for (let j = 0; j < links.length; j++) {

        links[j].parentElement.classList.remove('item--check');
        if (links[j].getAttribute('data-section') === i) {

          links[j].parentElement.classList.add('item--check');
        }

      }

    }
  }
}


function showDiv() {

  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
 


  if (scrollPosition >= 400) {
    titleSection2.classList.add('show');
  } else if (scrollPosition === 0) {
    titleSection2.classList.remove('show');
  }

  if (scrollPosition >= 1100) {
    titleSection3.classList.add('show');
  } else if (scrollPosition === 0) {
    titleSection3.classList.remove('show');
  }

  if (scrollPosition >= 2100) {
    titleSection4.classList.add('show');
  } else if (scrollPosition === 0) {
    titleSection4.classList.remove('show');
  }


}
