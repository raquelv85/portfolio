'use strict';


let links = document.querySelectorAll('.link-section');
let lis = document.querySelectorAll('.item');
let sections = document.querySelectorAll('.section');
let objSections = {};
let titleSection2 = document.querySelector('.container--sect2');
let titleSection3 = document.querySelector('.container--sect3');
let titleSection4 = document.querySelector('.container--sect4');



// function scrollSpy(e) {
//   let item = e.currentTarget;

//   for (let i = 0; i < lis.length; i++) {
//     lis[i].classList.remove('item--check');
//   }
//   item.parentElement.classList.add('item--check');
// }


// for (let i = 0; i < links.length; i++) {

//   links[i].addEventListener('click', scrollSpy);
// }



for (let i = 0; i < sections.length; i++) {
  objSections[sections[i].id] = sections[i].offsetTop;
  console.log(objSections)
}


window.addEventListener('scroll', function (e) {

  scrollSpy(e);
  showDiv(e);

});


function scrollSpy(e){


  e.preventDefault();
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
  for (let i in objSections) {
    if (objSections[i] <= scrollPosition) {
      for (let j = 0; j < links.length; j++) {

        links[j].parentElement.classList.remove('item--check');
        if (links[j].getAttribute('data-section') === i) {

          links[j].parentElement.classList.add('item--check');
        }

      }

    }
  }
}

function showDiv(e){

  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  console.log("showdiv", scrollPosition)
  
    if(scrollPosition >= 400){
      titleSection2.classList.add('show')
    }else if(scrollPosition === 0){
      titleSection2.classList.remove('show')
    }

    if(scrollPosition >= 1100){
      titleSection3.classList.add('show')
    }else if(scrollPosition === 0){
      titleSection3.classList.remove('show')
    }

    if(scrollPosition >= 2100){
      titleSection4.classList.add('show')
    }else if(scrollPosition === 0){
      titleSection4.classList.remove('show')
    }
  

}