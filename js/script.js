// VARIABLES

const burger = document.querySelector('.burger');
let burgerState = false;


// EVENTOS

burger.addEventListener('click', accionBurger);


// FUNCIONES

function accionBurger(){
  if(burgerState === false){
    burger.nextElementSibling.classList.add('slide-rigth');
    burgerState = true;
  }else {
    burger.nextElementSibling.classList.remove('slide-rigth');    
    burgerState = false;
  }
}