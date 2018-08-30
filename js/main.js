'use strict';


let links = document.querySelectorAll('.link-section');
let lis = document.querySelectorAll('.item');
let sections = document.querySelectorAll('.section');
let objSections = {};

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



for(let i = 0; i < sections.length; i++){
    console.dir(sections[i])
    objSections[sections[i].id] = sections[i].offsetTop;
    //objSections[i].position = sections[i].offsetTop;
    //console.log(objSections)    
}


window.addEventListener('scroll', function(e){
 
  let  scrollPosition = document.documentElement.scrollTop;
 

  for(let i in objSections){
    if(objSections[i] <= scrollPosition){
      //console.dir(objSections[i])
      for(let j=0; j<links.length; j++){
        console.log("atribute",typeof(links[j].getAttribute('data-section')))
        console.log("i",i)
        links[j].parentElement.classList.remove('item--check');
        if(links[j].getAttribute('data-section') === i){
          
          links[j].parentElement.classList.add('item--check');
        }

        
      }
      
    }
  }

});




     



