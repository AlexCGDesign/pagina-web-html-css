const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

const modal = document.querySelector('.modal');
const modalButtonClose = document.querySelector('.modal__close');

menu.addEventListener('click', function(){

    menuList.classList.toggle('nav__list--show');

});

links.forEach(function(link){

    link.addEventListener('click', function(){

        menuList.classList.remove('nav__list--show');

    })

});

// MODAL

// Se ejecuta cuando se carga el DOM
document.addEventListener('DOMContentLoaded', ()=>{
    modal.classList.add('modal--visible');

    modalButtonClose.addEventListener('click', ()=>{
        modal.classList.remove('modal--visible');
    });
});