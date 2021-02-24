// VARIABLES

const burger = document.querySelector('.burger');
let burgerState = false;


// EVENTOS

burger.addEventListener('click', accionBurger);


// FUNCIONES

function accionBurger(e){

  
  if(e.target.nodeName === 'I' || e.target.nodeName === 'i'){
    
    if(burgerState === false){
      burger.nextElementSibling.classList.add('slide-rigth');
      burger.parentElement.classList.add('header-act');
      burgerState = true;
    }else {
      burger.nextElementSibling.classList.remove('slide-rigth'); 
      burger.parentElement.classList.remove('header-act')   
      burgerState = false;
    }
  }

  
}