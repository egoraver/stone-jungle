var menuButton = document.querySelector('.menu-header');
var menu = document.querySelector('.header-more');
menuButton.addEventListener('click',function (){
    menuButton.classList.toggle('menu-header-active');
    console.log('клик');
    menu.classList.toggle('header-more-active');
})